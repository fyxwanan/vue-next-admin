import{c as y,g as O}from"./@intlify-ed9c9b63.js";var w={exports:{}};/*!
 * js-table2excel v1.1.2
 * Released under the MIT License.
 * repository: https://github.com/hxj9102/table2excel.git
 */(function(g,W){(function(f,x){g.exports=x()})(y,function(){var f=function(c,i){var t;((t=window.navigator.userAgent).indexOf("MSIE")>=0?"ie":t.indexOf("Firefox")>=0?"Firefox":t.indexOf("Chrome")>=0?"Chrome":t.indexOf("Opera")>=0?"Opera":t.indexOf("Safari")>=0?"Safari":void 0)=="ie"?x(c):v(c,i)},x=function(c,i){var t=c,n=new ActiveXObject("Excel.Application"),a=n.Workbooks.Add(),r=a.Worksheets(1),s=document.body.createTextRange();s.moveToElementText(t),s.select,s.execCommand("Copy"),r.Paste(),n.Visible=!0;try{n.Application.GetSaveAsFilename("Excel.xls","Excel Spreadsheets (*.xls), *.xls")}catch(d){print("Nested catch caught "+d)}finally{a.SaveAs(fname),a.Close(savechanges=!1),n.Quit(),n=null,window.setInterval("Cleanup();",1),window.setInterval("Cleanup();",1)}},v=function(c,i){var t,n="data:application/vnd.ms-excel;base64,"+function(s){return window.btoa(unescape(encodeURIComponent(s)))}((t={worksheet:i,table:c},'<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40"><head><meta charset="UTF-8"><!--[if gte mso 9]><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet><x:Name>{worksheet}</x:Name><x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions></x:ExcelWorksheet></x:ExcelWorksheets></x:ExcelWorkbook></xml><![endif]--></head><body><table>{table}</table></body></html>'.replace(/{(\w+)}/g,function(s,d){return t[d]})));if(navigator.userAgent.indexOf("Firefox")>-1)window.location.href=n;else{var a,r=document.createElement("a");r.href=n,r.download=i||"",window.MouseEvent?a=new MouseEvent("click"):(a=document.createEvent("MouseEvents")).initMouseEvent("click",!0,!1,window,0,0,0,0,0,!1,!1,!1,!1,0,null),r.dispatchEvent(a)}};return function(){for(var c={image:function(e,o){return o=Object.assign({width:40,height:60},o),'<td style="width: '.concat(o.width,"px; height: ").concat(o.height,'px; text-align: center; vertical-align: middle"><img src="').concat(e,'" width=').concat(.99*o.width," height=").concat(.99*o.height," /></td>")},text:function(e){return'<td style="text-align: center">'.concat(e,"</td>")}},i=arguments.length,t=new Array(i),n=0;n<i;n++)t[n]=arguments[n];var a=function(e){return e.length===1?e[0]:{column:e[0]||[],data:e[1]||[],excelName:e[2]||"",captionName:e[3]}}(t),r=a.column,s=a.data,d=a.excelName,p=a.captionName,E=p?'<caption style="font-weight:bold">'.concat(p,"</caption>"):"",u=r.reduce(function(e,o){return e+="<th>".concat(o.title,"</th>")},"");u="<thead><tr>".concat(u,"</tr></thead>");var m=s.reduce(function(e,o){var b=r.reduce(function(k,l){var h={};return l.type==="image"&&(o.size?(h.width=o.size[0],h.height=o.size[1]):(l.width&&(h.width=l.width),l.height&&(h.height=l.height))),k+=c[l.type||"text"](o[l.key],h)},"");return e+="<tr>".concat(b,"</tr>")},"");m="<tbody>".concat(m,"</tbody>"),f(E+u+m,d)}})})(w);var C=w.exports;const N=O(C);export{N as t};
