(this["webpackJsonpfoto-favorieten-app"]=this["webpackJsonpfoto-favorieten-app"]||[]).push([[0],{15:function(e,t,a){},19:function(e,t,a){},28:function(e,t,a){},29:function(e,t,a){},39:function(e,t,a){e.exports=a(71)},70:function(e,t,a){},71:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(30),l=a.n(c),o=(a(19),a(31)),i=a(32),u=a(36),m=a(38),s=a(3),f=a(33),E=a.n(f),h=Object(n.createContext)(),v=function(e){var t=Object(n.useState)([]),a=Object(s.a)(t,2),c=a[0],l=a[1];return r.a.createElement(h.Provider,{value:{images:c,runSearch:function(e){E.a.get("https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=".concat("636e1481b4f3c446d26b8eb6ebfe7127","&tags=").concat(e,"&per_page=24&format=json&nojsoncallback=1")).then((function(e){l(e.data.photos.photo)})).catch((function(e){console.log("Error",e)}))}}},e.children)},d=a(7),b=a(8),p=function(e){var t=e.handleSubmit,a=e.history,c=Object(n.useState)(""),l=Object(s.a)(c,2),o=l[0],i=l[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement("form",{className:"search-form",onSubmit:function(e){return t(e,a,o)},onClick:function(e){return t(e,a,o)}},r.a.createElement("input",{type:"text",name:"search",onChange:function(e){e.preventDefault(),i(e.target.value)},placeholder:"Voer hier uw zoekwoord in",value:o}),r.a.createElement("button",{type:"submit"})))},g=(a(28),function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("nav",{className:"main-nav"},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(d.b,{to:"/strand"},"strand")),r.a.createElement("li",null,r.a.createElement(d.b,{to:"/lente"},"lente")),r.a.createElement("li",null,r.a.createElement(d.b,{to:"/zomer"},"zomer")),r.a.createElement("li",null,r.a.createElement(d.b,{to:"/herfst"},"herfst")),r.a.createElement("li",null,r.a.createElement(d.b,{to:"/winter"},"winter")))))}),O=function(e){var t=e.history,a=e.handleSubmit,n=e.searchTerm;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,r.a.createElement(g,null),r.a.createElement(p,{history:t,handleSubmit:a,searchTerm:n})))},j=a(37),S=a(13),N=(a(70),a(15),function(e){var t=e.title,a=e.source,n=e.closeModal;return r.a.createElement("div",null,r.a.createElement("section",{onClick:function(){return n()},className:"modal-overlay section section-center"},r.a.createElement("div",{className:"modal-container"},r.a.createElement("img",{src:a,alt:t,title:t,className:"img modal-img"}),r.a.createElement("h3",{className:"color"},t))))}),w=function(e){var t=e.url,a=e.title,c=Object(n.useState)(!1),l=Object(s.a)(c,2),o=l[0],i=l[1],u=Object(n.useState)(null),m=Object(s.a)(u,2),f=m[0],E=m[1],h=Object(n.useRef)(),v=Object(n.useState)(function(){var e=JSON.parse(localStorage.getItem("favorites"));return e=e?JSON.parse(localStorage.getItem("favorites")):[]}()),d=Object(s.a)(v,2),b=d[0],p=d[1],g=function(e,t){var a={title:t,url:e};if(!b.map((function(e){return e.title})).includes(a.title)){var n=[].concat(Object(j.a)(b),[a]);p(n),localStorage.setItem("favorites",JSON.stringify(n)),window.location.assign(window.location.href="/foto-favorieten-app/")}};return r.a.createElement(r.a.Fragment,null,r.a.createElement("li",null,r.a.createElement("img",{className:"image",src:t,alt:a,favorites:b,style:{marginBottom:"20px"},id:h,selectedimage:f,onClick:function(){return function(e){var t=e;t&&(t=b.find((function(t){return t.url===e}))),E(t),i(!0)}(t)}}),r.a.createElement("button",{id:"button",className:"like-btn",onClick:function(){return g(t,a)}},r.a.createElement(S.a,null))),r.a.createElement("div",null,o&&r.a.createElement(N,{source:t,title:a,closeModal:function(){i(!1)}})))},k=function(e){var t,a,n=e.data;return n.length>0?t=n.map((function(e){var t=e.farm,a=e.server,n=e.id,c=e.secret,l=e.title,o="https://farm".concat(t,".staticflickr.com/").concat(a,"/").concat(n,"_").concat(c,"_m.jpg");return r.a.createElement(w,{url:o,key:n,alt:l,title:l})})):a=r.a.createElement(b.a,{to:window.location.pathname}),r.a.createElement("div",null,r.a.createElement("ul",null,t)," ",a)},y=function(e){var t=e.searchTerm,a=Object(n.useContext)(h),c=a.images,l=a.runSearch;return Object(n.useEffect)((function(){l(t)}),[t]),r.a.createElement("div",{className:"photo-container"},r.a.createElement("h1",{className:"search-term"},t),r.a.createElement(k,{data:c}))},T=function(e){var t=e.searchTerm;return r.a.createElement("div",null,r.a.createElement(y,{searchTerm:t}))},C=function(e){var t=e.searchTerm;return r.a.createElement("div",null,r.a.createElement(y,{searchTerm:t}))},I=(a(29),a(73)),J=function(){var e=Object(n.useState)(!1),t=Object(s.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(null),o=Object(s.a)(l,2),i=o[0],u=o[1],m=Object(n.useState)(null),f=Object(s.a)(m,2),E=f[0],h=f[1],v=Object(n.useState)(function(){var e=JSON.parse(localStorage.getItem("favorites"));return e=e?JSON.parse(localStorage.getItem("favorites")):[]}()),d=Object(s.a)(v,2),b=d[0],p=d[1],g=function(e){e&&h(e)};return r.a.createElement("section",{className:"favorites"},r.a.createElement("div",{className:"favorites-content"},r.a.createElement("div",{className:"favorites-container"},b.map((function(e){var t=e.title,a=e.url;return r.a.createElement("div",{key:Object(I.a)(),className:"favorite-item"},r.a.createElement("img",{src:e.url,alt:e.title,className:"favorites-img img",onClick:function(){return function(e,t){var a=t,n=e;a&&(c(!0),u(a),g(n))}(t,a)}}),r.a.createElement("button",{className:"remove-btn",onClick:function(){return function(e){var t=b.filter((function(t){return t!==e}));p(t),localStorage.setItem("favorites",JSON.stringify(t))}(e)}},r.a.createElement(S.b,null)),console.log())}))),a&&r.a.createElement(N,{source:i,title:E,closeModal:function(){c(!1)}})))},F=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("section",{id:"header-title",onMouseOver:function(){return window.location.assign(window.location.href="/foto-favorieten-app/")},className:"header-title"},r.a.createElement("h2",null,"Favorieten")))},x=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).handleSubmit=function(e,t,a){e.preventDefault(),e.currentTarget.reset();var n="/search/".concat(a);t.push(n)},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement(v,null,r.a.createElement(d.a,{className:"hash-router",basename:"/"},r.a.createElement("div",{className:"container"},r.a.createElement(F,null),r.a.createElement(b.b,{exact:!0,path:"/",render:function(){return r.a.createElement("div",null,r.a.createElement(J,null),r.a.createElement(b.a,{to:"/"}))}}),r.a.createElement(b.b,{render:function(t){return r.a.createElement("div",null,r.a.createElement(O,{handleSubmit:e.handleSubmit,history:t.history}))}}),r.a.createElement(b.d,null,r.a.createElement(b.b,{path:"/strand",render:function(){return r.a.createElement(T,{searchTerm:"strand"})}}),r.a.createElement(b.b,{path:"/lente",render:function(){return r.a.createElement(T,{searchTerm:"lente"})}}),r.a.createElement(b.b,{path:"/zomer",render:function(){return r.a.createElement(T,{searchTerm:"zomer"})}}),r.a.createElement(b.b,{path:"/herfst",render:function(){return r.a.createElement(T,{searchTerm:"herfst"})}}),r.a.createElement(b.b,{path:"/winter",render:function(){return r.a.createElement(T,{searchTerm:"winter"})}}),r.a.createElement(b.b,{path:"/search/:searchInput",render:function(e){return r.a.createElement(C,{searchTerm:e.match.params.searchInput})}}))))))}}]),a}(n.Component);l.a.render(r.a.createElement(x,null),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.cb5b1238.chunk.js.map