import{b as w}from"./vue-router-a024509b.js";import{d as r,_ as f,ah as s,o as N,c as v,a as t,V as a,P as o,T as n,U as b}from"./@vue-f9e59415.js";const y={class:"layout-padding"},I={class:"layout-padding-auto layout-padding-view"},x={class:"flex-margin",style:{width:"400px"}},C=t("div",null,"1、设置非国际化：格式：tagsViewName=xxx",-1),k=t("br",null,null,-1),z=t("div",null,'2、设置国际化：格式：tagsViewName=JSON.stringify({"zh-cn":"测试用","en":"test+page","zh-tw":"測試用"})',-1),S=t("br",null,null,-1),T=t("div",null,"3、设置国际化后，去顶栏切换语言查看演示效果",-1),q=t("br",null,null,-1),B=t("div",null,[n(" 4、 "),t("a",{href:"https://gitee.com/q7but",target:"_black"},"感谢@q7but"),n("、 "),t("a",{href:"https://gitee.com/lyt-top/vue-next-admin/pulls/22/files",target:"_black"},"!22 add 添加自定义 tagVIewName 拓展,支持国际化")],-1),U=r({name:"paramsCommon"}),E=r({...U,setup(D){const _=w(),e=f({value:"",tagsViewName:"",tagsViewNameIsI18n:!1}),p=()=>{const i={id:e.value};e.tagsViewName&&(i.tagsViewName=e.tagsViewName),_.push({path:"/params/common/details",query:i}),e.value=""},g=()=>{e.tagsViewNameIsI18n=!e.tagsViewNameIsI18n,e.tagsViewNameIsI18n?e.tagsViewName=JSON.stringify({"zh-cn":"测试用",en:"test page","zh-tw":"測試用"}):e.tagsViewName="我是普通路由测试tagsViewName(非国际化)"};return(i,l)=>{const V=s("el-alert"),u=s("el-input"),m=s("SvgIcon"),d=s("el-button"),h=s("el-result");return N(),v("div",y,[t("div",I,[t("div",x,[a(h,{icon:"success",title:"普通路由",subTitle:"可 `开启 TagsView 共用` 进行单标签测试"},{extra:o(()=>[a(V,{type:"success",closable:!1,class:"mb30"},{default:o(()=>[C,k,z,S,T,q,B]),_:1}),a(u,{modelValue:e.tagsViewName,"onUpdate:modelValue":l[0]||(l[0]=c=>e.tagsViewName=c),placeholder:"请输入tagsView 名称",clearable:"",class:"mb15",style:{width:"400px"}},null,8,["modelValue"]),a(u,{modelValue:e.value,"onUpdate:modelValue":l[1]||(l[1]=c=>e.value=c),placeholder:"请输入路由参数 id 值",clearable:"",style:{width:"400px"}},null,8,["modelValue"]),a(d,{type:"primary",size:"default",class:"mt15",onClick:p},{default:o(()=>[a(m,{name:"iconfont icon-putong"}),n(" 普通路由传参 ")]),_:1}),a(d,{type:"primary",size:"default",class:"mt15",onClick:g},{default:o(()=>[a(m,{name:"iconfont icon-fuhao-zhongwen"}),n(" "+b(e.tagsViewNameIsI18n?"普通的演示":"国际化演示"),1)]),_:1})]),_:1})])])])}}});export{E as default};
