import WorkboxSW from 'workbox-sw';

const workboxSW = new WorkboxSW();

// This array will be filled in with our files by the Workbox plugin
workboxSW.precache([]);

// Cache our fonts!
workboxSW.router.registerRoute('https://fonts.googleapis.com/(.*)',
  workboxSW.strategies.cacheFirst({
    cacheName: 'googleapis',
    cacheExpiration: {
      maxEntries: 20
    },
    cacheableResponse: { statuses: [0, 200] }
  })
);

workboxSW.router.registerRoute('https://www.bungie.net/common/destiny2_content/icons/(.*)',
  workboxSW.strategies.cacheFirst({
    cacheName: 'destiny2_content_icons',
    cacheExpiration: {
      maxAgeSeconds: 2592000 // 30 days in seconds
    },
    cacheableResponse: { statuses: [200] }
  })
)
