import{c as E,K as H,_ as J}from"./index-71d91ebe.js";import{s as j}from"./pinia-8895fa67.js";import{d as D,e as q,_ as G,j as Q,ah as s,o as _,c as b,V as e,P as l,a as S,T as u,U as V,S as c,F as U,u as W,O as X,aU as Y}from"./@vue-f9e59415.js";import"./vue-router-a024509b.js";import"./vue-i18n-c4e0915d.js";import"./@intlify-ed9c9b63.js";import"./vue-b5d7f7af.js";import"./js-cookie-edb2da2a.js";import"./@element-plus-f2d856bb.js";import"./nprogress-f4e438e8.js";import"./axios-9cbf0d09.js";import"./qs-36bd8b70.js";import"./side-channel-3a385e21.js";import"./get-intrinsic-88feedc6.js";import"./es-errors-82fd953f.js";import"./has-symbols-e8f3ca0e.js";import"./has-proto-1353c55e.js";import"./function-bind-61637ca6.js";import"./hasown-bc561cf0.js";import"./call-bind-9ec8ebd8.js";import"./set-function-length-ecd19468.js";import"./define-data-property-d38573ea.js";import"./es-define-property-cfa03815.js";import"./gopd-4c4454f6.js";import"./has-property-descriptors-68e2873e.js";import"./object-inspect-7ba7c20a.js";import"./element-plus-b9d096c5.js";import"./lodash-es-2e98bc53.js";import"./@vueuse-b50f0a95.js";import"./@sxzz-c75af06c.js";import"./@ctrl-f8748455.js";import"./dayjs-1b30f524.js";import"./async-validator-dee29e8b.js";import"./memoize-one-297ddbcb.js";import"./normalize-wheel-es-ed76fb12.js";import"./@floating-ui-fc8420ed.js";import"./mitt-f7ef348c.js";import"./vue-grid-layout-7e89b549.js";import"./vue-demi-71ba0ef2.js";const Z={class:"system-menu-dialog-container"},$={key:0},ee={class:"dialog-footer"},le=D({name:"systemMenuDialog"}),Ee=D({...le,emits:["refresh"],setup(oe,{expose:T,emit:w}){const L=w,A=Y(()=>J(()=>import("./index-008e9313.js"),["assets/js/index-008e9313.js","assets/js/index-71d91ebe.js","assets/js/@vue-f9e59415.js","assets/js/pinia-8895fa67.js","assets/js/vue-demi-71ba0ef2.js","assets/js/vue-router-a024509b.js","assets/js/vue-i18n-c4e0915d.js","assets/js/@intlify-ed9c9b63.js","assets/js/vue-b5d7f7af.js","assets/js/js-cookie-edb2da2a.js","assets/js/@element-plus-f2d856bb.js","assets/js/nprogress-f4e438e8.js","assets/css/nprogress-771398e6.css","assets/js/axios-9cbf0d09.js","assets/js/qs-36bd8b70.js","assets/js/side-channel-3a385e21.js","assets/js/get-intrinsic-88feedc6.js","assets/js/es-errors-82fd953f.js","assets/js/has-symbols-e8f3ca0e.js","assets/js/has-proto-1353c55e.js","assets/js/function-bind-61637ca6.js","assets/js/hasown-bc561cf0.js","assets/js/call-bind-9ec8ebd8.js","assets/js/set-function-length-ecd19468.js","assets/js/define-data-property-d38573ea.js","assets/js/es-define-property-cfa03815.js","assets/js/gopd-4c4454f6.js","assets/js/has-property-descriptors-68e2873e.js","assets/js/object-inspect-7ba7c20a.js","assets/js/element-plus-b9d096c5.js","assets/js/lodash-es-2e98bc53.js","assets/js/@vueuse-b50f0a95.js","assets/js/@sxzz-c75af06c.js","assets/js/@ctrl-f8748455.js","assets/js/dayjs-1b30f524.js","assets/js/async-validator-dee29e8b.js","assets/js/memoize-one-297ddbcb.js","assets/js/normalize-wheel-es-ed76fb12.js","assets/js/@floating-ui-fc8420ed.js","assets/js/mitt-f7ef348c.js","assets/js/vue-grid-layout-7e89b549.js","assets/css/index-35341635.css","assets/js/getStyleSheets-25a79286.js","assets/css/index-47b5c078.css"])),C=q(),v=E(),{routesList:I}=j(v),o=G({ruleForm:{menuSuperior:[],menuType:"menu",name:"",component:"",componentAlias:"",isLink:!1,menuSort:0,path:"",redirect:"",meta:{title:"",icon:"",isHide:!1,isKeepAlive:!0,isAffix:!1,isLink:"",isIframe:!1,roles:""},btnPower:""},menuData:[],dialog:{isShowDialog:!1,type:"",title:"",submitTxt:""}}),g=f=>{const t=[];return f.map(i=>{var m;i.title=H.global.t((m=i.meta)==null?void 0:m.title),t.push({...i}),i.children&&g(i.children)}),t},h=(f,t)=>{f==="edit"?(t.menuType="menu",t.menuSort=Math.floor(Math.random()*100),o.ruleForm=JSON.parse(JSON.stringify(t)),o.dialog.title="修改菜单",o.dialog.submitTxt="修 改"):(o.dialog.title="新增菜单",o.dialog.submitTxt="新 增"),o.dialog.type=f,o.dialog.isShowDialog=!0},x=()=>{o.dialog.isShowDialog=!1},N=()=>{o.ruleForm.meta.isIframe?o.ruleForm.isLink=!0:o.ruleForm.isLink=!1},P=()=>{x()},M=()=>{x(),L("refresh")};return Q(()=>{o.menuData=g(I.value)}),T({openDialog:h}),(f,t)=>{const i=s("el-cascader"),m=s("el-form-item"),r=s("el-col"),d=s("el-radio"),p=s("el-radio-group"),n=s("el-input"),F=s("el-option"),R=s("el-select"),B=s("el-input-number"),K=s("el-row"),O=s("el-form"),y=s("el-button"),z=s("el-dialog");return _(),b("div",Z,[e(z,{title:o.dialog.title,modelValue:o.dialog.isShowDialog,"onUpdate:modelValue":t[17]||(t[17]=a=>o.dialog.isShowDialog=a),width:"769px"},{footer:l(()=>[S("span",ee,[e(y,{onClick:P,size:"default"},{default:l(()=>[u("取 消")]),_:1}),e(y,{type:"primary",onClick:M,size:"default"},{default:l(()=>[u(V(o.dialog.submitTxt),1)]),_:1})])]),default:l(()=>[e(O,{ref_key:"menuDialogFormRef",ref:C,model:o.ruleForm,size:"default","label-width":"80px"},{default:l(()=>[e(K,{gutter:35},{default:l(()=>[e(r,{xs:24,sm:24,md:24,lg:24,xl:24,class:"mb20"},{default:l(()=>[e(m,{label:"上级菜单"},{default:l(()=>[e(i,{options:o.menuData,props:{checkStrictly:!0,value:"path",label:"title"},placeholder:"请选择上级菜单",clearable:"",class:"w100",modelValue:o.ruleForm.menuSuperior,"onUpdate:modelValue":t[0]||(t[0]=a=>o.ruleForm.menuSuperior=a)},{default:l(({node:a,data:k})=>[S("span",null,V(k.title),1),a.isLeaf?c("",!0):(_(),b("span",$," ("+V(k.children.length)+") ",1))]),_:1},8,["options","modelValue"])]),_:1})]),_:1}),e(r,{xs:24,sm:24,md:24,lg:24,xl:24,class:"mb20"},{default:l(()=>[e(m,{label:"菜单类型"},{default:l(()=>[e(p,{modelValue:o.ruleForm.menuType,"onUpdate:modelValue":t[1]||(t[1]=a=>o.ruleForm.menuType=a)},{default:l(()=>[e(d,{label:"menu"},{default:l(()=>[u("菜单")]),_:1}),e(d,{label:"btn"},{default:l(()=>[u("按钮")]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1}),e(r,{xs:24,sm:12,md:12,lg:12,xl:12,class:"mb20"},{default:l(()=>[e(m,{label:"菜单名称"},{default:l(()=>[e(n,{modelValue:o.ruleForm.meta.title,"onUpdate:modelValue":t[2]||(t[2]=a=>o.ruleForm.meta.title=a),placeholder:"格式：message.router.xxx",clearable:""},null,8,["modelValue"])]),_:1})]),_:1}),o.ruleForm.menuType==="menu"?(_(),b(U,{key:0},[e(r,{xs:24,sm:12,md:12,lg:12,xl:12,class:"mb20"},{default:l(()=>[e(m,{label:"路由名称"},{default:l(()=>[e(n,{modelValue:o.ruleForm.name,"onUpdate:modelValue":t[3]||(t[3]=a=>o.ruleForm.name=a),placeholder:"路由中的 name 值",clearable:""},null,8,["modelValue"])]),_:1})]),_:1}),e(r,{xs:24,sm:12,md:12,lg:12,xl:12,class:"mb20"},{default:l(()=>[e(m,{label:"路由路径"},{default:l(()=>[e(n,{modelValue:o.ruleForm.path,"onUpdate:modelValue":t[4]||(t[4]=a=>o.ruleForm.path=a),placeholder:"路由中的 path 值",clearable:""},null,8,["modelValue"])]),_:1})]),_:1}),e(r,{xs:24,sm:12,md:12,lg:12,xl:12,class:"mb20"},{default:l(()=>[e(m,{label:"重定向"},{default:l(()=>[e(n,{modelValue:o.ruleForm.redirect,"onUpdate:modelValue":t[5]||(t[5]=a=>o.ruleForm.redirect=a),placeholder:"请输入路由重定向",clearable:""},null,8,["modelValue"])]),_:1})]),_:1}),e(r,{xs:24,sm:12,md:12,lg:12,xl:12,class:"mb20"},{default:l(()=>[e(m,{label:"菜单图标"},{default:l(()=>[e(W(A),{placeholder:"请输入菜单图标",modelValue:o.ruleForm.meta.icon,"onUpdate:modelValue":t[6]||(t[6]=a=>o.ruleForm.meta.icon=a)},null,8,["modelValue"])]),_:1})]),_:1}),e(r,{xs:24,sm:12,md:12,lg:12,xl:12,class:"mb20"},{default:l(()=>[e(m,{label:"组件路径"},{default:l(()=>[e(n,{modelValue:o.ruleForm.componentAlias,"onUpdate:modelValue":t[7]||(t[7]=a=>o.ruleForm.componentAlias=a),placeholder:"组件路径",clearable:""},null,8,["modelValue"])]),_:1})]),_:1}),e(r,{xs:24,sm:12,md:12,lg:12,xl:12,class:"mb20"},{default:l(()=>[e(m,{label:"链接地址"},{default:l(()=>[e(n,{modelValue:o.ruleForm.meta.isLink,"onUpdate:modelValue":t[8]||(t[8]=a=>o.ruleForm.meta.isLink=a),placeholder:"外链/内嵌时链接地址（http:xxx.com）",clearable:"",disabled:!o.ruleForm.isLink},null,8,["modelValue","disabled"])]),_:1})]),_:1}),e(r,{xs:24,sm:12,md:12,lg:12,xl:12,class:"mb20"},{default:l(()=>[e(m,{label:"权限标识"},{default:l(()=>[e(R,{modelValue:o.ruleForm.meta.roles,"onUpdate:modelValue":t[9]||(t[9]=a=>o.ruleForm.meta.roles=a),multiple:"",placeholder:"取角色管理",clearable:"",class:"w100"},{default:l(()=>[e(F,{label:"admin",value:"admin"}),e(F,{label:"common",value:"common"})]),_:1},8,["modelValue"])]),_:1})]),_:1})],64)):c("",!0),o.ruleForm.menuType==="btn"?(_(),X(r,{key:1,xs:24,sm:12,md:12,lg:12,xl:12,class:"mb20"},{default:l(()=>[e(m,{label:"权限标识"},{default:l(()=>[e(n,{modelValue:o.ruleForm.btnPower,"onUpdate:modelValue":t[10]||(t[10]=a=>o.ruleForm.btnPower=a),placeholder:"请输入权限标识",clearable:""},null,8,["modelValue"])]),_:1})]),_:1})):c("",!0),e(r,{xs:24,sm:12,md:12,lg:12,xl:12,class:"mb20"},{default:l(()=>[e(m,{label:"菜单排序"},{default:l(()=>[e(B,{modelValue:o.ruleForm.menuSort,"onUpdate:modelValue":t[11]||(t[11]=a=>o.ruleForm.menuSort=a),"controls-position":"right",placeholder:"请输入排序",class:"w100"},null,8,["modelValue"])]),_:1})]),_:1}),o.ruleForm.menuType==="menu"?(_(),b(U,{key:2},[e(r,{xs:24,sm:12,md:12,lg:12,xl:12,class:"mb20"},{default:l(()=>[e(m,{label:"是否隐藏"},{default:l(()=>[e(p,{modelValue:o.ruleForm.meta.isHide,"onUpdate:modelValue":t[12]||(t[12]=a=>o.ruleForm.meta.isHide=a)},{default:l(()=>[e(d,{label:!0},{default:l(()=>[u("隐藏")]),_:1}),e(d,{label:!1},{default:l(()=>[u("不隐藏")]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1}),e(r,{xs:24,sm:12,md:12,lg:12,xl:12,class:"mb20"},{default:l(()=>[e(m,{label:"页面缓存"},{default:l(()=>[e(p,{modelValue:o.ruleForm.meta.isKeepAlive,"onUpdate:modelValue":t[13]||(t[13]=a=>o.ruleForm.meta.isKeepAlive=a)},{default:l(()=>[e(d,{label:!0},{default:l(()=>[u("缓存")]),_:1}),e(d,{label:!1},{default:l(()=>[u("不缓存")]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1}),e(r,{xs:24,sm:12,md:12,lg:12,xl:12,class:"mb20"},{default:l(()=>[e(m,{label:"是否固定"},{default:l(()=>[e(p,{modelValue:o.ruleForm.meta.isAffix,"onUpdate:modelValue":t[14]||(t[14]=a=>o.ruleForm.meta.isAffix=a)},{default:l(()=>[e(d,{label:!0},{default:l(()=>[u("固定")]),_:1}),e(d,{label:!1},{default:l(()=>[u("不固定")]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1}),e(r,{xs:24,sm:12,md:12,lg:12,xl:12,class:"mb20"},{default:l(()=>[e(m,{label:"是否外链"},{default:l(()=>[e(p,{modelValue:o.ruleForm.isLink,"onUpdate:modelValue":t[15]||(t[15]=a=>o.ruleForm.isLink=a),disabled:o.ruleForm.meta.isIframe},{default:l(()=>[e(d,{label:!0},{default:l(()=>[u("是")]),_:1}),e(d,{label:!1},{default:l(()=>[u("否")]),_:1})]),_:1},8,["modelValue","disabled"])]),_:1})]),_:1}),e(r,{xs:24,sm:12,md:12,lg:12,xl:12,class:"mb20"},{default:l(()=>[e(m,{label:"是否内嵌"},{default:l(()=>[e(p,{modelValue:o.ruleForm.meta.isIframe,"onUpdate:modelValue":t[16]||(t[16]=a=>o.ruleForm.meta.isIframe=a),onChange:N},{default:l(()=>[e(d,{label:!0},{default:l(()=>[u("是")]),_:1}),e(d,{label:!1},{default:l(()=>[u("否")]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1})],64)):c("",!0)]),_:1})]),_:1},8,["model"])]),_:1},8,["title","modelValue"])])}}});export{Ee as default};