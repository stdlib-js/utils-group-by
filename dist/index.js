"use strict";var g=function(r,u){return function(){return u||r((u={exports:{}}).exports,u),u.exports}};var p=g(function(M,o){
var x=require('@stdlib/assert-is-plain-object/dist'),f=require('@stdlib/assert-has-own-property/dist'),P=require('@stdlib/utils-index-of/dist'),h=require('@stdlib/error-tools-fmtprodmsg/dist'),l=["values","indices","*"];function B(r,u){return x(u)?(f(u,"thisArg")&&(r.thisArg=u.thisArg),f(u,"returns")&&(r.returns=u.returns,P(l,r.returns)===-1)?new TypeError(h('1UD4S',"returns",l.join('", "'),r.returns)):null):new TypeError(h('1UD2V',u));}o.exports=B
});var m=g(function(N,q){
var E=require('@stdlib/assert-has-own-property/dist');function T(r,u,v){var a,e,i,n,t,s;for(a=u.thisArg,i=r.length,e={},s=0;s<i;s++)t=r[s],n=v.call(a,t,s),E(e,n)?e[n].push(t):e[n]=[t];return e}q.exports=T
});var c=g(function(Q,w){
var V=require('@stdlib/assert-has-own-property/dist');function j(r,u,v){var a,e,i,n,t;for(a=u.thisArg,i=r.length,e={},t=0;t<i;t++)n=v.call(a,r[t],t),V(e,n)?e[n].push(t):e[n]=[t];return e}w.exports=j
});var A=g(function(R,d){
var F=require('@stdlib/assert-has-own-property/dist');function C(r,u,v){var a,e,i,n,t,s;for(a=u.thisArg,i=r.length,e={},s=0;s<i;s++)t=r[s],n=v.call(a,t,s),F(e,n)?e[n].push([s,t]):e[n]=[[s,t]];return e}d.exports=C
});var b=g(function(S,O){
var I=require('@stdlib/assert-is-collection/dist'),L=require('@stdlib/assert-is-function/dist'),y=require('@stdlib/error-tools-fmtprodmsg/dist'),k=p(),z=m(),D=c(),G=A();function H(r,u,v){var a,e,i;if(!I(r))throw new TypeError(y('1UDAh',r));if(a={returns:"values"},arguments.length===2)i=u;else{if(e=k(a,u),e)throw e;i=v}if(!L(i))throw new TypeError(y('1UD3q',i));return a.returns==="values"?z(r,a,i):a.returns==="indices"?D(r,a,i):G(r,a,i)}O.exports=H
});var J=b();module.exports=J;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
