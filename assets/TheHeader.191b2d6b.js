import{_ as d}from"./index.ce210491.js";import{r as _,a as u,c as a,b as g,w as m,n as s,k as p,o as r,d as t}from"./vendor.fcc8e3a6.js";const f={setup(c,{emit:o}){let e=_(!1);return{toggle:e,toggleIcon:()=>{e.value=!e.value,o("toggle-icon",e.value)}}},props:{hideMenuIcon:Boolean,transparent:Boolean}},v=t("strong",{class:"name"},"ptuantai",-1),h=t("div",{class:"bar1"},null,-1),k=t("div",{class:"bar2"},null,-1),I=t("div",{class:"bar3"},null,-1),x=[h,k,I];function B(c,o,e,n,C,b){const l=u("router-link");return r(),a("div",{class:s(["header",{transparent:e.transparent}])},[g(l,{to:{name:"Home"},class:"router-link"},{default:m(()=>[v]),_:1}),e.hideMenuIcon?p("",!0):(r(),a("div",{key:0,class:s(["menu-icon",{change:n.toggle}]),onClick:o[0]||(o[0]=(...i)=>n.toggleIcon&&n.toggleIcon(...i))},x,2))],2)}var j=d(f,[["render",B]]);export{j as default};
