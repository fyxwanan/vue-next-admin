import{K as c,_ as u}from"./ListWrapper.vue_vue_type_script_setup_true_lang-90d6659d.js";import{d as f,_ as b,ah as t,o,c as m,V as l,P as s,F as v,a8 as x,O as h}from"./@vue-f9e59415.js";import{_ as y}from"./_plugin-vue_export-helper-c27b6911.js";import"./KnowledgeCard-911f9047.js";const k={class:"juejin-home-container layout-pd"},C=f({__name:"index",setup(N){const n=b({menuList:[{name:c.RECOMMOND,label:"推荐"},{name:c.NEWEST,label:"最新"}],activeName:"recommond"}),d=(_,a)=>{console.log(_,a)};return(_,a)=>{const r=t("el-tab-pane"),p=t("el-tabs"),i=t("el-card");return o(),m("div",k,[l(i,{shadow:"hover",header:"掘金首页"},{default:s(()=>[l(p,{modelValue:n.activeName,"onUpdate:modelValue":a[0]||(a[0]=e=>n.activeName=e),class:"demo-tabs",onTabClick:d},{default:s(()=>[(o(!0),m(v,null,x(n.menuList,e=>(o(),h(r,{key:e.name,label:e.label,name:e.name},{default:s(()=>[l(u,{type:e.name},null,8,["type"])]),_:2},1032,["label","name"]))),128))]),_:1},8,["modelValue"])]),_:1})])}}});const B=y(C,[["__scopeId","data-v-d9f01a64"]]);export{B as default};