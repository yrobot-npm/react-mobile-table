!function(t,e){if("object"==typeof exports&&"object"==typeof module)module.exports=e(require("react"));else if("function"==typeof define&&define.amd)define(["react"],e);else{var n="object"==typeof exports?e(require("react")):e(t.React);for(var r in n)("object"==typeof exports?exports:t)[r]=n[r]}}(window,(function(t){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=1)}([function(e,n){e.exports=t},function(t,e,n){"use strict";n.r(e);var r=n(0),o=n.n(r);n(2);function i(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(t)))return;var n=[],r=!0,o=!1,i=void 0;try{for(var a,u=t[Symbol.iterator]();!(r=(a=u.next()).done)&&(n.push(a.value),!e||n.length!==e);r=!0);}catch(t){o=!0,i=t}finally{try{r||null==u.return||u.return()}finally{if(o)throw i}}return n}(t,e)||u(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(t){return function(t){if(Array.isArray(t))return c(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||u(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(t,e){if(t){if("string"==typeof t)return c(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?c(t,e):void 0}}function c(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var l=function(t){return function(e){return a(Array(t)).map((function(t,n){return e(n)}))}};String.prototype.getCharSize=function(){return this.replace(/[^\u0000-\u00ff]/g,"  ").length};e.default=function(t){var e=t.data,n=void 0===e?[[]]:e,u=i(Object(r.useState)(n[0].map((function(){return!0}))),2),c=u[0],f=u[1],s=n.length||0,p=n[0].length||0,d=function(t){var e=[],n=0;return t[0].map((function(t,r){e[r]=t.getCharSize(),n+=t.getCharSize()})),e.map((function(t){return 100*t/n}))}(n);return o.a.createElement("div",{className:"table-view"},o.a.createElement("div",{className:"column-holder"},l(p)((function(t){return o.a.createElement("div",{className:"table-column",style:{minWidth:d[t]+"%",width:c[t]?d[t]+"%":"auto"},onClick:function(){var e,n;e=t,(n=a(c))[e]=!n[e],f(n)}},l(s)((function(e){return o.a.createElement("div",{className:"item"},n[e][t])})))}))))}},function(t,e,n){(e=n(3)(!1)).push([t.i,".table-view{position:relative;width:100%;overflow-x:scroll}.table-view .column-holder{position:relative;white-space:nowrap}.table-view .column-holder .table-column{display:inline-block;font-size:14px;font-weight:400;color:rgba(0,0,0,0.65)}.table-view .column-holder .table-column .item{box-sizing:border-box;padding:10px 16px;text-align:left;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;border-bottom:1px solid #f9f9f9}.table-view .column-holder .table-column .item:first-child{background:#fafafa;font-size:14px;font-weight:500;color:rgba(0,0,0,0.85)}\n",""]),t.exports=e},function(t,e,n){"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n=function(t,e){var n=t[1]||"",r=t[3];if(!r)return n;if(e&&"function"==typeof btoa){var o=(a=r,u=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),c="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(u),"/*# ".concat(c," */")),i=r.sources.map((function(t){return"/*# sourceURL=".concat(r.sourceRoot||"").concat(t," */")}));return[n].concat(i).concat([o]).join("\n")}var a,u,c;return[n].join("\n")}(e,t);return e[2]?"@media ".concat(e[2]," {").concat(n,"}"):n})).join("")},e.i=function(t,n,r){"string"==typeof t&&(t=[[null,t,""]]);var o={};if(r)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(o[a]=!0)}for(var u=0;u<t.length;u++){var c=[].concat(t[u]);r&&o[c[0]]||(n&&(c[2]?c[2]="".concat(n," and ").concat(c[2]):c[2]=n),e.push(c))}},e}}]).default}));