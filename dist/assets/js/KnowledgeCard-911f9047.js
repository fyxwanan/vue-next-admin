import{d as w,ah as c,o as d,c as l,a as e,U as s,u as o,T as n,V as a,P as i,F as v,a8 as h}from"./@vue-f9e59415.js";import{_ as m}from"./_plugin-vue_export-helper-c27b6911.js";const k="/assets/png/defaultCover-54f3196b.png",C={class:"knowledge-card-wrapper"},x={class:"knowledge-card-left"},V={class:"knowledge-card-title"},b=["innerHTML"],y={class:"knowledge-card-footer"},T={class:"knowledge-card-footer-left"},B={class:"knowledge-card-footer-right"},K={class:"knowledge-card-right"},L=["src"],N=w({__name:"KnowledgeCard",props:{knowledge:{}},setup(p){const u=p,{knowledge:t}=u;return(S,F)=>{const g=c("View"),r=c("el-icon"),f=c("Star");return d(),l("div",C,[e("div",x,[e("div",V,s(o(t).title),1),e("div",{class:"knowledge-card-content",innerHTML:o(t).content},null,8,b),e("div",y,[e("div",T,[n(s(o(t).author)+" | ",1),e("span",null,[a(r,null,{default:i(()=>[a(g)]),_:1}),n(" "+s(o(t).readCount),1)]),n(" | "),e("span",null,[a(r,null,{default:i(()=>[a(f)]),_:1}),n(" "+s(o(t).likesCount),1)])]),e("div",B,[(d(!0),l(v,null,h(o(t).labels,_=>(d(),l("span",{class:"tag-item",key:_},s(_),1))),128))])])]),e("div",K,[e("img",{src:o(t).cover||o(k),alt:"cover"},null,8,L)])])}}});const D=m(N,[["__scopeId","data-v-30f1cdcb"]]);export{D as default};
