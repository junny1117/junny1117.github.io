'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "693635b5258fe5f1cda720cf224f158c",
"assets/AssetManifest.bin.json": "69a99f98c8b1fb8111c5fb961769fcd8",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "75663f53fb5a80374c732bd4ae6d9398",
"assets/NOTICES": "d1dc8895a8fe1a2a6a0d945f5d7aa65f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "a399a30e00f4398acf7d6f8c9cfa308d",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"icons/Icon-192.png": "7f50eb460456c08993d02089c76eba13",
"icons/Icon-512.png": "9102061f439a6e498977a9094fe114aa",
"icons/Icon-maskable-192.png": "7f50eb460456c08993d02089c76eba13",
"icons/Icon-maskable-512.png": "9102061f439a6e498977a9094fe114aa",
"index.html": "2701513164a0c5fbeaf5da93e0460ab2",
"/": "2701513164a0c5fbeaf5da93e0460ab2",
"main.dart.js": "352433a1be733483be41f99e014eab3c",
"manifest.json": "40ed6ac43e28f85473bbe04f781b48e9",
"version.json": "5c8bddb972a7e6c25106e76c8721f388",
"web/assets/AssetManifest.bin": "693635b5258fe5f1cda720cf224f158c",
"web/assets/AssetManifest.bin.json": "69a99f98c8b1fb8111c5fb961769fcd8",
"web/assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"web/assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"web/assets/fonts/MaterialIcons-Regular.otf": "75663f53fb5a80374c732bd4ae6d9398",
"web/assets/NOTICES": "d1dc8895a8fe1a2a6a0d945f5d7aa65f",
"web/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"web/assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"web/canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"web/canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"web/canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"web/canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"web/canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"web/canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"web/canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"web/canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"web/canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"web/canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"web/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"web/flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"web/icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"web/icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"web/icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"web/icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"web/index.html": "1604233b618d452a1d989561cfc3b098",
"web/main.dart.js": "870496be07a1a9e8f533b260a070a51c",
"web/manifest.json": "40ed6ac43e28f85473bbe04f781b48e9",
"web/version.json": "5c8bddb972a7e6c25106e76c8721f388",
"web/web/assets/AssetManifest.bin": "693635b5258fe5f1cda720cf224f158c",
"web/web/assets/AssetManifest.bin.json": "69a99f98c8b1fb8111c5fb961769fcd8",
"web/web/assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"web/web/assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"web/web/assets/fonts/MaterialIcons-Regular.otf": "75663f53fb5a80374c732bd4ae6d9398",
"web/web/assets/NOTICES": "d1dc8895a8fe1a2a6a0d945f5d7aa65f",
"web/web/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"web/web/assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"web/web/canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"web/web/canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"web/web/canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"web/web/canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"web/web/canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"web/web/canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"web/web/canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"web/web/canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"web/web/canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"web/web/canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"web/web/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"web/web/flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"web/web/icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"web/web/icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"web/web/icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"web/web/icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"web/web/index.html": "1604233b618d452a1d989561cfc3b098",
"web/web/main.dart.js": "870496be07a1a9e8f533b260a070a51c",
"web/web/manifest.json": "40ed6ac43e28f85473bbe04f781b48e9",
"web/web/version.json": "5c8bddb972a7e6c25106e76c8721f388"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
