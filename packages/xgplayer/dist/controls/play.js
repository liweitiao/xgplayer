!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.play=t():(e.xgplayer=e.xgplayer||{},e.xgplayer.PlayerControls=e.xgplayer.PlayerControls||{},e.xgplayer.PlayerControls.play=t())}(window,(function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var a=t[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(r,a,function(t){return e[t]}.bind(null,a));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=i(n(1)),a=i(n(2));function i(e){return e&&e.__esModule?e:{default:e}}t.default={name:"play",method:function(){r.default.method.call(this),a.default.method.call(this)}},e.exports=t.default},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default={name:"play",method:function(){var e=this;function t(){if(e.config.allowPlayAfterEnded||!e.ended)if(e.paused){var t=e.play();void 0!==t&&t&&t.catch((function(e){}))}else e.pause()}e.on("playBtnClick",t),e.once("destroy",(function n(){e.off("playBtnClick",t),e.off("destroy",n)}))}},e.exports=t.default},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(3),a=l(n(5)),i=l(n(6));function l(e){return e&&e.__esModule?e:{default:e}}n(7);t.default={name:"s_play",method:function(){var e=this,t=e.config.playBtn?e.config.playBtn:{},n=void 0;n="img"===t.type?(0,r.createImgBtn)("play",t.url.play,t.width,t.height):(0,r.createDom)("xg-play",'<xg-icon class="xgplayer-icon">\n                                      <div class="xgplayer-icon-play">'+a.default+'</div>\n                                      <div class="xgplayer-icon-pause">'+i.default+"</div>\n                                     </xg-icon>",{},"xgplayer-play");var l={};l.play=e.lang.PLAY_TIPS,l.pause=e.lang.PAUSE_TIPS;var o=(0,r.createDom)("xg-tips",'<span class="xgplayer-tip-play">'+l.play+'</span>\n                                        <span class="xgplayer-tip-pause">'+l.pause+"</span>",{},"xgplayer-tips");n.appendChild(o),e.once("ready",(function(){e.controls&&e.controls.appendChild(n)})),["click","touchend"].forEach((function(t){n.addEventListener(t,(function(t){t.preventDefault(),t.stopPropagation(),e.userGestureTrigEvent("playBtnClick")}))}))}},e.exports=t.default},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.util=void 0,t.createDom=l,t.hasClass=o,t.addClass=p,t.removeClass=s,t.toggleClass=u,t.findDom=c,t.padStart=f,t.format=y,t.event=g,t.typeOf=d,t.deepCopy=x,t.getBgImage=v,t.copyDom=h,t._setInterval=m,t._clearInterval=b,t.createImgBtn=k,t.isWeiXin=w,t.isUc=L,t.computeWatchDur=O,t.offInDestroy=j,t.on=M,t.once=C,t.getBuffered2=_;var r,a=n(4),i=(r=a)&&r.__esModule?r:{default:r};function l(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"div",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",a=document.createElement(e);return a.className=r,a.innerHTML=t,Object.keys(n).forEach((function(t){var r=t,i=n[t];"video"===e||"audio"===e?i&&a.setAttribute(r,i):a.setAttribute(r,i)})),a}function o(e,t){return!!e&&(e.classList?Array.prototype.some.call(e.classList,(function(e){return e===t})):!!e.className&&!!e.className.match(new RegExp("(\\s|^)"+t+"(\\s|$)")))}function p(e,t){e&&(e.classList?t.replace(/(^\s+|\s+$)/g,"").split(/\s+/g).forEach((function(t){t&&e.classList.add(t)})):o(e,t)||(e.className+=" "+t))}function s(e,t){e&&(e.classList?t.split(/\s+/g).forEach((function(t){e.classList.remove(t)})):o(e,t)&&t.split(/\s+/g).forEach((function(t){var n=new RegExp("(\\s|^)"+t+"(\\s|$)");e.className=e.className.replace(n," ")})))}function u(e,t){e&&t.split(/\s+/g).forEach((function(t){o(e,t)?s(e,t):p(e,t)}))}function c(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document,t=arguments[1],n=void 0;try{n=e.querySelector(t)}catch(r){0===t.indexOf("#")&&(n=e.getElementById(t.slice(1)))}return n}function f(e,t,n){for(var r=String(n),a=t>>0,i=Math.ceil(a/r.length),l=[],o=String(e);i--;)l.push(r);return l.join("").substring(0,a-o.length)+o}function y(e){if(window.isNaN(e))return"";var t=f(Math.floor(e/3600),2,0),n=f(Math.floor((e-3600*t)/60),2,0),r=f(Math.floor(e-3600*t-60*n),2,0);return("00"===t?[n,r]:[t,n,r]).join(":")}function g(e){if(e.touches){var t=e.touches[0]||e.changedTouches[0];e.clientX=t.clientX||0,e.clientY=t.clientY||0,e.offsetX=t.pageX-t.target.offsetLeft,e.offsetY=t.pageY-t.target.offsetTop}e._target=e.target||e.srcElement}function d(e){return Object.prototype.toString.call(e).match(/([^\s.*]+)(?=]$)/g)[0]}function x(e,t){if("Object"===d(t)&&"Object"===d(e))return Object.keys(t).forEach((function(n){"Object"!==d(t[n])||t[n]instanceof Node?"Array"===d(t[n])?e[n]="Array"===d(e[n])?e[n].concat(t[n]):t[n]:e[n]=t[n]:e[n]?x(e[n],t[n]):e[n]=t[n]})),e}function v(e){var t=(e.currentStyle||window.getComputedStyle(e,null)).backgroundImage;if(!t||"none"===t)return"";var n=document.createElement("a");return n.href=t.replace(/url\("|"\)/g,""),n.href}function h(e){if(e&&1===e.nodeType){var t=document.createElement(e.tagName);return Array.prototype.forEach.call(e.attributes,(function(e){t.setAttribute(e.name,e.value)})),e.innerHTML&&(t.innerHTML=e.innerHTML),t}return""}function m(e,t,n,r){e._interval[t]||(e._interval[t]=setInterval(n.bind(e),r))}function b(e,t){clearInterval(e._interval[t]),e._interval[t]=null}function k(e,t,n,r){var a=l("xg-"+e,"",{},"xgplayer-"+e+"-img");if(a.style.backgroundImage='url("'+t+'")',n&&r){var i=void 0,o=void 0,p=void 0;["px","rem","em","pt","dp","vw","vh","vm","%"].every((function(e){return!(n.indexOf(e)>-1&&r.indexOf(e)>-1)||(i=Number(n.slice(0,n.indexOf(e)).trim()),o=Number(r.slice(0,r.indexOf(e)).trim()),p=e,!1)})),a.style.width=""+i+p,a.style.height=""+o+p,a.style.backgroundSize=""+i+p+" "+o+p,a.style.margin="start"===e?"-"+o/2+p+" auto auto -"+i/2+p:"auto 5px auto 5px"}return a}function w(){return window.navigator.userAgent.toLowerCase().indexOf("micromessenger")>-1}function L(){return window.navigator.userAgent.toLowerCase().indexOf("ucbrowser")>-1}function O(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=[],n=0;n<e.length;n++)if(!(!e[n].end||e[n].begin<0||e[n].end<0||e[n].end<e[n].begin))if(t.length<1)t.push({begin:e[n].begin,end:e[n].end});else for(var r=0;r<t.length;r++){var a=e[n].begin,i=e[n].end;if(i<t[r].begin){t.splice(r,0,{begin:a,end:i});break}if(!(a>t[r].end)){var l=t[r].begin,o=t[r].end;t[r].begin=Math.min(a,l),t[r].end=Math.max(i,o);break}if(r>t.length-2){t.push({begin:a,end:i});break}}for(var p=0,s=0;s<t.length;s++)p+=t[s].end-t[s].begin;return p}function j(e,t,n,r){e.once(r,(function a(){e.off(t,n),e.off(r,a)}))}function M(e,t,n,r){if(r)e.on(t,n),j(e,t,n,r);else{e.on(t,(function r(a){n(a),e.off(t,r)}))}}function C(e,t,n,r){if(r)e.once(t,n),j(e,t,n,r);else{e.once(t,(function r(a){n(a),e.off(t,r)}))}}function _(e){for(var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:.5,n=[],r=0;r<e.length;r++)n.push({start:e.start(r)<.5?0:e.start(r),end:e.end(r)});n.sort((function(e,t){var n=e.start-t.start;return n||t.end-e.end}));var a=[];if(t)for(var l=0;l<n.length;l++){var o=a.length;if(o){var p=a[o-1].end;n[l].start-p<t?n[l].end>p&&(a[o-1].end=n[l].end):a.push(n[l])}else a.push(n[l])}else a=n;return new i.default(a)}t.util={createDom:l,hasClass:o,addClass:p,removeClass:s,toggleClass:u,findDom:c,padStart:f,format:y,event:g,typeOf:d,deepCopy:x,getBgImage:v,copyDom:h,setInterval:m,clearInterval:b,createImgBtn:k,isWeiXin:w,isUc:L,computeWatchDur:O,offInDestroy:j,on:M,once:C,getBuffered2:_}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();var a=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.bufferedList=t}return r(e,[{key:"start",value:function(e){return this.bufferedList[e].start}},{key:"end",value:function(e){return this.bufferedList[e].end}},{key:"length",get:function(){return this.bufferedList.length}}]),e}();t.default=a,e.exports=t.default},function(e,t,n){"use strict";n.r(t),t.default='<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40">\n  <path transform="translate(2,2) scale(0.0320625 0.0320625)" d="M576,363L810,512L576,661zM342,214L576,363L576,661L342,810z"></path>\n</svg>\n'},function(e,t,n){"use strict";n.r(t),t.default='<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40">\n  <path transform="translate(2,2) scale(0.0320625 0.0320625)" d="M598,214h170v596h-170v-596zM256 810v-596h170v596h-170z"></path>\n</svg>\n'},function(e,t,n){var r=n(8);"string"==typeof r&&(r=[[e.i,r,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};n(10)(r,a);r.locals&&(e.exports=r.locals)},function(e,t,n){(e.exports=n(9)(!1)).push([e.i,".xgplayer-skin-default .xgplayer-play,.xgplayer-skin-default .xgplayer-play-img{width:40px;position:relative;-webkit-order:0;-moz-box-ordinal-group:1;order:0;display:block;cursor:pointer;margin-left:3px}.xgplayer-skin-default .xgplayer-play-img .xgplayer-icon,.xgplayer-skin-default .xgplayer-play .xgplayer-icon{margin-top:3px;width:32px}.xgplayer-skin-default .xgplayer-play-img .xgplayer-icon div,.xgplayer-skin-default .xgplayer-play .xgplayer-icon div{position:absolute}.xgplayer-skin-default .xgplayer-play-img .xgplayer-icon .xgplayer-icon-play,.xgplayer-skin-default .xgplayer-play .xgplayer-icon .xgplayer-icon-play{display:block}.xgplayer-skin-default .xgplayer-play-img .xgplayer-icon .xgplayer-icon-pause,.xgplayer-skin-default .xgplayer-play .xgplayer-icon .xgplayer-icon-pause{display:none}.xgplayer-skin-default .xgplayer-play-img .xgplayer-tips .xgplayer-tip-play,.xgplayer-skin-default .xgplayer-play .xgplayer-tips .xgplayer-tip-play{display:block}.xgplayer-skin-default .xgplayer-play-img .xgplayer-tips .xgplayer-tip-pause,.xgplayer-skin-default .xgplayer-play .xgplayer-tips .xgplayer-tip-pause{display:none}.xgplayer-skin-default .xgplayer-play-img:hover,.xgplayer-skin-default .xgplayer-play:hover{opacity:.85}.xgplayer-skin-default .xgplayer-play-img:hover .xgplayer-tips,.xgplayer-skin-default .xgplayer-play:hover .xgplayer-tips{display:block}.xgplayer-skin-default.xgplayer-playing .xgplayer-play-img .xgplayer-icon .xgplayer-icon-play,.xgplayer-skin-default.xgplayer-playing .xgplayer-play .xgplayer-icon .xgplayer-icon-play{display:none}.xgplayer-skin-default.xgplayer-playing .xgplayer-play-img .xgplayer-icon .xgplayer-icon-pause,.xgplayer-skin-default.xgplayer-playing .xgplayer-play .xgplayer-icon .xgplayer-icon-pause{display:block}.xgplayer-skin-default.xgplayer-playing .xgplayer-play-img .xgplayer-tips .xgplayer-tip-play,.xgplayer-skin-default.xgplayer-playing .xgplayer-play .xgplayer-tips .xgplayer-tip-play{display:none}.xgplayer-skin-default.xgplayer-pause .xgplayer-play-img .xgplayer-icon .xgplayer-icon-play,.xgplayer-skin-default.xgplayer-pause .xgplayer-play .xgplayer-icon .xgplayer-icon-play,.xgplayer-skin-default.xgplayer-playing .xgplayer-play-img .xgplayer-tips .xgplayer-tip-pause,.xgplayer-skin-default.xgplayer-playing .xgplayer-play .xgplayer-tips .xgplayer-tip-pause{display:block}.xgplayer-skin-default.xgplayer-pause .xgplayer-play-img .xgplayer-icon .xgplayer-icon-pause,.xgplayer-skin-default.xgplayer-pause .xgplayer-play .xgplayer-icon .xgplayer-icon-pause{display:none}.xgplayer-skin-default.xgplayer-pause .xgplayer-play-img .xgplayer-tips .xgplayer-tip-play,.xgplayer-skin-default.xgplayer-pause .xgplayer-play .xgplayer-tips .xgplayer-tip-play{display:block}.xgplayer-skin-default.xgplayer-pause .xgplayer-play-img .xgplayer-tips .xgplayer-tip-pause,.xgplayer-skin-default.xgplayer-pause .xgplayer-play .xgplayer-tips .xgplayer-tip-pause{display:none}",""])},function(e,t){e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var a=(l=r,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(l))))+" */"),i=r.sources.map((function(e){return"/*# sourceURL="+r.sourceRoot+e+" */"}));return[n].concat(i).concat([a]).join("\n")}var l;return[n].join("\n")}(t,e);return t[2]?"@media "+t[2]+"{"+n+"}":n})).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},a=0;a<this.length;a++){var i=this[a][0];"number"==typeof i&&(r[i]=!0)}for(a=0;a<e.length;a++){var l=e[a];"number"==typeof l[0]&&r[l[0]]||(n&&!l[2]?l[2]=n:n&&(l[2]="("+l[2]+") and ("+n+")"),t.push(l))}},t}},function(e,t,n){var r,a,i={},l=(r=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===a&&(a=r.apply(this,arguments)),a}),o=function(e){return document.querySelector(e)},p=function(e){var t={};return function(e){if("function"==typeof e)return e();if(void 0===t[e]){var n=o.call(this,e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}}(),s=null,u=0,c=[],f=n(11);function y(e,t){for(var n=0;n<e.length;n++){var r=e[n],a=i[r.id];if(a){a.refs++;for(var l=0;l<a.parts.length;l++)a.parts[l](r.parts[l]);for(;l<r.parts.length;l++)a.parts.push(m(r.parts[l],t))}else{var o=[];for(l=0;l<r.parts.length;l++)o.push(m(r.parts[l],t));i[r.id]={id:r.id,refs:1,parts:o}}}}function g(e,t){for(var n=[],r={},a=0;a<e.length;a++){var i=e[a],l=t.base?i[0]+t.base:i[0],o={css:i[1],media:i[2],sourceMap:i[3]};r[l]?r[l].parts.push(o):n.push(r[l]={id:l,parts:[o]})}return n}function d(e,t){var n=p(e.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=c[c.length-1];if("top"===e.insertAt)r?r.nextSibling?n.insertBefore(t,r.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),c.push(t);else if("bottom"===e.insertAt)n.appendChild(t);else{if("object"!=typeof e.insertAt||!e.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var a=p(e.insertInto+" "+e.insertAt.before);n.insertBefore(t,a)}}function x(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var t=c.indexOf(e);t>=0&&c.splice(t,1)}function v(e){var t=document.createElement("style");return e.attrs.type="text/css",h(t,e.attrs),d(e,t),t}function h(e,t){Object.keys(t).forEach((function(n){e.setAttribute(n,t[n])}))}function m(e,t){var n,r,a,i;if(t.transform&&e.css){if(!(i=t.transform(e.css)))return function(){};e.css=i}if(t.singleton){var l=u++;n=s||(s=v(t)),r=w.bind(null,n,l,!1),a=w.bind(null,n,l,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=function(e){var t=document.createElement("link");return e.attrs.type="text/css",e.attrs.rel="stylesheet",h(t,e.attrs),d(e,t),t}(t),r=O.bind(null,n,t),a=function(){x(n),n.href&&URL.revokeObjectURL(n.href)}):(n=v(t),r=L.bind(null,n),a=function(){x(n)});return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else a()}}e.exports=function(e,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(t=t||{}).attrs="object"==typeof t.attrs?t.attrs:{},t.singleton||"boolean"==typeof t.singleton||(t.singleton=l()),t.insertInto||(t.insertInto="head"),t.insertAt||(t.insertAt="bottom");var n=g(e,t);return y(n,t),function(e){for(var r=[],a=0;a<n.length;a++){var l=n[a];(o=i[l.id]).refs--,r.push(o)}e&&y(g(e,t),t);for(a=0;a<r.length;a++){var o;if(0===(o=r[a]).refs){for(var p=0;p<o.parts.length;p++)o.parts[p]();delete i[o.id]}}}};var b,k=(b=[],function(e,t){return b[e]=t,b.filter(Boolean).join("\n")});function w(e,t,n,r){var a=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=k(t,a);else{var i=document.createTextNode(a),l=e.childNodes;l[t]&&e.removeChild(l[t]),l.length?e.insertBefore(i,l[t]):e.appendChild(i)}}function L(e,t){var n=t.css,r=t.media;if(r&&e.setAttribute("media",r),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}function O(e,t,n){var r=n.css,a=n.sourceMap,i=void 0===t.convertToAbsoluteUrls&&a;(t.convertToAbsoluteUrls||i)&&(r=f(r)),a&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */");var l=new Blob([r],{type:"text/css"}),o=e.href;e.href=URL.createObjectURL(l),o&&URL.revokeObjectURL(o)}},function(e,t){e.exports=function(e){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var n=t.protocol+"//"+t.host,r=n+t.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,(function(e,t){var a,i=t.trim().replace(/^"(.*)"$/,(function(e,t){return t})).replace(/^'(.*)'$/,(function(e,t){return t}));return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i)?e:(a=0===i.indexOf("//")?i:0===i.indexOf("/")?n+i:r+i.replace(/^\.\//,""),"url("+JSON.stringify(a)+")")}))}}])}));