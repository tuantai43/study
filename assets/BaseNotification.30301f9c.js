var p=Object.defineProperty,v=Object.defineProperties;var x=Object.getOwnPropertyDescriptors;var r=Object.getOwnPropertySymbols;var b=Object.prototype.hasOwnProperty,y=Object.prototype.propertyIsEnumerable;var l=(t,e,n)=>e in t?p(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,f=(t,e)=>{for(var n in e||(e={}))b.call(e,n)&&l(t,n,e[n]);if(r)for(var n of r(e))y.call(e,n)&&l(t,n,e[n]);return t},m=(t,e)=>v(t,x(e));import{_ as B,a as I}from"./index.ce210491.js";import{h,r as u,l as j,x as k,a as A,c as d,F as C,q as N,o as a,j as g}from"./vendor.fcc8e3a6.js";import{n as E}from"./notify-service.1571ddc9.js";const $={components:{BaseNotificationItem:h(()=>I(()=>import("./BaseNotificationItem.e821a0a9.js"),["assets/BaseNotificationItem.e821a0a9.js","assets/vendor.fcc8e3a6.js","assets/index.ce210491.js","assets/index.068e8428.css"]))},setup(){const t=u([]),e=u([]),n=E.getNotify().subscribe(o=>{o&&t.value.push(m(f({},o),{index:t.value.length}))}),s=j(()=>t.value.filter(o=>!e.value.includes(o.index))),c=o=>{e.value.push(o)};return k(()=>{n.unsubscribe()}),{notificationsActive:s,clearItem:c}}},D={class:"notifications"};function F(t,e,n,s,c,o){const _=A("base-notification-item");return a(),d("div",D,[(a(!0),d(C,null,N(s.notificationsActive,i=>(a(),g(_,{key:`notification-item-${i.index}`,index:i.index,content:i.content,title:i.title,timer:i.timer,type:i.type,onClearItem:s.clearItem},null,8,["index","content","title","timer","type","onClearItem"]))),128))])}var R=B($,[["render",F]]);export{R as default};