import{Q as f}from"./qrcodejs2-fixes-32c0dfda.js";import{d as a,e as m,j as u,ah as e,o as h,c as v,V as o,P as s,a as c,T as x}from"./@vue-f9e59415.js";import{_ as g}from"./_plugin-vue_export-helper-c27b6911.js";import"./@intlify-ed9c9b63.js";const q={class:"qrcode-container layout-pd"},y={class:"qrcode-img-warp"},w={class:"mb30 mt30 qrcode-img"},b=a({name:"funQrcode"}),j=a({...b,setup(k){const t=m(),n=()=>{new f(t.value,{text:`https://lyt-top.gitee.io/vue-next-admin-preview/#/login?t=${new Date().getTime()}`,width:125,height:125,colorDark:"#000000",colorLight:"#ffffff"})},r=()=>{t.value.innerHTML="",n()};return u(()=>{n()}),(C,Q)=>{const _=e("el-alert"),d=e("ele-Refresh"),l=e("el-icon"),i=e("el-button"),p=e("el-card");return h(),v("div",q,[o(p,{shadow:"hover",header:"qrcodejs2 二维码生成"},{default:s(()=>[o(_,{title:"感谢优秀的 `qrcodejs2`，项目地址：https://github.com/davidshimjs/qrcodejs",type:"success",closable:!1,class:"mb15"}),c("div",y,[c("div",w,[c("div",{class:"qrcode",ref_key:"qrcodeRef",ref:t},null,512)]),o(i,{type:"primary",size:"default",onClick:r},{default:s(()=>[o(l,null,{default:s(()=>[o(d)]),_:1}),x(" 重新生成 ")]),_:1})])]),_:1})])}}});const N=g(j,[["__scopeId","data-v-9017858a"]]);export{N as default};
