(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{44:function(e,t,n){e.exports=n.p+"static/media/header-img.649e9fa6.png"},45:function(e,t,n){e.exports=n(93)},50:function(e,t,n){},93:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),l=n(10),c=n.n(l),o=(n(50),n(3)),i=n(7),s=n.n(i),u=n(11),d=n(8),f=n(42),m=n(22),p=n.n(m),v=function e(){Object(f.a)(this,e)};v.buildJsonTree=function(e){return new Promise(function(){var t=Object(u.a)(s.a.mark((function t(n,a){return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,p.a.post("".concat("","/api/bjs"),JSON.stringify({expression:e}),{headers:{"Content-Type":"application/json"}}).then(n).catch(a);case 2:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}())},v.imgToText=function(e){return new Promise(function(){var t=Object(u.a)(s.a.mark((function t(n,a){return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,p.a.post("".concat("","/api/tfi"),JSON.stringify({encodedImage:e}),{headers:{"Content-Type":"application/json"}}).then(n).catch(a);case 2:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}())};var h=n(43),E=n.n(h),b=function(e){var t=Object(a.useState)(e.jsonTree),n=Object(d.a)(t,2),l=n[0],c=n[1];return Object(a.useEffect)((function(){return c(e.jsonTree)}),[e.jsonTree]),r.a.createElement("div",{style:{display:"flex",justifyContent:"center"}},r.a.createElement(E.a,{setup:function(e,t){e.createCanvas(1800,700).parent(t),e.textSize(20),e.textFont("Roboto Mono"),e.stroke(60)},draw:function(e){e.clear(),e.translate(900,40),function e(t,n,a){(null===t||void 0===t?void 0:t.left)&&(null===t||void 0===t?void 0:t.right)&&(n.stroke(60),n.push(),n.line(0,0,-a,100),n.translate(-a,100),e(t.left,n,.51*a),n.pop(),n.push(),n.line(0,0,a,100),n.translate(a,100),e(t.right,n,.51*a),n.pop(),n.noStroke()),function(e,t){t.noStroke(),t.fill("#45526e"),t.push(),t.scale(e),t.beginShape(),t.vertex(-75,-130),t.vertex(75,-130),t.vertex(150,0),t.vertex(75,130),t.vertex(-75,130),t.vertex(-150,0),t.endShape(t.close),t.pop()}(.22,n),n.fill("#eee");var r=String(null===t||void 0===t?void 0:t.value);if(r.length<=2)n.text(r,-10,10);else{var l=3==r.length?r:r.substr(0,3)+"...";n.text(l,-16,10)}}(l,e,350)}}))},g=function(){return r.a.createElement("div",{className:"fixed-layout"},r.a.createElement("div",{className:"spinner-container"},Array.from(Array(16),(function(e,t){return r.a.createElement("div",{key:t,className:"block"})}))))};var x=function(e){return new Promise((function(t){return setTimeout(t,e)}))},y=function(){var e,t,n=Object(a.useState)(""),l=Object(d.a)(n,2),c=l[0],i=l[1],f=Object(a.useState)(!1),m=Object(d.a)(f,2),p=(m[0],m[1]),h=Object(a.useState)({}),E=Object(d.a)(h,2),y=E[0],w=E[1],j=Object(a.useState)(0),k=Object(d.a)(j,2),O=k[0],S=k[1],C=Object(a.useState)(!1),T=Object(d.a)(C,2),N=T[0],z=T[1],D=Object(a.useState)(0),F=Object(d.a)(D,2),L=F[0],R=F[1],q=function(e){var t=Object(a.useState)(!1),n=Object(d.a)(t,2),r=n[0],l=n[1],c=Object(a.useState)(null),o=Object(d.a)(c,2),i=o[0],f=o[1],m=new FileReader;return Object(a.useEffect)((function(){if(0!=e){var t=document.createElement("input");t.type="file",t.style.visibility="hidden",setTimeout((function(){t.click()}),200),t.onchange=function(){l(!0);var e=t.files[0];m.addEventListener("load",Object(u.a)(s.a.mark((function e(){var t,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=m.result,e.next=3,v.imgToText(t);case 3:return n=e.sent,e.next=6,x(500);case 6:f({responseEquation:n.data.equation}),l(!1);case 8:case"end":return e.stop()}}),e)}))),!1),e&&m.readAsDataURL(e)}}}),[e]),{data:i,fileIsUplading:r}}(L),A=q.data,I=q.fileIsUplading;Object(a.useEffect)((function(){return z(!!I)}),[I]),Object(a.useEffect)((function(){return(null===A||void 0===A?void 0:A.responseEquation)&&i(null===A||void 0===A?void 0:A.responseEquation)}),[A]);var J=function(){var e=Object(u.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(c){e.next=2;break}return e.abrupt("return");case 2:return z(!0),e.next=5,v.buildJsonTree(c);case 5:return t=e.sent,w(t.data.base),S(0),e.next=10,x(1e3);case 10:z(!1);case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();function V(e){var t;e>=0&&e<(null===y||void 0===y?void 0:null===(t=y.steps)||void 0===t?void 0:t.length)&&S(e)}function B(e){return K.apply(this,arguments)}function K(){return(K=Object(u.a)(s.a.mark((function e(t){var n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t>=0&&t<(null===y||void 0===y?void 0:null===(n=y.steps)||void 0===n?void 0:n.length))){e.next=5;break}return S(t),e.next=4,x(1e3);case 4:B(t+1);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function M(e){return e?Number.parseFloat(e)%1!==0?Number.parseFloat(e.toString()).toFixed(4):Number.parseInt(e):""}function P(e){var t=e.label,n=e.val,a=e.mathFont;return r.a.createElement("div",{style:{display:"flex",marginLeft:10}},r.a.createElement("span",{style:{marginRight:10,color:"#777",padding:2,fontStyle:"italic"}},t),r.a.createElement("span",{className:a?"step-desc":"math",style:{color:"#444",padding:0}},n))}return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{style:{display:"flex",flexDirection:"row",width:"100%",height:"80px"}},r.a.createElement(o.j,{value:c,label:"Vnesi izraz",onChange:function(e){return i(e.currentTarget.value)}}),r.a.createElement(o.e,{gradient:"aqua",onClick:function(){return R(L+1)},style:{borderRadius:"50%",width:"80px"}},r.a.createElement(o.h,{icon:"upload"})),r.a.createElement(o.e,{gradient:"blue",onClick:J,style:{borderRadius:"50%",width:"80px"}},r.a.createElement(o.h,{icon:"equals"}))),r.a.createElement("div",null,(null===y||void 0===y?void 0:null===(e=y.steps)||void 0===e?void 0:e.length)&&!N?r.a.createElement(o.b,{type:"bounce",className:"panel"},r.a.createElement("div",{style:{display:"flex",flexDirection:"column",width:"100%",background:"#ffffff55",padding:"10px"}},r.a.createElement((function(){var e=y.equation,t=y.VSAEExpression,n=y.result;return r.a.createElement("div",{style:{display:"flex",flexDirection:"row",width:"100%"}},r.a.createElement("div",{style:{display:"flex",flexDirection:"column",width:"50%"}},r.a.createElement(P,{label:"Vne\u0161en izraz:",val:e}),r.a.createElement(P,{label:"VSAE format:",val:t}),r.a.createElement(P,{label:"Kon\u010dni rezultat:",val:n})),r.a.createElement("div",{style:{display:"flex",flexDirection:"row-reverse",width:"50%",padding:5,paddingBottom:40}},r.a.createElement(o.f,{className:"mr-2"},r.a.createElement(o.e,{color:"mdb-color",onClick:function(){return p(!0)}},r.a.createElement(o.h,{icon:"list-ol"})))),r.a.createElement("hr",{style:{borderTop:"1px solid black"}}))}),null),r.a.createElement((function(){var e,t,n=y.steps[O+1]||{},a=n.left,l=n.right,c=n.result,i=n.operation,s=n.isFunction;return O+1!==y.steps.length&&(s?(e="Za naslednjo vrednost ".concat(M(a)," izvedemo funkcijo: ").concat(l),t=("fac"!==l?"".concat(l,"(").concat(M(a),")"):"".concat(M(a),"!"))+" = ".concat(M(c))):(e="Za naslednje vrednosti ".concat(M(a),", ").concat(M(l)," izvedemo operacijo: ").concat(i),t="".concat(M(a)," ").concat(i," ").concat(M(l)," = ").concat(M(c)))),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{style:{width:"calc(100%-20px)",height:1,background:"#aaa",margin:10}}),r.a.createElement("div",{style:{display:"flex",flexDirection:"row",width:"100%"}},r.a.createElement("div",{style:{display:"flex",flexDirection:"column",width:"50%"}},r.a.createElement(P,{label:"Korak:",val:O+1||""}),r.a.createElement(P,{label:"Vmesni korak:",val:e||"Konec",mathFont:!0}),r.a.createElement(P,{label:"Izra\u010dun:",val:t||"/"}),r.a.createElement(P,{label:"Stanje izraza:",val:t||"/"})),r.a.createElement("div",{style:{display:"flex",flexDirection:"row-reverse",width:"50%",padding:5,paddingBottom:40}},r.a.createElement(o.f,{className:"mr-2"},r.a.createElement(o.e,{color:"mdb-color",onClick:function(){return V(O-1)}},r.a.createElement(o.h,{icon:"angle-double-left"})),r.a.createElement(o.e,{color:"mdb-color",onClick:function(){return B(O+1)}},r.a.createElement(o.h,{icon:"calculator"})),r.a.createElement(o.e,{color:"mdb-color",onClick:function(){return V(O+1)}},r.a.createElement(o.h,{icon:"angle-double-right"})))),r.a.createElement("hr",{style:{borderTop:"1px solid black"}})))}),null))):N&&r.a.createElement(g,null),r.a.createElement("hr",null)),(null===y||void 0===y?void 0:null===(t=y.steps)||void 0===t?void 0:t.length)&&!N?r.a.createElement(b,{jsonTree:null===y||void 0===y?void 0:y.steps[O].tree}):null)},w=function(){return r.a.createElement("div",{style:{position:"absolute",top:0,left:0,height:"100%",width:"100%",zIndex:-1}},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1440 320"},r.a.createElement("path",{fill:"#0099ff",fillOpacity:"1",d:"M0,96L60,101.3C120,107,240,117,360,112C480,107,600,85,720,69.3C840,53,960,43,1080,69.3C1200,96,1320,160,1380,192L1440,224L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"})))},j=n(44),k=n.n(j);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(90),n(91),n(92);c.a.render(r.a.createElement((function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(w,null),r.a.createElement(o.g,null,r.a.createElement(o.c,{light:!0,className:"header"},r.a.createElement("img",{src:k.a,style:{height:60,marginRight:40},alt:"VSAE"}),r.a.createElement(o.d,{icon:"file",onClick:function(){window.open("https://github.com/JanezSedeljsak/vsae/blob/master/README.md","_blank")}},"Dokumentacija"))),r.a.createElement("div",{className:"content"},r.a.createElement(y,null)))}),null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[45,1,2]]]);
//# sourceMappingURL=main.f2af524b.chunk.js.map