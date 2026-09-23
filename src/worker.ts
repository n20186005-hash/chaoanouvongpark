/// <reference types="@cloudflare/workers-types" />
// Cloudflare Worker: serves the static Astro build (./dist) via the ASSETS
// binding and provides a server-side, cached weather endpoint.
// Weather data is fetched from Open-Meteo (no API key required) and cached
// at the edge for ~10 minutes.

const DEFAULT_LAT = '17.9675';
const DEFAULT_LON = '102.6120';

function buildWeatherUrl(lat: string, lon: string): string {
  const params = new URLSearchParams({
    latitude: lat,
    longitude: lon,
    current: 'temperature_2m,apparent_temperature,relative_humidity_2m,weather_code,wind_speed_10m,uv_index',
    daily: 'weather_code,temperature_2m_max,temperature_2m_min,precipitation_probability_max,uv_index_max',
    forecast_days: '7',
    timezone: 'auto',
  });
  return `https://api.open-meteo.com/v1/forecast?${params.toString()}`;
}

async function handleWeather(request: Request, ctx: any): Promise<Response> {
  const url = new URL(request.url);
  const lat = url.searchParams.get('lat') || DEFAULT_LAT;
  const lon = url.searchParams.get('lon') || DEFAULT_LON;
  const apiUrl = buildWeatherUrl(lat, lon);

  const cache = caches.default;
  const cacheKey = new Request(apiUrl);

  let response = await cache.match(cacheKey);
  if (!response) {
    try {
      const upstream = await fetch(apiUrl, { cf: { cacheTtl: 600 } } as any);
      if (!upstream.ok) {
        return new Response(JSON.stringify({ error: 'upstream_unavailable' }), {
          status: 502,
          headers: { 'content-type': 'application/json' },
        });
      }
      response = new Response(upstream.body, upstream);
      response.headers.set('cache-control', 'public, max-age=300');
      ctx.waitUntil(cache.put(cacheKey, response.clone()));
    } catch (e) {
      return new Response(JSON.stringify({ error: 'fetch_failed' }), {
        status: 502,
        headers: { 'content-type': 'application/json' },
      });
    }
  }

  const headers = new Headers(response.headers);
  headers.set('content-type', 'application/json');
  headers.set('cache-control', 'public, max-age=300');
  headers.set('access-control-allow-origin', '*');
  return new Response(response.body, { status: 200, headers });
}

export default {
  async fetch(request: Request, env: any, ctx: any): Promise<Response> {
    const url = new URL(request.url);

    if (url.pathname === '/') {
      return Response.redirect(`${url.origin}/lo/`, 302);
    }

    if (url.pathname === '/api/weather') {
      return handleWeather(request, ctx);
    }

    // Serve static assets (prerendered Astro HTML, CSS, JS, images).
    return env.ASSETS.fetch(request);
  },
};
