import{s as u}from"./pinia-8895fa67.js";import{u as h}from"./index-71d91ebe.js";import{d as n,_ as k,k as v,ah as g,o as e,c as i,a as r,U as C,F as w,a8 as N,V as T}from"./@vue-f9e59415.js";import{_ as x}from"./_plugin-vue_export-helper-c27b6911.js";import"./vue-demi-71ba0ef2.js";import"./vue-router-a024509b.js";import"./vue-i18n-c4e0915d.js";import"./@intlify-ed9c9b63.js";import"./vue-b5d7f7af.js";import"./js-cookie-edb2da2a.js";import"./@element-plus-f2d856bb.js";import"./nprogress-f4e438e8.js";import"./axios-9cbf0d09.js";import"./qs-36bd8b70.js";import"./side-channel-3a385e21.js";import"./get-intrinsic-88feedc6.js";import"./es-errors-82fd953f.js";import"./has-symbols-e8f3ca0e.js";import"./has-proto-1353c55e.js";import"./function-bind-61637ca6.js";import"./hasown-bc561cf0.js";import"./call-bind-9ec8ebd8.js";import"./set-function-length-ecd19468.js";import"./define-data-property-d38573ea.js";import"./es-define-property-cfa03815.js";import"./gopd-4c4454f6.js";import"./has-property-descriptors-68e2873e.js";import"./object-inspect-7ba7c20a.js";import"./element-plus-b9d096c5.js";import"./lodash-es-2e98bc53.js";import"./@vueuse-b50f0a95.js";import"./@sxzz-c75af06c.js";import"./@ctrl-f8748455.js";import"./dayjs-1b30f524.js";import"./async-validator-dee29e8b.js";import"./memoize-one-297ddbcb.js";import"./normalize-wheel-es-ed76fb12.js";import"./@floating-ui-fc8420ed.js";import"./mitt-f7ef348c.js";import"./vue-grid-layout-7e89b549.js";const y={class:"workflow-tool"},D={class:"pl15"},S={class:"workflow-tool-right"},B=["title","onClick"],F=n({name:"pagesWorkflowTool"}),I=n({...F,emits:["tool"],setup(L,{emit:m}){const l=m,s=h(),{themeConfig:p}=u(s),c=k({toolList:[{icon:"ele-Help",title:"帮助",fnName:"help"},{icon:"ele-Download",title:"下载",fnName:"download"},{icon:"ele-Check",title:"提交",fnName:"submit"},{icon:"ele-DocumentCopy",title:"复制",fnName:"copy"},{icon:"ele-Delete",title:"删除",fnName:"del"},{icon:"ele-FullScreen",title:"全屏",fnName:"fullscreen"}]}),a=v(()=>{let{globalTitle:o}=p.value;return`${o}工作流`}),_=o=>{l("tool",o)};return(o,V)=>{const d=g("SvgIcon");return e(),i("div",y,[r("div",D,C(a.value),1),r("div",S,[(e(!0),i(w,null,N(c.toolList,(t,f)=>(e(),i("div",{class:"workflow-tool-icon",key:f,title:t.title,onClick:b=>_(t.fnName)},[T(d,{name:t.icon},null,8,["name"])],8,B))),128))])])}}});const wo=x(I,[["__scopeId","data-v-99d14c46"]]);export{wo as default};