import{i as Z}from"./vue-demi-71ba0ef2.js";import{an as V,e as D,am as H,t as B,E as k,aw as L,Y as $,ax as G,D as A,f as T,_ as tt,g as et,b as nt,n as st,$ as ot,k as ct}from"./@vue-f9e59415.js";/*!
 * pinia v2.1.7
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */let J;const E=t=>J=t,N=Symbol();function R(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var C;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(C||(C={}));function yt(){const t=V(!0),s=t.run(()=>D({}));let n=[],e=[];const r=H({install(u){E(r),r._a=u,u.provide(N,r),u.config.globalProperties.$pinia=r,e.forEach(f=>n.push(f)),e=[]},use(u){return!this._a&&!Z?e.push(u):n.push(u),this},_p:n,_a:null,_e:t,_s:new Map,state:s});return r}const Y=()=>{};function F(t,s,n,e=Y){t.push(s);const r=()=>{const u=t.indexOf(s);u>-1&&(t.splice(u,1),e())};return!n&&et()&&nt(r),r}function p(t,...s){t.slice().forEach(n=>{n(...s)})}const rt=t=>t();function I(t,s){t instanceof Map&&s instanceof Map&&s.forEach((n,e)=>t.set(e,n)),t instanceof Set&&s instanceof Set&&s.forEach(t.add,t);for(const n in s){if(!s.hasOwnProperty(n))continue;const e=s[n],r=t[n];R(r)&&R(e)&&t.hasOwnProperty(n)&&!k(e)&&!L(e)?t[n]=I(r,e):t[n]=e}return t}const ut=Symbol();function at(t){return!R(t)||!t.hasOwnProperty(ut)}const{assign:y}=Object;function ft(t){return!!(k(t)&&t.effect)}function it(t,s,n,e){const{state:r,actions:u,getters:f}=s,a=n.state.value[t];let P;function b(){a||(n.state.value[t]=r?r():{});const v=ot(n.state.value[t]);return y(v,u,Object.keys(f||{}).reduce((d,m)=>(d[m]=H(ct(()=>{E(n);const _=n._s.get(t);return f[m].call(_,_)})),d),{}))}return P=q(t,b,s,n,e,!0),P}function q(t,s,n={},e,r,u){let f;const a=y({actions:{}},n),P={deep:!0};let b,v,d=[],m=[],_;const j=e.state.value[t];!u&&!j&&(e.state.value[t]={}),D({});let W;function O(c){let o;b=v=!1,typeof c=="function"?(c(e.state.value[t]),o={type:C.patchFunction,storeId:t,events:_}):(I(e.state.value[t],c),o={type:C.patchObject,payload:c,storeId:t,events:_});const h=W=Symbol();st().then(()=>{W===h&&(b=!0)}),v=!0,p(d,o,e.state.value[t])}const z=u?function(){const{state:o}=n,h=o?o():{};this.$patch(S=>{y(S,h)})}:Y;function K(){f.stop(),d=[],m=[],e._s.delete(t)}function M(c,o){return function(){E(e);const h=Array.from(arguments),S=[],w=[];function U(i){S.push(i)}function X(i){w.push(i)}p(m,{args:h,name:c,store:l,after:U,onError:X});let x;try{x=o.apply(this&&this.$id===t?this:l,h)}catch(i){throw p(w,i),i}return x instanceof Promise?x.then(i=>(p(S,i),i)).catch(i=>(p(w,i),Promise.reject(i))):(p(S,x),x)}}const Q={_p:e,$id:t,$onAction:F.bind(null,m),$patch:O,$reset:z,$subscribe(c,o={}){const h=F(d,c,o.detached,()=>S()),S=f.run(()=>T(()=>e.state.value[t],w=>{(o.flush==="sync"?v:b)&&c({storeId:t,type:C.direct,events:_},w)},y({},P,o)));return h},$dispose:K},l=tt(Q);e._s.set(t,l);const g=(e._a&&e._a.runWithContext||rt)(()=>e._e.run(()=>(f=V()).run(s)));for(const c in g){const o=g[c];if(k(o)&&!ft(o)||L(o))u||(j&&at(o)&&(k(o)?o.value=j[c]:I(o,j[c])),e.state.value[t][c]=o);else if(typeof o=="function"){const h=M(c,o);g[c]=h,a.actions[c]=o}}return y(l,g),y(B(l),g),Object.defineProperty(l,"$state",{get:()=>e.state.value[t],set:c=>{O(o=>{y(o,c)})}}),e._p.forEach(c=>{y(l,f.run(()=>c({store:l,app:e._a,pinia:e,options:a})))}),j&&u&&n.hydrate&&n.hydrate(l.$state,j),b=!0,v=!0,l}function vt(t,s,n){let e,r;const u=typeof s=="function";typeof t=="string"?(e=t,r=u?n:s):(r=t,e=t.id);function f(a,P){const b=G();return a=a||(b?A(N,null):null),a&&E(a),a=J,a._s.has(e)||(u?q(e,s,r,a):it(e,r,a)),a._s.get(e)}return f.$id=e,f}function St(t){{t=B(t);const s={};for(const n in t){const e=t[n];(k(e)||L(e))&&(s[n]=$(t,n))}return s}}export{yt as c,vt as d,St as s};