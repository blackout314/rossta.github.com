!function(e){function t(r){if(n[r])return n[r].exports;var c=n[r]={exports:{},id:r,loaded:!1};return e[r].call(c.exports,c,c.exports,t),c.loaded=!0,c.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){"use strict";function r(){return[s].concat(Array.prototype.slice.call(arguments)).join(":")}function c(){}function i(e){return function(t){var n=t.clone();return c("fetch response from network",e.request.url),caches.open(r("pages")).then(function(t){t.put(e.request,n)}).then(function(){c("fetch response stored in cache.",e.request.url)}),t}}function o(e){return"GET"!==e.request.method||a.some(function(t){return e.request.url.match(t)})}var s="v1",u=["/","/offline.html"],a=[/https?:\/\/api.mixpanel.com\//,/https?:\/\/api.segment.io\//,/https?:\/\/in.getclicky.com\//,/\/__rack\//];self.addEventListener("install",function(e){c("install event in progress."),e.waitUntil(caches.open(r("offline")).then(function(e){return e.addAll(u)}).then(function(){self.skipWaiting(),c("installation complete!")}))}),self.addEventListener("fetch",function(e){return c("fetch event",e),o(e)?void c("fetch event ignored.",e.request.method,e.request.url):void e.respondWith(caches.match(e.request).then(function(t){var n=fetch(e.request).then(i(e));return c("fetch event",t?"(cached)":"(network)",e.request.url),t||n}))}),self.addEventListener("activate",function(e){c("activate event in progress."),e.waitUntil(caches.keys().then(function(e){return Promise.all(e.filter(function(e){return!e.startsWith(s)}).map(function(e){return caches["delete"](e)}))}).then(function(){c("activate completed.")}))}),c("Hello from ServiceWorker land!",s)}]);