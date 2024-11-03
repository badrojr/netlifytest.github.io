'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "f196f27220730997cd339db5a684984d",
"assets/AssetManifest.bin.json": "3e2241f1185ce76e992f06deb7cad4fe",
"assets/AssetManifest.json": "cfe0c701196d46b10f5ba6373fcf0f1d",
"assets/assets/audios/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/fonts/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/fonts/Graphology.otf": "917e46132ed769b673046cdf7fe7bc3c",
"assets/assets/fonts/Graphology_Arabic_Bold.otf": "973ecc5d4609691c9d5eca4e4877646b",
"assets/assets/fonts/Graphology_Extrabold.otf": "69385f6cb953ed37d6c154eedd70d024",
"assets/assets/fonts/Graphology_Light.otf": "c6ecfbd95d14c07e87a1da3c7b2c4bb4",
"assets/assets/fonts/Graphology_Medium.otf": "ad4159c3b9aa5c54a12fe5c4c51dbea1",
"assets/assets/fonts/Graphology_Semibold.otf": "eeb5104e26e3400936a6f9925b206ef4",
"assets/assets/fonts/Roboto-Regular.ttf": "8a36205bd9b83e03af0591a004bc97f4",
"assets/assets/images/AlbedoBase_XL_An_illustration_of_a_medical_clinic_specializing_2.jpg": "7ebf8d4bd549694d7bc1864b003e4d35",
"assets/assets/images/AlbedoBase_XL_Illustrate_a_doctors_desk_in_an_orthopedic_clini_0_(1)_1.png": "d6bbc94d604c59458b79be4a47c22f9f",
"assets/assets/images/AlbedoBase_XL_Illustrate_a_modern_hospital_environment_with_a_3.jpg": "3cbc1ca11f3fbc791e4af59dad9201a8",
"assets/assets/images/all.png": "54a0a193db64bbb01edd5a128e13a9bb",
"assets/assets/images/date.png": "eed86ccec1ec7de78db621c77770d98e",
"assets/assets/images/done3.png": "e764a14f3e29f3ab2b69c763e586c2ae",
"assets/assets/images/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/images/fGroup_98.png": "19562605388a5d18d1f037c32f64e34a",
"assets/assets/images/Frabbe_20.png": "00540b75b2ad0aacde5487e0c7807097",
"assets/assets/images/Fraddme_16.png": "820fec590c7c9a669aa197a37f48fb3b",
"assets/assets/images/Fraggme_20.png": "7bdb3a6e386c726919de41a247d87d7a",
"assets/assets/images/Frameddd_18.png": "6876fd9c0c2f5caa8cf9c3d60c2de758",
"assets/assets/images/Frame_1dd7.png": "ed8970a27a4260850714da5c7280ff41",
"assets/assets/images/Frame_r20.png": "02426a9e4d022f07b22b0d68a5f096e8",
"assets/assets/images/Framfe_22.png": "c3dec662f96d0c1e6ce2de8b93c9afb0",
"assets/assets/images/p1rofilee.png": "8ac05944018d04da7c9acb00b18f2b2b",
"assets/assets/images/profilee.png": "349c99d61f18410489b34a9e972f368a",
"assets/assets/images/Rectangle_126.png": "7da4b03cd96078429d914bb7687bba82",
"assets/assets/images/wait.png": "1a1cba87dfe61d730ed9e699ed283a88",
"assets/assets/images/___-_2024-10-17T003351.919.png": "82858ebf97b6523e9277dfba602e69f7",
"assets/assets/images/___-_2024-10-19T224358.721.png": "b99332c3ec83591cab7f2291b563932c",
"assets/assets/jsons/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/pdfs/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/rive_animations/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/sqlite_db_files/ZakiaDB.db": "5c61fd317379ed7b432abc2414829b1a",
"assets/assets/videos/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/FontManifest.json": "e20f10ba4785bbf099901b0c2efb61ce",
"assets/fonts/MaterialIcons-Regular.otf": "88d3f4409f6c623643842830ba854a71",
"assets/NOTICES": "00810e6c4d7d4f2a455d53a739446800",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "17ee8e30dde24e349e70ffcdc0073fb0",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "d204c3b6bacb240ca34b0d8bf0e7433e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "950f9f24264db7721764f48df60ff893",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "2704101cb06ce66e2000356a312be25c",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "cd3a09e96a83dfec1c16707f1a699135",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "0666a41788d7663e2dcbd7e3e78a444b",
"/": "0666a41788d7663e2dcbd7e3e78a444b",
"main.dart.js": "0c8870cb144f1ca1afff4e313017347b",
"version.json": "b63e06171b0d9a677ee9a0cd8acdc975",
"___-_2024-10-17T023612.634.png": "18a600cb402a58f1b2f7c6ccb1cc9282"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
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
