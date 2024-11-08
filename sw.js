let cacheName = "my-recipes-pwa";
let filesToCache = ["/", "/index", "/css/style.css", "/css/styleR.css", "/js/main.js", "/css/styleRR.css","receitas-massas","receitas-doces","receitas-carnes", "chantilly", "cookie", "lasanha-de-frango", "macarronada","mingau", "/miojo", 
"panceta", "picadinho-cerveja", "picanha", "/images"];

self.addEventListener("install", (e) => {
    e.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.addAll(filesToCache);
        })
    );
});

self.addEventListener("fetch", (e) => {
    e.respondWith(
        caches.match(e.request).then((response) => {
            return response || fetch(e.request);
        })
    );
});