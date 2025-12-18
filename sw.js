// Service Worker para My Little Diner TPV
const CACHE_NAME = 'my-little-diner-v9.0';
const urlsToCache = [
  './',
  './index.html',
  './manifest.json',
  './icon-192.svg',
  './icon-512.svg'
];

// Instalación del Service Worker
self.addEventListener('install', event => {
  console.log('🔧 Service Worker: Instalando...');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('📦 Service Worker: Cache abierto');
        return cache.addAll(urlsToCache);
      })
      .catch(err => {
        console.error('❌ Error al abrir cache:', err);
      })
  );
  // Forzar la activación inmediata
  self.skipWaiting();
});

// Activación del Service Worker
self.addEventListener('activate', event => {
  console.log('✅ Service Worker: Activando...');
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            console.log('🗑️ Service Worker: Eliminando cache antiguo:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  // Tomar control de todas las páginas inmediatamente
  return self.clients.claim();
});

// Interceptar peticiones de red
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Cache hit - devolver respuesta desde cache
        if (response) {
          return response;
        }
        
        // Si no está en cache, hacer petición de red
        return fetch(event.request).then(response => {
          // Verificar si la respuesta es válida
          if (!response || (response.status < 200 || response.status >= 300) || 
              (response.type !== 'basic' && response.type !== 'cors')) {
            return response;
          }
          
          // Clonar la respuesta
          const responseToCache = response.clone();
          
          // Guardar en cache para futuras peticiones
          caches.open(CACHE_NAME)
            .then(cache => {
              cache.put(event.request, responseToCache);
            });
          
          return response;
        }).catch(err => {
          console.error('❌ Error en fetch:', err);
          // Aquí podrías devolver una página offline personalizada
          return new Response('Offline - No hay conexión a internet', {
            status: 503,
            statusText: 'Service Unavailable',
            headers: new Headers({
              'Content-Type': 'text/plain'
            })
          });
        });
      })
  );
});

// Escuchar mensajes desde el cliente
self.addEventListener('message', event => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

console.log('🍔 Service Worker de My Little Diner cargado correctamente');
