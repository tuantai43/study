import{r as _,a as c,o as i,j as n,w as p,d,t as m}from"./vendor.e4bc6a5d.js";import{_ as u}from"./index.a6d727fd.js";const v={class:"item"},f={props:{rows:{type:Number,default:15e4}},setup(a){const o=a,t=_([]);let e=0;for(;e<o.rows;){const s=`item ${e}`;t.value.push({index:e,text:s}),e++}return(s,x)=>{const r=c("base-virtual-scroller");return i(),n(r,{items:t.value,amount:15,"item-height":24},{template:p(({item:l})=>[d("div",v,m(l.text),1)]),_:1},8,["items"])}}};var b=u(f,[["__scopeId","data-v-df348198"]]);export{b as default};
