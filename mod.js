// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r=Math.floor;function e(e){return r(e)===e}function t(r){return"object"==typeof r&&null!==r&&"number"==typeof r.length&&e(r.length)&&r.length>=0&&r.length<=9007199254740991}var n=/./,i="function"==typeof Object.defineProperty?Object.defineProperty:null;var o=Object.defineProperty;function a(r){return"number"==typeof r}function u(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function c(r,e,t){var n=!1,i=e-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(n=!0,r=r.substr(1)),r=t?r+u(i):u(i)+r,n&&(r="-"+r)),r}var s=String.prototype.toLowerCase,l=String.prototype.toUpperCase;function f(r){var e,t,n;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,n=parseInt(t,10),!isFinite(n)){if(!a(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===r.specifier||10!==e)&&(n=4294967295+n+1),n<0?(t=(-n).toString(e),r.precision&&(t=c(t,r.precision,r.padRight)),t="-"+t):(t=n.toString(e),n||r.precision?r.precision&&(t=c(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=r.specifier===l.call(r.specifier)?l.call(t):s.call(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function p(r){return"string"==typeof r}var g=Math.abs,b=String.prototype.toLowerCase,h=String.prototype.toUpperCase,d=String.prototype.replace,y=/e\+(\d)$/,v=/e-(\d)$/,w=/^(\d+)$/,m=/^(\d+)e/,j=/\.0$/,_=/\.0*e/,E=/(\..*[^0])0*e/;function O(r){var e,t,n=parseFloat(r.arg);if(!isFinite(n)){if(!a(r.arg))throw new Error("invalid floating-point number. Value: "+t);n=r.arg}switch(r.specifier){case"e":case"E":t=n.toExponential(r.precision);break;case"f":case"F":t=n.toFixed(r.precision);break;case"g":case"G":g(n)<1e-4?((e=r.precision)>0&&(e-=1),t=n.toExponential(e)):t=n.toPrecision(r.precision),r.alternate||(t=d.call(t,E,"$1e"),t=d.call(t,_,"e"),t=d.call(t,j,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=d.call(t,y,"e+0$1"),t=d.call(t,v,"e-0$1"),r.alternate&&(t=d.call(t,w,"$1."),t=d.call(t,m,"$1.e")),n>=0&&r.sign&&(t=r.sign+t),t=r.specifier===h.call(r.specifier)?h.call(t):b.call(t)}function S(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}function T(r,e,t){var n=e-r.length;return n<0?r:r=t?r+S(n):S(n)+r}var A=String.fromCharCode,k=isNaN,x=Array.isArray;function V(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function I(r){var e,t,n,i,o,a,u,s,l;if(!x(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(a="",u=1,s=0;s<r.length;s++)if(p(n=r[s]))a+=n;else{if(e=void 0!==n.precision,!(n=V(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+n+"`.");for(n.mapping&&(u=n.mapping),t=n.flags,l=0;l<t.length;l++)switch(i=t.charAt(l)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[u],10),u+=1,k(n.width))throw new TypeError("the argument for * width at position "+u+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[u],10),u+=1,k(n.precision))throw new TypeError("the argument for * precision at position "+u+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[u],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=f(n);break;case"s":n.maxWidth=e?n.precision:-1;break;case"c":if(!k(n.arg)){if((o=parseInt(n.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=k(o)?String(n.arg):A(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=O(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=c(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=T(n.arg,n.width,n.padRight)),a+=n.arg||"",u+=1}return a}var P=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function F(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function N(r){var e,t,n,i;for(t=[],i=0,n=P.exec(r);n;)(e=r.slice(i,P.lastIndex-n[0].length)).length&&t.push(e),t.push(F(n)),i=P.lastIndex,n=P.exec(r);return(e=r.slice(i)).length&&t.push(e),t}function $(r){return"string"==typeof r}function C(r){var e,t,n;if(!$(r))throw new TypeError(C("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=N(r),(t=new Array(arguments.length))[0]=e,n=1;n<t.length;n++)t[n]=arguments[n];return I.apply(null,t)}var B,L=Object.prototype,R=L.toString,G=L.__defineGetter__,Z=L.__defineSetter__,M=L.__lookupGetter__,W=L.__lookupSetter__;B=function(){try{return i({},"x",{}),!0}catch(r){return!1}}()?o:function(r,e,t){var n,i,o,a;if("object"!=typeof r||null===r||"[object Array]"===R.call(r))throw new TypeError(C("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===R.call(t))throw new TypeError(C("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(M.call(r,e)||W.call(r,e)?(n=r.__proto__,r.__proto__=L,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),o="get"in t,a="set"in t,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&G&&G.call(r,e,t.get),a&&Z&&Z.call(r,e,t.set),r};var U=B;function X(r,e,t){U(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}function Y(r){return"boolean"==typeof r}var z="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function q(){return z&&"symbol"==typeof Symbol.toStringTag}var D=Object.prototype.toString;var H=Object.prototype.hasOwnProperty;function J(r,e){return null!=r&&H.call(r,e)}var K="function"==typeof Symbol?Symbol:void 0,Q="function"==typeof K?K.toStringTag:"";var rr=q()?function(r){var e,t,n;if(null==r)return D.call(r);t=r[Q],e=J(r,Q);try{r[Q]=void 0}catch(e){return D.call(r)}return n=D.call(r),e?r[Q]=t:delete r[Q],n}:function(r){return D.call(r)},er=Boolean,tr=Boolean.prototype.toString;var nr=q();function ir(r){return"object"==typeof r&&(r instanceof er||(nr?function(r){try{return tr.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===rr(r)))}function or(r){return Y(r)||ir(r)}function ar(){return new Function("return this;")()}X(or,"isPrimitive",Y),X(or,"isObject",ir);var ur="object"==typeof self?self:null,cr="object"==typeof window?window:null,sr="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},lr="object"==typeof sr?sr:null,fr="object"==typeof globalThis?globalThis:null;var pr=function(r){if(arguments.length){if(!Y(r))throw new TypeError(C("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return ar()}if(fr)return fr;if(ur)return ur;if(cr)return cr;if(lr)return lr;throw new Error("unexpected error. Unable to resolve global object.")}(),gr=pr.document&&pr.document.childNodes,br=Int8Array;function hr(){return/^\s*function\s*([^(]*)/i}var dr=/^\s*function\s*([^(]*)/i;X(hr,"REGEXP",dr);var yr=Array.isArray?Array.isArray:function(r){return"[object Array]"===rr(r)};function vr(r){return null!==r&&"object"==typeof r}function wr(r){var e,t,n,i;if(("Object"===(t=rr(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=dr.exec(n.toString()))return e[1]}return vr(i=r)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":t}X(vr,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError(C("invalid argument. Must provide a function. Value: `%s`.",r));return function(e){var t,n;if(!yr(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(vr));var mr="function"==typeof n||"object"==typeof br||"function"==typeof gr?function(r){return wr(r).toLowerCase()}:function(r){var e;return null===r?"null":"object"===(e=typeof r)?wr(r).toLowerCase():e};function jr(r){return"function"===mr(r)}var _r,Er=Object,Or=Object.getPrototypeOf;_r=jr(Object.getPrototypeOf)?Or:function(r){var e=function(r){return r.__proto__}(r);return e||null===e?e:"[object Function]"===rr(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var Sr=_r;var Tr=Object.prototype;function Ar(r){var e;return!!function(r){return"object"==typeof r&&null!==r&&!yr(r)}(r)&&(e=function(r){return null==r?null:(r=Er(r),Sr(r))}(r),!e||!J(r,"constructor")&&J(e,"constructor")&&jr(e.constructor)&&"[object Function]"===rr(e.constructor)&&J(e,"isPrototypeOf")&&jr(e.isPrototypeOf)&&(e===Tr||function(r){var e;for(e in r)if(!J(r,e))return!1;return!0}(r)))}function kr(r){return"number"==typeof r}var xr=Number,Vr=xr.prototype.toString;var Ir=q();function Pr(r){return"object"==typeof r&&(r instanceof xr||(Ir?function(r){try{return Vr.call(r),!0}catch(r){return!1}}(r):"[object Number]"===rr(r)))}function Fr(r){return kr(r)||Pr(r)}function Nr(r){return r!=r}function $r(r){return kr(r)&&Nr(r)}function Cr(r){return Pr(r)&&Nr(r.valueOf())}function Br(r){return $r(r)||Cr(r)}function Lr(r){return"string"==typeof r}X(Fr,"isPrimitive",kr),X(Fr,"isObject",Pr),X(Br,"isPrimitive",$r),X(Br,"isObject",Cr);var Rr=String.prototype.valueOf;var Gr=q();function Zr(r){return"object"==typeof r&&(r instanceof String||(Gr?function(r){try{return Rr.call(r),!0}catch(r){return!1}}(r):"[object String]"===rr(r)))}function Mr(r){return Lr(r)||Zr(r)}X(Mr,"isPrimitive",Lr),X(Mr,"isObject",Zr);var Wr=Number.POSITIVE_INFINITY,Ur=xr.NEGATIVE_INFINITY;function Xr(r){return r<Wr&&r>Ur&&e(r)}function Yr(r){return kr(r)&&Xr(r)}function zr(r){return Pr(r)&&Xr(r.valueOf())}function qr(r){return Yr(r)||zr(r)}X(qr,"isPrimitive",Yr),X(qr,"isObject",zr);var Dr=["values","indices","*"];function Hr(r,e){return Ar(e)?(J(e,"thisArg")&&(r.thisArg=e.thisArg),J(e,"returns")&&(r.returns=e.returns,-1===function(r,e,n){var i,o;if(!t(r)&&!Lr(r))throw new TypeError(C("invalid argument. First argument must be an array-like object. Value: `%s`.",r));if(0===(i=r.length))return-1;if(3===arguments.length){if(!Yr(n))throw new TypeError(C("invalid argument. Third argument must be an integer. Value: `%s`.",n));if(n>=0){if(n>=i)return-1;o=n}else(o=i+n)<0&&(o=0)}else o=0;if(Br(e)){for(;o<i;o++)if(Br(r[o]))return o}else for(;o<i;o++)if(r[o]===e)return o;return-1}(Dr,r.returns))?new TypeError(C('invalid option. `%s` option must be one of the following: "%s". Option: `%s`.',"returns",Dr.join('", "'),r.returns)):null):new TypeError(C("invalid argument. Options argument must be an object. Value: `%s`.",e))}function Jr(r,e,t){var n,i,o,a,u,c;for(n=e.thisArg,o=r.length,i={},c=0;c<o;c++)u=r[c],J(i,a=t.call(n,u,c))?i[a].push(u):i[a]=[u];return i}function Kr(r,e,t){var n,i,o,a,u;for(n=e.thisArg,o=r.length,i={},u=0;u<o;u++)J(i,a=t.call(n,r[u],u))?i[a].push(u):i[a]=[u];return i}function Qr(r,e,t){var n,i,o,a,u,c;for(n=e.thisArg,o=r.length,i={},c=0;c<o;c++)u=r[c],J(i,a=t.call(n,u,c))?i[a].push([c,u]):i[a]=[[c,u]];return i}function re(r,e,n){var i,o,a;if(!t(r))throw new TypeError(C("invalid argument. First argument must be a collection. Value: `%s`.",r));if(i={returns:"values"},2===arguments.length)a=e;else{if(o=Hr(i,e))throw o;a=n}if(!jr(a))throw new TypeError(C("invalid argument. Last argument must be a function. Value: `%s`.",a));return"values"===i.returns?Jr(r,i,a):"indices"===i.returns?Kr(r,i,a):Qr(r,i,a)}export{re as default};
//# sourceMappingURL=mod.js.map