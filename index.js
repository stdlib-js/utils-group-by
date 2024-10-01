// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(r,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(r="undefined"!=typeof globalThis?globalThis:r||self).groupBy=e()}(this,(function(){"use strict";var r=Math.floor;function e(e){return r(e)===e}var t=9007199254740991;function n(r){return"object"==typeof r&&null!==r&&"number"==typeof r.length&&e(r.length)&&r.length>=0&&r.length<=t}var i=/./,o="function"==typeof Object.defineProperty?Object.defineProperty:null;var a=Object.defineProperty;function u(r){return"number"==typeof r}function c(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function f(r,e,t){var n=!1,i=e-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(n=!0,r=r.substr(1)),r=t?r+c(i):c(i)+r,n&&(r="-"+r)),r}var s=String.prototype.toLowerCase,l=String.prototype.toUpperCase;function p(r){var e,t,n;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,n=parseInt(t,10),!isFinite(n)){if(!u(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===r.specifier||10!==e)&&(n=4294967295+n+1),n<0?(t=(-n).toString(e),r.precision&&(t=f(t,r.precision,r.padRight)),t="-"+t):(t=n.toString(e),n||r.precision?r.precision&&(t=f(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=r.specifier===l.call(r.specifier)?l.call(t):s.call(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}var g=Math.abs,h=String.prototype.toLowerCase,b=String.prototype.toUpperCase,d=String.prototype.replace,y=/e\+(\d)$/,v=/e-(\d)$/,w=/^(\d+)$/,m=/^(\d+)e/,j=/\.0$/,_=/\.0*e/,E=/(\..*[^0])0*e/;function O(r){var e,t,n=parseFloat(r.arg);if(!isFinite(n)){if(!u(r.arg))throw new Error("invalid floating-point number. Value: "+t);n=r.arg}switch(r.specifier){case"e":case"E":t=n.toExponential(r.precision);break;case"f":case"F":t=n.toFixed(r.precision);break;case"g":case"G":g(n)<1e-4?((e=r.precision)>0&&(e-=1),t=n.toExponential(e)):t=n.toPrecision(r.precision),r.alternate||(t=d.call(t,E,"$1e"),t=d.call(t,_,"e"),t=d.call(t,j,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=d.call(t,y,"e+0$1"),t=d.call(t,v,"e-0$1"),r.alternate&&(t=d.call(t,w,"$1."),t=d.call(t,m,"$1.e")),n>=0&&r.sign&&(t=r.sign+t),t=r.specifier===b.call(r.specifier)?b.call(t):h.call(t)}function S(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}var T=String.fromCharCode,A=Array.isArray;function x(r){return r!=r}function k(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function I(r){var e,t,n,i,o,a,u,c,s,l,g,h,b;if(!A(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(a="",u=1,c=0;c<r.length;c++)if(n=r[c],"string"==typeof n)a+=n;else{if(e=void 0!==n.precision,!(n=k(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+c+"`. Value: `"+n+"`.");for(n.mapping&&(u=n.mapping),t=n.flags,s=0;s<t.length;s++)switch(i=t.charAt(s)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[u],10),u+=1,x(n.width))throw new TypeError("the argument for * width at position "+u+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[u],10),u+=1,x(n.precision))throw new TypeError("the argument for * precision at position "+u+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[u],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=p(n);break;case"s":n.maxWidth=e?n.precision:-1,n.arg=String(n.arg);break;case"c":if(!x(n.arg)){if((o=parseInt(n.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=x(o)?String(n.arg):T(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=O(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=f(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=(l=n.arg,g=n.width,h=n.padRight,b=void 0,(b=g-l.length)<0?l:l=h?l+S(b):S(b)+l)),a+=n.arg||"",u+=1}return a}var V=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function P(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function F(r){var e,t,n,i;for(t=[],i=0,n=V.exec(r);n;)(e=r.slice(i,V.lastIndex-n[0].length)).length&&t.push(e),t.push(P(n)),i=V.lastIndex,n=V.exec(r);return(e=r.slice(i)).length&&t.push(e),t}function C(r){var e,t;if("string"!=typeof r)throw new TypeError(C("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=[F(r)],t=1;t<arguments.length;t++)e.push(arguments[t]);return I.apply(null,e)}var $,N=Object.prototype,B=N.toString,R=N.__defineGetter__,U=N.__defineSetter__,G=N.__lookupGetter__,L=N.__lookupSetter__;$=function(){try{return o({},"x",{}),!0}catch(r){return!1}}()?a:function(r,e,t){var n,i,o,a;if("object"!=typeof r||null===r||"[object Array]"===B.call(r))throw new TypeError(C("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===B.call(t))throw new TypeError(C("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(G.call(r,e)||L.call(r,e)?(n=r.__proto__,r.__proto__=N,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),o="get"in t,a="set"in t,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&R&&R.call(r,e,t.get),a&&U&&U.call(r,e,t.set),r};var Z=$;function D(r,e,t){Z(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}function M(r){return"boolean"==typeof r}var W="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function X(){return W&&"symbol"==typeof Symbol.toStringTag}var Y=Object.prototype.toString;var q=Object.prototype.hasOwnProperty;function z(r,e){return null!=r&&q.call(r,e)}var H="function"==typeof Symbol?Symbol:void 0,J="function"==typeof H?H.toStringTag:"";var K=X()?function(r){var e,t,n;if(null==r)return Y.call(r);t=r[J],e=z(r,J);try{r[J]=void 0}catch(e){return Y.call(r)}return n=Y.call(r),e?r[J]=t:delete r[J],n}:function(r){return Y.call(r)},Q=Boolean,rr=Boolean.prototype.toString;var er=X();function tr(r){return"object"==typeof r&&(r instanceof Q||(er?function(r){try{return rr.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===K(r)))}function nr(r){return M(r)||tr(r)}D(nr,"isPrimitive",M),D(nr,"isObject",tr);var ir="object"==typeof self?self:null,or="object"==typeof window?window:null,ar="object"==typeof global?global:null,ur="object"==typeof globalThis?globalThis:null;var cr=function(r){if(arguments.length){if(!M(r))throw new TypeError(C("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return new Function("return this;")()}if(ur)return ur;if(ir)return ir;if(or)return or;if(ar)return ar;throw new Error("unexpected error. Unable to resolve global object.")}(),fr=cr.document&&cr.document.childNodes,sr=Int8Array;function lr(){return/^\s*function\s*([^(]*)/i}var pr=/^\s*function\s*([^(]*)/i;D(lr,"REGEXP",pr);var gr=Array.isArray?Array.isArray:function(r){return"[object Array]"===K(r)};function hr(r){return null!==r&&"object"==typeof r}function br(r){var e,t,n,i;if(("Object"===(t=K(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=pr.exec(n.toString()))return e[1]}return hr(i=r)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":t}D(hr,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError(C("invalid argument. Must provide a function. Value: `%s`.",r));return function(e){var t,n;if(!gr(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(hr));var dr="function"==typeof i||"object"==typeof sr||"function"==typeof fr?function(r){return br(r).toLowerCase()}:function(r){var e;return null===r?"null":"object"===(e=typeof r)?br(r).toLowerCase():e};function yr(r){return"function"===dr(r)}function vr(){var r,e=arguments,t="https://stdlib.io/e/"+e[0]+"?";for(r=1;r<e.length;r++)t+="&arg[]="+encodeURIComponent(e[r]);return t}var wr,mr=Object,jr=Object.getPrototypeOf;wr=yr(Object.getPrototypeOf)?jr:function(r){var e=function(r){return r.__proto__}(r);return e||null===e?e:"[object Function]"===K(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var _r=wr;var Er=Object.prototype;function Or(r){var e;return!!function(r){return"object"==typeof r&&null!==r&&!gr(r)}(r)&&(e=function(r){return null==r?null:(r=mr(r),_r(r))}(r),!e||!z(r,"constructor")&&z(e,"constructor")&&yr(e.constructor)&&"[object Function]"===K(e.constructor)&&z(e,"isPrototypeOf")&&yr(e.isPrototypeOf)&&(e===Er||function(r){var e;for(e in r)if(!z(r,e))return!1;return!0}(r)))}function Sr(r){return"number"==typeof r}var Tr=Number,Ar=Tr.prototype.toString;var xr=X();function kr(r){return"object"==typeof r&&(r instanceof Tr||(xr?function(r){try{return Ar.call(r),!0}catch(r){return!1}}(r):"[object Number]"===K(r)))}function Ir(r){return Sr(r)||kr(r)}function Vr(r){return r!=r}function Pr(r){return Sr(r)&&Vr(r)}function Fr(r){return kr(r)&&Vr(r.valueOf())}function Cr(r){return Pr(r)||Fr(r)}function $r(r){return"string"==typeof r}D(Ir,"isPrimitive",Sr),D(Ir,"isObject",kr),D(Cr,"isPrimitive",Pr),D(Cr,"isObject",Fr);var Nr=String.prototype.valueOf;var Br=X();function Rr(r){return"object"==typeof r&&(r instanceof String||(Br?function(r){try{return Nr.call(r),!0}catch(r){return!1}}(r):"[object String]"===K(r)))}function Ur(r){return $r(r)||Rr(r)}D(Ur,"isPrimitive",$r),D(Ur,"isObject",Rr);var Gr=Number.POSITIVE_INFINITY,Lr=Tr.NEGATIVE_INFINITY;function Zr(r){return r<Gr&&r>Lr&&e(r)}function Dr(r){return Sr(r)&&Zr(r)}function Mr(r){return kr(r)&&Zr(r.valueOf())}function Wr(r){return Dr(r)||Mr(r)}D(Wr,"isPrimitive",Dr),D(Wr,"isObject",Mr);var Xr=["values","indices","*"];function Yr(r,e){return Or(e)?(z(e,"thisArg")&&(r.thisArg=e.thisArg),z(e,"returns")&&(r.returns=e.returns,-1===function(r,e,t){var i,o;if(!n(r)&&!$r(r))throw new TypeError(C("invalid argument. First argument must be an array-like object. Value: `%s`.",r));if(0===(i=r.length))return-1;if(3===arguments.length){if(!Dr(t))throw new TypeError(C("invalid argument. Third argument must be an integer. Value: `%s`.",t));if(t>=0){if(t>=i)return-1;o=t}else(o=i+t)<0&&(o=0)}else o=0;if(Cr(e)){for(;o<i;o++)if(Cr(r[o]))return o}else for(;o<i;o++)if(r[o]===e)return o;return-1}(Xr,r.returns))?new TypeError(vr("1UD4S","returns",Xr.join('", "'),r.returns)):null):new TypeError(vr("1UD2V",e))}return function(r,e,t){var i,o,a;if(!n(r))throw new TypeError(vr("1UDAh",r));if(i={returns:"values"},2===arguments.length)a=e;else{if(o=Yr(i,e))throw o;a=t}if(!yr(a))throw new TypeError(vr("1UD3q",a));return"values"===i.returns?function(r,e,t){var n,i,o,a,u,c;for(n=e.thisArg,o=r.length,i={},c=0;c<o;c++)u=r[c],z(i,a=t.call(n,u,c))?i[a].push(u):i[a]=[u];return i}(r,i,a):"indices"===i.returns?function(r,e,t){var n,i,o,a,u;for(n=e.thisArg,o=r.length,i={},u=0;u<o;u++)z(i,a=t.call(n,r[u],u))?i[a].push(u):i[a]=[u];return i}(r,i,a):function(r,e,t){var n,i,o,a,u,c;for(n=e.thisArg,o=r.length,i={},c=0;c<o;c++)u=r[c],z(i,a=t.call(n,u,c))?i[a].push([c,u]):i[a]=[[c,u]];return i}(r,i,a)}}));
//# sourceMappingURL=index.js.map
