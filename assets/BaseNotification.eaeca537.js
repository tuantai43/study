var p=Object.defineProperty,v=Object.defineProperties;var x=Object.getOwnPropertyDescriptors;var r=Object.getOwnPropertySymbols;var b=Object.prototype.hasOwnProperty,y=Object.prototype.propertyIsEnumerable;var f=(t,e,n)=>e in t?p(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,l=(t,e)=>{for(var n in e||(e={}))b.call(e,n)&&f(t,n,e[n]);if(r)for(var n of r(e))y.call(e,n)&&f(t,n,e[n]);return t},d=(t,e)=>v(t,x(e));import{_ as B,a as I}from"./index.a6d727fd.js";import{h,r as m,l as j,v as k,a as A,c as u,F as C,q as N,o as s,j as g}from"./vendor.e4bc6a5d.js";import{n as E}from"./notify-service.1571ddc9.js";const $={components:{BaseNotificationItem:h(()=>I(()=>import("./BaseNotificationItem.faeaca1e.js"),["assets/BaseNotificationItem.faeaca1e.js","assets/vendor.e4bc6a5d.js","assets/index.a6d727fd.js","assets/index.068e8428.css"]))},setup(){const t=m([]),e=m([]),n=E.getNotify().subscribe(o=>{o&&t.value.push(d(l({},o),{index:t.value.length}))}),a=j(()=>t.value.filter(o=>!e.value.includes(o.index))),c=o=>{e.value.push(o)};return k(()=>{n.unsubscribe()}),{notificationsActive:a,clearItem:c}}},D={class:"notifications"};function F(t,e,n,a,c,o){const _=A("base-notification-item");return s(),u("div",D,[(s(!0),u(C,null,N(a.notificationsActive,i=>(s(),g(_,{key:`notification-item-${i.index}`,index:i.index,content:i.content,title:i.title,timer:i.timer,type:i.type,onClearItem:a.clearItem},null,8,["index","content","title","timer","type","onClearItem"]))),128))])}var R=B($,[["render",F]]);export{R as default};
