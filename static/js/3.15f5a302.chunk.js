(this["webpackJsonpultima-labs.com.au"]=this["webpackJsonpultima-labs.com.au"]||[]).push([[3],{50:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return S}));var r=n(1),a=n(5),o=n(3),i=n(2),s=n(0),c=n.n(s),l=n(12);function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function h(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){Object(l.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var m=n(71),f=n.n(m);function p(e,t,n,r,a,o,i){try{var s=e[o](i),c=s.value}catch(l){return void n(l)}s.done?t(c):Promise.resolve(c).then(r,a)}var d=n(16),v=function(e){Object(o.a)(n,e);var t=Object(i.a)(n);function n(e){var a;return Object(r.a)(this,n),(a=t.call(this,e)).onLoad=a.onLoad.bind(Object(d.a)(a)),a}return Object(a.a)(n,[{key:"onLoad",value:function(){var e=document.body.clientWidth<600?"compact":"normal";window.grecaptcha.render("g-recaptcha",{sitekey:"6LfdGcEUAAAAAOEl8TJPkBLwXzwL4JFWdV4z2vmU",theme:"light",size:e,callback:this.props.onValidated})}},{key:"componentDidMount",value:function(){window.captchaOnLoad=this.onLoad;for(var e="https://www.google.com/recaptcha/api.js?onload=captchaOnLoad&render=explicit",t=document.getElementsByTagName("script"),n=0,r=t.length;n<r;++n){var a=t.item(n);if(a&&a.src===e)return void(window.grecaptcha&&this.onLoad())}var o=document.createElement("script");o.type="text/javascript",o.async=!0,o.src=e,document.body.appendChild(o)}},{key:"render",value:function(){return c.a.createElement("div",{id:"g-recaptcha","data-sitekey":"6LfdGcEUAAAAAOEl8TJPkBLwXzwL4JFWdV4z2vmU"})}}]),n}(c.a.Component),y=n(22),g=n.n(y),b=(n(73),function(e){Object(o.a)(n,e);var t=Object(i.a)(n);function n(e){var a;return Object(r.a)(this,n),(a=t.call(this,e)).baseState=void 0,a.state={values:{name:"",email:"",phone:"",subject:"",message:"",token:""},errors:{name:"",email:"",phone:"",subject:"",message:"",token:""},status:"ready"},a.baseState=a.state,a.onToken=a.onToken.bind(Object(d.a)(a)),a.onChange=a.onChange.bind(Object(d.a)(a)),a.onSubmit=a.onSubmit.bind(Object(d.a)(a)),a.onReset=a.onReset.bind(Object(d.a)(a)),a}return Object(a.a)(n,[{key:"onToken",value:function(e){this.setValue("token",e)}},{key:"onChange",value:function(e){var t=e.target.name,n=e.target.value;this.setValue(t,n)}},{key:"onSubmit",value:function(){var e,t=(e=f.a.mark((function e(t){var n,r,a,o;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this.setState({status:"sending"}),e.prev=1,t.preventDefault(),n=Object.values(this.state.errors).filter((function(e){return e.length>0})).length>0,this.state.values.token||(n=!0,this.setError("token",'Please also check "I\'m not a robot" above')),this.state.values.name||(n=!0,this.setError("name","Please tell us your name so that we know how to greet you")),this.state.values.email||(n=!0,this.setError("email","Please tell us your email so that we know how to contact you")),this.state.values.message||(n=!0,this.setError("message","Just a brief message how we can help you")),!n){e.next=12;break}return gtag("event","validation failure",{event_category:"contact",event_label:"failure",value:"value"}),this.setState({status:"ready"}),e.abrupt("return");case 12:return r=window.performance?window.performance.now():0,a={method:"POST",body:this.state.values.message,headers:{"Content-Type":"text/plain","X-From-Name":this.state.values.name,"X-From-Email":this.state.values.email,"X-From-Phone":this.state.values.phone,"X-Subject":this.state.values.subject}},e.next=17,fetch("https://ultima-labs.azure-api.net/ultima-labs.com.au/contact/",a);case 17:o=window.performance?window.performance.now():0,setInterval(this.onReset,5e3),this.setState({status:"sent"}),window.performance&&gtag("event","timing_complete",{name:"Send e-mail",value:o-r,event_category:"contact"}),gtag("event","submission success",{event_category:"contact",event_label:"success",value:"value"}),e.next=30;break;case 24:e.prev=24,e.t0=e.catch(1),console.error(e.t0),gtag("event","submission error",{event_category:"contact",event_label:"failure",value:e.t0.toString()}),setInterval(this.onReset,5e3),this.setState({status:"error"});case 30:case"end":return e.stop()}}),e,this,[[1,24]])})),function(){var t=this,n=arguments;return new Promise((function(r,a){var o=e.apply(t,n);function i(e){p(o,r,a,i,s,"next",e)}function s(e){p(o,r,a,i,s,"throw",e)}i(void 0)}))});return function(e){return t.apply(this,arguments)}}()},{key:"onReset",value:function(){this.setState(this.baseState)}},{key:"setValue",value:function(e,t){this.setState((function(n){return h(h({},n),{},{values:h(h({},n.values),{},Object(l.a)({},e,t)),errors:h(h({},n.errors),{},Object(l.a)({},e,""))})}))}},{key:"setError",value:function(e,t){this.setState((function(n){return h(h({},n),{},{errors:h(h({},n.errors),{},Object(l.a)({},e,t))})}))}},{key:"render",value:function(){var e=c.a.createElement("form",{onSubmit:this.onSubmit},c.a.createElement("div",null,c.a.createElement("label",{className:"required"},"Your name"),c.a.createElement("input",{type:"text",name:"name",value:this.state.values.name,disabled:"ready"!==this.state.status,onChange:this.onChange}),c.a.createElement("span",{className:"form-error"},this.state.errors.name)),c.a.createElement("div",null,c.a.createElement("label",{className:"required"},"Your email"),c.a.createElement("input",{type:"email",name:"email",value:this.state.values.email,disabled:"ready"!==this.state.status,onChange:this.onChange}),c.a.createElement("span",{className:"form-error"},this.state.errors.email)),c.a.createElement("div",null,c.a.createElement("label",null,"Your phone"),c.a.createElement("input",{type:"telephone",name:"phone",value:this.state.values.phone,disabled:"ready"!==this.state.status,onChange:this.onChange}),c.a.createElement("span",{className:"form-error"},this.state.errors.phone)),c.a.createElement("div",null,c.a.createElement("label",null,"Subject"),c.a.createElement("input",{type:"text",name:"subject",value:this.state.values.subject,disabled:"ready"!==this.state.status,onChange:this.onChange}),c.a.createElement("span",{className:"form-error"},this.state.errors.subject)),c.a.createElement("div",null,c.a.createElement("label",{className:"required"},"Message"),c.a.createElement("textarea",{name:"message",value:this.state.values.message,disabled:"ready"!==this.state.status,onChange:this.onChange}),c.a.createElement("span",{className:"form-error"},this.state.errors.message)),c.a.createElement("div",null,c.a.createElement("label",{className:"required-description"},"Fields marked with asterisks are required."),c.a.createElement("label",null,"Personal details collected are used solely to reply you back and will not be stored or passed further to any third parties."),c.a.createElement(v,{onValidated:this.onToken}),c.a.createElement("input",{type:"submit",value:"Send",className:"primary accent",disabled:"ready"!==this.state.status}),c.a.createElement("span",{className:"form-error"},this.state.errors.token))),t=c.a.createElement("div",{id:"contact-widget-sent"},c.a.createElement("img",{src:g.a,alt:"Ultima Labs logo"}),c.a.createElement("p",null,"Thank you for contacting us!",c.a.createElement("br",null),"Your message was sent successfully."),c.a.createElement("p",null,"We will be in touch shortly.")),n=c.a.createElement("div",{id:"contact-widget-error"},c.a.createElement("p",null,"Something went wrong...",c.a.createElement("br",null),"Your message was not sent."),c.a.createElement("p",null,"Please try again later."));return"sent"===this.state.status?t:"error"===this.state.status?n:e}}]),n}(c.a.Component)),w=n(60),E=n.n(w),O=(n(20),function(e){Object(o.a)(n,e);var t=Object(i.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(a.a)(n,[{key:"render",value:function(){var e={backgroundImage:"url("+E.a+")"};return c.a.createElement("section",{className:"intro",style:e},c.a.createElement("h1",null,"Contact us"))}}]),n}(c.a.PureComponent)),j=n(7),k=n(74),L=n.n(k),x=(n(75),function(e){Object(o.a)(n,e);var t=Object(i.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(a.a)(n,[{key:"render",value:function(){return c.a.createElement("svg",{className:"icon icon-".concat(this.props.icon)},c.a.createElement("use",{xlinkHref:"".concat(L.a,"#icn-").concat(this.props.icon)}))}}]),n}(c.a.PureComponent)),S=(n(76),function(e){Object(o.a)(n,e);var t=Object(i.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(a.a)(n,[{key:"render",value:function(){return c.a.createElement("main",{id:"about-us"},c.a.createElement(O,null),c.a.createElement("section",{id:"online"},c.a.createElement("section",{id:"contact"},c.a.createElement("h5",null,"Contact us now"),c.a.createElement("div",null,c.a.createElement(b,null)))),c.a.createElement("section",{id:"conventional"},c.a.createElement("section",{id:"location"},c.a.createElement("h5",null,"Visit us"),c.a.createElement(x,{icon:"location"}),c.a.createElement("address",null,"Level 9, 307 Queen Street",c.a.createElement("br",null),"Brisbane, QLD 4000",c.a.createElement("br",null),"Australia")),c.a.createElement("section",{id:"correspondence"},c.a.createElement("h5",null,"Mail us"),c.a.createElement(x,{icon:"envelope"}),c.a.createElement("address",null,"PO Box 100",c.a.createElement("br",null),"Ferny Hills DC, QLD 4055",c.a.createElement("br",null),"Australia")),c.a.createElement("section",{id:"social"},c.a.createElement("h5",null,"Follow us"),c.a.createElement(j.a,{href:"https://twitter.com/ultimalabs",target:j.c.Blank},c.a.createElement(x,{icon:"twitter"})),c.a.createElement(j.a,{href:"https://www.facebook.com/ultimalabs",target:j.c.Blank},c.a.createElement(x,{icon:"facebook"})),c.a.createElement(j.a,{href:"https://www.instagram.com/ultimalabs",target:j.c.Blank},c.a.createElement(x,{icon:"instagram"})),c.a.createElement(j.a,{href:"https://www.linkedin.com/company/ultima-labs",target:j.c.Blank},c.a.createElement(x,{icon:"linkedin"})),c.a.createElement(j.a,{href:"https://github.com/ultima-labs",target:j.c.Blank},c.a.createElement(x,{icon:"github"})))))}}]),n}(c.a.PureComponent))},60:function(e,t,n){e.exports=n.p+"static/media/jumbo-contact.36002a26.jpg"},71:function(e,t,n){e.exports=n(72)},72:function(e,t,n){var r=function(e){"use strict";var t=Object.prototype,n=t.hasOwnProperty,r="function"===typeof Symbol?Symbol:{},a=r.iterator||"@@iterator",o=r.asyncIterator||"@@asyncIterator",i=r.toStringTag||"@@toStringTag";function s(e,t,n,r){var a=t&&t.prototype instanceof u?t:u,o=Object.create(a.prototype),i=new O(r||[]);return o._invoke=function(e,t,n){var r="suspendedStart";return function(a,o){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===a)throw o;return k()}for(n.method=a,n.arg=o;;){var i=n.delegate;if(i){var s=b(i,n);if(s){if(s===l)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var u=c(e,t,n);if("normal"===u.type){if(r=n.done?"completed":"suspendedYield",u.arg===l)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(r="completed",n.method="throw",n.arg=u.arg)}}}(e,n,i),o}function c(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(r){return{type:"throw",arg:r}}}e.wrap=s;var l={};function u(){}function h(){}function m(){}var f={};f[a]=function(){return this};var p=Object.getPrototypeOf,d=p&&p(p(j([])));d&&d!==t&&n.call(d,a)&&(f=d);var v=m.prototype=u.prototype=Object.create(f);function y(e){["next","throw","return"].forEach((function(t){e[t]=function(e){return this._invoke(t,e)}}))}function g(e,t){var r;this._invoke=function(a,o){function i(){return new t((function(r,i){!function r(a,o,i,s){var l=c(e[a],e,o);if("throw"!==l.type){var u=l.arg,h=u.value;return h&&"object"===typeof h&&n.call(h,"__await")?t.resolve(h.__await).then((function(e){r("next",e,i,s)}),(function(e){r("throw",e,i,s)})):t.resolve(h).then((function(e){u.value=e,i(u)}),(function(e){return r("throw",e,i,s)}))}s(l.arg)}(a,o,r,i)}))}return r=r?r.then(i,i):i()}}function b(e,t){var n=e.iterator[t.method];if(void 0===n){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,b(e,t),"throw"===t.method))return l;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return l}var r=c(n,e.iterator,t.arg);if("throw"===r.type)return t.method="throw",t.arg=r.arg,t.delegate=null,l;var a=r.arg;return a?a.done?(t[e.resultName]=a.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,l):a:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,l)}function w(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function E(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function O(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(w,this),this.reset(!0)}function j(e){if(e){var t=e[a];if(t)return t.call(e);if("function"===typeof e.next)return e;if(!isNaN(e.length)){var r=-1,o=function t(){for(;++r<e.length;)if(n.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=void 0,t.done=!0,t};return o.next=o}}return{next:k}}function k(){return{value:void 0,done:!0}}return h.prototype=v.constructor=m,m.constructor=h,m[i]=h.displayName="GeneratorFunction",e.isGeneratorFunction=function(e){var t="function"===typeof e&&e.constructor;return!!t&&(t===h||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,m):(e.__proto__=m,i in e||(e[i]="GeneratorFunction")),e.prototype=Object.create(v),e},e.awrap=function(e){return{__await:e}},y(g.prototype),g.prototype[o]=function(){return this},e.AsyncIterator=g,e.async=function(t,n,r,a,o){void 0===o&&(o=Promise);var i=new g(s(t,n,r,a),o);return e.isGeneratorFunction(n)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},y(v),v[i]="Generator",v[a]=function(){return this},v.toString=function(){return"[object Generator]"},e.keys=function(e){var t=[];for(var n in e)t.push(n);return t.reverse(),function n(){for(;t.length;){var r=t.pop();if(r in e)return n.value=r,n.done=!1,n}return n.done=!0,n}},e.values=j,O.prototype={constructor:O,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(E),!e)for(var t in this)"t"===t.charAt(0)&&n.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function r(n,r){return i.type="throw",i.arg=e,t.next=n,r&&(t.method="next",t.arg=void 0),!!r}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],i=o.completion;if("root"===o.tryLoc)return r("end");if(o.tryLoc<=this.prev){var s=n.call(o,"catchLoc"),c=n.call(o,"finallyLoc");if(s&&c){if(this.prev<o.catchLoc)return r(o.catchLoc,!0);if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else if(s){if(this.prev<o.catchLoc)return r(o.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return r(o.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var a=this.tryEntries[r];if(a.tryLoc<=this.prev&&n.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=e,i.arg=t,o?(this.method="next",this.next=o.finallyLoc,l):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),l},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),E(n),l}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var a=r.arg;E(n)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:j(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=void 0),l}},e}(e.exports);try{regeneratorRuntime=r}catch(a){Function("r","regeneratorRuntime = r")(r)}},73:function(e,t,n){},74:function(e,t,n){e.exports=n.p+"static/media/site.a9420a6d.svg"},75:function(e,t,n){},76:function(e,t,n){}}]);
//# sourceMappingURL=3.15f5a302.chunk.js.map