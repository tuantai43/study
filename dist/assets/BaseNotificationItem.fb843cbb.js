import{r as m,c as i,t as r,k as o,n as c,o as n}from"./vendor.407f7b89.js";import{_ as d}from"./index.b242487a.js";const l={props:{index:Number,title:String,content:String,icon:String,type:{type:String,default:"warning",validator:t=>["warning","danger"].includes(t)},timer:{type:Number,default:2e3,validator:t=>t>0}},emits:["clear-item"],setup(t,{emit:a}){const e=m("move-in");return setTimeout(()=>{e.value=""},100),setTimeout(()=>{e.value="move-out"},t.timer),setTimeout(()=>{a("clear-item",t.index)},t.timer+250),{animate:e}}},u={key:0},f={key:1};function _(t,a,e,s,v,g){return n(),i("div",{class:c(["notify-item",e.type,s.animate])},[e.title?(n(),i("div",u,r(e.title),1)):o("",!0),e.content?(n(),i("div",f,r(e.content),1)):o("",!0)],2)}var k=d(l,[["render",_]]);export{k as default};