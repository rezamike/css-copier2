!function(e){function t(t){for(var o,l,c=t[0],i=t[1],u=t[2],s=0,p=[];s<c.length;s++)l=c[s],r[l]&&p.push(r[l][0]),r[l]=0;for(o in i)Object.prototype.hasOwnProperty.call(i,o)&&(e[o]=i[o]);for(f&&f(t);p.length;)p.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],o=!0,c=1;c<n.length;c++){var i=n[c];0!==r[i]&&(o=!1)}o&&(a.splice(t--,1),e=l(l.s=n[0]))}return e}var o={},r={2:0},a=[];function l(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.m=e,l.c=o,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)l.d(n,o,function(t){return e[t]}.bind(null,o));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/";var c=window.webpackJsonp=window.webpackJsonp||[],i=c.push.bind(c);c.push=t,c=c.slice();for(var u=0;u<c.length;u++)t(c[u]);var f=i;a.push([53,0]),n()}({13:function(e,t,n){"use strict";var o=n(0),r=n.n(o),a=(n(19),n(26)),l=n(27),c=n(29),i=n(18),u=n(30),f=n(31),s=Object(a.a)({root:{flexGrow:1},card:{minWidth:275,justifyContent:"center",alignSelf:"center"},bullet:{display:"inline-block",margin:"0 2px",transform:"scale(0.8)"},title:{fontSize:14},pos:{marginBottom:12}});t.a=function(){var e=s();return r.a.createElement("span",{className:e.bullet},"\u2022"),r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:e.root},r.a.createElement(l.a,{position:"static",color:"primary"},r.a.createElement(c.a,null,r.a.createElement(i.a,{variant:"h4",color:"default"},"CSS Copier")))),r.a.createElement("div",{style:{display:"flex"}},r.a.createElement(u.a,{className:e.card},r.a.createElement(f.a,null,r.a.createElement(i.a,{className:e.title,color:"textSecondary",gutterBottom:!0},"Not Done Yet.... BUT SOON, MY DUDE!")))))}},19:function(e,t,n){},53:function(e,t,n){e.exports=n(55)},54:function(e,t,n){},55:function(e,t,n){"use strict";function o(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function r(e){return(r="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function a(e){return(a="function"===typeof Symbol&&"symbol"===r(Symbol.iterator)?function(e){return r(e)}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":r(e)})(e)}function l(e,t){return!t||"object"!==a(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function c(e){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function i(e,t){return(i=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}n.r(t);var u=n(0),f=n.n(u),s=n(14),p=n.n(s),y=(n(54),n(13)),m=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),l(this,c(t).apply(this,arguments))}var n,r,a;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&i(e,t)}(t,f.a.Component),n=t,(r=[{key:"render",value:function(){return f.a.createElement("div",{className:"my-extension"},f.a.createElement(y.a,null))}}])&&o(n.prototype,r),a&&o(n,a),t}(),d=document.createElement("div");d.id="my-extension-root",document.body.appendChild(d),p.a.render(f.a.createElement(m,null),d),d.style.display="none",chrome.runtime.onMessage.addListener(function(e,t,n){"clicked_browser_action"===e.message&&("none"===d.style.display?(d.style.display="block",function(){for(var e,t,n,o=document.styleSheets,r=[],a=[],l={},c=0;c<o.length;c++)try{e=o[c].rules;for(var i=0;i<e.length&&(t=e[i].style,n=e[i].selectorText,"undefined"!==typeof t)&&(a.push(t.cssText),"undefined"!==typeof n&&null!=n);i++)r.push(n),l[r[i]]=a[i];JSON.stringify(l)}catch(u){console.log("You gone and fucked up, cowpoke... Here's the problem with what you did: \n ".concat(u));continue}console.log(l)}()):d.style.display="none")})}});
//# sourceMappingURL=content.js.map