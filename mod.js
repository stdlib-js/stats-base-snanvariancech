// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var t,e=Object.defineProperty,o=Object.prototype,n=o.toString,a=o.__defineGetter__,l=o.__defineSetter__,u=o.__lookupGetter__,i=o.__lookupSetter__;t=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,t,e){var f,c,y,p;if("object"!=typeof r||null===r||"[object Array]"===n.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof e||null===e||"[object Array]"===n.call(e))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+e+"`.");if((c="value"in e)&&(u.call(r,t)||i.call(r,t)?(f=r.__proto__,r.__proto__=o,delete r[t],r[t]=e.value,r.__proto__=f):r[t]=e.value),y="get"in e,p="set"in e,c&&(y||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&a&&a.call(r,t,e.get),p&&l&&l.call(r,t,e.set),r};var f=t;var c="function"==typeof Math.fround?Math.fround:null;var y="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");var p=Object.prototype.toString;var b=Object.prototype.hasOwnProperty;var _,v="function"==typeof Symbol?Symbol.toStringTag:"";_=y&&"symbol"==typeof Symbol.toStringTag?function(r){var t,e,o,n,a;if(null==r)return p.call(r);e=r[v],a=v,t=null!=(n=r)&&b.call(n,a);try{r[v]=void 0}catch(t){return p.call(r)}return o=p.call(r),t?r[v]=e:delete r[v],o}:function(r){return p.call(r)};var d=_,N="function"==typeof Float32Array;var m=Number.POSITIVE_INFINITY,s="function"==typeof Float32Array?Float32Array:null;var g,j="function"==typeof Float32Array?Float32Array:void 0;g=function(){var r,t,e;if("function"!=typeof s)return!1;try{t=new s([1,3.14,-3.14,5e40]),e=t,r=(N&&e instanceof Float32Array||"[object Float32Array]"===d(e))&&1===t[0]&&3.140000104904175===t[1]&&-3.140000104904175===t[2]&&t[3]===m}catch(t){r=!1}return r}()?j:function(){throw new Error("not implemented")};var w=new g(1);var S="function"==typeof c?c:function(r){return w[0]=r,w[0]};function h(r,t,e,o){var n,a,l,u,i,f,c,y,p;if(r<=0)return NaN;if(1===r||0===o)return(c=e[0])==c&&r-t>0?0:NaN;for(a=o<0?(1-r)*o:0,p=0;p<r;p++){if((c=e[a])==c){n=c;break}a+=o}if(p===r)return NaN;for(a+=o,p+=1,l=0,i=0,y=1;p<r;p++)(c=e[a])==c&&(f=S(c-n),l=S(l+S(f*f)),i=S(i+f),y+=1),a+=o;return(u=y-t)<=0?NaN:S(S(l/u)-S(S(i/y)*S(i/u)))}function A(r,t,e,o,n){var a,l,u,i,f,c,y,p,b;if(r<=0)return NaN;if(1===r||0===o)return(y=e[n])==y&&r-t>0?0:NaN;for(l=n,b=0;b<r;b++){if((y=e[l])==y){a=y;break}l+=o}if(b===r)return NaN;for(l+=o,b+=1,u=0,f=0,p=1;b<r;b++)(y=e[l])==y&&(c=S(y-a),u=S(u+S(c*c)),f=S(f+c),p+=1),l+=o;return(i=p-t)<=0?NaN:S(S(u/i)-S(S(f/p)*S(f/i)))}f(h,"ndarray",{configurable:!1,enumerable:!1,writable:!1,value:A});export{h as default,A as ndarray};
//# sourceMappingURL=mod.js.map
