if(!self.define){let e,a={};const s=(s,n)=>(s=new URL(s+".js",n).href,a[s]||new Promise((a=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=a,document.head.appendChild(e)}else e=s,importScripts(s),a()})).then((()=>{let e=a[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(n,i)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(a[c])return;let t={};const r=e=>s(e,c),d={module:{uri:c},exports:t,require:r};a[c]=Promise.all(n.map((e=>d[e]||r(e)))).then((e=>(i(...e),t)))}}define(["./workbox-e9849328"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/app-build-manifest.json",revision:"48b8e1cf09b642b8fce546a531b3ca2f"},{url:"/_next/static/GJTnGRVk3NAzYHq34MIUQ/_buildManifest.js",revision:"4e5d91a56f707e64468196efab23635d"},{url:"/_next/static/GJTnGRVk3NAzYHq34MIUQ/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/137-17a00a037180c258.js",revision:"GJTnGRVk3NAzYHq34MIUQ"},{url:"/_next/static/chunks/158-c910b2cc61171248.js",revision:"GJTnGRVk3NAzYHq34MIUQ"},{url:"/_next/static/chunks/184-332b95d34201a74e.js",revision:"GJTnGRVk3NAzYHq34MIUQ"},{url:"/_next/static/chunks/272-2f097b8b19c50f9c.js",revision:"GJTnGRVk3NAzYHq34MIUQ"},{url:"/_next/static/chunks/485-18647fafdb256189.js",revision:"GJTnGRVk3NAzYHq34MIUQ"},{url:"/_next/static/chunks/826-7fb5485b684ba997.js",revision:"GJTnGRVk3NAzYHq34MIUQ"},{url:"/_next/static/chunks/891-2ffdb76a5b0b1928.js",revision:"GJTnGRVk3NAzYHq34MIUQ"},{url:"/_next/static/chunks/97-84811a782b69ab02.js",revision:"GJTnGRVk3NAzYHq34MIUQ"},{url:"/_next/static/chunks/app/_not-found/page-d6699223e6fcb201.js",revision:"GJTnGRVk3NAzYHq34MIUQ"},{url:"/_next/static/chunks/app/about/page-0464b66eb252fea0.js",revision:"GJTnGRVk3NAzYHq34MIUQ"},{url:"/_next/static/chunks/app/layout-9bddf9281856a0e9.js",revision:"GJTnGRVk3NAzYHq34MIUQ"},{url:"/_next/static/chunks/app/not-found-b6b211b0e2d9c453.js",revision:"GJTnGRVk3NAzYHq34MIUQ"},{url:"/_next/static/chunks/app/page-c6306156c6edd354.js",revision:"GJTnGRVk3NAzYHq34MIUQ"},{url:"/_next/static/chunks/app/privacypolicy/page-fdfb212701260481.js",revision:"GJTnGRVk3NAzYHq34MIUQ"},{url:"/_next/static/chunks/app/terms/page-fae2cc4110acb9bb.js",revision:"GJTnGRVk3NAzYHq34MIUQ"},{url:"/_next/static/chunks/efb370ad-1c81df84f992d439.js",revision:"GJTnGRVk3NAzYHq34MIUQ"},{url:"/_next/static/chunks/framework-f36c3f6552317c59.js",revision:"GJTnGRVk3NAzYHq34MIUQ"},{url:"/_next/static/chunks/main-app-dc2aed9c2f2cab1e.js",revision:"GJTnGRVk3NAzYHq34MIUQ"},{url:"/_next/static/chunks/main-fccb2976b3b7d06b.js",revision:"GJTnGRVk3NAzYHq34MIUQ"},{url:"/_next/static/chunks/pages/_app-637fe39935eff7c5.js",revision:"GJTnGRVk3NAzYHq34MIUQ"},{url:"/_next/static/chunks/pages/_error-edd9fd5878b7cfd5.js",revision:"GJTnGRVk3NAzYHq34MIUQ"},{url:"/_next/static/chunks/polyfills-42372ed130431b0a.js",revision:"846118c33b2c0e922d7b3a7676f81f6f"},{url:"/_next/static/chunks/webpack-bd8d37227a172a4c.js",revision:"GJTnGRVk3NAzYHq34MIUQ"},{url:"/_next/static/css/e8e7b3581dbbdf9f.css",revision:"e8e7b3581dbbdf9f"},{url:"/_next/static/css/f09684d188c7e0d7.css",revision:"f09684d188c7e0d7"},{url:"/_next/static/media/04451feb67d77917-s.woff2",revision:"2154a15884309c55811dcf72180f94a2"},{url:"/_next/static/media/096abdcccd118ea6-s.woff2",revision:"88502ac4fb0f89de229a70b9c7f5ea01"},{url:"/_next/static/media/16abb8bb0ef64dbe-s.woff2",revision:"e67bc15984a5f2e84c1a81556d53f795"},{url:"/_next/static/media/3380d1d7054a93c7-s.woff2",revision:"5b954acb2527811314a9edee8c5f0210"},{url:"/_next/static/media/5a267fbac99863a6-s.woff2",revision:"84e2183e4322a790d29b010c88972500"},{url:"/_next/static/media/605489086c4b3388-s.woff2",revision:"316ea6776a90b83f4b6d3b0a71780aaf"},{url:"/_next/static/media/979203ba8a3742d5-s.woff2",revision:"dd94763fa0437f376a5d3642470dd446"},{url:"/_next/static/media/a77098e8cb4a92b8-s.woff2",revision:"b501b8a146ac301b7b2cf21b925c21ab"},{url:"/_next/static/media/acme-corp.4cbe6c11.svg",revision:"d948ed184d27a4c4bd3adbc8eafb1e3d"},{url:"/_next/static/media/apex.3303a757.svg",revision:"fcce8dd35be08783dfdb3c7542a9a526"},{url:"/_next/static/media/avatar-1.b3f4dd51.png",revision:"94d369bc53127954f2541c955d7b59f5"},{url:"/_next/static/media/avatar-2.d41a0f10.png",revision:"f6933d5bd0d107034235671c7089aef8"},{url:"/_next/static/media/avatar-3.21df1c82.png",revision:"d5943c0c0a9b2c45fea33380d26d2652"},{url:"/_next/static/media/avatar-4.3ec21594.png",revision:"8b39650d4d6008cfb77fad35e2388adb"},{url:"/_next/static/media/avatar-5.2781cf6e.png",revision:"5cc0e52e490dfb3a581427cd99b69072"},{url:"/_next/static/media/avatar-6.23fe4fe8.png",revision:"252e5a02c6ad74d99f92e4aa5568a2ea"},{url:"/_next/static/media/avatar-7.99057217.png",revision:"f62534bf7122b6f7df03d26e8c84e23e"},{url:"/_next/static/media/avatar-8.bdf13b0f.png",revision:"39b821b34d6f562d8bc7c548043ebfa4"},{url:"/_next/static/media/avatar-9.92c90456.png",revision:"a93aa5e1033e492019c6d11e4595eb46"},{url:"/_next/static/media/celestial.cedf0d6e.svg",revision:"2b05a4970a1bcd2309f25ebad7599338"},{url:"/_next/static/media/echo-valley.847c2079.svg",revision:"449b5db902bd287c2205104c68be22c7"},{url:"/_next/static/media/f1c58dedecee123b-s.p.woff2",revision:"ef83282c6263512235856432c25803d5"},{url:"/_next/static/media/f74a3dcc44b954df-s.woff2",revision:"a259d6c7671cd554c6666198023660b4"},{url:"/_next/static/media/outside.c844aea5.svg",revision:"f55daaffa8d9d2ab7e82dec0cfa34396"},{url:"/_next/static/media/pulse.6e18a88b.svg",revision:"c38e9c3919ddbe639619816eb4ec4b68"},{url:"/_next/static/media/quantum.6b3994e8.svg",revision:"ac9ac71cc7bfb996effd8fe9ff62221c"},{url:"/_next/static/media/twice.e238264d.svg",revision:"16fba02e8f34f29a24fdd4311b16a4e8"},{url:"/about.jpg",revision:"283f631b16b31c450e5180b6f8df8309"},{url:"/icons/icon-128x128.png",revision:"c272a0540079ec09cb4017852b3490e8"},{url:"/icons/icon-144x144.png",revision:"460ede3792846d2aba5a75a62487776e"},{url:"/icons/icon-152x152.png",revision:"4519142408099aeab3504c88208f1c93"},{url:"/icons/icon-192x192.png",revision:"09f609888dee5f1351e91425f4265865"},{url:"/icons/icon-256x256.png",revision:"b812c303a09c5cdf4a43701b4928814a"},{url:"/icons/icon-384x384.png",revision:"f2cdfb1756db630e6b1716a1ae0bf7d6"},{url:"/icons/icon-48x48.png",revision:"e761f87292bf7f05dd0f7435cfd0301f"},{url:"/icons/icon-512x512.png",revision:"b1f2559255bacf4155810d066603466d"},{url:"/icons/icon-72x72.png",revision:"b7a47041a8afc81296ae719a20fcd147"},{url:"/icons/icon-96x96.png",revision:"28952b239eeca31caf2ddca9099cafda"},{url:"/logo.png",revision:"7154515378ae54ced6a5b60ff6d38bae"},{url:"/manifest.json",revision:"18154c802a3f787f1f5d2a218178e016"},{url:"/video.png",revision:"68f722c729b76ab3760707979ba2d1a1"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:a,event:s,state:n})=>a&&"opaqueredirect"===a.type?new Response(a.body,{status:200,statusText:"OK",headers:a.headers}):a}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const a=e.pathname;return!a.startsWith("/api/auth/")&&!!a.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
