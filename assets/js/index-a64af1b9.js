import{a as A}from"./element-plus-b9d096c5.js";import{d as f,e as D,_ as V,G as I,ah as o,ap as N,o as h,c as _,V as s,P as p,Q as L,a as l,U as b,S as B,T as P,bm as E,bk as M}from"./@vue-f9e59415.js";import{_ as R}from"./_plugin-vue_export-helper-c27b6911.js";import"./lodash-es-2e98bc53.js";import"./@vueuse-b50f0a95.js";import"./@element-plus-f2d856bb.js";import"./@sxzz-c75af06c.js";import"./@ctrl-f8748455.js";import"./dayjs-1b30f524.js";import"./@intlify-ed9c9b63.js";import"./async-validator-dee29e8b.js";import"./memoize-one-297ddbcb.js";import"./normalize-wheel-es-ed76fb12.js";import"./@floating-ui-fc8420ed.js";const m=r=>(E("data-v-c64fafce"),r=r(),M(),r),U={class:"tree-container layout-pd"},z={class:"tree-head"},G={class:"tree-head-check"},K=m(()=>l("div",{class:"tree-head-one"},"商品 ID",-1)),Q=m(()=>l("div",{style:{flex:"1",display:"flex"}},[l("div",{class:"tree-head-two"},"商品名称"),l("div",{class:"tree-head-three"},"描述")],-1)),j={class:"tree-custom-node"},q={style:{flex:"1"}},F={key:0,style:{flex:"1",display:"flex"}},H={style:{flex:"1"}},J={style:{flex:"1"}},O=f({name:"pagesTree"}),W=f({...O,setup(r){const t=D(),e=V({treeCheckAll:!1,treeLoading:!1,treeTableData:[],treeDefaultProps:{children:"children",label:"label"},treeSelArr:[],treeLength:0}),u=n=>{let a=0;n.map(c=>{c.children&&(a+=c.children.length)}),e.treeLength=a+n.length},g=()=>{e.treeCheckAll?t.value.setCheckedNodes(e.treeTableData):t.value.setCheckedKeys([])},v=()=>{e.treeSelArr=[],e.treeSelArr=t.value.getCheckedNodes(),e.treeSelArr.length==e.treeLength?e.treeCheckAll=!0:e.treeCheckAll=!1},k=()=>{if(t.value.getCheckedNodes().length<=0){A.warning("请选择元素");return}},S=()=>{e.treeTableData=[{id:1,label:"12987121",label1:"好滋好味鸡蛋仔",label2:"荷兰优质淡奶，奶香浓而不腻",isShow:!0,children:[{id:11,label:"一级 1-1",label1:"好滋好味鸡蛋仔",label2:"荷兰优质淡奶，奶香浓而不腻",isShow:!1},{id:12,label:"一级 1-2",label1:"好滋好味鸡蛋仔",label2:"荷兰优质淡奶，奶香浓而不腻",isShow:!1}]},{id:2,label:"12987122",label1:"好滋好味鸡蛋仔",label2:"荷兰优质淡奶，奶香浓而不腻",isShow:!0,children:[{id:21,label:"二级 2-1",label1:"好滋好味鸡蛋仔",label2:"荷兰优质淡奶，奶香浓而不腻",isShow:!1},{id:22,label:"二级 2-2",label1:"好滋好味鸡蛋仔",label2:"荷兰优质淡奶，奶香浓而不腻",isShow:!1}]},{id:3,label:"12987123",label1:"好滋好味鸡蛋仔",label2:"荷兰优质淡奶，奶香浓而不腻",isShow:!0,children:[{id:31,label:"二级 3-1",label1:"好滋好味鸡蛋仔",label2:"荷兰优质淡奶，奶香浓而不腻",isShow:!1},{id:32,label:"二级 3-2",label1:"好滋好味鸡蛋仔",label2:"荷兰优质淡奶，奶香浓而不腻",isShow:!1},{id:33,label:"二级 3-3",label1:"好滋好味鸡蛋仔",label2:"荷兰优质淡奶，奶香浓而不腻",isShow:!1}]}],u(e.treeTableData)};return I(()=>{S()}),(n,a)=>{const c=o("el-checkbox"),C=o("el-tree"),x=o("SvgIcon"),w=o("el-button"),y=o("el-card"),T=N("loading");return h(),_("div",U,[s(y,{shadow:"hover",header:"element plus Tree 树形控件改成表格"},{default:p(()=>[L((h(),_("div",null,[l("div",z,[l("div",G,[s(c,{modelValue:e.treeCheckAll,"onUpdate:modelValue":a[0]||(a[0]=i=>e.treeCheckAll=i),onChange:g},null,8,["modelValue"])]),K,Q]),s(C,{data:e.treeTableData,"show-checkbox":"","node-key":"id",ref_key:"treeTableRef",ref:t,props:e.treeDefaultProps,onCheck:v},{default:p(({node:i,data:d})=>[l("span",j,[l("span",q,b(i.label),1),d.isShow?(h(),_("span",F,[l("span",H,b(d.label1),1),l("span",J,b(d.label2),1)])):B("",!0)])]),_:1},8,["data","props"])])),[[T,e.treeLoading]]),s(w,{onClick:k,class:"mt15",size:"default",type:"primary"},{default:p(()=>[s(x,{name:"iconfont icon-shuxingtu"}),P(" 选择元素 ")]),_:1})]),_:1})])}}});const de=R(W,[["__scopeId","data-v-c64fafce"]]);export{de as default};
