!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e(require("vue")):"function"==typeof define&&define.amd?define(["vue"],e):"object"==typeof exports?exports["iview-typeahead-input"]=e(require("vue")):t["iview-typeahead-input"]=e(t.vue)}(this,function(t){return function(t){function e(r){if(n[r])return n[r].exports;var i=n[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,e),i.l=!0,i.exports}var n={};return e.m=t,e.c=n,e.i=function(t){return t},e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:r})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/dist/",e(e.s=13)}([function(t,e,n){t.exports=!n(2)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(t,e){var n=t.exports={version:"2.4.0"};"number"==typeof __e&&(__e=n)},function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,e){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,e){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},function(t,e,n){var r=n(3),i=n(1),o=n(23),u=n(27),s=function(t,e,n){var a,c,f,l=t&s.F,p=t&s.G,d=t&s.S,h=t&s.P,v=t&s.B,m=t&s.W,y=p?i:i[e]||(i[e]={}),g=y.prototype,b=p?r:d?r[e]:(r[e]||{}).prototype;p&&(n=e);for(a in n)(c=!l&&b&&void 0!==b[a])&&a in y||(f=c?b[a]:n[a],y[a]=p&&"function"!=typeof b[a]?n[a]:v&&c?o(f,r):m&&b[a]==f?function(t){var e=function(e,n,r){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(e);case 2:return new t(e,n)}return new t(e,n,r)}return t.apply(this,arguments)};return e.prototype=t.prototype,e}(f):h&&"function"==typeof f?o(Function.call,f):f,h&&((y.virtual||(y.virtual={}))[a]=f,t&s.R&&g&&!g[a]&&u(g,a,f)))};s.F=1,s.G=2,s.S=4,s.P=8,s.B=16,s.W=32,s.U=64,s.R=128,t.exports=s},function(t,e,n){var r=n(22);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},function(t,e,n){var r=n(20),i=n(28),o=n(40),u=Object.defineProperty;e.f=n(0)?Object.defineProperty:function(t,e,n){if(r(t),e=o(e,!0),r(n),i)try{return u(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(t[e]=n.value),t}},function(t,e){var n=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:n)(t)}},function(t,e,n){var r=n(7),i=n(5);t.exports=function(t){return r(i(t))}},function(t,e,n){n(48);var r=n(46)(n(12),n(47),"data-v-8577f61e",null);t.exports=r.exports},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(51),i=n.n(r);e.default={extends:i.a,props:{placeholder:{type:String,default:"..."},src:{type:String,default:""},limit:{type:Number,default:10},minChars:{type:Number,default:2},autocomplete:{type:Boolean,default:!0},paramName:{type:String,default:"keywords"},itemTitleKey:{type:String,default:"name"},selectedFirst:{type:Boolean,default:!1},convent:{type:Function,default:function(t){return t}}},data:function(){return{selectFirst:this.selectedFirst,shown:!1,queryParamName:this.paramName,selected:null,dirtied:!1}},watch:{query:function(t,e){t!==e&&t.length>=this.minChars&&(!this.selected||t!==this.selected[this.itemTitleKey])&&(this.shown=!0),t<this.minChars&&(this.dirtied=!1)},paramName:function(t){this.queryParamName=t}},computed:{isDirty:function(){return this.dirtied}},methods:{onHit:function(t){t&&this.autocomplete&&(this.query=t[this.itemTitleKey]),this.selected=t,this.dirtied=!0,this.$emit("changed",t),this.shown=!1},prepareResponseData:function(t){return this.convent(t)},activeClass:function(t){return{"ivu-select-item-selected":this.current===t}}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(11),i=n.n(r);e.default=i.a},function(t,e,n){t.exports={default:n(17),__esModule:!0}},function(t,e,n){t.exports={default:n(18),__esModule:!0}},function(t,e,n){"use strict";e.__esModule=!0;var r=n(15),i=function(t){return t&&t.__esModule?t:{default:t}}(r);e.default=function(t,e,n){return e in t?(0,i.default)(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}},function(t,e,n){n(42),t.exports=n(1).Object.assign},function(t,e,n){n(43);var r=n(1).Object;t.exports=function(t,e,n){return r.defineProperty(t,e,n)}},function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,e,n){var r=n(4);t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},function(t,e,n){var r=n(10),i=n(38),o=n(37);t.exports=function(t){return function(e,n,u){var s,a=r(e),c=i(a.length),f=o(u,c);if(t&&n!=n){for(;c>f;)if((s=a[f++])!=s)return!0}else for(;c>f;f++)if((t||f in a)&&a[f]===n)return t||f||0;return!t&&-1}}},function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},function(t,e,n){var r=n(19);t.exports=function(t,e,n){if(r(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,i){return t.call(e,n,r,i)}}return function(){return t.apply(e,arguments)}}},function(t,e,n){var r=n(4),i=n(3).document,o=r(i)&&r(i.createElement);t.exports=function(t){return o?i.createElement(t):{}}},function(t,e){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},function(t,e,n){var r=n(8),i=n(34);t.exports=n(0)?function(t,e,n){return r.f(t,e,i(1,n))}:function(t,e,n){return t[e]=n,t}},function(t,e,n){t.exports=!n(0)&&!n(2)(function(){return 7!=Object.defineProperty(n(24)("div"),"a",{get:function(){return 7}}).a})},function(t,e,n){"use strict";var r=n(32),i=n(30),o=n(33),u=n(39),s=n(7),a=Object.assign;t.exports=!a||n(2)(function(){var t={},e={},n=Symbol(),r="abcdefghijklmnopqrst";return t[n]=7,r.split("").forEach(function(t){e[t]=t}),7!=a({},t)[n]||Object.keys(a({},e)).join("")!=r})?function(t,e){for(var n=u(t),a=arguments.length,c=1,f=i.f,l=o.f;a>c;)for(var p,d=s(arguments[c++]),h=f?r(d).concat(f(d)):r(d),v=h.length,m=0;v>m;)l.call(d,p=h[m++])&&(n[p]=d[p]);return n}:a},function(t,e){e.f=Object.getOwnPropertySymbols},function(t,e,n){var r=n(26),i=n(10),o=n(21)(!1),u=n(35)("IE_PROTO");t.exports=function(t,e){var n,s=i(t),a=0,c=[];for(n in s)n!=u&&r(s,n)&&c.push(n);for(;e.length>a;)r(s,n=e[a++])&&(~o(c,n)||c.push(n));return c}},function(t,e,n){var r=n(31),i=n(25);t.exports=Object.keys||function(t){return r(t,i)}},function(t,e){e.f={}.propertyIsEnumerable},function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},function(t,e,n){var r=n(36)("keys"),i=n(41);t.exports=function(t){return r[t]||(r[t]=i(t))}},function(t,e,n){var r=n(3),i=r["__core-js_shared__"]||(r["__core-js_shared__"]={});t.exports=function(t){return i[t]||(i[t]={})}},function(t,e,n){var r=n(9),i=Math.max,o=Math.min;t.exports=function(t,e){return t=r(t),t<0?i(t+e,0):o(t,e)}},function(t,e,n){var r=n(9),i=Math.min;t.exports=function(t){return t>0?i(r(t),9007199254740991):0}},function(t,e,n){var r=n(5);t.exports=function(t){return Object(r(t))}},function(t,e,n){var r=n(4);t.exports=function(t,e){if(!r(t))return t;var n,i;if(e&&"function"==typeof(n=t.toString)&&!r(i=n.call(t)))return i;if("function"==typeof(n=t.valueOf)&&!r(i=n.call(t)))return i;if(!e&&"function"==typeof(n=t.toString)&&!r(i=n.call(t)))return i;throw TypeError("Can't convert object to primitive value")}},function(t,e){var n=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++n+r).toString(36))}},function(t,e,n){var r=n(6);r(r.S+r.F,"Object",{assign:n(29)})},function(t,e,n){var r=n(6);r(r.S+r.F*!n(0),"Object",{defineProperty:n(8).f})},function(t,e,n){e=t.exports=n(45)(),e.push([t.i,".typeahead-input .loading[data-v-8577f61e]{animation:typeahead-input-loading 1s linear infinite}@keyframes typeahead-input-loading{0%{transform:rotate(0deg)}50%{transform:rotate(180deg)}to{transform:rotate(1turn)}}",""])},function(t,e){t.exports=function(){var t=[];return t.toString=function(){for(var t=[],e=0;e<this.length;e++){var n=this[e];n[2]?t.push("@media "+n[2]+"{"+n[1]+"}"):t.push(n[1])}return t.join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},i=0;i<this.length;i++){var o=this[i][0];"number"==typeof o&&(r[o]=!0)}for(i=0;i<e.length;i++){var u=e[i];"number"==typeof u[0]&&r[u[0]]||(n&&!u[2]?u[2]=n:n&&(u[2]="("+u[2]+") and ("+n+")"),t.push(u))}},t}},function(t,e){t.exports=function(t,e,n,r){var i,o=t=t||{},u=typeof t.default;"object"!==u&&"function"!==u||(i=t,o=t.default);var s="function"==typeof o?o.options:o;if(e&&(s.render=e.render,s.staticRenderFns=e.staticRenderFns),n&&(s._scopeId=n),r){var a=Object.create(s.computed||null);Object.keys(r).forEach(function(t){var e=r[t];a[t]=function(){return e}}),s.computed=a}return{esModule:i,exports:o,options:s}}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"ivu-input-wrapper ivu-input-type typeahead-input ivu-select ivu-select-single"},[t.loading?n("i",{staticClass:"ivu-icon ivu-icon-load-c ivu-input-icon ivu-input-icon-normal loading",attrs:{type:"load-c"}}):t._e(),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.query,expression:"query"}],staticClass:"ivu-input",attrs:{type:"text",placeholder:t.placeholder},domProps:{value:t.query},on:{keydown:[function(e){if(!("button"in e)&&t._k(e.keyCode,"down",40))return null;t.down(e)},function(e){if(!("button"in e)&&t._k(e.keyCode,"up",38))return null;t.up(e)},function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13))return null;t.hit(e)},function(e){if(!("button"in e)&&t._k(e.keyCode,"esc",27))return null;t.reset(e)}],blur:t.hit,input:[function(e){e.target.composing||(t.query=e.target.value)},t.update]}}),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:t.hasItems&&t.shown,expression:"hasItems && shown"}],staticClass:"ivu-select-dropdown"},[n("ul",{staticClass:"ivu-select-dropdown-list"},t._l(t.items,function(e,r){return n("li",{staticClass:"ivu-select-item",class:t.activeClass(r),on:{mousedown:t.hit,mousemove:function(e){t.setActive(r)}}},[n("span",{domProps:{textContent:t._s(e[t.itemTitleKey])}})])}))])])},staticRenderFns:[]}},function(t,e,n){var r=n(44);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);n(49)("595e51b8",r,!0)},function(t,e,n){function r(t){for(var e=0;e<t.length;e++){var n=t[e],r=f[n.id];if(r){r.refs++;for(var i=0;i<r.parts.length;i++)r.parts[i](n.parts[i]);for(;i<n.parts.length;i++)r.parts.push(o(n.parts[i]));r.parts.length>n.parts.length&&(r.parts.length=n.parts.length)}else{for(var u=[],i=0;i<n.parts.length;i++)u.push(o(n.parts[i]));f[n.id]={id:n.id,refs:1,parts:u}}}}function i(){var t=document.createElement("style");return t.type="text/css",l.appendChild(t),t}function o(t){var e,n,r=document.querySelector('style[data-vue-ssr-id~="'+t.id+'"]');if(r){if(h)return v;r.parentNode.removeChild(r)}if(m){var o=d++;r=p||(p=i()),e=u.bind(null,r,o,!1),n=u.bind(null,r,o,!0)}else r=i(),e=s.bind(null,r),n=function(){r.parentNode.removeChild(r)};return e(t),function(r){if(r){if(r.css===t.css&&r.media===t.media&&r.sourceMap===t.sourceMap)return;e(t=r)}else n()}}function u(t,e,n,r){var i=n?"":r.css;if(t.styleSheet)t.styleSheet.cssText=y(e,i);else{var o=document.createTextNode(i),u=t.childNodes;u[e]&&t.removeChild(u[e]),u.length?t.insertBefore(o,u[e]):t.appendChild(o)}}function s(t,e){var n=e.css,r=e.media,i=e.sourceMap;if(r&&t.setAttribute("media",r),i&&(n+="\n/*# sourceURL="+i.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */"),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}var a="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!a)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var c=n(50),f={},l=a&&(document.head||document.getElementsByTagName("head")[0]),p=null,d=0,h=!1,v=function(){},m="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());t.exports=function(t,e,n){h=n;var i=c(t,e);return r(i),function(e){for(var n=[],o=0;o<i.length;o++){var u=i[o],s=f[u.id];s.refs--,n.push(s)}e?(i=c(t,e),r(i)):i=[];for(var o=0;o<n.length;o++){var s=n[o];if(0===s.refs){for(var a=0;a<s.parts.length;a++)s.parts[a]();delete f[s.id]}}}};var y=function(){var t=[];return function(e,n){return t[e]=n,t.filter(Boolean).join("\n")}}()},function(t,e){t.exports=function(t,e){for(var n=[],r={},i=0;i<e.length;i++){var o=e[i],u=o[0],s=o[1],a=o[2],c=o[3],f={id:t+":"+i,css:s,media:a,sourceMap:c};r[u]?r[u].parts.push(f):n.push(r[u]={id:u,parts:[f]})}return n}},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var i=n(16),o=r(i),u=n(14),s=r(u),a=n(52);e.default={data:function(){return{items:[],query:"",current:-1,loading:!1,selectFirst:!1,queryParamName:"q"}},computed:{hasItems:function(){return this.items.length>0},isEmpty:function(){return!this.query},isDirty:function(){return!!this.query}},methods:{update:function(){var t=this;if(!this.query)return this.reset();this.minChars&&this.query.length<this.minChars||(this.loading=!0,this.fetch().then(function(e){if(t.query){var n=e.data;n=t.prepareResponseData?t.prepareResponseData(n):n,t.items=t.limit?n.slice(0,t.limit):n,t.current=-1,t.loading=!1,t.selectFirst&&t.down()}}))},fetch:function(){if(!this.$http)return a.util.warn("You need to provide a HTTP client",this);if(!this.src)return a.util.warn("You need to set the `src` property",this);var t=this.queryParamName?this.src:this.src+this.query,e=this.queryParamName?(0,s.default)((0,o.default)({},this.queryParamName,this.query),this.data):this.data;return this.$http.get(t,{params:e})},reset:function(){this.items=[],this.query="",this.loading=!1},setActive:function(t){this.current=t},activeClass:function(t){return{active:this.current===t}},hit:function(){-1!==this.current&&this.onHit(this.items[this.current])},up:function(){this.current>0?this.current--:-1===this.current?this.current=this.items.length-1:this.current=-1},down:function(){this.current<this.items.length-1?this.current++:this.current=-1},onHit:function(){a.util.warn("You need to implement the `onHit` method",this)}}}},function(e,n){e.exports=t}])});