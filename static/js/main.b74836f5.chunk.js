(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{41:function(e,n,t){e.exports=t(54)},52:function(e,n,t){},54:function(e,n,t){"use strict";t.r(n);var r=t(2),a=t.n(r),i=t(30),l=t.n(i),o=t(5),c=t(6),u=t(23),s=t(15),d=t(39),f=t(21);function m(){var e=Object(o.a)(["\n  query getSearchResults($query: String!, $entities: [SearchEntity]) {\n    search(query: $query, first: 5, entities: $entities) {\n      edges {\n        node {\n          displayLabel\n          imageUrl\n          href\n        }\n      }\n      pageInfo {\n        endCursor\n        hasNextPage\n      }\n    }\n  }\n"]);return m=function(){return e},e}var g=new f.a({uri:"https://metaphysics-production.artsy.net"}),h=Object(f.b)(m());function p(){var e=Object(o.a)(["\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n  color: inherit;\n  fill: currentColor;\n"]);return p=function(){return e},e}function b(){var e=Object(o.a)(["\n  display: inline-block;\n  vertical-align: middle;\n  min-width: ","px;\n  min-height: ","px;\n  position: relative;\n  color: inherit;\n  margin: ","rem;\n  &:hover {\n    cursor: ",";\n  }\n"]);return b=function(){return e},e}var v=c.a.span(b(),function(e){return e.size},function(e){return e.size},function(e){return e.margin},function(e){return e.clear?"pointer":"default"}),C=c.a.svg(p()),E=function(e){var n=e.children,t=e.onClick,r=e.clear,i=e.size,l=e.margin;return a.a.createElement(v,{onClick:t,clear:r,size:i,margin:l},a.a.createElement(C,{fillRule:"evenodd",clipRule:"evenodd",strokeLinejoin:"round",strokeMiterlimit:"1.414",xmlns:"http://www.w3.org/2000/svg",role:"presentation",focusable:"false",viewBox:"0 0 32 32",preserveAspectRatio:"xMidYMid meet",fit:!0},n))};function y(){var e=Object(o.a)(["\n  scroll-snap-align: start;\n"]);return y=function(){return e},e}function k(){var e=Object(o.a)(["\n  display: grid;\n  grid-gap: 1rem;\n  grid-template-columns: repeat(",', 1fr);\n  scroll-snap-type: x mandatory;\n  scroll-behavior: smooth;\n  overflow-x: scroll;\n  border-radius: 8px;\n  &::-webkit-scrollbar {\n    display: none; // Chrome\n  }\n  -ms-overflow-style: none;\n  scrollbar-width: none;\n\n  &:after {\n    content: "";\n    position: absolute;\n    z-index: 1;\n    top: 0;\n    right: 15px;\n    bottom: 484px;\n    transform: translateY(84px);\n    transition: transform 150ms, opacity 150ms\n    pointer-events: none;\n    background-image: linear-gradient(to right, rgba(255,255,255,0), white 90%);\n    width: 10%;\n  }\n']);return k=function(){return e},e}function w(){var e=Object(o.a)(["\n  color: black;\n  border-radius: 8px;\n  background: #f5f5f6;\n  font-size: inherit;\n  padding: 1rem;\n  text-align: center;\n  outline: none;\n  width: max-content;\n  height: 100%;\n  background-image: linear-gradient(\n    rgba(255, 255, 255, 0.24),\n    rgba(255, 255, 255, 0)\n  );\n\n  &:focus {\n    color: white;\n    background-color: rgb(0, 182, 240);\n    text-shadow: 1px 0px 0px white;\n    transition: text-shadow 0.1s;\n  }\n"]);return w=function(){return e},e}var x=[{entity:"ARTIST",title:"Artists"},{entity:"ARTWORK",title:"Artworks"},{entity:"ARTICLE",title:"Articles"},{entity:"CITY",title:"Cities"},{entity:"COLLECTION",title:"Collections"},{entity:"FAIR",title:"Fairs"},{entity:"FEATURE",title:"Features"},{entity:"GALLERY",title:"Galleries"},{entity:"GENE",title:"Genes"},{entity:"INSTITUTION",title:"Institutions"},{entity:"PROFILE",title:"Profiles"},{entity:"SALE",title:"Sales"},{entity:"SHOW",title:"Shows"},{entity:"TAG",title:"Tags"}],L=c.a.button(w()),O=c.a.div(k(),function(e){return e.items}),j=c.a.div(y()),S=function(e){var n=e.selectedFilter,t=Object(r.useRef)();return Object(r.useEffect)(function(){var e=t.current.children.length-1,n=0,r=function(){t.current.scrollTo(75*n,0)};t.current.addEventListener("wheel",function(t){var a=t.deltaX%1===0&&t.deltaY%1===0,i=0===t.deltaX&&t.deltaY>4,l=0===t.deltaX&&t.deltaY<4;a||(i&&(r(),++n>e&&(n=e)),l&&(r(),--n<0&&(n=0)))})},[t]),a.a.createElement(a.a.Fragment,null,a.a.createElement(O,{items:x.length,ref:t},x.map(function(e,t){var r=e.entity,i=e.title;return a.a.createElement(j,{key:t},a.a.createElement(L,{onClick:n,value:r,title:i},i))})))},R=function(){return a.a.createElement("g",{id:"Search",stroke:"none",strokeWidth:"1",fill:"none",fillRule:"evenodd"},a.a.createElement("path",{d:"M24.0636237,21.2351965 L27.4142136,24.5857864 C28.1952621,25.366835 28.1952621,26.633165 27.4142136,27.4142136 C26.633165,28.1952621 25.366835,28.1952621 24.5857864,27.4142136 L21.2351965,24.0636237 C19.4631372,25.2849471 17.3151443,26 15,26 C8.9244305,26 4,21.0755695 4,15 C4,8.9244305 8.9244305,4 15,4 C21.0755695,4 26,8.9244305 26,15 C26,17.3151443 25.2849471,19.4631372 24.0636237,21.2351965 Z M22,15 C22,11.1335695 18.8664305,8 15,8 C11.1335695,8 8,11.1335695 8,15 C8,18.8664305 11.1335695,22 15,22 C18.8664305,22 22,18.8664305 22,15 Z",id:"Mask",fill:"currentColor"}))},A=function(){return a.a.createElement("g",{id:"Search",stroke:"none",strokeWidth:"1",fill:"none",fillRule:"evenodd"},a.a.createElement("path",{d:"M27,16 C27,22.0751429 22.0751429,27 16,27 C9.92485714,27 5,22.0751429 5,16 C5,9.92485714 9.92485714,5 16,5 C22.0751429,5 27,9.92485714 27,16 Z",id:"Stroke-1",stroke:"#000000",strokeWidth:"4",opacity:"0.399999976"}),a.a.createElement("path",{d:"M15.99945,5 C18.8146643,5 21.6298786,6.07407143 23.7780214,8.22221429",id:"Stroke-3",stroke:"#000000",strokeWidth:"4"}))},M=function(){return a.a.createElement("g",{id:"Search",stroke:"none",strokeWidth:"1",fill:"none",fillRule:"evenodd"},a.a.createElement("path",{d:"M26,24 L6,24 C4.897,24 4,23.103 4,22 L4,19.278 L9.334,15.193 C9.698,14.915 10.172,14.94 10.513,15.252 L15.229,19.586 C16.223,20.5 17.648,20.629 18.777,19.901 L21.417,18.204 C21.747,17.991 22.146,18.01 22.459,18.251 L27.944,22.451 C27.738,23.337 26.947,24 26,24 M23,10 C24.105,10 25,10.895 25,12 C25,13.105 24.105,14 23,14 C21.895,14 21,13.105 21,12 C21,10.895 21.895,10 23,10 M26,6 L6,6 C3.791,6 2,7.791 2,10 L2,22 C2,24.209 3.791,26 6,26 L26,26 C28.209,26 30,24.209 30,22 L30,10 C30,7.791 28.209,6 26,6",id:"Mask",fill:"currentColor"}))},T=function(){return a.a.createElement("g",{id:"Search",stroke:"none",strokeWidth:"1",fill:"none",fillRule:"evenodd"},a.a.createElement("path",{d:"M21.9067049,19.3298571 C22.6259342,20.0550714 22.6259342,21.2306429 21.9067049,21.9558571 C21.5466298,22.3189286 21.0760458,22.5 20.6045408,22.5 C20.1330358,22.5 19.6615308,22.3189286 19.3023767,21.9558571 L16,18.626 L12.6976233,21.9558571 C12.3375483,22.3189286 11.8669642,22.5 11.3954592,22.5 C10.9239542,22.5 10.4524493,22.3189286 10.0932951,21.9558571 C9.37406581,21.2306429 9.37406581,20.0550714 10.0932951,19.3298571 L13.3956717,16 L10.0932951,12.6701429 C9.37406581,11.9449286 9.37406581,10.7693571 10.0932951,10.0441429 C10.8125244,9.31892857 11.9783941,9.31892857 12.6976233,10.0441429 L16,13.374 L19.3023767,10.0441429 C20.0216059,9.31892857 21.1874756,9.31892857 21.9067049,10.0441429 C22.6259342,10.7693571 22.6259342,11.9449286 21.9067049,12.6701429 L18.6043283,16 L21.9067049,19.3298571 Z M27.6780363,10.3951429 C25.1961889,5.46535714 20.5980944,3 16,3 C11.4019056,3 6.80381114,5.46535714 4.32196366,10.3951429 C2.55934545,13.8967857 2.55934545,18.1032143 4.32196366,21.6057857 C6.80381114,26.5355714 11.4019056,29 16,29 C20.5980944,29 25.1961889,26.5346429 27.6780363,21.6048571 C29.4406546,18.1032143 29.4406546,13.8967857 27.6780363,10.3951429 L27.6780363,10.3951429 Z",id:"Mask",fill:"#99a1a3"}))};function I(){var e=Object(o.a)(["\n  color: black;\n  &:hover {\n    color: darkblue;\n  }\n"]);return I=function(){return e},e}function z(){var e=Object(o.a)(["\n  grid-area: image;\n  display: grid;\n  color: #99a1a3;\n  justify-content: center;\n  align-items: center;\n  width: 56px;\n  height: 56px;\n  border-radius: 50%;\n  background-color: #f3f3f5;\n  justify-content: center;\n  align-items: center;\n"]);return z=function(){return e},e}function F(){var e=Object(o.a)(["\n  grid-area: image;\n  width: 56px;\n  height: 56px;\n  border-radius: 50%;\n"]);return F=function(){return e},e}function W(){var e=Object(o.a)(["\n  grid-area: body;\n  margin-left: 1rem;\n  color: #99a1a3;\n"]);return W=function(){return e},e}function Y(){var e=Object(o.a)(["\n  grid-area: header;\n  margin-left: 1rem;\n"]);return Y=function(){return e},e}function U(){var e=Object(o.a)(['\n  display: grid;\n  grid-template-rows: 50% 50%;\n  grid-template-columns: 1fr;\n  grid-template-areas:\n    "header image"\n    "body image";\n']);return U=function(){return e},e}var q=c.a.div(U()),G=c.a.span(Y()),N=c.a.span(W()),Z=c.a.img(F()),$=c.a.div(z()),P=c.a.a(I()),X=function(e){var n=e.displayLabel,t=e.imageUrl,r=e.entity,i=e.href;return a.a.createElement(a.a.Fragment,null,a.a.createElement(P,{href:"https://artsy.net"+i},a.a.createElement(q,null,a.a.createElement(G,null,n),a.a.createElement(N,null,r),t?a.a.createElement(Z,{src:t}):a.a.createElement($,null,a.a.createElement(E,{size:"32"},a.a.createElement(M,null))))))};function B(){var e=Object(o.a)(["\n  animation: "," 1s ease-in-out infinite;\n"]);return B=function(){return e},e}function J(){var e=Object(o.a)(["\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n"]);return J=function(){return e},e}function D(){var e=Object(o.a)(["\n  background-color: inherit;\n  width: 100%;\n  height: 3.5rem;\n  font-size: inherit;\n  outline: none;\n"]);return D=function(){return e},e}function H(){var e=Object(o.a)(["\n  display: flex;\n  border-radius: 8px;\n  padding: 4px;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n  background-color: #f5f5f6;\n  color: #99a1a3;\n  &:focus-within {\n    outline: none;\n    background-color: white;\n    box-shadow: 0px 4px 10px 1px rgba(215, 219, 220, 1);\n    transition: box-shadow 0.1s ease-in-out;\n    color: black;\n  }\n"]);return H=function(){return e},e}var K=c.a.div(H()),Q=c.a.input(D()),V=Object(s.b)(J()),_=c.a.div(B(),V),ee=function(){var e=["ARTICLE"],n=Object(r.useState)(""),t=Object(u.a)(n,2),i=t[0],l=t[1],o=Object(r.useState)(e),c=Object(u.a)(o,2),s=c[0],f=c[1],m=Object(r.useState)("Articles"),p=Object(u.a)(m,2),b=p[0],v=p[1],C=function(e,n){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"...";return e.length>n?e.slice(0,n-t.length)+t:e},y=Object(d.a)(h,{variables:{query:i,entities:s},client:g}),k=y.loading,w=y.error,x=y.data;return a.a.createElement(a.a.Fragment,null,a.a.createElement(K,null,a.a.createElement(E,{size:"26",margin:"0.8"},a.a.createElement(R,null)),a.a.createElement(Q,{onChange:function(e){e.preventDefault(),l(e.target.value)},placeholder:"Search by artist, gallery, style, theme, tag, etc.",value:i}),i&&k?a.a.createElement(_,null,a.a.createElement(E,{size:"26",margin:"0.6"},a.a.createElement(A,null))):"",i&&!k?a.a.createElement(E,{onClick:function(n){n&&(l(""),f(e),v("Articles"))},clear:!0,size:"26",margin:"0.6"},a.a.createElement(T,null)):""),i&&x?a.a.createElement(S,{selectedFilter:function(e){f(e.target.value),v(e.target.title)}}):"",i&&x&&!k?x.search.edges.map(function(e,n){var t=e.node,r=t.displayLabel,i=t.imageUrl,l=t.href;return a.a.createElement(X,{displayLabel:C(r,40),imageUrl:i,href:l,entity:b,key:n})}):a.a.createElement("h1",null,w))};function ne(){var e=Object(o.a)(["\n  display: grid;\n  grid-gap: 1.5rem;\n  position: relative;\n  padding-left: 1rem;\n  padding-right: 1rem;\n  max-width: 35rem;\n  margin: 2rem auto;\n"]);return ne=function(){return e},e}var te=c.a.div(ne()),re=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(te,null,a.a.createElement(ee,null)))};t(52);l.a.render(a.a.createElement(re,null),document.getElementById("root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.b74836f5.chunk.js.map