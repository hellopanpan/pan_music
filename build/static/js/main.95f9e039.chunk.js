(this["webpackJsonppanpan-music"]=this["webpackJsonppanpan-music"]||[]).push([[4],{120:function(e,n,t){"use strict";var r={};t.r(r),t.d(r,"searchFoucs",(function(){return l})),t.d(r,"setBanner",(function(){return u})),t.d(r,"setPersonal",(function(){return s})),t.d(r,"getList",(function(){return f})),t.d(r,"getBaner",(function(){return p})),t.d(r,"getPersonal",(function(){return d}));var a=t(44),c=Object(a.fromJS)({focused:!1,banner:[],personal:[]}),o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c,n=arguments.length>1?arguments[1]:void 0;return"heder/search"===n.type&&n.value?e.set("focused",!0):"heder/search"!==n.type||n.value?"heder/banner"===n.type?e.set("banner",n.value):"heder/personalized"===n.type?e.set("personal",n.value):e:e.set("focused",!1)},i=t(39),l=function(e){return{type:"heder/search",value:e}},u=function(e){return{type:"heder/banner",value:e}},s=function(e){return{type:"heder/personalized",value:e}},f=function(e){return function(n){n(l(e))}},p=function(){return function(e){i.h({}).then((function(n){var t=u(n.banners||[]);e(t)})).catch((function(e){console.log(e)}))}},d=function(){return function(e){i.d({}).then((function(n){var t=s(n.result||[]);e(t)})).catch((function(e){console.log(e)}))}};t.d(n,"b",(function(){return o})),t.d(n,"a",(function(){return r}))},121:function(e,n,t){"use strict";var r=t(0),a=t.n(r),c=(t(19),t(63),t(12));function o(){var e=Object(c.a)(["\n  .item{\n    height: 40px;\n    width: 40px;\n    position: fixed;\n    top: 40px;\n    left: 0;\n    pointer-events: none;\n    z-index: 88887999;\n    transform: translate3d(0, 0, 0);\n    opacity: 0;\n    transition: transform 1s cubic-bezier(.65,-0.12,.86,.57);\n    .icon{\n      pointer-events: none;\n      transform: translate3d(0, 0, 0);\n      transition: transform 1s cubic-bezier(.62,-0.1,.86,.57);\n      .iconfont{\n        font-size: 20px;\n        pointer-events: none;\n        color: green;\n      }\n    }\n  }\n  \n"]);return o=function(){return e},e}var i=t(13).b.div(o()),l=Object(r.forwardRef)((function(e,n){var t=Object(r.useRef)([]),c=Object(r.useRef)([]),o=Object(r.useRef)([]);Object(r.useImperativeHandle)(n,(function(){return{getPositon:l}})),Object(r.useEffect)((function(){for(var e=0;e<10;)o.current.push({loading:!1}),e++}),[]);var l=function(e,n){var r=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];if(r)for(var a=function(r){o.current[r];if(console.log(r+"_"+e+"_"+n),console.log(o.current),!o.current[r].loading){console.log(r),o.current[r].loading=!0;var a=r,i=t.current[a].current,l=c.current[a].current;return i.style.opacity="1",i.style.left=e+"px",i.style.top=n+"px",i.style.display="block",i.style.transform="translate3d(0, 750px, 0)",l.style.transform="translate3d(-60px, 0, 0)",i.addEventListener("transitionend",(function(){i.style.transform="translate3d(0, 0, 0)",l.style.transform="translate3d(0, 0, 0)",i.style.left=e+"px",i.style.top="40px",i.style.opacity="0"}),!1),setTimeout((function(){o.current[r].loading=!1}),2e3),"break"}},i=0;i<o.current.length;i++){var l=a(i);if("break"===l)break}};return(a.a.createElement(i,null,o.current.map((function(e,n){return t.current[n]=a.a.createRef(),c.current[n]=a.a.createRef(),a.a.createElement("div",{className:"item",ref:t.current[n],key:n},a.a.createElement("div",{className:"icon",ref:c.current[n]},a.a.createElement("div",{className:"iconfont icon-music-note"})))}))))}));n.a=l},139:function(e,n,t){e.exports=t(237)},147:function(e,n,t){},225:function(e,n,t){},237:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),c=t(9),o=t.n(c),i=t(12),l=t(13);function u(){var e=Object(i.a)(["\n  html, body, div, span, applet, object, iframe,\n  h1, h2, h3, h4, h5, h6, p, blockquote, pre,\n  a, abbr, acronym, address, big, cite, code,\n  del, dfn, em, img, ins, kbd, q, s, samp,\n  small, strike, strong, sub, sup, tt, var,\n  b, u, i, center,\n  dl, dt, dd, ol, ul, li,\n  fieldset, form, label, legend,\n  table, caption, tbody, tfoot, thead, tr, th, td,\n  article, aside, canvas, details, embed, \n  figure, figcaption, footer, header, hgroup, \n  menu, nav, output, ruby, section, summary,\n  time, mark, audio, video {\n    margin: 0;\n    padding: 0;\n    border: 0;\n    font-size: 100%;\n    font: inherit;\n    vertical-align: baseline;\n  }\n  article, aside, details, figcaption, figure, \n  footer, header, hgroup, menu, nav, section {\n    display: block;\n  }\n  body {\n    line-height: 1;\n    margin: 0 auto !important;\n  }\n  ol, ul {\n    list-style: none;\n  }\n  blockquote, q {\n    quotes: none;\n  }\n  blockquote:before, blockquote:after,\n  q:before, q:after {\n    content: '';\n    content: none;\n  }\n  table {\n    border-collapse: collapse;\n    border-spacing: 0;\n  }\n"]);return u=function(){return e},e}var s=Object(l.a)(u()),f=(t(147),t(132)),p=t(119),d=Object(r.lazy)((function(){return Promise.all([t.e(8),t.e(1)]).then(t.bind(null,297))})),m=Object(r.lazy)((function(){return t.e(0).then(t.bind(null,299))})),g=Object(r.lazy)((function(){return Promise.all([t.e(7),t.e(2)]).then(t.bind(null,300))})),y=Object(r.lazy)((function(){return t.e(3).then(t.bind(null,298))})),v=function(e){return function(n){return a.a.createElement(r.Suspense,{fallback:null},a.a.createElement(e,n))}},b=[{path:"/detail",component:v(m),exact:!0},{path:"/search",component:v(g),exact:!0},{path:"/",component:v(d),routes:[{path:"/singerDetail/:id",component:v(y)}]}],h=t(10),E=t(242),x=t(19),O=t(6),j=t(121),w=t(241),k=t(249),N=t(247),S=t(250),C=t(251),z=t(246),P=t(245),I=t(244),L=t(243);function R(){var e=Object(i.a)(["\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    height: 100vh;\n    width: 100%;\n    background:rgba(0,0, 0, 0.5);\n    color: #fff;\n    z-index:100001;\n    .wrap{\n      top: 200px;\n      width: 100%;\n      position:absolute;\n      bottom: 0;\n      left: 0;\n      background: #fff;\n      padding: 20px 0;\n      transform: translate(0, 600px);\n      transition: all 0.5s;\n    }\n    .wraper-list{\n      height: 100%;\n      width: 100%;\n      overflow: hidden\n    }\n    \n    .itemL{\n      display: flex;\n      flex-direction: row;\n      align-items: center;\n      padding: 0.15rem 0.5rem;\n      font-size: 0.4rem;\n      cursor: pointer;\n      color: #333\n    }\n    .playcon{\n      width: 1rem;\n      color: green\n    }\n    .name2{\n      flex: 1;\n      overflow: hidden;\n      white-space:nowrap;\n      text-overflow:ellipsis \n    }\n    .icos{\n      width: 1rem;\n      padding-left: 0.2rem;\n      color: green\n    }\n"]);return R=function(){return e},e}function M(){var e=Object(i.a)(["\n  height: 100vh;\n  background: green;\n  position:absolute;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  z-index:100000;\n  .top{\n    height: 100px;\n    padding: 10px 40px;\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    box-sizing: border-box;\n    .anticon{\n      font-size: 30px;\n      color: #fff;\n    }\n    .right{\n      margin-left: 26px;\n      font-size: 0.3rem;\n      color: #fff;\n    }\n  }\n  .wraper{\n    width: 100%;\n    position: absolute;\n    z-index: 100000;\n    background: #fff;\n    top: 100px;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    padding: 1rem 1rem 0.3rem 1rem;\n    box-sizing: border-box;\n    display: flex;\n    flex-direction: column;\n  }\n  \n  .audio{\n    display:none;\n  }\n  .lrc-cont{\n    flex: 1;\n    height: 400px;\n  }\n  .progress{\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    color:#333;\n    padding-top: 10px;\n    .pro-bar{\n      width: 6rem;\n      margin: 0 0.5rem;\n    }\n    .cur{\n      width: 40px;\n    }\n    .total{\n      width: 40px;\n    }\n  }\n  .ico{\n    font-size: 40px;\n  }\n  .button{\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: space-between;\n    font-size: 35px; \n    color:green;\n  }\n"]);return M=function(){return e},e}function T(){var e=Object(i.a)(["\n  box-shadow: 0px -2px 3px #efefef;\n  position: absolute;\n  bottom: 0;\n  height: 100px;\n  width: 100%;\n  background:#fff;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  box-sizing: border-box;\n  z-index: 88888999;\n  padding: 0 20px;\n  .pic{\n    height: 60px;\n    width: 60px;\n  }\n  .title-wrap{\n    margin-left: 20px;\n    flex:1;\n  }\n  .name{\n    font-size: 16px;\n    color: #333;\n    width: 175px;\n    white-space: nowrap;\n    text-overflow: ellipsis;\n    overflow: hidden;\n    word-break: break-all;\n  }\n  .singer{\n    font-size: 16px;\n    color: #999;\n  }\n  .ico{\n    font-size: 30px;\n  }\n  .anticon{\n    font-size: 30px;\n    margin-left: 10px;\n    color: green;\n  }\n"]);return T=function(){return e},e}function q(){var e=Object(i.a)(["\n  audio{\n    display: none\n  }\n"]);return q=function(){return e},e}var _=l.b.div(q()),B=l.b.div(T()),J=l.b.div(M()),Y=l.b.div(R()),V=function(e){if(!e)return{time:[],lrc:[],timer:[]};var n=/\[\d{2,4}:\d{2}\.\d+\]/g,t=e.match(n),r=(e=e.replace(n,"kkk")).split("kkk");r=r.slice(1);var a=[];return t.map((function(e,n){var t=(e=e.replace(/\[/,"").replace(/\]/,"")).split(":"),r=60*parseInt(t[0])+parseFloat(t[1]);return a.push(r),0})),{time:t,lrc:r,timer:a}},D=t(55);function F(e){var n=e.yy,t=e.currentLineNum,c=Object(r.useRef)([]),o=Object(r.useState)(),i=Object(h.a)(o,2),l=i[0],u=i[1],s=Object(r.useCallback)((function(e){if(!(t<5||t>=e)){var n=c.current[t-5].current;u(n)}}),[t]);return Object(r.useEffect)((function(){s(n.length)}),[t,n,s]),a.a.createElement(D.a,{lineEl:l},a.a.createElement("div",null,n.map((function(e,n){return c.current[n]=a.a.createRef(),a.a.createElement("div",{className:"content ".concat(n===t?"color":""),key:n,ref:c.current[n]},e)}))))}F.defaultProps={yy:[]};var W=a.a.memo(F);function X(){var e=Object(i.a)(["\n  height: 100%;\n  width: 100%;\n  border-radius: 10px;\n  overflow:hidden;\n  .content{\n    line-height: 30px;\n    width: 100%;\n    text-align: center;\n    font-size: 16px;\n    color: #666;\n    opacity: 0.6\n  }\n  .color{\n    color: green;\n    opacity: 1;\n  }\n"]);return X=function(){return e},e}var U=l.b.div(X());var A=Object(x.b)((function(e){return{lyric:e.getIn(["player","lrc"]),src:e.getIn(["player","src"]),current:e.getIn(["player","current"])}}),(function(e){return{getlrc:function(n){var t=O.a.getlrc(n);e(t)}}}))((function(e,n){var t=e.lyric,c=e.current,o=e.src,i=e.getlrc,l=Object(r.useState)(["\u6b4c\u8bcd\u52a0\u8f7d\u4e2d.."]),u=Object(h.a)(l,2),s=u[0],f=u[1],p=Object(r.useState)(-1),d=Object(h.a)(p,2),m=d[0],g=d[1],y=Object(r.useState)([""]),v=Object(h.a)(y,2),b=v[0],E=v[1];return Object(r.useEffect)((function(){if(t){var e=V(t);E(e.time),f(e.lrc)}}),[t]),Object(r.useEffect)((function(){b.forEach((function(e,n){var t=(e=e.replace(/\[/,"").replace(/\]/,"")).split(":"),r=60*parseInt(t[0])+parseFloat(t[1]);parseInt(c)===parseInt(r)&&g(n)}))}),[c,b]),Object(r.useEffect)((function(){if(o){var e=o.match(/\d{5,20}/);e&&i(e[0])}}),[o,i]),a.a.createElement(U,null,a.a.createElement(W,{yy:s,currentLineNum:m}))})),H=t(248),$=Object(x.b)((function(e){return{player2:e.getIn(["player","playerinfo"])}}),(function(e){return{openMusic:function(n){var t=O.a.getSrc(n.id),r=O.a.setCurrentPlayer(n);e(t),e(r)},removeSong:function(n,t,r){if(n.id===t.id&&r.length>=2){var a=O.a.goNext(n.id,r,!0);e(a)}var c=O.a.removeSong(n);e(c)}}}))((function(e){var n=e.playList,t=e.player2,c=e.showListflag,o=e.openMusic,i=e.removeSong,l=e.goList,u=Object(r.useState)(),s=Object(h.a)(u,2),f=s[0],p=s[1],d=Object(r.useState)(0),m=Object(h.a)(d,2),g=m[0],y=m[1],v=Object(r.useState)(!1),b=Object(h.a)(v,2),E=b[0],x=b[1],O=Object(r.useRef)(),j=Object(r.useRef)(!0),w=Object(r.useRef)(0);Object(r.useEffect)((function(){O.current.style.transition="all 0.5s",O.current.style.transform="translate(0, 0px)"}),[c]);return a.a.createElement(Y,{onClick:function(){l(!1)}},a.a.createElement("div",{className:"wrap",onClick:function(e){e.stopPropagation()},onTouchStart:function(e){j.current&&(console.log(e.nativeEvent.touches[0].pageY),p(e.nativeEvent.touches[0].pageY),w.current=e.nativeEvent.touches[0].pageY,x(!0))},onTouchMove:function(e){if(j.current&&E){var n=e.nativeEvent.touches[0].pageY-f;y(n),console.log(n),n<0||(O.current.style.transition="all 0s",O.current.style.transform="translate(0, ".concat(g,"px)"))}},onTouchEnd:function(e){x(!1),O.current.style.transition="all 0.5s",g>200&&(O.current.style.transform="translate(0, 600px)",l(!1)),g<=200&&(O.current.style.transform="translate(0, 0)")},ref:O},a.a.createElement(D.a,{bounceTop:!1,handleScroll:function(e){j.current=0===parseInt(e.y)}},a.a.createElement("div",null,n.map((function(e,r){return a.a.createElement("div",{className:"itemL",key:r,onClick:function(n){!function(e,n){e.stopPropagation(),o(n)}(n,e)}},a.a.createElement("div",{className:"playcon"},t.id===e.id?a.a.createElement(N.a,null):null),a.a.createElement("div",{className:"name2"},e.title),a.a.createElement("div",{className:"icos"},a.a.createElement(H.a,{onClick:function(r){!function(e,n,t,r){e.stopPropagation(),i(n,t,r)}(r,e,t,n)}})))}))))))})),G=Object(r.memo)((function(e){var n=e.play,t=e.volume,c=e.src,o=e.player2,i=e.playList,l=e.showMini,u=e.circle,s=e.xy,f=e.setplay,p=e.setCurrenttimestate,d=e.toggleMini,m=e.goNext,g=e.toggleCircle,y=e.openPlayer,v=Object(r.useState)(0),b=Object(h.a)(v,2),x=b[0],O=b[1],R=Object(r.useState)(0),M=Object(h.a)(R,2),T=M[0],q=M[1],Y=Object(r.useState)(!1),V=Object(h.a)(Y,2),D=V[0],F=V[1],W=Object(r.useRef)(),X=Object(r.useRef)(),U=Object(r.useRef)();Object(r.useEffect)((function(){c&&(W.current.src=c,W.current.autoplay=!0,W.current.loop=!0,n||f())}),[c,f]),Object(r.useEffect)((function(){s.x&&s.y&&l&&U.current&&U.current.getPositon(s.x,s.y,l)}),[s]),Object(r.useEffect)((function(){W.current&&(n&&W.current.play(),n||W.current.pause(),y()),X.current=!0}),[n,y]),Object(r.useEffect)((function(){W.current&&(W.current.volume=t/100)}),[t]);var H=n?a.a.createElement("div",{className:"ico",onClick:f},a.a.createElement(k.a,null)):a.a.createElement("div",{className:"ico",onClick:f},a.a.createElement(N.a,null)),G=function(e){var n=parseInt(e)/60>0?parseInt(parseInt(e)/60):"0",t=parseInt(parseInt(e)%60);return"".concat(n>=10?n:"0"+n,": ").concat(t>=10?t:"0"+t)},K=function(e){F(e)},Q=a.a.createElement($,{playList:i,goList:K,showListflag:D}),Z=a.a.createElement(B,null,o.pic?a.a.createElement("img",{src:o.pic+"?param=100x100",className:"pic",alt:"",onClick:d}):null,a.a.createElement("div",{className:"title-wrap",onClick:d},a.a.createElement("div",{className:"name"},o.title),a.a.createElement("div",{className:"singer"},o.singer)),H,a.a.createElement(S.a,{onClick:function(e){K(!0)}})),ee=a.a.createElement(J,null,a.a.createElement("div",{className:"top"},a.a.createElement(C.a,{onClick:d}),a.a.createElement("div",{className:"right"},a.a.createElement("div",{className:"title"},o.title),a.a.createElement("div",{className:"singer"},o.singer))),a.a.createElement("div",{className:"wraper"},a.a.createElement("div",{className:"lrc-cont"},a.a.createElement(A,null)),a.a.createElement("div",{className:"progress"},a.a.createElement("div",{className:"cur"},G(T)),a.a.createElement("div",{className:"pro-bar"},a.a.createElement(w.a,{value:T/x*100,onChange:function(e){!function(e){W.current.currentTime=e/100*x}(e)}})," "),a.a.createElement("div",{className:"total"},G(x))),a.a.createElement("div",{className:"button"},u?a.a.createElement(z.a,{onClick:g}):a.a.createElement(P.a,{onClick:g}),a.a.createElement(I.a,{onClick:function(){return m(o.id,i,!1)}}),H,a.a.createElement(L.a,{onClick:function(){return m(o.id,i,!0)}}),a.a.createElement(S.a,{onClick:function(e){K(!0)}}))));return a.a.createElement("div",null,X.current?a.a.createElement(_,null,a.a.createElement("audio",{className:"audio",controls:"controls",onTimeUpdate:function(){O(W.current.duration),q(parseInt(W.current.currentTime)),p(W.current.currentTime),W.current.duration-W.current.currentTime<=1&&!u&&m(o.id,i,!0)},ref:W}),a.a.createElement(E.a,{timeout:1e3},l?Z:ee),D?Q:null):null,a.a.createElement(j.a,{ref:U}))})),K=Object(x.b)((function(e){return{play:e.getIn(["player","play"]),xy:e.getIn(["player","xy"]),volume:e.getIn(["player","volume"]),src:e.getIn(["player","src"]),current:e.getIn(["player","current"]),player2:e.getIn(["player","playerinfo"]),playList:e.getIn(["player","playList"]),showMini:e.getIn(["player","showMini"]),circle:e.getIn(["player","circle"])}}),(function(e){return{openPlayer:function(){var n=O.a.openPlayer();e(n)},setplay:function(n){var t=O.a.setPlay(n);e(t)},setVolume:function(n){var t=O.a.setVolume(n);e(t)},setCurrenttimestate:function(n){var t=O.a.setCurrenttime(n);e(t)},openMusic:function(n){var t=O.a.getSrc(n.id),r=O.a.setCurrentPlayer(n);e(t),e(r)},toggleMini:function(){var n=O.a.toggleMini();e(n)},goNext:function(n,t,r){var a=O.a.goNext(n,t,r);e(a)},toggleCircle:function(){var n=O.a.toggleCircle();e(n)}}}))(G),Q=t(240);t(225);var Z=Object(x.b)((function(e){return{loading:e.getIn(["player","loading"])}}),null)((function(e){var n=e.loading;return(a.a.createElement("div",{className:"App"},n?a.a.createElement(Q.a,{className:"loading-icon",size:"large"}):null,a.a.createElement("div",{className:"app-wrap"},a.a.createElement(f.a,null,Object(p.a)(b))),a.a.createElement("div",{className:"player-wrap-all"},a.a.createElement(K,null))))}));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var ee=t(49);t(235),t(236);o.a.render(a.a.createElement(x.a,{store:ee.a},a.a.createElement(Z,null),a.a.createElement(s,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},39:function(e,n,t){"use strict";var r=t(125),a=t.n(r),c=t(49),o=t(6),i=function(e){var n=Object.assign({method:"POST"},e);return n.url="/music-api"+n.url,c.a.dispatch(o.a.setLoading(!0)),new Promise((function(e,t){a()(n).then((function(n){c.a.dispatch(o.a.setLoading(!1)),200===n.data.code?e(n.data):t(n.data)})).catch((function(e){c.a.dispatch(o.a.setLoading(!1)),t(e)}))}))};t.d(n,"h",(function(){return l})),t.d(n,"d",(function(){return u})),t.d(n,"e",(function(){return s})),t.d(n,"i",(function(){return f})),t.d(n,"g",(function(){return p})),t.d(n,"f",(function(){return d})),t.d(n,"a",(function(){return m})),t.d(n,"b",(function(){return g})),t.d(n,"c",(function(){return y})),t.d(n,"k",(function(){return v})),t.d(n,"j",(function(){return b}));var l=function(e){return i({method:"get",url:"/banner"})},u=function(e){return i({method:"get",url:"/personalized"})},s=function(e){return i({method:"get",url:"/playlist/detail",params:e})},f=function(e){return"https://music.163.com/song/media/outer/url?id=".concat(e,".mp3")},p=function(e){return i({method:"get",url:"/lyric",params:e})},d=function(e){return i({method:"get",url:"/search",params:e})},m=function(e){return i({method:"get",url:"/top/artists",params:e})},g=function(e){return i({method:"get",url:"/artist/list",params:e})},y=function(e){return i({method:"get",url:"/artists",params:e})},v=function(e){return i({method:"get",url:"/toplist/detail",params:e})},b=function(e){return i({method:"get",url:"/song/detail",params:e})}},49:function(e,n,t){"use strict";var r=t(46),a=t(120),c=t(6),o=t(126),i=Object(o.combineReducers)({recomend:a.b,player:c.b}),l=t(127),u=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||r.c,s=Object(r.d)(i,u(Object(r.a)(l.a)));n.a=s},55:function(e,n,t){"use strict";var r=t(0),a=t.n(r),c=t(63),o=t(12);function i(){var e=Object(o.a)(["\n  height: 100%;\n  width: 100%;\n  overflow: hidden\n"]);return i=function(){return e},e}var l=t(13).b.div(i());function u(e){var n=e.bounceTop,t=e.bounceBottom,o=e.lineEl,i=e.handleScroll,u=Object(r.useRef)(),s=Object(r.useRef)();return Object(r.useEffect)((function(){o&&s.current.scrollToElement(o,1e3)}),[o]),Object(r.useEffect)((function(){u.current&&(s.current=new c.a(u.current,{scrollY:!0,click:!0,mouseWheel:!0,probeType:3,bounce:{top:n,bottom:t}}),s.current.on("scroll",(function(e){i(e)})))}),[n,t,i]),a.a.createElement(l,{ref:u},e.children)}u.defaultProps={bounceTop:!0,bounceBottom:!0,handleScroll:function(e){},lineEl:null};n.a=u},6:function(e,n,t){"use strict";var r={};t.r(r),t.d(r,"setPlay",(function(){return l})),t.d(r,"setVolume",(function(){return u})),t.d(r,"setLoading",(function(){return s})),t.d(r,"setSrc",(function(){return f})),t.d(r,"setXY",(function(){return p})),t.d(r,"setlrc",(function(){return d})),t.d(r,"setCurrenttime",(function(){return m})),t.d(r,"setCurrentPlayer",(function(){return g})),t.d(r,"setPlaylist",(function(){return y})),t.d(r,"pushPlaylist",(function(){return v})),t.d(r,"toggleMini",(function(){return b})),t.d(r,"removeSong",(function(){return h})),t.d(r,"openPlayer",(function(){return E})),t.d(r,"toggleCircle",(function(){return x})),t.d(r,"goNext",(function(){return O})),t.d(r,"getSrc",(function(){return j})),t.d(r,"getlrc",(function(){return w}));var a=t(44),c=Object(a.fromJS)({play:!1,volume:100,src:"",lrc:"",current:0,playerinfo:{},xy:{},playList:[],showMini:!1,openPlayer:!1,circle:!1,loading:!1}),o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c,n=arguments.length>1?arguments[1]:void 0;if("player/play"===n.type)return e.set("play",!e.get("play"));if("player/loading"===n.type)return e.set("loading",n.value);if("player/volume"===n.type)return e.set("volume",n.value);if("player/src"===n.type)return e.set("src",n.value);if("player/xy"===n.type)return e.set("xy",n.value);if("player/lrc"===n.type)return e.set("lrc",n.value);if("player/time"===n.type)return e.set("current",n.value);if("player/playerinfo"===n.type)return e.set("playerinfo",n.value);if("player/toggleMini"===n.type)return e.set("showMini",!e.get("showMini"));if("player/list"===n.type)return e.set("playList",n.value);if("player/pushSong"===n.type){var t=e.get("playList"),r=[];return t.forEach((function(e,t){n.value.id!==e.id&&r.push(e)})),r.unshift(n.value),e.set("playList",r)}if("player/toggleCircle"===n.type)return e.set("circle",!e.get("circle"));if("player/openPlayer"===n.type)return e.set("openPlayer",!0);if("player/goRemove"===n.type){var a=e.get("playList"),o=[];return a.forEach((function(e){n.value.id!==e.id&&o.push(e)})),e.set("playList",o)}return e},i=t(39),l=function(){return{type:"player/play"}},u=function(e){return{type:"player/volume",value:e}},s=function(e){return{type:"player/loading",value:e}},f=function(e){return{type:"player/src",value:e}},p=function(e){return{type:"player/xy",value:e}},d=function(e){return{type:"player/lrc",value:e}},m=function(e){return{type:"player/time",value:e}},g=function(e){return{type:"player/playerinfo",value:e}},y=function(e){return{type:"player/list",value:e}},v=function(e){return{type:"player/pushSong",value:e}},b=function(){return{type:"player/toggleMini"}},h=function(e){return{type:"player/goRemove",value:e}},E=function(){return{type:"player/openPlayer"}},x=function(e){return{type:"player/toggleCircle"}},O=function(e,n,t){var r,a=0,c=JSON.parse(JSON.stringify(n));return c.forEach((function(n,r){n.id===e&&(t&&(a=r+1),t||(a=r-1))})),a===n.length&&(a=0),-1===a&&(a=n.length-1),r=c.splice(a,1),function(e){e(j(r[0].id)),e(g(r[0]))}},j=function(e){return function(n){var t=i.i(e);n(f(t))}},w=function(e){return function(n){i.g({id:e}).then((function(e){var t=d(e.lrc.lyric);n(t)})).catch((function(e){console.log(e)}))}};t.d(n,"b",(function(){return o})),t.d(n,"a",(function(){return r}))}},[[139,5,6]]]);
//# sourceMappingURL=main.95f9e039.chunk.js.map