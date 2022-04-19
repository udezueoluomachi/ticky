// https://developers.google.com/web/fundamentals/getting-started/primers/service-workers
// ------------------------------
// Pre Cache and Update
// ------------------------------
const name = "Ticky"
const assets = [
  "/",
  "/fonts/roboto/Roboto-Bold.ttf",
  "/fonts/roboto/Roboto-Medium.ttf",
  "/fonts/roboto/Roboto-Regular.ttf",
  "/images/avatar-s.png",
  "/images/avatar.png",
  "/images/favicon.png",
  "/images/logo.png",
  "/images/social.png",
  "/scripts/jquery.js",
  "/style/index.css",
  "/index.html",
  "/man-is-he-mega-glbml-22045.mp3",
]

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(name).then(cache => {
      cache.addAll(assets)
    })
  )
})

self.addEventListener("fetch", fetchEvent => {
    fetchEvent.respondWith(
      caches.match(fetchEvent.request).then(res => {
        return res || fetch(fetchEvent.request)
      })
    )
  })