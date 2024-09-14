import{d as p,e as T,_ as I,ah as s,o as z,c as B,V as l,P as o,a as b,T as _,U as P,bm as R,bk as E}from"./@vue-f9e59415.js";import{_ as M}from"./_plugin-vue_export-helper-c27b6911.js";const j=n=>(R("data-v-3d17562c"),n=n(),E(),n),q={class:"system-role-dialog-container"},A=j(()=>b("span",null,"角色标识",-1)),G={class:"dialog-footer"},H=p({name:"systemRoleDialog"}),J=p({...H,emits:["refresh"],setup(n,{expose:f,emit:g}){const x=g,h=T(),e=I({ruleForm:{roleName:"",roleSign:"",sort:0,status:!0,describe:""},menuData:[],menuProps:{children:"children",label:"label"},dialog:{isShowDialog:!1,type:"",title:"",submitTxt:""}}),V=(u,t)=>{u==="edit"?(e.ruleForm=t,e.dialog.title="修改角色",e.dialog.submitTxt="修 改"):(e.dialog.title="新增角色",e.dialog.submitTxt="新 增"),e.dialog.isShowDialog=!0,F()},m=()=>{e.dialog.isShowDialog=!1},w=()=>{m()},D=()=>{m(),x("refresh")},F=()=>{e.menuData=[{id:1,label:"系统管理",children:[{id:11,label:"菜单管理",children:[{id:111,label:"菜单新增"},{id:112,label:"菜单修改"},{id:113,label:"菜单删除"},{id:114,label:"菜单查询"}]},{id:12,label:"角色管理",children:[{id:121,label:"角色新增"},{id:122,label:"角色修改"},{id:123,label:"角色删除"},{id:124,label:"角色查询"}]},{id:13,label:"用户管理",children:[{id:131,label:"用户新增"},{id:132,label:"用户修改"},{id:133,label:"用户删除"},{id:134,label:"用户查询"}]}]},{id:2,label:"权限管理",children:[{id:21,label:"前端控制",children:[{id:211,label:"页面权限"},{id:212,label:"页面权限"}]},{id:22,label:"后端控制",children:[{id:221,label:"页面权限"}]}]}]};return f({openDialog:V}),(u,t)=>{const r=s("el-input"),d=s("el-form-item"),i=s("el-col"),S=s("el-tooltip"),y=s("el-input-number"),v=s("el-switch"),k=s("el-tree"),U=s("el-row"),C=s("el-form"),c=s("el-button"),N=s("el-dialog");return z(),B("div",q,[l(N,{title:e.dialog.title,modelValue:e.dialog.isShowDialog,"onUpdate:modelValue":t[5]||(t[5]=a=>e.dialog.isShowDialog=a),width:"769px"},{footer:o(()=>[b("span",G,[l(c,{onClick:w,size:"default"},{default:o(()=>[_("取 消")]),_:1}),l(c,{type:"primary",onClick:D,size:"default"},{default:o(()=>[_(P(e.dialog.submitTxt),1)]),_:1})])]),default:o(()=>[l(C,{ref_key:"roleDialogFormRef",ref:h,model:e.ruleForm,size:"default","label-width":"90px"},{default:o(()=>[l(U,{gutter:35},{default:o(()=>[l(i,{xs:24,sm:12,md:12,lg:12,xl:12,class:"mb20"},{default:o(()=>[l(d,{label:"角色名称"},{default:o(()=>[l(r,{modelValue:e.ruleForm.roleName,"onUpdate:modelValue":t[0]||(t[0]=a=>e.ruleForm.roleName=a),placeholder:"请输入角色名称",clearable:""},null,8,["modelValue"])]),_:1})]),_:1}),l(i,{xs:24,sm:12,md:12,lg:12,xl:12,class:"mb20"},{default:o(()=>[l(d,{label:"角色标识"},{label:o(()=>[l(S,{effect:"dark",content:"用于 `router/route.ts` meta.roles",placement:"top-start"},{default:o(()=>[A]),_:1})]),default:o(()=>[l(r,{modelValue:e.ruleForm.roleSign,"onUpdate:modelValue":t[1]||(t[1]=a=>e.ruleForm.roleSign=a),placeholder:"请输入角色标识",clearable:""},null,8,["modelValue"])]),_:1})]),_:1}),l(i,{xs:24,sm:12,md:12,lg:12,xl:12,class:"mb20"},{default:o(()=>[l(d,{label:"排序"},{default:o(()=>[l(y,{modelValue:e.ruleForm.sort,"onUpdate:modelValue":t[2]||(t[2]=a=>e.ruleForm.sort=a),min:0,max:999,"controls-position":"right",placeholder:"请输入排序",class:"w100"},null,8,["modelValue"])]),_:1})]),_:1}),l(i,{xs:24,sm:12,md:12,lg:12,xl:12,class:"mb20"},{default:o(()=>[l(d,{label:"角色状态"},{default:o(()=>[l(v,{modelValue:e.ruleForm.status,"onUpdate:modelValue":t[3]||(t[3]=a=>e.ruleForm.status=a),"inline-prompt":"","active-text":"启","inactive-text":"禁"},null,8,["modelValue"])]),_:1})]),_:1}),l(i,{xs:24,sm:24,md:24,lg:24,xl:24,class:"mb20"},{default:o(()=>[l(d,{label:"角色描述"},{default:o(()=>[l(r,{modelValue:e.ruleForm.describe,"onUpdate:modelValue":t[4]||(t[4]=a=>e.ruleForm.describe=a),type:"textarea",placeholder:"请输入角色描述",maxlength:"150"},null,8,["modelValue"])]),_:1})]),_:1}),l(i,{xs:24,sm:24,md:24,lg:24,xl:24,class:"mb20"},{default:o(()=>[l(d,{label:"菜单权限"},{default:o(()=>[l(k,{data:e.menuData,props:e.menuProps,"show-checkbox":"",class:"menu-data-tree"},null,8,["data","props"])]),_:1})]),_:1})]),_:1})]),_:1},8,["model"])]),_:1},8,["title","modelValue"])])}}});const O=M(J,[["__scopeId","data-v-3d17562c"]]);export{O as default};
