import{_ as n}from"./index.bdc67efa.js";import{a as t,j as i,w as r,o as c,b as p,e as u,t as _}from"./vendor.bc66e691.js";const d={setup(){return{routes:[{text:"Virtual scroller",index:"virtual-scroller"},{text:"Single Page Apps for GitHub Pages",index:"single-page-app-for-github-pages"}]}}};function x(o,f,b,a,m,g){const s=t("router-link"),l=t("base-virtual-scroller");return c(),i(l,{items:a.routes,amount:20,"item-height":30},{template:r(({item:e})=>[p(s,{to:e.index,class:"router-link",title:e.text,"aria-label":e.text},{default:r(()=>[u(_(e.text),1)]),_:2},1032,["to","title","aria-label"])]),_:1},8,["items"])}var k=n(d,[["render",x]]);export{k as default};