(this["webpackJsonpmy-app-tsc"]=this["webpackJsonpmy-app-tsc"]||[]).push([[5],{53:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return D}));var a=n(1),r=n(5),c=n(3),l=n(2),i=n(0),o=n.n(i),u=n(16),s=(n(74),function(e){Object(c.a)(n,e);var t=Object(l.a)(n);function n(e){var r;return Object(a.a)(this,n),(r=t.call(this,e)).interval=void 0,r.state={index:3},r.switchTo=r.switchTo.bind(Object(u.a)(r)),r}return Object(r.a)(n,[{key:"componentDidMount",value:function(){this.setInterval()}},{key:"componentWillUnmount",value:function(){this.clearInterval()}},{key:"switchSlide",value:function(){if(this.props.children&&this.state){var e=o.a.Children.count(this.props.children),t=this.state.index<e-1?this.state.index+1:0;this.setState({index:t})}}},{key:"switchTo",value:function(e){this.clearInterval(),this.setInterval(),this.setState({index:e})}},{key:"setInterval",value:function(e){function t(){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}((function(){var e=this;this.interval=setInterval((function(){return e.switchSlide()}),5e3)}))},{key:"clearInterval",value:function(e){function t(){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}((function(){clearInterval(this.interval)}))},{key:"render",value:function(){var e=this,t=this.state?this.state.index:0,n=o.a.Children.map(this.props.children,(function(e,n){return n===t&&e})),a=o.a.Children.map(this.props.children,(function(n,a){return a===t?o.a.createElement("button",{className:"jumbotron-switch selected",onClick:function(){return e.switchTo(a)}}):o.a.createElement("button",{className:"jumbotron-switch",onClick:function(){return e.switchTo(a)}})}));return o.a.createElement("div",{className:"jumbotron"},n,o.a.createElement("div",{className:"jumbotron-picker-position"},o.a.createElement("div",{className:"jumbotron-picker-container"},a)))}}]),n}(o.a.Component)),m=(n(75),function(e){Object(c.a)(n,e);var t=Object(l.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){var e={backgroundImage:"url("+this.props.backgroundImg+")"};return o.a.createElement("div",{className:"jumbotron-slide",style:e},this.props.children)}}]),n}(o.a.Component)),p=n(7),h=n(4),d=(n(20),function(e){Object(c.a)(n,e);var t=Object(l.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){return o.a.createElement("section",{className:"slide"},o.a.createElement("h1",null,"Engineering"),o.a.createElement("p",null,"We have been helping engineer software for decades."),o.a.createElement("p",null,"We help governments, organisations and start-ups build custom software solutions for desktop, web, cloud and mobile."),o.a.createElement("p",null,o.a.createElement(p.b,{routeID:h.a.ROUTE_ID_ENGINEERING},"Read more")),o.a.createElement("div",null,o.a.createElement(p.b,{routeID:h.a.ROUTE_ID_CONTACT,type:"primary accent button"})))}}]),n}(o.a.PureComponent)),b=function(e){Object(c.a)(n,e);var t=Object(l.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){return o.a.createElement("section",{className:"slide"},o.a.createElement("h1",null,"Improvement"),o.a.createElement("p",null,"Technology evolves rapidly. What has worked for many years may no longer reflect today's realities."),o.a.createElement("p",null,"We believe in a better software every day."),o.a.createElement("p",null,o.a.createElement(p.b,{routeID:h.a.ROUTE_ID_IMPROVEMENT},"Read more")),o.a.createElement("div",null,o.a.createElement(p.b,{routeID:h.a.ROUTE_ID_CONTACT,type:"primary accent button"})))}}]),n}(o.a.PureComponent),E=function(e){Object(c.a)(n,e);var t=Object(l.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){return o.a.createElement("section",{className:"slide"},o.a.createElement("h1",null,"Consultancy"),o.a.createElement("p",null,"Keep up with a pace of change."),o.a.createElement("p",null,"Let professional consultants help you."),o.a.createElement("p",null,o.a.createElement(p.b,{routeID:h.a.ROUTE_ID_CONSULTANCY},"Read more")),o.a.createElement("div",null,o.a.createElement(p.b,{routeID:h.a.ROUTE_ID_CONTACT,type:"primary accent button"})))}}]),n}(o.a.PureComponent),f=function(e){Object(c.a)(n,e);var t=Object(l.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){return o.a.createElement("section",{className:"slide"},o.a.createElement("h1",null,"Recruitment"),o.a.createElement("p",null,"IT professionals are in high demand."),o.a.createElement("p",null,"We know the market. We know the people."),o.a.createElement("p",null,o.a.createElement(p.b,{routeID:h.a.ROUTE_ID_RECRUITMENT},"Read more")),o.a.createElement("div",null,o.a.createElement(p.b,{routeID:h.a.ROUTE_ID_CONTACT,type:"primary accent button"})))}}]),n}(o.a.PureComponent),v=function(e){Object(c.a)(n,e);var t=Object(l.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){return o.a.createElement("section",{className:"slide"},o.a.createElement("h1",null,"Contact us"),o.a.createElement("p",null,"We're closer than you think."),o.a.createElement("p",null,"Talk to us about your needs and how we can help your business grow."),o.a.createElement("div",null,o.a.createElement(p.b,{routeID:h.a.ROUTE_ID_CONTACT,type:"primary accent button"})))}}]),n}(o.a.PureComponent),y=n(56),j=n.n(y),O=n(57),g=n.n(O),I=n(58),k=n.n(I),T=n(59),C=n.n(T),N=n(60),w=n.n(N),D=function(e){Object(c.a)(n,e);var t=Object(l.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(r.a)(n,[{key:"componentDidMount",value:function(){for(var e=[j.a,g.a,k.a,C.a,w.a],t=document.getElementsByTagName("link"),n=function(n,a){var r=t.item(n);r&&(e=e.filter((function(e){return!r.href.endsWith(e)})))},a=0,r=t.length;a<r;++a)n(a);e&&e.forEach((function(e){var t=document.createElement("link");t.href=e,t.rel="preload",t.as="image",document.head.appendChild(t)}))}},{key:"render",value:function(){return o.a.createElement("main",null,o.a.createElement("section",{className:"jumbo"},o.a.createElement(s,null,o.a.createElement(m,{backgroundImg:j.a},o.a.createElement(d,null)),o.a.createElement(m,{backgroundImg:g.a},o.a.createElement(b,null)),o.a.createElement(m,{backgroundImg:k.a},o.a.createElement(E,null)),o.a.createElement(m,{backgroundImg:C.a},o.a.createElement(f,null)),o.a.createElement(m,{backgroundImg:w.a},o.a.createElement(v,null)))))}}]),n}(o.a.Component)},56:function(e,t,n){e.exports=n.p+"static/media/jumbo-engineering.5c98be31.jpg"},57:function(e,t,n){e.exports=n.p+"static/media/jumbo-improvement.fc41d06f.jpg"},58:function(e,t,n){e.exports=n.p+"static/media/jumbo-consultancy.02848e14.jpg"},59:function(e,t,n){e.exports=n.p+"static/media/jumbo-recruitment.316590e5.jpg"},60:function(e,t,n){e.exports=n.p+"static/media/jumbo-contact.36002a26.jpg"},74:function(e,t,n){},75:function(e,t,n){}}]);
//# sourceMappingURL=5.aa335301.chunk.js.map