import{c as $,_ as A}from"./index-71d91ebe.js";import{s as S}from"./pinia-8895fa67.js";import{E as V,a as O}from"./element-plus-b9d096c5.js";import{d as v,e as I,_ as L,j as N,ah as a,ap as P,o as w,c as F,V as t,P as e,a as c,T as s,Q as U,O as j,U as m,u as Q,aU as q}from"./@vue-f9e59415.js";import"./vue-router-a024509b.js";import"./vue-i18n-c4e0915d.js";import"./@intlify-ed9c9b63.js";import"./vue-b5d7f7af.js";import"./js-cookie-edb2da2a.js";import"./@element-plus-f2d856bb.js";import"./nprogress-f4e438e8.js";import"./axios-9cbf0d09.js";import"./qs-36bd8b70.js";import"./side-channel-3a385e21.js";import"./get-intrinsic-88feedc6.js";import"./es-errors-82fd953f.js";import"./has-symbols-e8f3ca0e.js";import"./has-proto-1353c55e.js";import"./function-bind-61637ca6.js";import"./hasown-bc561cf0.js";import"./call-bind-9ec8ebd8.js";import"./set-function-length-ecd19468.js";import"./define-data-property-d38573ea.js";import"./es-define-property-cfa03815.js";import"./gopd-4c4454f6.js";import"./has-property-descriptors-68e2873e.js";import"./object-inspect-7ba7c20a.js";import"./mitt-f7ef348c.js";import"./vue-grid-layout-7e89b549.js";import"./vue-demi-71ba0ef2.js";import"./lodash-es-2e98bc53.js";import"./@vueuse-b50f0a95.js";import"./@sxzz-c75af06c.js";import"./@ctrl-f8748455.js";import"./dayjs-1b30f524.js";import"./async-validator-dee29e8b.js";import"./memoize-one-297ddbcb.js";import"./normalize-wheel-es-ed76fb12.js";import"./@floating-ui-fc8420ed.js";const G={class:"system-menu-container layout-pd"},H={class:"system-menu-search mb15"},J={class:"ml10"},K=v({name:"systemMenu"}),Ot=v({...K,setup(W){const b=q(()=>A(()=>import("./dialog-bb1ad144.js"),["assets/js/dialog-bb1ad144.js","assets/js/index-71d91ebe.js","assets/js/@vue-f9e59415.js","assets/js/pinia-8895fa67.js","assets/js/vue-demi-71ba0ef2.js","assets/js/vue-router-a024509b.js","assets/js/vue-i18n-c4e0915d.js","assets/js/@intlify-ed9c9b63.js","assets/js/vue-b5d7f7af.js","assets/js/js-cookie-edb2da2a.js","assets/js/@element-plus-f2d856bb.js","assets/js/nprogress-f4e438e8.js","assets/css/nprogress-771398e6.css","assets/js/axios-9cbf0d09.js","assets/js/qs-36bd8b70.js","assets/js/side-channel-3a385e21.js","assets/js/get-intrinsic-88feedc6.js","assets/js/es-errors-82fd953f.js","assets/js/has-symbols-e8f3ca0e.js","assets/js/has-proto-1353c55e.js","assets/js/function-bind-61637ca6.js","assets/js/hasown-bc561cf0.js","assets/js/call-bind-9ec8ebd8.js","assets/js/set-function-length-ecd19468.js","assets/js/define-data-property-d38573ea.js","assets/js/es-define-property-cfa03815.js","assets/js/gopd-4c4454f6.js","assets/js/has-property-descriptors-68e2873e.js","assets/js/object-inspect-7ba7c20a.js","assets/js/element-plus-b9d096c5.js","assets/js/lodash-es-2e98bc53.js","assets/js/@vueuse-b50f0a95.js","assets/js/@sxzz-c75af06c.js","assets/js/@ctrl-f8748455.js","assets/js/dayjs-1b30f524.js","assets/js/async-validator-dee29e8b.js","assets/js/memoize-one-297ddbcb.js","assets/js/normalize-wheel-es-ed76fb12.js","assets/js/@floating-ui-fc8420ed.js","assets/js/mitt-f7ef348c.js","assets/js/vue-grid-layout-7e89b549.js","assets/css/index-35341635.css"])),y=$(),{routesList:g}=S(y),d=I(),r=L({tableData:{data:[],loading:!0}}),_=()=>{r.tableData.loading=!0,r.tableData.data=g.value,setTimeout(()=>{r.tableData.loading=!1},500)},u=l=>{d.value.openDialog(l)},D=(l,i)=>{d.value.openDialog(l,i)},x=l=>{V.confirm(`此操作将永久删除路由：${l.path}, 是否继续?`,"提示",{confirmButtonText:"删除",cancelButtonText:"取消",type:"warning"}).then(()=>{O.success("删除成功"),_()}).catch(()=>{})};return N(()=>{_()}),(l,i)=>{const C=a("el-input"),k=a("ele-Search"),f=a("el-icon"),p=a("el-button"),T=a("ele-FolderAdd"),z=a("SvgIcon"),n=a("el-table-column"),B=a("el-tag"),E=a("el-table"),M=a("el-card"),R=P("loading");return w(),F("div",G,[t(M,{shadow:"hover"},{default:e(()=>[c("div",H,[t(C,{size:"default",placeholder:"请输入菜单名称",style:{"max-width":"180px"}}),t(p,{size:"default",type:"primary",class:"ml10"},{default:e(()=>[t(f,null,{default:e(()=>[t(k)]),_:1}),s(" 查询 ")]),_:1}),t(p,{size:"default",type:"success",class:"ml10",onClick:u},{default:e(()=>[t(f,null,{default:e(()=>[t(T)]),_:1}),s(" 新增菜单 ")]),_:1})]),U((w(),j(E,{data:r.tableData.data,style:{width:"100%"},"row-key":"path","tree-props":{children:"children",hasChildren:"hasChildren"}},{default:e(()=>[t(n,{label:"菜单名称","show-overflow-tooltip":""},{default:e(o=>[t(z,{name:o.row.meta.icon},null,8,["name"]),c("span",J,m(l.$t(o.row.meta.title)),1)]),_:1}),t(n,{prop:"path",label:"路由路径","show-overflow-tooltip":""}),t(n,{label:"组件路径","show-overflow-tooltip":""},{default:e(o=>[c("span",null,m(o.row.component),1)]),_:1}),t(n,{label:"权限标识","show-overflow-tooltip":""},{default:e(o=>[c("span",null,m(o.row.meta.roles),1)]),_:1}),t(n,{label:"排序","show-overflow-tooltip":"",width:"80"},{default:e(o=>[s(m(o.$index),1)]),_:1}),t(n,{label:"类型","show-overflow-tooltip":"",width:"80"},{default:e(o=>[t(B,{type:"success",size:"small"},{default:e(()=>[s(m(o.row.xx)+"菜单",1)]),_:2},1024)]),_:1}),t(n,{label:"操作","show-overflow-tooltip":"",width:"140"},{default:e(o=>[t(p,{size:"small",text:"",type:"primary",onClick:i[0]||(i[0]=h=>u("add"))},{default:e(()=>[s("新增")]),_:1}),t(p,{size:"small",text:"",type:"primary",onClick:h=>D("edit",o.row)},{default:e(()=>[s("修改")]),_:2},1032,["onClick"]),t(p,{size:"small",text:"",type:"primary",onClick:h=>x(o.row)},{default:e(()=>[s("删除")]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"])),[[R,r.tableData.loading]])]),_:1}),t(Q(b),{ref_key:"menuDialogRef",ref:d,onRefresh:i[1]||(i[1]=o=>_())},null,512)])}}});export{Ot as default};