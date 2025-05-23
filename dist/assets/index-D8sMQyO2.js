(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function Ug(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Gp={exports:{}},Oe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var To=Symbol.for("react.element"),Fg=Symbol.for("react.portal"),Og=Symbol.for("react.fragment"),kg=Symbol.for("react.strict_mode"),Bg=Symbol.for("react.profiler"),zg=Symbol.for("react.provider"),Hg=Symbol.for("react.context"),Vg=Symbol.for("react.forward_ref"),Gg=Symbol.for("react.suspense"),Wg=Symbol.for("react.memo"),Xg=Symbol.for("react.lazy"),Fd=Symbol.iterator;function jg(t){return t===null||typeof t!="object"?null:(t=Fd&&t[Fd]||t["@@iterator"],typeof t=="function"?t:null)}var Wp={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Xp=Object.assign,jp={};function Ms(t,e,n){this.props=t,this.context=e,this.refs=jp,this.updater=n||Wp}Ms.prototype.isReactComponent={};Ms.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Ms.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Yp(){}Yp.prototype=Ms.prototype;function Mf(t,e,n){this.props=t,this.context=e,this.refs=jp,this.updater=n||Wp}var wf=Mf.prototype=new Yp;wf.constructor=Mf;Xp(wf,Ms.prototype);wf.isPureReactComponent=!0;var Od=Array.isArray,qp=Object.prototype.hasOwnProperty,Tf={current:null},$p={key:!0,ref:!0,__self:!0,__source:!0};function Kp(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)qp.call(e,i)&&!$p.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:To,type:t,key:s,ref:o,props:r,_owner:Tf.current}}function Yg(t,e){return{$$typeof:To,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Af(t){return typeof t=="object"&&t!==null&&t.$$typeof===To}function qg(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var kd=/\/+/g;function Bl(t,e){return typeof t=="object"&&t!==null&&t.key!=null?qg(""+t.key):e.toString(36)}function Ta(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case To:case Fg:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+Bl(o,0):i,Od(r)?(n="",t!=null&&(n=t.replace(kd,"$&/")+"/"),Ta(r,e,n,"",function(c){return c})):r!=null&&(Af(r)&&(r=Yg(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(kd,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",Od(t))for(var a=0;a<t.length;a++){s=t[a];var l=i+Bl(s,a);o+=Ta(s,e,n,l,r)}else if(l=jg(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=i+Bl(s,a++),o+=Ta(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function ko(t,e,n){if(t==null)return t;var i=[],r=0;return Ta(t,i,"","",function(s){return e.call(n,s,r++)}),i}function $g(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var jt={current:null},Aa={transition:null},Kg={ReactCurrentDispatcher:jt,ReactCurrentBatchConfig:Aa,ReactCurrentOwner:Tf};function Zp(){throw Error("act(...) is not supported in production builds of React.")}Oe.Children={map:ko,forEach:function(t,e,n){ko(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return ko(t,function(){e++}),e},toArray:function(t){return ko(t,function(e){return e})||[]},only:function(t){if(!Af(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Oe.Component=Ms;Oe.Fragment=Og;Oe.Profiler=Bg;Oe.PureComponent=Mf;Oe.StrictMode=kg;Oe.Suspense=Gg;Oe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Kg;Oe.act=Zp;Oe.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=Xp({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Tf.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)qp.call(e,l)&&!$p.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];i.children=a}return{$$typeof:To,type:t.type,key:r,ref:s,props:i,_owner:o}};Oe.createContext=function(t){return t={$$typeof:Hg,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:zg,_context:t},t.Consumer=t};Oe.createElement=Kp;Oe.createFactory=function(t){var e=Kp.bind(null,t);return e.type=t,e};Oe.createRef=function(){return{current:null}};Oe.forwardRef=function(t){return{$$typeof:Vg,render:t}};Oe.isValidElement=Af;Oe.lazy=function(t){return{$$typeof:Xg,_payload:{_status:-1,_result:t},_init:$g}};Oe.memo=function(t,e){return{$$typeof:Wg,type:t,compare:e===void 0?null:e}};Oe.startTransition=function(t){var e=Aa.transition;Aa.transition={};try{t()}finally{Aa.transition=e}};Oe.unstable_act=Zp;Oe.useCallback=function(t,e){return jt.current.useCallback(t,e)};Oe.useContext=function(t){return jt.current.useContext(t)};Oe.useDebugValue=function(){};Oe.useDeferredValue=function(t){return jt.current.useDeferredValue(t)};Oe.useEffect=function(t,e){return jt.current.useEffect(t,e)};Oe.useId=function(){return jt.current.useId()};Oe.useImperativeHandle=function(t,e,n){return jt.current.useImperativeHandle(t,e,n)};Oe.useInsertionEffect=function(t,e){return jt.current.useInsertionEffect(t,e)};Oe.useLayoutEffect=function(t,e){return jt.current.useLayoutEffect(t,e)};Oe.useMemo=function(t,e){return jt.current.useMemo(t,e)};Oe.useReducer=function(t,e,n){return jt.current.useReducer(t,e,n)};Oe.useRef=function(t){return jt.current.useRef(t)};Oe.useState=function(t){return jt.current.useState(t)};Oe.useSyncExternalStore=function(t,e,n){return jt.current.useSyncExternalStore(t,e,n)};Oe.useTransition=function(){return jt.current.useTransition()};Oe.version="18.3.1";Gp.exports=Oe;var cn=Gp.exports;const R=Ug(cn);var Qp={exports:{}},hn={},Jp={exports:{}},em={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(N,j){var Z=N.length;N.push(j);e:for(;0<Z;){var oe=Z-1>>>1,ye=N[oe];if(0<r(ye,j))N[oe]=j,N[Z]=ye,Z=oe;else break e}}function n(N){return N.length===0?null:N[0]}function i(N){if(N.length===0)return null;var j=N[0],Z=N.pop();if(Z!==j){N[0]=Z;e:for(var oe=0,ye=N.length,Xe=ye>>>1;oe<Xe;){var W=2*(oe+1)-1,re=N[W],he=W+1,se=N[he];if(0>r(re,Z))he<ye&&0>r(se,re)?(N[oe]=se,N[he]=Z,oe=he):(N[oe]=re,N[W]=Z,oe=W);else if(he<ye&&0>r(se,Z))N[oe]=se,N[he]=Z,oe=he;else break e}}return j}function r(N,j){var Z=N.sortIndex-j.sortIndex;return Z!==0?Z:N.id-j.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],c=[],d=1,h=null,f=3,p=!1,_=!1,y=!1,m=typeof setTimeout=="function"?setTimeout:null,u=typeof clearTimeout=="function"?clearTimeout:null,g=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(N){for(var j=n(c);j!==null;){if(j.callback===null)i(c);else if(j.startTime<=N)i(c),j.sortIndex=j.expirationTime,e(l,j);else break;j=n(c)}}function x(N){if(y=!1,v(N),!_)if(n(l)!==null)_=!0,Y(b);else{var j=n(c);j!==null&&J(x,j.startTime-N)}}function b(N,j){_=!1,y&&(y=!1,u(P),P=-1),p=!0;var Z=f;try{for(v(j),h=n(l);h!==null&&(!(h.expirationTime>j)||N&&!D());){var oe=h.callback;if(typeof oe=="function"){h.callback=null,f=h.priorityLevel;var ye=oe(h.expirationTime<=j);j=t.unstable_now(),typeof ye=="function"?h.callback=ye:h===n(l)&&i(l),v(j)}else i(l);h=n(l)}if(h!==null)var Xe=!0;else{var W=n(c);W!==null&&J(x,W.startTime-j),Xe=!1}return Xe}finally{h=null,f=Z,p=!1}}var C=!1,T=null,P=-1,w=5,S=-1;function D(){return!(t.unstable_now()-S<w)}function V(){if(T!==null){var N=t.unstable_now();S=N;var j=!0;try{j=T(!0,N)}finally{j?H():(C=!1,T=null)}}else C=!1}var H;if(typeof g=="function")H=function(){g(V)};else if(typeof MessageChannel<"u"){var K=new MessageChannel,Q=K.port2;K.port1.onmessage=V,H=function(){Q.postMessage(null)}}else H=function(){m(V,0)};function Y(N){T=N,C||(C=!0,H())}function J(N,j){P=m(function(){N(t.unstable_now())},j)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(N){N.callback=null},t.unstable_continueExecution=function(){_||p||(_=!0,Y(b))},t.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):w=0<N?Math.floor(1e3/N):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(N){switch(f){case 1:case 2:case 3:var j=3;break;default:j=f}var Z=f;f=j;try{return N()}finally{f=Z}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(N,j){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var Z=f;f=N;try{return j()}finally{f=Z}},t.unstable_scheduleCallback=function(N,j,Z){var oe=t.unstable_now();switch(typeof Z=="object"&&Z!==null?(Z=Z.delay,Z=typeof Z=="number"&&0<Z?oe+Z:oe):Z=oe,N){case 1:var ye=-1;break;case 2:ye=250;break;case 5:ye=1073741823;break;case 4:ye=1e4;break;default:ye=5e3}return ye=Z+ye,N={id:d++,callback:j,priorityLevel:N,startTime:Z,expirationTime:ye,sortIndex:-1},Z>oe?(N.sortIndex=Z,e(c,N),n(l)===null&&N===n(c)&&(y?(u(P),P=-1):y=!0,J(x,Z-oe))):(N.sortIndex=ye,e(l,N),_||p||(_=!0,Y(b))),N},t.unstable_shouldYield=D,t.unstable_wrapCallback=function(N){var j=f;return function(){var Z=f;f=j;try{return N.apply(this,arguments)}finally{f=Z}}}})(em);Jp.exports=em;var Zg=Jp.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qg=cn,dn=Zg;function te(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var tm=new Set,io={};function Ar(t,e){fs(t,e),fs(t+"Capture",e)}function fs(t,e){for(io[t]=e,t=0;t<e.length;t++)tm.add(e[t])}var pi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Hc=Object.prototype.hasOwnProperty,Jg=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Bd={},zd={};function ev(t){return Hc.call(zd,t)?!0:Hc.call(Bd,t)?!1:Jg.test(t)?zd[t]=!0:(Bd[t]=!0,!1)}function tv(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function nv(t,e,n,i){if(e===null||typeof e>"u"||tv(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Yt(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Nt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Nt[t]=new Yt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Nt[e]=new Yt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Nt[t]=new Yt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Nt[t]=new Yt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Nt[t]=new Yt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Nt[t]=new Yt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Nt[t]=new Yt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Nt[t]=new Yt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Nt[t]=new Yt(t,5,!1,t.toLowerCase(),null,!1,!1)});var Cf=/[\-:]([a-z])/g;function Rf(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Cf,Rf);Nt[e]=new Yt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Cf,Rf);Nt[e]=new Yt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Cf,Rf);Nt[e]=new Yt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Nt[t]=new Yt(t,1,!1,t.toLowerCase(),null,!1,!1)});Nt.xlinkHref=new Yt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Nt[t]=new Yt(t,1,!1,t.toLowerCase(),null,!0,!0)});function bf(t,e,n,i){var r=Nt.hasOwnProperty(e)?Nt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(nv(e,n,r,i)&&(n=null),i||r===null?ev(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var Si=Qg.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Bo=Symbol.for("react.element"),Wr=Symbol.for("react.portal"),Xr=Symbol.for("react.fragment"),Pf=Symbol.for("react.strict_mode"),Vc=Symbol.for("react.profiler"),nm=Symbol.for("react.provider"),im=Symbol.for("react.context"),Df=Symbol.for("react.forward_ref"),Gc=Symbol.for("react.suspense"),Wc=Symbol.for("react.suspense_list"),Lf=Symbol.for("react.memo"),bi=Symbol.for("react.lazy"),rm=Symbol.for("react.offscreen"),Hd=Symbol.iterator;function bs(t){return t===null||typeof t!="object"?null:(t=Hd&&t[Hd]||t["@@iterator"],typeof t=="function"?t:null)}var dt=Object.assign,zl;function Vs(t){if(zl===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);zl=e&&e[1]||""}return`
`+zl+t}var Hl=!1;function Vl(t,e){if(!t||Hl)return"";Hl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{Hl=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Vs(t):""}function iv(t){switch(t.tag){case 5:return Vs(t.type);case 16:return Vs("Lazy");case 13:return Vs("Suspense");case 19:return Vs("SuspenseList");case 0:case 2:case 15:return t=Vl(t.type,!1),t;case 11:return t=Vl(t.type.render,!1),t;case 1:return t=Vl(t.type,!0),t;default:return""}}function Xc(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Xr:return"Fragment";case Wr:return"Portal";case Vc:return"Profiler";case Pf:return"StrictMode";case Gc:return"Suspense";case Wc:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case im:return(t.displayName||"Context")+".Consumer";case nm:return(t._context.displayName||"Context")+".Provider";case Df:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Lf:return e=t.displayName||null,e!==null?e:Xc(t.type)||"Memo";case bi:e=t._payload,t=t._init;try{return Xc(t(e))}catch{}}return null}function rv(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Xc(e);case 8:return e===Pf?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function ji(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function sm(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function sv(t){var e=sm(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function zo(t){t._valueTracker||(t._valueTracker=sv(t))}function om(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=sm(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function Wa(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function jc(t,e){var n=e.checked;return dt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Vd(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=ji(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function am(t,e){e=e.checked,e!=null&&bf(t,"checked",e,!1)}function Yc(t,e){am(t,e);var n=ji(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?qc(t,e.type,n):e.hasOwnProperty("defaultValue")&&qc(t,e.type,ji(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Gd(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function qc(t,e,n){(e!=="number"||Wa(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Gs=Array.isArray;function is(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+ji(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function $c(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(te(91));return dt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Wd(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(te(92));if(Gs(n)){if(1<n.length)throw Error(te(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:ji(n)}}function lm(t,e){var n=ji(e.value),i=ji(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function Xd(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function cm(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Kc(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?cm(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Ho,um=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Ho=Ho||document.createElement("div"),Ho.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Ho.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function ro(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Ys={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ov=["Webkit","ms","Moz","O"];Object.keys(Ys).forEach(function(t){ov.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Ys[e]=Ys[t]})});function fm(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Ys.hasOwnProperty(t)&&Ys[t]?(""+e).trim():e+"px"}function dm(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=fm(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var av=dt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Zc(t,e){if(e){if(av[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(te(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(te(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(te(61))}if(e.style!=null&&typeof e.style!="object")throw Error(te(62))}}function Qc(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Jc=null;function Nf(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var eu=null,rs=null,ss=null;function jd(t){if(t=Ro(t)){if(typeof eu!="function")throw Error(te(280));var e=t.stateNode;e&&(e=Sl(e),eu(t.stateNode,t.type,e))}}function hm(t){rs?ss?ss.push(t):ss=[t]:rs=t}function pm(){if(rs){var t=rs,e=ss;if(ss=rs=null,jd(t),e)for(t=0;t<e.length;t++)jd(e[t])}}function mm(t,e){return t(e)}function gm(){}var Gl=!1;function vm(t,e,n){if(Gl)return t(e,n);Gl=!0;try{return mm(t,e,n)}finally{Gl=!1,(rs!==null||ss!==null)&&(gm(),pm())}}function so(t,e){var n=t.stateNode;if(n===null)return null;var i=Sl(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(te(231,e,typeof n));return n}var tu=!1;if(pi)try{var Ps={};Object.defineProperty(Ps,"passive",{get:function(){tu=!0}}),window.addEventListener("test",Ps,Ps),window.removeEventListener("test",Ps,Ps)}catch{tu=!1}function lv(t,e,n,i,r,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(d){this.onError(d)}}var qs=!1,Xa=null,ja=!1,nu=null,cv={onError:function(t){qs=!0,Xa=t}};function uv(t,e,n,i,r,s,o,a,l){qs=!1,Xa=null,lv.apply(cv,arguments)}function fv(t,e,n,i,r,s,o,a,l){if(uv.apply(this,arguments),qs){if(qs){var c=Xa;qs=!1,Xa=null}else throw Error(te(198));ja||(ja=!0,nu=c)}}function Cr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function _m(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Yd(t){if(Cr(t)!==t)throw Error(te(188))}function dv(t){var e=t.alternate;if(!e){if(e=Cr(t),e===null)throw Error(te(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return Yd(r),t;if(s===i)return Yd(r),e;s=s.sibling}throw Error(te(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(te(189))}}if(n.alternate!==i)throw Error(te(190))}if(n.tag!==3)throw Error(te(188));return n.stateNode.current===n?t:e}function xm(t){return t=dv(t),t!==null?ym(t):null}function ym(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=ym(t);if(e!==null)return e;t=t.sibling}return null}var Sm=dn.unstable_scheduleCallback,qd=dn.unstable_cancelCallback,hv=dn.unstable_shouldYield,pv=dn.unstable_requestPaint,vt=dn.unstable_now,mv=dn.unstable_getCurrentPriorityLevel,If=dn.unstable_ImmediatePriority,Em=dn.unstable_UserBlockingPriority,Ya=dn.unstable_NormalPriority,gv=dn.unstable_LowPriority,Mm=dn.unstable_IdlePriority,vl=null,Kn=null;function vv(t){if(Kn&&typeof Kn.onCommitFiberRoot=="function")try{Kn.onCommitFiberRoot(vl,t,void 0,(t.current.flags&128)===128)}catch{}}var zn=Math.clz32?Math.clz32:yv,_v=Math.log,xv=Math.LN2;function yv(t){return t>>>=0,t===0?32:31-(_v(t)/xv|0)|0}var Vo=64,Go=4194304;function Ws(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function qa(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=Ws(a):(s&=o,s!==0&&(i=Ws(s)))}else o=n&~r,o!==0?i=Ws(o):s!==0&&(i=Ws(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-zn(e),r=1<<n,i|=t[n],e&=~r;return i}function Sv(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ev(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-zn(s),a=1<<o,l=r[o];l===-1?(!(a&n)||a&i)&&(r[o]=Sv(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function iu(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function wm(){var t=Vo;return Vo<<=1,!(Vo&4194240)&&(Vo=64),t}function Wl(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Ao(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-zn(e),t[e]=n}function Mv(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-zn(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function Uf(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-zn(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var et=0;function Tm(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Am,Ff,Cm,Rm,bm,ru=!1,Wo=[],Fi=null,Oi=null,ki=null,oo=new Map,ao=new Map,Di=[],wv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function $d(t,e){switch(t){case"focusin":case"focusout":Fi=null;break;case"dragenter":case"dragleave":Oi=null;break;case"mouseover":case"mouseout":ki=null;break;case"pointerover":case"pointerout":oo.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":ao.delete(e.pointerId)}}function Ds(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=Ro(e),e!==null&&Ff(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function Tv(t,e,n,i,r){switch(e){case"focusin":return Fi=Ds(Fi,t,e,n,i,r),!0;case"dragenter":return Oi=Ds(Oi,t,e,n,i,r),!0;case"mouseover":return ki=Ds(ki,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return oo.set(s,Ds(oo.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,ao.set(s,Ds(ao.get(s)||null,t,e,n,i,r)),!0}return!1}function Pm(t){var e=dr(t.target);if(e!==null){var n=Cr(e);if(n!==null){if(e=n.tag,e===13){if(e=_m(n),e!==null){t.blockedOn=e,bm(t.priority,function(){Cm(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Ca(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=su(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);Jc=i,n.target.dispatchEvent(i),Jc=null}else return e=Ro(n),e!==null&&Ff(e),t.blockedOn=n,!1;e.shift()}return!0}function Kd(t,e,n){Ca(t)&&n.delete(e)}function Av(){ru=!1,Fi!==null&&Ca(Fi)&&(Fi=null),Oi!==null&&Ca(Oi)&&(Oi=null),ki!==null&&Ca(ki)&&(ki=null),oo.forEach(Kd),ao.forEach(Kd)}function Ls(t,e){t.blockedOn===e&&(t.blockedOn=null,ru||(ru=!0,dn.unstable_scheduleCallback(dn.unstable_NormalPriority,Av)))}function lo(t){function e(r){return Ls(r,t)}if(0<Wo.length){Ls(Wo[0],t);for(var n=1;n<Wo.length;n++){var i=Wo[n];i.blockedOn===t&&(i.blockedOn=null)}}for(Fi!==null&&Ls(Fi,t),Oi!==null&&Ls(Oi,t),ki!==null&&Ls(ki,t),oo.forEach(e),ao.forEach(e),n=0;n<Di.length;n++)i=Di[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Di.length&&(n=Di[0],n.blockedOn===null);)Pm(n),n.blockedOn===null&&Di.shift()}var os=Si.ReactCurrentBatchConfig,$a=!0;function Cv(t,e,n,i){var r=et,s=os.transition;os.transition=null;try{et=1,Of(t,e,n,i)}finally{et=r,os.transition=s}}function Rv(t,e,n,i){var r=et,s=os.transition;os.transition=null;try{et=4,Of(t,e,n,i)}finally{et=r,os.transition=s}}function Of(t,e,n,i){if($a){var r=su(t,e,n,i);if(r===null)ec(t,e,i,Ka,n),$d(t,i);else if(Tv(r,t,e,n,i))i.stopPropagation();else if($d(t,i),e&4&&-1<wv.indexOf(t)){for(;r!==null;){var s=Ro(r);if(s!==null&&Am(s),s=su(t,e,n,i),s===null&&ec(t,e,i,Ka,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else ec(t,e,i,null,n)}}var Ka=null;function su(t,e,n,i){if(Ka=null,t=Nf(i),t=dr(t),t!==null)if(e=Cr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=_m(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Ka=t,null}function Dm(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(mv()){case If:return 1;case Em:return 4;case Ya:case gv:return 16;case Mm:return 536870912;default:return 16}default:return 16}}var Ii=null,kf=null,Ra=null;function Lm(){if(Ra)return Ra;var t,e=kf,n=e.length,i,r="value"in Ii?Ii.value:Ii.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return Ra=r.slice(t,1<i?1-i:void 0)}function ba(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Xo(){return!0}function Zd(){return!1}function pn(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Xo:Zd,this.isPropagationStopped=Zd,this}return dt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Xo)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Xo)},persist:function(){},isPersistent:Xo}),e}var ws={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Bf=pn(ws),Co=dt({},ws,{view:0,detail:0}),bv=pn(Co),Xl,jl,Ns,_l=dt({},Co,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:zf,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ns&&(Ns&&t.type==="mousemove"?(Xl=t.screenX-Ns.screenX,jl=t.screenY-Ns.screenY):jl=Xl=0,Ns=t),Xl)},movementY:function(t){return"movementY"in t?t.movementY:jl}}),Qd=pn(_l),Pv=dt({},_l,{dataTransfer:0}),Dv=pn(Pv),Lv=dt({},Co,{relatedTarget:0}),Yl=pn(Lv),Nv=dt({},ws,{animationName:0,elapsedTime:0,pseudoElement:0}),Iv=pn(Nv),Uv=dt({},ws,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Fv=pn(Uv),Ov=dt({},ws,{data:0}),Jd=pn(Ov),kv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Bv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},zv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Hv(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=zv[t])?!!e[t]:!1}function zf(){return Hv}var Vv=dt({},Co,{key:function(t){if(t.key){var e=kv[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=ba(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Bv[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:zf,charCode:function(t){return t.type==="keypress"?ba(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?ba(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Gv=pn(Vv),Wv=dt({},_l,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),eh=pn(Wv),Xv=dt({},Co,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:zf}),jv=pn(Xv),Yv=dt({},ws,{propertyName:0,elapsedTime:0,pseudoElement:0}),qv=pn(Yv),$v=dt({},_l,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Kv=pn($v),Zv=[9,13,27,32],Hf=pi&&"CompositionEvent"in window,$s=null;pi&&"documentMode"in document&&($s=document.documentMode);var Qv=pi&&"TextEvent"in window&&!$s,Nm=pi&&(!Hf||$s&&8<$s&&11>=$s),th=" ",nh=!1;function Im(t,e){switch(t){case"keyup":return Zv.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Um(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var jr=!1;function Jv(t,e){switch(t){case"compositionend":return Um(e);case"keypress":return e.which!==32?null:(nh=!0,th);case"textInput":return t=e.data,t===th&&nh?null:t;default:return null}}function e_(t,e){if(jr)return t==="compositionend"||!Hf&&Im(t,e)?(t=Lm(),Ra=kf=Ii=null,jr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Nm&&e.locale!=="ko"?null:e.data;default:return null}}var t_={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ih(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!t_[t.type]:e==="textarea"}function Fm(t,e,n,i){hm(i),e=Za(e,"onChange"),0<e.length&&(n=new Bf("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var Ks=null,co=null;function n_(t){Ym(t,0)}function xl(t){var e=$r(t);if(om(e))return t}function i_(t,e){if(t==="change")return e}var Om=!1;if(pi){var ql;if(pi){var $l="oninput"in document;if(!$l){var rh=document.createElement("div");rh.setAttribute("oninput","return;"),$l=typeof rh.oninput=="function"}ql=$l}else ql=!1;Om=ql&&(!document.documentMode||9<document.documentMode)}function sh(){Ks&&(Ks.detachEvent("onpropertychange",km),co=Ks=null)}function km(t){if(t.propertyName==="value"&&xl(co)){var e=[];Fm(e,co,t,Nf(t)),vm(n_,e)}}function r_(t,e,n){t==="focusin"?(sh(),Ks=e,co=n,Ks.attachEvent("onpropertychange",km)):t==="focusout"&&sh()}function s_(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return xl(co)}function o_(t,e){if(t==="click")return xl(e)}function a_(t,e){if(t==="input"||t==="change")return xl(e)}function l_(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Gn=typeof Object.is=="function"?Object.is:l_;function uo(t,e){if(Gn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!Hc.call(e,r)||!Gn(t[r],e[r]))return!1}return!0}function oh(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function ah(t,e){var n=oh(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=oh(n)}}function Bm(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Bm(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function zm(){for(var t=window,e=Wa();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Wa(t.document)}return e}function Vf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function c_(t){var e=zm(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Bm(n.ownerDocument.documentElement,n)){if(i!==null&&Vf(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=ah(n,s);var o=ah(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var u_=pi&&"documentMode"in document&&11>=document.documentMode,Yr=null,ou=null,Zs=null,au=!1;function lh(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;au||Yr==null||Yr!==Wa(i)||(i=Yr,"selectionStart"in i&&Vf(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Zs&&uo(Zs,i)||(Zs=i,i=Za(ou,"onSelect"),0<i.length&&(e=new Bf("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=Yr)))}function jo(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var qr={animationend:jo("Animation","AnimationEnd"),animationiteration:jo("Animation","AnimationIteration"),animationstart:jo("Animation","AnimationStart"),transitionend:jo("Transition","TransitionEnd")},Kl={},Hm={};pi&&(Hm=document.createElement("div").style,"AnimationEvent"in window||(delete qr.animationend.animation,delete qr.animationiteration.animation,delete qr.animationstart.animation),"TransitionEvent"in window||delete qr.transitionend.transition);function yl(t){if(Kl[t])return Kl[t];if(!qr[t])return t;var e=qr[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Hm)return Kl[t]=e[n];return t}var Vm=yl("animationend"),Gm=yl("animationiteration"),Wm=yl("animationstart"),Xm=yl("transitionend"),jm=new Map,ch="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function $i(t,e){jm.set(t,e),Ar(e,[t])}for(var Zl=0;Zl<ch.length;Zl++){var Ql=ch[Zl],f_=Ql.toLowerCase(),d_=Ql[0].toUpperCase()+Ql.slice(1);$i(f_,"on"+d_)}$i(Vm,"onAnimationEnd");$i(Gm,"onAnimationIteration");$i(Wm,"onAnimationStart");$i("dblclick","onDoubleClick");$i("focusin","onFocus");$i("focusout","onBlur");$i(Xm,"onTransitionEnd");fs("onMouseEnter",["mouseout","mouseover"]);fs("onMouseLeave",["mouseout","mouseover"]);fs("onPointerEnter",["pointerout","pointerover"]);fs("onPointerLeave",["pointerout","pointerover"]);Ar("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ar("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ar("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ar("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ar("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ar("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Xs="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),h_=new Set("cancel close invalid load scroll toggle".split(" ").concat(Xs));function uh(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,fv(i,e,void 0,t),t.currentTarget=null}function Ym(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;uh(r,a,c),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;uh(r,a,c),s=l}}}if(ja)throw t=nu,ja=!1,nu=null,t}function st(t,e){var n=e[du];n===void 0&&(n=e[du]=new Set);var i=t+"__bubble";n.has(i)||(qm(e,t,2,!1),n.add(i))}function Jl(t,e,n){var i=0;e&&(i|=4),qm(n,t,i,e)}var Yo="_reactListening"+Math.random().toString(36).slice(2);function fo(t){if(!t[Yo]){t[Yo]=!0,tm.forEach(function(n){n!=="selectionchange"&&(h_.has(n)||Jl(n,!1,t),Jl(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Yo]||(e[Yo]=!0,Jl("selectionchange",!1,e))}}function qm(t,e,n,i){switch(Dm(e)){case 1:var r=Cv;break;case 4:r=Rv;break;default:r=Of}n=r.bind(null,e,n,t),r=void 0,!tu||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function ec(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=dr(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}vm(function(){var c=s,d=Nf(n),h=[];e:{var f=jm.get(t);if(f!==void 0){var p=Bf,_=t;switch(t){case"keypress":if(ba(n)===0)break e;case"keydown":case"keyup":p=Gv;break;case"focusin":_="focus",p=Yl;break;case"focusout":_="blur",p=Yl;break;case"beforeblur":case"afterblur":p=Yl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=Qd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=Dv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=jv;break;case Vm:case Gm:case Wm:p=Iv;break;case Xm:p=qv;break;case"scroll":p=bv;break;case"wheel":p=Kv;break;case"copy":case"cut":case"paste":p=Fv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=eh}var y=(e&4)!==0,m=!y&&t==="scroll",u=y?f!==null?f+"Capture":null:f;y=[];for(var g=c,v;g!==null;){v=g;var x=v.stateNode;if(v.tag===5&&x!==null&&(v=x,u!==null&&(x=so(g,u),x!=null&&y.push(ho(g,x,v)))),m)break;g=g.return}0<y.length&&(f=new p(f,_,null,n,d),h.push({event:f,listeners:y}))}}if(!(e&7)){e:{if(f=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",f&&n!==Jc&&(_=n.relatedTarget||n.fromElement)&&(dr(_)||_[mi]))break e;if((p||f)&&(f=d.window===d?d:(f=d.ownerDocument)?f.defaultView||f.parentWindow:window,p?(_=n.relatedTarget||n.toElement,p=c,_=_?dr(_):null,_!==null&&(m=Cr(_),_!==m||_.tag!==5&&_.tag!==6)&&(_=null)):(p=null,_=c),p!==_)){if(y=Qd,x="onMouseLeave",u="onMouseEnter",g="mouse",(t==="pointerout"||t==="pointerover")&&(y=eh,x="onPointerLeave",u="onPointerEnter",g="pointer"),m=p==null?f:$r(p),v=_==null?f:$r(_),f=new y(x,g+"leave",p,n,d),f.target=m,f.relatedTarget=v,x=null,dr(d)===c&&(y=new y(u,g+"enter",_,n,d),y.target=v,y.relatedTarget=m,x=y),m=x,p&&_)t:{for(y=p,u=_,g=0,v=y;v;v=br(v))g++;for(v=0,x=u;x;x=br(x))v++;for(;0<g-v;)y=br(y),g--;for(;0<v-g;)u=br(u),v--;for(;g--;){if(y===u||u!==null&&y===u.alternate)break t;y=br(y),u=br(u)}y=null}else y=null;p!==null&&fh(h,f,p,y,!1),_!==null&&m!==null&&fh(h,m,_,y,!0)}}e:{if(f=c?$r(c):window,p=f.nodeName&&f.nodeName.toLowerCase(),p==="select"||p==="input"&&f.type==="file")var b=i_;else if(ih(f))if(Om)b=a_;else{b=s_;var C=r_}else(p=f.nodeName)&&p.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(b=o_);if(b&&(b=b(t,c))){Fm(h,b,n,d);break e}C&&C(t,f,c),t==="focusout"&&(C=f._wrapperState)&&C.controlled&&f.type==="number"&&qc(f,"number",f.value)}switch(C=c?$r(c):window,t){case"focusin":(ih(C)||C.contentEditable==="true")&&(Yr=C,ou=c,Zs=null);break;case"focusout":Zs=ou=Yr=null;break;case"mousedown":au=!0;break;case"contextmenu":case"mouseup":case"dragend":au=!1,lh(h,n,d);break;case"selectionchange":if(u_)break;case"keydown":case"keyup":lh(h,n,d)}var T;if(Hf)e:{switch(t){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else jr?Im(t,n)&&(P="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(P="onCompositionStart");P&&(Nm&&n.locale!=="ko"&&(jr||P!=="onCompositionStart"?P==="onCompositionEnd"&&jr&&(T=Lm()):(Ii=d,kf="value"in Ii?Ii.value:Ii.textContent,jr=!0)),C=Za(c,P),0<C.length&&(P=new Jd(P,t,null,n,d),h.push({event:P,listeners:C}),T?P.data=T:(T=Um(n),T!==null&&(P.data=T)))),(T=Qv?Jv(t,n):e_(t,n))&&(c=Za(c,"onBeforeInput"),0<c.length&&(d=new Jd("onBeforeInput","beforeinput",null,n,d),h.push({event:d,listeners:c}),d.data=T))}Ym(h,e)})}function ho(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Za(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=so(t,n),s!=null&&i.unshift(ho(t,s,r)),s=so(t,e),s!=null&&i.push(ho(t,s,r))),t=t.return}return i}function br(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function fh(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&c!==null&&(a=c,r?(l=so(n,s),l!=null&&o.unshift(ho(n,l,a))):r||(l=so(n,s),l!=null&&o.push(ho(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var p_=/\r\n?/g,m_=/\u0000|\uFFFD/g;function dh(t){return(typeof t=="string"?t:""+t).replace(p_,`
`).replace(m_,"")}function qo(t,e,n){if(e=dh(e),dh(t)!==e&&n)throw Error(te(425))}function Qa(){}var lu=null,cu=null;function uu(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var fu=typeof setTimeout=="function"?setTimeout:void 0,g_=typeof clearTimeout=="function"?clearTimeout:void 0,hh=typeof Promise=="function"?Promise:void 0,v_=typeof queueMicrotask=="function"?queueMicrotask:typeof hh<"u"?function(t){return hh.resolve(null).then(t).catch(__)}:fu;function __(t){setTimeout(function(){throw t})}function tc(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),lo(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);lo(e)}function Bi(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function ph(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Ts=Math.random().toString(36).slice(2),qn="__reactFiber$"+Ts,po="__reactProps$"+Ts,mi="__reactContainer$"+Ts,du="__reactEvents$"+Ts,x_="__reactListeners$"+Ts,y_="__reactHandles$"+Ts;function dr(t){var e=t[qn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[mi]||n[qn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=ph(t);t!==null;){if(n=t[qn])return n;t=ph(t)}return e}t=n,n=t.parentNode}return null}function Ro(t){return t=t[qn]||t[mi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function $r(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(te(33))}function Sl(t){return t[po]||null}var hu=[],Kr=-1;function Ki(t){return{current:t}}function ot(t){0>Kr||(t.current=hu[Kr],hu[Kr]=null,Kr--)}function it(t,e){Kr++,hu[Kr]=t.current,t.current=e}var Yi={},zt=Ki(Yi),Qt=Ki(!1),xr=Yi;function ds(t,e){var n=t.type.contextTypes;if(!n)return Yi;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function Jt(t){return t=t.childContextTypes,t!=null}function Ja(){ot(Qt),ot(zt)}function mh(t,e,n){if(zt.current!==Yi)throw Error(te(168));it(zt,e),it(Qt,n)}function $m(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(te(108,rv(t)||"Unknown",r));return dt({},n,i)}function el(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Yi,xr=zt.current,it(zt,t),it(Qt,Qt.current),!0}function gh(t,e,n){var i=t.stateNode;if(!i)throw Error(te(169));n?(t=$m(t,e,xr),i.__reactInternalMemoizedMergedChildContext=t,ot(Qt),ot(zt),it(zt,t)):ot(Qt),it(Qt,n)}var oi=null,El=!1,nc=!1;function Km(t){oi===null?oi=[t]:oi.push(t)}function S_(t){El=!0,Km(t)}function Zi(){if(!nc&&oi!==null){nc=!0;var t=0,e=et;try{var n=oi;for(et=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}oi=null,El=!1}catch(r){throw oi!==null&&(oi=oi.slice(t+1)),Sm(If,Zi),r}finally{et=e,nc=!1}}return null}var Zr=[],Qr=0,tl=null,nl=0,yn=[],Sn=0,yr=null,li=1,ci="";function or(t,e){Zr[Qr++]=nl,Zr[Qr++]=tl,tl=t,nl=e}function Zm(t,e,n){yn[Sn++]=li,yn[Sn++]=ci,yn[Sn++]=yr,yr=t;var i=li;t=ci;var r=32-zn(i)-1;i&=~(1<<r),n+=1;var s=32-zn(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,li=1<<32-zn(e)+r|n<<r|i,ci=s+t}else li=1<<s|n<<r|i,ci=t}function Gf(t){t.return!==null&&(or(t,1),Zm(t,1,0))}function Wf(t){for(;t===tl;)tl=Zr[--Qr],Zr[Qr]=null,nl=Zr[--Qr],Zr[Qr]=null;for(;t===yr;)yr=yn[--Sn],yn[Sn]=null,ci=yn[--Sn],yn[Sn]=null,li=yn[--Sn],yn[Sn]=null}var un=null,ln=null,lt=!1,On=null;function Qm(t,e){var n=Mn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function vh(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,un=t,ln=Bi(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,un=t,ln=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=yr!==null?{id:li,overflow:ci}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Mn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,un=t,ln=null,!0):!1;default:return!1}}function pu(t){return(t.mode&1)!==0&&(t.flags&128)===0}function mu(t){if(lt){var e=ln;if(e){var n=e;if(!vh(t,e)){if(pu(t))throw Error(te(418));e=Bi(n.nextSibling);var i=un;e&&vh(t,e)?Qm(i,n):(t.flags=t.flags&-4097|2,lt=!1,un=t)}}else{if(pu(t))throw Error(te(418));t.flags=t.flags&-4097|2,lt=!1,un=t}}}function _h(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;un=t}function $o(t){if(t!==un)return!1;if(!lt)return _h(t),lt=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!uu(t.type,t.memoizedProps)),e&&(e=ln)){if(pu(t))throw Jm(),Error(te(418));for(;e;)Qm(t,e),e=Bi(e.nextSibling)}if(_h(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(te(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){ln=Bi(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}ln=null}}else ln=un?Bi(t.stateNode.nextSibling):null;return!0}function Jm(){for(var t=ln;t;)t=Bi(t.nextSibling)}function hs(){ln=un=null,lt=!1}function Xf(t){On===null?On=[t]:On.push(t)}var E_=Si.ReactCurrentBatchConfig;function Is(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(te(309));var i=n.stateNode}if(!i)throw Error(te(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(te(284));if(!n._owner)throw Error(te(290,t))}return t}function Ko(t,e){throw t=Object.prototype.toString.call(e),Error(te(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function xh(t){var e=t._init;return e(t._payload)}function e0(t){function e(u,g){if(t){var v=u.deletions;v===null?(u.deletions=[g],u.flags|=16):v.push(g)}}function n(u,g){if(!t)return null;for(;g!==null;)e(u,g),g=g.sibling;return null}function i(u,g){for(u=new Map;g!==null;)g.key!==null?u.set(g.key,g):u.set(g.index,g),g=g.sibling;return u}function r(u,g){return u=Gi(u,g),u.index=0,u.sibling=null,u}function s(u,g,v){return u.index=v,t?(v=u.alternate,v!==null?(v=v.index,v<g?(u.flags|=2,g):v):(u.flags|=2,g)):(u.flags|=1048576,g)}function o(u){return t&&u.alternate===null&&(u.flags|=2),u}function a(u,g,v,x){return g===null||g.tag!==6?(g=cc(v,u.mode,x),g.return=u,g):(g=r(g,v),g.return=u,g)}function l(u,g,v,x){var b=v.type;return b===Xr?d(u,g,v.props.children,x,v.key):g!==null&&(g.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===bi&&xh(b)===g.type)?(x=r(g,v.props),x.ref=Is(u,g,v),x.return=u,x):(x=Fa(v.type,v.key,v.props,null,u.mode,x),x.ref=Is(u,g,v),x.return=u,x)}function c(u,g,v,x){return g===null||g.tag!==4||g.stateNode.containerInfo!==v.containerInfo||g.stateNode.implementation!==v.implementation?(g=uc(v,u.mode,x),g.return=u,g):(g=r(g,v.children||[]),g.return=u,g)}function d(u,g,v,x,b){return g===null||g.tag!==7?(g=_r(v,u.mode,x,b),g.return=u,g):(g=r(g,v),g.return=u,g)}function h(u,g,v){if(typeof g=="string"&&g!==""||typeof g=="number")return g=cc(""+g,u.mode,v),g.return=u,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Bo:return v=Fa(g.type,g.key,g.props,null,u.mode,v),v.ref=Is(u,null,g),v.return=u,v;case Wr:return g=uc(g,u.mode,v),g.return=u,g;case bi:var x=g._init;return h(u,x(g._payload),v)}if(Gs(g)||bs(g))return g=_r(g,u.mode,v,null),g.return=u,g;Ko(u,g)}return null}function f(u,g,v,x){var b=g!==null?g.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return b!==null?null:a(u,g,""+v,x);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Bo:return v.key===b?l(u,g,v,x):null;case Wr:return v.key===b?c(u,g,v,x):null;case bi:return b=v._init,f(u,g,b(v._payload),x)}if(Gs(v)||bs(v))return b!==null?null:d(u,g,v,x,null);Ko(u,v)}return null}function p(u,g,v,x,b){if(typeof x=="string"&&x!==""||typeof x=="number")return u=u.get(v)||null,a(g,u,""+x,b);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Bo:return u=u.get(x.key===null?v:x.key)||null,l(g,u,x,b);case Wr:return u=u.get(x.key===null?v:x.key)||null,c(g,u,x,b);case bi:var C=x._init;return p(u,g,v,C(x._payload),b)}if(Gs(x)||bs(x))return u=u.get(v)||null,d(g,u,x,b,null);Ko(g,x)}return null}function _(u,g,v,x){for(var b=null,C=null,T=g,P=g=0,w=null;T!==null&&P<v.length;P++){T.index>P?(w=T,T=null):w=T.sibling;var S=f(u,T,v[P],x);if(S===null){T===null&&(T=w);break}t&&T&&S.alternate===null&&e(u,T),g=s(S,g,P),C===null?b=S:C.sibling=S,C=S,T=w}if(P===v.length)return n(u,T),lt&&or(u,P),b;if(T===null){for(;P<v.length;P++)T=h(u,v[P],x),T!==null&&(g=s(T,g,P),C===null?b=T:C.sibling=T,C=T);return lt&&or(u,P),b}for(T=i(u,T);P<v.length;P++)w=p(T,u,P,v[P],x),w!==null&&(t&&w.alternate!==null&&T.delete(w.key===null?P:w.key),g=s(w,g,P),C===null?b=w:C.sibling=w,C=w);return t&&T.forEach(function(D){return e(u,D)}),lt&&or(u,P),b}function y(u,g,v,x){var b=bs(v);if(typeof b!="function")throw Error(te(150));if(v=b.call(v),v==null)throw Error(te(151));for(var C=b=null,T=g,P=g=0,w=null,S=v.next();T!==null&&!S.done;P++,S=v.next()){T.index>P?(w=T,T=null):w=T.sibling;var D=f(u,T,S.value,x);if(D===null){T===null&&(T=w);break}t&&T&&D.alternate===null&&e(u,T),g=s(D,g,P),C===null?b=D:C.sibling=D,C=D,T=w}if(S.done)return n(u,T),lt&&or(u,P),b;if(T===null){for(;!S.done;P++,S=v.next())S=h(u,S.value,x),S!==null&&(g=s(S,g,P),C===null?b=S:C.sibling=S,C=S);return lt&&or(u,P),b}for(T=i(u,T);!S.done;P++,S=v.next())S=p(T,u,P,S.value,x),S!==null&&(t&&S.alternate!==null&&T.delete(S.key===null?P:S.key),g=s(S,g,P),C===null?b=S:C.sibling=S,C=S);return t&&T.forEach(function(V){return e(u,V)}),lt&&or(u,P),b}function m(u,g,v,x){if(typeof v=="object"&&v!==null&&v.type===Xr&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case Bo:e:{for(var b=v.key,C=g;C!==null;){if(C.key===b){if(b=v.type,b===Xr){if(C.tag===7){n(u,C.sibling),g=r(C,v.props.children),g.return=u,u=g;break e}}else if(C.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===bi&&xh(b)===C.type){n(u,C.sibling),g=r(C,v.props),g.ref=Is(u,C,v),g.return=u,u=g;break e}n(u,C);break}else e(u,C);C=C.sibling}v.type===Xr?(g=_r(v.props.children,u.mode,x,v.key),g.return=u,u=g):(x=Fa(v.type,v.key,v.props,null,u.mode,x),x.ref=Is(u,g,v),x.return=u,u=x)}return o(u);case Wr:e:{for(C=v.key;g!==null;){if(g.key===C)if(g.tag===4&&g.stateNode.containerInfo===v.containerInfo&&g.stateNode.implementation===v.implementation){n(u,g.sibling),g=r(g,v.children||[]),g.return=u,u=g;break e}else{n(u,g);break}else e(u,g);g=g.sibling}g=uc(v,u.mode,x),g.return=u,u=g}return o(u);case bi:return C=v._init,m(u,g,C(v._payload),x)}if(Gs(v))return _(u,g,v,x);if(bs(v))return y(u,g,v,x);Ko(u,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,g!==null&&g.tag===6?(n(u,g.sibling),g=r(g,v),g.return=u,u=g):(n(u,g),g=cc(v,u.mode,x),g.return=u,u=g),o(u)):n(u,g)}return m}var ps=e0(!0),t0=e0(!1),il=Ki(null),rl=null,Jr=null,jf=null;function Yf(){jf=Jr=rl=null}function qf(t){var e=il.current;ot(il),t._currentValue=e}function gu(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function as(t,e){rl=t,jf=Jr=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Zt=!0),t.firstContext=null)}function Cn(t){var e=t._currentValue;if(jf!==t)if(t={context:t,memoizedValue:e,next:null},Jr===null){if(rl===null)throw Error(te(308));Jr=t,rl.dependencies={lanes:0,firstContext:t}}else Jr=Jr.next=t;return e}var hr=null;function $f(t){hr===null?hr=[t]:hr.push(t)}function n0(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,$f(e)):(n.next=r.next,r.next=n),e.interleaved=n,gi(t,i)}function gi(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Pi=!1;function Kf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function i0(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function di(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function zi(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,We&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,gi(t,n)}return r=i.interleaved,r===null?(e.next=e,$f(i)):(e.next=r.next,r.next=e),i.interleaved=e,gi(t,n)}function Pa(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Uf(t,n)}}function yh(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function sl(t,e,n,i){var r=t.updateQueue;Pi=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var d=t.alternate;d!==null&&(d=d.updateQueue,a=d.lastBaseUpdate,a!==o&&(a===null?d.firstBaseUpdate=c:a.next=c,d.lastBaseUpdate=l))}if(s!==null){var h=r.baseState;o=0,d=c=l=null,a=s;do{var f=a.lane,p=a.eventTime;if((i&f)===f){d!==null&&(d=d.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var _=t,y=a;switch(f=e,p=n,y.tag){case 1:if(_=y.payload,typeof _=="function"){h=_.call(p,h,f);break e}h=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=y.payload,f=typeof _=="function"?_.call(p,h,f):_,f==null)break e;h=dt({},h,f);break e;case 2:Pi=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,f=r.effects,f===null?r.effects=[a]:f.push(a))}else p={eventTime:p,lane:f,tag:a.tag,payload:a.payload,callback:a.callback,next:null},d===null?(c=d=p,l=h):d=d.next=p,o|=f;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;f=a,a=f.next,f.next=null,r.lastBaseUpdate=f,r.shared.pending=null}}while(!0);if(d===null&&(l=h),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=d,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Er|=o,t.lanes=o,t.memoizedState=h}}function Sh(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(te(191,r));r.call(i)}}}var bo={},Zn=Ki(bo),mo=Ki(bo),go=Ki(bo);function pr(t){if(t===bo)throw Error(te(174));return t}function Zf(t,e){switch(it(go,e),it(mo,t),it(Zn,bo),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Kc(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Kc(e,t)}ot(Zn),it(Zn,e)}function ms(){ot(Zn),ot(mo),ot(go)}function r0(t){pr(go.current);var e=pr(Zn.current),n=Kc(e,t.type);e!==n&&(it(mo,t),it(Zn,n))}function Qf(t){mo.current===t&&(ot(Zn),ot(mo))}var ut=Ki(0);function ol(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var ic=[];function Jf(){for(var t=0;t<ic.length;t++)ic[t]._workInProgressVersionPrimary=null;ic.length=0}var Da=Si.ReactCurrentDispatcher,rc=Si.ReactCurrentBatchConfig,Sr=0,ft=null,Mt=null,Rt=null,al=!1,Qs=!1,vo=0,M_=0;function Ut(){throw Error(te(321))}function ed(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Gn(t[n],e[n]))return!1;return!0}function td(t,e,n,i,r,s){if(Sr=s,ft=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Da.current=t===null||t.memoizedState===null?C_:R_,t=n(i,r),Qs){s=0;do{if(Qs=!1,vo=0,25<=s)throw Error(te(301));s+=1,Rt=Mt=null,e.updateQueue=null,Da.current=b_,t=n(i,r)}while(Qs)}if(Da.current=ll,e=Mt!==null&&Mt.next!==null,Sr=0,Rt=Mt=ft=null,al=!1,e)throw Error(te(300));return t}function nd(){var t=vo!==0;return vo=0,t}function jn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Rt===null?ft.memoizedState=Rt=t:Rt=Rt.next=t,Rt}function Rn(){if(Mt===null){var t=ft.alternate;t=t!==null?t.memoizedState:null}else t=Mt.next;var e=Rt===null?ft.memoizedState:Rt.next;if(e!==null)Rt=e,Mt=t;else{if(t===null)throw Error(te(310));Mt=t,t={memoizedState:Mt.memoizedState,baseState:Mt.baseState,baseQueue:Mt.baseQueue,queue:Mt.queue,next:null},Rt===null?ft.memoizedState=Rt=t:Rt=Rt.next=t}return Rt}function _o(t,e){return typeof e=="function"?e(t):e}function sc(t){var e=Rn(),n=e.queue;if(n===null)throw Error(te(311));n.lastRenderedReducer=t;var i=Mt,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,c=s;do{var d=c.lane;if((Sr&d)===d)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var h={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=h,o=i):l=l.next=h,ft.lanes|=d,Er|=d}c=c.next}while(c!==null&&c!==s);l===null?o=i:l.next=a,Gn(i,e.memoizedState)||(Zt=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,ft.lanes|=s,Er|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function oc(t){var e=Rn(),n=e.queue;if(n===null)throw Error(te(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);Gn(s,e.memoizedState)||(Zt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function s0(){}function o0(t,e){var n=ft,i=Rn(),r=e(),s=!Gn(i.memoizedState,r);if(s&&(i.memoizedState=r,Zt=!0),i=i.queue,id(c0.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Rt!==null&&Rt.memoizedState.tag&1){if(n.flags|=2048,xo(9,l0.bind(null,n,i,r,e),void 0,null),bt===null)throw Error(te(349));Sr&30||a0(n,e,r)}return r}function a0(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=ft.updateQueue,e===null?(e={lastEffect:null,stores:null},ft.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function l0(t,e,n,i){e.value=n,e.getSnapshot=i,u0(e)&&f0(t)}function c0(t,e,n){return n(function(){u0(e)&&f0(t)})}function u0(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Gn(t,n)}catch{return!0}}function f0(t){var e=gi(t,1);e!==null&&Hn(e,t,1,-1)}function Eh(t){var e=jn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:_o,lastRenderedState:t},e.queue=t,t=t.dispatch=A_.bind(null,ft,t),[e.memoizedState,t]}function xo(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=ft.updateQueue,e===null?(e={lastEffect:null,stores:null},ft.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function d0(){return Rn().memoizedState}function La(t,e,n,i){var r=jn();ft.flags|=t,r.memoizedState=xo(1|e,n,void 0,i===void 0?null:i)}function Ml(t,e,n,i){var r=Rn();i=i===void 0?null:i;var s=void 0;if(Mt!==null){var o=Mt.memoizedState;if(s=o.destroy,i!==null&&ed(i,o.deps)){r.memoizedState=xo(e,n,s,i);return}}ft.flags|=t,r.memoizedState=xo(1|e,n,s,i)}function Mh(t,e){return La(8390656,8,t,e)}function id(t,e){return Ml(2048,8,t,e)}function h0(t,e){return Ml(4,2,t,e)}function p0(t,e){return Ml(4,4,t,e)}function m0(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function g0(t,e,n){return n=n!=null?n.concat([t]):null,Ml(4,4,m0.bind(null,e,t),n)}function rd(){}function v0(t,e){var n=Rn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&ed(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function _0(t,e){var n=Rn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&ed(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function x0(t,e,n){return Sr&21?(Gn(n,e)||(n=wm(),ft.lanes|=n,Er|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Zt=!0),t.memoizedState=n)}function w_(t,e){var n=et;et=n!==0&&4>n?n:4,t(!0);var i=rc.transition;rc.transition={};try{t(!1),e()}finally{et=n,rc.transition=i}}function y0(){return Rn().memoizedState}function T_(t,e,n){var i=Vi(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},S0(t))E0(e,n);else if(n=n0(t,e,n,i),n!==null){var r=Wt();Hn(n,t,i,r),M0(n,e,i)}}function A_(t,e,n){var i=Vi(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(S0(t))E0(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,Gn(a,o)){var l=e.interleaved;l===null?(r.next=r,$f(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=n0(t,e,r,i),n!==null&&(r=Wt(),Hn(n,t,i,r),M0(n,e,i))}}function S0(t){var e=t.alternate;return t===ft||e!==null&&e===ft}function E0(t,e){Qs=al=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function M0(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Uf(t,n)}}var ll={readContext:Cn,useCallback:Ut,useContext:Ut,useEffect:Ut,useImperativeHandle:Ut,useInsertionEffect:Ut,useLayoutEffect:Ut,useMemo:Ut,useReducer:Ut,useRef:Ut,useState:Ut,useDebugValue:Ut,useDeferredValue:Ut,useTransition:Ut,useMutableSource:Ut,useSyncExternalStore:Ut,useId:Ut,unstable_isNewReconciler:!1},C_={readContext:Cn,useCallback:function(t,e){return jn().memoizedState=[t,e===void 0?null:e],t},useContext:Cn,useEffect:Mh,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,La(4194308,4,m0.bind(null,e,t),n)},useLayoutEffect:function(t,e){return La(4194308,4,t,e)},useInsertionEffect:function(t,e){return La(4,2,t,e)},useMemo:function(t,e){var n=jn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=jn();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=T_.bind(null,ft,t),[i.memoizedState,t]},useRef:function(t){var e=jn();return t={current:t},e.memoizedState=t},useState:Eh,useDebugValue:rd,useDeferredValue:function(t){return jn().memoizedState=t},useTransition:function(){var t=Eh(!1),e=t[0];return t=w_.bind(null,t[1]),jn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=ft,r=jn();if(lt){if(n===void 0)throw Error(te(407));n=n()}else{if(n=e(),bt===null)throw Error(te(349));Sr&30||a0(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,Mh(c0.bind(null,i,s,t),[t]),i.flags|=2048,xo(9,l0.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=jn(),e=bt.identifierPrefix;if(lt){var n=ci,i=li;n=(i&~(1<<32-zn(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=vo++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=M_++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},R_={readContext:Cn,useCallback:v0,useContext:Cn,useEffect:id,useImperativeHandle:g0,useInsertionEffect:h0,useLayoutEffect:p0,useMemo:_0,useReducer:sc,useRef:d0,useState:function(){return sc(_o)},useDebugValue:rd,useDeferredValue:function(t){var e=Rn();return x0(e,Mt.memoizedState,t)},useTransition:function(){var t=sc(_o)[0],e=Rn().memoizedState;return[t,e]},useMutableSource:s0,useSyncExternalStore:o0,useId:y0,unstable_isNewReconciler:!1},b_={readContext:Cn,useCallback:v0,useContext:Cn,useEffect:id,useImperativeHandle:g0,useInsertionEffect:h0,useLayoutEffect:p0,useMemo:_0,useReducer:oc,useRef:d0,useState:function(){return oc(_o)},useDebugValue:rd,useDeferredValue:function(t){var e=Rn();return Mt===null?e.memoizedState=t:x0(e,Mt.memoizedState,t)},useTransition:function(){var t=oc(_o)[0],e=Rn().memoizedState;return[t,e]},useMutableSource:s0,useSyncExternalStore:o0,useId:y0,unstable_isNewReconciler:!1};function Un(t,e){if(t&&t.defaultProps){e=dt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function vu(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:dt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var wl={isMounted:function(t){return(t=t._reactInternals)?Cr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=Wt(),r=Vi(t),s=di(i,r);s.payload=e,n!=null&&(s.callback=n),e=zi(t,s,r),e!==null&&(Hn(e,t,r,i),Pa(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=Wt(),r=Vi(t),s=di(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=zi(t,s,r),e!==null&&(Hn(e,t,r,i),Pa(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Wt(),i=Vi(t),r=di(n,i);r.tag=2,e!=null&&(r.callback=e),e=zi(t,r,i),e!==null&&(Hn(e,t,i,n),Pa(e,t,i))}};function wh(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!uo(n,i)||!uo(r,s):!0}function w0(t,e,n){var i=!1,r=Yi,s=e.contextType;return typeof s=="object"&&s!==null?s=Cn(s):(r=Jt(e)?xr:zt.current,i=e.contextTypes,s=(i=i!=null)?ds(t,r):Yi),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=wl,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function Th(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&wl.enqueueReplaceState(e,e.state,null)}function _u(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},Kf(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Cn(s):(s=Jt(e)?xr:zt.current,r.context=ds(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(vu(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&wl.enqueueReplaceState(r,r.state,null),sl(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function gs(t,e){try{var n="",i=e;do n+=iv(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function ac(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function xu(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var P_=typeof WeakMap=="function"?WeakMap:Map;function T0(t,e,n){n=di(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){ul||(ul=!0,bu=i),xu(t,e)},n}function A0(t,e,n){n=di(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){xu(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){xu(t,e),typeof i!="function"&&(Hi===null?Hi=new Set([this]):Hi.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Ah(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new P_;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=W_.bind(null,t,e,n),e.then(t,t))}function Ch(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Rh(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=di(-1,1),e.tag=2,zi(n,e,1))),n.lanes|=1),t)}var D_=Si.ReactCurrentOwner,Zt=!1;function Gt(t,e,n,i){e.child=t===null?t0(e,null,n,i):ps(e,t.child,n,i)}function bh(t,e,n,i,r){n=n.render;var s=e.ref;return as(e,r),i=td(t,e,n,i,s,r),n=nd(),t!==null&&!Zt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,vi(t,e,r)):(lt&&n&&Gf(e),e.flags|=1,Gt(t,e,i,r),e.child)}function Ph(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!dd(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,C0(t,e,s,i,r)):(t=Fa(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:uo,n(o,i)&&t.ref===e.ref)return vi(t,e,r)}return e.flags|=1,t=Gi(s,i),t.ref=e.ref,t.return=e,e.child=t}function C0(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(uo(s,i)&&t.ref===e.ref)if(Zt=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(Zt=!0);else return e.lanes=t.lanes,vi(t,e,r)}return yu(t,e,n,i,r)}function R0(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},it(ts,an),an|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,it(ts,an),an|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,it(ts,an),an|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,it(ts,an),an|=i;return Gt(t,e,r,n),e.child}function b0(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function yu(t,e,n,i,r){var s=Jt(n)?xr:zt.current;return s=ds(e,s),as(e,r),n=td(t,e,n,i,s,r),i=nd(),t!==null&&!Zt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,vi(t,e,r)):(lt&&i&&Gf(e),e.flags|=1,Gt(t,e,n,r),e.child)}function Dh(t,e,n,i,r){if(Jt(n)){var s=!0;el(e)}else s=!1;if(as(e,r),e.stateNode===null)Na(t,e),w0(e,n,i),_u(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=Cn(c):(c=Jt(n)?xr:zt.current,c=ds(e,c));var d=n.getDerivedStateFromProps,h=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==c)&&Th(e,o,i,c),Pi=!1;var f=e.memoizedState;o.state=f,sl(e,i,o,r),l=e.memoizedState,a!==i||f!==l||Qt.current||Pi?(typeof d=="function"&&(vu(e,n,d,i),l=e.memoizedState),(a=Pi||wh(e,n,a,i,f,l,c))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=c,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,i0(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:Un(e.type,a),o.props=c,h=e.pendingProps,f=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Cn(l):(l=Jt(n)?xr:zt.current,l=ds(e,l));var p=n.getDerivedStateFromProps;(d=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==h||f!==l)&&Th(e,o,i,l),Pi=!1,f=e.memoizedState,o.state=f,sl(e,i,o,r);var _=e.memoizedState;a!==h||f!==_||Qt.current||Pi?(typeof p=="function"&&(vu(e,n,p,i),_=e.memoizedState),(c=Pi||wh(e,n,c,i,f,_,l)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,_,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,_,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=_),o.props=i,o.state=_,o.context=l,i=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),i=!1)}return Su(t,e,n,i,s,r)}function Su(t,e,n,i,r,s){b0(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&gh(e,n,!1),vi(t,e,s);i=e.stateNode,D_.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=ps(e,t.child,null,s),e.child=ps(e,null,a,s)):Gt(t,e,a,s),e.memoizedState=i.state,r&&gh(e,n,!0),e.child}function P0(t){var e=t.stateNode;e.pendingContext?mh(t,e.pendingContext,e.pendingContext!==e.context):e.context&&mh(t,e.context,!1),Zf(t,e.containerInfo)}function Lh(t,e,n,i,r){return hs(),Xf(r),e.flags|=256,Gt(t,e,n,i),e.child}var Eu={dehydrated:null,treeContext:null,retryLane:0};function Mu(t){return{baseLanes:t,cachePool:null,transitions:null}}function D0(t,e,n){var i=e.pendingProps,r=ut.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),it(ut,r&1),t===null)return mu(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Cl(o,i,0,null),t=_r(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Mu(n),e.memoizedState=Eu,t):sd(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return L_(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=Gi(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=Gi(a,s):(s=_r(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?Mu(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Eu,i}return s=t.child,t=s.sibling,i=Gi(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function sd(t,e){return e=Cl({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Zo(t,e,n,i){return i!==null&&Xf(i),ps(e,t.child,null,n),t=sd(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function L_(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=ac(Error(te(422))),Zo(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=Cl({mode:"visible",children:i.children},r,0,null),s=_r(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&ps(e,t.child,null,o),e.child.memoizedState=Mu(o),e.memoizedState=Eu,s);if(!(e.mode&1))return Zo(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(te(419)),i=ac(s,i,void 0),Zo(t,e,o,i)}if(a=(o&t.childLanes)!==0,Zt||a){if(i=bt,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,gi(t,r),Hn(i,t,r,-1))}return fd(),i=ac(Error(te(421))),Zo(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=X_.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,ln=Bi(r.nextSibling),un=e,lt=!0,On=null,t!==null&&(yn[Sn++]=li,yn[Sn++]=ci,yn[Sn++]=yr,li=t.id,ci=t.overflow,yr=e),e=sd(e,i.children),e.flags|=4096,e)}function Nh(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),gu(t.return,e,n)}function lc(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function L0(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(Gt(t,e,i.children,n),i=ut.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Nh(t,n,e);else if(t.tag===19)Nh(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(it(ut,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&ol(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),lc(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&ol(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}lc(e,!0,n,null,s);break;case"together":lc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Na(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function vi(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Er|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(te(153));if(e.child!==null){for(t=e.child,n=Gi(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Gi(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function N_(t,e,n){switch(e.tag){case 3:P0(e),hs();break;case 5:r0(e);break;case 1:Jt(e.type)&&el(e);break;case 4:Zf(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;it(il,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(it(ut,ut.current&1),e.flags|=128,null):n&e.child.childLanes?D0(t,e,n):(it(ut,ut.current&1),t=vi(t,e,n),t!==null?t.sibling:null);it(ut,ut.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return L0(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),it(ut,ut.current),i)break;return null;case 22:case 23:return e.lanes=0,R0(t,e,n)}return vi(t,e,n)}var N0,wu,I0,U0;N0=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};wu=function(){};I0=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,pr(Zn.current);var s=null;switch(n){case"input":r=jc(t,r),i=jc(t,i),s=[];break;case"select":r=dt({},r,{value:void 0}),i=dt({},i,{value:void 0}),s=[];break;case"textarea":r=$c(t,r),i=$c(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=Qa)}Zc(n,i);var o;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var a=r[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(io.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(a=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(io.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&st("scroll",t),s||a===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};U0=function(t,e,n,i){n!==i&&(e.flags|=4)};function Us(t,e){if(!lt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Ft(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function I_(t,e,n){var i=e.pendingProps;switch(Wf(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ft(e),null;case 1:return Jt(e.type)&&Ja(),Ft(e),null;case 3:return i=e.stateNode,ms(),ot(Qt),ot(zt),Jf(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&($o(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,On!==null&&(Lu(On),On=null))),wu(t,e),Ft(e),null;case 5:Qf(e);var r=pr(go.current);if(n=e.type,t!==null&&e.stateNode!=null)I0(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(te(166));return Ft(e),null}if(t=pr(Zn.current),$o(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[qn]=e,i[po]=s,t=(e.mode&1)!==0,n){case"dialog":st("cancel",i),st("close",i);break;case"iframe":case"object":case"embed":st("load",i);break;case"video":case"audio":for(r=0;r<Xs.length;r++)st(Xs[r],i);break;case"source":st("error",i);break;case"img":case"image":case"link":st("error",i),st("load",i);break;case"details":st("toggle",i);break;case"input":Vd(i,s),st("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},st("invalid",i);break;case"textarea":Wd(i,s),st("invalid",i)}Zc(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&qo(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&qo(i.textContent,a,t),r=["children",""+a]):io.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&st("scroll",i)}switch(n){case"input":zo(i),Gd(i,s,!0);break;case"textarea":zo(i),Xd(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=Qa)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=cm(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[qn]=e,t[po]=i,N0(t,e,!1,!1),e.stateNode=t;e:{switch(o=Qc(n,i),n){case"dialog":st("cancel",t),st("close",t),r=i;break;case"iframe":case"object":case"embed":st("load",t),r=i;break;case"video":case"audio":for(r=0;r<Xs.length;r++)st(Xs[r],t);r=i;break;case"source":st("error",t),r=i;break;case"img":case"image":case"link":st("error",t),st("load",t),r=i;break;case"details":st("toggle",t),r=i;break;case"input":Vd(t,i),r=jc(t,i),st("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=dt({},i,{value:void 0}),st("invalid",t);break;case"textarea":Wd(t,i),r=$c(t,i),st("invalid",t);break;default:r=i}Zc(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?dm(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&um(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&ro(t,l):typeof l=="number"&&ro(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(io.hasOwnProperty(s)?l!=null&&s==="onScroll"&&st("scroll",t):l!=null&&bf(t,s,l,o))}switch(n){case"input":zo(t),Gd(t,i,!1);break;case"textarea":zo(t),Xd(t);break;case"option":i.value!=null&&t.setAttribute("value",""+ji(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?is(t,!!i.multiple,s,!1):i.defaultValue!=null&&is(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=Qa)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Ft(e),null;case 6:if(t&&e.stateNode!=null)U0(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(te(166));if(n=pr(go.current),pr(Zn.current),$o(e)){if(i=e.stateNode,n=e.memoizedProps,i[qn]=e,(s=i.nodeValue!==n)&&(t=un,t!==null))switch(t.tag){case 3:qo(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&qo(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[qn]=e,e.stateNode=i}return Ft(e),null;case 13:if(ot(ut),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(lt&&ln!==null&&e.mode&1&&!(e.flags&128))Jm(),hs(),e.flags|=98560,s=!1;else if(s=$o(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(te(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(te(317));s[qn]=e}else hs(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Ft(e),s=!1}else On!==null&&(Lu(On),On=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||ut.current&1?wt===0&&(wt=3):fd())),e.updateQueue!==null&&(e.flags|=4),Ft(e),null);case 4:return ms(),wu(t,e),t===null&&fo(e.stateNode.containerInfo),Ft(e),null;case 10:return qf(e.type._context),Ft(e),null;case 17:return Jt(e.type)&&Ja(),Ft(e),null;case 19:if(ot(ut),s=e.memoizedState,s===null)return Ft(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)Us(s,!1);else{if(wt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=ol(t),o!==null){for(e.flags|=128,Us(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return it(ut,ut.current&1|2),e.child}t=t.sibling}s.tail!==null&&vt()>vs&&(e.flags|=128,i=!0,Us(s,!1),e.lanes=4194304)}else{if(!i)if(t=ol(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Us(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!lt)return Ft(e),null}else 2*vt()-s.renderingStartTime>vs&&n!==1073741824&&(e.flags|=128,i=!0,Us(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=vt(),e.sibling=null,n=ut.current,it(ut,i?n&1|2:n&1),e):(Ft(e),null);case 22:case 23:return ud(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?an&1073741824&&(Ft(e),e.subtreeFlags&6&&(e.flags|=8192)):Ft(e),null;case 24:return null;case 25:return null}throw Error(te(156,e.tag))}function U_(t,e){switch(Wf(e),e.tag){case 1:return Jt(e.type)&&Ja(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return ms(),ot(Qt),ot(zt),Jf(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Qf(e),null;case 13:if(ot(ut),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(te(340));hs()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ot(ut),null;case 4:return ms(),null;case 10:return qf(e.type._context),null;case 22:case 23:return ud(),null;case 24:return null;default:return null}}var Qo=!1,Bt=!1,F_=typeof WeakSet=="function"?WeakSet:Set,pe=null;function es(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){mt(t,e,i)}else n.current=null}function Tu(t,e,n){try{n()}catch(i){mt(t,e,i)}}var Ih=!1;function O_(t,e){if(lu=$a,t=zm(),Vf(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,c=0,d=0,h=t,f=null;t:for(;;){for(var p;h!==n||r!==0&&h.nodeType!==3||(a=o+r),h!==s||i!==0&&h.nodeType!==3||(l=o+i),h.nodeType===3&&(o+=h.nodeValue.length),(p=h.firstChild)!==null;)f=h,h=p;for(;;){if(h===t)break t;if(f===n&&++c===r&&(a=o),f===s&&++d===i&&(l=o),(p=h.nextSibling)!==null)break;h=f,f=h.parentNode}h=p}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(cu={focusedElem:t,selectionRange:n},$a=!1,pe=e;pe!==null;)if(e=pe,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,pe=t;else for(;pe!==null;){e=pe;try{var _=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var y=_.memoizedProps,m=_.memoizedState,u=e.stateNode,g=u.getSnapshotBeforeUpdate(e.elementType===e.type?y:Un(e.type,y),m);u.__reactInternalSnapshotBeforeUpdate=g}break;case 3:var v=e.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(te(163))}}catch(x){mt(e,e.return,x)}if(t=e.sibling,t!==null){t.return=e.return,pe=t;break}pe=e.return}return _=Ih,Ih=!1,_}function Js(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&Tu(e,n,s)}r=r.next}while(r!==i)}}function Tl(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function Au(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function F0(t){var e=t.alternate;e!==null&&(t.alternate=null,F0(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[qn],delete e[po],delete e[du],delete e[x_],delete e[y_])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function O0(t){return t.tag===5||t.tag===3||t.tag===4}function Uh(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||O0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Cu(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Qa));else if(i!==4&&(t=t.child,t!==null))for(Cu(t,e,n),t=t.sibling;t!==null;)Cu(t,e,n),t=t.sibling}function Ru(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(Ru(t,e,n),t=t.sibling;t!==null;)Ru(t,e,n),t=t.sibling}var Dt=null,Fn=!1;function Ei(t,e,n){for(n=n.child;n!==null;)k0(t,e,n),n=n.sibling}function k0(t,e,n){if(Kn&&typeof Kn.onCommitFiberUnmount=="function")try{Kn.onCommitFiberUnmount(vl,n)}catch{}switch(n.tag){case 5:Bt||es(n,e);case 6:var i=Dt,r=Fn;Dt=null,Ei(t,e,n),Dt=i,Fn=r,Dt!==null&&(Fn?(t=Dt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Dt.removeChild(n.stateNode));break;case 18:Dt!==null&&(Fn?(t=Dt,n=n.stateNode,t.nodeType===8?tc(t.parentNode,n):t.nodeType===1&&tc(t,n),lo(t)):tc(Dt,n.stateNode));break;case 4:i=Dt,r=Fn,Dt=n.stateNode.containerInfo,Fn=!0,Ei(t,e,n),Dt=i,Fn=r;break;case 0:case 11:case 14:case 15:if(!Bt&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Tu(n,e,o),r=r.next}while(r!==i)}Ei(t,e,n);break;case 1:if(!Bt&&(es(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){mt(n,e,a)}Ei(t,e,n);break;case 21:Ei(t,e,n);break;case 22:n.mode&1?(Bt=(i=Bt)||n.memoizedState!==null,Ei(t,e,n),Bt=i):Ei(t,e,n);break;default:Ei(t,e,n)}}function Fh(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new F_),e.forEach(function(i){var r=j_.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Dn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Dt=a.stateNode,Fn=!1;break e;case 3:Dt=a.stateNode.containerInfo,Fn=!0;break e;case 4:Dt=a.stateNode.containerInfo,Fn=!0;break e}a=a.return}if(Dt===null)throw Error(te(160));k0(s,o,r),Dt=null,Fn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){mt(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)B0(e,t),e=e.sibling}function B0(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Dn(e,t),Xn(t),i&4){try{Js(3,t,t.return),Tl(3,t)}catch(y){mt(t,t.return,y)}try{Js(5,t,t.return)}catch(y){mt(t,t.return,y)}}break;case 1:Dn(e,t),Xn(t),i&512&&n!==null&&es(n,n.return);break;case 5:if(Dn(e,t),Xn(t),i&512&&n!==null&&es(n,n.return),t.flags&32){var r=t.stateNode;try{ro(r,"")}catch(y){mt(t,t.return,y)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&am(r,s),Qc(a,o);var c=Qc(a,s);for(o=0;o<l.length;o+=2){var d=l[o],h=l[o+1];d==="style"?dm(r,h):d==="dangerouslySetInnerHTML"?um(r,h):d==="children"?ro(r,h):bf(r,d,h,c)}switch(a){case"input":Yc(r,s);break;case"textarea":lm(r,s);break;case"select":var f=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?is(r,!!s.multiple,p,!1):f!==!!s.multiple&&(s.defaultValue!=null?is(r,!!s.multiple,s.defaultValue,!0):is(r,!!s.multiple,s.multiple?[]:"",!1))}r[po]=s}catch(y){mt(t,t.return,y)}}break;case 6:if(Dn(e,t),Xn(t),i&4){if(t.stateNode===null)throw Error(te(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(y){mt(t,t.return,y)}}break;case 3:if(Dn(e,t),Xn(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{lo(e.containerInfo)}catch(y){mt(t,t.return,y)}break;case 4:Dn(e,t),Xn(t);break;case 13:Dn(e,t),Xn(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(ld=vt())),i&4&&Fh(t);break;case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?(Bt=(c=Bt)||d,Dn(e,t),Bt=c):Dn(e,t),Xn(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!d&&t.mode&1)for(pe=t,d=t.child;d!==null;){for(h=pe=d;pe!==null;){switch(f=pe,p=f.child,f.tag){case 0:case 11:case 14:case 15:Js(4,f,f.return);break;case 1:es(f,f.return);var _=f.stateNode;if(typeof _.componentWillUnmount=="function"){i=f,n=f.return;try{e=i,_.props=e.memoizedProps,_.state=e.memoizedState,_.componentWillUnmount()}catch(y){mt(i,n,y)}}break;case 5:es(f,f.return);break;case 22:if(f.memoizedState!==null){kh(h);continue}}p!==null?(p.return=f,pe=p):kh(h)}d=d.sibling}e:for(d=null,h=t;;){if(h.tag===5){if(d===null){d=h;try{r=h.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=h.stateNode,l=h.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=fm("display",o))}catch(y){mt(t,t.return,y)}}}else if(h.tag===6){if(d===null)try{h.stateNode.nodeValue=c?"":h.memoizedProps}catch(y){mt(t,t.return,y)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;d===h&&(d=null),h=h.return}d===h&&(d=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:Dn(e,t),Xn(t),i&4&&Fh(t);break;case 21:break;default:Dn(e,t),Xn(t)}}function Xn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(O0(n)){var i=n;break e}n=n.return}throw Error(te(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(ro(r,""),i.flags&=-33);var s=Uh(t);Ru(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=Uh(t);Cu(t,a,o);break;default:throw Error(te(161))}}catch(l){mt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function k_(t,e,n){pe=t,z0(t)}function z0(t,e,n){for(var i=(t.mode&1)!==0;pe!==null;){var r=pe,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||Qo;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||Bt;a=Qo;var c=Bt;if(Qo=o,(Bt=l)&&!c)for(pe=r;pe!==null;)o=pe,l=o.child,o.tag===22&&o.memoizedState!==null?Bh(r):l!==null?(l.return=o,pe=l):Bh(r);for(;s!==null;)pe=s,z0(s),s=s.sibling;pe=r,Qo=a,Bt=c}Oh(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,pe=s):Oh(t)}}function Oh(t){for(;pe!==null;){var e=pe;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Bt||Tl(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Bt)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:Un(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Sh(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Sh(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var d=c.memoizedState;if(d!==null){var h=d.dehydrated;h!==null&&lo(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(te(163))}Bt||e.flags&512&&Au(e)}catch(f){mt(e,e.return,f)}}if(e===t){pe=null;break}if(n=e.sibling,n!==null){n.return=e.return,pe=n;break}pe=e.return}}function kh(t){for(;pe!==null;){var e=pe;if(e===t){pe=null;break}var n=e.sibling;if(n!==null){n.return=e.return,pe=n;break}pe=e.return}}function Bh(t){for(;pe!==null;){var e=pe;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Tl(4,e)}catch(l){mt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){mt(e,r,l)}}var s=e.return;try{Au(e)}catch(l){mt(e,s,l)}break;case 5:var o=e.return;try{Au(e)}catch(l){mt(e,o,l)}}}catch(l){mt(e,e.return,l)}if(e===t){pe=null;break}var a=e.sibling;if(a!==null){a.return=e.return,pe=a;break}pe=e.return}}var B_=Math.ceil,cl=Si.ReactCurrentDispatcher,od=Si.ReactCurrentOwner,Tn=Si.ReactCurrentBatchConfig,We=0,bt=null,Et=null,Lt=0,an=0,ts=Ki(0),wt=0,yo=null,Er=0,Al=0,ad=0,eo=null,Kt=null,ld=0,vs=1/0,si=null,ul=!1,bu=null,Hi=null,Jo=!1,Ui=null,fl=0,to=0,Pu=null,Ia=-1,Ua=0;function Wt(){return We&6?vt():Ia!==-1?Ia:Ia=vt()}function Vi(t){return t.mode&1?We&2&&Lt!==0?Lt&-Lt:E_.transition!==null?(Ua===0&&(Ua=wm()),Ua):(t=et,t!==0||(t=window.event,t=t===void 0?16:Dm(t.type)),t):1}function Hn(t,e,n,i){if(50<to)throw to=0,Pu=null,Error(te(185));Ao(t,n,i),(!(We&2)||t!==bt)&&(t===bt&&(!(We&2)&&(Al|=n),wt===4&&Li(t,Lt)),en(t,i),n===1&&We===0&&!(e.mode&1)&&(vs=vt()+500,El&&Zi()))}function en(t,e){var n=t.callbackNode;Ev(t,e);var i=qa(t,t===bt?Lt:0);if(i===0)n!==null&&qd(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&qd(n),e===1)t.tag===0?S_(zh.bind(null,t)):Km(zh.bind(null,t)),v_(function(){!(We&6)&&Zi()}),n=null;else{switch(Tm(i)){case 1:n=If;break;case 4:n=Em;break;case 16:n=Ya;break;case 536870912:n=Mm;break;default:n=Ya}n=q0(n,H0.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function H0(t,e){if(Ia=-1,Ua=0,We&6)throw Error(te(327));var n=t.callbackNode;if(ls()&&t.callbackNode!==n)return null;var i=qa(t,t===bt?Lt:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=dl(t,i);else{e=i;var r=We;We|=2;var s=G0();(bt!==t||Lt!==e)&&(si=null,vs=vt()+500,vr(t,e));do try{V_();break}catch(a){V0(t,a)}while(!0);Yf(),cl.current=s,We=r,Et!==null?e=0:(bt=null,Lt=0,e=wt)}if(e!==0){if(e===2&&(r=iu(t),r!==0&&(i=r,e=Du(t,r))),e===1)throw n=yo,vr(t,0),Li(t,i),en(t,vt()),n;if(e===6)Li(t,i);else{if(r=t.current.alternate,!(i&30)&&!z_(r)&&(e=dl(t,i),e===2&&(s=iu(t),s!==0&&(i=s,e=Du(t,s))),e===1))throw n=yo,vr(t,0),Li(t,i),en(t,vt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(te(345));case 2:ar(t,Kt,si);break;case 3:if(Li(t,i),(i&130023424)===i&&(e=ld+500-vt(),10<e)){if(qa(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){Wt(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=fu(ar.bind(null,t,Kt,si),e);break}ar(t,Kt,si);break;case 4:if(Li(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-zn(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=vt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*B_(i/1960))-i,10<i){t.timeoutHandle=fu(ar.bind(null,t,Kt,si),i);break}ar(t,Kt,si);break;case 5:ar(t,Kt,si);break;default:throw Error(te(329))}}}return en(t,vt()),t.callbackNode===n?H0.bind(null,t):null}function Du(t,e){var n=eo;return t.current.memoizedState.isDehydrated&&(vr(t,e).flags|=256),t=dl(t,e),t!==2&&(e=Kt,Kt=n,e!==null&&Lu(e)),t}function Lu(t){Kt===null?Kt=t:Kt.push.apply(Kt,t)}function z_(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!Gn(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Li(t,e){for(e&=~ad,e&=~Al,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-zn(e),i=1<<n;t[n]=-1,e&=~i}}function zh(t){if(We&6)throw Error(te(327));ls();var e=qa(t,0);if(!(e&1))return en(t,vt()),null;var n=dl(t,e);if(t.tag!==0&&n===2){var i=iu(t);i!==0&&(e=i,n=Du(t,i))}if(n===1)throw n=yo,vr(t,0),Li(t,e),en(t,vt()),n;if(n===6)throw Error(te(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,ar(t,Kt,si),en(t,vt()),null}function cd(t,e){var n=We;We|=1;try{return t(e)}finally{We=n,We===0&&(vs=vt()+500,El&&Zi())}}function Mr(t){Ui!==null&&Ui.tag===0&&!(We&6)&&ls();var e=We;We|=1;var n=Tn.transition,i=et;try{if(Tn.transition=null,et=1,t)return t()}finally{et=i,Tn.transition=n,We=e,!(We&6)&&Zi()}}function ud(){an=ts.current,ot(ts)}function vr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,g_(n)),Et!==null)for(n=Et.return;n!==null;){var i=n;switch(Wf(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Ja();break;case 3:ms(),ot(Qt),ot(zt),Jf();break;case 5:Qf(i);break;case 4:ms();break;case 13:ot(ut);break;case 19:ot(ut);break;case 10:qf(i.type._context);break;case 22:case 23:ud()}n=n.return}if(bt=t,Et=t=Gi(t.current,null),Lt=an=e,wt=0,yo=null,ad=Al=Er=0,Kt=eo=null,hr!==null){for(e=0;e<hr.length;e++)if(n=hr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}hr=null}return t}function V0(t,e){do{var n=Et;try{if(Yf(),Da.current=ll,al){for(var i=ft.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}al=!1}if(Sr=0,Rt=Mt=ft=null,Qs=!1,vo=0,od.current=null,n===null||n.return===null){wt=1,yo=e,Et=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=Lt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,d=a,h=d.tag;if(!(d.mode&1)&&(h===0||h===11||h===15)){var f=d.alternate;f?(d.updateQueue=f.updateQueue,d.memoizedState=f.memoizedState,d.lanes=f.lanes):(d.updateQueue=null,d.memoizedState=null)}var p=Ch(o);if(p!==null){p.flags&=-257,Rh(p,o,a,s,e),p.mode&1&&Ah(s,c,e),e=p,l=c;var _=e.updateQueue;if(_===null){var y=new Set;y.add(l),e.updateQueue=y}else _.add(l);break e}else{if(!(e&1)){Ah(s,c,e),fd();break e}l=Error(te(426))}}else if(lt&&a.mode&1){var m=Ch(o);if(m!==null){!(m.flags&65536)&&(m.flags|=256),Rh(m,o,a,s,e),Xf(gs(l,a));break e}}s=l=gs(l,a),wt!==4&&(wt=2),eo===null?eo=[s]:eo.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var u=T0(s,l,e);yh(s,u);break e;case 1:a=l;var g=s.type,v=s.stateNode;if(!(s.flags&128)&&(typeof g.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(Hi===null||!Hi.has(v)))){s.flags|=65536,e&=-e,s.lanes|=e;var x=A0(s,a,e);yh(s,x);break e}}s=s.return}while(s!==null)}X0(n)}catch(b){e=b,Et===n&&n!==null&&(Et=n=n.return);continue}break}while(!0)}function G0(){var t=cl.current;return cl.current=ll,t===null?ll:t}function fd(){(wt===0||wt===3||wt===2)&&(wt=4),bt===null||!(Er&268435455)&&!(Al&268435455)||Li(bt,Lt)}function dl(t,e){var n=We;We|=2;var i=G0();(bt!==t||Lt!==e)&&(si=null,vr(t,e));do try{H_();break}catch(r){V0(t,r)}while(!0);if(Yf(),We=n,cl.current=i,Et!==null)throw Error(te(261));return bt=null,Lt=0,wt}function H_(){for(;Et!==null;)W0(Et)}function V_(){for(;Et!==null&&!hv();)W0(Et)}function W0(t){var e=Y0(t.alternate,t,an);t.memoizedProps=t.pendingProps,e===null?X0(t):Et=e,od.current=null}function X0(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=U_(n,e),n!==null){n.flags&=32767,Et=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{wt=6,Et=null;return}}else if(n=I_(n,e,an),n!==null){Et=n;return}if(e=e.sibling,e!==null){Et=e;return}Et=e=t}while(e!==null);wt===0&&(wt=5)}function ar(t,e,n){var i=et,r=Tn.transition;try{Tn.transition=null,et=1,G_(t,e,n,i)}finally{Tn.transition=r,et=i}return null}function G_(t,e,n,i){do ls();while(Ui!==null);if(We&6)throw Error(te(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(te(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(Mv(t,s),t===bt&&(Et=bt=null,Lt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Jo||(Jo=!0,q0(Ya,function(){return ls(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Tn.transition,Tn.transition=null;var o=et;et=1;var a=We;We|=4,od.current=null,O_(t,n),B0(n,t),c_(cu),$a=!!lu,cu=lu=null,t.current=n,k_(n),pv(),We=a,et=o,Tn.transition=s}else t.current=n;if(Jo&&(Jo=!1,Ui=t,fl=r),s=t.pendingLanes,s===0&&(Hi=null),vv(n.stateNode),en(t,vt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(ul)throw ul=!1,t=bu,bu=null,t;return fl&1&&t.tag!==0&&ls(),s=t.pendingLanes,s&1?t===Pu?to++:(to=0,Pu=t):to=0,Zi(),null}function ls(){if(Ui!==null){var t=Tm(fl),e=Tn.transition,n=et;try{if(Tn.transition=null,et=16>t?16:t,Ui===null)var i=!1;else{if(t=Ui,Ui=null,fl=0,We&6)throw Error(te(331));var r=We;for(We|=4,pe=t.current;pe!==null;){var s=pe,o=s.child;if(pe.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(pe=c;pe!==null;){var d=pe;switch(d.tag){case 0:case 11:case 15:Js(8,d,s)}var h=d.child;if(h!==null)h.return=d,pe=h;else for(;pe!==null;){d=pe;var f=d.sibling,p=d.return;if(F0(d),d===c){pe=null;break}if(f!==null){f.return=p,pe=f;break}pe=p}}}var _=s.alternate;if(_!==null){var y=_.child;if(y!==null){_.child=null;do{var m=y.sibling;y.sibling=null,y=m}while(y!==null)}}pe=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,pe=o;else e:for(;pe!==null;){if(s=pe,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Js(9,s,s.return)}var u=s.sibling;if(u!==null){u.return=s.return,pe=u;break e}pe=s.return}}var g=t.current;for(pe=g;pe!==null;){o=pe;var v=o.child;if(o.subtreeFlags&2064&&v!==null)v.return=o,pe=v;else e:for(o=g;pe!==null;){if(a=pe,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Tl(9,a)}}catch(b){mt(a,a.return,b)}if(a===o){pe=null;break e}var x=a.sibling;if(x!==null){x.return=a.return,pe=x;break e}pe=a.return}}if(We=r,Zi(),Kn&&typeof Kn.onPostCommitFiberRoot=="function")try{Kn.onPostCommitFiberRoot(vl,t)}catch{}i=!0}return i}finally{et=n,Tn.transition=e}}return!1}function Hh(t,e,n){e=gs(n,e),e=T0(t,e,1),t=zi(t,e,1),e=Wt(),t!==null&&(Ao(t,1,e),en(t,e))}function mt(t,e,n){if(t.tag===3)Hh(t,t,n);else for(;e!==null;){if(e.tag===3){Hh(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Hi===null||!Hi.has(i))){t=gs(n,t),t=A0(e,t,1),e=zi(e,t,1),t=Wt(),e!==null&&(Ao(e,1,t),en(e,t));break}}e=e.return}}function W_(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=Wt(),t.pingedLanes|=t.suspendedLanes&n,bt===t&&(Lt&n)===n&&(wt===4||wt===3&&(Lt&130023424)===Lt&&500>vt()-ld?vr(t,0):ad|=n),en(t,e)}function j0(t,e){e===0&&(t.mode&1?(e=Go,Go<<=1,!(Go&130023424)&&(Go=4194304)):e=1);var n=Wt();t=gi(t,e),t!==null&&(Ao(t,e,n),en(t,n))}function X_(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),j0(t,n)}function j_(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(te(314))}i!==null&&i.delete(e),j0(t,n)}var Y0;Y0=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Qt.current)Zt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Zt=!1,N_(t,e,n);Zt=!!(t.flags&131072)}else Zt=!1,lt&&e.flags&1048576&&Zm(e,nl,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Na(t,e),t=e.pendingProps;var r=ds(e,zt.current);as(e,n),r=td(null,e,i,t,r,n);var s=nd();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Jt(i)?(s=!0,el(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Kf(e),r.updater=wl,e.stateNode=r,r._reactInternals=e,_u(e,i,t,n),e=Su(null,e,i,!0,s,n)):(e.tag=0,lt&&s&&Gf(e),Gt(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(Na(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=q_(i),t=Un(i,t),r){case 0:e=yu(null,e,i,t,n);break e;case 1:e=Dh(null,e,i,t,n);break e;case 11:e=bh(null,e,i,t,n);break e;case 14:e=Ph(null,e,i,Un(i.type,t),n);break e}throw Error(te(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Un(i,r),yu(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Un(i,r),Dh(t,e,i,r,n);case 3:e:{if(P0(e),t===null)throw Error(te(387));i=e.pendingProps,s=e.memoizedState,r=s.element,i0(t,e),sl(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=gs(Error(te(423)),e),e=Lh(t,e,i,n,r);break e}else if(i!==r){r=gs(Error(te(424)),e),e=Lh(t,e,i,n,r);break e}else for(ln=Bi(e.stateNode.containerInfo.firstChild),un=e,lt=!0,On=null,n=t0(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(hs(),i===r){e=vi(t,e,n);break e}Gt(t,e,i,n)}e=e.child}return e;case 5:return r0(e),t===null&&mu(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,uu(i,r)?o=null:s!==null&&uu(i,s)&&(e.flags|=32),b0(t,e),Gt(t,e,o,n),e.child;case 6:return t===null&&mu(e),null;case 13:return D0(t,e,n);case 4:return Zf(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=ps(e,null,i,n):Gt(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Un(i,r),bh(t,e,i,r,n);case 7:return Gt(t,e,e.pendingProps,n),e.child;case 8:return Gt(t,e,e.pendingProps.children,n),e.child;case 12:return Gt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,it(il,i._currentValue),i._currentValue=o,s!==null)if(Gn(s.value,o)){if(s.children===r.children&&!Qt.current){e=vi(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=di(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var d=c.pending;d===null?l.next=l:(l.next=d.next,d.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),gu(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(te(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),gu(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Gt(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,as(e,n),r=Cn(r),i=i(r),e.flags|=1,Gt(t,e,i,n),e.child;case 14:return i=e.type,r=Un(i,e.pendingProps),r=Un(i.type,r),Ph(t,e,i,r,n);case 15:return C0(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Un(i,r),Na(t,e),e.tag=1,Jt(i)?(t=!0,el(e)):t=!1,as(e,n),w0(e,i,r),_u(e,i,r,n),Su(null,e,i,!0,t,n);case 19:return L0(t,e,n);case 22:return R0(t,e,n)}throw Error(te(156,e.tag))};function q0(t,e){return Sm(t,e)}function Y_(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Mn(t,e,n,i){return new Y_(t,e,n,i)}function dd(t){return t=t.prototype,!(!t||!t.isReactComponent)}function q_(t){if(typeof t=="function")return dd(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Df)return 11;if(t===Lf)return 14}return 2}function Gi(t,e){var n=t.alternate;return n===null?(n=Mn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Fa(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")dd(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Xr:return _r(n.children,r,s,e);case Pf:o=8,r|=8;break;case Vc:return t=Mn(12,n,e,r|2),t.elementType=Vc,t.lanes=s,t;case Gc:return t=Mn(13,n,e,r),t.elementType=Gc,t.lanes=s,t;case Wc:return t=Mn(19,n,e,r),t.elementType=Wc,t.lanes=s,t;case rm:return Cl(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case nm:o=10;break e;case im:o=9;break e;case Df:o=11;break e;case Lf:o=14;break e;case bi:o=16,i=null;break e}throw Error(te(130,t==null?t:typeof t,""))}return e=Mn(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function _r(t,e,n,i){return t=Mn(7,t,i,e),t.lanes=n,t}function Cl(t,e,n,i){return t=Mn(22,t,i,e),t.elementType=rm,t.lanes=n,t.stateNode={isHidden:!1},t}function cc(t,e,n){return t=Mn(6,t,null,e),t.lanes=n,t}function uc(t,e,n){return e=Mn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function $_(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Wl(0),this.expirationTimes=Wl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Wl(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function hd(t,e,n,i,r,s,o,a,l){return t=new $_(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Mn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Kf(s),t}function K_(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Wr,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function $0(t){if(!t)return Yi;t=t._reactInternals;e:{if(Cr(t)!==t||t.tag!==1)throw Error(te(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Jt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(te(171))}if(t.tag===1){var n=t.type;if(Jt(n))return $m(t,n,e)}return e}function K0(t,e,n,i,r,s,o,a,l){return t=hd(n,i,!0,t,r,s,o,a,l),t.context=$0(null),n=t.current,i=Wt(),r=Vi(n),s=di(i,r),s.callback=e??null,zi(n,s,r),t.current.lanes=r,Ao(t,r,i),en(t,i),t}function Rl(t,e,n,i){var r=e.current,s=Wt(),o=Vi(r);return n=$0(n),e.context===null?e.context=n:e.pendingContext=n,e=di(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=zi(r,e,o),t!==null&&(Hn(t,r,o,s),Pa(t,r,o)),o}function hl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Vh(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function pd(t,e){Vh(t,e),(t=t.alternate)&&Vh(t,e)}function Z_(){return null}var Z0=typeof reportError=="function"?reportError:function(t){console.error(t)};function md(t){this._internalRoot=t}bl.prototype.render=md.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(te(409));Rl(t,e,null,null)};bl.prototype.unmount=md.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Mr(function(){Rl(null,t,null,null)}),e[mi]=null}};function bl(t){this._internalRoot=t}bl.prototype.unstable_scheduleHydration=function(t){if(t){var e=Rm();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Di.length&&e!==0&&e<Di[n].priority;n++);Di.splice(n,0,t),n===0&&Pm(t)}};function gd(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Pl(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Gh(){}function Q_(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=hl(o);s.call(c)}}var o=K0(e,i,t,0,null,!1,!1,"",Gh);return t._reactRootContainer=o,t[mi]=o.current,fo(t.nodeType===8?t.parentNode:t),Mr(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var c=hl(l);a.call(c)}}var l=hd(t,0,!1,null,null,!1,!1,"",Gh);return t._reactRootContainer=l,t[mi]=l.current,fo(t.nodeType===8?t.parentNode:t),Mr(function(){Rl(e,l,n,i)}),l}function Dl(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=hl(o);a.call(l)}}Rl(e,o,t,r)}else o=Q_(n,e,t,r,i);return hl(o)}Am=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Ws(e.pendingLanes);n!==0&&(Uf(e,n|1),en(e,vt()),!(We&6)&&(vs=vt()+500,Zi()))}break;case 13:Mr(function(){var i=gi(t,1);if(i!==null){var r=Wt();Hn(i,t,1,r)}}),pd(t,1)}};Ff=function(t){if(t.tag===13){var e=gi(t,134217728);if(e!==null){var n=Wt();Hn(e,t,134217728,n)}pd(t,134217728)}};Cm=function(t){if(t.tag===13){var e=Vi(t),n=gi(t,e);if(n!==null){var i=Wt();Hn(n,t,e,i)}pd(t,e)}};Rm=function(){return et};bm=function(t,e){var n=et;try{return et=t,e()}finally{et=n}};eu=function(t,e,n){switch(e){case"input":if(Yc(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=Sl(i);if(!r)throw Error(te(90));om(i),Yc(i,r)}}}break;case"textarea":lm(t,n);break;case"select":e=n.value,e!=null&&is(t,!!n.multiple,e,!1)}};mm=cd;gm=Mr;var J_={usingClientEntryPoint:!1,Events:[Ro,$r,Sl,hm,pm,cd]},Fs={findFiberByHostInstance:dr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},ex={bundleType:Fs.bundleType,version:Fs.version,rendererPackageName:Fs.rendererPackageName,rendererConfig:Fs.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Si.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=xm(t),t===null?null:t.stateNode},findFiberByHostInstance:Fs.findFiberByHostInstance||Z_,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ea=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ea.isDisabled&&ea.supportsFiber)try{vl=ea.inject(ex),Kn=ea}catch{}}hn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=J_;hn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!gd(e))throw Error(te(200));return K_(t,e,null,n)};hn.createRoot=function(t,e){if(!gd(t))throw Error(te(299));var n=!1,i="",r=Z0;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=hd(t,1,!1,null,null,n,!1,i,r),t[mi]=e.current,fo(t.nodeType===8?t.parentNode:t),new md(e)};hn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(te(188)):(t=Object.keys(t).join(","),Error(te(268,t)));return t=xm(e),t=t===null?null:t.stateNode,t};hn.flushSync=function(t){return Mr(t)};hn.hydrate=function(t,e,n){if(!Pl(e))throw Error(te(200));return Dl(null,t,e,!0,n)};hn.hydrateRoot=function(t,e,n){if(!gd(t))throw Error(te(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=Z0;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=K0(e,null,t,1,n??null,r,!1,s,o),t[mi]=e.current,fo(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new bl(e)};hn.render=function(t,e,n){if(!Pl(e))throw Error(te(200));return Dl(null,t,e,!1,n)};hn.unmountComponentAtNode=function(t){if(!Pl(t))throw Error(te(40));return t._reactRootContainer?(Mr(function(){Dl(null,null,t,!1,function(){t._reactRootContainer=null,t[mi]=null})}),!0):!1};hn.unstable_batchedUpdates=cd;hn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!Pl(n))throw Error(te(200));if(t==null||t._reactInternals===void 0)throw Error(te(38));return Dl(t,e,n,!1,i)};hn.version="18.3.1-next-f1338f8080-20240426";function Q0(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Q0)}catch(t){console.error(t)}}Q0(),Qp.exports=hn;var tx=Qp.exports,J0,Wh=tx;J0=Wh.createRoot,Wh.hydrateRoot;const nx=({activeSection:t})=>{const[e,n]=cn.useState(!1),i=()=>{n(!e)},r=o=>{const a=document.getElementById(o);a&&a.scrollIntoView({behavior:"smooth"}),n(!1)},s=[{id:"home",label:"Home"},{id:"portfolio",label:"Portfolio"},{id:"about",label:"About"},{id:"contact",label:"Contact"}];return R.createElement("nav",{className:"fixed w-full z-50 bg-gray-900/90 backdrop-blur-sm border-b border-gray-800"},R.createElement("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"},R.createElement("div",{className:"flex justify-between h-16"},R.createElement("div",{className:"flex items-center"},R.createElement("span",{className:"font-bold text-2xl bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"},"MARA")),R.createElement("div",{className:"hidden md:flex items-center space-x-8"},s.map(o=>R.createElement("button",{key:o.id,onClick:()=>r(o.id),className:`px-3 py-2 text-sm font-medium transition-all duration-300 ${t===o.id?"text-indigo-400 border-b-2 border-indigo-500":"text-gray-300 hover:text-white hover:border-b-2 hover:border-indigo-500/50"}`},o.label))),R.createElement("div",{className:"md:hidden flex items-center"},R.createElement("button",{onClick:i,className:"inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white","aria-expanded":"false"},R.createElement("span",{className:"sr-only"},"Open main menu"),e?R.createElement("svg",{className:"block h-6 w-6",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true"},R.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M6 18L18 6M6 6l12 12"})):R.createElement("svg",{className:"block h-6 w-6",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true"},R.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M4 6h16M4 12h16M4 18h16"})))))),R.createElement("div",{className:`md:hidden ${e?"block":"hidden"}`},R.createElement("div",{className:"flex flex-col px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-gray-700"},s.map(o=>R.createElement("button",{key:o.id,onClick:()=>r(o.id),className:`px-3 py-2 rounded-md text-base font-medium ${t===o.id?"bg-gray-700 text-white":"text-gray-300 hover:bg-gray-700 hover:text-white"}`},o.label)))))};/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const vd="176",ix=0,Xh=1,rx=2,eg=1,sx=2,ri=3,qi=0,tn=1,ai=2,Wi=0,cs=1,Nu=2,jh=3,Yh=4,ox=5,ur=100,ax=101,lx=102,cx=103,ux=104,fx=200,dx=201,hx=202,px=203,Iu=204,Uu=205,mx=206,gx=207,vx=208,_x=209,xx=210,yx=211,Sx=212,Ex=213,Mx=214,Fu=0,Ou=1,ku=2,_s=3,Bu=4,zu=5,Hu=6,Vu=7,tg=0,wx=1,Tx=2,Xi=0,Ax=1,Cx=2,Rx=3,bx=4,Px=5,Dx=6,Lx=7,ng=300,xs=301,ys=302,Gu=303,Wu=304,Ll=306,Xu=1e3,mr=1001,ju=1002,Vn=1003,Nx=1004,ta=1005,$n=1006,fc=1007,gr=1008,_i=1009,ig=1010,rg=1011,So=1012,_d=1013,wr=1014,ui=1015,Po=1016,xd=1017,yd=1018,Eo=1020,sg=35902,og=1021,ag=1022,Bn=1023,Mo=1026,wo=1027,lg=1028,Sd=1029,cg=1030,Ed=1031,Md=1033,Oa=33776,ka=33777,Ba=33778,za=33779,Yu=35840,qu=35841,$u=35842,Ku=35843,Zu=36196,Qu=37492,Ju=37496,ef=37808,tf=37809,nf=37810,rf=37811,sf=37812,of=37813,af=37814,lf=37815,cf=37816,uf=37817,ff=37818,df=37819,hf=37820,pf=37821,Ha=36492,mf=36494,gf=36495,ug=36283,vf=36284,_f=36285,xf=36286,Ix=3200,Ux=3201,Fx=0,Ox=1,Ni="",xn="srgb",Ss="srgb-linear",pl="linear",tt="srgb",Pr=7680,qh=519,kx=512,Bx=513,zx=514,fg=515,Hx=516,Vx=517,Gx=518,Wx=519,$h=35044,Kh="300 es",fi=2e3,ml=2001;class As{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const i=n[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Ot=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],dc=Math.PI/180,yf=180/Math.PI;function Do(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ot[t&255]+Ot[t>>8&255]+Ot[t>>16&255]+Ot[t>>24&255]+"-"+Ot[e&255]+Ot[e>>8&255]+"-"+Ot[e>>16&15|64]+Ot[e>>24&255]+"-"+Ot[n&63|128]+Ot[n>>8&255]+"-"+Ot[n>>16&255]+Ot[n>>24&255]+Ot[i&255]+Ot[i>>8&255]+Ot[i>>16&255]+Ot[i>>24&255]).toLowerCase()}function ke(t,e,n){return Math.max(e,Math.min(n,t))}function Xx(t,e){return(t%e+e)%e}function hc(t,e,n){return(1-n)*t+n*e}function Os(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function $t(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class Qe{constructor(e=0,n=0){Qe.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=ke(this.x,e.x,n.x),this.y=ke(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=ke(this.x,e,n),this.y=ke(this.y,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(ke(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(ke(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ie{constructor(e,n,i,r,s,o,a,l,c){Ie.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c)}set(e,n,i,r,s,o,a,l,c){const d=this.elements;return d[0]=e,d[1]=r,d[2]=a,d[3]=n,d[4]=s,d[5]=l,d[6]=i,d[7]=o,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],d=i[4],h=i[7],f=i[2],p=i[5],_=i[8],y=r[0],m=r[3],u=r[6],g=r[1],v=r[4],x=r[7],b=r[2],C=r[5],T=r[8];return s[0]=o*y+a*g+l*b,s[3]=o*m+a*v+l*C,s[6]=o*u+a*x+l*T,s[1]=c*y+d*g+h*b,s[4]=c*m+d*v+h*C,s[7]=c*u+d*x+h*T,s[2]=f*y+p*g+_*b,s[5]=f*m+p*v+_*C,s[8]=f*u+p*x+_*T,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],d=e[8];return n*o*d-n*a*c-i*s*d+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],d=e[8],h=d*o-a*c,f=a*l-d*s,p=c*s-o*l,_=n*h+i*f+r*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/_;return e[0]=h*y,e[1]=(r*c-d*i)*y,e[2]=(a*i-r*o)*y,e[3]=f*y,e[4]=(d*n-r*l)*y,e[5]=(r*s-a*n)*y,e[6]=p*y,e[7]=(i*l-c*n)*y,e[8]=(o*n-i*s)*y,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(pc.makeScale(e,n)),this}rotate(e){return this.premultiply(pc.makeRotation(-e)),this}translate(e,n){return this.premultiply(pc.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const pc=new Ie;function dg(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function gl(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function jx(){const t=gl("canvas");return t.style.display="block",t}const Zh={};function Va(t){t in Zh||(Zh[t]=!0,console.warn(t))}function Yx(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}function qx(t){const e=t.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function $x(t){const e=t.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Qh=new Ie().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Jh=new Ie().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Kx(){const t={enabled:!0,workingColorSpace:Ss,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===tt&&(r.r=hi(r.r),r.g=hi(r.g),r.b=hi(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===tt&&(r.r=us(r.r),r.g=us(r.g),r.b=us(r.b))),r},fromWorkingColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},toWorkingColorSpace:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Ni?pl:this.spaces[r].transfer},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[Ss]:{primaries:e,whitePoint:i,transfer:pl,toXYZ:Qh,fromXYZ:Jh,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:xn},outputColorSpaceConfig:{drawingBufferColorSpace:xn}},[xn]:{primaries:e,whitePoint:i,transfer:tt,toXYZ:Qh,fromXYZ:Jh,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:xn}}}),t}const Ye=Kx();function hi(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function us(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let Dr;class Zx{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Dr===void 0&&(Dr=gl("canvas")),Dr.width=e.width,Dr.height=e.height;const r=Dr.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=Dr}return i.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=gl("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=hi(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(hi(n[i]/255)*255):n[i]=hi(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Qx=0;class wd{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Qx++}),this.uuid=Do(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(mc(r[o].image)):s.push(mc(r[o]))}else s=mc(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function mc(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?Zx.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Jx=0;class nn extends As{constructor(e=nn.DEFAULT_IMAGE,n=nn.DEFAULT_MAPPING,i=mr,r=mr,s=$n,o=gr,a=Bn,l=_i,c=nn.DEFAULT_ANISOTROPY,d=Ni){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Jx++}),this.uuid=Do(),this.name="",this.source=new wd(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Qe(0,0),this.repeat=new Qe(1,1),this.center=new Qe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ie,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isTextureArray=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isTextureArray=e.isTextureArray,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ng)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Xu:e.x=e.x-Math.floor(e.x);break;case mr:e.x=e.x<0?0:1;break;case ju:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Xu:e.y=e.y-Math.floor(e.y);break;case mr:e.y=e.y<0?0:1;break;case ju:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}nn.DEFAULT_IMAGE=null;nn.DEFAULT_MAPPING=ng;nn.DEFAULT_ANISOTROPY=1;class _t{constructor(e=0,n=0,i=0,r=1){_t.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],d=l[4],h=l[8],f=l[1],p=l[5],_=l[9],y=l[2],m=l[6],u=l[10];if(Math.abs(d-f)<.01&&Math.abs(h-y)<.01&&Math.abs(_-m)<.01){if(Math.abs(d+f)<.1&&Math.abs(h+y)<.1&&Math.abs(_+m)<.1&&Math.abs(c+p+u-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const v=(c+1)/2,x=(p+1)/2,b=(u+1)/2,C=(d+f)/4,T=(h+y)/4,P=(_+m)/4;return v>x&&v>b?v<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(v),r=C/i,s=T/i):x>b?x<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(x),i=C/r,s=P/r):b<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(b),i=T/s,r=P/s),this.set(i,r,s,n),this}let g=Math.sqrt((m-_)*(m-_)+(h-y)*(h-y)+(f-d)*(f-d));return Math.abs(g)<.001&&(g=1),this.x=(m-_)/g,this.y=(h-y)/g,this.z=(f-d)/g,this.w=Math.acos((c+p+u-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=ke(this.x,e.x,n.x),this.y=ke(this.y,e.y,n.y),this.z=ke(this.z,e.z,n.z),this.w=ke(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=ke(this.x,e,n),this.y=ke(this.y,e,n),this.z=ke(this.z,e,n),this.w=ke(this.w,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(ke(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class ey extends As{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=i.depth?i.depth:1,this.scissor=new _t(0,0,e,n),this.scissorTest=!1,this.viewport=new _t(0,0,e,n);const r={width:e,height:n,depth:this.depth};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:$n,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,multiview:!1},i);const s=new nn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const r=Object.assign({},e.textures[n].image);this.textures[n].source=new wd(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Tr extends ey{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class hg extends nn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Vn,this.minFilter=Vn,this.wrapR=mr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class ty extends nn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Vn,this.minFilter=Vn,this.wrapR=mr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Lo{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],c=i[r+1],d=i[r+2],h=i[r+3];const f=s[o+0],p=s[o+1],_=s[o+2],y=s[o+3];if(a===0){e[n+0]=l,e[n+1]=c,e[n+2]=d,e[n+3]=h;return}if(a===1){e[n+0]=f,e[n+1]=p,e[n+2]=_,e[n+3]=y;return}if(h!==y||l!==f||c!==p||d!==_){let m=1-a;const u=l*f+c*p+d*_+h*y,g=u>=0?1:-1,v=1-u*u;if(v>Number.EPSILON){const b=Math.sqrt(v),C=Math.atan2(b,u*g);m=Math.sin(m*C)/b,a=Math.sin(a*C)/b}const x=a*g;if(l=l*m+f*x,c=c*m+p*x,d=d*m+_*x,h=h*m+y*x,m===1-a){const b=1/Math.sqrt(l*l+c*c+d*d+h*h);l*=b,c*=b,d*=b,h*=b}}e[n]=l,e[n+1]=c,e[n+2]=d,e[n+3]=h}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],d=i[r+3],h=s[o],f=s[o+1],p=s[o+2],_=s[o+3];return e[n]=a*_+d*h+l*p-c*f,e[n+1]=l*_+d*f+c*h-a*p,e[n+2]=c*_+d*p+a*f-l*h,e[n+3]=d*_-a*h-l*f-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),d=a(r/2),h=a(s/2),f=l(i/2),p=l(r/2),_=l(s/2);switch(o){case"XYZ":this._x=f*d*h+c*p*_,this._y=c*p*h-f*d*_,this._z=c*d*_+f*p*h,this._w=c*d*h-f*p*_;break;case"YXZ":this._x=f*d*h+c*p*_,this._y=c*p*h-f*d*_,this._z=c*d*_-f*p*h,this._w=c*d*h+f*p*_;break;case"ZXY":this._x=f*d*h-c*p*_,this._y=c*p*h+f*d*_,this._z=c*d*_+f*p*h,this._w=c*d*h-f*p*_;break;case"ZYX":this._x=f*d*h-c*p*_,this._y=c*p*h+f*d*_,this._z=c*d*_-f*p*h,this._w=c*d*h+f*p*_;break;case"YZX":this._x=f*d*h+c*p*_,this._y=c*p*h+f*d*_,this._z=c*d*_-f*p*h,this._w=c*d*h-f*p*_;break;case"XZY":this._x=f*d*h-c*p*_,this._y=c*p*h-f*d*_,this._z=c*d*_+f*p*h,this._w=c*d*h+f*p*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],c=n[2],d=n[6],h=n[10],f=i+a+h;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(d-l)*p,this._y=(s-c)*p,this._z=(o-r)*p}else if(i>a&&i>h){const p=2*Math.sqrt(1+i-a-h);this._w=(d-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+c)/p}else if(a>h){const p=2*Math.sqrt(1+a-i-h);this._w=(s-c)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+d)/p}else{const p=2*Math.sqrt(1+h-i-a);this._w=(o-r)/p,this._x=(s+c)/p,this._y=(l+d)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ke(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,c=n._z,d=n._w;return this._x=i*d+o*a+r*c-s*l,this._y=r*d+o*l+s*a-i*c,this._z=s*d+o*c+i*l-r*a,this._w=o*d-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-n;return this._w=p*o+n*this._w,this._x=p*i+n*this._x,this._y=p*r+n*this._y,this._z=p*s+n*this._z,this.normalize(),this}const c=Math.sqrt(l),d=Math.atan2(c,a),h=Math.sin((1-n)*d)/c,f=Math.sin(n*d)/c;return this._w=o*h+this._w*f,this._x=i*h+this._x*f,this._y=r*h+this._y*f,this._z=s*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class O{constructor(e=0,n=0,i=0){O.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(ep.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(ep.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),d=2*(a*n-s*r),h=2*(s*i-o*n);return this.x=n+l*c+o*h-a*d,this.y=i+l*d+a*c-s*h,this.z=r+l*h+s*d-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=ke(this.x,e.x,n.x),this.y=ke(this.y,e.y,n.y),this.z=ke(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=ke(this.x,e,n),this.y=ke(this.y,e,n),this.z=ke(this.z,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(ke(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return gc.copy(this).projectOnVector(e),this.sub(gc)}reflect(e){return this.sub(gc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(ke(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const gc=new O,ep=new Lo;class No{constructor(e=new O(1/0,1/0,1/0),n=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Ln.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Ln.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Ln.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Ln):Ln.fromBufferAttribute(s,o),Ln.applyMatrix4(e.matrixWorld),this.expandByPoint(Ln);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),na.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),na.copy(i.boundingBox)),na.applyMatrix4(e.matrixWorld),this.union(na)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ln),Ln.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ks),ia.subVectors(this.max,ks),Lr.subVectors(e.a,ks),Nr.subVectors(e.b,ks),Ir.subVectors(e.c,ks),Mi.subVectors(Nr,Lr),wi.subVectors(Ir,Nr),er.subVectors(Lr,Ir);let n=[0,-Mi.z,Mi.y,0,-wi.z,wi.y,0,-er.z,er.y,Mi.z,0,-Mi.x,wi.z,0,-wi.x,er.z,0,-er.x,-Mi.y,Mi.x,0,-wi.y,wi.x,0,-er.y,er.x,0];return!vc(n,Lr,Nr,Ir,ia)||(n=[1,0,0,0,1,0,0,0,1],!vc(n,Lr,Nr,Ir,ia))?!1:(ra.crossVectors(Mi,wi),n=[ra.x,ra.y,ra.z],vc(n,Lr,Nr,Ir,ia))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ln).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ln).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Jn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Jn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Jn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Jn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Jn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Jn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Jn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Jn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Jn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Jn=[new O,new O,new O,new O,new O,new O,new O,new O],Ln=new O,na=new No,Lr=new O,Nr=new O,Ir=new O,Mi=new O,wi=new O,er=new O,ks=new O,ia=new O,ra=new O,tr=new O;function vc(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){tr.fromArray(t,s);const a=r.x*Math.abs(tr.x)+r.y*Math.abs(tr.y)+r.z*Math.abs(tr.z),l=e.dot(tr),c=n.dot(tr),d=i.dot(tr);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>a)return!1}return!0}const ny=new No,Bs=new O,_c=new O;class Nl{constructor(e=new O,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):ny.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Bs.subVectors(e,this.center);const n=Bs.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Bs,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(_c.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Bs.copy(e.center).add(_c)),this.expandByPoint(Bs.copy(e.center).sub(_c))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ei=new O,xc=new O,sa=new O,Ti=new O,yc=new O,oa=new O,Sc=new O;class pg{constructor(e=new O,n=new O(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ei)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=ei.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(ei.copy(this.origin).addScaledVector(this.direction,n),ei.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){xc.copy(e).add(n).multiplyScalar(.5),sa.copy(n).sub(e).normalize(),Ti.copy(this.origin).sub(xc);const s=e.distanceTo(n)*.5,o=-this.direction.dot(sa),a=Ti.dot(this.direction),l=-Ti.dot(sa),c=Ti.lengthSq(),d=Math.abs(1-o*o);let h,f,p,_;if(d>0)if(h=o*l-a,f=o*a-l,_=s*d,h>=0)if(f>=-_)if(f<=_){const y=1/d;h*=y,f*=y,p=h*(h+o*f+2*a)+f*(o*h+f+2*l)+c}else f=s,h=Math.max(0,-(o*f+a)),p=-h*h+f*(f+2*l)+c;else f=-s,h=Math.max(0,-(o*f+a)),p=-h*h+f*(f+2*l)+c;else f<=-_?(h=Math.max(0,-(-o*s+a)),f=h>0?-s:Math.min(Math.max(-s,-l),s),p=-h*h+f*(f+2*l)+c):f<=_?(h=0,f=Math.min(Math.max(-s,-l),s),p=f*(f+2*l)+c):(h=Math.max(0,-(o*s+a)),f=h>0?s:Math.min(Math.max(-s,-l),s),p=-h*h+f*(f+2*l)+c);else f=o>0?-s:s,h=Math.max(0,-(o*f+a)),p=-h*h+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(xc).addScaledVector(sa,f),p}intersectSphere(e,n){ei.subVectors(e.center,this.origin);const i=ei.dot(this.direction),r=ei.dot(ei)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const c=1/this.direction.x,d=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,r=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,r=(e.min.x-f.x)*c),d>=0?(s=(e.min.y-f.y)*d,o=(e.max.y-f.y)*d):(s=(e.max.y-f.y)*d,o=(e.min.y-f.y)*d),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),h>=0?(a=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(a=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,ei)!==null}intersectTriangle(e,n,i,r,s){yc.subVectors(n,e),oa.subVectors(i,e),Sc.crossVectors(yc,oa);let o=this.direction.dot(Sc),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ti.subVectors(this.origin,e);const l=a*this.direction.dot(oa.crossVectors(Ti,oa));if(l<0)return null;const c=a*this.direction.dot(yc.cross(Ti));if(c<0||l+c>o)return null;const d=-a*Ti.dot(Sc);return d<0?null:this.at(d/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class xt{constructor(e,n,i,r,s,o,a,l,c,d,h,f,p,_,y,m){xt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c,d,h,f,p,_,y,m)}set(e,n,i,r,s,o,a,l,c,d,h,f,p,_,y,m){const u=this.elements;return u[0]=e,u[4]=n,u[8]=i,u[12]=r,u[1]=s,u[5]=o,u[9]=a,u[13]=l,u[2]=c,u[6]=d,u[10]=h,u[14]=f,u[3]=p,u[7]=_,u[11]=y,u[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new xt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/Ur.setFromMatrixColumn(e,0).length(),s=1/Ur.setFromMatrixColumn(e,1).length(),o=1/Ur.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),d=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const f=o*d,p=o*h,_=a*d,y=a*h;n[0]=l*d,n[4]=-l*h,n[8]=c,n[1]=p+_*c,n[5]=f-y*c,n[9]=-a*l,n[2]=y-f*c,n[6]=_+p*c,n[10]=o*l}else if(e.order==="YXZ"){const f=l*d,p=l*h,_=c*d,y=c*h;n[0]=f+y*a,n[4]=_*a-p,n[8]=o*c,n[1]=o*h,n[5]=o*d,n[9]=-a,n[2]=p*a-_,n[6]=y+f*a,n[10]=o*l}else if(e.order==="ZXY"){const f=l*d,p=l*h,_=c*d,y=c*h;n[0]=f-y*a,n[4]=-o*h,n[8]=_+p*a,n[1]=p+_*a,n[5]=o*d,n[9]=y-f*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const f=o*d,p=o*h,_=a*d,y=a*h;n[0]=l*d,n[4]=_*c-p,n[8]=f*c+y,n[1]=l*h,n[5]=y*c+f,n[9]=p*c-_,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const f=o*l,p=o*c,_=a*l,y=a*c;n[0]=l*d,n[4]=y-f*h,n[8]=_*h+p,n[1]=h,n[5]=o*d,n[9]=-a*d,n[2]=-c*d,n[6]=p*h+_,n[10]=f-y*h}else if(e.order==="XZY"){const f=o*l,p=o*c,_=a*l,y=a*c;n[0]=l*d,n[4]=-h,n[8]=c*d,n[1]=f*h+y,n[5]=o*d,n[9]=p*h-_,n[2]=_*h-p,n[6]=a*d,n[10]=y*h+f}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(iy,e,ry)}lookAt(e,n,i){const r=this.elements;return sn.subVectors(e,n),sn.lengthSq()===0&&(sn.z=1),sn.normalize(),Ai.crossVectors(i,sn),Ai.lengthSq()===0&&(Math.abs(i.z)===1?sn.x+=1e-4:sn.z+=1e-4,sn.normalize(),Ai.crossVectors(i,sn)),Ai.normalize(),aa.crossVectors(sn,Ai),r[0]=Ai.x,r[4]=aa.x,r[8]=sn.x,r[1]=Ai.y,r[5]=aa.y,r[9]=sn.y,r[2]=Ai.z,r[6]=aa.z,r[10]=sn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],d=i[1],h=i[5],f=i[9],p=i[13],_=i[2],y=i[6],m=i[10],u=i[14],g=i[3],v=i[7],x=i[11],b=i[15],C=r[0],T=r[4],P=r[8],w=r[12],S=r[1],D=r[5],V=r[9],H=r[13],K=r[2],Q=r[6],Y=r[10],J=r[14],N=r[3],j=r[7],Z=r[11],oe=r[15];return s[0]=o*C+a*S+l*K+c*N,s[4]=o*T+a*D+l*Q+c*j,s[8]=o*P+a*V+l*Y+c*Z,s[12]=o*w+a*H+l*J+c*oe,s[1]=d*C+h*S+f*K+p*N,s[5]=d*T+h*D+f*Q+p*j,s[9]=d*P+h*V+f*Y+p*Z,s[13]=d*w+h*H+f*J+p*oe,s[2]=_*C+y*S+m*K+u*N,s[6]=_*T+y*D+m*Q+u*j,s[10]=_*P+y*V+m*Y+u*Z,s[14]=_*w+y*H+m*J+u*oe,s[3]=g*C+v*S+x*K+b*N,s[7]=g*T+v*D+x*Q+b*j,s[11]=g*P+v*V+x*Y+b*Z,s[15]=g*w+v*H+x*J+b*oe,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],d=e[2],h=e[6],f=e[10],p=e[14],_=e[3],y=e[7],m=e[11],u=e[15];return _*(+s*l*h-r*c*h-s*a*f+i*c*f+r*a*p-i*l*p)+y*(+n*l*p-n*c*f+s*o*f-r*o*p+r*c*d-s*l*d)+m*(+n*c*h-n*a*p-s*o*h+i*o*p+s*a*d-i*c*d)+u*(-r*a*d-n*l*h+n*a*f+r*o*h-i*o*f+i*l*d)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],d=e[8],h=e[9],f=e[10],p=e[11],_=e[12],y=e[13],m=e[14],u=e[15],g=h*m*c-y*f*c+y*l*p-a*m*p-h*l*u+a*f*u,v=_*f*c-d*m*c-_*l*p+o*m*p+d*l*u-o*f*u,x=d*y*c-_*h*c+_*a*p-o*y*p-d*a*u+o*h*u,b=_*h*l-d*y*l-_*a*f+o*y*f+d*a*m-o*h*m,C=n*g+i*v+r*x+s*b;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/C;return e[0]=g*T,e[1]=(y*f*s-h*m*s-y*r*p+i*m*p+h*r*u-i*f*u)*T,e[2]=(a*m*s-y*l*s+y*r*c-i*m*c-a*r*u+i*l*u)*T,e[3]=(h*l*s-a*f*s-h*r*c+i*f*c+a*r*p-i*l*p)*T,e[4]=v*T,e[5]=(d*m*s-_*f*s+_*r*p-n*m*p-d*r*u+n*f*u)*T,e[6]=(_*l*s-o*m*s-_*r*c+n*m*c+o*r*u-n*l*u)*T,e[7]=(o*f*s-d*l*s+d*r*c-n*f*c-o*r*p+n*l*p)*T,e[8]=x*T,e[9]=(_*h*s-d*y*s-_*i*p+n*y*p+d*i*u-n*h*u)*T,e[10]=(o*y*s-_*a*s+_*i*c-n*y*c-o*i*u+n*a*u)*T,e[11]=(d*a*s-o*h*s-d*i*c+n*h*c+o*i*p-n*a*p)*T,e[12]=b*T,e[13]=(d*y*r-_*h*r+_*i*f-n*y*f-d*i*m+n*h*m)*T,e[14]=(_*a*r-o*y*r-_*i*l+n*y*l+o*i*m-n*a*m)*T,e[15]=(o*h*r-d*a*r+d*i*l-n*h*l-o*i*f+n*a*f)*T,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,d=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,d*a+i,d*l-r*o,0,c*l-r*a,d*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,c=s+s,d=o+o,h=a+a,f=s*c,p=s*d,_=s*h,y=o*d,m=o*h,u=a*h,g=l*c,v=l*d,x=l*h,b=i.x,C=i.y,T=i.z;return r[0]=(1-(y+u))*b,r[1]=(p+x)*b,r[2]=(_-v)*b,r[3]=0,r[4]=(p-x)*C,r[5]=(1-(f+u))*C,r[6]=(m+g)*C,r[7]=0,r[8]=(_+v)*T,r[9]=(m-g)*T,r[10]=(1-(f+y))*T,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=Ur.set(r[0],r[1],r[2]).length();const o=Ur.set(r[4],r[5],r[6]).length(),a=Ur.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Nn.copy(this);const c=1/s,d=1/o,h=1/a;return Nn.elements[0]*=c,Nn.elements[1]*=c,Nn.elements[2]*=c,Nn.elements[4]*=d,Nn.elements[5]*=d,Nn.elements[6]*=d,Nn.elements[8]*=h,Nn.elements[9]*=h,Nn.elements[10]*=h,n.setFromRotationMatrix(Nn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o,a=fi){const l=this.elements,c=2*s/(n-e),d=2*s/(i-r),h=(n+e)/(n-e),f=(i+r)/(i-r);let p,_;if(a===fi)p=-(o+s)/(o-s),_=-2*o*s/(o-s);else if(a===ml)p=-o/(o-s),_=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=d,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=fi){const l=this.elements,c=1/(n-e),d=1/(i-r),h=1/(o-s),f=(n+e)*c,p=(i+r)*d;let _,y;if(a===fi)_=(o+s)*h,y=-2*h;else if(a===ml)_=s*h,y=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*d,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=y,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const Ur=new O,Nn=new xt,iy=new O(0,0,0),ry=new O(1,1,1),Ai=new O,aa=new O,sn=new O,tp=new xt,np=new Lo;class xi{constructor(e=0,n=0,i=0,r=xi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],d=r[9],h=r[2],f=r[6],p=r[10];switch(n){case"XYZ":this._y=Math.asin(ke(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-d,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ke(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(ke(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-ke(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(ke(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-ke(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-d,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return tp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(tp,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return np.setFromEuler(this),this.setFromQuaternion(np,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}xi.DEFAULT_ORDER="XYZ";class mg{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let sy=0;const ip=new O,Fr=new Lo,ti=new xt,la=new O,zs=new O,oy=new O,ay=new Lo,rp=new O(1,0,0),sp=new O(0,1,0),op=new O(0,0,1),ap={type:"added"},ly={type:"removed"},Or={type:"childadded",child:null},Ec={type:"childremoved",child:null};class Xt extends As{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:sy++}),this.uuid=Do(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Xt.DEFAULT_UP.clone();const e=new O,n=new xi,i=new Lo,r=new O(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new xt},normalMatrix:{value:new Ie}}),this.matrix=new xt,this.matrixWorld=new xt,this.matrixAutoUpdate=Xt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Xt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new mg,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Fr.setFromAxisAngle(e,n),this.quaternion.multiply(Fr),this}rotateOnWorldAxis(e,n){return Fr.setFromAxisAngle(e,n),this.quaternion.premultiply(Fr),this}rotateX(e){return this.rotateOnAxis(rp,e)}rotateY(e){return this.rotateOnAxis(sp,e)}rotateZ(e){return this.rotateOnAxis(op,e)}translateOnAxis(e,n){return ip.copy(e).applyQuaternion(this.quaternion),this.position.add(ip.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(rp,e)}translateY(e){return this.translateOnAxis(sp,e)}translateZ(e){return this.translateOnAxis(op,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ti.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?la.copy(e):la.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),zs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ti.lookAt(zs,la,this.up):ti.lookAt(la,zs,this.up),this.quaternion.setFromRotationMatrix(ti),r&&(ti.extractRotation(r.matrixWorld),Fr.setFromRotationMatrix(ti),this.quaternion.premultiply(Fr.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(ap),Or.child=e,this.dispatchEvent(Or),Or.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(ly),Ec.child=e,this.dispatchEvent(Ec),Ec.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ti.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ti.multiply(e.parent.matrixWorld)),e.applyMatrix4(ti),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(ap),Or.child=e,this.dispatchEvent(Or),Or.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zs,e,oy),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zs,ay,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?{min:a.boundingBox.min.toArray(),max:a.boundingBox.max.toArray()}:void 0,boundingSphere:a.boundingSphere?{radius:a.boundingSphere.radius,center:a.boundingSphere.center.toArray()}:void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:this.boundingSphere.center.toArray(),radius:this.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:this.boundingBox.min.toArray(),max:this.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),d=o(e.images),h=o(e.shapes),f=o(e.skeletons),p=o(e.animations),_=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),d.length>0&&(i.images=d),h.length>0&&(i.shapes=h),f.length>0&&(i.skeletons=f),p.length>0&&(i.animations=p),_.length>0&&(i.nodes=_)}return i.object=r,i;function o(a){const l=[];for(const c in a){const d=a[c];delete d.metadata,l.push(d)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Xt.DEFAULT_UP=new O(0,1,0);Xt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Xt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const In=new O,ni=new O,Mc=new O,ii=new O,kr=new O,Br=new O,lp=new O,wc=new O,Tc=new O,Ac=new O,Cc=new _t,Rc=new _t,bc=new _t;class kn{constructor(e=new O,n=new O,i=new O){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),In.subVectors(e,n),r.cross(In);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){In.subVectors(r,n),ni.subVectors(i,n),Mc.subVectors(e,n);const o=In.dot(In),a=In.dot(ni),l=In.dot(Mc),c=ni.dot(ni),d=ni.dot(Mc),h=o*c-a*a;if(h===0)return s.set(0,0,0),null;const f=1/h,p=(c*l-a*d)*f,_=(o*d-a*l)*f;return s.set(1-p-_,_,p)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,ii)===null?!1:ii.x>=0&&ii.y>=0&&ii.x+ii.y<=1}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,ii)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,ii.x),l.addScaledVector(o,ii.y),l.addScaledVector(a,ii.z),l)}static getInterpolatedAttribute(e,n,i,r,s,o){return Cc.setScalar(0),Rc.setScalar(0),bc.setScalar(0),Cc.fromBufferAttribute(e,n),Rc.fromBufferAttribute(e,i),bc.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(Cc,s.x),o.addScaledVector(Rc,s.y),o.addScaledVector(bc,s.z),o}static isFrontFacing(e,n,i,r){return In.subVectors(i,n),ni.subVectors(e,n),In.cross(ni).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return In.subVectors(this.c,this.b),ni.subVectors(this.a,this.b),In.cross(ni).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return kn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return kn.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return kn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return kn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return kn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;kr.subVectors(r,i),Br.subVectors(s,i),wc.subVectors(e,i);const l=kr.dot(wc),c=Br.dot(wc);if(l<=0&&c<=0)return n.copy(i);Tc.subVectors(e,r);const d=kr.dot(Tc),h=Br.dot(Tc);if(d>=0&&h<=d)return n.copy(r);const f=l*h-d*c;if(f<=0&&l>=0&&d<=0)return o=l/(l-d),n.copy(i).addScaledVector(kr,o);Ac.subVectors(e,s);const p=kr.dot(Ac),_=Br.dot(Ac);if(_>=0&&p<=_)return n.copy(s);const y=p*c-l*_;if(y<=0&&c>=0&&_<=0)return a=c/(c-_),n.copy(i).addScaledVector(Br,a);const m=d*_-p*h;if(m<=0&&h-d>=0&&p-_>=0)return lp.subVectors(s,r),a=(h-d)/(h-d+(p-_)),n.copy(r).addScaledVector(lp,a);const u=1/(m+y+f);return o=y*u,a=f*u,n.copy(i).addScaledVector(kr,o).addScaledVector(Br,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const gg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ci={h:0,s:0,l:0},ca={h:0,s:0,l:0};function Pc(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class Ze{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=xn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ye.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=Ye.workingColorSpace){return this.r=e,this.g=n,this.b=i,Ye.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=Ye.workingColorSpace){if(e=Xx(e,1),n=ke(n,0,1),i=ke(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=Pc(o,s,e+1/3),this.g=Pc(o,s,e),this.b=Pc(o,s,e-1/3)}return Ye.toWorkingColorSpace(this,r),this}setStyle(e,n=xn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=xn){const i=gg[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=hi(e.r),this.g=hi(e.g),this.b=hi(e.b),this}copyLinearToSRGB(e){return this.r=us(e.r),this.g=us(e.g),this.b=us(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=xn){return Ye.fromWorkingColorSpace(kt.copy(this),e),Math.round(ke(kt.r*255,0,255))*65536+Math.round(ke(kt.g*255,0,255))*256+Math.round(ke(kt.b*255,0,255))}getHexString(e=xn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Ye.workingColorSpace){Ye.fromWorkingColorSpace(kt.copy(this),n);const i=kt.r,r=kt.g,s=kt.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const d=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=d<=.5?h/(o+a):h/(2-o-a),o){case i:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-i)/h+2;break;case s:l=(i-r)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=d,e}getRGB(e,n=Ye.workingColorSpace){return Ye.fromWorkingColorSpace(kt.copy(this),n),e.r=kt.r,e.g=kt.g,e.b=kt.b,e}getStyle(e=xn){Ye.fromWorkingColorSpace(kt.copy(this),e);const n=kt.r,i=kt.g,r=kt.b;return e!==xn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Ci),this.setHSL(Ci.h+e,Ci.s+n,Ci.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Ci),e.getHSL(ca);const i=hc(Ci.h,ca.h,n),r=hc(Ci.s,ca.s,n),s=hc(Ci.l,ca.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const kt=new Ze;Ze.NAMES=gg;let cy=0;class Io extends As{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:cy++}),this.uuid=Do(),this.name="",this.type="Material",this.blending=cs,this.side=qi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Iu,this.blendDst=Uu,this.blendEquation=ur,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ze(0,0,0),this.blendAlpha=0,this.depthFunc=_s,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=qh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Pr,this.stencilZFail=Pr,this.stencilZPass=Pr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==cs&&(i.blending=this.blending),this.side!==qi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Iu&&(i.blendSrc=this.blendSrc),this.blendDst!==Uu&&(i.blendDst=this.blendDst),this.blendEquation!==ur&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==_s&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==qh&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Pr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Pr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Pr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class no extends Io{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new xi,this.combine=tg,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const St=new O,ua=new Qe;let uy=0;class An{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:uy++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=$h,this.updateRanges=[],this.gpuType=ui,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)ua.fromBufferAttribute(this,n),ua.applyMatrix3(e),this.setXY(n,ua.x,ua.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)St.fromBufferAttribute(this,n),St.applyMatrix3(e),this.setXYZ(n,St.x,St.y,St.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)St.fromBufferAttribute(this,n),St.applyMatrix4(e),this.setXYZ(n,St.x,St.y,St.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)St.fromBufferAttribute(this,n),St.applyNormalMatrix(e),this.setXYZ(n,St.x,St.y,St.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)St.fromBufferAttribute(this,n),St.transformDirection(e),this.setXYZ(n,St.x,St.y,St.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=Os(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=$t(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Os(n,this.array)),n}setX(e,n){return this.normalized&&(n=$t(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Os(n,this.array)),n}setY(e,n){return this.normalized&&(n=$t(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Os(n,this.array)),n}setZ(e,n){return this.normalized&&(n=$t(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Os(n,this.array)),n}setW(e,n){return this.normalized&&(n=$t(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=$t(n,this.array),i=$t(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=$t(n,this.array),i=$t(i,this.array),r=$t(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=$t(n,this.array),i=$t(i,this.array),r=$t(r,this.array),s=$t(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==$h&&(e.usage=this.usage),e}}class vg extends An{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class _g extends An{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class fn extends An{constructor(e,n,i){super(new Float32Array(e),n,i)}}let fy=0;const _n=new xt,Dc=new Xt,zr=new O,on=new No,Hs=new No,Ct=new O;class Wn extends As{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:fy++}),this.uuid=Do(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(dg(e)?_g:vg)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ie().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return _n.makeRotationFromQuaternion(e),this.applyMatrix4(_n),this}rotateX(e){return _n.makeRotationX(e),this.applyMatrix4(_n),this}rotateY(e){return _n.makeRotationY(e),this.applyMatrix4(_n),this}rotateZ(e){return _n.makeRotationZ(e),this.applyMatrix4(_n),this}translate(e,n,i){return _n.makeTranslation(e,n,i),this.applyMatrix4(_n),this}scale(e,n,i){return _n.makeScale(e,n,i),this.applyMatrix4(_n),this}lookAt(e){return Dc.lookAt(e),Dc.updateMatrix(),this.applyMatrix4(Dc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(zr).negate(),this.translate(zr.x,zr.y,zr.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new fn(i,3))}else{const i=Math.min(e.length,n.count);for(let r=0;r<i;r++){const s=e[r];n.setXYZ(r,s.x,s.y,s.z||0)}e.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new No);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];on.setFromBufferAttribute(s),this.morphTargetsRelative?(Ct.addVectors(this.boundingBox.min,on.min),this.boundingBox.expandByPoint(Ct),Ct.addVectors(this.boundingBox.max,on.max),this.boundingBox.expandByPoint(Ct)):(this.boundingBox.expandByPoint(on.min),this.boundingBox.expandByPoint(on.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Nl);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new O,1/0);return}if(e){const i=this.boundingSphere.center;if(on.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];Hs.setFromBufferAttribute(a),this.morphTargetsRelative?(Ct.addVectors(on.min,Hs.min),on.expandByPoint(Ct),Ct.addVectors(on.max,Hs.max),on.expandByPoint(Ct)):(on.expandByPoint(Hs.min),on.expandByPoint(Hs.max))}on.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Ct.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Ct));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let c=0,d=a.count;c<d;c++)Ct.fromBufferAttribute(a,c),l&&(zr.fromBufferAttribute(e,c),Ct.add(zr)),r=Math.max(r,i.distanceToSquared(Ct))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new An(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let P=0;P<i.count;P++)a[P]=new O,l[P]=new O;const c=new O,d=new O,h=new O,f=new Qe,p=new Qe,_=new Qe,y=new O,m=new O;function u(P,w,S){c.fromBufferAttribute(i,P),d.fromBufferAttribute(i,w),h.fromBufferAttribute(i,S),f.fromBufferAttribute(s,P),p.fromBufferAttribute(s,w),_.fromBufferAttribute(s,S),d.sub(c),h.sub(c),p.sub(f),_.sub(f);const D=1/(p.x*_.y-_.x*p.y);isFinite(D)&&(y.copy(d).multiplyScalar(_.y).addScaledVector(h,-p.y).multiplyScalar(D),m.copy(h).multiplyScalar(p.x).addScaledVector(d,-_.x).multiplyScalar(D),a[P].add(y),a[w].add(y),a[S].add(y),l[P].add(m),l[w].add(m),l[S].add(m))}let g=this.groups;g.length===0&&(g=[{start:0,count:e.count}]);for(let P=0,w=g.length;P<w;++P){const S=g[P],D=S.start,V=S.count;for(let H=D,K=D+V;H<K;H+=3)u(e.getX(H+0),e.getX(H+1),e.getX(H+2))}const v=new O,x=new O,b=new O,C=new O;function T(P){b.fromBufferAttribute(r,P),C.copy(b);const w=a[P];v.copy(w),v.sub(b.multiplyScalar(b.dot(w))).normalize(),x.crossVectors(C,w);const D=x.dot(l[P])<0?-1:1;o.setXYZW(P,v.x,v.y,v.z,D)}for(let P=0,w=g.length;P<w;++P){const S=g[P],D=S.start,V=S.count;for(let H=D,K=D+V;H<K;H+=3)T(e.getX(H+0)),T(e.getX(H+1)),T(e.getX(H+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new An(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let f=0,p=i.count;f<p;f++)i.setXYZ(f,0,0,0);const r=new O,s=new O,o=new O,a=new O,l=new O,c=new O,d=new O,h=new O;if(e)for(let f=0,p=e.count;f<p;f+=3){const _=e.getX(f+0),y=e.getX(f+1),m=e.getX(f+2);r.fromBufferAttribute(n,_),s.fromBufferAttribute(n,y),o.fromBufferAttribute(n,m),d.subVectors(o,s),h.subVectors(r,s),d.cross(h),a.fromBufferAttribute(i,_),l.fromBufferAttribute(i,y),c.fromBufferAttribute(i,m),a.add(d),l.add(d),c.add(d),i.setXYZ(_,a.x,a.y,a.z),i.setXYZ(y,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,p=n.count;f<p;f+=3)r.fromBufferAttribute(n,f+0),s.fromBufferAttribute(n,f+1),o.fromBufferAttribute(n,f+2),d.subVectors(o,s),h.subVectors(r,s),d.cross(h),i.setXYZ(f+0,d.x,d.y,d.z),i.setXYZ(f+1,d.x,d.y,d.z),i.setXYZ(f+2,d.x,d.y,d.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Ct.fromBufferAttribute(e,n),Ct.normalize(),e.setXYZ(n,Ct.x,Ct.y,Ct.z)}toNonIndexed(){function e(a,l){const c=a.array,d=a.itemSize,h=a.normalized,f=new c.constructor(l.length*d);let p=0,_=0;for(let y=0,m=l.length;y<m;y++){a.isInterleavedBufferAttribute?p=l[y]*a.data.stride+a.offset:p=l[y]*d;for(let u=0;u<d;u++)f[_++]=c[p++]}return new An(f,d,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Wn,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);n.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let d=0,h=c.length;d<h;d++){const f=c[d],p=e(f,i);l.push(p)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],d=[];for(let h=0,f=c.length;h<f;h++){const p=c[h];d.push(p.toJSON(e.data))}d.length>0&&(r[l]=d,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const c in r){const d=r[c];this.setAttribute(c,d.clone(n))}const s=e.morphAttributes;for(const c in s){const d=[],h=s[c];for(let f=0,p=h.length;f<p;f++)d.push(h[f].clone(n));this.morphAttributes[c]=d}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,d=o.length;c<d;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const cp=new xt,nr=new pg,fa=new Nl,up=new O,da=new O,ha=new O,pa=new O,Lc=new O,ma=new O,fp=new O,ga=new O;class wn extends Xt{constructor(e=new Wn,n=new no){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){ma.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const d=a[l],h=s[l];d!==0&&(Lc.fromBufferAttribute(h,e),o?ma.addScaledVector(Lc,d):ma.addScaledVector(Lc.sub(n),d))}n.add(ma)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),fa.copy(i.boundingSphere),fa.applyMatrix4(s),nr.copy(e.ray).recast(e.near),!(fa.containsPoint(nr.origin)===!1&&(nr.intersectSphere(fa,up)===null||nr.origin.distanceToSquared(up)>(e.far-e.near)**2))&&(cp.copy(s).invert(),nr.copy(e.ray).applyMatrix4(cp),!(i.boundingBox!==null&&nr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,nr)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,d=s.attributes.uv1,h=s.attributes.normal,f=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,y=f.length;_<y;_++){const m=f[_],u=o[m.materialIndex],g=Math.max(m.start,p.start),v=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let x=g,b=v;x<b;x+=3){const C=a.getX(x),T=a.getX(x+1),P=a.getX(x+2);r=va(this,u,e,i,c,d,h,C,T,P),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const _=Math.max(0,p.start),y=Math.min(a.count,p.start+p.count);for(let m=_,u=y;m<u;m+=3){const g=a.getX(m),v=a.getX(m+1),x=a.getX(m+2);r=va(this,o,e,i,c,d,h,g,v,x),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,y=f.length;_<y;_++){const m=f[_],u=o[m.materialIndex],g=Math.max(m.start,p.start),v=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let x=g,b=v;x<b;x+=3){const C=x,T=x+1,P=x+2;r=va(this,u,e,i,c,d,h,C,T,P),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const _=Math.max(0,p.start),y=Math.min(l.count,p.start+p.count);for(let m=_,u=y;m<u;m+=3){const g=m,v=m+1,x=m+2;r=va(this,o,e,i,c,d,h,g,v,x),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}}}function dy(t,e,n,i,r,s,o,a){let l;if(e.side===tn?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===qi,a),l===null)return null;ga.copy(a),ga.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(ga);return c<n.near||c>n.far?null:{distance:c,point:ga.clone(),object:t}}function va(t,e,n,i,r,s,o,a,l,c){t.getVertexPosition(a,da),t.getVertexPosition(l,ha),t.getVertexPosition(c,pa);const d=dy(t,e,n,i,da,ha,pa,fp);if(d){const h=new O;kn.getBarycoord(fp,da,ha,pa,h),r&&(d.uv=kn.getInterpolatedAttribute(r,a,l,c,h,new Qe)),s&&(d.uv1=kn.getInterpolatedAttribute(s,a,l,c,h,new Qe)),o&&(d.normal=kn.getInterpolatedAttribute(o,a,l,c,h,new O),d.normal.dot(i.direction)>0&&d.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new O,materialIndex:0};kn.getNormal(da,ha,pa,f.normal),d.face=f,d.barycoord=h}return d}class Uo extends Wn{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],d=[],h=[];let f=0,p=0;_("z","y","x",-1,-1,i,n,e,o,s,0),_("z","y","x",1,-1,i,n,-e,o,s,1),_("x","z","y",1,1,e,i,n,r,o,2),_("x","z","y",1,-1,e,i,-n,r,o,3),_("x","y","z",1,-1,e,n,i,r,s,4),_("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new fn(c,3)),this.setAttribute("normal",new fn(d,3)),this.setAttribute("uv",new fn(h,2));function _(y,m,u,g,v,x,b,C,T,P,w){const S=x/T,D=b/P,V=x/2,H=b/2,K=C/2,Q=T+1,Y=P+1;let J=0,N=0;const j=new O;for(let Z=0;Z<Y;Z++){const oe=Z*D-H;for(let ye=0;ye<Q;ye++){const Xe=ye*S-V;j[y]=Xe*g,j[m]=oe*v,j[u]=K,c.push(j.x,j.y,j.z),j[y]=0,j[m]=0,j[u]=C>0?1:-1,d.push(j.x,j.y,j.z),h.push(ye/T),h.push(1-Z/P),J+=1}}for(let Z=0;Z<P;Z++)for(let oe=0;oe<T;oe++){const ye=f+oe+Q*Z,Xe=f+oe+Q*(Z+1),W=f+(oe+1)+Q*(Z+1),re=f+(oe+1)+Q*Z;l.push(ye,Xe,re),l.push(Xe,W,re),N+=6}a.addGroup(p,N,w),p+=N,f+=J}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Uo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Es(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function Vt(t){const e={};for(let n=0;n<t.length;n++){const i=Es(t[n]);for(const r in i)e[r]=i[r]}return e}function hy(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function xg(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ye.workingColorSpace}const py={clone:Es,merge:Vt};var my=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,gy=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class yi extends Io{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=my,this.fragmentShader=gy,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Es(e.uniforms),this.uniformsGroups=hy(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class yg extends Xt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new xt,this.projectionMatrix=new xt,this.projectionMatrixInverse=new xt,this.coordinateSystem=fi}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ri=new O,dp=new Qe,hp=new Qe;class En extends yg{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=yf*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(dc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return yf*2*Math.atan(Math.tan(dc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){Ri.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ri.x,Ri.y).multiplyScalar(-e/Ri.z),Ri.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ri.x,Ri.y).multiplyScalar(-e/Ri.z)}getViewSize(e,n){return this.getViewBounds(e,dp,hp),n.subVectors(hp,dp)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(dc*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Hr=-90,Vr=1;class vy extends Xt{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new En(Hr,Vr,e,n);r.layers=this.layers,this.add(r);const s=new En(Hr,Vr,e,n);s.layers=this.layers,this.add(s);const o=new En(Hr,Vr,e,n);o.layers=this.layers,this.add(o);const a=new En(Hr,Vr,e,n);a.layers=this.layers,this.add(a);const l=new En(Hr,Vr,e,n);l.layers=this.layers,this.add(l);const c=new En(Hr,Vr,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const c of n)this.remove(c);if(e===fi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ml)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,d]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,o),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,c),i.texture.generateMipmaps=y,e.setRenderTarget(i,5,r),e.render(n,d),e.setRenderTarget(h,f,p),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class Sg extends nn{constructor(e=[],n=xs,i,r,s,o,a,l,c,d){super(e,n,i,r,s,o,a,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class _y extends Tr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Sg(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:$n}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Uo(5,5,5),s=new yi({name:"CubemapFromEquirect",uniforms:Es(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:tn,blending:Wi});s.uniforms.tEquirect.value=n;const o=new wn(r,s),a=n.minFilter;return n.minFilter===gr&&(n.minFilter=$n),new vy(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}class _a extends Xt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const xy={type:"move"};class Nc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new _a,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new _a,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new _a,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const y of e.hand.values()){const m=n.getJointPose(y,i),u=this._getHandJoint(c,y);m!==null&&(u.matrix.fromArray(m.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=m.radius),u.visible=m!==null}const d=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=d.position.distanceTo(h.position),p=.02,_=.005;c.inputState.pinching&&f>p+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=p-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(xy)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new _a;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}class yy extends Xt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new xi,this.environmentIntensity=1,this.environmentRotation=new xi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const Ic=new O,Sy=new O,Ey=new Ie;class lr{constructor(e=new O(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=Ic.subVectors(i,n).cross(Sy.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(Ic),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||Ey.getNormalMatrix(e),r=this.coplanarPoint(Ic).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ir=new Nl,xa=new O;class Eg{constructor(e=new lr,n=new lr,i=new lr,r=new lr,s=new lr,o=new lr){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=fi){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],d=r[5],h=r[6],f=r[7],p=r[8],_=r[9],y=r[10],m=r[11],u=r[12],g=r[13],v=r[14],x=r[15];if(i[0].setComponents(l-s,f-c,m-p,x-u).normalize(),i[1].setComponents(l+s,f+c,m+p,x+u).normalize(),i[2].setComponents(l+o,f+d,m+_,x+g).normalize(),i[3].setComponents(l-o,f-d,m-_,x-g).normalize(),i[4].setComponents(l-a,f-h,m-y,x-v).normalize(),n===fi)i[5].setComponents(l+a,f+h,m+y,x+v).normalize();else if(n===ml)i[5].setComponents(a,h,y,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ir.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),ir.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ir)}intersectsSprite(e){return ir.center.set(0,0,0),ir.radius=.7071067811865476,ir.applyMatrix4(e.matrixWorld),this.intersectsSphere(ir)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(xa.x=r.normal.x>0?e.max.x:e.min.x,xa.y=r.normal.y>0?e.max.y:e.min.y,xa.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(xa)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class My extends Io{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ze(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const pp=new xt,Sf=new pg,ya=new Nl,Sa=new O;class wy extends Xt{constructor(e=new Wn,n=new My){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ya.copy(i.boundingSphere),ya.applyMatrix4(r),ya.radius+=s,e.ray.intersectsSphere(ya)===!1)return;pp.copy(r).invert(),Sf.copy(e.ray).applyMatrix4(pp);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,h=i.attributes.position;if(c!==null){const f=Math.max(0,o.start),p=Math.min(c.count,o.start+o.count);for(let _=f,y=p;_<y;_++){const m=c.getX(_);Sa.fromBufferAttribute(h,m),mp(Sa,m,l,r,e,n,this)}}else{const f=Math.max(0,o.start),p=Math.min(h.count,o.start+o.count);for(let _=f,y=p;_<y;_++)Sa.fromBufferAttribute(h,_),mp(Sa,_,l,r,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function mp(t,e,n,i,r,s,o){const a=Sf.distanceSqToPoint(t);if(a<n){const l=new O;Sf.closestPointToPoint(t,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class Mg extends nn{constructor(e,n,i=wr,r,s,o,a=Vn,l=Vn,c,d=Mo){if(d!==Mo&&d!==wo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");super(null,r,s,o,a,l,d,i,c),this.isDepthTexture=!0,this.image={width:e,height:n},this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new wd(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class Il extends Wn{constructor(e=[],n=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:n,radius:i,detail:r};const s=[],o=[];a(r),c(i),d(),this.setAttribute("position",new fn(s,3)),this.setAttribute("normal",new fn(s.slice(),3)),this.setAttribute("uv",new fn(o,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function a(g){const v=new O,x=new O,b=new O;for(let C=0;C<n.length;C+=3)p(n[C+0],v),p(n[C+1],x),p(n[C+2],b),l(v,x,b,g)}function l(g,v,x,b){const C=b+1,T=[];for(let P=0;P<=C;P++){T[P]=[];const w=g.clone().lerp(x,P/C),S=v.clone().lerp(x,P/C),D=C-P;for(let V=0;V<=D;V++)V===0&&P===C?T[P][V]=w:T[P][V]=w.clone().lerp(S,V/D)}for(let P=0;P<C;P++)for(let w=0;w<2*(C-P)-1;w++){const S=Math.floor(w/2);w%2===0?(f(T[P][S+1]),f(T[P+1][S]),f(T[P][S])):(f(T[P][S+1]),f(T[P+1][S+1]),f(T[P+1][S]))}}function c(g){const v=new O;for(let x=0;x<s.length;x+=3)v.x=s[x+0],v.y=s[x+1],v.z=s[x+2],v.normalize().multiplyScalar(g),s[x+0]=v.x,s[x+1]=v.y,s[x+2]=v.z}function d(){const g=new O;for(let v=0;v<s.length;v+=3){g.x=s[v+0],g.y=s[v+1],g.z=s[v+2];const x=m(g)/2/Math.PI+.5,b=u(g)/Math.PI+.5;o.push(x,1-b)}_(),h()}function h(){for(let g=0;g<o.length;g+=6){const v=o[g+0],x=o[g+2],b=o[g+4],C=Math.max(v,x,b),T=Math.min(v,x,b);C>.9&&T<.1&&(v<.2&&(o[g+0]+=1),x<.2&&(o[g+2]+=1),b<.2&&(o[g+4]+=1))}}function f(g){s.push(g.x,g.y,g.z)}function p(g,v){const x=g*3;v.x=e[x+0],v.y=e[x+1],v.z=e[x+2]}function _(){const g=new O,v=new O,x=new O,b=new O,C=new Qe,T=new Qe,P=new Qe;for(let w=0,S=0;w<s.length;w+=9,S+=6){g.set(s[w+0],s[w+1],s[w+2]),v.set(s[w+3],s[w+4],s[w+5]),x.set(s[w+6],s[w+7],s[w+8]),C.set(o[S+0],o[S+1]),T.set(o[S+2],o[S+3]),P.set(o[S+4],o[S+5]),b.copy(g).add(v).add(x).divideScalar(3);const D=m(b);y(C,S+0,g,D),y(T,S+2,v,D),y(P,S+4,x,D)}}function y(g,v,x,b){b<0&&g.x===1&&(o[v]=g.x-1),x.x===0&&x.z===0&&(o[v]=b/2/Math.PI+.5)}function m(g){return Math.atan2(g.z,-g.x)}function u(g){return Math.atan2(-g.y,Math.sqrt(g.x*g.x+g.z*g.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Il(e.vertices,e.indices,e.radius,e.details)}}class Td extends Il{constructor(e=1,n=0){const i=(1+Math.sqrt(5))/2,r=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,e,n),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:n}}static fromJSON(e){return new Td(e.radius,e.detail)}}class Ad extends Il{constructor(e=1,n=0){const i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],r=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,r,e,n),this.type="OctahedronGeometry",this.parameters={radius:e,detail:n}}static fromJSON(e){return new Ad(e.radius,e.detail)}}class Ul extends Wn{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),c=a+1,d=l+1,h=e/a,f=n/l,p=[],_=[],y=[],m=[];for(let u=0;u<d;u++){const g=u*f-o;for(let v=0;v<c;v++){const x=v*h-s;_.push(x,-g,0),y.push(0,0,1),m.push(v/a),m.push(1-u/l)}}for(let u=0;u<l;u++)for(let g=0;g<a;g++){const v=g+c*u,x=g+c*(u+1),b=g+1+c*(u+1),C=g+1+c*u;p.push(v,x,C),p.push(x,b,C)}this.setIndex(p),this.setAttribute("position",new fn(_,3)),this.setAttribute("normal",new fn(y,3)),this.setAttribute("uv",new fn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ul(e.width,e.height,e.widthSegments,e.heightSegments)}}class Cd extends Wn{constructor(e=1,n=.4,i=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:n,radialSegments:i,tubularSegments:r,arc:s},i=Math.floor(i),r=Math.floor(r);const o=[],a=[],l=[],c=[],d=new O,h=new O,f=new O;for(let p=0;p<=i;p++)for(let _=0;_<=r;_++){const y=_/r*s,m=p/i*Math.PI*2;h.x=(e+n*Math.cos(m))*Math.cos(y),h.y=(e+n*Math.cos(m))*Math.sin(y),h.z=n*Math.sin(m),a.push(h.x,h.y,h.z),d.x=e*Math.cos(y),d.y=e*Math.sin(y),f.subVectors(h,d).normalize(),l.push(f.x,f.y,f.z),c.push(_/r),c.push(p/i)}for(let p=1;p<=i;p++)for(let _=1;_<=r;_++){const y=(r+1)*p+_-1,m=(r+1)*(p-1)+_-1,u=(r+1)*(p-1)+_,g=(r+1)*p+_;o.push(y,m,g),o.push(m,u,g)}this.setIndex(o),this.setAttribute("position",new fn(a,3)),this.setAttribute("normal",new fn(l,3)),this.setAttribute("uv",new fn(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Cd(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class Ty extends Io{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ix,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Ay extends Io{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Cy extends Xt{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Ze(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(n.object.target=this.target.uuid),n}}class Ry extends yg{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=d*this.view.offsetY,l=a-d*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class by extends Cy{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}class Py extends En{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class Dy{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=gp(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=gp();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}}function gp(){return performance.now()}function vp(t,e,n,i){const r=Ly(i);switch(n){case og:return t*e;case lg:return t*e/r.components*r.byteLength;case Sd:return t*e/r.components*r.byteLength;case cg:return t*e*2/r.components*r.byteLength;case Ed:return t*e*2/r.components*r.byteLength;case ag:return t*e*3/r.components*r.byteLength;case Bn:return t*e*4/r.components*r.byteLength;case Md:return t*e*4/r.components*r.byteLength;case Oa:case ka:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Ba:case za:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case qu:case Ku:return Math.max(t,16)*Math.max(e,8)/4;case Yu:case $u:return Math.max(t,8)*Math.max(e,8)/2;case Zu:case Qu:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Ju:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case ef:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case tf:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case nf:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case rf:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case sf:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case of:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case af:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case lf:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case cf:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case uf:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case ff:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case df:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case hf:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case pf:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case Ha:case mf:case gf:return Math.ceil(t/4)*Math.ceil(e/4)*16;case ug:case vf:return Math.ceil(t/4)*Math.ceil(e/4)*8;case _f:case xf:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function Ly(t){switch(t){case _i:case ig:return{byteLength:1,components:1};case So:case rg:case Po:return{byteLength:2,components:1};case xd:case yd:return{byteLength:2,components:4};case wr:case _d:case ui:return{byteLength:4,components:1};case sg:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:vd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=vd);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function wg(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function Ny(t){const e=new WeakMap;function n(a,l){const c=a.array,d=a.usage,h=c.byteLength,f=t.createBuffer();t.bindBuffer(l,f),t.bufferData(l,c,d),a.onUploadCallback();let p;if(c instanceof Float32Array)p=t.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=t.HALF_FLOAT:p=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=t.SHORT;else if(c instanceof Uint32Array)p=t.UNSIGNED_INT;else if(c instanceof Int32Array)p=t.INT;else if(c instanceof Int8Array)p=t.BYTE;else if(c instanceof Uint8Array)p=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function i(a,l,c){const d=l.array,h=l.updateRanges;if(t.bindBuffer(c,a),h.length===0)t.bufferSubData(c,0,d);else{h.sort((p,_)=>p.start-_.start);let f=0;for(let p=1;p<h.length;p++){const _=h[f],y=h[p];y.start<=_.start+_.count+1?_.count=Math.max(_.count,y.start+y.count-_.start):(++f,h[f]=y)}h.length=f+1;for(let p=0,_=h.length;p<_;p++){const y=h[p];t.bufferSubData(c,y.start*d.BYTES_PER_ELEMENT,d,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const d=e.get(a);(!d||d.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,n(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}var Iy=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Uy=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Fy=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Oy=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ky=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,By=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,zy=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Hy=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Vy=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Gy=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Wy=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Xy=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,jy=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Yy=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,qy=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,$y=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Ky=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Zy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Qy=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Jy=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,e1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,t1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,n1=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,i1=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,r1=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,s1=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,o1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,a1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,l1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,c1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,u1="gl_FragColor = linearToOutputTexel( gl_FragColor );",f1=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,d1=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,h1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,p1=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,m1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,g1=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,v1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,_1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,x1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,y1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,S1=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,E1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,M1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,w1=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,T1=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,A1=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,C1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,R1=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,b1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,P1=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,D1=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,L1=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,N1=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,I1=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,U1=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,F1=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,O1=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,k1=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,B1=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,z1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,H1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,V1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,G1=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,W1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,X1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,j1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Y1=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,q1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,$1=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,K1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Z1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Q1=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,J1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,eS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,tS=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,nS=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,iS=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,rS=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,sS=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,oS=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,aS=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,lS=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,cS=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,uS=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,fS=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dS=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,hS=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,pS=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,mS=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,gS=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,vS=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,_S=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,xS=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,yS=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,SS=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ES=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,MS=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,wS=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,TS=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,AS=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,CS=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,RS=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,bS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,PS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,DS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,LS=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const NS=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,IS=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,US=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,FS=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,OS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,kS=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,BS=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,zS=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,HS=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,VS=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,GS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,WS=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,XS=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,jS=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,YS=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,qS=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$S=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,KS=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ZS=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,QS=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,JS=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,eE=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,tE=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,nE=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,iE=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,rE=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,sE=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,oE=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,aE=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,lE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,cE=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,uE=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,fE=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,dE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Fe={alphahash_fragment:Iy,alphahash_pars_fragment:Uy,alphamap_fragment:Fy,alphamap_pars_fragment:Oy,alphatest_fragment:ky,alphatest_pars_fragment:By,aomap_fragment:zy,aomap_pars_fragment:Hy,batching_pars_vertex:Vy,batching_vertex:Gy,begin_vertex:Wy,beginnormal_vertex:Xy,bsdfs:jy,iridescence_fragment:Yy,bumpmap_pars_fragment:qy,clipping_planes_fragment:$y,clipping_planes_pars_fragment:Ky,clipping_planes_pars_vertex:Zy,clipping_planes_vertex:Qy,color_fragment:Jy,color_pars_fragment:e1,color_pars_vertex:t1,color_vertex:n1,common:i1,cube_uv_reflection_fragment:r1,defaultnormal_vertex:s1,displacementmap_pars_vertex:o1,displacementmap_vertex:a1,emissivemap_fragment:l1,emissivemap_pars_fragment:c1,colorspace_fragment:u1,colorspace_pars_fragment:f1,envmap_fragment:d1,envmap_common_pars_fragment:h1,envmap_pars_fragment:p1,envmap_pars_vertex:m1,envmap_physical_pars_fragment:A1,envmap_vertex:g1,fog_vertex:v1,fog_pars_vertex:_1,fog_fragment:x1,fog_pars_fragment:y1,gradientmap_pars_fragment:S1,lightmap_pars_fragment:E1,lights_lambert_fragment:M1,lights_lambert_pars_fragment:w1,lights_pars_begin:T1,lights_toon_fragment:C1,lights_toon_pars_fragment:R1,lights_phong_fragment:b1,lights_phong_pars_fragment:P1,lights_physical_fragment:D1,lights_physical_pars_fragment:L1,lights_fragment_begin:N1,lights_fragment_maps:I1,lights_fragment_end:U1,logdepthbuf_fragment:F1,logdepthbuf_pars_fragment:O1,logdepthbuf_pars_vertex:k1,logdepthbuf_vertex:B1,map_fragment:z1,map_pars_fragment:H1,map_particle_fragment:V1,map_particle_pars_fragment:G1,metalnessmap_fragment:W1,metalnessmap_pars_fragment:X1,morphinstance_vertex:j1,morphcolor_vertex:Y1,morphnormal_vertex:q1,morphtarget_pars_vertex:$1,morphtarget_vertex:K1,normal_fragment_begin:Z1,normal_fragment_maps:Q1,normal_pars_fragment:J1,normal_pars_vertex:eS,normal_vertex:tS,normalmap_pars_fragment:nS,clearcoat_normal_fragment_begin:iS,clearcoat_normal_fragment_maps:rS,clearcoat_pars_fragment:sS,iridescence_pars_fragment:oS,opaque_fragment:aS,packing:lS,premultiplied_alpha_fragment:cS,project_vertex:uS,dithering_fragment:fS,dithering_pars_fragment:dS,roughnessmap_fragment:hS,roughnessmap_pars_fragment:pS,shadowmap_pars_fragment:mS,shadowmap_pars_vertex:gS,shadowmap_vertex:vS,shadowmask_pars_fragment:_S,skinbase_vertex:xS,skinning_pars_vertex:yS,skinning_vertex:SS,skinnormal_vertex:ES,specularmap_fragment:MS,specularmap_pars_fragment:wS,tonemapping_fragment:TS,tonemapping_pars_fragment:AS,transmission_fragment:CS,transmission_pars_fragment:RS,uv_pars_fragment:bS,uv_pars_vertex:PS,uv_vertex:DS,worldpos_vertex:LS,background_vert:NS,background_frag:IS,backgroundCube_vert:US,backgroundCube_frag:FS,cube_vert:OS,cube_frag:kS,depth_vert:BS,depth_frag:zS,distanceRGBA_vert:HS,distanceRGBA_frag:VS,equirect_vert:GS,equirect_frag:WS,linedashed_vert:XS,linedashed_frag:jS,meshbasic_vert:YS,meshbasic_frag:qS,meshlambert_vert:$S,meshlambert_frag:KS,meshmatcap_vert:ZS,meshmatcap_frag:QS,meshnormal_vert:JS,meshnormal_frag:eE,meshphong_vert:tE,meshphong_frag:nE,meshphysical_vert:iE,meshphysical_frag:rE,meshtoon_vert:sE,meshtoon_frag:oE,points_vert:aE,points_frag:lE,shadow_vert:cE,shadow_frag:uE,sprite_vert:fE,sprite_frag:dE},ae={common:{diffuse:{value:new Ze(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ie},alphaMap:{value:null},alphaMapTransform:{value:new Ie},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ie}},envmap:{envMap:{value:null},envMapRotation:{value:new Ie},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ie}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ie}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ie},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ie},normalScale:{value:new Qe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ie},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ie}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ie}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ie}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ze(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ze(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ie},alphaTest:{value:0},uvTransform:{value:new Ie}},sprite:{diffuse:{value:new Ze(16777215)},opacity:{value:1},center:{value:new Qe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ie},alphaMap:{value:null},alphaMapTransform:{value:new Ie},alphaTest:{value:0}}},Yn={basic:{uniforms:Vt([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.fog]),vertexShader:Fe.meshbasic_vert,fragmentShader:Fe.meshbasic_frag},lambert:{uniforms:Vt([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,ae.lights,{emissive:{value:new Ze(0)}}]),vertexShader:Fe.meshlambert_vert,fragmentShader:Fe.meshlambert_frag},phong:{uniforms:Vt([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,ae.lights,{emissive:{value:new Ze(0)},specular:{value:new Ze(1118481)},shininess:{value:30}}]),vertexShader:Fe.meshphong_vert,fragmentShader:Fe.meshphong_frag},standard:{uniforms:Vt([ae.common,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.roughnessmap,ae.metalnessmap,ae.fog,ae.lights,{emissive:{value:new Ze(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Fe.meshphysical_vert,fragmentShader:Fe.meshphysical_frag},toon:{uniforms:Vt([ae.common,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.gradientmap,ae.fog,ae.lights,{emissive:{value:new Ze(0)}}]),vertexShader:Fe.meshtoon_vert,fragmentShader:Fe.meshtoon_frag},matcap:{uniforms:Vt([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,{matcap:{value:null}}]),vertexShader:Fe.meshmatcap_vert,fragmentShader:Fe.meshmatcap_frag},points:{uniforms:Vt([ae.points,ae.fog]),vertexShader:Fe.points_vert,fragmentShader:Fe.points_frag},dashed:{uniforms:Vt([ae.common,ae.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Fe.linedashed_vert,fragmentShader:Fe.linedashed_frag},depth:{uniforms:Vt([ae.common,ae.displacementmap]),vertexShader:Fe.depth_vert,fragmentShader:Fe.depth_frag},normal:{uniforms:Vt([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,{opacity:{value:1}}]),vertexShader:Fe.meshnormal_vert,fragmentShader:Fe.meshnormal_frag},sprite:{uniforms:Vt([ae.sprite,ae.fog]),vertexShader:Fe.sprite_vert,fragmentShader:Fe.sprite_frag},background:{uniforms:{uvTransform:{value:new Ie},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Fe.background_vert,fragmentShader:Fe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ie}},vertexShader:Fe.backgroundCube_vert,fragmentShader:Fe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Fe.cube_vert,fragmentShader:Fe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Fe.equirect_vert,fragmentShader:Fe.equirect_frag},distanceRGBA:{uniforms:Vt([ae.common,ae.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Fe.distanceRGBA_vert,fragmentShader:Fe.distanceRGBA_frag},shadow:{uniforms:Vt([ae.lights,ae.fog,{color:{value:new Ze(0)},opacity:{value:1}}]),vertexShader:Fe.shadow_vert,fragmentShader:Fe.shadow_frag}};Yn.physical={uniforms:Vt([Yn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ie},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ie},clearcoatNormalScale:{value:new Qe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ie},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ie},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ie},sheen:{value:0},sheenColor:{value:new Ze(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ie},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ie},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ie},transmissionSamplerSize:{value:new Qe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ie},attenuationDistance:{value:0},attenuationColor:{value:new Ze(0)},specularColor:{value:new Ze(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ie},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ie},anisotropyVector:{value:new Qe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ie}}]),vertexShader:Fe.meshphysical_vert,fragmentShader:Fe.meshphysical_frag};const Ea={r:0,b:0,g:0},rr=new xi,hE=new xt;function pE(t,e,n,i,r,s,o){const a=new Ze(0);let l=s===!0?0:1,c,d,h=null,f=0,p=null;function _(v){let x=v.isScene===!0?v.background:null;return x&&x.isTexture&&(x=(v.backgroundBlurriness>0?n:e).get(x)),x}function y(v){let x=!1;const b=_(v);b===null?u(a,l):b&&b.isColor&&(u(b,1),x=!0);const C=t.xr.getEnvironmentBlendMode();C==="additive"?i.buffers.color.setClear(0,0,0,1,o):C==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||x)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function m(v,x){const b=_(x);b&&(b.isCubeTexture||b.mapping===Ll)?(d===void 0&&(d=new wn(new Uo(1,1,1),new yi({name:"BackgroundCubeMaterial",uniforms:Es(Yn.backgroundCube.uniforms),vertexShader:Yn.backgroundCube.vertexShader,fragmentShader:Yn.backgroundCube.fragmentShader,side:tn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(C,T,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(d)),rr.copy(x.backgroundRotation),rr.x*=-1,rr.y*=-1,rr.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(rr.y*=-1,rr.z*=-1),d.material.uniforms.envMap.value=b,d.material.uniforms.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(hE.makeRotationFromEuler(rr)),d.material.toneMapped=Ye.getTransfer(b.colorSpace)!==tt,(h!==b||f!==b.version||p!==t.toneMapping)&&(d.material.needsUpdate=!0,h=b,f=b.version,p=t.toneMapping),d.layers.enableAll(),v.unshift(d,d.geometry,d.material,0,0,null)):b&&b.isTexture&&(c===void 0&&(c=new wn(new Ul(2,2),new yi({name:"BackgroundMaterial",uniforms:Es(Yn.background.uniforms),vertexShader:Yn.background.vertexShader,fragmentShader:Yn.background.fragmentShader,side:qi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=b,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=Ye.getTransfer(b.colorSpace)!==tt,b.matrixAutoUpdate===!0&&b.updateMatrix(),c.material.uniforms.uvTransform.value.copy(b.matrix),(h!==b||f!==b.version||p!==t.toneMapping)&&(c.material.needsUpdate=!0,h=b,f=b.version,p=t.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null))}function u(v,x){v.getRGB(Ea,xg(t)),i.buffers.color.setClear(Ea.r,Ea.g,Ea.b,x,o)}function g(){d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(v,x=1){a.set(v),l=x,u(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(v){l=v,u(a,l)},render:y,addToRenderList:m,dispose:g}}function mE(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=f(null);let s=r,o=!1;function a(S,D,V,H,K){let Q=!1;const Y=h(H,V,D);s!==Y&&(s=Y,c(s.object)),Q=p(S,H,V,K),Q&&_(S,H,V,K),K!==null&&e.update(K,t.ELEMENT_ARRAY_BUFFER),(Q||o)&&(o=!1,x(S,D,V,H),K!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(K).buffer))}function l(){return t.createVertexArray()}function c(S){return t.bindVertexArray(S)}function d(S){return t.deleteVertexArray(S)}function h(S,D,V){const H=V.wireframe===!0;let K=i[S.id];K===void 0&&(K={},i[S.id]=K);let Q=K[D.id];Q===void 0&&(Q={},K[D.id]=Q);let Y=Q[H];return Y===void 0&&(Y=f(l()),Q[H]=Y),Y}function f(S){const D=[],V=[],H=[];for(let K=0;K<n;K++)D[K]=0,V[K]=0,H[K]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:V,attributeDivisors:H,object:S,attributes:{},index:null}}function p(S,D,V,H){const K=s.attributes,Q=D.attributes;let Y=0;const J=V.getAttributes();for(const N in J)if(J[N].location>=0){const Z=K[N];let oe=Q[N];if(oe===void 0&&(N==="instanceMatrix"&&S.instanceMatrix&&(oe=S.instanceMatrix),N==="instanceColor"&&S.instanceColor&&(oe=S.instanceColor)),Z===void 0||Z.attribute!==oe||oe&&Z.data!==oe.data)return!0;Y++}return s.attributesNum!==Y||s.index!==H}function _(S,D,V,H){const K={},Q=D.attributes;let Y=0;const J=V.getAttributes();for(const N in J)if(J[N].location>=0){let Z=Q[N];Z===void 0&&(N==="instanceMatrix"&&S.instanceMatrix&&(Z=S.instanceMatrix),N==="instanceColor"&&S.instanceColor&&(Z=S.instanceColor));const oe={};oe.attribute=Z,Z&&Z.data&&(oe.data=Z.data),K[N]=oe,Y++}s.attributes=K,s.attributesNum=Y,s.index=H}function y(){const S=s.newAttributes;for(let D=0,V=S.length;D<V;D++)S[D]=0}function m(S){u(S,0)}function u(S,D){const V=s.newAttributes,H=s.enabledAttributes,K=s.attributeDivisors;V[S]=1,H[S]===0&&(t.enableVertexAttribArray(S),H[S]=1),K[S]!==D&&(t.vertexAttribDivisor(S,D),K[S]=D)}function g(){const S=s.newAttributes,D=s.enabledAttributes;for(let V=0,H=D.length;V<H;V++)D[V]!==S[V]&&(t.disableVertexAttribArray(V),D[V]=0)}function v(S,D,V,H,K,Q,Y){Y===!0?t.vertexAttribIPointer(S,D,V,K,Q):t.vertexAttribPointer(S,D,V,H,K,Q)}function x(S,D,V,H){y();const K=H.attributes,Q=V.getAttributes(),Y=D.defaultAttributeValues;for(const J in Q){const N=Q[J];if(N.location>=0){let j=K[J];if(j===void 0&&(J==="instanceMatrix"&&S.instanceMatrix&&(j=S.instanceMatrix),J==="instanceColor"&&S.instanceColor&&(j=S.instanceColor)),j!==void 0){const Z=j.normalized,oe=j.itemSize,ye=e.get(j);if(ye===void 0)continue;const Xe=ye.buffer,W=ye.type,re=ye.bytesPerElement,he=W===t.INT||W===t.UNSIGNED_INT||j.gpuType===_d;if(j.isInterleavedBufferAttribute){const se=j.data,Te=se.stride,qe=j.offset;if(se.isInstancedInterleavedBuffer){for(let be=0;be<N.locationSize;be++)u(N.location+be,se.meshPerAttribute);S.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let be=0;be<N.locationSize;be++)m(N.location+be);t.bindBuffer(t.ARRAY_BUFFER,Xe);for(let be=0;be<N.locationSize;be++)v(N.location+be,oe/N.locationSize,W,Z,Te*re,(qe+oe/N.locationSize*be)*re,he)}else{if(j.isInstancedBufferAttribute){for(let se=0;se<N.locationSize;se++)u(N.location+se,j.meshPerAttribute);S.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let se=0;se<N.locationSize;se++)m(N.location+se);t.bindBuffer(t.ARRAY_BUFFER,Xe);for(let se=0;se<N.locationSize;se++)v(N.location+se,oe/N.locationSize,W,Z,oe*re,oe/N.locationSize*se*re,he)}}else if(Y!==void 0){const Z=Y[J];if(Z!==void 0)switch(Z.length){case 2:t.vertexAttrib2fv(N.location,Z);break;case 3:t.vertexAttrib3fv(N.location,Z);break;case 4:t.vertexAttrib4fv(N.location,Z);break;default:t.vertexAttrib1fv(N.location,Z)}}}}g()}function b(){P();for(const S in i){const D=i[S];for(const V in D){const H=D[V];for(const K in H)d(H[K].object),delete H[K];delete D[V]}delete i[S]}}function C(S){if(i[S.id]===void 0)return;const D=i[S.id];for(const V in D){const H=D[V];for(const K in H)d(H[K].object),delete H[K];delete D[V]}delete i[S.id]}function T(S){for(const D in i){const V=i[D];if(V[S.id]===void 0)continue;const H=V[S.id];for(const K in H)d(H[K].object),delete H[K];delete V[S.id]}}function P(){w(),o=!0,s!==r&&(s=r,c(s.object))}function w(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:P,resetDefaultState:w,dispose:b,releaseStatesOfGeometry:C,releaseStatesOfProgram:T,initAttributes:y,enableAttribute:m,disableUnusedAttributes:g}}function gE(t,e,n){let i;function r(c){i=c}function s(c,d){t.drawArrays(i,c,d),n.update(d,i,1)}function o(c,d,h){h!==0&&(t.drawArraysInstanced(i,c,d,h),n.update(d,i,h))}function a(c,d,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,d,0,h);let p=0;for(let _=0;_<h;_++)p+=d[_];n.update(p,i,1)}function l(c,d,h,f){if(h===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let _=0;_<c.length;_++)o(c[_],d[_],f[_]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,d,0,f,0,h);let _=0;for(let y=0;y<h;y++)_+=d[y]*f[y];n.update(_,i,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function vE(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const T=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(T){return!(T!==Bn&&i.convert(T)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(T){const P=T===Po&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(T!==_i&&i.convert(T)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==ui&&!P)}function l(T){if(T==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const d=l(c);d!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",d,"instead."),c=d);const h=n.logarithmicDepthBuffer===!0,f=n.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),p=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),_=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=t.getParameter(t.MAX_TEXTURE_SIZE),m=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),u=t.getParameter(t.MAX_VERTEX_ATTRIBS),g=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),v=t.getParameter(t.MAX_VARYING_VECTORS),x=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),b=_>0,C=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reverseDepthBuffer:f,maxTextures:p,maxVertexTextures:_,maxTextureSize:y,maxCubemapSize:m,maxAttributes:u,maxVertexUniforms:g,maxVaryings:v,maxFragmentUniforms:x,vertexTextures:b,maxSamples:C}}function _E(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new lr,a=new Ie,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const p=h.length!==0||f||i!==0||r;return r=f,i=h.length,p},this.beginShadows=function(){s=!0,d(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,f){n=d(h,f,0)},this.setState=function(h,f,p){const _=h.clippingPlanes,y=h.clipIntersection,m=h.clipShadows,u=t.get(h);if(!r||_===null||_.length===0||s&&!m)s?d(null):c();else{const g=s?0:i,v=g*4;let x=u.clippingState||null;l.value=x,x=d(_,f,v,p);for(let b=0;b!==v;++b)x[b]=n[b];u.clippingState=x,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=g}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function d(h,f,p,_){const y=h!==null?h.length:0;let m=null;if(y!==0){if(m=l.value,_!==!0||m===null){const u=p+y*4,g=f.matrixWorldInverse;a.getNormalMatrix(g),(m===null||m.length<u)&&(m=new Float32Array(u));for(let v=0,x=p;v!==y;++v,x+=4)o.copy(h[v]).applyMatrix4(g,a),o.normal.toArray(m,x),m[x+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,m}}function xE(t){let e=new WeakMap;function n(o,a){return a===Gu?o.mapping=xs:a===Wu&&(o.mapping=ys),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Gu||a===Wu)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new _y(l.height);return c.fromEquirectangularTexture(t,o),e.set(o,c),o.addEventListener("dispose",r),n(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}const ns=4,_p=[.125,.215,.35,.446,.526,.582],fr=20,Uc=new Ry,xp=new Ze;let Fc=null,Oc=0,kc=0,Bc=!1;const cr=(1+Math.sqrt(5))/2,Gr=1/cr,yp=[new O(-cr,Gr,0),new O(cr,Gr,0),new O(-Gr,0,cr),new O(Gr,0,cr),new O(0,cr,-Gr),new O(0,cr,Gr),new O(-1,1,-1),new O(1,1,-1),new O(-1,1,1),new O(1,1,1)],yE=new O;class Sp{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100,s={}){const{size:o=256,position:a=yE}=s;Fc=this._renderer.getRenderTarget(),Oc=this._renderer.getActiveCubeFace(),kc=this._renderer.getActiveMipmapLevel(),Bc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,a),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=wp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Mp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Fc,Oc,kc),this._renderer.xr.enabled=Bc,e.scissorTest=!1,Ma(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===xs||e.mapping===ys?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Fc=this._renderer.getRenderTarget(),Oc=this._renderer.getActiveCubeFace(),kc=this._renderer.getActiveMipmapLevel(),Bc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:$n,minFilter:$n,generateMipmaps:!1,type:Po,format:Bn,colorSpace:Ss,depthBuffer:!1},r=Ep(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ep(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=SE(s)),this._blurMaterial=EE(s,e,n)}return r}_compileMaterial(e){const n=new wn(this._lodPlanes[0],e);this._renderer.compile(n,Uc)}_sceneToCubeUV(e,n,i,r,s){const l=new En(90,1,n,i),c=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,p=h.toneMapping;h.getClearColor(xp),h.toneMapping=Xi,h.autoClear=!1;const _=new no({name:"PMREM.Background",side:tn,depthWrite:!1,depthTest:!1}),y=new wn(new Uo,_);let m=!1;const u=e.background;u?u.isColor&&(_.color.copy(u),e.background=null,m=!0):(_.color.copy(xp),m=!0);for(let g=0;g<6;g++){const v=g%3;v===0?(l.up.set(0,c[g],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+d[g],s.y,s.z)):v===1?(l.up.set(0,0,c[g]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+d[g],s.z)):(l.up.set(0,c[g],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+d[g]));const x=this._cubeSize;Ma(r,v*x,g>2?x:0,x,x),h.setRenderTarget(r),m&&h.render(y,l),h.render(e,l)}y.geometry.dispose(),y.material.dispose(),h.toneMapping=p,h.autoClear=f,e.background=u}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===xs||e.mapping===ys;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=wp()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Mp());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new wn(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Ma(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,Uc)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=yp[(r-s-1)%yp.length];this._blur(e,s-1,s,o,a)}n.autoClear=i}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,h=new wn(this._lodPlanes[r],c),f=c.uniforms,p=this._sizeLods[i]-1,_=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*fr-1),y=s/_,m=isFinite(s)?1+Math.floor(d*y):fr;m>fr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${fr}`);const u=[];let g=0;for(let T=0;T<fr;++T){const P=T/y,w=Math.exp(-P*P/2);u.push(w),T===0?g+=w:T<m&&(g+=2*w)}for(let T=0;T<u.length;T++)u[T]=u[T]/g;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=u,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:v}=this;f.dTheta.value=_,f.mipInt.value=v-i;const x=this._sizeLods[r],b=3*x*(r>v-ns?r-v+ns:0),C=4*(this._cubeSize-x);Ma(n,b,C,3*x,2*x),l.setRenderTarget(n),l.render(h,Uc)}}function SE(t){const e=[],n=[],i=[];let r=t;const s=t-ns+1+_p.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);n.push(a);let l=1/a;o>t-ns?l=_p[o-t+ns-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),d=-c,h=1+c,f=[d,d,h,d,h,h,d,d,h,h,d,h],p=6,_=6,y=3,m=2,u=1,g=new Float32Array(y*_*p),v=new Float32Array(m*_*p),x=new Float32Array(u*_*p);for(let C=0;C<p;C++){const T=C%3*2/3-1,P=C>2?0:-1,w=[T,P,0,T+2/3,P,0,T+2/3,P+1,0,T,P,0,T+2/3,P+1,0,T,P+1,0];g.set(w,y*_*C),v.set(f,m*_*C);const S=[C,C,C,C,C,C];x.set(S,u*_*C)}const b=new Wn;b.setAttribute("position",new An(g,y)),b.setAttribute("uv",new An(v,m)),b.setAttribute("faceIndex",new An(x,u)),e.push(b),r>ns&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function Ep(t,e,n){const i=new Tr(t,e,n);return i.texture.mapping=Ll,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ma(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function EE(t,e,n){const i=new Float32Array(fr),r=new O(0,1,0);return new yi({name:"SphericalGaussianBlur",defines:{n:fr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Rd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Wi,depthTest:!1,depthWrite:!1})}function Mp(){return new yi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Rd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Wi,depthTest:!1,depthWrite:!1})}function wp(){return new yi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Rd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Wi,depthTest:!1,depthWrite:!1})}function Rd(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function ME(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===Gu||l===Wu,d=l===xs||l===ys;if(c||d){let h=e.get(a);const f=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return n===null&&(n=new Sp(t)),h=c?n.fromEquirectangular(a,h):n.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{const p=a.image;return c&&p&&p.height>0||d&&p&&r(p)?(n===null&&(n=new Sp(t)),h=c?n.fromEquirectangular(a):n.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",s),h.texture):null}}}return a}function r(a){let l=0;const c=6;for(let d=0;d<c;d++)a[d]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function wE(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&Va("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function TE(t,e,n,i){const r={},s=new WeakMap;function o(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const _ in f.attributes)e.remove(f.attributes[_]);f.removeEventListener("dispose",o),delete r[f.id];const p=s.get(f);p&&(e.remove(p),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,n.memory.geometries--}function a(h,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,n.memory.geometries++),f}function l(h){const f=h.attributes;for(const p in f)e.update(f[p],t.ARRAY_BUFFER)}function c(h){const f=[],p=h.index,_=h.attributes.position;let y=0;if(p!==null){const g=p.array;y=p.version;for(let v=0,x=g.length;v<x;v+=3){const b=g[v+0],C=g[v+1],T=g[v+2];f.push(b,C,C,T,T,b)}}else if(_!==void 0){const g=_.array;y=_.version;for(let v=0,x=g.length/3-1;v<x;v+=3){const b=v+0,C=v+1,T=v+2;f.push(b,C,C,T,T,b)}}else return;const m=new(dg(f)?_g:vg)(f,1);m.version=y;const u=s.get(h);u&&e.remove(u),s.set(h,m)}function d(h){const f=s.get(h);if(f){const p=h.index;p!==null&&f.version<p.version&&c(h)}else c(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:d}}function AE(t,e,n){let i;function r(f){i=f}let s,o;function a(f){s=f.type,o=f.bytesPerElement}function l(f,p){t.drawElements(i,p,s,f*o),n.update(p,i,1)}function c(f,p,_){_!==0&&(t.drawElementsInstanced(i,p,s,f*o,_),n.update(p,i,_))}function d(f,p,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,s,f,0,_);let m=0;for(let u=0;u<_;u++)m+=p[u];n.update(m,i,1)}function h(f,p,_,y){if(_===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let u=0;u<f.length;u++)c(f[u]/o,p[u],y[u]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,s,f,0,y,0,_);let u=0;for(let g=0;g<_;g++)u+=p[g]*y[g];n.update(u,i,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=d,this.renderMultiDrawInstances=h}function CE(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function RE(t,e,n){const i=new WeakMap,r=new _t;function s(o,a,l){const c=o.morphTargetInfluences,d=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=d!==void 0?d.length:0;let f=i.get(a);if(f===void 0||f.count!==h){let S=function(){P.dispose(),i.delete(a),a.removeEventListener("dispose",S)};var p=S;f!==void 0&&f.texture.dispose();const _=a.morphAttributes.position!==void 0,y=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,u=a.morphAttributes.position||[],g=a.morphAttributes.normal||[],v=a.morphAttributes.color||[];let x=0;_===!0&&(x=1),y===!0&&(x=2),m===!0&&(x=3);let b=a.attributes.position.count*x,C=1;b>e.maxTextureSize&&(C=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);const T=new Float32Array(b*C*4*h),P=new hg(T,b,C,h);P.type=ui,P.needsUpdate=!0;const w=x*4;for(let D=0;D<h;D++){const V=u[D],H=g[D],K=v[D],Q=b*C*4*D;for(let Y=0;Y<V.count;Y++){const J=Y*w;_===!0&&(r.fromBufferAttribute(V,Y),T[Q+J+0]=r.x,T[Q+J+1]=r.y,T[Q+J+2]=r.z,T[Q+J+3]=0),y===!0&&(r.fromBufferAttribute(H,Y),T[Q+J+4]=r.x,T[Q+J+5]=r.y,T[Q+J+6]=r.z,T[Q+J+7]=0),m===!0&&(r.fromBufferAttribute(K,Y),T[Q+J+8]=r.x,T[Q+J+9]=r.y,T[Q+J+10]=r.z,T[Q+J+11]=K.itemSize===4?r.w:1)}}f={count:h,texture:P,size:new Qe(b,C)},i.set(a,f),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",o.morphTexture,n);else{let _=0;for(let m=0;m<c.length;m++)_+=c[m];const y=a.morphTargetsRelative?1:1-_;l.getUniforms().setValue(t,"morphTargetBaseInfluence",y),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",f.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",f.size)}return{update:s}}function bE(t,e,n,i){let r=new WeakMap;function s(l){const c=i.render.frame,d=l.geometry,h=e.get(l,d);if(r.get(h)!==c&&(e.update(h),r.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;r.get(f)!==c&&(f.update(),r.set(f,c))}return h}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:o}}const Tg=new nn,Tp=new Mg(1,1),Ag=new hg,Cg=new ty,Rg=new Sg,Ap=[],Cp=[],Rp=new Float32Array(16),bp=new Float32Array(9),Pp=new Float32Array(4);function Cs(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=Ap[r];if(s===void 0&&(s=new Float32Array(r),Ap[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function Tt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function At(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Fl(t,e){let n=Cp[e];n===void 0&&(n=new Int32Array(e),Cp[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function PE(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function DE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Tt(n,e))return;t.uniform2fv(this.addr,e),At(n,e)}}function LE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Tt(n,e))return;t.uniform3fv(this.addr,e),At(n,e)}}function NE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Tt(n,e))return;t.uniform4fv(this.addr,e),At(n,e)}}function IE(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Tt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),At(n,e)}else{if(Tt(n,i))return;Pp.set(i),t.uniformMatrix2fv(this.addr,!1,Pp),At(n,i)}}function UE(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Tt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),At(n,e)}else{if(Tt(n,i))return;bp.set(i),t.uniformMatrix3fv(this.addr,!1,bp),At(n,i)}}function FE(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Tt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),At(n,e)}else{if(Tt(n,i))return;Rp.set(i),t.uniformMatrix4fv(this.addr,!1,Rp),At(n,i)}}function OE(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function kE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Tt(n,e))return;t.uniform2iv(this.addr,e),At(n,e)}}function BE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Tt(n,e))return;t.uniform3iv(this.addr,e),At(n,e)}}function zE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Tt(n,e))return;t.uniform4iv(this.addr,e),At(n,e)}}function HE(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function VE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Tt(n,e))return;t.uniform2uiv(this.addr,e),At(n,e)}}function GE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Tt(n,e))return;t.uniform3uiv(this.addr,e),At(n,e)}}function WE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Tt(n,e))return;t.uniform4uiv(this.addr,e),At(n,e)}}function XE(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(Tp.compareFunction=fg,s=Tp):s=Tg,n.setTexture2D(e||s,r)}function jE(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||Cg,r)}function YE(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||Rg,r)}function qE(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||Ag,r)}function $E(t){switch(t){case 5126:return PE;case 35664:return DE;case 35665:return LE;case 35666:return NE;case 35674:return IE;case 35675:return UE;case 35676:return FE;case 5124:case 35670:return OE;case 35667:case 35671:return kE;case 35668:case 35672:return BE;case 35669:case 35673:return zE;case 5125:return HE;case 36294:return VE;case 36295:return GE;case 36296:return WE;case 35678:case 36198:case 36298:case 36306:case 35682:return XE;case 35679:case 36299:case 36307:return jE;case 35680:case 36300:case 36308:case 36293:return YE;case 36289:case 36303:case 36311:case 36292:return qE}}function KE(t,e){t.uniform1fv(this.addr,e)}function ZE(t,e){const n=Cs(e,this.size,2);t.uniform2fv(this.addr,n)}function QE(t,e){const n=Cs(e,this.size,3);t.uniform3fv(this.addr,n)}function JE(t,e){const n=Cs(e,this.size,4);t.uniform4fv(this.addr,n)}function eM(t,e){const n=Cs(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function tM(t,e){const n=Cs(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function nM(t,e){const n=Cs(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function iM(t,e){t.uniform1iv(this.addr,e)}function rM(t,e){t.uniform2iv(this.addr,e)}function sM(t,e){t.uniform3iv(this.addr,e)}function oM(t,e){t.uniform4iv(this.addr,e)}function aM(t,e){t.uniform1uiv(this.addr,e)}function lM(t,e){t.uniform2uiv(this.addr,e)}function cM(t,e){t.uniform3uiv(this.addr,e)}function uM(t,e){t.uniform4uiv(this.addr,e)}function fM(t,e,n){const i=this.cache,r=e.length,s=Fl(n,r);Tt(i,s)||(t.uniform1iv(this.addr,s),At(i,s));for(let o=0;o!==r;++o)n.setTexture2D(e[o]||Tg,s[o])}function dM(t,e,n){const i=this.cache,r=e.length,s=Fl(n,r);Tt(i,s)||(t.uniform1iv(this.addr,s),At(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||Cg,s[o])}function hM(t,e,n){const i=this.cache,r=e.length,s=Fl(n,r);Tt(i,s)||(t.uniform1iv(this.addr,s),At(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||Rg,s[o])}function pM(t,e,n){const i=this.cache,r=e.length,s=Fl(n,r);Tt(i,s)||(t.uniform1iv(this.addr,s),At(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||Ag,s[o])}function mM(t){switch(t){case 5126:return KE;case 35664:return ZE;case 35665:return QE;case 35666:return JE;case 35674:return eM;case 35675:return tM;case 35676:return nM;case 5124:case 35670:return iM;case 35667:case 35671:return rM;case 35668:case 35672:return sM;case 35669:case 35673:return oM;case 5125:return aM;case 36294:return lM;case 36295:return cM;case 36296:return uM;case 35678:case 36198:case 36298:case 36306:case 35682:return fM;case 35679:case 36299:case 36307:return dM;case 35680:case 36300:case 36308:case 36293:return hM;case 36289:case 36303:case 36311:case 36292:return pM}}class gM{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=$E(n.type)}}class vM{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=mM(n.type)}}class _M{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const zc=/(\w+)(\])?(\[|\.)?/g;function Dp(t,e){t.seq.push(e),t.map[e.id]=e}function xM(t,e,n){const i=t.name,r=i.length;for(zc.lastIndex=0;;){const s=zc.exec(i),o=zc.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){Dp(n,c===void 0?new gM(a,t,e):new vM(a,t,e));break}else{let h=n.map[a];h===void 0&&(h=new _M(a),Dp(n,h)),n=h}}}class Ga{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),o=e.getUniformLocation(n,s.name);xM(s,o,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function Lp(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const yM=37297;let SM=0;function EM(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}const Np=new Ie;function MM(t){Ye._getMatrix(Np,Ye.workingColorSpace,t);const e=`mat3( ${Np.elements.map(n=>n.toFixed(4))} )`;switch(Ye.getTransfer(t)){case pl:return[e,"LinearTransferOETF"];case tt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function Ip(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+EM(t.getShaderSource(e),o)}else return r}function wM(t,e){const n=MM(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function TM(t,e){let n;switch(e){case Ax:n="Linear";break;case Cx:n="Reinhard";break;case Rx:n="Cineon";break;case bx:n="ACESFilmic";break;case Dx:n="AgX";break;case Lx:n="Neutral";break;case Px:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const wa=new O;function AM(){Ye.getLuminanceCoefficients(wa);const t=wa.x.toFixed(4),e=wa.y.toFixed(4),n=wa.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function CM(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(js).join(`
`)}function RM(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function bM(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function js(t){return t!==""}function Up(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Fp(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const PM=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ef(t){return t.replace(PM,LM)}const DM=new Map;function LM(t,e){let n=Fe[e];if(n===void 0){const i=DM.get(e);if(i!==void 0)n=Fe[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Ef(n)}const NM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Op(t){return t.replace(NM,IM)}function IM(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function kp(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function UM(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===eg?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===sx?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===ri&&(e="SHADOWMAP_TYPE_VSM"),e}function FM(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case xs:case ys:e="ENVMAP_TYPE_CUBE";break;case Ll:e="ENVMAP_TYPE_CUBE_UV";break}return e}function OM(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case ys:e="ENVMAP_MODE_REFRACTION";break}return e}function kM(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case tg:e="ENVMAP_BLENDING_MULTIPLY";break;case wx:e="ENVMAP_BLENDING_MIX";break;case Tx:e="ENVMAP_BLENDING_ADD";break}return e}function BM(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function zM(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=UM(n),c=FM(n),d=OM(n),h=kM(n),f=BM(n),p=CM(n),_=RM(s),y=r.createProgram();let m,u,g=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(js).join(`
`),m.length>0&&(m+=`
`),u=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(js).join(`
`),u.length>0&&(u+=`
`)):(m=[kp(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+d:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(js).join(`
`),u=[kp(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+d:"",n.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Xi?"#define TONE_MAPPING":"",n.toneMapping!==Xi?Fe.tonemapping_pars_fragment:"",n.toneMapping!==Xi?TM("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Fe.colorspace_pars_fragment,wM("linearToOutputTexel",n.outputColorSpace),AM(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(js).join(`
`)),o=Ef(o),o=Up(o,n),o=Fp(o,n),a=Ef(a),a=Up(a,n),a=Fp(a,n),o=Op(o),a=Op(a),n.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,u=["#define varying in",n.glslVersion===Kh?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Kh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);const v=g+m+o,x=g+u+a,b=Lp(r,r.VERTEX_SHADER,v),C=Lp(r,r.FRAGMENT_SHADER,x);r.attachShader(y,b),r.attachShader(y,C),n.index0AttributeName!==void 0?r.bindAttribLocation(y,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(y,0,"position"),r.linkProgram(y);function T(D){if(t.debug.checkShaderErrors){const V=r.getProgramInfoLog(y).trim(),H=r.getShaderInfoLog(b).trim(),K=r.getShaderInfoLog(C).trim();let Q=!0,Y=!0;if(r.getProgramParameter(y,r.LINK_STATUS)===!1)if(Q=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,y,b,C);else{const J=Ip(r,b,"vertex"),N=Ip(r,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(y,r.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+V+`
`+J+`
`+N)}else V!==""?console.warn("THREE.WebGLProgram: Program Info Log:",V):(H===""||K==="")&&(Y=!1);Y&&(D.diagnostics={runnable:Q,programLog:V,vertexShader:{log:H,prefix:m},fragmentShader:{log:K,prefix:u}})}r.deleteShader(b),r.deleteShader(C),P=new Ga(r,y),w=bM(r,y)}let P;this.getUniforms=function(){return P===void 0&&T(this),P};let w;this.getAttributes=function(){return w===void 0&&T(this),w};let S=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=r.getProgramParameter(y,yM)),S},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(y),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=SM++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=b,this.fragmentShader=C,this}let HM=0;class VM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new GM(e),n.set(e,i)),i}}class GM{constructor(e){this.id=HM++,this.code=e,this.usedTimes=0}}function WM(t,e,n,i,r,s,o){const a=new mg,l=new VM,c=new Set,d=[],h=r.logarithmicDepthBuffer,f=r.vertexTextures;let p=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(w){return c.add(w),w===0?"uv":`uv${w}`}function m(w,S,D,V,H){const K=V.fog,Q=H.geometry,Y=w.isMeshStandardMaterial?V.environment:null,J=(w.isMeshStandardMaterial?n:e).get(w.envMap||Y),N=J&&J.mapping===Ll?J.image.height:null,j=_[w.type];w.precision!==null&&(p=r.getMaxPrecision(w.precision),p!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",p,"instead."));const Z=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,oe=Z!==void 0?Z.length:0;let ye=0;Q.morphAttributes.position!==void 0&&(ye=1),Q.morphAttributes.normal!==void 0&&(ye=2),Q.morphAttributes.color!==void 0&&(ye=3);let Xe,W,re,he;if(j){const Je=Yn[j];Xe=Je.vertexShader,W=Je.fragmentShader}else Xe=w.vertexShader,W=w.fragmentShader,l.update(w),re=l.getVertexShaderID(w),he=l.getFragmentShaderID(w);const se=t.getRenderTarget(),Te=t.state.buffers.depth.getReversed(),qe=H.isInstancedMesh===!0,be=H.isBatchedMesh===!0,gt=!!w.map,ct=!!w.matcap,Be=!!J,L=!!w.aoMap,mn=!!w.lightMap,Ve=!!w.bumpMap,ze=!!w.normalMap,Ee=!!w.displacementMap,rt=!!w.emissiveMap,Se=!!w.metalnessMap,A=!!w.roughnessMap,E=w.anisotropy>0,k=w.clearcoat>0,q=w.dispersion>0,ee=w.iridescence>0,X=w.sheen>0,xe=w.transmission>0,ce=E&&!!w.anisotropyMap,Ae=k&&!!w.clearcoatMap,Ce=k&&!!w.clearcoatNormalMap,ne=k&&!!w.clearcoatRoughnessMap,ge=ee&&!!w.iridescenceMap,Re=ee&&!!w.iridescenceThicknessMap,De=X&&!!w.sheenColorMap,ve=X&&!!w.sheenRoughnessMap,He=!!w.specularMap,Ue=!!w.specularColorMap,nt=!!w.specularIntensityMap,I=xe&&!!w.transmissionMap,ue=xe&&!!w.thicknessMap,G=!!w.gradientMap,$=!!w.alphaMap,de=w.alphaTest>0,fe=!!w.alphaHash,Ne=!!w.extensions;let ht=Xi;w.toneMapped&&(se===null||se.isXRRenderTarget===!0)&&(ht=t.toneMapping);const It={shaderID:j,shaderType:w.type,shaderName:w.name,vertexShader:Xe,fragmentShader:W,defines:w.defines,customVertexShaderID:re,customFragmentShaderID:he,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:p,batching:be,batchingColor:be&&H._colorsTexture!==null,instancing:qe,instancingColor:qe&&H.instanceColor!==null,instancingMorph:qe&&H.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:se===null?t.outputColorSpace:se.isXRRenderTarget===!0?se.texture.colorSpace:Ss,alphaToCoverage:!!w.alphaToCoverage,map:gt,matcap:ct,envMap:Be,envMapMode:Be&&J.mapping,envMapCubeUVHeight:N,aoMap:L,lightMap:mn,bumpMap:Ve,normalMap:ze,displacementMap:f&&Ee,emissiveMap:rt,normalMapObjectSpace:ze&&w.normalMapType===Ox,normalMapTangentSpace:ze&&w.normalMapType===Fx,metalnessMap:Se,roughnessMap:A,anisotropy:E,anisotropyMap:ce,clearcoat:k,clearcoatMap:Ae,clearcoatNormalMap:Ce,clearcoatRoughnessMap:ne,dispersion:q,iridescence:ee,iridescenceMap:ge,iridescenceThicknessMap:Re,sheen:X,sheenColorMap:De,sheenRoughnessMap:ve,specularMap:He,specularColorMap:Ue,specularIntensityMap:nt,transmission:xe,transmissionMap:I,thicknessMap:ue,gradientMap:G,opaque:w.transparent===!1&&w.blending===cs&&w.alphaToCoverage===!1,alphaMap:$,alphaTest:de,alphaHash:fe,combine:w.combine,mapUv:gt&&y(w.map.channel),aoMapUv:L&&y(w.aoMap.channel),lightMapUv:mn&&y(w.lightMap.channel),bumpMapUv:Ve&&y(w.bumpMap.channel),normalMapUv:ze&&y(w.normalMap.channel),displacementMapUv:Ee&&y(w.displacementMap.channel),emissiveMapUv:rt&&y(w.emissiveMap.channel),metalnessMapUv:Se&&y(w.metalnessMap.channel),roughnessMapUv:A&&y(w.roughnessMap.channel),anisotropyMapUv:ce&&y(w.anisotropyMap.channel),clearcoatMapUv:Ae&&y(w.clearcoatMap.channel),clearcoatNormalMapUv:Ce&&y(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ne&&y(w.clearcoatRoughnessMap.channel),iridescenceMapUv:ge&&y(w.iridescenceMap.channel),iridescenceThicknessMapUv:Re&&y(w.iridescenceThicknessMap.channel),sheenColorMapUv:De&&y(w.sheenColorMap.channel),sheenRoughnessMapUv:ve&&y(w.sheenRoughnessMap.channel),specularMapUv:He&&y(w.specularMap.channel),specularColorMapUv:Ue&&y(w.specularColorMap.channel),specularIntensityMapUv:nt&&y(w.specularIntensityMap.channel),transmissionMapUv:I&&y(w.transmissionMap.channel),thicknessMapUv:ue&&y(w.thicknessMap.channel),alphaMapUv:$&&y(w.alphaMap.channel),vertexTangents:!!Q.attributes.tangent&&(ze||E),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,pointsUvs:H.isPoints===!0&&!!Q.attributes.uv&&(gt||$),fog:!!K,useFog:w.fog===!0,fogExp2:!!K&&K.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:Te,skinning:H.isSkinnedMesh===!0,morphTargets:Q.morphAttributes.position!==void 0,morphNormals:Q.morphAttributes.normal!==void 0,morphColors:Q.morphAttributes.color!==void 0,morphTargetsCount:oe,morphTextureStride:ye,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:w.dithering,shadowMapEnabled:t.shadowMap.enabled&&D.length>0,shadowMapType:t.shadowMap.type,toneMapping:ht,decodeVideoTexture:gt&&w.map.isVideoTexture===!0&&Ye.getTransfer(w.map.colorSpace)===tt,decodeVideoTextureEmissive:rt&&w.emissiveMap.isVideoTexture===!0&&Ye.getTransfer(w.emissiveMap.colorSpace)===tt,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===ai,flipSided:w.side===tn,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:Ne&&w.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ne&&w.extensions.multiDraw===!0||be)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return It.vertexUv1s=c.has(1),It.vertexUv2s=c.has(2),It.vertexUv3s=c.has(3),c.clear(),It}function u(w){const S=[];if(w.shaderID?S.push(w.shaderID):(S.push(w.customVertexShaderID),S.push(w.customFragmentShaderID)),w.defines!==void 0)for(const D in w.defines)S.push(D),S.push(w.defines[D]);return w.isRawShaderMaterial===!1&&(g(S,w),v(S,w),S.push(t.outputColorSpace)),S.push(w.customProgramCacheKey),S.join()}function g(w,S){w.push(S.precision),w.push(S.outputColorSpace),w.push(S.envMapMode),w.push(S.envMapCubeUVHeight),w.push(S.mapUv),w.push(S.alphaMapUv),w.push(S.lightMapUv),w.push(S.aoMapUv),w.push(S.bumpMapUv),w.push(S.normalMapUv),w.push(S.displacementMapUv),w.push(S.emissiveMapUv),w.push(S.metalnessMapUv),w.push(S.roughnessMapUv),w.push(S.anisotropyMapUv),w.push(S.clearcoatMapUv),w.push(S.clearcoatNormalMapUv),w.push(S.clearcoatRoughnessMapUv),w.push(S.iridescenceMapUv),w.push(S.iridescenceThicknessMapUv),w.push(S.sheenColorMapUv),w.push(S.sheenRoughnessMapUv),w.push(S.specularMapUv),w.push(S.specularColorMapUv),w.push(S.specularIntensityMapUv),w.push(S.transmissionMapUv),w.push(S.thicknessMapUv),w.push(S.combine),w.push(S.fogExp2),w.push(S.sizeAttenuation),w.push(S.morphTargetsCount),w.push(S.morphAttributeCount),w.push(S.numDirLights),w.push(S.numPointLights),w.push(S.numSpotLights),w.push(S.numSpotLightMaps),w.push(S.numHemiLights),w.push(S.numRectAreaLights),w.push(S.numDirLightShadows),w.push(S.numPointLightShadows),w.push(S.numSpotLightShadows),w.push(S.numSpotLightShadowsWithMaps),w.push(S.numLightProbes),w.push(S.shadowMapType),w.push(S.toneMapping),w.push(S.numClippingPlanes),w.push(S.numClipIntersection),w.push(S.depthPacking)}function v(w,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),w.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reverseDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),w.push(a.mask)}function x(w){const S=_[w.type];let D;if(S){const V=Yn[S];D=py.clone(V.uniforms)}else D=w.uniforms;return D}function b(w,S){let D;for(let V=0,H=d.length;V<H;V++){const K=d[V];if(K.cacheKey===S){D=K,++D.usedTimes;break}}return D===void 0&&(D=new zM(t,S,w,s),d.push(D)),D}function C(w){if(--w.usedTimes===0){const S=d.indexOf(w);d[S]=d[d.length-1],d.pop(),w.destroy()}}function T(w){l.remove(w)}function P(){l.dispose()}return{getParameters:m,getProgramCacheKey:u,getUniforms:x,acquireProgram:b,releaseProgram:C,releaseShaderCache:T,programs:d,dispose:P}}function XM(){let t=new WeakMap;function e(o){return t.has(o)}function n(o){let a=t.get(o);return a===void 0&&(a={},t.set(o,a)),a}function i(o){t.delete(o)}function r(o,a,l){t.get(o)[a]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function jM(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function Bp(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function zp(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(h,f,p,_,y,m){let u=t[e];return u===void 0?(u={id:h.id,object:h,geometry:f,material:p,groupOrder:_,renderOrder:h.renderOrder,z:y,group:m},t[e]=u):(u.id=h.id,u.object=h,u.geometry=f,u.material=p,u.groupOrder=_,u.renderOrder=h.renderOrder,u.z=y,u.group=m),e++,u}function a(h,f,p,_,y,m){const u=o(h,f,p,_,y,m);p.transmission>0?i.push(u):p.transparent===!0?r.push(u):n.push(u)}function l(h,f,p,_,y,m){const u=o(h,f,p,_,y,m);p.transmission>0?i.unshift(u):p.transparent===!0?r.unshift(u):n.unshift(u)}function c(h,f){n.length>1&&n.sort(h||jM),i.length>1&&i.sort(f||Bp),r.length>1&&r.sort(f||Bp)}function d(){for(let h=e,f=t.length;h<f;h++){const p=t[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:d,sort:c}}function YM(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new zp,t.set(i,[o])):r>=s.length?(o=new zp,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function qM(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new O,color:new Ze};break;case"SpotLight":n={position:new O,direction:new O,color:new Ze,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new O,color:new Ze,distance:0,decay:0};break;case"HemisphereLight":n={direction:new O,skyColor:new Ze,groundColor:new Ze};break;case"RectAreaLight":n={color:new Ze,position:new O,halfWidth:new O,halfHeight:new O};break}return t[e.id]=n,n}}}function $M(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qe};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qe};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qe,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let KM=0;function ZM(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function QM(t){const e=new qM,n=$M(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new O);const r=new O,s=new xt,o=new xt;function a(c){let d=0,h=0,f=0;for(let w=0;w<9;w++)i.probe[w].set(0,0,0);let p=0,_=0,y=0,m=0,u=0,g=0,v=0,x=0,b=0,C=0,T=0;c.sort(ZM);for(let w=0,S=c.length;w<S;w++){const D=c[w],V=D.color,H=D.intensity,K=D.distance,Q=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)d+=V.r*H,h+=V.g*H,f+=V.b*H;else if(D.isLightProbe){for(let Y=0;Y<9;Y++)i.probe[Y].addScaledVector(D.sh.coefficients[Y],H);T++}else if(D.isDirectionalLight){const Y=e.get(D);if(Y.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const J=D.shadow,N=n.get(D);N.shadowIntensity=J.intensity,N.shadowBias=J.bias,N.shadowNormalBias=J.normalBias,N.shadowRadius=J.radius,N.shadowMapSize=J.mapSize,i.directionalShadow[p]=N,i.directionalShadowMap[p]=Q,i.directionalShadowMatrix[p]=D.shadow.matrix,g++}i.directional[p]=Y,p++}else if(D.isSpotLight){const Y=e.get(D);Y.position.setFromMatrixPosition(D.matrixWorld),Y.color.copy(V).multiplyScalar(H),Y.distance=K,Y.coneCos=Math.cos(D.angle),Y.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),Y.decay=D.decay,i.spot[y]=Y;const J=D.shadow;if(D.map&&(i.spotLightMap[b]=D.map,b++,J.updateMatrices(D),D.castShadow&&C++),i.spotLightMatrix[y]=J.matrix,D.castShadow){const N=n.get(D);N.shadowIntensity=J.intensity,N.shadowBias=J.bias,N.shadowNormalBias=J.normalBias,N.shadowRadius=J.radius,N.shadowMapSize=J.mapSize,i.spotShadow[y]=N,i.spotShadowMap[y]=Q,x++}y++}else if(D.isRectAreaLight){const Y=e.get(D);Y.color.copy(V).multiplyScalar(H),Y.halfWidth.set(D.width*.5,0,0),Y.halfHeight.set(0,D.height*.5,0),i.rectArea[m]=Y,m++}else if(D.isPointLight){const Y=e.get(D);if(Y.color.copy(D.color).multiplyScalar(D.intensity),Y.distance=D.distance,Y.decay=D.decay,D.castShadow){const J=D.shadow,N=n.get(D);N.shadowIntensity=J.intensity,N.shadowBias=J.bias,N.shadowNormalBias=J.normalBias,N.shadowRadius=J.radius,N.shadowMapSize=J.mapSize,N.shadowCameraNear=J.camera.near,N.shadowCameraFar=J.camera.far,i.pointShadow[_]=N,i.pointShadowMap[_]=Q,i.pointShadowMatrix[_]=D.shadow.matrix,v++}i.point[_]=Y,_++}else if(D.isHemisphereLight){const Y=e.get(D);Y.skyColor.copy(D.color).multiplyScalar(H),Y.groundColor.copy(D.groundColor).multiplyScalar(H),i.hemi[u]=Y,u++}}m>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ae.LTC_FLOAT_1,i.rectAreaLTC2=ae.LTC_FLOAT_2):(i.rectAreaLTC1=ae.LTC_HALF_1,i.rectAreaLTC2=ae.LTC_HALF_2)),i.ambient[0]=d,i.ambient[1]=h,i.ambient[2]=f;const P=i.hash;(P.directionalLength!==p||P.pointLength!==_||P.spotLength!==y||P.rectAreaLength!==m||P.hemiLength!==u||P.numDirectionalShadows!==g||P.numPointShadows!==v||P.numSpotShadows!==x||P.numSpotMaps!==b||P.numLightProbes!==T)&&(i.directional.length=p,i.spot.length=y,i.rectArea.length=m,i.point.length=_,i.hemi.length=u,i.directionalShadow.length=g,i.directionalShadowMap.length=g,i.pointShadow.length=v,i.pointShadowMap.length=v,i.spotShadow.length=x,i.spotShadowMap.length=x,i.directionalShadowMatrix.length=g,i.pointShadowMatrix.length=v,i.spotLightMatrix.length=x+b-C,i.spotLightMap.length=b,i.numSpotLightShadowsWithMaps=C,i.numLightProbes=T,P.directionalLength=p,P.pointLength=_,P.spotLength=y,P.rectAreaLength=m,P.hemiLength=u,P.numDirectionalShadows=g,P.numPointShadows=v,P.numSpotShadows=x,P.numSpotMaps=b,P.numLightProbes=T,i.version=KM++)}function l(c,d){let h=0,f=0,p=0,_=0,y=0;const m=d.matrixWorldInverse;for(let u=0,g=c.length;u<g;u++){const v=c[u];if(v.isDirectionalLight){const x=i.directional[h];x.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),x.direction.sub(r),x.direction.transformDirection(m),h++}else if(v.isSpotLight){const x=i.spot[p];x.position.setFromMatrixPosition(v.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),x.direction.sub(r),x.direction.transformDirection(m),p++}else if(v.isRectAreaLight){const x=i.rectArea[_];x.position.setFromMatrixPosition(v.matrixWorld),x.position.applyMatrix4(m),o.identity(),s.copy(v.matrixWorld),s.premultiply(m),o.extractRotation(s),x.halfWidth.set(v.width*.5,0,0),x.halfHeight.set(0,v.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),_++}else if(v.isPointLight){const x=i.point[f];x.position.setFromMatrixPosition(v.matrixWorld),x.position.applyMatrix4(m),f++}else if(v.isHemisphereLight){const x=i.hemi[y];x.direction.setFromMatrixPosition(v.matrixWorld),x.direction.transformDirection(m),y++}}}return{setup:a,setupView:l,state:i}}function Hp(t){const e=new QM(t),n=[],i=[];function r(d){c.camera=d,n.length=0,i.length=0}function s(d){n.push(d)}function o(d){i.push(d)}function a(){e.setup(n)}function l(d){e.setupView(n,d)}const c={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function JM(t){let e=new WeakMap;function n(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new Hp(t),e.set(r,[a])):s>=o.length?(a=new Hp(t),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:n,dispose:i}}const e2=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,t2=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function n2(t,e,n){let i=new Eg;const r=new Qe,s=new Qe,o=new _t,a=new Ty({depthPacking:Ux}),l=new Ay,c={},d=n.maxTextureSize,h={[qi]:tn,[tn]:qi,[ai]:ai},f=new yi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Qe},radius:{value:4}},vertexShader:e2,fragmentShader:t2}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const _=new Wn;_.setAttribute("position",new An(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new wn(_,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=eg;let u=this.type;this.render=function(C,T,P){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||C.length===0)return;const w=t.getRenderTarget(),S=t.getActiveCubeFace(),D=t.getActiveMipmapLevel(),V=t.state;V.setBlending(Wi),V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);const H=u!==ri&&this.type===ri,K=u===ri&&this.type!==ri;for(let Q=0,Y=C.length;Q<Y;Q++){const J=C[Q],N=J.shadow;if(N===void 0){console.warn("THREE.WebGLShadowMap:",J,"has no shadow.");continue}if(N.autoUpdate===!1&&N.needsUpdate===!1)continue;r.copy(N.mapSize);const j=N.getFrameExtents();if(r.multiply(j),s.copy(N.mapSize),(r.x>d||r.y>d)&&(r.x>d&&(s.x=Math.floor(d/j.x),r.x=s.x*j.x,N.mapSize.x=s.x),r.y>d&&(s.y=Math.floor(d/j.y),r.y=s.y*j.y,N.mapSize.y=s.y)),N.map===null||H===!0||K===!0){const oe=this.type!==ri?{minFilter:Vn,magFilter:Vn}:{};N.map!==null&&N.map.dispose(),N.map=new Tr(r.x,r.y,oe),N.map.texture.name=J.name+".shadowMap",N.camera.updateProjectionMatrix()}t.setRenderTarget(N.map),t.clear();const Z=N.getViewportCount();for(let oe=0;oe<Z;oe++){const ye=N.getViewport(oe);o.set(s.x*ye.x,s.y*ye.y,s.x*ye.z,s.y*ye.w),V.viewport(o),N.updateMatrices(J,oe),i=N.getFrustum(),x(T,P,N.camera,J,this.type)}N.isPointLightShadow!==!0&&this.type===ri&&g(N,P),N.needsUpdate=!1}u=this.type,m.needsUpdate=!1,t.setRenderTarget(w,S,D)};function g(C,T){const P=e.update(y);f.defines.VSM_SAMPLES!==C.blurSamples&&(f.defines.VSM_SAMPLES=C.blurSamples,p.defines.VSM_SAMPLES=C.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new Tr(r.x,r.y)),f.uniforms.shadow_pass.value=C.map.texture,f.uniforms.resolution.value=C.mapSize,f.uniforms.radius.value=C.radius,t.setRenderTarget(C.mapPass),t.clear(),t.renderBufferDirect(T,null,P,f,y,null),p.uniforms.shadow_pass.value=C.mapPass.texture,p.uniforms.resolution.value=C.mapSize,p.uniforms.radius.value=C.radius,t.setRenderTarget(C.map),t.clear(),t.renderBufferDirect(T,null,P,p,y,null)}function v(C,T,P,w){let S=null;const D=P.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(D!==void 0)S=D;else if(S=P.isPointLight===!0?l:a,t.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0||T.alphaToCoverage===!0){const V=S.uuid,H=T.uuid;let K=c[V];K===void 0&&(K={},c[V]=K);let Q=K[H];Q===void 0&&(Q=S.clone(),K[H]=Q,T.addEventListener("dispose",b)),S=Q}if(S.visible=T.visible,S.wireframe=T.wireframe,w===ri?S.side=T.shadowSide!==null?T.shadowSide:T.side:S.side=T.shadowSide!==null?T.shadowSide:h[T.side],S.alphaMap=T.alphaMap,S.alphaTest=T.alphaToCoverage===!0?.5:T.alphaTest,S.map=T.map,S.clipShadows=T.clipShadows,S.clippingPlanes=T.clippingPlanes,S.clipIntersection=T.clipIntersection,S.displacementMap=T.displacementMap,S.displacementScale=T.displacementScale,S.displacementBias=T.displacementBias,S.wireframeLinewidth=T.wireframeLinewidth,S.linewidth=T.linewidth,P.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const V=t.properties.get(S);V.light=P}return S}function x(C,T,P,w,S){if(C.visible===!1)return;if(C.layers.test(T.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&S===ri)&&(!C.frustumCulled||i.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,C.matrixWorld);const H=e.update(C),K=C.material;if(Array.isArray(K)){const Q=H.groups;for(let Y=0,J=Q.length;Y<J;Y++){const N=Q[Y],j=K[N.materialIndex];if(j&&j.visible){const Z=v(C,j,w,S);C.onBeforeShadow(t,C,T,P,H,Z,N),t.renderBufferDirect(P,null,H,Z,C,N),C.onAfterShadow(t,C,T,P,H,Z,N)}}}else if(K.visible){const Q=v(C,K,w,S);C.onBeforeShadow(t,C,T,P,H,Q,null),t.renderBufferDirect(P,null,H,Q,C,null),C.onAfterShadow(t,C,T,P,H,Q,null)}}const V=C.children;for(let H=0,K=V.length;H<K;H++)x(V[H],T,P,w,S)}function b(C){C.target.removeEventListener("dispose",b);for(const P in c){const w=c[P],S=C.target.uuid;S in w&&(w[S].dispose(),delete w[S])}}}const i2={[Fu]:Ou,[ku]:Hu,[Bu]:Vu,[_s]:zu,[Ou]:Fu,[Hu]:ku,[Vu]:Bu,[zu]:_s};function r2(t,e){function n(){let I=!1;const ue=new _t;let G=null;const $=new _t(0,0,0,0);return{setMask:function(de){G!==de&&!I&&(t.colorMask(de,de,de,de),G=de)},setLocked:function(de){I=de},setClear:function(de,fe,Ne,ht,It){It===!0&&(de*=ht,fe*=ht,Ne*=ht),ue.set(de,fe,Ne,ht),$.equals(ue)===!1&&(t.clearColor(de,fe,Ne,ht),$.copy(ue))},reset:function(){I=!1,G=null,$.set(-1,0,0,0)}}}function i(){let I=!1,ue=!1,G=null,$=null,de=null;return{setReversed:function(fe){if(ue!==fe){const Ne=e.get("EXT_clip_control");fe?Ne.clipControlEXT(Ne.LOWER_LEFT_EXT,Ne.ZERO_TO_ONE_EXT):Ne.clipControlEXT(Ne.LOWER_LEFT_EXT,Ne.NEGATIVE_ONE_TO_ONE_EXT),ue=fe;const ht=de;de=null,this.setClear(ht)}},getReversed:function(){return ue},setTest:function(fe){fe?se(t.DEPTH_TEST):Te(t.DEPTH_TEST)},setMask:function(fe){G!==fe&&!I&&(t.depthMask(fe),G=fe)},setFunc:function(fe){if(ue&&(fe=i2[fe]),$!==fe){switch(fe){case Fu:t.depthFunc(t.NEVER);break;case Ou:t.depthFunc(t.ALWAYS);break;case ku:t.depthFunc(t.LESS);break;case _s:t.depthFunc(t.LEQUAL);break;case Bu:t.depthFunc(t.EQUAL);break;case zu:t.depthFunc(t.GEQUAL);break;case Hu:t.depthFunc(t.GREATER);break;case Vu:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}$=fe}},setLocked:function(fe){I=fe},setClear:function(fe){de!==fe&&(ue&&(fe=1-fe),t.clearDepth(fe),de=fe)},reset:function(){I=!1,G=null,$=null,de=null,ue=!1}}}function r(){let I=!1,ue=null,G=null,$=null,de=null,fe=null,Ne=null,ht=null,It=null;return{setTest:function(Je){I||(Je?se(t.STENCIL_TEST):Te(t.STENCIL_TEST))},setMask:function(Je){ue!==Je&&!I&&(t.stencilMask(Je),ue=Je)},setFunc:function(Je,bn,Qn){(G!==Je||$!==bn||de!==Qn)&&(t.stencilFunc(Je,bn,Qn),G=Je,$=bn,de=Qn)},setOp:function(Je,bn,Qn){(fe!==Je||Ne!==bn||ht!==Qn)&&(t.stencilOp(Je,bn,Qn),fe=Je,Ne=bn,ht=Qn)},setLocked:function(Je){I=Je},setClear:function(Je){It!==Je&&(t.clearStencil(Je),It=Je)},reset:function(){I=!1,ue=null,G=null,$=null,de=null,fe=null,Ne=null,ht=null,It=null}}}const s=new n,o=new i,a=new r,l=new WeakMap,c=new WeakMap;let d={},h={},f=new WeakMap,p=[],_=null,y=!1,m=null,u=null,g=null,v=null,x=null,b=null,C=null,T=new Ze(0,0,0),P=0,w=!1,S=null,D=null,V=null,H=null,K=null;const Q=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Y=!1,J=0;const N=t.getParameter(t.VERSION);N.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(N)[1]),Y=J>=1):N.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(N)[1]),Y=J>=2);let j=null,Z={};const oe=t.getParameter(t.SCISSOR_BOX),ye=t.getParameter(t.VIEWPORT),Xe=new _t().fromArray(oe),W=new _t().fromArray(ye);function re(I,ue,G,$){const de=new Uint8Array(4),fe=t.createTexture();t.bindTexture(I,fe),t.texParameteri(I,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(I,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Ne=0;Ne<G;Ne++)I===t.TEXTURE_3D||I===t.TEXTURE_2D_ARRAY?t.texImage3D(ue,0,t.RGBA,1,1,$,0,t.RGBA,t.UNSIGNED_BYTE,de):t.texImage2D(ue+Ne,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,de);return fe}const he={};he[t.TEXTURE_2D]=re(t.TEXTURE_2D,t.TEXTURE_2D,1),he[t.TEXTURE_CUBE_MAP]=re(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),he[t.TEXTURE_2D_ARRAY]=re(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),he[t.TEXTURE_3D]=re(t.TEXTURE_3D,t.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),se(t.DEPTH_TEST),o.setFunc(_s),Ve(!1),ze(Xh),se(t.CULL_FACE),L(Wi);function se(I){d[I]!==!0&&(t.enable(I),d[I]=!0)}function Te(I){d[I]!==!1&&(t.disable(I),d[I]=!1)}function qe(I,ue){return h[I]!==ue?(t.bindFramebuffer(I,ue),h[I]=ue,I===t.DRAW_FRAMEBUFFER&&(h[t.FRAMEBUFFER]=ue),I===t.FRAMEBUFFER&&(h[t.DRAW_FRAMEBUFFER]=ue),!0):!1}function be(I,ue){let G=p,$=!1;if(I){G=f.get(ue),G===void 0&&(G=[],f.set(ue,G));const de=I.textures;if(G.length!==de.length||G[0]!==t.COLOR_ATTACHMENT0){for(let fe=0,Ne=de.length;fe<Ne;fe++)G[fe]=t.COLOR_ATTACHMENT0+fe;G.length=de.length,$=!0}}else G[0]!==t.BACK&&(G[0]=t.BACK,$=!0);$&&t.drawBuffers(G)}function gt(I){return _!==I?(t.useProgram(I),_=I,!0):!1}const ct={[ur]:t.FUNC_ADD,[ax]:t.FUNC_SUBTRACT,[lx]:t.FUNC_REVERSE_SUBTRACT};ct[cx]=t.MIN,ct[ux]=t.MAX;const Be={[fx]:t.ZERO,[dx]:t.ONE,[hx]:t.SRC_COLOR,[Iu]:t.SRC_ALPHA,[xx]:t.SRC_ALPHA_SATURATE,[vx]:t.DST_COLOR,[mx]:t.DST_ALPHA,[px]:t.ONE_MINUS_SRC_COLOR,[Uu]:t.ONE_MINUS_SRC_ALPHA,[_x]:t.ONE_MINUS_DST_COLOR,[gx]:t.ONE_MINUS_DST_ALPHA,[yx]:t.CONSTANT_COLOR,[Sx]:t.ONE_MINUS_CONSTANT_COLOR,[Ex]:t.CONSTANT_ALPHA,[Mx]:t.ONE_MINUS_CONSTANT_ALPHA};function L(I,ue,G,$,de,fe,Ne,ht,It,Je){if(I===Wi){y===!0&&(Te(t.BLEND),y=!1);return}if(y===!1&&(se(t.BLEND),y=!0),I!==ox){if(I!==m||Je!==w){if((u!==ur||x!==ur)&&(t.blendEquation(t.FUNC_ADD),u=ur,x=ur),Je)switch(I){case cs:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Nu:t.blendFunc(t.ONE,t.ONE);break;case jh:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Yh:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case cs:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Nu:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case jh:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Yh:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}g=null,v=null,b=null,C=null,T.set(0,0,0),P=0,m=I,w=Je}return}de=de||ue,fe=fe||G,Ne=Ne||$,(ue!==u||de!==x)&&(t.blendEquationSeparate(ct[ue],ct[de]),u=ue,x=de),(G!==g||$!==v||fe!==b||Ne!==C)&&(t.blendFuncSeparate(Be[G],Be[$],Be[fe],Be[Ne]),g=G,v=$,b=fe,C=Ne),(ht.equals(T)===!1||It!==P)&&(t.blendColor(ht.r,ht.g,ht.b,It),T.copy(ht),P=It),m=I,w=!1}function mn(I,ue){I.side===ai?Te(t.CULL_FACE):se(t.CULL_FACE);let G=I.side===tn;ue&&(G=!G),Ve(G),I.blending===cs&&I.transparent===!1?L(Wi):L(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),o.setFunc(I.depthFunc),o.setTest(I.depthTest),o.setMask(I.depthWrite),s.setMask(I.colorWrite);const $=I.stencilWrite;a.setTest($),$&&(a.setMask(I.stencilWriteMask),a.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),a.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),rt(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?se(t.SAMPLE_ALPHA_TO_COVERAGE):Te(t.SAMPLE_ALPHA_TO_COVERAGE)}function Ve(I){S!==I&&(I?t.frontFace(t.CW):t.frontFace(t.CCW),S=I)}function ze(I){I!==ix?(se(t.CULL_FACE),I!==D&&(I===Xh?t.cullFace(t.BACK):I===rx?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):Te(t.CULL_FACE),D=I}function Ee(I){I!==V&&(Y&&t.lineWidth(I),V=I)}function rt(I,ue,G){I?(se(t.POLYGON_OFFSET_FILL),(H!==ue||K!==G)&&(t.polygonOffset(ue,G),H=ue,K=G)):Te(t.POLYGON_OFFSET_FILL)}function Se(I){I?se(t.SCISSOR_TEST):Te(t.SCISSOR_TEST)}function A(I){I===void 0&&(I=t.TEXTURE0+Q-1),j!==I&&(t.activeTexture(I),j=I)}function E(I,ue,G){G===void 0&&(j===null?G=t.TEXTURE0+Q-1:G=j);let $=Z[G];$===void 0&&($={type:void 0,texture:void 0},Z[G]=$),($.type!==I||$.texture!==ue)&&(j!==G&&(t.activeTexture(G),j=G),t.bindTexture(I,ue||he[I]),$.type=I,$.texture=ue)}function k(){const I=Z[j];I!==void 0&&I.type!==void 0&&(t.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function q(){try{t.compressedTexImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ee(){try{t.compressedTexImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function X(){try{t.texSubImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function xe(){try{t.texSubImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ce(){try{t.compressedTexSubImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ae(){try{t.compressedTexSubImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ce(){try{t.texStorage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ne(){try{t.texStorage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ge(){try{t.texImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Re(){try{t.texImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function De(I){Xe.equals(I)===!1&&(t.scissor(I.x,I.y,I.z,I.w),Xe.copy(I))}function ve(I){W.equals(I)===!1&&(t.viewport(I.x,I.y,I.z,I.w),W.copy(I))}function He(I,ue){let G=c.get(ue);G===void 0&&(G=new WeakMap,c.set(ue,G));let $=G.get(I);$===void 0&&($=t.getUniformBlockIndex(ue,I.name),G.set(I,$))}function Ue(I,ue){const $=c.get(ue).get(I);l.get(ue)!==$&&(t.uniformBlockBinding(ue,$,I.__bindingPointIndex),l.set(ue,$))}function nt(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),o.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),d={},j=null,Z={},h={},f=new WeakMap,p=[],_=null,y=!1,m=null,u=null,g=null,v=null,x=null,b=null,C=null,T=new Ze(0,0,0),P=0,w=!1,S=null,D=null,V=null,H=null,K=null,Xe.set(0,0,t.canvas.width,t.canvas.height),W.set(0,0,t.canvas.width,t.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:se,disable:Te,bindFramebuffer:qe,drawBuffers:be,useProgram:gt,setBlending:L,setMaterial:mn,setFlipSided:Ve,setCullFace:ze,setLineWidth:Ee,setPolygonOffset:rt,setScissorTest:Se,activeTexture:A,bindTexture:E,unbindTexture:k,compressedTexImage2D:q,compressedTexImage3D:ee,texImage2D:ge,texImage3D:Re,updateUBOMapping:He,uniformBlockBinding:Ue,texStorage2D:Ce,texStorage3D:ne,texSubImage2D:X,texSubImage3D:xe,compressedTexSubImage2D:ce,compressedTexSubImage3D:Ae,scissor:De,viewport:ve,reset:nt}}function s2(t,e,n,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Qe,d=new WeakMap;let h;const f=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(A,E){return p?new OffscreenCanvas(A,E):gl("canvas")}function y(A,E,k){let q=1;const ee=Se(A);if((ee.width>k||ee.height>k)&&(q=k/Math.max(ee.width,ee.height)),q<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const X=Math.floor(q*ee.width),xe=Math.floor(q*ee.height);h===void 0&&(h=_(X,xe));const ce=E?_(X,xe):h;return ce.width=X,ce.height=xe,ce.getContext("2d").drawImage(A,0,0,X,xe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ee.width+"x"+ee.height+") to ("+X+"x"+xe+")."),ce}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ee.width+"x"+ee.height+")."),A;return A}function m(A){return A.generateMipmaps}function u(A){t.generateMipmap(A)}function g(A){return A.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?t.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function v(A,E,k,q,ee=!1){if(A!==null){if(t[A]!==void 0)return t[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let X=E;if(E===t.RED&&(k===t.FLOAT&&(X=t.R32F),k===t.HALF_FLOAT&&(X=t.R16F),k===t.UNSIGNED_BYTE&&(X=t.R8)),E===t.RED_INTEGER&&(k===t.UNSIGNED_BYTE&&(X=t.R8UI),k===t.UNSIGNED_SHORT&&(X=t.R16UI),k===t.UNSIGNED_INT&&(X=t.R32UI),k===t.BYTE&&(X=t.R8I),k===t.SHORT&&(X=t.R16I),k===t.INT&&(X=t.R32I)),E===t.RG&&(k===t.FLOAT&&(X=t.RG32F),k===t.HALF_FLOAT&&(X=t.RG16F),k===t.UNSIGNED_BYTE&&(X=t.RG8)),E===t.RG_INTEGER&&(k===t.UNSIGNED_BYTE&&(X=t.RG8UI),k===t.UNSIGNED_SHORT&&(X=t.RG16UI),k===t.UNSIGNED_INT&&(X=t.RG32UI),k===t.BYTE&&(X=t.RG8I),k===t.SHORT&&(X=t.RG16I),k===t.INT&&(X=t.RG32I)),E===t.RGB_INTEGER&&(k===t.UNSIGNED_BYTE&&(X=t.RGB8UI),k===t.UNSIGNED_SHORT&&(X=t.RGB16UI),k===t.UNSIGNED_INT&&(X=t.RGB32UI),k===t.BYTE&&(X=t.RGB8I),k===t.SHORT&&(X=t.RGB16I),k===t.INT&&(X=t.RGB32I)),E===t.RGBA_INTEGER&&(k===t.UNSIGNED_BYTE&&(X=t.RGBA8UI),k===t.UNSIGNED_SHORT&&(X=t.RGBA16UI),k===t.UNSIGNED_INT&&(X=t.RGBA32UI),k===t.BYTE&&(X=t.RGBA8I),k===t.SHORT&&(X=t.RGBA16I),k===t.INT&&(X=t.RGBA32I)),E===t.RGB&&k===t.UNSIGNED_INT_5_9_9_9_REV&&(X=t.RGB9_E5),E===t.RGBA){const xe=ee?pl:Ye.getTransfer(q);k===t.FLOAT&&(X=t.RGBA32F),k===t.HALF_FLOAT&&(X=t.RGBA16F),k===t.UNSIGNED_BYTE&&(X=xe===tt?t.SRGB8_ALPHA8:t.RGBA8),k===t.UNSIGNED_SHORT_4_4_4_4&&(X=t.RGBA4),k===t.UNSIGNED_SHORT_5_5_5_1&&(X=t.RGB5_A1)}return(X===t.R16F||X===t.R32F||X===t.RG16F||X===t.RG32F||X===t.RGBA16F||X===t.RGBA32F)&&e.get("EXT_color_buffer_float"),X}function x(A,E){let k;return A?E===null||E===wr||E===Eo?k=t.DEPTH24_STENCIL8:E===ui?k=t.DEPTH32F_STENCIL8:E===So&&(k=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===wr||E===Eo?k=t.DEPTH_COMPONENT24:E===ui?k=t.DEPTH_COMPONENT32F:E===So&&(k=t.DEPTH_COMPONENT16),k}function b(A,E){return m(A)===!0||A.isFramebufferTexture&&A.minFilter!==Vn&&A.minFilter!==$n?Math.log2(Math.max(E.width,E.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?E.mipmaps.length:1}function C(A){const E=A.target;E.removeEventListener("dispose",C),P(E),E.isVideoTexture&&d.delete(E)}function T(A){const E=A.target;E.removeEventListener("dispose",T),S(E)}function P(A){const E=i.get(A);if(E.__webglInit===void 0)return;const k=A.source,q=f.get(k);if(q){const ee=q[E.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&w(A),Object.keys(q).length===0&&f.delete(k)}i.remove(A)}function w(A){const E=i.get(A);t.deleteTexture(E.__webglTexture);const k=A.source,q=f.get(k);delete q[E.__cacheKey],o.memory.textures--}function S(A){const E=i.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),i.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(E.__webglFramebuffer[q]))for(let ee=0;ee<E.__webglFramebuffer[q].length;ee++)t.deleteFramebuffer(E.__webglFramebuffer[q][ee]);else t.deleteFramebuffer(E.__webglFramebuffer[q]);E.__webglDepthbuffer&&t.deleteRenderbuffer(E.__webglDepthbuffer[q])}else{if(Array.isArray(E.__webglFramebuffer))for(let q=0;q<E.__webglFramebuffer.length;q++)t.deleteFramebuffer(E.__webglFramebuffer[q]);else t.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&t.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&t.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let q=0;q<E.__webglColorRenderbuffer.length;q++)E.__webglColorRenderbuffer[q]&&t.deleteRenderbuffer(E.__webglColorRenderbuffer[q]);E.__webglDepthRenderbuffer&&t.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const k=A.textures;for(let q=0,ee=k.length;q<ee;q++){const X=i.get(k[q]);X.__webglTexture&&(t.deleteTexture(X.__webglTexture),o.memory.textures--),i.remove(k[q])}i.remove(A)}let D=0;function V(){D=0}function H(){const A=D;return A>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+r.maxTextures),D+=1,A}function K(A){const E=[];return E.push(A.wrapS),E.push(A.wrapT),E.push(A.wrapR||0),E.push(A.magFilter),E.push(A.minFilter),E.push(A.anisotropy),E.push(A.internalFormat),E.push(A.format),E.push(A.type),E.push(A.generateMipmaps),E.push(A.premultiplyAlpha),E.push(A.flipY),E.push(A.unpackAlignment),E.push(A.colorSpace),E.join()}function Q(A,E){const k=i.get(A);if(A.isVideoTexture&&Ee(A),A.isRenderTargetTexture===!1&&A.version>0&&k.__version!==A.version){const q=A.image;if(q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{W(k,A,E);return}}n.bindTexture(t.TEXTURE_2D,k.__webglTexture,t.TEXTURE0+E)}function Y(A,E){const k=i.get(A);if(A.version>0&&k.__version!==A.version){W(k,A,E);return}n.bindTexture(t.TEXTURE_2D_ARRAY,k.__webglTexture,t.TEXTURE0+E)}function J(A,E){const k=i.get(A);if(A.version>0&&k.__version!==A.version){W(k,A,E);return}n.bindTexture(t.TEXTURE_3D,k.__webglTexture,t.TEXTURE0+E)}function N(A,E){const k=i.get(A);if(A.version>0&&k.__version!==A.version){re(k,A,E);return}n.bindTexture(t.TEXTURE_CUBE_MAP,k.__webglTexture,t.TEXTURE0+E)}const j={[Xu]:t.REPEAT,[mr]:t.CLAMP_TO_EDGE,[ju]:t.MIRRORED_REPEAT},Z={[Vn]:t.NEAREST,[Nx]:t.NEAREST_MIPMAP_NEAREST,[ta]:t.NEAREST_MIPMAP_LINEAR,[$n]:t.LINEAR,[fc]:t.LINEAR_MIPMAP_NEAREST,[gr]:t.LINEAR_MIPMAP_LINEAR},oe={[kx]:t.NEVER,[Wx]:t.ALWAYS,[Bx]:t.LESS,[fg]:t.LEQUAL,[zx]:t.EQUAL,[Gx]:t.GEQUAL,[Hx]:t.GREATER,[Vx]:t.NOTEQUAL};function ye(A,E){if(E.type===ui&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===$n||E.magFilter===fc||E.magFilter===ta||E.magFilter===gr||E.minFilter===$n||E.minFilter===fc||E.minFilter===ta||E.minFilter===gr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(A,t.TEXTURE_WRAP_S,j[E.wrapS]),t.texParameteri(A,t.TEXTURE_WRAP_T,j[E.wrapT]),(A===t.TEXTURE_3D||A===t.TEXTURE_2D_ARRAY)&&t.texParameteri(A,t.TEXTURE_WRAP_R,j[E.wrapR]),t.texParameteri(A,t.TEXTURE_MAG_FILTER,Z[E.magFilter]),t.texParameteri(A,t.TEXTURE_MIN_FILTER,Z[E.minFilter]),E.compareFunction&&(t.texParameteri(A,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(A,t.TEXTURE_COMPARE_FUNC,oe[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Vn||E.minFilter!==ta&&E.minFilter!==gr||E.type===ui&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||i.get(E).__currentAnisotropy){const k=e.get("EXT_texture_filter_anisotropic");t.texParameterf(A,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,r.getMaxAnisotropy())),i.get(E).__currentAnisotropy=E.anisotropy}}}function Xe(A,E){let k=!1;A.__webglInit===void 0&&(A.__webglInit=!0,E.addEventListener("dispose",C));const q=E.source;let ee=f.get(q);ee===void 0&&(ee={},f.set(q,ee));const X=K(E);if(X!==A.__cacheKey){ee[X]===void 0&&(ee[X]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,k=!0),ee[X].usedTimes++;const xe=ee[A.__cacheKey];xe!==void 0&&(ee[A.__cacheKey].usedTimes--,xe.usedTimes===0&&w(E)),A.__cacheKey=X,A.__webglTexture=ee[X].texture}return k}function W(A,E,k){let q=t.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(q=t.TEXTURE_2D_ARRAY),E.isData3DTexture&&(q=t.TEXTURE_3D);const ee=Xe(A,E),X=E.source;n.bindTexture(q,A.__webglTexture,t.TEXTURE0+k);const xe=i.get(X);if(X.version!==xe.__version||ee===!0){n.activeTexture(t.TEXTURE0+k);const ce=Ye.getPrimaries(Ye.workingColorSpace),Ae=E.colorSpace===Ni?null:Ye.getPrimaries(E.colorSpace),Ce=E.colorSpace===Ni||ce===Ae?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,E.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ce);let ne=y(E.image,!1,r.maxTextureSize);ne=rt(E,ne);const ge=s.convert(E.format,E.colorSpace),Re=s.convert(E.type);let De=v(E.internalFormat,ge,Re,E.colorSpace,E.isVideoTexture);ye(q,E);let ve;const He=E.mipmaps,Ue=E.isVideoTexture!==!0,nt=xe.__version===void 0||ee===!0,I=X.dataReady,ue=b(E,ne);if(E.isDepthTexture)De=x(E.format===wo,E.type),nt&&(Ue?n.texStorage2D(t.TEXTURE_2D,1,De,ne.width,ne.height):n.texImage2D(t.TEXTURE_2D,0,De,ne.width,ne.height,0,ge,Re,null));else if(E.isDataTexture)if(He.length>0){Ue&&nt&&n.texStorage2D(t.TEXTURE_2D,ue,De,He[0].width,He[0].height);for(let G=0,$=He.length;G<$;G++)ve=He[G],Ue?I&&n.texSubImage2D(t.TEXTURE_2D,G,0,0,ve.width,ve.height,ge,Re,ve.data):n.texImage2D(t.TEXTURE_2D,G,De,ve.width,ve.height,0,ge,Re,ve.data);E.generateMipmaps=!1}else Ue?(nt&&n.texStorage2D(t.TEXTURE_2D,ue,De,ne.width,ne.height),I&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,ne.width,ne.height,ge,Re,ne.data)):n.texImage2D(t.TEXTURE_2D,0,De,ne.width,ne.height,0,ge,Re,ne.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){Ue&&nt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ue,De,He[0].width,He[0].height,ne.depth);for(let G=0,$=He.length;G<$;G++)if(ve=He[G],E.format!==Bn)if(ge!==null)if(Ue){if(I)if(E.layerUpdates.size>0){const de=vp(ve.width,ve.height,E.format,E.type);for(const fe of E.layerUpdates){const Ne=ve.data.subarray(fe*de/ve.data.BYTES_PER_ELEMENT,(fe+1)*de/ve.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,G,0,0,fe,ve.width,ve.height,1,ge,Ne)}E.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,G,0,0,0,ve.width,ve.height,ne.depth,ge,ve.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,G,De,ve.width,ve.height,ne.depth,0,ve.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ue?I&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,G,0,0,0,ve.width,ve.height,ne.depth,ge,Re,ve.data):n.texImage3D(t.TEXTURE_2D_ARRAY,G,De,ve.width,ve.height,ne.depth,0,ge,Re,ve.data)}else{Ue&&nt&&n.texStorage2D(t.TEXTURE_2D,ue,De,He[0].width,He[0].height);for(let G=0,$=He.length;G<$;G++)ve=He[G],E.format!==Bn?ge!==null?Ue?I&&n.compressedTexSubImage2D(t.TEXTURE_2D,G,0,0,ve.width,ve.height,ge,ve.data):n.compressedTexImage2D(t.TEXTURE_2D,G,De,ve.width,ve.height,0,ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ue?I&&n.texSubImage2D(t.TEXTURE_2D,G,0,0,ve.width,ve.height,ge,Re,ve.data):n.texImage2D(t.TEXTURE_2D,G,De,ve.width,ve.height,0,ge,Re,ve.data)}else if(E.isDataArrayTexture)if(Ue){if(nt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ue,De,ne.width,ne.height,ne.depth),I)if(E.layerUpdates.size>0){const G=vp(ne.width,ne.height,E.format,E.type);for(const $ of E.layerUpdates){const de=ne.data.subarray($*G/ne.data.BYTES_PER_ELEMENT,($+1)*G/ne.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,$,ne.width,ne.height,1,ge,Re,de)}E.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,ne.width,ne.height,ne.depth,ge,Re,ne.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,De,ne.width,ne.height,ne.depth,0,ge,Re,ne.data);else if(E.isData3DTexture)Ue?(nt&&n.texStorage3D(t.TEXTURE_3D,ue,De,ne.width,ne.height,ne.depth),I&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,ne.width,ne.height,ne.depth,ge,Re,ne.data)):n.texImage3D(t.TEXTURE_3D,0,De,ne.width,ne.height,ne.depth,0,ge,Re,ne.data);else if(E.isFramebufferTexture){if(nt)if(Ue)n.texStorage2D(t.TEXTURE_2D,ue,De,ne.width,ne.height);else{let G=ne.width,$=ne.height;for(let de=0;de<ue;de++)n.texImage2D(t.TEXTURE_2D,de,De,G,$,0,ge,Re,null),G>>=1,$>>=1}}else if(He.length>0){if(Ue&&nt){const G=Se(He[0]);n.texStorage2D(t.TEXTURE_2D,ue,De,G.width,G.height)}for(let G=0,$=He.length;G<$;G++)ve=He[G],Ue?I&&n.texSubImage2D(t.TEXTURE_2D,G,0,0,ge,Re,ve):n.texImage2D(t.TEXTURE_2D,G,De,ge,Re,ve);E.generateMipmaps=!1}else if(Ue){if(nt){const G=Se(ne);n.texStorage2D(t.TEXTURE_2D,ue,De,G.width,G.height)}I&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,ge,Re,ne)}else n.texImage2D(t.TEXTURE_2D,0,De,ge,Re,ne);m(E)&&u(q),xe.__version=X.version,E.onUpdate&&E.onUpdate(E)}A.__version=E.version}function re(A,E,k){if(E.image.length!==6)return;const q=Xe(A,E),ee=E.source;n.bindTexture(t.TEXTURE_CUBE_MAP,A.__webglTexture,t.TEXTURE0+k);const X=i.get(ee);if(ee.version!==X.__version||q===!0){n.activeTexture(t.TEXTURE0+k);const xe=Ye.getPrimaries(Ye.workingColorSpace),ce=E.colorSpace===Ni?null:Ye.getPrimaries(E.colorSpace),Ae=E.colorSpace===Ni||xe===ce?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,E.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ae);const Ce=E.isCompressedTexture||E.image[0].isCompressedTexture,ne=E.image[0]&&E.image[0].isDataTexture,ge=[];for(let $=0;$<6;$++)!Ce&&!ne?ge[$]=y(E.image[$],!0,r.maxCubemapSize):ge[$]=ne?E.image[$].image:E.image[$],ge[$]=rt(E,ge[$]);const Re=ge[0],De=s.convert(E.format,E.colorSpace),ve=s.convert(E.type),He=v(E.internalFormat,De,ve,E.colorSpace),Ue=E.isVideoTexture!==!0,nt=X.__version===void 0||q===!0,I=ee.dataReady;let ue=b(E,Re);ye(t.TEXTURE_CUBE_MAP,E);let G;if(Ce){Ue&&nt&&n.texStorage2D(t.TEXTURE_CUBE_MAP,ue,He,Re.width,Re.height);for(let $=0;$<6;$++){G=ge[$].mipmaps;for(let de=0;de<G.length;de++){const fe=G[de];E.format!==Bn?De!==null?Ue?I&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+$,de,0,0,fe.width,fe.height,De,fe.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+$,de,He,fe.width,fe.height,0,fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ue?I&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+$,de,0,0,fe.width,fe.height,De,ve,fe.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+$,de,He,fe.width,fe.height,0,De,ve,fe.data)}}}else{if(G=E.mipmaps,Ue&&nt){G.length>0&&ue++;const $=Se(ge[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,ue,He,$.width,$.height)}for(let $=0;$<6;$++)if(ne){Ue?I&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,ge[$].width,ge[$].height,De,ve,ge[$].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,He,ge[$].width,ge[$].height,0,De,ve,ge[$].data);for(let de=0;de<G.length;de++){const Ne=G[de].image[$].image;Ue?I&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+$,de+1,0,0,Ne.width,Ne.height,De,ve,Ne.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+$,de+1,He,Ne.width,Ne.height,0,De,ve,Ne.data)}}else{Ue?I&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,De,ve,ge[$]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,He,De,ve,ge[$]);for(let de=0;de<G.length;de++){const fe=G[de];Ue?I&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+$,de+1,0,0,De,ve,fe.image[$]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+$,de+1,He,De,ve,fe.image[$])}}}m(E)&&u(t.TEXTURE_CUBE_MAP),X.__version=ee.version,E.onUpdate&&E.onUpdate(E)}A.__version=E.version}function he(A,E,k,q,ee,X){const xe=s.convert(k.format,k.colorSpace),ce=s.convert(k.type),Ae=v(k.internalFormat,xe,ce,k.colorSpace),Ce=i.get(E),ne=i.get(k);if(ne.__renderTarget=E,!Ce.__hasExternalTextures){const ge=Math.max(1,E.width>>X),Re=Math.max(1,E.height>>X);ee===t.TEXTURE_3D||ee===t.TEXTURE_2D_ARRAY?n.texImage3D(ee,X,Ae,ge,Re,E.depth,0,xe,ce,null):n.texImage2D(ee,X,Ae,ge,Re,0,xe,ce,null)}n.bindFramebuffer(t.FRAMEBUFFER,A),ze(E)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,q,ee,ne.__webglTexture,0,Ve(E)):(ee===t.TEXTURE_2D||ee>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&ee<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,q,ee,ne.__webglTexture,X),n.bindFramebuffer(t.FRAMEBUFFER,null)}function se(A,E,k){if(t.bindRenderbuffer(t.RENDERBUFFER,A),E.depthBuffer){const q=E.depthTexture,ee=q&&q.isDepthTexture?q.type:null,X=x(E.stencilBuffer,ee),xe=E.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ce=Ve(E);ze(E)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ce,X,E.width,E.height):k?t.renderbufferStorageMultisample(t.RENDERBUFFER,ce,X,E.width,E.height):t.renderbufferStorage(t.RENDERBUFFER,X,E.width,E.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,xe,t.RENDERBUFFER,A)}else{const q=E.textures;for(let ee=0;ee<q.length;ee++){const X=q[ee],xe=s.convert(X.format,X.colorSpace),ce=s.convert(X.type),Ae=v(X.internalFormat,xe,ce,X.colorSpace),Ce=Ve(E);k&&ze(E)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,Ce,Ae,E.width,E.height):ze(E)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Ce,Ae,E.width,E.height):t.renderbufferStorage(t.RENDERBUFFER,Ae,E.width,E.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function Te(A,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,A),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const q=i.get(E.depthTexture);q.__renderTarget=E,(!q.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),Q(E.depthTexture,0);const ee=q.__webglTexture,X=Ve(E);if(E.depthTexture.format===Mo)ze(E)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,ee,0,X):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,ee,0);else if(E.depthTexture.format===wo)ze(E)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,ee,0,X):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,ee,0);else throw new Error("Unknown depthTexture format")}function qe(A){const E=i.get(A),k=A.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==A.depthTexture){const q=A.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),q){const ee=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,q.removeEventListener("dispose",ee)};q.addEventListener("dispose",ee),E.__depthDisposeCallback=ee}E.__boundDepthTexture=q}if(A.depthTexture&&!E.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");const q=A.texture.mipmaps;q&&q.length>0?Te(E.__webglFramebuffer[0],A):Te(E.__webglFramebuffer,A)}else if(k){E.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(n.bindFramebuffer(t.FRAMEBUFFER,E.__webglFramebuffer[q]),E.__webglDepthbuffer[q]===void 0)E.__webglDepthbuffer[q]=t.createRenderbuffer(),se(E.__webglDepthbuffer[q],A,!1);else{const ee=A.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,X=E.__webglDepthbuffer[q];t.bindRenderbuffer(t.RENDERBUFFER,X),t.framebufferRenderbuffer(t.FRAMEBUFFER,ee,t.RENDERBUFFER,X)}}else{const q=A.texture.mipmaps;if(q&&q.length>0?n.bindFramebuffer(t.FRAMEBUFFER,E.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=t.createRenderbuffer(),se(E.__webglDepthbuffer,A,!1);else{const ee=A.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,X=E.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,X),t.framebufferRenderbuffer(t.FRAMEBUFFER,ee,t.RENDERBUFFER,X)}}n.bindFramebuffer(t.FRAMEBUFFER,null)}function be(A,E,k){const q=i.get(A);E!==void 0&&he(q.__webglFramebuffer,A,A.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),k!==void 0&&qe(A)}function gt(A){const E=A.texture,k=i.get(A),q=i.get(E);A.addEventListener("dispose",T);const ee=A.textures,X=A.isWebGLCubeRenderTarget===!0,xe=ee.length>1;if(xe||(q.__webglTexture===void 0&&(q.__webglTexture=t.createTexture()),q.__version=E.version,o.memory.textures++),X){k.__webglFramebuffer=[];for(let ce=0;ce<6;ce++)if(E.mipmaps&&E.mipmaps.length>0){k.__webglFramebuffer[ce]=[];for(let Ae=0;Ae<E.mipmaps.length;Ae++)k.__webglFramebuffer[ce][Ae]=t.createFramebuffer()}else k.__webglFramebuffer[ce]=t.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){k.__webglFramebuffer=[];for(let ce=0;ce<E.mipmaps.length;ce++)k.__webglFramebuffer[ce]=t.createFramebuffer()}else k.__webglFramebuffer=t.createFramebuffer();if(xe)for(let ce=0,Ae=ee.length;ce<Ae;ce++){const Ce=i.get(ee[ce]);Ce.__webglTexture===void 0&&(Ce.__webglTexture=t.createTexture(),o.memory.textures++)}if(A.samples>0&&ze(A)===!1){k.__webglMultisampledFramebuffer=t.createFramebuffer(),k.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let ce=0;ce<ee.length;ce++){const Ae=ee[ce];k.__webglColorRenderbuffer[ce]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,k.__webglColorRenderbuffer[ce]);const Ce=s.convert(Ae.format,Ae.colorSpace),ne=s.convert(Ae.type),ge=v(Ae.internalFormat,Ce,ne,Ae.colorSpace,A.isXRRenderTarget===!0),Re=Ve(A);t.renderbufferStorageMultisample(t.RENDERBUFFER,Re,ge,A.width,A.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ce,t.RENDERBUFFER,k.__webglColorRenderbuffer[ce])}t.bindRenderbuffer(t.RENDERBUFFER,null),A.depthBuffer&&(k.__webglDepthRenderbuffer=t.createRenderbuffer(),se(k.__webglDepthRenderbuffer,A,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(X){n.bindTexture(t.TEXTURE_CUBE_MAP,q.__webglTexture),ye(t.TEXTURE_CUBE_MAP,E);for(let ce=0;ce<6;ce++)if(E.mipmaps&&E.mipmaps.length>0)for(let Ae=0;Ae<E.mipmaps.length;Ae++)he(k.__webglFramebuffer[ce][Ae],A,E,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Ae);else he(k.__webglFramebuffer[ce],A,E,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0);m(E)&&u(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(xe){for(let ce=0,Ae=ee.length;ce<Ae;ce++){const Ce=ee[ce],ne=i.get(Ce);n.bindTexture(t.TEXTURE_2D,ne.__webglTexture),ye(t.TEXTURE_2D,Ce),he(k.__webglFramebuffer,A,Ce,t.COLOR_ATTACHMENT0+ce,t.TEXTURE_2D,0),m(Ce)&&u(t.TEXTURE_2D)}n.unbindTexture()}else{let ce=t.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(ce=A.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(ce,q.__webglTexture),ye(ce,E),E.mipmaps&&E.mipmaps.length>0)for(let Ae=0;Ae<E.mipmaps.length;Ae++)he(k.__webglFramebuffer[Ae],A,E,t.COLOR_ATTACHMENT0,ce,Ae);else he(k.__webglFramebuffer,A,E,t.COLOR_ATTACHMENT0,ce,0);m(E)&&u(ce),n.unbindTexture()}A.depthBuffer&&qe(A)}function ct(A){const E=A.textures;for(let k=0,q=E.length;k<q;k++){const ee=E[k];if(m(ee)){const X=g(A),xe=i.get(ee).__webglTexture;n.bindTexture(X,xe),u(X),n.unbindTexture()}}}const Be=[],L=[];function mn(A){if(A.samples>0){if(ze(A)===!1){const E=A.textures,k=A.width,q=A.height;let ee=t.COLOR_BUFFER_BIT;const X=A.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,xe=i.get(A),ce=E.length>1;if(ce)for(let Ce=0;Ce<E.length;Ce++)n.bindFramebuffer(t.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ce,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,xe.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ce,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,xe.__webglMultisampledFramebuffer);const Ae=A.texture.mipmaps;Ae&&Ae.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,xe.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,xe.__webglFramebuffer);for(let Ce=0;Ce<E.length;Ce++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(ee|=t.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(ee|=t.STENCIL_BUFFER_BIT)),ce){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,xe.__webglColorRenderbuffer[Ce]);const ne=i.get(E[Ce]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,ne,0)}t.blitFramebuffer(0,0,k,q,0,0,k,q,ee,t.NEAREST),l===!0&&(Be.length=0,L.length=0,Be.push(t.COLOR_ATTACHMENT0+Ce),A.depthBuffer&&A.resolveDepthBuffer===!1&&(Be.push(X),L.push(X),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,L)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,Be))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),ce)for(let Ce=0;Ce<E.length;Ce++){n.bindFramebuffer(t.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ce,t.RENDERBUFFER,xe.__webglColorRenderbuffer[Ce]);const ne=i.get(E[Ce]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,xe.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ce,t.TEXTURE_2D,ne,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,xe.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&l){const E=A.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[E])}}}function Ve(A){return Math.min(r.maxSamples,A.samples)}function ze(A){const E=i.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Ee(A){const E=o.render.frame;d.get(A)!==E&&(d.set(A,E),A.update())}function rt(A,E){const k=A.colorSpace,q=A.format,ee=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||k!==Ss&&k!==Ni&&(Ye.getTransfer(k)===tt?(q!==Bn||ee!==_i)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",k)),E}function Se(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=H,this.resetTextureUnits=V,this.setTexture2D=Q,this.setTexture2DArray=Y,this.setTexture3D=J,this.setTextureCube=N,this.rebindTextures=be,this.setupRenderTarget=gt,this.updateRenderTargetMipmap=ct,this.updateMultisampleRenderTarget=mn,this.setupDepthRenderbuffer=qe,this.setupFrameBufferTexture=he,this.useMultisampledRTT=ze}function o2(t,e){function n(i,r=Ni){let s;const o=Ye.getTransfer(r);if(i===_i)return t.UNSIGNED_BYTE;if(i===xd)return t.UNSIGNED_SHORT_4_4_4_4;if(i===yd)return t.UNSIGNED_SHORT_5_5_5_1;if(i===sg)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===ig)return t.BYTE;if(i===rg)return t.SHORT;if(i===So)return t.UNSIGNED_SHORT;if(i===_d)return t.INT;if(i===wr)return t.UNSIGNED_INT;if(i===ui)return t.FLOAT;if(i===Po)return t.HALF_FLOAT;if(i===og)return t.ALPHA;if(i===ag)return t.RGB;if(i===Bn)return t.RGBA;if(i===Mo)return t.DEPTH_COMPONENT;if(i===wo)return t.DEPTH_STENCIL;if(i===lg)return t.RED;if(i===Sd)return t.RED_INTEGER;if(i===cg)return t.RG;if(i===Ed)return t.RG_INTEGER;if(i===Md)return t.RGBA_INTEGER;if(i===Oa||i===ka||i===Ba||i===za)if(o===tt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Oa)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===ka)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Ba)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===za)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Oa)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===ka)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Ba)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===za)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Yu||i===qu||i===$u||i===Ku)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Yu)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===qu)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===$u)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Ku)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Zu||i===Qu||i===Ju)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Zu||i===Qu)return o===tt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Ju)return o===tt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===ef||i===tf||i===nf||i===rf||i===sf||i===of||i===af||i===lf||i===cf||i===uf||i===ff||i===df||i===hf||i===pf)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===ef)return o===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===tf)return o===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===nf)return o===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===rf)return o===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===sf)return o===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===of)return o===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===af)return o===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===lf)return o===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===cf)return o===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===uf)return o===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===ff)return o===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===df)return o===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===hf)return o===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===pf)return o===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Ha||i===mf||i===gf)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Ha)return o===tt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===mf)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===gf)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===ug||i===vf||i===_f||i===xf)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Ha)return s.COMPRESSED_RED_RGTC1_EXT;if(i===vf)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===_f)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===xf)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Eo?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}const a2=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,l2=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class c2{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,i){if(this.texture===null){const r=new nn,s=e.properties.get(r);s.__webglTexture=n.texture,(n.depthNear!==i.depthNear||n.depthFar!==i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new yi({vertexShader:a2,fragmentShader:l2,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new wn(new Ul(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class u2 extends As{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,d=null,h=null,f=null,p=null,_=null;const y=new c2,m=n.getContextAttributes();let u=null,g=null;const v=[],x=[],b=new Qe;let C=null;const T=new En;T.viewport=new _t;const P=new En;P.viewport=new _t;const w=[T,P],S=new Py;let D=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let re=v[W];return re===void 0&&(re=new Nc,v[W]=re),re.getTargetRaySpace()},this.getControllerGrip=function(W){let re=v[W];return re===void 0&&(re=new Nc,v[W]=re),re.getGripSpace()},this.getHand=function(W){let re=v[W];return re===void 0&&(re=new Nc,v[W]=re),re.getHandSpace()};function H(W){const re=x.indexOf(W.inputSource);if(re===-1)return;const he=v[re];he!==void 0&&(he.update(W.inputSource,W.frame,c||o),he.dispatchEvent({type:W.type,data:W.inputSource}))}function K(){r.removeEventListener("select",H),r.removeEventListener("selectstart",H),r.removeEventListener("selectend",H),r.removeEventListener("squeeze",H),r.removeEventListener("squeezestart",H),r.removeEventListener("squeezeend",H),r.removeEventListener("end",K),r.removeEventListener("inputsourceschange",Q);for(let W=0;W<v.length;W++){const re=x[W];re!==null&&(x[W]=null,v[W].disconnect(re))}D=null,V=null,y.reset(),e.setRenderTarget(u),p=null,f=null,h=null,r=null,g=null,Xe.stop(),i.isPresenting=!1,e.setPixelRatio(C),e.setSize(b.width,b.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){s=W,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){a=W,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(W){c=W},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return h},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(W){if(r=W,r!==null){if(u=e.getRenderTarget(),r.addEventListener("select",H),r.addEventListener("selectstart",H),r.addEventListener("selectend",H),r.addEventListener("squeeze",H),r.addEventListener("squeezestart",H),r.addEventListener("squeezeend",H),r.addEventListener("end",K),r.addEventListener("inputsourceschange",Q),m.xrCompatible!==!0&&await n.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(b),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let he=null,se=null,Te=null;m.depth&&(Te=m.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,he=m.stencil?wo:Mo,se=m.stencil?Eo:wr);const qe={colorFormat:n.RGBA8,depthFormat:Te,scaleFactor:s};h=new XRWebGLBinding(r,n),f=h.createProjectionLayer(qe),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),g=new Tr(f.textureWidth,f.textureHeight,{format:Bn,type:_i,depthTexture:new Mg(f.textureWidth,f.textureHeight,se,void 0,void 0,void 0,void 0,void 0,void 0,he),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const he={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,n,he),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),g=new Tr(p.framebufferWidth,p.framebufferHeight,{format:Bn,type:_i,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}g.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),Xe.setContext(r),Xe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function Q(W){for(let re=0;re<W.removed.length;re++){const he=W.removed[re],se=x.indexOf(he);se>=0&&(x[se]=null,v[se].disconnect(he))}for(let re=0;re<W.added.length;re++){const he=W.added[re];let se=x.indexOf(he);if(se===-1){for(let qe=0;qe<v.length;qe++)if(qe>=x.length){x.push(he),se=qe;break}else if(x[qe]===null){x[qe]=he,se=qe;break}if(se===-1)break}const Te=v[se];Te&&Te.connect(he)}}const Y=new O,J=new O;function N(W,re,he){Y.setFromMatrixPosition(re.matrixWorld),J.setFromMatrixPosition(he.matrixWorld);const se=Y.distanceTo(J),Te=re.projectionMatrix.elements,qe=he.projectionMatrix.elements,be=Te[14]/(Te[10]-1),gt=Te[14]/(Te[10]+1),ct=(Te[9]+1)/Te[5],Be=(Te[9]-1)/Te[5],L=(Te[8]-1)/Te[0],mn=(qe[8]+1)/qe[0],Ve=be*L,ze=be*mn,Ee=se/(-L+mn),rt=Ee*-L;if(re.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(rt),W.translateZ(Ee),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert(),Te[10]===-1)W.projectionMatrix.copy(re.projectionMatrix),W.projectionMatrixInverse.copy(re.projectionMatrixInverse);else{const Se=be+Ee,A=gt+Ee,E=Ve-rt,k=ze+(se-rt),q=ct*gt/A*Se,ee=Be*gt/A*Se;W.projectionMatrix.makePerspective(E,k,q,ee,Se,A),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}}function j(W,re){re===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(re.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(r===null)return;let re=W.near,he=W.far;y.texture!==null&&(y.depthNear>0&&(re=y.depthNear),y.depthFar>0&&(he=y.depthFar)),S.near=P.near=T.near=re,S.far=P.far=T.far=he,(D!==S.near||V!==S.far)&&(r.updateRenderState({depthNear:S.near,depthFar:S.far}),D=S.near,V=S.far),T.layers.mask=W.layers.mask|2,P.layers.mask=W.layers.mask|4,S.layers.mask=T.layers.mask|P.layers.mask;const se=W.parent,Te=S.cameras;j(S,se);for(let qe=0;qe<Te.length;qe++)j(Te[qe],se);Te.length===2?N(S,T,P):S.projectionMatrix.copy(T.projectionMatrix),Z(W,S,se)};function Z(W,re,he){he===null?W.matrix.copy(re.matrixWorld):(W.matrix.copy(he.matrixWorld),W.matrix.invert(),W.matrix.multiply(re.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy(re.projectionMatrix),W.projectionMatrixInverse.copy(re.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=yf*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(W){l=W,f!==null&&(f.fixedFoveation=W),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=W)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(S)};let oe=null;function ye(W,re){if(d=re.getViewerPose(c||o),_=re,d!==null){const he=d.views;p!==null&&(e.setRenderTargetFramebuffer(g,p.framebuffer),e.setRenderTarget(g));let se=!1;he.length!==S.cameras.length&&(S.cameras.length=0,se=!0);for(let be=0;be<he.length;be++){const gt=he[be];let ct=null;if(p!==null)ct=p.getViewport(gt);else{const L=h.getViewSubImage(f,gt);ct=L.viewport,be===0&&(e.setRenderTargetTextures(g,L.colorTexture,L.depthStencilTexture),e.setRenderTarget(g))}let Be=w[be];Be===void 0&&(Be=new En,Be.layers.enable(be),Be.viewport=new _t,w[be]=Be),Be.matrix.fromArray(gt.transform.matrix),Be.matrix.decompose(Be.position,Be.quaternion,Be.scale),Be.projectionMatrix.fromArray(gt.projectionMatrix),Be.projectionMatrixInverse.copy(Be.projectionMatrix).invert(),Be.viewport.set(ct.x,ct.y,ct.width,ct.height),be===0&&(S.matrix.copy(Be.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),se===!0&&S.cameras.push(Be)}const Te=r.enabledFeatures;if(Te&&Te.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&h){const be=h.getDepthInformation(he[0]);be&&be.isValid&&be.texture&&y.init(e,be,r.renderState)}}for(let he=0;he<v.length;he++){const se=x[he],Te=v[he];se!==null&&Te!==void 0&&Te.update(se,re,c||o)}oe&&oe(W,re),re.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:re}),_=null}const Xe=new wg;Xe.setAnimationLoop(ye),this.setAnimationLoop=function(W){oe=W},this.dispose=function(){}}}const sr=new xi,f2=new xt;function d2(t,e){function n(m,u){m.matrixAutoUpdate===!0&&m.updateMatrix(),u.value.copy(m.matrix)}function i(m,u){u.color.getRGB(m.fogColor.value,xg(t)),u.isFog?(m.fogNear.value=u.near,m.fogFar.value=u.far):u.isFogExp2&&(m.fogDensity.value=u.density)}function r(m,u,g,v,x){u.isMeshBasicMaterial||u.isMeshLambertMaterial?s(m,u):u.isMeshToonMaterial?(s(m,u),h(m,u)):u.isMeshPhongMaterial?(s(m,u),d(m,u)):u.isMeshStandardMaterial?(s(m,u),f(m,u),u.isMeshPhysicalMaterial&&p(m,u,x)):u.isMeshMatcapMaterial?(s(m,u),_(m,u)):u.isMeshDepthMaterial?s(m,u):u.isMeshDistanceMaterial?(s(m,u),y(m,u)):u.isMeshNormalMaterial?s(m,u):u.isLineBasicMaterial?(o(m,u),u.isLineDashedMaterial&&a(m,u)):u.isPointsMaterial?l(m,u,g,v):u.isSpriteMaterial?c(m,u):u.isShadowMaterial?(m.color.value.copy(u.color),m.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function s(m,u){m.opacity.value=u.opacity,u.color&&m.diffuse.value.copy(u.color),u.emissive&&m.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(m.map.value=u.map,n(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,n(u.alphaMap,m.alphaMapTransform)),u.bumpMap&&(m.bumpMap.value=u.bumpMap,n(u.bumpMap,m.bumpMapTransform),m.bumpScale.value=u.bumpScale,u.side===tn&&(m.bumpScale.value*=-1)),u.normalMap&&(m.normalMap.value=u.normalMap,n(u.normalMap,m.normalMapTransform),m.normalScale.value.copy(u.normalScale),u.side===tn&&m.normalScale.value.negate()),u.displacementMap&&(m.displacementMap.value=u.displacementMap,n(u.displacementMap,m.displacementMapTransform),m.displacementScale.value=u.displacementScale,m.displacementBias.value=u.displacementBias),u.emissiveMap&&(m.emissiveMap.value=u.emissiveMap,n(u.emissiveMap,m.emissiveMapTransform)),u.specularMap&&(m.specularMap.value=u.specularMap,n(u.specularMap,m.specularMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest);const g=e.get(u),v=g.envMap,x=g.envMapRotation;v&&(m.envMap.value=v,sr.copy(x),sr.x*=-1,sr.y*=-1,sr.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(sr.y*=-1,sr.z*=-1),m.envMapRotation.value.setFromMatrix4(f2.makeRotationFromEuler(sr)),m.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=u.reflectivity,m.ior.value=u.ior,m.refractionRatio.value=u.refractionRatio),u.lightMap&&(m.lightMap.value=u.lightMap,m.lightMapIntensity.value=u.lightMapIntensity,n(u.lightMap,m.lightMapTransform)),u.aoMap&&(m.aoMap.value=u.aoMap,m.aoMapIntensity.value=u.aoMapIntensity,n(u.aoMap,m.aoMapTransform))}function o(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,u.map&&(m.map.value=u.map,n(u.map,m.mapTransform))}function a(m,u){m.dashSize.value=u.dashSize,m.totalSize.value=u.dashSize+u.gapSize,m.scale.value=u.scale}function l(m,u,g,v){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.size.value=u.size*g,m.scale.value=v*.5,u.map&&(m.map.value=u.map,n(u.map,m.uvTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,n(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function c(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.rotation.value=u.rotation,u.map&&(m.map.value=u.map,n(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,n(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function d(m,u){m.specular.value.copy(u.specular),m.shininess.value=Math.max(u.shininess,1e-4)}function h(m,u){u.gradientMap&&(m.gradientMap.value=u.gradientMap)}function f(m,u){m.metalness.value=u.metalness,u.metalnessMap&&(m.metalnessMap.value=u.metalnessMap,n(u.metalnessMap,m.metalnessMapTransform)),m.roughness.value=u.roughness,u.roughnessMap&&(m.roughnessMap.value=u.roughnessMap,n(u.roughnessMap,m.roughnessMapTransform)),u.envMap&&(m.envMapIntensity.value=u.envMapIntensity)}function p(m,u,g){m.ior.value=u.ior,u.sheen>0&&(m.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),m.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(m.sheenColorMap.value=u.sheenColorMap,n(u.sheenColorMap,m.sheenColorMapTransform)),u.sheenRoughnessMap&&(m.sheenRoughnessMap.value=u.sheenRoughnessMap,n(u.sheenRoughnessMap,m.sheenRoughnessMapTransform))),u.clearcoat>0&&(m.clearcoat.value=u.clearcoat,m.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(m.clearcoatMap.value=u.clearcoatMap,n(u.clearcoatMap,m.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,n(u.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(m.clearcoatNormalMap.value=u.clearcoatNormalMap,n(u.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===tn&&m.clearcoatNormalScale.value.negate())),u.dispersion>0&&(m.dispersion.value=u.dispersion),u.iridescence>0&&(m.iridescence.value=u.iridescence,m.iridescenceIOR.value=u.iridescenceIOR,m.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(m.iridescenceMap.value=u.iridescenceMap,n(u.iridescenceMap,m.iridescenceMapTransform)),u.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=u.iridescenceThicknessMap,n(u.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),u.transmission>0&&(m.transmission.value=u.transmission,m.transmissionSamplerMap.value=g.texture,m.transmissionSamplerSize.value.set(g.width,g.height),u.transmissionMap&&(m.transmissionMap.value=u.transmissionMap,n(u.transmissionMap,m.transmissionMapTransform)),m.thickness.value=u.thickness,u.thicknessMap&&(m.thicknessMap.value=u.thicknessMap,n(u.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=u.attenuationDistance,m.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(m.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(m.anisotropyMap.value=u.anisotropyMap,n(u.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=u.specularIntensity,m.specularColor.value.copy(u.specularColor),u.specularColorMap&&(m.specularColorMap.value=u.specularColorMap,n(u.specularColorMap,m.specularColorMapTransform)),u.specularIntensityMap&&(m.specularIntensityMap.value=u.specularIntensityMap,n(u.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,u){u.matcap&&(m.matcap.value=u.matcap)}function y(m,u){const g=e.get(u).light;m.referencePosition.value.setFromMatrixPosition(g.matrixWorld),m.nearDistance.value=g.shadow.camera.near,m.farDistance.value=g.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function h2(t,e,n,i){let r={},s={},o=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(g,v){const x=v.program;i.uniformBlockBinding(g,x)}function c(g,v){let x=r[g.id];x===void 0&&(_(g),x=d(g),r[g.id]=x,g.addEventListener("dispose",m));const b=v.program;i.updateUBOMapping(g,b);const C=e.render.frame;s[g.id]!==C&&(f(g),s[g.id]=C)}function d(g){const v=h();g.__bindingPointIndex=v;const x=t.createBuffer(),b=g.__size,C=g.usage;return t.bindBuffer(t.UNIFORM_BUFFER,x),t.bufferData(t.UNIFORM_BUFFER,b,C),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,v,x),x}function h(){for(let g=0;g<a;g++)if(o.indexOf(g)===-1)return o.push(g),g;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(g){const v=r[g.id],x=g.uniforms,b=g.__cache;t.bindBuffer(t.UNIFORM_BUFFER,v);for(let C=0,T=x.length;C<T;C++){const P=Array.isArray(x[C])?x[C]:[x[C]];for(let w=0,S=P.length;w<S;w++){const D=P[w];if(p(D,C,w,b)===!0){const V=D.__offset,H=Array.isArray(D.value)?D.value:[D.value];let K=0;for(let Q=0;Q<H.length;Q++){const Y=H[Q],J=y(Y);typeof Y=="number"||typeof Y=="boolean"?(D.__data[0]=Y,t.bufferSubData(t.UNIFORM_BUFFER,V+K,D.__data)):Y.isMatrix3?(D.__data[0]=Y.elements[0],D.__data[1]=Y.elements[1],D.__data[2]=Y.elements[2],D.__data[3]=0,D.__data[4]=Y.elements[3],D.__data[5]=Y.elements[4],D.__data[6]=Y.elements[5],D.__data[7]=0,D.__data[8]=Y.elements[6],D.__data[9]=Y.elements[7],D.__data[10]=Y.elements[8],D.__data[11]=0):(Y.toArray(D.__data,K),K+=J.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,V,D.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(g,v,x,b){const C=g.value,T=v+"_"+x;if(b[T]===void 0)return typeof C=="number"||typeof C=="boolean"?b[T]=C:b[T]=C.clone(),!0;{const P=b[T];if(typeof C=="number"||typeof C=="boolean"){if(P!==C)return b[T]=C,!0}else if(P.equals(C)===!1)return P.copy(C),!0}return!1}function _(g){const v=g.uniforms;let x=0;const b=16;for(let T=0,P=v.length;T<P;T++){const w=Array.isArray(v[T])?v[T]:[v[T]];for(let S=0,D=w.length;S<D;S++){const V=w[S],H=Array.isArray(V.value)?V.value:[V.value];for(let K=0,Q=H.length;K<Q;K++){const Y=H[K],J=y(Y),N=x%b,j=N%J.boundary,Z=N+j;x+=j,Z!==0&&b-Z<J.storage&&(x+=b-Z),V.__data=new Float32Array(J.storage/Float32Array.BYTES_PER_ELEMENT),V.__offset=x,x+=J.storage}}}const C=x%b;return C>0&&(x+=b-C),g.__size=x,g.__cache={},this}function y(g){const v={boundary:0,storage:0};return typeof g=="number"||typeof g=="boolean"?(v.boundary=4,v.storage=4):g.isVector2?(v.boundary=8,v.storage=8):g.isVector3||g.isColor?(v.boundary=16,v.storage=12):g.isVector4?(v.boundary=16,v.storage=16):g.isMatrix3?(v.boundary=48,v.storage=48):g.isMatrix4?(v.boundary=64,v.storage=64):g.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",g),v}function m(g){const v=g.target;v.removeEventListener("dispose",m);const x=o.indexOf(v.__bindingPointIndex);o.splice(x,1),t.deleteBuffer(r[v.id]),delete r[v.id],delete s[v.id]}function u(){for(const g in r)t.deleteBuffer(r[g]);o=[],r={},s={}}return{bind:l,update:c,dispose:u}}class p2{constructor(e={}){const{canvas:n=jx(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=o;const _=new Uint32Array(4),y=new Int32Array(4);let m=null,u=null;const g=[],v=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Xi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const x=this;let b=!1;this._outputColorSpace=xn;let C=0,T=0,P=null,w=-1,S=null;const D=new _t,V=new _t;let H=null;const K=new Ze(0);let Q=0,Y=n.width,J=n.height,N=1,j=null,Z=null;const oe=new _t(0,0,Y,J),ye=new _t(0,0,Y,J);let Xe=!1;const W=new Eg;let re=!1,he=!1;const se=new xt,Te=new xt,qe=new O,be=new _t,gt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ct=!1;function Be(){return P===null?N:1}let L=i;function mn(M,U){return n.getContext(M,U)}try{const M={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:h};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${vd}`),n.addEventListener("webglcontextlost",$,!1),n.addEventListener("webglcontextrestored",de,!1),n.addEventListener("webglcontextcreationerror",fe,!1),L===null){const U="webgl2";if(L=mn(U,M),L===null)throw mn(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(M){throw console.error("THREE.WebGLRenderer: "+M.message),M}let Ve,ze,Ee,rt,Se,A,E,k,q,ee,X,xe,ce,Ae,Ce,ne,ge,Re,De,ve,He,Ue,nt,I;function ue(){Ve=new wE(L),Ve.init(),Ue=new o2(L,Ve),ze=new vE(L,Ve,e,Ue),Ee=new r2(L,Ve),ze.reverseDepthBuffer&&f&&Ee.buffers.depth.setReversed(!0),rt=new CE(L),Se=new XM,A=new s2(L,Ve,Ee,Se,ze,Ue,rt),E=new xE(x),k=new ME(x),q=new Ny(L),nt=new mE(L,q),ee=new TE(L,q,rt,nt),X=new bE(L,ee,q,rt),De=new RE(L,ze,A),ne=new _E(Se),xe=new WM(x,E,k,Ve,ze,nt,ne),ce=new d2(x,Se),Ae=new YM,Ce=new JM(Ve),Re=new pE(x,E,k,Ee,X,p,l),ge=new n2(x,X,ze),I=new h2(L,rt,ze,Ee),ve=new gE(L,Ve,rt),He=new AE(L,Ve,rt),rt.programs=xe.programs,x.capabilities=ze,x.extensions=Ve,x.properties=Se,x.renderLists=Ae,x.shadowMap=ge,x.state=Ee,x.info=rt}ue();const G=new u2(x,L);this.xr=G,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const M=Ve.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=Ve.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return N},this.setPixelRatio=function(M){M!==void 0&&(N=M,this.setSize(Y,J,!1))},this.getSize=function(M){return M.set(Y,J)},this.setSize=function(M,U,B=!0){if(G.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Y=M,J=U,n.width=Math.floor(M*N),n.height=Math.floor(U*N),B===!0&&(n.style.width=M+"px",n.style.height=U+"px"),this.setViewport(0,0,M,U)},this.getDrawingBufferSize=function(M){return M.set(Y*N,J*N).floor()},this.setDrawingBufferSize=function(M,U,B){Y=M,J=U,N=B,n.width=Math.floor(M*B),n.height=Math.floor(U*B),this.setViewport(0,0,M,U)},this.getCurrentViewport=function(M){return M.copy(D)},this.getViewport=function(M){return M.copy(oe)},this.setViewport=function(M,U,B,z){M.isVector4?oe.set(M.x,M.y,M.z,M.w):oe.set(M,U,B,z),Ee.viewport(D.copy(oe).multiplyScalar(N).round())},this.getScissor=function(M){return M.copy(ye)},this.setScissor=function(M,U,B,z){M.isVector4?ye.set(M.x,M.y,M.z,M.w):ye.set(M,U,B,z),Ee.scissor(V.copy(ye).multiplyScalar(N).round())},this.getScissorTest=function(){return Xe},this.setScissorTest=function(M){Ee.setScissorTest(Xe=M)},this.setOpaqueSort=function(M){j=M},this.setTransparentSort=function(M){Z=M},this.getClearColor=function(M){return M.copy(Re.getClearColor())},this.setClearColor=function(){Re.setClearColor(...arguments)},this.getClearAlpha=function(){return Re.getClearAlpha()},this.setClearAlpha=function(){Re.setClearAlpha(...arguments)},this.clear=function(M=!0,U=!0,B=!0){let z=0;if(M){let F=!1;if(P!==null){const ie=P.texture.format;F=ie===Md||ie===Ed||ie===Sd}if(F){const ie=P.texture.type,le=ie===_i||ie===wr||ie===So||ie===Eo||ie===xd||ie===yd,me=Re.getClearColor(),_e=Re.getClearAlpha(),Le=me.r,Pe=me.g,Me=me.b;le?(_[0]=Le,_[1]=Pe,_[2]=Me,_[3]=_e,L.clearBufferuiv(L.COLOR,0,_)):(y[0]=Le,y[1]=Pe,y[2]=Me,y[3]=_e,L.clearBufferiv(L.COLOR,0,y))}else z|=L.COLOR_BUFFER_BIT}U&&(z|=L.DEPTH_BUFFER_BIT),B&&(z|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",$,!1),n.removeEventListener("webglcontextrestored",de,!1),n.removeEventListener("webglcontextcreationerror",fe,!1),Re.dispose(),Ae.dispose(),Ce.dispose(),Se.dispose(),E.dispose(),k.dispose(),X.dispose(),nt.dispose(),I.dispose(),xe.dispose(),G.dispose(),G.removeEventListener("sessionstart",bd),G.removeEventListener("sessionend",Pd),Qi.stop()};function $(M){M.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),b=!0}function de(){console.log("THREE.WebGLRenderer: Context Restored."),b=!1;const M=rt.autoReset,U=ge.enabled,B=ge.autoUpdate,z=ge.needsUpdate,F=ge.type;ue(),rt.autoReset=M,ge.enabled=U,ge.autoUpdate=B,ge.needsUpdate=z,ge.type=F}function fe(M){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function Ne(M){const U=M.target;U.removeEventListener("dispose",Ne),ht(U)}function ht(M){It(M),Se.remove(M)}function It(M){const U=Se.get(M).programs;U!==void 0&&(U.forEach(function(B){xe.releaseProgram(B)}),M.isShaderMaterial&&xe.releaseShaderCache(M))}this.renderBufferDirect=function(M,U,B,z,F,ie){U===null&&(U=gt);const le=F.isMesh&&F.matrixWorld.determinant()<0,me=bg(M,U,B,z,F);Ee.setMaterial(z,le);let _e=B.index,Le=1;if(z.wireframe===!0){if(_e=ee.getWireframeAttribute(B),_e===void 0)return;Le=2}const Pe=B.drawRange,Me=B.attributes.position;let Ge=Pe.start*Le,$e=(Pe.start+Pe.count)*Le;ie!==null&&(Ge=Math.max(Ge,ie.start*Le),$e=Math.min($e,(ie.start+ie.count)*Le)),_e!==null?(Ge=Math.max(Ge,0),$e=Math.min($e,_e.count)):Me!=null&&(Ge=Math.max(Ge,0),$e=Math.min($e,Me.count));const yt=$e-Ge;if(yt<0||yt===1/0)return;nt.setup(F,z,me,B,_e);let pt,je=ve;if(_e!==null&&(pt=q.get(_e),je=He,je.setIndex(pt)),F.isMesh)z.wireframe===!0?(Ee.setLineWidth(z.wireframeLinewidth*Be()),je.setMode(L.LINES)):je.setMode(L.TRIANGLES);else if(F.isLine){let we=z.linewidth;we===void 0&&(we=1),Ee.setLineWidth(we*Be()),F.isLineSegments?je.setMode(L.LINES):F.isLineLoop?je.setMode(L.LINE_LOOP):je.setMode(L.LINE_STRIP)}else F.isPoints?je.setMode(L.POINTS):F.isSprite&&je.setMode(L.TRIANGLES);if(F.isBatchedMesh)if(F._multiDrawInstances!==null)Va("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),je.renderMultiDrawInstances(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount,F._multiDrawInstances);else if(Ve.get("WEBGL_multi_draw"))je.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else{const we=F._multiDrawStarts,Pt=F._multiDrawCounts,Ke=F._multiDrawCount,Pn=_e?q.get(_e).bytesPerElement:1,Rr=Se.get(z).currentProgram.getUniforms();for(let rn=0;rn<Ke;rn++)Rr.setValue(L,"_gl_DrawID",rn),je.render(we[rn]/Pn,Pt[rn])}else if(F.isInstancedMesh)je.renderInstances(Ge,yt,F.count);else if(B.isInstancedBufferGeometry){const we=B._maxInstanceCount!==void 0?B._maxInstanceCount:1/0,Pt=Math.min(B.instanceCount,we);je.renderInstances(Ge,yt,Pt)}else je.render(Ge,yt)};function Je(M,U,B){M.transparent===!0&&M.side===ai&&M.forceSinglePass===!1?(M.side=tn,M.needsUpdate=!0,Oo(M,U,B),M.side=qi,M.needsUpdate=!0,Oo(M,U,B),M.side=ai):Oo(M,U,B)}this.compile=function(M,U,B=null){B===null&&(B=M),u=Ce.get(B),u.init(U),v.push(u),B.traverseVisible(function(F){F.isLight&&F.layers.test(U.layers)&&(u.pushLight(F),F.castShadow&&u.pushShadow(F))}),M!==B&&M.traverseVisible(function(F){F.isLight&&F.layers.test(U.layers)&&(u.pushLight(F),F.castShadow&&u.pushShadow(F))}),u.setupLights();const z=new Set;return M.traverse(function(F){if(!(F.isMesh||F.isPoints||F.isLine||F.isSprite))return;const ie=F.material;if(ie)if(Array.isArray(ie))for(let le=0;le<ie.length;le++){const me=ie[le];Je(me,B,F),z.add(me)}else Je(ie,B,F),z.add(ie)}),u=v.pop(),z},this.compileAsync=function(M,U,B=null){const z=this.compile(M,U,B);return new Promise(F=>{function ie(){if(z.forEach(function(le){Se.get(le).currentProgram.isReady()&&z.delete(le)}),z.size===0){F(M);return}setTimeout(ie,10)}Ve.get("KHR_parallel_shader_compile")!==null?ie():setTimeout(ie,10)})};let bn=null;function Qn(M){bn&&bn(M)}function bd(){Qi.stop()}function Pd(){Qi.start()}const Qi=new wg;Qi.setAnimationLoop(Qn),typeof self<"u"&&Qi.setContext(self),this.setAnimationLoop=function(M){bn=M,G.setAnimationLoop(M),M===null?Qi.stop():Qi.start()},G.addEventListener("sessionstart",bd),G.addEventListener("sessionend",Pd),this.render=function(M,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),G.enabled===!0&&G.isPresenting===!0&&(G.cameraAutoUpdate===!0&&G.updateCamera(U),U=G.getCamera()),M.isScene===!0&&M.onBeforeRender(x,M,U,P),u=Ce.get(M,v.length),u.init(U),v.push(u),Te.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),W.setFromProjectionMatrix(Te),he=this.localClippingEnabled,re=ne.init(this.clippingPlanes,he),m=Ae.get(M,g.length),m.init(),g.push(m),G.enabled===!0&&G.isPresenting===!0){const ie=x.xr.getDepthSensingMesh();ie!==null&&Ol(ie,U,-1/0,x.sortObjects)}Ol(M,U,0,x.sortObjects),m.finish(),x.sortObjects===!0&&m.sort(j,Z),ct=G.enabled===!1||G.isPresenting===!1||G.hasDepthSensing()===!1,ct&&Re.addToRenderList(m,M),this.info.render.frame++,re===!0&&ne.beginShadows();const B=u.state.shadowsArray;ge.render(B,M,U),re===!0&&ne.endShadows(),this.info.autoReset===!0&&this.info.reset();const z=m.opaque,F=m.transmissive;if(u.setupLights(),U.isArrayCamera){const ie=U.cameras;if(F.length>0)for(let le=0,me=ie.length;le<me;le++){const _e=ie[le];Ld(z,F,M,_e)}ct&&Re.render(M);for(let le=0,me=ie.length;le<me;le++){const _e=ie[le];Dd(m,M,_e,_e.viewport)}}else F.length>0&&Ld(z,F,M,U),ct&&Re.render(M),Dd(m,M,U);P!==null&&T===0&&(A.updateMultisampleRenderTarget(P),A.updateRenderTargetMipmap(P)),M.isScene===!0&&M.onAfterRender(x,M,U),nt.resetDefaultState(),w=-1,S=null,v.pop(),v.length>0?(u=v[v.length-1],re===!0&&ne.setGlobalState(x.clippingPlanes,u.state.camera)):u=null,g.pop(),g.length>0?m=g[g.length-1]:m=null};function Ol(M,U,B,z){if(M.visible===!1)return;if(M.layers.test(U.layers)){if(M.isGroup)B=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(U);else if(M.isLight)u.pushLight(M),M.castShadow&&u.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||W.intersectsSprite(M)){z&&be.setFromMatrixPosition(M.matrixWorld).applyMatrix4(Te);const le=X.update(M),me=M.material;me.visible&&m.push(M,le,me,B,be.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||W.intersectsObject(M))){const le=X.update(M),me=M.material;if(z&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),be.copy(M.boundingSphere.center)):(le.boundingSphere===null&&le.computeBoundingSphere(),be.copy(le.boundingSphere.center)),be.applyMatrix4(M.matrixWorld).applyMatrix4(Te)),Array.isArray(me)){const _e=le.groups;for(let Le=0,Pe=_e.length;Le<Pe;Le++){const Me=_e[Le],Ge=me[Me.materialIndex];Ge&&Ge.visible&&m.push(M,le,Ge,B,be.z,Me)}}else me.visible&&m.push(M,le,me,B,be.z,null)}}const ie=M.children;for(let le=0,me=ie.length;le<me;le++)Ol(ie[le],U,B,z)}function Dd(M,U,B,z){const F=M.opaque,ie=M.transmissive,le=M.transparent;u.setupLightsView(B),re===!0&&ne.setGlobalState(x.clippingPlanes,B),z&&Ee.viewport(D.copy(z)),F.length>0&&Fo(F,U,B),ie.length>0&&Fo(ie,U,B),le.length>0&&Fo(le,U,B),Ee.buffers.depth.setTest(!0),Ee.buffers.depth.setMask(!0),Ee.buffers.color.setMask(!0),Ee.setPolygonOffset(!1)}function Ld(M,U,B,z){if((B.isScene===!0?B.overrideMaterial:null)!==null)return;u.state.transmissionRenderTarget[z.id]===void 0&&(u.state.transmissionRenderTarget[z.id]=new Tr(1,1,{generateMipmaps:!0,type:Ve.has("EXT_color_buffer_half_float")||Ve.has("EXT_color_buffer_float")?Po:_i,minFilter:gr,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ye.workingColorSpace}));const ie=u.state.transmissionRenderTarget[z.id],le=z.viewport||D;ie.setSize(le.z*x.transmissionResolutionScale,le.w*x.transmissionResolutionScale);const me=x.getRenderTarget();x.setRenderTarget(ie),x.getClearColor(K),Q=x.getClearAlpha(),Q<1&&x.setClearColor(16777215,.5),x.clear(),ct&&Re.render(B);const _e=x.toneMapping;x.toneMapping=Xi;const Le=z.viewport;if(z.viewport!==void 0&&(z.viewport=void 0),u.setupLightsView(z),re===!0&&ne.setGlobalState(x.clippingPlanes,z),Fo(M,B,z),A.updateMultisampleRenderTarget(ie),A.updateRenderTargetMipmap(ie),Ve.has("WEBGL_multisampled_render_to_texture")===!1){let Pe=!1;for(let Me=0,Ge=U.length;Me<Ge;Me++){const $e=U[Me],yt=$e.object,pt=$e.geometry,je=$e.material,we=$e.group;if(je.side===ai&&yt.layers.test(z.layers)){const Pt=je.side;je.side=tn,je.needsUpdate=!0,Nd(yt,B,z,pt,je,we),je.side=Pt,je.needsUpdate=!0,Pe=!0}}Pe===!0&&(A.updateMultisampleRenderTarget(ie),A.updateRenderTargetMipmap(ie))}x.setRenderTarget(me),x.setClearColor(K,Q),Le!==void 0&&(z.viewport=Le),x.toneMapping=_e}function Fo(M,U,B){const z=U.isScene===!0?U.overrideMaterial:null;for(let F=0,ie=M.length;F<ie;F++){const le=M[F],me=le.object,_e=le.geometry,Le=le.group;let Pe=le.material;Pe.allowOverride===!0&&z!==null&&(Pe=z),me.layers.test(B.layers)&&Nd(me,U,B,_e,Pe,Le)}}function Nd(M,U,B,z,F,ie){M.onBeforeRender(x,U,B,z,F,ie),M.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),F.onBeforeRender(x,U,B,z,M,ie),F.transparent===!0&&F.side===ai&&F.forceSinglePass===!1?(F.side=tn,F.needsUpdate=!0,x.renderBufferDirect(B,U,z,F,M,ie),F.side=qi,F.needsUpdate=!0,x.renderBufferDirect(B,U,z,F,M,ie),F.side=ai):x.renderBufferDirect(B,U,z,F,M,ie),M.onAfterRender(x,U,B,z,F,ie)}function Oo(M,U,B){U.isScene!==!0&&(U=gt);const z=Se.get(M),F=u.state.lights,ie=u.state.shadowsArray,le=F.state.version,me=xe.getParameters(M,F.state,ie,U,B),_e=xe.getProgramCacheKey(me);let Le=z.programs;z.environment=M.isMeshStandardMaterial?U.environment:null,z.fog=U.fog,z.envMap=(M.isMeshStandardMaterial?k:E).get(M.envMap||z.environment),z.envMapRotation=z.environment!==null&&M.envMap===null?U.environmentRotation:M.envMapRotation,Le===void 0&&(M.addEventListener("dispose",Ne),Le=new Map,z.programs=Le);let Pe=Le.get(_e);if(Pe!==void 0){if(z.currentProgram===Pe&&z.lightsStateVersion===le)return Ud(M,me),Pe}else me.uniforms=xe.getUniforms(M),M.onBeforeCompile(me,x),Pe=xe.acquireProgram(me,_e),Le.set(_e,Pe),z.uniforms=me.uniforms;const Me=z.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Me.clippingPlanes=ne.uniform),Ud(M,me),z.needsLights=Dg(M),z.lightsStateVersion=le,z.needsLights&&(Me.ambientLightColor.value=F.state.ambient,Me.lightProbe.value=F.state.probe,Me.directionalLights.value=F.state.directional,Me.directionalLightShadows.value=F.state.directionalShadow,Me.spotLights.value=F.state.spot,Me.spotLightShadows.value=F.state.spotShadow,Me.rectAreaLights.value=F.state.rectArea,Me.ltc_1.value=F.state.rectAreaLTC1,Me.ltc_2.value=F.state.rectAreaLTC2,Me.pointLights.value=F.state.point,Me.pointLightShadows.value=F.state.pointShadow,Me.hemisphereLights.value=F.state.hemi,Me.directionalShadowMap.value=F.state.directionalShadowMap,Me.directionalShadowMatrix.value=F.state.directionalShadowMatrix,Me.spotShadowMap.value=F.state.spotShadowMap,Me.spotLightMatrix.value=F.state.spotLightMatrix,Me.spotLightMap.value=F.state.spotLightMap,Me.pointShadowMap.value=F.state.pointShadowMap,Me.pointShadowMatrix.value=F.state.pointShadowMatrix),z.currentProgram=Pe,z.uniformsList=null,Pe}function Id(M){if(M.uniformsList===null){const U=M.currentProgram.getUniforms();M.uniformsList=Ga.seqWithValue(U.seq,M.uniforms)}return M.uniformsList}function Ud(M,U){const B=Se.get(M);B.outputColorSpace=U.outputColorSpace,B.batching=U.batching,B.batchingColor=U.batchingColor,B.instancing=U.instancing,B.instancingColor=U.instancingColor,B.instancingMorph=U.instancingMorph,B.skinning=U.skinning,B.morphTargets=U.morphTargets,B.morphNormals=U.morphNormals,B.morphColors=U.morphColors,B.morphTargetsCount=U.morphTargetsCount,B.numClippingPlanes=U.numClippingPlanes,B.numIntersection=U.numClipIntersection,B.vertexAlphas=U.vertexAlphas,B.vertexTangents=U.vertexTangents,B.toneMapping=U.toneMapping}function bg(M,U,B,z,F){U.isScene!==!0&&(U=gt),A.resetTextureUnits();const ie=U.fog,le=z.isMeshStandardMaterial?U.environment:null,me=P===null?x.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:Ss,_e=(z.isMeshStandardMaterial?k:E).get(z.envMap||le),Le=z.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,Pe=!!B.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),Me=!!B.morphAttributes.position,Ge=!!B.morphAttributes.normal,$e=!!B.morphAttributes.color;let yt=Xi;z.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(yt=x.toneMapping);const pt=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,je=pt!==void 0?pt.length:0,we=Se.get(z),Pt=u.state.lights;if(re===!0&&(he===!0||M!==S)){const Ht=M===S&&z.id===w;ne.setState(z,M,Ht)}let Ke=!1;z.version===we.__version?(we.needsLights&&we.lightsStateVersion!==Pt.state.version||we.outputColorSpace!==me||F.isBatchedMesh&&we.batching===!1||!F.isBatchedMesh&&we.batching===!0||F.isBatchedMesh&&we.batchingColor===!0&&F.colorTexture===null||F.isBatchedMesh&&we.batchingColor===!1&&F.colorTexture!==null||F.isInstancedMesh&&we.instancing===!1||!F.isInstancedMesh&&we.instancing===!0||F.isSkinnedMesh&&we.skinning===!1||!F.isSkinnedMesh&&we.skinning===!0||F.isInstancedMesh&&we.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&we.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&we.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&we.instancingMorph===!1&&F.morphTexture!==null||we.envMap!==_e||z.fog===!0&&we.fog!==ie||we.numClippingPlanes!==void 0&&(we.numClippingPlanes!==ne.numPlanes||we.numIntersection!==ne.numIntersection)||we.vertexAlphas!==Le||we.vertexTangents!==Pe||we.morphTargets!==Me||we.morphNormals!==Ge||we.morphColors!==$e||we.toneMapping!==yt||we.morphTargetsCount!==je)&&(Ke=!0):(Ke=!0,we.__version=z.version);let Pn=we.currentProgram;Ke===!0&&(Pn=Oo(z,U,F));let Rr=!1,rn=!1,Rs=!1;const at=Pn.getUniforms(),gn=we.uniforms;if(Ee.useProgram(Pn.program)&&(Rr=!0,rn=!0,Rs=!0),z.id!==w&&(w=z.id,rn=!0),Rr||S!==M){Ee.buffers.depth.getReversed()?(se.copy(M.projectionMatrix),qx(se),$x(se),at.setValue(L,"projectionMatrix",se)):at.setValue(L,"projectionMatrix",M.projectionMatrix),at.setValue(L,"viewMatrix",M.matrixWorldInverse);const qt=at.map.cameraPosition;qt!==void 0&&qt.setValue(L,qe.setFromMatrixPosition(M.matrixWorld)),ze.logarithmicDepthBuffer&&at.setValue(L,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&at.setValue(L,"isOrthographic",M.isOrthographicCamera===!0),S!==M&&(S=M,rn=!0,Rs=!0)}if(F.isSkinnedMesh){at.setOptional(L,F,"bindMatrix"),at.setOptional(L,F,"bindMatrixInverse");const Ht=F.skeleton;Ht&&(Ht.boneTexture===null&&Ht.computeBoneTexture(),at.setValue(L,"boneTexture",Ht.boneTexture,A))}F.isBatchedMesh&&(at.setOptional(L,F,"batchingTexture"),at.setValue(L,"batchingTexture",F._matricesTexture,A),at.setOptional(L,F,"batchingIdTexture"),at.setValue(L,"batchingIdTexture",F._indirectTexture,A),at.setOptional(L,F,"batchingColorTexture"),F._colorsTexture!==null&&at.setValue(L,"batchingColorTexture",F._colorsTexture,A));const vn=B.morphAttributes;if((vn.position!==void 0||vn.normal!==void 0||vn.color!==void 0)&&De.update(F,B,Pn),(rn||we.receiveShadow!==F.receiveShadow)&&(we.receiveShadow=F.receiveShadow,at.setValue(L,"receiveShadow",F.receiveShadow)),z.isMeshGouraudMaterial&&z.envMap!==null&&(gn.envMap.value=_e,gn.flipEnvMap.value=_e.isCubeTexture&&_e.isRenderTargetTexture===!1?-1:1),z.isMeshStandardMaterial&&z.envMap===null&&U.environment!==null&&(gn.envMapIntensity.value=U.environmentIntensity),rn&&(at.setValue(L,"toneMappingExposure",x.toneMappingExposure),we.needsLights&&Pg(gn,Rs),ie&&z.fog===!0&&ce.refreshFogUniforms(gn,ie),ce.refreshMaterialUniforms(gn,z,N,J,u.state.transmissionRenderTarget[M.id]),Ga.upload(L,Id(we),gn,A)),z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(Ga.upload(L,Id(we),gn,A),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&at.setValue(L,"center",F.center),at.setValue(L,"modelViewMatrix",F.modelViewMatrix),at.setValue(L,"normalMatrix",F.normalMatrix),at.setValue(L,"modelMatrix",F.matrixWorld),z.isShaderMaterial||z.isRawShaderMaterial){const Ht=z.uniformsGroups;for(let qt=0,kl=Ht.length;qt<kl;qt++){const Ji=Ht[qt];I.update(Ji,Pn),I.bind(Ji,Pn)}}return Pn}function Pg(M,U){M.ambientLightColor.needsUpdate=U,M.lightProbe.needsUpdate=U,M.directionalLights.needsUpdate=U,M.directionalLightShadows.needsUpdate=U,M.pointLights.needsUpdate=U,M.pointLightShadows.needsUpdate=U,M.spotLights.needsUpdate=U,M.spotLightShadows.needsUpdate=U,M.rectAreaLights.needsUpdate=U,M.hemisphereLights.needsUpdate=U}function Dg(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(M,U,B){const z=Se.get(M);z.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,z.__autoAllocateDepthBuffer===!1&&(z.__useRenderToTexture=!1),Se.get(M.texture).__webglTexture=U,Se.get(M.depthTexture).__webglTexture=z.__autoAllocateDepthBuffer?void 0:B,z.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,U){const B=Se.get(M);B.__webglFramebuffer=U,B.__useDefaultFramebuffer=U===void 0};const Lg=L.createFramebuffer();this.setRenderTarget=function(M,U=0,B=0){P=M,C=U,T=B;let z=!0,F=null,ie=!1,le=!1;if(M){const _e=Se.get(M);if(_e.__useDefaultFramebuffer!==void 0)Ee.bindFramebuffer(L.FRAMEBUFFER,null),z=!1;else if(_e.__webglFramebuffer===void 0)A.setupRenderTarget(M);else if(_e.__hasExternalTextures)A.rebindTextures(M,Se.get(M.texture).__webglTexture,Se.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){const Me=M.depthTexture;if(_e.__boundDepthTexture!==Me){if(Me!==null&&Se.has(Me)&&(M.width!==Me.image.width||M.height!==Me.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");A.setupDepthRenderbuffer(M)}}const Le=M.texture;(Le.isData3DTexture||Le.isDataArrayTexture||Le.isCompressedArrayTexture)&&(le=!0);const Pe=Se.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Pe[U])?F=Pe[U][B]:F=Pe[U],ie=!0):M.samples>0&&A.useMultisampledRTT(M)===!1?F=Se.get(M).__webglMultisampledFramebuffer:Array.isArray(Pe)?F=Pe[B]:F=Pe,D.copy(M.viewport),V.copy(M.scissor),H=M.scissorTest}else D.copy(oe).multiplyScalar(N).floor(),V.copy(ye).multiplyScalar(N).floor(),H=Xe;if(B!==0&&(F=Lg),Ee.bindFramebuffer(L.FRAMEBUFFER,F)&&z&&Ee.drawBuffers(M,F),Ee.viewport(D),Ee.scissor(V),Ee.setScissorTest(H),ie){const _e=Se.get(M.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+U,_e.__webglTexture,B)}else if(le){const _e=Se.get(M.texture),Le=U;L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,_e.__webglTexture,B,Le)}else if(M!==null&&B!==0){const _e=Se.get(M.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,_e.__webglTexture,B)}w=-1},this.readRenderTargetPixels=function(M,U,B,z,F,ie,le){if(!(M&&M.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let me=Se.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&le!==void 0&&(me=me[le]),me){Ee.bindFramebuffer(L.FRAMEBUFFER,me);try{const _e=M.texture,Le=_e.format,Pe=_e.type;if(!ze.textureFormatReadable(Le)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ze.textureTypeReadable(Pe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=M.width-z&&B>=0&&B<=M.height-F&&L.readPixels(U,B,z,F,Ue.convert(Le),Ue.convert(Pe),ie)}finally{const _e=P!==null?Se.get(P).__webglFramebuffer:null;Ee.bindFramebuffer(L.FRAMEBUFFER,_e)}}},this.readRenderTargetPixelsAsync=async function(M,U,B,z,F,ie,le){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let me=Se.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&le!==void 0&&(me=me[le]),me)if(U>=0&&U<=M.width-z&&B>=0&&B<=M.height-F){Ee.bindFramebuffer(L.FRAMEBUFFER,me);const _e=M.texture,Le=_e.format,Pe=_e.type;if(!ze.textureFormatReadable(Le))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ze.textureTypeReadable(Pe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Me=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,Me),L.bufferData(L.PIXEL_PACK_BUFFER,ie.byteLength,L.STREAM_READ),L.readPixels(U,B,z,F,Ue.convert(Le),Ue.convert(Pe),0);const Ge=P!==null?Se.get(P).__webglFramebuffer:null;Ee.bindFramebuffer(L.FRAMEBUFFER,Ge);const $e=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await Yx(L,$e,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,Me),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,ie),L.deleteBuffer(Me),L.deleteSync($e),ie}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(M,U=null,B=0){const z=Math.pow(2,-B),F=Math.floor(M.image.width*z),ie=Math.floor(M.image.height*z),le=U!==null?U.x:0,me=U!==null?U.y:0;A.setTexture2D(M,0),L.copyTexSubImage2D(L.TEXTURE_2D,B,0,0,le,me,F,ie),Ee.unbindTexture()};const Ng=L.createFramebuffer(),Ig=L.createFramebuffer();this.copyTextureToTexture=function(M,U,B=null,z=null,F=0,ie=null){ie===null&&(F!==0?(Va("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ie=F,F=0):ie=0);let le,me,_e,Le,Pe,Me,Ge,$e,yt;const pt=M.isCompressedTexture?M.mipmaps[ie]:M.image;if(B!==null)le=B.max.x-B.min.x,me=B.max.y-B.min.y,_e=B.isBox3?B.max.z-B.min.z:1,Le=B.min.x,Pe=B.min.y,Me=B.isBox3?B.min.z:0;else{const vn=Math.pow(2,-F);le=Math.floor(pt.width*vn),me=Math.floor(pt.height*vn),M.isDataArrayTexture?_e=pt.depth:M.isData3DTexture?_e=Math.floor(pt.depth*vn):_e=1,Le=0,Pe=0,Me=0}z!==null?(Ge=z.x,$e=z.y,yt=z.z):(Ge=0,$e=0,yt=0);const je=Ue.convert(U.format),we=Ue.convert(U.type);let Pt;U.isData3DTexture?(A.setTexture3D(U,0),Pt=L.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(A.setTexture2DArray(U,0),Pt=L.TEXTURE_2D_ARRAY):(A.setTexture2D(U,0),Pt=L.TEXTURE_2D),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,U.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,U.unpackAlignment);const Ke=L.getParameter(L.UNPACK_ROW_LENGTH),Pn=L.getParameter(L.UNPACK_IMAGE_HEIGHT),Rr=L.getParameter(L.UNPACK_SKIP_PIXELS),rn=L.getParameter(L.UNPACK_SKIP_ROWS),Rs=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,pt.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,pt.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Le),L.pixelStorei(L.UNPACK_SKIP_ROWS,Pe),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Me);const at=M.isDataArrayTexture||M.isData3DTexture,gn=U.isDataArrayTexture||U.isData3DTexture;if(M.isDepthTexture){const vn=Se.get(M),Ht=Se.get(U),qt=Se.get(vn.__renderTarget),kl=Se.get(Ht.__renderTarget);Ee.bindFramebuffer(L.READ_FRAMEBUFFER,qt.__webglFramebuffer),Ee.bindFramebuffer(L.DRAW_FRAMEBUFFER,kl.__webglFramebuffer);for(let Ji=0;Ji<_e;Ji++)at&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Se.get(M).__webglTexture,F,Me+Ji),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Se.get(U).__webglTexture,ie,yt+Ji)),L.blitFramebuffer(Le,Pe,le,me,Ge,$e,le,me,L.DEPTH_BUFFER_BIT,L.NEAREST);Ee.bindFramebuffer(L.READ_FRAMEBUFFER,null),Ee.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(F!==0||M.isRenderTargetTexture||Se.has(M)){const vn=Se.get(M),Ht=Se.get(U);Ee.bindFramebuffer(L.READ_FRAMEBUFFER,Ng),Ee.bindFramebuffer(L.DRAW_FRAMEBUFFER,Ig);for(let qt=0;qt<_e;qt++)at?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,vn.__webglTexture,F,Me+qt):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,vn.__webglTexture,F),gn?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Ht.__webglTexture,ie,yt+qt):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Ht.__webglTexture,ie),F!==0?L.blitFramebuffer(Le,Pe,le,me,Ge,$e,le,me,L.COLOR_BUFFER_BIT,L.NEAREST):gn?L.copyTexSubImage3D(Pt,ie,Ge,$e,yt+qt,Le,Pe,le,me):L.copyTexSubImage2D(Pt,ie,Ge,$e,Le,Pe,le,me);Ee.bindFramebuffer(L.READ_FRAMEBUFFER,null),Ee.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else gn?M.isDataTexture||M.isData3DTexture?L.texSubImage3D(Pt,ie,Ge,$e,yt,le,me,_e,je,we,pt.data):U.isCompressedArrayTexture?L.compressedTexSubImage3D(Pt,ie,Ge,$e,yt,le,me,_e,je,pt.data):L.texSubImage3D(Pt,ie,Ge,$e,yt,le,me,_e,je,we,pt):M.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,ie,Ge,$e,le,me,je,we,pt.data):M.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,ie,Ge,$e,pt.width,pt.height,je,pt.data):L.texSubImage2D(L.TEXTURE_2D,ie,Ge,$e,le,me,je,we,pt);L.pixelStorei(L.UNPACK_ROW_LENGTH,Ke),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Pn),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Rr),L.pixelStorei(L.UNPACK_SKIP_ROWS,rn),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Rs),ie===0&&U.generateMipmaps&&L.generateMipmap(Pt),Ee.unbindTexture()},this.copyTextureToTexture3D=function(M,U,B=null,z=null,F=0){return Va('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(M,U,B,z,F)},this.initRenderTarget=function(M){Se.get(M).__webglFramebuffer===void 0&&A.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?A.setTextureCube(M,0):M.isData3DTexture?A.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?A.setTexture2DArray(M,0):A.setTexture2D(M,0),Ee.unbindTexture()},this.resetState=function(){C=0,T=0,P=null,Ee.reset(),nt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return fi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=Ye._getDrawingBufferColorSpace(e),n.unpackColorSpace=Ye._getUnpackColorSpace()}}const m2=()=>{const t=cn.useRef(null);return cn.useEffect(()=>{const e=new yy,n=new En(75,window.innerWidth/window.innerHeight,.1,1e3),i=new p2({antialias:!0,alpha:!0});i.setSize(window.innerWidth,window.innerHeight),i.setPixelRatio(window.devicePixelRatio),t.current.appendChild(i.domElement);const r=new Wn,s=5e3,o=new Float32Array(s*3),a=new Float32Array(s);for(let D=0;D<s;D++)o[D*3]=(Math.random()-.5)*15,o[D*3+1]=(Math.random()-.5)*15,o[D*3+2]=(Math.random()-.5)*10-5,a[D]=Math.random()*2.5;r.setAttribute("position",new An(o,3)),r.setAttribute("scale",new An(a,1));const l=new yi({vertexShader:`
        attribute float scale;
        void main() {
          vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
          gl_PointSize = scale * (300.0 / -mvPosition.z);
          gl_Position = projectionMatrix * mvPosition;
        }
      `,fragmentShader:`
        void main() {
          float dist = distance(gl_PointCoord, vec2(0.5));
          if(dist > 0.5) discard;
          
          // Gradient from purple to deep blue
          vec3 color1 = vec3(0.5, 0.2, 0.8); // Purple
          vec3 color2 = vec3(0.2, 0.3, 0.8); // Deep blue
          vec3 finalColor = mix(color1, color2, dist * 2.0);
          
          float alpha = 0.7 * (1.0 - dist * 2.0);
          gl_FragColor = vec4(finalColor, alpha);
        }
      `,transparent:!0,depthWrite:!1,blending:Nu}),c=new wy(r,l);e.add(c);const d=[],h=new Td(1,0),f=new no({color:4865164,wireframe:!0,transparent:!0,opacity:.4}),p=new wn(h,f);p.position.set(-3,2,-5),d.push(p),e.add(p);const _=new Ad(.8,0),y=new no({color:3034014,wireframe:!0,transparent:!0,opacity:.4}),m=new wn(_,y);m.position.set(3,-1.5,-4),d.push(m),e.add(m);const u=new Cd(1.2,.2,16,50),g=new no({color:7885225,wireframe:!0,transparent:!0,opacity:.4}),v=new wn(u,g);v.position.set(0,0,-7),v.rotation.x=Math.PI/4,d.push(v),e.add(v),n.position.z=5;const x=new by(7291585,.5);e.add(x);const b=()=>{n.aspect=window.innerWidth/window.innerHeight,n.updateProjectionMatrix(),i.setSize(window.innerWidth,window.innerHeight)};window.addEventListener("resize",b);const C={x:0,y:0},T=D=>{C.x=D.clientX/window.innerWidth*2-1,C.y=-(D.clientY/window.innerHeight)*2+1};window.addEventListener("mousemove",T);const P=new Dy,w=()=>{const D=P.getElapsedTime();return c.rotation.y=D*.05,c.rotation.x=D*.025,d.forEach((V,H)=>{V.rotation.x=D*(.1+H*.02),V.rotation.y=D*(.15+H*.01),V.position.x+=(C.x*.3-V.position.x)*.01,V.position.y+=(C.y*.3-V.position.y)*.01}),i.render(e,n),requestAnimationFrame(w)},S=w();return()=>{window.removeEventListener("resize",b),window.removeEventListener("mousemove",T),cancelAnimationFrame(S),t.current.removeChild(i.domElement),r.dispose(),l.dispose(),d.forEach(D=>{D.geometry.dispose(),D.material.dispose()}),i.dispose(),e.clear()}},[]),R.createElement("div",{ref:t,className:"absolute inset-0 z-0"})},g2=()=>R.createElement("div",{className:"relative min-h-screen flex items-center overflow-hidden"},R.createElement(m2,null),R.createElement("div",{className:"absolute inset-0 z-0"},R.createElement("div",{className:"absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-900/30 to-gray-900 opacity-70"}),R.createElement("div",{className:"absolute inset-0 flex items-center justify-center"},R.createElement("div",{className:"w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogIDxkZWZzPgogICAgPHBhdHRlcm4gaWQ9InBhdHRlcm4iIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgdmlld0JveD0iMCAwIDQwLDQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIiBwYXR0ZXJuVHJhbnNmb3JtPSJyb3RhdGUoNDUpIj4KICAgICAgPGNpcmNsZSBpZD0iY2lyY2xlIiBjeD0iMjAiIGN5PSIyMCIgcj0iMC41IiBmaWxsPSJyZ2JhKDEyOCwgOTAsIDE4MCwgMC4yKSI+PC9jaXJjbGU+CiAgICA8L3BhdHRlcm4+CiAgPC9kZWZzPgogIDxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjcGF0dGVybikiPjwvcmVjdD4KPC9zdmc+')]"}),R.createElement("div",{className:"absolute inset-0 bg-gradient-radial from-transparent via-transparent to-gray-900"}))),R.createElement("div",{className:"container mx-auto px-6 md:px-12 relative z-10 flex flex-col justify-center items-center text-center"},R.createElement("h1",{className:"text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-indigo-500 to-blue-600"},"MARA"),R.createElement("div",{className:"w-20 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 mx-auto my-4 rounded-full"}),R.createElement("h2",{className:"text-2xl md:text-3xl font-light mb-8 max-w-3xl"},R.createElement("span",{className:"font-normal text-indigo-300"},"Graphic Designer")," creating distinctive visual identities and compelling design solutions"),R.createElement("p",{className:"text-gray-300 max-w-xl mb-10"},"Bringing your vision to life with creativity, precision, and a deep understanding of design principles."),R.createElement("div",{className:"flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4"},R.createElement("button",{onClick:()=>document.getElementById("portfolio").scrollIntoView({behavior:"smooth"}),className:"px-8 py-3 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-indigo-500/30"},"View My Work"),R.createElement("button",{onClick:()=>document.getElementById("contact").scrollIntoView({behavior:"smooth"}),className:"px-8 py-3 rounded-full border border-white/20 hover:bg-white/10 transition-all duration-300"},"Get in Touch")),R.createElement("div",{className:"absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce"},R.createElement("span",{className:"text-sm text-gray-400 mb-2"},"Scroll Down"),R.createElement("svg",{className:"w-6 h-6 text-gray-400",fill:"none",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",viewBox:"0 0 24 24",stroke:"currentColor"},R.createElement("path",{d:"M19 14l-7 7m0 0l-7-7m7 7V3"}))))),Vp=[{id:1,title:"Modern Brand Identity",description:"Complete rebrand for a tech startup, including logo, color palette, and visual identity guidelines.",image:"file:///C:/Users/user/Desktop/nike%20tn.svg",category:"branding"},{id:2,title:"Mobile App UI Design",description:"User interface design for a fitness tracking mobile application with a focus on user experience and clarity.",image:"Screenshot_2023-10-01_at_12.00.00_PM.png",category:"ui"},{id:3,title:"Artisan Coffee Packaging",description:"Premium packaging design for an artisanal coffee brand, highlighting sustainability and craftsmanship.",image:"https://images.unsplash.com/photo-1547575524-a4fb2bcb169c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",category:"print"},{id:4,title:"Abstract Character Series",description:"A collection of abstract character illustrations for a children's educational platform.",image:"https://images.unsplash.com/photo-1618005198920-f0cb6201c115?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",category:"illustration"},{id:5,title:"E-commerce Website Design",description:"Complete UI design for an e-commerce platform selling handcrafted goods, with a focus on visual hierarchy.",image:"https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",category:"ui"},{id:6,title:"Photography Magazine Layout",description:"Print layout design for a quarterly photography magazine, balancing text and visual elements.",image:"https://images.unsplash.com/photo-1583223667854-e0e05b1ad5a3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",category:"print"},{id:7,title:"Festival Poster Series",description:"A series of vibrant posters for an annual music and arts festival, each with a distinct theme.",image:"https://images.unsplash.com/photo-1559227706-7b3634e2f6b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",category:"print"},{id:8,title:"Geometric Pattern Collection",description:"Collection of modern geometric patterns used across various branding applications.",image:"https://images.unsplash.com/photo-1614850715649-1d0106293bd1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",category:"illustration"},{id:9,title:"Restaurant Brand Identity",description:"Complete brand identity for an upscale restaurant, including logo, menu design, and interior graphics.",image:"https://images.unsplash.com/photo-1518640467707-6811f4a6ab73?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1148&q=80",category:"branding"}],v2=()=>{const[t,e]=cn.useState("all"),[n,i]=cn.useState(null),r=[{id:"all",label:"All Works"},{id:"branding",label:"Branding"},{id:"ui",label:"UI Design"},{id:"illustration",label:"Illustration"},{id:"print",label:"Print"}],s=t==="all"?Vp:Vp.filter(o=>o.category===t);return R.createElement("div",{className:"container mx-auto px-4 sm:px-6 lg:px-8"},R.createElement("div",{className:"text-center mb-16"},R.createElement("h2",{className:"text-3xl md:text-4xl font-bold mb-4"},"Portfolio"),R.createElement("div",{className:"w-20 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 mx-auto mb-6 rounded-full"}),R.createElement("p",{className:"text-gray-300 max-w-2xl mx-auto"},"A curated selection of my most creative and impactful design projects, showcasing versatility, attention to detail, and a passion for visual excellence.")),R.createElement("div",{className:"flex flex-wrap justify-center gap-4 mb-12"},r.map(o=>R.createElement("button",{key:o.id,className:`px-4 py-2 rounded-full transition-all duration-300 ${t===o.id?"bg-gradient-to-r from-indigo-600 to-purple-600 text-white":"bg-gray-800 text-gray-300 hover:bg-gray-700"}`,onClick:()=>e(o.id)},o.label))),R.createElement("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"},s.map(o=>R.createElement("div",{key:o.id,className:"relative overflow-hidden group rounded-lg shadow-lg bg-gray-800 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl",onMouseEnter:()=>i(o.id),onMouseLeave:()=>i(null)},R.createElement("div",{className:"aspect-w-16 aspect-h-12 bg-gray-700"},R.createElement("img",{src:o.image,alt:o.title,className:"w-full h-full object-cover transition-all duration-500 group-hover:scale-110"})),R.createElement("div",{className:"absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/70 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-6"},R.createElement("h3",{className:"text-xl font-semibold mb-1"},o.title),R.createElement("p",{className:"text-gray-300 text-sm mb-3"},o.description),R.createElement("div",{className:"flex items-center"},R.createElement("span",{className:"inline-block px-3 py-1 rounded-full text-xs bg-gray-700 text-indigo-300"},o.category)))))))},_2=()=>{const t=[{name:"Adobe Photoshop",level:95},{name:"Adobe Illustrator",level:90},{name:"Adobe InDesign",level:85},{name:"Figma",level:88},{name:"UI/UX Design",level:82},{name:"Brand Strategy",level:80}];return R.createElement("div",{className:"container mx-auto px-4 sm:px-6 lg:px-8"},R.createElement("div",{className:"text-center mb-16"},R.createElement("h2",{className:"text-3xl md:text-4xl font-bold mb-4"},"About Me"),R.createElement("div",{className:"w-20 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 mx-auto mb-6 rounded-full"})),R.createElement("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"},R.createElement("div",null,R.createElement("h3",{className:"text-2xl font-bold mb-4 text-indigo-300"},"Mara"),R.createElement("h4",{className:"text-xl mb-6 font-light"},"Graphic Designer & Creative Visionary"),R.createElement("p",{className:"text-gray-300 mb-6 leading-relaxed"},"I am a passionate graphic designer with a keen eye for detail and a commitment to creating impactful visual solutions. With years of experience in the field, I have developed a versatile skill set that allows me to tackle projects across various mediums and industries."),R.createElement("p",{className:"text-gray-300 mb-6 leading-relaxed"},"My design philosophy centers around the perfect balance of aesthetics and functionality. I believe that great design should not only captivate but also communicate effectively and serve its intended purpose. I approach each project with a blend of creativity and strategic thinking to deliver results that exceed expectations."),R.createElement("div",{className:"flex flex-wrap gap-3 mb-8"},R.createElement("span",{className:"px-3 py-1 bg-gray-700 rounded-full text-sm"},"Brand Identity"),R.createElement("span",{className:"px-3 py-1 bg-gray-700 rounded-full text-sm"},"Print Design"),R.createElement("span",{className:"px-3 py-1 bg-gray-700 rounded-full text-sm"},"Digital Media"),R.createElement("span",{className:"px-3 py-1 bg-gray-700 rounded-full text-sm"},"UI/UX"),R.createElement("span",{className:"px-3 py-1 bg-gray-700 rounded-full text-sm"},"Illustration")),R.createElement("div",{className:"flex space-x-4"},R.createElement("a",{href:"#",className:"text-gray-400 hover:text-indigo-400 transition-colors"},R.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",fill:"currentColor",viewBox:"0 0 16 16"},R.createElement("path",{d:"M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"}))),R.createElement("a",{href:"#",className:"text-gray-400 hover:text-indigo-400 transition-colors"},R.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",fill:"currentColor",viewBox:"0 0 16 16"},R.createElement("path",{d:"M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"}))),R.createElement("a",{href:"#",className:"text-gray-400 hover:text-indigo-400 transition-colors"},R.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",fill:"currentColor",viewBox:"0 0 16 16"},R.createElement("path",{d:"M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"}))),R.createElement("a",{href:"#",className:"text-gray-400 hover:text-indigo-400 transition-colors"},R.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",fill:"currentColor",viewBox:"0 0 16 16"},R.createElement("path",{d:"M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"}))))),R.createElement("div",{className:"bg-gray-800/50 rounded-lg p-8 shadow-lg"},R.createElement("h3",{className:"text-xl font-semibold mb-6 text-center"},"Professional Skills"),R.createElement("div",{className:"space-y-6"},t.map(e=>R.createElement("div",{key:e.name},R.createElement("div",{className:"flex justify-between mb-2"},R.createElement("span",null,e.name),R.createElement("span",null,e.level,"%")),R.createElement("div",{className:"w-full h-2 bg-gray-700 rounded-full"},R.createElement("div",{className:"h-full rounded-full bg-gradient-to-r from-indigo-500 to-purple-500",style:{width:`${e.level}%`}}))))),R.createElement("div",{className:"mt-8 pt-6 border-t border-gray-700"},R.createElement("h4",{className:"text-lg font-medium mb-4"},"Education & Experience"),R.createElement("div",{className:"space-y-4"},R.createElement("div",{className:"flex"},R.createElement("div",{className:"flex-shrink-0 mt-1"},R.createElement("div",{className:"w-3 h-3 rounded-full bg-indigo-500"})),R.createElement("div",{className:"ml-4"},R.createElement("h5",{className:"font-medium"},"Senior Graphic Designer"),R.createElement("p",{className:"text-sm text-gray-400"},"Creative Studio • 2019 - Present"))),R.createElement("div",{className:"flex"},R.createElement("div",{className:"flex-shrink-0 mt-1"},R.createElement("div",{className:"w-3 h-3 rounded-full bg-indigo-500"})),R.createElement("div",{className:"ml-4"},R.createElement("h5",{className:"font-medium"},"Graphic Designer"),R.createElement("p",{className:"text-sm text-gray-400"},"Design Agency • 2016 - 2019"))),R.createElement("div",{className:"flex"},R.createElement("div",{className:"flex-shrink-0 mt-1"},R.createElement("div",{className:"w-3 h-3 rounded-full bg-indigo-500"})),R.createElement("div",{className:"ml-4"},R.createElement("h5",{className:"font-medium"},"BA in Graphic Design"),R.createElement("p",{className:"text-sm text-gray-400"},"Design University • 2012 - 2016"))))))))},x2=()=>{const[t,e]=cn.useState({name:"",email:"",subject:"",message:""}),[n,i]=cn.useState(!1),[r,s]=cn.useState(null),o=l=>{const{name:c,value:d}=l.target;e(h=>({...h,[c]:d}))},a=l=>{l.preventDefault(),i(!0),setTimeout(()=>{i(!1),s("success"),e({name:"",email:"",subject:"",message:""}),setTimeout(()=>s(null),5e3)},1500)};return R.createElement("div",{className:"container mx-auto px-4 sm:px-6 lg:px-8"},R.createElement("div",{className:"text-center mb-16"},R.createElement("h2",{className:"text-3xl md:text-4xl font-bold mb-4"},"Get in Touch"),R.createElement("div",{className:"w-20 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 mx-auto mb-6 rounded-full"}),R.createElement("p",{className:"text-gray-300 max-w-2xl mx-auto"},"Have a project in mind or just want to say hello? Feel free to reach out using the form below or through any of the provided contact methods.")),R.createElement("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-12"},R.createElement("div",{className:"bg-gray-800/50 rounded-lg p-8 shadow-lg"},R.createElement("h3",{className:"text-xl font-semibold mb-6"},"Send a Message"),r==="success"&&R.createElement("div",{className:"mb-6 p-4 bg-green-900/40 border border-green-500 rounded-lg"},R.createElement("p",{className:"text-green-400"},"Your message has been sent successfully. I'll get back to you soon!")),R.createElement("form",{onSubmit:a},R.createElement("div",{className:"mb-4"},R.createElement("label",{htmlFor:"name",className:"block text-sm font-medium mb-2"},"Your Name"),R.createElement("input",{type:"text",id:"name",name:"name",value:t.name,onChange:o,required:!0,className:"w-full px-4 py-2 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-white"})),R.createElement("div",{className:"mb-4"},R.createElement("label",{htmlFor:"email",className:"block text-sm font-medium mb-2"},"Email Address"),R.createElement("input",{type:"email",id:"email",name:"email",value:t.email,onChange:o,required:!0,className:"w-full px-4 py-2 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-white"})),R.createElement("div",{className:"mb-4"},R.createElement("label",{htmlFor:"subject",className:"block text-sm font-medium mb-2"},"Subject"),R.createElement("input",{type:"text",id:"subject",name:"subject",value:t.subject,onChange:o,required:!0,className:"w-full px-4 py-2 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-white"})),R.createElement("div",{className:"mb-6"},R.createElement("label",{htmlFor:"message",className:"block text-sm font-medium mb-2"},"Your Message"),R.createElement("textarea",{id:"message",name:"message",value:t.message,onChange:o,required:!0,rows:"5",className:"w-full px-4 py-2 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-white resize-none"})),R.createElement("button",{type:"submit",disabled:n,className:`w-full py-3 rounded-lg font-medium ${n?"bg-gray-600 cursor-not-allowed":"bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700"} transition-all duration-300 shadow-lg hover:shadow-indigo-500/30`},n?"Sending...":"Send Message"))),R.createElement("div",null,R.createElement("h3",{className:"text-xl font-semibold mb-6"},"Contact Information"),R.createElement("div",{className:"space-y-6"},R.createElement("div",{className:"flex"},R.createElement("div",{className:"flex-shrink-0"},R.createElement("div",{className:"w-12 h-12 rounded-lg bg-indigo-900/50 flex items-center justify-center"},R.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6 text-indigo-400",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},R.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"})))),R.createElement("div",{className:"ml-4"},R.createElement("h4",{className:"font-medium"},"Email"),R.createElement("p",{className:"text-gray-400 mt-1"},"mara@designstudio.com"),R.createElement("a",{href:"mailto:mara@designstudio.com",className:"text-indigo-400 hover:text-indigo-300 text-sm flex items-center mt-1"},"Write an email",R.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-4 w-4 ml-1",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},R.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M14 5l7 7m0 0l-7 7m7-7H3"}))))),R.createElement("div",{className:"flex"},R.createElement("div",{className:"flex-shrink-0"},R.createElement("div",{className:"w-12 h-12 rounded-lg bg-indigo-900/50 flex items-center justify-center"},R.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6 text-indigo-400",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},R.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"})))),R.createElement("div",{className:"ml-4"},R.createElement("h4",{className:"font-medium"},"Phone"),R.createElement("p",{className:"text-gray-400 mt-1"},"+355 69 123 4567"),R.createElement("a",{href:"tel:+3556912345678",className:"text-indigo-400 hover:text-indigo-300 text-sm flex items-center mt-1"},"Call me",R.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-4 w-4 ml-1",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},R.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M14 5l7 7m0 0l-7 7m7-7H3"}))))),R.createElement("div",{className:"flex"},R.createElement("div",{className:"flex-shrink-0"},R.createElement("div",{className:"w-12 h-12 rounded-lg bg-indigo-900/50 flex items-center justify-center"},R.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6 text-indigo-400",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},R.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"}),R.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M15 11a3 3 0 11-6 0 3 3 0 016 0z"})))),R.createElement("div",{className:"ml-4"},R.createElement("h4",{className:"font-medium"},"Location"),R.createElement("p",{className:"text-gray-400 mt-1"},"Tirana, Albania"),R.createElement("a",{href:"https://maps.google.com",target:"_blank",rel:"noopener noreferrer",className:"text-indigo-400 hover:text-indigo-300 text-sm flex items-center mt-1"},"View on map",R.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-4 w-4 ml-1",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},R.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M14 5l7 7m0 0l-7 7m7-7H3"})))))),R.createElement("div",{className:"mt-10 pt-6 border-t border-gray-700"},R.createElement("h4",{className:"font-medium mb-4"},"Follow Me"),R.createElement("div",{className:"flex space-x-5"},R.createElement("a",{href:"#",className:"w-10 h-10 rounded-full bg-gray-800 hover:bg-indigo-900/50 flex items-center justify-center transition-colors"},R.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",fill:"currentColor",className:"text-indigo-400",viewBox:"0 0 16 16"},R.createElement("path",{d:"M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"}))),R.createElement("a",{href:"#",className:"w-10 h-10 rounded-full bg-gray-800 hover:bg-indigo-900/50 flex items-center justify-center transition-colors"},R.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",fill:"currentColor",className:"text-indigo-400",viewBox:"0 0 16 16"},R.createElement("path",{d:"M6.197 2.524a1.45 1.45 0 0 0-2.385 0l-6.3 6.7C-3.8 10.79 -1.5 14 1.7 14h13.6c3.2 0 5.2-3.5 3.8-4.8l-6.3-6.7c-.5-.5-1.3-.6-1.8-.4c-.2.1-.4.2-.5.4l-4.3 4.6z"}))),R.createElement("a",{href:"#",className:"w-10 h-10 rounded-full bg-gray-800 hover:bg-indigo-900/50 flex items-center justify-center transition-colors"},R.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",fill:"currentColor",className:"text-indigo-400",viewBox:"0 0 16 16"},R.createElement("path",{d:"M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"}))),R.createElement("a",{href:"#",className:"w-10 h-10 rounded-full bg-gray-800 hover:bg-indigo-900/50 flex items-center justify-center transition-colors"},R.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",fill:"currentColor",className:"text-indigo-400",viewBox:"0 0 16 16"},R.createElement("path",{d:"M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"}))),R.createElement("a",{href:"#",className:"w-10 h-10 rounded-full bg-gray-800 hover:bg-indigo-900/50 flex items-center justify-center transition-colors"},R.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",fill:"currentColor",className:"text-indigo-400",viewBox:"0 0 16 16"},R.createElement("path",{d:"M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"}))))))))},y2=()=>R.createElement("footer",{className:"bg-gray-900 border-t border-gray-800"},R.createElement("div",{className:"container mx-auto px-4 sm:px-6 lg:px-8 py-12"},R.createElement("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-8"},R.createElement("div",{className:"col-span-1"},R.createElement("h3",{className:"font-bold text-xl bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 mb-4"},"MARA"),R.createElement("p",{className:"text-gray-400 mb-6"},"Creating distinctive visual identities and compelling design solutions for brands and businesses of all sizes."),R.createElement("div",{className:"flex space-x-4"},R.createElement("a",{href:"#",className:"text-gray-400 hover:text-indigo-400 transition-colors"},R.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",fill:"currentColor",viewBox:"0 0 16 16"},R.createElement("path",{d:"M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"}))),R.createElement("a",{href:"#",className:"text-gray-400 hover:text-indigo-400 transition-colors"},R.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",fill:"currentColor",viewBox:"0 0 16 16"},R.createElement("path",{d:"M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"}))),R.createElement("a",{href:"#",className:"text-gray-400 hover:text-indigo-400 transition-colors"},R.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",fill:"currentColor",viewBox:"0 0 16 16"},R.createElement("path",{d:"M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"}))),R.createElement("a",{href:"#",className:"text-gray-400 hover:text-indigo-400 transition-colors"},R.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",fill:"currentColor",viewBox:"0 0 16 16"},R.createElement("path",{d:"M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"}))))),R.createElement("div",{className:"col-span-1"},R.createElement("h4",{className:"text-lg font-medium mb-4"},"Quick Links"),R.createElement("ul",{className:"space-y-2"},R.createElement("li",null,R.createElement("a",{href:"#home",className:"text-gray-400 hover:text-indigo-400 transition-colors"},"Home")),R.createElement("li",null,R.createElement("a",{href:"#portfolio",className:"text-gray-400 hover:text-indigo-400 transition-colors"},"Portfolio")),R.createElement("li",null,R.createElement("a",{href:"#about",className:"text-gray-400 hover:text-indigo-400 transition-colors"},"About Me")),R.createElement("li",null,R.createElement("a",{href:"#contact",className:"text-gray-400 hover:text-indigo-400 transition-colors"},"Contact")))),R.createElement("div",{className:"col-span-1"},R.createElement("h4",{className:"text-lg font-medium mb-4"},"Contact Info"),R.createElement("ul",{className:"space-y-2"},R.createElement("li",{className:"flex items-center gap-2 text-gray-400"},R.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-4 w-4",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},R.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"})),R.createElement("span",null,"mara@designstudio.com")),R.createElement("li",{className:"flex items-center gap-2 text-gray-400"},R.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-4 w-4",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},R.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"})),R.createElement("span",null,"+355 69 123 4567")),R.createElement("li",{className:"flex items-center gap-2 text-gray-400"},R.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-4 w-4",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},R.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"}),R.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M15 11a3 3 0 11-6 0 3 3 0 016 0z"})),R.createElement("span",null,"Tirana, Albania"))))),R.createElement("div",{className:"border-t border-gray-800 my-8"}),R.createElement("div",{className:"text-center text-gray-500 text-sm"},R.createElement("p",null,"© ",new Date().getFullYear()," Mara Design Studio. All rights reserved."),R.createElement("p",{className:"mt-2"},"Designed with",R.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-4 w-4 inline mx-1 text-pink-500",fill:"currentColor",viewBox:"0 0 24 24"},R.createElement("path",{d:"M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"})),"by Mara"))));function S2(){const[t,e]=cn.useState("home");return cn.useEffect(()=>{const n=()=>{const i=["home","portfolio","about","contact"],r=window.scrollY+100;for(const s of i){const o=document.getElementById(s);if(o){const a=o.offsetTop,l=o.offsetHeight;if(r>=a&&r<a+l){e(s);break}}}};return window.addEventListener("scroll",n),()=>window.removeEventListener("scroll",n)},[]),React.createElement("div",{className:"min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white"},React.createElement(nx,{activeSection:t}),React.createElement("main",null,React.createElement("section",{id:"home"},React.createElement(g2,null)),React.createElement("section",{id:"portfolio",className:"py-20"},React.createElement(v2,null)),React.createElement("section",{id:"about",className:"py-20 bg-gray-800/50"},React.createElement(_2,null)),React.createElement("section",{id:"contact",className:"py-20"},React.createElement(x2,null))),React.createElement(y2,null))}J0(document.getElementById("root")).render(React.createElement(cn.StrictMode,null,React.createElement(S2,null)));
