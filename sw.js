// Service Worker para My Little Diner TPV
// Versi贸n del cache
const CACHE_VERSION = 'v1.0.0';
const CACHE_NAME = `ruben-burguer-tpv-${CACHE_VERSION}`;

// Recursos a cachear
const urlsToCache = [
  './index.html',
  './manifest.json'
];

// Instalaci贸n del Service Worker
self.addEventListener('install', (event) => {
  console.log('[SW] Instalando Service Worker...', CACHE_VERSION);
  
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('[SW] Cacheando archivos de la aplicaci贸n');
        return cache.addAll(urlsToCache);
      })
      .then(() => {
        console.log('[SW] Archivos cacheados correctamente');
        // Forzar la activaci贸n inmediata
        return self.skipWaiting();
      })
      .catch((error) => {
        console.error('[SW] Error al cachear archivos:', error);
      })
  );
});

// Activaci贸n del Service Worker
self.addEventListener('activate', (event) => {
  console.log('[SW] Activando Service Worker...', CACHE_VERSION);
  
  event.waitUntil(
    caches.keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cacheName) => {
            if (cacheName !== CACHE_NAME) {
              console.log('[SW] Eliminando cache antigua:', cacheName);
              return caches.delete(cacheName);
            }
          })
        );
      })
      .then(() => {
        console.log('[SW] Service Worker activado');
        // Tomar control de todas las p谩ginas inmediatamente
        return self.clients.claim();
      })
  );
});

// Estrategia de cach茅: Network First, fallback a Cache
self.addEventListener('fetch', (event) => {
  // Solo cachear peticiones GET
  if (event.request.method !== 'GET') {
    return;
  }

  // Ignorar peticiones a dominios externos (excepto fonts/CDNs comunes)
  const url = new URL(event.request.url);
  if (url.origin !== self.location.origin) {
    return;
  }

  event.respondWith(
    // Intentar obtener del network primero
    fetch(event.request)
      .then((response) => {
        // Si la respuesta es v谩lida, clonarla y guardarla en cache
        if (response && response.status === 200) {
          const responseToCache = response.clone();
          
          caches.open(CACHE_NAME)
            .then((cache) => {
              cache.put(event.request, responseToCache);
            });
        }
        
        return response;
      })
      .catch(() => {
        // Si falla el network, intentar obtener del cache
        return caches.match(event.request)
          .then((cachedResponse) => {
            if (cachedResponse) {
              console.log('[SW] Sirviendo desde cache:', event.request.url);
              return cachedResponse;
            }
            
            // Si no est谩 en cache y es una navegaci贸n, devolver index.html
            if (event.request.mode === 'navigate') {
              return caches.match('./index.html');
            }
            
            // Para otros recursos, devolver una respuesta vac铆a
            return new Response('Recurso no disponible offline', {
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

// Mensajes desde la aplicaci贸n
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    console.log('[SW] Recibido mensaje SKIP_WAITING');
    self.skipWaiting();
  }
  
  if (event.data && event.data.type === 'CLEAR_CACHE') {
    console.log('[SW] Limpiando cache...');
    event.waitUntil(
      caches.keys().then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cacheName) => caches.delete(cacheName))
        );
      }).then(() => {
        console.log('[SW] Cache limpiada');
        return self.clients.matchAll();
      }).then((clients) => {
        clients.forEach((client) => {
          client.postMessage({
            type: 'CACHE_CLEARED'
          });
        });
      })
    );
  }
});

// Manejo de sincronizaci贸n en segundo plano (para futuras implementaciones)
self.addEventListener('sync', (event) => {
  console.log('[SW] Sincronizaci贸n en segundo plano:', event.tag);
  
  if (event.tag === 'sync-orders') {
    event.waitUntil(
      // Aqu铆 se podr铆a implementar l贸gica para sincronizar pedidos
      console.log('[SW] Sincronizando pedidos...')
    );
  }
});

// Notificaciones push (para futuras implementaciones)
self.addEventListener('push', (event) => {
  console.log('[SW] Push recibido:', event);
  
  const options = {
    body: event.data ? event.data.text() : 'Nueva notificaci贸n',
    icon: 'data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 100 100\'%3E%3Ctext y=\'0.9em\' font-size=\'90\'%3E%F0%9F%8D%94%3C/text%3E%3C/svg%3E',
    badge: 'data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 100 100\'%3E%3Ctext y=\'0.9em\' font-size=\'90\'%3E%F0%9F%8D%94%3C/text%3E%3C/svg%3E',
    vibrate: [200, 100, 200],
    tag: 'tpv-notification',
    requireInteraction: false
  };
  
  event.waitUntil(
    self.registration.showNotification('My Little Diner TPV', options)
  );
});

// Click en notificaciones
self.addEventListener('notificationclick', (event) => {
  console.log('[SW] Click en notificaci贸n');
  
  event.notification.close();
  
  event.waitUntil(
    clients.matchAll({ type: 'window', includeUncontrolled: true })
      .then((clientList) => {
        // Si hay una ventana abierta, enfocarla
        for (let i = 0; i < clientList.length; i++) {
          const client = clientList[i];
          if (client.url.includes(self.location.origin) && 'focus' in client) {
            return client.focus();
          }
        }
        // Si no hay ventana abierta, abrir una nueva
        if (clients.openWindow) {
          return clients.openWindow('./index.html');
        }
      })
  );
});

console.log('[SW] Service Worker cargado', CACHE_VERSION);
