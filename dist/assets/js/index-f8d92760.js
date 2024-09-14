import{_ as r}from"./index-71d91ebe.js";import{a as _}from"./element-plus-b9d096c5.js";import{d as s,e as b,_ as g,j as f,o as y,c as D,a as k,V as i,u as p,L as v,aU as l}from"./@vue-f9e59415.js";import{_ as x}from"./_plugin-vue_export-helper-c27b6911.js";import"./pinia-8895fa67.js";import"./vue-demi-71ba0ef2.js";import"./vue-router-a024509b.js";import"./vue-i18n-c4e0915d.js";import"./@intlify-ed9c9b63.js";import"./vue-b5d7f7af.js";import"./js-cookie-edb2da2a.js";import"./@element-plus-f2d856bb.js";import"./nprogress-f4e438e8.js";import"./axios-9cbf0d09.js";import"./qs-36bd8b70.js";import"./side-channel-3a385e21.js";import"./get-intrinsic-88feedc6.js";import"./es-errors-82fd953f.js";import"./has-symbols-e8f3ca0e.js";import"./has-proto-1353c55e.js";import"./function-bind-61637ca6.js";import"./hasown-bc561cf0.js";import"./call-bind-9ec8ebd8.js";import"./set-function-length-ecd19468.js";import"./define-data-property-d38573ea.js";import"./es-define-property-cfa03815.js";import"./gopd-4c4454f6.js";import"./has-property-descriptors-68e2873e.js";import"./object-inspect-7ba7c20a.js";import"./mitt-f7ef348c.js";import"./vue-grid-layout-7e89b549.js";import"./lodash-es-2e98bc53.js";import"./@vueuse-b50f0a95.js";import"./@sxzz-c75af06c.js";import"./@ctrl-f8748455.js";import"./dayjs-1b30f524.js";import"./async-validator-dee29e8b.js";import"./memoize-one-297ddbcb.js";import"./normalize-wheel-es-ed76fb12.js";import"./@floating-ui-fc8420ed.js";const S={class:"table-demo-container layout-padding"},C={class:"table-demo-padding layout-padding-view layout-padding-auto"},T=s({name:"makeTableDemo"}),N=s({...T,setup(q){const m=l(()=>r(()=>import("./index-26ae5b82.js"),["assets/js/index-26ae5b82.js","assets/js/print-js-abef331a.js","assets/js/@intlify-ed9c9b63.js","assets/js/js-table2excel-9391413e.js","assets/js/sortablejs-c9fcee54.js","assets/js/pinia-8895fa67.js","assets/js/vue-demi-71ba0ef2.js","assets/js/@vue-f9e59415.js","assets/js/index-71d91ebe.js","assets/js/vue-router-a024509b.js","assets/js/vue-i18n-c4e0915d.js","assets/js/vue-b5d7f7af.js","assets/js/js-cookie-edb2da2a.js","assets/js/@element-plus-f2d856bb.js","assets/js/nprogress-f4e438e8.js","assets/css/nprogress-771398e6.css","assets/js/axios-9cbf0d09.js","assets/js/qs-36bd8b70.js","assets/js/side-channel-3a385e21.js","assets/js/get-intrinsic-88feedc6.js","assets/js/es-errors-82fd953f.js","assets/js/has-symbols-e8f3ca0e.js","assets/js/has-proto-1353c55e.js","assets/js/function-bind-61637ca6.js","assets/js/hasown-bc561cf0.js","assets/js/call-bind-9ec8ebd8.js","assets/js/set-function-length-ecd19468.js","assets/js/define-data-property-d38573ea.js","assets/js/es-define-property-cfa03815.js","assets/js/gopd-4c4454f6.js","assets/js/has-property-descriptors-68e2873e.js","assets/js/object-inspect-7ba7c20a.js","assets/js/element-plus-b9d096c5.js","assets/js/lodash-es-2e98bc53.js","assets/js/@vueuse-b50f0a95.js","assets/js/@sxzz-c75af06c.js","assets/js/@ctrl-f8748455.js","assets/js/dayjs-1b30f524.js","assets/js/async-validator-dee29e8b.js","assets/js/memoize-one-297ddbcb.js","assets/js/normalize-wheel-es-ed76fb12.js","assets/js/@floating-ui-fc8420ed.js","assets/js/mitt-f7ef348c.js","assets/js/vue-grid-layout-7e89b549.js","assets/css/index-35341635.css","assets/js/_plugin-vue_export-helper-c27b6911.js","assets/css/index-a06a30a5.css"])),n=l(()=>r(()=>import("./search-f7c0cb02.js"),["assets/js/search-f7c0cb02.js","assets/js/@vue-f9e59415.js","assets/js/_plugin-vue_export-helper-c27b6911.js","assets/css/search-8e2051c8.css"])),o=b(),t=g({tableData:{data:[],header:[{key:"name",colWidth:"",title:"应检尽检核酸采样点名称",type:"text",isCheck:!0},{key:"address",colWidth:"",title:"详细地址",type:"text",isCheck:!0},{key:"phone",colWidth:"",title:"采样点联系电话",type:"text",isCheck:!0},{key:"time",colWidth:"",title:"开放时间",type:"text",isCheck:!0},{key:"isSupport",colWidth:"",title:"是否支持24小时核酸检测",type:"text",isCheck:!0},{key:"image",colWidth:"",width:"70",height:"40",title:"图片描述",type:"image",isCheck:!0}],config:{total:0,loading:!0,isBorder:!1,isSerialNo:!0,isSelection:!0,isOperate:!0},search:[{label:"采样点名称",prop:"name",placeholder:"请输入应检尽检核酸采样点名称",required:!0,type:"input"},{label:"详细地址",prop:"address",placeholder:"请输入详细地址",required:!1,type:"input"},{label:"联系电话",prop:"phone",placeholder:"请输入采样点联系电话",required:!1,type:"input"},{label:"开放时间",prop:"time",placeholder:"请选择",required:!1,type:"date"},{label:"支持24小时",prop:"isSupport",placeholder:"请选择",required:!1,type:"select",options:[{label:"是",value:1},{label:"否",value:0}]},{label:"图片描述",prop:"image",placeholder:"请输入图片描述",required:!1,type:"input"},{label:"核酸机构",prop:"mechanism",placeholder:"请输入核酸机构",required:!1,type:"input"}],param:{pageNum:1,pageSize:10},printName:"vueNextAdmin 表格打印演示"}}),a=()=>{t.tableData.config.loading=!0,t.tableData.data=[];for(let e=0;e<20;e++)t.tableData.data.push({id:`123456789${e+1}`,name:`莲塘别墅广场${e+1}`,address:`中沧公寓中庭榕树下${e+1}`,phone:`0592-6081259${e+1}`,time:"6:00 ~ 24:00",isSupport:`${e%2===0?"是":"否"}`,image:"https://img2.baidu.com/it/u=417454395,2713356475&fm=253&fmt=auto?w=200&h=200"});t.tableData.config.total=t.tableData.data.length,setTimeout(()=>{t.tableData.config.loading=!1},500)},c=e=>{t.tableData.param=Object.assign({},t.tableData.param,{...e}),o.value.pageReset()},d=e=>{_.success(`删除${e.name}成功！`),a()},u=e=>{t.tableData.param.pageNum=e.pageNum,t.tableData.param.pageSize=e.pageSize,a()},h=e=>{t.tableData.header=e};return f(()=>{a()}),(e,R)=>(y(),D("div",S,[k("div",C,[i(p(n),{search:t.tableData.search,onSearch:c},null,8,["search"]),i(p(m),v({ref_key:"tableRef",ref:o},t.tableData,{class:"table-demo",onDelRow:d,onPageChange:u,onSortHeader:h}),null,16)])]))}});const be=x(N,[["__scopeId","data-v-c4a8c811"]]);export{be as default};
