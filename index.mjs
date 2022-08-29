// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/number-float64-base-to-float32@v0.0.7-esm/index.mjs";function t(r,t,n,a){var f,i,o,s,N,u,d,l,m;if(r<=0)return NaN;if(1===r||0===a)return(d=n[0])==d&&r-t>0?0:NaN;for(i=a<0?(1-r)*a:0,m=0;m<r;m++){if((d=n[i])==d){f=d;break}i+=a}if(m===r)return NaN;for(i+=a,m+=1,o=0,N=0,l=1;m<r;m++)(d=n[i])==d&&(u=e(d-f),o=e(o+e(u*u)),N=e(N+u),l+=1),i+=a;return(s=l-t)<=0?NaN:e(e(o/s)-e(e(N/l)*e(N/s)))}function n(r,t,n,a,f){var i,o,s,N,u,d,l,m,b;if(r<=0)return NaN;if(1===r||0===a)return(l=n[f])==l&&r-t>0?0:NaN;for(o=f,b=0;b<r;b++){if((l=n[o])==l){i=l;break}o+=a}if(b===r)return NaN;for(o+=a,b+=1,s=0,u=0,m=1;b<r;b++)(l=n[o])==l&&(d=e(l-i),s=e(s+e(d*d)),u=e(u+d),m+=1),o+=a;return(N=m-t)<=0?NaN:e(e(s/N)-e(e(u/m)*e(u/N)))}r(t,"ndarray",n);export{t as default,n as ndarray};
//# sourceMappingURL=index.mjs.map
