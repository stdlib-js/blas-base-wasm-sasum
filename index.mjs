// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import s from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.2.1-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-inherit@v0.2.2-esm/index.mjs";import A from"https://cdn.jsdelivr.net/gh/stdlib-js/strided-base-stride2offset@v0.1.0-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/wasm-memory@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/wasm-base-arrays2ptrs@esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/wasm-base-strided2object@v0.0.0-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-wasm-memory@esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/wasm-module-wrapper@esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.2.2-esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/string-base-base64-to-uint8array@esm/index.mjs";var a=d("AGFzbQEAAAAADwhkeWxpbmsuMAEEAAAAAAETA2AAAGADf39/AX1gBH9/f38BfQIPAQNlbnYGbWVtb3J5AgAAAwQDAAECB0wEEV9fd2FzbV9jYWxsX2N0b3JzAAAYX193YXNtX2FwcGx5X2RhdGFfcmVsb2NzAAAHY19zYXN1bQABD2Nfc2FzdW1fbmRhcnJheQACCvwBAwMAAQsaACAAIAEgAkEBIABrIAJsQQAgAkEATBsQAgvaAQIBfwF9AkAgAEEATARADAELIAJBAUcEQANAIAAgBEYNAiAEQQFqIQQgBSABIANBAnRqKgIAi5IhBSACIANqIQMMAAsACwJAIABBBnAiAkUNAANAIAIgBEYNASAEQQFqIQQgBSABIANBAnRqKgIAi5IhBSADQQFqIQMMAAsACyAAQQZIDQADQCAAIAJMDQEgBSABIANBAnRqIgQqAgCLIAQqAgSLkiAEKgIIi5IgBCoCDIuSIAQqAhCLkiAEKgIUi5KSIQUgAkEGaiECIANBBmohAwwACwALIAUL");function p(s){if(!(this instanceof p))return new p(s);if(!n(s))throw new TypeError(o("invalid argument. Must provide a WebAssembly memory instance. Value: `%s`.",s));return m.call(this,a,s,{env:{memory:s}}),this}function h(){return this instanceof h?(p.call(this,new e({initial:0})),this):new h}t(p,m),s(p.prototype,"main",(function(s,t,A){return this._instance.exports.c_sasum(s,t,A)})),s(p.prototype,"ndarray",(function(s,t,A,e){return this._instance.exports.c_sasum_ndarray(s,t,A,e)})),t(h,p),s(h.prototype,"main",(function(s,t,e){return this.ndarray(s,t,e,A(s,e))})),s(h.prototype,"ndarray",(function(s,t,A,e){var n;return n=r(this,[i(s,t,A,e)])[0],p.prototype.ndarray.call(this,s,n.ptr,n.stride,n.offset)}));var l=new h;l.initializeSync(),s(l,"Module",p);export{p as Module,l as default};
//# sourceMappingURL=index.mjs.map
