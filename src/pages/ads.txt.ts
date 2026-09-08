import type { APIRoute } from 'astro';
import { site } from '../data/site';

// Authorised sellers file for AdSense. Generated from the same config as the
// head script so the two cannot disagree; empty when ads are off.
export const GET: APIRoute = () => {
  const pub = site.ads.client.replace(/^ca-/, '');
  const body = site.ads.client ? `google.com, ${pub}, DIRECT, f08c47fec0942fa0\n` : '';
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
