/*! For license information please see main.js.LICENSE.txt */
(()=>{"use strict";var t={d:(e,r)=>{for(var n in r)t.o(r,n)&&!t.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:r[n]})},o:(t,e)=>Object.prototype.hasOwnProperty.call(t,e)};function e(t){t.classList.add("popup_is-opened"),r(t)}function r(t){document.addEventListener("keydown",(function(e){"Escape"===e.key&&n(t)}))}function n(t){t.classList.remove("popup_is-opened"),document.removeEventListener("keydown",r(t))}t.d({},{CL:()=>tt,Gf:()=>Z});var o={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__error_visible"},c=function(t,e){var r=t.querySelector(".".concat(e.id,"-error"));e.classList.remove(o.inputErrorClass),r.classList.remove(o.errorClass),r.textContent=""},a=function(t,e){!function(t){return t.some((function(t){return!t.validity.valid}))}(t)?(e.disabled=!1,e.classList.remove(o.inactiveButtonClass)):(e.disabled=!0,e.classList.add(o.inactiveButtonClass))},i=function(t){var e=Array.from(t.querySelectorAll(o.inputSelector)),r=t.querySelector(o.submitButtonSelector);a(e,r),e.forEach((function(n){n.addEventListener("input",(function(){(function(t,e){e.validity.patternMismatch?e.setCustomValidity(e.dataset.errorMessage):e.setCustomValidity(""),e.validity.valid?c(t,e):function(t,e,r){var n=t.querySelector(".".concat(e.id,"-error"));e.classList.add(o.inputErrorClass),n.textContent=r,n.classList.add(o.errorClass)}(t,e,e.validationMessage)})(t,n),a(e,r)}))}))},u=function(t,e){var r=Array.from(t.querySelectorAll(e.inputSelector)),n=t.querySelector(e.submitButtonSelector);a(r,n),r.forEach((function(e){c(t,e)})),L(t)},s=document.querySelector(".popup_type_edit"),l=document.querySelector(".popup_type_new-card"),f=document.querySelector(".popup_type_image"),p=document.forms.editProfile,h=document.forms.newPlace,d=document.querySelector(".profile__title"),y=document.querySelector(".profile__description"),v=(document.querySelector(".profile__image"),p.elements.name),m=p.elements.description,_=document.querySelector(".popup_type_change-avatar"),b=document.forms.newAvatar,g=b.elements.avatar,w=document.querySelector(".popup_type_delete-card"),S=w.querySelector(".popup__button");function k(t){t.addEventListener("click",(function(e){(e.target.classList.contains("popup__close")||e.target===t)&&n(t)}))}function L(t){t.reset()}function E(t,e){e.textContent=t?"Сохранение...":"Сохранить"}function x(t){return x="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},x(t)}function q(){q=function(){return e};var t,e={},r=Object.prototype,n=r.hasOwnProperty,o=Object.defineProperty||function(t,e,r){t[e]=r.value},c="function"==typeof Symbol?Symbol:{},a=c.iterator||"@@iterator",i=c.asyncIterator||"@@asyncIterator",u=c.toStringTag||"@@toStringTag";function s(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(t){s=function(t,e,r){return t[e]=r}}function l(t,e,r,n){var c=e&&e.prototype instanceof m?e:m,a=Object.create(c.prototype),i=new A(n||[]);return o(a,"_invoke",{value:j(t,r,i)}),a}function f(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}e.wrap=l;var p="suspendedStart",h="suspendedYield",d="executing",y="completed",v={};function m(){}function _(){}function b(){}var g={};s(g,a,(function(){return this}));var w=Object.getPrototypeOf,S=w&&w(w(T([])));S&&S!==r&&n.call(S,a)&&(g=S);var k=b.prototype=m.prototype=Object.create(g);function L(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function E(t,e){function r(o,c,a,i){var u=f(t[o],t,c);if("throw"!==u.type){var s=u.arg,l=s.value;return l&&"object"==x(l)&&n.call(l,"__await")?e.resolve(l.__await).then((function(t){r("next",t,a,i)}),(function(t){r("throw",t,a,i)})):e.resolve(l).then((function(t){s.value=t,a(s)}),(function(t){return r("throw",t,a,i)}))}i(u.arg)}var c;o(this,"_invoke",{value:function(t,n){function o(){return new e((function(e,o){r(t,n,e,o)}))}return c=c?c.then(o,o):o()}})}function j(e,r,n){var o=p;return function(c,a){if(o===d)throw Error("Generator is already running");if(o===y){if("throw"===c)throw a;return{value:t,done:!0}}for(n.method=c,n.arg=a;;){var i=n.delegate;if(i){var u=C(i,n);if(u){if(u===v)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===p)throw o=y,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=d;var s=f(e,r,n);if("normal"===s.type){if(o=n.done?y:h,s.arg===v)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(o=y,n.method="throw",n.arg=s.arg)}}}function C(e,r){var n=r.method,o=e.iterator[n];if(o===t)return r.delegate=null,"throw"===n&&e.iterator.return&&(r.method="return",r.arg=t,C(e,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),v;var c=f(o,e.iterator,r.arg);if("throw"===c.type)return r.method="throw",r.arg=c.arg,r.delegate=null,v;var a=c.arg;return a?a.done?(r[e.resultName]=a.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,v):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,v)}function P(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function O(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function A(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(P,this),this.reset(!0)}function T(e){if(e||""===e){var r=e[a];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,c=function r(){for(;++o<e.length;)if(n.call(e,o))return r.value=e[o],r.done=!1,r;return r.value=t,r.done=!0,r};return c.next=c}}throw new TypeError(x(e)+" is not iterable")}return _.prototype=b,o(k,"constructor",{value:b,configurable:!0}),o(b,"constructor",{value:_,configurable:!0}),_.displayName=s(b,u,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===_||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,b):(t.__proto__=b,s(t,u,"GeneratorFunction")),t.prototype=Object.create(k),t},e.awrap=function(t){return{__await:t}},L(E.prototype),s(E.prototype,i,(function(){return this})),e.AsyncIterator=E,e.async=function(t,r,n,o,c){void 0===c&&(c=Promise);var a=new E(l(t,r,n,o),c);return e.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},L(k),s(k,u,"Generator"),s(k,a,(function(){return this})),s(k,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},e.values=T,A.prototype={constructor:A,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(O),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function o(n,o){return i.type="throw",i.arg=e,r.next=n,o&&(r.method="next",r.arg=t),!!o}for(var c=this.tryEntries.length-1;c>=0;--c){var a=this.tryEntries[c],i=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=n.call(a,"catchLoc"),s=n.call(a,"finallyLoc");if(u&&s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!s)throw Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var c=o;break}}c&&("break"===t||"continue"===t)&&c.tryLoc<=e&&e<=c.finallyLoc&&(c=null);var a=c?c.completion:{};return a.type=t,a.arg=e,c?(this.method="next",this.next=c.finallyLoc,v):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),O(r),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;O(r)}return o}}throw Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:T(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),v}},e}function j(t,e,r,n,o,c,a){try{var i=t[c](a),u=i.value}catch(t){return void r(t)}i.done?e(u):Promise.resolve(u).then(n,o)}function C(t){return function(){var e=this,r=arguments;return new Promise((function(n,o){var c=t.apply(e,r);function a(t){j(c,n,o,a,i,"next",t)}function i(t){j(c,n,o,a,i,"throw",t)}a(void 0)}))}}k(s),k(l),k(f),k(w),k(_);var P={baseUrl:"https://nomoreparties.co/v1/wff-cohort-12",headers:{authorization:"cb9751e0-e86f-428f-98dc-da113ca08cf1","Content-Type":"application/json"}},O=function(){var t=C(q().mark((function t(){return q().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",fetch("".concat(P.baseUrl,"/users/me"),{headers:P.headers}).then((function(t){return t.ok?t.json():Promise.reject("Ошибка: ".concat(t.status))})).catch((function(t){console.log(t)})));case 1:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),A=function(){var t=C(q().mark((function t(){return q().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",fetch("".concat(P.baseUrl,"/cards"),{headers:P.headers}).then((function(t){return t.ok?t.json():Promise.reject("Ошибка: ".concat(t.status))})).catch((function(t){console.log(t)})));case 1:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),T=function(){var t=C(q().mark((function t(e,r,n){return q().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return E(!0,h.querySelector(".popup__button")),t.abrupt("return",fetch("".concat(P.baseUrl,"/cards"),{method:"POST",headers:P.headers,body:JSON.stringify({name:e,link:r,likes:n})}).then((function(t){return t.ok?t.json():Promise.reject("Ошибка: ".concat(t.status))})).catch((function(t){console.log(t)})).finally((function(){return E(!1,h.querySelector(".popup__button"))})));case 2:case"end":return t.stop()}}),t)})));return function(e,r,n){return t.apply(this,arguments)}}(),N=function(){var t=C(q().mark((function t(e){return q().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",fetch("".concat(P.baseUrl,"/cards/").concat(e),{method:"DELETE",headers:P.headers}).then((function(t){return t.ok?t.json():Promise.reject("Ошибка: ".concat(t.status))})).catch((function(t){console.log(t)})).finally((function(){return E(!1,h.querySelector(".popup__button"))})));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),U=function(){var t=C(q().mark((function t(e){return q().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",fetch("".concat(P.baseUrl,"/cards/likes/").concat(e),{method:"PUT",headers:P.headers}).then((function(t){return t.ok?t.json():Promise.reject("Ошибка: ".concat(t.status))})).catch((function(t){console.log(t)})));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),G=function(){var t=C(q().mark((function t(e){return q().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",fetch("".concat(P.baseUrl,"/cards/likes/").concat(e),{method:"DELETE",headers:P.headers}).then((function(t){return t.ok?t.json():Promise.reject("Ошибка: ".concat(t.status))})).catch((function(t){console.log(t)})));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),I=function(){var t=C(q().mark((function t(e,r){return q().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return E(!0,p.querySelector(".popup__button")),t.abrupt("return",fetch("".concat(P.baseUrl,"/users/me"),{method:"PATCH",headers:P.headers,body:JSON.stringify({name:e,about:r})}).then((function(t){return t.ok?t.json():Promise.reject("Ошибка: ".concat(t.status))})).catch((function(t){console.log(t)})).finally((function(){return E(!1,p.querySelector(".popup__button"))})));case 2:case"end":return t.stop()}}),t)})));return function(e,r){return t.apply(this,arguments)}}(),B=function(){var t=C(q().mark((function t(e){return q().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return E(!0,b.querySelector(".popup__button")),t.abrupt("return",fetch("".concat(P.baseUrl,"/users/me/avatar"),{method:"PATCH",headers:P.headers,body:JSON.stringify({avatar:e})}).then((function(t){return t.ok?t.json():Promise.reject("Ошибка: ".concat(t.status))})).catch((function(t){console.log(t)})).finally((function(){return E(!1,b.querySelector(".popup__button"))})));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),D=document.querySelector(".content").querySelector(".places__list"),F=document.querySelector("#card-template").content;function M(t,r,o,c,a){var i=F.querySelector(".card").cloneNode(!0),u=i.querySelector(".card__delete-button"),s=i.querySelector(".card__like-button"),l=i.querySelector(".card__image"),f=i.querySelector(".like-button__quantity"),p=i.querySelector(".card__title");return t.likes.forEach((function(t){t._id===a._id&&s.classList.add("card__like-button_is-active")})),p.textContent=t.name,l.alt=t.name,l.src=t.link,f.textContent=t.likes.length,i.id=t._id,u.addEventListener("click",(function(){e(w),function(t,e,r){S.addEventListener("click",(function(){e(t),r(w)}))}(i,r,n)})),s.addEventListener("click",(function(t){return o(t,i)})),l.addEventListener("click",(function(){return c(t)})),i}function J(t){t.remove(),N(t.id)}function Y(t,e){t.target.classList.contains("card__like-button_is-active")&&t.target.classList.contains("card__like-button")?(t.target.classList.toggle("card__like-button_is-active"),G(e.id).then((function(t){e.querySelector(".like-button__quantity").textContent=t.likes.length}))):t.target.classList.contains("card__like-button")&&(t.target.classList.toggle("card__like-button_is-active"),U(e.id).then((function(t){e.querySelector(".like-button__quantity").textContent=t.likes.length})))}function H(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var V,z,R=document.querySelector(".profile__edit-button"),$=document.querySelector(".profile__add-button"),K=document.querySelector(".popup__image"),Q=document.querySelector(".popup__caption"),W=document.querySelector(".profile__image"),X=document.querySelector(".popup_type_change-avatar");function Z(t){W.style.backgroundImage="url(".concat(t,")")}function tt(t){e(f),K.src=t.link,Q.textContent=t.name,K.alt=t.name}function et(t,e){t.addEventListener("submit",e)}Promise.all([A(),O()]).then((function(t){var e,r,n,o,c=(o=2,function(t){if(Array.isArray(t))return t}(n=t)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,o,c,a,i=[],u=!0,s=!1;try{if(c=(r=r.call(t)).next,0===e){if(Object(r)!==r)return;u=!1}else for(;!(u=(n=c.call(r)).done)&&(i.push(n.value),i.length!==e);u=!0);}catch(t){s=!0,o=t}finally{try{if(!u&&null!=r.return&&(a=r.return(),Object(a)!==a))return}finally{if(s)throw o}}return i}}(n,o)||function(t,e){if(t){if("string"==typeof t)return H(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?H(t,e):void 0}}(n,o)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),a=c[0],i=c[1];Z(i.avatar),e=i.name,r=i.about,d.textContent=e,y.textContent=r,a.forEach((function(t){return function(t,e,r,n,o){var c=M(t,e,r,n,o),a=c.querySelector(".card__delete-button");o._id!==t.owner._id&&a.remove(),D.append(c)}(t,J,Y,tt,i)}))})),$.addEventListener("click",(function(){u(h,o),e(l)})),W.addEventListener("click",(function(){u(b,o),e(X)})),R.addEventListener("click",(function(){u(p,o),v.value=d.textContent,m.value=y.textContent,e(s)})),et(p,(function(t){t.preventDefault();var e={name:v.value,about:m.value};I(e.name,e.about).then((function(t){d.textContent=t.name,y.textContent=t.about})),n(s)})),et(h,(function(t){t.preventDefault();var e={name:h.elements.placeName.value,link:h.elements.link.value,likes:[]};return T(e.name,e.link,e.likes).then((function(t){return e=M(t,J,Y,tt),void D.prepend(e);var e})),n(l),L(h),e})),et(b,(function(t){t.preventDefault();var e=g.value;B(e).then((function(t){Z(t.avatar)})),n(_),L(b)})),V=document.querySelector(".footer__copyright"),z=(new Date).getFullYear(),V.textContent="© "+"".concat(z)+" Mesto Russia",function(t){Array.from(document.querySelectorAll(t.formSelector)).forEach((function(t){i(t)}))}(o)})();