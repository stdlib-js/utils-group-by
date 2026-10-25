"use strict";var g=function(r,e){return function(){try{return e||r((e={exports:{}}).exports,e),e.exports}catch(v){throw (e=0, v)}};};var p=g(function(M,o){
var x=require('@stdlib/assert-is-plain-object/dist'),f=require('@stdlib/assert-has-own-property/dist'),P=require('@stdlib/utils-index-of/dist'),h=require('@stdlib/error-tools-fmtprodmsg/dist'),l=["values","indices","*"];function B(r,e){return x(e)?(f(e,"thisArg")&&(r.thisArg=e.thisArg),f(e,"returns")&&(r.returns=e.returns,P(l,r.returns)===-1)?new TypeError(h('1UD4S',"returns",l.join('", "'),r.returns)):null):new TypeError(h('1UD2V',e));}o.exports=B
});var m=g(function(N,q){
var E=require('@stdlib/assert-has-own-property/dist');function T(r,e,v){var a,u,i,n,t,s;for(a=e.thisArg,i=r.length,u={},s=0;s<i;s++)t=r[s],n=v.call(a,t,s),E(u,n)?u[n].push(t):u[n]=[t];return u}q.exports=T
});var c=g(function(Q,w){
var V=require('@stdlib/assert-has-own-property/dist');function j(r,e,v){var a,u,i,n,t;for(a=e.thisArg,i=r.length,u={},t=0;t<i;t++)n=v.call(a,r[t],t),V(u,n)?u[n].push(t):u[n]=[t];return u}w.exports=j
});var A=g(function(R,d){
var F=require('@stdlib/assert-has-own-property/dist');function C(r,e,v){var a,u,i,n,t,s;for(a=e.thisArg,i=r.length,u={},s=0;s<i;s++)t=r[s],n=v.call(a,t,s),F(u,n)?u[n].push([s,t]):u[n]=[[s,t]];return u}d.exports=C
});var b=g(function(S,O){
var I=require('@stdlib/assert-is-collection/dist'),L=require('@stdlib/assert-is-function/dist'),y=require('@stdlib/error-tools-fmtprodmsg/dist'),k=p(),z=m(),D=c(),G=A();function H(r,e,v){var a,u,i;if(!I(r))throw new TypeError(y('1UDAh',r));if(a={returns:"values"},arguments.length===2)i=e;else{if(u=k(a,e),u)throw u;i=v}if(!L(i))throw new TypeError(y('1UD3q',i));return a.returns==="values"?z(r,a,i):a.returns==="indices"?D(r,a,i):G(r,a,i)}O.exports=H
});var J=b();module.exports=J;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
