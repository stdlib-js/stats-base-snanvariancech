"use strict";var N=function(r,u){return function(){return u||r((u={exports:{}}).exports,u),u.exports}};var M=N(function(C,y){
var s=require('@stdlib/number-float64-base-to-float32/dist');function T(r,u,m,i){var p,t,v,c,f,o,a,e,n;if(r<=0)return NaN;if(r===1||i===0)return a=m[0],a===a&&r-u>0?0:NaN;for(i<0?t=(1-r)*i:t=0,n=0;n<r;n++){if(a=m[t],a===a){p=a;break}t+=i}if(n===r)return NaN;for(t+=i,n+=1,v=0,f=0,e=1,n;n<r;n++)a=m[t],a===a&&(o=s(a-p),v=s(v+s(o*o)),f=s(f+o),e+=1),t+=i;return c=e-u,c<=0?NaN:s(s(v/c)-s(s(f/e)*s(f/c)))}y.exports=T
});var b=N(function(D,j){
var q=require('@stdlib/number-float64-base-to-float32/dist');function _(r,u,m,i,p){var t,v,c,f,o,a,e,n,l;if(r<=0)return NaN;if(r===1||i===0)return e=m[p],e===e&&r-u>0?0:NaN;for(v=p,l=0;l<r;l++){if(e=m[v],e===e){t=e;break}v+=i}if(l===r)return NaN;for(v+=i,l+=1,c=0,o=0,n=1,l;l<r;l++)e=m[v],e===e&&(a=q(e-t),c=q(c+q(a*a)),o=q(o+a),n+=1),v+=i;return f=n-u,f<=0?NaN:q(q(c/f)-q(q(o/n)*q(o/f)))}j.exports=_
});var F=N(function(G,x){
var E=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),k=M(),O=b();E(k,"ndarray",O);x.exports=k
});var g=require("path").join,w=require('@stdlib/utils-try-require/dist'),z=require('@stdlib/assert-is-error/dist'),A=F(),h,R=w(g(__dirname,"./native.js"));z(R)?h=A:h=R;module.exports=h;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
