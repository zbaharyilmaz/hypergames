var An={exports:{}},Cn={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var kr;function go(){return kr||(kr=1,function(t){function e(_,R){var T=_.length;_.push(R);e:for(;0<T;){var x=T-1>>>1,L=_[x];if(0<i(L,R))_[x]=R,_[T]=L,T=x;else break e}}function n(_){return _.length===0?null:_[0]}function r(_){if(_.length===0)return null;var R=_[0],T=_.pop();if(T!==R){_[0]=T;e:for(var x=0,L=_.length,Lt=L>>>1;x<Lt;){var Mt=2*(x+1)-1,Rn=_[Mt],De=Mt+1,Ut=_[De];if(0>i(Rn,T))De<L&&0>i(Ut,Rn)?(_[x]=Ut,_[De]=T,x=De):(_[x]=Rn,_[Mt]=T,x=Mt);else if(De<L&&0>i(Ut,T))_[x]=Ut,_[De]=T,x=De;else break e}}return R}function i(_,R){var T=_.sortIndex-R.sortIndex;return T!==0?T:_.id-R.id}if(t.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var c=[],l=[],u=1,d=null,h=3,y=!1,f=!1,m=!1,g=typeof setTimeout=="function"?setTimeout:null,w=typeof clearTimeout=="function"?clearTimeout:null,b=typeof setImmediate<"u"?setImmediate:null;function v(_){for(var R=n(l);R!==null;){if(R.callback===null)r(l);else if(R.startTime<=_)r(l),R.sortIndex=R.expirationTime,e(c,R);else break;R=n(l)}}function A(_){if(m=!1,v(_),!f)if(n(c)!==null)f=!0,Z();else{var R=n(l);R!==null&&We(A,R.startTime-_)}}var E=!1,k=-1,I=5,D=-1;function F(){return!(t.unstable_now()-D<I)}function $(){if(E){var _=t.unstable_now();D=_;var R=!0;try{e:{f=!1,m&&(m=!1,w(k),k=-1),y=!0;var T=h;try{t:{for(v(_),d=n(c);d!==null&&!(d.expirationTime>_&&F());){var x=d.callback;if(typeof x=="function"){d.callback=null,h=d.priorityLevel;var L=x(d.expirationTime<=_);if(_=t.unstable_now(),typeof L=="function"){d.callback=L,v(_),R=!0;break t}d===n(c)&&r(c),v(_)}else r(c);d=n(c)}if(d!==null)R=!0;else{var Lt=n(l);Lt!==null&&We(A,Lt.startTime-_),R=!1}}break e}finally{d=null,h=T,y=!1}R=void 0}}finally{R?Q():E=!1}}}var Q;if(typeof b=="function")Q=function(){b($)};else if(typeof MessageChannel<"u"){var _e=new MessageChannel,Ne=_e.port2;_e.port1.onmessage=$,Q=function(){Ne.postMessage(null)}}else Q=function(){g($,0)};function Z(){E||(E=!0,Q())}function We(_,R){k=g(function(){_(t.unstable_now())},R)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(_){_.callback=null},t.unstable_continueExecution=function(){f||y||(f=!0,Z())},t.unstable_forceFrameRate=function(_){0>_||125<_?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):I=0<_?Math.floor(1e3/_):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return n(c)},t.unstable_next=function(_){switch(h){case 1:case 2:case 3:var R=3;break;default:R=h}var T=h;h=R;try{return _()}finally{h=T}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(_,R){switch(_){case 1:case 2:case 3:case 4:case 5:break;default:_=3}var T=h;h=_;try{return R()}finally{h=T}},t.unstable_scheduleCallback=function(_,R,T){var x=t.unstable_now();switch(typeof T=="object"&&T!==null?(T=T.delay,T=typeof T=="number"&&0<T?x+T:x):T=x,_){case 1:var L=-1;break;case 2:L=250;break;case 5:L=1073741823;break;case 4:L=1e4;break;default:L=5e3}return L=T+L,_={id:u++,callback:R,priorityLevel:_,startTime:T,expirationTime:L,sortIndex:-1},T>x?(_.sortIndex=T,e(l,_),n(c)===null&&_===n(l)&&(m?(w(k),k=-1):m=!0,We(A,T-x))):(_.sortIndex=L,e(c,_),f||y||(f=!0,Z())),_},t.unstable_shouldYield=F,t.unstable_wrapCallback=function(_){var R=h;return function(){var T=h;h=R;try{return _.apply(this,arguments)}finally{h=T}}}}(Cn)),Cn}var Or;function Zf(){return Or||(Or=1,An.exports=go()),An.exports}function xi(t){var e,n,r="";if(typeof t=="string"||typeof t=="number")r+=t;else if(typeof t=="object")if(Array.isArray(t)){var i=t.length;for(e=0;e<i;e++)t[e]&&(n=xi(t[e]))&&(r&&(r+=" "),r+=n)}else for(n in t)t[n]&&(r&&(r+=" "),r+=n);return r}function eh(){for(var t,e,n=0,r="",i=arguments.length;n<i;n++)(t=arguments[n])&&(e=xi(t))&&(r&&(r+=" "),r+=e);return r}function un(){return typeof window<"u"}function rt(t){return Ni(t)?(t.nodeName||"").toLowerCase():"#document"}function K(t){var e;return(t==null||(e=t.ownerDocument)==null?void 0:e.defaultView)||window}function de(t){var e;return(e=(Ni(t)?t.ownerDocument:t.document)||window.document)==null?void 0:e.documentElement}function Ni(t){return un()?t instanceof Node||t instanceof K(t).Node:!1}function te(t){return un()?t instanceof Element||t instanceof K(t).Element:!1}function ue(t){return un()?t instanceof HTMLElement||t instanceof K(t).HTMLElement:!1}function Pr(t){return!un()||typeof ShadowRoot>"u"?!1:t instanceof ShadowRoot||t instanceof K(t).ShadowRoot}function Et(t){const{overflow:e,overflowX:n,overflowY:r,display:i}=ne(t);return/auto|scroll|overlay|hidden|clip/.test(e+r+n)&&!["inline","contents"].includes(i)}function yo(t){return["table","td","th"].includes(rt(t))}function dn(t){return[":popover-open",":modal"].some(e=>{try{return t.matches(e)}catch{return!1}})}function or(t){const e=ar(),n=te(t)?ne(t):t;return["transform","translate","scale","rotate","perspective"].some(r=>n[r]?n[r]!=="none":!1)||(n.containerType?n.containerType!=="normal":!1)||!e&&(n.backdropFilter?n.backdropFilter!=="none":!1)||!e&&(n.filter?n.filter!=="none":!1)||["transform","translate","scale","rotate","perspective","filter"].some(r=>(n.willChange||"").includes(r))||["paint","layout","strict","content"].some(r=>(n.contain||"").includes(r))}function wo(t){let e=Ce(t);for(;ue(e)&&!Xe(e);){if(or(e))return e;if(dn(e))return null;e=Ce(e)}return null}function ar(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function Xe(t){return["html","body","#document"].includes(rt(t))}function ne(t){return K(t).getComputedStyle(t)}function fn(t){return te(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.scrollX,scrollTop:t.scrollY}}function Ce(t){if(rt(t)==="html")return t;const e=t.assignedSlot||t.parentNode||Pr(t)&&t.host||de(t);return Pr(e)?e.host:e}function Di(t){const e=Ce(t);return Xe(e)?t.ownerDocument?t.ownerDocument.body:t.body:ue(e)&&Et(e)?e:Di(e)}function pt(t,e,n){var r;e===void 0&&(e=[]),n===void 0&&(n=!0);const i=Di(t),s=i===((r=t.ownerDocument)==null?void 0:r.body),o=K(i);if(s){const a=Hn(o);return e.concat(o,o.visualViewport||[],Et(i)?i:[],a&&n?pt(a):[])}return e.concat(i,pt(i,[],n))}function Hn(t){return t.parent&&Object.getPrototypeOf(t.parent)?t.frameElement:null}const Qe=Math.min,q=Math.max,Xt=Math.round,Ft=Math.floor,ae=t=>({x:t,y:t}),bo={left:"right",right:"left",bottom:"top",top:"bottom"},_o={start:"end",end:"start"};function xr(t,e,n){return q(t,Qe(e,n))}function It(t,e){return typeof t=="function"?t(e):t}function ke(t){return t.split("-")[0]}function St(t){return t.split("-")[1]}function Li(t){return t==="x"?"y":"x"}function Mi(t){return t==="y"?"height":"width"}function Be(t){return["top","bottom"].includes(ke(t))?"y":"x"}function Ui(t){return Li(Be(t))}function vo(t,e,n){n===void 0&&(n=!1);const r=St(t),i=Ui(t),s=Mi(i);let o=i==="x"?r===(n?"end":"start")?"right":"left":r==="start"?"bottom":"top";return e.reference[s]>e.floating[s]&&(o=Qt(o)),[o,Qt(o)]}function Eo(t){const e=Qt(t);return[jn(t),e,jn(e)]}function jn(t){return t.replace(/start|end/g,e=>_o[e])}function Io(t,e,n){const r=["left","right"],i=["right","left"],s=["top","bottom"],o=["bottom","top"];switch(t){case"top":case"bottom":return n?e?i:r:e?r:i;case"left":case"right":return e?s:o;default:return[]}}function So(t,e,n,r){const i=St(t);let s=Io(ke(t),n==="start",r);return i&&(s=s.map(o=>o+"-"+i),e&&(s=s.concat(s.map(jn)))),s}function Qt(t){return t.replace(/left|right|bottom|top/g,e=>bo[e])}function To(t){return{top:0,right:0,bottom:0,left:0,...t}}function Ro(t){return typeof t!="number"?To(t):{top:t,right:t,bottom:t,left:t}}function Zt(t){const{x:e,y:n,width:r,height:i}=t;return{width:r,height:i,top:n,left:e,right:e+r,bottom:n+i,x:e,y:n}}function Nr(t,e,n){let{reference:r,floating:i}=t;const s=Be(e),o=Ui(e),a=Mi(o),c=ke(e),l=s==="y",u=r.x+r.width/2-i.width/2,d=r.y+r.height/2-i.height/2,h=r[a]/2-i[a]/2;let y;switch(c){case"top":y={x:u,y:r.y-i.height};break;case"bottom":y={x:u,y:r.y+r.height};break;case"right":y={x:r.x+r.width,y:d};break;case"left":y={x:r.x-i.width,y:d};break;default:y={x:r.x,y:r.y}}switch(St(e)){case"start":y[o]-=h*(n&&l?-1:1);break;case"end":y[o]+=h*(n&&l?-1:1);break}return y}const Ao=async(t,e,n)=>{const{placement:r="bottom",strategy:i="absolute",middleware:s=[],platform:o}=n,a=s.filter(Boolean),c=await(o.isRTL==null?void 0:o.isRTL(e));let l=await o.getElementRects({reference:t,floating:e,strategy:i}),{x:u,y:d}=Nr(l,r,c),h=r,y={},f=0;for(let m=0;m<a.length;m++){const{name:g,fn:w}=a[m],{x:b,y:v,data:A,reset:E}=await w({x:u,y:d,initialPlacement:r,placement:h,strategy:i,middlewareData:y,rects:l,platform:o,elements:{reference:t,floating:e}});u=b??u,d=v??d,y={...y,[g]:{...y[g],...A}},E&&f<=50&&(f++,typeof E=="object"&&(E.placement&&(h=E.placement),E.rects&&(l=E.rects===!0?await o.getElementRects({reference:t,floating:e,strategy:i}):E.rects),{x:u,y:d}=Nr(l,h,c)),m=-1)}return{x:u,y:d,placement:h,strategy:i,middlewareData:y}};async function hn(t,e){var n;e===void 0&&(e={});const{x:r,y:i,platform:s,rects:o,elements:a,strategy:c}=t,{boundary:l="clippingAncestors",rootBoundary:u="viewport",elementContext:d="floating",altBoundary:h=!1,padding:y=0}=It(e,t),f=Ro(y),g=a[h?d==="floating"?"reference":"floating":d],w=Zt(await s.getClippingRect({element:(n=await(s.isElement==null?void 0:s.isElement(g)))==null||n?g:g.contextElement||await(s.getDocumentElement==null?void 0:s.getDocumentElement(a.floating)),boundary:l,rootBoundary:u,strategy:c})),b=d==="floating"?{x:r,y:i,width:o.floating.width,height:o.floating.height}:o.reference,v=await(s.getOffsetParent==null?void 0:s.getOffsetParent(a.floating)),A=await(s.isElement==null?void 0:s.isElement(v))?await(s.getScale==null?void 0:s.getScale(v))||{x:1,y:1}:{x:1,y:1},E=Zt(s.convertOffsetParentRelativeRectToViewportRelativeRect?await s.convertOffsetParentRelativeRectToViewportRelativeRect({elements:a,rect:b,offsetParent:v,strategy:c}):b);return{top:(w.top-E.top+f.top)/A.y,bottom:(E.bottom-w.bottom+f.bottom)/A.y,left:(w.left-E.left+f.left)/A.x,right:(E.right-w.right+f.right)/A.x}}const Co=function(t){return t===void 0&&(t={}),{name:"flip",options:t,async fn(e){var n,r;const{placement:i,middlewareData:s,rects:o,initialPlacement:a,platform:c,elements:l}=e,{mainAxis:u=!0,crossAxis:d=!0,fallbackPlacements:h,fallbackStrategy:y="bestFit",fallbackAxisSideDirection:f="none",flipAlignment:m=!0,...g}=It(t,e);if((n=s.arrow)!=null&&n.alignmentOffset)return{};const w=ke(i),b=Be(a),v=ke(a)===a,A=await(c.isRTL==null?void 0:c.isRTL(l.floating)),E=h||(v||!m?[Qt(a)]:Eo(a)),k=f!=="none";!h&&k&&E.push(...So(a,m,f,A));const I=[a,...E],D=await hn(e,g),F=[];let $=((r=s.flip)==null?void 0:r.overflows)||[];if(u&&F.push(D[w]),d){const Z=vo(i,o,A);F.push(D[Z[0]],D[Z[1]])}if($=[...$,{placement:i,overflows:F}],!F.every(Z=>Z<=0)){var Q,_e;const Z=(((Q=s.flip)==null?void 0:Q.index)||0)+1,We=I[Z];if(We)return{data:{index:Z,overflows:$},reset:{placement:We}};let _=(_e=$.filter(R=>R.overflows[0]<=0).sort((R,T)=>R.overflows[1]-T.overflows[1])[0])==null?void 0:_e.placement;if(!_)switch(y){case"bestFit":{var Ne;const R=(Ne=$.filter(T=>{if(k){const x=Be(T.placement);return x===b||x==="y"}return!0}).map(T=>[T.placement,T.overflows.filter(x=>x>0).reduce((x,L)=>x+L,0)]).sort((T,x)=>T[1]-x[1])[0])==null?void 0:Ne[0];R&&(_=R);break}case"initialPlacement":_=a;break}if(i!==_)return{reset:{placement:_}}}return{}}}};async function ko(t,e){const{placement:n,platform:r,elements:i}=t,s=await(r.isRTL==null?void 0:r.isRTL(i.floating)),o=ke(n),a=St(n),c=Be(n)==="y",l=["left","top"].includes(o)?-1:1,u=s&&c?-1:1,d=It(e,t);let{mainAxis:h,crossAxis:y,alignmentAxis:f}=typeof d=="number"?{mainAxis:d,crossAxis:0,alignmentAxis:null}:{mainAxis:d.mainAxis||0,crossAxis:d.crossAxis||0,alignmentAxis:d.alignmentAxis};return a&&typeof f=="number"&&(y=a==="end"?f*-1:f),c?{x:y*u,y:h*l}:{x:h*l,y:y*u}}const Oo=function(t){return t===void 0&&(t=0),{name:"offset",options:t,async fn(e){var n,r;const{x:i,y:s,placement:o,middlewareData:a}=e,c=await ko(e,t);return o===((n=a.offset)==null?void 0:n.placement)&&(r=a.arrow)!=null&&r.alignmentOffset?{}:{x:i+c.x,y:s+c.y,data:{...c,placement:o}}}}},Po=function(t){return t===void 0&&(t={}),{name:"shift",options:t,async fn(e){const{x:n,y:r,placement:i}=e,{mainAxis:s=!0,crossAxis:o=!1,limiter:a={fn:g=>{let{x:w,y:b}=g;return{x:w,y:b}}},...c}=It(t,e),l={x:n,y:r},u=await hn(e,c),d=Be(ke(i)),h=Li(d);let y=l[h],f=l[d];if(s){const g=h==="y"?"top":"left",w=h==="y"?"bottom":"right",b=y+u[g],v=y-u[w];y=xr(b,y,v)}if(o){const g=d==="y"?"top":"left",w=d==="y"?"bottom":"right",b=f+u[g],v=f-u[w];f=xr(b,f,v)}const m=a.fn({...e,[h]:y,[d]:f});return{...m,data:{x:m.x-n,y:m.y-r,enabled:{[h]:s,[d]:o}}}}}},xo=function(t){return t===void 0&&(t={}),{name:"size",options:t,async fn(e){var n,r;const{placement:i,rects:s,platform:o,elements:a}=e,{apply:c=()=>{},...l}=It(t,e),u=await hn(e,l),d=ke(i),h=St(i),y=Be(i)==="y",{width:f,height:m}=s.floating;let g,w;d==="top"||d==="bottom"?(g=d,w=h===(await(o.isRTL==null?void 0:o.isRTL(a.floating))?"start":"end")?"left":"right"):(w=d,g=h==="end"?"top":"bottom");const b=m-u.top-u.bottom,v=f-u.left-u.right,A=Qe(m-u[g],b),E=Qe(f-u[w],v),k=!e.middlewareData.shift;let I=A,D=E;if((n=e.middlewareData.shift)!=null&&n.enabled.x&&(D=v),(r=e.middlewareData.shift)!=null&&r.enabled.y&&(I=b),k&&!h){const $=q(u.left,0),Q=q(u.right,0),_e=q(u.top,0),Ne=q(u.bottom,0);y?D=f-2*($!==0||Q!==0?$+Q:q(u.left,u.right)):I=m-2*(_e!==0||Ne!==0?_e+Ne:q(u.top,u.bottom))}await c({...e,availableWidth:D,availableHeight:I});const F=await o.getDimensions(a.floating);return f!==F.width||m!==F.height?{reset:{rects:!0}}:{}}}};function Fi(t){const e=ne(t);let n=parseFloat(e.width)||0,r=parseFloat(e.height)||0;const i=ue(t),s=i?t.offsetWidth:n,o=i?t.offsetHeight:r,a=Xt(n)!==s||Xt(r)!==o;return a&&(n=s,r=o),{width:n,height:r,$:a}}function cr(t){return te(t)?t:t.contextElement}function ze(t){const e=cr(t);if(!ue(e))return ae(1);const n=e.getBoundingClientRect(),{width:r,height:i,$:s}=Fi(e);let o=(s?Xt(n.width):n.width)/r,a=(s?Xt(n.height):n.height)/i;return(!o||!Number.isFinite(o))&&(o=1),(!a||!Number.isFinite(a))&&(a=1),{x:o,y:a}}const No=ae(0);function Bi(t){const e=K(t);return!ar()||!e.visualViewport?No:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function Do(t,e,n){return e===void 0&&(e=!1),!n||e&&n!==K(t)?!1:e}function $e(t,e,n,r){e===void 0&&(e=!1),n===void 0&&(n=!1);const i=t.getBoundingClientRect(),s=cr(t);let o=ae(1);e&&(r?te(r)&&(o=ze(r)):o=ze(t));const a=Do(s,n,r)?Bi(s):ae(0);let c=(i.left+a.x)/o.x,l=(i.top+a.y)/o.y,u=i.width/o.x,d=i.height/o.y;if(s){const h=K(s),y=r&&te(r)?K(r):r;let f=h,m=Hn(f);for(;m&&r&&y!==f;){const g=ze(m),w=m.getBoundingClientRect(),b=ne(m),v=w.left+(m.clientLeft+parseFloat(b.paddingLeft))*g.x,A=w.top+(m.clientTop+parseFloat(b.paddingTop))*g.y;c*=g.x,l*=g.y,u*=g.x,d*=g.y,c+=v,l+=A,f=K(m),m=Hn(f)}}return Zt({width:u,height:d,x:c,y:l})}function lr(t,e){const n=fn(t).scrollLeft;return e?e.left+n:$e(de(t)).left+n}function $i(t,e,n){n===void 0&&(n=!1);const r=t.getBoundingClientRect(),i=r.left+e.scrollLeft-(n?0:lr(t,r)),s=r.top+e.scrollTop;return{x:i,y:s}}function Lo(t){let{elements:e,rect:n,offsetParent:r,strategy:i}=t;const s=i==="fixed",o=de(r),a=e?dn(e.floating):!1;if(r===o||a&&s)return n;let c={scrollLeft:0,scrollTop:0},l=ae(1);const u=ae(0),d=ue(r);if((d||!d&&!s)&&((rt(r)!=="body"||Et(o))&&(c=fn(r)),ue(r))){const y=$e(r);l=ze(r),u.x=y.x+r.clientLeft,u.y=y.y+r.clientTop}const h=o&&!d&&!s?$i(o,c,!0):ae(0);return{width:n.width*l.x,height:n.height*l.y,x:n.x*l.x-c.scrollLeft*l.x+u.x+h.x,y:n.y*l.y-c.scrollTop*l.y+u.y+h.y}}function Mo(t){return Array.from(t.getClientRects())}function Uo(t){const e=de(t),n=fn(t),r=t.ownerDocument.body,i=q(e.scrollWidth,e.clientWidth,r.scrollWidth,r.clientWidth),s=q(e.scrollHeight,e.clientHeight,r.scrollHeight,r.clientHeight);let o=-n.scrollLeft+lr(t);const a=-n.scrollTop;return ne(r).direction==="rtl"&&(o+=q(e.clientWidth,r.clientWidth)-i),{width:i,height:s,x:o,y:a}}function Fo(t,e){const n=K(t),r=de(t),i=n.visualViewport;let s=r.clientWidth,o=r.clientHeight,a=0,c=0;if(i){s=i.width,o=i.height;const l=ar();(!l||l&&e==="fixed")&&(a=i.offsetLeft,c=i.offsetTop)}return{width:s,height:o,x:a,y:c}}function Bo(t,e){const n=$e(t,!0,e==="fixed"),r=n.top+t.clientTop,i=n.left+t.clientLeft,s=ue(t)?ze(t):ae(1),o=t.clientWidth*s.x,a=t.clientHeight*s.y,c=i*s.x,l=r*s.y;return{width:o,height:a,x:c,y:l}}function Dr(t,e,n){let r;if(e==="viewport")r=Fo(t,n);else if(e==="document")r=Uo(de(t));else if(te(e))r=Bo(e,n);else{const i=Bi(t);r={x:e.x-i.x,y:e.y-i.y,width:e.width,height:e.height}}return Zt(r)}function Hi(t,e){const n=Ce(t);return n===e||!te(n)||Xe(n)?!1:ne(n).position==="fixed"||Hi(n,e)}function $o(t,e){const n=e.get(t);if(n)return n;let r=pt(t,[],!1).filter(a=>te(a)&&rt(a)!=="body"),i=null;const s=ne(t).position==="fixed";let o=s?Ce(t):t;for(;te(o)&&!Xe(o);){const a=ne(o),c=or(o);!c&&a.position==="fixed"&&(i=null),(s?!c&&!i:!c&&a.position==="static"&&!!i&&["absolute","fixed"].includes(i.position)||Et(o)&&!c&&Hi(t,o))?r=r.filter(u=>u!==o):i=a,o=Ce(o)}return e.set(t,r),r}function Ho(t){let{element:e,boundary:n,rootBoundary:r,strategy:i}=t;const o=[...n==="clippingAncestors"?dn(e)?[]:$o(e,this._c):[].concat(n),r],a=o[0],c=o.reduce((l,u)=>{const d=Dr(e,u,i);return l.top=q(d.top,l.top),l.right=Qe(d.right,l.right),l.bottom=Qe(d.bottom,l.bottom),l.left=q(d.left,l.left),l},Dr(e,a,i));return{width:c.right-c.left,height:c.bottom-c.top,x:c.left,y:c.top}}function jo(t){const{width:e,height:n}=Fi(t);return{width:e,height:n}}function Vo(t,e,n){const r=ue(e),i=de(e),s=n==="fixed",o=$e(t,!0,s,e);let a={scrollLeft:0,scrollTop:0};const c=ae(0);if(r||!r&&!s)if((rt(e)!=="body"||Et(i))&&(a=fn(e)),r){const h=$e(e,!0,s,e);c.x=h.x+e.clientLeft,c.y=h.y+e.clientTop}else i&&(c.x=lr(i));const l=i&&!r&&!s?$i(i,a):ae(0),u=o.left+a.scrollLeft-c.x-l.x,d=o.top+a.scrollTop-c.y-l.y;return{x:u,y:d,width:o.width,height:o.height}}function kn(t){return ne(t).position==="static"}function Lr(t,e){if(!ue(t)||ne(t).position==="fixed")return null;if(e)return e(t);let n=t.offsetParent;return de(t)===n&&(n=n.ownerDocument.body),n}function ji(t,e){const n=K(t);if(dn(t))return n;if(!ue(t)){let i=Ce(t);for(;i&&!Xe(i);){if(te(i)&&!kn(i))return i;i=Ce(i)}return n}let r=Lr(t,e);for(;r&&yo(r)&&kn(r);)r=Lr(r,e);return r&&Xe(r)&&kn(r)&&!or(r)?n:r||wo(t)||n}const Wo=async function(t){const e=this.getOffsetParent||ji,n=this.getDimensions,r=await n(t.floating);return{reference:Vo(t.reference,await e(t.floating),t.strategy),floating:{x:0,y:0,width:r.width,height:r.height}}};function zo(t){return ne(t).direction==="rtl"}const qo={convertOffsetParentRelativeRectToViewportRelativeRect:Lo,getDocumentElement:de,getClippingRect:Ho,getOffsetParent:ji,getElementRects:Wo,getClientRects:Mo,getDimensions:jo,getScale:ze,isElement:te,isRTL:zo};function Vi(t,e){return t.x===e.x&&t.y===e.y&&t.width===e.width&&t.height===e.height}function Ko(t,e){let n=null,r;const i=de(t);function s(){var a;clearTimeout(r),(a=n)==null||a.disconnect(),n=null}function o(a,c){a===void 0&&(a=!1),c===void 0&&(c=1),s();const l=t.getBoundingClientRect(),{left:u,top:d,width:h,height:y}=l;if(a||e(),!h||!y)return;const f=Ft(d),m=Ft(i.clientWidth-(u+h)),g=Ft(i.clientHeight-(d+y)),w=Ft(u),v={rootMargin:-f+"px "+-m+"px "+-g+"px "+-w+"px",threshold:q(0,Qe(1,c))||1};let A=!0;function E(k){const I=k[0].intersectionRatio;if(I!==c){if(!A)return o();I?o(!1,I):r=setTimeout(()=>{o(!1,1e-7)},1e3)}I===1&&!Vi(l,t.getBoundingClientRect())&&o(),A=!1}try{n=new IntersectionObserver(E,{...v,root:i.ownerDocument})}catch{n=new IntersectionObserver(E,v)}n.observe(t)}return o(!0),s}function th(t,e,n,r){r===void 0&&(r={});const{ancestorScroll:i=!0,ancestorResize:s=!0,elementResize:o=typeof ResizeObserver=="function",layoutShift:a=typeof IntersectionObserver=="function",animationFrame:c=!1}=r,l=cr(t),u=i||s?[...l?pt(l):[],...pt(e)]:[];u.forEach(w=>{i&&w.addEventListener("scroll",n,{passive:!0}),s&&w.addEventListener("resize",n)});const d=l&&a?Ko(l,n):null;let h=-1,y=null;o&&(y=new ResizeObserver(w=>{let[b]=w;b&&b.target===l&&y&&(y.unobserve(e),cancelAnimationFrame(h),h=requestAnimationFrame(()=>{var v;(v=y)==null||v.observe(e)})),n()}),l&&!c&&y.observe(l),y.observe(e));let f,m=c?$e(t):null;c&&g();function g(){const w=$e(t);m&&!Vi(m,w)&&n(),m=w,f=requestAnimationFrame(g)}return n(),()=>{var w;u.forEach(b=>{i&&b.removeEventListener("scroll",n),s&&b.removeEventListener("resize",n)}),d==null||d(),(w=y)==null||w.disconnect(),y=null,c&&cancelAnimationFrame(f)}}const nh=hn,rh=Oo,ih=Po,sh=Co,oh=xo,ah=(t,e,n)=>{const r=new Map,i={platform:qo,...n},s={...i.platform,_c:r};return Ao(t,e,{...i,platform:s})},Go=()=>{};var Mr={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wi=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Jo=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],c=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},zi={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,c=i+2<t.length,l=c?t[i+2]:0,u=s>>2,d=(s&3)<<4|a>>4;let h=(a&15)<<2|l>>6,y=l&63;c||(y=64,o||(h=64)),r.push(n[u],n[d],n[h],n[y])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Wi(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Jo(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const l=i<t.length?n[t.charAt(i)]:64;++i;const d=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||l==null||d==null)throw new Yo;const h=s<<2|a>>4;if(r.push(h),l!==64){const y=a<<4&240|l>>2;if(r.push(y),d!==64){const f=l<<6&192|d;r.push(f)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Yo extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Xo=function(t){const e=Wi(t);return zi.encodeByteArray(e,!0)},qi=function(t){return Xo(t).replace(/\./g,"")},Ki=function(t){try{return zi.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qo(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zo=()=>Qo().__FIREBASE_DEFAULTS__,ea=()=>{if(typeof process>"u"||typeof Mr>"u")return;const t=Mr.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},ta=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Ki(t[1]);return e&&JSON.parse(e)},ur=()=>{try{return Go()||Zo()||ea()||ta()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},na=t=>{var e,n;return(n=(e=ur())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Gi=()=>{var t;return(t=ur())===null||t===void 0?void 0:t.config},Ji=t=>{var e;return(e=ur())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ra{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function V(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function ia(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(V())}function sa(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function oa(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function aa(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function ca(){const t=V();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function la(){try{return typeof indexedDB=="object"}catch{return!1}}function ua(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const da="FirebaseError";class Oe extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=da,Object.setPrototypeOf(this,Oe.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Tt.prototype.create)}}class Tt{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?fa(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Oe(i,a,r)}}function fa(t,e){return t.replace(ha,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const ha=/\{\$([^}]+)}/g;function pa(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Ze(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Ur(s)&&Ur(o)){if(!Ze(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Ur(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rt(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function dt(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function ft(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function ma(t,e){const n=new ga(t,e);return n.subscribe.bind(n)}class ga{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");ya(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=On),i.error===void 0&&(i.error=On),i.complete===void 0&&(i.complete=On);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function ya(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function On(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fe(t){return t&&t._delegate?t._delegate:t}class et{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Le="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wa{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new ra;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(_a(e))try{this.getOrInitializeService({instanceIdentifier:Le})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Le){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Le){return this.instances.has(e)}getOptions(e=Le){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:ba(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Le){return this.component?this.component.multipleInstances?e:Le:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function ba(t){return t===Le?void 0:t}function _a(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class va{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new wa(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var N;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(N||(N={}));const Ea={debug:N.DEBUG,verbose:N.VERBOSE,info:N.INFO,warn:N.WARN,error:N.ERROR,silent:N.SILENT},Ia=N.INFO,Sa={[N.DEBUG]:"log",[N.VERBOSE]:"log",[N.INFO]:"info",[N.WARN]:"warn",[N.ERROR]:"error"},Ta=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=Sa[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Yi{constructor(e){this.name=e,this._logLevel=Ia,this._logHandler=Ta,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in N))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Ea[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,N.DEBUG,...e),this._logHandler(this,N.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,N.VERBOSE,...e),this._logHandler(this,N.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,N.INFO,...e),this._logHandler(this,N.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,N.WARN,...e),this._logHandler(this,N.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,N.ERROR,...e),this._logHandler(this,N.ERROR,...e)}}const Ra=(t,e)=>e.some(n=>t instanceof n);let Fr,Br;function Aa(){return Fr||(Fr=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Ca(){return Br||(Br=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Xi=new WeakMap,Vn=new WeakMap,Qi=new WeakMap,Pn=new WeakMap,dr=new WeakMap;function ka(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Re(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Xi.set(n,t)}).catch(()=>{}),dr.set(e,t),e}function Oa(t){if(Vn.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Vn.set(t,e)}let Wn={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Vn.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Qi.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Re(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Pa(t){Wn=t(Wn)}function xa(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(xn(this),e,...n);return Qi.set(r,e.sort?e.sort():[e]),Re(r)}:Ca().includes(t)?function(...e){return t.apply(xn(this),e),Re(Xi.get(this))}:function(...e){return Re(t.apply(xn(this),e))}}function Na(t){return typeof t=="function"?xa(t):(t instanceof IDBTransaction&&Oa(t),Ra(t,Aa())?new Proxy(t,Wn):t)}function Re(t){if(t instanceof IDBRequest)return ka(t);if(Pn.has(t))return Pn.get(t);const e=Na(t);return e!==t&&(Pn.set(t,e),dr.set(e,t)),e}const xn=t=>dr.get(t);function Da(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=Re(o);return r&&o.addEventListener("upgradeneeded",c=>{r(Re(o.result),c.oldVersion,c.newVersion,Re(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),a.then(c=>{s&&c.addEventListener("close",()=>s()),i&&c.addEventListener("versionchange",l=>i(l.oldVersion,l.newVersion,l))}).catch(()=>{}),a}const La=["get","getKey","getAll","getAllKeys","count"],Ma=["put","add","delete","clear"],Nn=new Map;function $r(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Nn.get(e))return Nn.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=Ma.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||La.includes(n)))return;const s=async function(o,...a){const c=this.transaction(o,i?"readwrite":"readonly");let l=c.store;return r&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),i&&c.done]))[0]};return Nn.set(e,s),s}Pa(t=>({...t,get:(e,n,r)=>$r(e,n)||t.get(e,n,r),has:(e,n)=>!!$r(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ua{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Fa(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Fa(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const zn="@firebase/app",Hr="0.11.3";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ye=new Yi("@firebase/app"),Ba="@firebase/app-compat",$a="@firebase/analytics-compat",Ha="@firebase/analytics",ja="@firebase/app-check-compat",Va="@firebase/app-check",Wa="@firebase/auth",za="@firebase/auth-compat",qa="@firebase/database",Ka="@firebase/data-connect",Ga="@firebase/database-compat",Ja="@firebase/functions",Ya="@firebase/functions-compat",Xa="@firebase/installations",Qa="@firebase/installations-compat",Za="@firebase/messaging",ec="@firebase/messaging-compat",tc="@firebase/performance",nc="@firebase/performance-compat",rc="@firebase/remote-config",ic="@firebase/remote-config-compat",sc="@firebase/storage",oc="@firebase/storage-compat",ac="@firebase/firestore",cc="@firebase/vertexai",lc="@firebase/firestore-compat",uc="firebase",dc="11.5.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qn="[DEFAULT]",fc={[zn]:"fire-core",[Ba]:"fire-core-compat",[Ha]:"fire-analytics",[$a]:"fire-analytics-compat",[Va]:"fire-app-check",[ja]:"fire-app-check-compat",[Wa]:"fire-auth",[za]:"fire-auth-compat",[qa]:"fire-rtdb",[Ka]:"fire-data-connect",[Ga]:"fire-rtdb-compat",[Ja]:"fire-fn",[Ya]:"fire-fn-compat",[Xa]:"fire-iid",[Qa]:"fire-iid-compat",[Za]:"fire-fcm",[ec]:"fire-fcm-compat",[tc]:"fire-perf",[nc]:"fire-perf-compat",[rc]:"fire-rc",[ic]:"fire-rc-compat",[sc]:"fire-gcs",[oc]:"fire-gcs-compat",[ac]:"fire-fst",[lc]:"fire-fst-compat",[cc]:"fire-vertex","fire-js":"fire-js",[uc]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const en=new Map,hc=new Map,Kn=new Map;function jr(t,e){try{t.container.addComponent(e)}catch(n){ye.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function mt(t){const e=t.name;if(Kn.has(e))return ye.debug(`There were multiple attempts to register component ${e}.`),!1;Kn.set(e,t);for(const n of en.values())jr(n,t);for(const n of hc.values())jr(n,t);return!0}function Zi(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Y(t){return t==null?!1:t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pc={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Ae=new Tt("app","Firebase",pc);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mc{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new et("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ae.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const At=dc;function gc(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:qn,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw Ae.create("bad-app-name",{appName:String(i)});if(n||(n=Gi()),!n)throw Ae.create("no-options");const s=en.get(i);if(s){if(Ze(n,s.options)&&Ze(r,s.config))return s;throw Ae.create("duplicate-app",{appName:i})}const o=new va(i);for(const c of Kn.values())o.addComponent(c);const a=new mc(n,r,o);return en.set(i,a),a}function yc(t=qn){const e=en.get(t);if(!e&&t===qn&&Gi())return gc();if(!e)throw Ae.create("no-app",{appName:t});return e}function qe(t,e,n){var r;let i=(r=fc[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ye.warn(a.join(" "));return}mt(new et(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wc="firebase-heartbeat-database",bc=1,gt="firebase-heartbeat-store";let Dn=null;function es(){return Dn||(Dn=Da(wc,bc,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(gt)}catch(n){console.warn(n)}}}}).catch(t=>{throw Ae.create("idb-open",{originalErrorMessage:t.message})})),Dn}async function _c(t){try{const n=(await es()).transaction(gt),r=await n.objectStore(gt).get(ts(t));return await n.done,r}catch(e){if(e instanceof Oe)ye.warn(e.message);else{const n=Ae.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});ye.warn(n.message)}}}async function Vr(t,e){try{const r=(await es()).transaction(gt,"readwrite");await r.objectStore(gt).put(e,ts(t)),await r.done}catch(n){if(n instanceof Oe)ye.warn(n.message);else{const r=Ae.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});ye.warn(r.message)}}}function ts(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vc=1024,Ec=30;class Ic{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Tc(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Wr();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats.length>Ec){const o=Rc(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){ye.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Wr(),{heartbeatsToSend:r,unsentEntries:i}=Sc(this._heartbeatsCache.heartbeats),s=qi(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return ye.warn(n),""}}}function Wr(){return new Date().toISOString().substring(0,10)}function Sc(t,e=vc){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),zr(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),zr(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Tc{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return la()?ua().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await _c(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Vr(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Vr(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function zr(t){return qi(JSON.stringify({version:2,heartbeats:t})).length}function Rc(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ac(t){mt(new et("platform-logger",e=>new Ua(e),"PRIVATE")),mt(new et("heartbeat",e=>new Ic(e),"PRIVATE")),qe(zn,Hr,t),qe(zn,Hr,"esm2017"),qe("fire-js","")}Ac("");var Cc="firebase",kc="11.5.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */qe(Cc,kc,"app");function fr(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function ns(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Oc=ns,rs=new Tt("auth","Firebase",ns());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tn=new Yi("@firebase/auth");function Pc(t,...e){tn.logLevel<=N.WARN&&tn.warn(`Auth (${At}): ${t}`,...e)}function Ht(t,...e){tn.logLevel<=N.ERROR&&tn.error(`Auth (${At}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function X(t,...e){throw pr(t,...e)}function ee(t,...e){return pr(t,...e)}function hr(t,e,n){const r=Object.assign(Object.assign({},Oc()),{[e]:n});return new Tt("auth","Firebase",r).create(e,{appName:t.name})}function ge(t){return hr(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function xc(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&X(t,"argument-error"),hr(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function pr(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return rs.create(t,...e)}function S(t,e,...n){if(!t)throw pr(e,...n)}function he(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Ht(e),new Error(e)}function we(t,e){t||he(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gn(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Nc(){return qr()==="http:"||qr()==="https:"}function qr(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dc(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Nc()||oa()||"connection"in navigator)?navigator.onLine:!0}function Lc(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ct{constructor(e,n){this.shortDelay=e,this.longDelay=n,we(n>e,"Short delay should be less than long delay!"),this.isMobile=ia()||aa()}get(){return Dc()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mr(t,e){we(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class is{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;he("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;he("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;he("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mc={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uc=new Ct(3e4,6e4);function Pe(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function be(t,e,n,r,i={}){return ss(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=Rt(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode);const l=Object.assign({method:e,headers:c},s);return sa()||(l.referrerPolicy="no-referrer"),is.fetch()(os(t,t.config.apiHost,n,a),l)})}async function ss(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},Mc),e);try{const i=new Bc(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Bt(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Bt(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw Bt(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw Bt(t,"user-disabled",o);const u=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw hr(t,u,l);X(t,u)}}catch(i){if(i instanceof Oe)throw i;X(t,"network-request-failed",{message:String(i)})}}async function kt(t,e,n,r,i={}){const s=await be(t,e,n,r,i);return"mfaPendingCredential"in s&&X(t,"multi-factor-auth-required",{_serverResponse:s}),s}function os(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?mr(t.config,i):`${t.config.apiScheme}://${i}`}function Fc(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Bc{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(ee(this.auth,"network-request-failed")),Uc.get())})}}function Bt(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=ee(t,e,r);return i.customData._tokenResponse=n,i}function Kr(t){return t!==void 0&&t.enterprise!==void 0}class $c{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return Fc(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function Hc(t,e){return be(t,"GET","/v2/recaptchaConfig",Pe(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jc(t,e){return be(t,"POST","/v1/accounts:delete",e)}async function as(t,e){return be(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ht(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Vc(t,e=!1){const n=fe(t),r=await n.getIdToken(e),i=gr(r);S(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:ht(Ln(i.auth_time)),issuedAtTime:ht(Ln(i.iat)),expirationTime:ht(Ln(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Ln(t){return Number(t)*1e3}function gr(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Ht("JWT malformed, contained fewer than 3 sections"),null;try{const i=Ki(n);return i?JSON.parse(i):(Ht("Failed to decode base64 JWT payload"),null)}catch(i){return Ht("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Gr(t){const e=gr(t);return S(e,"internal-error"),S(typeof e.exp<"u","internal-error"),S(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tt(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Oe&&Wc(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function Wc({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zc{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jn{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=ht(this.lastLoginAt),this.creationTime=ht(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nn(t){var e;const n=t.auth,r=await t.getIdToken(),i=await tt(t,as(n,{idToken:r}));S(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?cs(s.providerUserInfo):[],a=Kc(t.providerData,o),c=t.isAnonymous,l=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),u=c?l:!1,d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Jn(s.createdAt,s.lastLoginAt),isAnonymous:u};Object.assign(t,d)}async function qc(t){const e=fe(t);await nn(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Kc(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function cs(t){return t.map(e=>{var{providerId:n}=e,r=fr(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Gc(t,e){const n=await ss(t,{},async()=>{const r=Rt({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=os(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",is.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function Jc(t,e){return be(t,"POST","/v2/accounts:revokeToken",Pe(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ke{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){S(e.idToken,"internal-error"),S(typeof e.idToken<"u","internal-error"),S(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Gr(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){S(e.length!==0,"internal-error");const n=Gr(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(S(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await Gc(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Ke;return r&&(S(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(S(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(S(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ke,this.toJSON())}_performRefresh(){return he("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ve(t,e){S(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class pe{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=fr(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new zc(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Jn(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await tt(this,this.stsTokenManager.getToken(this.auth,e));return S(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Vc(this,e)}reload(){return qc(this)}_assign(e){this!==e&&(S(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new pe(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){S(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await nn(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Y(this.auth.app))return Promise.reject(ge(this.auth));const e=await this.getIdToken();return await tt(this,jc(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,c,l,u;const d=(r=n.displayName)!==null&&r!==void 0?r:void 0,h=(i=n.email)!==null&&i!==void 0?i:void 0,y=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,f=(o=n.photoURL)!==null&&o!==void 0?o:void 0,m=(a=n.tenantId)!==null&&a!==void 0?a:void 0,g=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,w=(l=n.createdAt)!==null&&l!==void 0?l:void 0,b=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:v,emailVerified:A,isAnonymous:E,providerData:k,stsTokenManager:I}=n;S(v&&I,e,"internal-error");const D=Ke.fromJSON(this.name,I);S(typeof v=="string",e,"internal-error"),ve(d,e.name),ve(h,e.name),S(typeof A=="boolean",e,"internal-error"),S(typeof E=="boolean",e,"internal-error"),ve(y,e.name),ve(f,e.name),ve(m,e.name),ve(g,e.name),ve(w,e.name),ve(b,e.name);const F=new pe({uid:v,auth:e,email:h,emailVerified:A,displayName:d,isAnonymous:E,photoURL:f,phoneNumber:y,tenantId:m,stsTokenManager:D,createdAt:w,lastLoginAt:b});return k&&Array.isArray(k)&&(F.providerData=k.map($=>Object.assign({},$))),g&&(F._redirectEventId=g),F}static async _fromIdTokenResponse(e,n,r=!1){const i=new Ke;i.updateFromServerResponse(n);const s=new pe({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await nn(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];S(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?cs(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),a=new Ke;a.updateFromIdToken(r);const c=new pe({uid:i.localId,auth:e,stsTokenManager:a,isAnonymous:o}),l={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new Jn(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(c,l),c}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jr=new Map;function me(t){we(t instanceof Function,"Expected a class definition");let e=Jr.get(t);return e?(we(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Jr.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ls{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}ls.type="NONE";const Yr=ls;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jt(t,e,n){return`firebase:${t}:${e}:${n}`}class Ge{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=jt(this.userKey,i.apiKey,s),this.fullPersistenceKey=jt("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?pe._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Ge(me(Yr),e,r);const i=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let s=i[0]||me(Yr);const o=jt(r,e.config.apiKey,e.name);let a=null;for(const l of n)try{const u=await l._get(o);if(u){const d=pe._fromJSON(e,u);l!==s&&(a=d),s=l;break}}catch{}const c=i.filter(l=>l._shouldAllowMigration);return!s._shouldAllowMigration||!c.length?new Ge(s,e,r):(s=c[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==s)try{await l._remove(o)}catch{}})),new Ge(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xr(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(hs(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(us(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(ms(e))return"Blackberry";if(gs(e))return"Webos";if(ds(e))return"Safari";if((e.includes("chrome/")||fs(e))&&!e.includes("edge/"))return"Chrome";if(ps(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function us(t=V()){return/firefox\//i.test(t)}function ds(t=V()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function fs(t=V()){return/crios\//i.test(t)}function hs(t=V()){return/iemobile/i.test(t)}function ps(t=V()){return/android/i.test(t)}function ms(t=V()){return/blackberry/i.test(t)}function gs(t=V()){return/webos/i.test(t)}function yr(t=V()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Yc(t=V()){var e;return yr(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Xc(){return ca()&&document.documentMode===10}function ys(t=V()){return yr(t)||ps(t)||gs(t)||ms(t)||/windows phone/i.test(t)||hs(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ws(t,e=[]){let n;switch(t){case"Browser":n=Xr(V());break;case"Worker":n=`${Xr(V())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${At}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qc{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const c=e(s);o(c)}catch(c){a(c)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zc(t,e={}){return be(t,"GET","/v2/passwordPolicy",Pe(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const el=6;class tl{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:el,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,a;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(n=c.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),c.isValid&&(c.isValid=(r=c.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(i=c.containsLowercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(s=c.containsUppercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(a=c.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),c}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nl{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Qr(this),this.idTokenSubscription=new Qr(this),this.beforeStateQueue=new Qc(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=rs,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=me(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Ge.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await as(this,{idToken:e}),r=await pe._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Y(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(i=c.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return S(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await nn(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Lc()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Y(this.app))return Promise.reject(ge(this));const n=e?fe(e):null;return n&&S(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&S(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Y(this.app)?Promise.reject(ge(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Y(this.app)?Promise.reject(ge(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(me(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Zc(this),n=new tl(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Tt("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await Jc(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&me(e)||this._popupRedirectResolver;S(n,this,"argument-error"),this.redirectPersistenceManager=await Ge.create(this,[me(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(S(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const c=e.addObserver(n,r,i);return()=>{o=!0,c()}}else{const c=e.addObserver(n);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return S(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=ws(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;if(Y(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&Pc(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function xe(t){return fe(t)}class Qr{constructor(e){this.auth=e,this.observer=null,this.addObserver=ma(n=>this.observer=n)}get next(){return S(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let pn={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function rl(t){pn=t}function bs(t){return pn.loadJS(t)}function il(){return pn.recaptchaEnterpriseScript}function sl(){return pn.gapiScript}function ol(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class al{constructor(){this.enterprise=new cl}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class cl{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const ll="recaptcha-enterprise",_s="NO_RECAPTCHA";class ul{constructor(e){this.type=ll,this.auth=xe(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{Hc(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const l=new $c(c);return s.tenantId==null?s._agentRecaptchaConfig=l:s._tenantRecaptchaConfigs[s.tenantId]=l,o(l.siteKey)}}).catch(c=>{a(c)})})}function i(s,o,a){const c=window.grecaptcha;Kr(c)?c.enterprise.ready(()=>{c.enterprise.execute(s,{action:e}).then(l=>{o(l)}).catch(()=>{o(_s)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new al().execute("siteKey",{action:"verify"}):new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&Kr(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let c=il();c.length!==0&&(c+=a),bs(c).then(()=>{i(a,s,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}}async function Zr(t,e,n,r=!1,i=!1){const s=new ul(t);let o;if(i)o=_s;else try{o=await s.verify(n)}catch{o=await s.verify(n,!0)}const a=Object.assign({},e);if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in a){const c=a.phoneEnrollmentInfo.phoneNumber,l=a.phoneEnrollmentInfo.recaptchaToken;Object.assign(a,{phoneEnrollmentInfo:{phoneNumber:c,recaptchaToken:l,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in a){const c=a.phoneSignInInfo.recaptchaToken;Object.assign(a,{phoneSignInInfo:{recaptchaToken:c,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return a}return r?Object.assign(a,{captchaResp:o}):Object.assign(a,{captchaResponse:o}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}async function Yn(t,e,n,r,i){var s;if(!((s=t._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await Zr(t,e,n,n==="getOobCode");return r(t,o)}else return r(t,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const a=await Zr(t,e,n,n==="getOobCode");return r(t,a)}else return Promise.reject(o)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dl(t,e){const n=Zi(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Ze(s,e??{}))return i;X(i,"already-initialized")}return n.initialize({options:e})}function fl(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(me);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function hl(t,e,n){const r=xe(t);S(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=vs(e),{host:o,port:a}=pl(e),c=a===null?"":`:${a}`,l={url:`${s}//${o}${c}/`},u=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!r._canInitEmulator){S(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),S(Ze(l,r.config.emulator)&&Ze(u,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=l,r.emulatorConfig=u,r.settings.appVerificationDisabledForTesting=!0,ml()}function vs(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function pl(t){const e=vs(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:ei(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:ei(o)}}}function ei(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function ml(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wr{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return he("not implemented")}_getIdTokenResponse(e){return he("not implemented")}_linkToIdToken(e,n){return he("not implemented")}_getReauthenticationResolver(e){return he("not implemented")}}async function gl(t,e){return be(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yl(t,e){return kt(t,"POST","/v1/accounts:signInWithPassword",Pe(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wl(t,e){return kt(t,"POST","/v1/accounts:signInWithEmailLink",Pe(t,e))}async function bl(t,e){return kt(t,"POST","/v1/accounts:signInWithEmailLink",Pe(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yt extends wr{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new yt(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new yt(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Yn(e,n,"signInWithPassword",yl);case"emailLink":return wl(e,{email:this._email,oobCode:this._password});default:X(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Yn(e,r,"signUpPassword",gl);case"emailLink":return bl(e,{idToken:n,email:this._email,oobCode:this._password});default:X(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Je(t,e){return kt(t,"POST","/v1/accounts:signInWithIdp",Pe(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _l="http://localhost";class He extends wr{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new He(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):X("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=fr(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new He(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Je(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Je(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Je(e,n)}buildRequest(){const e={requestUri:_l,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Rt(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vl(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function El(t){const e=dt(ft(t)).link,n=e?dt(ft(e)).deep_link_id:null,r=dt(ft(t)).deep_link_id;return(r?dt(ft(r)).link:null)||r||n||e||t}class br{constructor(e){var n,r,i,s,o,a;const c=dt(ft(e)),l=(n=c.apiKey)!==null&&n!==void 0?n:null,u=(r=c.oobCode)!==null&&r!==void 0?r:null,d=vl((i=c.mode)!==null&&i!==void 0?i:null);S(l&&u&&d,"argument-error"),this.apiKey=l,this.operation=d,this.code=u,this.continueUrl=(s=c.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=El(e);try{return new br(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class it{constructor(){this.providerId=it.PROVIDER_ID}static credential(e,n){return yt._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=br.parseLink(n);return S(r,"argument-error"),yt._fromEmailAndCode(e,r.code,r.tenantId)}}it.PROVIDER_ID="password";it.EMAIL_PASSWORD_SIGN_IN_METHOD="password";it.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _r{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ot extends _r{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ee extends Ot{constructor(){super("facebook.com")}static credential(e){return He._fromParams({providerId:Ee.PROVIDER_ID,signInMethod:Ee.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ee.credentialFromTaggedObject(e)}static credentialFromError(e){return Ee.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ee.credential(e.oauthAccessToken)}catch{return null}}}Ee.FACEBOOK_SIGN_IN_METHOD="facebook.com";Ee.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ie extends Ot{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return He._fromParams({providerId:Ie.PROVIDER_ID,signInMethod:Ie.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Ie.credentialFromTaggedObject(e)}static credentialFromError(e){return Ie.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Ie.credential(n,r)}catch{return null}}}Ie.GOOGLE_SIGN_IN_METHOD="google.com";Ie.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Se extends Ot{constructor(){super("github.com")}static credential(e){return He._fromParams({providerId:Se.PROVIDER_ID,signInMethod:Se.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Se.credentialFromTaggedObject(e)}static credentialFromError(e){return Se.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Se.credential(e.oauthAccessToken)}catch{return null}}}Se.GITHUB_SIGN_IN_METHOD="github.com";Se.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Te extends Ot{constructor(){super("twitter.com")}static credential(e,n){return He._fromParams({providerId:Te.PROVIDER_ID,signInMethod:Te.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Te.credentialFromTaggedObject(e)}static credentialFromError(e){return Te.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Te.credential(n,r)}catch{return null}}}Te.TWITTER_SIGN_IN_METHOD="twitter.com";Te.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Il(t,e){return kt(t,"POST","/v1/accounts:signUp",Pe(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class je{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await pe._fromIdTokenResponse(e,r,i),o=ti(r);return new je({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=ti(r);return new je({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function ti(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rn extends Oe{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,rn.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new rn(e,n,r,i)}}function Es(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?rn._fromErrorAndOperation(t,s,e,r):s})}async function Sl(t,e,n=!1){const r=await tt(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return je._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Tl(t,e,n=!1){const{auth:r}=t;if(Y(r.app))return Promise.reject(ge(r));const i="reauthenticate";try{const s=await tt(t,Es(r,i,e,t),n);S(s.idToken,r,"internal-error");const o=gr(s.idToken);S(o,r,"internal-error");const{sub:a}=o;return S(t.uid===a,r,"user-mismatch"),je._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&X(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Is(t,e,n=!1){if(Y(t.app))return Promise.reject(ge(t));const r="signIn",i=await Es(t,r,e),s=await je._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function Rl(t,e){return Is(xe(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ss(t){const e=xe(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function ch(t,e,n){if(Y(t.app))return Promise.reject(ge(t));const r=xe(t),o=await Yn(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",Il).catch(c=>{throw c.code==="auth/password-does-not-meet-requirements"&&Ss(t),c}),a=await je._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(a.user),a}function lh(t,e,n){return Y(t.app)?Promise.reject(ge(t)):Rl(fe(t),it.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Ss(t),r})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Al(t,e){return be(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function uh(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=fe(t),s={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await tt(r,Al(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:c})=>c==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function Cl(t,e,n,r){return fe(t).onIdTokenChanged(e,n,r)}function kl(t,e,n){return fe(t).beforeAuthStateChanged(e,n)}function dh(t,e,n,r){return fe(t).onAuthStateChanged(e,n,r)}function fh(t){return fe(t).signOut()}const sn="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ts{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(sn,"1"),this.storage.removeItem(sn),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ol=1e3,Pl=10;class Rs extends Ts{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=ys(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);Xc()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,Pl):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},Ol)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Rs.type="LOCAL";const xl=Rs;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class As extends Ts{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}As.type="SESSION";const Cs=As;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nl(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mn{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new mn(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async l=>l(n.origin,s)),c=await Nl(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}mn.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vr(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dl{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,c)=>{const l=vr("",20);i.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(d){const h=d;if(h.data.eventId===l)switch(h.data.status){case"ack":clearTimeout(u),s=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(h.data.response);break;default:clearTimeout(u),clearTimeout(s),c(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ce(){return window}function Ll(t){ce().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ks(){return typeof ce().WorkerGlobalScope<"u"&&typeof ce().importScripts=="function"}async function Ml(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Ul(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function Fl(){return ks()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Os="firebaseLocalStorageDb",Bl=1,on="firebaseLocalStorage",Ps="fbase_key";class Pt{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function gn(t,e){return t.transaction([on],e?"readwrite":"readonly").objectStore(on)}function $l(){const t=indexedDB.deleteDatabase(Os);return new Pt(t).toPromise()}function Xn(){const t=indexedDB.open(Os,Bl);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(on,{keyPath:Ps})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(on)?e(r):(r.close(),await $l(),e(await Xn()))})})}async function ni(t,e,n){const r=gn(t,!0).put({[Ps]:e,value:n});return new Pt(r).toPromise()}async function Hl(t,e){const n=gn(t,!1).get(e),r=await new Pt(n).toPromise();return r===void 0?null:r.value}function ri(t,e){const n=gn(t,!0).delete(e);return new Pt(n).toPromise()}const jl=800,Vl=3;class xs{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Xn(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>Vl)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return ks()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=mn._getInstance(Fl()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await Ml(),!this.activeServiceWorker)return;this.sender=new Dl(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Ul()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Xn();return await ni(e,sn,"1"),await ri(e,sn),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>ni(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>Hl(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>ri(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=gn(i,!1).getAll();return new Pt(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),jl)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}xs.type="LOCAL";const Wl=xs;new Ct(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ns(t,e){return e?me(e):(S(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Er extends wr{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Je(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Je(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Je(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function zl(t){return Is(t.auth,new Er(t),t.bypassAuthState)}function ql(t){const{auth:e,user:n}=t;return S(n,e,"internal-error"),Tl(n,new Er(t),t.bypassAuthState)}async function Kl(t){const{auth:e,user:n}=t;return S(n,e,"internal-error"),Sl(n,new Er(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ds{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return zl;case"linkViaPopup":case"linkViaRedirect":return Kl;case"reauthViaPopup":case"reauthViaRedirect":return ql;default:X(this.auth,"internal-error")}}resolve(e){we(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){we(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gl=new Ct(2e3,1e4);async function hh(t,e,n){if(Y(t.app))return Promise.reject(ee(t,"operation-not-supported-in-this-environment"));const r=xe(t);xc(t,e,_r);const i=Ns(r,n);return new Me(r,"signInViaPopup",e,i).executeNotNull()}class Me extends Ds{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Me.currentPopupAction&&Me.currentPopupAction.cancel(),Me.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return S(e,this.auth,"internal-error"),e}async onExecution(){we(this.filter.length===1,"Popup operations only handle one event");const e=vr();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(ee(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(ee(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Me.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(ee(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Gl.get())};e()}}Me.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jl="pendingRedirect",Vt=new Map;class Yl extends Ds{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Vt.get(this.auth._key());if(!e){try{const r=await Xl(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Vt.set(this.auth._key(),e)}return this.bypassAuthState||Vt.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Xl(t,e){const n=eu(e),r=Zl(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function Ql(t,e){Vt.set(t._key(),e)}function Zl(t){return me(t._redirectPersistence)}function eu(t){return jt(Jl,t.config.apiKey,t.name)}async function tu(t,e,n=!1){if(Y(t.app))return Promise.reject(ge(t));const r=xe(t),i=Ns(r,e),o=await new Yl(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nu=10*60*1e3;class ru{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!iu(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Ls(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(ee(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=nu&&this.cachedEventUids.clear(),this.cachedEventUids.has(ii(e))}saveEventToCache(e){this.cachedEventUids.add(ii(e)),this.lastProcessedEventTime=Date.now()}}function ii(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Ls({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function iu(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Ls(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function su(t,e={}){return be(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ou=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,au=/^https?/;async function cu(t){if(t.config.emulator)return;const{authorizedDomains:e}=await su(t);for(const n of e)try{if(lu(n))return}catch{}X(t,"unauthorized-domain")}function lu(t){const e=Gn(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!au.test(n))return!1;if(ou.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uu=new Ct(3e4,6e4);function si(){const t=ce().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function du(t){return new Promise((e,n)=>{var r,i,s;function o(){si(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{si(),n(ee(t,"network-request-failed"))},timeout:uu.get()})}if(!((i=(r=ce().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=ce().gapi)===null||s===void 0)&&s.load)o();else{const a=ol("iframefcb");return ce()[a]=()=>{gapi.load?o():n(ee(t,"network-request-failed"))},bs(`${sl()}?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw Wt=null,e})}let Wt=null;function fu(t){return Wt=Wt||du(t),Wt}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hu=new Ct(5e3,15e3),pu="__/auth/iframe",mu="emulator/auth/iframe",gu={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},yu=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function wu(t){const e=t.config;S(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?mr(e,mu):`https://${t.config.authDomain}/${pu}`,r={apiKey:e.apiKey,appName:t.name,v:At},i=yu.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Rt(r).slice(1)}`}async function bu(t){const e=await fu(t),n=ce().gapi;return S(n,t,"internal-error"),e.open({where:document.body,url:wu(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:gu,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=ee(t,"network-request-failed"),a=ce().setTimeout(()=>{s(o)},hu.get());function c(){ce().clearTimeout(a),i(r)}r.ping(c).then(c,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _u={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},vu=500,Eu=600,Iu="_blank",Su="http://localhost";class oi{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Tu(t,e,n,r=vu,i=Eu){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},_u),{width:r.toString(),height:i.toString(),top:s,left:o}),l=V().toLowerCase();n&&(a=fs(l)?Iu:n),us(l)&&(e=e||Su,c.scrollbars="yes");const u=Object.entries(c).reduce((h,[y,f])=>`${h}${y}=${f},`,"");if(Yc(l)&&a!=="_self")return Ru(e||"",a),new oi(null);const d=window.open(e||"",a,u);S(d,t,"popup-blocked");try{d.focus()}catch{}return new oi(d)}function Ru(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Au="__/auth/handler",Cu="emulator/auth/handler",ku=encodeURIComponent("fac");async function ai(t,e,n,r,i,s){S(t.config.authDomain,t,"auth-domain-config-required"),S(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:At,eventId:i};if(e instanceof _r){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",pa(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,d]of Object.entries({}))o[u]=d}if(e instanceof Ot){const u=e.getScopes().filter(d=>d!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const c=await t._getAppCheckToken(),l=c?`#${ku}=${encodeURIComponent(c)}`:"";return`${Ou(t)}?${Rt(a).slice(1)}${l}`}function Ou({config:t}){return t.emulator?mr(t,Cu):`https://${t.authDomain}/${Au}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mn="webStorageSupport";class Pu{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Cs,this._completeRedirectFn=tu,this._overrideRedirectResult=Ql}async _openPopup(e,n,r,i){var s;we((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await ai(e,n,r,Gn(),i);return Tu(e,o,vr())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await ai(e,n,r,Gn(),i);return Ll(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(we(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await bu(e),r=new ru(e);return n.register("authEvent",i=>(S(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Mn,{type:Mn},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Mn];o!==void 0&&n(!!o),X(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=cu(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return ys()||ds()||yr()}}const xu=Pu;var ci="@firebase/auth",li="1.9.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nu{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){S(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Du(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Lu(t){mt(new et("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;S(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:ws(t)},l=new nl(r,i,s,c);return fl(l,n),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),mt(new et("auth-internal",e=>{const n=xe(e.getProvider("auth").getImmediate());return(r=>new Nu(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),qe(ci,li,Du(t)),qe(ci,li,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mu=5*60,Uu=Ji("authIdTokenMaxAge")||Mu;let ui=null;const Fu=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>Uu)return;const i=n==null?void 0:n.token;ui!==i&&(ui=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function ph(t=yc()){const e=Zi(t,"auth");if(e.isInitialized())return e.getImmediate();const n=dl(t,{popupRedirectResolver:xu,persistence:[Wl,xl,Cs]}),r=Ji("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=Fu(s.toString());kl(n,o,()=>o(n.currentUser)),Cl(n,a=>o(a))}}const i=na("auth");return i&&hl(n,`http://${i}`),n}function Bu(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}rl({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=ee("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",Bu().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Lu("Browser");var ct={},di;function $u(){if(di)return ct;di=1,Object.defineProperty(ct,"__esModule",{value:!0}),ct.parse=o,ct.serialize=l;const t=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,e=/^[\u0021-\u003A\u003C-\u007E]*$/,n=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,r=/^[\u0020-\u003A\u003D-\u007E]*$/,i=Object.prototype.toString,s=(()=>{const h=function(){};return h.prototype=Object.create(null),h})();function o(h,y){const f=new s,m=h.length;if(m<2)return f;const g=(y==null?void 0:y.decode)||u;let w=0;do{const b=h.indexOf("=",w);if(b===-1)break;const v=h.indexOf(";",w),A=v===-1?m:v;if(b>A){w=h.lastIndexOf(";",b-1)+1;continue}const E=a(h,w,b),k=c(h,b,E),I=h.slice(E,k);if(f[I]===void 0){let D=a(h,b+1,A),F=c(h,A,D);const $=g(h.slice(D,F));f[I]=$}w=A+1}while(w<m);return f}function a(h,y,f){do{const m=h.charCodeAt(y);if(m!==32&&m!==9)return y}while(++y<f);return f}function c(h,y,f){for(;y>f;){const m=h.charCodeAt(--y);if(m!==32&&m!==9)return y+1}return f}function l(h,y,f){const m=(f==null?void 0:f.encode)||encodeURIComponent;if(!t.test(h))throw new TypeError(`argument name is invalid: ${h}`);const g=m(y);if(!e.test(g))throw new TypeError(`argument val is invalid: ${y}`);let w=h+"="+g;if(!f)return w;if(f.maxAge!==void 0){if(!Number.isInteger(f.maxAge))throw new TypeError(`option maxAge is invalid: ${f.maxAge}`);w+="; Max-Age="+f.maxAge}if(f.domain){if(!n.test(f.domain))throw new TypeError(`option domain is invalid: ${f.domain}`);w+="; Domain="+f.domain}if(f.path){if(!r.test(f.path))throw new TypeError(`option path is invalid: ${f.path}`);w+="; Path="+f.path}if(f.expires){if(!d(f.expires)||!Number.isFinite(f.expires.valueOf()))throw new TypeError(`option expires is invalid: ${f.expires}`);w+="; Expires="+f.expires.toUTCString()}if(f.httpOnly&&(w+="; HttpOnly"),f.secure&&(w+="; Secure"),f.partitioned&&(w+="; Partitioned"),f.priority)switch(typeof f.priority=="string"?f.priority.toLowerCase():void 0){case"low":w+="; Priority=Low";break;case"medium":w+="; Priority=Medium";break;case"high":w+="; Priority=High";break;default:throw new TypeError(`option priority is invalid: ${f.priority}`)}if(f.sameSite)switch(typeof f.sameSite=="string"?f.sameSite.toLowerCase():f.sameSite){case!0:case"strict":w+="; SameSite=Strict";break;case"lax":w+="; SameSite=Lax";break;case"none":w+="; SameSite=None";break;default:throw new TypeError(`option sameSite is invalid: ${f.sameSite}`)}return w}function u(h){if(h.indexOf("%")===-1)return h;try{return decodeURIComponent(h)}catch{return h}}function d(h){return i.call(h)==="[object Date]"}return ct}$u();function fi(){return fi=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)({}).hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},fi.apply(null,arguments)}function Hu(t){if(t.sheet)return t.sheet;for(var e=0;e<document.styleSheets.length;e++)if(document.styleSheets[e].ownerNode===t)return document.styleSheets[e]}function ju(t){var e=document.createElement("style");return e.setAttribute("data-emotion",t.key),t.nonce!==void 0&&e.setAttribute("nonce",t.nonce),e.appendChild(document.createTextNode("")),e.setAttribute("data-s",""),e}var Vu=function(){function t(n){var r=this;this._insertTag=function(i){var s;r.tags.length===0?r.insertionPoint?s=r.insertionPoint.nextSibling:r.prepend?s=r.container.firstChild:s=r.before:s=r.tags[r.tags.length-1].nextSibling,r.container.insertBefore(i,s),r.tags.push(i)},this.isSpeedy=n.speedy===void 0?!0:n.speedy,this.tags=[],this.ctr=0,this.nonce=n.nonce,this.key=n.key,this.container=n.container,this.prepend=n.prepend,this.insertionPoint=n.insertionPoint,this.before=null}var e=t.prototype;return e.hydrate=function(r){r.forEach(this._insertTag)},e.insert=function(r){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(ju(this));var i=this.tags[this.tags.length-1];if(this.isSpeedy){var s=Hu(i);try{s.insertRule(r,s.cssRules.length)}catch{}}else i.appendChild(document.createTextNode(r));this.ctr++},e.flush=function(){this.tags.forEach(function(r){var i;return(i=r.parentNode)==null?void 0:i.removeChild(r)}),this.tags=[],this.ctr=0},t}(),H="-ms-",an="-moz-",O="-webkit-",Ms="comm",Ir="rule",Sr="decl",Wu="@import",Us="@keyframes",zu="@layer",qu=Math.abs,yn=String.fromCharCode,Ku=Object.assign;function Gu(t,e){return B(t,0)^45?(((e<<2^B(t,0))<<2^B(t,1))<<2^B(t,2))<<2^B(t,3):0}function Fs(t){return t.trim()}function Ju(t,e){return(t=e.exec(t))?t[0]:t}function P(t,e,n){return t.replace(e,n)}function Qn(t,e){return t.indexOf(e)}function B(t,e){return t.charCodeAt(e)|0}function wt(t,e,n){return t.slice(e,n)}function se(t){return t.length}function Tr(t){return t.length}function $t(t,e){return e.push(t),t}function Yu(t,e){return t.map(e).join("")}var wn=1,nt=1,Bs=0,z=0,M=0,st="";function bn(t,e,n,r,i,s,o){return{value:t,root:e,parent:n,type:r,props:i,children:s,line:wn,column:nt,length:o,return:""}}function lt(t,e){return Ku(bn("",null,null,"",null,null,0),t,{length:-t.length},e)}function Xu(){return M}function Qu(){return M=z>0?B(st,--z):0,nt--,M===10&&(nt=1,wn--),M}function G(){return M=z<Bs?B(st,z++):0,nt++,M===10&&(nt=1,wn++),M}function le(){return B(st,z)}function zt(){return z}function xt(t,e){return wt(st,t,e)}function bt(t){switch(t){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function $s(t){return wn=nt=1,Bs=se(st=t),z=0,[]}function Hs(t){return st="",t}function qt(t){return Fs(xt(z-1,Zn(t===91?t+2:t===40?t+1:t)))}function Zu(t){for(;(M=le())&&M<33;)G();return bt(t)>2||bt(M)>3?"":" "}function ed(t,e){for(;--e&&G()&&!(M<48||M>102||M>57&&M<65||M>70&&M<97););return xt(t,zt()+(e<6&&le()==32&&G()==32))}function Zn(t){for(;G();)switch(M){case t:return z;case 34:case 39:t!==34&&t!==39&&Zn(M);break;case 40:t===41&&Zn(t);break;case 92:G();break}return z}function td(t,e){for(;G()&&t+M!==57;)if(t+M===84&&le()===47)break;return"/*"+xt(e,z-1)+"*"+yn(t===47?t:G())}function nd(t){for(;!bt(le());)G();return xt(t,z)}function rd(t){return Hs(Kt("",null,null,null,[""],t=$s(t),0,[0],t))}function Kt(t,e,n,r,i,s,o,a,c){for(var l=0,u=0,d=o,h=0,y=0,f=0,m=1,g=1,w=1,b=0,v="",A=i,E=s,k=r,I=v;g;)switch(f=b,b=G()){case 40:if(f!=108&&B(I,d-1)==58){Qn(I+=P(qt(b),"&","&\f"),"&\f")!=-1&&(w=-1);break}case 34:case 39:case 91:I+=qt(b);break;case 9:case 10:case 13:case 32:I+=Zu(f);break;case 92:I+=ed(zt()-1,7);continue;case 47:switch(le()){case 42:case 47:$t(id(td(G(),zt()),e,n),c);break;default:I+="/"}break;case 123*m:a[l++]=se(I)*w;case 125*m:case 59:case 0:switch(b){case 0:case 125:g=0;case 59+u:w==-1&&(I=P(I,/\f/g,"")),y>0&&se(I)-d&&$t(y>32?pi(I+";",r,n,d-1):pi(P(I," ","")+";",r,n,d-2),c);break;case 59:I+=";";default:if($t(k=hi(I,e,n,l,u,i,a,v,A=[],E=[],d),s),b===123)if(u===0)Kt(I,e,k,k,A,s,d,a,E);else switch(h===99&&B(I,3)===110?100:h){case 100:case 108:case 109:case 115:Kt(t,k,k,r&&$t(hi(t,k,k,0,0,i,a,v,i,A=[],d),E),i,E,d,a,r?A:E);break;default:Kt(I,k,k,k,[""],E,0,a,E)}}l=u=y=0,m=w=1,v=I="",d=o;break;case 58:d=1+se(I),y=f;default:if(m<1){if(b==123)--m;else if(b==125&&m++==0&&Qu()==125)continue}switch(I+=yn(b),b*m){case 38:w=u>0?1:(I+="\f",-1);break;case 44:a[l++]=(se(I)-1)*w,w=1;break;case 64:le()===45&&(I+=qt(G())),h=le(),u=d=se(v=I+=nd(zt())),b++;break;case 45:f===45&&se(I)==2&&(m=0)}}return s}function hi(t,e,n,r,i,s,o,a,c,l,u){for(var d=i-1,h=i===0?s:[""],y=Tr(h),f=0,m=0,g=0;f<r;++f)for(var w=0,b=wt(t,d+1,d=qu(m=o[f])),v=t;w<y;++w)(v=Fs(m>0?h[w]+" "+b:P(b,/&\f/g,h[w])))&&(c[g++]=v);return bn(t,e,n,i===0?Ir:a,c,l,u)}function id(t,e,n){return bn(t,e,n,Ms,yn(Xu()),wt(t,2,-2),0)}function pi(t,e,n,r){return bn(t,e,n,Sr,wt(t,0,r),wt(t,r+1,-1),r)}function Ye(t,e){for(var n="",r=Tr(t),i=0;i<r;i++)n+=e(t[i],i,t,e)||"";return n}function sd(t,e,n,r){switch(t.type){case zu:if(t.children.length)break;case Wu:case Sr:return t.return=t.return||t.value;case Ms:return"";case Us:return t.return=t.value+"{"+Ye(t.children,r)+"}";case Ir:t.value=t.props.join(",")}return se(n=Ye(t.children,r))?t.return=t.value+"{"+n+"}":""}function od(t){var e=Tr(t);return function(n,r,i,s){for(var o="",a=0;a<e;a++)o+=t[a](n,r,i,s)||"";return o}}function ad(t){return function(e){e.root||(e=e.return)&&t(e)}}function js(t){var e=Object.create(null);return function(n){return e[n]===void 0&&(e[n]=t(n)),e[n]}}var cd=function(e,n,r){for(var i=0,s=0;i=s,s=le(),i===38&&s===12&&(n[r]=1),!bt(s);)G();return xt(e,z)},ld=function(e,n){var r=-1,i=44;do switch(bt(i)){case 0:i===38&&le()===12&&(n[r]=1),e[r]+=cd(z-1,n,r);break;case 2:e[r]+=qt(i);break;case 4:if(i===44){e[++r]=le()===58?"&\f":"",n[r]=e[r].length;break}default:e[r]+=yn(i)}while(i=G());return e},ud=function(e,n){return Hs(ld($s(e),n))},mi=new WeakMap,dd=function(e){if(!(e.type!=="rule"||!e.parent||e.length<1)){for(var n=e.value,r=e.parent,i=e.column===r.column&&e.line===r.line;r.type!=="rule";)if(r=r.parent,!r)return;if(!(e.props.length===1&&n.charCodeAt(0)!==58&&!mi.get(r))&&!i){mi.set(e,!0);for(var s=[],o=ud(n,s),a=r.props,c=0,l=0;c<o.length;c++)for(var u=0;u<a.length;u++,l++)e.props[l]=s[c]?o[c].replace(/&\f/g,a[u]):a[u]+" "+o[c]}}},fd=function(e){if(e.type==="decl"){var n=e.value;n.charCodeAt(0)===108&&n.charCodeAt(2)===98&&(e.return="",e.value="")}};function Vs(t,e){switch(Gu(t,e)){case 5103:return O+"print-"+t+t;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return O+t+t;case 5349:case 4246:case 4810:case 6968:case 2756:return O+t+an+t+H+t+t;case 6828:case 4268:return O+t+H+t+t;case 6165:return O+t+H+"flex-"+t+t;case 5187:return O+t+P(t,/(\w+).+(:[^]+)/,O+"box-$1$2"+H+"flex-$1$2")+t;case 5443:return O+t+H+"flex-item-"+P(t,/flex-|-self/,"")+t;case 4675:return O+t+H+"flex-line-pack"+P(t,/align-content|flex-|-self/,"")+t;case 5548:return O+t+H+P(t,"shrink","negative")+t;case 5292:return O+t+H+P(t,"basis","preferred-size")+t;case 6060:return O+"box-"+P(t,"-grow","")+O+t+H+P(t,"grow","positive")+t;case 4554:return O+P(t,/([^-])(transform)/g,"$1"+O+"$2")+t;case 6187:return P(P(P(t,/(zoom-|grab)/,O+"$1"),/(image-set)/,O+"$1"),t,"")+t;case 5495:case 3959:return P(t,/(image-set\([^]*)/,O+"$1$`$1");case 4968:return P(P(t,/(.+:)(flex-)?(.*)/,O+"box-pack:$3"+H+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+O+t+t;case 4095:case 3583:case 4068:case 2532:return P(t,/(.+)-inline(.+)/,O+"$1$2")+t;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(se(t)-1-e>6)switch(B(t,e+1)){case 109:if(B(t,e+4)!==45)break;case 102:return P(t,/(.+:)(.+)-([^]+)/,"$1"+O+"$2-$3$1"+an+(B(t,e+3)==108?"$3":"$2-$3"))+t;case 115:return~Qn(t,"stretch")?Vs(P(t,"stretch","fill-available"),e)+t:t}break;case 4949:if(B(t,e+1)!==115)break;case 6444:switch(B(t,se(t)-3-(~Qn(t,"!important")&&10))){case 107:return P(t,":",":"+O)+t;case 101:return P(t,/(.+:)([^;!]+)(;|!.+)?/,"$1"+O+(B(t,14)===45?"inline-":"")+"box$3$1"+O+"$2$3$1"+H+"$2box$3")+t}break;case 5936:switch(B(t,e+11)){case 114:return O+t+H+P(t,/[svh]\w+-[tblr]{2}/,"tb")+t;case 108:return O+t+H+P(t,/[svh]\w+-[tblr]{2}/,"tb-rl")+t;case 45:return O+t+H+P(t,/[svh]\w+-[tblr]{2}/,"lr")+t}return O+t+H+t+t}return t}var hd=function(e,n,r,i){if(e.length>-1&&!e.return)switch(e.type){case Sr:e.return=Vs(e.value,e.length);break;case Us:return Ye([lt(e,{value:P(e.value,"@","@"+O)})],i);case Ir:if(e.length)return Yu(e.props,function(s){switch(Ju(s,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return Ye([lt(e,{props:[P(s,/:(read-\w+)/,":"+an+"$1")]})],i);case"::placeholder":return Ye([lt(e,{props:[P(s,/:(plac\w+)/,":"+O+"input-$1")]}),lt(e,{props:[P(s,/:(plac\w+)/,":"+an+"$1")]}),lt(e,{props:[P(s,/:(plac\w+)/,H+"input-$1")]})],i)}return""})}},pd=[hd],mh=function(e){var n=e.key;if(n==="css"){var r=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(r,function(m){var g=m.getAttribute("data-emotion");g.indexOf(" ")!==-1&&(document.head.appendChild(m),m.setAttribute("data-s",""))})}var i=e.stylisPlugins||pd,s={},o,a=[];o=e.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+n+' "]'),function(m){for(var g=m.getAttribute("data-emotion").split(" "),w=1;w<g.length;w++)s[g[w]]=!0;a.push(m)});var c,l=[dd,fd];{var u,d=[sd,ad(function(m){u.insert(m)})],h=od(l.concat(i,d)),y=function(g){return Ye(rd(g),h)};c=function(g,w,b,v){u=b,y(g?g+"{"+w.styles+"}":w.styles),v&&(f.inserted[w.name]=!0)}}var f={key:n,sheet:new Vu({key:n,container:o,nonce:e.nonce,speedy:e.speedy,prepend:e.prepend,insertionPoint:e.insertionPoint}),nonce:e.nonce,inserted:s,registered:{},insert:c};return f.sheet.hydrate(a),f},md=!0;function gh(t,e,n){var r="";return n.split(" ").forEach(function(i){t[i]!==void 0?e.push(t[i]+";"):i&&(r+=i+" ")}),r}var gd=function(e,n,r){var i=e.key+"-"+n.name;(r===!1||md===!1)&&e.registered[i]===void 0&&(e.registered[i]=n.styles)},yh=function(e,n,r){gd(e,n,r);var i=e.key+"-"+n.name;if(e.inserted[n.name]===void 0){var s=n;do e.insert(n===s?"."+i:"",s,e.sheet,!0),s=s.next;while(s!==void 0)}};function yd(t){for(var e=0,n,r=0,i=t.length;i>=4;++r,i-=4)n=t.charCodeAt(r)&255|(t.charCodeAt(++r)&255)<<8|(t.charCodeAt(++r)&255)<<16|(t.charCodeAt(++r)&255)<<24,n=(n&65535)*1540483477+((n>>>16)*59797<<16),n^=n>>>24,e=(n&65535)*1540483477+((n>>>16)*59797<<16)^(e&65535)*1540483477+((e>>>16)*59797<<16);switch(i){case 3:e^=(t.charCodeAt(r+2)&255)<<16;case 2:e^=(t.charCodeAt(r+1)&255)<<8;case 1:e^=t.charCodeAt(r)&255,e=(e&65535)*1540483477+((e>>>16)*59797<<16)}return e^=e>>>13,e=(e&65535)*1540483477+((e>>>16)*59797<<16),((e^e>>>15)>>>0).toString(36)}var wd={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},bd=/[A-Z]|^ms/g,_d=/_EMO_([^_]+?)_([^]*?)_EMO_/g,Ws=function(e){return e.charCodeAt(1)===45},gi=function(e){return e!=null&&typeof e!="boolean"},Un=js(function(t){return Ws(t)?t:t.replace(bd,"-$&").toLowerCase()}),yi=function(e,n){switch(e){case"animation":case"animationName":if(typeof n=="string")return n.replace(_d,function(r,i,s){return oe={name:i,styles:s,next:oe},i})}return wd[e]!==1&&!Ws(e)&&typeof n=="number"&&n!==0?n+"px":n};function _t(t,e,n){if(n==null)return"";var r=n;if(r.__emotion_styles!==void 0)return r;switch(typeof n){case"boolean":return"";case"object":{var i=n;if(i.anim===1)return oe={name:i.name,styles:i.styles,next:oe},i.name;var s=n;if(s.styles!==void 0){var o=s.next;if(o!==void 0)for(;o!==void 0;)oe={name:o.name,styles:o.styles,next:oe},o=o.next;var a=s.styles+";";return a}return vd(t,e,n)}case"function":{if(t!==void 0){var c=oe,l=n(t);return oe=c,_t(t,e,l)}break}}var u=n;if(e==null)return u;var d=e[u];return d!==void 0?d:u}function vd(t,e,n){var r="";if(Array.isArray(n))for(var i=0;i<n.length;i++)r+=_t(t,e,n[i])+";";else for(var s in n){var o=n[s];if(typeof o!="object"){var a=o;e!=null&&e[a]!==void 0?r+=s+"{"+e[a]+"}":gi(a)&&(r+=Un(s)+":"+yi(s,a)+";")}else if(Array.isArray(o)&&typeof o[0]=="string"&&(e==null||e[o[0]]===void 0))for(var c=0;c<o.length;c++)gi(o[c])&&(r+=Un(s)+":"+yi(s,o[c])+";");else{var l=_t(t,e,o);switch(s){case"animation":case"animationName":{r+=Un(s)+":"+l+";";break}default:r+=s+"{"+l+"}"}}}return r}var wi=/label:\s*([^\s;{]+)\s*(;|$)/g,oe;function wh(t,e,n){if(t.length===1&&typeof t[0]=="object"&&t[0]!==null&&t[0].styles!==void 0)return t[0];var r=!0,i="";oe=void 0;var s=t[0];if(s==null||s.raw===void 0)r=!1,i+=_t(n,e,s);else{var o=s;i+=o[0]}for(var a=1;a<t.length;a++)if(i+=_t(n,e,t[a]),r){var c=s;i+=c[a]}wi.lastIndex=0;for(var l="",u;(u=wi.exec(i))!==null;)l+="-"+u[1];var d=yd(i)+l;return{name:d,styles:i,next:oe}}var Ed=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,bh=js(function(t){return Ed.test(t)||t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)<91});function zs(t,e){return function(){return t.apply(e,arguments)}}const{toString:Id}=Object.prototype,{getPrototypeOf:Rr}=Object,_n=(t=>e=>{const n=Id.call(e);return t[n]||(t[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),re=t=>(t=t.toLowerCase(),e=>_n(e)===t),vn=t=>e=>typeof e===t,{isArray:ot}=Array,vt=vn("undefined");function Sd(t){return t!==null&&!vt(t)&&t.constructor!==null&&!vt(t.constructor)&&J(t.constructor.isBuffer)&&t.constructor.isBuffer(t)}const qs=re("ArrayBuffer");function Td(t){let e;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?e=ArrayBuffer.isView(t):e=t&&t.buffer&&qs(t.buffer),e}const Rd=vn("string"),J=vn("function"),Ks=vn("number"),En=t=>t!==null&&typeof t=="object",Ad=t=>t===!0||t===!1,Gt=t=>{if(_n(t)!=="object")return!1;const e=Rr(t);return(e===null||e===Object.prototype||Object.getPrototypeOf(e)===null)&&!(Symbol.toStringTag in t)&&!(Symbol.iterator in t)},Cd=re("Date"),kd=re("File"),Od=re("Blob"),Pd=re("FileList"),xd=t=>En(t)&&J(t.pipe),Nd=t=>{let e;return t&&(typeof FormData=="function"&&t instanceof FormData||J(t.append)&&((e=_n(t))==="formdata"||e==="object"&&J(t.toString)&&t.toString()==="[object FormData]"))},Dd=re("URLSearchParams"),[Ld,Md,Ud,Fd]=["ReadableStream","Request","Response","Headers"].map(re),Bd=t=>t.trim?t.trim():t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function Nt(t,e,{allOwnKeys:n=!1}={}){if(t===null||typeof t>"u")return;let r,i;if(typeof t!="object"&&(t=[t]),ot(t))for(r=0,i=t.length;r<i;r++)e.call(null,t[r],r,t);else{const s=n?Object.getOwnPropertyNames(t):Object.keys(t),o=s.length;let a;for(r=0;r<o;r++)a=s[r],e.call(null,t[a],a,t)}}function Gs(t,e){e=e.toLowerCase();const n=Object.keys(t);let r=n.length,i;for(;r-- >0;)if(i=n[r],e===i.toLowerCase())return i;return null}const Ue=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,Js=t=>!vt(t)&&t!==Ue;function er(){const{caseless:t}=Js(this)&&this||{},e={},n=(r,i)=>{const s=t&&Gs(e,i)||i;Gt(e[s])&&Gt(r)?e[s]=er(e[s],r):Gt(r)?e[s]=er({},r):ot(r)?e[s]=r.slice():e[s]=r};for(let r=0,i=arguments.length;r<i;r++)arguments[r]&&Nt(arguments[r],n);return e}const $d=(t,e,n,{allOwnKeys:r}={})=>(Nt(e,(i,s)=>{n&&J(i)?t[s]=zs(i,n):t[s]=i},{allOwnKeys:r}),t),Hd=t=>(t.charCodeAt(0)===65279&&(t=t.slice(1)),t),jd=(t,e,n,r)=>{t.prototype=Object.create(e.prototype,r),t.prototype.constructor=t,Object.defineProperty(t,"super",{value:e.prototype}),n&&Object.assign(t.prototype,n)},Vd=(t,e,n,r)=>{let i,s,o;const a={};if(e=e||{},t==null)return e;do{for(i=Object.getOwnPropertyNames(t),s=i.length;s-- >0;)o=i[s],(!r||r(o,t,e))&&!a[o]&&(e[o]=t[o],a[o]=!0);t=n!==!1&&Rr(t)}while(t&&(!n||n(t,e))&&t!==Object.prototype);return e},Wd=(t,e,n)=>{t=String(t),(n===void 0||n>t.length)&&(n=t.length),n-=e.length;const r=t.indexOf(e,n);return r!==-1&&r===n},zd=t=>{if(!t)return null;if(ot(t))return t;let e=t.length;if(!Ks(e))return null;const n=new Array(e);for(;e-- >0;)n[e]=t[e];return n},qd=(t=>e=>t&&e instanceof t)(typeof Uint8Array<"u"&&Rr(Uint8Array)),Kd=(t,e)=>{const r=(t&&t[Symbol.iterator]).call(t);let i;for(;(i=r.next())&&!i.done;){const s=i.value;e.call(t,s[0],s[1])}},Gd=(t,e)=>{let n;const r=[];for(;(n=t.exec(e))!==null;)r.push(n);return r},Jd=re("HTMLFormElement"),Yd=t=>t.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,i){return r.toUpperCase()+i}),bi=(({hasOwnProperty:t})=>(e,n)=>t.call(e,n))(Object.prototype),Xd=re("RegExp"),Ys=(t,e)=>{const n=Object.getOwnPropertyDescriptors(t),r={};Nt(n,(i,s)=>{let o;(o=e(i,s,t))!==!1&&(r[s]=o||i)}),Object.defineProperties(t,r)},Qd=t=>{Ys(t,(e,n)=>{if(J(t)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=t[n];if(J(r)){if(e.enumerable=!1,"writable"in e){e.writable=!1;return}e.set||(e.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},Zd=(t,e)=>{const n={},r=i=>{i.forEach(s=>{n[s]=!0})};return ot(t)?r(t):r(String(t).split(e)),n},ef=()=>{},tf=(t,e)=>t!=null&&Number.isFinite(t=+t)?t:e;function nf(t){return!!(t&&J(t.append)&&t[Symbol.toStringTag]==="FormData"&&t[Symbol.iterator])}const rf=t=>{const e=new Array(10),n=(r,i)=>{if(En(r)){if(e.indexOf(r)>=0)return;if(!("toJSON"in r)){e[i]=r;const s=ot(r)?[]:{};return Nt(r,(o,a)=>{const c=n(o,i+1);!vt(c)&&(s[a]=c)}),e[i]=void 0,s}}return r};return n(t,0)},sf=re("AsyncFunction"),of=t=>t&&(En(t)||J(t))&&J(t.then)&&J(t.catch),Xs=((t,e)=>t?setImmediate:e?((n,r)=>(Ue.addEventListener("message",({source:i,data:s})=>{i===Ue&&s===n&&r.length&&r.shift()()},!1),i=>{r.push(i),Ue.postMessage(n,"*")}))(`axios@${Math.random()}`,[]):n=>setTimeout(n))(typeof setImmediate=="function",J(Ue.postMessage)),af=typeof queueMicrotask<"u"?queueMicrotask.bind(Ue):typeof process<"u"&&process.nextTick||Xs,p={isArray:ot,isArrayBuffer:qs,isBuffer:Sd,isFormData:Nd,isArrayBufferView:Td,isString:Rd,isNumber:Ks,isBoolean:Ad,isObject:En,isPlainObject:Gt,isReadableStream:Ld,isRequest:Md,isResponse:Ud,isHeaders:Fd,isUndefined:vt,isDate:Cd,isFile:kd,isBlob:Od,isRegExp:Xd,isFunction:J,isStream:xd,isURLSearchParams:Dd,isTypedArray:qd,isFileList:Pd,forEach:Nt,merge:er,extend:$d,trim:Bd,stripBOM:Hd,inherits:jd,toFlatObject:Vd,kindOf:_n,kindOfTest:re,endsWith:Wd,toArray:zd,forEachEntry:Kd,matchAll:Gd,isHTMLForm:Jd,hasOwnProperty:bi,hasOwnProp:bi,reduceDescriptors:Ys,freezeMethods:Qd,toObjectSet:Zd,toCamelCase:Yd,noop:ef,toFiniteNumber:tf,findKey:Gs,global:Ue,isContextDefined:Js,isSpecCompliantForm:nf,toJSONObject:rf,isAsyncFn:sf,isThenable:of,setImmediate:Xs,asap:af};function C(t,e,n,r,i){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=t,this.name="AxiosError",e&&(this.code=e),n&&(this.config=n),r&&(this.request=r),i&&(this.response=i,this.status=i.status?i.status:null)}p.inherits(C,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:p.toJSONObject(this.config),code:this.code,status:this.status}}});const Qs=C.prototype,Zs={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(t=>{Zs[t]={value:t}});Object.defineProperties(C,Zs);Object.defineProperty(Qs,"isAxiosError",{value:!0});C.from=(t,e,n,r,i,s)=>{const o=Object.create(Qs);return p.toFlatObject(t,o,function(c){return c!==Error.prototype},a=>a!=="isAxiosError"),C.call(o,t.message,e,n,r,i),o.cause=t,o.name=t.name,s&&Object.assign(o,s),o};const cf=null;function tr(t){return p.isPlainObject(t)||p.isArray(t)}function eo(t){return p.endsWith(t,"[]")?t.slice(0,-2):t}function _i(t,e,n){return t?t.concat(e).map(function(i,s){return i=eo(i),!n&&s?"["+i+"]":i}).join(n?".":""):e}function lf(t){return p.isArray(t)&&!t.some(tr)}const uf=p.toFlatObject(p,{},null,function(e){return/^is[A-Z]/.test(e)});function In(t,e,n){if(!p.isObject(t))throw new TypeError("target must be an object");e=e||new FormData,n=p.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(m,g){return!p.isUndefined(g[m])});const r=n.metaTokens,i=n.visitor||u,s=n.dots,o=n.indexes,c=(n.Blob||typeof Blob<"u"&&Blob)&&p.isSpecCompliantForm(e);if(!p.isFunction(i))throw new TypeError("visitor must be a function");function l(f){if(f===null)return"";if(p.isDate(f))return f.toISOString();if(!c&&p.isBlob(f))throw new C("Blob is not supported. Use a Buffer instead.");return p.isArrayBuffer(f)||p.isTypedArray(f)?c&&typeof Blob=="function"?new Blob([f]):Buffer.from(f):f}function u(f,m,g){let w=f;if(f&&!g&&typeof f=="object"){if(p.endsWith(m,"{}"))m=r?m:m.slice(0,-2),f=JSON.stringify(f);else if(p.isArray(f)&&lf(f)||(p.isFileList(f)||p.endsWith(m,"[]"))&&(w=p.toArray(f)))return m=eo(m),w.forEach(function(v,A){!(p.isUndefined(v)||v===null)&&e.append(o===!0?_i([m],A,s):o===null?m:m+"[]",l(v))}),!1}return tr(f)?!0:(e.append(_i(g,m,s),l(f)),!1)}const d=[],h=Object.assign(uf,{defaultVisitor:u,convertValue:l,isVisitable:tr});function y(f,m){if(!p.isUndefined(f)){if(d.indexOf(f)!==-1)throw Error("Circular reference detected in "+m.join("."));d.push(f),p.forEach(f,function(w,b){(!(p.isUndefined(w)||w===null)&&i.call(e,w,p.isString(b)?b.trim():b,m,h))===!0&&y(w,m?m.concat(b):[b])}),d.pop()}}if(!p.isObject(t))throw new TypeError("data must be an object");return y(t),e}function vi(t){const e={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(t).replace(/[!'()~]|%20|%00/g,function(r){return e[r]})}function Ar(t,e){this._pairs=[],t&&In(t,this,e)}const to=Ar.prototype;to.append=function(e,n){this._pairs.push([e,n])};to.toString=function(e){const n=e?function(r){return e.call(this,r,vi)}:vi;return this._pairs.map(function(i){return n(i[0])+"="+n(i[1])},"").join("&")};function df(t){return encodeURIComponent(t).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function no(t,e,n){if(!e)return t;const r=n&&n.encode||df;p.isFunction(n)&&(n={serialize:n});const i=n&&n.serialize;let s;if(i?s=i(e,n):s=p.isURLSearchParams(e)?e.toString():new Ar(e,n).toString(r),s){const o=t.indexOf("#");o!==-1&&(t=t.slice(0,o)),t+=(t.indexOf("?")===-1?"?":"&")+s}return t}class Ei{constructor(){this.handlers=[]}use(e,n,r){return this.handlers.push({fulfilled:e,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){p.forEach(this.handlers,function(r){r!==null&&e(r)})}}const ro={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},ff=typeof URLSearchParams<"u"?URLSearchParams:Ar,hf=typeof FormData<"u"?FormData:null,pf=typeof Blob<"u"?Blob:null,mf={isBrowser:!0,classes:{URLSearchParams:ff,FormData:hf,Blob:pf},protocols:["http","https","file","blob","url","data"]},Cr=typeof window<"u"&&typeof document<"u",nr=typeof navigator=="object"&&navigator||void 0,gf=Cr&&(!nr||["ReactNative","NativeScript","NS"].indexOf(nr.product)<0),yf=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",wf=Cr&&window.location.href||"http://localhost",bf=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:Cr,hasStandardBrowserEnv:gf,hasStandardBrowserWebWorkerEnv:yf,navigator:nr,origin:wf},Symbol.toStringTag,{value:"Module"})),j={...bf,...mf};function _f(t,e){return In(t,new j.classes.URLSearchParams,Object.assign({visitor:function(n,r,i,s){return j.isNode&&p.isBuffer(n)?(this.append(r,n.toString("base64")),!1):s.defaultVisitor.apply(this,arguments)}},e))}function vf(t){return p.matchAll(/\w+|\[(\w*)]/g,t).map(e=>e[0]==="[]"?"":e[1]||e[0])}function Ef(t){const e={},n=Object.keys(t);let r;const i=n.length;let s;for(r=0;r<i;r++)s=n[r],e[s]=t[s];return e}function io(t){function e(n,r,i,s){let o=n[s++];if(o==="__proto__")return!0;const a=Number.isFinite(+o),c=s>=n.length;return o=!o&&p.isArray(i)?i.length:o,c?(p.hasOwnProp(i,o)?i[o]=[i[o],r]:i[o]=r,!a):((!i[o]||!p.isObject(i[o]))&&(i[o]=[]),e(n,r,i[o],s)&&p.isArray(i[o])&&(i[o]=Ef(i[o])),!a)}if(p.isFormData(t)&&p.isFunction(t.entries)){const n={};return p.forEachEntry(t,(r,i)=>{e(vf(r),i,n,0)}),n}return null}function If(t,e,n){if(p.isString(t))try{return(e||JSON.parse)(t),p.trim(t)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(t)}const Dt={transitional:ro,adapter:["xhr","http","fetch"],transformRequest:[function(e,n){const r=n.getContentType()||"",i=r.indexOf("application/json")>-1,s=p.isObject(e);if(s&&p.isHTMLForm(e)&&(e=new FormData(e)),p.isFormData(e))return i?JSON.stringify(io(e)):e;if(p.isArrayBuffer(e)||p.isBuffer(e)||p.isStream(e)||p.isFile(e)||p.isBlob(e)||p.isReadableStream(e))return e;if(p.isArrayBufferView(e))return e.buffer;if(p.isURLSearchParams(e))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let a;if(s){if(r.indexOf("application/x-www-form-urlencoded")>-1)return _f(e,this.formSerializer).toString();if((a=p.isFileList(e))||r.indexOf("multipart/form-data")>-1){const c=this.env&&this.env.FormData;return In(a?{"files[]":e}:e,c&&new c,this.formSerializer)}}return s||i?(n.setContentType("application/json",!1),If(e)):e}],transformResponse:[function(e){const n=this.transitional||Dt.transitional,r=n&&n.forcedJSONParsing,i=this.responseType==="json";if(p.isResponse(e)||p.isReadableStream(e))return e;if(e&&p.isString(e)&&(r&&!this.responseType||i)){const o=!(n&&n.silentJSONParsing)&&i;try{return JSON.parse(e)}catch(a){if(o)throw a.name==="SyntaxError"?C.from(a,C.ERR_BAD_RESPONSE,this,null,this.response):a}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:j.classes.FormData,Blob:j.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};p.forEach(["delete","get","head","post","put","patch"],t=>{Dt.headers[t]={}});const Sf=p.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),Tf=t=>{const e={};let n,r,i;return t&&t.split(`
`).forEach(function(o){i=o.indexOf(":"),n=o.substring(0,i).trim().toLowerCase(),r=o.substring(i+1).trim(),!(!n||e[n]&&Sf[n])&&(n==="set-cookie"?e[n]?e[n].push(r):e[n]=[r]:e[n]=e[n]?e[n]+", "+r:r)}),e},Ii=Symbol("internals");function ut(t){return t&&String(t).trim().toLowerCase()}function Jt(t){return t===!1||t==null?t:p.isArray(t)?t.map(Jt):String(t)}function Rf(t){const e=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(t);)e[r[1]]=r[2];return e}const Af=t=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim());function Fn(t,e,n,r,i){if(p.isFunction(r))return r.call(this,e,n);if(i&&(e=n),!!p.isString(e)){if(p.isString(r))return e.indexOf(r)!==-1;if(p.isRegExp(r))return r.test(e)}}function Cf(t){return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(e,n,r)=>n.toUpperCase()+r)}function kf(t,e){const n=p.toCamelCase(" "+e);["get","set","has"].forEach(r=>{Object.defineProperty(t,r+n,{value:function(i,s,o){return this[r].call(this,e,i,s,o)},configurable:!0})})}let W=class{constructor(e){e&&this.set(e)}set(e,n,r){const i=this;function s(a,c,l){const u=ut(c);if(!u)throw new Error("header name must be a non-empty string");const d=p.findKey(i,u);(!d||i[d]===void 0||l===!0||l===void 0&&i[d]!==!1)&&(i[d||c]=Jt(a))}const o=(a,c)=>p.forEach(a,(l,u)=>s(l,u,c));if(p.isPlainObject(e)||e instanceof this.constructor)o(e,n);else if(p.isString(e)&&(e=e.trim())&&!Af(e))o(Tf(e),n);else if(p.isHeaders(e))for(const[a,c]of e.entries())s(c,a,r);else e!=null&&s(n,e,r);return this}get(e,n){if(e=ut(e),e){const r=p.findKey(this,e);if(r){const i=this[r];if(!n)return i;if(n===!0)return Rf(i);if(p.isFunction(n))return n.call(this,i,r);if(p.isRegExp(n))return n.exec(i);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,n){if(e=ut(e),e){const r=p.findKey(this,e);return!!(r&&this[r]!==void 0&&(!n||Fn(this,this[r],r,n)))}return!1}delete(e,n){const r=this;let i=!1;function s(o){if(o=ut(o),o){const a=p.findKey(r,o);a&&(!n||Fn(r,r[a],a,n))&&(delete r[a],i=!0)}}return p.isArray(e)?e.forEach(s):s(e),i}clear(e){const n=Object.keys(this);let r=n.length,i=!1;for(;r--;){const s=n[r];(!e||Fn(this,this[s],s,e,!0))&&(delete this[s],i=!0)}return i}normalize(e){const n=this,r={};return p.forEach(this,(i,s)=>{const o=p.findKey(r,s);if(o){n[o]=Jt(i),delete n[s];return}const a=e?Cf(s):String(s).trim();a!==s&&delete n[s],n[a]=Jt(i),r[a]=!0}),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const n=Object.create(null);return p.forEach(this,(r,i)=>{r!=null&&r!==!1&&(n[i]=e&&p.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([e,n])=>e+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...n){const r=new this(e);return n.forEach(i=>r.set(i)),r}static accessor(e){const r=(this[Ii]=this[Ii]={accessors:{}}).accessors,i=this.prototype;function s(o){const a=ut(o);r[a]||(kf(i,o),r[a]=!0)}return p.isArray(e)?e.forEach(s):s(e),this}};W.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);p.reduceDescriptors(W.prototype,({value:t},e)=>{let n=e[0].toUpperCase()+e.slice(1);return{get:()=>t,set(r){this[n]=r}}});p.freezeMethods(W);function Bn(t,e){const n=this||Dt,r=e||n,i=W.from(r.headers);let s=r.data;return p.forEach(t,function(a){s=a.call(n,s,i.normalize(),e?e.status:void 0)}),i.normalize(),s}function so(t){return!!(t&&t.__CANCEL__)}function at(t,e,n){C.call(this,t??"canceled",C.ERR_CANCELED,e,n),this.name="CanceledError"}p.inherits(at,C,{__CANCEL__:!0});function oo(t,e,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?t(n):e(new C("Request failed with status code "+n.status,[C.ERR_BAD_REQUEST,C.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}function Of(t){const e=/^([-+\w]{1,25})(:?\/\/|:)/.exec(t);return e&&e[1]||""}function Pf(t,e){t=t||10;const n=new Array(t),r=new Array(t);let i=0,s=0,o;return e=e!==void 0?e:1e3,function(c){const l=Date.now(),u=r[s];o||(o=l),n[i]=c,r[i]=l;let d=s,h=0;for(;d!==i;)h+=n[d++],d=d%t;if(i=(i+1)%t,i===s&&(s=(s+1)%t),l-o<e)return;const y=u&&l-u;return y?Math.round(h*1e3/y):void 0}}function xf(t,e){let n=0,r=1e3/e,i,s;const o=(l,u=Date.now())=>{n=u,i=null,s&&(clearTimeout(s),s=null),t.apply(null,l)};return[(...l)=>{const u=Date.now(),d=u-n;d>=r?o(l,u):(i=l,s||(s=setTimeout(()=>{s=null,o(i)},r-d)))},()=>i&&o(i)]}const cn=(t,e,n=3)=>{let r=0;const i=Pf(50,250);return xf(s=>{const o=s.loaded,a=s.lengthComputable?s.total:void 0,c=o-r,l=i(c),u=o<=a;r=o;const d={loaded:o,total:a,progress:a?o/a:void 0,bytes:c,rate:l||void 0,estimated:l&&a&&u?(a-o)/l:void 0,event:s,lengthComputable:a!=null,[e?"download":"upload"]:!0};t(d)},n)},Si=(t,e)=>{const n=t!=null;return[r=>e[0]({lengthComputable:n,total:t,loaded:r}),e[1]]},Ti=t=>(...e)=>p.asap(()=>t(...e)),Nf=j.hasStandardBrowserEnv?((t,e)=>n=>(n=new URL(n,j.origin),t.protocol===n.protocol&&t.host===n.host&&(e||t.port===n.port)))(new URL(j.origin),j.navigator&&/(msie|trident)/i.test(j.navigator.userAgent)):()=>!0,Df=j.hasStandardBrowserEnv?{write(t,e,n,r,i,s){const o=[t+"="+encodeURIComponent(e)];p.isNumber(n)&&o.push("expires="+new Date(n).toGMTString()),p.isString(r)&&o.push("path="+r),p.isString(i)&&o.push("domain="+i),s===!0&&o.push("secure"),document.cookie=o.join("; ")},read(t){const e=document.cookie.match(new RegExp("(^|;\\s*)("+t+")=([^;]*)"));return e?decodeURIComponent(e[3]):null},remove(t){this.write(t,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function Lf(t){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)}function Mf(t,e){return e?t.replace(/\/?\/$/,"")+"/"+e.replace(/^\/+/,""):t}function ao(t,e,n){let r=!Lf(e);return t&&(r||n==!1)?Mf(t,e):e}const Ri=t=>t instanceof W?{...t}:t;function Ve(t,e){e=e||{};const n={};function r(l,u,d,h){return p.isPlainObject(l)&&p.isPlainObject(u)?p.merge.call({caseless:h},l,u):p.isPlainObject(u)?p.merge({},u):p.isArray(u)?u.slice():u}function i(l,u,d,h){if(p.isUndefined(u)){if(!p.isUndefined(l))return r(void 0,l,d,h)}else return r(l,u,d,h)}function s(l,u){if(!p.isUndefined(u))return r(void 0,u)}function o(l,u){if(p.isUndefined(u)){if(!p.isUndefined(l))return r(void 0,l)}else return r(void 0,u)}function a(l,u,d){if(d in e)return r(l,u);if(d in t)return r(void 0,l)}const c={url:s,method:s,data:s,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,withXSRFToken:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,responseEncoding:o,validateStatus:a,headers:(l,u,d)=>i(Ri(l),Ri(u),d,!0)};return p.forEach(Object.keys(Object.assign({},t,e)),function(u){const d=c[u]||i,h=d(t[u],e[u],u);p.isUndefined(h)&&d!==a||(n[u]=h)}),n}const co=t=>{const e=Ve({},t);let{data:n,withXSRFToken:r,xsrfHeaderName:i,xsrfCookieName:s,headers:o,auth:a}=e;e.headers=o=W.from(o),e.url=no(ao(e.baseURL,e.url,e.allowAbsoluteUrls),t.params,t.paramsSerializer),a&&o.set("Authorization","Basic "+btoa((a.username||"")+":"+(a.password?unescape(encodeURIComponent(a.password)):"")));let c;if(p.isFormData(n)){if(j.hasStandardBrowserEnv||j.hasStandardBrowserWebWorkerEnv)o.setContentType(void 0);else if((c=o.getContentType())!==!1){const[l,...u]=c?c.split(";").map(d=>d.trim()).filter(Boolean):[];o.setContentType([l||"multipart/form-data",...u].join("; "))}}if(j.hasStandardBrowserEnv&&(r&&p.isFunction(r)&&(r=r(e)),r||r!==!1&&Nf(e.url))){const l=i&&s&&Df.read(s);l&&o.set(i,l)}return e},Uf=typeof XMLHttpRequest<"u",Ff=Uf&&function(t){return new Promise(function(n,r){const i=co(t);let s=i.data;const o=W.from(i.headers).normalize();let{responseType:a,onUploadProgress:c,onDownloadProgress:l}=i,u,d,h,y,f;function m(){y&&y(),f&&f(),i.cancelToken&&i.cancelToken.unsubscribe(u),i.signal&&i.signal.removeEventListener("abort",u)}let g=new XMLHttpRequest;g.open(i.method.toUpperCase(),i.url,!0),g.timeout=i.timeout;function w(){if(!g)return;const v=W.from("getAllResponseHeaders"in g&&g.getAllResponseHeaders()),E={data:!a||a==="text"||a==="json"?g.responseText:g.response,status:g.status,statusText:g.statusText,headers:v,config:t,request:g};oo(function(I){n(I),m()},function(I){r(I),m()},E),g=null}"onloadend"in g?g.onloadend=w:g.onreadystatechange=function(){!g||g.readyState!==4||g.status===0&&!(g.responseURL&&g.responseURL.indexOf("file:")===0)||setTimeout(w)},g.onabort=function(){g&&(r(new C("Request aborted",C.ECONNABORTED,t,g)),g=null)},g.onerror=function(){r(new C("Network Error",C.ERR_NETWORK,t,g)),g=null},g.ontimeout=function(){let A=i.timeout?"timeout of "+i.timeout+"ms exceeded":"timeout exceeded";const E=i.transitional||ro;i.timeoutErrorMessage&&(A=i.timeoutErrorMessage),r(new C(A,E.clarifyTimeoutError?C.ETIMEDOUT:C.ECONNABORTED,t,g)),g=null},s===void 0&&o.setContentType(null),"setRequestHeader"in g&&p.forEach(o.toJSON(),function(A,E){g.setRequestHeader(E,A)}),p.isUndefined(i.withCredentials)||(g.withCredentials=!!i.withCredentials),a&&a!=="json"&&(g.responseType=i.responseType),l&&([h,f]=cn(l,!0),g.addEventListener("progress",h)),c&&g.upload&&([d,y]=cn(c),g.upload.addEventListener("progress",d),g.upload.addEventListener("loadend",y)),(i.cancelToken||i.signal)&&(u=v=>{g&&(r(!v||v.type?new at(null,t,g):v),g.abort(),g=null)},i.cancelToken&&i.cancelToken.subscribe(u),i.signal&&(i.signal.aborted?u():i.signal.addEventListener("abort",u)));const b=Of(i.url);if(b&&j.protocols.indexOf(b)===-1){r(new C("Unsupported protocol "+b+":",C.ERR_BAD_REQUEST,t));return}g.send(s||null)})},Bf=(t,e)=>{const{length:n}=t=t?t.filter(Boolean):[];if(e||n){let r=new AbortController,i;const s=function(l){if(!i){i=!0,a();const u=l instanceof Error?l:this.reason;r.abort(u instanceof C?u:new at(u instanceof Error?u.message:u))}};let o=e&&setTimeout(()=>{o=null,s(new C(`timeout ${e} of ms exceeded`,C.ETIMEDOUT))},e);const a=()=>{t&&(o&&clearTimeout(o),o=null,t.forEach(l=>{l.unsubscribe?l.unsubscribe(s):l.removeEventListener("abort",s)}),t=null)};t.forEach(l=>l.addEventListener("abort",s));const{signal:c}=r;return c.unsubscribe=()=>p.asap(a),c}},$f=function*(t,e){let n=t.byteLength;if(n<e){yield t;return}let r=0,i;for(;r<n;)i=r+e,yield t.slice(r,i),r=i},Hf=async function*(t,e){for await(const n of jf(t))yield*$f(n,e)},jf=async function*(t){if(t[Symbol.asyncIterator]){yield*t;return}const e=t.getReader();try{for(;;){const{done:n,value:r}=await e.read();if(n)break;yield r}}finally{await e.cancel()}},Ai=(t,e,n,r)=>{const i=Hf(t,e);let s=0,o,a=c=>{o||(o=!0,r&&r(c))};return new ReadableStream({async pull(c){try{const{done:l,value:u}=await i.next();if(l){a(),c.close();return}let d=u.byteLength;if(n){let h=s+=d;n(h)}c.enqueue(new Uint8Array(u))}catch(l){throw a(l),l}},cancel(c){return a(c),i.return()}},{highWaterMark:2})},Sn=typeof fetch=="function"&&typeof Request=="function"&&typeof Response=="function",lo=Sn&&typeof ReadableStream=="function",Vf=Sn&&(typeof TextEncoder=="function"?(t=>e=>t.encode(e))(new TextEncoder):async t=>new Uint8Array(await new Response(t).arrayBuffer())),uo=(t,...e)=>{try{return!!t(...e)}catch{return!1}},Wf=lo&&uo(()=>{let t=!1;const e=new Request(j.origin,{body:new ReadableStream,method:"POST",get duplex(){return t=!0,"half"}}).headers.has("Content-Type");return t&&!e}),Ci=64*1024,rr=lo&&uo(()=>p.isReadableStream(new Response("").body)),ln={stream:rr&&(t=>t.body)};Sn&&(t=>{["text","arrayBuffer","blob","formData","stream"].forEach(e=>{!ln[e]&&(ln[e]=p.isFunction(t[e])?n=>n[e]():(n,r)=>{throw new C(`Response type '${e}' is not supported`,C.ERR_NOT_SUPPORT,r)})})})(new Response);const zf=async t=>{if(t==null)return 0;if(p.isBlob(t))return t.size;if(p.isSpecCompliantForm(t))return(await new Request(j.origin,{method:"POST",body:t}).arrayBuffer()).byteLength;if(p.isArrayBufferView(t)||p.isArrayBuffer(t))return t.byteLength;if(p.isURLSearchParams(t)&&(t=t+""),p.isString(t))return(await Vf(t)).byteLength},qf=async(t,e)=>{const n=p.toFiniteNumber(t.getContentLength());return n??zf(e)},Kf=Sn&&(async t=>{let{url:e,method:n,data:r,signal:i,cancelToken:s,timeout:o,onDownloadProgress:a,onUploadProgress:c,responseType:l,headers:u,withCredentials:d="same-origin",fetchOptions:h}=co(t);l=l?(l+"").toLowerCase():"text";let y=Bf([i,s&&s.toAbortSignal()],o),f;const m=y&&y.unsubscribe&&(()=>{y.unsubscribe()});let g;try{if(c&&Wf&&n!=="get"&&n!=="head"&&(g=await qf(u,r))!==0){let E=new Request(e,{method:"POST",body:r,duplex:"half"}),k;if(p.isFormData(r)&&(k=E.headers.get("content-type"))&&u.setContentType(k),E.body){const[I,D]=Si(g,cn(Ti(c)));r=Ai(E.body,Ci,I,D)}}p.isString(d)||(d=d?"include":"omit");const w="credentials"in Request.prototype;f=new Request(e,{...h,signal:y,method:n.toUpperCase(),headers:u.normalize().toJSON(),body:r,duplex:"half",credentials:w?d:void 0});let b=await fetch(f);const v=rr&&(l==="stream"||l==="response");if(rr&&(a||v&&m)){const E={};["status","statusText","headers"].forEach(F=>{E[F]=b[F]});const k=p.toFiniteNumber(b.headers.get("content-length")),[I,D]=a&&Si(k,cn(Ti(a),!0))||[];b=new Response(Ai(b.body,Ci,I,()=>{D&&D(),m&&m()}),E)}l=l||"text";let A=await ln[p.findKey(ln,l)||"text"](b,t);return!v&&m&&m(),await new Promise((E,k)=>{oo(E,k,{data:A,headers:W.from(b.headers),status:b.status,statusText:b.statusText,config:t,request:f})})}catch(w){throw m&&m(),w&&w.name==="TypeError"&&/fetch/i.test(w.message)?Object.assign(new C("Network Error",C.ERR_NETWORK,t,f),{cause:w.cause||w}):C.from(w,w&&w.code,t,f)}}),ir={http:cf,xhr:Ff,fetch:Kf};p.forEach(ir,(t,e)=>{if(t){try{Object.defineProperty(t,"name",{value:e})}catch{}Object.defineProperty(t,"adapterName",{value:e})}});const ki=t=>`- ${t}`,Gf=t=>p.isFunction(t)||t===null||t===!1,fo={getAdapter:t=>{t=p.isArray(t)?t:[t];const{length:e}=t;let n,r;const i={};for(let s=0;s<e;s++){n=t[s];let o;if(r=n,!Gf(n)&&(r=ir[(o=String(n)).toLowerCase()],r===void 0))throw new C(`Unknown adapter '${o}'`);if(r)break;i[o||"#"+s]=r}if(!r){const s=Object.entries(i).map(([a,c])=>`adapter ${a} `+(c===!1?"is not supported by the environment":"is not available in the build"));let o=e?s.length>1?`since :
`+s.map(ki).join(`
`):" "+ki(s[0]):"as no adapter specified";throw new C("There is no suitable adapter to dispatch the request "+o,"ERR_NOT_SUPPORT")}return r},adapters:ir};function $n(t){if(t.cancelToken&&t.cancelToken.throwIfRequested(),t.signal&&t.signal.aborted)throw new at(null,t)}function Oi(t){return $n(t),t.headers=W.from(t.headers),t.data=Bn.call(t,t.transformRequest),["post","put","patch"].indexOf(t.method)!==-1&&t.headers.setContentType("application/x-www-form-urlencoded",!1),fo.getAdapter(t.adapter||Dt.adapter)(t).then(function(r){return $n(t),r.data=Bn.call(t,t.transformResponse,r),r.headers=W.from(r.headers),r},function(r){return so(r)||($n(t),r&&r.response&&(r.response.data=Bn.call(t,t.transformResponse,r.response),r.response.headers=W.from(r.response.headers))),Promise.reject(r)})}const ho="1.8.4",Tn={};["object","boolean","number","function","string","symbol"].forEach((t,e)=>{Tn[t]=function(r){return typeof r===t||"a"+(e<1?"n ":" ")+t}});const Pi={};Tn.transitional=function(e,n,r){function i(s,o){return"[Axios v"+ho+"] Transitional option '"+s+"'"+o+(r?". "+r:"")}return(s,o,a)=>{if(e===!1)throw new C(i(o," has been removed"+(n?" in "+n:"")),C.ERR_DEPRECATED);return n&&!Pi[o]&&(Pi[o]=!0,console.warn(i(o," has been deprecated since v"+n+" and will be removed in the near future"))),e?e(s,o,a):!0}};Tn.spelling=function(e){return(n,r)=>(console.warn(`${r} is likely a misspelling of ${e}`),!0)};function Jf(t,e,n){if(typeof t!="object")throw new C("options must be an object",C.ERR_BAD_OPTION_VALUE);const r=Object.keys(t);let i=r.length;for(;i-- >0;){const s=r[i],o=e[s];if(o){const a=t[s],c=a===void 0||o(a,s,t);if(c!==!0)throw new C("option "+s+" must be "+c,C.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new C("Unknown option "+s,C.ERR_BAD_OPTION)}}const Yt={assertOptions:Jf,validators:Tn},ie=Yt.validators;let Fe=class{constructor(e){this.defaults=e,this.interceptors={request:new Ei,response:new Ei}}async request(e,n){try{return await this._request(e,n)}catch(r){if(r instanceof Error){let i={};Error.captureStackTrace?Error.captureStackTrace(i):i=new Error;const s=i.stack?i.stack.replace(/^.+\n/,""):"";try{r.stack?s&&!String(r.stack).endsWith(s.replace(/^.+\n.+\n/,""))&&(r.stack+=`
`+s):r.stack=s}catch{}}throw r}}_request(e,n){typeof e=="string"?(n=n||{},n.url=e):n=e||{},n=Ve(this.defaults,n);const{transitional:r,paramsSerializer:i,headers:s}=n;r!==void 0&&Yt.assertOptions(r,{silentJSONParsing:ie.transitional(ie.boolean),forcedJSONParsing:ie.transitional(ie.boolean),clarifyTimeoutError:ie.transitional(ie.boolean)},!1),i!=null&&(p.isFunction(i)?n.paramsSerializer={serialize:i}:Yt.assertOptions(i,{encode:ie.function,serialize:ie.function},!0)),n.allowAbsoluteUrls!==void 0||(this.defaults.allowAbsoluteUrls!==void 0?n.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls:n.allowAbsoluteUrls=!0),Yt.assertOptions(n,{baseUrl:ie.spelling("baseURL"),withXsrfToken:ie.spelling("withXSRFToken")},!0),n.method=(n.method||this.defaults.method||"get").toLowerCase();let o=s&&p.merge(s.common,s[n.method]);s&&p.forEach(["delete","get","head","post","put","patch","common"],f=>{delete s[f]}),n.headers=W.concat(o,s);const a=[];let c=!0;this.interceptors.request.forEach(function(m){typeof m.runWhen=="function"&&m.runWhen(n)===!1||(c=c&&m.synchronous,a.unshift(m.fulfilled,m.rejected))});const l=[];this.interceptors.response.forEach(function(m){l.push(m.fulfilled,m.rejected)});let u,d=0,h;if(!c){const f=[Oi.bind(this),void 0];for(f.unshift.apply(f,a),f.push.apply(f,l),h=f.length,u=Promise.resolve(n);d<h;)u=u.then(f[d++],f[d++]);return u}h=a.length;let y=n;for(d=0;d<h;){const f=a[d++],m=a[d++];try{y=f(y)}catch(g){m.call(this,g);break}}try{u=Oi.call(this,y)}catch(f){return Promise.reject(f)}for(d=0,h=l.length;d<h;)u=u.then(l[d++],l[d++]);return u}getUri(e){e=Ve(this.defaults,e);const n=ao(e.baseURL,e.url,e.allowAbsoluteUrls);return no(n,e.params,e.paramsSerializer)}};p.forEach(["delete","get","head","options"],function(e){Fe.prototype[e]=function(n,r){return this.request(Ve(r||{},{method:e,url:n,data:(r||{}).data}))}});p.forEach(["post","put","patch"],function(e){function n(r){return function(s,o,a){return this.request(Ve(a||{},{method:e,headers:r?{"Content-Type":"multipart/form-data"}:{},url:s,data:o}))}}Fe.prototype[e]=n(),Fe.prototype[e+"Form"]=n(!0)});let Yf=class po{constructor(e){if(typeof e!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(s){n=s});const r=this;this.promise.then(i=>{if(!r._listeners)return;let s=r._listeners.length;for(;s-- >0;)r._listeners[s](i);r._listeners=null}),this.promise.then=i=>{let s;const o=new Promise(a=>{r.subscribe(a),s=a}).then(i);return o.cancel=function(){r.unsubscribe(s)},o},e(function(s,o,a){r.reason||(r.reason=new at(s,o,a),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const n=this._listeners.indexOf(e);n!==-1&&this._listeners.splice(n,1)}toAbortSignal(){const e=new AbortController,n=r=>{e.abort(r)};return this.subscribe(n),e.signal.unsubscribe=()=>this.unsubscribe(n),e.signal}static source(){let e;return{token:new po(function(i){e=i}),cancel:e}}};function Xf(t){return function(n){return t.apply(null,n)}}function Qf(t){return p.isObject(t)&&t.isAxiosError===!0}const sr={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(sr).forEach(([t,e])=>{sr[e]=t});function mo(t){const e=new Fe(t),n=zs(Fe.prototype.request,e);return p.extend(n,Fe.prototype,e,{allOwnKeys:!0}),p.extend(n,e,null,{allOwnKeys:!0}),n.create=function(i){return mo(Ve(t,i))},n}const U=mo(Dt);U.Axios=Fe;U.CanceledError=at;U.CancelToken=Yf;U.isCancel=so;U.VERSION=ho;U.toFormData=In;U.AxiosError=C;U.Cancel=U.CanceledError;U.all=function(e){return Promise.all(e)};U.spread=Xf;U.isAxiosError=Qf;U.mergeConfig=Ve;U.AxiosHeaders=W;U.formToJSON=t=>io(p.isHTMLForm(t)?new FormData(t):t);U.getAdapter=fo.getAdapter;U.HttpStatusCode=sr;U.default=U;const{Axios:Eh,AxiosError:Ih,CanceledError:Sh,isCancel:Th,CancelToken:Rh,VERSION:Ah,all:Ch,Cancel:kh,isAxiosError:Oh,spread:Ph,toFormData:xh,AxiosHeaders:Nh,HttpStatusCode:Dh,formToJSON:Lh,getAdapter:Mh,mergeConfig:Uh}=U;export{ch as A,uh as B,U as C,Ie as G,fi as _,yh as a,eh as b,mh as c,Zf as d,ih as e,sh as f,gh as g,oh as h,bh as i,ah as j,te as k,It as l,nh as m,q as n,rh as o,Xt as p,Qe as q,gd as r,wh as s,th as t,gc as u,ph as v,dh as w,fh as x,hh as y,lh as z};
