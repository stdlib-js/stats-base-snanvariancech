// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var e=Object.defineProperty;function t(r){return"number"==typeof r}function a(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function i(r,e,t){var i=!1,n=e-r.length;return n<0||(function(r){return"-"===r[0]}(r)&&(i=!0,r=r.substr(1)),r=t?r+a(n):a(n)+r,i&&(r="-"+r)),r}var n=String.prototype.toLowerCase,o=String.prototype.toUpperCase;function c(r){var e,a,c;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(a=r.arg,c=parseInt(a,10),!isFinite(c)){if(!t(a))throw new Error("invalid integer. Value: "+a);c=0}return c<0&&("u"===r.specifier||10!==e)&&(c=4294967295+c+1),c<0?(a=(-c).toString(e),r.precision&&(a=i(a,r.precision,r.padRight)),a="-"+a):(a=c.toString(e),c||r.precision?r.precision&&(a=i(a,r.precision,r.padRight)):a="",r.sign&&(a=r.sign+a)),16===e&&(r.alternate&&(a="0x"+a),a=r.specifier===o.call(r.specifier)?o.call(a):n.call(a)),8===e&&r.alternate&&"0"!==a.charAt(0)&&(a="0"+a),a}var l=Math.abs,s=String.prototype.toLowerCase,p=String.prototype.toUpperCase,f=String.prototype.replace,u=/e\+(\d)$/,g=/e-(\d)$/,d=/^(\d+)$/,h=/^(\d+)e/,y=/\.0$/,v=/\.0*e/,b=/(\..*[^0])0*e/;function w(r){var e,a,i=parseFloat(r.arg);if(!isFinite(i)){if(!t(r.arg))throw new Error("invalid floating-point number. Value: "+a);i=r.arg}switch(r.specifier){case"e":case"E":a=i.toExponential(r.precision);break;case"f":case"F":a=i.toFixed(r.precision);break;case"g":case"G":l(i)<1e-4?((e=r.precision)>0&&(e-=1),a=i.toExponential(e)):a=i.toPrecision(r.precision),r.alternate||(a=f.call(a,b,"$1e"),a=f.call(a,v,"e"),a=f.call(a,y,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return a=f.call(a,u,"e+0$1"),a=f.call(a,g,"e-0$1"),r.alternate&&(a=f.call(a,d,"$1."),a=f.call(a,h,"$1.e")),i>=0&&r.sign&&(a=r.sign+a),a=r.specifier===p.call(r.specifier)?p.call(a):s.call(a)}function m(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}var _=String.fromCharCode,S=Array.isArray;function k(r){return r!=r}function E(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function N(r){var e,t,a,n,o,l,s,p,f,u,g,d,h;if(!S(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(l="",s=1,p=0;p<r.length;p++)if(a=r[p],"string"==typeof a)l+=a;else{if(e=void 0!==a.precision,!(a=E(a)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+p+"`. Value: `"+a+"`.");for(a.mapping&&(s=a.mapping),t=a.flags,f=0;f<t.length;f++)switch(n=t.charAt(f)){case" ":a.sign=" ";break;case"+":a.sign="+";break;case"-":a.padRight=!0,a.padZeros=!1;break;case"0":a.padZeros=t.indexOf("-")<0;break;case"#":a.alternate=!0;break;default:throw new Error("invalid flag: "+n)}if("*"===a.width){if(a.width=parseInt(arguments[s],10),s+=1,k(a.width))throw new TypeError("the argument for * width at position "+s+" is not a number. Value: `"+a.width+"`.");a.width<0&&(a.padRight=!0,a.width=-a.width)}if(e&&"*"===a.precision){if(a.precision=parseInt(arguments[s],10),s+=1,k(a.precision))throw new TypeError("the argument for * precision at position "+s+" is not a number. Value: `"+a.precision+"`.");a.precision<0&&(a.precision=1,e=!1)}switch(a.arg=arguments[s],a.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(a.padZeros=!1),a.arg=c(a);break;case"s":a.maxWidth=e?a.precision:-1,a.arg=String(a.arg);break;case"c":if(!k(a.arg)){if((o=parseInt(a.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+a.arg);a.arg=k(o)?String(a.arg):_(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(a.precision=6),a.arg=w(a);break;default:throw new Error("invalid specifier: "+a.specifier)}a.maxWidth>=0&&a.arg.length>a.maxWidth&&(a.arg=a.arg.substring(0,a.maxWidth)),a.padZeros?a.arg=i(a.arg,a.width||a.precision,a.padRight):a.width&&(a.arg=(u=a.arg,g=a.width,d=a.padRight,h=void 0,(h=g-u.length)<0?u:u=d?u+m(h):m(h)+u)),l+=a.arg||"",s+=1}return l}var x=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function F(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function A(r){var e,t,a,i;for(t=[],i=0,a=x.exec(r);a;)(e=r.slice(i,x.lastIndex-a[0].length)).length&&t.push(e),t.push(F(a)),i=x.lastIndex,a=x.exec(r);return(e=r.slice(i)).length&&t.push(e),t}function j(r){var e,t;if("string"!=typeof r)throw new TypeError(j("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=[A(r)],t=1;t<arguments.length;t++)e.push(arguments[t]);return N.apply(null,e)}var I,T=Object.prototype,V=T.toString,$=T.__defineGetter__,O=T.__defineSetter__,C=T.__lookupGetter__,P=T.__lookupSetter__;I=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,e,t){var a,i,n,o;if("object"!=typeof r||null===r||"[object Array]"===V.call(r))throw new TypeError(j("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===V.call(t))throw new TypeError(j("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(C.call(r,e)||P.call(r,e)?(a=r.__proto__,r.__proto__=T,delete r[e],r[e]=t.value,r.__proto__=a):r[e]=t.value),n="get"in t,o="set"in t,i&&(n||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return n&&$&&$.call(r,e,t.get),o&&O&&O.call(r,e,t.set),r};var R=I;var Z="function"==typeof Math.fround?Math.fround:null;var G="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");var W=Object.prototype.toString;var L=Object.prototype.hasOwnProperty;var M,U="function"==typeof Symbol?Symbol:void 0,X="function"==typeof U?U.toStringTag:"";M=G&&"symbol"==typeof Symbol.toStringTag?function(r){var e,t,a,i,n;if(null==r)return W.call(r);t=r[X],n=X,e=null!=(i=r)&&L.call(i,n);try{r[X]=void 0}catch(e){return W.call(r)}return a=W.call(r),e?r[X]=t:delete r[X],a}:function(r){return W.call(r)};var z=M,Y="function"==typeof Float32Array;var q=Number.POSITIVE_INFINITY,B="function"==typeof Float32Array?Float32Array:null;var D,H="function"==typeof Float32Array?Float32Array:void 0;D=function(){var r,e,t;if("function"!=typeof B)return!1;try{e=new B([1,3.14,-3.14,5e40]),t=e,r=(Y&&t instanceof Float32Array||"[object Float32Array]"===z(t))&&1===e[0]&&3.140000104904175===e[1]&&-3.140000104904175===e[2]&&e[3]===q}catch(e){r=!1}return r}()?H:function(){throw new Error("not implemented")};var J=new D(1);var K="function"==typeof Z?Z:function(r){return J[0]=r,J[0]};function Q(r,e,t,a){var i,n,o,c,l,s,p,f,u;if(r<=0)return NaN;if(1===r||0===a)return(p=t[0])==p&&r-e>0?0:NaN;for(n=a<0?(1-r)*a:0,u=0;u<r;u++){if((p=t[n])==p){i=p;break}n+=a}if(u===r)return NaN;for(n+=a,u+=1,o=0,l=0,f=1;u<r;u++)(p=t[n])==p&&(s=K(p-i),o=K(o+K(s*s)),l=K(l+s),f+=1),n+=a;return(c=f-e)<=0?NaN:K(K(o/c)-K(K(l/f)*K(l/c)))}function rr(r,e,t,a,i){var n,o,c,l,s,p,f,u,g;if(r<=0)return NaN;if(1===r||0===a)return(f=t[i])==f&&r-e>0?0:NaN;for(o=i,g=0;g<r;g++){if((f=t[o])==f){n=f;break}o+=a}if(g===r)return NaN;for(o+=a,g+=1,c=0,s=0,u=1;g<r;g++)(f=t[o])==f&&(p=K(f-n),c=K(c+K(p*p)),s=K(s+p),u+=1),o+=a;return(l=u-e)<=0?NaN:K(K(c/l)-K(K(s/u)*K(s/l)))}R(Q,"ndarray",{configurable:!1,enumerable:!1,writable:!1,value:rr});export{Q as default,rr as ndarray};
//# sourceMappingURL=mod.js.map
