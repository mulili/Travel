(function(e){function t(t){for(var r,o,a=t[0],i=t[1],l=t[2],f=0,s=[];f<a.length;f++)o=a[f],Object.prototype.hasOwnProperty.call(c,o)&&c[o]&&s.push(c[o][0]),c[o]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);d&&d(t);while(s.length)s.shift()();return u.push.apply(u,l||[]),n()}function n(){for(var e,t=0;t<u.length;t++){for(var n=u[t],r=!0,o=1;o<n.length;o++){var a=n[o];0!==c[a]&&(r=!1)}r&&(u.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},o={app:0},c={app:0},u=[];function a(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-64c2ca30":"34edeff0","chunk-722c8c68":"94ef0f5b","chunk-beb9760c":"4b2bca0f"}[e]+".js"}function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={"chunk-64c2ca30":1,"chunk-722c8c68":1,"chunk-beb9760c":1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-64c2ca30":"48954da7","chunk-722c8c68":"561ba41b","chunk-beb9760c":"a38a60d6"}[e]+".css",c=i.p+r,u=document.getElementsByTagName("link"),a=0;a<u.length;a++){var l=u[a],f=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(f===r||f===c))return t()}var s=document.getElementsByTagName("style");for(a=0;a<s.length;a++){l=s[a],f=l.getAttribute("data-href");if(f===r||f===c)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var r=t&&t.target&&t.target.src||c,u=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");u.code="CSS_CHUNK_LOAD_FAILED",u.request=r,delete o[e],d.parentNode.removeChild(d),n(u)},d.href=c;var p=document.getElementsByTagName("head")[0];p.appendChild(d)})).then((function(){o[e]=0})));var r=c[e];if(0!==r)if(r)t.push(r[2]);else{var u=new Promise((function(t,n){r=c[e]=[t,n]}));t.push(r[2]=u);var l,f=document.createElement("script");f.charset="utf-8",f.timeout=120,i.nc&&f.setAttribute("nonce",i.nc),f.src=a(e);var s=new Error;l=function(t){f.onerror=f.onload=null,clearTimeout(d);var n=c[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;s.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",s.name="ChunkLoadError",s.type=r,s.request=o,n[1](s)}c[e]=void 0}};var d=setTimeout((function(){l({type:"timeout",target:f})}),12e4);f.onerror=f.onload=l,document.head.appendChild(f)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/travel/",i.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],f=l.push.bind(l);l.push=t,l=l.slice();for(var s=0;s<l.length;s++)t(l[s]);var d=f;u.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("7371"),n("aa47"),n("b068"),n("a7a3");var r=n("830f"),o=n("1f80"),c=n.n(o),u=(n("db4d"),n("fe3c")),a=n.n(u),i=(n("d3b7"),n("8c4f")),l=[{path:"/",name:"home",component:function(){return n.e("chunk-beb9760c").then(n.bind(null,"b3d7"))}},{path:"/city",name:"city",component:function(){return n.e("chunk-64c2ca30").then(n.bind(null,"f262"))}},{path:"/detail/:id",name:"detail",component:function(){return n.e("chunk-722c8c68").then(n.bind(null,"6ab7"))}}],f=Object(i["a"])({history:Object(i["b"])(),routes:l,scrollBehavior:function(){return{x:0,y:0}}}),s=n("5502"),d=n("ed08"),p=d["c"].getItem,h={city:p("city")||"北京"},b=h,m=d["c"].setItem,v={changeCity:function(e,t){e.city=t,m("city",t)}},y=v,g=s["a"].createStore({state:b,mutations:y}),O=g,j=n("5c40"),k={id:"app"};function w(e,t){var n=Object(j["A"])("router-view");return Object(j["u"])(),Object(j["f"])("div",k,[(Object(j["u"])(),Object(j["f"])(j["c"],{exclude:"Detail"},[Object(j["l"])(n)],1024))])}n("64be");const S={};S.render=w;var T=S;a.a.attach(document.body),Object(r["b"])(T).use(f).use(O).use(c.a).mount("#app")},"64be":function(e,t,n){"use strict";n("98e6")},7371:function(e,t,n){},"98e6":function(e,t,n){},aa47:function(e,t,n){},b068:function(e,t,n){},ed08:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return s})),n.d(t,"c",(function(){return p}));n("99af"),n("d3b7");var r=n("bc3a"),o=n.n(r),c="https://mulili.github.io/travel",u="/mock",a=o.a.create({baseURL:"".concat(c).concat(u)});a.interceptors.response.use((function(e){return e.data}),(function(e){return Promise.reject(e)}));var i=a,l=function(){return document.documentElement.scrollTop||document.body.scrollTop||window.pageYOffset},f=function(e){document.documentElement.scrollTop=e,document.body.scrollTop=e,window.pageYOffset=e},s={getScrollTop:l,setScrollTop:f},d={getItem:function(e){var t;try{t=localStorage.getItem(e)}catch(n){console.error(n)}return t},setItem:function(e,t){try{localStorage.setItem(e,t)}catch(n){console.error(n)}}},p=d}});
//# sourceMappingURL=app.7ffe2364.js.map