!function(e,r){"object"==typeof exports&&"object"==typeof module?module.exports=r():"function"==typeof define&&define.amd?define([],r):"object"==typeof exports?exports.cart=r():e.cart=r()}(this,(function(){return(()=>{var e={704:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>n});const n={urls:{createUrl:"checkout",getUrl:"checkout/:checkoutId",updateUrl:"checkout/:checkoutId",addItemUrl:"checkout/:checkoutId/items",updateItemQtyUrl:"checkout/:checkoutId/items/:itemId",stripePaymentUrl:"checkout/:checkoutId/stripe"},localItemName:"cj_ckId"}},17:(e,r,t)=>{var n={"./laravel-cart":704,"./laravel-cart.js":704};function u(e){var r=a(e);return t(r)}function a(e){if(!t.o(n,e)){var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}return n[e]}u.keys=function(){return Object.keys(n)},u.resolve=a,e.exports=u,u.id=17}},r={};function t(n){if(r[n])return r[n].exports;var u=r[n]={exports:{}};return e[n](u,u.exports,t),u.exports}t.d=(e,r)=>{for(var n in r)t.o(r,n)&&!t.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:r[n]})},t.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),t.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var n={};return(()=>{"use strict";t.d(n,{default:()=>a});var e=function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"success";return{status:r,statusCode:e.status,data:e.data}};function r(e,r,t,n,u,a,o){try{var c=e[a](o),s=c.value}catch(e){return void t(e)}c.done?r(s):Promise.resolve(s).then(n,u)}function u(e){return function(){var t=this,n=arguments;return new Promise((function(u,a){var o=e.apply(t,n);function c(e){r(o,u,a,c,s,"next",e)}function s(e){r(o,u,a,c,s,"throw",e)}c(void 0)}))}}const a=function(r){var n=r.axios,a=r.provider,o=void 0===a?"laravel-cart":a,c=function(){if("string"==typeof o){var e=t(17)("./".concat(o)).default;return{urls:e.urls,localItemName:e.localItemName}}return o},s=c().localItemName,i=localStorage.getItem(s),p=function(){for(var e=c().urls,r=0,t=Object.keys(e);r<t.length;r++){var n=t[r];e[n]=e[n].replace(":checkoutId",i)}return e}(),l=p.createUrl,f=p.getUrl,d=p.updateUrl,v=p.addItemUrl,m=p.updateItemQtyUrl,h=p.stripePaymentUrl,y=function(){var e=u(regeneratorRuntime.mark((function e(){var r,t,n,u;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k();case 2:if(r=e.sent,t=r.data,n=r.status,u=r.statusCode,"error"!==n){e.next=10;break}return e.next=9,g();case 9:return e.abrupt("return",e.sent);case 10:return e.abrupt("return",{data:t,status:n,statusCode:u});case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),g=function(){var r=u(regeneratorRuntime.mark((function r(){var t,u;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,n().post(l);case 3:return t=r.sent,localStorage.setItem(s,t.data.cart.id),r.abrupt("return",e(t));case 8:return r.prev=8,r.t0=r.catch(0),u=r.t0.response,r.abrupt("return",e(u,"error"));case 12:case"end":return r.stop()}}),r,null,[[0,8]])})));return function(){return r.apply(this,arguments)}}(),k=function(){var r=u(regeneratorRuntime.mark((function r(){var t,u;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,n().get(f);case 3:return t=r.sent,r.abrupt("return",e(t));case 7:return r.prev=7,r.t0=r.catch(0),u=r.t0.response,r.abrupt("return",e(u,"error"));case 11:case"end":return r.stop()}}),r,null,[[0,7]])})));return function(){return r.apply(this,arguments)}}();return{initCheckout:y,createCheckoutInstance:g,getCheckoutInstance:k,updateCheckoutInstance:function(){var r=u(regeneratorRuntime.mark((function r(t){var u,a;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,n().put(d,t);case 3:return u=r.sent,r.abrupt("return",e(u));case 7:return r.prev=7,r.t0=r.catch(0),a=r.t0.response,r.abrupt("return",e(a,"error"));case 11:case"end":return r.stop()}}),r,null,[[0,7]])})));return function(e){return r.apply(this,arguments)}}(),addCheckoutItem:function(){var r=u(regeneratorRuntime.mark((function r(t){var u,a;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,n().post(v,t);case 3:return u=r.sent,r.abrupt("return",e(u));case 7:return r.prev=7,r.t0=r.catch(0),a=r.t0.response,r.abrupt("return",e(a,"error"));case 11:case"end":return r.stop()}}),r,null,[[0,7]])})));return function(e){return r.apply(this,arguments)}}(),updateCheckoutItemQty:function(){var r=u(regeneratorRuntime.mark((function r(t,u){var a,o,c,s,i,p=arguments;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return a=p.length>2&&void 0!==p[2]?p[2]:"increment",o=m.replace(":itemId",t),r.prev=2,c=u+1,"increment"!==a&&(c=u>1?u-1:1),r.next=7,n().put(o,{qty:c});case 7:return s=r.sent,r.abrupt("return",e(s));case 11:return r.prev=11,r.t0=r.catch(2),i=r.t0.response,r.abrupt("return",e(i,"error"));case 15:case"end":return r.stop()}}),r,null,[[2,11]])})));return function(e,t){return r.apply(this,arguments)}}(),triggerStripePayment:function(){var r=u(regeneratorRuntime.mark((function r(t){var u,a;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,n().post(h,{token:t});case 3:return u=r.sent,r.abrupt("return",e(u));case 7:return r.prev=7,r.t0=r.catch(0),a=r.t0.response,r.abrupt("return",e(a,"error"));case 11:case"end":return r.stop()}}),r,null,[[0,7]])})));return function(e){return r.apply(this,arguments)}}()}}})(),n.default})()}));