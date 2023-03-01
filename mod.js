// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r=Math.floor;function t(t){return r(t)===t}function e(r){return"object"==typeof r&&null!==r&&"number"==typeof r.length&&t(r.length)&&r.length>=0&&r.length<=9007199254740991}var n=/./,o="function"==typeof Object.defineProperty?Object.defineProperty:null;var u,i=Object.defineProperty,c=Object.prototype,f=c.toString,l=c.__defineGetter__,a=c.__defineSetter__,s=c.__lookupGetter__,p=c.__lookupSetter__;u=function(){try{return o({},"x",{}),!0}catch(r){return!1}}()?i:function(r,t,e){var n,o,u,i;if("object"!=typeof r||null===r||"[object Array]"===f.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof e||null===e||"[object Array]"===f.call(e))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+e+"`.");if((o="value"in e)&&(s.call(r,t)||p.call(r,t)?(n=r.__proto__,r.__proto__=c,delete r[t],r[t]=e.value,r.__proto__=n):r[t]=e.value),u="get"in e,i="set"in e,o&&(u||i))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return u&&l&&l.call(r,t,e.get),i&&a&&a.call(r,t,e.set),r};var y=u;function b(r,t,e){y(r,t,{configurable:!1,enumerable:!1,writable:!1,value:e})}function v(r){return"boolean"==typeof r}var g="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function j(){return g&&"symbol"==typeof Symbol.toStringTag}var h=Object.prototype.toString;var d=Object.prototype.hasOwnProperty;function m(r,t){return null!=r&&d.call(r,t)}var w="function"==typeof Symbol?Symbol.toStringTag:"";var _=j()?function(r){var t,e,n;if(null==r)return h.call(r);e=r[w],t=m(r,w);try{r[w]=void 0}catch(t){return h.call(r)}return n=h.call(r),t?r[w]=e:delete r[w],n}:function(r){return h.call(r)},O=Boolean.prototype.toString;var E=j();function S(r){return"object"==typeof r&&(r instanceof Boolean||(E?function(r){try{return O.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===_(r)))}function A(r){return v(r)||S(r)}function P(){return new Function("return this;")()}b(A,"isPrimitive",v),b(A,"isObject",S);var T="object"==typeof self?self:null,I="object"==typeof window?window:null,x="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},N="object"==typeof x?x:null;var B=function(r){if(arguments.length){if(!v(r))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+r+"`.");if(r)return P()}if(T)return T;if(I)return I;if(N)return N;throw new Error("unexpected error. Unable to resolve global object.")}(),V=B.document&&B.document.childNodes,F=Int8Array;function k(){return/^\s*function\s*([^(]*)/i}var C=/^\s*function\s*([^(]*)/i;b(k,"REGEXP",C);var G=Array.isArray?Array.isArray:function(r){return"[object Array]"===_(r)};function L(r){return null!==r&&"object"==typeof r}function M(r){var t,e,n,o;if(("Object"===(e=_(r).slice(8,-1))||"Error"===e)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(t=C.exec(n.toString()))return t[1]}return L(o=r)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":e}b(L,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError("invalid argument. Must provide a function. Value: `"+r+"`.");return function(t){var e,n;if(!G(t))return!1;if(0===(e=t.length))return!1;for(n=0;n<e;n++)if(!1===r(t[n]))return!1;return!0}}(L));var R="function"==typeof n||"object"==typeof F||"function"==typeof V?function(r){return M(r).toLowerCase()}:function(r){var t;return null===r?"null":"object"===(t=typeof r)?M(r).toLowerCase():t};function U(r){return"function"===R(r)}function Y(){var r,t=arguments,e=t[0],n="https://stdlib.io/e/"+e+"?";for(r=1;r<t.length;r++)n+="&arg[]="+encodeURIComponent(t[r]);return n}var X,q=Object.getPrototypeOf;X=U(Object.getPrototypeOf)?q:function(r){var t=function(r){return r.__proto__}(r);return t||null===t?t:"[object Function]"===_(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var z=X;var D=Object.prototype;function H(r){var t;return!!function(r){return"object"==typeof r&&null!==r&&!G(r)}(r)&&(t=function(r){return null==r?null:(r=Object(r),z(r))}(r),!t||!m(r,"constructor")&&m(t,"constructor")&&U(t.constructor)&&"[object Function]"===_(t.constructor)&&m(t,"isPrototypeOf")&&U(t.isPrototypeOf)&&(t===D||function(r){var t;for(t in r)if(!m(r,t))return!1;return!0}(r)))}function J(r){return"number"==typeof r}var K=Number,Q=K.prototype.toString;var W=j();function Z(r){return"object"==typeof r&&(r instanceof K||(W?function(r){try{return Q.call(r),!0}catch(r){return!1}}(r):"[object Number]"===_(r)))}function $(r){return J(r)||Z(r)}function rr(r){return r!=r}function tr(r){return J(r)&&rr(r)}function er(r){return Z(r)&&rr(r.valueOf())}function nr(r){return tr(r)||er(r)}function or(r){return"string"==typeof r}b($,"isPrimitive",J),b($,"isObject",Z),b(nr,"isPrimitive",tr),b(nr,"isObject",er);var ur=String.prototype.valueOf;var ir=j();function cr(r){return"object"==typeof r&&(r instanceof String||(ir?function(r){try{return ur.call(r),!0}catch(r){return!1}}(r):"[object String]"===_(r)))}function fr(r){return or(r)||cr(r)}b(fr,"isPrimitive",or),b(fr,"isObject",cr);var lr=Number.POSITIVE_INFINITY,ar=K.NEGATIVE_INFINITY;function sr(r){return r<lr&&r>ar&&t(r)}function pr(r){return J(r)&&sr(r)}function yr(r){return Z(r)&&sr(r.valueOf())}function br(r){return pr(r)||yr(r)}b(br,"isPrimitive",pr),b(br,"isObject",yr);var vr=["values","indices","*"];function gr(r,t){return H(t)?(m(t,"thisArg")&&(r.thisArg=t.thisArg),m(t,"returns")&&(r.returns=t.returns,-1===function(r,t,n){var o,u;if(!e(r)&&!or(r))throw new TypeError("invalid argument. First argument must be an array-like object. Value: `"+r+"`.");if(0===(o=r.length))return-1;if(3===arguments.length){if(!pr(n))throw new TypeError("invalid argument. `fromIndex` must be an integer. Value: `"+n+"`.");if(n>=0){if(n>=o)return-1;u=n}else(u=o+n)<0&&(u=0)}else u=0;if(nr(t)){for(;u<o;u++)if(nr(r[u]))return u}else for(;u<o;u++)if(r[u]===t)return u;return-1}(vr,r.returns))?new TypeError(Y("0jx3t","returns",vr.join('", "'),r.returns)):null):new TypeError(Y("0jx2h",t))}function jr(r,t,e){var n,o,u,i,c,f;for(n=t.thisArg,u=r.length,o={},f=0;f<u;f++)c=r[f],m(o,i=e.call(n,c,f))?o[i].push(c):o[i]=[c];return o}function hr(r,t,e){var n,o,u,i,c;for(n=t.thisArg,u=r.length,o={},c=0;c<u;c++)m(o,i=e.call(n,r[c],c))?o[i].push(c):o[i]=[c];return o}function dr(r,t,e){var n,o,u,i,c,f;for(n=t.thisArg,u=r.length,o={},f=0;f<u;f++)c=r[f],m(o,i=e.call(n,c,f))?o[i].push([f,c]):o[i]=[[f,c]];return o}function mr(r,t,n){var o,u,i;if(!e(r))throw new TypeError(Y("0jxBO",r));if(o={returns:"values"},2===arguments.length)i=t;else{if(u=gr(o,t))throw u;i=n}if(!U(i))throw new TypeError(Y("0jx43",i));return"values"===o.returns?jr(r,o,i):"indices"===o.returns?hr(r,o,i):dr(r,o,i)}export{mr as default};
//# sourceMappingURL=mod.js.map
