!function(e){function t(t){for(var o,c,i=t[0],u=t[1],l=t[2],f=0,p=[];f<i.length;f++)c=i[f],r[c]&&p.push(r[c][0]),r[c]=0;for(o in u)Object.prototype.hasOwnProperty.call(u,o)&&(e[o]=u[o]);for(s&&s(t);p.length;)p.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],o=!0,i=1;i<n.length;i++){var u=n[i];0!==r[u]&&(o=!1)}o&&(a.splice(t--,1),e=c(c.s=n[0]))}return e}var o={},r={2:0},a=[];function c(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=e,c.c=o,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)c.d(n,o,function(t){return e[t]}.bind(null,o));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/";var i=window.webpackJsonp=window.webpackJsonp||[],u=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var s=u;a.push([53,0]),n()}({13:function(e,t,n){"use strict";var o=n(0),r=n.n(o),a=(n(19),n(26)),c=n(27),i=n(29),u=n(18),l=n(30),s=n(31),f=Object(a.a)({root:{flexGrow:1},card:{width:"75%",height:"25%"},title:{fontSize:14},pos:{marginBottom:12}});t.a=function(){var e=f();return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:e.root},r.a.createElement(c.a,{position:"static",color:"primary"},r.a.createElement(i.a,null,r.a.createElement(u.a,{variant:"h4",color:"default"},"CSS Copier")))),r.a.createElement("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"100%"}},r.a.createElement(l.a,{className:e.card},r.a.createElement(s.a,null,r.a.createElement(u.a,{className:e.title,color:"textSecondary",gutterBottom:!0},"Not Done Yet.... BUT SOON, MY DUDE!")))))}},19:function(e,t,n){},53:function(e,t,n){e.exports=n(55)},54:function(e,t,n){},55:function(e,t,n){"use strict";function o(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function r(e){return(r="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function a(e){return(a="function"===typeof Symbol&&"symbol"===r(Symbol.iterator)?function(e){return r(e)}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":r(e)})(e)}function c(e,t){return!t||"object"!==a(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function i(e){return(i=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function u(e,t){return(u=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}n.r(t);var l=n(0),s=n.n(l),f=n(14),p=n.n(f),y=(n(54),n(13)),d=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),c(this,i(t).apply(this,arguments))}var n,r,a;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&u(e,t)}(t,s.a.Component),n=t,(r=[{key:"render",value:function(){return s.a.createElement("div",{className:"my-extension"},s.a.createElement(y.a,null))}}])&&o(n.prototype,r),a&&o(n,a),t}(),m=document.createElement("div");function b(){for(var e,t,n,o,r=document.styleSheets,a=[],c=[],i={},u=0;u<r.length;u++)try{e=r[u].rules;for(var l=0;l<e.length&&(t=e[l].style,n=e[l].selectorText,"undefined"!==typeof t)&&(c.push(t.cssText),"undefined"!==typeof n&&null!=n);l++)a.push(n),i[a[l]]=c[l];o=JSON.stringify(i)}catch(s){console.log("You gone and fucked up, cowpoke... Here's the problem with what you did: \n ".concat(s));continue}return console.log(i),o}m.id="my-extension-root",document.body.appendChild(m),p.a.render(s.a.createElement(d,null),m),m.style.display="none",chrome.runtime.onMessage.addListener(function(e,t,n){"clicked_browser_action"===e.message&&("none"===m.style.display?(m.style.display="block",b()):m.style.display="none")}),chrome.runtime.onMessage.addListener(function(e,t,n){"store_css"===e.message&&console.log("how do we save this... \n ".concat(b()))})}});
//# sourceMappingURL=content.js.map