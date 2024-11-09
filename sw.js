let cacheName = "my-recipes-pwa";
let filesToCache = [
    "/", "/index", "/css/style.css", "/css/styleR.css", "/js/main.js",
    "/css/styleRR.css", "receitas-massas", "receitas-doces", "receitas-carnes",
    "chantilly", "cookie", "lasanha-de-frango", "macarronada", "mingau", "/miojo",
    "panceta", "picadinho-cerveja", "picanha", "images/carnes/panceta/panceta.webp",
    "images/carnes/picadinho-cerveja/picadinho.png", "images/carnes/picanha/picanha.jpg",
    "images/doces/chantilly/chantilly.webp", "images/doces/cookie/cookie.jpg",
    "images/doces/mingau/mingau.jpeg", "images/massas/lasanha/lasanha.jpeg", "images/massas/macarronada/macarronada.webp",
    "images/massas/miojo/miojo.webp"
];

self.addEventListener("install", (e) => {
    e.waitUntil(
        caches.open(cacheName).then((cache) => {
            return Promise.all(
                filesToCache.map((file) =>
                    cache.add(file).catch((err) => {
                        console.error("Falha ao adicionar ao cache:", file, err);
                    })
                )
            );
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
