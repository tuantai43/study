import{r as g,a as c,c as p,b as i,n as y,o as h,d,w as E,e as $,f as V,g as L,h as u,i as S}from"./vendor.73d7a59d.js";const I=function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&t(r)}).observe(document,{childList:!0,subtree:!0});function s(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerpolicy&&(o.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?o.credentials="include":e.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function t(e){if(e.ep)return;e.ep=!0;const o=s(e);fetch(e.href,o)}};I();var f=(n,a)=>{for(const[s,t]of a)n[s]=t;return n};const P={setup(){return{theme:g("default-theme")}}};function A(n,a,s,t,e,o){const r=c("router-view");return h(),p("div",{class:y(t.theme)},[i(r)],2)}var O=f(P,[["render",A]]);const R={setup(){let n=g(!1);return{displaySidebar:n,onToggleIcon:s=>{n.value=s}}}},k={class:"container"},w={class:"page-body"},x={class:"page-content"};function j(n,a,s,t,e,o){const r=c("the-header"),_=c("the-sidebar"),m=c("router-view"),T=c("the-footer");return h(),p("div",k,[i(r,{onToggleIcon:t.onToggleIcon},null,8,["onToggleIcon"]),d("div",w,[i(_,{class:y(["sidebar",{active:t.displaySidebar}])},null,8,["class"]),d("div",x,[i(m)])]),i(T)])}var B=f(R,[["render",j]]);const D="modulepreload",b={},C="/study/",l=function(a,s){return!s||s.length===0?a():Promise.all(s.map(t=>{if(t=`${C}${t}`,t in b)return;b[t]=!0;const e=t.endsWith(".css"),o=e?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${t}"]${o}`))return;const r=document.createElement("link");if(r.rel=e?"stylesheet":D,e||(r.as="script",r.crossOrigin=""),r.href=t,document.head.appendChild(r),e)return new Promise((_,m)=>{r.addEventListener("load",_),r.addEventListener("error",m)})})).then(()=>a())},H=[{path:"",name:"VirtualScroller",component:()=>l(()=>import("./VirtualScrollerIndex.16a35b2d.js"),["assets/VirtualScrollerIndex.16a35b2d.js","assets/VirtualScrollerIndex.a0311dd6.css","assets/vendor.73d7a59d.js"])}],N={},F={class:"home-page"},q={class:"container page-body transparent"},W=d("p",{class:"say-hi"},"Hello",-1),z=$(" GET START ");function G(n,a){const s=c("the-header"),t=c("router-link"),e=c("the-footer");return h(),p("div",F,[i(s,{class:"container","hide-menu-icon":!0,transparent:!0}),d("div",q,[W,i(t,{to:"virtual-scroller",class:"btn btn-primary get-start"},{default:E(()=>[z]),_:1})]),i(e)])}var K=f(N,[["render",G]]);const J=[{path:"/",name:"Home",component:K},{path:"/virtual-scroller",component:B,name:"VirtualScroller",children:H}];function M(){return V({history:L("/study"),routes:J})}const Q=u(()=>l(()=>import("./TheHeader.d8cb7e5a.js"),["assets/TheHeader.d8cb7e5a.js","assets/vendor.73d7a59d.js"])),U=u(()=>l(()=>import("./TheSidebar.652bfc17.js"),["assets/TheSidebar.652bfc17.js","assets/vendor.73d7a59d.js"])),X=u(()=>l(()=>import("./TheFooter.49aa3b54.js"),["assets/TheFooter.49aa3b54.js","assets/vendor.73d7a59d.js"])),Y=u(()=>l(()=>import("./BaseVirtualScroller.8084e460.js"),["assets/BaseVirtualScroller.8084e460.js","assets/BaseVirtualScroller.906eeeca.css","assets/vendor.73d7a59d.js"])),Z=u(()=>l(()=>import("./BaseTutorialPage.a77b09e5.js"),["assets/BaseTutorialPage.a77b09e5.js","assets/BaseTutorialPage.4fdb012f.css","assets/vendor.73d7a59d.js"])),ee=[{name:"the-header",component:Q},{name:"the-sidebar",component:U},{name:"the-footer",component:X},{name:"base-virtual-scroller",component:Y},{name:"base-tutorial-page",component:Z}];const te=M(),v=S(O);ee.map(n=>{v.component(n.name,n.component)});v.use(te);v.mount("#app");export{f as _};
