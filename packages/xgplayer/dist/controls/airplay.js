!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.airplay=t():(e.xgplayer=e.xgplayer||{},e.xgplayer.PlayerControls=e.xgplayer.PlayerControls||{},e.xgplayer.PlayerControls.airplay=t())}(window,(function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=i(n(1)),o=i(n(2));function i(e){return e&&e.__esModule?e:{default:e}}t.default={name:"airplay",method:function(){r.default.method.call(this),o.default.method.call(this)}},e.exports=t.default},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default={name:"airplay",method:function(){var e=this;function t(){e.video.webkitShowPlaybackTargetPicker()}e.config.airplay&&window.WebKitPlaybackTargetAvailabilityEvent&&(e.on("airplayBtnClick",t),e.once("destroy",(function n(){e.off("airplayBtnClick",t),e.off("destroy",n)})))}},e.exports=t.default},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o=n(3),i=n(5),a=(r=i)&&r.__esModule?r:{default:r};n(6);t.default={name:"s_airplay",method:function(){var e=this;if(e.config.airplay&&window.WebKitPlaybackTargetAvailabilityEvent){var t=(0,o.createDom)("xg-airplay",'<xg-icon class="xgplayer-icon">\n    <div class="xgplayer-icon-airplay">'+a.default+"</div>\n  </xg-icon>",{},"xgplayer-airplay"),n=(0,o.createDom)("xg-tips",'<span class="xgplayer-tip-airplay">'+e.lang.AIRPLAY_TIPS+"</span>",{},"xgplayer-tips");t.appendChild(n),e.once("ready",(function(){e.controls.appendChild(t),e.video.addEventListener("webkitplaybacktargetavailabilitychanged",(function(e){switch(e.availability){case"available":t.hidden=!1,t.disabled=!1;break;case"not-available":t.hidden=!0,t.disabled=!0}}))})),["click","touchend"].forEach((function(n){t.addEventListener(n,(function(t){t.preventDefault(),t.stopPropagation(),e.userGestureTrigEvent("airplayBtnClick")}))}))}}},e.exports=t.default},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.util=void 0,t.createDom=a,t.hasClass=l,t.addClass=s,t.removeClass=c,t.toggleClass=u,t.findDom=f,t.padStart=p,t.format=d,t.event=g,t.typeOf=y,t.deepCopy=v,t.getBgImage=h,t.copyDom=b,t._setInterval=m,t._clearInterval=x,t.createImgBtn=w,t.isWeiXin=k,t.isUc=O,t.computeWatchDur=j,t.offInDestroy=L,t.on=C,t.once=M,t.getBuffered2=E;var r,o=n(4),i=(r=o)&&r.__esModule?r:{default:r};function a(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"div",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",o=document.createElement(e);return o.className=r,o.innerHTML=t,Object.keys(n).forEach((function(t){var r=t,i=n[t];"video"===e||"audio"===e?i&&o.setAttribute(r,i):o.setAttribute(r,i)})),o}function l(e,t){return!!e&&(e.classList?Array.prototype.some.call(e.classList,(function(e){return e===t})):!!e.className&&!!e.className.match(new RegExp("(\\s|^)"+t+"(\\s|$)")))}function s(e,t){e&&(e.classList?t.replace(/(^\s+|\s+$)/g,"").split(/\s+/g).forEach((function(t){t&&e.classList.add(t)})):l(e,t)||(e.className+=" "+t))}function c(e,t){e&&(e.classList?t.split(/\s+/g).forEach((function(t){e.classList.remove(t)})):l(e,t)&&t.split(/\s+/g).forEach((function(t){var n=new RegExp("(\\s|^)"+t+"(\\s|$)");e.className=e.className.replace(n," ")})))}function u(e,t){e&&t.split(/\s+/g).forEach((function(t){l(e,t)?c(e,t):s(e,t)}))}function f(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document,t=arguments[1],n=void 0;try{n=e.querySelector(t)}catch(r){0===t.indexOf("#")&&(n=e.getElementById(t.slice(1)))}return n}function p(e,t,n){for(var r=String(n),o=t>>0,i=Math.ceil(o/r.length),a=[],l=String(e);i--;)a.push(r);return a.join("").substring(0,o-l.length)+l}function d(e){if(window.isNaN(e))return"";var t=p(Math.floor(e/3600),2,0),n=p(Math.floor((e-3600*t)/60),2,0),r=p(Math.floor(e-3600*t-60*n),2,0);return("00"===t?[n,r]:[t,n,r]).join(":")}function g(e){if(e.touches){var t=e.touches[0]||e.changedTouches[0];e.clientX=t.clientX||0,e.clientY=t.clientY||0,e.offsetX=t.pageX-t.target.offsetLeft,e.offsetY=t.pageY-t.target.offsetTop}e._target=e.target||e.srcElement}function y(e){return Object.prototype.toString.call(e).match(/([^\s.*]+)(?=]$)/g)[0]}function v(e,t){if("Object"===y(t)&&"Object"===y(e))return Object.keys(t).forEach((function(n){"Object"!==y(t[n])||t[n]instanceof Node?"Array"===y(t[n])?e[n]="Array"===y(e[n])?e[n].concat(t[n]):t[n]:e[n]=t[n]:e[n]?v(e[n],t[n]):e[n]=t[n]})),e}function h(e){var t=(e.currentStyle||window.getComputedStyle(e,null)).backgroundImage;if(!t||"none"===t)return"";var n=document.createElement("a");return n.href=t.replace(/url\("|"\)/g,""),n.href}function b(e){if(e&&1===e.nodeType){var t=document.createElement(e.tagName);return Array.prototype.forEach.call(e.attributes,(function(e){t.setAttribute(e.name,e.value)})),e.innerHTML&&(t.innerHTML=e.innerHTML),t}return""}function m(e,t,n,r){e._interval[t]||(e._interval[t]=setInterval(n.bind(e),r))}function x(e,t){clearInterval(e._interval[t]),e._interval[t]=null}function w(e,t,n,r){var o=a("xg-"+e,"",{},"xgplayer-"+e+"-img");if(o.style.backgroundImage='url("'+t+'")',n&&r){var i=void 0,l=void 0,s=void 0;["px","rem","em","pt","dp","vw","vh","vm","%"].every((function(e){return!(n.indexOf(e)>-1&&r.indexOf(e)>-1)||(i=Number(n.slice(0,n.indexOf(e)).trim()),l=Number(r.slice(0,r.indexOf(e)).trim()),s=e,!1)})),o.style.width=""+i+s,o.style.height=""+l+s,o.style.backgroundSize=""+i+s+" "+l+s,o.style.margin="start"===e?"-"+l/2+s+" auto auto -"+i/2+s:"auto 5px auto 5px"}return o}function k(){return window.navigator.userAgent.toLowerCase().indexOf("micromessenger")>-1}function O(){return window.navigator.userAgent.toLowerCase().indexOf("ucbrowser")>-1}function j(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=[],n=0;n<e.length;n++)if(!(!e[n].end||e[n].begin<0||e[n].end<0||e[n].end<e[n].begin))if(t.length<1)t.push({begin:e[n].begin,end:e[n].end});else for(var r=0;r<t.length;r++){var o=e[n].begin,i=e[n].end;if(i<t[r].begin){t.splice(r,0,{begin:o,end:i});break}if(!(o>t[r].end)){var a=t[r].begin,l=t[r].end;t[r].begin=Math.min(o,a),t[r].end=Math.max(i,l);break}if(r>t.length-2){t.push({begin:o,end:i});break}}for(var s=0,c=0;c<t.length;c++)s+=t[c].end-t[c].begin;return s}function L(e,t,n,r){e.once(r,(function o(){e.off(t,n),e.off(r,o)}))}function C(e,t,n,r){if(r)e.on(t,n),L(e,t,n,r);else{e.on(t,(function r(o){n(o),e.off(t,r)}))}}function M(e,t,n,r){if(r)e.once(t,n),L(e,t,n,r);else{e.once(t,(function r(o){n(o),e.off(t,r)}))}}function E(e){for(var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:.5,n=[],r=0;r<e.length;r++)n.push({start:e.start(r)<.5?0:e.start(r),end:e.end(r)});n.sort((function(e,t){var n=e.start-t.start;return n||t.end-e.end}));var o=[];if(t)for(var a=0;a<n.length;a++){var l=o.length;if(l){var s=o[l-1].end;n[a].start-s<t?n[a].end>s&&(o[l-1].end=n[a].end):o.push(n[a])}else o.push(n[a])}else o=n;return new i.default(o)}t.util={createDom:a,hasClass:l,addClass:s,removeClass:c,toggleClass:u,findDom:f,padStart:p,format:d,event:g,typeOf:y,deepCopy:v,getBgImage:h,copyDom:b,setInterval:m,clearInterval:x,createImgBtn:w,isWeiXin:k,isUc:O,computeWatchDur:j,offInDestroy:L,on:C,once:M,getBuffered2:E}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();var o=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.bufferedList=t}return r(e,[{key:"start",value:function(e){return this.bufferedList[e].start}},{key:"end",value:function(e){return this.bufferedList[e].end}},{key:"length",get:function(){return this.bufferedList.length}}]),e}();t.default=o,e.exports=t.default},function(e,t,n){"use strict";n.r(t),t.default='<svg t="1600422191774" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3100" width="28" height="28"><path d="M256 938.666667h512L512 597.333333 256 938.666667z m170.666667-85.333334l85.333333-113.781333L597.333333 853.333333H426.666667zM853.333333 85.333333H170.666667C99.946667 85.333333 42.666667 142.613333 42.666667 213.333333v426.666667c0 70.72 57.28 128 128 128h106.666666l64-85.333333H170.666667c-23.573333 0-42.666667-19.093333-42.666667-42.666667V213.333333c0-23.573333 19.093333-42.666667 42.666667-42.666666h682.666666c23.573333 0 42.666667 19.093333 42.666667 42.666666v426.666667c0 23.573333-19.093333 42.666667-42.666667 42.666667H682.666667l64 85.333333h106.666666c70.72 0 128-57.28 128-128V213.333333c0-70.72-57.28-128-128-128z" p-id="3101" fill="#ffffff"></path></svg>'},function(e,t,n){var r=n(7);"string"==typeof r&&(r=[[e.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(9)(r,o);r.locals&&(e.exports=r.locals)},function(e,t,n){(e.exports=n(8)(!1)).push([e.i,".xgplayer-skin-default .xgplayer-airplay{position:relative;-webkit-order:11;-moz-box-ordinal-group:12;order:11;display:block;cursor:pointer;margin-left:5px;margin-right:3px}.xgplayer-skin-default .xgplayer-airplay .xgplayer-icon{margin-top:6px;margin-left:6px}.xgplayer-skin-default .xgplayer-airplay .xgplayer-icon div{position:absolute}.xgplayer-skin-default .xgplayer-airplay .xgplayer-icon .xgplayer-icon-airplay{display:block}.xgplayer-skin-default .xgplayer-airplay .xgplayer-tips{position:absolute;right:0;left:auto}.xgplayer-skin-default .xgplayer-airplay .xgplayer-tips .xgplayer-tip-airplay{display:block}.xgplayer-skin-default .xgplayer-airplay:hover{opacity:.85}.xgplayer-skin-default .xgplayer-airplay:hover .xgplayer-tips{display:block}",""])},function(e,t){e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var o=(a=r,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"),i=r.sources.map((function(e){return"/*# sourceURL="+r.sourceRoot+e+" */"}));return[n].concat(i).concat([o]).join("\n")}var a;return[n].join("\n")}(t,e);return t[2]?"@media "+t[2]+"{"+n+"}":n})).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(r[i]=!0)}for(o=0;o<e.length;o++){var a=e[o];"number"==typeof a[0]&&r[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),t.push(a))}},t}},function(e,t,n){var r,o,i={},a=(r=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===o&&(o=r.apply(this,arguments)),o}),l=function(e){return document.querySelector(e)},s=function(e){var t={};return function(e){if("function"==typeof e)return e();if(void 0===t[e]){var n=l.call(this,e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}}(),c=null,u=0,f=[],p=n(10);function d(e,t){for(var n=0;n<e.length;n++){var r=e[n],o=i[r.id];if(o){o.refs++;for(var a=0;a<o.parts.length;a++)o.parts[a](r.parts[a]);for(;a<r.parts.length;a++)o.parts.push(m(r.parts[a],t))}else{var l=[];for(a=0;a<r.parts.length;a++)l.push(m(r.parts[a],t));i[r.id]={id:r.id,refs:1,parts:l}}}}function g(e,t){for(var n=[],r={},o=0;o<e.length;o++){var i=e[o],a=t.base?i[0]+t.base:i[0],l={css:i[1],media:i[2],sourceMap:i[3]};r[a]?r[a].parts.push(l):n.push(r[a]={id:a,parts:[l]})}return n}function y(e,t){var n=s(e.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=f[f.length-1];if("top"===e.insertAt)r?r.nextSibling?n.insertBefore(t,r.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),f.push(t);else if("bottom"===e.insertAt)n.appendChild(t);else{if("object"!=typeof e.insertAt||!e.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var o=s(e.insertInto+" "+e.insertAt.before);n.insertBefore(t,o)}}function v(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var t=f.indexOf(e);t>=0&&f.splice(t,1)}function h(e){var t=document.createElement("style");return e.attrs.type="text/css",b(t,e.attrs),y(e,t),t}function b(e,t){Object.keys(t).forEach((function(n){e.setAttribute(n,t[n])}))}function m(e,t){var n,r,o,i;if(t.transform&&e.css){if(!(i=t.transform(e.css)))return function(){};e.css=i}if(t.singleton){var a=u++;n=c||(c=h(t)),r=k.bind(null,n,a,!1),o=k.bind(null,n,a,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=function(e){var t=document.createElement("link");return e.attrs.type="text/css",e.attrs.rel="stylesheet",b(t,e.attrs),y(e,t),t}(t),r=j.bind(null,n,t),o=function(){v(n),n.href&&URL.revokeObjectURL(n.href)}):(n=h(t),r=O.bind(null,n),o=function(){v(n)});return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}e.exports=function(e,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(t=t||{}).attrs="object"==typeof t.attrs?t.attrs:{},t.singleton||"boolean"==typeof t.singleton||(t.singleton=a()),t.insertInto||(t.insertInto="head"),t.insertAt||(t.insertAt="bottom");var n=g(e,t);return d(n,t),function(e){for(var r=[],o=0;o<n.length;o++){var a=n[o];(l=i[a.id]).refs--,r.push(l)}e&&d(g(e,t),t);for(o=0;o<r.length;o++){var l;if(0===(l=r[o]).refs){for(var s=0;s<l.parts.length;s++)l.parts[s]();delete i[l.id]}}}};var x,w=(x=[],function(e,t){return x[e]=t,x.filter(Boolean).join("\n")});function k(e,t,n,r){var o=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=w(t,o);else{var i=document.createTextNode(o),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}function O(e,t){var n=t.css,r=t.media;if(r&&e.setAttribute("media",r),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}function j(e,t,n){var r=n.css,o=n.sourceMap,i=void 0===t.convertToAbsoluteUrls&&o;(t.convertToAbsoluteUrls||i)&&(r=p(r)),o&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var a=new Blob([r],{type:"text/css"}),l=e.href;e.href=URL.createObjectURL(a),l&&URL.revokeObjectURL(l)}},function(e,t){e.exports=function(e){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var n=t.protocol+"//"+t.host,r=n+t.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,(function(e,t){var o,i=t.trim().replace(/^"(.*)"$/,(function(e,t){return t})).replace(/^'(.*)'$/,(function(e,t){return t}));return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i)?e:(o=0===i.indexOf("//")?i:0===i.indexOf("/")?n+i:r+i.replace(/^\.\//,""),"url("+JSON.stringify(o)+")")}))}}])}));