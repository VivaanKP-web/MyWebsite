// service-worker.js

importScripts('workbox-6c3e5c38.js');

const cacheVersion = '2.0.0';
const staticCacheName = `static-${cacheVersion}`;
const dynamicCacheName = `dynamic-${cacheVersion}`;

workbox.setConfig({
    debug: false
});

// let Service Worker take control of pages ASAP
workbox.core.skipWaiting();
workbox.core.clientsClaim();

// Cache page navigations and assets
workbox.routing.registerRoute(
    ({ request }) => request.mode === 'navigate',
    new workbox.strategies.NetworkFirst({
        cacheName: staticCacheName,
        plugins: [
            new workbox.expiration.ExpirationPlugin({
                maxAgeSeconds: 24 * 60 * 60, // 24 hours
            }),
        ],
    })
);

// Cache CSS, JS, and Web Worker files
workbox.routing.registerRoute(
    ({ request }) => ['style', 'script', 'worker'].includes(request.destination),
    new workbox.strategies.StaleWhileRevalidate({
        cacheName: staticCacheName,
        plugins: [
            new workbox.expiration.ExpirationPlugin({
                maxEntries: 60,
                maxAgeSeconds: 30 * 24 * 60 * 60, // 30 days
            }),
        ],
    })
);

// Cache images
workbox.routing.registerRoute(
    ({ request }) => request.destination === 'image',
    new workbox.strategies.CacheFirst({
        cacheName: 'images',
        plugins: [
            new workbox.expiration.ExpirationPlugin({
                maxEntries: 60,
                maxAgeSeconds: 30 * 24 * 60 * 60, // 30 days
            }),
            new workbox.cacheableResponse.CacheableResponsePlugin({
                statuses: [0, 200],
            }),
        ],
    })
);

// Cache Google Fonts
workbox.routing.registerRoute(
    ({url}) => url.origin === 'https://fonts.googleapis.com' ||
               url.origin === 'https://fonts.gstatic.com',
    new workbox.strategies.StaleWhileRevalidate({
        cacheName: 'google-fonts',
        plugins: [
            new workbox.expiration.ExpirationPlugin({
                maxEntries: 30,
                maxAgeSeconds: 60 * 60 * 24 * 365, // 1 year
            }),
        ],
    })
);

// Offline fallback
workbox.routing.setCatchHandler(({ event }) => {
    switch (event.request.destination) {
        case 'document':
            return caches.match('/offline.html');
        case 'image':
            return new Response(
                `<svg role="img" aria-labelledby="offline-title" viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
                    <title id="offline-title">Offline</title>
                    <path fill="#ccc" d="M0 0h400v300H0z"/>
                    <text fill="#666" font-family="system-ui" font-size="16" text-anchor="middle" x="200" y="150">Image Offline</text>
                </svg>`,
                { headers: { 'Content-Type': 'image/svg+xml' } }
            );
        default:
            return Response.error();
    }
});

// Clean up old caches
self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((keys) => {
            return Promise.all(
                keys.filter((key) => {
                    return key.startsWith('static-') && key !== staticCacheName;
                }).map((key) => {
                    return caches.delete(key);
                })
            );
        })
    );
});

// Offline Google Analytics
workbox.googleAnalytics.initialize({
    parameterOverrides: {
        cd1: 'offline',
    },
});
