(()=>{"use strict";function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}function t(t,r){for(var n=0;n<r.length;n++){var o=r[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,(void 0,i=function(t,r){if("object"!==e(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var o=n.call(t,"string");if("object"!==e(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(o.key),"symbol"===e(i)?i:String(i)),o)}var i}var r=new(function(){function e(t){var r=t.baseUrl,n=t.headers;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._baseUrl=r,this._headers=n}var r,n;return r=e,(n=[{key:"getInitialCards",value:function(){return fetch("".concat(this._baseUrl,"/cards"),{headers:this._headers}).then((function(e){return e.ok?e.json():Promise.reject(e.status)})).catch(console.log)}},{key:"getUserProfile",value:function(){return fetch("".concat(this._baseUrl,"/users/me"),{headers:this._headers}).then((function(e){return e.ok?e.json():Promise.reject(e.status)})).catch(console.log)}},{key:"editProfile",value:function(e){return fetch("".concat(this._baseUrl,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:e.username,about:e.userwork})}).then((function(e){return e.ok?e.json():Promise.reject(e.status)})).catch(console.log)}},{key:"editAvatarProfile",value:function(e){return fetch("".concat(this._baseUrl,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:e.link_img})}).then((function(e){return e.ok?e.json():Promise.reject(e.status)})).catch(console.log)}},{key:"addNewCard",value:function(e){return fetch("".concat(this._baseUrl,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:e.name_img,link:e.link_img})}).then((function(e){return e.ok?e.json():Promise.reject(e.status)})).catch(console.log)}},{key:"deleteCard",value:function(e){return fetch("".concat(this._baseUrl,"/cards/").concat(e),{method:"DELETE",headers:this._headers}).then((function(e){return e.ok?e.json():Promise.reject(e.status)})).catch(console.log)}},{key:"addLike",value:function(e){return fetch("".concat(this._baseUrl,"/cards/").concat(e,"/likes"),{method:"PUT",headers:this._headers}).then((function(e){return e.ok?e.json():Promise.reject(e.status)})).catch(console.log)}},{key:"deleteLike",value:function(e){return fetch("".concat(this._baseUrl,"/cards/").concat(e,"/likes"),{method:"DELETE",headers:this._headers}).then((function(e){return e.ok?e.json():Promise.reject(e.status)})).catch(console.log)}}])&&t(r.prototype,n),Object.defineProperty(r,"prototype",{writable:!1}),e}())({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-54",headers:{authorization:"ebbf4de8-113f-4170-86f1-c0542b4c5864","Content-Type":"application/json"}});function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}function o(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,u(n.key),n)}}function i(e,t,r){return(t=u(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function u(e){var t=function(e,t){if("object"!==n(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,"string");if("object"!==n(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===n(t)?t:String(t)}var a=function(){function e(t,r,n,o,u,a){var c=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),i(this,"_name",void 0),i(this,"_link",void 0),i(this,"_likes",void 0),i(this,"_template",void 0),i(this,"_element",void 0),i(this,"_nameCard",void 0),i(this,"_imgCard",void 0),i(this,"_btnlike",void 0),i(this,"_btnTrash",void 0),i(this,"_showFullImg",void 0),i(this,"_likesImg",void 0),i(this,"_getElementTemplateCard",(function(){return document.querySelector(c._template).content.querySelector(".elements__item").cloneNode(!0)})),i(this,"getElementCard",(function(){return c._element=c._getElementTemplateCard(),c._nameCard=c._element.querySelector(".elements__text"),c._imgCard=c._element.querySelector(".elements__img"),c._btnlike=c._element.querySelector(".elements__like"),c._btnTrash=c._element.querySelector(".elements__trash"),c._likesImg=c._element.querySelector(".elements__like_count"),c._imgCard.src=c._link,c._imgCard.alt=c._name,c._nameCard.textContent=c._name,c.setLikes(c._likes),c._setEventListeners(),c._userOwner!==c._userId&&(c._btnTrash.style.display="none"),c._element})),this._name=t.name,this._link=t.link,this._likes=t.likes,this._id=t.id,this._userId=r,this._userOwner=t.owner,this._template=n,this._showFullImg=o,this._confirm=u,this._toggleLikes=a}var t,r;return t=e,r=[{key:"isLiked",value:function(){var e=this,t=this._likes.find((function(t){return t._id===e._userId}));return t}},{key:"setLikes",value:function(e){this._likes=e,this._likesImg.textContent=this._likes.length,this.isLiked()?this._btnlike.classList.add("elements__like_active"):this._btnlike.classList.remove("elements__like_active")}},{key:"_setEventListeners",value:function(){var e=this;this._btnlike.addEventListener("click",(function(){e._toggleLikes(e._id)})),this._btnTrash.addEventListener("click",(function(t){e._confirm(e)})),this._imgCard.addEventListener("click",(function(){return e._showFullImg()}))}}],r&&o(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}(),c={formSelector:".form",inputSelector:".form__input",submitButtonSelector:".form__btn",inactiveButtonClass:"form__btn_disabled",inputErrorClass:"form__msg_show",errorClass:"form__input_type_error"};function l(e){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l(e)}function s(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,p(n.key),n)}}function f(e,t,r){return(t=p(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e){var t=function(e,t){if("object"!==l(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==l(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===l(t)?t:String(t)}var y=function(){function e(t,r){var n=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),f(this,"_renderer",void 0),f(this,"_container",void 0),this._renderer=n,this._container=r}var t,r;return t=e,(r=[{key:"addItem",value:function(e){this._container.prepend(e)}},{key:"renderStartCards",value:function(e){var t=this;e.slice().reverse().forEach((function(e){t._renderer(e)}))}}])&&s(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function m(e){return m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},m(e)}function d(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,b(n.key),n)}}function v(e,t,r){return t&&d(e.prototype,t),r&&d(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e}function h(e,t,r){return(t=b(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function b(e){var t=function(e,t){if("object"!==m(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==m(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===m(t)?t:String(t)}var _=v((function e(t,r){var n=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),h(this,"_validatorForm",void 0),h(this,"_formSelector",void 0),h(this,"_inputSelector",void 0),h(this,"_submitButtonSelector",void 0),h(this,"_inactiveButtonClass",void 0),h(this,"_inputErrorClass",void 0),h(this,"_errorClass",void 0),h(this,"_inputList",void 0),h(this,"_buttom",void 0),h(this,"enableValidation",(function(){n._validatorForm.addEventListener("submit",(function(e){e.preventDefault()})),n._setEventListeners()})),h(this,"_setEventListeners",(function(){n._inputList.forEach((function(e){e.addEventListener("input",(function(){n._checkInputValidity(e),n._toggleButton()}))}))})),h(this,"_checkInputValidity",(function(e){e.validity.valid?n._hideInputError(e):n._showInputError(e,e.validationMessage)})),h(this,"_showInputError",(function(e,t){var r=n._validatorForm.querySelector("#".concat(e.id,"-error"));r.classList.add(n._inputErrorClass),r.textContent=t,e.classList.add(n._errorClass)})),h(this,"_hideInputError",(function(e){var t=n._validatorForm.querySelector("#".concat(e.id,"-error"));t.classList.remove(n._inputErrorClass),t.textContent="",e.classList.remove(n._errorClass)})),h(this,"_toggleButton",(function(){n._buttom.disabled=!n._validatorForm.checkValidity(),n._buttom.classList.toggle(n._inactiveButtonClass,!n._validatorForm.checkValidity())})),h(this,"resetValidation",(function(){n._validatorForm.reset(),n._toggleButton(),n._inputList.forEach((function(e){n._hideInputError(e)}))})),this._validatorForm=document.querySelector(r),this._formSelector=t.formSelector,this._inputSelector=t.inputSelector,this._submitButtonSelector=t.submitButtonSelector,this._inactiveButtonClass=t.inactiveButtonClass,this._inputErrorClass=t.inputErrorClass,this._errorClass=t.errorClass,this._inputList=Array.from(this._validatorForm.querySelectorAll(this._inputSelector)),this._buttom=this._validatorForm.querySelector(this._submitButtonSelector)}));function g(e){return g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},g(e)}function w(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,S(n.key),n)}}function S(e){var t=function(e,t){if("object"!==g(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==g(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===g(t)?t:String(t)}var k=function(){function e(t){var r,n,o;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),r=this,o=void 0,(n=S(n="_popup"))in r?Object.defineProperty(r,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):r[n]=o,this._popup=document.querySelector(t),this._handleEscClose=this._handleEscClose.bind(this),this._btnClose=this._popup.querySelector(".popup__close")}var t,r;return t=e,(r=[{key:"open",value:function(){this._popup.classList.add("popup_show"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popup.classList.remove("popup_show"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"_handleEscClose",value:function(e){"Escape"===e.key&&this.close()}},{key:"setEventListeners",value:function(){var e=this;this._popup.addEventListener("mousedown",(function(t){t.target===t.currentTarget&&e.close()})),this._btnClose.addEventListener("click",(function(){e.close()}))}}])&&w(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function j(e){return j="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},j(e)}function P(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,R(n.key),n)}}function E(){return E="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,r){var n=O(e,t);if(n){var o=Object.getOwnPropertyDescriptor(n,t);return o.get?o.get.call(arguments.length<3?e:r):o.value}},E.apply(this,arguments)}function O(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=I(e)););return e}function C(e,t){return C=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},C(e,t)}function L(e,t){if(t&&("object"===j(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return T(e)}function T(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function I(e){return I=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},I(e)}function q(e,t,r){return(t=R(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function R(e){var t=function(e,t){if("object"!==j(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==j(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===j(t)?t:String(t)}var x=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&C(e,t)}(u,e);var t,r,n,o,i=(n=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=I(n);if(o){var r=I(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return L(this,e)});function u(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),q(T(t=i.call(this,e)),"_popapImg",void 0),q(T(t),"_popapNameImg",void 0),t._popapImg=t._popup.querySelector(".popup__img"),t._popapNameImg=t._popup.querySelector(".popup__text"),t}return t=u,(r=[{key:"open",value:function(e){this._popapImg.src=e.link,this._popapImg.alt=e.name,this._popapNameImg.textContent=e.name,E(I(u.prototype),"open",this).call(this)}}])&&P(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),u}(k);function B(e){return B="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},B(e)}function U(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,H(n.key),n)}}function V(){return V="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,r){var n=F(e,t);if(n){var o=Object.getOwnPropertyDescriptor(n,t);return o.get?o.get.call(arguments.length<3?e:r):o.value}},V.apply(this,arguments)}function F(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=W(e)););return e}function A(e,t){return A=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},A(e,t)}function N(e,t){if(t&&("object"===B(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return D(e)}function D(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function W(e){return W=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},W(e)}function J(e,t,r){return(t=H(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function H(e){var t=function(e,t){if("object"!==B(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==B(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===B(t)?t:String(t)}var z=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&A(e,t)}(u,e);var t,r,n,o,i=(n=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=W(n);if(o){var r=W(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return N(this,e)});function u(e,t){var r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),J(D(r=i.call(this,e)),"_submit",void 0),J(D(r),"_popupForm",void 0),J(D(r),"_inputList",void 0),J(D(r),"_listValues",void 0),r._submit=t,r._popupForm=r._popup.querySelector(".form"),r._inputList=Array.from(r._popupForm.querySelectorAll(".form__input")),r._listValues={},r}return t=u,(r=[{key:"_getInputValues",value:function(){var e=this;return this._inputList.forEach((function(t){e._listValues[t.name]=t.value})),this._listValues}},{key:"setEventListeners",value:function(){var e=this;V(W(u.prototype),"setEventListeners",this).call(this),this._popup.addEventListener("submit",(function(t){t.preventDefault(),e._submit(e._getInputValues())}))}},{key:"close",value:function(){V(W(u.prototype),"close",this).call(this),this._popupForm.reset()}}])&&U(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),u}(k);function M(e){return M="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},M(e)}function G(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,ee(n.key),n)}}function K(){return K="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,r){var n=Q(e,t);if(n){var o=Object.getOwnPropertyDescriptor(n,t);return o.get?o.get.call(arguments.length<3?e:r):o.value}},K.apply(this,arguments)}function Q(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=$(e)););return e}function X(e,t){return X=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},X(e,t)}function Y(e,t){if(t&&("object"===M(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return Z(e)}function Z(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function $(e){return $=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},$(e)}function ee(e){var t=function(e,t){if("object"!==M(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==M(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===M(t)?t:String(t)}var te=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&X(e,t)}(u,e);var t,r,n,o,i=(n=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=$(n);if(o){var r=$(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return Y(this,e)});function u(e,t){var r,n,o,a;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),n=Z(r=i.call(this,e)),a=void 0,(o=ee(o="_element"))in n?Object.defineProperty(n,o,{value:a,enumerable:!0,configurable:!0,writable:!0}):n[o]=a,r._submit=t,r}return t=u,(r=[{key:"open",value:function(e){K($(u.prototype),"open",this).call(this),this._element=e}},{key:"setEventListeners",value:function(){var e=this;K($(u.prototype),"setEventListeners",this).call(this),this._popup.addEventListener("submit",(function(t){t.preventDefault(),e._submit(e._element)}))}}])&&G(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),u}(k);function re(e){return re="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},re(e)}function ne(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,ie(n.key),n)}}function oe(e,t,r){return(t=ie(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function ie(e){var t=function(e,t){if("object"!==re(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==re(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===re(t)?t:String(t)}var ue,ae=function(){function e(t,r,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),oe(this,"_profileName",void 0),oe(this,"_profileWork",void 0),this._profileName=t,this._profileWork=r,this._userAvatar=n}var t,r;return t=e,(r=[{key:"getUserInfo",value:function(){return{name:this._profileName.textContent,work:this._profileWork.textContent}}},{key:"setUserInfo",value:function(e){this._profileName.textContent=e.username,this._profileWork.textContent=e.userwork,this._userAvatar.src=e.avatar}},{key:"setAvatar",value:function(e){this._userAvatar.src=e}}])&&ne(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}(),ce=document.querySelector(".profile__edit"),le=document.querySelector(".profile__add"),se=document.querySelector(".profile__avatar_edit"),fe=document.querySelector(".popup_edit"),pe=fe.querySelector(".form__input_text_name"),ye=fe.querySelector(".form__input_text_work"),me=document.querySelector(".profile__name"),de=document.querySelector(".profile__description"),ve=document.querySelector(".profile__avatar"),he=document.querySelector(".elements__items"),be=new x(".popup_show-img");r.getUserProfile().then((function(e){_e.setUserInfo({username:e.name,userwork:e.about,avatar:e.avatar}),ue=e._id}));var _e=new ae(me,de,ve),ge=new y({renderer:function(e){ge.addItem(Ee({name:e.name,link:e.link,likes:e.likes,id:e._id,owner:e.owner._id}))}},he);function we(e,t){return e.querySelector(".form__btn").textContent=t?"Сохранение...":"Сохранить"}var Se=new z(".popup_edit",(function(e){we(document.querySelector(".popup_edit"),!0),r.editProfile(e).then((function(e){_e.setUserInfo({username:e.name,userwork:e.about,avatar:e.avatar})})).finally((function(){we(document.querySelector(".popup_edit"),!1)})),Se.close()})),ke=new z(".popup_add",(function(e){r.addNewCard(e).then((function(e){var t=Ee({name:e.name,link:e.link,likes:e.likes,id:e._id,owner:e.owner._id});ge.addItem(t),ke.close()}))})),je=new z(".popup_edit-avatar",(function(e){r.editAvatarProfile(e).then((function(e){_e.setAvatar(e.avatar),je.close()}))})),Pe=new te(".popup_delet-img",(function(e){r.deleteCard(e._id).then((function(t){e._element.remove(),Pe.close()}))}));function Ee(e){var t=new a(e,ue,".template__card",(function(){be.open(e)}),(function(e){Pe.open(e)}),(function(e){t.isLiked()?r.deleteLike(e).then((function(e){t.setLikes(e.likes)})):r.addLike(e).then((function(e){t.setLikes(e.likes)}))}));return t.getElementCard()}function Oe(e,t){return new _(e,t)}var Ce=Oe(c,".form_edit");Ce.enableValidation();var Le=Oe(c,".form_add");Le.enableValidation();var Te=Oe(c,".form_avatar");Te.enableValidation(),ce.addEventListener("click",(function(){var e;Ce.resetValidation(),e=_e.getUserInfo(),pe.value=e.name,ye.value=e.work,Se.open()})),le.addEventListener("click",(function(){Le.resetValidation(),ke.open()})),se.addEventListener("click",(function(){Te.resetValidation(),je.open()})),Se.setEventListeners(),ke.setEventListeners(),be.setEventListeners(),je.setEventListeners(),Pe.setEventListeners(),r.getInitialCards().then((function(e){ge.renderStartCards(e)}))})();