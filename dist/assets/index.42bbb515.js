import{r as g,a,c as p,b as i,n as y,o as h,d,w as $,F as L,e as V,f as I,g as P,h as u,i as S}from"./vendor.73d7a59d.js";const A=function(){const c=document.createElement("link").relList;if(c&&c.supports&&c.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&t(r)}).observe(document,{childList:!0,subtree:!0});function s(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerpolicy&&(o.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?o.credentials="include":e.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function t(e){if(e.ep)return;e.ep=!0;const o=s(e);fetch(e.href,o)}};A();var f=(n,c)=>{for(const[s,t]of c)n[s]=t;return n};const O={setup(){return{theme:g("default-theme")}}};function R(n,c,s,t,e,o){const r=a("router-view");return h(),p("div",{class:y(t.theme)},[i(r)],2)}var k=f(O,[["render",R]]);const w={setup(){let n=g(!1);return{displaySidebar:n,onToggleIcon:s=>{n.value=s}}}},x={class:"container"},j={class:"page-body"},B={class:"page-content"};function D(n,c,s,t,e,o){const r=a("the-header"),_=a("the-sidebar"),m=a("router-view"),E=a("the-footer");return h(),p("div",x,[i(r,{onToggleIcon:t.onToggleIcon},null,8,["onToggleIcon"]),d("div",j,[i(_,{class:y(["sidebar",{active:t.displaySidebar}])},null,8,["class"]),d("div",B,[i(m)])]),i(E)])}var C=f(w,[["render",D]]);const N="modulepreload",T={},F="/study/",l=function(c,s){return!s||s.length===0?c():Promise.all(s.map(t=>{if(t=`${F}${t}`,t in T)return;T[t]=!0;const e=t.endsWith(".css"),o=e?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${t}"]${o}`))return;const r=document.createElement("link");if(r.rel=e?"stylesheet":N,e||(r.as="script",r.crossOrigin=""),r.href=t,document.head.appendChild(r),e)return new Promise((_,m)=>{r.addEventListener("load",_),r.addEventListener("error",m)})})).then(()=>c())},H=[{path:"",name:"VirtualScroller",component:()=>l(()=>import("./VirtualScrollerIndex.de0994bc.js"),["assets/VirtualScrollerIndex.de0994bc.js","assets/VirtualScrollerIndex.a0311dd6.css","assets/vendor.73d7a59d.js"])}],q={},W={class:"container transparent"},z={class:"home-page page-body"},G=d("p",{class:"say-hi"},"Hello",-1),K=V(" GET START ");function J(n,c){const s=a("the-header"),t=a("router-link"),e=a("the-footer");return h(),p(L,null,[d("div",W,[i(s,{"hide-menu-icon":!0,transparent:!0}),d("div",z,[G,i(t,{to:"virtual-scroller",class:"btn btn-primary get-start"},{default:$(()=>[K]),_:1})])]),i(e)],64)}var b=f(q,[["render",J]]);const M=[{path:"/study/",component:b},{path:"/study/virtual-scroller",component:C,children:H},{path:"/*",component:b}];function Q(){return I({history:P(),routes:M})}const U=u(()=>l(()=>import("./TheHeader.34133d0e.js"),["assets/TheHeader.34133d0e.js","assets/vendor.73d7a59d.js"])),X=u(()=>l(()=>import("./TheSidebar.83270970.js"),["assets/TheSidebar.83270970.js","assets/vendor.73d7a59d.js"])),Y=u(()=>l(()=>import("./TheFooter.7d780dfa.js"),["assets/TheFooter.7d780dfa.js","assets/TheFooter.9afc69d4.css","assets/vendor.73d7a59d.js"])),Z=u(()=>l(()=>import("./BaseVirtualScroller.c72b26fb.js"),["assets/BaseVirtualScroller.c72b26fb.js","assets/BaseVirtualScroller.906eeeca.css","assets/vendor.73d7a59d.js"])),ee=u(()=>l(()=>import("./BaseTutorialPage.81d2d358.js"),["assets/BaseTutorialPage.81d2d358.js","assets/BaseTutorialPage.4fdb012f.css","assets/vendor.73d7a59d.js"])),te=[{name:"the-header",component:U},{name:"the-sidebar",component:X},{name:"the-footer",component:Y},{name:"base-virtual-scroller",component:Z},{name:"base-tutorial-page",component:ee}];const oe=Q(),v=S(k);te.map(n=>{v.component(n.name,n.component)});v.use(oe);v.mount("#app");export{f as _};
//# sourceMappingURL=index.42bbb515.js.map