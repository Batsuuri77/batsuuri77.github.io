(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[974],{2222:(e,t,s)=>{Promise.resolve().then(s.bind(s,7426))},5565:(e,t,s)=>{"use strict";s.d(t,{default:()=>l.a});var i=s(4146),l=s.n(i)},4146:(e,t,s)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var s in t)Object.defineProperty(e,s,{enumerable:!0,get:t[s]})}(t,{default:function(){return a},getImageProps:function(){return o}});let i=s(306),l=s(666),r=s(7970),n=i._(s(5514));function o(e){let{props:t}=(0,l.getImgProps)(e,{defaultLoader:n.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image/",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0}});for(let[e,s]of Object.entries(t))void 0===s&&delete t[e];return{props:t}}let a=r.Image},2599:(e,t,s)=>{"use strict";var i=s(5155),l=s(2115),r=function(){return(r=Object.assign||function(e){for(var t,s=1,i=arguments.length;s<i;s++)for(var l in t=arguments[s])Object.prototype.hasOwnProperty.call(t,l)&&(e[l]=t[l]);return e}).apply(this,arguments)};function n(e,t){var s,i;switch(t.type){case"TYPE":return r(r({},e),{speed:t.speed,text:null===(s=t.payload)||void 0===s?void 0:s.substring(0,e.text.length+1)});case"DELAY":return r(r({},e),{speed:t.payload});case"DELETE":return r(r({},e),{speed:t.speed,text:null===(i=t.payload)||void 0===i?void 0:i.substring(0,e.text.length-1)});case"COUNT":return r(r({},e),{count:e.count+1});default:return e}}var o=function(e){var t=e.words,s=void 0===t?["Hello World!","This is","a simple Typewriter"]:t,i=e.loop,r=void 0===i?1:i,o=e.typeSpeed,a=void 0===o?80:o,c=e.deleteSpeed,d=void 0===c?50:c,u=e.delaySpeed,m=void 0===u?1500:u,g=e.onLoopDone,p=e.onType,x=e.onDelete,h=e.onDelay,f=l.useReducer(n,{speed:a,text:"",count:0}),v=f[0],j=v.speed,y=v.text,b=v.count,T=f[1],N=l.useRef(0),S=l.useRef(!1),w=l.useRef(!1),C=l.useRef(!1),D=l.useRef(!1),I=l.useCallback(function(){var e=b%s.length,t=s[e];w.current?(T({type:"DELETE",payload:t,speed:d}),""===y&&(w.current=!1,T({type:"COUNT"}))):(T({type:"TYPE",payload:t,speed:a}),C.current=!0,y===t&&(T({type:"DELAY",payload:m}),C.current=!1,D.current=!0,setTimeout(function(){D.current=!1,w.current=!0},m),r>0&&(N.current+=1,N.current/s.length===r&&(D.current=!1,S.current=!0)))),C.current&&p&&p(N.current),w.current&&x&&x(),D.current&&h&&h()},[b,m,d,r,a,s,y,p,x,h]);return l.useEffect(function(){var e=setTimeout(I,j);return S.current&&clearTimeout(e),function(){return clearTimeout(e)}},[I,j]),l.useEffect(function(){g&&S.current&&g()},[g]),[y,{isType:C.current,isDelay:D.current,isDelete:w.current,isDone:S.current}]};!function(e,t){void 0===t&&(t={});var s=t.insertAt;if(e&&"undefined"!=typeof document){var i=document.head||document.getElementsByTagName("head")[0],l=document.createElement("style");l.type="text/css","top"===s&&i.firstChild?i.insertBefore(l,i.firstChild):i.appendChild(l),l.styleSheet?l.styleSheet.cssText=e:l.appendChild(document.createTextNode(e))}}(".styles-module_blinkingCursor__yugAC{color:inherit;font:inherit;left:3px;line-height:inherit;opacity:1;position:relative;top:0}.styles-module_blinking__9VXRT{animation-duration:.8s;animation-iteration-count:infinite;animation-name:styles-module_blink__rqfaf}@keyframes styles-module_blink__rqfaf{0%{opacity:1}to{opacity:0}}");var a=l.memo(function(e){var t=e.cursorBlinking,s=e.cursorStyle,l=e.cursorColor;return i.jsx("span",r({style:{color:void 0===l?"inherit":l},className:"".concat("styles-module_blinkingCursor__yugAC"," ").concat(void 0===t||t?"styles-module_blinking__9VXRT":"")},{children:void 0===s?"|":s}))});t.cU=function(e){var t=e.words,s=e.loop,l=e.typeSpeed,r=e.deleteSpeed,n=e.delaySpeed,c=e.cursor,d=e.cursorStyle,u=e.cursorColor,m=e.cursorBlinking,g=o({words:void 0===t?["Hello World!","This is","a simple Typewriter"]:t,loop:void 0===s?1:s,typeSpeed:void 0===l?80:l,deleteSpeed:void 0===r?50:r,delaySpeed:void 0===n?1500:n,onLoopDone:e.onLoopDone,onType:e.onType,onDelay:e.onDelay,onDelete:e.onDelete})[0];return i.jsxs(i.Fragment,{children:[i.jsx("span",{children:g}),void 0!==c&&c&&i.jsx(a,{cursorStyle:void 0===d?"|":d,cursorColor:void 0===u?"inherit":u,cursorBlinking:void 0===m||m})]})}},7426:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>d});var i=s(5155),l=s(8209);let r=()=>(0,i.jsx)(l.P.span,{className:"inline-block",role:"img","aria-labelledby":"wave",animate:{rotate:[0,20,-10,20,-5,10,0]},transition:{duration:1.5,repeat:1/0,repeatType:"mirror",ease:"easeInOut"},children:"\uD83D\uDC4B"});var n=s(2351);s(2115);var o=s(5565);let a=e=>{let{containerClassName:t="w-[150px] h-[150px] flex flex-col items-center justify-center  rounded-2xl ",imageClassName:s="relative",imagePath:l,imageHeight:r=50,imageWidth:n=50,imageAlt:a,title:c,titleClassName:d="mt-4 text-xl font-semibold"}=e;return(0,i.jsxs)("div",{className:t,children:[(0,i.jsx)("div",{className:s,children:(0,i.jsx)(o.default,{src:l,alt:a,width:n,height:r,style:{objectFit:"contain"}})}),(0,i.jsx)("p",{className:d,children:c})]})};var c=s(2599);function d(){let e="py-2 flex flex-row gap-4 items-center justify-center border border-2 rounded-2xl shadow-2xl bg-white/10 backdrop-blur-2xl backdrop-saturate-150";return(0,i.jsxs)("main",{className:"flex-1 flex flex-col items-center justify-center",children:[(0,i.jsx)("section",{className:"h-screen pt-36 flex flex-col justify-between items-center gap-8 w-full",children:(0,i.jsxs)("div",{className:"flex flex-col justify-center items-center gap-4",children:[(0,i.jsx)("div",{className:"text-7xl font-semibold mb-4",children:(0,i.jsxs)("div",{children:[(0,i.jsx)(c.cU,{words:["G'DAY MATES!","HOLA AMIGOS!","HALLO KUMPELS!","CIAO AMICI!","ПРИВЕТ, РЕБЯТА!","你好，朋友们","안녕 친구들!","やあ、みんな！","HEJ KOMPISAR!","ӨДРИЙН МЭНД!"],cursor:!0,cursorBlinking:!0,cursorStyle:"|",loop:5,typeSpeed:100,deleteSpeed:100,delaySpeed:2e3,onLoopDone:()=>{console.log("Done after 5 loops!")},onType:e=>{console.log(e)}}),(0,i.jsx)(r,{})]})}),(0,i.jsxs)("p",{className:"text-2xl mb-6 text-center",children:[(0,i.jsxs)("span",{className:"text-4xl",children:["I am ",(0,i.jsx)("span",{className:"font-bold",children:"BATSUURI BATTSOOJ"})]}),", ",(0,i.jsx)("br",{}),"a passionate front-end developer settled in Melbourne, Australia \uD83D\uDE42."]}),(0,i.jsx)("div",{className:"flex-shrink-0 mb-12 w-52 h-64 sm:w-52 sm:h-64 md:w-60 md:h-72 lg:w-[470px] lg:h-[500px] overflow-hidden drop-shadow-2xl rounded-2xl",children:(0,i.jsx)(o.default,{src:n.gs.pro,alt:"Batsuuri's profile 1.06",layout:"responsive",objectFit:"cover",width:644,height:687})})]})}),(0,i.jsx)("section",{className:"w-full flex flex-col justify-center items-center gap-10 pb-24",children:(0,i.jsxs)("div",{children:[(0,i.jsx)("h1",{className:"text-center text-4xl font-semibold mb-5",children:"TECHNOLOGIES"}),(0,i.jsxs)("div",{className:"flex flex-col gap-4 mb-10",children:[(0,i.jsx)("h2",{className:"text-2xl font-semibold text-center",children:"FRONT-END"}),(0,i.jsxs)("div",{className:"".concat(e," "),children:[(0,i.jsx)(a,{imagePath:n.T5.html,imageAlt:"HTML",title:"HTML5",borderColor:"#1d4ed8"}),(0,i.jsx)(a,{imagePath:n.T5.js,imageAlt:"JavaScript",title:"JavaScript",borderColor:"#1d4ed8"}),(0,i.jsx)(a,{imagePath:n.T5.react,imageAlt:"React",title:"React",borderColor:"#1d4ed8"}),(0,i.jsx)(a,{imagePath:n.T5.react,imageAlt:"React Native",title:"React Native",borderColor:"#1d4ed8"}),(0,i.jsx)(a,{imagePath:n.T5.nextjs,imageAlt:"Next.js",title:"Next.js",borderColor:"#1d4ed8"})]})]}),(0,i.jsx)("div",{className:"flex flex-row gap-4",children:(0,i.jsxs)("div",{className:"flex flex-row gap-20 items-center justify-center",children:[(0,i.jsxs)("div",{className:"flex flex-col gap-4",children:[(0,i.jsx)("h2",{className:"text-2xl font-semibold text-center  ",children:"STYLING"}),(0,i.jsxs)("div",{className:"".concat(e," px-8"),children:[(0,i.jsx)(a,{imagePath:n.T5.css,imageAlt:"CSS",title:"CSS"}),(0,i.jsx)(a,{imagePath:n.T5.tailwind,imageAlt:"Tailwind CSS",title:"Tailwind CSS"}),(0,i.jsx)(a,{imagePath:n.T5.figma,imageAlt:"Figma",title:"Figma"})]})]}),(0,i.jsxs)("div",{className:"flex flex-col gap-4 items-center justify-center",children:[(0,i.jsx)("h2",{className:"text-2xl font-semibold text-center text-gray-700",children:"BACK-END"}),(0,i.jsxs)("div",{className:"".concat(e),children:[(0,i.jsx)(a,{imageClassName:"relative",imagePath:n.T5.nodejs,imageHeight:50,imageWidth:100,imageAlt:"Node.js",title:"Node.js"}),(0,i.jsx)(a,{imageClassName:"relative",imagePath:n.T5.mongodb,imageHeight:50,imageWidth:100,imageAlt:"MongoDB",title:"MongoDB"})]})]})]})})]})})]})}},2351:(e,t,s)=>{"use strict";s.d(t,{Jb:()=>r,T5:()=>i,gs:()=>l});let i={react:"/Images/Technologies/react.svg",react_native:"/Images/Technologies/react-native.svg",html:"/Images/Technologies/html5.svg",css:"/Images/Technologies/css.svg",tailwind:"/Images/Technologies/tailwind.svg",nextjs:"/Images/Technologies/nextjs.svg",js:"/Images/Technologies/js.svg",nodejs:"/Images/Technologies/node.svg",mongodb:"/Images/Technologies/mongodb.svg",figma:"/Images/Technologies/figma.svg"},l={pro:"/Images/pro.png"},r={facebook:"/Images/social/Facebook.png",instagram:"/Images/social/Instagram.png",github:"/Images/social/GitHub.png",linkedin:"/Images/social/Linkedin.png"}}},e=>{var t=t=>e(e.s=t);e.O(0,[970,209,441,517,358],()=>t(2222)),_N_E=e.O()}]);