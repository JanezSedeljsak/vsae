(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{44:function(e,t,n){e.exports=n.p+"static/media/header-img.649e9fa6.png"},45:function(e,t,n){e.exports=n(93)},50:function(e,t,n){},93:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),c=n(10),i=n.n(c),o=(n(50),n(5)),l=n(6),u=n.n(l),s=n(8),f=n(12),p=n(41),m=n(42),v=n.n(m),d=function e(){Object(p.a)(this,e)};d.buildJsonTree=function(e){return new Promise(function(){var t=Object(s.a)(u.a.mark((function t(n,a){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,v.a.post("".concat("","/api/bjs"),JSON.stringify({expression:e}),{headers:{"Content-Type":"application/json"}}).then(n).catch(a);case 2:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}())};var h=n(43),b=n.n(h);var g,x=function(e){return new Promise((function(t){return setTimeout(t,e)}))},E=new Array,w=function(e){var t=Object(a.useState)(!1),n=Object(f.a)(t,2),c=n[0],i=n[1],l=Object(a.useState)(!0),p=Object(f.a)(l,2),m=p[0],v=p[1],d=Object(a.useState)(!1),h=Object(f.a)(d,2),w=h[0],k=h[1];Object(a.useEffect)((function(){g=e.jsonTree}),[]);var j={cos:function(e){return Math.cos(y(e))},sin:function(e){return Math.sin(y(e))},tan:function(e){return Math.tan(y(e))},log:Math.log10,ln:Math.exp,abs:Math.abs},y=function(e){return e*(Math.PI/180)},O={"+":function(e,t){return Number(e)+Number(t)},"-":function(e,t){return Number(e)-Number(t)},"/":function(e,t){return Number(e)/Number(t)},"*":function(e,t){return Number(e)*Number(t)},"^":function(e,t){return Math.pow(Number(e),Number(t))},f:function(e,t){return t in j?j[t](Number(e)):Number(e)}};function N(e){return C.apply(this,arguments)}function C(){return(C=Object(s.a)(u.a.mark((function e(t){var n,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!((null===t||void 0===t?void 0:t.left)&&(null===t||void 0===t?void 0:t.right))){e.next=20;break}return n=null===t||void 0===t?void 0:t.value,e.t0=O,e.t1=n,e.next=6,N(null===t||void 0===t?void 0:t.left);case 6:return e.t2=e.sent,e.next=9,N(null===t||void 0===t?void 0:t.right);case 9:return e.t3=e.sent,t.value=e.t0[e.t1].call(e.t0,e.t2,e.t3),a="f"!==n?"Izvr\u0161imo operacijo: ".concat(n," nad vrednostima: \n                ").concat(t.left.value," & ").concat(t.right.value,"<br/><b>(").concat(t.left.value," ").concat(n," ").concat(t.right.value,") = ").concat(t.value,"</b>"):"Izvr\u0161imo funkcijo: ".concat(t.right.value," nad vrednostjo: \n                ").concat(t.left.value,"<br/><b>").concat(t.right.value,"(").concat(t.left.value,") = ").concat(t.value,"</b>"),E.push({id:E.length,step:a}),t.left=null,t.right=null,e.next=17,x(400);case 17:return e.abrupt("return",String(t.value));case 20:return e.abrupt("return",String(null===t||void 0===t?void 0:t.value));case 21:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function S(){return M.apply(this,arguments)}function M(){return(M=Object(s.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return E=new Array,i(!0),e.next=4,x(400);case 4:return e.next=6,N(g);case 6:k(!0),i(0);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function z(e,t,n){(null===e||void 0===e?void 0:e.left)&&(t.push(),t.line(0,0,-n,100),t.translate(-n,100),z(e.left,t,.5*n),t.pop()),(null===e||void 0===e?void 0:e.right)&&(t.push(),t.line(0,0,n,100),t.translate(n,100),z(e.right,t,.5*n),t.pop()),t.strokeWeight(0),t.ellipse(0,0,80,80),t.strokeWeight(2),t.textSize(40),t.text(null===e||void 0===e?void 0:e.value,-12,15)}function T(e,t,n){return I.apply(this,arguments)}function I(){return(I=Object(s.a)(u.a.mark((function e(t,n,a){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.noLoop(),e.next=3,x(500);case 3:return e.t0=Promise,e.next=6,Object(s.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(null===t||void 0===t?void 0:t.left)){e.next=7;break}return n.push(),n.line(0,0,-a,100),n.translate(-a,100),e.next=6,T(t.left,n,.5*a);case 6:n.pop();case 7:case"end":return e.stop()}}),e)})))();case 6:return e.t1=e.sent,e.next=9,Object(s.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(null===t||void 0===t?void 0:t.right)){e.next=7;break}return n.push(),n.line(0,0,a,100),n.translate(a,100),e.next=6,T(t.right,n,.5*a);case 6:n.pop();case 7:case"end":return e.stop()}}),e)})))();case 9:e.t2=e.sent,e.t3=[e.t1,e.t2],e.t0.all.call(e.t0,e.t3),n.strokeWeight(0),n.ellipse(0,0,80,80),n.strokeWeight(2),n.textSize(40),n.text(null===t||void 0===t?void 0:t.value,-12,15);case 17:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function L(){return(L=Object(s.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!m){e.next=10;break}return t.translate(900,40),e.next=4,T(g,t,350);case 4:return e.next=6,x(500);case 6:v(!1),t.loop(),e.next=14;break;case 10:t.translate(900,40),t.clear(),t.loop(),z(g,t,350);case 14:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{style:{display:"flex",justifyContent:"flex-end"}},"number"===typeof c?r.a.createElement(o.d,{color:"mdb-color",disabled:w,onClick:function(){return k(!0)}},"Prika\u017ei korake re\u0161evanja"):r.a.createElement(o.d,{color:"mdb-color",disabled:!g||m||!!c,onClick:S},"Re\u0161i binarno drevo"),r.a.createElement(o.k,{isOpen:w,toggle:function(){return k(!w)},size:"lg"},r.a.createElement(o.m,{toggle:function(){return k(!w)}},r.a.createElement(o.f,{icon:"list-ol"})," Postopek re\u0161evanja"),r.a.createElement(o.l,null,function(){var t;return E?r.a.createElement(o.i,{style:{width:"100%"}},r.a.createElement(o.j,{active:!0,href:"#"},r.a.createElement("div",{className:"d-flex w-100 justify-content-between"},r.a.createElement("h5",{className:"mb-1"},r.a.createElement(o.f,{icon:"th"})," Za\u010detni ra\u010dun: ",r.a.createElement("b",null,e.initExpression),r.a.createElement("p",{className:"mb-1"},r.a.createElement(o.f,{icon:"stop"})," Kon\u010dna vrednost: ",r.a.createElement("b",null,null===(t=g)||void 0===t?void 0:t.value))))),E.map((function(e,t){return r.a.createElement(o.j,{active:!0,href:"#",key:t},r.a.createElement("div",{className:"d-flex w-100 justify-content-between"},r.a.createElement("h5",{className:"mb-1"},r.a.createElement(o.f,{icon:"info-circle"})," Korak: ",e.id+1)),r.a.createElement("p",{className:"mb-1",dangerouslySetInnerHTML:{__html:e.step}}))}))):r.a.createElement("p",null,"Izvr\u0161ena ni bila nobena operacija...")}()))),r.a.createElement("div",{style:{display:"flex",justifyContent:"center"}},r.a.createElement(b.a,{setup:function(e,t){e.createCanvas(1800,700).parent(t),e.textFont("Georgia"),e.stroke(60)},draw:function(e){return L.apply(this,arguments)}})))},k=function(){var e=Object(a.useState)(""),t=Object(f.a)(e,2),n=t[0],c=t[1],i=Object(a.useState)(void 0),l=Object(f.a)(i,2),p=l[0],m=l[1];var v=function(){var e=Object(s.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!p){e.next=4;break}return m(void 0),e.next=4,x(500);case 4:return e.next=6,d.buildJsonTree(n);case 6:return t=e.sent,e.next=9,m(t.data.result);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return r.a.createElement(r.a.Fragment,null,r.a.createElement(o.h,{value:n,label:"Vnesi izraz",onChange:function(e){return c(e.currentTarget.value)}}),r.a.createElement(o.d,{disabled:!1,onClick:v},"Prika\u017ei binarno drevo"),r.a.createElement("hr",null),p&&r.a.createElement(w,{initExpression:n,jsonTree:p}))},j=function(){return r.a.createElement("div",{style:{position:"absolute",top:0,left:0,height:"100%",width:"100%",zIndex:-1}},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1440 320"},r.a.createElement("path",{fill:"#0099ff",fillOpacity:"1",d:"M0,96L60,101.3C120,107,240,117,360,112C480,107,600,85,720,69.3C840,53,960,43,1080,69.3C1200,96,1320,160,1380,192L1440,224L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"})))},y=n(44),O=n.n(y);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(90),n(91),n(92);i.a.render(r.a.createElement((function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(j,null),r.a.createElement(o.e,null,r.a.createElement(o.b,{light:!0,className:"header"},r.a.createElement("img",{src:O.a,style:{height:60,marginRight:40},alt:"VSAE"}),r.a.createElement(o.c,{icon:"file",onClick:function(){window.open("https://github.com/JanezSedeljsak/vsae/blob/master/README.md","_blank")}},"Dokumentacija"))),r.a.createElement("div",{className:"content"},r.a.createElement(k,null)))}),null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[45,1,2]]]);
//# sourceMappingURL=main.79410e73.chunk.js.map