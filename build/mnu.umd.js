!function(t,e){"object"===typeof exports&&"object"===typeof module?module.exports=e():"function"===typeof define&&define.amd?define([],e):"object"===typeof exports?exports.mnu=e():t.mnu=e()}(window,function(){return function(t){var e={};function r(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:n})},r.r=function(t){Object.defineProperty(t,"__esModule",{value:!0})},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/",r(r.s=14)}([function(t,e,r){"use strict";var n=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable;t.exports=function(){try{if(!Object.assign)return!1;var t=new String("abc");if(t[5]="de","5"===Object.getOwnPropertyNames(t)[0])return!1;for(var e={},r=0;r<10;r++)e["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(e).map(function(t){return e[t]}).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach(function(t){n[t]=t}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(t){return!1}}()?Object.assign:function(t,e){for(var r,u,s=function(t){if(null===t||void 0===t)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(t)}(t),f=1;f<arguments.length;f++){for(var a in r=Object(arguments[f]))o.call(r,a)&&(s[a]=r[a]);if(n){u=n(r);for(var c=0;c<u.length;c++)i.call(r,u[c])&&(s[u[c]]=r[u[c]])}}return s}},function(t,e,r){"use strict";function n(t){return(n="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var o=r(11);function i(){}var u=null,s={};function f(t){if("object"!==n(this))throw new TypeError("Promises must be constructed via new");if("function"!==typeof t)throw new TypeError("Promise constructor's argument is not a function");this._75=0,this._83=0,this._18=null,this._38=null,t!==i&&d(t,this)}function a(t,e){for(;3===t._83;)t=t._18;if(f._47&&f._47(t),0===t._83)return 0===t._75?(t._75=1,void(t._38=e)):1===t._75?(t._75=2,void(t._38=[t._38,e])):void t._38.push(e);!function(t,e){o(function(){var r=1===t._83?e.onFulfilled:e.onRejected;if(null!==r){var n=function(t,e){try{return t(e)}catch(t){return u=t,s}}(r,t._18);n===s?l(e.promise,u):c(e.promise,n)}else 1===t._83?c(e.promise,t._18):l(e.promise,t._18)})}(t,e)}function c(t,e){if(e===t)return l(t,new TypeError("A promise cannot be resolved with itself."));if(e&&("object"===n(e)||"function"===typeof e)){var r=function(t){try{return t.then}catch(t){return u=t,s}}(e);if(r===s)return l(t,u);if(r===t.then&&e instanceof f)return t._83=3,t._18=e,void p(t);if("function"===typeof r)return void d(r.bind(e),t)}t._83=1,t._18=e,p(t)}function l(t,e){t._83=2,t._18=e,f._71&&f._71(t,e),p(t)}function p(t){if(1===t._75&&(a(t,t._38),t._38=null),2===t._75){for(var e=0;e<t._38.length;e++)a(t,t._38[e]);t._38=null}}function y(t,e,r){this.onFulfilled="function"===typeof t?t:null,this.onRejected="function"===typeof e?e:null,this.promise=r}function d(t,e){var r=!1,n=function(t,e,r){try{t(e,r)}catch(t){return u=t,s}}(t,function(t){r||(r=!0,c(e,t))},function(t){r||(r=!0,l(e,t))});r||n!==s||(r=!0,l(e,u))}t.exports=f,f._47=null,f._71=null,f._44=i,f.prototype.then=function(t,e){if(this.constructor!==f)return function(t,e,r){return new t.constructor(function(n,o){var u=new f(i);u.then(n,o),a(t,new y(e,r,u))})}(this,t,e);var r=new f(i);return a(this,new y(t,e,r)),r}},function(t,e,r){"use strict";t.exports=r(7)},function(t,e,r){"use strict";r.r(e);var n=r(2),o=r.n(n),i=function(){return o.a.createElement("div",null,"MnuButton")};r.d(e,"Button",function(){return i})},function(t,e,r){"use strict";function n(t){return function(){return t}}var o=function(){};o.thatReturns=n,o.thatReturnsFalse=n(!1),o.thatReturnsTrue=n(!0),o.thatReturnsNull=n(null),o.thatReturnsThis=function(){return this},o.thatReturnsArgument=function(t){return t},t.exports=o},function(t,e,r){"use strict";t.exports={}},function(t,e,r){"use strict";var n=function(t){};t.exports=function(t,e,r,o,i,u,s,f){if(n(e),!t){var a;if(void 0===e)a=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var c=[r,o,i,u,s,f],l=0;(a=new Error(e.replace(/%s/g,function(){return c[l++]}))).name="Invariant Violation"}throw a.framesToPop=1,a}}},function(t,e,r){"use strict";function n(t){return(n="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var o=r(0),i=r(6),u=r(5),s=r(4),f="function"===typeof Symbol&&Symbol.for,a=f?Symbol.for("react.element"):60103,c=f?Symbol.for("react.portal"):60106,l=f?Symbol.for("react.fragment"):60107,p=f?Symbol.for("react.strict_mode"):60108,y=f?Symbol.for("react.profiler"):60114,d=f?Symbol.for("react.provider"):60109,h=f?Symbol.for("react.context"):60110,b=f?Symbol.for("react.async_mode"):60111,m=f?Symbol.for("react.forward_ref"):60112;f&&Symbol.for("react.timeout");var v="function"===typeof Symbol&&Symbol.iterator;function _(t){for(var e=arguments.length-1,r="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=0;n<e;n++)r+="&args[]="+encodeURIComponent(arguments[n+1]);i(!1,"Minified React error #"+t+"; visit %s for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ",r)}var w={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}};function g(t,e,r){this.props=t,this.context=e,this.refs=u,this.updater=r||w}function S(){}function j(t,e,r){this.props=t,this.context=e,this.refs=u,this.updater=r||w}g.prototype.isReactComponent={},g.prototype.setState=function(t,e){"object"!==n(t)&&"function"!==typeof t&&null!=t&&_("85"),this.updater.enqueueSetState(this,t,e,"setState")},g.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")},S.prototype=g.prototype;var x=j.prototype=new S;x.constructor=j,o(x,g.prototype),x.isPureReactComponent=!0;var P={current:null},E=Object.prototype.hasOwnProperty,O={key:!0,ref:!0,__self:!0,__source:!0};function T(t,e,r){var n=void 0,o={},i=null,u=null;if(null!=e)for(n in void 0!==e.ref&&(u=e.ref),void 0!==e.key&&(i=""+e.key),e)E.call(e,n)&&!O.hasOwnProperty(n)&&(o[n]=e[n]);var s=arguments.length-2;if(1===s)o.children=r;else if(1<s){for(var f=Array(s),c=0;c<s;c++)f[c]=arguments[c+2];o.children=f}if(t&&t.defaultProps)for(n in s=t.defaultProps)void 0===o[n]&&(o[n]=s[n]);return{$$typeof:a,type:t,key:i,ref:u,props:o,_owner:P.current}}function A(t){return"object"===n(t)&&null!==t&&t.$$typeof===a}var R=/\/+/g,B=[];function U(t,e,r,n){if(B.length){var o=B.pop();return o.result=t,o.keyPrefix=e,o.func=r,o.context=n,o.count=0,o}return{result:t,keyPrefix:e,func:r,context:n,count:0}}function I(t){t.result=null,t.keyPrefix=null,t.func=null,t.context=null,t.count=0,10>B.length&&B.push(t)}function k(t,e,r,o){var i=n(t);"undefined"!==i&&"boolean"!==i||(t=null);var u=!1;if(null===t)u=!0;else switch(i){case"string":case"number":u=!0;break;case"object":switch(t.$$typeof){case a:case c:u=!0}}if(u)return r(o,t,""===e?"."+F(t,0):e),1;if(u=0,e=""===e?".":e+":",Array.isArray(t))for(var s=0;s<t.length;s++){var f=e+F(i=t[s],s);u+=k(i,f,r,o)}else if(null===t||"undefined"===typeof t?f=null:f="function"===typeof(f=v&&t[v]||t["@@iterator"])?f:null,"function"===typeof f)for(t=f.call(t),s=0;!(i=t.next()).done;)u+=k(i=i.value,f=e+F(i,s++),r,o);else"object"===i&&_("31","[object Object]"===(r=""+t)?"object with keys {"+Object.keys(t).join(", ")+"}":r,"");return u}function F(t,e){return"object"===n(t)&&null!==t&&null!=t.key?function(t){var e={"=":"=0",":":"=2"};return"$"+(""+t).replace(/[=:]/g,function(t){return e[t]})}(t.key):e.toString(36)}function C(t,e){t.func.call(t.context,e,t.count++)}function D(t,e,r){var n=t.result,o=t.keyPrefix;t=t.func.call(t.context,e,t.count++),Array.isArray(t)?$(t,n,r,s.thatReturnsArgument):null!=t&&(A(t)&&(e=o+(!t.key||e&&e.key===t.key?"":(""+t.key).replace(R,"$&/")+"/")+r,t={$$typeof:a,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}),n.push(t))}function $(t,e,r,n,o){var i="";null!=r&&(i=(""+r).replace(R,"$&/")+"/"),e=U(e,i,n,o),null==t||k(t,"",D,e),I(e)}var q={Children:{map:function(t,e,r){if(null==t)return t;var n=[];return $(t,n,null,e,r),n},forEach:function(t,e,r){if(null==t)return t;e=U(null,null,e,r),null==t||k(t,"",C,e),I(e)},count:function(t){return null==t?0:k(t,"",s.thatReturnsNull,null)},toArray:function(t){var e=[];return $(t,e,null,s.thatReturnsArgument),e},only:function(t){return A(t)||_("143"),t}},createRef:function(){return{current:null}},Component:g,PureComponent:j,createContext:function(t,e){return void 0===e&&(e=null),(t={$$typeof:h,_calculateChangedBits:e,_defaultValue:t,_currentValue:t,_currentValue2:t,_changedBits:0,_changedBits2:0,Provider:null,Consumer:null}).Provider={$$typeof:d,_context:t},t.Consumer=t},forwardRef:function(t){return{$$typeof:m,render:t}},Fragment:l,StrictMode:p,unstable_AsyncMode:b,unstable_Profiler:y,createElement:T,cloneElement:function(t,e,r){(null===t||void 0===t)&&_("267",t);var n=void 0,i=o({},t.props),u=t.key,s=t.ref,f=t._owner;if(null!=e){void 0!==e.ref&&(s=e.ref,f=P.current),void 0!==e.key&&(u=""+e.key);var c=void 0;for(n in t.type&&t.type.defaultProps&&(c=t.type.defaultProps),e)E.call(e,n)&&!O.hasOwnProperty(n)&&(i[n]=void 0===e[n]&&void 0!==c?c[n]:e[n])}if(1===(n=arguments.length-2))i.children=r;else if(1<n){c=Array(n);for(var l=0;l<n;l++)c[l]=arguments[l+2];i.children=c}return{$$typeof:a,type:t.type,key:u,ref:s,props:i,_owner:f}},createFactory:function(t){var e=T.bind(null,t);return e.type=t,e},isValidElement:A,version:"16.4.2",__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{ReactCurrentOwner:P,assign:o}},L={default:q},N=L&&q||L;t.exports=N.default?N.default:N},function(t,e){!function(t){"use strict";if(!t.fetch){var e={searchParams:"URLSearchParams"in t,iterable:"Symbol"in t&&"iterator"in Symbol,blob:"FileReader"in t&&"Blob"in t&&function(){try{return new Blob,!0}catch(t){return!1}}(),formData:"FormData"in t,arrayBuffer:"ArrayBuffer"in t};if(e.arrayBuffer)var r=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],n=function(t){return t&&DataView.prototype.isPrototypeOf(t)},o=ArrayBuffer.isView||function(t){return t&&r.indexOf(Object.prototype.toString.call(t))>-1};c.prototype.append=function(t,e){t=s(t),e=f(e);var r=this.map[t];this.map[t]=r?r+","+e:e},c.prototype.delete=function(t){delete this.map[s(t)]},c.prototype.get=function(t){return t=s(t),this.has(t)?this.map[t]:null},c.prototype.has=function(t){return this.map.hasOwnProperty(s(t))},c.prototype.set=function(t,e){this.map[s(t)]=f(e)},c.prototype.forEach=function(t,e){for(var r in this.map)this.map.hasOwnProperty(r)&&t.call(e,this.map[r],r,this)},c.prototype.keys=function(){var t=[];return this.forEach(function(e,r){t.push(r)}),a(t)},c.prototype.values=function(){var t=[];return this.forEach(function(e){t.push(e)}),a(t)},c.prototype.entries=function(){var t=[];return this.forEach(function(e,r){t.push([r,e])}),a(t)},e.iterable&&(c.prototype[Symbol.iterator]=c.prototype.entries);var i=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];b.prototype.clone=function(){return new b(this,{body:this._bodyInit})},h.call(b.prototype),h.call(v.prototype),v.prototype.clone=function(){return new v(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new c(this.headers),url:this.url})},v.error=function(){var t=new v(null,{status:0,statusText:""});return t.type="error",t};var u=[301,302,303,307,308];v.redirect=function(t,e){if(-1===u.indexOf(e))throw new RangeError("Invalid status code");return new v(null,{status:e,headers:{location:t}})},t.Headers=c,t.Request=b,t.Response=v,t.fetch=function(t,r){return new Promise(function(n,o){var i=new b(t,r),u=new XMLHttpRequest;u.onload=function(){var t,e,r={status:u.status,statusText:u.statusText,headers:(t=u.getAllResponseHeaders()||"",e=new c,t.replace(/\r?\n[\t ]+/g," ").split(/\r?\n/).forEach(function(t){var r=t.split(":"),n=r.shift().trim();if(n){var o=r.join(":").trim();e.append(n,o)}}),e)};r.url="responseURL"in u?u.responseURL:r.headers.get("X-Request-URL");var o="response"in u?u.response:u.responseText;n(new v(o,r))},u.onerror=function(){o(new TypeError("Network request failed"))},u.ontimeout=function(){o(new TypeError("Network request failed"))},u.open(i.method,i.url,!0),"include"===i.credentials?u.withCredentials=!0:"omit"===i.credentials&&(u.withCredentials=!1),"responseType"in u&&e.blob&&(u.responseType="blob"),i.headers.forEach(function(t,e){u.setRequestHeader(e,t)}),u.send("undefined"===typeof i._bodyInit?null:i._bodyInit)})},t.fetch.polyfill=!0}function s(t){if("string"!==typeof t&&(t=String(t)),/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(t))throw new TypeError("Invalid character in header field name");return t.toLowerCase()}function f(t){return"string"!==typeof t&&(t=String(t)),t}function a(t){var r={next:function(){var e=t.shift();return{done:void 0===e,value:e}}};return e.iterable&&(r[Symbol.iterator]=function(){return r}),r}function c(t){this.map={},t instanceof c?t.forEach(function(t,e){this.append(e,t)},this):Array.isArray(t)?t.forEach(function(t){this.append(t[0],t[1])},this):t&&Object.getOwnPropertyNames(t).forEach(function(e){this.append(e,t[e])},this)}function l(t){if(t.bodyUsed)return Promise.reject(new TypeError("Already read"));t.bodyUsed=!0}function p(t){return new Promise(function(e,r){t.onload=function(){e(t.result)},t.onerror=function(){r(t.error)}})}function y(t){var e=new FileReader,r=p(e);return e.readAsArrayBuffer(t),r}function d(t){if(t.slice)return t.slice(0);var e=new Uint8Array(t.byteLength);return e.set(new Uint8Array(t)),e.buffer}function h(){return this.bodyUsed=!1,this._initBody=function(t){if(this._bodyInit=t,t)if("string"===typeof t)this._bodyText=t;else if(e.blob&&Blob.prototype.isPrototypeOf(t))this._bodyBlob=t;else if(e.formData&&FormData.prototype.isPrototypeOf(t))this._bodyFormData=t;else if(e.searchParams&&URLSearchParams.prototype.isPrototypeOf(t))this._bodyText=t.toString();else if(e.arrayBuffer&&e.blob&&n(t))this._bodyArrayBuffer=d(t.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer]);else{if(!e.arrayBuffer||!ArrayBuffer.prototype.isPrototypeOf(t)&&!o(t))throw new Error("unsupported BodyInit type");this._bodyArrayBuffer=d(t)}else this._bodyText="";this.headers.get("content-type")||("string"===typeof t?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):e.searchParams&&URLSearchParams.prototype.isPrototypeOf(t)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},e.blob&&(this.blob=function(){var t=l(this);if(t)return t;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){return this._bodyArrayBuffer?l(this)||Promise.resolve(this._bodyArrayBuffer):this.blob().then(y)}),this.text=function(){var t,e,r,n=l(this);if(n)return n;if(this._bodyBlob)return t=this._bodyBlob,e=new FileReader,r=p(e),e.readAsText(t),r;if(this._bodyArrayBuffer)return Promise.resolve(function(t){for(var e=new Uint8Array(t),r=new Array(e.length),n=0;n<e.length;n++)r[n]=String.fromCharCode(e[n]);return r.join("")}(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)},e.formData&&(this.formData=function(){return this.text().then(m)}),this.json=function(){return this.text().then(JSON.parse)},this}function b(t,e){var r,n,o=(e=e||{}).body;if(t instanceof b){if(t.bodyUsed)throw new TypeError("Already read");this.url=t.url,this.credentials=t.credentials,e.headers||(this.headers=new c(t.headers)),this.method=t.method,this.mode=t.mode,o||null==t._bodyInit||(o=t._bodyInit,t.bodyUsed=!0)}else this.url=String(t);if(this.credentials=e.credentials||this.credentials||"omit",!e.headers&&this.headers||(this.headers=new c(e.headers)),this.method=(r=e.method||this.method||"GET",n=r.toUpperCase(),i.indexOf(n)>-1?n:r),this.mode=e.mode||this.mode||null,this.referrer=null,("GET"===this.method||"HEAD"===this.method)&&o)throw new TypeError("Body not allowed for GET or HEAD requests");this._initBody(o)}function m(t){var e=new FormData;return t.trim().split("&").forEach(function(t){if(t){var r=t.split("="),n=r.shift().replace(/\+/g," "),o=r.join("=").replace(/\+/g," ");e.append(decodeURIComponent(n),decodeURIComponent(o))}}),e}function v(t,e){e||(e={}),this.type="default",this.status=void 0===e.status?200:e.status,this.ok=this.status>=200&&this.status<300,this.statusText="statusText"in e?e.statusText:"OK",this.headers=new c(e.headers),this.url=e.url||"",this._initBody(t)}}("undefined"!==typeof self?self:this)},function(t,e,r){"use strict";function n(t){return(n="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var o=r(1);t.exports=o;var i=l(!0),u=l(!1),s=l(null),f=l(void 0),a=l(0),c=l("");function l(t){var e=new o(o._44);return e._83=1,e._18=t,e}o.resolve=function(t){if(t instanceof o)return t;if(null===t)return s;if(void 0===t)return f;if(!0===t)return i;if(!1===t)return u;if(0===t)return a;if(""===t)return c;if("object"===n(t)||"function"===typeof t)try{var e=t.then;if("function"===typeof e)return new o(e.bind(t))}catch(t){return new o(function(e,r){r(t)})}return l(t)},o.all=function(t){var e=Array.prototype.slice.call(t);return new o(function(t,r){if(0===e.length)return t([]);var i=e.length;function u(s,f){if(f&&("object"===n(f)||"function"===typeof f)){if(f instanceof o&&f.then===o.prototype.then){for(;3===f._83;)f=f._18;return 1===f._83?u(s,f._18):(2===f._83&&r(f._18),void f.then(function(t){u(s,t)},r))}var a=f.then;if("function"===typeof a)return void new o(a.bind(f)).then(function(t){u(s,t)},r)}e[s]=f,0===--i&&t(e)}for(var s=0;s<e.length;s++)u(s,e[s])})},o.reject=function(t){return new o(function(e,r){r(t)})},o.race=function(t){return new o(function(e,r){t.forEach(function(t){o.resolve(t).then(e,r)})})},o.prototype.catch=function(t){return this.then(null,t)}},function(t,e){function r(t){return(r="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(t){"object"===("undefined"===typeof window?"undefined":r(window))&&(n=window)}t.exports=n},function(t,e,r){"use strict";(function(e){function r(t){o.length||(n(),!0),o[o.length]=t}t.exports=r;var n,o=[],i=0,u=1024;function s(){for(;i<o.length;){var t=i;if(i+=1,o[t].call(),i>u){for(var e=0,r=o.length-i;e<r;e++)o[e]=o[e+i];o.length-=i,i=0}}o.length=0,i=0,!1}var f,a,c,l="undefined"!==typeof e?e:self,p=l.MutationObserver||l.WebKitMutationObserver;function y(t){return function(){var e=setTimeout(n,0),r=setInterval(n,50);function n(){clearTimeout(e),clearInterval(r),t()}}}"function"===typeof p?(f=1,a=new p(s),c=document.createTextNode(""),a.observe(c,{characterData:!0}),n=function(){f=-f,c.data=f}):n=y(s),r.requestFlush=n,r.makeRequestCallFromTimer=y}).call(this,r(10))},function(t,e,r){"use strict";var n=r(1),o=[ReferenceError,TypeError,RangeError],i=!1;function u(){i=!1,n._47=null,n._71=null}function s(t,e){return e.some(function(e){return t instanceof e})}e.disable=u,e.enable=function(t){t=t||{},i&&u();i=!0;var e=0,r=0,f={};function a(e){(t.allRejections||s(f[e].error,t.whitelist||o))&&(f[e].displayId=r++,t.onUnhandled?(f[e].logged=!0,t.onUnhandled(f[e].displayId,f[e].error)):(f[e].logged=!0,function(t,e){console.warn("Possible Unhandled Promise Rejection (id: "+t+"):"),((e&&(e.stack||e))+"").split("\n").forEach(function(t){console.warn("  "+t)})}(f[e].displayId,f[e].error)))}n._47=function(e){var r;2===e._83&&f[e._56]&&(f[e._56].logged?(r=e._56,f[r].logged&&(t.onHandled?t.onHandled(f[r].displayId,f[r].error):f[r].onUnhandled||(console.warn("Promise Rejection Handled (id: "+f[r].displayId+"):"),console.warn('  This means you can ignore any previous messages of the form "Possible Unhandled Promise Rejection" with id '+f[r].displayId+".")))):clearTimeout(f[e._56].timeout),delete f[e._56])},n._71=function(t,r){0===t._75&&(t._56=e++,f[t._56]={displayId:null,error:r,timeout:setTimeout(a.bind(null,t._56),s(r,o)?100:2e3),logged:!1})}}},function(t,e,r){"use strict";"undefined"===typeof Promise&&(r(12).enable(),window.Promise=r(9)),r(8),Object.assign=r(0)},function(t,e,r){r(13),t.exports=r(3)}])});
//# sourceMappingURL=mnu.umd.js.map