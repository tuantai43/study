import{r as g,a,c as m,b as i,n as y,o as p,d as f,w as E,F as $,e as L,f as V,g as I,h as u,i as P}from"./vendor.d2d6052d.js";const S=function(){const c=document.createElement("link").relList;if(c&&c.supports&&c.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&t(r)}).observe(document,{childList:!0,subtree:!0});function s(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerpolicy&&(o.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?o.credentials="include":e.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function t(e){if(e.ep)return;e.ep=!0;const o=s(e);fetch(e.href,o)}};S();var h=(n,c)=>{for(const[s,t]of c)n[s]=t;return n};const O={setup(){return{theme:g("default-theme")}}};function A(n,c,s,t,e,o){const r=a("router-view");return p(),m("div",{class:y(t.theme)},[i(r)],2)}var R=h(O,[["render",A]]);const k={setup(){let n=g(!1);return{displaySidebar:n,onToggleIcon:s=>{n.value=s}}}},w={class:"container"},x={class:"page-body"},j={class:"page-content"};function B(n,c,s,t,e,o){const r=a("the-header"),d=a("the-sidebar"),_=a("router-view"),b=a("the-footer");return p(),m("div",w,[i(r,{onToggleIcon:t.onToggleIcon},null,8,["onToggleIcon"]),f("div",x,[i(d,{class:y(["sidebar",{active:t.displaySidebar}])},null,8,["class"]),f("div",j,[i(_)])]),i(b)])}var D=h(k,[["render",B]]);const C="modulepreload",T={},N="/study/",l=function(c,s){return!s||s.length===0?c():Promise.all(s.map(t=>{if(t=`${N}${t}`,t in T)return;T[t]=!0;const e=t.endsWith(".css"),o=e?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${t}"]${o}`))return;const r=document.createElement("link");if(r.rel=e?"stylesheet":C,e||(r.as="script",r.crossOrigin=""),r.href=t,document.head.appendChild(r),e)return new Promise((d,_)=>{r.addEventListener("load",d),r.addEventListener("error",_)})})).then(()=>c())},F=[{path:"",name:"VirtualScroller",component:()=>l(()=>import("./VirtualScrollerIndex.8e5741b9.js"),["assets/VirtualScrollerIndex.8e5741b9.js","assets/VirtualScrollerIndex.a0311dd6.css","assets/vendor.d2d6052d.js"])}],H={},q=f("p",null,"Hello",-1),W=L("Get Start");function z(n,c){const s=a("router-link");return p(),m($,null,[q,i(s,{to:"virtual-scroller"},{default:E(()=>[W]),_:1})],64)}var G=h(H,[["render",z]]);const K=[{path:"/study",component:G},{path:"/study/virtual-scroller",component:D,children:F}];function J(){return V({history:I(),routes:K})}const M=u(()=>l(()=>import("./TheHeader.29727a73.js"),["assets/TheHeader.29727a73.js","assets/vendor.d2d6052d.js"])),Q=u(()=>l(()=>import("./TheSidebar.e44e501a.js"),["assets/TheSidebar.e44e501a.js","assets/vendor.d2d6052d.js"])),U=u(()=>l(()=>import("./TheFooter.6cc3abad.js"),["assets/TheFooter.6cc3abad.js","assets/vendor.d2d6052d.js"])),X=u(()=>l(()=>import("./BaseVirtualScroller.0f1fd753.js"),["assets/BaseVirtualScroller.0f1fd753.js","assets/BaseVirtualScroller.906eeeca.css","assets/vendor.d2d6052d.js"])),Y=u(()=>l(()=>import("./BaseTutorialPage.0dc46035.js"),["assets/BaseTutorialPage.0dc46035.js","assets/BaseTutorialPage.4fdb012f.css","assets/vendor.d2d6052d.js"])),Z=[{name:"the-header",component:M},{name:"the-sidebar",component:Q},{name:"the-footer",component:U},{name:"base-virtual-scroller",component:X},{name:"base-tutorial-page",component:Y}];const ee=J(),v=P(R);Z.map(n=>{v.component(n.name,n.component)});v.use(ee);v.mount("#app");export{h as _};
//# sourceMappingURL=index.d09b7d6c.js.map