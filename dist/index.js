"use strict";var u=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var y=u(function(G,d){
var b=require("path").resolve,R=require('@stdlib/fs-read-wasm/dist').sync,W=R(b(__dirname,"..","src","main.wasm"));d.exports=W
});var v=u(function(H,f){
var A=require('@stdlib/assert-is-wasm-memory/dist'),q=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),O=require('@stdlib/utils-inherit/dist'),m=require('@stdlib/wasm-module-wrapper/dist'),S=require('@stdlib/error-tools-fmtprodmsg/dist'),g=y();function s(e){if(!(this instanceof s))return new s(e);if(!A(e))throw new TypeError(S('26tH0',e));return m.call(this,g,e,{env:{memory:e}}),this}O(s,m);q(s.prototype,"main",function(r,i,t){return this._instance.exports.c_sasum(r,i,t)});q(s.prototype,"ndarray",function(r,i,t,o){return this._instance.exports.c_sasum_ndarray(r,i,t,o)});f.exports=s
});var M=u(function(I,w){
var h=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),j=require('@stdlib/utils-inherit/dist'),z=require('@stdlib/strided-base-stride2offset/dist'),B=require('@stdlib/wasm-memory/dist'),E=require('@stdlib/wasm-base-arrays2ptrs/dist'),T=require('@stdlib/wasm-base-strided2object/dist'),c=v();function a(){return this instanceof a?(c.call(this,new B({initial:0})),this):new a}j(a,c);h(a.prototype,"main",function(r,i,t){return this.ndarray(r,i,t,z(r,t))});h(a.prototype,"ndarray",function(r,i,t,o){var p,n;return p=E(this,[T(r,i,t,o)]),n=p[0],c.prototype.ndarray.call(this,r,n.ptr,n.stride,n.offset)});w.exports=a
});var _=u(function(J,x){
var V=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),k=M(),C=v(),l=new k;l.initializeSync();V(l,"Module",C.bind(null));x.exports=l
});var D=_();module.exports=D;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
