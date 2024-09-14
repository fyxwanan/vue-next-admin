import{Q as h}from"./echarts-1fe2aea0.js";import"./echarts-gl-eddbbc95.js";import{f as E}from"./formatTime-29ac8c52.js";import{N as H}from"./index-71d91ebe.js";import{d as M,e as p,_ as P,j,Z as U,ah as x,o as r,c as v,a as t,V as c,U as o,P as y,F as _,a8 as b,T as I,aT as R,bm as G,bk as J,O as K,J as g}from"./@vue-f9e59415.js";import{V as S}from"./zrender-35fc0e9a.js";import{_ as $}from"./_plugin-vue_export-helper-c27b6911.js";import"./tslib-54e39b60.js";import"./claygl-642beadb.js";import"./pinia-8895fa67.js";import"./vue-demi-71ba0ef2.js";import"./vue-router-a024509b.js";import"./vue-i18n-c4e0915d.js";import"./@intlify-ed9c9b63.js";import"./vue-b5d7f7af.js";import"./js-cookie-edb2da2a.js";import"./@element-plus-f2d856bb.js";import"./nprogress-f4e438e8.js";import"./axios-9cbf0d09.js";import"./qs-36bd8b70.js";import"./side-channel-3a385e21.js";import"./get-intrinsic-88feedc6.js";import"./es-errors-82fd953f.js";import"./has-symbols-e8f3ca0e.js";import"./has-proto-1353c55e.js";import"./function-bind-61637ca6.js";import"./hasown-bc561cf0.js";import"./call-bind-9ec8ebd8.js";import"./set-function-length-ecd19468.js";import"./define-data-property-d38573ea.js";import"./es-define-property-cfa03815.js";import"./gopd-4c4454f6.js";import"./has-property-descriptors-68e2873e.js";import"./object-inspect-7ba7c20a.js";import"./element-plus-b9d096c5.js";import"./lodash-es-2e98bc53.js";import"./@vueuse-b50f0a95.js";import"./@sxzz-c75af06c.js";import"./@ctrl-f8748455.js";import"./dayjs-1b30f524.js";import"./async-validator-dee29e8b.js";import"./memoize-one-297ddbcb.js";import"./normalize-wheel-es-ed76fb12.js";import"./@floating-ui-fc8420ed.js";import"./mitt-f7ef348c.js";import"./vue-grid-layout-7e89b549.js";const q=[{label:"广东省农业农村厅"},{label:"广西省农业农村厅"},{label:"四川省农业农村厅"},{label:"湖北省农业农村厅"},{label:"福建省农业农村厅"},{label:"山东省农业农村厅"},{label:"江西省农业农村厅"}],X=[{v1:"时间",v2:"天气",v3:"温度",v4:"湿度",v5:"降水概率",v6:"风向",v7:"风力",type:"title"},{v1:"今天",v2:"ele-Sunny",v3:"20°/26°",v4:"80%",v5:"50%",v6:"东南风",v7:"13m/s"},{v1:"明天",v2:"ele-Lightning",v3:"20°/26°",v4:"80%",v5:"50%",v6:"东南风",v7:"13m/s"},{v1:"后天",v2:"ele-Sunny",v3:"20°/26°",v4:"80%",v5:"50%",v6:"东南风",v7:"13m/s"}],tt=[{v1:"地块A-灌溉",v2:"阳光玫瑰种植",v3:"126天",v4:"设备在线"},{v1:"地块B-收割",v2:"阳光玫瑰种植",v3:"360天",v4:"设备预警"}],et=[{label:"温度"},{label:"光照"},{label:"湿度"},{label:"风力"},{label:"张力"},{label:"气压"}],st=[{topLevelClass:"fixed-top",icon:"ele-MagicStick",label:"环境监测",type:0},{topLevelClass:"fixed-right",icon:"ele-MoonNight",label:"精准管理",type:1},{topLevelClass:"fixed-bottom",icon:"ele-TrendCharts",label:"数据报表",type:2},{topLevelClass:"fixed-left",icon:"ele-Van",label:"产品追溯",type:3}],l=u=>(G("data-v-7bd5d107"),u=u(),J(),u),at={class:"visualizing-demo2"},it={class:"big-data-up"},ot={class:"up-left"},lt=l(()=>t("div",{class:"up-center"},[t("span",null,"智慧农业系统平台")],-1)),dt={class:"up-right"},nt={class:"el-dropdown-link"},rt={class:"ml15"},ct=l(()=>t("span",null,"消息",-1)),vt={class:"ml15"},mt=l(()=>t("span",null,"个人",-1)),ht={class:"ml15"},pt=l(()=>t("span",null,"返回",-1)),_t={class:"big-data-down"},bt={class:"big-data-down-left"},ft={class:"flex-warp-item"},ut={class:"flex-warp-item-box"},xt=l(()=>t("div",{class:"flex-title"},"天气预报",-1)),yt={class:"flex-content flex-content-overflow"},gt={class:"sky"},wt=R('<div class="sky-center" data-v-7bd5d107><div class="mb2" data-v-7bd5d107><span class="font" data-v-7bd5d107>多云转晴</span><span class="font" data-v-7bd5d107>东南风</span><span data-v-7bd5d107>良</span></div><div class="sky-tip" data-v-7bd5d107>温馨提示：多云转晴，南风转北风风力3级</div></div><div class="sky-right" data-v-7bd5d107><span data-v-7bd5d107>25</span><span class="font" data-v-7bd5d107>°C</span></div>',2),kt={class:"sky-dd"},St={key:0},Ct={key:1},Lt={class:"tip"},Dt={class:"flex-warp-item"},At={class:"flex-warp-item-box"},Tt=l(()=>t("div",{class:"flex-title"},"当前设备状态",-1)),Bt={class:"flex-content flex-content-overflow"},zt={class:"d-states"},Et={class:"d-states-item"},It=l(()=>t("div",{class:"d-states-flex"},[t("div",{class:"d-states-item-label"},"园区设备数"),t("div",{class:"d-states-item-value"},"99")],-1)),Mt={class:"d-states-item"},Rt=l(()=>t("div",{class:"d-states-flex"},[t("div",{class:"d-states-item-label"},"预警设备数"),t("div",{class:"d-states-item-value"},"10")],-1)),Ft={class:"d-states-item"},Qt=l(()=>t("div",{class:"d-states-flex"},[t("div",{class:"d-states-item-label"},"运行设备数"),t("div",{class:"d-states-item-value"},"20")],-1)),Wt={class:"d-btn"},Ot={class:"d-btn-item-center"},Vt={class:"d-btn-item-eight"},Yt={class:"flex-warp-item"},Nt={class:"flex-warp-item-box"},Zt=l(()=>t("div",{class:"flex-title"},"近30天预警总数",-1)),Ht={class:"big-data-down-center"},Pt={class:"big-data-down-center-one"},jt=l(()=>t("div",{id:"3DEarth"},null,-1)),Ut={class:"text-box"},Gt={class:"text"},Jt={class:"big-data-down-center-two"},Kt={class:"flex-warp-item-box"},$t=l(()=>t("div",{class:"flex-title"},[t("span",null,"当前设备监测"),t("span",{class:"flex-title-small"},"单位：次")],-1)),qt={class:"flex-content"},Xt={class:"flex-content-left"},te={class:"monitor-z-index"},ee={class:"monitor-item-label"},se={class:"big-data-down-right"},ae={class:"flex-warp-item"},ie={class:"flex-warp-item-box"},oe=l(()=>t("div",{class:"flex-title"},[t("span",null,"近7天产品追溯扫码统计"),t("span",{class:"flex-title-small"},"单位：次")],-1)),le={class:"flex-warp-item"},de={class:"flex-warp-item-box"},ne=l(()=>t("div",{class:"flex-title"},"当前任务统计",-1)),re={class:"flex-content"},ce=R('<div class="task" data-v-7bd5d107><div class="task-item task-first-item" data-v-7bd5d107><div class="task-item-value task-first" data-v-7bd5d107>25</div><div class="task-item-label" data-v-7bd5d107>待办任务</div></div><div class="task-item" data-v-7bd5d107><div class="task-item-box task1" data-v-7bd5d107><div class="task-item-value" data-v-7bd5d107>12</div><div class="task-item-label" data-v-7bd5d107>施肥</div></div></div><div class="task-item" data-v-7bd5d107><div class="task-item-box task2" data-v-7bd5d107><div class="task-item-value" data-v-7bd5d107>3</div><div class="task-item-label" data-v-7bd5d107>施药</div></div></div><div class="task-item" data-v-7bd5d107><div class="task-item-box task3" data-v-7bd5d107><div class="task-item-value" data-v-7bd5d107>5</div><div class="task-item-label" data-v-7bd5d107>农事</div></div></div><div class="task-item" data-v-7bd5d107><div class="task-item-box task4" data-v-7bd5d107><div class="task-item-value" data-v-7bd5d107>3</div><div class="task-item-label" data-v-7bd5d107>巡园</div></div></div><div class="task-item" data-v-7bd5d107><div class="task-item-box task5" data-v-7bd5d107><div class="task-item-value" data-v-7bd5d107>2</div><div class="task-item-label" data-v-7bd5d107>采集</div></div></div></div>',1),ve={class:"flex-warp-item"},me={class:"flex-warp-item-box"},he=l(()=>t("div",{class:"flex-title"},[t("span",null,"近7天投入品记录"),t("span",{class:"flex-title-small"},"单位：件")],-1)),pe=M({name:"visualizingLinkDemo2"}),_e=M({...pe,setup(u){const C=p(),L=p(),D=p(),A=p(),T=p(),B=p(),a=P({time:{txt:"",fun:0},dropdownList:q,dropdownActive:"请选择",skyList:X,dBtnList:tt,chartData4Index:0,dBtnActive:0,earth3DBtnList:st,chartData4List:et,myCharts:[]}),F=()=>{a.time.txt=E(new Date,"YYYY-mm-dd HH:MM:SS WWW QQQQ ZZZ"),a.time.fun=window.setInterval(()=>{a.time.txt=E(new Date,"YYYY-mm-dd HH:MM:SS WWW QQQQ ZZZ")},1e3)},Q=()=>{const e=h(C.value),i={tooltip:{trigger:"item"},series:[{name:"面积模式",type:"pie",radius:[10,60],center:["50%","50%"],roseType:"area",itemStyle:{borderRadius:5},data:[{name:"天气预警",value:100},{name:"病虫害预警",value:50},{name:"任务预警",value:130},{name:"监测设备预警",value:62}],label:{color:"#c0d1f2"}}]};e.setOption(i),a.myCharts.push(e)},W=()=>{const e=h(A.value),i={grid:{top:10,right:10,bottom:20,left:30},tooltip:{trigger:"axis"},xAxis:{type:"category",boundaryGap:!1,data:["1月","2月","3月","4月","5月","6月"],axisLine:{lineStyle:{color:"rgba(22, 207, 208, 0.1)",width:1}},axisTick:{show:!1},axisLabel:{interval:0,color:"#c0d1f2",textStyle:{fontSize:10}}},yAxis:[{type:"value",axisLabel:{color:"#c0d1f2"},splitLine:{show:!0,lineStyle:{color:"rgba(22, 207, 208, 0.3)"}},splitArea:{show:!0,areaStyle:{color:"rgba(22, 207, 208, 0.02)"}},nameTextStyle:{color:"#16cfd0"}}],series:[{name:"温度",type:"line",smooth:!0,lineStyle:{width:0},areaStyle:{opacity:.8,color:new S(0,0,0,1,[{offset:0,color:"rgba(128, 255, 165)"},{offset:1,color:"rgba(1, 191, 236)"}])},emphasis:{focus:"series"},data:[140,232,101,264,90,70]}]};e.setOption(i),a.myCharts.push(e)},O=()=>{const e=h(D.value),i={grid:{top:10,right:0,bottom:20,left:30},tooltip:{trigger:"axis"},xAxis:{data:["1月","2月","3月","4月","5月","6月"],axisLine:{lineStyle:{color:"rgba(22, 207, 208, 0.1)",width:1}},axisTick:{show:!1},axisLabel:{color:"#c0d1f2"}},yAxis:[{type:"value",axisLine:{show:!0,lineStyle:{color:"rgba(22, 207, 208, 0.1)"}},axisLabel:{color:"#c0d1f2"},splitLine:{show:!0,lineStyle:{color:"rgba(22, 207, 208, 0.3)"}},splitArea:{show:!0,areaStyle:{color:"rgba(22, 207, 208, 0.02)"}},nameTextStyle:{color:"#16cfd0"}}],series:[{name:"预购队列",type:"line",data:[200,85,112,275,305,415],itemStyle:{color:"#16cfd0"}},{name:"最新成交价",type:"line",data:[50,85,22,155,170,25],itemStyle:{color:"#febb50"}}]};e.setOption(i),a.myCharts.push(e)},V=()=>{const e=h(B.value),i={tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},grid:{top:20,right:50,bottom:0,left:80},xAxis:[{splitLine:{show:!1},type:"value",show:!1}],yAxis:[{splitLine:{show:!1},axisLine:{show:!1},type:"category",axisTick:{show:!1},inverse:!0,data:["施肥任务完成率","施药任务完成率","农事任务完成率"],axisLabel:{color:"#A7D6F4",fontSize:12}}],series:[{name:"标准化",type:"bar",barWidth:10,label:{show:!0,position:"right",color:"#A7D6F4",fontSize:12,distance:15,formatter:"{c}%"},itemStyle:{barBorderRadius:[0,20,20,0],color:new S(1,0,0,0,[{offset:0,color:"#51C5FD"},{offset:1,color:"#005BB1"}],!1)},data:[75,100,60]}]};e.setOption(i),a.myCharts.push(e)},Y=()=>{const e=h(L.value),i={grid:{top:10,right:0,bottom:20,left:30},tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},xAxis:{data:["1月","2月","3月","4月","5月","6月"],axisLine:{lineStyle:{color:"rgba(22, 207, 208, 0.5)",width:1}},axisTick:{show:!1},axisLabel:{color:"#c0d1f2"}},yAxis:[{type:"value",axisLine:{show:!0,lineStyle:{color:"rgba(22, 207, 208, 0.1)"}},axisLabel:{color:"#c0d1f2"},splitLine:{show:!0,lineStyle:{color:"rgba(22, 207, 208, 0.3)"}},splitArea:{show:!0,areaStyle:{color:"rgba(22, 207, 208, 0.02)"}},nameTextStyle:{color:"#16cfd0"}},{type:"value",position:"right",axisLine:{show:!1},axisLabel:{show:!0,formatter:"{value}%",textStyle:{color:"#16cfd0"}},splitLine:{show:!1},axisTick:{show:!1},splitArea:{show:!0,areaStyle:{color:"rgba(22, 207, 208, 0.02)"}},nameTextStyle:{color:"#16cfd0"}}],series:[{name:"销售水量",type:"line",yAxisIndex:1,smooth:!0,showAllSymbol:!0,symbol:"circle",itemStyle:{color:"#058cff"},lineStyle:{color:"#058cff"},areaStyle:{color:"rgba(5,140,255, 0.2)"},data:[4.2,3.8,4.8,3.5,2.9,2.8]},{name:"主营业务",type:"bar",barWidth:15,itemStyle:{normal:{color:new S(0,0,0,1,[{offset:0,color:"#00FFE3"},{offset:1,color:"#4693EC"}])}},data:[4.2,3.8,4.8,3.5,2.9,2.8]}]};e.setOption(i),a.myCharts.push(e)},N=e=>{let i=document.getElementById("3DEarth");i.style.height=`${T.value.offsetHeight}px`;const d=h(i),f={globe:{baseTexture:"https://i.hd-r.cn/4d572a171eb475da0c2e731d15b63aea.jpg",heightTexture:"https://i.hd-r.cn/52356e8d906c84c5e23390f829dec7a3.jpg",shading:"realistic",light:{ambient:{intensity:.4},main:{intensity:.4}},viewControl:{autoRotate:!0},postEffect:{enable:!0,bloom:{enable:!0}},globeRadius:e},series:{type:"lines3D",coordinateSystem:"globe",blendMode:"lighter",lineStyle:{width:1,color:"rgb(50, 50, 150)",opacity:.1},data:[]}};let w=function(){let m=105.18,s=Math.random()*360-180,n=37.51,k=Math.random()*180-90;return{coords:[[s,k],[m,n]],value:(Math.random()*3e3).toFixed(2)}};for(let m=0;m<150;m++)f.series.data=f.series.data.concat(w());d.setOption(f)},z=()=>{let e=document.body.clientWidth,i=0;e>=1920?i=100:e>1200&&e<1920?i=70:e>992&&e<1200?i=60:e>768&&e<992?i=40:e<768&&(i=20),N(i)},Z=()=>{z(),window.addEventListener("resize",()=>{for(let e=0;e<a.myCharts.length;e++)a.myCharts[e].resize();z()})};return j(async()=>{H.done(),F(),await Q(),await W(),await O(),await Y(),await V(),await Z()}),U(()=>{window.clearInterval(a.time.fun)}),(e,i)=>{const d=x("SvgIcon"),f=x("el-dropdown-item"),w=x("el-dropdown-menu"),m=x("el-dropdown");return r(),v("div",at,[t("div",it,[t("div",ot,[c(d,{name:"ele-Timer",class:"mr5"}),t("span",null,o(a.time.txt),1)]),lt,t("div",dt,[c(m,{size:"small"},{dropdown:y(()=>[c(w,null,{default:y(()=>[(r(!0),v(_,null,b(a.dropdownList,(s,n)=>(r(),K(f,{key:n},{default:y(()=>[I(o(s.label),1)]),_:2},1024))),128))]),_:1})]),default:y(()=>[t("span",nt,[I(o(a.dropdownActive)+" ",1),c(d,{name:"ele-ArrowDown",class:"el-icon--right"})])]),_:1}),t("div",rt,[c(d,{name:"ele-Bell",class:"mr5"}),ct]),t("div",vt,[c(d,{name:"ele-User",class:"mr5"}),mt]),t("div",ht,[c(d,{name:"ele-SwitchButton",class:"mr5"}),pt])])]),t("div",_t,[t("div",bt,[t("div",ft,[t("div",ut,[xt,t("div",yt,[t("div",gt,[c(d,{name:"ele-Sunny",class:"sky-left"}),wt]),t("div",kt,[(r(!0),v(_,null,b(a.skyList,(s,n)=>(r(),v("div",{class:g(["sky-dl",{"sky-dl-first":n===1}]),key:n},[t("div",null,o(s.v1),1),s.type==="title"?(r(),v("div",St,o(s.v2),1)):(r(),v("div",Ct,[c(d,{name:s.v2},null,8,["name"])])),t("div",null,o(s.v3),1),t("div",null,o(s.v4),1),t("div",Lt,o(s.v5),1),t("div",null,o(s.v6),1),t("div",null,o(s.v7),1)],2))),128))])])])]),t("div",Dt,[t("div",At,[Tt,t("div",Bt,[t("div",zt,[t("div",Et,[c(d,{name:"ele-Odometer",class:"i-bg1"}),It]),t("div",Mt,[c(d,{name:"ele-FirstAidKit",class:"i-bg2"}),Rt]),t("div",Ft,[c(d,{name:"ele-VideoPlay",class:"i-bg3"}),Qt])]),t("div",Wt,[(r(!0),v(_,null,b(a.dBtnList,(s,n)=>(r(),v("div",{class:g(["d-btn-item",{"d-btn-active":a.dBtnActive===n}]),key:n},[c(d,{name:"ele-Money",class:"d-btn-item-left"}),t("div",Ot,[t("div",null,o(s.v1),1),t("div",null,o(s.v2)+"|"+o(s.v3),1)]),t("div",Vt,o(s.v4),1)],2))),128))])])])]),t("div",Yt,[t("div",Nt,[Zt,t("div",{class:"flex-content",ref_key:"rightChartData1",ref:C},null,512)])])]),t("div",Ht,[t("div",Pt,[t("div",{class:"big-data-down-center-one-content",ref_key:"rightChartData5",ref:T},[jt,(r(!0),v(_,null,b(a.earth3DBtnList,(s,n)=>(r(),v("div",{class:g(s.topLevelClass),key:n},[(r(),v(_,null,b(4,k=>t("div",{class:"circle",key:k})),64)),t("div",Ut,[c(d,{name:s.icon,size:22},null,8,["name"]),t("div",Gt,o(s.label),1)])],2))),128))],512)]),t("div",Jt,[t("div",Kt,[$t,t("div",qt,[t("div",Xt,[(r(!0),v(_,null,b(a.chartData4List,(s,n)=>(r(),v("div",{class:"monitor-item",key:n},[t("div",{class:g(["monitor-wave",{"monitor-active":n===a.chartData4Index}])},[t("div",te,[t("div",ee,o(s.label),1)])],2)]))),128))]),t("div",{class:"flex-content-right",ref_key:"rightChartData4",ref:A},null,512)])])])]),t("div",se,[t("div",ae,[t("div",ie,[oe,t("div",{class:"flex-content",ref_key:"rightChartData3",ref:D},null,512)])]),t("div",le,[t("div",de,[ne,t("div",re,[ce,t("div",{ref_key:"rightChartData6",ref:B,class:"progress"},null,512)])])]),t("div",ve,[t("div",me,[he,t("div",{class:"flex-content",ref_key:"rightChartData2",ref:L},null,512)])])])])])}}});const ns=$(_e,[["__scopeId","data-v-7bd5d107"]]);export{ns as default};
