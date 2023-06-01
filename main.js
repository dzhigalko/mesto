(()=>{"use strict";function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(t,e){for(var r=0;r<e.length;r++){var o=e[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,n(o.key),o)}}function r(t,e,r){return(e=n(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function n(e){var r=function(e,r){if("object"!==t(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,"string");if("object"!==t(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===t(r)?r:String(r)}var o=function(){function t(e,n,o,i,u){var a=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),r(this,"_handleLikeButtonClick",(function(){a._handleLikeCard(a._data).then((function(t){a._data.isLikedByMe=!a._data.isLikedByMe,t.likes.length>0?a._likesCounter.textContent=t.likes.length:a._likesCounter.textContent="",a._likeButton.classList.toggle("photo__like_active")}))})),r(this,"_handleTrashButtonClick",(function(t){a._handleRemoveCard(a._data).then((function(){t.target.closest(".photo").remove()})).catch((function(){}))})),this._data=e,this._templateSelector=n,this._handleImageClick=o,this._handleRemoveCard=i,this._handleLikeCard=u;var c=document.querySelector(this._templateSelector);this._cardElement=c.content.cloneNode(!0),this._photoImage=this._cardElement.querySelector(".photo__item"),this._photoPlace=this._cardElement.querySelector(".photo__description"),this._likeButton=this._cardElement.querySelector(".photo__like"),this._trashButton=this._cardElement.querySelector(".photo__trash"),this._likesCounter=this._cardElement.querySelector(".photo__like-counter")}var n,o;return n=t,(o=[{key:"createElement",value:function(){return this._photoImage.src=this._data.link,this._photoImage.alt=this._data.name,this._photoPlace.textContent=this._data.name,this._data.isMyCard||this._trashButton.remove(),this._data.isLikedByMe&&this._likeButton.classList.add("photo__like_active"),this._data.likes.length>0&&(this._likesCounter.textContent=this._data.likes.length),this._addEventListeners(),this._cardElement}},{key:"_addEventListeners",value:function(){this._likeButton.addEventListener("click",this._handleLikeButtonClick),this._trashButton.addEventListener("click",this._handleTrashButtonClick),this._photoImage.addEventListener("click",this._getImageClickHandler())}},{key:"_getImageClickHandler",value:function(){var t=this;return function(){t._handleImageClick(t._data.link,t._data.name)}}}])&&e(n.prototype,o),Object.defineProperty(n,"prototype",{writable:!1}),t}();function i(t){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i(t)}function u(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==i(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==i(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===i(o)?o:String(o)),n)}var o}var a=function(){function t(e,r){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t);var n=e.items,o=e.renderer;this._items=n,this._renderer=o,this._containerElement=document.querySelector(r)}var e,r;return e=t,(r=[{key:"render",value:function(){var t=this;this._items.forEach((function(e){var r=t._renderer(e);t.addItem(r)}))}},{key:"addItem",value:function(t,e){(e=e||!1)?this._containerElement.prepend(t):this._containerElement.append(t)}}])&&u(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();function c(t){return c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},c(t)}function l(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,s(n.key),n)}}function s(t){var e=function(t,e){if("object"!==c(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==c(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===c(e)?e:String(e)}var f=function(){function t(e){var r,n,o,i=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),r=this,o=function(t){"Escape"===t.key&&i.close()},(n=s(n="_handleEscClose"))in r?Object.defineProperty(r,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):r[n]=o,this._element=document.querySelector(e),this._closeButton=this._element.querySelector(".popup__close-button")}var e,r;return e=t,(r=[{key:"setEventListeners",value:function(){var t=this;this._closeButton.addEventListener("click",(function(){t.close()})),this._element.addEventListener("mousedown",(function(e){e.target===t._element&&t.close()}))}},{key:"open",value:function(){document.addEventListener("keydown",this._handleEscClose),this._element.classList.add("popup_opened")}},{key:"close",value:function(){this._element.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}}])&&l(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();function p(t){return p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},p(t)}function y(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==p(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==p(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===p(o)?o:String(o)),n)}var o}function m(){return m="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,r){var n=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=b(t)););return t}(t,e);if(n){var o=Object.getOwnPropertyDescriptor(n,e);return o.get?o.get.call(arguments.length<3?t:r):o.value}},m.apply(this,arguments)}function h(t,e){return h=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},h(t,e)}function b(t){return b=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},b(t)}var v=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&h(t,e)}(u,t);var e,r,n,o,i=(n=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=b(n);if(o){var r=b(this).constructor;t=Reflect.construct(e,arguments,r)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===p(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(e=i.call(this,t))._image=e._element.querySelector(".popup__image"),e._imagePlace=e._element.querySelector(".popup__image-name"),e}return e=u,(r=[{key:"open",value:function(t,e){this._image.src=e,this._image.alt=t,this._imagePlace.textContent=t,m(b(u.prototype),"open",this).call(this)}}])&&y(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),u}(f);function d(t){return d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},d(t)}function _(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==d(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==d(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===d(o)?o:String(o)),n)}var o}function g(){return g="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,r){var n=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=k(t)););return t}(t,e);if(n){var o=Object.getOwnPropertyDescriptor(n,e);return o.get?o.get.call(arguments.length<3?t:r):o.value}},g.apply(this,arguments)}function S(t,e){return S=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},S(t,e)}function k(t){return k=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},k(t)}var w=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&S(t,e)}(u,t);var e,r,n,o,i=(n=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=k(n);if(o){var r=k(this).constructor;t=Reflect.construct(e,arguments,r)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===d(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t,e,r){var n;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,t))._submitHandler=e,n._form=n._element.querySelector("form"),n._formInputs={},n._resetFormValidation=r,n._submitButton=n._element.querySelector(".popup__button"),n._form.querySelectorAll("input").forEach((function(t){n._formInputs[t.name]=t})),n}return e=u,(r=[{key:"_getInputValues",value:function(){var t=this,e={};return Object.keys(this._formInputs).forEach((function(r){e[r]=t._formInputs[r].value})),e}},{key:"setEventListeners",value:function(){var t=this;g(k(u.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(e){e.preventDefault();var r=t._submitButton.textContent;t._submitButton.textContent="Сохранение...",t._submitHandler(t._getInputValues()).then((function(){t.close(),t._submitButton.textContent=r}))}))}},{key:"close",value:function(){g(k(u.prototype),"close",this).call(this),this._form.reset(),this._resetFormValidation(this._element)}},{key:"setInputValues",value:function(t){var e=this;Object.keys(t).forEach((function(r){e._formInputs[r]&&(e._formInputs[r].value=t[r])}))}}])&&_(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),u}(f);function O(t){return O="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},O(t)}function j(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==O(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==O(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===O(o)?o:String(o)),n)}var o}var E=function(){function t(e,r,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._nameElement=document.querySelector(e),this._aboutElement=document.querySelector(r),this._avatarElement=document.querySelector(n)}var e,r;return e=t,(r=[{key:"getUserInfo",value:function(){return{name:this._nameElement.textContent,about:this._aboutElement.textContent}}},{key:"setUserInfo",value:function(t,e){this._nameElement.textContent=t,this._aboutElement.textContent=e}},{key:"setUserAvatar",value:function(t){this._avatarElement.src=t}}])&&j(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();function P(t){return P="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},P(t)}function C(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==P(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==P(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===P(o)?o:String(o)),n)}var o}var L=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t);var r=e.baseUrl,n=e.token,o=e.errorHandler;this._baseUrl=r,this._token=n,this._errorHandler=o}var e,r;return e=t,(r=[{key:"_makeRequest",value:function(t,e){var r=e=e||{},n=r.method,o=void 0===n?"GET":n,i=r.body,u=null;return i&&(u=JSON.stringify(i)),fetch("".concat(this._baseUrl,"/").concat(t),{method:o,body:u,headers:{authorization:this._token,"Content-Type":"application/json"}}).catch(this._errorHandler).then((function(t){return t.ok?t.json():Promise.reject({response:t})}))}},{key:"getInitialCards",value:function(){return this._makeRequest("/cards")}},{key:"getUserProfile",value:function(){return this._makeRequest("/users/me")}},{key:"changeUserProfile",value:function(t,e){return this._makeRequest("/users/me",{method:"PATCH",body:{name:t,about:e}})}},{key:"addCard",value:function(t,e){return this._makeRequest("/cards",{method:"POST",body:{name:t,link:e}})}},{key:"deleteCard",value:function(t){return this._makeRequest("/cards/".concat(t),{method:"DELETE"})}},{key:"addCardLike",value:function(t){return this._makeRequest("/cards/".concat(t,"/likes"),{method:"PUT"})}},{key:"deleteCardLike",value:function(t){return this._makeRequest("/cards/".concat(t,"/likes"),{method:"DELETE"})}},{key:"changeAvatar",value:function(t){return this._makeRequest("/users/me/avatar",{method:"PATCH",body:{avatar:t}})}}])&&C(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();function I(t){return I="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},I(t)}function B(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==I(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==I(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===I(o)?o:String(o)),n)}var o}function R(){return R="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,r){var n=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=T(t)););return t}(t,e);if(n){var o=Object.getOwnPropertyDescriptor(n,e);return o.get?o.get.call(arguments.length<3?t:r):o.value}},R.apply(this,arguments)}function q(t,e){return q=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},q(t,e)}function T(t){return T=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},T(t)}var x=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&q(t,e)}(u,t);var e,r,n,o,i=(n=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=T(n);if(o){var r=T(this).constructor;t=Reflect.construct(e,arguments,r)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===I(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(e=i.call(this,t))._resolve=null,e._reject=null,e._confirmationButton=e._element.querySelector(".popup__button"),e}return e=u,(r=[{key:"setEventListeners",value:function(){var t=this;R(T(u.prototype),"setEventListeners",this).call(this),this._confirmationButton.addEventListener("click",(function(){t._resolve&&t._resolve(),t.close()}))}},{key:"open",value:function(){var t=this;return R(T(u.prototype),"open",this).call(this),new Promise((function(e,r){t._resolve=e,t._reject=r}))}},{key:"close",value:function(){R(T(u.prototype),"close",this).call(this),this._reject&&this._reject()}}])&&B(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),u}(f);function A(t){return A="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},A(t)}function V(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==A(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==A(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===A(o)?o:String(o)),n)}var o}var U=function(){function t(e,r){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._form=e,this._inputSelector=r.inputSelector,this._submitButtonSelector=r.submitButtonSelector,this._inactiveButtonClass=r.inactiveButtonClass,this._inputErrorClass=r.inputErrorClass,this._errorClass=r.errorClass,this.formInputs=Array.from(this._form.querySelectorAll(this._inputSelector)),this.formButton=this._form.querySelector(this._submitButtonSelector)}var e,r;return e=t,(r=[{key:"_setInputValid",value:function(t){var e=this._form.querySelector("#".concat(t.name,"-error"));t.classList.remove(this._inputErrorClass),e.textContent="",e.classList.remove(this._errorClass)}},{key:"_checkInputValidity",value:function(t){var e=t.checkValidity(),r=this._form.querySelector("#".concat(t.name,"-error"));e?this._setInputValid(t):(t.classList.add(this._inputErrorClass),r.textContent=t.validationMessage,r.classList.add(this._errorClass))}},{key:"_hasInvalidInput",value:function(t){return t.some((function(t){return!t.validity.valid}))}},{key:"_checkFormValidity",value:function(){this.formInputs.some((function(t){return!t.validity.valid}))?(this.formButton.classList.add(this._inactiveButtonClass),this.formButton.setAttribute("disabled","")):(this.formButton.classList.remove(this._inactiveButtonClass),this.formButton.removeAttribute("disabled"))}},{key:"_getInputEventListener",value:function(t){var e=this;return function(){e._checkInputValidity(t),e._checkFormValidity()}}},{key:"_addEventListeners",value:function(){var t=this;this.formInputs.forEach((function(e){e.addEventListener("input",t._getInputEventListener(e))}))}},{key:"enableValidation",value:function(){this._addEventListeners()}},{key:"resetValidation",value:function(){var t=this;this.formInputs.forEach((function(e){t._setInputValid(e)})),this._checkFormValidity()}}])&&V(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}(),D=["formSelector"];var H={};function M(t){var e=t.querySelector("form").getAttribute("name");H[e].resetValidation()}var F=document.querySelector(".profile__button-add"),N=document.querySelector(".profile__button-edit"),z=document.querySelector(".profile__avatar-button");function G(t){return G="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},G(t)}function J(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function $(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function K(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?$(Object(r),!0).forEach((function(e){Q(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):$(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function Q(t,e,r){return(e=function(t){var e=function(t,e){if("object"!==G(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==G(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===G(e)?e:String(e)}(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var W,X,Y,Z=new L({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-66",token:"31abe394-3f89-489d-9ccd-e96da397bf7c",errorHandler:function(t){return console.log(t)}}),tt=new v(".popup_type_image-full"),et=new E(".profile__name",".profile__about",".avatar"),rt=new w(".popup_type_profile",(function(t){var e=t.name,r=t.about;return Z.changeUserProfile(e,r).then((function(){et.setUserInfo(e,r)}))}),M),nt=new w(".popup_type_add-photo",(function(t){var e=t.name,r=t.link;return Z.addCard(e,r).then((function(t){ct.addItem(ut(K({isMyCard:!0},t)),!0)}))}),M),ot=new x(".popup_type_delete-photo",(function(){console.log("delete")})),it=new w(".popup_type_edit-avatar",(function(t){var e=t.avatar;return Z.changeAvatar(e).then((function(){et.setUserAvatar(e)}))}),M),ut=function(t){return new o(t,"#photo__template",(function(t,e){tt.open(e,t)}),(function(t){return ot.open().then((function(){return Z.deleteCard(t._id)}))}),(function(t){return t.isLikedByMe?Z.deleteCardLike(t._id):Z.addCardLike(t._id)})).createElement()},at=new Array,ct=new a({items:at,renderer:ut},".photos");Promise.all([Z.getUserProfile(),Z.getInitialCards()]).then((function(t){var e,r,n=(r=2,function(t){if(Array.isArray(t))return t}(e=t)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,o,i,u,a=[],c=!0,l=!1;try{if(i=(r=r.call(t)).next,0===e){if(Object(r)!==r)return;c=!1}else for(;!(c=(n=i.call(r)).done)&&(a.push(n.value),a.length!==e);c=!0);}catch(t){l=!0,o=t}finally{try{if(!c&&null!=r.return&&(u=r.return(),Object(u)!==u))return}finally{if(l)throw o}}return a}}(e,r)||function(t,e){if(t){if("string"==typeof t)return J(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?J(t,e):void 0}}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=n[0],i=n[1];et.setUserInfo(o.name,o.about),et.setUserAvatar(o.avatar),i.forEach((function(t){at.push(K({isLikedByMe:t.likes.some((function(t){return t._id==o._id})),isMyCard:t.owner._id==o._id},t))})),ct.render()})),[tt,rt,nt,ot,it].forEach((function(t){t.setEventListeners()})),F.addEventListener("click",(function(){nt.open()})),N.addEventListener("click",(function(){var t=et.getUserInfo(),e=t.name,r=t.about;rt.setInputValues({name:e,about:r}),rt.open()})),z.addEventListener("click",(function(){it.open()})),X=(W={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_disabled",inputErrorClass:"popup__input_error",errorClass:"popup__error_visible"}).formSelector,Y=function(t,e){if(null==t)return{};var r,n,o=function(t,e){if(null==t)return{};var r,n,o={},i=Object.keys(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}(W,D),Array.from(document.querySelectorAll(X)).forEach((function(t){var e=new U(t,Y);e.enableValidation();var r=t.getAttribute("name");H[r]=e}))})();
//# sourceMappingURL=main.js.map