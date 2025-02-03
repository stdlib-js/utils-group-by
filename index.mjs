// Copyright (c) 2025 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-collection@v0.2.2-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function@v0.2.2-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.2.2-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-plain-object@v0.2.2-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-own-property@v0.2.2-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-index-of@v0.2.2-esm/index.mjs";var o=["values","indices","*"];function l(l,h,d){var u,m,p;if(!r(l))throw new TypeError(t("1UDAh",l));if(u={returns:"values"},2===arguments.length)p=h;else{if(m=function(r,s){return e(s)?(n(s,"thisArg")&&(r.thisArg=s.thisArg),n(s,"returns")&&(r.returns=s.returns,-1===i(o,r.returns))?new TypeError(t("1UD4S","returns",o.join('", "'),r.returns)):null):new TypeError(t("1UD2V",s))}(u,h),m)throw m;p=d}if(!s(p))throw new TypeError(t("1UD3q",p));return"values"===u.returns?function(r,s,t){var e,i,o,l,h,d;for(e=s.thisArg,o=r.length,i={},d=0;d<o;d++)h=r[d],l=t.call(e,h,d),n(i,l)?i[l].push(h):i[l]=[h];return i}(l,u,p):"indices"===u.returns?function(r,s,t){var e,i,o,l,h;for(e=s.thisArg,o=r.length,i={},h=0;h<o;h++)l=t.call(e,r[h],h),n(i,l)?i[l].push(h):i[l]=[h];return i}(l,u,p):function(r,s,t){var e,i,o,l,h,d;for(e=s.thisArg,o=r.length,i={},d=0;d<o;d++)h=r[d],l=t.call(e,h,d),n(i,l)?i[l].push([d,h]):i[l]=[[d,h]];return i}(l,u,p)}export{l as default};
//# sourceMappingURL=index.mjs.map
