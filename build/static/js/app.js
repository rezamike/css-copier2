!function(e){function t(t){for(var r,l,i=t[0],c=t[1],u=t[2],f=0,p=[];f<i.length;f++)l=i[f],o[l]&&p.push(o[l][0]),o[l]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);for(s&&s(t);p.length;)p.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,i=1;i<n.length;i++){var c=n[i];0!==o[c]&&(r=!1)}r&&(a.splice(t--,1),e=l(l.s=n[0]))}return e}var r={},o={1:0},a=[];function l(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.m=e,l.c=r,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)l.d(n,r,function(t){return e[t]}.bind(null,r));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/";var i=window.webpackJsonp=window.webpackJsonp||[],c=i.push.bind(i);i.push=t,i=i.slice();for(var u=0;u<i.length;u++)t(i[u]);var s=c;a.push([41,0]),n()}({13:function(e,t,n){"use strict";var r=n(0),o=n.n(r),a=(n(19),n(26)),l=n(27),i=n(29),c=n(18),u=n(30),s=n(31),f=Object(a.a)({root:{flexGrow:1},card:{minWidth:275,justifyContent:"center",alignSelf:"center"},bullet:{display:"inline-block",margin:"0 2px",transform:"scale(0.8)"},title:{fontSize:14},pos:{marginBottom:12}});t.a=function(){var e=f();return o.a.createElement("span",{className:e.bullet},"\u2022"),o.a.createElement("div",{className:"App"},o.a.createElement("div",{className:e.root},o.a.createElement(l.a,{position:"static",color:"primary"},o.a.createElement(i.a,null,o.a.createElement(c.a,{variant:"h4",color:"default"},"CSS Copier")))),o.a.createElement("div",{style:{display:"flex"}},o.a.createElement(u.a,{className:e.card},o.a.createElement(s.a,null,o.a.createElement(c.a,{className:e.title,color:"textSecondary",gutterBottom:!0},"Not Done Yet.... BUT SOON, MY DUDE!")))))}},19:function(e,t,n){},41:function(e,t,n){e.exports=n(56)},46:function(e,t,n){},56:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),a=n(14),l=n.n(a),i=(n(46),n(13));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(o.a.createElement(i.a,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}});
//# sourceMappingURL=app.js.map