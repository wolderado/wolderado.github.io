importScripts('https://cdnjs.cloudflare.com/ajax/libs/jszip/3.10.1/jszip.min.js');

const zipCache = new Map(); // gameName → JSZip instance (or null if no zip)

self.addEventListener('install',  () => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));

self.addEventListener('fetch', event => {
    const url = new URL(event.request.url);
    const parts = url.pathname.split('/').filter(Boolean);

    // Only handle /playbrowser/GAME/...
    if (parts[0] !== 'playbrowser' || parts.length < 2) return;

    const gameName = parts[1];
    const filePath = decodeURIComponent(parts.slice(2).join('/') || 'index.html');

    event.respondWith(serve(gameName, filePath, url.origin, event.request));
});

async function serve(gameName, filePath, origin, originalRequest) {
    // Load zip if not yet cached
    if (!zipCache.has(gameName)) {
        const zipUrl = `${origin}/playbrowser/${gameName}.zip`;
        const res = await fetch(zipUrl).catch(() => null);
        if (res && res.ok) {
            const buf = await res.arrayBuffer();
            const zip = await JSZip.loadAsync(buf);
            zipCache.set(gameName, zip);
        } else {
            zipCache.set(gameName, null); // no zip — fall through
        }
    }

    const zip = zipCache.get(gameName);

    // No zip → serve the file directly from disk
    if (!zip) return fetch(originalRequest);

    // Serve from zip — try both slash styles (Windows zips use backslashes)
    const entry = zip.file(filePath)
        || zip.file(filePath.replace(/\//g, '\\'))
        || zip.file(filePath.replace(/\\/g, '/'));
    if (!entry) return new Response('Not found', { status: 404 });

    const body = await entry.async('arraybuffer');
    return new Response(body, {
        status: 200,
        headers: { 'Content-Type': mimeType(filePath) }
    });
}

function mimeType(path) {
    const ext = path.split('.').pop().toLowerCase();
    return {
        html:      'text/html; charset=utf-8',
        js:        'application/javascript',
        wasm:      'application/wasm',
        css:       'text/css',
        png:       'image/png',
        jpg:       'image/jpeg',
        jpeg:      'image/jpeg',
        gif:       'image/gif',
        svg:       'image/svg+xml',
        json:      'application/json',
        ico:       'image/x-icon',
        mp3:       'audio/mpeg',
        ogg:       'audio/ogg',
        wav:       'audio/wav',
        unityweb:  'application/octet-stream',
        data:      'application/octet-stream',
        pck:       'application/octet-stream',
    }[ext] || 'application/octet-stream';
}
