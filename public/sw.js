if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return n[e]||(s=new Promise(async s=>{if("document"in self){const n=document.createElement("script");n.src=e,document.head.appendChild(n),n.onload=s}else importScripts(e),s()})),s.then(()=>{if(!n[e])throw new Error(`Module ${e} didn’t register its module`);return n[e]})},s=(s,n)=>{Promise.all(s.map(e)).then(e=>n(1===e.length?e[0]:e))},n={require:Promise.resolve(s)};self.define=(s,t,c)=>{n[s]||(n[s]=Promise.resolve().then(()=>{let n={};const i={uri:location.origin+s.slice(1)};return Promise.all(t.map(s=>{switch(s){case"exports":return n;case"module":return i;default:return e(s)}})).then(e=>{const s=c(...e);return n.default||(n.default=s),n})}))}}define("./sw.js",["./workbox-8778d57b"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/NytDqSc28g6QyyjU_UZ7N/_buildManifest.js",revision:"NytDqSc28g6QyyjU_UZ7N"},{url:"/_next/static/NytDqSc28g6QyyjU_UZ7N/_ssgManifest.js",revision:"NytDqSc28g6QyyjU_UZ7N"},{url:"/_next/static/chunks/252f366e.23981e217e7855f5fca2.js",revision:"NytDqSc28g6QyyjU_UZ7N"},{url:"/_next/static/chunks/6728d85a.c7b48ca96a038d96589a.js",revision:"NytDqSc28g6QyyjU_UZ7N"},{url:"/_next/static/chunks/70b165ca.ad3eb62579da9bba25b8.js",revision:"NytDqSc28g6QyyjU_UZ7N"},{url:"/_next/static/chunks/cddf0825435479e1412df8c0d0613556931ccd51.e51577aedec87ab1fcf6.js",revision:"NytDqSc28g6QyyjU_UZ7N"},{url:"/_next/static/chunks/commons.6fb3e68b82e4ab1011ea.js",revision:"NytDqSc28g6QyyjU_UZ7N"},{url:"/_next/static/chunks/framework.ef157c678a62cfb2c073.js",revision:"NytDqSc28g6QyyjU_UZ7N"},{url:"/_next/static/chunks/main-65e3e68390074fb8578f.js",revision:"NytDqSc28g6QyyjU_UZ7N"},{url:"/_next/static/chunks/pages/_app-2d63c42429029847df27.js",revision:"NytDqSc28g6QyyjU_UZ7N"},{url:"/_next/static/chunks/pages/_error-8e2603baa341adede577.js",revision:"NytDqSc28g6QyyjU_UZ7N"},{url:"/_next/static/chunks/pages/en-bb394fa146e5f68e96f8.js",revision:"NytDqSc28g6QyyjU_UZ7N"},{url:"/_next/static/chunks/pages/index-137583a4019a11c528b7.js",revision:"NytDqSc28g6QyyjU_UZ7N"},{url:"/_next/static/chunks/polyfills-4beebf4ac9054f0bf4e6.js",revision:"NytDqSc28g6QyyjU_UZ7N"},{url:"/_next/static/chunks/webpack-e067438c4cf4ef2ef178.js",revision:"NytDqSc28g6QyyjU_UZ7N"},{url:"/_next/static/css/d2f06ca5f799e36a4dce.css",revision:"NytDqSc28g6QyyjU_UZ7N"},{url:"/favicon-16x16.ico",revision:"556554071ecc74d8b3d4c9595f1f1740"},{url:"/favicon-32x32.png",revision:"aea62d6dba8162caf316063ef97da24e"},{url:"/icons/icon-192x192.png",revision:"1cf45db7bc78775cc3fcf88afd89bbbf"},{url:"/icons/icon-256x256.png",revision:"e2398cb0a6ee89f17dcd0ef622ee3d39"},{url:"/icons/icon-384x384.png",revision:"72d3cd86e0f7da88fb05c2cbbde3616a"},{url:"/icons/icon.png",revision:"191341d8f44bd9234026bb492e6a44dd"},{url:"/manifest.json",revision:"32f3be4039ba2435f14c959ba75aae79"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[new e.ExpirationPlugin({maxEntries:1,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/api\/.*$/i,new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/.*/i,new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET")}));
