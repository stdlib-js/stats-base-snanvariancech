"use strict";var N=function(r,i){return function(){try{return i||r((i={exports:{}}).exports,i),i.exports}catch(c){throw (i=0, c)}};};var M=N(function(C,y){
var q=require('@stdlib/number-float64-base-to-float32/dist');function T(r,i,c,v){var p,t,u,s,f,o,a,e,n;if(r<=0)return NaN;if(r===1||v===0)return a=c[0],a===a&&r-i>0?0:NaN;for(v<0?t=(1-r)*v:t=0,n=0;n<r;n++){if(a=c[t],a===a){p=a;break}t+=v}if(n===r)return NaN;for(t+=v,n+=1,u=0,f=0,e=1,n;n<r;n++)a=c[t],a===a&&(o=q(a-p),u=q(u+q(o*o)),f=q(f+o),e+=1),t+=v;return s=e-i,s<=0?NaN:q(q(u/s)-q(q(f/e)*q(f/s)))}y.exports=T
});var b=N(function(D,j){
var l=require('@stdlib/number-float64-base-to-float32/dist');function _(r,i,c,v,p){var t,u,s,f,o,a,e,n,m;if(r<=0)return NaN;if(r===1||v===0)return e=c[p],e===e&&r-i>0?0:NaN;for(u=p,m=0;m<r;m++){if(e=c[u],e===e){t=e;break}u+=v}if(m===r)return NaN;for(u+=v,m+=1,s=0,o=0,n=1,m;m<r;m++)e=c[u],e===e&&(a=l(e-t),s=l(s+l(a*a)),o=l(o+a),n+=1),u+=v;return f=n-i,f<=0?NaN:l(l(s/f)-l(l(o/n)*l(o/f)))}j.exports=_
});var F=N(function(G,x){
var E=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),k=M(),O=b();E(k,"ndarray",O);x.exports=k
});var g=require("path").join,w=require('@stdlib/utils-try-require/dist'),z=require('@stdlib/assert-is-error/dist'),A=F(),h,R=w(g(__dirname,"./native.js"));z(R)?h=A:h=R;module.exports=h;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
