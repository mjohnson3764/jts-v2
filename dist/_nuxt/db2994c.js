(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{265:function(t,e,r){"use strict";r(58),r(46),r(14),r(23),r(47),r(33),r(30),r(32),r(48),r(49),r(34);function n(t,e){var r="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!r){if(Array.isArray(t)||(r=function(t,e){if(!t)return;if("string"==typeof t)return o(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return o(t,e)}(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var i=0,n=function(){};return{s:n,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var c,l=!0,m=!1;return{s:function(){r=r.call(t)},n:function(){var t=r.next();return l=t.done,t},e:function(t){m=!0,c=t},f:function(){try{l||null==r.return||r.return()}finally{if(m)throw c}}}}function o(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,r=new Array(e);i<e;i++)r[i]=t[i];return r}e.a={mounted:function(){var t=["sales@johnsonturbine.com","shop@johnsonturbine.com"],e=document.getElementById("email-holder"),r=document.getElementById("email-principal");e&&setTimeout((function(){r.href="mailto:".concat(t[0]);var o,c=n(t);try{for(c.s();!(o=c.n()).done;){var l=o.value,a=document.createElement("a");a.text=l,a.href="mailto:".concat(l),e.appendChild(a)}}catch(t){c.e(t)}finally{c.f()}}),1e3)}}},267:function(t,e,r){"use strict";r.r(e);r(41),r(32),r(40),r(14),r(60),r(35),r(61);var n=r(28),o=r(9);r(59);function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function l(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var m={name:"ContactView",mixins:[r(265).a],data:function(){return{form:{address:"",subject:"",body:""},loading:!1,message:{text:"",success:!0}}},head:function(){return{title:"Johnson Turbine Support | Service"}},methods:{sendEmail:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var data,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.loading=!0,"c14677a7fe2aeb483ba790d22df0d7a1ee0f30fe0287822aa45d84fb6530104e",data=l(l({},t.form),{},{token:"c14677a7fe2aeb483ba790d22df0d7a1ee0f30fe0287822aa45d84fb6530104e"}),e.prev=3,e.next=6,t.$axios.$post("https://jts-email-service.herokuapp.com/api/email",data);case 6:r=e.sent,e.next=13;break;case 9:return e.prev=9,e.t0=e.catch(3),t.setIncorrectMessage(e.t0.message),e.abrupt("return");case 13:if(!r.error){e.next=16;break}return t.setIncorrectMessage(r.message),e.abrupt("return");case 16:t.message.success=!0,t.message.text="Email send successfully",t.form={address:"",subject:"",body:""},t.loading=!1;case 20:case"end":return e.stop()}}),e,null,[[3,9]])})))()},setIncorrectMessage:function(t){this.message.success=!1,this.message.text=t,this.loading=!1}}},d=r(21),component=Object(d.a)(m,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container"},[r("section",[r("h1",[t._v("Contact Us")]),t._v(" "),r("div",{staticClass:"row"},[t._m(0),t._v(" "),r("div",{staticClass:"col-md-6 mt-5 mt-sm-0"},[r("div",{staticClass:"card mt-3 position-relative"},[r("div",{staticClass:"card-body"},[t.message.text?r("div",[r("div",{staticClass:"alert",class:{"alert-success":t.message.success,"alert-danger":!t.message.success},attrs:{role:"alert"}},[t._v("\n                "+t._s(t.message.text)+"\n              ")])]):t._e(),t._v(" "),r("form",{on:{submit:function(e){return e.preventDefault(),t.sendEmail.apply(null,arguments)}}},[r("div",{staticClass:"mb-3"},[r("label",{staticClass:"form-label",attrs:{for:"exampleInputEmail1"}},[t._v("Email address")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.form.address,expression:"form.address"}],staticClass:"form-control",attrs:{type:"email","aria-describedby":"emailHelp",required:""},domProps:{value:t.form.address},on:{input:function(e){e.target.composing||t.$set(t.form,"address",e.target.value)}}}),t._v(" "),r("div",{staticClass:"form-text",attrs:{id:"emailHelp"}},[t._v("\n                  We'll never share your email with anyone else.\n                ")])]),t._v(" "),r("div",{staticClass:"mb-3"},[r("label",{staticClass:"form-label",attrs:{for:"exampleInputEmail1"}},[t._v("Subject")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.form.subject,expression:"form.subject"}],staticClass:"form-control",attrs:{"aria-describedby":"Contact me subject",required:""},domProps:{value:t.form.subject},on:{input:function(e){e.target.composing||t.$set(t.form,"subject",e.target.value)}}})]),t._v(" "),r("div",{staticClass:"mb-3"},[r("label",{staticClass:"form-label",attrs:{for:"exampleInputPassword1"}},[t._v("Message")]),t._v(" "),r("textarea",{directives:[{name:"model",rawName:"v-model",value:t.form.body,expression:"form.body"}],staticClass:"form-control",attrs:{"aria-label":"With textarea",required:""},domProps:{value:t.form.body},on:{input:function(e){e.target.composing||t.$set(t.form,"body",e.target.value)}}})]),t._v(" "),t.loading?r("button",{staticClass:"btn btn-primary",attrs:{type:"button",disabled:""}},[r("span",{staticClass:"spinner-border spinner-border-sm",attrs:{role:"status","aria-hidden":"true"}}),t._v("\n                Loading...\n              ")]):r("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[t._v("\n                Submit\n              ")])])]),t._v(" "),r("span",{staticClass:"mdi color-primary mdi-email position-absolute email-form--icon"})])])]),t._v(" "),r("h2",{staticClass:"mt-5"},[t._v("Office")]),t._v(" "),t._m(1),t._v(" "),r("h2",{staticClass:"mt-5"},[t._v("Shop")]),t._v(" "),t._m(2)])])}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"col-md-6"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-12 mt-3"},[r("div",{staticClass:"card"},[r("div",{staticClass:"card-body d-flex"},[r("div",[r("h4",[t._v("Locations")]),t._v(" "),r("p",[t._v("Office- Hackettstown, NJ")]),t._v(" "),r("p",[t._v("Shop- Bloomfield, CT")])]),t._v(" "),r("div",{staticClass:"ms-auto d-flex justify-content-center align-items-center me-3"},[r("a",{attrs:{href:"https://www.google.com/maps/place/311+Warren+St,+Hackettstown,+NJ+07840/@40.846898,-74.829912,17z/data=!3m1!4b1!4m5!3m4!1s0x89c3839dfdda5597:0x971c732987e6bce6!8m2!3d40.846898!4d-74.827718?hl=en-US"}},[r("span",{staticClass:"mdi color-primary mdi-map-marker fs-1",attrs:{"aria-hidden":"true"}})])])])])]),t._v(" "),r("div",{staticClass:"col-12 mt-3"},[r("div",{staticClass:"card"},[r("div",{staticClass:"card-body d-flex"},[r("div",{staticClass:"d-flex flex-column",attrs:{id:"email-holder"}},[r("h4",[t._v("Emails")])]),t._v(" "),r("div",{staticClass:"ms-auto d-flex justify-content-center align-items-center me-3"},[r("a",{attrs:{id:"email-principal"}},[r("span",{staticClass:"mdi color-primary mdi-email fs-1",attrs:{"aria-hidden":"true"}})])])])])]),t._v(" "),r("div",{staticClass:"col-12 mt-3"},[r("div",{staticClass:"card"},[r("div",{staticClass:"card-body d-flex"},[r("div",[r("h4",[t._v("Phones")]),t._v(" "),r("p",[t._v("Office- (973) 263-5696")]),t._v(" "),r("p",[t._v("Shop- (860) 200-2202")])]),t._v(" "),r("div",{staticClass:"ms-auto d-flex justify-content-center align-items-center me-3"},[r("a",{attrs:{href:"tel:+19732635696"}},[r("span",{staticClass:"mdi color-primary mdi-phone fs-1",attrs:{"aria-hidden":"true"}})])])])])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"map-w3-agileits"},[e("iframe",{attrs:{src:"https://maps.google.com/maps?q=311%20warren%20street%2007840&t=&z=09&ie=UTF8&iwloc=&output=embed",frameborder:"0",scrolling:"no",width:"45%"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"map-w3-agileits"},[e("iframe",{attrs:{src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d354044.0247590097!2d-72.9279555373036!3d41.82688199681568!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e7aaab72c9ec9b%3A0x8eac33b578b0829!2s45%20W%20Dudley%20Town%20Rd%2C%20Bloomfield%2C%20CT%2006002!5e0!3m2!1sen!2sus!4v1646539110508!5m2!1sen!2sus"}})])}],!1,null,null,null);e.default=component.exports}}]);