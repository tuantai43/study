import{_ as d}from"./index.b242487a.js";import{r as _,a as u,c as a,b as g,w as m,n as s,k as p,o as r,d as t}from"./vendor.407f7b89.js";const f={setup(l,{emit:o}){let e=_(!1);return{toggle:e,toggleIcon:()=>{e.value=!e.value,o("toggle-icon",e.value)}}},props:{hideMenuIcon:Boolean,transparent:Boolean}},v=t("strong",{class:"name"},"ptuantai",-1),h=t("div",{class:"bar1"},null,-1),k=t("div",{class:"bar2"},null,-1),b=t("div",{class:"bar3"},null,-1),I=[h,k,b];function x(l,o,e,n,B,C){const c=u("router-link");return r(),a("div",{class:s(["header",{transparent:e.transparent}])},[g(c,{to:{name:"Home"},class:"router-link"},{default:m(()=>[v]),_:1}),e.hideMenuIcon?p("",!0):(r(),a("div",{key:0,class:s(["menu-icon",{change:n.toggle}]),onClick:o[0]||(o[0]=(...i)=>n.toggleIcon&&n.toggleIcon(...i))},I,2))],2)}var j=d(f,[["render",x]]);export{j as default};