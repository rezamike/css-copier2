!function(e){function t(t){for(var r,c,i=t[0],l=t[1],u=t[2],f=0,p=[];f<i.length;f++)c=i[f],o[c]&&p.push(o[c][0]),o[c]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);for(s&&s(t);p.length;)p.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,i=1;i<n.length;i++){var l=n[i];0!==o[l]&&(r=!1)}r&&(a.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},o={2:0},a=[];function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/";var i=window.webpackJsonp=window.webpackJsonp||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var u=0;u<i.length;u++)t(i[u]);var s=l;a.push([64,0]),n()}({17:function(e,t,n){"use strict";var r=n(0),o=n.n(r),a=(n(26),n(31)),c=n(32),i=n(34),l=n(23),u=n(24),s=n(35),f=n(25),p=Object(a.a)({root:{flexGrow:1},card:{width:"75%",height:"25%"},title:{fontSize:14},pos:{marginBottom:12},button:{margin:1}});t.a=function(){var e=p();return o.a.createElement("div",{className:"App"},o.a.createElement("div",{className:e.root},o.a.createElement(c.a,{position:"static",color:"primary"},o.a.createElement(i.a,null,o.a.createElement(l.a,{variant:"h4",color:"default"},"CSS Copier")))),o.a.createElement("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"100%"}},o.a.createElement(u.a,{className:e.card},o.a.createElement(s.a,null,o.a.createElement(l.a,{className:e.title,color:"textSecondary",gutterBottom:!0},"Not Done Yet.... BUT SOON, MY DUDE!"),o.a.createElement(f.a,{variant:"contained",color:"primary",id:"start",className:e.button},"Start"),o.a.createElement(f.a,{variant:"contained",color:"secondary",id:"end",className:e.button},"End"))),o.a.createElement(u.a,{className:e.card},o.a.createElement("div",{id:"theList"}))))}},26:function(e,t,n){},64:function(e,t,n){e.exports=n(66)},65:function(e,t,n){},66:function(e,t,n){"use strict";function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function o(e){return(o="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function a(e){return(a="function"===typeof Symbol&&"symbol"===o(Symbol.iterator)?function(e){return o(e)}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":o(e)})(e)}function c(e,t){return!t||"object"!==a(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function i(e){return(i=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function l(e,t){return(l=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}n.r(t);var u=n(0),s=n.n(u),f=n(11),p=n.n(f),y=(n(65),n(17)),d=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),c(this,i(t).apply(this,arguments))}var n,o,a;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&l(e,t)}(t,s.a.Component),n=t,(o=[{key:"render",value:function(){return s.a.createElement("div",{className:"my-extension"},s.a.createElement(y.a,null))}}])&&r(n.prototype,o),a&&r(n,a),t}(),m=document.createElement("div");m.id="my-extension-root",document.body.appendChild(m),p.a.render(s.a.createElement(d,null),m),m.style.display="none";var b={};m.querySelector("#start").addEventListener("click",function(){var e=b.css_scrape();b.save_scrape(e)}),m.querySelector("#end").addEventListener("click",function(){setTimeout(function(){b.from_storage()},1e3)}),chrome.runtime.onMessage.addListener(function(e,t,n){"clicked_browser_action"===e.message&&b.toggle()}),b.save_scrape=function(e){var t=e;t?chrome.storage.local.set({key:t},function(){console.log("First scrape settings saved",t)}):console.warn("Error: No value specified")},b.final_scrape=function(e){var t,n,r,o=e,a=window.location.host,c="".concat(a," version: ").concat(1);(o.site=a,o.version=1,o)?chrome.storage.local.set((r=o,(n=c)in(t={})?Object.defineProperty(t,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[n]=r,t),function(){console.log("Final comparison saved",o)}):console.warn("Error: No value specified")},b.from_storage=function(){chrome.storage.local.get(["key"],function(e){b.compare_data(e.key)})},b.compare_data=function(e){var t=b.css_scrape(),n={};for(var r in t)e.hasOwnProperty(r)&&t[r]!=e[r]&&(n[r]=t[r]);b.final_scrape(n)},b.css_scrape=function(){for(var e,t,n,r,o=document.styleSheets,a=[],c=[],i={},l=0;l<o.length;l++)try{e=o[l].rules;for(var u=0;u<e.length&&(t=e[u].style,n=e[u].selectorText,"undefined"!==typeof t)&&(c.push(t.cssText),"undefined"!==typeof n&&null!=n);u++)a.push(n),i[a[u]]=c[u];r=i}catch(s){console.warn("Catch during initial scrape: \n".concat(s));continue}return r},b.toggle=function(){"none"===m.style.display?m.style.display="block":m.style.display="none"}}});
//# sourceMappingURL=content.js.map