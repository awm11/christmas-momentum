var e=(e,t)=>()=>(t||(e((t={exports:{}}).exports,t),e=null),t.exports);(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var t=e((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.portal`),r=Symbol.for(`react.fragment`),i=Symbol.for(`react.strict_mode`),a=Symbol.for(`react.profiler`),o=Symbol.for(`react.consumer`),s=Symbol.for(`react.context`),c=Symbol.for(`react.forward_ref`),l=Symbol.for(`react.suspense`),u=Symbol.for(`react.memo`),d=Symbol.for(`react.lazy`),f=Symbol.for(`react.activity`),p=Symbol.iterator;function m(e){return typeof e!=`object`||!e?null:(e=p&&e[p]||e[`@@iterator`],typeof e==`function`?e:null)}var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g=Object.assign,_={};function v(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}v.prototype.isReactComponent={},v.prototype.setState=function(e,t){if(typeof e!=`object`&&typeof e!=`function`&&e!=null)throw Error(`takes an object of state variables to update or a function which returns an object of state variables.`);this.updater.enqueueSetState(this,e,t,`setState`)},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,`forceUpdate`)};function y(){}y.prototype=v.prototype;function b(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}var x=b.prototype=new y;x.constructor=b,g(x,v.prototype),x.isPureReactComponent=!0;var ee=Array.isArray;function te(){}var S={H:null,A:null,T:null,S:null},ne=Object.prototype.hasOwnProperty;function re(e,n,r){var i=r.ref;return{$$typeof:t,type:e,key:n,ref:i===void 0?null:i,props:r}}function ie(e,t){return re(e.type,t,e.props)}function C(e){return typeof e==`object`&&!!e&&e.$$typeof===t}function w(e){var t={"=":`=0`,":":`=2`};return`$`+e.replace(/[=:]/g,function(e){return t[e]})}var T=/\/+/g;function E(e,t){return typeof e==`object`&&e&&e.key!=null?w(``+e.key):t.toString(36)}function ae(e){switch(e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason;default:switch(typeof e.status==`string`?e.then(te,te):(e.status=`pending`,e.then(function(t){e.status===`pending`&&(e.status=`fulfilled`,e.value=t)},function(t){e.status===`pending`&&(e.status=`rejected`,e.reason=t)})),e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason}}throw e}function oe(e,r,i,a,o){var s=typeof e;(s===`undefined`||s===`boolean`)&&(e=null);var c=!1;if(e===null)c=!0;else switch(s){case`bigint`:case`string`:case`number`:c=!0;break;case`object`:switch(e.$$typeof){case t:case n:c=!0;break;case d:return c=e._init,oe(c(e._payload),r,i,a,o)}}if(c)return o=o(e),c=a===``?`.`+E(e,0):a,ee(o)?(i=``,c!=null&&(i=c.replace(T,`$&/`)+`/`),oe(o,r,i,``,function(e){return e})):o!=null&&(C(o)&&(o=ie(o,i+(o.key==null||e&&e.key===o.key?``:(``+o.key).replace(T,`$&/`)+`/`)+c)),r.push(o)),1;c=0;var l=a===``?`.`:a+`:`;if(ee(e))for(var u=0;u<e.length;u++)a=e[u],s=l+E(a,u),c+=oe(a,r,i,s,o);else if(u=m(e),typeof u==`function`)for(e=u.call(e),u=0;!(a=e.next()).done;)a=a.value,s=l+E(a,u++),c+=oe(a,r,i,s,o);else if(s===`object`){if(typeof e.then==`function`)return oe(ae(e),r,i,a,o);throw r=String(e),Error(`Objects are not valid as a React child (found: `+(r===`[object Object]`?`object with keys {`+Object.keys(e).join(`, `)+`}`:r)+`). If you meant to render a collection of children, use an array instead.`)}return c}function se(e,t,n){if(e==null)return e;var r=[],i=0;return oe(e,r,``,``,function(e){return t.call(n,e,i++)}),r}function ce(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var D=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},O={map:se,forEach:function(e,t,n){se(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return se(e,function(){t++}),t},toArray:function(e){return se(e,function(e){return e})||[]},only:function(e){if(!C(e))throw Error(`React.Children.only expected to receive a single React element child.`);return e}};e.Activity=f,e.Children=O,e.Component=v,e.Fragment=r,e.Profiler=a,e.PureComponent=b,e.StrictMode=i,e.Suspense=l,e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=S,e.__COMPILER_RUNTIME={__proto__:null,c:function(e){return S.H.useMemoCache(e)}},e.cache=function(e){return function(){return e.apply(null,arguments)}},e.cacheSignal=function(){return null},e.cloneElement=function(e,t,n){if(e==null)throw Error(`The argument must be a React element, but you passed `+e+`.`);var r=g({},e.props),i=e.key;if(t!=null)for(a in t.key!==void 0&&(i=``+t.key),t)!ne.call(t,a)||a===`key`||a===`__self`||a===`__source`||a===`ref`&&t.ref===void 0||(r[a]=t[a]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var o=Array(a),s=0;s<a;s++)o[s]=arguments[s+2];r.children=o}return re(e.type,i,r)},e.createContext=function(e){return e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:o,_context:e},e},e.createElement=function(e,t,n){var r,i={},a=null;if(t!=null)for(r in t.key!==void 0&&(a=``+t.key),t)ne.call(t,r)&&r!==`key`&&r!==`__self`&&r!==`__source`&&(i[r]=t[r]);var o=arguments.length-2;if(o===1)i.children=n;else if(1<o){for(var s=Array(o),c=0;c<o;c++)s[c]=arguments[c+2];i.children=s}if(e&&e.defaultProps)for(r in o=e.defaultProps,o)i[r]===void 0&&(i[r]=o[r]);return re(e,a,i)},e.createRef=function(){return{current:null}},e.forwardRef=function(e){return{$$typeof:c,render:e}},e.isValidElement=C,e.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:ce}},e.memo=function(e,t){return{$$typeof:u,type:e,compare:t===void 0?null:t}},e.startTransition=function(e){var t=S.T,n={};S.T=n;try{var r=e(),i=S.S;i!==null&&i(n,r),typeof r==`object`&&r&&typeof r.then==`function`&&r.then(te,D)}catch(e){D(e)}finally{t!==null&&n.types!==null&&(t.types=n.types),S.T=t}},e.unstable_useCacheRefresh=function(){return S.H.useCacheRefresh()},e.use=function(e){return S.H.use(e)},e.useActionState=function(e,t,n){return S.H.useActionState(e,t,n)},e.useCallback=function(e,t){return S.H.useCallback(e,t)},e.useContext=function(e){return S.H.useContext(e)},e.useDebugValue=function(){},e.useDeferredValue=function(e,t){return S.H.useDeferredValue(e,t)},e.useEffect=function(e,t){return S.H.useEffect(e,t)},e.useEffectEvent=function(e){return S.H.useEffectEvent(e)},e.useId=function(){return S.H.useId()},e.useImperativeHandle=function(e,t,n){return S.H.useImperativeHandle(e,t,n)},e.useInsertionEffect=function(e,t){return S.H.useInsertionEffect(e,t)},e.useLayoutEffect=function(e,t){return S.H.useLayoutEffect(e,t)},e.useMemo=function(e,t){return S.H.useMemo(e,t)},e.useOptimistic=function(e,t){return S.H.useOptimistic(e,t)},e.useReducer=function(e,t,n){return S.H.useReducer(e,t,n)},e.useRef=function(e){return S.H.useRef(e)},e.useState=function(e){return S.H.useState(e)},e.useSyncExternalStore=function(e,t,n){return S.H.useSyncExternalStore(e,t,n)},e.useTransition=function(){return S.H.useTransition()},e.version=`19.2.8`})),n=e(((e,n)=>{n.exports=t()})),r=e((e=>{function t(e,t){var n=e.length;e.push(t);a:for(;0<n;){var r=n-1>>>1,a=e[r];if(0<i(a,t))e[r]=t,e[n]=a,n=r;else break a}}function n(e){return e.length===0?null:e[0]}function r(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;a:for(var r=0,a=e.length,o=a>>>1;r<o;){var s=2*(r+1)-1,c=e[s],l=s+1,u=e[l];if(0>i(c,n))l<a&&0>i(u,c)?(e[r]=u,e[l]=n,r=l):(e[r]=c,e[s]=n,r=s);else if(l<a&&0>i(u,n))e[r]=u,e[l]=n,r=l;else break a}}return t}function i(e,t){var n=e.sortIndex-t.sortIndex;return n===0?e.id-t.id:n}if(e.unstable_now=void 0,typeof performance==`object`&&typeof performance.now==`function`){var a=performance;e.unstable_now=function(){return a.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var c=[],l=[],u=1,d=null,f=3,p=!1,m=!1,h=!1,g=!1,_=typeof setTimeout==`function`?setTimeout:null,v=typeof clearTimeout==`function`?clearTimeout:null,y=typeof setImmediate<`u`?setImmediate:null;function b(e){for(var i=n(l);i!==null;){if(i.callback===null)r(l);else if(i.startTime<=e)r(l),i.sortIndex=i.expirationTime,t(c,i);else break;i=n(l)}}function x(e){if(h=!1,b(e),!m){if(n(c)!==null)m=!0,ee||(ee=!0,C());else{var t=n(l);t!==null&&E(x,t.startTime-e)}}}var ee=!1,te=-1,S=5,ne=-1;function re(){return g?!0:!(e.unstable_now()-ne<S)}function ie(){if(g=!1,ee){var t=e.unstable_now();ne=t;var i=!0;try{a:{m=!1,h&&(h=!1,v(te),te=-1),p=!0;var a=f;try{b:{for(b(t),d=n(c);d!==null&&!(d.expirationTime>t&&re());){var o=d.callback;if(typeof o==`function`){d.callback=null,f=d.priorityLevel;var s=o(d.expirationTime<=t);if(t=e.unstable_now(),typeof s==`function`){d.callback=s,b(t),i=!0;break b}d===n(c)&&r(c),b(t)}else r(c);d=n(c)}if(d!==null)i=!0;else{var u=n(l);u!==null&&E(x,u.startTime-t),i=!1}}break a}finally{d=null,f=a,p=!1}i=void 0}}finally{i?C():ee=!1}}}var C;if(typeof y==`function`)C=function(){y(ie)};else if(typeof MessageChannel<`u`){var w=new MessageChannel,T=w.port2;w.port1.onmessage=ie,C=function(){T.postMessage(null)}}else C=function(){_(ie,0)};function E(t,n){te=_(function(){t(e.unstable_now())},n)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(e){e.callback=null},e.unstable_forceFrameRate=function(e){0>e||125<e?console.error(`forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported`):S=0<e?Math.floor(1e3/e):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_next=function(e){switch(f){case 1:case 2:case 3:var t=3;break;default:t=f}var n=f;f=t;try{return e()}finally{f=n}},e.unstable_requestPaint=function(){g=!0},e.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=f;f=e;try{return t()}finally{f=n}},e.unstable_scheduleCallback=function(r,i,a){var o=e.unstable_now();switch(typeof a==`object`&&a?(a=a.delay,a=typeof a==`number`&&0<a?o+a:o):a=o,r){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return s=a+s,r={id:u++,callback:i,priorityLevel:r,startTime:a,expirationTime:s,sortIndex:-1},a>o?(r.sortIndex=a,t(l,r),n(c)===null&&r===n(l)&&(h?(v(te),te=-1):h=!0,E(x,a-o))):(r.sortIndex=s,t(c,r),m||p||(m=!0,ee||(ee=!0,C()))),r},e.unstable_shouldYield=re,e.unstable_wrapCallback=function(e){var t=f;return function(){var n=f;f=t;try{return e.apply(this,arguments)}finally{f=n}}}})),i=e(((e,t)=>{t.exports=r()})),a=e((e=>{var t=n();function r(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function i(){}var a={d:{f:i,r:function(){throw Error(r(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},o=Symbol.for(`react.portal`);function s(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:o,key:r==null?null:``+r,children:e,containerInfo:t,implementation:n}}var c=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function l(e,t){if(e===`font`)return``;if(typeof t==`string`)return t===`use-credentials`?t:``}e.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=a,e.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(r(299));return s(e,t,null,n)},e.flushSync=function(e){var t=c.T,n=a.p;try{if(c.T=null,a.p=2,e)return e()}finally{c.T=t,a.p=n,a.d.f()}},e.preconnect=function(e,t){typeof e==`string`&&(t?(t=t.crossOrigin,t=typeof t==`string`?t===`use-credentials`?t:``:void 0):t=null,a.d.C(e,t))},e.prefetchDNS=function(e){typeof e==`string`&&a.d.D(e)},e.preinit=function(e,t){if(typeof e==`string`&&t&&typeof t.as==`string`){var n=t.as,r=l(n,t.crossOrigin),i=typeof t.integrity==`string`?t.integrity:void 0,o=typeof t.fetchPriority==`string`?t.fetchPriority:void 0;n===`style`?a.d.S(e,typeof t.precedence==`string`?t.precedence:void 0,{crossOrigin:r,integrity:i,fetchPriority:o}):n===`script`&&a.d.X(e,{crossOrigin:r,integrity:i,fetchPriority:o,nonce:typeof t.nonce==`string`?t.nonce:void 0})}},e.preinitModule=function(e,t){if(typeof e==`string`){if(typeof t==`object`&&t){if(t.as==null||t.as===`script`){var n=l(t.as,t.crossOrigin);a.d.M(e,{crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0})}}else t??a.d.M(e)}},e.preload=function(e,t){if(typeof e==`string`&&typeof t==`object`&&t&&typeof t.as==`string`){var n=t.as,r=l(n,t.crossOrigin);a.d.L(e,n,{crossOrigin:r,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0,type:typeof t.type==`string`?t.type:void 0,fetchPriority:typeof t.fetchPriority==`string`?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy==`string`?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet==`string`?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes==`string`?t.imageSizes:void 0,media:typeof t.media==`string`?t.media:void 0})}},e.preloadModule=function(e,t){if(typeof e==`string`){if(t){var n=l(t.as,t.crossOrigin);a.d.m(e,{as:typeof t.as==`string`&&t.as!==`script`?t.as:void 0,crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0})}else a.d.m(e)}},e.requestFormReset=function(e){a.d.r(e)},e.unstable_batchedUpdates=function(e,t){return e(t)},e.useFormState=function(e,t,n){return c.H.useFormState(e,t,n)},e.useFormStatus=function(){return c.H.useHostTransitionStatus()},e.version=`19.2.8`})),o=e(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=a()})),s=e((e=>{var t=i(),r=n(),a=o();function s(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function c(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function l(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function u(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function d(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function f(e){if(l(e)!==e)throw Error(s(188))}function p(e){var t=e.alternate;if(!t){if(t=l(e),t===null)throw Error(s(188));return t===e?e:null}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var a=i.alternate;if(a===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===a.child){for(a=i.child;a;){if(a===n)return f(i),e;if(a===r)return f(i),t;a=a.sibling}throw Error(s(188))}if(n.return!==r.return)n=i,r=a;else{for(var o=!1,c=i.child;c;){if(c===n){o=!0,n=i,r=a;break}if(c===r){o=!0,r=i,n=a;break}c=c.sibling}if(!o){for(c=a.child;c;){if(c===n){o=!0,n=a,r=i;break}if(c===r){o=!0,r=a,n=i;break}c=c.sibling}if(!o)throw Error(s(189))}}if(n.alternate!==r)throw Error(s(190))}if(n.tag!==3)throw Error(s(188));return n.stateNode.current===n?e:t}function m(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=m(e),t!==null)return t;e=e.sibling}return null}var h=Object.assign,g=Symbol.for(`react.element`),_=Symbol.for(`react.transitional.element`),v=Symbol.for(`react.portal`),y=Symbol.for(`react.fragment`),b=Symbol.for(`react.strict_mode`),x=Symbol.for(`react.profiler`),ee=Symbol.for(`react.consumer`),te=Symbol.for(`react.context`),S=Symbol.for(`react.forward_ref`),ne=Symbol.for(`react.suspense`),re=Symbol.for(`react.suspense_list`),ie=Symbol.for(`react.memo`),C=Symbol.for(`react.lazy`),w=Symbol.for(`react.activity`),T=Symbol.for(`react.memo_cache_sentinel`),E=Symbol.iterator;function ae(e){return typeof e!=`object`||!e?null:(e=E&&e[E]||e[`@@iterator`],typeof e==`function`?e:null)}var oe=Symbol.for(`react.client.reference`);function se(e){if(e==null)return null;if(typeof e==`function`)return e.$$typeof===oe?null:e.displayName||e.name||null;if(typeof e==`string`)return e;switch(e){case y:return`Fragment`;case x:return`Profiler`;case b:return`StrictMode`;case ne:return`Suspense`;case re:return`SuspenseList`;case w:return`Activity`}if(typeof e==`object`)switch(e.$$typeof){case v:return`Portal`;case te:return e.displayName||`Context`;case ee:return(e._context.displayName||`Context`)+`.Consumer`;case S:var t=e.render;return e=e.displayName,e||=(e=t.displayName||t.name||``,e===``?`ForwardRef`:`ForwardRef(`+e+`)`),e;case ie:return t=e.displayName||null,t===null?se(e.type)||`Memo`:t;case C:t=e._payload,e=e._init;try{return se(e(t))}catch{}}return null}var ce=Array.isArray,D=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,O=a.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,le={pending:!1,data:null,method:null,action:null},ue=[],de=-1;function fe(e){return{current:e}}function k(e){0>de||(e.current=ue[de],ue[de]=null,de--)}function A(e,t){de++,ue[de]=e.current,e.current=t}var pe=fe(null),me=fe(null),he=fe(null),ge=fe(null);function _e(e,t){switch(A(he,t),A(me,e),A(pe,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Vd(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Vd(t),e=Hd(t,e);else switch(e){case`svg`:e=1;break;case`math`:e=2;break;default:e=0}}k(pe),A(pe,e)}function ve(){k(pe),k(me),k(he)}function ye(e){e.memoizedState!==null&&A(ge,e);var t=pe.current,n=Hd(t,e.type);t!==n&&(A(me,e),A(pe,n))}function be(e){me.current===e&&(k(pe),k(me)),ge.current===e&&(k(ge),Qf._currentValue=le)}var xe,Se;function j(e){if(xe===void 0)try{throw Error()}catch(e){var t=e.stack.trim().match(/\n( *(at )?)/);xe=t&&t[1]||``,Se=-1<e.stack.indexOf(`
    at`)?` (<anonymous>)`:-1<e.stack.indexOf(`@`)?`@unknown:0:0`:``}return`
`+xe+e+Se}var Ce=!1;function we(e,t){if(!e||Ce)return``;Ce=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(t){var n=function(){throw Error()};if(Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect==`object`&&Reflect.construct){try{Reflect.construct(n,[])}catch(e){var r=e}Reflect.construct(e,[],n)}else{try{n.call()}catch(e){r=e}e.call(n.prototype)}}else{try{throw Error()}catch(e){r=e}(n=e())&&typeof n.catch==`function`&&n.catch(function(){})}}catch(e){if(e&&r&&typeof e.stack==`string`)return[e.stack,r.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName=`DetermineComponentFrameRoot`;var i=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,`name`);i&&i.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:`DetermineComponentFrameRoot`});var a=r.DetermineComponentFrameRoot(),o=a[0],s=a[1];if(o&&s){var c=o.split(`
`),l=s.split(`
`);for(i=r=0;r<c.length&&!c[r].includes(`DetermineComponentFrameRoot`);)r++;for(;i<l.length&&!l[i].includes(`DetermineComponentFrameRoot`);)i++;if(r===c.length||i===l.length)for(r=c.length-1,i=l.length-1;1<=r&&0<=i&&c[r]!==l[i];)i--;for(;1<=r&&0<=i;r--,i--)if(c[r]!==l[i]){if(r!==1||i!==1)do if(r--,i--,0>i||c[r]!==l[i]){var u=`
`+c[r].replace(` at new `,` at `);return e.displayName&&u.includes(`<anonymous>`)&&(u=u.replace(`<anonymous>`,e.displayName)),u}while(1<=r&&0<=i);break}}}finally{Ce=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:``)?j(n):``}function Te(e,t){switch(e.tag){case 26:case 27:case 5:return j(e.type);case 16:return j(`Lazy`);case 13:return e.child!==t&&t!==null?j(`Suspense Fallback`):j(`Suspense`);case 19:return j(`SuspenseList`);case 0:case 15:return we(e.type,!1);case 11:return we(e.type.render,!1);case 1:return we(e.type,!0);case 31:return j(`Activity`);default:return``}}function Ee(e){try{var t=``,n=null;do t+=Te(e,n),n=e,e=e.return;while(e);return t}catch(e){return`
Error generating stack: `+e.message+`
`+e.stack}}var De=Object.prototype.hasOwnProperty,Oe=t.unstable_scheduleCallback,M=t.unstable_cancelCallback,ke=t.unstable_shouldYield,Ae=t.unstable_requestPaint,je=t.unstable_now,Me=t.unstable_getCurrentPriorityLevel,Ne=t.unstable_ImmediatePriority,Pe=t.unstable_UserBlockingPriority,Fe=t.unstable_NormalPriority,Ie=t.unstable_LowPriority,Le=t.unstable_IdlePriority,Re=t.log,ze=t.unstable_setDisableYieldValue,Be=null,Ve=null;function He(e){if(typeof Re==`function`&&ze(e),Ve&&typeof Ve.setStrictMode==`function`)try{Ve.setStrictMode(Be,e)}catch{}}var Ue=Math.clz32?Math.clz32:Ke,We=Math.log,Ge=Math.LN2;function Ke(e){return e>>>=0,e===0?32:31-(We(e)/Ge|0)|0}var qe=256,Je=262144,Ye=4194304;function Xe(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Ze(e,t,n){var r=e.pendingLanes;if(r===0)return 0;var i=0,a=e.suspendedLanes,o=e.pingedLanes;e=e.warmLanes;var s=r&134217727;return s===0?(s=r&~a,s===0?o===0?n||(n=r&~e,n!==0&&(i=Xe(n))):i=Xe(o):i=Xe(s)):(r=s&~a,r===0?(o&=s,o===0?n||(n=s&~e,n!==0&&(i=Xe(n))):i=Xe(o)):i=Xe(r)),i===0?0:t!==0&&t!==i&&(t&a)===0&&(a=i&-i,n=t&-t,a>=n||a===32&&n&4194048)?t:i}function Qe(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function N(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function P(){var e=Ye;return Ye<<=1,!(Ye&62914560)&&(Ye=4194304),e}function $e(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function et(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function tt(e,t,n,r,i,a){var o=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var s=e.entanglements,c=e.expirationTimes,l=e.hiddenUpdates;for(n=o&~n;0<n;){var u=31-Ue(n),d=1<<u;s[u]=0,c[u]=-1;var f=l[u];if(f!==null)for(l[u]=null,u=0;u<f.length;u++){var p=f[u];p!==null&&(p.lane&=-536870913)}n&=~d}r!==0&&nt(e,r,0),a!==0&&i===0&&e.tag!==0&&(e.suspendedLanes|=a&~(o&~t))}function nt(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var r=31-Ue(t);e.entangledLanes|=t,e.entanglements[r]=e.entanglements[r]|1073741824|n&261930}function rt(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Ue(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}function it(e,t){var n=t&-t;return n=n&42?1:at(n),(n&(e.suspendedLanes|t))===0?n:0}function at(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function ot(e){return e&=-e,2<e?8<e?e&134217727?32:268435456:8:2}function st(){var e=O.p;return e===0?(e=window.event,e===void 0?32:mp(e.type)):e}function ct(e,t){var n=O.p;try{return O.p=e,t()}finally{O.p=n}}var lt=Math.random().toString(36).slice(2),F=`__reactFiber$`+lt,ut=`__reactProps$`+lt,dt=`__reactContainer$`+lt,ft=`__reactEvents$`+lt,pt=`__reactListeners$`+lt,mt=`__reactHandles$`+lt,ht=`__reactResources$`+lt,gt=`__reactMarker$`+lt;function _t(e){delete e[F],delete e[ut],delete e[ft],delete e[pt],delete e[mt]}function vt(e){var t=e[F];if(t)return t;for(var n=e.parentNode;n;){if(t=n[dt]||n[F]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=df(e);e!==null;){if(n=e[F])return n;e=df(e)}return t}e=n,n=e.parentNode}return null}function yt(e){if(e=e[F]||e[dt]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function bt(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(s(33))}function xt(e){var t=e[ht];return t||=e[ht]={hoistableStyles:new Map,hoistableScripts:new Map},t}function St(e){e[gt]=!0}var Ct=new Set,wt={};function Tt(e,t){Et(e,t),Et(e+`Capture`,t)}function Et(e,t){for(wt[e]=t,e=0;e<t.length;e++)Ct.add(t[e])}var Dt=RegExp(`^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$`),Ot={},kt={};function At(e){return De.call(kt,e)?!0:De.call(Ot,e)?!1:Dt.test(e)?kt[e]=!0:(Ot[e]=!0,!1)}function jt(e,t,n){if(At(t)){if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:e.removeAttribute(t);return;case`boolean`:var r=t.toLowerCase().slice(0,5);if(r!==`data-`&&r!==`aria-`){e.removeAttribute(t);return}}e.setAttribute(t,``+n)}}}function Mt(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(t);return}e.setAttribute(t,``+n)}}function Nt(e,t,n,r){if(r===null)e.removeAttribute(n);else{switch(typeof r){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(n);return}e.setAttributeNS(t,n,``+r)}}function Pt(e){switch(typeof e){case`bigint`:case`boolean`:case`number`:case`string`:case`undefined`:return e;case`object`:return e;default:return``}}function Ft(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()===`input`&&(t===`checkbox`||t===`radio`)}function It(e,t,n){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&r!==void 0&&typeof r.get==`function`&&typeof r.set==`function`){var i=r.get,a=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(e){n=``+e,a.call(this,e)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(e){n=``+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Lt(e){if(!e._valueTracker){var t=Ft(e)?`checked`:`value`;e._valueTracker=It(e,t,``+e[t])}}function Rt(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r=``;return e&&(r=Ft(e)?e.checked?`true`:`false`:e.value),e=r,e!==n&&(t.setValue(e),!0)}function zt(e){if(e||=typeof document<`u`?document:void 0,e===void 0)return null;try{return e.activeElement||e.body}catch{return e.body}}var Bt=/[\n"\\]/g;function Vt(e){return e.replace(Bt,function(e){return`\\`+e.charCodeAt(0).toString(16)+` `})}function Ht(e,t,n,r,i,a,o,s){e.name=``,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`?e.type=o:e.removeAttribute(`type`),t==null?o!==`submit`&&o!==`reset`||e.removeAttribute(`value`):o===`number`?(t===0&&e.value===``||e.value!=t)&&(e.value=``+Pt(t)):e.value!==``+Pt(t)&&(e.value=``+Pt(t)),t==null?n==null?r!=null&&e.removeAttribute(`value`):Wt(e,o,Pt(n)):Wt(e,o,Pt(t)),i==null&&a!=null&&(e.defaultChecked=!!a),i!=null&&(e.checked=i&&typeof i!=`function`&&typeof i!=`symbol`),s!=null&&typeof s!=`function`&&typeof s!=`symbol`&&typeof s!=`boolean`?e.name=``+Pt(s):e.removeAttribute(`name`)}function Ut(e,t,n,r,i,a,o,s){if(a!=null&&typeof a!=`function`&&typeof a!=`symbol`&&typeof a!=`boolean`&&(e.type=a),t!=null||n!=null){if(!(a!==`submit`&&a!==`reset`||t!=null)){Lt(e);return}n=n==null?``:``+Pt(n),t=t==null?n:``+Pt(t),s||t===e.value||(e.value=t),e.defaultValue=t}r??=i,r=typeof r!=`function`&&typeof r!=`symbol`&&!!r,e.checked=s?e.checked:!!r,e.defaultChecked=!!r,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`&&(e.name=o),Lt(e)}function Wt(e,t,n){t===`number`&&zt(e.ownerDocument)===e||e.defaultValue===``+n||(e.defaultValue=``+n)}function Gt(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t[`$`+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty(`$`+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=``+Pt(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Kt(e,t,n){if(t!=null&&(t=``+Pt(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n==null?``:``+Pt(n)}function qt(e,t,n,r){if(t==null){if(r!=null){if(n!=null)throw Error(s(92));if(ce(r)){if(1<r.length)throw Error(s(93));r=r[0]}n=r}n??=``,t=n}n=Pt(t),e.defaultValue=n,r=e.textContent,r===n&&r!==``&&r!==null&&(e.value=r),Lt(e)}function Jt(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Yt=new Set(`animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp`.split(` `));function Xt(e,t,n){var r=t.indexOf(`--`)===0;n==null||typeof n==`boolean`||n===``?r?e.setProperty(t,``):t===`float`?e.cssFloat=``:e[t]=``:r?e.setProperty(t,n):typeof n!=`number`||n===0||Yt.has(t)?t===`float`?e.cssFloat=n:e[t]=(``+n).trim():e[t]=n+`px`}function Zt(e,t,n){if(t!=null&&typeof t!=`object`)throw Error(s(62));if(e=e.style,n!=null){for(var r in n)!n.hasOwnProperty(r)||t!=null&&t.hasOwnProperty(r)||(r.indexOf(`--`)===0?e.setProperty(r,``):r===`float`?e.cssFloat=``:e[r]=``);for(var i in t)r=t[i],t.hasOwnProperty(i)&&n[i]!==r&&Xt(e,i,r)}else for(var a in t)t.hasOwnProperty(a)&&Xt(e,a,t[a])}function Qt(e){if(e.indexOf(`-`)===-1)return!1;switch(e){case`annotation-xml`:case`color-profile`:case`font-face`:case`font-face-src`:case`font-face-uri`:case`font-face-format`:case`font-face-name`:case`missing-glyph`:return!1;default:return!0}}var $t=new Map([[`acceptCharset`,`accept-charset`],[`htmlFor`,`for`],[`httpEquiv`,`http-equiv`],[`crossOrigin`,`crossorigin`],[`accentHeight`,`accent-height`],[`alignmentBaseline`,`alignment-baseline`],[`arabicForm`,`arabic-form`],[`baselineShift`,`baseline-shift`],[`capHeight`,`cap-height`],[`clipPath`,`clip-path`],[`clipRule`,`clip-rule`],[`colorInterpolation`,`color-interpolation`],[`colorInterpolationFilters`,`color-interpolation-filters`],[`colorProfile`,`color-profile`],[`colorRendering`,`color-rendering`],[`dominantBaseline`,`dominant-baseline`],[`enableBackground`,`enable-background`],[`fillOpacity`,`fill-opacity`],[`fillRule`,`fill-rule`],[`floodColor`,`flood-color`],[`floodOpacity`,`flood-opacity`],[`fontFamily`,`font-family`],[`fontSize`,`font-size`],[`fontSizeAdjust`,`font-size-adjust`],[`fontStretch`,`font-stretch`],[`fontStyle`,`font-style`],[`fontVariant`,`font-variant`],[`fontWeight`,`font-weight`],[`glyphName`,`glyph-name`],[`glyphOrientationHorizontal`,`glyph-orientation-horizontal`],[`glyphOrientationVertical`,`glyph-orientation-vertical`],[`horizAdvX`,`horiz-adv-x`],[`horizOriginX`,`horiz-origin-x`],[`imageRendering`,`image-rendering`],[`letterSpacing`,`letter-spacing`],[`lightingColor`,`lighting-color`],[`markerEnd`,`marker-end`],[`markerMid`,`marker-mid`],[`markerStart`,`marker-start`],[`overlinePosition`,`overline-position`],[`overlineThickness`,`overline-thickness`],[`paintOrder`,`paint-order`],[`panose-1`,`panose-1`],[`pointerEvents`,`pointer-events`],[`renderingIntent`,`rendering-intent`],[`shapeRendering`,`shape-rendering`],[`stopColor`,`stop-color`],[`stopOpacity`,`stop-opacity`],[`strikethroughPosition`,`strikethrough-position`],[`strikethroughThickness`,`strikethrough-thickness`],[`strokeDasharray`,`stroke-dasharray`],[`strokeDashoffset`,`stroke-dashoffset`],[`strokeLinecap`,`stroke-linecap`],[`strokeLinejoin`,`stroke-linejoin`],[`strokeMiterlimit`,`stroke-miterlimit`],[`strokeOpacity`,`stroke-opacity`],[`strokeWidth`,`stroke-width`],[`textAnchor`,`text-anchor`],[`textDecoration`,`text-decoration`],[`textRendering`,`text-rendering`],[`transformOrigin`,`transform-origin`],[`underlinePosition`,`underline-position`],[`underlineThickness`,`underline-thickness`],[`unicodeBidi`,`unicode-bidi`],[`unicodeRange`,`unicode-range`],[`unitsPerEm`,`units-per-em`],[`vAlphabetic`,`v-alphabetic`],[`vHanging`,`v-hanging`],[`vIdeographic`,`v-ideographic`],[`vMathematical`,`v-mathematical`],[`vectorEffect`,`vector-effect`],[`vertAdvY`,`vert-adv-y`],[`vertOriginX`,`vert-origin-x`],[`vertOriginY`,`vert-origin-y`],[`wordSpacing`,`word-spacing`],[`writingMode`,`writing-mode`],[`xmlnsXlink`,`xmlns:xlink`],[`xHeight`,`x-height`]]),en=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function tn(e){return en.test(``+e)?`javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')`:e}function nn(){}var rn=null;function an(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var on=null,sn=null;function cn(e){var t=yt(e);if(t&&(e=t.stateNode)){var n=e[ut]||null;a:switch(e=t.stateNode,t.type){case`input`:if(Ht(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type===`radio`&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll(`input[name="`+Vt(``+t)+`"][type="radio"]`),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=r[ut]||null;if(!i)throw Error(s(90));Ht(r,i.value,i.defaultValue,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name)}}for(t=0;t<n.length;t++)r=n[t],r.form===e.form&&Rt(r)}break a;case`textarea`:Kt(e,n.value,n.defaultValue);break a;case`select`:t=n.value,t!=null&&Gt(e,!!n.multiple,t,!1)}}}var ln=!1;function un(e,t,n){if(ln)return e(t,n);ln=!0;try{return e(t)}finally{if(ln=!1,(on!==null||sn!==null)&&(bu(),on&&(t=on,e=sn,sn=on=null,cn(t),e)))for(t=0;t<e.length;t++)cn(e[t])}}function dn(e,t){var n=e.stateNode;if(n===null)return null;var r=n[ut]||null;if(r===null)return null;n=r[t];a:switch(t){case`onClick`:case`onClickCapture`:case`onDoubleClick`:case`onDoubleClickCapture`:case`onMouseDown`:case`onMouseDownCapture`:case`onMouseMove`:case`onMouseMoveCapture`:case`onMouseUp`:case`onMouseUpCapture`:case`onMouseEnter`:(r=!r.disabled)||(e=e.type,r=e!==`button`&&e!==`input`&&e!==`select`&&e!==`textarea`),e=!r;break a;default:e=!1}if(e)return null;if(n&&typeof n!=`function`)throw Error(s(231,t,typeof n));return n}var fn=!(typeof window>`u`||window.document===void 0||window.document.createElement===void 0),pn=!1;if(fn)try{var mn={};Object.defineProperty(mn,"passive",{get:function(){pn=!0}}),window.addEventListener(`test`,mn,mn),window.removeEventListener(`test`,mn,mn)}catch{pn=!1}var hn=null,gn=null,_n=null;function vn(){if(_n)return _n;var e,t=gn,n=t.length,r,i=`value`in hn?hn.value:hn.textContent,a=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[a-r];r++);return _n=i.slice(e,1<r?1-r:void 0)}function yn(e){var t=e.keyCode;return`charCode`in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function bn(){return!0}function xn(){return!1}function Sn(e){function t(t,n,r,i,a){for(var o in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=i,this.target=a,this.currentTarget=null,e)e.hasOwnProperty(o)&&(t=e[o],this[o]=t?t(i):i[o]);return this.isDefaultPrevented=(i.defaultPrevented==null?!1===i.returnValue:i.defaultPrevented)?bn:xn,this.isPropagationStopped=xn,this}return h(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():typeof e.returnValue!=`unknown`&&(e.returnValue=!1),this.isDefaultPrevented=bn)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():typeof e.cancelBubble!=`unknown`&&(e.cancelBubble=!0),this.isPropagationStopped=bn)},persist:function(){},isPersistent:bn}),t}var Cn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},wn=Sn(Cn),Tn=h({},Cn,{view:0,detail:0}),En=Sn(Tn),Dn,On,kn,An=h({},Tn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Vn,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return`movementX`in e?e.movementX:(e!==kn&&(kn&&e.type===`mousemove`?(Dn=e.screenX-kn.screenX,On=e.screenY-kn.screenY):On=Dn=0,kn=e),Dn)},movementY:function(e){return`movementY`in e?e.movementY:On}}),jn=Sn(An),Mn=Sn(h({},An,{dataTransfer:0})),Nn=Sn(h({},Tn,{relatedTarget:0})),Pn=Sn(h({},Cn,{animationName:0,elapsedTime:0,pseudoElement:0})),Fn=Sn(h({},Cn,{clipboardData:function(e){return`clipboardData`in e?e.clipboardData:window.clipboardData}})),In=Sn(h({},Cn,{data:0})),Ln={Esc:`Escape`,Spacebar:` `,Left:`ArrowLeft`,Up:`ArrowUp`,Right:`ArrowRight`,Down:`ArrowDown`,Del:`Delete`,Win:`OS`,Menu:`ContextMenu`,Apps:`ContextMenu`,Scroll:`ScrollLock`,MozPrintableKey:`Unidentified`},Rn={8:`Backspace`,9:`Tab`,12:`Clear`,13:`Enter`,16:`Shift`,17:`Control`,18:`Alt`,19:`Pause`,20:`CapsLock`,27:`Escape`,32:` `,33:`PageUp`,34:`PageDown`,35:`End`,36:`Home`,37:`ArrowLeft`,38:`ArrowUp`,39:`ArrowRight`,40:`ArrowDown`,45:`Insert`,46:`Delete`,112:`F1`,113:`F2`,114:`F3`,115:`F4`,116:`F5`,117:`F6`,118:`F7`,119:`F8`,120:`F9`,121:`F10`,122:`F11`,123:`F12`,144:`NumLock`,145:`ScrollLock`,224:`Meta`},zn={Alt:`altKey`,Control:`ctrlKey`,Meta:`metaKey`,Shift:`shiftKey`};function Bn(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=zn[e])?!!t[e]:!1}function Vn(){return Bn}var Hn=Sn(h({},Tn,{key:function(e){if(e.key){var t=Ln[e.key]||e.key;if(t!==`Unidentified`)return t}return e.type===`keypress`?(e=yn(e),e===13?`Enter`:String.fromCharCode(e)):e.type===`keydown`||e.type===`keyup`?Rn[e.keyCode]||`Unidentified`:``},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Vn,charCode:function(e){return e.type===`keypress`?yn(e):0},keyCode:function(e){return e.type===`keydown`||e.type===`keyup`?e.keyCode:0},which:function(e){return e.type===`keypress`?yn(e):e.type===`keydown`||e.type===`keyup`?e.keyCode:0}})),Un=Sn(h({},An,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),Wn=Sn(h({},Tn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Vn})),Gn=Sn(h({},Cn,{propertyName:0,elapsedTime:0,pseudoElement:0})),Kn=Sn(h({},An,{deltaX:function(e){return`deltaX`in e?e.deltaX:`wheelDeltaX`in e?-e.wheelDeltaX:0},deltaY:function(e){return`deltaY`in e?e.deltaY:`wheelDeltaY`in e?-e.wheelDeltaY:`wheelDelta`in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0})),qn=Sn(h({},Cn,{newState:0,oldState:0})),Jn=[9,13,27,32],Yn=fn&&`CompositionEvent`in window,Xn=null;fn&&`documentMode`in document&&(Xn=document.documentMode);var Zn=fn&&`TextEvent`in window&&!Xn,Qn=fn&&(!Yn||Xn&&8<Xn&&11>=Xn),$n=` `,er=!1;function tr(e,t){switch(e){case`keyup`:return Jn.indexOf(t.keyCode)!==-1;case`keydown`:return t.keyCode!==229;case`keypress`:case`mousedown`:case`focusout`:return!0;default:return!1}}function nr(e){return e=e.detail,typeof e==`object`&&`data`in e?e.data:null}var rr=!1;function ir(e,t){switch(e){case`compositionend`:return nr(t);case`keypress`:return t.which===32?(er=!0,$n):null;case`textInput`:return e=t.data,e===$n&&er?null:e;default:return null}}function ar(e,t){if(rr)return e===`compositionend`||!Yn&&tr(e,t)?(e=vn(),_n=gn=hn=null,rr=!1,e):null;switch(e){case`paste`:return null;case`keypress`:if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case`compositionend`:return Qn&&t.locale!==`ko`?null:t.data;default:return null}}var or={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function sr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t===`input`?!!or[e.type]:t===`textarea`}function cr(e,t,n,r){on?sn?sn.push(r):sn=[r]:on=r,t=Ed(t,`onChange`),0<t.length&&(n=new wn(`onChange`,`change`,null,n,r),e.push({event:n,listeners:t}))}var lr=null,ur=null;function dr(e){yd(e,0)}function fr(e){if(Rt(bt(e)))return e}function pr(e,t){if(e===`change`)return t}var mr=!1;if(fn){var hr;if(fn){var gr=`oninput`in document;if(!gr){var _r=document.createElement(`div`);_r.setAttribute(`oninput`,`return;`),gr=typeof _r.oninput==`function`}hr=gr}else hr=!1;mr=hr&&(!document.documentMode||9<document.documentMode)}function vr(){lr&&(lr.detachEvent(`onpropertychange`,yr),ur=lr=null)}function yr(e){if(e.propertyName===`value`&&fr(ur)){var t=[];cr(t,ur,e,an(e)),un(dr,t)}}function br(e,t,n){e===`focusin`?(vr(),lr=t,ur=n,lr.attachEvent(`onpropertychange`,yr)):e===`focusout`&&vr()}function xr(e){if(e===`selectionchange`||e===`keyup`||e===`keydown`)return fr(ur)}function Sr(e,t){if(e===`click`)return fr(t)}function Cr(e,t){if(e===`input`||e===`change`)return fr(t)}function wr(e,t){return e===t&&(e!==0||1/e==1/t)||e!==e&&t!==t}var Tr=typeof Object.is==`function`?Object.is:wr;function Er(e,t){if(Tr(e,t))return!0;if(typeof e!=`object`||!e||typeof t!=`object`||!t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!De.call(t,i)||!Tr(e[i],t[i]))return!1}return!0}function Dr(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Or(e,t){var n=Dr(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}a:{for(;n;){if(n.nextSibling){n=n.nextSibling;break a}n=n.parentNode}n=void 0}n=Dr(n)}}function kr(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?kr(e,t.parentNode):`contains`in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Ar(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=zt(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href==`string`}catch{n=!1}if(n)e=t.contentWindow;else break;t=zt(e.document)}return t}function jr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t===`input`&&(e.type===`text`||e.type===`search`||e.type===`tel`||e.type===`url`||e.type===`password`)||t===`textarea`||e.contentEditable===`true`)}var Mr=fn&&`documentMode`in document&&11>=document.documentMode,Nr=null,Pr=null,Fr=null,Ir=!1;function Lr(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ir||Nr==null||Nr!==zt(r)||(r=Nr,`selectionStart`in r&&jr(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Fr&&Er(Fr,r)||(Fr=r,r=Ed(Pr,`onSelect`),0<r.length&&(t=new wn(`onSelect`,`select`,null,t,n),e.push({event:t,listeners:r}),t.target=Nr)))}function Rr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n[`Webkit`+e]=`webkit`+t,n[`Moz`+e]=`moz`+t,n}var zr={animationend:Rr(`Animation`,`AnimationEnd`),animationiteration:Rr(`Animation`,`AnimationIteration`),animationstart:Rr(`Animation`,`AnimationStart`),transitionrun:Rr(`Transition`,`TransitionRun`),transitionstart:Rr(`Transition`,`TransitionStart`),transitioncancel:Rr(`Transition`,`TransitionCancel`),transitionend:Rr(`Transition`,`TransitionEnd`)},Br={},Vr={};fn&&(Vr=document.createElement(`div`).style,`AnimationEvent`in window||(delete zr.animationend.animation,delete zr.animationiteration.animation,delete zr.animationstart.animation),`TransitionEvent`in window||delete zr.transitionend.transition);function Hr(e){if(Br[e])return Br[e];if(!zr[e])return e;var t=zr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Vr)return Br[e]=t[n];return e}var Ur=Hr(`animationend`),Wr=Hr(`animationiteration`),Gr=Hr(`animationstart`),Kr=Hr(`transitionrun`),qr=Hr(`transitionstart`),Jr=Hr(`transitioncancel`),Yr=Hr(`transitionend`),Xr=new Map,Zr=`abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel`.split(` `);Zr.push(`scrollEnd`);function Qr(e,t){Xr.set(e,t),Tt(t,[e])}var $r=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},ei=[],ti=0,ni=0;function ri(){for(var e=ti,t=ni=ti=0;t<e;){var n=ei[t];ei[t++]=null;var r=ei[t];ei[t++]=null;var i=ei[t];ei[t++]=null;var a=ei[t];if(ei[t++]=null,r!==null&&i!==null){var o=r.pending;o===null?i.next=i:(i.next=o.next,o.next=i),r.pending=i}a!==0&&si(n,i,a)}}function ii(e,t,n,r){ei[ti++]=e,ei[ti++]=t,ei[ti++]=n,ei[ti++]=r,ni|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function ai(e,t,n,r){return ii(e,t,n,r),ci(e)}function oi(e,t){return ii(e,null,null,t),ci(e)}function si(e,t,n){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n);for(var i=!1,a=e.return;a!==null;)a.childLanes|=n,r=a.alternate,r!==null&&(r.childLanes|=n),a.tag===22&&(e=a.stateNode,e===null||e._visibility&1||(i=!0)),e=a,a=a.return;return e.tag===3?(a=e.stateNode,i&&t!==null&&(i=31-Ue(n),e=a.hiddenUpdates,r=e[i],r===null?e[i]=[t]:r.push(t),t.lane=n|536870912),a):null}function ci(e){if(50<du)throw du=0,fu=null,Error(s(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var li={};function ui(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function di(e,t,n,r){return new ui(e,t,n,r)}function fi(e){return e=e.prototype,!(!e||!e.isReactComponent)}function pi(e,t){var n=e.alternate;return n===null?(n=di(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function mi(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function hi(e,t,n,r,i,a){var o=0;if(r=e,typeof e==`function`)fi(e)&&(o=1);else if(typeof e==`string`)o=Uf(e,n,pe.current)?26:e===`html`||e===`head`||e===`body`?27:5;else a:switch(e){case w:return e=di(31,n,t,i),e.elementType=w,e.lanes=a,e;case y:return gi(n.children,i,a,t);case b:o=8,i|=24;break;case x:return e=di(12,n,t,i|2),e.elementType=x,e.lanes=a,e;case ne:return e=di(13,n,t,i),e.elementType=ne,e.lanes=a,e;case re:return e=di(19,n,t,i),e.elementType=re,e.lanes=a,e;default:if(typeof e==`object`&&e)switch(e.$$typeof){case te:o=10;break a;case ee:o=9;break a;case S:o=11;break a;case ie:o=14;break a;case C:o=16,r=null;break a}o=29,n=Error(s(130,e===null?`null`:typeof e,``)),r=null}return t=di(o,n,t,i),t.elementType=e,t.type=r,t.lanes=a,t}function gi(e,t,n,r){return e=di(7,e,r,t),e.lanes=n,e}function _i(e,t,n){return e=di(6,e,null,t),e.lanes=n,e}function vi(e){var t=di(18,null,null,0);return t.stateNode=e,t}function yi(e,t,n){return t=di(4,e.children===null?[]:e.children,e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var bi=new WeakMap;function xi(e,t){if(typeof e==`object`&&e){var n=bi.get(e);return n===void 0?(t={value:e,source:t,stack:Ee(t)},bi.set(e,t),t):n}return{value:e,source:t,stack:Ee(t)}}var Si=[],Ci=0,wi=null,Ti=0,Ei=[],Di=0,Oi=null,ki=1,Ai=``;function ji(e,t){Si[Ci++]=Ti,Si[Ci++]=wi,wi=e,Ti=t}function Mi(e,t,n){Ei[Di++]=ki,Ei[Di++]=Ai,Ei[Di++]=Oi,Oi=e;var r=ki;e=Ai;var i=32-Ue(r)-1;r&=~(1<<i),n+=1;var a=32-Ue(t)+i;if(30<a){var o=i-i%5;a=(r&(1<<o)-1).toString(32),r>>=o,i-=o,ki=1<<32-Ue(t)+i|n<<i|r,Ai=a+e}else ki=1<<a|n<<i|r,Ai=e}function Ni(e){e.return!==null&&(ji(e,1),Mi(e,1,0))}function Pi(e){for(;e===wi;)wi=Si[--Ci],Si[Ci]=null,Ti=Si[--Ci],Si[Ci]=null;for(;e===Oi;)Oi=Ei[--Di],Ei[Di]=null,Ai=Ei[--Di],Ei[Di]=null,ki=Ei[--Di],Ei[Di]=null}function Fi(e,t){Ei[Di++]=ki,Ei[Di++]=Ai,Ei[Di++]=Oi,ki=t.id,Ai=t.overflow,Oi=e}var Ii=null,I=null,L=!1,Li=null,Ri=!1,zi=Error(s(519));function Bi(e){throw Ki(xi(Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?`text`:`HTML`,``)),e)),zi}function Vi(e){var t=e.stateNode,n=e.type,r=e.memoizedProps;switch(t[F]=e,t[ut]=r,n){case`dialog`:Q(`cancel`,t),Q(`close`,t);break;case`iframe`:case`object`:case`embed`:Q(`load`,t);break;case`video`:case`audio`:for(n=0;n<_d.length;n++)Q(_d[n],t);break;case`source`:Q(`error`,t);break;case`img`:case`image`:case`link`:Q(`error`,t),Q(`load`,t);break;case`details`:Q(`toggle`,t);break;case`input`:Q(`invalid`,t),Ut(t,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case`select`:Q(`invalid`,t);break;case`textarea`:Q(`invalid`,t),qt(t,r.value,r.defaultValue,r.children)}n=r.children,typeof n!=`string`&&typeof n!=`number`&&typeof n!=`bigint`||t.textContent===``+n||!0===r.suppressHydrationWarning||Md(t.textContent,n)?(r.popover!=null&&(Q(`beforetoggle`,t),Q(`toggle`,t)),r.onScroll!=null&&Q(`scroll`,t),r.onScrollEnd!=null&&Q(`scrollend`,t),r.onClick!=null&&(t.onclick=nn),t=!0):t=!1,t||Bi(e,!0)}function Hi(e){for(Ii=e.return;Ii;)switch(Ii.tag){case 5:case 31:case 13:Ri=!1;return;case 27:case 3:Ri=!0;return;default:Ii=Ii.return}}function Ui(e){if(e!==Ii)return!1;if(!L)return Hi(e),L=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=n===`form`||n===`button`||Ud(e.type,e.memoizedProps)),n=!n),n&&I&&Bi(e),Hi(e),t===13){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(s(317));I=uf(e)}else if(t===31){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(s(317));I=uf(e)}else t===27?(t=I,Zd(e.type)?(e=lf,lf=null,I=e):I=t):I=Ii?cf(e.stateNode.nextSibling):null;return!0}function Wi(){I=Ii=null,L=!1}function Gi(){var e=Li;return e!==null&&(Zl===null?Zl=e:Zl.push.apply(Zl,e),Li=null),e}function Ki(e){Li===null?Li=[e]:Li.push(e)}var qi=fe(null),Ji=null,Yi=null;function Xi(e,t,n){A(qi,t._currentValue),t._currentValue=n}function Zi(e){e._currentValue=qi.current,k(qi)}function Qi(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)===t?r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t):(e.childLanes|=t,r!==null&&(r.childLanes|=t)),e===n)break;e=e.return}}function $i(e,t,n,r){var i=e.child;for(i!==null&&(i.return=e);i!==null;){var a=i.dependencies;if(a!==null){var o=i.child;a=a.firstContext;a:for(;a!==null;){var c=a;a=i;for(var l=0;l<t.length;l++)if(c.context===t[l]){a.lanes|=n,c=a.alternate,c!==null&&(c.lanes|=n),Qi(a.return,n,e),r||(o=null);break a}a=c.next}}else if(i.tag===18){if(o=i.return,o===null)throw Error(s(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Qi(o,n,e),o=null}else o=i.child;if(o!==null)o.return=i;else for(o=i;o!==null;){if(o===e){o=null;break}if(i=o.sibling,i!==null){i.return=o.return,o=i;break}o=o.return}i=o}}function ea(e,t,n,r){e=null;for(var i=t,a=!1;i!==null;){if(!a){if(i.flags&524288)a=!0;else if(i.flags&262144)break}if(i.tag===10){var o=i.alternate;if(o===null)throw Error(s(387));if(o=o.memoizedProps,o!==null){var c=i.type;Tr(i.pendingProps.value,o.value)||(e===null?e=[c]:e.push(c))}}else if(i===ge.current){if(o=i.alternate,o===null)throw Error(s(387));o.memoizedState.memoizedState!==i.memoizedState.memoizedState&&(e===null?e=[Qf]:e.push(Qf))}i=i.return}e!==null&&$i(t,e,n,r),t.flags|=262144}function ta(e){for(e=e.firstContext;e!==null;){if(!Tr(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function na(e){Ji=e,Yi=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function ra(e){return aa(Ji,e)}function ia(e,t){return Ji===null&&na(e),aa(e,t)}function aa(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},Yi===null){if(e===null)throw Error(s(308));Yi=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Yi=Yi.next=t;return n}var oa=typeof AbortController<`u`?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(t,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach(function(e){return e()})}},sa=t.unstable_scheduleCallback,ca=t.unstable_NormalPriority,la={$$typeof:te,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function ua(){return{controller:new oa,data:new Map,refCount:0}}function da(e){e.refCount--,e.refCount===0&&sa(ca,function(){e.controller.abort()})}var fa=null,pa=0,ma=0,ha=null;function ga(e,t){if(fa===null){var n=fa=[];pa=0,ma=dd(),ha={status:`pending`,value:void 0,then:function(e){n.push(e)}}}return pa++,t.then(_a,_a),t}function _a(){if(--pa===0&&fa!==null){ha!==null&&(ha.status=`fulfilled`);var e=fa;fa=null,ma=0,ha=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function va(e,t){var n=[],r={status:`pending`,value:null,reason:null,then:function(e){n.push(e)}};return e.then(function(){r.status=`fulfilled`,r.value=t;for(var e=0;e<n.length;e++)(0,n[e])(t)},function(e){for(r.status=`rejected`,r.reason=e,e=0;e<n.length;e++)(0,n[e])(void 0)}),r}var ya=D.S;D.S=function(e,t){eu=je(),typeof t==`object`&&t&&typeof t.then==`function`&&ga(e,t),ya!==null&&ya(e,t)};var ba=fe(null);function xa(){var e=ba.current;return e===null?K.pooledCache:e}function Sa(e,t){t===null?A(ba,ba.current):A(ba,t.pool)}function Ca(){var e=xa();return e===null?null:{parent:la._currentValue,pool:e}}var wa=Error(s(460)),Ta=Error(s(474)),Ea=Error(s(542)),Da={then:function(){}};function Oa(e){return e=e.status,e===`fulfilled`||e===`rejected`}function ka(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(nn,nn),t=n),t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,Na(e),e;default:if(typeof t.status==`string`)t.then(nn,nn);else{if(e=K,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=t,e.status=`pending`,e.then(function(e){if(t.status===`pending`){var n=t;n.status=`fulfilled`,n.value=e}},function(e){if(t.status===`pending`){var n=t;n.status=`rejected`,n.reason=e}})}switch(t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,Na(e),e}throw ja=t,wa}}function Aa(e){try{var t=e._init;return t(e._payload)}catch(e){throw typeof e==`object`&&e&&typeof e.then==`function`?(ja=e,wa):e}}var ja=null;function Ma(){if(ja===null)throw Error(s(459));var e=ja;return ja=null,e}function Na(e){if(e===wa||e===Ea)throw Error(s(483))}var Pa=null,Fa=0;function Ia(e){var t=Fa;return Fa+=1,Pa===null&&(Pa=[]),ka(Pa,e,t)}function La(e,t){t=t.props.ref,e.ref=t===void 0?null:t}function Ra(e,t){throw t.$$typeof===g?Error(s(525)):(e=Object.prototype.toString.call(t),Error(s(31,e===`[object Object]`?`object with keys {`+Object.keys(t).join(`, `)+`}`:e)))}function za(e){function t(t,n){if(e){var r=t.deletions;r===null?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;r!==null;)t(n,r),r=r.sibling;return null}function r(e){for(var t=new Map;e!==null;)e.key===null?t.set(e.index,e):t.set(e.key,e),e=e.sibling;return t}function i(e,t){return e=pi(e,t),e.index=0,e.sibling=null,e}function a(t,n,r){return t.index=r,e?(r=t.alternate,r===null?(t.flags|=67108866,n):(r=r.index,r<n?(t.flags|=67108866,n):r)):(t.flags|=1048576,n)}function o(t){return e&&t.alternate===null&&(t.flags|=67108866),t}function c(e,t,n,r){return t===null||t.tag!==6?(t=_i(n,e.mode,r),t.return=e,t):(t=i(t,n),t.return=e,t)}function l(e,t,n,r){var a=n.type;return a===y?d(e,t,n.props.children,r,n.key):t!==null&&(t.elementType===a||typeof a==`object`&&a&&a.$$typeof===C&&Aa(a)===t.type)?(t=i(t,n.props),La(t,n),t.return=e,t):(t=hi(n.type,n.key,n.props,null,e.mode,r),La(t,n),t.return=e,t)}function u(e,t,n,r){return t===null||t.tag!==4||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?(t=yi(n,e.mode,r),t.return=e,t):(t=i(t,n.children||[]),t.return=e,t)}function d(e,t,n,r,a){return t===null||t.tag!==7?(t=gi(n,e.mode,r,a),t.return=e,t):(t=i(t,n),t.return=e,t)}function f(e,t,n){if(typeof t==`string`&&t!==``||typeof t==`number`||typeof t==`bigint`)return t=_i(``+t,e.mode,n),t.return=e,t;if(typeof t==`object`&&t){switch(t.$$typeof){case _:return n=hi(t.type,t.key,t.props,null,e.mode,n),La(n,t),n.return=e,n;case v:return t=yi(t,e.mode,n),t.return=e,t;case C:return t=Aa(t),f(e,t,n)}if(ce(t)||ae(t))return t=gi(t,e.mode,n,null),t.return=e,t;if(typeof t.then==`function`)return f(e,Ia(t),n);if(t.$$typeof===te)return f(e,ia(e,t),n);Ra(e,t)}return null}function p(e,t,n,r){var i=t===null?null:t.key;if(typeof n==`string`&&n!==``||typeof n==`number`||typeof n==`bigint`)return i===null?c(e,t,``+n,r):null;if(typeof n==`object`&&n){switch(n.$$typeof){case _:return n.key===i?l(e,t,n,r):null;case v:return n.key===i?u(e,t,n,r):null;case C:return n=Aa(n),p(e,t,n,r)}if(ce(n)||ae(n))return i===null?d(e,t,n,r,null):null;if(typeof n.then==`function`)return p(e,t,Ia(n),r);if(n.$$typeof===te)return p(e,t,ia(e,n),r);Ra(e,n)}return null}function m(e,t,n,r,i){if(typeof r==`string`&&r!==``||typeof r==`number`||typeof r==`bigint`)return e=e.get(n)||null,c(t,e,``+r,i);if(typeof r==`object`&&r){switch(r.$$typeof){case _:return e=e.get(r.key===null?n:r.key)||null,l(t,e,r,i);case v:return e=e.get(r.key===null?n:r.key)||null,u(t,e,r,i);case C:return r=Aa(r),m(e,t,n,r,i)}if(ce(r)||ae(r))return e=e.get(n)||null,d(t,e,r,i,null);if(typeof r.then==`function`)return m(e,t,n,Ia(r),i);if(r.$$typeof===te)return m(e,t,n,ia(t,r),i);Ra(t,r)}return null}function h(i,o,s,c){for(var l=null,u=null,d=o,h=o=0,g=null;d!==null&&h<s.length;h++){d.index>h?(g=d,d=null):g=d.sibling;var _=p(i,d,s[h],c);if(_===null){d===null&&(d=g);break}e&&d&&_.alternate===null&&t(i,d),o=a(_,o,h),u===null?l=_:u.sibling=_,u=_,d=g}if(h===s.length)return n(i,d),L&&ji(i,h),l;if(d===null){for(;h<s.length;h++)d=f(i,s[h],c),d!==null&&(o=a(d,o,h),u===null?l=d:u.sibling=d,u=d);return L&&ji(i,h),l}for(d=r(d);h<s.length;h++)g=m(d,i,h,s[h],c),g!==null&&(e&&g.alternate!==null&&d.delete(g.key===null?h:g.key),o=a(g,o,h),u===null?l=g:u.sibling=g,u=g);return e&&d.forEach(function(e){return t(i,e)}),L&&ji(i,h),l}function g(i,o,c,l){if(c==null)throw Error(s(151));for(var u=null,d=null,h=o,g=o=0,_=null,v=c.next();h!==null&&!v.done;g++,v=c.next()){h.index>g?(_=h,h=null):_=h.sibling;var y=p(i,h,v.value,l);if(y===null){h===null&&(h=_);break}e&&h&&y.alternate===null&&t(i,h),o=a(y,o,g),d===null?u=y:d.sibling=y,d=y,h=_}if(v.done)return n(i,h),L&&ji(i,g),u;if(h===null){for(;!v.done;g++,v=c.next())v=f(i,v.value,l),v!==null&&(o=a(v,o,g),d===null?u=v:d.sibling=v,d=v);return L&&ji(i,g),u}for(h=r(h);!v.done;g++,v=c.next())v=m(h,i,g,v.value,l),v!==null&&(e&&v.alternate!==null&&h.delete(v.key===null?g:v.key),o=a(v,o,g),d===null?u=v:d.sibling=v,d=v);return e&&h.forEach(function(e){return t(i,e)}),L&&ji(i,g),u}function b(e,r,a,c){if(typeof a==`object`&&a&&a.type===y&&a.key===null&&(a=a.props.children),typeof a==`object`&&a){switch(a.$$typeof){case _:a:{for(var l=a.key;r!==null;){if(r.key===l){if(l=a.type,l===y){if(r.tag===7){n(e,r.sibling),c=i(r,a.props.children),c.return=e,e=c;break a}}else if(r.elementType===l||typeof l==`object`&&l&&l.$$typeof===C&&Aa(l)===r.type){n(e,r.sibling),c=i(r,a.props),La(c,a),c.return=e,e=c;break a}n(e,r);break}t(e,r),r=r.sibling}a.type===y?(c=gi(a.props.children,e.mode,c,a.key),c.return=e,e=c):(c=hi(a.type,a.key,a.props,null,e.mode,c),La(c,a),c.return=e,e=c)}return o(e);case v:a:{for(l=a.key;r!==null;){if(r.key===l){if(r.tag===4&&r.stateNode.containerInfo===a.containerInfo&&r.stateNode.implementation===a.implementation){n(e,r.sibling),c=i(r,a.children||[]),c.return=e,e=c;break a}n(e,r);break}t(e,r),r=r.sibling}c=yi(a,e.mode,c),c.return=e,e=c}return o(e);case C:return a=Aa(a),b(e,r,a,c)}if(ce(a))return h(e,r,a,c);if(ae(a)){if(l=ae(a),typeof l!=`function`)throw Error(s(150));return a=l.call(a),g(e,r,a,c)}if(typeof a.then==`function`)return b(e,r,Ia(a),c);if(a.$$typeof===te)return b(e,r,ia(e,a),c);Ra(e,a)}return typeof a==`string`&&a!==``||typeof a==`number`||typeof a==`bigint`?(a=``+a,r!==null&&r.tag===6?(n(e,r.sibling),c=i(r,a),c.return=e,e=c):(n(e,r),c=_i(a,e.mode,c),c.return=e,e=c),o(e)):n(e,r)}return function(e,t,n,r){try{Fa=0;var i=b(e,t,n,r);return Pa=null,i}catch(t){if(t===wa||t===Ea)throw t;var a=di(29,t,null,e.mode);return a.lanes=r,a.return=e,a}}}var Ba=za(!0),Va=za(!1),Ha=!1;function Ua(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Wa(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Ga(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Ka(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,G&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,t=ci(e),si(e,null,n),t}return ii(e,r,t,n),ci(e)}function qa(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,n&4194048)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,rt(e,n)}}function Ja(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var o={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};a===null?i=a=o:a=a.next=o,n=n.next}while(n!==null);a===null?i=a=t:a=a.next=t}else i=a=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,callbacks:r.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var Ya=!1;function Xa(){if(Ya){var e=ha;if(e!==null)throw e}}function Za(e,t,n,r){Ya=!1;var i=e.updateQueue;Ha=!1;var a=i.firstBaseUpdate,o=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var c=s,l=c.next;c.next=null,o===null?a=l:o.next=l,o=c;var u=e.alternate;u!==null&&(u=u.updateQueue,s=u.lastBaseUpdate,s!==o&&(s===null?u.firstBaseUpdate=l:s.next=l,u.lastBaseUpdate=c))}if(a!==null){var d=i.baseState;o=0,u=l=c=null,s=a;do{var f=s.lane&-536870913,p=f!==s.lane;if(p?(J&f)===f:(r&f)===f){f!==0&&f===ma&&(Ya=!0),u!==null&&(u=u.next={lane:0,tag:s.tag,payload:s.payload,callback:null,next:null});a:{var m=e,g=s;f=t;var _=n;switch(g.tag){case 1:if(m=g.payload,typeof m==`function`){d=m.call(_,d,f);break a}d=m;break a;case 3:m.flags=m.flags&-65537|128;case 0:if(m=g.payload,f=typeof m==`function`?m.call(_,d,f):m,f==null)break a;d=h({},d,f);break a;case 2:Ha=!0}}f=s.callback,f!==null&&(e.flags|=64,p&&(e.flags|=8192),p=i.callbacks,p===null?i.callbacks=[f]:p.push(f))}else p={lane:f,tag:s.tag,payload:s.payload,callback:s.callback,next:null},u===null?(l=u=p,c=d):u=u.next=p,o|=f;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;p=s,s=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(1);u===null&&(c=d),i.baseState=c,i.firstBaseUpdate=l,i.lastBaseUpdate=u,a===null&&(i.shared.lanes=0),Gl|=o,e.lanes=o,e.memoizedState=d}}function Qa(e,t){if(typeof e!=`function`)throw Error(s(191,e));e.call(t)}function $a(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)Qa(n[e],t)}var eo=fe(null),to=fe(0);function no(e,t){e=Wl,A(to,e),A(eo,t),Wl=e|t.baseLanes}function ro(){A(to,Wl),A(eo,eo.current)}function io(){Wl=to.current,k(eo),k(to)}var ao=fe(null),oo=null;function so(e){var t=e.alternate;A(R,R.current&1),A(ao,e),oo===null&&(t===null||eo.current!==null||t.memoizedState!==null)&&(oo=e)}function co(e){A(R,R.current),A(ao,e),oo===null&&(oo=e)}function lo(e){e.tag===22?(A(R,R.current),A(ao,e),oo===null&&(oo=e)):uo(e)}function uo(){A(R,R.current),A(ao,ao.current)}function fo(e){k(ao),oo===e&&(oo=null),k(R)}var R=fe(0);function po(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||af(n)||of(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder===`forwards`||t.memoizedProps.revealOrder===`backwards`||t.memoizedProps.revealOrder===`unstable_legacy-backwards`||t.memoizedProps.revealOrder===`together`)){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var mo=0,z=null,B=null,ho=null,go=!1,_o=!1,vo=!1,yo=0,bo=0,xo=null,So=0;function V(){throw Error(s(321))}function Co(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Tr(e[n],t[n]))return!1;return!0}function wo(e,t,n,r,i,a){return mo=a,z=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,D.H=e===null||e.memoizedState===null?Bs:Vs,vo=!1,a=n(r,i),vo=!1,_o&&(a=Eo(t,n,r,i)),To(e),a}function To(e){D.H=zs;var t=B!==null&&B.next!==null;if(mo=0,ho=B=z=null,go=!1,bo=0,xo=null,t)throw Error(s(300));e===null||ic||(e=e.dependencies,e!==null&&ta(e)&&(ic=!0))}function Eo(e,t,n,r){z=e;var i=0;do{if(_o&&(xo=null),bo=0,_o=!1,25<=i)throw Error(s(301));if(i+=1,ho=B=null,e.updateQueue!=null){var a=e.updateQueue;a.lastEffect=null,a.events=null,a.stores=null,a.memoCache!=null&&(a.memoCache.index=0)}D.H=Hs,a=t(n,r)}while(_o);return a}function Do(){var e=D.H,t=e.useState()[0];return t=typeof t.then==`function`?No(t):t,e=e.useState()[0],(B===null?null:B.memoizedState)!==e&&(z.flags|=1024),t}function Oo(){var e=yo!==0;return yo=0,e}function ko(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function Ao(e){if(go){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}go=!1}mo=0,ho=B=z=null,_o=!1,bo=yo=0,xo=null}function jo(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ho===null?z.memoizedState=ho=e:ho=ho.next=e,ho}function H(){if(B===null){var e=z.alternate;e=e===null?null:e.memoizedState}else e=B.next;var t=ho===null?z.memoizedState:ho.next;if(t!==null)ho=t,B=e;else{if(e===null)throw z.alternate===null?Error(s(467)):Error(s(310));B=e,e={memoizedState:B.memoizedState,baseState:B.baseState,baseQueue:B.baseQueue,queue:B.queue,next:null},ho===null?z.memoizedState=ho=e:ho=ho.next=e}return ho}function Mo(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function No(e){var t=bo;return bo+=1,xo===null&&(xo=[]),e=ka(xo,e,t),t=z,(ho===null?t.memoizedState:ho.next)===null&&(t=t.alternate,D.H=t===null||t.memoizedState===null?Bs:Vs),e}function Po(e){if(typeof e==`object`&&e){if(typeof e.then==`function`)return No(e);if(e.$$typeof===te)return ra(e)}throw Error(s(438,String(e)))}function Fo(e){var t=null,n=z.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var r=z.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(t={data:r.data.map(function(e){return e.slice()}),index:0})))}if(t??={data:[],index:0},n===null&&(n=Mo(),z.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),r=0;r<e;r++)n[r]=T;return t.index++,n}function Io(e,t){return typeof t==`function`?t(e):t}function Lo(e){return Ro(H(),B,e)}function Ro(e,t,n){var r=e.queue;if(r===null)throw Error(s(311));r.lastRenderedReducer=n;var i=e.baseQueue,a=r.pending;if(a!==null){if(i!==null){var o=i.next;i.next=a.next,a.next=o}t.baseQueue=i=a,r.pending=null}if(a=e.baseState,i===null)e.memoizedState=a;else{t=i.next;var c=o=null,l=null,u=t,d=!1;do{var f=u.lane&-536870913;if(f===u.lane?(mo&f)===f:(J&f)===f){var p=u.revertLane;if(p===0)l!==null&&(l=l.next={lane:0,revertLane:0,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),f===ma&&(d=!0);else if((mo&p)===p){u=u.next,p===ma&&(d=!0);continue}else f={lane:0,revertLane:u.revertLane,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=f,o=a):l=l.next=f,z.lanes|=p,Gl|=p;f=u.action,vo&&n(a,f),a=u.hasEagerState?u.eagerState:n(a,f)}else p={lane:f,revertLane:u.revertLane,gesture:u.gesture,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=p,o=a):l=l.next=p,z.lanes|=f,Gl|=f;u=u.next}while(u!==null&&u!==t);if(l===null?o=a:l.next=c,!Tr(a,e.memoizedState)&&(ic=!0,d&&(n=ha,n!==null)))throw n;e.memoizedState=a,e.baseState=o,e.baseQueue=l,r.lastRenderedState=a}return i===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function zo(e){var t=H(),n=t.queue;if(n===null)throw Error(s(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,a=t.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do a=e(a,o.action),o=o.next;while(o!==i);Tr(a,t.memoizedState)||(ic=!0),t.memoizedState=a,t.baseQueue===null&&(t.baseState=a),n.lastRenderedState=a}return[a,r]}function Bo(e,t,n){var r=z,i=H(),a=L;if(a){if(n===void 0)throw Error(s(407));n=n()}else n=t();var o=!Tr((B||i).memoizedState,n);if(o&&(i.memoizedState=n,ic=!0),i=i.queue,ds(Uo.bind(null,r,i,e),[e]),i.getSnapshot!==t||o||ho!==null&&ho.memoizedState.tag&1){if(r.flags|=2048,os(9,{destroy:void 0},Ho.bind(null,r,i,n,t),null),K===null)throw Error(s(349));a||mo&127||Vo(r,t,n)}return n}function Vo(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=z.updateQueue,t===null?(t=Mo(),z.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Ho(e,t,n,r){t.value=n,t.getSnapshot=r,Wo(t)&&Go(e)}function Uo(e,t,n){return n(function(){Wo(t)&&Go(e)})}function Wo(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Tr(e,n)}catch{return!0}}function Go(e){var t=oi(e,2);t!==null&&hu(t,e,2)}function Ko(e){var t=jo();if(typeof e==`function`){var n=e;if(e=n(),vo){He(!0);try{n()}finally{He(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Io,lastRenderedState:e},t}function qo(e,t,n,r){return e.baseState=n,Ro(e,B,typeof r==`function`?r:Io)}function Jo(e,t,n,r,i){if(Is(e))throw Error(s(485));if(e=t.action,e!==null){var a={payload:i,action:e,next:null,isTransition:!0,status:`pending`,value:null,reason:null,listeners:[],then:function(e){a.listeners.push(e)}};D.T===null?a.isTransition=!1:n(!0),r(a),n=t.pending,n===null?(a.next=t.pending=a,Yo(t,a)):(a.next=n.next,t.pending=n.next=a)}}function Yo(e,t){var n=t.action,r=t.payload,i=e.state;if(t.isTransition){var a=D.T,o={};D.T=o;try{var s=n(i,r),c=D.S;c!==null&&c(o,s),Xo(e,t,s)}catch(n){Qo(e,t,n)}finally{a!==null&&o.types!==null&&(a.types=o.types),D.T=a}}else try{a=n(i,r),Xo(e,t,a)}catch(n){Qo(e,t,n)}}function Xo(e,t,n){typeof n==`object`&&n&&typeof n.then==`function`?n.then(function(n){Zo(e,t,n)},function(n){return Qo(e,t,n)}):Zo(e,t,n)}function Zo(e,t,n){t.status=`fulfilled`,t.value=n,$o(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,Yo(e,n)))}function Qo(e,t,n){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do t.status=`rejected`,t.reason=n,$o(t),t=t.next;while(t!==r)}e.action=null}function $o(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function es(e,t){return t}function ts(e,t){if(L){var n=K.formState;if(n!==null){a:{var r=z;if(L){if(I){b:{for(var i=I,a=Ri;i.nodeType!==8;){if(!a){i=null;break b}if(i=cf(i.nextSibling),i===null){i=null;break b}}a=i.data,i=a===`F!`||a===`F`?i:null}if(i){I=cf(i.nextSibling),r=i.data===`F!`;break a}}Bi(r)}r=!1}r&&(t=n[0])}}return n=jo(),n.memoizedState=n.baseState=t,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:es,lastRenderedState:t},n.queue=r,n=Ns.bind(null,z,r),r.dispatch=n,r=Ko(!1),a=Fs.bind(null,z,!1,r.queue),r=jo(),i={state:t,dispatch:null,action:e,pending:null},r.queue=i,n=Jo.bind(null,z,i,a,n),i.dispatch=n,r.memoizedState=e,[t,n,!1]}function ns(e){return rs(H(),B,e)}function rs(e,t,n){if(t=Ro(e,t,es)[0],e=Lo(Io)[0],typeof t==`object`&&t&&typeof t.then==`function`)try{var r=No(t)}catch(e){throw e===wa?Ea:e}else r=t;t=H();var i=t.queue,a=i.dispatch;return n!==t.memoizedState&&(z.flags|=2048,os(9,{destroy:void 0},is.bind(null,i,n),null)),[r,a,e]}function is(e,t){e.action=t}function as(e){var t=H(),n=B;if(n!==null)return rs(t,n,e);H(),t=t.memoizedState,n=H();var r=n.queue.dispatch;return n.memoizedState=e,[t,r,!1]}function os(e,t,n,r){return e={tag:e,create:n,deps:r,inst:t,next:null},t=z.updateQueue,t===null&&(t=Mo(),z.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function ss(){return H().memoizedState}function cs(e,t,n,r){var i=jo();z.flags|=e,i.memoizedState=os(1|t,{destroy:void 0},n,r===void 0?null:r)}function ls(e,t,n,r){var i=H();r=r===void 0?null:r;var a=i.memoizedState.inst;B!==null&&r!==null&&Co(r,B.memoizedState.deps)?i.memoizedState=os(t,a,n,r):(z.flags|=e,i.memoizedState=os(1|t,a,n,r))}function us(e,t){cs(8390656,8,e,t)}function ds(e,t){ls(2048,8,e,t)}function fs(e){z.flags|=4;var t=z.updateQueue;if(t===null)t=Mo(),z.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function ps(e){var t=H().memoizedState;return fs({ref:t,nextImpl:e}),function(){if(G&2)throw Error(s(440));return t.impl.apply(void 0,arguments)}}function ms(e,t){return ls(4,2,e,t)}function hs(e,t){return ls(4,4,e,t)}function gs(e,t){if(typeof t==`function`){e=e();var n=t(e);return function(){typeof n==`function`?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function _s(e,t,n){n=n==null?null:n.concat([e]),ls(4,4,gs.bind(null,t,e),n)}function vs(){}function ys(e,t){var n=H();t=t===void 0?null:t;var r=n.memoizedState;return t!==null&&Co(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function bs(e,t){var n=H();t=t===void 0?null:t;var r=n.memoizedState;if(t!==null&&Co(t,r[1]))return r[0];if(r=e(),vo){He(!0);try{e()}finally{He(!1)}}return n.memoizedState=[r,t],r}function xs(e,t,n){return n===void 0||mo&1073741824&&!(J&261930)?e.memoizedState=t:(e.memoizedState=n,e=mu(),z.lanes|=e,Gl|=e,n)}function Ss(e,t,n,r){return Tr(n,t)?n:eo.current===null?!(mo&42)||mo&1073741824&&!(J&261930)?(ic=!0,e.memoizedState=n):(e=mu(),z.lanes|=e,Gl|=e,t):(e=xs(e,n,r),Tr(e,t)||(ic=!0),e)}function Cs(e,t,n,r,i){var a=O.p;O.p=a!==0&&8>a?a:8;var o=D.T,s={};D.T=s,Fs(e,!1,t,n);try{var c=i(),l=D.S;l!==null&&l(s,c),typeof c==`object`&&c&&typeof c.then==`function`?Ps(e,t,va(c,r),pu(e)):Ps(e,t,r,pu(e))}catch(n){Ps(e,t,{then:function(){},status:`rejected`,reason:n},pu())}finally{O.p=a,o!==null&&s.types!==null&&(o.types=s.types),D.T=o}}function ws(){}function Ts(e,t,n,r){if(e.tag!==5)throw Error(s(476));var i=Es(e).queue;Cs(e,i,t,le,n===null?ws:function(){return Ds(e),n(r)})}function Es(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:le,baseState:le,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Io,lastRenderedState:le},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Io,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Ds(e){var t=Es(e);t.next===null&&(t=e.alternate.memoizedState),Ps(e,t.next.queue,{},pu())}function Os(){return ra(Qf)}function ks(){return H().memoizedState}function As(){return H().memoizedState}function js(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=pu();e=Ga(n);var r=Ka(t,e,n);r!==null&&(hu(r,t,n),qa(r,t,n)),t={cache:ua()},e.payload=t;return}t=t.return}}function Ms(e,t,n){var r=pu();n={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},Is(e)?Ls(t,n):(n=ai(e,t,n,r),n!==null&&(hu(n,e,r),Rs(n,t,r)))}function Ns(e,t,n){Ps(e,t,n,pu())}function Ps(e,t,n,r){var i={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(Is(e))Ls(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var o=t.lastRenderedState,s=a(o,n);if(i.hasEagerState=!0,i.eagerState=s,Tr(s,o))return ii(e,t,i,0),K===null&&ri(),!1}catch{}if(n=ai(e,t,i,r),n!==null)return hu(n,e,r),Rs(n,t,r),!0}return!1}function Fs(e,t,n,r){if(r={lane:2,revertLane:dd(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},Is(e)){if(t)throw Error(s(479))}else t=ai(e,n,r,2),t!==null&&hu(t,e,2)}function Is(e){var t=e.alternate;return e===z||t!==null&&t===z}function Ls(e,t){_o=go=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Rs(e,t,n){if(n&4194048){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,rt(e,n)}}var zs={readContext:ra,use:Po,useCallback:V,useContext:V,useEffect:V,useImperativeHandle:V,useLayoutEffect:V,useInsertionEffect:V,useMemo:V,useReducer:V,useRef:V,useState:V,useDebugValue:V,useDeferredValue:V,useTransition:V,useSyncExternalStore:V,useId:V,useHostTransitionStatus:V,useFormState:V,useActionState:V,useOptimistic:V,useMemoCache:V,useCacheRefresh:V};zs.useEffectEvent=V;var Bs={readContext:ra,use:Po,useCallback:function(e,t){return jo().memoizedState=[e,t===void 0?null:t],e},useContext:ra,useEffect:us,useImperativeHandle:function(e,t,n){n=n==null?null:n.concat([e]),cs(4194308,4,gs.bind(null,t,e),n)},useLayoutEffect:function(e,t){return cs(4194308,4,e,t)},useInsertionEffect:function(e,t){cs(4,2,e,t)},useMemo:function(e,t){var n=jo();t=t===void 0?null:t;var r=e();if(vo){He(!0);try{e()}finally{He(!1)}}return n.memoizedState=[r,t],r},useReducer:function(e,t,n){var r=jo();if(n!==void 0){var i=n(t);if(vo){He(!0);try{n(t)}finally{He(!1)}}}else i=t;return r.memoizedState=r.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},r.queue=e,e=e.dispatch=Ms.bind(null,z,e),[r.memoizedState,e]},useRef:function(e){var t=jo();return e={current:e},t.memoizedState=e},useState:function(e){e=Ko(e);var t=e.queue,n=Ns.bind(null,z,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:vs,useDeferredValue:function(e,t){return xs(jo(),e,t)},useTransition:function(){var e=Ko(!1);return e=Cs.bind(null,z,e.queue,!0,!1),jo().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var r=z,i=jo();if(L){if(n===void 0)throw Error(s(407));n=n()}else{if(n=t(),K===null)throw Error(s(349));J&127||Vo(r,t,n)}i.memoizedState=n;var a={value:n,getSnapshot:t};return i.queue=a,us(Uo.bind(null,r,a,e),[e]),r.flags|=2048,os(9,{destroy:void 0},Ho.bind(null,r,a,n,t),null),n},useId:function(){var e=jo(),t=K.identifierPrefix;if(L){var n=Ai,r=ki;n=(r&~(1<<32-Ue(r)-1)).toString(32)+n,t=`_`+t+`R_`+n,n=yo++,0<n&&(t+=`H`+n.toString(32)),t+=`_`}else n=So++,t=`_`+t+`r_`+n.toString(32)+`_`;return e.memoizedState=t},useHostTransitionStatus:Os,useFormState:ts,useActionState:ts,useOptimistic:function(e){var t=jo();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=Fs.bind(null,z,!0,n),n.dispatch=t,[e,t]},useMemoCache:Fo,useCacheRefresh:function(){return jo().memoizedState=js.bind(null,z)},useEffectEvent:function(e){var t=jo(),n={impl:e};return t.memoizedState=n,function(){if(G&2)throw Error(s(440));return n.impl.apply(void 0,arguments)}}},Vs={readContext:ra,use:Po,useCallback:ys,useContext:ra,useEffect:ds,useImperativeHandle:_s,useInsertionEffect:ms,useLayoutEffect:hs,useMemo:bs,useReducer:Lo,useRef:ss,useState:function(){return Lo(Io)},useDebugValue:vs,useDeferredValue:function(e,t){return Ss(H(),B.memoizedState,e,t)},useTransition:function(){var e=Lo(Io)[0],t=H().memoizedState;return[typeof e==`boolean`?e:No(e),t]},useSyncExternalStore:Bo,useId:ks,useHostTransitionStatus:Os,useFormState:ns,useActionState:ns,useOptimistic:function(e,t){return qo(H(),B,e,t)},useMemoCache:Fo,useCacheRefresh:As};Vs.useEffectEvent=ps;var Hs={readContext:ra,use:Po,useCallback:ys,useContext:ra,useEffect:ds,useImperativeHandle:_s,useInsertionEffect:ms,useLayoutEffect:hs,useMemo:bs,useReducer:zo,useRef:ss,useState:function(){return zo(Io)},useDebugValue:vs,useDeferredValue:function(e,t){var n=H();return B===null?xs(n,e,t):Ss(n,B.memoizedState,e,t)},useTransition:function(){var e=zo(Io)[0],t=H().memoizedState;return[typeof e==`boolean`?e:No(e),t]},useSyncExternalStore:Bo,useId:ks,useHostTransitionStatus:Os,useFormState:as,useActionState:as,useOptimistic:function(e,t){var n=H();return B===null?(n.baseState=e,[e,n.queue.dispatch]):qo(n,B,e,t)},useMemoCache:Fo,useCacheRefresh:As};Hs.useEffectEvent=ps;function Us(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:h({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Ws={enqueueSetState:function(e,t,n){e=e._reactInternals;var r=pu(),i=Ga(r);i.payload=t,n!=null&&(i.callback=n),t=Ka(e,i,r),t!==null&&(hu(t,e,r),qa(t,e,r))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=pu(),i=Ga(r);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=Ka(e,i,r),t!==null&&(hu(t,e,r),qa(t,e,r))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=pu(),r=Ga(n);r.tag=2,t!=null&&(r.callback=t),t=Ka(e,r,n),t!==null&&(hu(t,e,n),qa(t,e,n))}};function Gs(e,t,n,r,i,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate==`function`?e.shouldComponentUpdate(r,a,o):t.prototype&&t.prototype.isPureReactComponent?!Er(n,r)||!Er(i,a):!0}function Ks(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps==`function`&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps==`function`&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Ws.enqueueReplaceState(t,t.state,null)}function qs(e,t){var n=t;if(`ref`in t)for(var r in n={},t)r!==`ref`&&(n[r]=t[r]);if(e=e.defaultProps)for(var i in n===t&&(n=h({},n)),e)n[i]===void 0&&(n[i]=e[i]);return n}function Js(e){$r(e)}function Ys(e){console.error(e)}function Xs(e){$r(e)}function Zs(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(e){setTimeout(function(){throw e})}}function Qs(e,t,n){try{var r=e.onCaughtError;r(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(e){setTimeout(function(){throw e})}}function $s(e,t,n){return n=Ga(n),n.tag=3,n.payload={element:null},n.callback=function(){Zs(e,t)},n}function ec(e){return e=Ga(e),e.tag=3,e}function tc(e,t,n,r){var i=n.type.getDerivedStateFromError;if(typeof i==`function`){var a=r.value;e.payload=function(){return i(a)},e.callback=function(){Qs(t,n,r)}}var o=n.stateNode;o!==null&&typeof o.componentDidCatch==`function`&&(e.callback=function(){Qs(t,n,r),typeof i!=`function`&&(ru===null?ru=new Set([this]):ru.add(this));var e=r.stack;this.componentDidCatch(r.value,{componentStack:e===null?``:e})})}function nc(e,t,n,r,i){if(n.flags|=32768,typeof r==`object`&&r&&typeof r.then==`function`){if(t=n.alternate,t!==null&&ea(t,n,i,!0),n=ao.current,n!==null){switch(n.tag){case 31:case 13:return oo===null?Du():n.alternate===null&&X===0&&(X=3),n.flags&=-257,n.flags|=65536,n.lanes=i,r===Da?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([r]):t.add(r),Gu(e,r,i)),!1;case 22:return n.flags|=65536,r===Da?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([r])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([r]):n.add(r)),Gu(e,r,i)),!1}throw Error(s(435,n.tag))}return Gu(e,r,i),Du(),!1}if(L)return t=ao.current,t===null?(r!==zi&&(t=Error(s(423),{cause:r}),Ki(xi(t,n))),e=e.current.alternate,e.flags|=65536,i&=-i,e.lanes|=i,r=xi(r,n),i=$s(e.stateNode,r,i),Ja(e,i),X!==4&&(X=2)):(!(t.flags&65536)&&(t.flags|=256),t.flags|=65536,t.lanes=i,r!==zi&&(e=Error(s(422),{cause:r}),Ki(xi(e,n)))),!1;var a=Error(s(520),{cause:r});if(a=xi(a,n),Xl===null?Xl=[a]:Xl.push(a),X!==4&&(X=2),t===null)return!0;r=xi(r,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=i&-i,n.lanes|=e,e=$s(n.stateNode,r,e),Ja(n,e),!1;case 1:if(t=n.type,a=n.stateNode,!(n.flags&128)&&(typeof t.getDerivedStateFromError==`function`||a!==null&&typeof a.componentDidCatch==`function`&&(ru===null||!ru.has(a))))return n.flags|=65536,i&=-i,n.lanes|=i,i=ec(i),tc(i,e,n,r),Ja(n,i),!1}n=n.return}while(n!==null);return!1}var rc=Error(s(461)),ic=!1;function ac(e,t,n,r){t.child=e===null?Va(t,null,n,r):Ba(t,e.child,n,r)}function oc(e,t,n,r,i){n=n.render;var a=t.ref;if(`ref`in r){var o={};for(var s in r)s!==`ref`&&(o[s]=r[s])}else o=r;return na(t),r=wo(e,t,n,o,a,i),s=Oo(),e!==null&&!ic?(ko(e,t,i),Ac(e,t,i)):(L&&s&&Ni(t),t.flags|=1,ac(e,t,r,i),t.child)}function sc(e,t,n,r,i){if(e===null){var a=n.type;return typeof a==`function`&&!fi(a)&&a.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=a,cc(e,t,a,r,i)):(e=hi(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!jc(e,i)){var o=a.memoizedProps;if(n=n.compare,n=n===null?Er:n,n(o,r)&&e.ref===t.ref)return Ac(e,t,i)}return t.flags|=1,e=pi(a,r),e.ref=t.ref,e.return=t,t.child=e}function cc(e,t,n,r,i){if(e!==null){var a=e.memoizedProps;if(Er(a,r)&&e.ref===t.ref){if(ic=!1,t.pendingProps=r=a,jc(e,i))e.flags&131072&&(ic=!0);else return t.lanes=e.lanes,Ac(e,t,i)}}return gc(e,t,n,r,i)}function lc(e,t,n,r){var i=r.children,a=e===null?null:e.memoizedState;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode===`hidden`){if(t.flags&128){if(a=a===null?n:a.baseLanes|n,e!==null){for(r=t.child=e.child,i=0;r!==null;)i=i|r.lanes|r.childLanes,r=r.sibling;r=i&~a}else r=0,t.child=null;return dc(e,t,a,n,r)}if(n&536870912)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Sa(t,a===null?null:a.cachePool),a===null?ro():no(t,a),lo(t);else return r=t.lanes=536870912,dc(e,t,a===null?n:a.baseLanes|n,n,r)}else a===null?(e!==null&&Sa(t,null),ro(),uo(t)):(Sa(t,a.cachePool),no(t,a),uo(t),t.memoizedState=null);return ac(e,t,i,n),t.child}function uc(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function dc(e,t,n,r,i){var a=xa();return a=a===null?null:{parent:la._currentValue,pool:a},t.memoizedState={baseLanes:n,cachePool:a},e!==null&&Sa(t,null),ro(),lo(t),e!==null&&ea(e,t,r,!0),t.childLanes=i,null}function fc(e,t){return t=Tc({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function pc(e,t,n){return Ba(t,e.child,null,n),e=fc(t,t.pendingProps),e.flags|=2,fo(t),t.memoizedState=null,e}function mc(e,t,n){var r=t.pendingProps,i=!!(t.flags&128);if(t.flags&=-129,e===null){if(L){if(r.mode===`hidden`)return e=fc(t,r),t.lanes=536870912,uc(null,e);if(co(t),(e=I)?(e=rf(e,Ri),e=e!==null&&e.data===`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Oi===null?null:{id:ki,overflow:Ai},retryLane:536870912,hydrationErrors:null},n=vi(e),n.return=t,t.child=n,Ii=t,I=null)):e=null,e===null)throw Bi(t);return t.lanes=536870912,null}return fc(t,r)}var a=e.memoizedState;if(a!==null){var o=a.dehydrated;if(co(t),i){if(t.flags&256)t.flags&=-257,t=pc(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(s(558))}else if(ic||ea(e,t,n,!1),i=(n&e.childLanes)!==0,ic||i){if(r=K,r!==null&&(o=it(r,n),o!==0&&o!==a.retryLane))throw a.retryLane=o,oi(e,o),hu(r,e,o),rc;Du(),t=pc(e,t,n)}else e=a.treeContext,I=cf(o.nextSibling),Ii=t,L=!0,Li=null,Ri=!1,e!==null&&Fi(t,e),t=fc(t,r),t.flags|=4096;return t}return e=pi(e.child,{mode:r.mode,children:r.children}),e.ref=t.ref,t.child=e,e.return=t,e}function hc(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!=`function`&&typeof n!=`object`)throw Error(s(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function gc(e,t,n,r,i){return na(t),n=wo(e,t,n,r,void 0,i),r=Oo(),e!==null&&!ic?(ko(e,t,i),Ac(e,t,i)):(L&&r&&Ni(t),t.flags|=1,ac(e,t,n,i),t.child)}function _c(e,t,n,r,i,a){return na(t),t.updateQueue=null,n=Eo(t,r,n,i),To(e),r=Oo(),e!==null&&!ic?(ko(e,t,a),Ac(e,t,a)):(L&&r&&Ni(t),t.flags|=1,ac(e,t,n,a),t.child)}function vc(e,t,n,r,i){if(na(t),t.stateNode===null){var a=li,o=n.contextType;typeof o==`object`&&o&&(a=ra(o)),a=new n(r,a),t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,a.updater=Ws,t.stateNode=a,a._reactInternals=t,a=t.stateNode,a.props=r,a.state=t.memoizedState,a.refs={},Ua(t),o=n.contextType,a.context=typeof o==`object`&&o?ra(o):li,a.state=t.memoizedState,o=n.getDerivedStateFromProps,typeof o==`function`&&(Us(t,n,o,r),a.state=t.memoizedState),typeof n.getDerivedStateFromProps==`function`||typeof a.getSnapshotBeforeUpdate==`function`||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(o=a.state,typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount(),o!==a.state&&Ws.enqueueReplaceState(a,a.state,null),Za(t,r,a,i),Xa(),a.state=t.memoizedState),typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!0}else if(e===null){a=t.stateNode;var s=t.memoizedProps,c=qs(n,s);a.props=c;var l=a.context,u=n.contextType;o=li,typeof u==`object`&&u&&(o=ra(u));var d=n.getDerivedStateFromProps;u=typeof d==`function`||typeof a.getSnapshotBeforeUpdate==`function`,s=t.pendingProps!==s,u||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(s||l!==o)&&Ks(t,a,r,o),Ha=!1;var f=t.memoizedState;a.state=f,Za(t,r,a,i),Xa(),l=t.memoizedState,s||f!==l||Ha?(typeof d==`function`&&(Us(t,n,d,r),l=t.memoizedState),(c=Ha||Gs(t,n,c,r,f,l,o))?(u||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount==`function`&&(t.flags|=4194308)):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),a.props=r,a.state=l,a.context=o,r=c):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,Wa(e,t),o=t.memoizedProps,u=qs(n,o),a.props=u,d=t.pendingProps,f=a.context,l=n.contextType,c=li,typeof l==`object`&&l&&(c=ra(l)),s=n.getDerivedStateFromProps,(l=typeof s==`function`||typeof a.getSnapshotBeforeUpdate==`function`)||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(o!==d||f!==c)&&Ks(t,a,r,c),Ha=!1,f=t.memoizedState,a.state=f,Za(t,r,a,i),Xa();var p=t.memoizedState;o!==d||f!==p||Ha||e!==null&&e.dependencies!==null&&ta(e.dependencies)?(typeof s==`function`&&(Us(t,n,s,r),p=t.memoizedState),(u=Ha||Gs(t,n,u,r,f,p,c)||e!==null&&e.dependencies!==null&&ta(e.dependencies))?(l||typeof a.UNSAFE_componentWillUpdate!=`function`&&typeof a.componentWillUpdate!=`function`||(typeof a.componentWillUpdate==`function`&&a.componentWillUpdate(r,p,c),typeof a.UNSAFE_componentWillUpdate==`function`&&a.UNSAFE_componentWillUpdate(r,p,c)),typeof a.componentDidUpdate==`function`&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate==`function`&&(t.flags|=1024)):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=p),a.props=r,a.state=p,a.context=c,r=u):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return a=r,hc(e,t),r=!!(t.flags&128),a||r?(a=t.stateNode,n=r&&typeof n.getDerivedStateFromError!=`function`?null:a.render(),t.flags|=1,e!==null&&r?(t.child=Ba(t,e.child,null,i),t.child=Ba(t,null,n,i)):ac(e,t,n,i),t.memoizedState=a.state,e=t.child):e=Ac(e,t,i),e}function yc(e,t,n,r){return Wi(),t.flags|=256,ac(e,t,n,r),t.child}var bc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function xc(e){return{baseLanes:e,cachePool:Ca()}}function Sc(e,t,n){return e=e===null?0:e.childLanes&~n,t&&(e|=Jl),e}function Cc(e,t,n){var r=t.pendingProps,i=!1,a=!!(t.flags&128),o;if((o=a)||(o=e!==null&&e.memoizedState===null?!1:!!(R.current&2)),o&&(i=!0,t.flags&=-129),o=!!(t.flags&32),t.flags&=-33,e===null){if(L){if(i?so(t):uo(t),(e=I)?(e=rf(e,Ri),e=e!==null&&e.data!==`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Oi===null?null:{id:ki,overflow:Ai},retryLane:536870912,hydrationErrors:null},n=vi(e),n.return=t,t.child=n,Ii=t,I=null)):e=null,e===null)throw Bi(t);return of(e)?t.lanes=32:t.lanes=536870912,null}var c=r.children;return r=r.fallback,i?(uo(t),i=t.mode,c=Tc({mode:`hidden`,children:c},i),r=gi(r,i,n,null),c.return=t,r.return=t,c.sibling=r,t.child=c,r=t.child,r.memoizedState=xc(n),r.childLanes=Sc(e,o,n),t.memoizedState=bc,uc(null,r)):(so(t),wc(t,c))}var l=e.memoizedState;if(l!==null&&(c=l.dehydrated,c!==null)){if(a)t.flags&256?(so(t),t.flags&=-257,t=Ec(e,t,n)):t.memoizedState===null?(uo(t),c=r.fallback,i=t.mode,r=Tc({mode:`visible`,children:r.children},i),c=gi(c,i,n,null),c.flags|=2,r.return=t,c.return=t,r.sibling=c,t.child=r,Ba(t,e.child,null,n),r=t.child,r.memoizedState=xc(n),r.childLanes=Sc(e,o,n),t.memoizedState=bc,t=uc(null,r)):(uo(t),t.child=e.child,t.flags|=128,t=null);else if(so(t),of(c)){if(o=c.nextSibling&&c.nextSibling.dataset,o)var u=o.dgst;o=u,r=Error(s(419)),r.stack=``,r.digest=o,Ki({value:r,source:null,stack:null}),t=Ec(e,t,n)}else if(ic||ea(e,t,n,!1),o=(n&e.childLanes)!==0,ic||o){if(o=K,o!==null&&(r=it(o,n),r!==0&&r!==l.retryLane))throw l.retryLane=r,oi(e,r),hu(o,e,r),rc;af(c)||Du(),t=Ec(e,t,n)}else af(c)?(t.flags|=192,t.child=e.child,t=null):(e=l.treeContext,I=cf(c.nextSibling),Ii=t,L=!0,Li=null,Ri=!1,e!==null&&Fi(t,e),t=wc(t,r.children),t.flags|=4096);return t}return i?(uo(t),c=r.fallback,i=t.mode,l=e.child,u=l.sibling,r=pi(l,{mode:`hidden`,children:r.children}),r.subtreeFlags=l.subtreeFlags&65011712,u===null?(c=gi(c,i,n,null),c.flags|=2):c=pi(u,c),c.return=t,r.return=t,r.sibling=c,t.child=r,uc(null,r),r=t.child,c=e.child.memoizedState,c===null?c=xc(n):(i=c.cachePool,i===null?i=Ca():(l=la._currentValue,i=i.parent===l?i:{parent:l,pool:l}),c={baseLanes:c.baseLanes|n,cachePool:i}),r.memoizedState=c,r.childLanes=Sc(e,o,n),t.memoizedState=bc,uc(e.child,r)):(so(t),n=e.child,e=n.sibling,n=pi(n,{mode:`visible`,children:r.children}),n.return=t,n.sibling=null,e!==null&&(o=t.deletions,o===null?(t.deletions=[e],t.flags|=16):o.push(e)),t.child=n,t.memoizedState=null,n)}function wc(e,t){return t=Tc({mode:`visible`,children:t},e.mode),t.return=e,e.child=t}function Tc(e,t){return e=di(22,e,null,t),e.lanes=0,e}function Ec(e,t,n){return Ba(t,e.child,null,n),e=wc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Dc(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Qi(e.return,t,n)}function Oc(e,t,n,r,i,a){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i,treeForkCount:a}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i,o.treeForkCount=a)}function kc(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;r=r.children;var o=R.current,s=!!(o&2);if(s?(o=o&1|2,t.flags|=128):o&=1,A(R,o),ac(e,t,r,n),r=L?Ti:0,!s&&e!==null&&e.flags&128)a:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Dc(e,n,t);else if(e.tag===19)Dc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break a;for(;e.sibling===null;){if(e.return===null||e.return===t)break a;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(i){case`forwards`:for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&po(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Oc(t,!1,i,n,a,r);break;case`backwards`:case`unstable_legacy-backwards`:for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&po(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Oc(t,!0,n,null,a,r);break;case`together`:Oc(t,!1,null,null,void 0,r);break;default:t.memoizedState=null}return t.child}function Ac(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Gl|=t.lanes,(n&t.childLanes)===0){if(e!==null){if(ea(e,t,n,!1),(n&t.childLanes)===0)return null}else return null}if(e!==null&&t.child!==e.child)throw Error(s(153));if(t.child!==null){for(e=t.child,n=pi(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=pi(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function jc(e,t){return(e.lanes&t)!==0||(e=e.dependencies,!!(e!==null&&ta(e)))}function Mc(e,t,n){switch(t.tag){case 3:_e(t,t.stateNode.containerInfo),Xi(t,la,e.memoizedState.cache),Wi();break;case 27:case 5:ye(t);break;case 4:_e(t,t.stateNode.containerInfo);break;case 10:Xi(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,co(t),null;break;case 13:var r=t.memoizedState;if(r!==null)return r.dehydrated===null?(n&t.child.childLanes)===0?(so(t),e=Ac(e,t,n),e===null?null:e.sibling):Cc(e,t,n):(so(t),t.flags|=128,null);so(t);break;case 19:var i=!!(e.flags&128);if(r=(n&t.childLanes)!==0,r||=(ea(e,t,n,!1),(n&t.childLanes)!==0),i){if(r)return kc(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),A(R,R.current),r)break;return null;case 22:return t.lanes=0,lc(e,t,n,t.pendingProps);case 24:Xi(t,la,e.memoizedState.cache)}return Ac(e,t,n)}function Nc(e,t,n){if(e!==null){if(e.memoizedProps!==t.pendingProps)ic=!0;else{if(!jc(e,n)&&!(t.flags&128))return ic=!1,Mc(e,t,n);ic=!!(e.flags&131072)}}else ic=!1,L&&t.flags&1048576&&Mi(t,Ti,t.index);switch(t.lanes=0,t.tag){case 16:a:{var r=t.pendingProps;if(e=Aa(t.elementType),t.type=e,typeof e==`function`)fi(e)?(r=qs(e,r),t.tag=1,t=vc(null,t,e,r,n)):(t.tag=0,t=gc(null,t,e,r,n));else{if(e!=null){var i=e.$$typeof;if(i===S){t.tag=11,t=oc(null,t,e,r,n);break a}if(i===ie){t.tag=14,t=sc(null,t,e,r,n);break a}}throw t=se(e)||e,Error(s(306,t,``))}}return t;case 0:return gc(e,t,t.type,t.pendingProps,n);case 1:return r=t.type,i=qs(r,t.pendingProps),vc(e,t,r,i,n);case 3:a:{if(_e(t,t.stateNode.containerInfo),e===null)throw Error(s(387));r=t.pendingProps;var a=t.memoizedState;i=a.element,Wa(e,t),Za(t,r,null,n);var o=t.memoizedState;if(r=o.cache,Xi(t,la,r),r!==a.cache&&$i(t,[la],n,!0),Xa(),r=o.element,a.isDehydrated){if(a={element:r,isDehydrated:!1,cache:o.cache},t.updateQueue.baseState=a,t.memoizedState=a,t.flags&256){t=yc(e,t,r,n);break a}if(r!==i){i=xi(Error(s(424)),t),Ki(i),t=yc(e,t,r,n);break a}switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName===`HTML`?e.ownerDocument.body:e}for(I=cf(e.firstChild),Ii=t,L=!0,Li=null,Ri=!0,n=Va(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(Wi(),r===i){t=Ac(e,t,n);break a}ac(e,t,r,n)}t=t.child}return t;case 26:return hc(e,t),e===null?(n=kf(t.type,null,t.pendingProps,null))?t.memoizedState=n:L||(n=t.type,e=t.pendingProps,r=Bd(he.current).createElement(n),r[F]=t,r[ut]=e,Pd(r,n,e),St(r),t.stateNode=r):t.memoizedState=kf(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return ye(t),e===null&&L&&(r=t.stateNode=ff(t.type,t.pendingProps,he.current),Ii=t,Ri=!0,i=I,Zd(t.type)?(lf=i,I=cf(r.firstChild)):I=i),ac(e,t,t.pendingProps.children,n),hc(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&L&&((i=r=I)&&(r=tf(r,t.type,t.pendingProps,Ri),r===null?i=!1:(t.stateNode=r,Ii=t,I=cf(r.firstChild),Ri=!1,i=!0)),i||Bi(t)),ye(t),i=t.type,a=t.pendingProps,o=e===null?null:e.memoizedProps,r=a.children,Ud(i,a)?r=null:o!==null&&Ud(i,o)&&(t.flags|=32),t.memoizedState!==null&&(i=wo(e,t,Do,null,null,n),Qf._currentValue=i),hc(e,t),ac(e,t,r,n),t.child;case 6:return e===null&&L&&((e=n=I)&&(n=nf(n,t.pendingProps,Ri),n===null?e=!1:(t.stateNode=n,Ii=t,I=null,e=!0)),e||Bi(t)),null;case 13:return Cc(e,t,n);case 4:return _e(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Ba(t,null,r,n):ac(e,t,r,n),t.child;case 11:return oc(e,t,t.type,t.pendingProps,n);case 7:return ac(e,t,t.pendingProps,n),t.child;case 8:return ac(e,t,t.pendingProps.children,n),t.child;case 12:return ac(e,t,t.pendingProps.children,n),t.child;case 10:return r=t.pendingProps,Xi(t,t.type,r.value),ac(e,t,r.children,n),t.child;case 9:return i=t.type._context,r=t.pendingProps.children,na(t),i=ra(i),r=r(i),t.flags|=1,ac(e,t,r,n),t.child;case 14:return sc(e,t,t.type,t.pendingProps,n);case 15:return cc(e,t,t.type,t.pendingProps,n);case 19:return kc(e,t,n);case 31:return mc(e,t,n);case 22:return lc(e,t,n,t.pendingProps);case 24:return na(t),r=ra(la),e===null?(i=xa(),i===null&&(i=K,a=ua(),i.pooledCache=a,a.refCount++,a!==null&&(i.pooledCacheLanes|=n),i=a),t.memoizedState={parent:r,cache:i},Ua(t),Xi(t,la,i)):((e.lanes&n)!==0&&(Wa(e,t),Za(t,null,null,n),Xa()),i=e.memoizedState,a=t.memoizedState,i.parent===r?(r=a.cache,Xi(t,la,r),r!==i.cache&&$i(t,[la],n,!0)):(i={parent:r,cache:r},t.memoizedState=i,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=i),Xi(t,la,r))),ac(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(s(156,t.tag))}function Pc(e){e.flags|=4}function Fc(e,t,n,r,i){if((t=!!(e.mode&32))&&(t=!1),t){if(e.flags|=16777216,(i&335544128)===i){if(e.stateNode.complete)e.flags|=8192;else if(wu())e.flags|=8192;else throw ja=Da,Ta}}else e.flags&=-16777217}function Ic(e,t){if(t.type!==`stylesheet`||t.state.loading&4)e.flags&=-16777217;else if(e.flags|=16777216,!Wf(t)){if(wu())e.flags|=8192;else throw ja=Da,Ta}}function Lc(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag===22?536870912:P(),e.lanes|=t,Yl|=t)}function Rc(e,t){if(!L)switch(e.tailMode){case`hidden`:t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case`collapsed`:n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function U(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&65011712,r|=i.flags&65011712,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function zc(e,t,n){var r=t.pendingProps;switch(Pi(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return U(t),null;case 1:return U(t),null;case 3:return n=t.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),t.memoizedState.cache!==r&&(t.flags|=2048),Zi(la),ve(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Ui(t)?Pc(t):e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Gi())),U(t),null;case 26:var i=t.type,a=t.memoizedState;return e===null?(Pc(t),a===null?(U(t),Fc(t,i,null,r,n)):(U(t),Ic(t,a))):a?a===e.memoizedState?(U(t),t.flags&=-16777217):(Pc(t),U(t),Ic(t,a)):(e=e.memoizedProps,e!==r&&Pc(t),U(t),Fc(t,i,e,r,n)),null;case 27:if(be(t),n=he.current,i=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Pc(t);else{if(!r){if(t.stateNode===null)throw Error(s(166));return U(t),null}e=pe.current,Ui(t)?Vi(t,e):(e=ff(i,r,n),t.stateNode=e,Pc(t))}return U(t),null;case 5:if(be(t),i=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Pc(t);else{if(!r){if(t.stateNode===null)throw Error(s(166));return U(t),null}if(a=pe.current,Ui(t))Vi(t,a);else{var o=Bd(he.current);switch(a){case 1:a=o.createElementNS(`http://www.w3.org/2000/svg`,i);break;case 2:a=o.createElementNS(`http://www.w3.org/1998/Math/MathML`,i);break;default:switch(i){case`svg`:a=o.createElementNS(`http://www.w3.org/2000/svg`,i);break;case`math`:a=o.createElementNS(`http://www.w3.org/1998/Math/MathML`,i);break;case`script`:a=o.createElement(`div`),a.innerHTML=`<script><\/script>`,a=a.removeChild(a.firstChild);break;case`select`:a=typeof r.is==`string`?o.createElement(`select`,{is:r.is}):o.createElement(`select`),r.multiple?a.multiple=!0:r.size&&(a.size=r.size);break;default:a=typeof r.is==`string`?o.createElement(i,{is:r.is}):o.createElement(i)}}a[F]=t,a[ut]=r;a:for(o=t.child;o!==null;){if(o.tag===5||o.tag===6)a.appendChild(o.stateNode);else if(o.tag!==4&&o.tag!==27&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===t)break a;for(;o.sibling===null;){if(o.return===null||o.return===t)break a;o=o.return}o.sibling.return=o.return,o=o.sibling}t.stateNode=a;a:switch(Pd(a,i,r),i){case`button`:case`input`:case`select`:case`textarea`:r=!!r.autoFocus;break a;case`img`:r=!0;break a;default:r=!1}r&&Pc(t)}}return U(t),Fc(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==r&&Pc(t);else{if(typeof r!=`string`&&t.stateNode===null)throw Error(s(166));if(e=he.current,Ui(t)){if(e=t.stateNode,n=t.memoizedProps,r=null,i=Ii,i!==null)switch(i.tag){case 27:case 5:r=i.memoizedProps}e[F]=t,e=!!(e.nodeValue===n||r!==null&&!0===r.suppressHydrationWarning||Md(e.nodeValue,n)),e||Bi(t,!0)}else e=Bd(e).createTextNode(r),e[F]=t,t.stateNode=e}return U(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(r=Ui(t),n!==null){if(e===null){if(!r)throw Error(s(318));if(e=t.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(s(557));e[F]=t}else Wi(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;U(t),e=!1}else n=Gi(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(fo(t),t):(fo(t),null);if(t.flags&128)throw Error(s(558))}return U(t),null;case 13:if(r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(i=Ui(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(s(318));if(i=t.memoizedState,i=i===null?null:i.dehydrated,!i)throw Error(s(317));i[F]=t}else Wi(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;U(t),i=!1}else i=Gi(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=i),i=!0;if(!i)return t.flags&256?(fo(t),t):(fo(t),null)}return fo(t),t.flags&128?(t.lanes=n,t):(n=r!==null,e=e!==null&&e.memoizedState!==null,n&&(r=t.child,i=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(i=r.alternate.memoizedState.cachePool.pool),a=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(a=r.memoizedState.cachePool.pool),a!==i&&(r.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),Lc(t,t.updateQueue),U(t),null);case 4:return ve(),e===null&&Sd(t.stateNode.containerInfo),U(t),null;case 10:return Zi(t.type),U(t),null;case 19:if(k(R),r=t.memoizedState,r===null)return U(t),null;if(i=!!(t.flags&128),a=r.rendering,a===null){if(i)Rc(r,!1);else{if(X!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(a=po(e),a!==null){for(t.flags|=128,Rc(r,!1),e=a.updateQueue,t.updateQueue=e,Lc(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)mi(n,e),n=n.sibling;return A(R,R.current&1|2),L&&ji(t,r.treeForkCount),t.child}e=e.sibling}r.tail!==null&&je()>tu&&(t.flags|=128,i=!0,Rc(r,!1),t.lanes=4194304)}}else{if(!i){if(e=po(a),e!==null){if(t.flags|=128,i=!0,e=e.updateQueue,t.updateQueue=e,Lc(t,e),Rc(r,!0),r.tail===null&&r.tailMode===`hidden`&&!a.alternate&&!L)return U(t),null}else 2*je()-r.renderingStartTime>tu&&n!==536870912&&(t.flags|=128,i=!0,Rc(r,!1),t.lanes=4194304)}r.isBackwards?(a.sibling=t.child,t.child=a):(e=r.last,e===null?t.child=a:e.sibling=a,r.last=a)}return r.tail===null?(U(t),null):(e=r.tail,r.rendering=e,r.tail=e.sibling,r.renderingStartTime=je(),e.sibling=null,n=R.current,A(R,i?n&1|2:n&1),L&&ji(t,r.treeForkCount),e);case 22:case 23:return fo(t),io(),r=t.memoizedState!==null,e===null?r&&(t.flags|=8192):e.memoizedState!==null!==r&&(t.flags|=8192),r?n&536870912&&!(t.flags&128)&&(U(t),t.subtreeFlags&6&&(t.flags|=8192)):U(t),n=t.updateQueue,n!==null&&Lc(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),r=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),r!==n&&(t.flags|=2048),e!==null&&k(ba),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),Zi(la),U(t),null;case 25:return null;case 30:return null}throw Error(s(156,t.tag))}function Bc(e,t){switch(Pi(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Zi(la),ve(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return be(t),null;case 31:if(t.memoizedState!==null){if(fo(t),t.alternate===null)throw Error(s(340));Wi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(fo(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(s(340));Wi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return k(R),null;case 4:return ve(),null;case 10:return Zi(t.type),null;case 22:case 23:return fo(t),io(),e!==null&&k(ba),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Zi(la),null;case 25:return null;default:return null}}function Vc(e,t){switch(Pi(t),t.tag){case 3:Zi(la),ve();break;case 26:case 27:case 5:be(t);break;case 4:ve();break;case 31:t.memoizedState!==null&&fo(t);break;case 13:fo(t);break;case 19:k(R);break;case 10:Zi(t.type);break;case 22:case 23:fo(t),io(),e!==null&&k(ba);break;case 24:Zi(la)}}function Hc(e,t){try{var n=t.updateQueue,r=n===null?null:n.lastEffect;if(r!==null){var i=r.next;n=i;do{if((n.tag&e)===e){r=void 0;var a=n.create,o=n.inst;r=a(),o.destroy=r}n=n.next}while(n!==i)}}catch(e){Z(t,t.return,e)}}function Uc(e,t,n){try{var r=t.updateQueue,i=r===null?null:r.lastEffect;if(i!==null){var a=i.next;r=a;do{if((r.tag&e)===e){var o=r.inst,s=o.destroy;if(s!==void 0){o.destroy=void 0,i=t;var c=n,l=s;try{l()}catch(e){Z(i,c,e)}}}r=r.next}while(r!==a)}}catch(e){Z(t,t.return,e)}}function Wc(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{$a(t,n)}catch(t){Z(e,e.return,t)}}}function Gc(e,t,n){n.props=qs(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(n){Z(e,t,n)}}function Kc(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:r=e.stateNode;break;default:r=e.stateNode}typeof n==`function`?e.refCleanup=n(r):n.current=r}}catch(n){Z(e,t,n)}}function qc(e,t){var n=e.ref,r=e.refCleanup;if(n!==null){if(typeof r==`function`)try{r()}catch(n){Z(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n==`function`)try{n(null)}catch(n){Z(e,t,n)}else n.current=null}}function Jc(e){var t=e.type,n=e.memoizedProps,r=e.stateNode;try{a:switch(t){case`button`:case`input`:case`select`:case`textarea`:n.autoFocus&&r.focus();break a;case`img`:n.src?r.src=n.src:n.srcSet&&(r.srcset=n.srcSet)}}catch(t){Z(e,e.return,t)}}function Yc(e,t,n){try{var r=e.stateNode;Fd(r,e.type,n,t),r[ut]=t}catch(t){Z(e,e.return,t)}}function Xc(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Zd(e.type)||e.tag===4}function Zc(e){a:for(;;){for(;e.sibling===null;){if(e.return===null||Xc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Zd(e.type)||e.flags&2||e.child===null||e.tag===4)continue a;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Qc(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=nn));else if(r!==4&&(r===27&&Zd(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(Qc(e,t,n),e=e.sibling;e!==null;)Qc(e,t,n),e=e.sibling}function $c(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(r===27&&Zd(e.type)&&(n=e.stateNode),e=e.child,e!==null))for($c(e,t,n),e=e.sibling;e!==null;)$c(e,t,n),e=e.sibling}function el(e){var t=e.stateNode,n=e.memoizedProps;try{for(var r=e.type,i=t.attributes;i.length;)t.removeAttributeNode(i[0]);Pd(t,r,n),t[F]=e,t[ut]=n}catch(t){Z(e,e.return,t)}}var tl=!1,nl=!1,rl=!1,il=typeof WeakSet==`function`?WeakSet:Set,al=null;function ol(e,t){if(e=e.containerInfo,Rd=sp,e=Ar(e),jr(e)){if(`selectionStart`in e)var n={start:e.selectionStart,end:e.selectionEnd};else a:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,a=r.focusNode;r=r.focusOffset;try{n.nodeType,a.nodeType}catch{n=null;break a}var o=0,c=-1,l=-1,u=0,d=0,f=e,p=null;b:for(;;){for(var m;f!==n||i!==0&&f.nodeType!==3||(c=o+i),f!==a||r!==0&&f.nodeType!==3||(l=o+r),f.nodeType===3&&(o+=f.nodeValue.length),(m=f.firstChild)!==null;)p=f,f=m;for(;;){if(f===e)break b;if(p===n&&++u===i&&(c=o),p===a&&++d===r&&(l=o),(m=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=m}n=c===-1||l===-1?null:{start:c,end:l}}else n=null}n||={start:0,end:0}}else n=null;for(zd={focusedElem:e,selectionRange:n},sp=!1,al=t;al!==null;)if(t=al,e=t.child,t.subtreeFlags&1028&&e!==null)e.return=t,al=e;else for(;al!==null;){switch(t=al,a=t.alternate,e=t.flags,t.tag){case 0:if(e&4&&(e=t.updateQueue,e=e===null?null:e.events,e!==null))for(n=0;n<e.length;n++)i=e[n],i.ref.impl=i.nextImpl;break;case 11:case 15:break;case 1:if(e&1024&&a!==null){e=void 0,n=t,i=a.memoizedProps,a=a.memoizedState,r=n.stateNode;try{var h=qs(n.type,i);e=r.getSnapshotBeforeUpdate(h,a),r.__reactInternalSnapshotBeforeUpdate=e}catch(e){Z(n,n.return,e)}}break;case 3:if(e&1024){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)ef(e);else if(n===1)switch(e.nodeName){case`HEAD`:case`HTML`:case`BODY`:ef(e);break;default:e.textContent=``}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if(e&1024)throw Error(s(163))}if(e=t.sibling,e!==null){e.return=t.return,al=e;break}al=t.return}}function sl(e,t,n){var r=n.flags;switch(n.tag){case 0:case 11:case 15:xl(e,n),r&4&&Hc(5,n);break;case 1:if(xl(e,n),r&4){if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(e){Z(n,n.return,e)}else{var i=qs(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(i,t,e.__reactInternalSnapshotBeforeUpdate)}catch(e){Z(n,n.return,e)}}}r&64&&Wc(n),r&512&&Kc(n,n.return);break;case 3:if(xl(e,n),r&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{$a(e,t)}catch(e){Z(n,n.return,e)}}break;case 27:t===null&&r&4&&el(n);case 26:case 5:xl(e,n),t===null&&r&4&&Jc(n),r&512&&Kc(n,n.return);break;case 12:xl(e,n);break;case 31:xl(e,n),r&4&&fl(e,n);break;case 13:xl(e,n),r&4&&pl(e,n),r&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=Ju.bind(null,n),sf(e,n))));break;case 22:if(r=n.memoizedState!==null||tl,!r){t=t!==null&&t.memoizedState!==null||nl,i=tl;var a=nl;tl=r,(nl=t)&&!a?Cl(e,n,!!(n.subtreeFlags&8772)):xl(e,n),tl=i,nl=a}break;case 30:break;default:xl(e,n)}}function cl(e){var t=e.alternate;t!==null&&(e.alternate=null,cl(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&_t(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var W=null,ll=!1;function ul(e,t,n){for(n=n.child;n!==null;)dl(e,t,n),n=n.sibling}function dl(e,t,n){if(Ve&&typeof Ve.onCommitFiberUnmount==`function`)try{Ve.onCommitFiberUnmount(Be,n)}catch{}switch(n.tag){case 26:nl||qc(n,t),ul(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:nl||qc(n,t);var r=W,i=ll;Zd(n.type)&&(W=n.stateNode,ll=!1),ul(e,t,n),pf(n.stateNode),W=r,ll=i;break;case 5:nl||qc(n,t);case 6:if(r=W,i=ll,W=null,ul(e,t,n),W=r,ll=i,W!==null){if(ll)try{(W.nodeType===9?W.body:W.nodeName===`HTML`?W.ownerDocument.body:W).removeChild(n.stateNode)}catch(e){Z(n,t,e)}else try{W.removeChild(n.stateNode)}catch(e){Z(n,t,e)}}break;case 18:W!==null&&(ll?(e=W,Qd(e.nodeType===9?e.body:e.nodeName===`HTML`?e.ownerDocument.body:e,n.stateNode),Np(e)):Qd(W,n.stateNode));break;case 4:r=W,i=ll,W=n.stateNode.containerInfo,ll=!0,ul(e,t,n),W=r,ll=i;break;case 0:case 11:case 14:case 15:Uc(2,n,t),nl||Uc(4,n,t),ul(e,t,n);break;case 1:nl||(qc(n,t),r=n.stateNode,typeof r.componentWillUnmount==`function`&&Gc(n,t,r)),ul(e,t,n);break;case 21:ul(e,t,n);break;case 22:nl=(r=nl)||n.memoizedState!==null,ul(e,t,n),nl=r;break;default:ul(e,t,n)}}function fl(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Np(e)}catch(e){Z(t,t.return,e)}}}function pl(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Np(e)}catch(e){Z(t,t.return,e)}}function ml(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new il),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new il),t;default:throw Error(s(435,e.tag))}}function hl(e,t){var n=ml(e);t.forEach(function(t){if(!n.has(t)){n.add(t);var r=Yu.bind(null,e,t);t.then(r,r)}})}function gl(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r],a=e,o=t,c=o;a:for(;c!==null;){switch(c.tag){case 27:if(Zd(c.type)){W=c.stateNode,ll=!1;break a}break;case 5:W=c.stateNode,ll=!1;break a;case 3:case 4:W=c.stateNode.containerInfo,ll=!0;break a}c=c.return}if(W===null)throw Error(s(160));dl(a,o,i),W=null,ll=!1,a=i.alternate,a!==null&&(a.return=null),i.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)vl(t,e),t=t.sibling}var _l=null;function vl(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:gl(t,e),yl(e),r&4&&(Uc(3,e,e.return),Hc(3,e),Uc(5,e,e.return));break;case 1:gl(t,e),yl(e),r&512&&(nl||n===null||qc(n,n.return)),r&64&&tl&&(e=e.updateQueue,e!==null&&(r=e.callbacks,r!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?r:n.concat(r))));break;case 26:var i=_l;if(gl(t,e),yl(e),r&512&&(nl||n===null||qc(n,n.return)),r&4){var a=n===null?null:n.memoizedState;if(r=e.memoizedState,n===null){if(r===null){if(e.stateNode===null){a:{r=e.type,n=e.memoizedProps,i=i.ownerDocument||i;b:switch(r){case`title`:a=i.getElementsByTagName(`title`)[0],(!a||a[gt]||a[F]||a.namespaceURI===`http://www.w3.org/2000/svg`||a.hasAttribute(`itemprop`))&&(a=i.createElement(r),i.head.insertBefore(a,i.querySelector(`head > title`))),Pd(a,r,n),a[F]=e,St(a),r=a;break a;case`link`:var o=Vf(`link`,`href`,i).get(r+(n.href||``));if(o){for(var c=0;c<o.length;c++)if(a=o[c],a.getAttribute(`href`)===(n.href==null||n.href===``?null:n.href)&&a.getAttribute(`rel`)===(n.rel==null?null:n.rel)&&a.getAttribute(`title`)===(n.title==null?null:n.title)&&a.getAttribute(`crossorigin`)===(n.crossOrigin==null?null:n.crossOrigin)){o.splice(c,1);break b}}a=i.createElement(r),Pd(a,r,n),i.head.appendChild(a);break;case`meta`:if(o=Vf(`meta`,`content`,i).get(r+(n.content||``))){for(c=0;c<o.length;c++)if(a=o[c],a.getAttribute(`content`)===(n.content==null?null:``+n.content)&&a.getAttribute(`name`)===(n.name==null?null:n.name)&&a.getAttribute(`property`)===(n.property==null?null:n.property)&&a.getAttribute(`http-equiv`)===(n.httpEquiv==null?null:n.httpEquiv)&&a.getAttribute(`charset`)===(n.charSet==null?null:n.charSet)){o.splice(c,1);break b}}a=i.createElement(r),Pd(a,r,n),i.head.appendChild(a);break;default:throw Error(s(468,r))}a[F]=e,St(a),r=a}e.stateNode=r}else Hf(i,e.type,e.stateNode)}else e.stateNode=If(i,r,e.memoizedProps)}else a===r?r===null&&e.stateNode!==null&&Yc(e,e.memoizedProps,n.memoizedProps):(a===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):a.count--,r===null?Hf(i,e.type,e.stateNode):If(i,r,e.memoizedProps))}break;case 27:gl(t,e),yl(e),r&512&&(nl||n===null||qc(n,n.return)),n!==null&&r&4&&Yc(e,e.memoizedProps,n.memoizedProps);break;case 5:if(gl(t,e),yl(e),r&512&&(nl||n===null||qc(n,n.return)),e.flags&32){i=e.stateNode;try{Jt(i,``)}catch(t){Z(e,e.return,t)}}r&4&&e.stateNode!=null&&(i=e.memoizedProps,Yc(e,i,n===null?i:n.memoizedProps)),r&1024&&(rl=!0);break;case 6:if(gl(t,e),yl(e),r&4){if(e.stateNode===null)throw Error(s(162));r=e.memoizedProps,n=e.stateNode;try{n.nodeValue=r}catch(t){Z(e,e.return,t)}}break;case 3:if(Bf=null,i=_l,_l=gf(t.containerInfo),gl(t,e),_l=i,yl(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Np(t.containerInfo)}catch(t){Z(e,e.return,t)}rl&&(rl=!1,bl(e));break;case 4:r=_l,_l=gf(e.stateNode.containerInfo),gl(t,e),yl(e),_l=r;break;case 12:gl(t,e),yl(e);break;case 31:gl(t,e),yl(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,hl(e,r)));break;case 13:gl(t,e),yl(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&($l=je()),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,hl(e,r)));break;case 22:i=e.memoizedState!==null;var l=n!==null&&n.memoizedState!==null,u=tl,d=nl;if(tl=u||i,nl=d||l,gl(t,e),nl=d,tl=u,yl(e),r&8192)a:for(t=e.stateNode,t._visibility=i?t._visibility&-2:t._visibility|1,i&&(n===null||l||tl||nl||Sl(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){l=n=t;try{if(a=l.stateNode,i)o=a.style,typeof o.setProperty==`function`?o.setProperty(`display`,`none`,`important`):o.display=`none`;else{c=l.stateNode;var f=l.memoizedProps.style,p=f!=null&&f.hasOwnProperty(`display`)?f.display:null;c.style.display=p==null||typeof p==`boolean`?``:(``+p).trim()}}catch(e){Z(l,l.return,e)}}}else if(t.tag===6){if(n===null){l=t;try{l.stateNode.nodeValue=i?``:l.memoizedProps}catch(e){Z(l,l.return,e)}}}else if(t.tag===18){if(n===null){l=t;try{var m=l.stateNode;i?$d(m,!0):$d(l.stateNode,!1)}catch(e){Z(l,l.return,e)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break a;for(;t.sibling===null;){if(t.return===null||t.return===e)break a;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}r&4&&(r=e.updateQueue,r!==null&&(n=r.retryQueue,n!==null&&(r.retryQueue=null,hl(e,n))));break;case 19:gl(t,e),yl(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,hl(e,r)));break;case 30:break;case 21:break;default:gl(t,e),yl(e)}}function yl(e){var t=e.flags;if(t&2){try{for(var n,r=e.return;r!==null;){if(Xc(r)){n=r;break}r=r.return}if(n==null)throw Error(s(160));switch(n.tag){case 27:var i=n.stateNode;$c(e,Zc(e),i);break;case 5:var a=n.stateNode;n.flags&32&&(Jt(a,``),n.flags&=-33),$c(e,Zc(e),a);break;case 3:case 4:var o=n.stateNode.containerInfo;Qc(e,Zc(e),o);break;default:throw Error(s(161))}}catch(t){Z(e,e.return,t)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function bl(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;bl(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function xl(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)sl(e,t.alternate,t),t=t.sibling}function Sl(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Uc(4,t,t.return),Sl(t);break;case 1:qc(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount==`function`&&Gc(t,t.return,n),Sl(t);break;case 27:pf(t.stateNode);case 26:case 5:qc(t,t.return),Sl(t);break;case 22:t.memoizedState===null&&Sl(t);break;case 30:Sl(t);break;default:Sl(t)}e=e.sibling}}function Cl(e,t,n){for(n&&=!!(t.subtreeFlags&8772),t=t.child;t!==null;){var r=t.alternate,i=e,a=t,o=a.flags;switch(a.tag){case 0:case 11:case 15:Cl(i,a,n),Hc(4,a);break;case 1:if(Cl(i,a,n),r=a,i=r.stateNode,typeof i.componentDidMount==`function`)try{i.componentDidMount()}catch(e){Z(r,r.return,e)}if(r=a,i=r.updateQueue,i!==null){var s=r.stateNode;try{var c=i.shared.hiddenCallbacks;if(c!==null)for(i.shared.hiddenCallbacks=null,i=0;i<c.length;i++)Qa(c[i],s)}catch(e){Z(r,r.return,e)}}n&&o&64&&Wc(a),Kc(a,a.return);break;case 27:el(a);case 26:case 5:Cl(i,a,n),n&&r===null&&o&4&&Jc(a),Kc(a,a.return);break;case 12:Cl(i,a,n);break;case 31:Cl(i,a,n),n&&o&4&&fl(i,a);break;case 13:Cl(i,a,n),n&&o&4&&pl(i,a);break;case 22:a.memoizedState===null&&Cl(i,a,n),Kc(a,a.return);break;case 30:break;default:Cl(i,a,n)}t=t.sibling}}function wl(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&da(n))}function Tl(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&da(e))}function El(e,t,n,r){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Dl(e,t,n,r),t=t.sibling}function Dl(e,t,n,r){var i=t.flags;switch(t.tag){case 0:case 11:case 15:El(e,t,n,r),i&2048&&Hc(9,t);break;case 1:El(e,t,n,r);break;case 3:El(e,t,n,r),i&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&da(e)));break;case 12:if(i&2048){El(e,t,n,r),e=t.stateNode;try{var a=t.memoizedProps,o=a.id,s=a.onPostCommit;typeof s==`function`&&s(o,t.alternate===null?`mount`:`update`,e.passiveEffectDuration,-0)}catch(e){Z(t,t.return,e)}}else El(e,t,n,r);break;case 31:El(e,t,n,r);break;case 13:El(e,t,n,r);break;case 23:break;case 22:a=t.stateNode,o=t.alternate,t.memoizedState===null?a._visibility&2?El(e,t,n,r):(a._visibility|=2,Ol(e,t,n,r,!!(t.subtreeFlags&10256)||!1)):a._visibility&2?El(e,t,n,r):kl(e,t),i&2048&&wl(o,t);break;case 24:El(e,t,n,r),i&2048&&Tl(t.alternate,t);break;default:El(e,t,n,r)}}function Ol(e,t,n,r,i){for(i&&=!!(t.subtreeFlags&10256)||!1,t=t.child;t!==null;){var a=e,o=t,s=n,c=r,l=o.flags;switch(o.tag){case 0:case 11:case 15:Ol(a,o,s,c,i),Hc(8,o);break;case 23:break;case 22:var u=o.stateNode;o.memoizedState===null?(u._visibility|=2,Ol(a,o,s,c,i)):u._visibility&2?Ol(a,o,s,c,i):kl(a,o),i&&l&2048&&wl(o.alternate,o);break;case 24:Ol(a,o,s,c,i),i&&l&2048&&Tl(o.alternate,o);break;default:Ol(a,o,s,c,i)}t=t.sibling}}function kl(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,r=t,i=r.flags;switch(r.tag){case 22:kl(n,r),i&2048&&wl(r.alternate,r);break;case 24:kl(n,r),i&2048&&Tl(r.alternate,r);break;default:kl(n,r)}t=t.sibling}}var Al=8192;function jl(e,t,n){if(e.subtreeFlags&Al)for(e=e.child;e!==null;)Ml(e,t,n),e=e.sibling}function Ml(e,t,n){switch(e.tag){case 26:jl(e,t,n),e.flags&Al&&e.memoizedState!==null&&Gf(n,_l,e.memoizedState,e.memoizedProps);break;case 5:jl(e,t,n);break;case 3:case 4:var r=_l;_l=gf(e.stateNode.containerInfo),jl(e,t,n),_l=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=Al,Al=16777216,jl(e,t,n),Al=r):jl(e,t,n));break;default:jl(e,t,n)}}function Nl(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Pl(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];al=r,Ll(r,e)}Nl(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Fl(e),e=e.sibling}function Fl(e){switch(e.tag){case 0:case 11:case 15:Pl(e),e.flags&2048&&Uc(9,e,e.return);break;case 3:Pl(e);break;case 12:Pl(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Il(e)):Pl(e);break;default:Pl(e)}}function Il(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];al=r,Ll(r,e)}Nl(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Uc(8,t,t.return),Il(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Il(t));break;default:Il(t)}e=e.sibling}}function Ll(e,t){for(;al!==null;){var n=al;switch(n.tag){case 0:case 11:case 15:Uc(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var r=n.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:da(n.memoizedState.cache)}if(r=n.child,r!==null)r.return=n,al=r;else a:for(n=e;al!==null;){r=al;var i=r.sibling,a=r.return;if(cl(r),r===n){al=null;break a}if(i!==null){i.return=a,al=i;break a}al=a}}}var Rl={getCacheForType:function(e){var t=ra(la),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return ra(la).controller.signal}},zl=typeof WeakMap==`function`?WeakMap:Map,G=0,K=null,q=null,J=0,Y=0,Bl=null,Vl=!1,Hl=!1,Ul=!1,Wl=0,X=0,Gl=0,Kl=0,ql=0,Jl=0,Yl=0,Xl=null,Zl=null,Ql=!1,$l=0,eu=0,tu=1/0,nu=null,ru=null,iu=0,au=null,ou=null,su=0,cu=0,lu=null,uu=null,du=0,fu=null;function pu(){return G&2&&J!==0?J&-J:D.T===null?st():dd()}function mu(){if(Jl===0){if(!(J&536870912)||L){var e=Je;Je<<=1,!(Je&3932160)&&(Je=262144),Jl=e}else Jl=536870912}return e=ao.current,e!==null&&(e.flags|=32),Jl}function hu(e,t,n){(e===K&&(Y===2||Y===9)||e.cancelPendingCommit!==null)&&(Su(e,0),yu(e,J,Jl,!1)),et(e,n),(!(G&2)||e!==K)&&(e===K&&(!(G&2)&&(Kl|=n),X===4&&yu(e,J,Jl,!1)),rd(e))}function gu(e,t,n){if(G&6)throw Error(s(327));var r=!n&&!(t&127)&&(t&e.expiredLanes)===0||Qe(e,t),i=r?Au(e,t):Ou(e,t,!0),a=r;do{if(i===0){Hl&&!r&&yu(e,t,0,!1);break}if(n=e.current.alternate,a&&!vu(n)){i=Ou(e,t,!1),a=!1;continue}if(i===2){if(a=t,e.errorRecoveryDisabledLanes&a)var o=0;else o=e.pendingLanes&-536870913,o=o===0?o&536870912?536870912:0:o;if(o!==0){t=o;a:{var c=e;i=Xl;var l=c.current.memoizedState.isDehydrated;if(l&&(Su(c,o).flags|=256),o=Ou(c,o,!1),o!==2){if(Ul&&!l){c.errorRecoveryDisabledLanes|=a,Kl|=a,i=4;break a}a=Zl,Zl=i,a!==null&&(Zl===null?Zl=a:Zl.push.apply(Zl,a))}i=o}if(a=!1,i!==2)continue}}if(i===1){Su(e,0),yu(e,t,0,!0);break}a:{switch(r=e,a=i,a){case 0:case 1:throw Error(s(345));case 4:if((t&4194048)!==t)break;case 6:yu(r,t,Jl,!Vl);break a;case 2:Zl=null;break;case 3:case 5:break;default:throw Error(s(329))}if((t&62914560)===t&&(i=$l+300-je(),10<i)){if(yu(r,t,Jl,!Vl),Ze(r,0,!0)!==0)break a;su=t,r.timeoutHandle=Kd(_u.bind(null,r,n,Zl,nu,Ql,t,Jl,Kl,Yl,Vl,a,`Throttled`,-0,0),i);break a}_u(r,n,Zl,nu,Ql,t,Jl,Kl,Yl,Vl,a,null,-0,0)}break}while(1);rd(e)}function _u(e,t,n,r,i,a,o,s,c,l,u,d,f,p){if(e.timeoutHandle=-1,d=t.subtreeFlags,d&8192||(d&16785408)==16785408){d={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:nn},Ml(t,a,d);var m=(a&62914560)===a?$l-je():(a&4194048)===a?eu-je():0;if(m=qf(d,m),m!==null){su=a,e.cancelPendingCommit=m(Lu.bind(null,e,t,a,n,r,i,o,s,c,u,d,null,f,p)),yu(e,a,o,!l);return}}Lu(e,t,a,n,r,i,o,s,c)}function vu(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!Tr(a(),i))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function yu(e,t,n,r){t&=~ql,t&=~Kl,e.suspendedLanes|=t,e.pingedLanes&=~t,r&&(e.warmLanes|=t),r=e.expirationTimes;for(var i=t;0<i;){var a=31-Ue(i),o=1<<a;r[a]=-1,i&=~o}n!==0&&nt(e,n,t)}function bu(){return G&6?!0:(id(0,!1),!1)}function xu(){if(q!==null){if(Y===0)var e=q.return;else e=q,Yi=Ji=null,Ao(e),Pa=null,Fa=0,e=q;for(;e!==null;)Vc(e.alternate,e),e=e.return;q=null}}function Su(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,qd(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),su=0,xu(),K=e,q=n=pi(e.current,null),J=t,Y=0,Bl=null,Vl=!1,Hl=Qe(e,t),Ul=!1,Yl=Jl=ql=Kl=Gl=X=0,Zl=Xl=null,Ql=!1,t&8&&(t|=t&32);var r=e.entangledLanes;if(r!==0)for(e=e.entanglements,r&=t;0<r;){var i=31-Ue(r),a=1<<i;t|=e[i],r&=~a}return Wl=t,ri(),n}function Cu(e,t){z=null,D.H=zs,t===wa||t===Ea?(t=Ma(),Y=3):t===Ta?(t=Ma(),Y=4):Y=t===rc?8:typeof t==`object`&&t&&typeof t.then==`function`?6:1,Bl=t,q===null&&(X=1,Zs(e,xi(t,e.current)))}function wu(){var e=ao.current;return e===null?!0:(J&4194048)===J?oo===null:(J&62914560)===J||J&536870912?e===oo:!1}function Tu(){var e=D.H;return D.H=zs,e===null?zs:e}function Eu(){var e=D.A;return D.A=Rl,e}function Du(){X=4,Vl||(J&4194048)!==J&&ao.current!==null||(Hl=!0),!(Gl&134217727)&&!(Kl&134217727)||K===null||yu(K,J,Jl,!1)}function Ou(e,t,n){var r=G;G|=2;var i=Tu(),a=Eu();(K!==e||J!==t)&&(nu=null,Su(e,t)),t=!1;var o=X;a:do try{if(Y!==0&&q!==null){var s=q,c=Bl;switch(Y){case 8:xu(),o=6;break a;case 3:case 2:case 9:case 6:ao.current===null&&(t=!0);var l=Y;if(Y=0,Bl=null,Pu(e,s,c,l),n&&Hl){o=0;break a}break;default:l=Y,Y=0,Bl=null,Pu(e,s,c,l)}}ku(),o=X;break}catch(t){Cu(e,t)}while(1);return t&&e.shellSuspendCounter++,Yi=Ji=null,G=r,D.H=i,D.A=a,q===null&&(K=null,J=0,ri()),o}function ku(){for(;q!==null;)Mu(q)}function Au(e,t){var n=G;G|=2;var r=Tu(),i=Eu();K!==e||J!==t?(nu=null,tu=je()+500,Su(e,t)):Hl=Qe(e,t);a:do try{if(Y!==0&&q!==null){t=q;var a=Bl;b:switch(Y){case 1:Y=0,Bl=null,Pu(e,t,a,1);break;case 2:case 9:if(Oa(a)){Y=0,Bl=null,Nu(t);break}t=function(){Y!==2&&Y!==9||K!==e||(Y=7),rd(e)},a.then(t,t);break a;case 3:Y=7;break a;case 4:Y=5;break a;case 7:Oa(a)?(Y=0,Bl=null,Nu(t)):(Y=0,Bl=null,Pu(e,t,a,7));break;case 5:var o=null;switch(q.tag){case 26:o=q.memoizedState;case 5:case 27:var c=q;if(o?Wf(o):c.stateNode.complete){Y=0,Bl=null;var l=c.sibling;if(l!==null)q=l;else{var u=c.return;u===null?q=null:(q=u,Fu(u))}break b}}Y=0,Bl=null,Pu(e,t,a,5);break;case 6:Y=0,Bl=null,Pu(e,t,a,6);break;case 8:xu(),X=6;break a;default:throw Error(s(462))}}ju();break}catch(t){Cu(e,t)}while(1);return Yi=Ji=null,D.H=r,D.A=i,G=n,q===null?(K=null,J=0,ri(),X):0}function ju(){for(;q!==null&&!ke();)Mu(q)}function Mu(e){var t=Nc(e.alternate,e,Wl);e.memoizedProps=e.pendingProps,t===null?Fu(e):q=t}function Nu(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=_c(n,t,t.pendingProps,t.type,void 0,J);break;case 11:t=_c(n,t,t.pendingProps,t.type.render,t.ref,J);break;case 5:Ao(t);default:Vc(n,t),t=q=mi(t,Wl),t=Nc(n,t,Wl)}e.memoizedProps=e.pendingProps,t===null?Fu(e):q=t}function Pu(e,t,n,r){Yi=Ji=null,Ao(t),Pa=null,Fa=0;var i=t.return;try{if(nc(e,i,t,n,J)){X=1,Zs(e,xi(n,e.current)),q=null;return}}catch(t){if(i!==null)throw q=i,t;X=1,Zs(e,xi(n,e.current)),q=null;return}t.flags&32768?(L||r===1?e=!0:Hl||J&536870912?e=!1:(Vl=e=!0,(r===2||r===9||r===3||r===6)&&(r=ao.current,r!==null&&r.tag===13&&(r.flags|=16384))),Iu(t,e)):Fu(t)}function Fu(e){var t=e;do{if(t.flags&32768){Iu(t,Vl);return}e=t.return;var n=zc(t.alternate,t,Wl);if(n!==null){q=n;return}if(t=t.sibling,t!==null){q=t;return}q=t=e}while(t!==null);X===0&&(X=5)}function Iu(e,t){do{var n=Bc(e.alternate,e);if(n!==null){n.flags&=32767,q=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){q=e;return}q=e=n}while(e!==null);X=6,q=null}function Lu(e,t,n,r,i,a,o,c,l){e.cancelPendingCommit=null;do Hu();while(iu!==0);if(G&6)throw Error(s(327));if(t!==null){if(t===e.current)throw Error(s(177));if(a=t.lanes|t.childLanes,a|=ni,tt(e,n,a,o,c,l),e===K&&(q=K=null,J=0),ou=t,au=e,su=n,cu=a,lu=i,uu=r,t.subtreeFlags&10256||t.flags&10256?(e.callbackNode=null,e.callbackPriority=0,Xu(Fe,function(){return Uu(),null})):(e.callbackNode=null,e.callbackPriority=0),r=!!(t.flags&13878),t.subtreeFlags&13878||r){r=D.T,D.T=null,i=O.p,O.p=2,o=G,G|=4;try{ol(e,t,n)}finally{G=o,O.p=i,D.T=r}}iu=1,Ru(),zu(),Bu()}}function Ru(){if(iu===1){iu=0;var e=au,t=ou,n=!!(t.flags&13878);if(t.subtreeFlags&13878||n){n=D.T,D.T=null;var r=O.p;O.p=2;var i=G;G|=4;try{vl(t,e);var a=zd,o=Ar(e.containerInfo),s=a.focusedElem,c=a.selectionRange;if(o!==s&&s&&s.ownerDocument&&kr(s.ownerDocument.documentElement,s)){if(c!==null&&jr(s)){var l=c.start,u=c.end;if(u===void 0&&(u=l),`selectionStart`in s)s.selectionStart=l,s.selectionEnd=Math.min(u,s.value.length);else{var d=s.ownerDocument||document,f=d&&d.defaultView||window;if(f.getSelection){var p=f.getSelection(),m=s.textContent.length,h=Math.min(c.start,m),g=c.end===void 0?h:Math.min(c.end,m);!p.extend&&h>g&&(o=g,g=h,h=o);var _=Or(s,h),v=Or(s,g);if(_&&v&&(p.rangeCount!==1||p.anchorNode!==_.node||p.anchorOffset!==_.offset||p.focusNode!==v.node||p.focusOffset!==v.offset)){var y=d.createRange();y.setStart(_.node,_.offset),p.removeAllRanges(),h>g?(p.addRange(y),p.extend(v.node,v.offset)):(y.setEnd(v.node,v.offset),p.addRange(y))}}}}for(d=[],p=s;p=p.parentNode;)p.nodeType===1&&d.push({element:p,left:p.scrollLeft,top:p.scrollTop});for(typeof s.focus==`function`&&s.focus(),s=0;s<d.length;s++){var b=d[s];b.element.scrollLeft=b.left,b.element.scrollTop=b.top}}sp=!!Rd,zd=Rd=null}finally{G=i,O.p=r,D.T=n}}e.current=t,iu=2}}function zu(){if(iu===2){iu=0;var e=au,t=ou,n=!!(t.flags&8772);if(t.subtreeFlags&8772||n){n=D.T,D.T=null;var r=O.p;O.p=2;var i=G;G|=4;try{sl(e,t.alternate,t)}finally{G=i,O.p=r,D.T=n}}iu=3}}function Bu(){if(iu===4||iu===3){iu=0,Ae();var e=au,t=ou,n=su,r=uu;t.subtreeFlags&10256||t.flags&10256?iu=5:(iu=0,ou=au=null,Vu(e,e.pendingLanes));var i=e.pendingLanes;if(i===0&&(ru=null),ot(n),t=t.stateNode,Ve&&typeof Ve.onCommitFiberRoot==`function`)try{Ve.onCommitFiberRoot(Be,t,void 0,(t.current.flags&128)==128)}catch{}if(r!==null){t=D.T,i=O.p,O.p=2,D.T=null;try{for(var a=e.onRecoverableError,o=0;o<r.length;o++){var s=r[o];a(s.value,{componentStack:s.stack})}}finally{D.T=t,O.p=i}}su&3&&Hu(),rd(e),i=e.pendingLanes,n&261930&&i&42?e===fu?du++:(du=0,fu=e):du=0,id(0,!1)}}function Vu(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,da(t)))}function Hu(){return Ru(),zu(),Bu(),Uu()}function Uu(){if(iu!==5)return!1;var e=au,t=cu;cu=0;var n=ot(su),r=D.T,i=O.p;try{O.p=32>n?32:n,D.T=null,n=lu,lu=null;var a=au,o=su;if(iu=0,ou=au=null,su=0,G&6)throw Error(s(331));var c=G;if(G|=4,Fl(a.current),Dl(a,a.current,o,n),G=c,id(0,!1),Ve&&typeof Ve.onPostCommitFiberRoot==`function`)try{Ve.onPostCommitFiberRoot(Be,a)}catch{}return!0}finally{O.p=i,D.T=r,Vu(e,t)}}function Wu(e,t,n){t=xi(n,t),t=$s(e.stateNode,t,2),e=Ka(e,t,2),e!==null&&(et(e,2),rd(e))}function Z(e,t,n){if(e.tag===3)Wu(e,e,n);else for(;t!==null;){if(t.tag===3){Wu(t,e,n);break}if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError==`function`||typeof r.componentDidCatch==`function`&&(ru===null||!ru.has(r))){e=xi(n,e),n=ec(2),r=Ka(t,n,2),r!==null&&(tc(n,r,t,e),et(r,2),rd(r));break}}t=t.return}}function Gu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new zl;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(Ul=!0,i.add(n),e=Ku.bind(null,e,t,n),t.then(e,e))}function Ku(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,K===e&&(J&n)===n&&(X===4||X===3&&(J&62914560)===J&&300>je()-$l?!(G&2)&&Su(e,0):ql|=n,Yl===J&&(Yl=0)),rd(e)}function qu(e,t){t===0&&(t=P()),e=oi(e,t),e!==null&&(et(e,t),rd(e))}function Ju(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),qu(e,n)}function Yu(e,t){var n=0;switch(e.tag){case 31:case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(s(314))}r!==null&&r.delete(t),qu(e,n)}function Xu(e,t){return Oe(e,t)}var Zu=null,Qu=null,$u=!1,ed=!1,td=!1,nd=0;function rd(e){e!==Qu&&e.next===null&&(Qu===null?Zu=Qu=e:Qu=Qu.next=e),ed=!0,$u||($u=!0,ud())}function id(e,t){if(!td&&ed){td=!0;do for(var n=!1,r=Zu;r!==null;){if(!t){if(e!==0){var i=r.pendingLanes;if(i===0)var a=0;else{var o=r.suspendedLanes,s=r.pingedLanes;a=(1<<31-Ue(42|e)+1)-1,a&=i&~(o&~s),a=a&201326741?a&201326741|1:a?a|2:0}a!==0&&(n=!0,ld(r,a))}else a=J,a=Ze(r,r===K?a:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),!(a&3)||Qe(r,a)||(n=!0,ld(r,a))}r=r.next}while(n);td=!1}}function ad(){od()}function od(){ed=$u=!1;var e=0;nd!==0&&Gd()&&(e=nd);for(var t=je(),n=null,r=Zu;r!==null;){var i=r.next,a=sd(r,t);a===0?(r.next=null,n===null?Zu=i:n.next=i,i===null&&(Qu=n)):(n=r,(e!==0||a&3)&&(ed=!0)),r=i}iu!==0&&iu!==5||id(e,!1),nd!==0&&(nd=0)}function sd(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes&-62914561;0<a;){var o=31-Ue(a),s=1<<o,c=i[o];c===-1?((s&n)===0||(s&r)!==0)&&(i[o]=N(s,t)):c<=t&&(e.expiredLanes|=s),a&=~s}if(t=K,n=J,n=Ze(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,n===0||e===t&&(Y===2||Y===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&M(r),e.callbackNode=null,e.callbackPriority=0;if(!(n&3)||Qe(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(r!==null&&M(r),ot(n)){case 2:case 8:n=Pe;break;case 32:n=Fe;break;case 268435456:n=Le;break;default:n=Fe}return r=cd.bind(null,e),n=Oe(n,r),e.callbackPriority=t,e.callbackNode=n,t}return r!==null&&r!==null&&M(r),e.callbackPriority=2,e.callbackNode=null,2}function cd(e,t){if(iu!==0&&iu!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(Hu()&&e.callbackNode!==n)return null;var r=J;return r=Ze(e,e===K?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(gu(e,r,t),sd(e,je()),e.callbackNode!=null&&e.callbackNode===n?cd.bind(null,e):null)}function ld(e,t){if(Hu())return null;gu(e,t,!0)}function ud(){Yd(function(){G&6?Oe(Ne,ad):od()})}function dd(){if(nd===0){var e=ma;e===0&&(e=qe,qe<<=1,!(qe&261888)&&(qe=256)),nd=e}return nd}function fd(e){return e==null||typeof e==`symbol`||typeof e==`boolean`?null:typeof e==`function`?e:tn(``+e)}function pd(e,t){var n=t.ownerDocument.createElement(`input`);return n.name=t.name,n.value=t.value,e.id&&n.setAttribute(`form`,e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function md(e,t,n,r,i){if(t===`submit`&&n&&n.stateNode===i){var a=fd((i[ut]||null).action),o=r.submitter;o&&(t=(t=o[ut]||null)?fd(t.formAction):o.getAttribute(`formAction`),t!==null&&(a=t,o=null));var s=new wn(`action`,`action`,null,r,i);e.push({event:s,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(nd!==0){var e=o?pd(i,o):new FormData(i);Ts(n,{pending:!0,data:e,method:i.method,action:a},null,e)}}else typeof a==`function`&&(s.preventDefault(),e=o?pd(i,o):new FormData(i),Ts(n,{pending:!0,data:e,method:i.method,action:a},a,e))},currentTarget:i}]})}}for(var hd=0;hd<Zr.length;hd++){var gd=Zr[hd];Qr(gd.toLowerCase(),`on`+(gd[0].toUpperCase()+gd.slice(1)))}Qr(Ur,`onAnimationEnd`),Qr(Wr,`onAnimationIteration`),Qr(Gr,`onAnimationStart`),Qr(`dblclick`,`onDoubleClick`),Qr(`focusin`,`onFocus`),Qr(`focusout`,`onBlur`),Qr(Kr,`onTransitionRun`),Qr(qr,`onTransitionStart`),Qr(Jr,`onTransitionCancel`),Qr(Yr,`onTransitionEnd`),Et(`onMouseEnter`,[`mouseout`,`mouseover`]),Et(`onMouseLeave`,[`mouseout`,`mouseover`]),Et(`onPointerEnter`,[`pointerout`,`pointerover`]),Et(`onPointerLeave`,[`pointerout`,`pointerover`]),Tt(`onChange`,`change click focusin focusout input keydown keyup selectionchange`.split(` `)),Tt(`onSelect`,`focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange`.split(` `)),Tt(`onBeforeInput`,[`compositionend`,`keypress`,`textInput`,`paste`]),Tt(`onCompositionEnd`,`compositionend focusout keydown keypress keyup mousedown`.split(` `)),Tt(`onCompositionStart`,`compositionstart focusout keydown keypress keyup mousedown`.split(` `)),Tt(`onCompositionUpdate`,`compositionupdate focusout keydown keypress keyup mousedown`.split(` `));var _d=`abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting`.split(` `),vd=new Set(`beforetoggle cancel close invalid load scroll scrollend toggle`.split(` `).concat(_d));function yd(e,t){t=!!(t&4);for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;a:{var a=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],c=s.instance,l=s.currentTarget;if(s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){$r(e)}i.currentTarget=null,a=c}else for(o=0;o<r.length;o++){if(s=r[o],c=s.instance,l=s.currentTarget,s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){$r(e)}i.currentTarget=null,a=c}}}}function Q(e,t){var n=t[ft];n===void 0&&(n=t[ft]=new Set);var r=e+`__bubble`;n.has(r)||(Cd(t,e,2,!1),n.add(r))}function bd(e,t,n){var r=0;t&&(r|=4),Cd(n,e,r,t)}var xd=`_reactListening`+Math.random().toString(36).slice(2);function Sd(e){if(!e[xd]){e[xd]=!0,Ct.forEach(function(t){t!==`selectionchange`&&(vd.has(t)||bd(t,!1,e),bd(t,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[xd]||(t[xd]=!0,bd(`selectionchange`,!1,t))}}function Cd(e,t,n,r){switch(mp(t)){case 2:var i=cp;break;case 8:i=lp;break;default:i=up}n=i.bind(null,t,n,e),i=void 0,!pn||t!==`touchstart`&&t!==`touchmove`&&t!==`wheel`||(i=!0),r?i===void 0?e.addEventListener(t,n,!0):e.addEventListener(t,n,{capture:!0,passive:i}):i===void 0?e.addEventListener(t,n,!1):e.addEventListener(t,n,{passive:i})}function wd(e,t,n,r,i){var a=r;if(!(t&1)&&!(t&2)&&r!==null)a:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var s=r.stateNode.containerInfo;if(s===i)break;if(o===4)for(o=r.return;o!==null;){var c=o.tag;if((c===3||c===4)&&o.stateNode.containerInfo===i)return;o=o.return}for(;s!==null;){if(o=vt(s),o===null)return;if(c=o.tag,c===5||c===6||c===26||c===27){r=a=o;continue a}s=s.parentNode}}r=r.return}un(function(){var r=a,i=an(n),o=[];a:{var s=Xr.get(e);if(s!==void 0){var c=wn,u=e;switch(e){case`keypress`:if(yn(n)===0)break a;case`keydown`:case`keyup`:c=Hn;break;case`focusin`:u=`focus`,c=Nn;break;case`focusout`:u=`blur`,c=Nn;break;case`beforeblur`:case`afterblur`:c=Nn;break;case`click`:if(n.button===2)break a;case`auxclick`:case`dblclick`:case`mousedown`:case`mousemove`:case`mouseup`:case`mouseout`:case`mouseover`:case`contextmenu`:c=jn;break;case`drag`:case`dragend`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`dragstart`:case`drop`:c=Mn;break;case`touchcancel`:case`touchend`:case`touchmove`:case`touchstart`:c=Wn;break;case Ur:case Wr:case Gr:c=Pn;break;case Yr:c=Gn;break;case`scroll`:case`scrollend`:c=En;break;case`wheel`:c=Kn;break;case`copy`:case`cut`:case`paste`:c=Fn;break;case`gotpointercapture`:case`lostpointercapture`:case`pointercancel`:case`pointerdown`:case`pointermove`:case`pointerout`:case`pointerover`:case`pointerup`:c=Un;break;case`toggle`:case`beforetoggle`:c=qn}var d=!!(t&4),f=!d&&(e===`scroll`||e===`scrollend`),p=d?s===null?null:s+`Capture`:s;d=[];for(var m=r,h;m!==null;){var g=m;if(h=g.stateNode,g=g.tag,g!==5&&g!==26&&g!==27||h===null||p===null||(g=dn(m,p),g!=null&&d.push(Td(m,g,h))),f)break;m=m.return}0<d.length&&(s=new c(s,u,null,n,i),o.push({event:s,listeners:d}))}}if(!(t&7)){a:{if(s=e===`mouseover`||e===`pointerover`,c=e===`mouseout`||e===`pointerout`,s&&n!==rn&&(u=n.relatedTarget||n.fromElement)&&(vt(u)||u[dt]))break a;if((c||s)&&(s=i.window===i?i:(s=i.ownerDocument)?s.defaultView||s.parentWindow:window,c?(u=n.relatedTarget||n.toElement,c=r,u=u?vt(u):null,u!==null&&(f=l(u),d=u.tag,u!==f||d!==5&&d!==27&&d!==6)&&(u=null)):(c=null,u=r),c!==u)){if(d=jn,g=`onMouseLeave`,p=`onMouseEnter`,m=`mouse`,(e===`pointerout`||e===`pointerover`)&&(d=Un,g=`onPointerLeave`,p=`onPointerEnter`,m=`pointer`),f=c==null?s:bt(c),h=u==null?s:bt(u),s=new d(g,m+`leave`,c,n,i),s.target=f,s.relatedTarget=h,g=null,vt(i)===r&&(d=new d(p,m+`enter`,u,n,i),d.target=h,d.relatedTarget=f,g=d),f=g,c&&u)b:{for(d=Dd,p=c,m=u,h=0,g=p;g;g=d(g))h++;g=0;for(var _=m;_;_=d(_))g++;for(;0<h-g;)p=d(p),h--;for(;0<g-h;)m=d(m),g--;for(;h--;){if(p===m||m!==null&&p===m.alternate){d=p;break b}p=d(p),m=d(m)}d=null}else d=null;c!==null&&Od(o,s,c,d,!1),u!==null&&f!==null&&Od(o,f,u,d,!0)}}a:{if(s=r?bt(r):window,c=s.nodeName&&s.nodeName.toLowerCase(),c===`select`||c===`input`&&s.type===`file`)var v=pr;else if(sr(s)){if(mr)v=Cr;else{v=xr;var y=br}}else c=s.nodeName,!c||c.toLowerCase()!==`input`||s.type!==`checkbox`&&s.type!==`radio`?r&&Qt(r.elementType)&&(v=pr):v=Sr;if(v&&=v(e,r)){cr(o,v,n,i);break a}y&&y(e,s,r),e===`focusout`&&r&&s.type===`number`&&r.memoizedProps.value!=null&&Wt(s,`number`,s.value)}switch(y=r?bt(r):window,e){case`focusin`:(sr(y)||y.contentEditable===`true`)&&(Nr=y,Pr=r,Fr=null);break;case`focusout`:Fr=Pr=Nr=null;break;case`mousedown`:Ir=!0;break;case`contextmenu`:case`mouseup`:case`dragend`:Ir=!1,Lr(o,n,i);break;case`selectionchange`:if(Mr)break;case`keydown`:case`keyup`:Lr(o,n,i)}var b;if(Yn)b:{switch(e){case`compositionstart`:var x=`onCompositionStart`;break b;case`compositionend`:x=`onCompositionEnd`;break b;case`compositionupdate`:x=`onCompositionUpdate`;break b}x=void 0}else rr?tr(e,n)&&(x=`onCompositionEnd`):e===`keydown`&&n.keyCode===229&&(x=`onCompositionStart`);x&&(Qn&&n.locale!==`ko`&&(rr||x!==`onCompositionStart`?x===`onCompositionEnd`&&rr&&(b=vn()):(hn=i,gn=`value`in hn?hn.value:hn.textContent,rr=!0)),y=Ed(r,x),0<y.length&&(x=new In(x,e,null,n,i),o.push({event:x,listeners:y}),b?x.data=b:(b=nr(n),b!==null&&(x.data=b)))),(b=Zn?ir(e,n):ar(e,n))&&(x=Ed(r,`onBeforeInput`),0<x.length&&(y=new In(`onBeforeInput`,`beforeinput`,null,n,i),o.push({event:y,listeners:x}),y.data=b)),md(o,e,r,n,i)}yd(o,t)})}function Td(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ed(e,t){for(var n=t+`Capture`,r=[];e!==null;){var i=e,a=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||a===null||(i=dn(e,n),i!=null&&r.unshift(Td(e,i,a)),i=dn(e,t),i!=null&&r.push(Td(e,i,a))),e.tag===3)return r;e=e.return}return[]}function Dd(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Od(e,t,n,r,i){for(var a=t._reactName,o=[];n!==null&&n!==r;){var s=n,c=s.alternate,l=s.stateNode;if(s=s.tag,c!==null&&c===r)break;s!==5&&s!==26&&s!==27||l===null||(c=l,i?(l=dn(n,a),l!=null&&o.unshift(Td(n,l,c))):i||(l=dn(n,a),l!=null&&o.push(Td(n,l,c)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var kd=/\r\n?/g,Ad=/\u0000|\uFFFD/g;function jd(e){return(typeof e==`string`?e:``+e).replace(kd,`
`).replace(Ad,``)}function Md(e,t){return t=jd(t),jd(e)===t}function $(e,t,n,r,i,a){switch(n){case`children`:typeof r==`string`?t===`body`||t===`textarea`&&r===``||Jt(e,r):(typeof r==`number`||typeof r==`bigint`)&&t!==`body`&&Jt(e,``+r);break;case`className`:Mt(e,`class`,r);break;case`tabIndex`:Mt(e,`tabindex`,r);break;case`dir`:case`role`:case`viewBox`:case`width`:case`height`:Mt(e,n,r);break;case`style`:Zt(e,r,a);break;case`data`:if(t!==`object`){Mt(e,`data`,r);break}case`src`:case`href`:if(r===``&&(t!==`a`||n!==`href`)){e.removeAttribute(n);break}if(r==null||typeof r==`function`||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=tn(``+r),e.setAttribute(n,r);break;case`action`:case`formAction`:if(typeof r==`function`){e.setAttribute(n,`javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')`);break}if(typeof a==`function`&&(n===`formAction`?(t!==`input`&&$(e,t,`name`,i.name,i,null),$(e,t,`formEncType`,i.formEncType,i,null),$(e,t,`formMethod`,i.formMethod,i,null),$(e,t,`formTarget`,i.formTarget,i,null)):($(e,t,`encType`,i.encType,i,null),$(e,t,`method`,i.method,i,null),$(e,t,`target`,i.target,i,null))),r==null||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=tn(``+r),e.setAttribute(n,r);break;case`onClick`:r!=null&&(e.onclick=nn);break;case`onScroll`:r!=null&&Q(`scroll`,e);break;case`onScrollEnd`:r!=null&&Q(`scrollend`,e);break;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(s(61));if(n=r.__html,n!=null){if(i.children!=null)throw Error(s(60));e.innerHTML=n}}break;case`multiple`:e.multiple=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`muted`:e.muted=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`defaultValue`:case`defaultChecked`:case`innerHTML`:case`ref`:break;case`autoFocus`:break;case`xlinkHref`:if(r==null||typeof r==`function`||typeof r==`boolean`||typeof r==`symbol`){e.removeAttribute(`xlink:href`);break}n=tn(``+r),e.setAttributeNS(`http://www.w3.org/1999/xlink`,`xlink:href`,n);break;case`contentEditable`:case`spellCheck`:case`draggable`:case`value`:case`autoReverse`:case`externalResourcesRequired`:case`focusable`:case`preserveAlpha`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``+r):e.removeAttribute(n);break;case`inert`:case`allowFullScreen`:case`async`:case`autoPlay`:case`controls`:case`default`:case`defer`:case`disabled`:case`disablePictureInPicture`:case`disableRemotePlayback`:case`formNoValidate`:case`hidden`:case`loop`:case`noModule`:case`noValidate`:case`open`:case`playsInline`:case`readOnly`:case`required`:case`reversed`:case`scoped`:case`seamless`:case`itemScope`:r&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``):e.removeAttribute(n);break;case`capture`:case`download`:!0===r?e.setAttribute(n,``):!1!==r&&r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,r):e.removeAttribute(n);break;case`cols`:case`rows`:case`size`:case`span`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`&&!isNaN(r)&&1<=r?e.setAttribute(n,r):e.removeAttribute(n);break;case`rowSpan`:case`start`:r==null||typeof r==`function`||typeof r==`symbol`||isNaN(r)?e.removeAttribute(n):e.setAttribute(n,r);break;case`popover`:Q(`beforetoggle`,e),Q(`toggle`,e),jt(e,`popover`,r);break;case`xlinkActuate`:Nt(e,`http://www.w3.org/1999/xlink`,`xlink:actuate`,r);break;case`xlinkArcrole`:Nt(e,`http://www.w3.org/1999/xlink`,`xlink:arcrole`,r);break;case`xlinkRole`:Nt(e,`http://www.w3.org/1999/xlink`,`xlink:role`,r);break;case`xlinkShow`:Nt(e,`http://www.w3.org/1999/xlink`,`xlink:show`,r);break;case`xlinkTitle`:Nt(e,`http://www.w3.org/1999/xlink`,`xlink:title`,r);break;case`xlinkType`:Nt(e,`http://www.w3.org/1999/xlink`,`xlink:type`,r);break;case`xmlBase`:Nt(e,`http://www.w3.org/XML/1998/namespace`,`xml:base`,r);break;case`xmlLang`:Nt(e,`http://www.w3.org/XML/1998/namespace`,`xml:lang`,r);break;case`xmlSpace`:Nt(e,`http://www.w3.org/XML/1998/namespace`,`xml:space`,r);break;case`is`:jt(e,`is`,r);break;case`innerText`:case`textContent`:break;default:(!(2<n.length)||n[0]!==`o`&&n[0]!==`O`||n[1]!==`n`&&n[1]!==`N`)&&(n=$t.get(n)||n,jt(e,n,r))}}function Nd(e,t,n,r,i,a){switch(n){case`style`:Zt(e,r,a);break;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(s(61));if(n=r.__html,n!=null){if(i.children!=null)throw Error(s(60));e.innerHTML=n}}break;case`children`:typeof r==`string`?Jt(e,r):(typeof r==`number`||typeof r==`bigint`)&&Jt(e,``+r);break;case`onScroll`:r!=null&&Q(`scroll`,e);break;case`onScrollEnd`:r!=null&&Q(`scrollend`,e);break;case`onClick`:r!=null&&(e.onclick=nn);break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`innerHTML`:case`ref`:break;case`innerText`:case`textContent`:break;default:if(!wt.hasOwnProperty(n))a:{if(n[0]===`o`&&n[1]===`n`&&(i=n.endsWith(`Capture`),t=n.slice(2,i?n.length-7:void 0),a=e[ut]||null,a=a==null?null:a[n],typeof a==`function`&&e.removeEventListener(t,a,i),typeof r==`function`)){typeof a!=`function`&&a!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,r,i);break a}n in e?e[n]=r:!0===r?e.setAttribute(n,``):jt(e,n,r)}}}function Pd(e,t,n){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`img`:Q(`error`,e),Q(`load`,e);var r=!1,i=!1,a;for(a in n)if(n.hasOwnProperty(a)){var o=n[a];if(o!=null)switch(a){case`src`:r=!0;break;case`srcSet`:i=!0;break;case`children`:case`dangerouslySetInnerHTML`:throw Error(s(137,t));default:$(e,t,a,o,n,null)}}i&&$(e,t,`srcSet`,n.srcSet,n,null),r&&$(e,t,`src`,n.src,n,null);return;case`input`:Q(`invalid`,e);var c=a=o=i=null,l=null,u=null;for(r in n)if(n.hasOwnProperty(r)){var d=n[r];if(d!=null)switch(r){case`name`:i=d;break;case`type`:o=d;break;case`checked`:l=d;break;case`defaultChecked`:u=d;break;case`value`:a=d;break;case`defaultValue`:c=d;break;case`children`:case`dangerouslySetInnerHTML`:if(d!=null)throw Error(s(137,t));break;default:$(e,t,r,d,n,null)}}Ut(e,a,c,l,u,o,i,!1);return;case`select`:for(i in Q(`invalid`,e),r=o=a=null,n)if(n.hasOwnProperty(i)&&(c=n[i],c!=null))switch(i){case`value`:a=c;break;case`defaultValue`:o=c;break;case`multiple`:r=c;default:$(e,t,i,c,n,null)}t=a,n=o,e.multiple=!!r,t==null?n!=null&&Gt(e,!!r,n,!0):Gt(e,!!r,t,!1);return;case`textarea`:for(o in Q(`invalid`,e),a=i=r=null,n)if(n.hasOwnProperty(o)&&(c=n[o],c!=null))switch(o){case`value`:r=c;break;case`defaultValue`:i=c;break;case`children`:a=c;break;case`dangerouslySetInnerHTML`:if(c!=null)throw Error(s(91));break;default:$(e,t,o,c,n,null)}qt(e,r,i,a);return;case`option`:for(l in n)if(n.hasOwnProperty(l)&&(r=n[l],r!=null))switch(l){case`selected`:e.selected=r&&typeof r!=`function`&&typeof r!=`symbol`;break;default:$(e,t,l,r,n,null)}return;case`dialog`:Q(`beforetoggle`,e),Q(`toggle`,e),Q(`cancel`,e),Q(`close`,e);break;case`iframe`:case`object`:Q(`load`,e);break;case`video`:case`audio`:for(r=0;r<_d.length;r++)Q(_d[r],e);break;case`image`:Q(`error`,e),Q(`load`,e);break;case`details`:Q(`toggle`,e);break;case`embed`:case`source`:case`link`:Q(`error`,e),Q(`load`,e);case`area`:case`base`:case`br`:case`col`:case`hr`:case`keygen`:case`meta`:case`param`:case`track`:case`wbr`:case`menuitem`:for(u in n)if(n.hasOwnProperty(u)&&(r=n[u],r!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:throw Error(s(137,t));default:$(e,t,u,r,n,null)}return;default:if(Qt(t)){for(d in n)n.hasOwnProperty(d)&&(r=n[d],r!==void 0&&Nd(e,t,d,r,n,void 0));return}}for(c in n)n.hasOwnProperty(c)&&(r=n[c],r!=null&&$(e,t,c,r,n,null))}function Fd(e,t,n,r){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`input`:var i=null,a=null,o=null,c=null,l=null,u=null,d=null;for(m in n){var f=n[m];if(n.hasOwnProperty(m)&&f!=null)switch(m){case`checked`:break;case`value`:break;case`defaultValue`:l=f;default:r.hasOwnProperty(m)||$(e,t,m,null,r,f)}}for(var p in r){var m=r[p];if(f=n[p],r.hasOwnProperty(p)&&(m!=null||f!=null))switch(p){case`type`:a=m;break;case`name`:i=m;break;case`checked`:u=m;break;case`defaultChecked`:d=m;break;case`value`:o=m;break;case`defaultValue`:c=m;break;case`children`:case`dangerouslySetInnerHTML`:if(m!=null)throw Error(s(137,t));break;default:m!==f&&$(e,t,p,m,r,f)}}Ht(e,o,c,l,u,d,a,i);return;case`select`:for(a in m=o=c=p=null,n)if(l=n[a],n.hasOwnProperty(a)&&l!=null)switch(a){case`value`:break;case`multiple`:m=l;default:r.hasOwnProperty(a)||$(e,t,a,null,r,l)}for(i in r)if(a=r[i],l=n[i],r.hasOwnProperty(i)&&(a!=null||l!=null))switch(i){case`value`:p=a;break;case`defaultValue`:c=a;break;case`multiple`:o=a;default:a!==l&&$(e,t,i,a,r,l)}t=c,n=o,r=m,p==null?!!r!=!!n&&(t==null?Gt(e,!!n,n?[]:``,!1):Gt(e,!!n,t,!0)):Gt(e,!!n,p,!1);return;case`textarea`:for(c in m=p=null,n)if(i=n[c],n.hasOwnProperty(c)&&i!=null&&!r.hasOwnProperty(c))switch(c){case`value`:break;case`children`:break;default:$(e,t,c,null,r,i)}for(o in r)if(i=r[o],a=n[o],r.hasOwnProperty(o)&&(i!=null||a!=null))switch(o){case`value`:p=i;break;case`defaultValue`:m=i;break;case`children`:break;case`dangerouslySetInnerHTML`:if(i!=null)throw Error(s(91));break;default:i!==a&&$(e,t,o,i,r,a)}Kt(e,p,m);return;case`option`:for(var h in n)if(p=n[h],n.hasOwnProperty(h)&&p!=null&&!r.hasOwnProperty(h))switch(h){case`selected`:e.selected=!1;break;default:$(e,t,h,null,r,p)}for(l in r)if(p=r[l],m=n[l],r.hasOwnProperty(l)&&p!==m&&(p!=null||m!=null))switch(l){case`selected`:e.selected=p&&typeof p!=`function`&&typeof p!=`symbol`;break;default:$(e,t,l,p,r,m)}return;case`img`:case`link`:case`area`:case`base`:case`br`:case`col`:case`embed`:case`hr`:case`keygen`:case`meta`:case`param`:case`source`:case`track`:case`wbr`:case`menuitem`:for(var g in n)p=n[g],n.hasOwnProperty(g)&&p!=null&&!r.hasOwnProperty(g)&&$(e,t,g,null,r,p);for(u in r)if(p=r[u],m=n[u],r.hasOwnProperty(u)&&p!==m&&(p!=null||m!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:if(p!=null)throw Error(s(137,t));break;default:$(e,t,u,p,r,m)}return;default:if(Qt(t)){for(var _ in n)p=n[_],n.hasOwnProperty(_)&&p!==void 0&&!r.hasOwnProperty(_)&&Nd(e,t,_,void 0,r,p);for(d in r)p=r[d],m=n[d],!r.hasOwnProperty(d)||p===m||p===void 0&&m===void 0||Nd(e,t,d,p,r,m);return}}for(var v in n)p=n[v],n.hasOwnProperty(v)&&p!=null&&!r.hasOwnProperty(v)&&$(e,t,v,null,r,p);for(f in r)p=r[f],m=n[f],!r.hasOwnProperty(f)||p===m||p==null&&m==null||$(e,t,f,p,r,m)}function Id(e){switch(e){case`css`:case`script`:case`font`:case`img`:case`image`:case`input`:case`link`:return!0;default:return!1}}function Ld(){if(typeof performance.getEntriesByType==`function`){for(var e=0,t=0,n=performance.getEntriesByType(`resource`),r=0;r<n.length;r++){var i=n[r],a=i.transferSize,o=i.initiatorType,s=i.duration;if(a&&s&&Id(o)){for(o=0,s=i.responseEnd,r+=1;r<n.length;r++){var c=n[r],l=c.startTime;if(l>s)break;var u=c.transferSize,d=c.initiatorType;u&&Id(d)&&(c=c.responseEnd,o+=u*(c<s?1:(s-l)/(c-l)))}if(--r,t+=8*(a+o)/(i.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e==`number`)?e:5}var Rd=null,zd=null;function Bd(e){return e.nodeType===9?e:e.ownerDocument}function Vd(e){switch(e){case`http://www.w3.org/2000/svg`:return 1;case`http://www.w3.org/1998/Math/MathML`:return 2;default:return 0}}function Hd(e,t){if(e===0)switch(t){case`svg`:return 1;case`math`:return 2;default:return 0}return e===1&&t===`foreignObject`?0:e}function Ud(e,t){return e===`textarea`||e===`noscript`||typeof t.children==`string`||typeof t.children==`number`||typeof t.children==`bigint`||typeof t.dangerouslySetInnerHTML==`object`&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Wd=null;function Gd(){var e=window.event;return e&&e.type===`popstate`?e!==Wd&&(Wd=e,!0):(Wd=null,!1)}var Kd=typeof setTimeout==`function`?setTimeout:void 0,qd=typeof clearTimeout==`function`?clearTimeout:void 0,Jd=typeof Promise==`function`?Promise:void 0,Yd=typeof queueMicrotask==`function`?queueMicrotask:Jd===void 0?Kd:function(e){return Jd.resolve(null).then(e).catch(Xd)};function Xd(e){setTimeout(function(){throw e})}function Zd(e){return e===`head`}function Qd(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8){if(n=i.data,n===`/$`||n===`/&`){if(r===0){e.removeChild(i),Np(t);return}r--}else if(n===`$`||n===`$?`||n===`$~`||n===`$!`||n===`&`)r++;else if(n===`html`)pf(e.ownerDocument.documentElement);else if(n===`head`){n=e.ownerDocument.head,pf(n);for(var a=n.firstChild;a;){var o=a.nextSibling,s=a.nodeName;a[gt]||s===`SCRIPT`||s===`STYLE`||s===`LINK`&&a.rel.toLowerCase()===`stylesheet`||n.removeChild(a),a=o}}else n===`body`&&pf(e.ownerDocument.body)}n=i}while(n);Np(t)}function $d(e,t){var n=e;e=0;do{var r=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display=`none`):(n.style.display=n._stashedDisplay||``,n.getAttribute(`style`)===``&&n.removeAttribute(`style`)):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=``):n.nodeValue=n._stashedText||``),r&&r.nodeType===8){if(n=r.data,n===`/$`){if(e===0)break;e--}else n!==`$`&&n!==`$?`&&n!==`$~`&&n!==`$!`||e++}n=r}while(n)}function ef(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case`HTML`:case`HEAD`:case`BODY`:ef(n),_t(n);continue;case`SCRIPT`:case`STYLE`:continue;case`LINK`:if(n.rel.toLowerCase()===`stylesheet`)continue}e.removeChild(n)}}function tf(e,t,n,r){for(;e.nodeType===1;){var i=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!r&&(e.nodeName!==`INPUT`||e.type!==`hidden`))break}else if(!r){if(t===`input`&&e.type===`hidden`){var a=i.name==null?null:``+i.name;if(i.type===`hidden`&&e.getAttribute(`name`)===a)return e}else return e}else if(!e[gt])switch(t){case`meta`:if(!e.hasAttribute(`itemprop`))break;return e;case`link`:if(a=e.getAttribute(`rel`),a===`stylesheet`&&e.hasAttribute(`data-precedence`)||a!==i.rel||e.getAttribute(`href`)!==(i.href==null||i.href===``?null:i.href)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin)||e.getAttribute(`title`)!==(i.title==null?null:i.title))break;return e;case`style`:if(e.hasAttribute(`data-precedence`))break;return e;case`script`:if(a=e.getAttribute(`src`),(a!==(i.src==null?null:i.src)||e.getAttribute(`type`)!==(i.type==null?null:i.type)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin))&&a&&e.hasAttribute(`async`)&&!e.hasAttribute(`itemprop`))break;return e;default:return e}if(e=cf(e.nextSibling),e===null)break}return null}function nf(e,t,n){if(t===``)return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!n||(e=cf(e.nextSibling),e===null))return null;return e}function rf(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!t||(e=cf(e.nextSibling),e===null))return null;return e}function af(e){return e.data===`$?`||e.data===`$~`}function of(e){return e.data===`$!`||e.data===`$?`&&e.ownerDocument.readyState!==`loading`}function sf(e,t){var n=e.ownerDocument;if(e.data===`$~`)e._reactRetry=t;else if(e.data!==`$?`||n.readyState!==`loading`)t();else{var r=function(){t(),n.removeEventListener(`DOMContentLoaded`,r)};n.addEventListener(`DOMContentLoaded`,r),e._reactRetry=r}}function cf(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t===`$`||t===`$!`||t===`$?`||t===`$~`||t===`&`||t===`F!`||t===`F`)break;if(t===`/$`||t===`/&`)return null}}return e}var lf=null;function uf(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`/$`||n===`/&`){if(t===0)return cf(e.nextSibling);t--}else n!==`$`&&n!==`$!`&&n!==`$?`&&n!==`$~`&&n!==`&`||t++}e=e.nextSibling}return null}function df(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`$`||n===`$!`||n===`$?`||n===`$~`||n===`&`){if(t===0)return e;t--}else n!==`/$`&&n!==`/&`||t++}e=e.previousSibling}return null}function ff(e,t,n){switch(t=Bd(n),e){case`html`:if(e=t.documentElement,!e)throw Error(s(452));return e;case`head`:if(e=t.head,!e)throw Error(s(453));return e;case`body`:if(e=t.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function pf(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);_t(e)}var mf=new Map,hf=new Set;function gf(e){return typeof e.getRootNode==`function`?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var _f=O.d;O.d={f:vf,r:yf,D:Sf,C:Cf,L:wf,m:Tf,X:Df,S:Ef,M:Of};function vf(){var e=_f.f(),t=bu();return e||t}function yf(e){var t=yt(e);t!==null&&t.tag===5&&t.type===`form`?Ds(t):_f.r(e)}var bf=typeof document>`u`?null:document;function xf(e,t,n){var r=bf;if(r&&typeof t==`string`&&t){var i=Vt(t);i=`link[rel="`+e+`"][href="`+i+`"]`,typeof n==`string`&&(i+=`[crossorigin="`+n+`"]`),hf.has(i)||(hf.add(i),e={rel:e,crossOrigin:n,href:t},r.querySelector(i)===null&&(t=r.createElement(`link`),Pd(t,`link`,e),St(t),r.head.appendChild(t)))}}function Sf(e){_f.D(e),xf(`dns-prefetch`,e,null)}function Cf(e,t){_f.C(e,t),xf(`preconnect`,e,t)}function wf(e,t,n){_f.L(e,t,n);var r=bf;if(r&&e&&t){var i=`link[rel="preload"][as="`+Vt(t)+`"]`;t===`image`&&n&&n.imageSrcSet?(i+=`[imagesrcset="`+Vt(n.imageSrcSet)+`"]`,typeof n.imageSizes==`string`&&(i+=`[imagesizes="`+Vt(n.imageSizes)+`"]`)):i+=`[href="`+Vt(e)+`"]`;var a=i;switch(t){case`style`:a=Af(e);break;case`script`:a=Pf(e)}mf.has(a)||(e=h({rel:`preload`,href:t===`image`&&n&&n.imageSrcSet?void 0:e,as:t},n),mf.set(a,e),r.querySelector(i)!==null||t===`style`&&r.querySelector(jf(a))||t===`script`&&r.querySelector(Ff(a))||(t=r.createElement(`link`),Pd(t,`link`,e),St(t),r.head.appendChild(t)))}}function Tf(e,t){_f.m(e,t);var n=bf;if(n&&e){var r=t&&typeof t.as==`string`?t.as:`script`,i=`link[rel="modulepreload"][as="`+Vt(r)+`"][href="`+Vt(e)+`"]`,a=i;switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:a=Pf(e)}if(!mf.has(a)&&(e=h({rel:`modulepreload`,href:e},t),mf.set(a,e),n.querySelector(i)===null)){switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:if(n.querySelector(Ff(a)))return}r=n.createElement(`link`),Pd(r,`link`,e),St(r),n.head.appendChild(r)}}}function Ef(e,t,n){_f.S(e,t,n);var r=bf;if(r&&e){var i=xt(r).hoistableStyles,a=Af(e);t||=`default`;var o=i.get(a);if(!o){var s={loading:0,preload:null};if(o=r.querySelector(jf(a)))s.loading=5;else{e=h({rel:`stylesheet`,href:e,"data-precedence":t},n),(n=mf.get(a))&&Rf(e,n);var c=o=r.createElement(`link`);St(c),Pd(c,`link`,e),c._p=new Promise(function(e,t){c.onload=e,c.onerror=t}),c.addEventListener(`load`,function(){s.loading|=1}),c.addEventListener(`error`,function(){s.loading|=2}),s.loading|=4,Lf(o,t,r)}o={type:`stylesheet`,instance:o,count:1,state:s},i.set(a,o)}}}function Df(e,t){_f.X(e,t);var n=bf;if(n&&e){var r=xt(n).hoistableScripts,i=Pf(e),a=r.get(i);a||(a=n.querySelector(Ff(i)),a||(e=h({src:e,async:!0},t),(t=mf.get(i))&&zf(e,t),a=n.createElement(`script`),St(a),Pd(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function Of(e,t){_f.M(e,t);var n=bf;if(n&&e){var r=xt(n).hoistableScripts,i=Pf(e),a=r.get(i);a||(a=n.querySelector(Ff(i)),a||(e=h({src:e,async:!0,type:`module`},t),(t=mf.get(i))&&zf(e,t),a=n.createElement(`script`),St(a),Pd(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function kf(e,t,n,r){var i=(i=he.current)?gf(i):null;if(!i)throw Error(s(446));switch(e){case`meta`:case`title`:return null;case`style`:return typeof n.precedence==`string`&&typeof n.href==`string`?(t=Af(n.href),n=xt(i).hoistableStyles,r=n.get(t),r||(r={type:`style`,instance:null,count:0,state:null},n.set(t,r)),r):{type:`void`,instance:null,count:0,state:null};case`link`:if(n.rel===`stylesheet`&&typeof n.href==`string`&&typeof n.precedence==`string`){e=Af(n.href);var a=xt(i).hoistableStyles,o=a.get(e);if(o||(i=i.ownerDocument||i,o={type:`stylesheet`,instance:null,count:0,state:{loading:0,preload:null}},a.set(e,o),(a=i.querySelector(jf(e)))&&!a._p&&(o.instance=a,o.state.loading=5),mf.has(e)||(n={rel:`preload`,as:`style`,href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},mf.set(e,n),a||Nf(i,e,n,o.state))),t&&r===null)throw Error(s(528,``));return o}if(t&&r!==null)throw Error(s(529,``));return null;case`script`:return t=n.async,n=n.src,typeof n==`string`&&t&&typeof t!=`function`&&typeof t!=`symbol`?(t=Pf(n),n=xt(i).hoistableScripts,r=n.get(t),r||(r={type:`script`,instance:null,count:0,state:null},n.set(t,r)),r):{type:`void`,instance:null,count:0,state:null};default:throw Error(s(444,e))}}function Af(e){return`href="`+Vt(e)+`"`}function jf(e){return`link[rel="stylesheet"][`+e+`]`}function Mf(e){return h({},e,{"data-precedence":e.precedence,precedence:null})}function Nf(e,t,n,r){e.querySelector(`link[rel="preload"][as="style"][`+t+`]`)?r.loading=1:(t=e.createElement(`link`),r.preload=t,t.addEventListener(`load`,function(){return r.loading|=1}),t.addEventListener(`error`,function(){return r.loading|=2}),Pd(t,`link`,n),St(t),e.head.appendChild(t))}function Pf(e){return`[src="`+Vt(e)+`"]`}function Ff(e){return`script[async]`+e}function If(e,t,n){if(t.count++,t.instance===null)switch(t.type){case`style`:var r=e.querySelector(`style[data-href~="`+Vt(n.href)+`"]`);if(r)return t.instance=r,St(r),r;var i=h({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement(`style`),St(r),Pd(r,`style`,i),Lf(r,n.precedence,e),t.instance=r;case`stylesheet`:i=Af(n.href);var a=e.querySelector(jf(i));if(a)return t.state.loading|=4,t.instance=a,St(a),a;r=Mf(n),(i=mf.get(i))&&Rf(r,i),a=(e.ownerDocument||e).createElement(`link`),St(a);var o=a;return o._p=new Promise(function(e,t){o.onload=e,o.onerror=t}),Pd(a,`link`,r),t.state.loading|=4,Lf(a,n.precedence,e),t.instance=a;case`script`:return a=Pf(n.src),(i=e.querySelector(Ff(a)))?(t.instance=i,St(i),i):(r=n,(i=mf.get(a))&&(r=h({},n),zf(r,i)),e=e.ownerDocument||e,i=e.createElement(`script`),St(i),Pd(i,`link`,r),e.head.appendChild(i),t.instance=i);case`void`:return null;default:throw Error(s(443,t.type))}else t.type===`stylesheet`&&!(t.state.loading&4)&&(r=t.instance,t.state.loading|=4,Lf(r,n.precedence,e));return t.instance}function Lf(e,t,n){for(var r=n.querySelectorAll(`link[rel="stylesheet"][data-precedence],style[data-precedence]`),i=r.length?r[r.length-1]:null,a=i,o=0;o<r.length;o++){var s=r[o];if(s.dataset.precedence===t)a=s;else if(a!==i)break}a?a.parentNode.insertBefore(e,a.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Rf(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.title??=t.title}function zf(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.integrity??=t.integrity}var Bf=null;function Vf(e,t,n){if(Bf===null){var r=new Map,i=Bf=new Map;i.set(n,r)}else i=Bf,r=i.get(n),r||(r=new Map,i.set(n,r));if(r.has(e))return r;for(r.set(e,null),n=n.getElementsByTagName(e),i=0;i<n.length;i++){var a=n[i];if(!(a[gt]||a[F]||e===`link`&&a.getAttribute(`rel`)===`stylesheet`)&&a.namespaceURI!==`http://www.w3.org/2000/svg`){var o=a.getAttribute(t)||``;o=e+o;var s=r.get(o);s?s.push(a):r.set(o,[a])}}return r}function Hf(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t===`title`?e.querySelector(`head > title`):null)}function Uf(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case`meta`:case`title`:return!0;case`style`:if(typeof t.precedence!=`string`||typeof t.href!=`string`||t.href===``)break;return!0;case`link`:if(typeof t.rel!=`string`||typeof t.href!=`string`||t.href===``||t.onLoad||t.onError)break;switch(t.rel){case`stylesheet`:return e=t.disabled,typeof t.precedence==`string`&&e==null;default:return!0}case`script`:if(t.async&&typeof t.async!=`function`&&typeof t.async!=`symbol`&&!t.onLoad&&!t.onError&&t.src&&typeof t.src==`string`)return!0}return!1}function Wf(e){return!(e.type===`stylesheet`&&!(e.state.loading&3))}function Gf(e,t,n,r){if(n.type===`stylesheet`&&(typeof r.media!=`string`||!1!==matchMedia(r.media).matches)&&!(n.state.loading&4)){if(n.instance===null){var i=Af(r.href),a=t.querySelector(jf(i));if(a){t=a._p,typeof t==`object`&&t&&typeof t.then==`function`&&(e.count++,e=Jf.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=a,St(a);return}a=t.ownerDocument||t,r=Mf(r),(i=mf.get(i))&&Rf(r,i),a=a.createElement(`link`),St(a);var o=a;o._p=new Promise(function(e,t){o.onload=e,o.onerror=t}),Pd(a,`link`,r),n.instance=a}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&!(n.state.loading&3)&&(e.count++,n=Jf.bind(e),t.addEventListener(`load`,n),t.addEventListener(`error`,n))}}var Kf=0;function qf(e,t){return e.stylesheets&&e.count===0&&Xf(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var r=setTimeout(function(){if(e.stylesheets&&Xf(e,e.stylesheets),e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}},6e4+t);0<e.imgBytes&&Kf===0&&(Kf=62500*Ld());var i=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Xf(e,e.stylesheets),e.unsuspend)){var t=e.unsuspend;e.unsuspend=null,t()}},(e.imgBytes>Kf?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(i)}}:null}function Jf(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Xf(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Yf=null;function Xf(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Yf=new Map,t.forEach(Zf,e),Yf=null,Jf.call(e))}function Zf(e,t){if(!(t.state.loading&4)){var n=Yf.get(e);if(n)var r=n.get(null);else{n=new Map,Yf.set(e,n);for(var i=e.querySelectorAll(`link[data-precedence],style[data-precedence]`),a=0;a<i.length;a++){var o=i[a];(o.nodeName===`LINK`||o.getAttribute(`media`)!==`not all`)&&(n.set(o.dataset.precedence,o),r=o)}r&&n.set(null,r)}i=t.instance,o=i.getAttribute(`data-precedence`),a=n.get(o)||r,a===r&&n.set(null,i),n.set(o,i),this.count++,r=Jf.bind(this),i.addEventListener(`load`,r),i.addEventListener(`error`,r),a?a.parentNode.insertBefore(i,a.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(i,e.firstChild)),t.state.loading|=4}}var Qf={$$typeof:te,Provider:null,Consumer:null,_currentValue:le,_currentValue2:le,_threadCount:0};function $f(e,t,n,r,i,a,o,s,c){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=$e(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=$e(0),this.hiddenUpdates=$e(null),this.identifierPrefix=r,this.onUncaughtError=i,this.onCaughtError=a,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=c,this.incompleteTransitions=new Map}function ep(e,t,n,r,i,a,o,s,c,l,u,d){return e=new $f(e,t,n,o,c,l,u,d,s),t=1,!0===a&&(t|=24),a=di(3,null,null,t),e.current=a,a.stateNode=e,t=ua(),t.refCount++,e.pooledCache=t,t.refCount++,a.memoizedState={element:r,isDehydrated:n,cache:t},Ua(a),e}function tp(e){return e?(e=li,e):li}function np(e,t,n,r,i,a){i=tp(i),r.context===null?r.context=i:r.pendingContext=i,r=Ga(t),r.payload={element:n},a=a===void 0?null:a,a!==null&&(r.callback=a),n=Ka(e,r,t),n!==null&&(hu(n,e,t),qa(n,e,t))}function rp(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function ip(e,t){rp(e,t),(e=e.alternate)&&rp(e,t)}function ap(e){if(e.tag===13||e.tag===31){var t=oi(e,67108864);t!==null&&hu(t,e,67108864),ip(e,67108864)}}function op(e){if(e.tag===13||e.tag===31){var t=pu();t=at(t);var n=oi(e,t);n!==null&&hu(n,e,t),ip(e,t)}}var sp=!0;function cp(e,t,n,r){var i=D.T;D.T=null;var a=O.p;try{O.p=2,up(e,t,n,r)}finally{O.p=a,D.T=i}}function lp(e,t,n,r){var i=D.T;D.T=null;var a=O.p;try{O.p=8,up(e,t,n,r)}finally{O.p=a,D.T=i}}function up(e,t,n,r){if(sp){var i=dp(r);if(i===null)wd(e,t,r,fp,n),Cp(e,r);else if(Tp(i,e,t,n,r))r.stopPropagation();else if(Cp(e,r),t&4&&-1<Sp.indexOf(e)){for(;i!==null;){var a=yt(i);if(a!==null)switch(a.tag){case 3:if(a=a.stateNode,a.current.memoizedState.isDehydrated){var o=Xe(a.pendingLanes);if(o!==0){var s=a;for(s.pendingLanes|=2,s.entangledLanes|=2;o;){var c=1<<31-Ue(o);s.entanglements[1]|=c,o&=~c}rd(a),!(G&6)&&(tu=je()+500,id(0,!1))}}break;case 31:case 13:s=oi(a,2),s!==null&&hu(s,a,2),bu(),ip(a,2)}if(a=dp(r),a===null&&wd(e,t,r,fp,n),a===i)break;i=a}i!==null&&r.stopPropagation()}else wd(e,t,r,null,n)}}function dp(e){return e=an(e),pp(e)}var fp=null;function pp(e){if(fp=null,e=vt(e),e!==null){var t=l(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=u(t),e!==null)return e;e=null}else if(n===31){if(e=d(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return fp=e,null}function mp(e){switch(e){case`beforetoggle`:case`cancel`:case`click`:case`close`:case`contextmenu`:case`copy`:case`cut`:case`auxclick`:case`dblclick`:case`dragend`:case`dragstart`:case`drop`:case`focusin`:case`focusout`:case`input`:case`invalid`:case`keydown`:case`keypress`:case`keyup`:case`mousedown`:case`mouseup`:case`paste`:case`pause`:case`play`:case`pointercancel`:case`pointerdown`:case`pointerup`:case`ratechange`:case`reset`:case`resize`:case`seeked`:case`submit`:case`toggle`:case`touchcancel`:case`touchend`:case`touchstart`:case`volumechange`:case`change`:case`selectionchange`:case`textInput`:case`compositionstart`:case`compositionend`:case`compositionupdate`:case`beforeblur`:case`afterblur`:case`beforeinput`:case`blur`:case`fullscreenchange`:case`focus`:case`hashchange`:case`popstate`:case`select`:case`selectstart`:return 2;case`drag`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`mousemove`:case`mouseout`:case`mouseover`:case`pointermove`:case`pointerout`:case`pointerover`:case`scroll`:case`touchmove`:case`wheel`:case`mouseenter`:case`mouseleave`:case`pointerenter`:case`pointerleave`:return 8;case`message`:switch(Me()){case Ne:return 2;case Pe:return 8;case Fe:case Ie:return 32;case Le:return 268435456;default:return 32}default:return 32}}var hp=!1,gp=null,_p=null,vp=null,yp=new Map,bp=new Map,xp=[],Sp=`mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset`.split(` `);function Cp(e,t){switch(e){case`focusin`:case`focusout`:gp=null;break;case`dragenter`:case`dragleave`:_p=null;break;case`mouseover`:case`mouseout`:vp=null;break;case`pointerover`:case`pointerout`:yp.delete(t.pointerId);break;case`gotpointercapture`:case`lostpointercapture`:bp.delete(t.pointerId)}}function wp(e,t,n,r,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},t!==null&&(t=yt(t),t!==null&&ap(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Tp(e,t,n,r,i){switch(t){case`focusin`:return gp=wp(gp,e,t,n,r,i),!0;case`dragenter`:return _p=wp(_p,e,t,n,r,i),!0;case`mouseover`:return vp=wp(vp,e,t,n,r,i),!0;case`pointerover`:var a=i.pointerId;return yp.set(a,wp(yp.get(a)||null,e,t,n,r,i)),!0;case`gotpointercapture`:return a=i.pointerId,bp.set(a,wp(bp.get(a)||null,e,t,n,r,i)),!0}return!1}function Ep(e){var t=vt(e.target);if(t!==null){var n=l(t);if(n!==null){if(t=n.tag,t===13){if(t=u(n),t!==null){e.blockedOn=t,ct(e.priority,function(){op(n)});return}}else if(t===31){if(t=d(n),t!==null){e.blockedOn=t,ct(e.priority,function(){op(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Dp(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=dp(e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);rn=r,n.target.dispatchEvent(r),rn=null}else return t=yt(n),t!==null&&ap(t),e.blockedOn=n,!1;t.shift()}return!0}function Op(e,t,n){Dp(e)&&n.delete(t)}function kp(){hp=!1,gp!==null&&Dp(gp)&&(gp=null),_p!==null&&Dp(_p)&&(_p=null),vp!==null&&Dp(vp)&&(vp=null),yp.forEach(Op),bp.forEach(Op)}function Ap(e,n){e.blockedOn===n&&(e.blockedOn=null,hp||(hp=!0,t.unstable_scheduleCallback(t.unstable_NormalPriority,kp)))}var jp=null;function Mp(e){jp!==e&&(jp=e,t.unstable_scheduleCallback(t.unstable_NormalPriority,function(){jp===e&&(jp=null);for(var t=0;t<e.length;t+=3){var n=e[t],r=e[t+1],i=e[t+2];if(typeof r!=`function`){if(pp(r||n)===null)continue;break}var a=yt(n);a!==null&&(e.splice(t,3),t-=3,Ts(a,{pending:!0,data:i,method:n.method,action:r},r,i))}}))}function Np(e){function t(t){return Ap(t,e)}gp!==null&&Ap(gp,e),_p!==null&&Ap(_p,e),vp!==null&&Ap(vp,e),yp.forEach(t),bp.forEach(t);for(var n=0;n<xp.length;n++){var r=xp[n];r.blockedOn===e&&(r.blockedOn=null)}for(;0<xp.length&&(n=xp[0],n.blockedOn===null);)Ep(n),n.blockedOn===null&&xp.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(r=0;r<n.length;r+=3){var i=n[r],a=n[r+1],o=i[ut]||null;if(typeof a==`function`)o||Mp(n);else if(o){var s=null;if(a&&a.hasAttribute(`formAction`)){if(i=a,o=a[ut]||null)s=o.formAction;else if(pp(i)!==null)continue}else s=o.action;typeof s==`function`?n[r+1]=s:(n.splice(r,3),r-=3),Mp(n)}}}function Pp(){function e(e){e.canIntercept&&e.info===`react-transition`&&e.intercept({handler:function(){return new Promise(function(e){return i=e})},focusReset:`manual`,scroll:`manual`})}function t(){i!==null&&(i(),i=null),r||setTimeout(n,20)}function n(){if(!r&&!navigation.transition){var e=navigation.currentEntry;e&&e.url!=null&&navigation.navigate(e.url,{state:e.getState(),info:`react-transition`,history:`replace`})}}if(typeof navigation==`object`){var r=!1,i=null;return navigation.addEventListener(`navigate`,e),navigation.addEventListener(`navigatesuccess`,t),navigation.addEventListener(`navigateerror`,t),setTimeout(n,100),function(){r=!0,navigation.removeEventListener(`navigate`,e),navigation.removeEventListener(`navigatesuccess`,t),navigation.removeEventListener(`navigateerror`,t),i!==null&&(i(),i=null)}}}function Fp(e){this._internalRoot=e}Ip.prototype.render=Fp.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(s(409));var n=t.current;np(n,pu(),e,t,null,null)},Ip.prototype.unmount=Fp.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;np(e.current,2,null,e,null,null),bu(),t[dt]=null}};function Ip(e){this._internalRoot=e}Ip.prototype.unstable_scheduleHydration=function(e){if(e){var t=st();e={blockedOn:null,target:e,priority:t};for(var n=0;n<xp.length&&t!==0&&t<xp[n].priority;n++);xp.splice(n,0,e),n===0&&Ep(e)}};var Lp=r.version;if(Lp!==`19.2.8`)throw Error(s(527,Lp,`19.2.8`));O.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render==`function`?Error(s(188)):(e=Object.keys(e).join(`,`),Error(s(268,e)));return e=p(t),e=e===null?null:m(e),e=e===null?null:e.stateNode,e};var Rp={bundleType:0,version:`19.2.8`,rendererPackageName:`react-dom`,currentDispatcherRef:D,reconcilerVersion:`19.2.8`};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`){var zp=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!zp.isDisabled&&zp.supportsFiber)try{Be=zp.inject(Rp),Ve=zp}catch{}}e.createRoot=function(e,t){if(!c(e))throw Error(s(299));var n=!1,r=``,i=Js,a=Ys,o=Xs;return t!=null&&(!0===t.unstable_strictMode&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onUncaughtError!==void 0&&(i=t.onUncaughtError),t.onCaughtError!==void 0&&(a=t.onCaughtError),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=ep(e,1,!1,null,null,n,r,null,i,a,o,Pp),e[dt]=t.current,Sd(e),new Fp(t)}})),c=e(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=s()})),l=n(),u=c(),d=``+new URL(`circuit-diagram (negative)-Da3x4wq5.svg`,import.meta.url).href,f=``+new URL(`circuit-diagram (positive)-OcJcW9jy.svg`,import.meta.url).href,p=`data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%20108'%20role='img'%20aria-label='Upright%20filament%20bulb'%20%3e%3cpath%20d='M%208%2036%20C%208%2014%2022%202%2040%202%20C%2058%202%2072%2014%2072%2036%20C%2072%2054%2062%2064%2056%2072%20C%2053%2076%2052%2080%2052%2084%20L%2028%2084%20C%2028%2080%2027%2076%2024%2072%20C%2018%2064%208%2054%208%2036%20Z'%20fill='rgba(222,%20241,%20250,%200.42)'%20stroke='%23718694'%20stroke-width='2.4'%20/%3e%3cpath%20d='M%2018%2036%20C%2024%2026%2031%2022%2040%2022%20C%2049%2022%2056%2026%2062%2036'%20fill='none'%20stroke='rgba(255,255,255,0.92)'%20stroke-width='3'%20stroke-linecap='round'%20/%3e%3cpath%20d='M%2028%2084%20H%2052%20V%20100%20H%2028%20Z'%20fill='%23aab5bd'%20stroke='%2353616b'%20stroke-width='2'/%3e%3cpath%20d='M%2028%2088%20H%2052%20M%2028%2093%20H%2052%20M%2028%2098%20H%2052'%20fill='none'%20stroke='%2366757f'%20stroke-width='1.4'/%3e%3cpath%20d='M%2031%2084%20V%2053%20L%2022%2045%20M%2049%2084%20V%2053%20L%2058%2045'%20fill='none'%20stroke='%23596a76'%20stroke-width='2'%20stroke-linecap='round'/%3e%3cpath%20d='M%2022%2045%20L%2026%2040%20L%2030%2050%20L%2034%2040%20L%2038%2050%20L%2042%2040%20L%2046%2050%20L%2050%2040%20L%2054%2050%20L%2058%2045'%20fill='none'%20stroke='%2348555f'%20stroke-width='2.8'%20stroke-linecap='round'%20stroke-linejoin='round'%20/%3e%3crect%20x='34'%20y='100'%20width='12'%20height='6'%20rx='2'%20fill='%233d464d'/%3e%3c/svg%3e`,m=e((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.fragment`);function r(e,n,r){var i=null;if(r!==void 0&&(i=``+r),n.key!==void 0&&(i=``+n.key),`key`in n)for(var a in r={},n)a!==`key`&&(r[a]=n[a]);else r=n;return n=r.ref,{$$typeof:t,type:e,key:i,ref:n===void 0?null:n,props:r}}e.Fragment=n,e.jsx=r,e.jsxs=r})),h=e(((e,t)=>{t.exports=m()}))(),g=`/`,_=`https://www.buymeacoffee.com/awmPhysics`,v=`hello@alexmoorephysics.com`,y=`./favicon.svg`;function b({className:e=``}){return(0,h.jsx)(`a`,{className:`awm-logo-link ${e}`.trim(),href:g,target:`_blank`,rel:`noopener noreferrer`,"aria-label":`More simulations at alexmoorephysics.com`,title:`More simulations`,children:(0,h.jsx)(`img`,{src:y,alt:``})})}function x(){return(0,h.jsxs)(`footer`,{className:`awm-footer`,children:[(0,h.jsx)(`a`,{href:g,target:`_blank`,rel:`noopener noreferrer`,children:`More simulations`}),(0,h.jsx)(`span`,{"aria-hidden":`true`,children:`·`}),(0,h.jsx)(`a`,{href:_,target:`_blank`,rel:`noopener noreferrer`,children:`Support the project ☕`}),(0,h.jsx)(`span`,{"aria-hidden":`true`,children:`·`}),(0,h.jsx)(`a`,{href:`mailto:${v}`,children:v})]})}var ee=()=>document.fullscreenElement||document.webkitFullscreenElement||null;function te(){let[e,t]=(0,l.useState)(()=>!!ee()),[n]=(0,l.useState)(()=>!!(document.fullscreenEnabled||document.webkitFullscreenEnabled));if((0,l.useEffect)(()=>{let e=()=>t(!!ee());return document.addEventListener(`fullscreenchange`,e),document.addEventListener(`webkitfullscreenchange`,e),()=>{document.removeEventListener(`fullscreenchange`,e),document.removeEventListener(`webkitfullscreenchange`,e)}},[]),!n)return null;let r=()=>{if(ee())(document.exitFullscreen||document.webkitExitFullscreen)?.call(document)?.catch?.(()=>{});else{let e=document.documentElement;(e.requestFullscreen||e.webkitRequestFullscreen)?.call(e)?.catch?.(()=>{})}},i=e?`Exit fullscreen`:`Fullscreen`;return(0,h.jsx)(`button`,{type:`button`,className:`fs-fullscreen-button`,onClick:r,"aria-label":i,title:i,children:(0,h.jsx)(`svg`,{viewBox:`0 0 16 16`,"aria-hidden":`true`,children:e?(0,h.jsx)(`path`,{d:`M6 2v4H2M10 2v4h4M6 14v-4H2M10 14v-4h4`}):(0,h.jsx)(`path`,{d:`M2 6V2h4M14 6V2h-4M2 10v4h4M14 10v4h-4`})})})}var S=1200,ne=750,re=821;function ie(){(0,l.useLayoutEffect)(()=>{let e=document.documentElement,t=()=>{let t=window.innerWidth,n=window.innerHeight;if(t<re){e.classList.remove(`fs-fit`),e.style.removeProperty(`--fs-vw`),e.style.removeProperty(`--fs-vh`);return}let r=Math.max(1,Math.min(t/S,n/ne));e.style.setProperty(`--fs-scale`,String(r)),e.style.setProperty(`--fs-layout-w`,`${t/r}px`),e.style.setProperty(`--fs-layout-h`,`${n/r}px`),e.style.setProperty(`--fs-vw`,`${t/r/100}px`),e.style.setProperty(`--fs-vh`,`${n/r/100}px`),e.classList.add(`fs-fit`)};return t(),window.addEventListener(`resize`,t),document.addEventListener(`fullscreenchange`,t),()=>{window.removeEventListener(`resize`,t),document.removeEventListener(`fullscreenchange`,t),e.classList.remove(`fs-fit`),e.style.removeProperty(`--fs-vw`),e.style.removeProperty(`--fs-vh`)}},[])}var C=1600,w=920,T=2,E=.96,ae=240,oe=-103,se=920,ce=650,D=ce,O=29,le=491,ue=42,de=1200,fe=170,k=42,A=174,pe=16,me=e=>e?ue:le,he=e=>O+me(e)+pe,ge=e=>e?k:fe,_e=(e,t)=>he(e)+ge(t)+pe,ve=20,ye=2,be=!1,xe=400,Se=1600,j=12,Ce=7,we=1382,Te=2700,Ee=10,De=Math.ceil(Te/Ee),Oe=3.2,M=5.7,ke=55,Ae=22e3,je=55,Me=10.5,Ne=2.5,Pe=.42,Fe=275e-6,Ie=.48,Le=.03,Re=5e3,ze=5e3,Be=2e4,Ve=500,He=1500,Ue=500,We=.035,Ge=.1,Ke=100,qe=260,Je=.6,Ye=.0175,Xe=12,Ze=1,Qe={x:29,y:144,width:265,height:887},N={x:272,y:234,width:332,height:708},P={x:(N.x-12)*E+ae,y:(N.y-46)*E+oe,width:(N.width+24)*E,height:(N.height+64)*E},$e=-10,et=30,tt={x:275,y:336},nt=20,rt=50,it=40,at={x:N.x+N.width-6,y:Qe.y,width:Qe.width,height:Qe.height},ot={x:N.x-16,y:N.y+14,width:32,height:N.height-28},st={x:N.x+N.width-18,y:N.y+14,width:42,height:N.height-28},ct=Qe.x+5,lt=at.x+at.width-5,F=Math.round(N.x+N.width*.74),ut=class{constructor(e,t){let n=Math.random()*Math.PI*2,r=ke+Math.random()*30;this.x=e,this.y=t,this.oldX=e,this.oldY=t,this.vx=Math.cos(n)*r,this.vy=Math.sin(n)*r,this.radius=Oe,this.sinkCommittedDirection=0}};function dt(e,t,n,r=0){return e>=n.x+r&&e<=n.x+n.width-r&&t>=n.y+r&&t<=n.y+n.height-r}function ft(e,t,n,r,i=0){let a=n.x+i,o=n.x+n.width-i,s=n.y+i,c=n.y+n.height-i;if(e<a||e>o||t<s||t>c)return!1;let l=Math.max(0,Math.min(r-i,(o-a)/2,(c-s)/2));if(l<=0)return!0;let u=a+l,d=o-l,f=s+l,p=c-l;if(e>=u&&e<=d||t>=f&&t<=p)return!0;let m=e<u?u:d,h=t<f?f:p,g=e-m,_=t-h;return g*g+_*_<=l*l}function pt(e,t){return t>=e.y+M&&t<=e.y+e.height-M}function mt(e,t,n,r){if(t!==r)return!1;let i=Math.min(e,n),a=Math.max(e,n),o=N.x-M,s=N.x+M;if(!pt(ot,t)&&a>=o&&i<=s)return!0;let c=N.x+N.width,l=c-M,u=c+M;return!pt(st,t)&&a>=l&&i<=u}function ht(e,t){let n=dt(e,t,ot,M),r=dt(e,t,st,M),i=ft(e,t,N,18,M),a=t<N.y-M||t>N.y+N.height+M,o=dt(e,t,Qe,M)&&(a||e<=N.x-M||pt(ot,t)),s=N.x+N.width,c=dt(e,t,at,M)&&(a||e>=s+M||pt(st,t));return o||n||i||r||c}function gt(e){return ft(e.x,e.y,N,18,0)}function _t(e){return e<0?1:-1}function vt(e){return _t(e)>0?Qe:at}function yt(e){return _t(e)>0?at:Qe}function bt(e,t){let n=vt(t);return dt(e.x,e.y,n,M)&&!gt(e)}function xt(e,t=!1){let n=Math.round(Math.sqrt(Math.abs(e)/j)*we);return t?Math.round(n/Ee):n}function St(){let e=[],t=N.x+30,n=N.x+N.width-30,r=(N.height-28)/11.5,i=Array.from({length:4},(e,r)=>t+r*(n-t)/3),a=0;for(let t=0;t<i.length;t+=1){let n=i[t],o=t%2==1?r*.5:0;for(let t=0;t<12;t+=1){let i=N.y+14+t*r+o;e.push({restX:n,restY:i,x:n,y:i,phaseX:Math.random()*Math.PI*2,phaseY:Math.random()*Math.PI*2,freqX:5.2+Math.random()*2.8,freqY:4.7+Math.random()*3.1,radius:Me,index:a++})}}return e}function Ct(e){let t=Math.max(0,e-ve);return .35+Math.min(4,Math.sqrt(t)*.1)}function wt(e){return Math.min(1,Math.max(0,(e-ve)/1980))}function Tt(e){return Math.min(1,Math.max(0,(e-xe)/1200))}function Et(e,t,n){let r=Ct(t);for(let t of e)t.x=t.restX+Math.sin(n*t.freqX+t.phaseX)*r,t.y=t.restY+Math.sin(n*t.freqY+t.phaseY)*r}function Dt(e,t=12){let n=new Map,r=(e,t)=>`${e}:${t}`,i=e=>{let i=Math.floor(e.x/t),a=Math.floor(e.y/t),o=r(i,a),s=n.get(o);s?s.push(e):n.set(o,[e])},a=(e,i,a=11)=>{let o=Math.floor(e/t),s=Math.floor(i/t),c=Math.ceil(a/t),l=a*a;for(let t=-c;t<=c;t+=1)for(let a=-c;a<=c;a+=1){let c=n.get(r(o+a,s+t));if(c)for(let t of c){let n=t.x-e,r=t.y-i;if(n*n+r*r<l)return!1}}return!0};for(let t of e)i(t);return{add:i,isClear:a}}function Ot(e,t,n=Dt(e)){let r=vt(t),i=r.x+M+5,a=r.x+r.width-M-5,o=r.y+M+5,s=r.y+r.height-M-5;for(let t=0;t<90;t+=1){let t=i+Math.random()*Math.max(1,a-i),r=o+Math.random()*Math.max(1,s-o);if(!ht(t,r)||!n.isClear(t,r))continue;let c=new ut(t,r);return e.push(c),n.add(c),!0}return!1}function kt(e,t,n,r=Te){let i=vt(n),a=e.filter(e=>!bt(e,n)),o=Dt(a),s=[],c=11.4,l=i.y+M+7,u=i.y+i.height-M-7,d=i.x+M+7,f=i.x+i.width-M-7;for(let e=l;e<=u;e+=c)for(let t=d;t<=f;t+=c)s.push({x:t+(Math.random()-.5)*3,y:e+(Math.random()-.5)*3});for(let e=s.length-1;e>0;--e){let t=Math.floor(Math.random()*(e+1));[s[e],s[t]]=[s[t],s[e]]}let p=Math.min(t,Math.max(0,r-a.length)),m=0;for(let e of s){if(m>=p)break;if(!ht(e.x,e.y)||!o.isClear(e.x,e.y,9.4))continue;let t=new ut(e.x,e.y);a.push(t),o.add(t),m+=1}let h=0;for(;m<p&&h<p*120;){h+=1;let e=d+Math.random()*Math.max(1,f-d),t=l+Math.random()*Math.max(1,u-l);if(!ht(e,t)||!o.isClear(e,t,9.2))continue;let n=new ut(e,t);a.push(n),o.add(n),m+=1}return a}function At(e){let t=N.x-M-(Qe.x+M),n=Qe.height-M*2,r=N.width-M*2,i=N.height-M*2,a=Math.max(1,t*n),o=Math.max(1,r*i);return Math.round(e*.5*(o/a))}function jt(e,t,n,r=Te){let i=[...e],a=Dt(i),o=[],s=11.6,c=N.x+M+3,l=N.x+N.width-M-7,u=N.y+M+3,d=N.y+N.height-M-3;for(let e=u;e<=d;e+=s)for(let t=c;t<=l;t+=s)o.push({x:t+(Math.random()-.5)*3.2,y:e+(Math.random()-.5)*3.2});for(let e=o.length-1;e>0;--e){let t=Math.floor(Math.random()*(e+1));[o[e],o[t]]=[o[t],o[e]]}let f=Math.min(n,Math.max(0,r-i.length)),p=0;for(let e of o){if(p>=f)break;if(!ft(e.x,e.y,N,18,M)||!a.isClear(e.x,e.y,9.2))continue;let n=!0;for(let r of t){let t=e.x-r.x,i=e.y-r.y,a=r.radius+Oe+1.2;if(t*t+i*i<a*a){n=!1;break}}if(!n)continue;let r=new ut(e.x,e.y);i.push(r),a.add(r),p+=1}return i}function Mt(e,t,n=!1){let r=xt(e,n),i=n?De:Te,a=kt([],r,e,i),o=At(r);return a=jt(a,t,o,i),a}function Nt(e,t,n,r=Te){if(e.length>=r)return;let i=0;for(let t of e)bt(t,n)&&(i+=1);let a=Math.min(t-i,r-e.length);if(a<=0)return;let o=Math.min(a,30),s=Dt(e);for(let t=0;t<o&&Ot(e,n,s);t+=1);}function Pt(e,t,n,r){let i=t.x-e.x,a=t.y-e.y,o=i*i+a*a;if(o<1e-4)return;let s=Math.sqrt(o),c=i/s,l=a/s,u=Ae/(o+r)*n;e.vx-=c*u,e.vy-=l*u,t.vx+=c*u,t.vy+=l*u;let d=e.radius+t.radius;if(s<d){let r=d-s,i=r*je*n;e.vx-=c*i,e.vy-=l*i,t.vx+=c*i,t.vy+=l*i;let a=r*.28;e.x-=c*a,e.y-=l*a,t.x+=c*a,t.y+=l*a}}function Ft(e,t){for(let n=0;n<e.length;n+=1)for(let r=n+1;r<e.length;r+=1)Pt(e[n],e[r],t,121)}function It(e,t){if(e.sinkCommittedDirection!==0)return;let n=_t(t),r=yt(t);e.y>=r.y+M&&e.y<=r.y+r.height-M&&(n>0?e.x>=r.x+28:e.x<=r.x+r.width-28)&&(e.sinkCommittedDirection=n)}function Lt(e,t,n){let r=e.sinkCommittedDirection,i=yt(n);if(r!==_t(n))return e.sinkCommittedDirection=0,!1;let a=i.y+M,o=i.y+i.height-M,s=e.x+e.vx*t,c=e.y+e.vy*t;if(r>0){let t=i.x+M;s<t?(e.x=t+.5,e.vx=Math.abs(e.vx)):e.x=s}else{let t=i.x+i.width-M;s>t?(e.x=t-.5,e.vx=-Math.abs(e.vx)):e.x=s}return c<a?(e.y=a+.5,e.vy=Math.abs(e.vy)):c>o?(e.y=o-.5,e.vy=-Math.abs(e.vy)):e.y=c,!0}function Rt(e,t,n){let r=_t(n),i=yt(n);return e.y>=i.y+M&&e.y<=i.y+i.height-M?r>0?e.vx>0&&e.x>=i.x+i.width-M-4&&t>e.x:e.vx<0&&e.x<=i.x+M+4&&t<e.x:!1}function zt(e,t){let n=_t(t),r=yt(t);return e.y>=r.y+M&&e.y<=r.y+r.height-M?n>0?e.x>=r.x+r.width-M:e.x<=r.x+M:!1}function Bt(e,t){if(ht(e.x,e.y)||zt(e,t))return;let n=e.x,r=e.y;for(let t=1;t<=M*3.5;t+=1)for(let i=0;i<16;i+=1){let a=i/16*Math.PI*2,o=n+Math.cos(a)*t,s=r+Math.sin(a)*t;if(!ht(o,s))continue;let c=o-n,l=s-r;e.x=o,e.y=s,Math.abs(c)>.25&&e.vx*c<0&&(e.vx*=-1),Math.abs(l)>.25&&e.vy*l<0&&(e.vy*=-1);return}ht(e.oldX,e.oldY)&&(e.x=e.oldX,e.y=e.oldY,e.vx*=-1,e.vy*=-1)}function Vt(e,t,n){if(e.oldX=e.x,e.oldY=e.y,e.sinkCommittedDirection!==0&&Lt(e,t,n))return;Bt(e,n);let r=e.x+e.vx*t,i=e.y+e.vy*t;if(ht(r,e.y)&&!mt(e.x,e.y,r,e.y))e.x=r;else if(Rt(e,r,n))e.x=r;else{e.vx*=-1;let t=e.x+Math.sign(e.vx||1)*1.25;ht(t,e.y)&&(e.x=t)}if(ht(e.x,i)&&!mt(e.x,e.y,e.x,i))e.y=i;else{e.vy*=-1;let t=e.y+Math.sign(e.vy||1)*1.25;ht(e.x,t)&&(e.y=t)}}function Ht(e){let t=Math.abs(e);if(t<=Ne)return Me;let n=Math.max(0,Math.min(1,(t-Ne)/2.5));return Me+n*n*19.5}function Ut(e){return Pe+1.3800000000000001*Math.max(0,Math.min(1,(e-ve)/1980))**.8}function Wt(e,t,n,r){let i=N.y+M+.75,a=N.y+N.height-M-.75,o=2.5,s=t.y-n<=i+o&&e.y<t.y&&e.y<=i+o,c=t.y+n>=a-o&&e.y>t.y&&e.y>=a-o;if(!s&&!c)return!1;let l=Math.abs(r)>.002?r>0?-1:1:Math.sign(e.vx)||Math.sign(e.x-t.x)||1,u=[l,Math.sign(e.x-t.x)||l,-l].filter((e,t,n)=>n.indexOf(e)===t),d=s?i:a,f=null,p=l;for(let r of u){let i=t.x+r*(n+e.radius+1.5);if(ft(i,d,N,18,M)){f=i,p=r;break}}if(f===null)return!1;let m=Math.hypot(e.vx,e.vy),h=Math.max(24,Math.min(72,m*.65));return e.x=f,e.y=d,e.oldX=f,e.oldY=d,e.vx=p*h,e.vy=s?Math.max(8,Math.abs(e.vy)*.3):-Math.max(8,Math.abs(e.vy)*.3),e.trail=[],e.trailSampleElapsed=0,e.nookHoldRemaining=Ze,!0}function Gt(e,t,n,r,i=!1){if(!ft(e.x,e.y,N,18,0))return{depositedHeat:0,collisions:0};let a=0,o=0;for(let s of t){let t=e.x-s.x,c=e.y-s.y,l=Ht(r),u=e.radius+l,d=t*t+c*c;if(d>=u*u||d<1e-4)continue;let f=Math.sqrt(d),p=t/f,m=c/f,h=e.vx*p+e.vy*m,g=u-f;if(e.x+=p*(g+.25),e.y+=m*(g+.25),i&&Wt(e,s,u,r)){h<0&&(o+=1);continue}if(h>=0)continue;o+=1;let _=e.vx*e.vx+e.vy*e.vy;if(i)e.vx-=2*h*p,e.vy-=2*h*m,e.vx*=Je,e.vy*=Je;else{e.vx-=1.9100000000000001*h*p,e.vy-=1.9100000000000001*h*m;let t=Ut(n),r=(Math.random()-.5)*t,i=Math.cos(r),a=Math.sin(r),o=e.vx,s=e.vy;e.vx=o*i-s*a,e.vy=o*a+s*i}let v=e.vx*e.vx+e.vy*e.vy,y=Math.max(0,.5*(_-v));a+=y*Fe}return{depositedHeat:a,collisions:o}}function Kt(e,t,n,r,i,a){let o=Math.min(a,r/2,i/2);e.beginPath(),e.moveTo(t+o,n),e.arcTo(t+r,n,t+r,n+i,o),e.arcTo(t+r,n+i,t,n+i,o),e.arcTo(t,n+i,t,n,o),e.arcTo(t,n,t+r,n,o),e.closePath()}function qt(e,t){let n={x:N.x-12,y:N.y-46,width:N.width+24,height:N.height+64};e.save(),e.shadowColor=`rgba(31, 50, 65, 0.18)`,e.shadowBlur=18,e.shadowOffsetY=7,Kt(e,n.x,n.y,n.width,n.height,26),e.fillStyle=`#ffffff`,e.fill(),e.restore(),Kt(e,n.x,n.y,n.width,n.height,26),e.strokeStyle=`rgba(116, 137, 151, 0.72)`,e.lineWidth=2,e.stroke(),e.fillStyle=`#20364a`,e.textAlign=`center`,e.textBaseline=`middle`,e.font=`800 15px system-ui, sans-serif`,e.fillText(`MICROSCOPIC VIEW`,N.x+N.width/2,N.y-29),e.fillStyle=`#687985`,e.font=`700 10px system-ui, sans-serif`,e.fillText(`NOT TO SCALE`,N.x+N.width/2,N.y-13);let r=t**.72;e.save(),e.shadowColor=`rgba(255, 103, 24, ${r*.82})`,e.shadowBlur=6+r*44,Kt(e,N.x,N.y,N.width,N.height,18),e.fillStyle=`rgb(78, 86, 94)`,e.fill(),e.restore()}function Jt(e,t){let n=t**.72;Kt(e,N.x,N.y,N.width,N.height,18),e.strokeStyle=`rgba(${Math.round(53+99*n)}, ${Math.round(61+26*n)}, ${Math.round(68-42*n)}, 0.96)`,e.lineWidth=4,e.stroke(),e.save(),Kt(e,N.x+5,N.y+5,N.width-10,N.height-10,14),e.strokeStyle=`rgba(255, ${Math.round(255-45*n)}, ${Math.round(255-105*n)}, ${.18+n*.48})`,e.lineWidth=1.5,e.stroke(),e.restore()}function Yt(e,t){return Number.isFinite(e)?t===`Ω`?e>=1e3?`${(e/1e3).toFixed(e>=1e4?0:1)}k`:e.toFixed(e>=100?0:1):t===`A`?e.toFixed(+!Number.isInteger(e)):e.toFixed(e>=1?1:2):`—`}function Xt(e,{x:t,y:n,width:r,height:i,title:a,valueText:o,history:s,valueKey:c,now:l,unit:u,defaultMax:d,fixedMax:f=null,lineColor:p,voltageEvents:m,symmetric:h=!1}){let g=t+38,_=n+28,v=r-50,y=i-42,b=l-Be;Kt(e,t,n,r,i,9),e.fillStyle=`rgba(255, 247, 247, 0.98)`,e.fill(),e.strokeStyle=`#b33b3b`,e.lineWidth=1.8,e.stroke(),e.fillStyle=`#671f1f`,e.textAlign=`left`,e.textBaseline=`middle`,e.font=`700 10px system-ui, sans-serif`,e.fillText(a,t+10,n+12),e.textAlign=`right`,e.font=`700 12px ui-monospace, SFMono-Regular, Menlo, monospace`,e.fillText(o,t+r-56,n+12);let x=f??d;if(f===null){for(let e of s){let t=e[c];Number.isFinite(t)&&(x=h?Math.max(x,Math.abs(t)):Math.max(x,t))}x*=1.12}e.strokeStyle=`rgba(142, 71, 71, 0.16)`,e.lineWidth=1;for(let t=0;t<=2;t+=1){let n=_+y*t/2;e.beginPath(),e.moveTo(g,n),e.lineTo(g+v,n),e.stroke()}h&&(e.strokeStyle=`rgba(103, 31, 31, 0.35)`,e.beginPath(),e.moveTo(g,_+y/2),e.lineTo(g+v,_+y/2),e.stroke()),e.save(),e.beginPath(),e.rect(g,_,v,y),e.clip();for(let t of m){if(t.time<b||t.time>l)continue;let n=g+(t.time-b)/Be*v;e.setLineDash([3,3]),e.strokeStyle=`rgba(52, 84, 109, 0.55)`,e.lineWidth=1,e.beginPath(),e.moveTo(n,_),e.lineTo(n,_+y),e.stroke(),e.setLineDash([])}e.restore(),e.font=`700 8px system-ui, sans-serif`,e.textAlign=`center`,e.fillStyle=`#526a7a`;for(let t of m){if(t.time<b||t.time>l)continue;let n=g+(t.time-b)/Be*v,r=Math.max(g+12,Math.min(g+v-12,n));e.fillText(`${t.voltage.toFixed(0)} V`,r,_-5)}if(e.fillStyle=`#956363`,e.font=`12px system-ui, sans-serif`,e.textAlign=`right`,e.fillText(`${Yt(x,u)}${u}`,g-4,_+2),h?(e.fillText(`0`,g-4,_+y/2+2),e.fillText(`${Yt(-x,u)}${u}`,g-4,_+y)):e.fillText(`0`,g-4,_+y),e.textAlign=`left`,e.fillText(`−20 s`,g,_+y+8),e.textAlign=`right`,e.fillText(`now`,g+v,_+y+8),s.length>1){e.save(),e.beginPath(),e.rect(g,_,v,y),e.clip();let t=e.createLinearGradient(g,0,g+Math.min(42,v*.08),0);t.addColorStop(0,`rgba(212, 49, 49, 0)`),t.addColorStop(1,p),e.strokeStyle=t,e.lineWidth=2,e.lineJoin=`round`,e.lineCap=`round`;let n=!1;e.beginPath();for(let t of s){let r=t[c];if(!Number.isFinite(r)){n&&=(e.stroke(),e.beginPath(),!1);continue}let i=g+(t.time-b)/Be*v,a=h?_+y/2-Math.max(-1,Math.min(1,r/x))*(y/2):_+y-Math.min(1,r/x)*y;n?e.lineTo(i,a):(e.moveTo(i,a),n=!0)}n&&e.stroke(),e.restore()}}function Zt(e,t,n,r,i,a,o,s=!1){let c=ce,l=se;if(s){let t=k;Kt(e,l,o,c,t,9),e.fillStyle=`rgba(255, 247, 247, 0.98)`,e.fill(),e.strokeStyle=`#b33b3b`,e.lineWidth=1.8,e.stroke(),e.fillStyle=`#671f1f`,e.textBaseline=`middle`,e.font=`700 11px system-ui, sans-serif`,e.textAlign=`left`,e.fillText(`CURRENT OVER TIME`,932,o+t/2),e.textAlign=`right`,e.font=`700 12px ui-monospace, SFMono-Regular, Menlo, monospace`,e.fillText(`${a.toFixed(3)} A`,1514,o+t/2);return}let u=[...t,{time:r,current:i}];Xt(e,{x:l,y:o,width:c,height:fe,title:`CURRENT OVER TIME`,valueText:`${a.toFixed(3)} A`,history:u,valueKey:`current`,now:r,unit:`A`,defaultMax:5,fixedMax:5,lineColor:`#d43131`,voltageEvents:n,symmetric:!0})}function Qt(e){let t=.495,n=Math.abs(e);if(n<=4)return e*t;let r=4.3834,i=n-4,a=(1-Math.exp(-i/r))/(1-Math.exp(-8/r)),o=4*t+(3.8-4*t)*a;return Math.sign(e)*o}function $t(){let e=0,t=0;for(;e===0;)e=Math.random();for(;t===0;)t=Math.random();let n=Math.sqrt(-2*Math.log(e))*Math.cos(Math.PI*2*t);return Math.max(-.1,Math.min(Ge,n*We))}function en(e){return Math.abs(e)<.001?0:Qt(e)}function tn(e,t){let n=Math.max(0,Math.min(1,(t-e.start)/He)),r=n*n*(3-2*n);return e.from+(e.to-e.from)*r}function nn(e,t){let n=Math.max(0,Math.min(1,(t-e.start)/Ue)),r=n*n*(3-2*n);return e.from+(e.to-e.from)*r}function rn(e){return Math.abs(e)<.001?0:$t()}function an(e,t){let n=69*Math.abs(e*t)**.814;return Math.min(Se,ve+n)}function on(e,t,n,r){let i=Math.abs(r)>.002?r>0?-1:1:_t(n);if(!e.simplifiedMotionInitialised){let t=Math.random()<.5?-1:1;e.vx=0,e.vy=t*(10+Math.random()*50),e.trail=[],e.trailSampleElapsed=0,e.simplifiedMotionInitialised=!0}e.vx+=i*Ke*Math.abs(r)*t;let a=Math.hypot(e.vx,e.vy);if(a>qe){let t=qe/a;e.vx*=t,e.vy*=t}}function sn(e,t){e.trailSampleElapsed+=t,!(e.trailSampleElapsed<Ye)&&(e.trailSampleElapsed%=Ye,e.trail.push({x:e.x,y:e.y}),e.trail.length>Xe&&e.trail.splice(0,e.trail.length-Xe))}function cn(e,t,n=!1,r=!1,i=null,a=null){let o=se,s=O,c=D,l=n?ue:le,u=l-126;if(Kt(e,o,s,c,l,10),e.fillStyle=`rgba(248, 250, 252, 0.98)`,e.fill(),e.strokeStyle=`#7b8791`,e.lineWidth=1.8,e.stroke(),e.fillStyle=`#26313a`,e.textAlign=`left`,e.textBaseline=`middle`,e.font=`700 12px system-ui, sans-serif`,e.fillText(`I–V CHARACTERISTIC`,932,45),e.textAlign=`center`,e.font=`600 10px system-ui, sans-serif`,e.fillStyle=`#65727c`,e.fillText(`${t.length} captured`,1160,45),n)return;let d=e=>980+(e+j)/24*488,f=e=>87+u/2-Math.max(-1,Math.min(1,e/5))*(u/2);e.strokeStyle=`rgba(92, 105, 116, 0.16)`,e.lineWidth=1;for(let t=-12;t<=j;t+=1){let n=d(t);e.beginPath(),e.moveTo(n,87),e.lineTo(n,87+u),e.stroke()}for(let t=0;t<=10;t+=1){let n=87+u*t/10;e.beginPath(),e.moveTo(980,n),e.lineTo(1468,n),e.stroke()}let p=d(0),m=f(0);e.strokeStyle=`#35223a`,e.fillStyle=`#35223a`,e.lineWidth=2,e.beginPath(),e.moveTo(980,m),e.lineTo(1476,m),e.stroke(),e.beginPath(),e.moveTo(1476,m),e.lineTo(1469,m-4),e.lineTo(1469,m+4),e.closePath(),e.fill(),e.beginPath(),e.moveTo(p,87+u),e.lineTo(p,79),e.stroke(),e.beginPath(),e.moveTo(p,79),e.lineTo(p-4,86),e.lineTo(p+4,86),e.closePath(),e.fill(),e.font=`13px system-ui, sans-serif`,e.fillStyle=`#5c6872`,e.textAlign=`center`,e.textBaseline=`top`;for(let t=-12;t<=j;t+=2){let n=d(t);e.fillText(`${t.toFixed(0)}`,n,87+u+14)}e.font=`13px system-ui, sans-serif`,e.textAlign=`right`,e.textBaseline=`middle`;for(let t=-5;t<=5;t+=1){let n=f(t),r=Math.abs(t)<.005?`0.0`:t.toFixed(1);e.fillText(r,966,n)}e.fillStyle=`#2c2c2c`,e.font=`700 12px system-ui, sans-serif`,e.textAlign=`center`,e.textBaseline=`bottom`,e.fillText(`Current (A)`,p,75);let h=1556;if(e.textAlign=`right`,e.textBaseline=`middle`,e.fillText(`Potential`,h,m-14),e.fillText(`difference`,h,m),e.fillText(`(V)`,h,m+14),r){e.save(),e.beginPath(),e.rect(980,87,488,u),e.clip(),e.beginPath();for(let t=0;t<=240;t+=1){let n=-12+t/240*j*2,r=d(n),i=f(Qt(n));t===0?e.moveTo(r,i):e.lineTo(r,i)}e.strokeStyle=`rgba(91, 62, 151, 0.92)`,e.lineWidth=3,e.setLineDash([9,6]),e.stroke(),e.restore(),e.fillStyle=`#5b3e97`,e.font=`700 11px system-ui, sans-serif`,e.textAlign=`left`,e.textBaseline=`top`,e.fillText(`Filament bulb trend`,990,96)}if(t.length===0){e.fillStyle=`rgba(82, 96, 109, 0.72)`,e.font=`24px system-ui, sans-serif`,e.textAlign=`center`,e.textBaseline=`middle`,e.fillText(`No captured  data points`,1218,87+u/2-10),e.font=`20px system-ui, sans-serif`,e.fillText(`Set the p.d., let current  settle, then capture`,1206,87+u/2+10);return}e.save(),e.beginPath(),e.rect(955,62,538,u+50),e.clip();for(let n=0;n<t.length;n+=1){let r=t[n];if(!Number.isFinite(r.voltage)||!Number.isFinite(r.current))continue;let o=d(r.voltage),s=f(r.current),c=n===a?.index,l=c?(.5+.5*Math.sin(a.progress*Math.PI*6))*(1-a.progress*.35):0,u=n===i?Math.max(11,7+l*6):7+l*6;c&&(e.beginPath(),e.arc(o,s,12+l*10,0,Math.PI*2),e.strokeStyle=`rgba(255, 185, 36, ${.28+l*.68})`,e.lineWidth=3+l*3,e.stroke()),e.beginPath(),e.moveTo(o-u,s-u),e.lineTo(o+u,s+u),e.moveTo(o+u,s-u),e.lineTo(o-u,s+u),e.lineCap=`round`,e.strokeStyle=`rgba(255, 255, 255, 0.96)`,e.lineWidth=n===i||c?7:5,e.stroke(),e.strokeStyle=`#a7195b`,e.lineWidth=n===i||c?4:2.8,e.stroke()}e.restore()}function ln(e,t,n,r,i){if(!e)return;let a=e.getContext(`2d`);a.setTransform(1,0,0,1,0,0),a.clearRect(0,0,e.width,e.height),a.setTransform(T,0,0,T,-916*T,-50),cn(a,t,!1,n,r,i)}function un(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m){e.clearRect(0,0,C,w);let h=e.createLinearGradient(0,0,0,w);h.addColorStop(0,`#f7fafc`),h.addColorStop(1,`#e8edf2`),e.fillStyle=h,e.fillRect(0,0,C,w),e.save(),e.translate(ae,oe),e.scale(E,E);let g=wt(r);qt(e,g);let _=[{t:0,rgb:[118,126,134]},{t:.25,rgb:[148,105,88]},{t:.5,rgb:[207,45,34]},{t:.75,rgb:[242,78,20]},{t:1,rgb:[255,158,31]}];function v(e){for(let t=0;t<_.length-1;t+=1){let n=_[t],r=_[t+1];if(e<=r.t){let t=(e-n.t)/(r.t-n.t);return n.rgb.map((e,n)=>Math.round(e+(r.rgb[n]-e)*t))}}return _[_.length-1].rgb}let[y,b,x]=v(g);e.save(),Kt(e,N.x,N.y,N.width,N.height,18),e.clip();for(let t of n){let n=t.radius*1.76,r=Math.min(255,Math.round(y+(255-y)*.42)),i=Math.min(255,Math.round(b+(255-b)*.42)),a=Math.min(255,Math.round(x+(255-x)*.42)),o=Math.round(y*.58),s=Math.round(b*.52),c=Math.round(x*.48);e.save(),e.shadowColor=`rgba(${y}, ${b}, ${x}, ${.08+g*.76})`,e.shadowBlur=2+g*20;let l=e.createRadialGradient(t.x-n*.32,t.y-n*.32,n*.12,t.x,t.y,n);l.addColorStop(0,`rgb(${r}, ${i}, ${a})`),l.addColorStop(.42,`rgb(${y}, ${b}, ${x})`),l.addColorStop(1,`rgb(${o}, ${s}, ${c})`),e.beginPath(),e.arc(t.x,t.y,n,0,Math.PI*2),e.fillStyle=l,e.fill(),e.restore()}e.restore(),e.save(),Kt(e,N.x,N.y,N.width,N.height,18),e.clip();for(let n of t){if(n.nookHoldRemaining>0||!gt(n))continue;if(n.trail?.length){e.save(),e.globalCompositeOperation=`lighter`;for(let t=0;t<n.trail.length;t+=1){let r=n.trail[t],i=(t+1)/n.trail.length,a=.025+i**1.7*.2,o=n.radius*(.25+i*.42);e.beginPath(),e.arc(r.x,r.y,o,0,Math.PI*2),e.fillStyle=`rgba(99, 217, 255, ${a})`,e.fill()}e.restore()}else{let t=Math.hypot(n.vx,n.vy),r=Math.min(.08,3.8/Math.max(t,1));e.beginPath(),e.moveTo(n.x,n.y),e.lineTo(n.x-n.vx*r,n.y-n.vy*r),e.strokeStyle=`rgba(38, 175, 232, 0.28)`,e.lineWidth=2,e.stroke()}let t=e.createRadialGradient(n.x-n.radius*.35,n.y-n.radius*.35,n.radius*.15,n.x,n.y,n.radius);t.addColorStop(0,`#e9fcff`),t.addColorStop(.38,`#63d9ff`),t.addColorStop(1,`#0878b6`),e.beginPath(),e.arc(n.x,n.y,n.radius,0,Math.PI*2),e.fillStyle=t,e.fill()}e.restore(),Jt(e,g),e.restore(),Zt(e,o,s,l,i,a,he(u),d),cn(e,c,u,f,p,m)}function dn(){ie();let e=(0,l.useRef)(null),t=(0,l.useRef)(null),n=(0,l.useRef)(null),r=(0,l.useRef)([]),i=(0,l.useRef)(St()),a=(0,l.useRef)(ye),o=(0,l.useRef)(ve),s=(0,l.useRef)(0),c=(0,l.useRef)([]),u=(0,l.useRef)([]),m=(0,l.useRef)(0),g=(0,l.useRef)(0),_=(0,l.useRef)(0),v=(0,l.useRef)(0),y=(0,l.useRef)([]),ee=(0,l.useRef)([]),S=(0,l.useRef)([]),ne=(0,l.useRef)(null),re=(0,l.useRef)(null),E=(0,l.useRef)(null),ae=(0,l.useRef)(null),oe=(0,l.useRef)(null),se=(0,l.useRef)(null),ce=(0,l.useRef)({decreaseVoltage:null,increaseVoltage:null,captureDataPoint:null}),D=(0,l.useRef)(0),le=(0,l.useRef)(!1),ue=(0,l.useRef)(!0),fe=(0,l.useRef)(null);fe.current===null&&(fe.current={from:0,to:en(ye),start:0});let k=(0,l.useRef)(null);k.current===null&&(k.current={from:0,to:rn(ye),start:0,nextSample:Ue});let[A,pe]=(0,l.useState)(ye),[me,ge]=(0,l.useState)(!1),[xe,Se]=(0,l.useState)(!0),[we,Ee]=(0,l.useState)(!1),[Oe,M]=(0,l.useState)(!1),[ke,Ae]=(0,l.useState)(!1),[je,Me]=(0,l.useState)(!1),[Ne,Pe]=(0,l.useState)(null),[Fe,He]=(0,l.useState)(!1),[We,Ge]=(0,l.useState)(!1),[Ke,qe]=(0,l.useState)(!1),[Je,Ye]=(0,l.useState)(!1),[Xe,Ze]=(0,l.useState)(!1),[Qe,$e]=(0,l.useState)(!1),et=(0,l.useRef)(!1),at=(0,l.useRef)(!1),ot=(0,l.useRef)(!1),[st,ut]=(0,l.useState)({current:0,resistance:null,temperature:ve,collisionsPerElectronPerSecond:0,reservoirCount:0,totalElectrons:0});(0,l.useEffect)(()=>{a.current=A},[A]),(0,l.useEffect)(()=>{le.current=me},[me]),(0,l.useEffect)(()=>{if(!we&&!Oe&&!je)return;let e=e=>{e.key===`Escape`&&(Ee(!1),M(!1),Me(!1),re.current=null,E.current=null,Pe(null))};return window.addEventListener(`keydown`,e),()=>window.removeEventListener(`keydown`,e)},[we,Oe,je]),(0,l.useEffect)(()=>{et.current=ke},[ke]),(0,l.useEffect)(()=>{at.current=Fe},[Fe]),(0,l.useEffect)(()=>{ot.current=Xe},[Xe]),(0,l.useEffect)(()=>{let l=e.current,d=t.current;if(!l||!d)return;let f=l.getContext(`2d`),p=d.getContext(`2d`);f.setTransform(T,0,0,T,0,0),r.current.length===0&&(r.current=Mt(a.current,i.current,ue.current));let h,b=performance.now(),x=0,te=0,ie=e=>{let t=(e-b)/1e3,C=Math.min(t,.032);b=e;let w=r.current,ae=i.current,oe=ue.current,se=xt(a.current,oe),ce=oe?De:Te,O=s.current;if(!le.current){if(m.current+=C*1e3,g.current+=t*1e3,_.current+=t,v.current+=t*1e3,ue.current){let e=tn(fe.current,g.current),t=k.current;g.current>=t.nextSample&&(t={from:nn(t,g.current),to:rn(a.current),start:g.current,nextSample:g.current+Ue},k.current=t),O=e+nn(t,g.current)}Nt(w,se,a.current,ce),Et(ae,o.current,_.current),ue.current||Ft(w,C);let e=0,n=0,i=w.reduce((e,t)=>e+ +!!gt(t),0);for(let r of w){if(ue.current&&r.nookHoldRemaining>0){r.nookHoldRemaining=Math.max(0,r.nookHoldRemaining-t),r.oldX=r.x,r.oldY=r.y;continue}ue.current&&(on(r,C,a.current,O),sn(r,C)),Vt(r,C,a.current);let i=Gt(r,ae,o.current,ue.current?O:s.current,ue.current);e+=i.depositedHeat,n+=i.collisions,r.sinkCommittedDirection===0?(Bt(r,a.current),It(r,a.current)):Lt(r,0,a.current);let l=0;r.oldX<F&&r.x>=F?l=1:r.oldX>F&&r.x<=F&&(l=-1),l!==0&&ft(r.x,r.y,N,18,0)&&c.current.push({time:m.current,direction:l})}if(u.current.push({time:m.current,collisions:n,electronSeconds:i*C}),ue.current){let e=an(a.current,O);o.current+=Ie*(e-ve)*C}else o.current+=e;let l=o.current-ve;o.current=ve+l*Math.exp(-.48*C);let d=_t(a.current);r.current=w.filter(e=>d>0?e.x<lt:e.x>ct)}let A=m.current;c.current=c.current.filter(e=>A-e.time<=Re);let pe=-c.current.reduce((e,t)=>e+t.direction,0)/(Re/1e3)*Le,me=ue.current?O:pe;s.current=me;let he=Math.abs(me)>.002&&a.current*me>0?a.current/me:null;u.current=u.current.filter(e=>A-e.time<=ze);let ge=u.current.reduce((e,t)=>(e.collisions+=t.collisions,e.electronSeconds+=t.electronSeconds,e),{collisions:0,electronSeconds:0}),_e=ge.electronSeconds>0?ge.collisions/ge.electronSeconds:0,ye=v.current;!le.current&&ye-D.current>=Ve&&(D.current=ye,y.current.push({time:ye,current:me,resistance:he})),y.current=y.current.filter(e=>ye-e.time<=21e3);let be=y.current[y.current.length-1]?.current??0;ee.current=ee.current.filter(e=>ye-e.time<=Be);let xe=r.current.reduce((e,t)=>e+ +!!bt(t,a.current),0),Se=ne.current,j=null;if(Se){let t=(e-Se.start)/de;t<1?j={index:Se.index,progress:Math.max(0,t)}:ne.current=null}un(f,r.current,ae,o.current,me,be,y.current,ee.current,S.current,ye,et.current,ot.current,at.current,E.current===`normal`?re.current:null,j),ln(n.current,S.current,at.current,E.current===`maximised`?re.current:null,j),p.clearRect(0,0,d.width,d.height);let Ce=Math.round(P.x*T),we=Math.round(P.y*T),Ee=Math.round(P.width*T),Oe=Math.round(P.height*T);if(p.drawImage(l,Ce,we,Ee,Oe,Ce,we,Ee,Oe),e-x>120){x=e;let t=e-te>=500;t&&(te=e),ut(e=>({current:me,resistance:he,temperature:t?o.current:e.temperature,collisionsPerElectronPerSecond:_e,reservoirCount:xe,totalElectrons:r.current.length}))}h=requestAnimationFrame(ie)};return h=requestAnimationFrame(ie),()=>cancelAnimationFrame(h)},[]);let dt=()=>{let e=!ue.current;ue.current=e,Se(e),c.current=[],u.current=[],r.current=Mt(a.current,i.current,e),e?(fe.current={from:s.current,to:en(a.current),start:g.current},k.current={from:0,to:rn(a.current),start:g.current,nextSample:g.current+Ue}):s.current=0},pt=e=>{let t=Math.max(-12,Math.min(j,Math.round(Number(e)*2)/2)),n=ue.current,i=xt(t,n),o=n?De:Te,s=v.current,c=_t(a.current),l=_t(t),u=ee.current,d=u[u.length-1];if(d&&s-d.time<450?(d.time=s,d.voltage=t):u.push({time:s,voltage:t}),c!==l&&(r.current=r.current.filter(gt)),a.current=t,pe(t),ue.current){let e=g.current,n=tn(fe.current,e),r=nn(k.current,e);fe.current={from:n,to:en(t),start:e},k.current={from:r,to:rn(t),start:e,nextSample:e+Ue}}r.current=kt(r.current,i,t,o)},mt=e=>{let t=e.currentTarget.getBoundingClientRect(),n=Ce*(t.width/(e.currentTarget.offsetWidth||t.width)),r=t.left+n,i=Math.max(1,t.width-n*2),a=Math.max(0,Math.min(1,(e.clientX-r)/i));pt(-12+a*j*2)},ht=e=>{e.button===0&&(e.preventDefault(),se.current=e.pointerId,e.currentTarget.setPointerCapture(e.pointerId),mt(e))},vt=e=>{se.current===e.pointerId&&mt(e)},yt=e=>{se.current===e.pointerId&&(mt(e),se.current=null,e.currentTarget.hasPointerCapture(e.pointerId)&&e.currentTarget.releasePointerCapture(e.pointerId))},Ct=e=>{se.current===e.pointerId&&(se.current=null,e.currentTarget.hasPointerCapture(e.pointerId)&&e.currentTarget.releasePointerCapture(e.pointerId))},wt=e=>{let t=null;e.key===`ArrowLeft`||e.key===`ArrowDown`?t=a.current-.5:e.key===`ArrowRight`||e.key===`ArrowUp`?t=a.current+.5:e.key===`Home`?t=-12:e.key===`End`&&(t=j),t!==null&&(e.preventDefault(),e.stopPropagation(),pt(t))},Dt=e=>{pt(a.current+e)},Ot=()=>{let e=s.current;if(!ue.current){let t=m.current;c.current=c.current.filter(e=>t-e.time<=Re),e=-c.current.reduce((e,t)=>e+t.direction,0)/(Re/1e3)*Le}S.current.push({voltage:a.current,current:e}),ne.current={index:S.current.length-1,start:performance.now()}},At=()=>{S.current=[],ne.current=null,re.current=null,E.current=null,Pe(null)},jt=()=>{re.current=null,E.current=null,Pe(null)},Pt=(e,t)=>{if(t===`normal`&&et.current){jt();return}let n=e.currentTarget,r=n.getBoundingClientRect();if(r.width<=0||r.height<=0)return;let i=n.width/T,a=n.height/T,o=(e.clientX-r.left)/r.width*i,s=(e.clientY-r.top)/r.height*a,c=t===`maximised`?64:980,l=t===`maximised`?62:87,u=18/r.width*i,d=null;for(let e=0;e<S.current.length;e+=1){let n=S.current[e];if(!Number.isFinite(n.voltage)||!Number.isFinite(n.current))continue;let f=c+(n.voltage+j)/24*488,p=Math.max(-5,Math.min(5,n.current)),m=l+365/2-p/5*(365/2),h=Math.hypot(o-f,s-m);if(h<=u&&(!d||h<d.distance)){let o=f/i*r.width,s=m/a*r.height,c=t===`maximised`?102:86,l=n.voltage<0||s<(t===`maximised`?112:82),u=t===`maximised`?45:28,p=o+(l?u:-u);d={index:e,surface:t,voltage:n.voltage,current:n.current,distance:h,left:Math.max(c,Math.min(r.width-c,p)),top:s,placeBelow:l}}}re.current=d?.index??null,E.current=d?.surface??null,Pe(e=>d?e?.index===d.index&&e.surface===d.surface&&e.left===d.left&&e.top===d.top?e:d:e&&null)},Rt=e=>{Pt(e,`maximised`)},zt=e=>{Pt(e,`normal`)};(0,l.useEffect)(()=>{ce.current.decreaseVoltage=()=>Dt(-.5),ce.current.increaseVoltage=()=>Dt(.5),ce.current.captureDataPoint=Ot}),(0,l.useEffect)(()=>{let e=e=>{if(we||Oe||e.altKey||e.ctrlKey||e.metaKey)return;let t=e.target;if(t?.isContentEditable||t instanceof HTMLTextAreaElement||t instanceof HTMLSelectElement||t instanceof HTMLInputElement&&t.type!==`checkbox`)return;let n=e=>{e?.animate&&(e.getAnimations().forEach(e=>e.cancel()),e.animate([{transform:`scale(1)`,boxShadow:`none`,offset:0},{background:`#ffe45c`,borderColor:`#d99b00`,color:`#563600`,transform:`scale(1.38)`,boxShadow:`0 0 0 7px rgba(255, 208, 45, 0.38)`,offset:.22},{transform:`scale(1)`,boxShadow:`none`,offset:.46},{background:`#ffe45c`,borderColor:`#d99b00`,color:`#563600`,transform:`scale(1.28)`,boxShadow:`0 0 0 5px rgba(255, 208, 45, 0.28)`,offset:.7},{transform:`scale(1)`,boxShadow:`none`,offset:1}],{duration:620,easing:`ease-out`}))};e.key===`ArrowLeft`?(e.preventDefault(),n(ae.current),ce.current.decreaseVoltage?.()):e.key===`ArrowRight`?(e.preventDefault(),n(oe.current),ce.current.increaseVoltage?.()):e.key.toLowerCase()===`x`&&!e.repeat?(e.preventDefault(),ce.current.captureDataPoint?.()):e.key.toLowerCase()===`t`&&!e.repeat?(e.preventDefault(),He(e=>!e)):e.key.toLowerCase()===`m`&&!e.repeat&&(e.preventDefault(),re.current=null,E.current=null,Pe(null),Me(e=>!e))};return window.addEventListener(`keydown`,e),()=>window.removeEventListener(`keydown`,e)},[we,Oe]);let Ht=Tt(st.temperature),Ut=Ht**.58,Wt=Ht**.72,Kt=Math.round(190+45*Wt),qt=Math.round(65+95*Wt),Jt=Math.round(135+90*Wt),Yt=Math.round(35+75*Wt),Xt=Math.round(232+23*Wt),Zt=Math.round(150+80*Wt),Qt=Math.round(45+200*Ht**1.15),$t=Math.round(15+175*Ht**1.4),cn=Math.round(20+155*Ht**1.1),dn=Math.round(5+90*Ht**1.4),mn=A<0?d:f,_n=Math.abs(A)>.001,bn=_n?A>0?`positive`:`negative`:`neutral`,xn=_n?A>0?`negative`:`positive`:`neutral`,Sn=_n?_t(A)>0?`right`:`left`:`none`,Cn=_n?Sn===`right`?`left`:`right`:`none`;return(0,h.jsxs)(`div`,{className:`fs-page`,onClickCapture:e=>{e.target.closest?.(`button`)?.blur()},children:[(0,h.jsx)(`style`,{children:yn}),(0,h.jsxs)(`main`,{className:`fs-shell`,children:[(0,h.jsxs)(`header`,{className:`fs-header`,children:[(0,h.jsxs)(`div`,{className:`fs-title`,children:[(0,h.jsx)(b,{}),(0,h.jsx)(`h1`,{children:`Filament conduction simulation`})]}),(0,h.jsxs)(`div`,{className:`fs-header-actions`,children:[(0,h.jsxs)(`div`,{className:`fs-motion-mode-control`,children:[(0,h.jsxs)(`label`,{className:`fs-simplified-mode-toggle`,children:[(0,h.jsx)(`input`,{type:`checkbox`,checked:xe,onChange:e=>{dt(),e.currentTarget.blur()},"aria-label":`Simplified electron motion`}),(0,h.jsx)(`span`,{className:`fs-simplified-mode-track`,"aria-hidden":`true`,children:(0,h.jsx)(`span`,{className:`fs-simplified-mode-thumb`})}),(0,h.jsx)(`span`,{children:`Simplified electron motion`})]}),(0,h.jsx)(`button`,{type:`button`,className:`fs-motion-mode-info`,onClick:()=>Ee(!0),"aria-label":`Explain the electron motion modes`,title:`About the electron motion modes`,children:`i`})]}),(0,h.jsx)(`button`,{type:`button`,className:`fs-circuit-diagram-button`,onClick:()=>M(!0),children:`I-V graph explanation`}),(0,h.jsx)(te,{})]})]}),(0,h.jsxs)(`section`,{className:`fs-stage-card`,"aria-label":`Particle simulation, graphs, and instruments`,children:[(0,h.jsxs)(`div`,{className:`fs-stage-controls`,"aria-label":`Simulation controls`,children:[(0,h.jsxs)(`div`,{className:`fs-voltage-control`,children:[(0,h.jsxs)(`div`,{className:`fs-voltage-heading`,children:[(0,h.jsx)(`strong`,{children:`Potential difference:`}),(0,h.jsxs)(`span`,{className:`fs-voltage-value`,children:[A.toFixed(1),` V`]})]}),(0,h.jsxs)(`div`,{className:`fs-voltage-stepper`,children:[(0,h.jsx)(`button`,{type:`button`,ref:ae,className:`fs-voltage-step-button`,onClick:()=>Dt(-.5),disabled:A<=-12,"aria-label":`Decrease potential difference by 0.5 volts`,title:`Decrease by 0.5 V`,children:`−`}),(0,h.jsxs)(`div`,{className:`fs-slider-wrap`,style:{"--slider-active-start":`${Math.min(50,(A+j)/24*100)}%`,"--slider-active-end":`${Math.max(50,(A+j)/24*100)}%`,"--slider-thumb-position":`${(A+j)/24*100}%`},children:[(0,h.jsx)(`div`,{className:`fs-slider-hit-area`,role:`slider`,tabIndex:0,"aria-label":`Potential difference`,"aria-valuemin":-12,"aria-valuemax":j,"aria-valuenow":A,"aria-valuetext":`${A.toFixed(1)} volts`,"aria-keyshortcuts":`ArrowLeft ArrowRight Home End`,onPointerDown:ht,onPointerMove:vt,onPointerUp:yt,onPointerCancel:Ct,onKeyDown:wt}),(0,h.jsx)(`span`,{className:`fs-slider-rail`,"aria-hidden":`true`}),(0,h.jsx)(`span`,{className:`fs-slider-thumb`,"aria-hidden":`true`}),(0,h.jsx)(`span`,{className:`fs-slider-zero-tick`,"aria-hidden":`true`}),(0,h.jsx)(`span`,{className:`fs-slider-zero-label`,"aria-hidden":`true`,children:`0 V`})]}),(0,h.jsx)(`button`,{type:`button`,ref:oe,className:`fs-voltage-step-button`,onClick:()=>Dt(.5),disabled:A>=j,"aria-label":`Increase potential difference by 0.5 volts`,title:`Increase by 0.5 V`,children:`+`})]})]}),(0,h.jsx)(`div`,{className:`fs-control-side`,children:(0,h.jsxs)(`div`,{className:`fs-actions`,children:[(0,h.jsx)(`button`,{onClick:Ot,"aria-keyshortcuts":`x`,style:{...vn,background:`#a7195b`,border:`1px solid #861347`,color:`#ffffff`},children:`Capture data point`}),(0,h.jsx)(`button`,{className:`fs-pause-button`,onClick:()=>ge(e=>!e),style:vn,children:me?`Resume`:`Pause`}),(0,h.jsx)(`button`,{className:`fs-clear-data-button`,onClick:At,style:vn,children:`Clear data`}),be]})})]}),(0,h.jsxs)(`div`,{className:`fs-stage-wrap`,children:[(0,h.jsx)(`canvas`,{ref:e,width:C*T,height:w*T,className:`fs-stage`,onPointerMove:zt,onPointerLeave:jt}),Ne?.surface===`normal`&&(0,h.jsxs)(`div`,{className:`fs-iv-point-tooltip${Ne.placeBelow?` is-below`:``}`,style:{left:`${Ne.left}px`,top:`${Ne.top}px`},role:`status`,children:[(0,h.jsx)(`span`,{children:`Voltage`}),(0,h.jsxs)(`strong`,{children:[Ne.voltage.toFixed(1),` V`]}),(0,h.jsx)(`span`,{children:`Current`}),(0,h.jsxs)(`strong`,{children:[Ne.current.toFixed(2),` A`]})]}),(0,h.jsx)(`canvas`,{ref:t,width:C*T,height:w*T,className:`fs-microscopic-overlay`,"aria-hidden":`true`}),(0,h.jsxs)(`div`,{className:`fs-particle-key`,style:{left:`${(P.x+P.width-183)/C*100}%`,top:`${(P.y+48)/w*100}%`},"aria-label":`Particle key: large spheres are ions and small blue dots are electrons`,children:[(0,h.jsxs)(`span`,{className:`fs-particle-key-item`,children:[(0,h.jsx)(`span`,{className:`fs-particle-key-ion`,"aria-hidden":`true`}),(0,h.jsx)(`span`,{children:`ion`})]}),(0,h.jsxs)(`span`,{className:`fs-particle-key-item`,children:[(0,h.jsx)(`span`,{className:`fs-particle-key-electron`,"aria-hidden":`true`}),(0,h.jsx)(`span`,{children:`electron`})]})]}),(0,h.jsxs)(`div`,{className:`fs-circuit-context`,children:[(0,h.jsx)(`img`,{src:mn,alt:`Series circuit with a ${A<0?`negative`:`positive`} potential difference and ammeter`,className:`fs-circuit-context-image`}),_n&&(0,h.jsx)(`span`,{className:`fs-battery-positive-marker ${A>0?`is-left`:`is-right`}`,"aria-hidden":`true`,children:`+`})]}),(0,h.jsxs)(`div`,{className:`fs-circuit-bulb`,style:{"--bulb-glow-green":Kt,"--bulb-glow-blue":qt,"--bulb-outer-green":Jt,"--bulb-outer-blue":Yt,"--bulb-core-green":Xt,"--bulb-core-blue":Zt,"--filament-core-green":Qt,"--filament-core-blue":$t,"--filament-aura-green":cn,"--filament-aura-blue":dn},children:[(0,h.jsx)(`span`,{className:`fs-circuit-bulb-glow`,style:{opacity:Math.min(1,Ut*1.1),transform:`scale(${.76+Ut*.9})`},"aria-hidden":`true`}),(0,h.jsx)(`img`,{src:p,alt:`Upright filament bulb connected into the series circuit`,className:`fs-circuit-bulb-image`,style:{filter:Ut>0?`brightness(${1+Ut*.55}) saturate(${1+Ut*.85}) drop-shadow(0 0 ${2+Ut*26}px rgba(255, ${Kt}, ${qt}, ${Ut*.9}))`:`none`}}),(0,h.jsxs)(`svg`,{className:`fs-circuit-bulb-filament-glow`,viewBox:`0 0 80 108`,"aria-hidden":`true`,style:{opacity:Ut,filter:`drop-shadow(0 0 ${2+Ut*15}px rgba(255, ${cn}, ${dn}, ${Ut}))`},children:[(0,h.jsx)(`path`,{className:`fs-filament-aura`,d:`M 22 45 L 26 40 L 30 50 L 34 40 L 38 50 L 42 40 L 46 50 L 50 40 L 54 50 L 58 45`}),(0,h.jsx)(`path`,{className:`fs-filament-core`,d:`M 22 45 L 26 40 L 30 50 L 34 40 L 38 50 L 42 40 L 46 50 L 50 40 L 54 50 L 58 45`})]})]}),(0,h.jsxs)(`div`,{className:`fs-flow-directions${_n?``:` is-stopped`}`,style:{left:`${P.x/C*100}%`,top:`${(P.y+P.height+4)/w*100}%`,width:`${P.width/C*100}%`},"aria-label":_n?`Through the filament, current flows ${Cn} and electrons flow ${Sn}`:`At zero volts, there is no net current or electron flow through the filament`,children:[(0,h.jsx)(`div`,{className:`fs-flow-heading`,children:`FLOW THROUGH FILAMENT`}),(0,h.jsxs)(`div`,{className:`fs-flow-row fs-current-flow`,children:[(0,h.jsx)(`span`,{children:`Current flow`}),_n?(0,h.jsxs)(`svg`,{className:`fs-flow-arrow is-${Cn}`,viewBox:`0 0 104 14`,"aria-hidden":`true`,children:[(0,h.jsx)(`path`,{d:`M 4 7 H 98`}),(0,h.jsx)(`path`,{d:`M 90 1.5 L 98 7 L 90 12.5`})]}):(0,h.jsx)(`span`,{className:`fs-no-flow`,children:`No net flow`})]}),(0,h.jsxs)(`div`,{className:`fs-flow-row fs-electron-flow`,children:[(0,h.jsx)(`span`,{children:`Electron flow`}),_n?(0,h.jsxs)(`svg`,{className:`fs-flow-arrow is-${Sn}`,viewBox:`0 0 104 14`,"aria-hidden":`true`,children:[(0,h.jsx)(`path`,{d:`M 4 7 H 98`}),(0,h.jsx)(`path`,{d:`M 90 1.5 L 98 7 L 90 12.5`})]}):(0,h.jsx)(`span`,{className:`fs-no-flow`,children:`No net flow`})]})]}),(0,h.jsxs)(`div`,{className:`fs-terminal-directions`,"aria-label":_n?`The ${bn} terminal is to the left and the ${xn} terminal is to the right`:`At zero volts, neither terminal has polarity`,style:{left:`${P.x/C*100}%`,top:`${O/w*100}%`,width:`${P.width/C*100}%`},children:[(0,h.jsxs)(`span`,{className:`is-${bn}`,children:[`← `,_n?`${bn} terminal`:`terminal`]}),(0,h.jsxs)(`span`,{className:`is-${xn}`,children:[_n?`${xn} terminal`:`terminal`,` →`]})]}),(0,h.jsxs)(`svg`,{className:`fs-zoom-leaders`,viewBox:`0 0 ${C} ${w}`,preserveAspectRatio:`none`,"aria-hidden":`true`,children:[(0,h.jsx)(`path`,{className:`fs-zoom-wedge`,d:`M ${tt.x} ${tt.y} L ${P.x+nt} ${P.y+rt} L ${P.x+nt} ${P.y+P.height-it} Z`}),(0,h.jsx)(`path`,{d:`M ${tt.x} ${tt.y} L ${P.x+nt} ${P.y+rt}`}),(0,h.jsx)(`path`,{d:`M ${tt.x} ${tt.y} L ${P.x+nt} ${P.y+P.height-it}`}),(0,h.jsx)(`circle`,{cx:tt.x,cy:tt.y,r:`10`})]}),(0,h.jsx)(`button`,{type:`button`,className:`fs-trend-overlay-toggle${Fe?` is-active`:``}`,style:{left:`${1496/C*100}%`,top:`${34/w*100}%`},"aria-pressed":Fe,"aria-keyshortcuts":`t`,onClick:()=>He(e=>!e),children:`Trend overlay`}),(0,h.jsx)(`button`,{type:`button`,className:`fs-maximise-iv-button`,style:{left:`${1528/C*100}%`,top:`${34/w*100}%`},onClick:()=>{jt(),Me(!0)},"aria-label":`Maximise I-V graph`,"aria-keyshortcuts":`m`,title:`Maximise I-V graph`,children:(0,h.jsx)(`svg`,{viewBox:`0 0 16 16`,"aria-hidden":`true`,children:(0,h.jsx)(`path`,{d:`M 6 2 H 2 V 6 M 10 2 H 14 V 6 M 14 10 V 14 H 10 M 6 14 H 2 V 10`})})}),(0,h.jsx)(`div`,{className:`fs-history-toggle`,style:{left:`${1560/C*100}%`,top:`${34/w*100}%`},children:(0,h.jsx)(fn,{minimised:ke,onClick:()=>Ae(e=>!e),label:`I-V graph`})}),(0,h.jsx)(`div`,{className:`fs-history-toggle`,style:{left:`${1565/C*100}%`,top:`${(he(ke)+5)/w*100}%`},children:(0,h.jsx)(fn,{minimised:Xe,onClick:()=>Ze(e=>!e),label:`current time series`})}),(0,h.jsxs)(`div`,{className:`fs-stage-instruments`,"aria-label":`Simulation instruments`,style:{top:`${_e(ke,Xe)/w*100}%`},children:[(0,h.jsx)(pn,{current:st.current,minimised:We,onToggleMinimise:()=>Ge(e=>!e)}),(0,h.jsxs)(`div`,{className:`fs-stage-readouts`,children:[(0,h.jsx)(gn,{label:`Digital ammeter`,value:`${st.current.toFixed(xe?2:1)} A`,detail:xe?null:`5 s rolling average`,minimised:Ke,onToggleMinimise:()=>qe(e=>!e)}),(0,h.jsx)(gn,{label:`Resistance`,value:st.resistance===null?`— Ω`:`${st.resistance.toFixed(1)} Ω`,detail:`R = V ÷ I`,minimised:Je,onToggleMinimise:()=>Ye(e=>!e)})]}),(0,h.jsx)(hn,{temperature:st.temperature,minimised:Qe,onToggleMinimise:()=>$e(e=>!e)})]})]})]}),(0,h.jsx)(x,{})]}),je&&(0,h.jsx)(`div`,{className:`fs-maximised-graph-backdrop`,role:`presentation`,onMouseDown:e=>{e.target===e.currentTarget&&(Me(!1),jt())},children:(0,h.jsxs)(`div`,{className:`fs-maximised-graph-dialog`,role:`dialog`,"aria-modal":`true`,"aria-label":`Maximised I-V characteristic graph`,children:[(0,h.jsx)(`div`,{className:`fs-maximised-graph-toolbar`,children:(0,h.jsxs)(`div`,{className:`fs-maximised-graph-actions`,children:[(0,h.jsx)(`button`,{type:`button`,className:`fs-maximised-trend-toggle${Fe?` is-active`:``}`,"aria-pressed":Fe,"aria-keyshortcuts":`t`,onClick:()=>He(e=>!e),children:`Trend overlay`}),(0,h.jsx)(`button`,{type:`button`,className:`fs-maximised-graph-close`,onClick:()=>{Me(!1),jt()},"aria-label":`Close maximised I-V graph`,"aria-keyshortcuts":`Escape m`,title:`Return to simulation`,children:`×`})]})}),(0,h.jsxs)(`div`,{className:`fs-maximised-graph-canvas-wrap`,children:[(0,h.jsx)(`canvas`,{ref:n,width:658*T,height:499*T,className:`fs-maximised-graph-canvas`,role:`img`,"aria-label":`Maximised I-V characteristic graph`,onPointerMove:Rt,onPointerLeave:jt}),Ne?.surface===`maximised`&&(0,h.jsxs)(`div`,{className:`fs-iv-point-tooltip is-maximised${Ne.placeBelow?` is-below`:``}`,style:{left:`${Ne.left}px`,top:`${Ne.top}px`},role:`status`,children:[(0,h.jsx)(`span`,{children:`Voltage`}),(0,h.jsxs)(`strong`,{children:[Ne.voltage.toFixed(1),` V`]}),(0,h.jsx)(`span`,{children:`Current`}),(0,h.jsxs)(`strong`,{children:[Ne.current.toFixed(2),` A`]})]})]})]})}),we&&(0,h.jsx)(`div`,{className:`fs-circuit-modal-backdrop`,role:`presentation`,onMouseDown:e=>{e.target===e.currentTarget&&Ee(!1)},children:(0,h.jsxs)(`div`,{className:`fs-circuit-modal fs-density-modal fs-motion-mode-modal`,role:`dialog`,"aria-modal":`true`,"aria-labelledby":`fs-motion-mode-modal-title`,children:[(0,h.jsxs)(`div`,{className:`fs-circuit-modal-header`,children:[(0,h.jsx)(`h2`,{id:`fs-motion-mode-modal-title`,children:`Electron motion modes`}),(0,h.jsx)(`button`,{type:`button`,className:`fs-circuit-modal-close`,onClick:()=>Ee(!1),"aria-label":`Close electron motion modes explanation`,title:`Close`,children:`×`})]}),(0,h.jsxs)(`div`,{className:`fs-density-modal-body fs-motion-mode-modal-body`,children:[(0,h.jsxs)(`section`,{children:[(0,h.jsx)(`h3`,{children:`Simplified motion (default)`}),(0,h.jsx)(`p`,{children:`A smaller number of representative electrons move in a clear overall direction, so their acceleration, collisions and trails are easier to follow. The ammeter follows the expected filament I-V curve with a small amount of measurement variation, while the temperature follows the electrical power.`})]}),(0,h.jsxs)(`section`,{children:[(0,h.jsx)(`h3`,{children:`Detailed motion`}),(0,h.jsx)(`p`,{children:`Many more representative electrons repel each other and scatter. The current is directly computed from the net number of electrons crossing the filament over a rolling average of five seconds, and heating comes directly from the simulated collisions. The readings are therefore noisier and may not follow the expected curve as closely.`})]}),(0,h.jsxs)(`section`,{className:`fs-keyboard-shortcuts`,children:[(0,h.jsx)(`h3`,{children:`Keyboard shortcuts`}),(0,h.jsxs)(`dl`,{children:[(0,h.jsxs)(`div`,{children:[(0,h.jsx)(`dt`,{children:(0,h.jsx)(`kbd`,{children:`←`})}),(0,h.jsx)(`dd`,{children:`Decrease voltage by 0.5 V`})]}),(0,h.jsxs)(`div`,{children:[(0,h.jsx)(`dt`,{children:(0,h.jsx)(`kbd`,{children:`→`})}),(0,h.jsx)(`dd`,{children:`Increase voltage by 0.5 V`})]}),(0,h.jsxs)(`div`,{children:[(0,h.jsx)(`dt`,{children:(0,h.jsx)(`kbd`,{children:`X`})}),(0,h.jsx)(`dd`,{children:`Capture a data point`})]}),(0,h.jsxs)(`div`,{children:[(0,h.jsx)(`dt`,{children:(0,h.jsx)(`kbd`,{children:`T`})}),(0,h.jsx)(`dd`,{children:`Toggle the trend overlay`})]}),(0,h.jsxs)(`div`,{children:[(0,h.jsx)(`dt`,{children:(0,h.jsx)(`kbd`,{children:`M`})}),(0,h.jsx)(`dd`,{children:`Toggle the maximised graph`})]})]})]})]})]})}),Oe&&(0,h.jsx)(`div`,{className:`fs-circuit-modal-backdrop`,role:`presentation`,onMouseDown:e=>{e.target===e.currentTarget&&M(!1)},children:(0,h.jsxs)(`div`,{className:`fs-circuit-modal fs-density-modal fs-iv-explanation-modal`,role:`dialog`,"aria-modal":`true`,"aria-labelledby":`fs-iv-explanation-modal-title`,children:[(0,h.jsxs)(`div`,{className:`fs-circuit-modal-header`,children:[(0,h.jsx)(`h2`,{id:`fs-iv-explanation-modal-title`,children:`I-V graph explanation`}),(0,h.jsx)(`button`,{type:`button`,className:`fs-circuit-modal-close`,onClick:()=>M(!1),"aria-label":`Close I-V graph explanation`,title:`Close`,children:`×`})]}),(0,h.jsxs)(`div`,{className:`fs-density-modal-body fs-iv-explanation-modal-body`,tabIndex:0,"aria-label":`I-V graph explanation content`,onWheel:e=>{let t=e.currentTarget;t.scrollHeight>t.clientHeight&&(e.preventDefault(),e.stopPropagation(),t.scrollTop+=e.deltaY)},onKeyDown:e=>{let t=e.currentTarget,n=t.clientHeight*.85,r={ArrowDown:36,ArrowUp:-36,PageDown:n,PageUp:-n,Home:-t.scrollHeight,End:t.scrollHeight};Object.hasOwn(r,e.key)&&(e.preventDefault(),t.scrollTop+=r[e.key])},children:[(0,h.jsx)(`p`,{children:`An I-V characteristic shows how the current through a component changes as the potential difference across it changes. Potential difference is plotted on the horizontal axis in volts (V), and current is plotted on the vertical axis in amperes (A).`}),(0,h.jsx)(`p`,{children:`Set a potential difference, wait for the current to settle, and capture the reading. Repeating this at several positive and negative voltages builds the characteristic curve.`}),(0,h.jsx)(`p`,{children:`At lower voltages, the filament is cooler and its resistance changes relatively little, so the graph is approximately a straight line. At higher voltages, the current heats the filament. Its ions vibrate more, causing more collisions with the moving electrons, so the resistance increases. The current still rises, but by a smaller amount for each extra volt, making the graph curve and become less steep.`}),(0,h.jsx)(`p`,{children:`For any captured point, resistance can be calculated using R = V ÷ I. Because this graph plots current against voltage, a shallower gradient indicates a higher resistance.`}),(0,h.jsx)(`h3`,{children:`Summary`}),(0,h.jsxs)(`ul`,{children:[(0,h.jsx)(`li`,{children:`A filament lamp is non-ohmic: current is not directly proportional to potential difference.`}),(0,h.jsx)(`li`,{children:`As current increases, the filament gets hotter.`}),(0,h.jsx)(`li`,{children:`The metal ions gain energy and vibrate more.`}),(0,h.jsx)(`li`,{children:`Electrons collide with the vibrating ions more often.`}),(0,h.jsx)(`li`,{children:`This makes it harder for charge to flow, so the filament's resistance increases.`}),(0,h.jsx)(`li`,{children:`Current therefore increases at a decreasing rate, so the I-V curve becomes less steep.`}),(0,h.jsx)(`li`,{children:`Reversing the potential difference reverses the current, giving a symmetrical curve through the origin.`})]})]})]})})]})}function fn({minimised:e,onClick:t,label:n}){return(0,h.jsx)(`button`,{type:`button`,className:`fs-minimise-button`,onClick:t,"aria-label":`${e?`Expand`:`Minimise`} ${n}`,title:`${e?`Expand`:`Minimise`} ${n}`,style:{width:28,height:28,padding:0,borderRadius:7,border:`1px solid #c4ced6`,background:`#ffffff`,color:`#4d5b66`,fontSize:18,fontWeight:800,lineHeight:1,cursor:`pointer`,flex:`0 0 auto`},children:e?`+`:`−`})}function pn({current:e,minimised:t,onToggleMinimise:n}){let r=(-62+(Math.max(-5,Math.min(5,e))+5)/10*124)*Math.PI/180,i=180+Math.sin(r)*108,a=166-Math.cos(r)*108,o=[];for(let e=0;e<=20;e+=1){let t=-5+e*.5,n=-62+e/20*124,r=n*Math.PI/180,i=e%5==0,a=i?108:117;o.push({value:t,major:i,x1:180+Math.sin(r)*a,y1:166-Math.cos(r)*a,x2:180+Math.sin(r)*126,y2:166-Math.cos(r)*126,angle:n})}return(0,h.jsxs)(`div`,{className:`fs-instrument-card fs-analogue-card${t?` fs-collapsed`:``}`,style:{background:t?`#ffffff`:`#fbfaf5`,border:t?`1px solid #d6dee5`:`1px solid #c8c3b5`,borderRadius:12,padding:t?`8px 10px`:`10px 10px 8px`,minHeight:t?36:`auto`,boxSizing:`border-box`},children:[(0,h.jsx)(`div`,{style:{display:`flex`,alignItems:`center`,minHeight:18,paddingRight:28},children:(0,h.jsx)(`div`,{style:{fontSize:t?11:12,color:t?`#687782`:`#5c584e`,fontWeight:t?700:800,letterSpacing:t?0:`0.04em`,whiteSpace:`nowrap`,transform:t?void 0:`translateX(8px)`},children:t?`Analogue ammeter`:`ANALOGUE AMMETER`})}),(0,h.jsx)(`div`,{className:`fs-instrument-toggle`,children:(0,h.jsx)(fn,{minimised:t,onClick:n,label:`analogue ammeter`})}),!t&&(0,h.jsxs)(`svg`,{viewBox:`0 0 360 190`,role:`img`,"aria-label":`Analogue ammeter reading ${e.toFixed(2)} amperes`,style:{display:`block`,width:`100%`,height:108,marginTop:0,overflow:`visible`},children:[(0,h.jsx)(`defs`,{children:(0,h.jsxs)(`linearGradient`,{id:`ammeter-face`,x1:`0`,y1:`0`,x2:`0`,y2:`1`,children:[(0,h.jsx)(`stop`,{offset:`0%`,stopColor:`#fffef8`}),(0,h.jsx)(`stop`,{offset:`100%`,stopColor:`#f2eee1`})]})}),(0,h.jsxs)(`g`,{transform:`translate(0 -29)`,children:[(0,h.jsx)(`path`,{d:`M 34 164 A 146 130 0 0 1 326 164 L 326 184 L 34 184 Z`,fill:`url(#ammeter-face)`,stroke:`#8c8678`,strokeWidth:`3`}),o.map((e,t)=>(0,h.jsx)(`line`,{x1:e.x1,y1:e.y1,x2:e.x2,y2:e.y2,stroke:`#252525`,strokeWidth:e.major?3.5:1.8,strokeLinecap:`round`},t)),[-5,-2.5,0,2.5,5].map(e=>{let t=(-62+(e+5)/10*124)*Math.PI/180,n=180+Math.sin(t)*92,r=166-Math.cos(t)*92;return(0,h.jsx)(`text`,{x:n,y:r,textAnchor:`middle`,dominantBaseline:`middle`,fontSize:`20`,fontWeight:`800`,fontFamily:`Arial, Helvetica, sans-serif`,fill:`#171717`,stroke:`#fffef8`,strokeWidth:`3`,paintOrder:`stroke`,children:e===0?`0`:e.toFixed(e%1==0?0:1)},e)}),(0,h.jsx)(`text`,{x:`180`,y:`119`,textAnchor:`middle`,fontSize:`21`,fontWeight:`800`,fontFamily:`Arial, Helvetica, sans-serif`,fill:`#2d2d2d`,children:`A`}),(0,h.jsx)(`line`,{x1:180,y1:166,x2:i,y2:a,stroke:`#b3261e`,strokeWidth:`5`,strokeLinecap:`round`}),(0,h.jsx)(`circle`,{cx:180,cy:166,r:`13`,fill:`#2a2a2a`}),(0,h.jsx)(`circle`,{cx:180,cy:166,r:`5`,fill:`#d7d1c1`})]})]})]})}function mn({temperature:e}){let t=2e3,n=e=>124-e/t*104,r=n(Math.max(0,Math.min(t,e))),i=148-r;return(0,h.jsxs)(`svg`,{viewBox:`0 0 96 172`,role:`img`,"aria-label":`Thermometer reading ${e.toFixed(0)} degrees Celsius`,style:{width:42,height:114,display:`block`,flex:`0 0 auto`},children:[(0,h.jsx)(`rect`,{x:`7`,y:`12`,width:`18`,height:`136`,rx:`9`,fill:`#f7f9fa`,stroke:`#78858e`,strokeWidth:`3`}),(0,h.jsx)(`rect`,{x:`12`,y:r,width:`8`,height:i,rx:`4`,fill:`#d83b2d`}),(0,h.jsx)(`circle`,{cx:`16`,cy:`148`,r:`17`,fill:`#d83b2d`,stroke:`#78858e`,strokeWidth:`3`}),(0,h.jsx)(`circle`,{cx:`16`,cy:`148`,r:`9`,fill:`#f45a45`}),[0,250,500,750,1e3,1250,1500,1750,2e3].map(e=>{let t=n(e),r=e%500==0;return(0,h.jsxs)(`g`,{children:[(0,h.jsx)(`line`,{x1:`27`,y1:t,x2:r?35:31,y2:t,stroke:`#505d65`,strokeWidth:r?2:1.5}),r&&(0,h.jsx)(`text`,{x:`41`,y:t,fontSize:`14`,fontWeight:`700`,dominantBaseline:`middle`,fill:`#505d65`,children:e})]},e)})]})}function hn({temperature:e,minimised:t=!1,onToggleMinimise:n=null}){return(0,h.jsxs)(`div`,{className:`fs-instrument-card fs-temperature-card${t?` fs-collapsed`:``}`,style:{..._n,position:`relative`,padding:t?`8px 10px`:`10px 12px`,display:`flex`,alignItems:t?`stretch`:`center`,justifyContent:t?`stretch`:`space-between`,gap:4,overflow:`visible`,minHeight:t?36:0},children:[(0,h.jsxs)(`div`,{style:{minWidth:0,flex:`1 1 auto`,paddingRight:n?10:0,alignSelf:t?`auto`:`flex-start`,paddingTop:t?0:2,display:`flex`,flexDirection:`column`,alignItems:`center`,textAlign:`center`},children:[(0,h.jsxs)(`div`,{style:{fontSize:9,color:`#687782`,fontWeight:700,lineHeight:1.05,transform:t?void 0:`translateY(10px)`},children:[(0,h.jsx)(`span`,{style:{display:`block`},children:`Filament`}),(0,h.jsx)(`span`,{style:{display:`block`},children:`temperature`})]}),!t&&(0,h.jsxs)(h.Fragment,{children:[(0,h.jsxs)(`div`,{style:{marginTop:25,fontSize:19,fontWeight:800,fontFamily:`ui-monospace, SFMono-Regular, Menlo, monospace`,whiteSpace:`nowrap`},children:[e.toFixed(0),` °C`]}),(0,h.jsx)(`div`,{style:{marginTop:4,fontSize:11,color:`#87939c`},children:`ambient = 20 °C`})]})]}),!t&&(0,h.jsx)(mn,{temperature:e}),n&&(0,h.jsx)(`div`,{className:`fs-instrument-toggle`,style:{},children:(0,h.jsx)(fn,{minimised:t,onClick:n,label:`thermometer`})})]})}function gn({label:e,value:t,detail:n,minimised:r=!1,onToggleMinimise:i=null}){return(0,h.jsxs)(`div`,{className:`fs-instrument-card${r?` fs-collapsed`:``}`,style:{..._n,minHeight:r?36:_n.minHeight,padding:r?`8px 10px`:_n.padding},children:[(0,h.jsx)(`div`,{style:{display:`flex`,alignItems:`center`,minHeight:18,paddingRight:28},children:(0,h.jsx)(`div`,{style:{fontSize:e===`Digital ammeter`?9:11,color:`#687782`,fontWeight:700,lineHeight:1.05,letterSpacing:e===`Digital ammeter`?`-0.01em`:0,whiteSpace:`nowrap`},children:e})}),i&&(0,h.jsx)(`div`,{className:`fs-instrument-toggle`,children:(0,h.jsx)(fn,{minimised:r,onClick:i,label:`${e} digital readout`})}),!r&&(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(`div`,{className:`fs-readout-value`,style:{marginTop:5,fontSize:23,fontWeight:800,fontFamily:`ui-monospace, SFMono-Regular, Menlo, monospace`,whiteSpace:`nowrap`},children:t}),n&&(0,h.jsx)(`div`,{className:`fs-readout-detail`,style:{marginTop:4,fontSize:11,color:`#87939c`},children:n})]})]})}var _n={background:`#ffffff`,border:`1px solid #d6dee5`,borderRadius:12,padding:`12px 14px`,minHeight:76},vn={border:`1px solid #b8c3cc`,background:`#ffffff`,color:`#26333d`,borderRadius:9,padding:`9px 14px`,minHeight:40,fontSize:13,fontWeight:750,cursor:`pointer`},yn=`
  .fs-page,
  .fs-page * {
    box-sizing: border-box;
  }

  .fs-page {
    width: 100%;
    min-height: calc(100 * var(--fs-vh, 1vh));
    min-height: 100svh;
    margin: 0;
    padding: clamp(7px, calc(0.8 * var(--fs-vw, 1vw)), 12px) clamp(14px, calc(2 * var(--fs-vw, 1vw)), 28px);
    overflow-x: clip;
    background: #dfe5ea;
    color: #1f2933;
    font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont,
      "Segoe UI", sans-serif;
  }

  .fs-shell {
    width: 100%;
    margin: 0 auto;
    display: grid;
    gap: clamp(5px, calc(0.55 * var(--fs-vw, 1vw)), 8px);
  }

  /* Laptop and larger (see useFitToScreen.js): the page is laid out at a
     reference size and scaled up to fill the window, and the simulation is
     sized to fit that height too. The stage keeps a fixed shape
     (width ≈ 1.736 × height); 75px covers the page padding, header and
     footer line, with a few pixels to spare. */
  .fs-fit .fs-page {
    box-sizing: border-box;
    width: var(--fs-layout-w);
    min-height: var(--fs-layout-h);
    padding: 6px 12px;
    transform: scale(var(--fs-scale));
    transform-origin: 0 0;
  }

  .fs-fit .fs-shell {
    width: min(100%, calc((var(--fs-layout-h) - 75px) * 1.736));
  }

  /* Match the page colour so sub-pixel rounding never shows a dark edge. */
  html.fs-fit {
    background: #dfe5ea;
  }

  .fs-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: clamp(14px, calc(1.2 * var(--fs-vw, 1vw)), 18px);
    min-height: 25px;
    padding: 0 2px;
  }

  .fs-header h1 {
    min-width: 0;
    margin: 0;
    font-size: clamp(22px, calc(1.9 * var(--fs-vw, 1vw)), 30px);
    line-height: 1.05;
    letter-spacing: -0.02em;
    color: #19324a;
  }

  .fs-header p {
    max-width: 76ch;
    margin: 7px 0 0;
    color: #52606d;
    font-size: clamp(13px, calc(1 * var(--fs-vw, 1vw)), 15px);
    line-height: 1.45;
  }

  .fs-header-actions {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 7px;
    flex: 0 0 auto;
  }

  .fs-motion-mode-control {
    display: inline-flex;
    align-items: center;
    gap: 4px;
  }

  .fs-simplified-mode-toggle {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    min-height: 30px;
    padding: 4px 8px 4px 6px;
    border: 1px solid #aebdca;
    border-radius: 9px;
    background: rgba(244, 249, 253, 0.94);
    color: #29445a;
    font-size: clamp(9px, calc(0.68 * var(--fs-vw, 1vw)), 11px);
    font-weight: 750;
    line-height: 1;
    white-space: nowrap;
    cursor: pointer;
    user-select: none;
  }

  .fs-simplified-mode-toggle input {
    position: absolute;
    width: 1px;
    height: 1px;
    opacity: 0;
    pointer-events: none;
  }

  .fs-simplified-mode-track {
    position: relative;
    flex: 0 0 auto;
    width: 30px;
    height: 17px;
    border: 1px solid #8c9aa6;
    border-radius: 999px;
    background: #cbd4dc;
    transition: background 140ms ease, border-color 140ms ease;
  }

  .fs-simplified-mode-thumb {
    position: absolute;
    left: 2px;
    top: 2px;
    width: 11px;
    height: 11px;
    border-radius: 50%;
    background: #ffffff;
    box-shadow: 0 1px 3px rgba(31, 50, 65, 0.3);
    transition: transform 140ms ease;
  }

  .fs-simplified-mode-toggle input:checked + .fs-simplified-mode-track {
    border-color: #3e82b9;
    background: #579dd3;
  }

  .fs-simplified-mode-toggle input:checked + .fs-simplified-mode-track .fs-simplified-mode-thumb {
    transform: translateX(13px);
  }

  .fs-simplified-mode-toggle input:focus-visible + .fs-simplified-mode-track {
    outline: 3px solid rgba(77, 143, 200, 0.26);
    outline-offset: 2px;
  }

  .fs-motion-mode-info {
    display: inline-grid;
    place-items: center;
    width: 23px;
    height: 23px;
    padding: 0;
    border: 1px solid #aebdca;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.9);
    color: #526b7d;
    font: 800 13px/1 Georgia, serif;
    cursor: pointer;
  }

  .fs-motion-mode-info:hover {
    border-color: #7892a6;
    background: #f3f7fa;
    color: #24445d;
  }

  .fs-motion-mode-info:focus-visible {
    outline: 3px solid rgba(77, 143, 200, 0.26);
    outline-offset: 2px;
  }

  .fs-circuit-diagram-button {
    flex: 0 0 auto;
    border: 1px solid #9aa9b5;
    background: #ffffff;
    color: #19324a;
    border-radius: 8px;
    padding: 4px 10px;
    min-height: 27px;
    font-size: 11.5px;
    font-weight: 750;
    cursor: pointer;
  }

  .fs-circuit-diagram-button:hover {
    background: #f3f6f8;
  }

  .fs-circuit-diagram-button:focus-visible,
  .fs-circuit-modal-close:focus-visible {
    outline: 3px solid rgba(25, 50, 74, 0.28);
    outline-offset: 2px;
  }

  .fs-circuit-modal-backdrop {
    position: fixed;
    inset: 0;
    z-index: 1000;
    display: grid;
    place-items: center;
    padding: 24px;
    background: rgba(20, 28, 36, 0.58);
  }

  .fs-maximised-graph-backdrop {
    position: fixed;
    inset: 0;
    z-index: 1100;
    display: grid;
    place-items: center;
    padding: 22px;
    background: rgba(20, 28, 36, 0.68);
    backdrop-filter: blur(2px);
  }

  .fs-maximised-graph-dialog {
    width: min(calc(94 * var(--fs-vw, 1vw)), 1080px, calc((calc(92 * var(--fs-vh, 1vh)) - 64px) * 1.324));
    max-height: calc(92 * var(--fs-vh, 1vh));
    overflow: hidden;
    border: 1px solid rgba(192, 204, 213, 0.95);
    border-radius: 15px;
    background: #f8fafc;
    box-shadow: 0 28px 86px rgba(8, 15, 21, 0.44);
  }

  .fs-maximised-graph-toolbar {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 18px;
    min-height: 48px;
    padding: 7px 9px;
    border-bottom: 1px solid #d7e0e7;
    background: #f5f8fa;
  }

  .fs-maximised-graph-actions {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .fs-maximised-trend-toggle,
  .fs-maximised-graph-close {
    border: 1px solid #aab8c3;
    background: #ffffff;
    color: #3c5060;
    cursor: pointer;
  }

  .fs-maximised-trend-toggle {
    min-height: 30px;
    padding: 4px 10px;
    border-color: #8d78b8;
    border-radius: 7px;
    color: #5b3e97;
    font-size: 12px;
    font-weight: 750;
  }

  .fs-maximised-trend-toggle.is-active {
    background: #5b3e97;
    color: #ffffff;
  }

  .fs-maximised-graph-close {
    display: grid;
    place-items: center;
    width: 32px;
    height: 32px;
    padding: 0;
    border-radius: 8px;
    font-size: 21px;
    font-weight: 700;
    line-height: 1;
  }

  .fs-maximised-trend-toggle:hover,
  .fs-maximised-graph-close:hover {
    filter: brightness(0.96);
  }

  .fs-maximised-trend-toggle:focus-visible,
  .fs-maximised-graph-close:focus-visible {
    outline: 3px solid rgba(77, 143, 200, 0.28);
    outline-offset: 2px;
  }

  .fs-maximised-graph-canvas {
    display: block;
    width: 100%;
    height: auto;
    max-height: calc(calc(92 * var(--fs-vh, 1vh)) - 49px);
    background: #f8fafc;
    cursor: crosshair;
  }

  .fs-maximised-graph-canvas-wrap {
    position: relative;
  }

  .fs-iv-point-tooltip {
    position: absolute;
    z-index: 20;
    display: grid;
    grid-template-columns: auto auto;
    gap: 3px 6px;
    min-width: clamp(105px, calc(9 * var(--fs-vw, 1vw)), 112px);
    padding: clamp(6px, calc(0.55 * var(--fs-vw, 1vw)), 8px) clamp(7px, calc(0.65 * var(--fs-vw, 1vw)), 9px);
    border: 1px solid rgba(255, 255, 255, 0.22);
    border-radius: 8px;
    background: rgba(32, 42, 51, 0.96);
    color: #f7fafc;
    box-shadow: 0 7px 22px rgba(15, 22, 28, 0.3);
    font-size: clamp(10px, calc(0.8 * var(--fs-vw, 1vw)), 13px);
    line-height: 1.25;
    font-variant-numeric: tabular-nums;
    pointer-events: none;
    transform: translate(-50%, calc(-100% - 12px));
  }

  .fs-iv-point-tooltip::after {
    content: "";
    position: absolute;
    left: 75%;
    bottom: -7px;
    width: 12px;
    height: 12px;
    border-right: 1px solid rgba(255, 255, 255, 0.22);
    border-bottom: 1px solid rgba(255, 255, 255, 0.22);
    background: rgba(32, 42, 51, 0.96);
    transform: translateX(-50%) rotate(45deg);
  }

  .fs-iv-point-tooltip.is-below {
    transform: translate(-50%, 12px);
  }

  .fs-iv-point-tooltip.is-below::after {
    top: -7px;
    bottom: auto;
    left: 25%;
    border: 0;
    border-top: 1px solid rgba(255, 255, 255, 0.22);
    border-left: 1px solid rgba(255, 255, 255, 0.22);
  }

  .fs-iv-point-tooltip span {
    color: #bdcbd5;
  }

  .fs-iv-point-tooltip strong {
    text-align: right;
    color: #ffffff;
    white-space: nowrap;
  }

  .fs-iv-point-tooltip.is-maximised {
    min-width: 179px;
    padding: 13px 14px;
    border-width: 2px;
    border-radius: 13px;
    gap: 5px 10px;
    box-shadow: 0 11px 35px rgba(15, 22, 28, 0.3);
    font-size: 21px;
    transform: translate(-50%, calc(-100% - 19px));
  }

  .fs-iv-point-tooltip.is-maximised::after {
    bottom: -11px;
    width: 19px;
    height: 19px;
    border-right-width: 2px;
    border-bottom-width: 2px;
  }

  .fs-iv-point-tooltip.is-maximised.is-below {
    transform: translate(-50%, 19px);
  }

  .fs-iv-point-tooltip.is-maximised.is-below::after {
    top: -11px;
    bottom: auto;
    border-top-width: 2px;
    border-left-width: 2px;
  }

  .fs-circuit-modal {
    width: min(calc(92 * var(--fs-vw, 1vw)), 620px);
    max-height: min(calc(88 * var(--fs-vh, 1vh)), 720px);
    overflow: hidden;
    border: 1px solid #c7d1d9;
    border-radius: 16px;
    background: #ffffff;
    box-shadow: 0 24px 70px rgba(20, 28, 36, 0.28);
  }

  .fs-circuit-modal-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
    padding: 12px 14px;
    border-bottom: 1px solid #dbe2e8;
    background: #f7f9fb;
  }

  .fs-circuit-modal-header h2 {
    margin: 0;
    color: #19324a;
    font-size: 17px;
    line-height: 1.2;
  }

  .fs-circuit-modal-close {
    width: 34px;
    height: 34px;
    padding: 0;
    border: 1px solid #bfcbd4;
    border-radius: 8px;
    background: #ffffff;
    color: #465762;
    font-size: 24px;
    font-weight: 700;
    line-height: 1;
    cursor: pointer;
  }

  .fs-circuit-modal-body {
    display: grid;
    place-items: center;
    padding: clamp(18px, calc(3 * var(--fs-vw, 1vw)), 34px);
    overflow: auto;
    background: #ffffff;
  }

  .fs-circuit-diagram-image {
    display: block;
    width: min(100%, 460px);
    height: auto;
    max-height: calc(62 * var(--fs-vh, 1vh));
    object-fit: contain;
  }

  .fs-density-modal {
    width: min(calc(92 * var(--fs-vw, 1vw)), 560px);
  }

  .fs-density-modal-body {
    padding: clamp(18px, calc(2.3 * var(--fs-vw, 1vw)), 28px);
    color: #344554;
    font-size: clamp(14px, calc(1 * var(--fs-vw, 1vw)), 16px);
    line-height: 1.55;
  }

  .fs-density-modal-body p {
    margin: 0 0 12px;
  }

  .fs-density-modal-body p:last-child {
    margin-bottom: 0;
  }

  .fs-motion-mode-modal-body section + section {
    margin-top: 18px;
    padding-top: 18px;
    border-top: 1px solid #dbe4ea;
  }

  .fs-motion-mode-modal-body h3 {
    margin: 0 0 6px;
    color: #193f5b;
    font-size: 16px;
    line-height: 1.25;
  }

  .fs-motion-mode-modal-body section p {
    margin: 0;
  }

  .fs-keyboard-shortcuts dl {
    display: grid;
    gap: 7px;
    margin: 0;
  }

  .fs-keyboard-shortcuts dl > div {
    display: grid;
    grid-template-columns: 36px 1fr;
    align-items: center;
    gap: 9px;
  }

  .fs-keyboard-shortcuts dt,
  .fs-keyboard-shortcuts dd {
    margin: 0;
  }

  .fs-keyboard-shortcuts kbd {
    display: inline-grid;
    min-width: 30px;
    min-height: 27px;
    place-items: center;
    padding: 1px 6px;
    border: 1px solid #b5c5d0;
    border-bottom-width: 2px;
    border-radius: 6px;
    background: #f8fbfd;
    color: #193f5b;
    font: 700 14px/1 system-ui, sans-serif;
    box-shadow: 0 1px 1px rgba(22, 57, 82, 0.08);
  }

  .fs-keyboard-shortcuts dd {
    color: #36576e;
  }

  .fs-motion-mode-note {
    margin-top: 18px !important;
    padding: 11px 12px;
    border-radius: 9px;
    background: #edf5fa;
    color: #36576e;
    font-size: 0.94em;
  }

  .fs-iv-explanation-modal {
    display: flex;
    flex-direction: column;
    width: min(calc(92 * var(--fs-vw, 1vw)), 650px);
    max-height: min(calc(88 * var(--fs-vh, 1vh)), 720px);
  }

  .fs-iv-explanation-modal-body {
    display: block;
    flex: 1 1 auto;
    min-height: 0;
    max-height: none;
    overflow-y: auto;
    scrollbar-gutter: stable;
    scrollbar-width: thin;
    scrollbar-color: #9aa9b5 #eef2f5;
    text-align: left;
  }

  .fs-iv-explanation-modal-body::-webkit-scrollbar {
    width: 10px;
  }

  .fs-iv-explanation-modal-body::-webkit-scrollbar-track {
    background: #eef2f5;
    border-radius: 999px;
  }

  .fs-iv-explanation-modal-body::-webkit-scrollbar-thumb {
    border: 2px solid #eef2f5;
    border-radius: 999px;
    background: #9aa9b5;
  }

  .fs-iv-explanation-modal-body h3 {
    margin: 18px 0 8px;
    color: #19324a;
    font-size: 16px;
  }

  .fs-iv-explanation-modal-body ul {
    margin: 0;
    padding-left: 22px;
  }

  .fs-iv-explanation-modal-body li + li {
    margin-top: 5px;
  }

  .fs-panel,
  .fs-stage-card {
    border: 1px solid #cbd5df;
    border-radius: 16px;
    box-shadow: 0 8px 24px rgba(31, 41, 51, 0.08);
  }

  .fs-control-panel {
    padding: clamp(14px, calc(1.35 * var(--fs-vw, 1vw)), 20px);
    background: #f8fafc;
  }

  .fs-control-layout {
    display: grid;
    grid-template-columns: 190px minmax(0, 1fr);
    align-items: center;
    gap: clamp(16px, calc(2 * var(--fs-vw, 1vw)), 30px);
  }

  .fs-voltage-control {
    min-width: 0;
  }

  .fs-voltage-heading {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    gap: 16px;
    font-size: 14px;
  }

  .fs-voltage-value {
    flex: 0 0 auto;
    font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
    font-size: 17px;
    font-weight: 800;
  }

  .fs-voltage-stepper {
    display: grid;
    grid-template-columns: auto minmax(0, 1fr) auto;
    align-items: start;
    gap: 7px;
    margin-top: 7px;
  }

  .fs-voltage-step-button {
    position: relative;
    z-index: 2;
    width: 30px;
    height: 30px;
    padding: 0;
    border: 1px solid #b8c3cc;
    border-radius: 7px;
    background: #ffffff;
    color: #26333d;
    font-size: 19px;
    font-weight: 800;
    line-height: 1;
    cursor: pointer;
    will-change: transform, box-shadow;
  }

  .fs-voltage-step-button:hover:not(:disabled) {
    background: #eef3f6;
  }

  .fs-voltage-step-button:disabled {
    opacity: 0.4;
    cursor: default;
  }

  .fs-voltage-step-button:focus-visible {
    outline: 3px solid rgba(25, 50, 74, 0.24);
    outline-offset: 2px;
  }

  .fs-slider-wrap {
    position: relative;
    margin-top: 11px;
    padding-bottom: 22px;
  }

  .fs-slider-zero-tick {
    position: absolute;
    left: 50%;
    top: 18px;
    width: 2px;
    height: 8px;
    transform: translateX(-50%);
    border-radius: 1px;
    background: #7c8790;
  }

  .fs-slider-zero-label {
    position: absolute;
    left: 50%;
    top: 27px;
    transform: translateX(-50%);
    color: #667581;
    font-size: 11px;
    font-weight: 700;
    white-space: nowrap;
  }

  .fs-control-detail {
    margin-top: 4px;
    color: #667581;
    font-size: 12px;
  }

  .fs-actions {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 8px;
    flex-wrap: wrap;
  }

  .fs-instrument-card {
    min-width: 0;
    min-height: 0;
    height: 100%;
    box-sizing: border-box;
  }

  .fs-analogue-card {
    min-width: 0;
    min-height: 0;
    display: flex;
    flex-direction: column;
    overflow: hidden;
  }

  .fs-stage-card {
    position: relative;
    width: 100%;
    overflow: hidden;
    background: #ffffff;
  }

  .fs-stage-controls {
    position: absolute;
    z-index: 4;
    left: 1.5%;
    top: ${O/w*100}%;
    width: calc(23.625% + 16px);
    height: 98px;
    box-sizing: border-box;
    padding: 7px 9px;
    display: grid;
    grid-template-columns: minmax(0, 1fr);
    grid-template-rows: auto auto;
    gap: 6px;
    align-content: center;
    border: 1px solid rgba(203, 213, 223, 0.92);
    border-radius: 10px;
    background: rgba(248, 250, 252, 0.94);
    backdrop-filter: blur(3px);
    box-shadow: 0 3px 10px rgba(31, 41, 51, 0.065);
  }

  .fs-stage-controls .fs-voltage-control {
    display: grid;
    grid-template-columns: 74px minmax(0, 1fr);
    align-items: center;
    gap: 8px;
    transform: none;
  }

  .fs-stage-controls .fs-voltage-heading {
    width: auto;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 3px;
    color: #354655;
    font-size: 10.5px;
    font-weight: 400;
    line-height: 1.1;
    white-space: normal;
  }

  .fs-stage-controls .fs-voltage-heading strong {
    font-weight: 400;
  }

  .fs-stage-controls .fs-voltage-value {
    width: 64px;
    padding: 2px 5px;
    border: 1px solid #9fc5ed;
    border-radius: 4px;
    background: #eaf4ff;
    color: #174f7a;
    font-size: 14px;
    font-variant-numeric: tabular-nums;
    text-align: center;
  }

  .fs-stage-controls .fs-slider-wrap {
    width: 100%;
    min-width: 0;
    max-width: none;
    margin-top: 0;
    padding-bottom: 18px;
  }

  .fs-stage-controls .fs-voltage-stepper {
    grid-template-columns: 24px minmax(0, 1fr) 24px;
    width: 100%;
    margin-top: 0;
    gap: 7px;
  }

  .fs-stage-controls .fs-voltage-stepper .fs-slider-wrap {
    width: 100%;
    min-width: 0;
    max-width: none;
  }

  .fs-stage-controls .fs-slider-rail {
    position: absolute;
    z-index: 0;
    left: 0;
    right: 0;
    top: 6px;
    height: 6px;
    border: 1px solid rgba(82, 103, 120, 0.34);
    border-radius: 999px;
    background: linear-gradient(
      to right,
      #d4dde5 0%,
      #d4dde5 var(--slider-active-start),
      #6ea8dc var(--slider-active-start),
      #6ea8dc var(--slider-active-end),
      #d4dde5 var(--slider-active-end),
      #d4dde5 100%
    );
    pointer-events: none;
  }

  .fs-stage-controls .fs-slider-thumb {
    position: absolute;
    z-index: 1;
    left: var(--slider-thumb-position);
    top: 1.5px;
    width: 15px;
    height: 15px;
    transform: translateX(-50%);
    border: 2px solid #4d8fc8;
    border-radius: 50%;
    background: #fafdff;
    box-shadow: 0 1px 3px rgba(31, 50, 65, 0.26);
    pointer-events: none;
  }

  .fs-stage-controls .fs-slider-hit-area {
    position: absolute;
    z-index: 2;
    left: -${Ce}px;
    right: -${Ce}px;
    top: -7px;
    height: 32px;
    border: 0;
    border-radius: 999px;
    background: transparent;
    cursor: pointer;
    touch-action: none;
  }

  .fs-stage-controls .fs-slider-hit-area:focus-visible {
    outline: 3px solid rgba(77, 143, 200, 0.24);
    outline-offset: -2px;
  }

  .fs-stage-controls .fs-voltage-step-button {
    width: 24px;
    height: 24px;
    border-radius: 6px;
    font-size: 16px;
    transform: none;
  }

  .fs-stage-controls .fs-slider-zero-tick {
    top: 15px;
    width: 1px;
    height: 4px;
    background: #607484;
  }

  .fs-stage-controls .fs-slider-zero-label {
    top: 19px;
    font-size: 9px;
    line-height: 1;
  }

  .fs-stage-controls .fs-control-detail {
    margin-top: 0;
    font-size: clamp(7px, calc(0.62 * var(--fs-vw, 1vw)), 10px);
  }

  .fs-stage-controls .fs-actions {
    display: grid;
    grid-template-columns: minmax(100px, 1.55fr) minmax(50px, 0.75fr) minmax(56px, 0.85fr);
    align-items: center;
    justify-content: stretch;
    gap: 4px;
    min-width: 0;
    padding-top: 5px;
    border-top: 1px solid rgba(203, 213, 223, 0.72);
  }

  .fs-stage-controls .fs-actions button {
    width: 100%;
    min-height: 28px !important;
    white-space: nowrap;
    padding: 3px 5px !important;
    font-size: 10.5px !important;
    border-radius: 6px !important;
  }

  .fs-stage-controls .fs-clear-data-button {
    border-color: #c9d1d8 !important;
    background: #f8fafb !important;
    color: #667581 !important;
  }

  .fs-stage-controls .fs-control-side {
    display: block;
    width: 100%;
    min-width: 0;
    justify-self: stretch;
  }

  .fs-stage-controls .fs-control-side .fs-control-detail {
    margin: 0;
    padding: 0 2px;
    text-align: right;
    white-space: nowrap;
    font-size: clamp(7px, calc(0.56 * var(--fs-vw, 1vw)), 9px);
    line-height: 1.15;
    font-variant-numeric: tabular-nums;
  }

  .fs-stage-wrap {
    position: relative;
    width: 100%;
  }

  .fs-stage {
    display: block;
    width: 100%;
    height: auto;
    aspect-ratio: ${C} / ${w};
  }

  .fs-microscopic-overlay {
    position: absolute;
    z-index: 2;
    inset: 0;
    display: block;
    width: 100%;
    height: auto;
    aspect-ratio: ${C} / ${w};
    pointer-events: none;
  }

  .fs-particle-key {
    position: absolute;
    z-index: 4;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    gap: 9px;
    min-height: 16px;
    padding: 4px 7px;
    border: 1px solid rgba(177, 193, 204, 0.72);
    border-radius: 10px;
    background: rgba(247, 250, 252, 0.88);
    box-shadow: 0 2px 7px rgba(20, 31, 39, 0.18);
    color: #243d50;
    font: 750 9px/1 system-ui, sans-serif;
    pointer-events: none;
    white-space: nowrap;
  }

  .fs-particle-key-item {
    display: inline-flex;
    align-items: center;
    gap: 4px;
  }

  .fs-particle-key-ion {
    width: 15px;
    height: 15px;
    flex: 0 0 auto;
    border-radius: 50%;
    background: radial-gradient(
      circle at 32% 28%,
      #e2e6e9 0%,
      #7b848c 45%,
      #404950 100%
    );
    box-shadow: 0 0 3px rgba(177, 188, 196, 0.48);
  }

  .fs-particle-key-electron {
    position: relative;
    width: 8px;
    height: 8px;
    flex: 0 0 auto;
    border-radius: 50%;
    background: radial-gradient(
      circle at 34% 30%,
      #ecfdff 0%,
      #58d5ff 45%,
      #0878b6 100%
    );
    box-shadow: 0 0 5px rgba(50, 198, 255, 0.9);
  }

  .fs-circuit-context {
    position: absolute;
    z-index: 2;
    left: calc(1.8125% + ${$e/C*100}%);
    top: calc(37.24% + ${et/w*100}% - 1px);
    width: 27%;
    height: auto;
    pointer-events: none;
    user-select: none;
  }

  .fs-circuit-context-image {
    display: block;
    width: 100%;
    height: auto;
  }

  .fs-battery-positive-marker {
    position: absolute;
    z-index: 1;
    top: 68.5%;
    width: 20px;
    height: 22px;
    display: grid;
    place-items: center;
    transform: translate(-50%, -50%);
    color: #111111;
    font-family: Arial, sans-serif;
    font-size: 22px;
    font-weight: 600;
    line-height: 1;
  }

  .fs-battery-positive-marker.is-left {
    left: 34.7%;
  }

  .fs-battery-positive-marker.is-right {
    left: 72.3%;
  }

  .fs-circuit-bulb {
    position: absolute;
    z-index: 3;
    left: calc(11.5625% + ${$e/C*100}%);
    top: calc(24.07% + ${et/w*100}%);
    width: 9.375%;
    height: auto;
    pointer-events: none;
    user-select: none;
  }

  .fs-circuit-bulb-glow {
    position: absolute;
    z-index: 0;
    inset: -34% -64% -2%;
    border-radius: 50%;
    background: radial-gradient(
      circle at 50% 48%,
      rgba(255, var(--bulb-core-green), var(--bulb-core-blue), 1) 0%,
      rgba(255, var(--bulb-glow-green), var(--bulb-glow-blue), 0.92) 24%,
      rgba(255, var(--bulb-outer-green), var(--bulb-outer-blue), 0.55) 51%,
      rgba(255, var(--bulb-outer-green), var(--bulb-outer-blue), 0.2) 72%,
      rgba(255, var(--bulb-outer-green), var(--bulb-outer-blue), 0) 100%
    );
    filter: blur(14px);
    transform-origin: 50% 48%;
    transition: opacity 120ms linear, transform 120ms linear;
  }

  .fs-circuit-bulb-glow::after {
    content: "";
    position: absolute;
    inset: 24% 31% 35%;
    border-radius: 50%;
    background: rgba(255, var(--bulb-core-green), var(--bulb-core-blue), 0.98);
    filter: blur(7px);
  }

  .fs-circuit-bulb-image {
    position: relative;
    z-index: 1;
    display: block;
    width: 100%;
    height: auto;
    transition: filter 120ms linear;
  }

  .fs-circuit-bulb-filament-glow {
    position: absolute;
    z-index: 2;
    inset: 0;
    width: 100%;
    height: 100%;
    overflow: visible;
    pointer-events: none;
    transition: opacity 120ms linear, filter 120ms linear;
  }

  .fs-circuit-bulb-filament-glow path {
    fill: none;
    stroke-linecap: round;
    stroke-linejoin: round;
    vector-effect: non-scaling-stroke;
  }

  .fs-circuit-bulb-filament-glow .fs-filament-aura {
    stroke: rgba(255, var(--filament-aura-green), var(--filament-aura-blue), 0.88);
    stroke-width: 8;
  }

  .fs-circuit-bulb-filament-glow .fs-filament-core {
    stroke: rgb(255, var(--filament-core-green), var(--filament-core-blue));
    stroke-width: 3.1;
  }

  .fs-flow-directions {
    position: absolute;
    z-index: 4;
    box-sizing: border-box;
    padding: 5px 7px 6px;
    border: 1px solid rgba(165, 181, 194, 0.8);
    border-radius: 10px;
    background: rgba(255, 255, 255, 0.92);
    box-shadow: 0 4px 12px rgba(31, 50, 65, 0.08);
    pointer-events: none;
  }

  .fs-flow-heading {
    margin-bottom: 3px;
    color: #536675;
    font: 800 7px/1 system-ui, sans-serif;
    letter-spacing: 0.08em;
    text-align: center;
  }

  .fs-flow-row {
    display: grid;
    grid-template-columns: 84px minmax(0, 1fr);
    align-items: center;
    gap: 7px;
    min-height: 17px;
    font: 750 11px/1 system-ui, sans-serif;
  }

  .fs-flow-row + .fs-flow-row {
    margin-top: 1px;
  }

  .fs-current-flow {
    color: #a7195b;
  }

  .fs-electron-flow {
    color: #1679a8;
  }

  .fs-flow-arrow {
    display: block;
    width: 100%;
    height: 14px;
    overflow: visible;
    transform-origin: center;
  }

  .fs-flow-arrow.is-left {
    transform: scaleX(-1);
  }

  .fs-flow-arrow path {
    fill: none;
    stroke: currentColor;
    stroke-width: 2;
    stroke-linecap: round;
    stroke-linejoin: round;
    vector-effect: non-scaling-stroke;
  }

  .fs-no-flow {
    color: #758692;
    font-size: 10px;
    font-weight: 700;
    text-align: center;
  }

  .fs-flow-directions.is-stopped .fs-flow-row {
    color: #758692;
  }

  .fs-terminal-directions {
    position: absolute;
    z-index: 4;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 8px;
    min-height: 26px;
    padding: 5px 8px;
    border: 1px solid rgba(164, 179, 191, 0.72);
    border-radius: 999px;
    background: rgba(255, 255, 255, 0.92);
    box-shadow: 0 3px 9px rgba(31, 50, 65, 0.08);
    color: #52636f;
    font: 750 10px/1 system-ui, sans-serif;
    letter-spacing: 0.01em;
    pointer-events: none;
    white-space: nowrap;
  }

  .fs-terminal-directions .is-positive {
    color: #9f1657;
  }

  .fs-terminal-directions .is-negative {
    color: #274c69;
  }

  .fs-terminal-directions .is-neutral {
    color: #64747f;
  }

  .fs-zoom-leaders {
    position: absolute;
    z-index: 1;
    inset: 0;
    width: 100%;
    height: 100%;
    overflow: visible;
    pointer-events: none;
  }

  .fs-zoom-leaders path {
    fill: none;
    stroke: #a7195b;
    stroke-width: 2;
    vector-effect: non-scaling-stroke;
  }

  .fs-zoom-leaders .fs-zoom-wedge {
    fill: rgba(185, 48, 72, 0.075);
    stroke: none;
  }

  .fs-zoom-leaders circle {
    fill: rgba(167, 25, 91, 0.12);
    stroke: #a7195b;
    stroke-width: 2;
    vector-effect: non-scaling-stroke;
  }

  .fs-trend-overlay-toggle {
    position: absolute;
    z-index: 4;
    height: 18px;
    padding: 0 8px;
    border: 1px solid #8d78b8;
    border-radius: 5px;
    background: #ffffff;
    color: #5b3e97;
    font: 700 9px/1 system-ui, sans-serif;
    cursor: pointer;
    white-space: nowrap;
    transform: translateX(-100%);
  }

  .fs-trend-overlay-toggle.is-active {
    background: #5b3e97;
    color: #ffffff;
  }

  .fs-trend-overlay-toggle:focus-visible {
    outline: 2px solid #8fc2f7;
    outline-offset: 2px;
  }

  .fs-maximise-iv-button {
    position: absolute;
    z-index: 4;
    display: grid;
    place-items: center;
    width: 18px;
    height: 18px;
    padding: 0;
    border: 1px solid #c4ced6;
    border-radius: 5px;
    background: #ffffff;
    color: #4d5b66;
    cursor: pointer;
    transform: translateX(-100%);
  }

  .fs-maximise-iv-button:hover {
    border-color: #8fa0ad;
    background: #eef3f6;
    color: #253b4b;
  }

  .fs-maximise-iv-button:focus-visible {
    outline: 2px solid #8fc2f7;
    outline-offset: 2px;
  }

  .fs-maximise-iv-button svg {
    width: 12px;
    height: 12px;
  }

  .fs-maximise-iv-button path {
    fill: none;
    stroke: currentColor;
    stroke-width: 1.6;
    stroke-linecap: round;
    stroke-linejoin: round;
  }


  .fs-history-toggle {
    position: absolute;
    z-index: 4;
    width: 18px;
    height: 18px;
    transform: translateX(-100%);
  }

  .fs-history-toggle .fs-minimise-button {
    width: 18px !important;
    height: 18px !important;
    min-width: 18px !important;
    min-height: 18px !important;
    padding: 0 !important;
    border: 1px solid #c4ced6 !important;
    border-radius: 5px !important;
    background: #ffffff !important;
    color: #4d5b66 !important;
    font-size: 12px !important;
    font-weight: 800 !important;
    line-height: 1 !important;
    display: grid !important;
    place-items: center !important;
  }

  .fs-stage-instruments {
    position: absolute;
    left: ${se/C*100}%;
    width: ${ce/C*100}%;
    height: ${A/w*100}%;
    box-sizing: border-box;
    padding: 0;
    display: grid;
    grid-template-columns: minmax(0, 1.08fr) minmax(0, 0.82fr) minmax(0, 1.1fr);
    gap: clamp(4px, calc(0.4 * var(--fs-vw, 1vw)), 7px);
    align-items: stretch;
    overflow: visible;
  }

  .fs-stage-instruments .fs-instrument-card {
    position: relative;
    border-radius: clamp(6px, calc(0.6 * var(--fs-vw, 1vw)), 10px) !important;
    padding: clamp(3px, calc(0.3 * var(--fs-vw, 1vw)), 5px) !important;
    min-height: 0 !important;
    box-sizing: border-box !important;
  }

  .fs-stage-instruments .fs-instrument-toggle {
    position: absolute;
    top: 5px;
    right: 5px;
    z-index: 3;
    width: 18px;
    height: 18px;
  }

  .fs-stage-instruments .fs-instrument-card:not(.fs-collapsed) {
    height: 100% !important;
  }

  .fs-stage-instruments .fs-instrument-card.fs-collapsed {
    height: clamp(30px, calc(2.6 * var(--fs-vw, 1vw)), 36px) !important;
    min-height: clamp(30px, calc(2.6 * var(--fs-vw, 1vw)), 36px) !important;
    align-self: start;
    overflow: hidden;
    padding: clamp(4px, calc(0.32 * var(--fs-vw, 1vw)), 6px) !important;
  }

  .fs-stage-instruments .fs-instrument-card.fs-collapsed > div:first-child {
    width: 100%;
    height: 100%;
    min-height: 0 !important;
    display: flex !important;
    align-items: center !important;
    justify-content: space-between !important;
    gap: 8px !important;
  }

  .fs-stage-instruments .fs-instrument-card.fs-collapsed > div:first-child > div:first-child {
    font-size: clamp(10px, calc(0.75 * var(--fs-vw, 1vw)), 12px) !important;
    line-height: 1.05 !important;
    font-weight: 700 !important;
    color: #687782 !important;
    letter-spacing: 0 !important;
    white-space: nowrap !important;
  }

  .fs-stage-instruments .fs-instrument-card > div:first-child {
    font-size: clamp(8px, calc(0.62 * var(--fs-vw, 1vw)), 10px) !important;
    gap: 4px !important;
  }

  .fs-stage-instruments .fs-minimise-button {
    width: 18px !important;
    height: 18px !important;
    min-width: 18px !important;
    min-height: 18px !important;
    padding: 0 !important;
    border: 1px solid #c4ced6 !important;
    border-radius: 5px !important;
    background: #ffffff !important;
    color: #4d5b66 !important;
    font-size: 12px !important;
    font-weight: 800 !important;
    line-height: 1 !important;
    display: grid !important;
    place-items: center !important;
  }

  .fs-stage-instruments .fs-analogue-card > div:first-child,
  .fs-stage-instruments .fs-instrument-card > div:first-child {
    min-width: 0;
  }

  .fs-stage-instruments .fs-analogue-card > div:first-child > div:first-child {
    font-size: clamp(8px, calc(0.62 * var(--fs-vw, 1vw)), 10px) !important;
    letter-spacing: 0.025em !important;
    white-space: nowrap;
  }

  .fs-stage-instruments .fs-analogue-card:not(.fs-collapsed) {
    padding-inline: 0 !important;
  }

  .fs-stage-instruments .fs-analogue-card svg {
    width: 110% !important;
    height: auto !important;
    min-height: 0;
    flex: 1 1 auto;
    max-height: 114px;
    margin-top: 2px !important;
    transform: translateX(-4.55%);
  }

  .fs-stage-readouts {
    min-width: 0;
    min-height: 0;
    height: 100%;
    display: grid;
    grid-template-rows: repeat(2, minmax(0, 1fr));
    gap: clamp(3px, calc(0.3 * var(--fs-vw, 1vw)), 5px);
  }

  .fs-stage-instruments .fs-stage-readouts .fs-instrument-card {
    overflow: hidden;
  }

  .fs-stage-instruments .fs-stage-readouts .fs-instrument-card:not(.fs-collapsed) {
    min-height: 0 !important;
    height: 100% !important;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding-top: clamp(3px, calc(0.26 * var(--fs-vw, 1vw)), 4px) !important;
    padding-bottom: clamp(3px, calc(0.26 * var(--fs-vw, 1vw)), 4px) !important;
  }

  .fs-stage-instruments .fs-stage-readouts .fs-readout-value {
    margin-top: 2px !important;
    font-size: clamp(11px, calc(0.9 * var(--fs-vw, 1vw)), 15px) !important;
    line-height: 1.05 !important;
  }

  .fs-stage-instruments .fs-stage-readouts .fs-readout-detail {
    margin-top: 1px !important;
    font-size: clamp(7px, calc(0.52 * var(--fs-vw, 1vw)), 9px) !important;
    line-height: 1.05 !important;
    white-space: nowrap;
  }

  .fs-stage-instruments > .fs-instrument-card:last-child {
    align-self: stretch;
    min-width: 0;
    min-height: 0;
    width: 100%;
    overflow: visible;
    padding-inline: clamp(3px, calc(0.26 * var(--fs-vw, 1vw)), 5px) !important;
  }

  .fs-stage-instruments > .fs-instrument-card:last-child svg {
    width: clamp(56px, calc(4.6 * var(--fs-vw, 1vw)), 72px) !important;
    height: auto !important;
    max-height: 120px;
    flex: 0 1 120px;
    transform: translate(-15px, 4px);
    overflow: visible;
  }

  .fs-stage-instruments > .fs-instrument-card:last-child > div > div:nth-child(2) {
    font-size: clamp(11px, calc(0.95 * var(--fs-vw, 1vw)), 15px) !important;
    line-height: 1.05 !important;
  }

  .fs-stage-instruments > .fs-instrument-card:last-child > div > div:nth-child(3) {
    font-size: clamp(6px, calc(0.5 * var(--fs-vw, 1vw)), 8px) !important;
    line-height: 1.1 !important;
  }

  .fs-status {
    display: flex;
    justify-content: space-between;
    gap: 10px 18px;
    flex-wrap: wrap;
    padding: 0 2px 2px;
    color: #5b6872;
    font-size: 12px;
    line-height: 1.4;
  }

  @media (max-width: 820px) {
    .fs-header {
      align-items: flex-start;
      flex-wrap: wrap;
    }

    .fs-header-actions {
      flex-wrap: wrap;
    }

    .fs-circuit-diagram-button {
      min-height: 34px;
    }

    .fs-circuit-modal-backdrop {
      padding: 12px;
    }

    .fs-circuit-modal {
      width: min(calc(96 * var(--fs-vw, 1vw)), 620px);
    }

    .fs-control-layout {
      grid-template-columns: 1fr;
    }

    .fs-actions {
      justify-content: flex-start;
    }

    .fs-stage-controls {
      position: static;
      width: auto;
      height: auto;
      margin: 10px;
      padding: 10px 12px;
      grid-template-columns: 1fr;
      box-shadow: none;
      backdrop-filter: none;
    }

    .fs-stage-controls .fs-slider-wrap {
      width: 100%;
      min-width: 0;
    }

    .fs-stage-controls .fs-actions {
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      justify-content: stretch;
      min-width: 0;
    }

    .fs-stage-controls .fs-control-side {
      width: 100%;
    }

    .fs-stage-controls .fs-control-side .fs-control-detail {
      text-align: left;
      white-space: normal;
    }
  }

  @media (max-width: 680px) {
    .fs-page {
      padding: 10px;
    }

    .fs-shell {
      gap: 10px;
    }

    .fs-actions {
      display: grid;
      grid-template-columns: 1fr;
    }

    .fs-actions button {
      width: 100%;
    }
  }

  @media (max-width: 680px) {
    .fs-stage-controls .fs-actions {
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
    .fs-stage-controls .fs-actions button {
      width: 100%;
      padding-inline: 6px !important;
    }

  }
`;(0,u.createRoot)(document.getElementById(`root`)).render((0,h.jsx)(l.StrictMode,{children:(0,h.jsx)(dn,{})}));