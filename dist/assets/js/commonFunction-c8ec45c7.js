import{u as c}from"./vue-clipboard3-d1e3293b.js";import{f as a}from"./formatTime-29ac8c52.js";import{v as u}from"./vue-i18n-c4e0915d.js";import{a as n}from"./element-plus-b9d096c5.js";function b(){const{t:m}=u.useI18n(),{toClipboard:s}=c();return{percentFormat:(r,o,t)=>t?`${t}%`:"-",dateFormatYMD:(r,o,t)=>t?a(new Date(t),"YYYY-mm-dd"):"-",dateFormatYMDHMS:(r,o,t)=>t?a(new Date(t),"YYYY-mm-dd HH:MM:SS"):"-",dateFormatHMS:(r,o,t)=>{if(!t)return"-";let e=0;return typeof r=="number"&&(e=r),typeof t=="number"&&(e=t),a(new Date(e*1e3),"HH:MM:SS")},scaleFormat:(r="0",o=4)=>Number.parseFloat(r).toFixed(o),scale2Format:(r="0")=>Number.parseFloat(r).toFixed(2),copyText:r=>new Promise((o,t)=>{try{s(r),n.success(m("message.layout.copyTextSuccess")),o(r)}catch(e){n.error(m("message.layout.copyTextError")),t(e)}})}}export{b as c};
