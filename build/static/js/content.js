!function(e){function t(t){for(var r,c,i=t[0],s=t[1],l=t[2],f=0,p=[];f<i.length;f++)c=i[f],o[c]&&p.push(o[c][0]),o[c]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);for(u&&u(t);p.length;)p.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,i=1;i<n.length;i++){var s=n[i];0!==o[s]&&(r=!1)}r&&(a.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},o={2:0},a=[];function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/";var i=window.webpackJsonp=window.webpackJsonp||[],s=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var u=s;a.push([59,0]),n()}({19:function(e,t,n){"use strict";var r=n(0),o=n.n(r),a=(n(25),n(31)),c=n(32),i=n(17),s=n(24),l=n(10),u=n(7),f=n(33),p=n(35),m=n(36),d=n(34),y=n(26),g={root:{flexGrow:1},title:{fontSize:14},pos:{marginBottom:12},button:{margin:1,width:"75%",height:"50%"},buttons:{textAlign:"center",height:"28%",paddingTop:"10%"},listSection:{backgroundColor:"white"},ul:{backgroundColor:"inherit",padding:0}};t.a=function(){return o.a.createElement("div",{className:"App"},o.a.createElement("div",{style:g.root},o.a.createElement(a.a,{position:"static",color:"primary"},o.a.createElement(c.a,null,o.a.createElement(i.a,{variant:"h5",color:"default"},"CSS Copier")))),o.a.createElement(l.a,{container:!0,style:{height:"60%",overflow:"hidden",justifyContent:"center"}},o.a.createElement(l.a,{item:!0,xs:10},o.a.createElement(y.a,{style:{margin:"5% 0",width:"100%",height:"25%",overflow:"auto"}},o.a.createElement(f.a,{subheader:o.a.createElement("li",null)},[0,1,2,3,4].map(function(e){return o.a.createElement("li",{key:"section-".concat(e),style:g.listSection},o.a.createElement("ul",{style:g.ul},o.a.createElement(d.a,null,"I'm sticky ".concat(e)),[0,1,2].map(function(t){return o.a.createElement(p.a,{key:"item-".concat(e,"-").concat(t)},o.a.createElement(m.a,{primary:"Item ".concat(t)}))})))}))))),o.a.createElement(l.a,{container:!0,spacing:12,style:g.buttons},o.a.createElement(l.a,{item:!0,xs:6},o.a.createElement(s.a,{variant:"contained",color:"primary",id:"start",style:g.button,onClick:u.a.start_scrape},"Start")),o.a.createElement(l.a,{item:!0,xs:6},o.a.createElement(s.a,{variant:"contained",color:"secondary",id:"end",style:g.button,onClick:u.a.save_diff},"End"))))}},25:function(e,t,n){},59:function(e,t,n){e.exports=n(61)},60:function(e,t,n){},61:function(e,t,n){"use strict";function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function o(e){return(o="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function a(e){return(a="function"===typeof Symbol&&"symbol"===o(Symbol.iterator)?function(e){return o(e)}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":o(e)})(e)}function c(e,t){return!t||"object"!==a(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function i(e){return(i=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function s(e,t){return(s=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}n.r(t);var l=n(0),u=n.n(l),f=n(9),p=n.n(f),m=(n(60),n(19)),d=n(7),y=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),c(this,i(t).apply(this,arguments))}var n,o,a;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&s(e,t)}(t,u.a.Component),n=t,(o=[{key:"render",value:function(){return u.a.createElement("div",{className:"my-extension"},u.a.createElement(m.a,null))}}])&&r(n.prototype,o),a&&r(n,a),t}(),g=document.createElement("div");g.id="my-extension-root",document.body.appendChild(g),p.a.render(u.a.createElement(y,null),g),g.style.display="none",chrome.runtime.onMessage.addListener(function(e,t,n){"trigger_slider"===e.message&&d.a.toggle(g)}),chrome.runtime.onMessage.addListener(function(e,t,n){if("start_scrape"===e.message){var r=d.a.css_scrape();d.a.save_scrape(r)}}),chrome.runtime.onMessage.addListener(function(e,t,n){"save_diff"===e.message&&setTimeout(function(){d.a.from_storage()},1e3)})},7:function(e,t,n){"use strict";var r=n(21),o={results:[],save_scrape:function(e){console.trace("app_core.save_scrape()");var t=e;t?chrome.storage.local.set({key:t},function(){console.log("First scrape settings saved",t)}):console.warn("Error: No value specified")},token_gen:function(){for(var e=["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","!","?"],t="",n=1;n<15;n++){t+=e[Math.ceil(Math.random()*e.length)-1]}return t},final_scrape:function(e){console.trace("app_core.final_scrape()");var t={},n=new Date,a=window.location.host,c=("".concat(n," | ").concat(a),o.token_gen()),i=1,s=JSON.stringify(e);s=(s=(s=(s=(s=s.replace(/"/g,"")).replace("{","")).replace("}","")).replace(":","{ \n")).replace(/$/g," }"),t._changes=s,t._host_site=a,t._date=n.toDateString(),t._change_token=c,t?(chrome.storage.local.remove(["key"]),chrome.storage.local.get(function(e){for(var t=0;t<e.length;t++)e[t]<i&&i++}),chrome.storage.local.set(Object(r.a)({},i,t),function(){console.log("Final comparison saved",t)})):console.warn("Error: No value specified")},from_storage:function(){console.trace("app_core.from_storage()"),chrome.storage.local.get(["key"],function(e){o.compare_data(e.key)})},compare_data:function(e){console.trace("app_core.compare_data()");var t=o.css_scrape(),n={};for(var r in t)e.hasOwnProperty(r)&&t[r]!=e[r]&&(n[r]=t[r]);o.final_scrape(n)},css_scrape:function(){console.trace("app_core.css_scrape()");for(var e,t,n,r=document.styleSheets,o={},a=0;a<r.length;a++)try{e=r[a].rules;for(var c=0;c<e.length;c++)t=e[c].style,n=e[c].selectorText,"undefined"===typeof t||"undefined"===typeof n&&null==n||(o[n]=t.cssText)}catch(i){console.warn("Catch during initial scrape: \n".concat(i))}return console.log(o),o},toggle:function(e){console.trace("app_core.toggle()"),"none"===e.style.display?e.style.display="block":e.style.display="none"},trigger_slider:function(){console.trace("app_core.trigger_slider()"),chrome.tabs.query({active:!0,currentWindow:!0},function(e){var t=e[0];chrome.tabs.sendMessage(t.id,{message:"trigger_slider"})})},start_scrape:function(){console.trace("app_core.start_scrape()"),chrome.tabs.query({active:!0,currentWindow:!0},function(e){var t=e[0];chrome.tabs.sendMessage(t.id,{message:"start_scrape"})})},save_diff:function(){console.trace("app_core.save_diff()"),chrome.tabs.query({active:!0,currentWindow:!0},function(e){var t=e[0];chrome.tabs.sendMessage(t.id,{message:"save_diff"})})}};t.a=o}});
//# sourceMappingURL=content.js.map