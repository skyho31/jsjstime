!function(e){var n={};function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)t.d(r,o,function(n){return e[n]}.bind(null,o));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=0)}([function(e,n,t){"use strict";!function(e){var n=function(){var e=document.createElement("template");return e.innerHTML='\n      <div class="row"></div>\n    ',e};e.createMap=function(e,t,r){r.innerHTML="";for(var o=document.createDocumentFragment(),i=n(),u=0,a=0;a<t;a++){for(var c=document.importNode(i.content,!0),d=$(".row",c),l=[],f=0;f<e;f++)l.push('\n          <div \n            class="box '+(getRandomBoolean()?"disabled":"")+'"\n            data-idx="'+u+'"\n          ></div>\n        '),u+=1;d.innerHTML=l.join("").trim(),o.appendChild(c)}r.appendChild(o)}}(window)}]);