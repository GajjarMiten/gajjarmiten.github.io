'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "bcf111881721926d9b143fdc5ab6dd11",
"assets/assets/blossom.png": "e4c905b39c2355bbb4e787a0bc1509bb",
"assets/assets/clips/b1.jpeg": "b465ec8a523f74505df694026de9adf2",
"assets/assets/clips/b2.jpeg": "73ddaaad59f28e006b549877d0532816",
"assets/assets/clips/b3.jpeg": "22ee2a2c022eaa479fba82459acee175",
"assets/assets/clips/d1.jpg": "2167b6536e3e0e516ec607a4553b7f05",
"assets/assets/clips/d2.jpg": "af78ef377379669f9263bbdaf6ad944f",
"assets/assets/clips/d3.jpg": "ad07b854269868f63e735b6670d45869",
"assets/assets/clips/d4.png": "7ae17b123c9b7fbeb16101ed1d0d12af",
"assets/assets/clips/d5.jpg": "7f9e34202aaca35261ec7ddbc5b6e783",
"assets/assets/clips/g1.png": "1173e4e8ca713d929d631f092cd5ab3c",
"assets/assets/clips/g2.png": "8e9b8e1e496278f98a8a85ac4720c692",
"assets/assets/clips/g3.jpg": "6bcf0d7cdf5027a1c1c4b48499e08279",
"assets/assets/clips/j1.jpeg": "b7888362e71cac7f5b438cc5a5b66f56",
"assets/assets/clips/j2.jpeg": "75ab4c9c218a65767d70bd62ac02e117",
"assets/assets/clips/j3.jpeg": "12c587d173fe3a9fe749490d7a95c3e4",
"assets/assets/clips/m1.jpeg": "8f85eab0ea45dc44ac668932da6f3372",
"assets/assets/clips/m2.jpeg": "bcf0efe967162714833cd8c1054c0cc5",
"assets/assets/clips/m3.jpeg": "6dc3db47e3e92c531944cfe1aa9e179f",
"assets/assets/clips/m4.jpeg": "9d570113ee7cd87fcaffa95cc152cff9",
"assets/assets/clips/p1.png": "82744577ea24a0847486b95997976274",
"assets/assets/clips/p2.jpg": "cd363dc397f51c5fd0ecd9c1d3888fb2",
"assets/assets/cn.png": "c68e114628dbda359ff10e91d1d19414",
"assets/assets/dexter.png": "c6087fac7c41df965d62a781768965bd",
"assets/assets/grim.png": "d36a7e9459952de2b4218f22b6717038",
"assets/assets/gumball.png": "1586bc8a71426616555fb1a40ad94025",
"assets/assets/johny.png": "69436b40d4befbaf667079d23a33953a",
"assets/assets/mr.bean.png": "cb0f52e7536878296f0e2148b3e9473c",
"assets/FontManifest.json": "7aaf3996738086bbd796613e14ef9e45",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "28ced906c2dee00196ca37a3ed18f835",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"assets/packages/flutter_icons/fonts/AntDesign.ttf": "3a2ba31570920eeb9b1d217cabe58315",
"assets/packages/flutter_icons/fonts/Entypo.ttf": "744ce60078c17d86006dd0edabcd59a7",
"assets/packages/flutter_icons/fonts/EvilIcons.ttf": "140c53a7643ea949007aa9a282153849",
"assets/packages/flutter_icons/fonts/Feather.ttf": "6beba7e6834963f7f171d3bdd075c915",
"assets/packages/flutter_icons/fonts/FontAwesome.ttf": "b06871f281fee6b241d60582ae9369b9",
"assets/packages/flutter_icons/fonts/FontAwesome5_Brands.ttf": "c39278f7abfc798a241551194f55e29f",
"assets/packages/flutter_icons/fonts/FontAwesome5_Regular.ttf": "f6c6f6c8cb7784254ad00056f6fbd74e",
"assets/packages/flutter_icons/fonts/FontAwesome5_Solid.ttf": "b70cea0339374107969eb53e5b1f603f",
"assets/packages/flutter_icons/fonts/Foundation.ttf": "e20945d7c929279ef7a6f1db184a4470",
"assets/packages/flutter_icons/fonts/Ionicons.ttf": "b2e0fc821c6886fb3940f85a3320003e",
"assets/packages/flutter_icons/fonts/MaterialCommunityIcons.ttf": "3c851d60ad5ef3f2fe43ebd263490d78",
"assets/packages/flutter_icons/fonts/MaterialIcons.ttf": "a37b0c01c0baf1888ca812cc0508f6e2",
"assets/packages/flutter_icons/fonts/Octicons.ttf": "73b8cff012825060b308d2162f31dbb2",
"assets/packages/flutter_icons/fonts/SimpleLineIcons.ttf": "d2285965fe34b05465047401b8595dd0",
"assets/packages/flutter_icons/fonts/weathericons.ttf": "4618f0de2a818e7ad3fe880e0b74d04a",
"assets/packages/flutter_icons/fonts/Zocial.ttf": "5cdf883b18a5651a29a4d1ef276d2457",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "9a358be897709faf4e8a2dfe0c999e48",
"/": "9a358be897709faf4e8a2dfe0c999e48",
"main.dart.js": "601660eccf21af78c8455d1ab27e6070",
"manifest.json": "88a7481df93ce9759716cd9cefd2dd10",
"version.json": "1b632a76ec40f6adffc40f51a5231ee3"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
