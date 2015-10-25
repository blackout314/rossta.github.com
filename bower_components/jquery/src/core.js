define(["./var/arr","./var/slice","./var/concat","./var/push","./var/indexOf","./var/class2type","./var/toString","./var/hasOwn","./var/support"],function(n,t,r,e,i,o,u,a,c){function s(n){var t="length"in n&&n.length,r=p.type(n);return"function"===r||p.isWindow(n)?!1:1===n.nodeType&&t?!0:"array"===r||0===t||"number"==typeof t&&t>0&&t-1 in n}var l=window.document,f="@VERSION",p=function(n,t){return new p.fn.init(n,t)},h=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,y=/^-ms-/,g=/-([\da-z])/gi,d=function(n,t){return t.toUpperCase()};return p.fn=p.prototype={jquery:f,constructor:p,selector:"",length:0,toArray:function(){return t.call(this)},get:function(n){return null!=n?0>n?this[n+this.length]:this[n]:t.call(this)},pushStack:function(n){var t=p.merge(this.constructor(),n);return t.prevObject=this,t.context=this.context,t},each:function(n,t){return p.each(this,n,t)},map:function(n){return this.pushStack(p.map(this,function(t,r){return n.call(t,r,t)}))},slice:function(){return this.pushStack(t.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(n){var t=this.length,r=+n+(0>n?t:0);return this.pushStack(r>=0&&t>r?[this[r]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:e,sort:n.sort,splice:n.splice},p.extend=p.fn.extend=function(){var n,t,r,e,i,o,u=arguments[0]||{},a=1,c=arguments.length,s=!1;for("boolean"==typeof u&&(s=u,u=arguments[a]||{},a++),"object"==typeof u||p.isFunction(u)||(u={}),a===c&&(u=this,a--);c>a;a++)if(null!=(n=arguments[a]))for(t in n)r=u[t],e=n[t],u!==e&&(s&&e&&(p.isPlainObject(e)||(i=p.isArray(e)))?(i?(i=!1,o=r&&p.isArray(r)?r:[]):o=r&&p.isPlainObject(r)?r:{},u[t]=p.extend(s,o,e)):void 0!==e&&(u[t]=e));return u},p.extend({expando:"jQuery"+(f+Math.random()).replace(/\D/g,""),isReady:!0,error:function(n){throw new Error(n)},noop:function(){},isFunction:function(n){return"function"===p.type(n)},isArray:Array.isArray,isWindow:function(n){return null!=n&&n===n.window},isNumeric:function(n){return!p.isArray(n)&&n-parseFloat(n)+1>=0},isPlainObject:function(n){return"object"!==p.type(n)||n.nodeType||p.isWindow(n)?!1:n.constructor&&!a.call(n.constructor.prototype,"isPrototypeOf")?!1:!0},isEmptyObject:function(n){var t;for(t in n)return!1;return!0},type:function(n){return null==n?n+"":"object"==typeof n||"function"==typeof n?o[u.call(n)]||"object":typeof n},globalEval:function(n){var t,r=eval;n=p.trim(n),n&&(1===n.indexOf("use strict")?(t=l.createElement("script"),t.text=n,l.head.appendChild(t).parentNode.removeChild(t)):r(n))},camelCase:function(n){return n.replace(y,"ms-").replace(g,d)},nodeName:function(n,t){return n.nodeName&&n.nodeName.toLowerCase()===t.toLowerCase()},each:function(n,t,r){var e,i=0,o=n.length,u=s(n);if(r){if(u)for(;o>i&&(e=t.apply(n[i],r),e!==!1);i++);else for(i in n)if(e=t.apply(n[i],r),e===!1)break}else if(u)for(;o>i&&(e=t.call(n[i],i,n[i]),e!==!1);i++);else for(i in n)if(e=t.call(n[i],i,n[i]),e===!1)break;return n},trim:function(n){return null==n?"":(n+"").replace(h,"")},makeArray:function(n,t){var r=t||[];return null!=n&&(s(Object(n))?p.merge(r,"string"==typeof n?[n]:n):e.call(r,n)),r},inArray:function(n,t,r){return null==t?-1:i.call(t,n,r)},merge:function(n,t){for(var r=+t.length,e=0,i=n.length;r>e;e++)n[i++]=t[e];return n.length=i,n},grep:function(n,t,r){for(var e,i=[],o=0,u=n.length,a=!r;u>o;o++)e=!t(n[o],o),e!==a&&i.push(n[o]);return i},map:function(n,t,e){var i,o=0,u=n.length,a=s(n),c=[];if(a)for(;u>o;o++)i=t(n[o],o,e),null!=i&&c.push(i);else for(o in n)i=t(n[o],o,e),null!=i&&c.push(i);return r.apply([],c)},guid:1,proxy:function(n,r){var e,i,o;return"string"==typeof r&&(e=n[r],r=n,n=e),p.isFunction(n)?(i=t.call(arguments,2),o=function(){return n.apply(r||this,i.concat(t.call(arguments)))},o.guid=n.guid=n.guid||p.guid++,o):void 0},now:Date.now,support:c}),p.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(n,t){o["[object "+t+"]"]=t.toLowerCase()}),p});