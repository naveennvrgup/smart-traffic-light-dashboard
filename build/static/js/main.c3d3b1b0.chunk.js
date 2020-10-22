(this["webpackJsonpstl-web"]=this["webpackJsonpstl-web"]||[]).push([[0],{33:function(e,t,a){e.exports=a(66)},38:function(e,t,a){},56:function(e,t,a){},66:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(11),c=a.n(r),o=(a(38),a(8)),m=a(31),i=a.n(m).a.create({baseURL:"http://0.0.0.0:8000"});i.defaults.headers.common.Authorization="Token dbef64a307efc2df5a8cab4827a8a65833f1b5e6";var s=i,u=function(e){var t=e.lights,a=e.signal,r=e.timerBarStyle,c=e.ratioTimeModulo;return l.a.createElement(n.Fragment,null,l.a.createElement("th",{rowSpan:t.length,width:"10px"},a.id),l.a.createElement("td",{rowSpan:t.length,width:"50px"},a.location),l.a.createElement("td",{rowSpan:t.length},a.lat),l.a.createElement("td",{rowSpan:t.length},a.lng),l.a.createElement("td",{rowSpan:t.length},l.a.createElement("table",{className:"table table-bordered mb-0"},l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",{className:"table-active"},"Sync Time"),l.a.createElement("td",null,new Date(a.timer).toLocaleTimeString("en-IN",{year:"numeric",month:"numeric",day:"numeric",hour:"numeric",minute:"numeric",second:"numeric"}))),l.a.createElement("tr",null,l.a.createElement("td",{className:"table-active"},"Since Reset"),l.a.createElement("td",{className:"timer"},l.a.createElement("span",{className:"timeBar",style:r}),l.a.createElement("span",{className:"time"},c)))))),l.a.createElement("td",{rowSpan:a.lights.length},l.a.createElement("table",{className:"table table-bordered mb-0"},l.a.createElement("thead",{className:"table-active"},l.a.createElement("tr",null,l.a.createElement("td",null,"Red"),l.a.createElement("td",null,"Green"))),l.a.createElement("tbody",null,a.controlList.map((function(e,t){return l.a.createElement("tr",{key:t},l.a.createElement("td",null,e.red.toString()),l.a.createElement("td",null,e.green.toString()))}))))),l.a.createElement("td",{rowSpan:t.length,width:"10px"},t.length))},d=(a(56),function(e){var t=e.signal,a=e.resetInterval,r=t.lights,c=new Date,m=new Date(t.timer),i=Object(n.useState)(0),s=Object(o.a)(i,2),d=s[0],E=s[1];Object(n.useEffect)((function(){var e=setInterval((function(){var e=Math.ceil(c.valueOf()/1e3-m.valueOf()/1e3)%a+1;E(e)}),1e3);return function(){clearInterval(e)}}));var g=d/a*90,b="orange";g<40?b="lightgreen":g<70&&(b="yellow");var h={width:g+"%",background:b};return r.map((function(e,a){return l.a.createElement("tr",{key:e.id},0===a?l.a.createElement(u,{lights:r,signal:t,ratioTimeModulo:d,timerBarStyle:h}):null,l.a.createElement("th",{width:"10px"},e.id),l.a.createElement("td",null,e.direction),l.a.createElement("td",{className:"OverRide"===e.operationMode?"bgblue":null},e.operationMode),l.a.createElement("td",{className:"Red"===e.signalState?"bgred":"bggreen"},e.signalState),l.a.createElement("td",null,new Date(e.heartbeat).toLocaleTimeString("en-IN",{year:"numeric",month:"numeric",day:"numeric",hour:"numeric",minute:"numeric",second:"numeric"})))}))}),E=function(e){var t=e.history,a=Object(n.useState)([]),r=Object(o.a)(a,2),c=r[0],m=r[1],i=Object(n.useState)(5),u=Object(o.a)(i,2),E=u[0],g=u[1],b=Object(n.useState)(!1),h=Object(o.a)(b,2),p=h[0],f=h[1];Object(n.useEffect)((function(){var e=setInterval((function(){s.get("/maps/stateReporting/").then((function(e){m(e.data.signals),g(e.data.resetInterval)})).catch((function(e){console.log(e)}))}),1e3);return function(){clearInterval(e)}}));var v=c.map((function(e,t){return l.a.createElement(d,Object.assign({key:t},{signal:e,resetInterval:E}))}));return l.a.createElement(n.Fragment,null,l.a.createElement("table",{className:"table table-bordered"},l.a.createElement("thead",{className:"table-dark"},l.a.createElement("tr",null,l.a.createElement("td",null,"Signal Id"),l.a.createElement("td",{style:{cursor:"pointer"},onClick:function(){return t.push("/map")}},l.a.createElement("span",null,"Location "),l.a.createElement("span",{className:"text-danger"},"*")),l.a.createElement("td",null,"Lat"),l.a.createElement("td",null,"Lng"),l.a.createElement("td",null,"Timer"),l.a.createElement("td",null,"Control List"),l.a.createElement("td",null,"No. Lights"),l.a.createElement("td",null,"Light Id"),l.a.createElement("td",null,"Bearing"),l.a.createElement("td",{style:{cursor:"pointer"},onClick:function(){f(!0),s.get("/maps/revokeOverRide/").then((function(e){console.log(e)})).catch((function(e){console.log(e)})).finally((function(){f(!1)}))}},l.a.createElement("span",null,"Mode "),p?l.a.createElement("span",{className:"spinner-border text-primary spinner-border-sm"}):l.a.createElement("span",{className:"text-danger"},"*")),l.a.createElement("td",null,"Color"),l.a.createElement("td",null,"Heartbeat"))),l.a.createElement("tbody",null,v)))},g=a(13),b=Object(g.c)({accessToken:"pk.eyJ1IjoibmF2ZWVubnZyZ3VwIiwiYSI6ImNrZ2kxYW9oeTAyODczMm40dWs4MzkwM2cifQ.wlwkYJu5zSryrA5aSIig_A"}),h=function(){return l.a.createElement(b,{center:[77.341309,11.10737],zoom:[11],style:"mapbox://styles/mapbox/streets-v9",containerStyle:{height:"100vh",width:"100vw"}},l.a.createElement(g.b,{type:"symbol",id:"marker",layout:{"icon-image":"marker-15"}},l.a.createElement(g.a,{coordinates:[77.2937723,11.1085742]})))},p=a(1);var f=function(){return l.a.createElement("div",{className:"App"},l.a.createElement(p.c,null,l.a.createElement(p.a,{component:h,path:"/map"}),l.a.createElement(p.a,{component:E,path:""})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var v=a(16);c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(v.a,null,l.a.createElement(f,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[33,1,2]]]);
//# sourceMappingURL=main.c3d3b1b0.chunk.js.map