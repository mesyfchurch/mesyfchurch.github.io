const CACHE_NAME = 'mesyf-church-v1';
const ASSETS = [
  '/',
  '/index.html',
  '/manifest.json',
  '/images/MESYF-LOGO-transparent.png',
  '/images/padre.png',
  '/images/gracias.mp3'
];

// Instalar el Service Worker y almacenar recursos en caché
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    }).then(() => self.skipWaiting())
  );
});

// Activar el Service Worker
self.addEventListener('activate', (e) => {
  e.waitUntil(self.clients.claim());
});

// Estrategia de red: Intentar cargar de internet primero, si falla usar caché
self.addEventListener('fetch', (e) => {
  e.respondWith(
    fetch(e.request).catch(() => {
      return caches.match(e.request);
    })
  );
});

