if(!self.define){let s,e={};const l=(l,r)=>(l=new URL(l+".js",r).href,e[l]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=l,s.onload=e,document.head.appendChild(s)}else s=l,importScripts(l),e()})).then((()=>{let s=e[l];if(!s)throw new Error(`Module ${l} didn’t register its module`);return s})));self.define=(r,i)=>{const n=s||("document"in self?document.currentScript.src:"")||location.href;if(e[n])return;let t={};const u=s=>l(s,n),a={module:{uri:n},exports:t,require:u};e[n]=Promise.all(r.map((s=>a[s]||u(s)))).then((s=>(i(...s),t)))}}define(["./workbox-455a0d7a"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"assets/4.d9250fe1.js",revision:null},{url:"assets/404.6933c044.js",revision:null},{url:"assets/app.9327d654.js",revision:null},{url:"assets/Breadcrumb.19ecf1c6.js",revision:null},{url:"assets/content.866694a1.js",revision:null},{url:"assets/el-input.21b3539d.js",revision:null},{url:"assets/el-popper.8ec4b28a.js",revision:null},{url:"assets/energy.93210606.js",revision:null},{url:"assets/Header.802c35a6.js",revision:null},{url:"assets/home.237eb4c5.js",revision:null},{url:"assets/icon.833ebd8c.js",revision:null},{url:"assets/mint.14a720aa.js",revision:null},{url:"assets/payback.410c9b6d.js",revision:null},{url:"assets/RadioSfc.f3ec860e.js",revision:null},{url:"assets/raider.0f6a9b60.js",revision:null},{url:"assets/rating.683a15a2.js",revision:null},{url:"assets/README.7b312ac3.js",revision:null},{url:"assets/sneaker.a60a68e2.js",revision:null},{url:"assets/style.b3bbbda4.css",revision:null},{url:"assets/tooltip.d44a9610.js",revision:null},{url:"assets/vendor.96619303.js",revision:null},{url:"assets/virtual_pwa-register.76ac74a3.js",revision:null},{url:"index.html",revision:"5c7390b33240c2a622f44ab0df161eac"},{url:"favicon.svg",revision:"6e739912488069c93610ab7319c5c77e"},{url:"robots.txt",revision:"5e0bd1c281a62a380d7a948085bfe2d1"},{url:"manifest.webmanifest",revision:"37e8d18026b05432f623fc5efac2b4b1"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
