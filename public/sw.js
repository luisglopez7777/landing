if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return t[e]||(s=new Promise(async s=>{if("document"in self){const t=document.createElement("script");t.src=e,document.head.appendChild(t),t.onload=s}else importScripts(e),s()})),s.then(()=>{if(!t[e])throw new Error(`Module ${e} didn’t register its module`);return t[e]})},s=(s,t)=>{Promise.all(s.map(e)).then(e=>t(1===e.length?e[0]:e))},t={require:Promise.resolve(s)};self.define=(s,n,r)=>{t[s]||(t[s]=Promise.resolve().then(()=>{let t={};const a={uri:location.origin+s.slice(1)};return Promise.all(n.map(s=>{switch(s){case"exports":return t;case"module":return a;default:return e(s)}})).then(e=>{const s=r(...e);return t.default||(t.default=s),t})}))}}define("./sw.js",["./workbox-8778d57b"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/chunks/20385e9109c8e806c537084819b6cf4501ddcf5d.dc926f3d0613a73af032.js",revision:"l-9hzJjv864-frgVptga2"},{url:"/_next/static/chunks/252f366e.18f18d9818ed09b62a77.js",revision:"l-9hzJjv864-frgVptga2"},{url:"/_next/static/chunks/6728d85a.06e973cee17de33308b2.js",revision:"l-9hzJjv864-frgVptga2"},{url:"/_next/static/chunks/70b165ca.408c43199ba612daab0a.js",revision:"l-9hzJjv864-frgVptga2"},{url:"/_next/static/chunks/cddf0825435479e1412df8c0d0613556931ccd51.3e4974f0101be2d41a86.js",revision:"l-9hzJjv864-frgVptga2"},{url:"/_next/static/chunks/commons.128984bd295a67f74e18.js",revision:"l-9hzJjv864-frgVptga2"},{url:"/_next/static/chunks/framework.ef157c678a62cfb2c073.js",revision:"l-9hzJjv864-frgVptga2"},{url:"/_next/static/chunks/main-afdae57ad9d98014d1b2.js",revision:"l-9hzJjv864-frgVptga2"},{url:"/_next/static/chunks/pages/_app-ff6027aa56560ca6e3c9.js",revision:"l-9hzJjv864-frgVptga2"},{url:"/_next/static/chunks/pages/_error-b38cc16154e250b18590.js",revision:"l-9hzJjv864-frgVptga2"},{url:"/_next/static/chunks/pages/dev-8995f887d60f072f0736.js",revision:"l-9hzJjv864-frgVptga2"},{url:"/_next/static/chunks/pages/en-1b401b5bba01412d945f.js",revision:"l-9hzJjv864-frgVptga2"},{url:"/_next/static/chunks/pages/index-3468673b837df15cfdd2.js",revision:"l-9hzJjv864-frgVptga2"},{url:"/_next/static/chunks/polyfills-555defa4e62ba07d4446.js",revision:"l-9hzJjv864-frgVptga2"},{url:"/_next/static/chunks/webpack-e067438c4cf4ef2ef178.js",revision:"l-9hzJjv864-frgVptga2"},{url:"/_next/static/css/fbfe965aa180ff95a23c.css",revision:"l-9hzJjv864-frgVptga2"},{url:"/_next/static/l-9hzJjv864-frgVptga2/_buildManifest.js",revision:"l-9hzJjv864-frgVptga2"},{url:"/_next/static/l-9hzJjv864-frgVptga2/_ssgManifest.js",revision:"l-9hzJjv864-frgVptga2"},{url:"/favicon-16x16.ico",revision:"556554071ecc74d8b3d4c9595f1f1740"},{url:"/favicon-32x32.png",revision:"aea62d6dba8162caf316063ef97da24e"},{url:"/icons/icon-192x192.png",revision:"1cf45db7bc78775cc3fcf88afd89bbbf"},{url:"/icons/icon-256x256.png",revision:"e2398cb0a6ee89f17dcd0ef622ee3d39"},{url:"/icons/icon-384x384.png",revision:"72d3cd86e0f7da88fb05c2cbbde3616a"},{url:"/manifest.json",revision:"32f3be4039ba2435f14c959ba75aae79"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[new e.ExpirationPlugin({maxEntries:1,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/api\/.*$/i,new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/.*/i,new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET")}));
