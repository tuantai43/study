import{_ as n}from"./index.950a0359.js";import{a as e,j as l,w as o,o as c,b as p,e as x,t as u}from"./vendor.e4bc6a5d.js";const _={setup(){return{routes:[{text:"Virtual scroller",index:"virtual-scroller"},{text:"Pagination",index:"pagination"},{text:"Notification",index:"notification"},{text:"Repository Factory",index:"repository-factory"},{text:"Single Page Apps for GitHub Pages",index:"single-page-app-for-github-pages"}]}}};function d(r,f,g,a,m,b){const i=e("router-link"),s=e("base-virtual-scroller");return c(),l(s,{items:a.routes,amount:20,"item-height":30},{template:o(({item:t})=>[p(i,{to:t.index,class:"router-link",title:t.text,"aria-label":t.text},{default:o(()=>[x(u(t.text),1)]),_:2},1032,["to","title","aria-label"])]),_:1},8,["items"])}var k=n(_,[["render",d]]);export{k as default};