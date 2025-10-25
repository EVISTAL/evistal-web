// Service Worker for EVISTAL PWA
const CACHE_NAME = 'evistal-v1.0.0';
const urlsToCache = [
    '/',
    '/index.html',
    '/css/style.css',
    '/js/script.js',
    '/manifest.json',
    'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap',
    'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css'
];

// Install event - cache resources
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                console.log('Opened cache');
                return cache.addAll(urlsToCache);
            })
            .catch(error => {
                console.log('Cache install failed:', error);
            })
    );
});

// Fetch event - serve from cache
self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                // Return cached version or fetch from network
                if (response) {
                    return response;
                }
                return fetch(event.request);
            })
            .catch(error => {
                console.log('Fetch failed:', error);
                // Return offline page if available
                if (event.request.destination === 'document') {
                    return caches.match('/index.html');
                }
            })
    );
});

// Activate event - clean up old caches
self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cacheName => {
                    if (cacheName !== CACHE_NAME) {
                        console.log('Deleting old cache:', cacheName);
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});

// Background sync for form submissions
self.addEventListener('sync', event => {
    if (event.tag === 'contact-form') {
        event.waitUntil(syncContactForm());
    }
    if (event.tag === 'newsletter-form') {
        event.waitUntil(syncNewsletterForm());
    }
});

// Sync contact form data
function syncContactForm() {
    return new Promise((resolve) => {
        // Get form data from IndexedDB or localStorage
        const formData = JSON.parse(localStorage.getItem('contactFormData') || '[]');
        
        if (formData.length > 0) {
            // Send data to server
            formData.forEach(data => {
                fetch('/api/contact', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(data)
                }).then(response => {
                    if (response.ok) {
                        // Remove from local storage after successful send
                        localStorage.removeItem('contactFormData');
                    }
                }).catch(error => {
                    console.log('Contact form sync failed:', error);
                });
            });
        }
        resolve();
    });
}

// Sync newsletter form data
function syncNewsletterForm() {
    return new Promise((resolve) => {
        const emailData = JSON.parse(localStorage.getItem('newsletterData') || '[]');
        
        if (emailData.length > 0) {
            emailData.forEach(data => {
                fetch('/api/newsletter', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(data)
                }).then(response => {
                    if (response.ok) {
                        localStorage.removeItem('newsletterData');
                    }
                }).catch(error => {
                    console.log('Newsletter sync failed:', error);
                });
            });
        }
        resolve();
    });
}

// Push notification handling
self.addEventListener('push', event => {
    const options = {
        body: event.data ? event.data.text() : 'EVISTAL\'dan yeni bir bildirim!',
        icon: '/images/icon-192x192.png',
        badge: '/images/badge-72x72.png',
        vibrate: [100, 50, 100],
        data: {
            dateOfArrival: Date.now(),
            primaryKey: 1
        },
        actions: [
            {
                action: 'explore',
                title: 'İncele',
                icon: '/images/checkmark.png'
            },
            {
                action: 'close',
                title: 'Kapat',
                icon: '/images/xmark.png'
            }
        ]
    };

    event.waitUntil(
        self.registration.showNotification('EVISTAL', options)
    );
});

// Notification click handling
self.addEventListener('notificationclick', event => {
    event.notification.close();

    if (event.action === 'explore') {
        event.waitUntil(
            clients.openWindow('/')
        );
    }
});
