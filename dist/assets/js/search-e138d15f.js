import{b as C}from"./vue-router-a024509b.js";import{v as T}from"./vue-i18n-c4e0915d.js";import{s as R}from"./pinia-8895fa67.js";import{a as k}from"./index-71d91ebe.js";import{d,e as I,_ as B,ah as r,o as Q,c as N,V as i,P as c,a as O,T as U,U as b,n as A}from"./@vue-f9e59415.js";import{_ as H}from"./_plugin-vue_export-helper-c27b6911.js";import"./@intlify-ed9c9b63.js";import"./vue-b5d7f7af.js";import"./vue-demi-71ba0ef2.js";import"./js-cookie-edb2da2a.js";import"./@element-plus-f2d856bb.js";import"./nprogress-f4e438e8.js";import"./axios-9cbf0d09.js";import"./qs-36bd8b70.js";import"./side-channel-3a385e21.js";import"./get-intrinsic-88feedc6.js";import"./es-errors-82fd953f.js";import"./has-symbols-e8f3ca0e.js";import"./has-proto-1353c55e.js";import"./function-bind-61637ca6.js";import"./hasown-bc561cf0.js";import"./call-bind-9ec8ebd8.js";import"./set-function-length-ecd19468.js";import"./define-data-property-d38573ea.js";import"./es-define-property-cfa03815.js";import"./gopd-4c4454f6.js";import"./has-property-descriptors-68e2873e.js";import"./object-inspect-7ba7c20a.js";import"./element-plus-b9d096c5.js";import"./lodash-es-2e98bc53.js";import"./@vueuse-b50f0a95.js";import"./@sxzz-c75af06c.js";import"./@ctrl-f8748455.js";import"./dayjs-1b30f524.js";import"./async-validator-dee29e8b.js";import"./memoize-one-297ddbcb.js";import"./normalize-wheel-es-ed76fb12.js";import"./@floating-ui-fc8420ed.js";import"./mitt-f7ef348c.js";import"./vue-grid-layout-7e89b549.js";const M={class:"layout-search-dialog"},P=d({name:"layoutBreadcrumbSearch"}),$=d({...P,setup(j,{expose:_}){const f=k(),{tagsViewRoutes:h}=R(f),p=I(),{t:w}=T.useI18n(),u=C(),t=B({isShowSearch:!1,menuQuery:"",tagsViewList:[]}),V=()=>{t.menuQuery="",t.isShowSearch=!0,L(),A(()=>{setTimeout(()=>{p.value.focus()})})},S=()=>{t.isShowSearch=!1},g=(e,o)=>{let s=e?t.tagsViewList.filter(v(e)):t.tagsViewList;o(s)},v=e=>o=>o.path.toLowerCase().indexOf(e.toLowerCase())>-1||o.meta.title.toLowerCase().indexOf(e.toLowerCase())>-1||w(o.meta.title).indexOf(e.toLowerCase())>-1,L=()=>{if(t.tagsViewList.length>0)return!1;h.value.map(e=>{var o;(o=e.meta)!=null&&o.isHide||t.tagsViewList.push({...e})})},x=e=>{var n,m,l;let{path:o,redirect:s}=e;(n=e.meta)!=null&&n.isLink&&!((m=e.meta)!=null&&m.isIframe)?window.open((l=e.meta)==null?void 0:l.isLink):s?u.push(s):u.push(o),S()};return _({openSearch:V}),(e,o)=>{const s=r("ele-Search"),n=r("el-icon"),m=r("SvgIcon"),l=r("el-autocomplete"),y=r("el-dialog");return Q(),N("div",M,[i(y,{modelValue:t.isShowSearch,"onUpdate:modelValue":o[1]||(o[1]=a=>t.isShowSearch=a),"destroy-on-close":"","show-close":!1},{footer:c(()=>[i(l,{modelValue:t.menuQuery,"onUpdate:modelValue":o[0]||(o[0]=a=>t.menuQuery=a),"fetch-suggestions":g,placeholder:e.$t("message.user.searchPlaceholder"),ref_key:"layoutMenuAutocompleteRef",ref:p,onSelect:x,"fit-input-width":!0},{prefix:c(()=>[i(n,{class:"el-input__icon"},{default:c(()=>[i(s)]),_:1})]),default:c(({item:a})=>[O("div",null,[i(m,{name:a.meta.icon,class:"mr5"},null,8,["name"]),U(" "+b(e.$t(a.meta.title)),1)])]),_:1},8,["modelValue","placeholder"])]),_:1},8,["modelValue"])])}}});const ke=H($,[["__scopeId","data-v-d25fc340"]]);export{ke as default};
