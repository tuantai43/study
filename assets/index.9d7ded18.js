import{r as g,a,c as p,b as i,n as y,o as f,d as u,w as E,F as $,e as L,f as V,g as I,h as d,i as P}from"./vendor.73d7a59d.js";const S=function(){const c=document.createElement("link").relList;if(c&&c.supports&&c.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&t(r)}).observe(document,{childList:!0,subtree:!0});function s(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerpolicy&&(o.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?o.credentials="include":e.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function t(e){if(e.ep)return;e.ep=!0;const o=s(e);fetch(e.href,o)}};S();var h=(n,c)=>{for(const[s,t]of c)n[s]=t;return n};const A={setup(){return{theme:g("default-theme")}}};function O(n,c,s,t,e,o){const r=a("router-view");return f(),p("div",{class:y(t.theme)},[i(r)],2)}var R=h(A,[["render",O]]);const k={setup(){let n=g(!1);return{displaySidebar:n,onToggleIcon:s=>{n.value=s}}}},w={class:"container"},x={class:"page-body"},j={class:"page-content"};function B(n,c,s,t,e,o){const r=a("the-header"),_=a("the-sidebar"),m=a("router-view"),b=a("the-footer");return f(),p("div",w,[i(r,{onToggleIcon:t.onToggleIcon},null,8,["onToggleIcon"]),u("div",x,[i(_,{class:y(["sidebar",{active:t.displaySidebar}])},null,8,["class"]),u("div",j,[i(m)])]),i(b)])}var D=h(k,[["render",B]]);const C="modulepreload",T={},N="/study/",l=function(c,s){return!s||s.length===0?c():Promise.all(s.map(t=>{if(t=`${N}${t}`,t in T)return;T[t]=!0;const e=t.endsWith(".css"),o=e?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${t}"]${o}`))return;const r=document.createElement("link");if(r.rel=e?"stylesheet":C,e||(r.as="script",r.crossOrigin=""),r.href=t,document.head.appendChild(r),e)return new Promise((_,m)=>{r.addEventListener("load",_),r.addEventListener("error",m)})})).then(()=>c())},F=[{path:"",name:"VirtualScroller",component:()=>l(()=>import("./VirtualScrollerIndex.282fe126.js"),["assets/VirtualScrollerIndex.282fe126.js","assets/VirtualScrollerIndex.a0311dd6.css","assets/vendor.73d7a59d.js"])}],H={},q={class:"container transparent"},W={class:"home-page page-body"},z=u("p",{class:"say-hi"},"Hello",-1),G=L(" GET START ");function K(n,c){const s=a("the-header"),t=a("router-link"),e=a("the-footer");return f(),p($,null,[u("div",q,[i(s,{"hide-menu-icon":!0,transparent:!0}),u("div",W,[z,i(t,{to:"virtual-scroller",class:"btn btn-primary get-start"},{default:E(()=>[G]),_:1})])]),i(e)],64)}var J=h(H,[["render",K]]);const M=[{path:"/study/",component:J},{path:"/study/virtual-scroller",component:D,children:F}];function Q(){return V({history:I(),routes:M})}const U=d(()=>l(()=>import("./TheHeader.f17ca22a.js"),["assets/TheHeader.f17ca22a.js","assets/vendor.73d7a59d.js"])),X=d(()=>l(()=>import("./TheSidebar.fc34c876.js"),["assets/TheSidebar.fc34c876.js","assets/vendor.73d7a59d.js"])),Y=d(()=>l(()=>import("./TheFooter.2aaf0e86.js"),["assets/TheFooter.2aaf0e86.js","assets/TheFooter.9afc69d4.css","assets/vendor.73d7a59d.js"])),Z=d(()=>l(()=>import("./BaseVirtualScroller.2f19f0d8.js"),["assets/BaseVirtualScroller.2f19f0d8.js","assets/BaseVirtualScroller.906eeeca.css","assets/vendor.73d7a59d.js"])),ee=d(()=>l(()=>import("./BaseTutorialPage.b4ce8ade.js"),["assets/BaseTutorialPage.b4ce8ade.js","assets/BaseTutorialPage.4fdb012f.css","assets/vendor.73d7a59d.js"])),te=[{name:"the-header",component:U},{name:"the-sidebar",component:X},{name:"the-footer",component:Y},{name:"base-virtual-scroller",component:Z},{name:"base-tutorial-page",component:ee}];const oe=Q(),v=P(R);te.map(n=>{v.component(n.name,n.component)});v.use(oe);v.mount("#app");export{h as _};
//# sourceMappingURL=index.9d7ded18.js.map
