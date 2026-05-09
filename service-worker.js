const CACHE_NAME = 'civique-exam-v1.4';
const urlsToCache = [
  '/',
  '/index.html',
  '/admin.html',
  '/admin.css',
  '/admin.js',
  '/student.html',
  '/teacher.html',
  '/cours.html',
  '/test-gratuit.html',
  '/manifest.json',
  '/supabase-config.js',
  '/icons/icon-72x72.png',
  '/icons/icon-96x96.png',
  '/icons/icon-128x128.png',
  '/icons/icon-144x144.png',
  '/icons/icon-152x152.png',
  '/icons/icon-192x192.png',
  '/icons/icon-384x384.png',
  '/icons/icon-512x512.png'
];

// 安装 Service Worker
self.addEventListener('install', event => {
  console.log('Service Worker: 安装中...');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Service Worker: 缓存文件');
        return cache.addAll(urlsToCache);
      })
      .catch(err => {
        console.error('缓存失败:', err);
      })
      .then(() => self.skipWaiting())
  );
});

// 激活 Service Worker
self.addEventListener('activate', event => {
  console.log('Service Worker: 激活中...');
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cache => {
          if (cache !== CACHE_NAME) {
            console.log('Service Worker: 删除旧缓存', cache);
            return caches.delete(cache);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// 拦截请求
self.addEventListener('fetch', event => {
  // 跳过非 GET 请求
  if (event.request.method !== 'GET') {
    return;
  }
  
  // 跳过 Supabase API 请求
  if (event.request.url.includes('supabase.co')) {
    return;
  }
  
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        if (response) {
          // 返回缓存
          return response;
        }
        
        // 从网络获取
        return fetch(event.request)
          .then(response => {
            // 检查是否有效
            if (!response || response.status !== 200) {
              return response;
            }
            
            // 只缓存同源请求
            if (event.request.url.startsWith(self.location.origin)) {
              const responseToCache = response.clone();
              caches.open(CACHE_NAME)
                .then(cache => {
                  cache.put(event.request, responseToCache);
                });
            }
            return response;
          })
          .catch(() => {
            // 离线时返回缓存的首页
            return caches.match('/index.html');
          });
      })
  );
});

// 推送通知
self.addEventListener('push', event => {
  const options = {
    body: event.data ? event.data.text() : 'Nouvelle notification',
    icon: '/icons/icon-192x192.png',
    badge: '/icons/icon-72x72.png',
    vibrate: [100, 50, 100],
    data: {
      dateOfArrival: Date.now(),
      primaryKey: 1
    },
    actions: [
      {
        action: 'explore',
        title: 'Voir',
        icon: '/icons/icon-72x72.png'
      },
      {
        action: 'close',
        title: 'Fermer',
        icon: '/icons/icon-72x72.png'
      }
    ]
  };
  
  event.waitUntil(
    self.registration.showNotification('Mille Voiles', options)
  );
});

// 通知点击
self.addEventListener('notificationclick', event => {
  console.log('Notification click reçu');
  event.notification.close();
  
  if (event.action === 'explore') {
    event.waitUntil(
      clients.openWindow('/')
    );
  } else {
    event.waitUntil(
      clients.openWindow('/')
    );
  }
});
