(this["webpackJsonpcrypto-app"]=this["webpackJsonpcrypto-app"]||[]).push([[0],{119:function(e,t,n){e.exports=n(172)},124:function(e,t,n){},126:function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},127:function(e,t,n){},172:function(e,t,n){"use strict";n.r(t);var a=n(11),c=n.n(a),o=n(104),r=n.n(o),i=(n(124),n(54)),s=n(72),u=n(73),l=n.n(u),p=n(105),m=n(76),f=(n(126),n(127),n(103)),d=function(){var e=Object(a.useState)([]),t=Object(m.a)(e,2),n=t[0],o=t[1],r=function(){var e=Object(p.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f.a.get("cryptoapi","/coins?limit=".concat(h.limit,"&start=").concat(h.start));case 3:t=e.sent,o(t.coins),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();Object(a.useEffect)((function(){r()}),[]);var u=Object(a.useState)({start:0,limit:3}),d=Object(m.a)(u,2),h=d[0],v=d[1],g=function(e,t){v(Object(s.a)(Object(s.a)({},h),{},Object(i.a)({},e,t)))};return c.a.createElement("div",{className:"App"},c.a.createElement("input",{placeholder:"Start with...",onChange:function(e){return g("start",e.target.value)}}),c.a.createElement("input",{placeholder:"Limit to...",onChange:function(e){return g("limit",e.target.value)}}),c.a.createElement("button",{onClick:r},"Fetch Coins"),n.map((function(e){return c.a.createElement("div",{key:e.symbol},c.a.createElement("h2",null,e.name," - ",e.symbol),c.a.createElement("h5",null,"$",e.price_usd))})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var h={aws_project_region:"us-east-1",aws_cloud_logic_custom:[{name:"cryptoapi",endpoint:"https://podqk8lgj1.execute-api.us-east-1.amazonaws.com/dev",region:"us-east-1"}]};n(70).default.configure(h),r.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(d,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[119,1,2]]]);
//# sourceMappingURL=main.06e2e4a9.chunk.js.map