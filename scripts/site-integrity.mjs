import assert from 'node:assert/strict';
import { access, readFile } from 'node:fs/promises';

const html = await readFile('index.html', 'utf8');
const sitemap = await readFile('public/sitemap.xml', 'utf8');
const robots = await readFile('public/robots.txt', 'utf8');
const canonical = html.match(/<link rel="canonical" href="([^"]+)"/)?.[1];
const openGraphUrl = html.match(/<meta property="og:url" content="([^"]+)"/)?.[1];
const openGraphImage = html.match(/<meta property="og:image" content="([^"]+)"/)?.[1];
const twitterImage = html.match(/<meta name="twitter:image" content="([^"]+)"/)?.[1];
const sitemapUrl = sitemap.match(/<loc>([^<]+)<\/loc>/)?.[1];
const robotsSitemap = robots.match(/^Sitemap:\s*(\S+)$/m)?.[1];
const jsonLdText = html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/)?.[1];

assert.match(html, /<html lang="id"/, 'Document language must be Indonesian');
assert.ok(canonical, 'Canonical URL must be present');
assert.equal(openGraphUrl, canonical, 'Open Graph URL must match canonical URL');
assert.equal(sitemapUrl, canonical, 'Sitemap URL must match canonical URL');
assert.equal(robotsSitemap, new URL('sitemap.xml', canonical).href, 'robots.txt must reference the canonical sitemap');
assert.ok(openGraphImage, 'Open Graph image must be present');
assert.equal(twitterImage, openGraphImage, 'Twitter and Open Graph images must match');
assert.ok(jsonLdText, 'JSON-LD structured data must be present');
const jsonLd = JSON.parse(jsonLdText);
assert.equal(jsonLd['@type'], 'WebSite', 'Structured data must describe a WebSite');
assert.equal(jsonLd.url, canonical, 'Structured data URL must match canonical URL');
const imageUrl = new URL(openGraphImage);
assert.equal(imageUrl.origin, new URL(canonical).origin, 'Social preview image must be hosted on the canonical site origin');
const imagePath = decodeURIComponent(imageUrl.pathname).replace(/^\/DramaArena5102\//, '');
await access(`public/${imagePath}`);

console.log('Site integrity passed: language, canonical URL, social metadata, JSON-LD, sitemap, robots and social image.');
