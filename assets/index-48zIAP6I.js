var e=(e,t)=>()=>(t||(e((t={exports:{}}).exports,t),e=null),t.exports),t=(e=>typeof require<`u`?require:typeof Proxy<`u`?new Proxy(e,{get:(e,t)=>(typeof require<`u`?require:e)[t]}):e)(function(e){if(typeof require<`u`)return require.apply(this,arguments);throw Error('Calling `require` for "'+e+"\" in an environment that doesn't expose the `require` function. See https://rolldown.rs/in-depth/bundling-cjs#require-external-modules for more details.")});(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var n=e((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.portal`),r=Symbol.for(`react.fragment`),i=Symbol.for(`react.strict_mode`),a=Symbol.for(`react.profiler`),o=Symbol.for(`react.consumer`),s=Symbol.for(`react.context`),c=Symbol.for(`react.forward_ref`),l=Symbol.for(`react.suspense`),u=Symbol.for(`react.memo`),d=Symbol.for(`react.lazy`),f=Symbol.for(`react.activity`),p=Symbol.iterator;function m(e){return typeof e!=`object`||!e?null:(e=p&&e[p]||e[`@@iterator`],typeof e==`function`?e:null)}var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g=Object.assign,_={};function v(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}v.prototype.isReactComponent={},v.prototype.setState=function(e,t){if(typeof e!=`object`&&typeof e!=`function`&&e!=null)throw Error(`takes an object of state variables to update or a function which returns an object of state variables.`);this.updater.enqueueSetState(this,e,t,`setState`)},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,`forceUpdate`)};function y(){}y.prototype=v.prototype;function b(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}var x=b.prototype=new y;x.constructor=b,g(x,v.prototype),x.isPureReactComponent=!0;var S=Array.isArray;function C(){}var w={H:null,A:null,T:null,S:null},T=Object.prototype.hasOwnProperty;function E(e,n,r){var i=r.ref;return{$$typeof:t,type:e,key:n,ref:i===void 0?null:i,props:r}}function D(e,t){return E(e.type,t,e.props)}function O(e){return typeof e==`object`&&!!e&&e.$$typeof===t}function k(e){var t={"=":`=0`,":":`=2`};return`$`+e.replace(/[=:]/g,function(e){return t[e]})}var A=/\/+/g;function j(e,t){return typeof e==`object`&&e&&e.key!=null?k(``+e.key):t.toString(36)}function ee(e){switch(e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason;default:switch(typeof e.status==`string`?e.then(C,C):(e.status=`pending`,e.then(function(t){e.status===`pending`&&(e.status=`fulfilled`,e.value=t)},function(t){e.status===`pending`&&(e.status=`rejected`,e.reason=t)})),e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason}}throw e}function te(e,r,i,a,o){var s=typeof e;(s===`undefined`||s===`boolean`)&&(e=null);var c=!1;if(e===null)c=!0;else switch(s){case`bigint`:case`string`:case`number`:c=!0;break;case`object`:switch(e.$$typeof){case t:case n:c=!0;break;case d:return c=e._init,te(c(e._payload),r,i,a,o)}}if(c)return o=o(e),c=a===``?`.`+j(e,0):a,S(o)?(i=``,c!=null&&(i=c.replace(A,`$&/`)+`/`),te(o,r,i,``,function(e){return e})):o!=null&&(O(o)&&(o=D(o,i+(o.key==null||e&&e.key===o.key?``:(``+o.key).replace(A,`$&/`)+`/`)+c)),r.push(o)),1;c=0;var l=a===``?`.`:a+`:`;if(S(e))for(var u=0;u<e.length;u++)a=e[u],s=l+j(a,u),c+=te(a,r,i,s,o);else if(u=m(e),typeof u==`function`)for(e=u.call(e),u=0;!(a=e.next()).done;)a=a.value,s=l+j(a,u++),c+=te(a,r,i,s,o);else if(s===`object`){if(typeof e.then==`function`)return te(ee(e),r,i,a,o);throw r=String(e),Error(`Objects are not valid as a React child (found: `+(r===`[object Object]`?`object with keys {`+Object.keys(e).join(`, `)+`}`:r)+`). If you meant to render a collection of children, use an array instead.`)}return c}function M(e,t,n){if(e==null)return e;var r=[],i=0;return te(e,r,``,``,function(e){return t.call(n,e,i++)}),r}function ne(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var N=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},P={map:M,forEach:function(e,t,n){M(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return M(e,function(){t++}),t},toArray:function(e){return M(e,function(e){return e})||[]},only:function(e){if(!O(e))throw Error(`React.Children.only expected to receive a single React element child.`);return e}};e.Activity=f,e.Children=P,e.Component=v,e.Fragment=r,e.Profiler=a,e.PureComponent=b,e.StrictMode=i,e.Suspense=l,e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=w,e.__COMPILER_RUNTIME={__proto__:null,c:function(e){return w.H.useMemoCache(e)}},e.cache=function(e){return function(){return e.apply(null,arguments)}},e.cacheSignal=function(){return null},e.cloneElement=function(e,t,n){if(e==null)throw Error(`The argument must be a React element, but you passed `+e+`.`);var r=g({},e.props),i=e.key;if(t!=null)for(a in t.key!==void 0&&(i=``+t.key),t)!T.call(t,a)||a===`key`||a===`__self`||a===`__source`||a===`ref`&&t.ref===void 0||(r[a]=t[a]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var o=Array(a),s=0;s<a;s++)o[s]=arguments[s+2];r.children=o}return E(e.type,i,r)},e.createContext=function(e){return e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:o,_context:e},e},e.createElement=function(e,t,n){var r,i={},a=null;if(t!=null)for(r in t.key!==void 0&&(a=``+t.key),t)T.call(t,r)&&r!==`key`&&r!==`__self`&&r!==`__source`&&(i[r]=t[r]);var o=arguments.length-2;if(o===1)i.children=n;else if(1<o){for(var s=Array(o),c=0;c<o;c++)s[c]=arguments[c+2];i.children=s}if(e&&e.defaultProps)for(r in o=e.defaultProps,o)i[r]===void 0&&(i[r]=o[r]);return E(e,a,i)},e.createRef=function(){return{current:null}},e.forwardRef=function(e){return{$$typeof:c,render:e}},e.isValidElement=O,e.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:ne}},e.memo=function(e,t){return{$$typeof:u,type:e,compare:t===void 0?null:t}},e.startTransition=function(e){var t=w.T,n={};w.T=n;try{var r=e(),i=w.S;i!==null&&i(n,r),typeof r==`object`&&r&&typeof r.then==`function`&&r.then(C,N)}catch(e){N(e)}finally{t!==null&&n.types!==null&&(t.types=n.types),w.T=t}},e.unstable_useCacheRefresh=function(){return w.H.useCacheRefresh()},e.use=function(e){return w.H.use(e)},e.useActionState=function(e,t,n){return w.H.useActionState(e,t,n)},e.useCallback=function(e,t){return w.H.useCallback(e,t)},e.useContext=function(e){return w.H.useContext(e)},e.useDebugValue=function(){},e.useDeferredValue=function(e,t){return w.H.useDeferredValue(e,t)},e.useEffect=function(e,t){return w.H.useEffect(e,t)},e.useEffectEvent=function(e){return w.H.useEffectEvent(e)},e.useId=function(){return w.H.useId()},e.useImperativeHandle=function(e,t,n){return w.H.useImperativeHandle(e,t,n)},e.useInsertionEffect=function(e,t){return w.H.useInsertionEffect(e,t)},e.useLayoutEffect=function(e,t){return w.H.useLayoutEffect(e,t)},e.useMemo=function(e,t){return w.H.useMemo(e,t)},e.useOptimistic=function(e,t){return w.H.useOptimistic(e,t)},e.useReducer=function(e,t,n){return w.H.useReducer(e,t,n)},e.useRef=function(e){return w.H.useRef(e)},e.useState=function(e){return w.H.useState(e)},e.useSyncExternalStore=function(e,t,n){return w.H.useSyncExternalStore(e,t,n)},e.useTransition=function(){return w.H.useTransition()},e.version=`19.2.8`})),r=e(((e,t)=>{t.exports=n()})),i=e((e=>{function t(e,t){var n=e.length;e.push(t);a:for(;0<n;){var r=n-1>>>1,a=e[r];if(0<i(a,t))e[r]=t,e[n]=a,n=r;else break a}}function n(e){return e.length===0?null:e[0]}function r(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;a:for(var r=0,a=e.length,o=a>>>1;r<o;){var s=2*(r+1)-1,c=e[s],l=s+1,u=e[l];if(0>i(c,n))l<a&&0>i(u,c)?(e[r]=u,e[l]=n,r=l):(e[r]=c,e[s]=n,r=s);else if(l<a&&0>i(u,n))e[r]=u,e[l]=n,r=l;else break a}}return t}function i(e,t){var n=e.sortIndex-t.sortIndex;return n===0?e.id-t.id:n}if(e.unstable_now=void 0,typeof performance==`object`&&typeof performance.now==`function`){var a=performance;e.unstable_now=function(){return a.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var c=[],l=[],u=1,d=null,f=3,p=!1,m=!1,h=!1,g=!1,_=typeof setTimeout==`function`?setTimeout:null,v=typeof clearTimeout==`function`?clearTimeout:null,y=typeof setImmediate<`u`?setImmediate:null;function b(e){for(var i=n(l);i!==null;){if(i.callback===null)r(l);else if(i.startTime<=e)r(l),i.sortIndex=i.expirationTime,t(c,i);else break;i=n(l)}}function x(e){if(h=!1,b(e),!m)if(n(c)!==null)m=!0,S||(S=!0,O());else{var t=n(l);t!==null&&j(x,t.startTime-e)}}var S=!1,C=-1,w=5,T=-1;function E(){return g?!0:!(e.unstable_now()-T<w)}function D(){if(g=!1,S){var t=e.unstable_now();T=t;var i=!0;try{a:{m=!1,h&&(h=!1,v(C),C=-1),p=!0;var a=f;try{b:{for(b(t),d=n(c);d!==null&&!(d.expirationTime>t&&E());){var o=d.callback;if(typeof o==`function`){d.callback=null,f=d.priorityLevel;var s=o(d.expirationTime<=t);if(t=e.unstable_now(),typeof s==`function`){d.callback=s,b(t),i=!0;break b}d===n(c)&&r(c),b(t)}else r(c);d=n(c)}if(d!==null)i=!0;else{var u=n(l);u!==null&&j(x,u.startTime-t),i=!1}}break a}finally{d=null,f=a,p=!1}}}finally{i?O():S=!1}}}var O;if(typeof y==`function`)O=function(){y(D)};else if(typeof MessageChannel<`u`){var k=new MessageChannel,A=k.port2;k.port1.onmessage=D,O=function(){A.postMessage(null)}}else O=function(){_(D,0)};function j(t,n){C=_(function(){t(e.unstable_now())},n)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(e){e.callback=null},e.unstable_forceFrameRate=function(e){0>e||125<e?console.error(`forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported`):w=0<e?Math.floor(1e3/e):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_next=function(e){switch(f){case 1:case 2:case 3:var t=3;break;default:t=f}var n=f;f=t;try{return e()}finally{f=n}},e.unstable_requestPaint=function(){g=!0},e.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=f;f=e;try{return t()}finally{f=n}},e.unstable_scheduleCallback=function(r,i,a){var o=e.unstable_now();switch(typeof a==`object`&&a?(a=a.delay,a=typeof a==`number`&&0<a?o+a:o):a=o,r){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return s=a+s,r={id:u++,callback:i,priorityLevel:r,startTime:a,expirationTime:s,sortIndex:-1},a>o?(r.sortIndex=a,t(l,r),n(c)===null&&r===n(l)&&(h?(v(C),C=-1):h=!0,j(x,a-o))):(r.sortIndex=s,t(c,r),m||p||(m=!0,S||(S=!0,O()))),r},e.unstable_shouldYield=E,e.unstable_wrapCallback=function(e){var t=f;return function(){var n=f;f=t;try{return e.apply(this,arguments)}finally{f=n}}}})),a=e(((e,t)=>{t.exports=i()})),o=e((e=>{var t=r();function n(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function i(){}var a={d:{f:i,r:function(){throw Error(n(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},o=Symbol.for(`react.portal`);function s(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:o,key:r==null?null:``+r,children:e,containerInfo:t,implementation:n}}var c=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function l(e,t){if(e===`font`)return``;if(typeof t==`string`)return t===`use-credentials`?t:``}e.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=a,e.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(n(299));return s(e,t,null,r)},e.flushSync=function(e){var t=c.T,n=a.p;try{if(c.T=null,a.p=2,e)return e()}finally{c.T=t,a.p=n,a.d.f()}},e.preconnect=function(e,t){typeof e==`string`&&(t?(t=t.crossOrigin,t=typeof t==`string`?t===`use-credentials`?t:``:void 0):t=null,a.d.C(e,t))},e.prefetchDNS=function(e){typeof e==`string`&&a.d.D(e)},e.preinit=function(e,t){if(typeof e==`string`&&t&&typeof t.as==`string`){var n=t.as,r=l(n,t.crossOrigin),i=typeof t.integrity==`string`?t.integrity:void 0,o=typeof t.fetchPriority==`string`?t.fetchPriority:void 0;n===`style`?a.d.S(e,typeof t.precedence==`string`?t.precedence:void 0,{crossOrigin:r,integrity:i,fetchPriority:o}):n===`script`&&a.d.X(e,{crossOrigin:r,integrity:i,fetchPriority:o,nonce:typeof t.nonce==`string`?t.nonce:void 0})}},e.preinitModule=function(e,t){if(typeof e==`string`)if(typeof t==`object`&&t){if(t.as==null||t.as===`script`){var n=l(t.as,t.crossOrigin);a.d.M(e,{crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0})}}else t??a.d.M(e)},e.preload=function(e,t){if(typeof e==`string`&&typeof t==`object`&&t&&typeof t.as==`string`){var n=t.as,r=l(n,t.crossOrigin);a.d.L(e,n,{crossOrigin:r,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0,type:typeof t.type==`string`?t.type:void 0,fetchPriority:typeof t.fetchPriority==`string`?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy==`string`?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet==`string`?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes==`string`?t.imageSizes:void 0,media:typeof t.media==`string`?t.media:void 0})}},e.preloadModule=function(e,t){if(typeof e==`string`)if(t){var n=l(t.as,t.crossOrigin);a.d.m(e,{as:typeof t.as==`string`&&t.as!==`script`?t.as:void 0,crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0})}else a.d.m(e)},e.requestFormReset=function(e){a.d.r(e)},e.unstable_batchedUpdates=function(e,t){return e(t)},e.useFormState=function(e,t,n){return c.H.useFormState(e,t,n)},e.useFormStatus=function(){return c.H.useHostTransitionStatus()},e.version=`19.2.8`})),s=e(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=o()})),c=e((e=>{var t=a(),n=r(),i=s();function o(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function c(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function l(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function u(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function d(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function f(e){if(l(e)!==e)throw Error(o(188))}function p(e){var t=e.alternate;if(!t){if(t=l(e),t===null)throw Error(o(188));return t===e?e:null}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var a=i.alternate;if(a===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===a.child){for(a=i.child;a;){if(a===n)return f(i),e;if(a===r)return f(i),t;a=a.sibling}throw Error(o(188))}if(n.return!==r.return)n=i,r=a;else{for(var s=!1,c=i.child;c;){if(c===n){s=!0,n=i,r=a;break}if(c===r){s=!0,r=i,n=a;break}c=c.sibling}if(!s){for(c=a.child;c;){if(c===n){s=!0,n=a,r=i;break}if(c===r){s=!0,r=a,n=i;break}c=c.sibling}if(!s)throw Error(o(189))}}if(n.alternate!==r)throw Error(o(190))}if(n.tag!==3)throw Error(o(188));return n.stateNode.current===n?e:t}function m(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=m(e),t!==null)return t;e=e.sibling}return null}var h=Object.assign,g=Symbol.for(`react.element`),_=Symbol.for(`react.transitional.element`),v=Symbol.for(`react.portal`),y=Symbol.for(`react.fragment`),b=Symbol.for(`react.strict_mode`),x=Symbol.for(`react.profiler`),S=Symbol.for(`react.consumer`),C=Symbol.for(`react.context`),w=Symbol.for(`react.forward_ref`),T=Symbol.for(`react.suspense`),E=Symbol.for(`react.suspense_list`),D=Symbol.for(`react.memo`),O=Symbol.for(`react.lazy`),k=Symbol.for(`react.activity`),A=Symbol.for(`react.memo_cache_sentinel`),j=Symbol.iterator;function ee(e){return typeof e!=`object`||!e?null:(e=j&&e[j]||e[`@@iterator`],typeof e==`function`?e:null)}var te=Symbol.for(`react.client.reference`);function M(e){if(e==null)return null;if(typeof e==`function`)return e.$$typeof===te?null:e.displayName||e.name||null;if(typeof e==`string`)return e;switch(e){case y:return`Fragment`;case x:return`Profiler`;case b:return`StrictMode`;case T:return`Suspense`;case E:return`SuspenseList`;case k:return`Activity`}if(typeof e==`object`)switch(e.$$typeof){case v:return`Portal`;case C:return e.displayName||`Context`;case S:return(e._context.displayName||`Context`)+`.Consumer`;case w:var t=e.render;return e=e.displayName,e||=(e=t.displayName||t.name||``,e===``?`ForwardRef`:`ForwardRef(`+e+`)`),e;case D:return t=e.displayName||null,t===null?M(e.type)||`Memo`:t;case O:t=e._payload,e=e._init;try{return M(e(t))}catch{}}return null}var ne=Array.isArray,N=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,P=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,re={pending:!1,data:null,method:null,action:null},ie=[],ae=-1;function oe(e){return{current:e}}function se(e){0>ae||(e.current=ie[ae],ie[ae]=null,ae--)}function ce(e,t){ae++,ie[ae]=e.current,e.current=t}var le=oe(null),ue=oe(null),de=oe(null),fe=oe(null);function pe(e,t){switch(ce(de,t),ce(ue,e),ce(le,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Wd(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Wd(t),e=Gd(t,e);else switch(e){case`svg`:e=1;break;case`math`:e=2;break;default:e=0}}se(le),ce(le,e)}function F(){se(le),se(ue),se(de)}function I(e){e.memoizedState!==null&&ce(fe,e);var t=le.current,n=Gd(t,e.type);t!==n&&(ce(ue,e),ce(le,n))}function me(e){ue.current===e&&(se(le),se(ue)),fe.current===e&&(se(fe),tp._currentValue=re)}var he,ge;function _e(e){if(he===void 0)try{throw Error()}catch(e){var t=e.stack.trim().match(/\n( *(at )?)/);he=t&&t[1]||``,ge=-1<e.stack.indexOf(`
    at`)?` (<anonymous>)`:-1<e.stack.indexOf(`@`)?`@unknown:0:0`:``}return`
`+he+e+ge}var ve=!1;function ye(e,t){if(!e||ve)return``;ve=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(t){var n=function(){throw Error()};if(Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect==`object`&&Reflect.construct){try{Reflect.construct(n,[])}catch(e){var r=e}Reflect.construct(e,[],n)}else{try{n.call()}catch(e){r=e}e.call(n.prototype)}}else{try{throw Error()}catch(e){r=e}(n=e())&&typeof n.catch==`function`&&n.catch(function(){})}}catch(e){if(e&&r&&typeof e.stack==`string`)return[e.stack,r.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName=`DetermineComponentFrameRoot`;var i=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,`name`);i&&i.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:`DetermineComponentFrameRoot`});var a=r.DetermineComponentFrameRoot(),o=a[0],s=a[1];if(o&&s){var c=o.split(`
`),l=s.split(`
`);for(i=r=0;r<c.length&&!c[r].includes(`DetermineComponentFrameRoot`);)r++;for(;i<l.length&&!l[i].includes(`DetermineComponentFrameRoot`);)i++;if(r===c.length||i===l.length)for(r=c.length-1,i=l.length-1;1<=r&&0<=i&&c[r]!==l[i];)i--;for(;1<=r&&0<=i;r--,i--)if(c[r]!==l[i]){if(r!==1||i!==1)do if(r--,i--,0>i||c[r]!==l[i]){var u=`
`+c[r].replace(` at new `,` at `);return e.displayName&&u.includes(`<anonymous>`)&&(u=u.replace(`<anonymous>`,e.displayName)),u}while(1<=r&&0<=i);break}}}finally{ve=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:``)?_e(n):``}function be(e,t){switch(e.tag){case 26:case 27:case 5:return _e(e.type);case 16:return _e(`Lazy`);case 13:return e.child!==t&&t!==null?_e(`Suspense Fallback`):_e(`Suspense`);case 19:return _e(`SuspenseList`);case 0:case 15:return ye(e.type,!1);case 11:return ye(e.type.render,!1);case 1:return ye(e.type,!0);case 31:return _e(`Activity`);default:return``}}function xe(e){try{var t=``,n=null;do t+=be(e,n),n=e,e=e.return;while(e);return t}catch(e){return`
Error generating stack: `+e.message+`
`+e.stack}}var Se=Object.prototype.hasOwnProperty,Ce=t.unstable_scheduleCallback,we=t.unstable_cancelCallback,Te=t.unstable_shouldYield,Ee=t.unstable_requestPaint,L=t.unstable_now,De=t.unstable_getCurrentPriorityLevel,Oe=t.unstable_ImmediatePriority,ke=t.unstable_UserBlockingPriority,Ae=t.unstable_NormalPriority,je=t.unstable_LowPriority,Me=t.unstable_IdlePriority,Ne=t.log,Pe=t.unstable_setDisableYieldValue,Fe=null,Ie=null;function Le(e){if(typeof Ne==`function`&&Pe(e),Ie&&typeof Ie.setStrictMode==`function`)try{Ie.setStrictMode(Fe,e)}catch{}}var Re=Math.clz32?Math.clz32:Ve,ze=Math.log,Be=Math.LN2;function Ve(e){return e>>>=0,e===0?32:31-(ze(e)/Be|0)|0}var He=256,Ue=262144,We=4194304;function Ge(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Ke(e,t,n){var r=e.pendingLanes;if(r===0)return 0;var i=0,a=e.suspendedLanes,o=e.pingedLanes;e=e.warmLanes;var s=r&134217727;return s===0?(s=r&~a,s===0?o===0?n||(n=r&~e,n!==0&&(i=Ge(n))):i=Ge(o):i=Ge(s)):(r=s&~a,r===0?(o&=s,o===0?n||(n=s&~e,n!==0&&(i=Ge(n))):i=Ge(o)):i=Ge(r)),i===0?0:t!==0&&t!==i&&(t&a)===0&&(a=i&-i,n=t&-t,a>=n||a===32&&n&4194048)?t:i}function qe(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function Je(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ye(){var e=We;return We<<=1,!(We&62914560)&&(We=4194304),e}function Xe(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Ze(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Qe(e,t,n,r,i,a){var o=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var s=e.entanglements,c=e.expirationTimes,l=e.hiddenUpdates;for(n=o&~n;0<n;){var u=31-Re(n),d=1<<u;s[u]=0,c[u]=-1;var f=l[u];if(f!==null)for(l[u]=null,u=0;u<f.length;u++){var p=f[u];p!==null&&(p.lane&=-536870913)}n&=~d}r!==0&&$e(e,r,0),a!==0&&i===0&&e.tag!==0&&(e.suspendedLanes|=a&~(o&~t))}function $e(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var r=31-Re(t);e.entangledLanes|=t,e.entanglements[r]=e.entanglements[r]|1073741824|n&261930}function et(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Re(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}function tt(e,t){var n=t&-t;return n=n&42?1:nt(n),(n&(e.suspendedLanes|t))===0?n:0}function nt(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function rt(e){return e&=-e,2<e?8<e?e&134217727?32:268435456:8:2}function it(){var e=P.p;return e===0?(e=window.event,e===void 0?32:_p(e.type)):e}function at(e,t){var n=P.p;try{return P.p=e,t()}finally{P.p=n}}var ot=Math.random().toString(36).slice(2),st=`__reactFiber$`+ot,ct=`__reactProps$`+ot,lt=`__reactContainer$`+ot,ut=`__reactEvents$`+ot,dt=`__reactListeners$`+ot,ft=`__reactHandles$`+ot,pt=`__reactResources$`+ot,mt=`__reactMarker$`+ot;function ht(e){delete e[st],delete e[ct],delete e[ut],delete e[dt],delete e[ft]}function gt(e){var t=e[st];if(t)return t;for(var n=e.parentNode;n;){if(t=n[lt]||n[st]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=mf(e);e!==null;){if(n=e[st])return n;e=mf(e)}return t}e=n,n=e.parentNode}return null}function _t(e){if(e=e[st]||e[lt]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function vt(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(o(33))}function yt(e){var t=e[pt];return t||=e[pt]={hoistableStyles:new Map,hoistableScripts:new Map},t}function bt(e){e[mt]=!0}var xt=new Set,St={};function R(e,t){Ct(e,t),Ct(e+`Capture`,t)}function Ct(e,t){for(St[e]=t,e=0;e<t.length;e++)xt.add(t[e])}var wt=RegExp(`^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$`),Tt={},Et={};function Dt(e){return Se.call(Et,e)?!0:Se.call(Tt,e)?!1:wt.test(e)?Et[e]=!0:(Tt[e]=!0,!1)}function Ot(e,t,n){if(Dt(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:e.removeAttribute(t);return;case`boolean`:var r=t.toLowerCase().slice(0,5);if(r!==`data-`&&r!==`aria-`){e.removeAttribute(t);return}}e.setAttribute(t,``+n)}}function kt(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(t);return}e.setAttribute(t,``+n)}}function At(e,t,n,r){if(r===null)e.removeAttribute(n);else{switch(typeof r){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(n);return}e.setAttributeNS(t,n,``+r)}}function jt(e){switch(typeof e){case`bigint`:case`boolean`:case`number`:case`string`:case`undefined`:return e;case`object`:return e;default:return``}}function Mt(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()===`input`&&(t===`checkbox`||t===`radio`)}function Nt(e,t,n){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&r!==void 0&&typeof r.get==`function`&&typeof r.set==`function`){var i=r.get,a=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(e){n=``+e,a.call(this,e)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(e){n=``+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Pt(e){if(!e._valueTracker){var t=Mt(e)?`checked`:`value`;e._valueTracker=Nt(e,t,``+e[t])}}function Ft(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r=``;return e&&(r=Mt(e)?e.checked?`true`:`false`:e.value),e=r,e!==n&&(t.setValue(e),!0)}function It(e){if(e||=typeof document<`u`?document:void 0,e===void 0)return null;try{return e.activeElement||e.body}catch{return e.body}}var Lt=/[\n"\\]/g;function Rt(e){return e.replace(Lt,function(e){return`\\`+e.charCodeAt(0).toString(16)+` `})}function zt(e,t,n,r,i,a,o,s){e.name=``,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`?e.type=o:e.removeAttribute(`type`),t==null?o!==`submit`&&o!==`reset`||e.removeAttribute(`value`):o===`number`?(t===0&&e.value===``||e.value!=t)&&(e.value=``+jt(t)):e.value!==``+jt(t)&&(e.value=``+jt(t)),t==null?n==null?r!=null&&e.removeAttribute(`value`):z(e,o,jt(n)):z(e,o,jt(t)),i==null&&a!=null&&(e.defaultChecked=!!a),i!=null&&(e.checked=i&&typeof i!=`function`&&typeof i!=`symbol`),s!=null&&typeof s!=`function`&&typeof s!=`symbol`&&typeof s!=`boolean`?e.name=``+jt(s):e.removeAttribute(`name`)}function Bt(e,t,n,r,i,a,o,s){if(a!=null&&typeof a!=`function`&&typeof a!=`symbol`&&typeof a!=`boolean`&&(e.type=a),t!=null||n!=null){if(!(a!==`submit`&&a!==`reset`||t!=null)){Pt(e);return}n=n==null?``:``+jt(n),t=t==null?n:``+jt(t),s||t===e.value||(e.value=t),e.defaultValue=t}r??=i,r=typeof r!=`function`&&typeof r!=`symbol`&&!!r,e.checked=s?e.checked:!!r,e.defaultChecked=!!r,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`&&(e.name=o),Pt(e)}function z(e,t,n){t===`number`&&It(e.ownerDocument)===e||e.defaultValue===``+n||(e.defaultValue=``+n)}function Vt(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t[`$`+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty(`$`+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=``+jt(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Ht(e,t,n){if(t!=null&&(t=``+jt(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n==null?``:``+jt(n)}function Ut(e,t,n,r){if(t==null){if(r!=null){if(n!=null)throw Error(o(92));if(ne(r)){if(1<r.length)throw Error(o(93));r=r[0]}n=r}n??=``,t=n}n=jt(t),e.defaultValue=n,r=e.textContent,r===n&&r!==``&&r!==null&&(e.value=r),Pt(e)}function Wt(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Gt=new Set(`animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp`.split(` `));function Kt(e,t,n){var r=t.indexOf(`--`)===0;n==null||typeof n==`boolean`||n===``?r?e.setProperty(t,``):t===`float`?e.cssFloat=``:e[t]=``:r?e.setProperty(t,n):typeof n!=`number`||n===0||Gt.has(t)?t===`float`?e.cssFloat=n:e[t]=(``+n).trim():e[t]=n+`px`}function qt(e,t,n){if(t!=null&&typeof t!=`object`)throw Error(o(62));if(e=e.style,n!=null){for(var r in n)!n.hasOwnProperty(r)||t!=null&&t.hasOwnProperty(r)||(r.indexOf(`--`)===0?e.setProperty(r,``):r===`float`?e.cssFloat=``:e[r]=``);for(var i in t)r=t[i],t.hasOwnProperty(i)&&n[i]!==r&&Kt(e,i,r)}else for(var a in t)t.hasOwnProperty(a)&&Kt(e,a,t[a])}function Jt(e){if(e.indexOf(`-`)===-1)return!1;switch(e){case`annotation-xml`:case`color-profile`:case`font-face`:case`font-face-src`:case`font-face-uri`:case`font-face-format`:case`font-face-name`:case`missing-glyph`:return!1;default:return!0}}var Yt=new Map([[`acceptCharset`,`accept-charset`],[`htmlFor`,`for`],[`httpEquiv`,`http-equiv`],[`crossOrigin`,`crossorigin`],[`accentHeight`,`accent-height`],[`alignmentBaseline`,`alignment-baseline`],[`arabicForm`,`arabic-form`],[`baselineShift`,`baseline-shift`],[`capHeight`,`cap-height`],[`clipPath`,`clip-path`],[`clipRule`,`clip-rule`],[`colorInterpolation`,`color-interpolation`],[`colorInterpolationFilters`,`color-interpolation-filters`],[`colorProfile`,`color-profile`],[`colorRendering`,`color-rendering`],[`dominantBaseline`,`dominant-baseline`],[`enableBackground`,`enable-background`],[`fillOpacity`,`fill-opacity`],[`fillRule`,`fill-rule`],[`floodColor`,`flood-color`],[`floodOpacity`,`flood-opacity`],[`fontFamily`,`font-family`],[`fontSize`,`font-size`],[`fontSizeAdjust`,`font-size-adjust`],[`fontStretch`,`font-stretch`],[`fontStyle`,`font-style`],[`fontVariant`,`font-variant`],[`fontWeight`,`font-weight`],[`glyphName`,`glyph-name`],[`glyphOrientationHorizontal`,`glyph-orientation-horizontal`],[`glyphOrientationVertical`,`glyph-orientation-vertical`],[`horizAdvX`,`horiz-adv-x`],[`horizOriginX`,`horiz-origin-x`],[`imageRendering`,`image-rendering`],[`letterSpacing`,`letter-spacing`],[`lightingColor`,`lighting-color`],[`markerEnd`,`marker-end`],[`markerMid`,`marker-mid`],[`markerStart`,`marker-start`],[`overlinePosition`,`overline-position`],[`overlineThickness`,`overline-thickness`],[`paintOrder`,`paint-order`],[`panose-1`,`panose-1`],[`pointerEvents`,`pointer-events`],[`renderingIntent`,`rendering-intent`],[`shapeRendering`,`shape-rendering`],[`stopColor`,`stop-color`],[`stopOpacity`,`stop-opacity`],[`strikethroughPosition`,`strikethrough-position`],[`strikethroughThickness`,`strikethrough-thickness`],[`strokeDasharray`,`stroke-dasharray`],[`strokeDashoffset`,`stroke-dashoffset`],[`strokeLinecap`,`stroke-linecap`],[`strokeLinejoin`,`stroke-linejoin`],[`strokeMiterlimit`,`stroke-miterlimit`],[`strokeOpacity`,`stroke-opacity`],[`strokeWidth`,`stroke-width`],[`textAnchor`,`text-anchor`],[`textDecoration`,`text-decoration`],[`textRendering`,`text-rendering`],[`transformOrigin`,`transform-origin`],[`underlinePosition`,`underline-position`],[`underlineThickness`,`underline-thickness`],[`unicodeBidi`,`unicode-bidi`],[`unicodeRange`,`unicode-range`],[`unitsPerEm`,`units-per-em`],[`vAlphabetic`,`v-alphabetic`],[`vHanging`,`v-hanging`],[`vIdeographic`,`v-ideographic`],[`vMathematical`,`v-mathematical`],[`vectorEffect`,`vector-effect`],[`vertAdvY`,`vert-adv-y`],[`vertOriginX`,`vert-origin-x`],[`vertOriginY`,`vert-origin-y`],[`wordSpacing`,`word-spacing`],[`writingMode`,`writing-mode`],[`xmlnsXlink`,`xmlns:xlink`],[`xHeight`,`x-height`]]),Xt=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Zt(e){return Xt.test(``+e)?`javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')`:e}function Qt(){}var B=null;function $t(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var en=null,tn=null;function nn(e){var t=_t(e);if(t&&(e=t.stateNode)){var n=e[ct]||null;a:switch(e=t.stateNode,t.type){case`input`:if(zt(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type===`radio`&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll(`input[name="`+Rt(``+t)+`"][type="radio"]`),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=r[ct]||null;if(!i)throw Error(o(90));zt(r,i.value,i.defaultValue,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name)}}for(t=0;t<n.length;t++)r=n[t],r.form===e.form&&Ft(r)}break a;case`textarea`:Ht(e,n.value,n.defaultValue);break a;case`select`:t=n.value,t!=null&&Vt(e,!!n.multiple,t,!1)}}}var V=!1;function rn(e,t,n){if(V)return e(t,n);V=!0;try{return e(t)}finally{if(V=!1,(en!==null||tn!==null)&&(bu(),en&&(t=en,e=tn,tn=en=null,nn(t),e)))for(t=0;t<e.length;t++)nn(e[t])}}function an(e,t){var n=e.stateNode;if(n===null)return null;var r=n[ct]||null;if(r===null)return null;n=r[t];a:switch(t){case`onClick`:case`onClickCapture`:case`onDoubleClick`:case`onDoubleClickCapture`:case`onMouseDown`:case`onMouseDownCapture`:case`onMouseMove`:case`onMouseMoveCapture`:case`onMouseUp`:case`onMouseUpCapture`:case`onMouseEnter`:(r=!r.disabled)||(e=e.type,r=e!==`button`&&e!==`input`&&e!==`select`&&e!==`textarea`),e=!r;break a;default:e=!1}if(e)return null;if(n&&typeof n!=`function`)throw Error(o(231,t,typeof n));return n}var on=!(typeof window>`u`||window.document===void 0||window.document.createElement===void 0),sn=!1;if(on)try{var cn={};Object.defineProperty(cn,"passive",{get:function(){sn=!0}}),window.addEventListener(`test`,cn,cn),window.removeEventListener(`test`,cn,cn)}catch{sn=!1}var ln=null,un=null,dn=null;function fn(){if(dn)return dn;var e,t=un,n=t.length,r,i=`value`in ln?ln.value:ln.textContent,a=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[a-r];r++);return dn=i.slice(e,1<r?1-r:void 0)}function pn(e){var t=e.keyCode;return`charCode`in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function mn(){return!0}function hn(){return!1}function gn(e){function t(t,n,r,i,a){for(var o in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=i,this.target=a,this.currentTarget=null,e)e.hasOwnProperty(o)&&(t=e[o],this[o]=t?t(i):i[o]);return this.isDefaultPrevented=(i.defaultPrevented==null?!1===i.returnValue:i.defaultPrevented)?mn:hn,this.isPropagationStopped=hn,this}return h(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():typeof e.returnValue!=`unknown`&&(e.returnValue=!1),this.isDefaultPrevented=mn)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():typeof e.cancelBubble!=`unknown`&&(e.cancelBubble=!0),this.isPropagationStopped=mn)},persist:function(){},isPersistent:mn}),t}var _n={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},vn=gn(_n),yn=h({},_n,{view:0,detail:0}),bn=gn(yn),xn,Sn,Cn,wn=h({},yn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Fn,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return`movementX`in e?e.movementX:(e!==Cn&&(Cn&&e.type===`mousemove`?(xn=e.screenX-Cn.screenX,Sn=e.screenY-Cn.screenY):Sn=xn=0,Cn=e),xn)},movementY:function(e){return`movementY`in e?e.movementY:Sn}}),Tn=gn(wn),En=gn(h({},wn,{dataTransfer:0})),Dn=gn(h({},yn,{relatedTarget:0})),On=gn(h({},_n,{animationName:0,elapsedTime:0,pseudoElement:0})),kn=gn(h({},_n,{clipboardData:function(e){return`clipboardData`in e?e.clipboardData:window.clipboardData}})),An=gn(h({},_n,{data:0})),jn={Esc:`Escape`,Spacebar:` `,Left:`ArrowLeft`,Up:`ArrowUp`,Right:`ArrowRight`,Down:`ArrowDown`,Del:`Delete`,Win:`OS`,Menu:`ContextMenu`,Apps:`ContextMenu`,Scroll:`ScrollLock`,MozPrintableKey:`Unidentified`},Mn={8:`Backspace`,9:`Tab`,12:`Clear`,13:`Enter`,16:`Shift`,17:`Control`,18:`Alt`,19:`Pause`,20:`CapsLock`,27:`Escape`,32:` `,33:`PageUp`,34:`PageDown`,35:`End`,36:`Home`,37:`ArrowLeft`,38:`ArrowUp`,39:`ArrowRight`,40:`ArrowDown`,45:`Insert`,46:`Delete`,112:`F1`,113:`F2`,114:`F3`,115:`F4`,116:`F5`,117:`F6`,118:`F7`,119:`F8`,120:`F9`,121:`F10`,122:`F11`,123:`F12`,144:`NumLock`,145:`ScrollLock`,224:`Meta`},Nn={Alt:`altKey`,Control:`ctrlKey`,Meta:`metaKey`,Shift:`shiftKey`};function Pn(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Nn[e])?!!t[e]:!1}function Fn(){return Pn}var In=gn(h({},yn,{key:function(e){if(e.key){var t=jn[e.key]||e.key;if(t!==`Unidentified`)return t}return e.type===`keypress`?(e=pn(e),e===13?`Enter`:String.fromCharCode(e)):e.type===`keydown`||e.type===`keyup`?Mn[e.keyCode]||`Unidentified`:``},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Fn,charCode:function(e){return e.type===`keypress`?pn(e):0},keyCode:function(e){return e.type===`keydown`||e.type===`keyup`?e.keyCode:0},which:function(e){return e.type===`keypress`?pn(e):e.type===`keydown`||e.type===`keyup`?e.keyCode:0}})),Ln=gn(h({},wn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),Rn=gn(h({},yn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Fn})),zn=gn(h({},_n,{propertyName:0,elapsedTime:0,pseudoElement:0})),H=gn(h({},wn,{deltaX:function(e){return`deltaX`in e?e.deltaX:`wheelDeltaX`in e?-e.wheelDeltaX:0},deltaY:function(e){return`deltaY`in e?e.deltaY:`wheelDeltaY`in e?-e.wheelDeltaY:`wheelDelta`in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0})),Bn=gn(h({},_n,{newState:0,oldState:0})),Vn=[9,13,27,32],Hn=on&&`CompositionEvent`in window,Un=null;on&&`documentMode`in document&&(Un=document.documentMode);var U=on&&`TextEvent`in window&&!Un,Wn=on&&(!Hn||Un&&8<Un&&11>=Un),W=` `,G=!1;function Gn(e,t){switch(e){case`keyup`:return Vn.indexOf(t.keyCode)!==-1;case`keydown`:return t.keyCode!==229;case`keypress`:case`mousedown`:case`focusout`:return!0;default:return!1}}function Kn(e){return e=e.detail,typeof e==`object`&&`data`in e?e.data:null}var qn=!1;function Jn(e,t){switch(e){case`compositionend`:return Kn(t);case`keypress`:return t.which===32?(G=!0,W):null;case`textInput`:return e=t.data,e===W&&G?null:e;default:return null}}function K(e,t){if(qn)return e===`compositionend`||!Hn&&Gn(e,t)?(e=fn(),dn=un=ln=null,qn=!1,e):null;switch(e){case`paste`:return null;case`keypress`:if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case`compositionend`:return Wn&&t.locale!==`ko`?null:t.data;default:return null}}var Yn={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Xn(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t===`input`?!!Yn[e.type]:t===`textarea`}function Zn(e,t,n,r){en?tn?tn.push(r):tn=[r]:en=r,t=Od(t,`onChange`),0<t.length&&(n=new vn(`onChange`,`change`,null,n,r),e.push({event:n,listeners:t}))}var Qn=null,$n=null;function er(e){bd(e,0)}function tr(e){if(Ft(vt(e)))return e}function nr(e,t){if(e===`change`)return t}var rr=!1;if(on){var ir;if(on){var ar=`oninput`in document;if(!ar){var or=document.createElement(`div`);or.setAttribute(`oninput`,`return;`),ar=typeof or.oninput==`function`}ir=ar}else ir=!1;rr=ir&&(!document.documentMode||9<document.documentMode)}function sr(){Qn&&(Qn.detachEvent(`onpropertychange`,cr),$n=Qn=null)}function cr(e){if(e.propertyName===`value`&&tr($n)){var t=[];Zn(t,$n,e,$t(e)),rn(er,t)}}function lr(e,t,n){e===`focusin`?(sr(),Qn=t,$n=n,Qn.attachEvent(`onpropertychange`,cr)):e===`focusout`&&sr()}function ur(e){if(e===`selectionchange`||e===`keyup`||e===`keydown`)return tr($n)}function dr(e,t){if(e===`click`)return tr(t)}function fr(e,t){if(e===`input`||e===`change`)return tr(t)}function pr(e,t){return e===t&&(e!==0||1/e==1/t)||e!==e&&t!==t}var mr=typeof Object.is==`function`?Object.is:pr;function hr(e,t){if(mr(e,t))return!0;if(typeof e!=`object`||!e||typeof t!=`object`||!t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Se.call(t,i)||!mr(e[i],t[i]))return!1}return!0}function gr(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function _r(e,t){var n=gr(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}a:{for(;n;){if(n.nextSibling){n=n.nextSibling;break a}n=n.parentNode}n=void 0}n=gr(n)}}function vr(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?vr(e,t.parentNode):`contains`in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function yr(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=It(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href==`string`}catch{n=!1}if(n)e=t.contentWindow;else break;t=It(e.document)}return t}function br(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t===`input`&&(e.type===`text`||e.type===`search`||e.type===`tel`||e.type===`url`||e.type===`password`)||t===`textarea`||e.contentEditable===`true`)}var xr=on&&`documentMode`in document&&11>=document.documentMode,Sr=null,Cr=null,q=null,wr=!1;function Tr(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;wr||Sr==null||Sr!==It(r)||(r=Sr,`selectionStart`in r&&br(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),q&&hr(q,r)||(q=r,r=Od(Cr,`onSelect`),0<r.length&&(t=new vn(`onSelect`,`select`,null,t,n),e.push({event:t,listeners:r}),t.target=Sr)))}function J(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n[`Webkit`+e]=`webkit`+t,n[`Moz`+e]=`moz`+t,n}var Er={animationend:J(`Animation`,`AnimationEnd`),animationiteration:J(`Animation`,`AnimationIteration`),animationstart:J(`Animation`,`AnimationStart`),transitionrun:J(`Transition`,`TransitionRun`),transitionstart:J(`Transition`,`TransitionStart`),transitioncancel:J(`Transition`,`TransitionCancel`),transitionend:J(`Transition`,`TransitionEnd`)},Y={},Dr={};on&&(Dr=document.createElement(`div`).style,`AnimationEvent`in window||(delete Er.animationend.animation,delete Er.animationiteration.animation,delete Er.animationstart.animation),`TransitionEvent`in window||delete Er.transitionend.transition);function Or(e){if(Y[e])return Y[e];if(!Er[e])return e;var t=Er[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Dr)return Y[e]=t[n];return e}var kr=Or(`animationend`),Ar=Or(`animationiteration`),jr=Or(`animationstart`),Mr=Or(`transitionrun`),Nr=Or(`transitionstart`),Pr=Or(`transitioncancel`),Fr=Or(`transitionend`),Ir=new Map,Lr=`abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel`.split(` `);Lr.push(`scrollEnd`);function Rr(e,t){Ir.set(e,t),R(t,[e])}var zr=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},Br=[],Vr=0,Hr=0;function Ur(){for(var e=Vr,t=Hr=Vr=0;t<e;){var n=Br[t];Br[t++]=null;var r=Br[t];Br[t++]=null;var i=Br[t];Br[t++]=null;var a=Br[t];if(Br[t++]=null,r!==null&&i!==null){var o=r.pending;o===null?i.next=i:(i.next=o.next,o.next=i),r.pending=i}a!==0&&qr(n,i,a)}}function Wr(e,t,n,r){Br[Vr++]=e,Br[Vr++]=t,Br[Vr++]=n,Br[Vr++]=r,Hr|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function Gr(e,t,n,r){return Wr(e,t,n,r),Jr(e)}function Kr(e,t){return Wr(e,null,null,t),Jr(e)}function qr(e,t,n){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n);for(var i=!1,a=e.return;a!==null;)a.childLanes|=n,r=a.alternate,r!==null&&(r.childLanes|=n),a.tag===22&&(e=a.stateNode,e===null||e._visibility&1||(i=!0)),e=a,a=a.return;return e.tag===3?(a=e.stateNode,i&&t!==null&&(i=31-Re(n),e=a.hiddenUpdates,r=e[i],r===null?e[i]=[t]:r.push(t),t.lane=n|536870912),a):null}function Jr(e){if(50<du)throw du=0,fu=null,Error(o(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var Yr={};function Xr(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Zr(e,t,n,r){return new Xr(e,t,n,r)}function Qr(e){return e=e.prototype,!(!e||!e.isReactComponent)}function $r(e,t){var n=e.alternate;return n===null?(n=Zr(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function ei(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function ti(e,t,n,r,i,a){var s=0;if(r=e,typeof e==`function`)Qr(e)&&(s=1);else if(typeof e==`string`)s=Kf(e,n,le.current)?26:e===`html`||e===`head`||e===`body`?27:5;else a:switch(e){case k:return e=Zr(31,n,t,i),e.elementType=k,e.lanes=a,e;case y:return ni(n.children,i,a,t);case b:s=8,i|=24;break;case x:return e=Zr(12,n,t,i|2),e.elementType=x,e.lanes=a,e;case T:return e=Zr(13,n,t,i),e.elementType=T,e.lanes=a,e;case E:return e=Zr(19,n,t,i),e.elementType=E,e.lanes=a,e;default:if(typeof e==`object`&&e)switch(e.$$typeof){case C:s=10;break a;case S:s=9;break a;case w:s=11;break a;case D:s=14;break a;case O:s=16,r=null;break a}s=29,n=Error(o(130,e===null?`null`:typeof e,``)),r=null}return t=Zr(s,n,t,i),t.elementType=e,t.type=r,t.lanes=a,t}function ni(e,t,n,r){return e=Zr(7,e,r,t),e.lanes=n,e}function ri(e,t,n){return e=Zr(6,e,null,t),e.lanes=n,e}function ii(e){var t=Zr(18,null,null,0);return t.stateNode=e,t}function ai(e,t,n){return t=Zr(4,e.children===null?[]:e.children,e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var oi=new WeakMap;function si(e,t){if(typeof e==`object`&&e){var n=oi.get(e);return n===void 0?(t={value:e,source:t,stack:xe(t)},oi.set(e,t),t):n}return{value:e,source:t,stack:xe(t)}}var ci=[],li=0,ui=null,di=0,fi=[],pi=0,mi=null,hi=1,gi=``;function _i(e,t){ci[li++]=di,ci[li++]=ui,ui=e,di=t}function vi(e,t,n){fi[pi++]=hi,fi[pi++]=gi,fi[pi++]=mi,mi=e;var r=hi;e=gi;var i=32-Re(r)-1;r&=~(1<<i),n+=1;var a=32-Re(t)+i;if(30<a){var o=i-i%5;a=(r&(1<<o)-1).toString(32),r>>=o,i-=o,hi=1<<32-Re(t)+i|n<<i|r,gi=a+e}else hi=1<<a|n<<i|r,gi=e}function yi(e){e.return!==null&&(_i(e,1),vi(e,1,0))}function bi(e){for(;e===ui;)ui=ci[--li],ci[li]=null,di=ci[--li],ci[li]=null;for(;e===mi;)mi=fi[--pi],fi[pi]=null,gi=fi[--pi],fi[pi]=null,hi=fi[--pi],fi[pi]=null}function xi(e,t){fi[pi++]=hi,fi[pi++]=gi,fi[pi++]=mi,hi=t.id,gi=t.overflow,mi=e}var Si=null,Ci=null,wi=!1,Ti=null,Ei=!1,Di=Error(o(519));function Oi(e){throw Pi(si(Error(o(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?`text`:`HTML`,``)),e)),Di}function ki(e){var t=e.stateNode,n=e.type,r=e.memoizedProps;switch(t[st]=e,t[ct]=r,n){case`dialog`:xd(`cancel`,t),xd(`close`,t);break;case`iframe`:case`object`:case`embed`:xd(`load`,t);break;case`video`:case`audio`:for(n=0;n<vd.length;n++)xd(vd[n],t);break;case`source`:xd(`error`,t);break;case`img`:case`image`:case`link`:xd(`error`,t),xd(`load`,t);break;case`details`:xd(`toggle`,t);break;case`input`:xd(`invalid`,t),Bt(t,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case`select`:xd(`invalid`,t);break;case`textarea`:xd(`invalid`,t),Ut(t,r.value,r.defaultValue,r.children)}n=r.children,typeof n!=`string`&&typeof n!=`number`&&typeof n!=`bigint`||t.textContent===``+n||!0===r.suppressHydrationWarning||Pd(t.textContent,n)?(r.popover!=null&&(xd(`beforetoggle`,t),xd(`toggle`,t)),r.onScroll!=null&&xd(`scroll`,t),r.onScrollEnd!=null&&xd(`scrollend`,t),r.onClick!=null&&(t.onclick=Qt),t=!0):t=!1,t||Oi(e,!0)}function Ai(e){for(Si=e.return;Si;)switch(Si.tag){case 5:case 31:case 13:Ei=!1;return;case 27:case 3:Ei=!0;return;default:Si=Si.return}}function ji(e){if(e!==Si)return!1;if(!wi)return Ai(e),wi=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=n===`form`||n===`button`||Kd(e.type,e.memoizedProps)),n=!n),n&&Ci&&Oi(e),Ai(e),t===13){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(o(317));Ci=pf(e)}else if(t===31){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(o(317));Ci=pf(e)}else t===27?(t=Ci,ef(e.type)?(e=ff,ff=null,Ci=e):Ci=t):Ci=Si?df(e.stateNode.nextSibling):null;return!0}function Mi(){Ci=Si=null,wi=!1}function Ni(){var e=Ti;return e!==null&&(Zl===null?Zl=e:Zl.push.apply(Zl,e),Ti=null),e}function Pi(e){Ti===null?Ti=[e]:Ti.push(e)}var Fi=oe(null),Ii=null,Li=null;function Ri(e,t,n){ce(Fi,t._currentValue),t._currentValue=n}function zi(e){e._currentValue=Fi.current,se(Fi)}function Bi(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)===t?r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t):(e.childLanes|=t,r!==null&&(r.childLanes|=t)),e===n)break;e=e.return}}function Vi(e,t,n,r){var i=e.child;for(i!==null&&(i.return=e);i!==null;){var a=i.dependencies;if(a!==null){var s=i.child;a=a.firstContext;a:for(;a!==null;){var c=a;a=i;for(var l=0;l<t.length;l++)if(c.context===t[l]){a.lanes|=n,c=a.alternate,c!==null&&(c.lanes|=n),Bi(a.return,n,e),r||(s=null);break a}a=c.next}}else if(i.tag===18){if(s=i.return,s===null)throw Error(o(341));s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),Bi(s,n,e),s=null}else s=i.child;if(s!==null)s.return=i;else for(s=i;s!==null;){if(s===e){s=null;break}if(i=s.sibling,i!==null){i.return=s.return,s=i;break}s=s.return}i=s}}function Hi(e,t,n,r){e=null;for(var i=t,a=!1;i!==null;){if(!a){if(i.flags&524288)a=!0;else if(i.flags&262144)break}if(i.tag===10){var s=i.alternate;if(s===null)throw Error(o(387));if(s=s.memoizedProps,s!==null){var c=i.type;mr(i.pendingProps.value,s.value)||(e===null?e=[c]:e.push(c))}}else if(i===fe.current){if(s=i.alternate,s===null)throw Error(o(387));s.memoizedState.memoizedState!==i.memoizedState.memoizedState&&(e===null?e=[tp]:e.push(tp))}i=i.return}e!==null&&Vi(t,e,n,r),t.flags|=262144}function Ui(e){for(e=e.firstContext;e!==null;){if(!mr(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Wi(e){Ii=e,Li=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Gi(e){return qi(Ii,e)}function Ki(e,t){return Ii===null&&Wi(e),qi(e,t)}function qi(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},Li===null){if(e===null)throw Error(o(308));Li=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Li=Li.next=t;return n}var Ji=typeof AbortController<`u`?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(t,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach(function(e){return e()})}},Yi=t.unstable_scheduleCallback,Xi=t.unstable_NormalPriority,Zi={$$typeof:C,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Qi(){return{controller:new Ji,data:new Map,refCount:0}}function $i(e){e.refCount--,e.refCount===0&&Yi(Xi,function(){e.controller.abort()})}var ea=null,ta=0,na=0,ra=null;function ia(e,t){if(ea===null){var n=ea=[];ta=0,na=fd(),ra={status:`pending`,value:void 0,then:function(e){n.push(e)}}}return ta++,t.then(aa,aa),t}function aa(){if(--ta===0&&ea!==null){ra!==null&&(ra.status=`fulfilled`);var e=ea;ea=null,na=0,ra=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function oa(e,t){var n=[],r={status:`pending`,value:null,reason:null,then:function(e){n.push(e)}};return e.then(function(){r.status=`fulfilled`,r.value=t;for(var e=0;e<n.length;e++)(0,n[e])(t)},function(e){for(r.status=`rejected`,r.reason=e,e=0;e<n.length;e++)(0,n[e])(void 0)}),r}var sa=N.S;N.S=function(e,t){eu=L(),typeof t==`object`&&t&&typeof t.then==`function`&&ia(e,t),sa!==null&&sa(e,t)};var ca=oe(null);function la(){var e=ca.current;return e===null?Fl.pooledCache:e}function ua(e,t){t===null?ce(ca,ca.current):ce(ca,t.pool)}function da(){var e=la();return e===null?null:{parent:Zi._currentValue,pool:e}}var fa=Error(o(460)),pa=Error(o(474)),ma=Error(o(542)),ha={then:function(){}};function ga(e){return e=e.status,e===`fulfilled`||e===`rejected`}function _a(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(Qt,Qt),t=n),t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,xa(e),e;default:if(typeof t.status==`string`)t.then(Qt,Qt);else{if(e=Fl,e!==null&&100<e.shellSuspendCounter)throw Error(o(482));e=t,e.status=`pending`,e.then(function(e){if(t.status===`pending`){var n=t;n.status=`fulfilled`,n.value=e}},function(e){if(t.status===`pending`){var n=t;n.status=`rejected`,n.reason=e}})}switch(t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,xa(e),e}throw ya=t,fa}}function va(e){try{var t=e._init;return t(e._payload)}catch(e){throw typeof e==`object`&&e&&typeof e.then==`function`?(ya=e,fa):e}}var ya=null;function ba(){if(ya===null)throw Error(o(459));var e=ya;return ya=null,e}function xa(e){if(e===fa||e===ma)throw Error(o(483))}var Sa=null,Ca=0;function wa(e){var t=Ca;return Ca+=1,Sa===null&&(Sa=[]),_a(Sa,e,t)}function Ta(e,t){t=t.props.ref,e.ref=t===void 0?null:t}function Ea(e,t){throw t.$$typeof===g?Error(o(525)):(e=Object.prototype.toString.call(t),Error(o(31,e===`[object Object]`?`object with keys {`+Object.keys(t).join(`, `)+`}`:e)))}function Da(e){function t(t,n){if(e){var r=t.deletions;r===null?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;r!==null;)t(n,r),r=r.sibling;return null}function r(e){for(var t=new Map;e!==null;)e.key===null?t.set(e.index,e):t.set(e.key,e),e=e.sibling;return t}function i(e,t){return e=$r(e,t),e.index=0,e.sibling=null,e}function a(t,n,r){return t.index=r,e?(r=t.alternate,r===null?(t.flags|=67108866,n):(r=r.index,r<n?(t.flags|=67108866,n):r)):(t.flags|=1048576,n)}function s(t){return e&&t.alternate===null&&(t.flags|=67108866),t}function c(e,t,n,r){return t===null||t.tag!==6?(t=ri(n,e.mode,r),t.return=e,t):(t=i(t,n),t.return=e,t)}function l(e,t,n,r){var a=n.type;return a===y?d(e,t,n.props.children,r,n.key):t!==null&&(t.elementType===a||typeof a==`object`&&a&&a.$$typeof===O&&va(a)===t.type)?(t=i(t,n.props),Ta(t,n),t.return=e,t):(t=ti(n.type,n.key,n.props,null,e.mode,r),Ta(t,n),t.return=e,t)}function u(e,t,n,r){return t===null||t.tag!==4||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?(t=ai(n,e.mode,r),t.return=e,t):(t=i(t,n.children||[]),t.return=e,t)}function d(e,t,n,r,a){return t===null||t.tag!==7?(t=ni(n,e.mode,r,a),t.return=e,t):(t=i(t,n),t.return=e,t)}function f(e,t,n){if(typeof t==`string`&&t!==``||typeof t==`number`||typeof t==`bigint`)return t=ri(``+t,e.mode,n),t.return=e,t;if(typeof t==`object`&&t){switch(t.$$typeof){case _:return n=ti(t.type,t.key,t.props,null,e.mode,n),Ta(n,t),n.return=e,n;case v:return t=ai(t,e.mode,n),t.return=e,t;case O:return t=va(t),f(e,t,n)}if(ne(t)||ee(t))return t=ni(t,e.mode,n,null),t.return=e,t;if(typeof t.then==`function`)return f(e,wa(t),n);if(t.$$typeof===C)return f(e,Ki(e,t),n);Ea(e,t)}return null}function p(e,t,n,r){var i=t===null?null:t.key;if(typeof n==`string`&&n!==``||typeof n==`number`||typeof n==`bigint`)return i===null?c(e,t,``+n,r):null;if(typeof n==`object`&&n){switch(n.$$typeof){case _:return n.key===i?l(e,t,n,r):null;case v:return n.key===i?u(e,t,n,r):null;case O:return n=va(n),p(e,t,n,r)}if(ne(n)||ee(n))return i===null?d(e,t,n,r,null):null;if(typeof n.then==`function`)return p(e,t,wa(n),r);if(n.$$typeof===C)return p(e,t,Ki(e,n),r);Ea(e,n)}return null}function m(e,t,n,r,i){if(typeof r==`string`&&r!==``||typeof r==`number`||typeof r==`bigint`)return e=e.get(n)||null,c(t,e,``+r,i);if(typeof r==`object`&&r){switch(r.$$typeof){case _:return e=e.get(r.key===null?n:r.key)||null,l(t,e,r,i);case v:return e=e.get(r.key===null?n:r.key)||null,u(t,e,r,i);case O:return r=va(r),m(e,t,n,r,i)}if(ne(r)||ee(r))return e=e.get(n)||null,d(t,e,r,i,null);if(typeof r.then==`function`)return m(e,t,n,wa(r),i);if(r.$$typeof===C)return m(e,t,n,Ki(t,r),i);Ea(t,r)}return null}function h(i,o,s,c){for(var l=null,u=null,d=o,h=o=0,g=null;d!==null&&h<s.length;h++){d.index>h?(g=d,d=null):g=d.sibling;var _=p(i,d,s[h],c);if(_===null){d===null&&(d=g);break}e&&d&&_.alternate===null&&t(i,d),o=a(_,o,h),u===null?l=_:u.sibling=_,u=_,d=g}if(h===s.length)return n(i,d),wi&&_i(i,h),l;if(d===null){for(;h<s.length;h++)d=f(i,s[h],c),d!==null&&(o=a(d,o,h),u===null?l=d:u.sibling=d,u=d);return wi&&_i(i,h),l}for(d=r(d);h<s.length;h++)g=m(d,i,h,s[h],c),g!==null&&(e&&g.alternate!==null&&d.delete(g.key===null?h:g.key),o=a(g,o,h),u===null?l=g:u.sibling=g,u=g);return e&&d.forEach(function(e){return t(i,e)}),wi&&_i(i,h),l}function g(i,s,c,l){if(c==null)throw Error(o(151));for(var u=null,d=null,h=s,g=s=0,_=null,v=c.next();h!==null&&!v.done;g++,v=c.next()){h.index>g?(_=h,h=null):_=h.sibling;var y=p(i,h,v.value,l);if(y===null){h===null&&(h=_);break}e&&h&&y.alternate===null&&t(i,h),s=a(y,s,g),d===null?u=y:d.sibling=y,d=y,h=_}if(v.done)return n(i,h),wi&&_i(i,g),u;if(h===null){for(;!v.done;g++,v=c.next())v=f(i,v.value,l),v!==null&&(s=a(v,s,g),d===null?u=v:d.sibling=v,d=v);return wi&&_i(i,g),u}for(h=r(h);!v.done;g++,v=c.next())v=m(h,i,g,v.value,l),v!==null&&(e&&v.alternate!==null&&h.delete(v.key===null?g:v.key),s=a(v,s,g),d===null?u=v:d.sibling=v,d=v);return e&&h.forEach(function(e){return t(i,e)}),wi&&_i(i,g),u}function b(e,r,a,c){if(typeof a==`object`&&a&&a.type===y&&a.key===null&&(a=a.props.children),typeof a==`object`&&a){switch(a.$$typeof){case _:a:{for(var l=a.key;r!==null;){if(r.key===l){if(l=a.type,l===y){if(r.tag===7){n(e,r.sibling),c=i(r,a.props.children),c.return=e,e=c;break a}}else if(r.elementType===l||typeof l==`object`&&l&&l.$$typeof===O&&va(l)===r.type){n(e,r.sibling),c=i(r,a.props),Ta(c,a),c.return=e,e=c;break a}n(e,r);break}t(e,r),r=r.sibling}a.type===y?(c=ni(a.props.children,e.mode,c,a.key),c.return=e,e=c):(c=ti(a.type,a.key,a.props,null,e.mode,c),Ta(c,a),c.return=e,e=c)}return s(e);case v:a:{for(l=a.key;r!==null;){if(r.key===l)if(r.tag===4&&r.stateNode.containerInfo===a.containerInfo&&r.stateNode.implementation===a.implementation){n(e,r.sibling),c=i(r,a.children||[]),c.return=e,e=c;break a}else{n(e,r);break}t(e,r),r=r.sibling}c=ai(a,e.mode,c),c.return=e,e=c}return s(e);case O:return a=va(a),b(e,r,a,c)}if(ne(a))return h(e,r,a,c);if(ee(a)){if(l=ee(a),typeof l!=`function`)throw Error(o(150));return a=l.call(a),g(e,r,a,c)}if(typeof a.then==`function`)return b(e,r,wa(a),c);if(a.$$typeof===C)return b(e,r,Ki(e,a),c);Ea(e,a)}return typeof a==`string`&&a!==``||typeof a==`number`||typeof a==`bigint`?(a=``+a,r!==null&&r.tag===6?(n(e,r.sibling),c=i(r,a),c.return=e,e=c):(n(e,r),c=ri(a,e.mode,c),c.return=e,e=c),s(e)):n(e,r)}return function(e,t,n,r){try{Ca=0;var i=b(e,t,n,r);return Sa=null,i}catch(t){if(t===fa||t===ma)throw t;var a=Zr(29,t,null,e.mode);return a.lanes=r,a.return=e,a}}}var Oa=Da(!0),ka=Da(!1),Aa=!1;function ja(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Ma(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Na(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Pa(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,Pl&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,t=Jr(e),qr(e,null,n),t}return Wr(e,r,t,n),Jr(e)}function Fa(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,n&4194048)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,et(e,n)}}function Ia(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var o={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};a===null?i=a=o:a=a.next=o,n=n.next}while(n!==null);a===null?i=a=t:a=a.next=t}else i=a=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,callbacks:r.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var La=!1;function Ra(){if(La){var e=ra;if(e!==null)throw e}}function za(e,t,n,r){La=!1;var i=e.updateQueue;Aa=!1;var a=i.firstBaseUpdate,o=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var c=s,l=c.next;c.next=null,o===null?a=l:o.next=l,o=c;var u=e.alternate;u!==null&&(u=u.updateQueue,s=u.lastBaseUpdate,s!==o&&(s===null?u.firstBaseUpdate=l:s.next=l,u.lastBaseUpdate=c))}if(a!==null){var d=i.baseState;o=0,u=l=c=null,s=a;do{var f=s.lane&-536870913,p=f!==s.lane;if(p?(Ll&f)===f:(r&f)===f){f!==0&&f===na&&(La=!0),u!==null&&(u=u.next={lane:0,tag:s.tag,payload:s.payload,callback:null,next:null});a:{var m=e,g=s;f=t;var _=n;switch(g.tag){case 1:if(m=g.payload,typeof m==`function`){d=m.call(_,d,f);break a}d=m;break a;case 3:m.flags=m.flags&-65537|128;case 0:if(m=g.payload,f=typeof m==`function`?m.call(_,d,f):m,f==null)break a;d=h({},d,f);break a;case 2:Aa=!0}}f=s.callback,f!==null&&(e.flags|=64,p&&(e.flags|=8192),p=i.callbacks,p===null?i.callbacks=[f]:p.push(f))}else p={lane:f,tag:s.tag,payload:s.payload,callback:s.callback,next:null},u===null?(l=u=p,c=d):u=u.next=p,o|=f;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;p=s,s=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(1);u===null&&(c=d),i.baseState=c,i.firstBaseUpdate=l,i.lastBaseUpdate=u,a===null&&(i.shared.lanes=0),Gl|=o,e.lanes=o,e.memoizedState=d}}function Ba(e,t){if(typeof e!=`function`)throw Error(o(191,e));e.call(t)}function Va(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)Ba(n[e],t)}var Ha=oe(null),Ua=oe(0);function Wa(e,t){e=Ul,ce(Ua,e),ce(Ha,t),Ul=e|t.baseLanes}function Ga(){ce(Ua,Ul),ce(Ha,Ha.current)}function Ka(){Ul=Ua.current,se(Ha),se(Ua)}var qa=oe(null),Ja=null;function Ya(e){var t=e.alternate;ce(eo,eo.current&1),ce(qa,e),Ja===null&&(t===null||Ha.current!==null||t.memoizedState!==null)&&(Ja=e)}function Xa(e){ce(eo,eo.current),ce(qa,e),Ja===null&&(Ja=e)}function Za(e){e.tag===22?(ce(eo,eo.current),ce(qa,e),Ja===null&&(Ja=e)):Qa(e)}function Qa(){ce(eo,eo.current),ce(qa,qa.current)}function $a(e){se(qa),Ja===e&&(Ja=null),se(eo)}var eo=oe(0);function to(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||cf(n)||lf(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder===`forwards`||t.memoizedProps.revealOrder===`backwards`||t.memoizedProps.revealOrder===`unstable_legacy-backwards`||t.memoizedProps.revealOrder===`together`)){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var no=0,X=null,ro=null,io=null,ao=!1,oo=!1,so=!1,co=0,lo=0,uo=null,fo=0;function po(){throw Error(o(321))}function mo(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!mr(e[n],t[n]))return!1;return!0}function ho(e,t,n,r,i,a){return no=a,X=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,N.H=e===null||e.memoizedState===null?Ms:Ns,so=!1,a=n(r,i),so=!1,oo&&(a=_o(t,n,r,i)),go(e),a}function go(e){N.H=js;var t=ro!==null&&ro.next!==null;if(no=0,io=ro=X=null,ao=!1,lo=0,uo=null,t)throw Error(o(300));e===null||Xs||(e=e.dependencies,e!==null&&Ui(e)&&(Xs=!0))}function _o(e,t,n,r){X=e;var i=0;do{if(oo&&(uo=null),lo=0,oo=!1,25<=i)throw Error(o(301));if(i+=1,io=ro=null,e.updateQueue!=null){var a=e.updateQueue;a.lastEffect=null,a.events=null,a.stores=null,a.memoCache!=null&&(a.memoCache.index=0)}N.H=Ps,a=t(n,r)}while(oo);return a}function vo(){var e=N.H,t=e.useState()[0];return t=typeof t.then==`function`?To(t):t,e=e.useState()[0],(ro===null?null:ro.memoizedState)!==e&&(X.flags|=1024),t}function yo(){var e=co!==0;return co=0,e}function bo(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function xo(e){if(ao){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}ao=!1}no=0,io=ro=X=null,oo=!1,lo=co=0,uo=null}function So(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return io===null?X.memoizedState=io=e:io=io.next=e,io}function Co(){if(ro===null){var e=X.alternate;e=e===null?null:e.memoizedState}else e=ro.next;var t=io===null?X.memoizedState:io.next;if(t!==null)io=t,ro=e;else{if(e===null)throw X.alternate===null?Error(o(467)):Error(o(310));ro=e,e={memoizedState:ro.memoizedState,baseState:ro.baseState,baseQueue:ro.baseQueue,queue:ro.queue,next:null},io===null?X.memoizedState=io=e:io=io.next=e}return io}function wo(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function To(e){var t=lo;return lo+=1,uo===null&&(uo=[]),e=_a(uo,e,t),t=X,(io===null?t.memoizedState:io.next)===null&&(t=t.alternate,N.H=t===null||t.memoizedState===null?Ms:Ns),e}function Eo(e){if(typeof e==`object`&&e){if(typeof e.then==`function`)return To(e);if(e.$$typeof===C)return Gi(e)}throw Error(o(438,String(e)))}function Do(e){var t=null,n=X.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var r=X.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(t={data:r.data.map(function(e){return e.slice()}),index:0})))}if(t??={data:[],index:0},n===null&&(n=wo(),X.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),r=0;r<e;r++)n[r]=A;return t.index++,n}function Oo(e,t){return typeof t==`function`?t(e):t}function ko(e){return Ao(Co(),ro,e)}function Ao(e,t,n){var r=e.queue;if(r===null)throw Error(o(311));r.lastRenderedReducer=n;var i=e.baseQueue,a=r.pending;if(a!==null){if(i!==null){var s=i.next;i.next=a.next,a.next=s}t.baseQueue=i=a,r.pending=null}if(a=e.baseState,i===null)e.memoizedState=a;else{t=i.next;var c=s=null,l=null,u=t,d=!1;do{var f=u.lane&-536870913;if(f===u.lane?(no&f)===f:(Ll&f)===f){var p=u.revertLane;if(p===0)l!==null&&(l=l.next={lane:0,revertLane:0,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),f===na&&(d=!0);else if((no&p)===p){u=u.next,p===na&&(d=!0);continue}else f={lane:0,revertLane:u.revertLane,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=f,s=a):l=l.next=f,X.lanes|=p,Gl|=p;f=u.action,so&&n(a,f),a=u.hasEagerState?u.eagerState:n(a,f)}else p={lane:f,revertLane:u.revertLane,gesture:u.gesture,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=p,s=a):l=l.next=p,X.lanes|=f,Gl|=f;u=u.next}while(u!==null&&u!==t);if(l===null?s=a:l.next=c,!mr(a,e.memoizedState)&&(Xs=!0,d&&(n=ra,n!==null)))throw n;e.memoizedState=a,e.baseState=s,e.baseQueue=l,r.lastRenderedState=a}return i===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function jo(e){var t=Co(),n=t.queue;if(n===null)throw Error(o(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,a=t.memoizedState;if(i!==null){n.pending=null;var s=i=i.next;do a=e(a,s.action),s=s.next;while(s!==i);mr(a,t.memoizedState)||(Xs=!0),t.memoizedState=a,t.baseQueue===null&&(t.baseState=a),n.lastRenderedState=a}return[a,r]}function Mo(e,t,n){var r=X,i=Co(),a=wi;if(a){if(n===void 0)throw Error(o(407));n=n()}else n=t();var s=!mr((ro||i).memoizedState,n);if(s&&(i.memoizedState=n,Xs=!0),i=i.queue,rs(Fo.bind(null,r,i,e),[e]),i.getSnapshot!==t||s||io!==null&&io.memoizedState.tag&1){if(r.flags|=2048,Qo(9,{destroy:void 0},Po.bind(null,r,i,n,t),null),Fl===null)throw Error(o(349));a||no&127||No(r,t,n)}return n}function No(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=X.updateQueue,t===null?(t=wo(),X.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Po(e,t,n,r){t.value=n,t.getSnapshot=r,Io(t)&&Lo(e)}function Fo(e,t,n){return n(function(){Io(t)&&Lo(e)})}function Io(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!mr(e,n)}catch{return!0}}function Lo(e){var t=Kr(e,2);t!==null&&hu(t,e,2)}function Ro(e){var t=So();if(typeof e==`function`){var n=e;if(e=n(),so){Le(!0);try{n()}finally{Le(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Oo,lastRenderedState:e},t}function zo(e,t,n,r){return e.baseState=n,Ao(e,ro,typeof r==`function`?r:Oo)}function Bo(e,t,n,r,i){if(Os(e))throw Error(o(485));if(e=t.action,e!==null){var a={payload:i,action:e,next:null,isTransition:!0,status:`pending`,value:null,reason:null,listeners:[],then:function(e){a.listeners.push(e)}};N.T===null?a.isTransition=!1:n(!0),r(a),n=t.pending,n===null?(a.next=t.pending=a,Vo(t,a)):(a.next=n.next,t.pending=n.next=a)}}function Vo(e,t){var n=t.action,r=t.payload,i=e.state;if(t.isTransition){var a=N.T,o={};N.T=o;try{var s=n(i,r),c=N.S;c!==null&&c(o,s),Ho(e,t,s)}catch(n){Wo(e,t,n)}finally{a!==null&&o.types!==null&&(a.types=o.types),N.T=a}}else try{a=n(i,r),Ho(e,t,a)}catch(n){Wo(e,t,n)}}function Ho(e,t,n){typeof n==`object`&&n&&typeof n.then==`function`?n.then(function(n){Uo(e,t,n)},function(n){return Wo(e,t,n)}):Uo(e,t,n)}function Uo(e,t,n){t.status=`fulfilled`,t.value=n,Go(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,Vo(e,n)))}function Wo(e,t,n){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do t.status=`rejected`,t.reason=n,Go(t),t=t.next;while(t!==r)}e.action=null}function Go(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Ko(e,t){return t}function qo(e,t){if(wi){var n=Fl.formState;if(n!==null){a:{var r=X;if(wi){if(Ci){b:{for(var i=Ci,a=Ei;i.nodeType!==8;){if(!a){i=null;break b}if(i=df(i.nextSibling),i===null){i=null;break b}}a=i.data,i=a===`F!`||a===`F`?i:null}if(i){Ci=df(i.nextSibling),r=i.data===`F!`;break a}}Oi(r)}r=!1}r&&(t=n[0])}}return n=So(),n.memoizedState=n.baseState=t,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ko,lastRenderedState:t},n.queue=r,n=Ts.bind(null,X,r),r.dispatch=n,r=Ro(!1),a=Ds.bind(null,X,!1,r.queue),r=So(),i={state:t,dispatch:null,action:e,pending:null},r.queue=i,n=Bo.bind(null,X,i,a,n),i.dispatch=n,r.memoizedState=e,[t,n,!1]}function Jo(e){return Yo(Co(),ro,e)}function Yo(e,t,n){if(t=Ao(e,t,Ko)[0],e=ko(Oo)[0],typeof t==`object`&&t&&typeof t.then==`function`)try{var r=To(t)}catch(e){throw e===fa?ma:e}else r=t;t=Co();var i=t.queue,a=i.dispatch;return n!==t.memoizedState&&(X.flags|=2048,Qo(9,{destroy:void 0},Xo.bind(null,i,n),null)),[r,a,e]}function Xo(e,t){e.action=t}function Zo(e){var t=Co(),n=ro;if(n!==null)return Yo(t,n,e);Co(),t=t.memoizedState,n=Co();var r=n.queue.dispatch;return n.memoizedState=e,[t,r,!1]}function Qo(e,t,n,r){return e={tag:e,create:n,deps:r,inst:t,next:null},t=X.updateQueue,t===null&&(t=wo(),X.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function $o(){return Co().memoizedState}function es(e,t,n,r){var i=So();X.flags|=e,i.memoizedState=Qo(1|t,{destroy:void 0},n,r===void 0?null:r)}function ts(e,t,n,r){var i=Co();r=r===void 0?null:r;var a=i.memoizedState.inst;ro!==null&&r!==null&&mo(r,ro.memoizedState.deps)?i.memoizedState=Qo(t,a,n,r):(X.flags|=e,i.memoizedState=Qo(1|t,a,n,r))}function ns(e,t){es(8390656,8,e,t)}function rs(e,t){ts(2048,8,e,t)}function is(e){X.flags|=4;var t=X.updateQueue;if(t===null)t=wo(),X.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function as(e){var t=Co().memoizedState;return is({ref:t,nextImpl:e}),function(){if(Pl&2)throw Error(o(440));return t.impl.apply(void 0,arguments)}}function os(e,t){return ts(4,2,e,t)}function ss(e,t){return ts(4,4,e,t)}function cs(e,t){if(typeof t==`function`){e=e();var n=t(e);return function(){typeof n==`function`?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function ls(e,t,n){n=n==null?null:n.concat([e]),ts(4,4,cs.bind(null,t,e),n)}function us(){}function ds(e,t){var n=Co();t=t===void 0?null:t;var r=n.memoizedState;return t!==null&&mo(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function fs(e,t){var n=Co();t=t===void 0?null:t;var r=n.memoizedState;if(t!==null&&mo(t,r[1]))return r[0];if(r=e(),so){Le(!0);try{e()}finally{Le(!1)}}return n.memoizedState=[r,t],r}function ps(e,t,n){return n===void 0||no&1073741824&&!(Ll&261930)?e.memoizedState=t:(e.memoizedState=n,e=mu(),X.lanes|=e,Gl|=e,n)}function ms(e,t,n,r){return mr(n,t)?n:Ha.current===null?!(no&42)||no&1073741824&&!(Ll&261930)?(Xs=!0,e.memoizedState=n):(e=mu(),X.lanes|=e,Gl|=e,t):(e=ps(e,n,r),mr(e,t)||(Xs=!0),e)}function hs(e,t,n,r,i){var a=P.p;P.p=a!==0&&8>a?a:8;var o=N.T,s={};N.T=s,Ds(e,!1,t,n);try{var c=i(),l=N.S;l!==null&&l(s,c),typeof c==`object`&&c&&typeof c.then==`function`?Es(e,t,oa(c,r),pu(e)):Es(e,t,r,pu(e))}catch(n){Es(e,t,{then:function(){},status:`rejected`,reason:n},pu())}finally{P.p=a,o!==null&&s.types!==null&&(o.types=s.types),N.T=o}}function gs(){}function _s(e,t,n,r){if(e.tag!==5)throw Error(o(476));var i=vs(e).queue;hs(e,i,t,re,n===null?gs:function(){return ys(e),n(r)})}function vs(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:re,baseState:re,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Oo,lastRenderedState:re},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Oo,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function ys(e){var t=vs(e);t.next===null&&(t=e.alternate.memoizedState),Es(e,t.next.queue,{},pu())}function bs(){return Gi(tp)}function xs(){return Co().memoizedState}function Ss(){return Co().memoizedState}function Cs(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=pu();e=Na(n);var r=Pa(t,e,n);r!==null&&(hu(r,t,n),Fa(r,t,n)),t={cache:Qi()},e.payload=t;return}t=t.return}}function ws(e,t,n){var r=pu();n={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},Os(e)?ks(t,n):(n=Gr(e,t,n,r),n!==null&&(hu(n,e,r),As(n,t,r)))}function Ts(e,t,n){Es(e,t,n,pu())}function Es(e,t,n,r){var i={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(Os(e))ks(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var o=t.lastRenderedState,s=a(o,n);if(i.hasEagerState=!0,i.eagerState=s,mr(s,o))return Wr(e,t,i,0),Fl===null&&Ur(),!1}catch{}if(n=Gr(e,t,i,r),n!==null)return hu(n,e,r),As(n,t,r),!0}return!1}function Ds(e,t,n,r){if(r={lane:2,revertLane:fd(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},Os(e)){if(t)throw Error(o(479))}else t=Gr(e,n,r,2),t!==null&&hu(t,e,2)}function Os(e){var t=e.alternate;return e===X||t!==null&&t===X}function ks(e,t){oo=ao=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function As(e,t,n){if(n&4194048){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,et(e,n)}}var js={readContext:Gi,use:Eo,useCallback:po,useContext:po,useEffect:po,useImperativeHandle:po,useLayoutEffect:po,useInsertionEffect:po,useMemo:po,useReducer:po,useRef:po,useState:po,useDebugValue:po,useDeferredValue:po,useTransition:po,useSyncExternalStore:po,useId:po,useHostTransitionStatus:po,useFormState:po,useActionState:po,useOptimistic:po,useMemoCache:po,useCacheRefresh:po};js.useEffectEvent=po;var Ms={readContext:Gi,use:Eo,useCallback:function(e,t){return So().memoizedState=[e,t===void 0?null:t],e},useContext:Gi,useEffect:ns,useImperativeHandle:function(e,t,n){n=n==null?null:n.concat([e]),es(4194308,4,cs.bind(null,t,e),n)},useLayoutEffect:function(e,t){return es(4194308,4,e,t)},useInsertionEffect:function(e,t){es(4,2,e,t)},useMemo:function(e,t){var n=So();t=t===void 0?null:t;var r=e();if(so){Le(!0);try{e()}finally{Le(!1)}}return n.memoizedState=[r,t],r},useReducer:function(e,t,n){var r=So();if(n!==void 0){var i=n(t);if(so){Le(!0);try{n(t)}finally{Le(!1)}}}else i=t;return r.memoizedState=r.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},r.queue=e,e=e.dispatch=ws.bind(null,X,e),[r.memoizedState,e]},useRef:function(e){var t=So();return e={current:e},t.memoizedState=e},useState:function(e){e=Ro(e);var t=e.queue,n=Ts.bind(null,X,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:us,useDeferredValue:function(e,t){return ps(So(),e,t)},useTransition:function(){var e=Ro(!1);return e=hs.bind(null,X,e.queue,!0,!1),So().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var r=X,i=So();if(wi){if(n===void 0)throw Error(o(407));n=n()}else{if(n=t(),Fl===null)throw Error(o(349));Ll&127||No(r,t,n)}i.memoizedState=n;var a={value:n,getSnapshot:t};return i.queue=a,ns(Fo.bind(null,r,a,e),[e]),r.flags|=2048,Qo(9,{destroy:void 0},Po.bind(null,r,a,n,t),null),n},useId:function(){var e=So(),t=Fl.identifierPrefix;if(wi){var n=gi,r=hi;n=(r&~(1<<32-Re(r)-1)).toString(32)+n,t=`_`+t+`R_`+n,n=co++,0<n&&(t+=`H`+n.toString(32)),t+=`_`}else n=fo++,t=`_`+t+`r_`+n.toString(32)+`_`;return e.memoizedState=t},useHostTransitionStatus:bs,useFormState:qo,useActionState:qo,useOptimistic:function(e){var t=So();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=Ds.bind(null,X,!0,n),n.dispatch=t,[e,t]},useMemoCache:Do,useCacheRefresh:function(){return So().memoizedState=Cs.bind(null,X)},useEffectEvent:function(e){var t=So(),n={impl:e};return t.memoizedState=n,function(){if(Pl&2)throw Error(o(440));return n.impl.apply(void 0,arguments)}}},Ns={readContext:Gi,use:Eo,useCallback:ds,useContext:Gi,useEffect:rs,useImperativeHandle:ls,useInsertionEffect:os,useLayoutEffect:ss,useMemo:fs,useReducer:ko,useRef:$o,useState:function(){return ko(Oo)},useDebugValue:us,useDeferredValue:function(e,t){return ms(Co(),ro.memoizedState,e,t)},useTransition:function(){var e=ko(Oo)[0],t=Co().memoizedState;return[typeof e==`boolean`?e:To(e),t]},useSyncExternalStore:Mo,useId:xs,useHostTransitionStatus:bs,useFormState:Jo,useActionState:Jo,useOptimistic:function(e,t){return zo(Co(),ro,e,t)},useMemoCache:Do,useCacheRefresh:Ss};Ns.useEffectEvent=as;var Ps={readContext:Gi,use:Eo,useCallback:ds,useContext:Gi,useEffect:rs,useImperativeHandle:ls,useInsertionEffect:os,useLayoutEffect:ss,useMemo:fs,useReducer:jo,useRef:$o,useState:function(){return jo(Oo)},useDebugValue:us,useDeferredValue:function(e,t){var n=Co();return ro===null?ps(n,e,t):ms(n,ro.memoizedState,e,t)},useTransition:function(){var e=jo(Oo)[0],t=Co().memoizedState;return[typeof e==`boolean`?e:To(e),t]},useSyncExternalStore:Mo,useId:xs,useHostTransitionStatus:bs,useFormState:Zo,useActionState:Zo,useOptimistic:function(e,t){var n=Co();return ro===null?(n.baseState=e,[e,n.queue.dispatch]):zo(n,ro,e,t)},useMemoCache:Do,useCacheRefresh:Ss};Ps.useEffectEvent=as;function Fs(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:h({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Is={enqueueSetState:function(e,t,n){e=e._reactInternals;var r=pu(),i=Na(r);i.payload=t,n!=null&&(i.callback=n),t=Pa(e,i,r),t!==null&&(hu(t,e,r),Fa(t,e,r))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=pu(),i=Na(r);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=Pa(e,i,r),t!==null&&(hu(t,e,r),Fa(t,e,r))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=pu(),r=Na(n);r.tag=2,t!=null&&(r.callback=t),t=Pa(e,r,n),t!==null&&(hu(t,e,n),Fa(t,e,n))}};function Ls(e,t,n,r,i,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate==`function`?e.shouldComponentUpdate(r,a,o):t.prototype&&t.prototype.isPureReactComponent?!hr(n,r)||!hr(i,a):!0}function Rs(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps==`function`&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps==`function`&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Is.enqueueReplaceState(t,t.state,null)}function zs(e,t){var n=t;if(`ref`in t)for(var r in n={},t)r!==`ref`&&(n[r]=t[r]);if(e=e.defaultProps)for(var i in n===t&&(n=h({},n)),e)n[i]===void 0&&(n[i]=e[i]);return n}function Bs(e){zr(e)}function Vs(e){console.error(e)}function Hs(e){zr(e)}function Us(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(e){setTimeout(function(){throw e})}}function Ws(e,t,n){try{var r=e.onCaughtError;r(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(e){setTimeout(function(){throw e})}}function Gs(e,t,n){return n=Na(n),n.tag=3,n.payload={element:null},n.callback=function(){Us(e,t)},n}function Ks(e){return e=Na(e),e.tag=3,e}function qs(e,t,n,r){var i=n.type.getDerivedStateFromError;if(typeof i==`function`){var a=r.value;e.payload=function(){return i(a)},e.callback=function(){Ws(t,n,r)}}var o=n.stateNode;o!==null&&typeof o.componentDidCatch==`function`&&(e.callback=function(){Ws(t,n,r),typeof i!=`function`&&(ru===null?ru=new Set([this]):ru.add(this));var e=r.stack;this.componentDidCatch(r.value,{componentStack:e===null?``:e})})}function Js(e,t,n,r,i){if(n.flags|=32768,typeof r==`object`&&r&&typeof r.then==`function`){if(t=n.alternate,t!==null&&Hi(t,n,i,!0),n=qa.current,n!==null){switch(n.tag){case 31:case 13:return Ja===null?Du():n.alternate===null&&Wl===0&&(Wl=3),n.flags&=-257,n.flags|=65536,n.lanes=i,r===ha?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([r]):t.add(r),Ku(e,r,i)),!1;case 22:return n.flags|=65536,r===ha?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([r])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([r]):n.add(r)),Ku(e,r,i)),!1}throw Error(o(435,n.tag))}return Ku(e,r,i),Du(),!1}if(wi)return t=qa.current,t===null?(r!==Di&&(t=Error(o(423),{cause:r}),Pi(si(t,n))),e=e.current.alternate,e.flags|=65536,i&=-i,e.lanes|=i,r=si(r,n),i=Gs(e.stateNode,r,i),Ia(e,i),Wl!==4&&(Wl=2)):(!(t.flags&65536)&&(t.flags|=256),t.flags|=65536,t.lanes=i,r!==Di&&(e=Error(o(422),{cause:r}),Pi(si(e,n)))),!1;var a=Error(o(520),{cause:r});if(a=si(a,n),Xl===null?Xl=[a]:Xl.push(a),Wl!==4&&(Wl=2),t===null)return!0;r=si(r,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=i&-i,n.lanes|=e,e=Gs(n.stateNode,r,e),Ia(n,e),!1;case 1:if(t=n.type,a=n.stateNode,!(n.flags&128)&&(typeof t.getDerivedStateFromError==`function`||a!==null&&typeof a.componentDidCatch==`function`&&(ru===null||!ru.has(a))))return n.flags|=65536,i&=-i,n.lanes|=i,i=Ks(i),qs(i,e,n,r),Ia(n,i),!1}n=n.return}while(n!==null);return!1}var Ys=Error(o(461)),Xs=!1;function Zs(e,t,n,r){t.child=e===null?ka(t,null,n,r):Oa(t,e.child,n,r)}function Qs(e,t,n,r,i){n=n.render;var a=t.ref;if(`ref`in r){var o={};for(var s in r)s!==`ref`&&(o[s]=r[s])}else o=r;return Wi(t),r=ho(e,t,n,o,a,i),s=yo(),e!==null&&!Xs?(bo(e,t,i),Sc(e,t,i)):(wi&&s&&yi(t),t.flags|=1,Zs(e,t,r,i),t.child)}function $s(e,t,n,r,i){if(e===null){var a=n.type;return typeof a==`function`&&!Qr(a)&&a.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=a,ec(e,t,a,r,i)):(e=ti(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!Cc(e,i)){var o=a.memoizedProps;if(n=n.compare,n=n===null?hr:n,n(o,r)&&e.ref===t.ref)return Sc(e,t,i)}return t.flags|=1,e=$r(a,r),e.ref=t.ref,e.return=t,t.child=e}function ec(e,t,n,r,i){if(e!==null){var a=e.memoizedProps;if(hr(a,r)&&e.ref===t.ref)if(Xs=!1,t.pendingProps=r=a,Cc(e,i))e.flags&131072&&(Xs=!0);else return t.lanes=e.lanes,Sc(e,t,i)}return cc(e,t,n,r,i)}function tc(e,t,n,r){var i=r.children,a=e===null?null:e.memoizedState;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode===`hidden`){if(t.flags&128){if(a=a===null?n:a.baseLanes|n,e!==null){for(r=t.child=e.child,i=0;r!==null;)i=i|r.lanes|r.childLanes,r=r.sibling;r=i&~a}else r=0,t.child=null;return rc(e,t,a,n,r)}if(n&536870912)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&ua(t,a===null?null:a.cachePool),a===null?Ga():Wa(t,a),Za(t);else return r=t.lanes=536870912,rc(e,t,a===null?n:a.baseLanes|n,n,r)}else a===null?(e!==null&&ua(t,null),Ga(),Qa(t)):(ua(t,a.cachePool),Wa(t,a),Qa(t),t.memoizedState=null);return Zs(e,t,i,n),t.child}function nc(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function rc(e,t,n,r,i){var a=la();return a=a===null?null:{parent:Zi._currentValue,pool:a},t.memoizedState={baseLanes:n,cachePool:a},e!==null&&ua(t,null),Ga(),Za(t),e!==null&&Hi(e,t,r,!0),t.childLanes=i,null}function ic(e,t){return t=_c({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function ac(e,t,n){return Oa(t,e.child,null,n),e=ic(t,t.pendingProps),e.flags|=2,$a(t),t.memoizedState=null,e}function oc(e,t,n){var r=t.pendingProps,i=!!(t.flags&128);if(t.flags&=-129,e===null){if(wi){if(r.mode===`hidden`)return e=ic(t,r),t.lanes=536870912,nc(null,e);if(Xa(t),(e=Ci)?(e=sf(e,Ei),e=e!==null&&e.data===`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:mi===null?null:{id:hi,overflow:gi},retryLane:536870912,hydrationErrors:null},n=ii(e),n.return=t,t.child=n,Si=t,Ci=null)):e=null,e===null)throw Oi(t);return t.lanes=536870912,null}return ic(t,r)}var a=e.memoizedState;if(a!==null){var s=a.dehydrated;if(Xa(t),i)if(t.flags&256)t.flags&=-257,t=ac(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(o(558));else if(Xs||Hi(e,t,n,!1),i=(n&e.childLanes)!==0,Xs||i){if(r=Fl,r!==null&&(s=tt(r,n),s!==0&&s!==a.retryLane))throw a.retryLane=s,Kr(e,s),hu(r,e,s),Ys;Du(),t=ac(e,t,n)}else e=a.treeContext,Ci=df(s.nextSibling),Si=t,wi=!0,Ti=null,Ei=!1,e!==null&&xi(t,e),t=ic(t,r),t.flags|=4096;return t}return e=$r(e.child,{mode:r.mode,children:r.children}),e.ref=t.ref,t.child=e,e.return=t,e}function sc(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!=`function`&&typeof n!=`object`)throw Error(o(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function cc(e,t,n,r,i){return Wi(t),n=ho(e,t,n,r,void 0,i),r=yo(),e!==null&&!Xs?(bo(e,t,i),Sc(e,t,i)):(wi&&r&&yi(t),t.flags|=1,Zs(e,t,n,i),t.child)}function lc(e,t,n,r,i,a){return Wi(t),t.updateQueue=null,n=_o(t,r,n,i),go(e),r=yo(),e!==null&&!Xs?(bo(e,t,a),Sc(e,t,a)):(wi&&r&&yi(t),t.flags|=1,Zs(e,t,n,a),t.child)}function uc(e,t,n,r,i){if(Wi(t),t.stateNode===null){var a=Yr,o=n.contextType;typeof o==`object`&&o&&(a=Gi(o)),a=new n(r,a),t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,a.updater=Is,t.stateNode=a,a._reactInternals=t,a=t.stateNode,a.props=r,a.state=t.memoizedState,a.refs={},ja(t),o=n.contextType,a.context=typeof o==`object`&&o?Gi(o):Yr,a.state=t.memoizedState,o=n.getDerivedStateFromProps,typeof o==`function`&&(Fs(t,n,o,r),a.state=t.memoizedState),typeof n.getDerivedStateFromProps==`function`||typeof a.getSnapshotBeforeUpdate==`function`||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(o=a.state,typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount(),o!==a.state&&Is.enqueueReplaceState(a,a.state,null),za(t,r,a,i),Ra(),a.state=t.memoizedState),typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!0}else if(e===null){a=t.stateNode;var s=t.memoizedProps,c=zs(n,s);a.props=c;var l=a.context,u=n.contextType;o=Yr,typeof u==`object`&&u&&(o=Gi(u));var d=n.getDerivedStateFromProps;u=typeof d==`function`||typeof a.getSnapshotBeforeUpdate==`function`,s=t.pendingProps!==s,u||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(s||l!==o)&&Rs(t,a,r,o),Aa=!1;var f=t.memoizedState;a.state=f,za(t,r,a,i),Ra(),l=t.memoizedState,s||f!==l||Aa?(typeof d==`function`&&(Fs(t,n,d,r),l=t.memoizedState),(c=Aa||Ls(t,n,c,r,f,l,o))?(u||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount==`function`&&(t.flags|=4194308)):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),a.props=r,a.state=l,a.context=o,r=c):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,Ma(e,t),o=t.memoizedProps,u=zs(n,o),a.props=u,d=t.pendingProps,f=a.context,l=n.contextType,c=Yr,typeof l==`object`&&l&&(c=Gi(l)),s=n.getDerivedStateFromProps,(l=typeof s==`function`||typeof a.getSnapshotBeforeUpdate==`function`)||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(o!==d||f!==c)&&Rs(t,a,r,c),Aa=!1,f=t.memoizedState,a.state=f,za(t,r,a,i),Ra();var p=t.memoizedState;o!==d||f!==p||Aa||e!==null&&e.dependencies!==null&&Ui(e.dependencies)?(typeof s==`function`&&(Fs(t,n,s,r),p=t.memoizedState),(u=Aa||Ls(t,n,u,r,f,p,c)||e!==null&&e.dependencies!==null&&Ui(e.dependencies))?(l||typeof a.UNSAFE_componentWillUpdate!=`function`&&typeof a.componentWillUpdate!=`function`||(typeof a.componentWillUpdate==`function`&&a.componentWillUpdate(r,p,c),typeof a.UNSAFE_componentWillUpdate==`function`&&a.UNSAFE_componentWillUpdate(r,p,c)),typeof a.componentDidUpdate==`function`&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate==`function`&&(t.flags|=1024)):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=p),a.props=r,a.state=p,a.context=c,r=u):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return a=r,sc(e,t),r=!!(t.flags&128),a||r?(a=t.stateNode,n=r&&typeof n.getDerivedStateFromError!=`function`?null:a.render(),t.flags|=1,e!==null&&r?(t.child=Oa(t,e.child,null,i),t.child=Oa(t,null,n,i)):Zs(e,t,n,i),t.memoizedState=a.state,e=t.child):e=Sc(e,t,i),e}function dc(e,t,n,r){return Mi(),t.flags|=256,Zs(e,t,n,r),t.child}var fc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function pc(e){return{baseLanes:e,cachePool:da()}}function mc(e,t,n){return e=e===null?0:e.childLanes&~n,t&&(e|=Jl),e}function hc(e,t,n){var r=t.pendingProps,i=!1,a=!!(t.flags&128),s;if((s=a)||(s=e!==null&&e.memoizedState===null?!1:!!(eo.current&2)),s&&(i=!0,t.flags&=-129),s=!!(t.flags&32),t.flags&=-33,e===null){if(wi){if(i?Ya(t):Qa(t),(e=Ci)?(e=sf(e,Ei),e=e!==null&&e.data!==`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:mi===null?null:{id:hi,overflow:gi},retryLane:536870912,hydrationErrors:null},n=ii(e),n.return=t,t.child=n,Si=t,Ci=null)):e=null,e===null)throw Oi(t);return lf(e)?t.lanes=32:t.lanes=536870912,null}var c=r.children;return r=r.fallback,i?(Qa(t),i=t.mode,c=_c({mode:`hidden`,children:c},i),r=ni(r,i,n,null),c.return=t,r.return=t,c.sibling=r,t.child=c,r=t.child,r.memoizedState=pc(n),r.childLanes=mc(e,s,n),t.memoizedState=fc,nc(null,r)):(Ya(t),gc(t,c))}var l=e.memoizedState;if(l!==null&&(c=l.dehydrated,c!==null)){if(a)t.flags&256?(Ya(t),t.flags&=-257,t=vc(e,t,n)):t.memoizedState===null?(Qa(t),c=r.fallback,i=t.mode,r=_c({mode:`visible`,children:r.children},i),c=ni(c,i,n,null),c.flags|=2,r.return=t,c.return=t,r.sibling=c,t.child=r,Oa(t,e.child,null,n),r=t.child,r.memoizedState=pc(n),r.childLanes=mc(e,s,n),t.memoizedState=fc,t=nc(null,r)):(Qa(t),t.child=e.child,t.flags|=128,t=null);else if(Ya(t),lf(c)){if(s=c.nextSibling&&c.nextSibling.dataset,s)var u=s.dgst;s=u,r=Error(o(419)),r.stack=``,r.digest=s,Pi({value:r,source:null,stack:null}),t=vc(e,t,n)}else if(Xs||Hi(e,t,n,!1),s=(n&e.childLanes)!==0,Xs||s){if(s=Fl,s!==null&&(r=tt(s,n),r!==0&&r!==l.retryLane))throw l.retryLane=r,Kr(e,r),hu(s,e,r),Ys;cf(c)||Du(),t=vc(e,t,n)}else cf(c)?(t.flags|=192,t.child=e.child,t=null):(e=l.treeContext,Ci=df(c.nextSibling),Si=t,wi=!0,Ti=null,Ei=!1,e!==null&&xi(t,e),t=gc(t,r.children),t.flags|=4096);return t}return i?(Qa(t),c=r.fallback,i=t.mode,l=e.child,u=l.sibling,r=$r(l,{mode:`hidden`,children:r.children}),r.subtreeFlags=l.subtreeFlags&65011712,u===null?(c=ni(c,i,n,null),c.flags|=2):c=$r(u,c),c.return=t,r.return=t,r.sibling=c,t.child=r,nc(null,r),r=t.child,c=e.child.memoizedState,c===null?c=pc(n):(i=c.cachePool,i===null?i=da():(l=Zi._currentValue,i=i.parent===l?i:{parent:l,pool:l}),c={baseLanes:c.baseLanes|n,cachePool:i}),r.memoizedState=c,r.childLanes=mc(e,s,n),t.memoizedState=fc,nc(e.child,r)):(Ya(t),n=e.child,e=n.sibling,n=$r(n,{mode:`visible`,children:r.children}),n.return=t,n.sibling=null,e!==null&&(s=t.deletions,s===null?(t.deletions=[e],t.flags|=16):s.push(e)),t.child=n,t.memoizedState=null,n)}function gc(e,t){return t=_c({mode:`visible`,children:t},e.mode),t.return=e,e.child=t}function _c(e,t){return e=Zr(22,e,null,t),e.lanes=0,e}function vc(e,t,n){return Oa(t,e.child,null,n),e=gc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function yc(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Bi(e.return,t,n)}function bc(e,t,n,r,i,a){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i,treeForkCount:a}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i,o.treeForkCount=a)}function xc(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;r=r.children;var o=eo.current,s=!!(o&2);if(s?(o=o&1|2,t.flags|=128):o&=1,ce(eo,o),Zs(e,t,r,n),r=wi?di:0,!s&&e!==null&&e.flags&128)a:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&yc(e,n,t);else if(e.tag===19)yc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break a;for(;e.sibling===null;){if(e.return===null||e.return===t)break a;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(i){case`forwards`:for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&to(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),bc(t,!1,i,n,a,r);break;case`backwards`:case`unstable_legacy-backwards`:for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&to(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}bc(t,!0,n,null,a,r);break;case`together`:bc(t,!1,null,null,void 0,r);break;default:t.memoizedState=null}return t.child}function Sc(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Gl|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(Hi(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(o(153));if(t.child!==null){for(e=t.child,n=$r(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=$r(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Cc(e,t){return(e.lanes&t)!==0||(e=e.dependencies,!!(e!==null&&Ui(e)))}function wc(e,t,n){switch(t.tag){case 3:pe(t,t.stateNode.containerInfo),Ri(t,Zi,e.memoizedState.cache),Mi();break;case 27:case 5:I(t);break;case 4:pe(t,t.stateNode.containerInfo);break;case 10:Ri(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,Xa(t),null;break;case 13:var r=t.memoizedState;if(r!==null)return r.dehydrated===null?(n&t.child.childLanes)===0?(Ya(t),e=Sc(e,t,n),e===null?null:e.sibling):hc(e,t,n):(Ya(t),t.flags|=128,null);Ya(t);break;case 19:var i=!!(e.flags&128);if(r=(n&t.childLanes)!==0,r||=(Hi(e,t,n,!1),(n&t.childLanes)!==0),i){if(r)return xc(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ce(eo,eo.current),r)break;return null;case 22:return t.lanes=0,tc(e,t,n,t.pendingProps);case 24:Ri(t,Zi,e.memoizedState.cache)}return Sc(e,t,n)}function Tc(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)Xs=!0;else{if(!Cc(e,n)&&!(t.flags&128))return Xs=!1,wc(e,t,n);Xs=!!(e.flags&131072)}else Xs=!1,wi&&t.flags&1048576&&vi(t,di,t.index);switch(t.lanes=0,t.tag){case 16:a:{var r=t.pendingProps;if(e=va(t.elementType),t.type=e,typeof e==`function`)Qr(e)?(r=zs(e,r),t.tag=1,t=uc(null,t,e,r,n)):(t.tag=0,t=cc(null,t,e,r,n));else{if(e!=null){var i=e.$$typeof;if(i===w){t.tag=11,t=Qs(null,t,e,r,n);break a}if(i===D){t.tag=14,t=$s(null,t,e,r,n);break a}}throw t=M(e)||e,Error(o(306,t,``))}}return t;case 0:return cc(e,t,t.type,t.pendingProps,n);case 1:return r=t.type,i=zs(r,t.pendingProps),uc(e,t,r,i,n);case 3:a:{if(pe(t,t.stateNode.containerInfo),e===null)throw Error(o(387));r=t.pendingProps;var a=t.memoizedState;i=a.element,Ma(e,t),za(t,r,null,n);var s=t.memoizedState;if(r=s.cache,Ri(t,Zi,r),r!==a.cache&&Vi(t,[Zi],n,!0),Ra(),r=s.element,a.isDehydrated)if(a={element:r,isDehydrated:!1,cache:s.cache},t.updateQueue.baseState=a,t.memoizedState=a,t.flags&256){t=dc(e,t,r,n);break a}else if(r!==i){i=si(Error(o(424)),t),Pi(i),t=dc(e,t,r,n);break a}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName===`HTML`?e.ownerDocument.body:e}for(Ci=df(e.firstChild),Si=t,wi=!0,Ti=null,Ei=!0,n=ka(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(Mi(),r===i){t=Sc(e,t,n);break a}Zs(e,t,r,n)}t=t.child}return t;case 26:return sc(e,t),e===null?(n=Mf(t.type,null,t.pendingProps,null))?t.memoizedState=n:wi||(n=t.type,e=t.pendingProps,r=Ud(de.current).createElement(n),r[st]=t,r[ct]=e,Ld(r,n,e),bt(r),t.stateNode=r):t.memoizedState=Mf(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return I(t),e===null&&wi&&(r=t.stateNode=hf(t.type,t.pendingProps,de.current),Si=t,Ei=!0,i=Ci,ef(t.type)?(ff=i,Ci=df(r.firstChild)):Ci=i),Zs(e,t,t.pendingProps.children,n),sc(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&wi&&((i=r=Ci)&&(r=af(r,t.type,t.pendingProps,Ei),r===null?i=!1:(t.stateNode=r,Si=t,Ci=df(r.firstChild),Ei=!1,i=!0)),i||Oi(t)),I(t),i=t.type,a=t.pendingProps,s=e===null?null:e.memoizedProps,r=a.children,Kd(i,a)?r=null:s!==null&&Kd(i,s)&&(t.flags|=32),t.memoizedState!==null&&(i=ho(e,t,vo,null,null,n),tp._currentValue=i),sc(e,t),Zs(e,t,r,n),t.child;case 6:return e===null&&wi&&((e=n=Ci)&&(n=of(n,t.pendingProps,Ei),n===null?e=!1:(t.stateNode=n,Si=t,Ci=null,e=!0)),e||Oi(t)),null;case 13:return hc(e,t,n);case 4:return pe(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Oa(t,null,r,n):Zs(e,t,r,n),t.child;case 11:return Qs(e,t,t.type,t.pendingProps,n);case 7:return Zs(e,t,t.pendingProps,n),t.child;case 8:return Zs(e,t,t.pendingProps.children,n),t.child;case 12:return Zs(e,t,t.pendingProps.children,n),t.child;case 10:return r=t.pendingProps,Ri(t,t.type,r.value),Zs(e,t,r.children,n),t.child;case 9:return i=t.type._context,r=t.pendingProps.children,Wi(t),i=Gi(i),r=r(i),t.flags|=1,Zs(e,t,r,n),t.child;case 14:return $s(e,t,t.type,t.pendingProps,n);case 15:return ec(e,t,t.type,t.pendingProps,n);case 19:return xc(e,t,n);case 31:return oc(e,t,n);case 22:return tc(e,t,n,t.pendingProps);case 24:return Wi(t),r=Gi(Zi),e===null?(i=la(),i===null&&(i=Fl,a=Qi(),i.pooledCache=a,a.refCount++,a!==null&&(i.pooledCacheLanes|=n),i=a),t.memoizedState={parent:r,cache:i},ja(t),Ri(t,Zi,i)):((e.lanes&n)!==0&&(Ma(e,t),za(t,null,null,n),Ra()),i=e.memoizedState,a=t.memoizedState,i.parent===r?(r=a.cache,Ri(t,Zi,r),r!==i.cache&&Vi(t,[Zi],n,!0)):(i={parent:r,cache:r},t.memoizedState=i,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=i),Ri(t,Zi,r))),Zs(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(o(156,t.tag))}function Ec(e){e.flags|=4}function Dc(e,t,n,r,i){if((t=!!(e.mode&32))&&(t=!1),t){if(e.flags|=16777216,(i&335544128)===i)if(e.stateNode.complete)e.flags|=8192;else if(wu())e.flags|=8192;else throw ya=ha,pa}else e.flags&=-16777217}function Oc(e,t){if(t.type!==`stylesheet`||t.state.loading&4)e.flags&=-16777217;else if(e.flags|=16777216,!qf(t))if(wu())e.flags|=8192;else throw ya=ha,pa}function kc(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag===22?536870912:Ye(),e.lanes|=t,Yl|=t)}function Ac(e,t){if(!wi)switch(e.tailMode){case`hidden`:t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case`collapsed`:n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function jc(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&65011712,r|=i.flags&65011712,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Mc(e,t,n){var r=t.pendingProps;switch(bi(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return jc(t),null;case 1:return jc(t),null;case 3:return n=t.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),t.memoizedState.cache!==r&&(t.flags|=2048),zi(Zi),F(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(ji(t)?Ec(t):e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Ni())),jc(t),null;case 26:var i=t.type,a=t.memoizedState;return e===null?(Ec(t),a===null?(jc(t),Dc(t,i,null,r,n)):(jc(t),Oc(t,a))):a?a===e.memoizedState?(jc(t),t.flags&=-16777217):(Ec(t),jc(t),Oc(t,a)):(e=e.memoizedProps,e!==r&&Ec(t),jc(t),Dc(t,i,e,r,n)),null;case 27:if(me(t),n=de.current,i=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Ec(t);else{if(!r){if(t.stateNode===null)throw Error(o(166));return jc(t),null}e=le.current,ji(t)?ki(t,e):(e=hf(i,r,n),t.stateNode=e,Ec(t))}return jc(t),null;case 5:if(me(t),i=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Ec(t);else{if(!r){if(t.stateNode===null)throw Error(o(166));return jc(t),null}if(a=le.current,ji(t))ki(t,a);else{var s=Ud(de.current);switch(a){case 1:a=s.createElementNS(`http://www.w3.org/2000/svg`,i);break;case 2:a=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,i);break;default:switch(i){case`svg`:a=s.createElementNS(`http://www.w3.org/2000/svg`,i);break;case`math`:a=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,i);break;case`script`:a=s.createElement(`div`),a.innerHTML=`<script><\/script>`,a=a.removeChild(a.firstChild);break;case`select`:a=typeof r.is==`string`?s.createElement(`select`,{is:r.is}):s.createElement(`select`),r.multiple?a.multiple=!0:r.size&&(a.size=r.size);break;default:a=typeof r.is==`string`?s.createElement(i,{is:r.is}):s.createElement(i)}}a[st]=t,a[ct]=r;a:for(s=t.child;s!==null;){if(s.tag===5||s.tag===6)a.appendChild(s.stateNode);else if(s.tag!==4&&s.tag!==27&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===t)break a;for(;s.sibling===null;){if(s.return===null||s.return===t)break a;s=s.return}s.sibling.return=s.return,s=s.sibling}t.stateNode=a;a:switch(Ld(a,i,r),i){case`button`:case`input`:case`select`:case`textarea`:r=!!r.autoFocus;break a;case`img`:r=!0;break a;default:r=!1}r&&Ec(t)}}return jc(t),Dc(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==r&&Ec(t);else{if(typeof r!=`string`&&t.stateNode===null)throw Error(o(166));if(e=de.current,ji(t)){if(e=t.stateNode,n=t.memoizedProps,r=null,i=Si,i!==null)switch(i.tag){case 27:case 5:r=i.memoizedProps}e[st]=t,e=!!(e.nodeValue===n||r!==null&&!0===r.suppressHydrationWarning||Pd(e.nodeValue,n)),e||Oi(t,!0)}else e=Ud(e).createTextNode(r),e[st]=t,t.stateNode=e}return jc(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(r=ji(t),n!==null){if(e===null){if(!r)throw Error(o(318));if(e=t.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(o(557));e[st]=t}else Mi(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;jc(t),e=!1}else n=Ni(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?($a(t),t):($a(t),null);if(t.flags&128)throw Error(o(558))}return jc(t),null;case 13:if(r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(i=ji(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(o(318));if(i=t.memoizedState,i=i===null?null:i.dehydrated,!i)throw Error(o(317));i[st]=t}else Mi(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;jc(t),i=!1}else i=Ni(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=i),i=!0;if(!i)return t.flags&256?($a(t),t):($a(t),null)}return $a(t),t.flags&128?(t.lanes=n,t):(n=r!==null,e=e!==null&&e.memoizedState!==null,n&&(r=t.child,i=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(i=r.alternate.memoizedState.cachePool.pool),a=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(a=r.memoizedState.cachePool.pool),a!==i&&(r.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),kc(t,t.updateQueue),jc(t),null);case 4:return F(),e===null&&wd(t.stateNode.containerInfo),jc(t),null;case 10:return zi(t.type),jc(t),null;case 19:if(se(eo),r=t.memoizedState,r===null)return jc(t),null;if(i=!!(t.flags&128),a=r.rendering,a===null)if(i)Ac(r,!1);else{if(Wl!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(a=to(e),a!==null){for(t.flags|=128,Ac(r,!1),e=a.updateQueue,t.updateQueue=e,kc(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)ei(n,e),n=n.sibling;return ce(eo,eo.current&1|2),wi&&_i(t,r.treeForkCount),t.child}e=e.sibling}r.tail!==null&&L()>tu&&(t.flags|=128,i=!0,Ac(r,!1),t.lanes=4194304)}else{if(!i)if(e=to(a),e!==null){if(t.flags|=128,i=!0,e=e.updateQueue,t.updateQueue=e,kc(t,e),Ac(r,!0),r.tail===null&&r.tailMode===`hidden`&&!a.alternate&&!wi)return jc(t),null}else 2*L()-r.renderingStartTime>tu&&n!==536870912&&(t.flags|=128,i=!0,Ac(r,!1),t.lanes=4194304);r.isBackwards?(a.sibling=t.child,t.child=a):(e=r.last,e===null?t.child=a:e.sibling=a,r.last=a)}return r.tail===null?(jc(t),null):(e=r.tail,r.rendering=e,r.tail=e.sibling,r.renderingStartTime=L(),e.sibling=null,n=eo.current,ce(eo,i?n&1|2:n&1),wi&&_i(t,r.treeForkCount),e);case 22:case 23:return $a(t),Ka(),r=t.memoizedState!==null,e===null?r&&(t.flags|=8192):e.memoizedState!==null!==r&&(t.flags|=8192),r?n&536870912&&!(t.flags&128)&&(jc(t),t.subtreeFlags&6&&(t.flags|=8192)):jc(t),n=t.updateQueue,n!==null&&kc(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),r=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),r!==n&&(t.flags|=2048),e!==null&&se(ca),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),zi(Zi),jc(t),null;case 25:return null;case 30:return null}throw Error(o(156,t.tag))}function Nc(e,t){switch(bi(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return zi(Zi),F(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return me(t),null;case 31:if(t.memoizedState!==null){if($a(t),t.alternate===null)throw Error(o(340));Mi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if($a(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(o(340));Mi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return se(eo),null;case 4:return F(),null;case 10:return zi(t.type),null;case 22:case 23:return $a(t),Ka(),e!==null&&se(ca),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return zi(Zi),null;case 25:return null;default:return null}}function Pc(e,t){switch(bi(t),t.tag){case 3:zi(Zi),F();break;case 26:case 27:case 5:me(t);break;case 4:F();break;case 31:t.memoizedState!==null&&$a(t);break;case 13:$a(t);break;case 19:se(eo);break;case 10:zi(t.type);break;case 22:case 23:$a(t),Ka(),e!==null&&se(ca);break;case 24:zi(Zi)}}function Fc(e,t){try{var n=t.updateQueue,r=n===null?null:n.lastEffect;if(r!==null){var i=r.next;n=i;do{if((n.tag&e)===e){r=void 0;var a=n.create,o=n.inst;r=a(),o.destroy=r}n=n.next}while(n!==i)}}catch(e){Gu(t,t.return,e)}}function Ic(e,t,n){try{var r=t.updateQueue,i=r===null?null:r.lastEffect;if(i!==null){var a=i.next;r=a;do{if((r.tag&e)===e){var o=r.inst,s=o.destroy;if(s!==void 0){o.destroy=void 0,i=t;var c=n,l=s;try{l()}catch(e){Gu(i,c,e)}}}r=r.next}while(r!==a)}}catch(e){Gu(t,t.return,e)}}function Lc(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{Va(t,n)}catch(t){Gu(e,e.return,t)}}}function Rc(e,t,n){n.props=zs(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(n){Gu(e,t,n)}}function zc(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:r=e.stateNode;break;default:r=e.stateNode}typeof n==`function`?e.refCleanup=n(r):n.current=r}}catch(n){Gu(e,t,n)}}function Bc(e,t){var n=e.ref,r=e.refCleanup;if(n!==null)if(typeof r==`function`)try{r()}catch(n){Gu(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n==`function`)try{n(null)}catch(n){Gu(e,t,n)}else n.current=null}function Vc(e){var t=e.type,n=e.memoizedProps,r=e.stateNode;try{a:switch(t){case`button`:case`input`:case`select`:case`textarea`:n.autoFocus&&r.focus();break a;case`img`:n.src?r.src=n.src:n.srcSet&&(r.srcset=n.srcSet)}}catch(t){Gu(e,e.return,t)}}function Hc(e,t,n){try{var r=e.stateNode;Rd(r,e.type,n,t),r[ct]=t}catch(t){Gu(e,e.return,t)}}function Uc(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&ef(e.type)||e.tag===4}function Wc(e){a:for(;;){for(;e.sibling===null;){if(e.return===null||Uc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&ef(e.type)||e.flags&2||e.child===null||e.tag===4)continue a;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Gc(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Qt));else if(r!==4&&(r===27&&ef(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(Gc(e,t,n),e=e.sibling;e!==null;)Gc(e,t,n),e=e.sibling}function Kc(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(r===27&&ef(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(Kc(e,t,n),e=e.sibling;e!==null;)Kc(e,t,n),e=e.sibling}function qc(e){var t=e.stateNode,n=e.memoizedProps;try{for(var r=e.type,i=t.attributes;i.length;)t.removeAttributeNode(i[0]);Ld(t,r,n),t[st]=e,t[ct]=n}catch(t){Gu(e,e.return,t)}}var Jc=!1,Yc=!1,Xc=!1,Zc=typeof WeakSet==`function`?WeakSet:Set,Qc=null;function $c(e,t){if(e=e.containerInfo,Vd=up,e=yr(e),br(e)){if(`selectionStart`in e)var n={start:e.selectionStart,end:e.selectionEnd};else a:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,a=r.focusNode;r=r.focusOffset;try{n.nodeType,a.nodeType}catch{n=null;break a}var s=0,c=-1,l=-1,u=0,d=0,f=e,p=null;b:for(;;){for(var m;f!==n||i!==0&&f.nodeType!==3||(c=s+i),f!==a||r!==0&&f.nodeType!==3||(l=s+r),f.nodeType===3&&(s+=f.nodeValue.length),(m=f.firstChild)!==null;)p=f,f=m;for(;;){if(f===e)break b;if(p===n&&++u===i&&(c=s),p===a&&++d===r&&(l=s),(m=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=m}n=c===-1||l===-1?null:{start:c,end:l}}else n=null}n||={start:0,end:0}}else n=null;for(Hd={focusedElem:e,selectionRange:n},up=!1,Qc=t;Qc!==null;)if(t=Qc,e=t.child,t.subtreeFlags&1028&&e!==null)e.return=t,Qc=e;else for(;Qc!==null;){switch(t=Qc,a=t.alternate,e=t.flags,t.tag){case 0:if(e&4&&(e=t.updateQueue,e=e===null?null:e.events,e!==null))for(n=0;n<e.length;n++)i=e[n],i.ref.impl=i.nextImpl;break;case 11:case 15:break;case 1:if(e&1024&&a!==null){e=void 0,n=t,i=a.memoizedProps,a=a.memoizedState,r=n.stateNode;try{var h=zs(n.type,i);e=r.getSnapshotBeforeUpdate(h,a),r.__reactInternalSnapshotBeforeUpdate=e}catch(e){Gu(n,n.return,e)}}break;case 3:if(e&1024){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)rf(e);else if(n===1)switch(e.nodeName){case`HEAD`:case`HTML`:case`BODY`:rf(e);break;default:e.textContent=``}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if(e&1024)throw Error(o(163))}if(e=t.sibling,e!==null){e.return=t.return,Qc=e;break}Qc=t.return}}function el(e,t,n){var r=n.flags;switch(n.tag){case 0:case 11:case 15:hl(e,n),r&4&&Fc(5,n);break;case 1:if(hl(e,n),r&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(e){Gu(n,n.return,e)}else{var i=zs(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(i,t,e.__reactInternalSnapshotBeforeUpdate)}catch(e){Gu(n,n.return,e)}}r&64&&Lc(n),r&512&&zc(n,n.return);break;case 3:if(hl(e,n),r&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{Va(e,t)}catch(e){Gu(n,n.return,e)}}break;case 27:t===null&&r&4&&qc(n);case 26:case 5:hl(e,n),t===null&&r&4&&Vc(n),r&512&&zc(n,n.return);break;case 12:hl(e,n);break;case 31:hl(e,n),r&4&&ol(e,n);break;case 13:hl(e,n),r&4&&sl(e,n),r&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=Yu.bind(null,n),uf(e,n))));break;case 22:if(r=n.memoizedState!==null||Jc,!r){t=t!==null&&t.memoizedState!==null||Yc,i=Jc;var a=Yc;Jc=r,(Yc=t)&&!a?_l(e,n,!!(n.subtreeFlags&8772)):hl(e,n),Jc=i,Yc=a}break;case 30:break;default:hl(e,n)}}function tl(e){var t=e.alternate;t!==null&&(e.alternate=null,tl(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&ht(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var nl=null,rl=!1;function il(e,t,n){for(n=n.child;n!==null;)al(e,t,n),n=n.sibling}function al(e,t,n){if(Ie&&typeof Ie.onCommitFiberUnmount==`function`)try{Ie.onCommitFiberUnmount(Fe,n)}catch{}switch(n.tag){case 26:Yc||Bc(n,t),il(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:Yc||Bc(n,t);var r=nl,i=rl;ef(n.type)&&(nl=n.stateNode,rl=!1),il(e,t,n),gf(n.stateNode),nl=r,rl=i;break;case 5:Yc||Bc(n,t);case 6:if(r=nl,i=rl,nl=null,il(e,t,n),nl=r,rl=i,nl!==null)if(rl)try{(nl.nodeType===9?nl.body:nl.nodeName===`HTML`?nl.ownerDocument.body:nl).removeChild(n.stateNode)}catch(e){Gu(n,t,e)}else try{nl.removeChild(n.stateNode)}catch(e){Gu(n,t,e)}break;case 18:nl!==null&&(rl?(e=nl,tf(e.nodeType===9?e.body:e.nodeName===`HTML`?e.ownerDocument.body:e,n.stateNode),Pp(e)):tf(nl,n.stateNode));break;case 4:r=nl,i=rl,nl=n.stateNode.containerInfo,rl=!0,il(e,t,n),nl=r,rl=i;break;case 0:case 11:case 14:case 15:Ic(2,n,t),Yc||Ic(4,n,t),il(e,t,n);break;case 1:Yc||(Bc(n,t),r=n.stateNode,typeof r.componentWillUnmount==`function`&&Rc(n,t,r)),il(e,t,n);break;case 21:il(e,t,n);break;case 22:Yc=(r=Yc)||n.memoizedState!==null,il(e,t,n),Yc=r;break;default:il(e,t,n)}}function ol(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Pp(e)}catch(e){Gu(t,t.return,e)}}}function sl(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Pp(e)}catch(e){Gu(t,t.return,e)}}function cl(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new Zc),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new Zc),t;default:throw Error(o(435,e.tag))}}function ll(e,t){var n=cl(e);t.forEach(function(t){if(!n.has(t)){n.add(t);var r=Xu.bind(null,e,t);t.then(r,r)}})}function ul(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r],a=e,s=t,c=s;a:for(;c!==null;){switch(c.tag){case 27:if(ef(c.type)){nl=c.stateNode,rl=!1;break a}break;case 5:nl=c.stateNode,rl=!1;break a;case 3:case 4:nl=c.stateNode.containerInfo,rl=!0;break a}c=c.return}if(nl===null)throw Error(o(160));al(a,s,i),nl=null,rl=!1,a=i.alternate,a!==null&&(a.return=null),i.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)fl(t,e),t=t.sibling}var dl=null;function fl(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:ul(t,e),pl(e),r&4&&(Ic(3,e,e.return),Fc(3,e),Ic(5,e,e.return));break;case 1:ul(t,e),pl(e),r&512&&(Yc||n===null||Bc(n,n.return)),r&64&&Jc&&(e=e.updateQueue,e!==null&&(r=e.callbacks,r!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?r:n.concat(r))));break;case 26:var i=dl;if(ul(t,e),pl(e),r&512&&(Yc||n===null||Bc(n,n.return)),r&4){var a=n===null?null:n.memoizedState;if(r=e.memoizedState,n===null)if(r===null)if(e.stateNode===null){a:{r=e.type,n=e.memoizedProps,i=i.ownerDocument||i;b:switch(r){case`title`:a=i.getElementsByTagName(`title`)[0],(!a||a[mt]||a[st]||a.namespaceURI===`http://www.w3.org/2000/svg`||a.hasAttribute(`itemprop`))&&(a=i.createElement(r),i.head.insertBefore(a,i.querySelector(`head > title`))),Ld(a,r,n),a[st]=e,bt(a),r=a;break a;case`link`:var s=Wf(`link`,`href`,i).get(r+(n.href||``));if(s){for(var c=0;c<s.length;c++)if(a=s[c],a.getAttribute(`href`)===(n.href==null||n.href===``?null:n.href)&&a.getAttribute(`rel`)===(n.rel==null?null:n.rel)&&a.getAttribute(`title`)===(n.title==null?null:n.title)&&a.getAttribute(`crossorigin`)===(n.crossOrigin==null?null:n.crossOrigin)){s.splice(c,1);break b}}a=i.createElement(r),Ld(a,r,n),i.head.appendChild(a);break;case`meta`:if(s=Wf(`meta`,`content`,i).get(r+(n.content||``))){for(c=0;c<s.length;c++)if(a=s[c],a.getAttribute(`content`)===(n.content==null?null:``+n.content)&&a.getAttribute(`name`)===(n.name==null?null:n.name)&&a.getAttribute(`property`)===(n.property==null?null:n.property)&&a.getAttribute(`http-equiv`)===(n.httpEquiv==null?null:n.httpEquiv)&&a.getAttribute(`charset`)===(n.charSet==null?null:n.charSet)){s.splice(c,1);break b}}a=i.createElement(r),Ld(a,r,n),i.head.appendChild(a);break;default:throw Error(o(468,r))}a[st]=e,bt(a),r=a}e.stateNode=r}else Gf(i,e.type,e.stateNode);else e.stateNode=zf(i,r,e.memoizedProps);else a===r?r===null&&e.stateNode!==null&&Hc(e,e.memoizedProps,n.memoizedProps):(a===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):a.count--,r===null?Gf(i,e.type,e.stateNode):zf(i,r,e.memoizedProps))}break;case 27:ul(t,e),pl(e),r&512&&(Yc||n===null||Bc(n,n.return)),n!==null&&r&4&&Hc(e,e.memoizedProps,n.memoizedProps);break;case 5:if(ul(t,e),pl(e),r&512&&(Yc||n===null||Bc(n,n.return)),e.flags&32){i=e.stateNode;try{Wt(i,``)}catch(t){Gu(e,e.return,t)}}r&4&&e.stateNode!=null&&(i=e.memoizedProps,Hc(e,i,n===null?i:n.memoizedProps)),r&1024&&(Xc=!0);break;case 6:if(ul(t,e),pl(e),r&4){if(e.stateNode===null)throw Error(o(162));r=e.memoizedProps,n=e.stateNode;try{n.nodeValue=r}catch(t){Gu(e,e.return,t)}}break;case 3:if(Uf=null,i=dl,dl=yf(t.containerInfo),ul(t,e),dl=i,pl(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Pp(t.containerInfo)}catch(t){Gu(e,e.return,t)}Xc&&(Xc=!1,ml(e));break;case 4:r=dl,dl=yf(e.stateNode.containerInfo),ul(t,e),pl(e),dl=r;break;case 12:ul(t,e),pl(e);break;case 31:ul(t,e),pl(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,ll(e,r)));break;case 13:ul(t,e),pl(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&($l=L()),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,ll(e,r)));break;case 22:i=e.memoizedState!==null;var l=n!==null&&n.memoizedState!==null,u=Jc,d=Yc;if(Jc=u||i,Yc=d||l,ul(t,e),Yc=d,Jc=u,pl(e),r&8192)a:for(t=e.stateNode,t._visibility=i?t._visibility&-2:t._visibility|1,i&&(n===null||l||Jc||Yc||gl(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){l=n=t;try{if(a=l.stateNode,i)s=a.style,typeof s.setProperty==`function`?s.setProperty(`display`,`none`,`important`):s.display=`none`;else{c=l.stateNode;var f=l.memoizedProps.style,p=f!=null&&f.hasOwnProperty(`display`)?f.display:null;c.style.display=p==null||typeof p==`boolean`?``:(``+p).trim()}}catch(e){Gu(l,l.return,e)}}}else if(t.tag===6){if(n===null){l=t;try{l.stateNode.nodeValue=i?``:l.memoizedProps}catch(e){Gu(l,l.return,e)}}}else if(t.tag===18){if(n===null){l=t;try{var m=l.stateNode;i?nf(m,!0):nf(l.stateNode,!1)}catch(e){Gu(l,l.return,e)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break a;for(;t.sibling===null;){if(t.return===null||t.return===e)break a;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}r&4&&(r=e.updateQueue,r!==null&&(n=r.retryQueue,n!==null&&(r.retryQueue=null,ll(e,n))));break;case 19:ul(t,e),pl(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,ll(e,r)));break;case 30:break;case 21:break;default:ul(t,e),pl(e)}}function pl(e){var t=e.flags;if(t&2){try{for(var n,r=e.return;r!==null;){if(Uc(r)){n=r;break}r=r.return}if(n==null)throw Error(o(160));switch(n.tag){case 27:var i=n.stateNode;Kc(e,Wc(e),i);break;case 5:var a=n.stateNode;n.flags&32&&(Wt(a,``),n.flags&=-33),Kc(e,Wc(e),a);break;case 3:case 4:var s=n.stateNode.containerInfo;Gc(e,Wc(e),s);break;default:throw Error(o(161))}}catch(t){Gu(e,e.return,t)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function ml(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;ml(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function hl(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)el(e,t.alternate,t),t=t.sibling}function gl(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Ic(4,t,t.return),gl(t);break;case 1:Bc(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount==`function`&&Rc(t,t.return,n),gl(t);break;case 27:gf(t.stateNode);case 26:case 5:Bc(t,t.return),gl(t);break;case 22:t.memoizedState===null&&gl(t);break;case 30:gl(t);break;default:gl(t)}e=e.sibling}}function _l(e,t,n){for(n&&=!!(t.subtreeFlags&8772),t=t.child;t!==null;){var r=t.alternate,i=e,a=t,o=a.flags;switch(a.tag){case 0:case 11:case 15:_l(i,a,n),Fc(4,a);break;case 1:if(_l(i,a,n),r=a,i=r.stateNode,typeof i.componentDidMount==`function`)try{i.componentDidMount()}catch(e){Gu(r,r.return,e)}if(r=a,i=r.updateQueue,i!==null){var s=r.stateNode;try{var c=i.shared.hiddenCallbacks;if(c!==null)for(i.shared.hiddenCallbacks=null,i=0;i<c.length;i++)Ba(c[i],s)}catch(e){Gu(r,r.return,e)}}n&&o&64&&Lc(a),zc(a,a.return);break;case 27:qc(a);case 26:case 5:_l(i,a,n),n&&r===null&&o&4&&Vc(a),zc(a,a.return);break;case 12:_l(i,a,n);break;case 31:_l(i,a,n),n&&o&4&&ol(i,a);break;case 13:_l(i,a,n),n&&o&4&&sl(i,a);break;case 22:a.memoizedState===null&&_l(i,a,n),zc(a,a.return);break;case 30:break;default:_l(i,a,n)}t=t.sibling}}function vl(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&$i(n))}function yl(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&$i(e))}function bl(e,t,n,r){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)xl(e,t,n,r),t=t.sibling}function xl(e,t,n,r){var i=t.flags;switch(t.tag){case 0:case 11:case 15:bl(e,t,n,r),i&2048&&Fc(9,t);break;case 1:bl(e,t,n,r);break;case 3:bl(e,t,n,r),i&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&$i(e)));break;case 12:if(i&2048){bl(e,t,n,r),e=t.stateNode;try{var a=t.memoizedProps,o=a.id,s=a.onPostCommit;typeof s==`function`&&s(o,t.alternate===null?`mount`:`update`,e.passiveEffectDuration,-0)}catch(e){Gu(t,t.return,e)}}else bl(e,t,n,r);break;case 31:bl(e,t,n,r);break;case 13:bl(e,t,n,r);break;case 23:break;case 22:a=t.stateNode,o=t.alternate,t.memoizedState===null?a._visibility&2?bl(e,t,n,r):(a._visibility|=2,Sl(e,t,n,r,!!(t.subtreeFlags&10256)||!1)):a._visibility&2?bl(e,t,n,r):Cl(e,t),i&2048&&vl(o,t);break;case 24:bl(e,t,n,r),i&2048&&yl(t.alternate,t);break;default:bl(e,t,n,r)}}function Sl(e,t,n,r,i){for(i&&=!!(t.subtreeFlags&10256)||!1,t=t.child;t!==null;){var a=e,o=t,s=n,c=r,l=o.flags;switch(o.tag){case 0:case 11:case 15:Sl(a,o,s,c,i),Fc(8,o);break;case 23:break;case 22:var u=o.stateNode;o.memoizedState===null?(u._visibility|=2,Sl(a,o,s,c,i)):u._visibility&2?Sl(a,o,s,c,i):Cl(a,o),i&&l&2048&&vl(o.alternate,o);break;case 24:Sl(a,o,s,c,i),i&&l&2048&&yl(o.alternate,o);break;default:Sl(a,o,s,c,i)}t=t.sibling}}function Cl(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,r=t,i=r.flags;switch(r.tag){case 22:Cl(n,r),i&2048&&vl(r.alternate,r);break;case 24:Cl(n,r),i&2048&&yl(r.alternate,r);break;default:Cl(n,r)}t=t.sibling}}var wl=8192;function Tl(e,t,n){if(e.subtreeFlags&wl)for(e=e.child;e!==null;)El(e,t,n),e=e.sibling}function El(e,t,n){switch(e.tag){case 26:Tl(e,t,n),e.flags&wl&&e.memoizedState!==null&&Jf(n,dl,e.memoizedState,e.memoizedProps);break;case 5:Tl(e,t,n);break;case 3:case 4:var r=dl;dl=yf(e.stateNode.containerInfo),Tl(e,t,n),dl=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=wl,wl=16777216,Tl(e,t,n),wl=r):Tl(e,t,n));break;default:Tl(e,t,n)}}function Dl(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Ol(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];Qc=r,jl(r,e)}Dl(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)kl(e),e=e.sibling}function kl(e){switch(e.tag){case 0:case 11:case 15:Ol(e),e.flags&2048&&Ic(9,e,e.return);break;case 3:Ol(e);break;case 12:Ol(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Al(e)):Ol(e);break;default:Ol(e)}}function Al(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];Qc=r,jl(r,e)}Dl(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Ic(8,t,t.return),Al(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Al(t));break;default:Al(t)}e=e.sibling}}function jl(e,t){for(;Qc!==null;){var n=Qc;switch(n.tag){case 0:case 11:case 15:Ic(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var r=n.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:$i(n.memoizedState.cache)}if(r=n.child,r!==null)r.return=n,Qc=r;else a:for(n=e;Qc!==null;){r=Qc;var i=r.sibling,a=r.return;if(tl(r),r===n){Qc=null;break a}if(i!==null){i.return=a,Qc=i;break a}Qc=a}}}var Ml={getCacheForType:function(e){var t=Gi(Zi),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return Gi(Zi).controller.signal}},Nl=typeof WeakMap==`function`?WeakMap:Map,Pl=0,Fl=null,Il=null,Ll=0,Rl=0,zl=null,Bl=!1,Vl=!1,Hl=!1,Ul=0,Wl=0,Gl=0,Kl=0,ql=0,Jl=0,Yl=0,Xl=null,Zl=null,Ql=!1,$l=0,eu=0,tu=1/0,nu=null,ru=null,iu=0,au=null,ou=null,su=0,cu=0,lu=null,uu=null,du=0,fu=null;function pu(){return Pl&2&&Ll!==0?Ll&-Ll:N.T===null?it():fd()}function mu(){if(Jl===0)if(!(Ll&536870912)||wi){var e=Ue;Ue<<=1,!(Ue&3932160)&&(Ue=262144),Jl=e}else Jl=536870912;return e=qa.current,e!==null&&(e.flags|=32),Jl}function hu(e,t,n){(e===Fl&&(Rl===2||Rl===9)||e.cancelPendingCommit!==null)&&(Su(e,0),yu(e,Ll,Jl,!1)),Ze(e,n),(!(Pl&2)||e!==Fl)&&(e===Fl&&(!(Pl&2)&&(Kl|=n),Wl===4&&yu(e,Ll,Jl,!1)),id(e))}function gu(e,t,n){if(Pl&6)throw Error(o(327));var r=!n&&!(t&127)&&(t&e.expiredLanes)===0||qe(e,t),i=r?Au(e,t):Ou(e,t,!0),a=r;do{if(i===0){Vl&&!r&&yu(e,t,0,!1);break}if(n=e.current.alternate,a&&!vu(n)){i=Ou(e,t,!1),a=!1;continue}if(i===2){if(a=t,e.errorRecoveryDisabledLanes&a)var s=0;else s=e.pendingLanes&-536870913,s=s===0?s&536870912?536870912:0:s;if(s!==0){t=s;a:{var c=e;i=Xl;var l=c.current.memoizedState.isDehydrated;if(l&&(Su(c,s).flags|=256),s=Ou(c,s,!1),s!==2){if(Hl&&!l){c.errorRecoveryDisabledLanes|=a,Kl|=a,i=4;break a}a=Zl,Zl=i,a!==null&&(Zl===null?Zl=a:Zl.push.apply(Zl,a))}i=s}if(a=!1,i!==2)continue}}if(i===1){Su(e,0),yu(e,t,0,!0);break}a:{switch(r=e,a=i,a){case 0:case 1:throw Error(o(345));case 4:if((t&4194048)!==t)break;case 6:yu(r,t,Jl,!Bl);break a;case 2:Zl=null;break;case 3:case 5:break;default:throw Error(o(329))}if((t&62914560)===t&&(i=$l+300-L(),10<i)){if(yu(r,t,Jl,!Bl),Ke(r,0,!0)!==0)break a;su=t,r.timeoutHandle=Yd(_u.bind(null,r,n,Zl,nu,Ql,t,Jl,Kl,Yl,Bl,a,`Throttled`,-0,0),i);break a}_u(r,n,Zl,nu,Ql,t,Jl,Kl,Yl,Bl,a,null,-0,0)}break}while(1);id(e)}function _u(e,t,n,r,i,a,o,s,c,l,u,d,f,p){if(e.timeoutHandle=-1,d=t.subtreeFlags,d&8192||(d&16785408)==16785408){d={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Qt},El(t,a,d);var m=(a&62914560)===a?$l-L():(a&4194048)===a?eu-L():0;if(m=Xf(d,m),m!==null){su=a,e.cancelPendingCommit=m(Lu.bind(null,e,t,a,n,r,i,o,s,c,u,d,null,f,p)),yu(e,a,o,!l);return}}Lu(e,t,a,n,r,i,o,s,c)}function vu(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!mr(a(),i))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function yu(e,t,n,r){t&=~ql,t&=~Kl,e.suspendedLanes|=t,e.pingedLanes&=~t,r&&(e.warmLanes|=t),r=e.expirationTimes;for(var i=t;0<i;){var a=31-Re(i),o=1<<a;r[a]=-1,i&=~o}n!==0&&$e(e,n,t)}function bu(){return Pl&6?!0:(ad(0,!1),!1)}function xu(){if(Il!==null){if(Rl===0)var e=Il.return;else e=Il,Li=Ii=null,xo(e),Sa=null,Ca=0,e=Il;for(;e!==null;)Pc(e.alternate,e),e=e.return;Il=null}}function Su(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,Xd(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),su=0,xu(),Fl=e,Il=n=$r(e.current,null),Ll=t,Rl=0,zl=null,Bl=!1,Vl=qe(e,t),Hl=!1,Yl=Jl=ql=Kl=Gl=Wl=0,Zl=Xl=null,Ql=!1,t&8&&(t|=t&32);var r=e.entangledLanes;if(r!==0)for(e=e.entanglements,r&=t;0<r;){var i=31-Re(r),a=1<<i;t|=e[i],r&=~a}return Ul=t,Ur(),n}function Cu(e,t){X=null,N.H=js,t===fa||t===ma?(t=ba(),Rl=3):t===pa?(t=ba(),Rl=4):Rl=t===Ys?8:typeof t==`object`&&t&&typeof t.then==`function`?6:1,zl=t,Il===null&&(Wl=1,Us(e,si(t,e.current)))}function wu(){var e=qa.current;return e===null?!0:(Ll&4194048)===Ll?Ja===null:(Ll&62914560)===Ll||Ll&536870912?e===Ja:!1}function Tu(){var e=N.H;return N.H=js,e===null?js:e}function Eu(){var e=N.A;return N.A=Ml,e}function Du(){Wl=4,Bl||(Ll&4194048)!==Ll&&qa.current!==null||(Vl=!0),!(Gl&134217727)&&!(Kl&134217727)||Fl===null||yu(Fl,Ll,Jl,!1)}function Ou(e,t,n){var r=Pl;Pl|=2;var i=Tu(),a=Eu();(Fl!==e||Ll!==t)&&(nu=null,Su(e,t)),t=!1;var o=Wl;a:do try{if(Rl!==0&&Il!==null){var s=Il,c=zl;switch(Rl){case 8:xu(),o=6;break a;case 3:case 2:case 9:case 6:qa.current===null&&(t=!0);var l=Rl;if(Rl=0,zl=null,Pu(e,s,c,l),n&&Vl){o=0;break a}break;default:l=Rl,Rl=0,zl=null,Pu(e,s,c,l)}}ku(),o=Wl;break}catch(t){Cu(e,t)}while(1);return t&&e.shellSuspendCounter++,Li=Ii=null,Pl=r,N.H=i,N.A=a,Il===null&&(Fl=null,Ll=0,Ur()),o}function ku(){for(;Il!==null;)Mu(Il)}function Au(e,t){var n=Pl;Pl|=2;var r=Tu(),i=Eu();Fl!==e||Ll!==t?(nu=null,tu=L()+500,Su(e,t)):Vl=qe(e,t);a:do try{if(Rl!==0&&Il!==null){t=Il;var a=zl;b:switch(Rl){case 1:Rl=0,zl=null,Pu(e,t,a,1);break;case 2:case 9:if(ga(a)){Rl=0,zl=null,Nu(t);break}t=function(){Rl!==2&&Rl!==9||Fl!==e||(Rl=7),id(e)},a.then(t,t);break a;case 3:Rl=7;break a;case 4:Rl=5;break a;case 7:ga(a)?(Rl=0,zl=null,Nu(t)):(Rl=0,zl=null,Pu(e,t,a,7));break;case 5:var s=null;switch(Il.tag){case 26:s=Il.memoizedState;case 5:case 27:var c=Il;if(s?qf(s):c.stateNode.complete){Rl=0,zl=null;var l=c.sibling;if(l!==null)Il=l;else{var u=c.return;u===null?Il=null:(Il=u,Fu(u))}break b}}Rl=0,zl=null,Pu(e,t,a,5);break;case 6:Rl=0,zl=null,Pu(e,t,a,6);break;case 8:xu(),Wl=6;break a;default:throw Error(o(462))}}ju();break}catch(t){Cu(e,t)}while(1);return Li=Ii=null,N.H=r,N.A=i,Pl=n,Il===null?(Fl=null,Ll=0,Ur(),Wl):0}function ju(){for(;Il!==null&&!Te();)Mu(Il)}function Mu(e){var t=Tc(e.alternate,e,Ul);e.memoizedProps=e.pendingProps,t===null?Fu(e):Il=t}function Nu(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=lc(n,t,t.pendingProps,t.type,void 0,Ll);break;case 11:t=lc(n,t,t.pendingProps,t.type.render,t.ref,Ll);break;case 5:xo(t);default:Pc(n,t),t=Il=ei(t,Ul),t=Tc(n,t,Ul)}e.memoizedProps=e.pendingProps,t===null?Fu(e):Il=t}function Pu(e,t,n,r){Li=Ii=null,xo(t),Sa=null,Ca=0;var i=t.return;try{if(Js(e,i,t,n,Ll)){Wl=1,Us(e,si(n,e.current)),Il=null;return}}catch(t){if(i!==null)throw Il=i,t;Wl=1,Us(e,si(n,e.current)),Il=null;return}t.flags&32768?(wi||r===1?e=!0:Vl||Ll&536870912?e=!1:(Bl=e=!0,(r===2||r===9||r===3||r===6)&&(r=qa.current,r!==null&&r.tag===13&&(r.flags|=16384))),Iu(t,e)):Fu(t)}function Fu(e){var t=e;do{if(t.flags&32768){Iu(t,Bl);return}e=t.return;var n=Mc(t.alternate,t,Ul);if(n!==null){Il=n;return}if(t=t.sibling,t!==null){Il=t;return}Il=t=e}while(t!==null);Wl===0&&(Wl=5)}function Iu(e,t){do{var n=Nc(e.alternate,e);if(n!==null){n.flags&=32767,Il=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){Il=e;return}Il=e=n}while(e!==null);Wl=6,Il=null}function Lu(e,t,n,r,i,a,s,c,l){e.cancelPendingCommit=null;do Hu();while(iu!==0);if(Pl&6)throw Error(o(327));if(t!==null){if(t===e.current)throw Error(o(177));if(a=t.lanes|t.childLanes,a|=Hr,Qe(e,n,a,s,c,l),e===Fl&&(Il=Fl=null,Ll=0),ou=t,au=e,su=n,cu=a,lu=i,uu=r,t.subtreeFlags&10256||t.flags&10256?(e.callbackNode=null,e.callbackPriority=0,Zu(Ae,function(){return Uu(),null})):(e.callbackNode=null,e.callbackPriority=0),r=!!(t.flags&13878),t.subtreeFlags&13878||r){r=N.T,N.T=null,i=P.p,P.p=2,s=Pl,Pl|=4;try{$c(e,t,n)}finally{Pl=s,P.p=i,N.T=r}}iu=1,Ru(),zu(),Bu()}}function Ru(){if(iu===1){iu=0;var e=au,t=ou,n=!!(t.flags&13878);if(t.subtreeFlags&13878||n){n=N.T,N.T=null;var r=P.p;P.p=2;var i=Pl;Pl|=4;try{fl(t,e);var a=Hd,o=yr(e.containerInfo),s=a.focusedElem,c=a.selectionRange;if(o!==s&&s&&s.ownerDocument&&vr(s.ownerDocument.documentElement,s)){if(c!==null&&br(s)){var l=c.start,u=c.end;if(u===void 0&&(u=l),`selectionStart`in s)s.selectionStart=l,s.selectionEnd=Math.min(u,s.value.length);else{var d=s.ownerDocument||document,f=d&&d.defaultView||window;if(f.getSelection){var p=f.getSelection(),m=s.textContent.length,h=Math.min(c.start,m),g=c.end===void 0?h:Math.min(c.end,m);!p.extend&&h>g&&(o=g,g=h,h=o);var _=_r(s,h),v=_r(s,g);if(_&&v&&(p.rangeCount!==1||p.anchorNode!==_.node||p.anchorOffset!==_.offset||p.focusNode!==v.node||p.focusOffset!==v.offset)){var y=d.createRange();y.setStart(_.node,_.offset),p.removeAllRanges(),h>g?(p.addRange(y),p.extend(v.node,v.offset)):(y.setEnd(v.node,v.offset),p.addRange(y))}}}}for(d=[],p=s;p=p.parentNode;)p.nodeType===1&&d.push({element:p,left:p.scrollLeft,top:p.scrollTop});for(typeof s.focus==`function`&&s.focus(),s=0;s<d.length;s++){var b=d[s];b.element.scrollLeft=b.left,b.element.scrollTop=b.top}}up=!!Vd,Hd=Vd=null}finally{Pl=i,P.p=r,N.T=n}}e.current=t,iu=2}}function zu(){if(iu===2){iu=0;var e=au,t=ou,n=!!(t.flags&8772);if(t.subtreeFlags&8772||n){n=N.T,N.T=null;var r=P.p;P.p=2;var i=Pl;Pl|=4;try{el(e,t.alternate,t)}finally{Pl=i,P.p=r,N.T=n}}iu=3}}function Bu(){if(iu===4||iu===3){iu=0,Ee();var e=au,t=ou,n=su,r=uu;t.subtreeFlags&10256||t.flags&10256?iu=5:(iu=0,ou=au=null,Vu(e,e.pendingLanes));var i=e.pendingLanes;if(i===0&&(ru=null),rt(n),t=t.stateNode,Ie&&typeof Ie.onCommitFiberRoot==`function`)try{Ie.onCommitFiberRoot(Fe,t,void 0,(t.current.flags&128)==128)}catch{}if(r!==null){t=N.T,i=P.p,P.p=2,N.T=null;try{for(var a=e.onRecoverableError,o=0;o<r.length;o++){var s=r[o];a(s.value,{componentStack:s.stack})}}finally{N.T=t,P.p=i}}su&3&&Hu(),id(e),i=e.pendingLanes,n&261930&&i&42?e===fu?du++:(du=0,fu=e):du=0,ad(0,!1)}}function Vu(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,$i(t)))}function Hu(){return Ru(),zu(),Bu(),Uu()}function Uu(){if(iu!==5)return!1;var e=au,t=cu;cu=0;var n=rt(su),r=N.T,i=P.p;try{P.p=32>n?32:n,N.T=null,n=lu,lu=null;var a=au,s=su;if(iu=0,ou=au=null,su=0,Pl&6)throw Error(o(331));var c=Pl;if(Pl|=4,kl(a.current),xl(a,a.current,s,n),Pl=c,ad(0,!1),Ie&&typeof Ie.onPostCommitFiberRoot==`function`)try{Ie.onPostCommitFiberRoot(Fe,a)}catch{}return!0}finally{P.p=i,N.T=r,Vu(e,t)}}function Wu(e,t,n){t=si(n,t),t=Gs(e.stateNode,t,2),e=Pa(e,t,2),e!==null&&(Ze(e,2),id(e))}function Gu(e,t,n){if(e.tag===3)Wu(e,e,n);else for(;t!==null;){if(t.tag===3){Wu(t,e,n);break}if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError==`function`||typeof r.componentDidCatch==`function`&&(ru===null||!ru.has(r))){e=si(n,e),n=Ks(2),r=Pa(t,n,2),r!==null&&(qs(n,r,t,e),Ze(r,2),id(r));break}}t=t.return}}function Ku(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Nl;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(Hl=!0,i.add(n),e=qu.bind(null,e,t,n),t.then(e,e))}function qu(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,Fl===e&&(Ll&n)===n&&(Wl===4||Wl===3&&(Ll&62914560)===Ll&&300>L()-$l?!(Pl&2)&&Su(e,0):ql|=n,Yl===Ll&&(Yl=0)),id(e)}function Ju(e,t){t===0&&(t=Ye()),e=Kr(e,t),e!==null&&(Ze(e,t),id(e))}function Yu(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Ju(e,n)}function Xu(e,t){var n=0;switch(e.tag){case 31:case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(o(314))}r!==null&&r.delete(t),Ju(e,n)}function Zu(e,t){return Ce(e,t)}var Qu=null,$u=null,ed=!1,td=!1,nd=!1,rd=0;function id(e){e!==$u&&e.next===null&&($u===null?Qu=$u=e:$u=$u.next=e),td=!0,ed||(ed=!0,dd())}function ad(e,t){if(!nd&&td){nd=!0;do for(var n=!1,r=Qu;r!==null;){if(!t)if(e!==0){var i=r.pendingLanes;if(i===0)var a=0;else{var o=r.suspendedLanes,s=r.pingedLanes;a=(1<<31-Re(42|e)+1)-1,a&=i&~(o&~s),a=a&201326741?a&201326741|1:a?a|2:0}a!==0&&(n=!0,ud(r,a))}else a=Ll,a=Ke(r,r===Fl?a:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),!(a&3)||qe(r,a)||(n=!0,ud(r,a));r=r.next}while(n);nd=!1}}function od(){sd()}function sd(){td=ed=!1;var e=0;rd!==0&&Jd()&&(e=rd);for(var t=L(),n=null,r=Qu;r!==null;){var i=r.next,a=cd(r,t);a===0?(r.next=null,n===null?Qu=i:n.next=i,i===null&&($u=n)):(n=r,(e!==0||a&3)&&(td=!0)),r=i}iu!==0&&iu!==5||ad(e,!1),rd!==0&&(rd=0)}function cd(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes&-62914561;0<a;){var o=31-Re(a),s=1<<o,c=i[o];c===-1?((s&n)===0||(s&r)!==0)&&(i[o]=Je(s,t)):c<=t&&(e.expiredLanes|=s),a&=~s}if(t=Fl,n=Ll,n=Ke(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,n===0||e===t&&(Rl===2||Rl===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&we(r),e.callbackNode=null,e.callbackPriority=0;if(!(n&3)||qe(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(r!==null&&we(r),rt(n)){case 2:case 8:n=ke;break;case 32:n=Ae;break;case 268435456:n=Me;break;default:n=Ae}return r=ld.bind(null,e),n=Ce(n,r),e.callbackPriority=t,e.callbackNode=n,t}return r!==null&&r!==null&&we(r),e.callbackPriority=2,e.callbackNode=null,2}function ld(e,t){if(iu!==0&&iu!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(Hu()&&e.callbackNode!==n)return null;var r=Ll;return r=Ke(e,e===Fl?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(gu(e,r,t),cd(e,L()),e.callbackNode!=null&&e.callbackNode===n?ld.bind(null,e):null)}function ud(e,t){if(Hu())return null;gu(e,t,!0)}function dd(){Qd(function(){Pl&6?Ce(Oe,od):sd()})}function fd(){if(rd===0){var e=na;e===0&&(e=He,He<<=1,!(He&261888)&&(He=256)),rd=e}return rd}function pd(e){return e==null||typeof e==`symbol`||typeof e==`boolean`?null:typeof e==`function`?e:Zt(``+e)}function md(e,t){var n=t.ownerDocument.createElement(`input`);return n.name=t.name,n.value=t.value,e.id&&n.setAttribute(`form`,e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function hd(e,t,n,r,i){if(t===`submit`&&n&&n.stateNode===i){var a=pd((i[ct]||null).action),o=r.submitter;o&&(t=(t=o[ct]||null)?pd(t.formAction):o.getAttribute(`formAction`),t!==null&&(a=t,o=null));var s=new vn(`action`,`action`,null,r,i);e.push({event:s,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(rd!==0){var e=o?md(i,o):new FormData(i);_s(n,{pending:!0,data:e,method:i.method,action:a},null,e)}}else typeof a==`function`&&(s.preventDefault(),e=o?md(i,o):new FormData(i),_s(n,{pending:!0,data:e,method:i.method,action:a},a,e))},currentTarget:i}]})}}for(var gd=0;gd<Lr.length;gd++){var _d=Lr[gd];Rr(_d.toLowerCase(),`on`+(_d[0].toUpperCase()+_d.slice(1)))}Rr(kr,`onAnimationEnd`),Rr(Ar,`onAnimationIteration`),Rr(jr,`onAnimationStart`),Rr(`dblclick`,`onDoubleClick`),Rr(`focusin`,`onFocus`),Rr(`focusout`,`onBlur`),Rr(Mr,`onTransitionRun`),Rr(Nr,`onTransitionStart`),Rr(Pr,`onTransitionCancel`),Rr(Fr,`onTransitionEnd`),Ct(`onMouseEnter`,[`mouseout`,`mouseover`]),Ct(`onMouseLeave`,[`mouseout`,`mouseover`]),Ct(`onPointerEnter`,[`pointerout`,`pointerover`]),Ct(`onPointerLeave`,[`pointerout`,`pointerover`]),R(`onChange`,`change click focusin focusout input keydown keyup selectionchange`.split(` `)),R(`onSelect`,`focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange`.split(` `)),R(`onBeforeInput`,[`compositionend`,`keypress`,`textInput`,`paste`]),R(`onCompositionEnd`,`compositionend focusout keydown keypress keyup mousedown`.split(` `)),R(`onCompositionStart`,`compositionstart focusout keydown keypress keyup mousedown`.split(` `)),R(`onCompositionUpdate`,`compositionupdate focusout keydown keypress keyup mousedown`.split(` `));var vd=`abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting`.split(` `),yd=new Set(`beforetoggle cancel close invalid load scroll scrollend toggle`.split(` `).concat(vd));function bd(e,t){t=!!(t&4);for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;a:{var a=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],c=s.instance,l=s.currentTarget;if(s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){zr(e)}i.currentTarget=null,a=c}else for(o=0;o<r.length;o++){if(s=r[o],c=s.instance,l=s.currentTarget,s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){zr(e)}i.currentTarget=null,a=c}}}}function xd(e,t){var n=t[ut];n===void 0&&(n=t[ut]=new Set);var r=e+`__bubble`;n.has(r)||(Td(t,e,2,!1),n.add(r))}function Sd(e,t,n){var r=0;t&&(r|=4),Td(n,e,r,t)}var Cd=`_reactListening`+Math.random().toString(36).slice(2);function wd(e){if(!e[Cd]){e[Cd]=!0,xt.forEach(function(t){t!==`selectionchange`&&(yd.has(t)||Sd(t,!1,e),Sd(t,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Cd]||(t[Cd]=!0,Sd(`selectionchange`,!1,t))}}function Td(e,t,n,r){switch(_p(t)){case 2:var i=dp;break;case 8:i=fp;break;default:i=pp}n=i.bind(null,t,n,e),i=void 0,!sn||t!==`touchstart`&&t!==`touchmove`&&t!==`wheel`||(i=!0),r?i===void 0?e.addEventListener(t,n,!0):e.addEventListener(t,n,{capture:!0,passive:i}):i===void 0?e.addEventListener(t,n,!1):e.addEventListener(t,n,{passive:i})}function Ed(e,t,n,r,i){var a=r;if(!(t&1)&&!(t&2)&&r!==null)a:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var s=r.stateNode.containerInfo;if(s===i)break;if(o===4)for(o=r.return;o!==null;){var c=o.tag;if((c===3||c===4)&&o.stateNode.containerInfo===i)return;o=o.return}for(;s!==null;){if(o=gt(s),o===null)return;if(c=o.tag,c===5||c===6||c===26||c===27){r=a=o;continue a}s=s.parentNode}}r=r.return}rn(function(){var r=a,i=$t(n),o=[];a:{var s=Ir.get(e);if(s!==void 0){var c=vn,u=e;switch(e){case`keypress`:if(pn(n)===0)break a;case`keydown`:case`keyup`:c=In;break;case`focusin`:u=`focus`,c=Dn;break;case`focusout`:u=`blur`,c=Dn;break;case`beforeblur`:case`afterblur`:c=Dn;break;case`click`:if(n.button===2)break a;case`auxclick`:case`dblclick`:case`mousedown`:case`mousemove`:case`mouseup`:case`mouseout`:case`mouseover`:case`contextmenu`:c=Tn;break;case`drag`:case`dragend`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`dragstart`:case`drop`:c=En;break;case`touchcancel`:case`touchend`:case`touchmove`:case`touchstart`:c=Rn;break;case kr:case Ar:case jr:c=On;break;case Fr:c=zn;break;case`scroll`:case`scrollend`:c=bn;break;case`wheel`:c=H;break;case`copy`:case`cut`:case`paste`:c=kn;break;case`gotpointercapture`:case`lostpointercapture`:case`pointercancel`:case`pointerdown`:case`pointermove`:case`pointerout`:case`pointerover`:case`pointerup`:c=Ln;break;case`toggle`:case`beforetoggle`:c=Bn}var d=!!(t&4),f=!d&&(e===`scroll`||e===`scrollend`),p=d?s===null?null:s+`Capture`:s;d=[];for(var m=r,h;m!==null;){var g=m;if(h=g.stateNode,g=g.tag,g!==5&&g!==26&&g!==27||h===null||p===null||(g=an(m,p),g!=null&&d.push(Dd(m,g,h))),f)break;m=m.return}0<d.length&&(s=new c(s,u,null,n,i),o.push({event:s,listeners:d}))}}if(!(t&7)){a:{if(s=e===`mouseover`||e===`pointerover`,c=e===`mouseout`||e===`pointerout`,s&&n!==B&&(u=n.relatedTarget||n.fromElement)&&(gt(u)||u[lt]))break a;if((c||s)&&(s=i.window===i?i:(s=i.ownerDocument)?s.defaultView||s.parentWindow:window,c?(u=n.relatedTarget||n.toElement,c=r,u=u?gt(u):null,u!==null&&(f=l(u),d=u.tag,u!==f||d!==5&&d!==27&&d!==6)&&(u=null)):(c=null,u=r),c!==u)){if(d=Tn,g=`onMouseLeave`,p=`onMouseEnter`,m=`mouse`,(e===`pointerout`||e===`pointerover`)&&(d=Ln,g=`onPointerLeave`,p=`onPointerEnter`,m=`pointer`),f=c==null?s:vt(c),h=u==null?s:vt(u),s=new d(g,m+`leave`,c,n,i),s.target=f,s.relatedTarget=h,g=null,gt(i)===r&&(d=new d(p,m+`enter`,u,n,i),d.target=h,d.relatedTarget=f,g=d),f=g,c&&u)b:{for(d=kd,p=c,m=u,h=0,g=p;g;g=d(g))h++;g=0;for(var _=m;_;_=d(_))g++;for(;0<h-g;)p=d(p),h--;for(;0<g-h;)m=d(m),g--;for(;h--;){if(p===m||m!==null&&p===m.alternate){d=p;break b}p=d(p),m=d(m)}d=null}else d=null;c!==null&&Ad(o,s,c,d,!1),u!==null&&f!==null&&Ad(o,f,u,d,!0)}}a:{if(s=r?vt(r):window,c=s.nodeName&&s.nodeName.toLowerCase(),c===`select`||c===`input`&&s.type===`file`)var v=nr;else if(Xn(s))if(rr)v=fr;else{v=ur;var y=lr}else c=s.nodeName,!c||c.toLowerCase()!==`input`||s.type!==`checkbox`&&s.type!==`radio`?r&&Jt(r.elementType)&&(v=nr):v=dr;if(v&&=v(e,r)){Zn(o,v,n,i);break a}y&&y(e,s,r),e===`focusout`&&r&&s.type===`number`&&r.memoizedProps.value!=null&&z(s,`number`,s.value)}switch(y=r?vt(r):window,e){case`focusin`:(Xn(y)||y.contentEditable===`true`)&&(Sr=y,Cr=r,q=null);break;case`focusout`:q=Cr=Sr=null;break;case`mousedown`:wr=!0;break;case`contextmenu`:case`mouseup`:case`dragend`:wr=!1,Tr(o,n,i);break;case`selectionchange`:if(xr)break;case`keydown`:case`keyup`:Tr(o,n,i)}var b;if(Hn)b:{switch(e){case`compositionstart`:var x=`onCompositionStart`;break b;case`compositionend`:x=`onCompositionEnd`;break b;case`compositionupdate`:x=`onCompositionUpdate`;break b}x=void 0}else qn?Gn(e,n)&&(x=`onCompositionEnd`):e===`keydown`&&n.keyCode===229&&(x=`onCompositionStart`);x&&(Wn&&n.locale!==`ko`&&(qn||x!==`onCompositionStart`?x===`onCompositionEnd`&&qn&&(b=fn()):(ln=i,un=`value`in ln?ln.value:ln.textContent,qn=!0)),y=Od(r,x),0<y.length&&(x=new An(x,e,null,n,i),o.push({event:x,listeners:y}),b?x.data=b:(b=Kn(n),b!==null&&(x.data=b)))),(b=U?Jn(e,n):K(e,n))&&(x=Od(r,`onBeforeInput`),0<x.length&&(y=new An(`onBeforeInput`,`beforeinput`,null,n,i),o.push({event:y,listeners:x}),y.data=b)),hd(o,e,r,n,i)}bd(o,t)})}function Dd(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Od(e,t){for(var n=t+`Capture`,r=[];e!==null;){var i=e,a=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||a===null||(i=an(e,n),i!=null&&r.unshift(Dd(e,i,a)),i=an(e,t),i!=null&&r.push(Dd(e,i,a))),e.tag===3)return r;e=e.return}return[]}function kd(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Ad(e,t,n,r,i){for(var a=t._reactName,o=[];n!==null&&n!==r;){var s=n,c=s.alternate,l=s.stateNode;if(s=s.tag,c!==null&&c===r)break;s!==5&&s!==26&&s!==27||l===null||(c=l,i?(l=an(n,a),l!=null&&o.unshift(Dd(n,l,c))):i||(l=an(n,a),l!=null&&o.push(Dd(n,l,c)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var jd=/\r\n?/g,Md=/\u0000|\uFFFD/g;function Nd(e){return(typeof e==`string`?e:``+e).replace(jd,`
`).replace(Md,``)}function Pd(e,t){return t=Nd(t),Nd(e)===t}function Fd(e,t,n,r,i,a){switch(n){case`children`:typeof r==`string`?t===`body`||t===`textarea`&&r===``||Wt(e,r):(typeof r==`number`||typeof r==`bigint`)&&t!==`body`&&Wt(e,``+r);break;case`className`:kt(e,`class`,r);break;case`tabIndex`:kt(e,`tabindex`,r);break;case`dir`:case`role`:case`viewBox`:case`width`:case`height`:kt(e,n,r);break;case`style`:qt(e,r,a);break;case`data`:if(t!==`object`){kt(e,`data`,r);break}case`src`:case`href`:if(r===``&&(t!==`a`||n!==`href`)){e.removeAttribute(n);break}if(r==null||typeof r==`function`||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=Zt(``+r),e.setAttribute(n,r);break;case`action`:case`formAction`:if(typeof r==`function`){e.setAttribute(n,`javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')`);break}if(typeof a==`function`&&(n===`formAction`?(t!==`input`&&Fd(e,t,`name`,i.name,i,null),Fd(e,t,`formEncType`,i.formEncType,i,null),Fd(e,t,`formMethod`,i.formMethod,i,null),Fd(e,t,`formTarget`,i.formTarget,i,null)):(Fd(e,t,`encType`,i.encType,i,null),Fd(e,t,`method`,i.method,i,null),Fd(e,t,`target`,i.target,i,null))),r==null||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=Zt(``+r),e.setAttribute(n,r);break;case`onClick`:r!=null&&(e.onclick=Qt);break;case`onScroll`:r!=null&&xd(`scroll`,e);break;case`onScrollEnd`:r!=null&&xd(`scrollend`,e);break;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(o(61));if(n=r.__html,n!=null){if(i.children!=null)throw Error(o(60));e.innerHTML=n}}break;case`multiple`:e.multiple=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`muted`:e.muted=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`defaultValue`:case`defaultChecked`:case`innerHTML`:case`ref`:break;case`autoFocus`:break;case`xlinkHref`:if(r==null||typeof r==`function`||typeof r==`boolean`||typeof r==`symbol`){e.removeAttribute(`xlink:href`);break}n=Zt(``+r),e.setAttributeNS(`http://www.w3.org/1999/xlink`,`xlink:href`,n);break;case`contentEditable`:case`spellCheck`:case`draggable`:case`value`:case`autoReverse`:case`externalResourcesRequired`:case`focusable`:case`preserveAlpha`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``+r):e.removeAttribute(n);break;case`inert`:case`allowFullScreen`:case`async`:case`autoPlay`:case`controls`:case`default`:case`defer`:case`disabled`:case`disablePictureInPicture`:case`disableRemotePlayback`:case`formNoValidate`:case`hidden`:case`loop`:case`noModule`:case`noValidate`:case`open`:case`playsInline`:case`readOnly`:case`required`:case`reversed`:case`scoped`:case`seamless`:case`itemScope`:r&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``):e.removeAttribute(n);break;case`capture`:case`download`:!0===r?e.setAttribute(n,``):!1!==r&&r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,r):e.removeAttribute(n);break;case`cols`:case`rows`:case`size`:case`span`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`&&!isNaN(r)&&1<=r?e.setAttribute(n,r):e.removeAttribute(n);break;case`rowSpan`:case`start`:r==null||typeof r==`function`||typeof r==`symbol`||isNaN(r)?e.removeAttribute(n):e.setAttribute(n,r);break;case`popover`:xd(`beforetoggle`,e),xd(`toggle`,e),Ot(e,`popover`,r);break;case`xlinkActuate`:At(e,`http://www.w3.org/1999/xlink`,`xlink:actuate`,r);break;case`xlinkArcrole`:At(e,`http://www.w3.org/1999/xlink`,`xlink:arcrole`,r);break;case`xlinkRole`:At(e,`http://www.w3.org/1999/xlink`,`xlink:role`,r);break;case`xlinkShow`:At(e,`http://www.w3.org/1999/xlink`,`xlink:show`,r);break;case`xlinkTitle`:At(e,`http://www.w3.org/1999/xlink`,`xlink:title`,r);break;case`xlinkType`:At(e,`http://www.w3.org/1999/xlink`,`xlink:type`,r);break;case`xmlBase`:At(e,`http://www.w3.org/XML/1998/namespace`,`xml:base`,r);break;case`xmlLang`:At(e,`http://www.w3.org/XML/1998/namespace`,`xml:lang`,r);break;case`xmlSpace`:At(e,`http://www.w3.org/XML/1998/namespace`,`xml:space`,r);break;case`is`:Ot(e,`is`,r);break;case`innerText`:case`textContent`:break;default:(!(2<n.length)||n[0]!==`o`&&n[0]!==`O`||n[1]!==`n`&&n[1]!==`N`)&&(n=Yt.get(n)||n,Ot(e,n,r))}}function Id(e,t,n,r,i,a){switch(n){case`style`:qt(e,r,a);break;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(o(61));if(n=r.__html,n!=null){if(i.children!=null)throw Error(o(60));e.innerHTML=n}}break;case`children`:typeof r==`string`?Wt(e,r):(typeof r==`number`||typeof r==`bigint`)&&Wt(e,``+r);break;case`onScroll`:r!=null&&xd(`scroll`,e);break;case`onScrollEnd`:r!=null&&xd(`scrollend`,e);break;case`onClick`:r!=null&&(e.onclick=Qt);break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`innerHTML`:case`ref`:break;case`innerText`:case`textContent`:break;default:if(!St.hasOwnProperty(n))a:{if(n[0]===`o`&&n[1]===`n`&&(i=n.endsWith(`Capture`),t=n.slice(2,i?n.length-7:void 0),a=e[ct]||null,a=a==null?null:a[n],typeof a==`function`&&e.removeEventListener(t,a,i),typeof r==`function`)){typeof a!=`function`&&a!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,r,i);break a}n in e?e[n]=r:!0===r?e.setAttribute(n,``):Ot(e,n,r)}}}function Ld(e,t,n){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`img`:xd(`error`,e),xd(`load`,e);var r=!1,i=!1,a;for(a in n)if(n.hasOwnProperty(a)){var s=n[a];if(s!=null)switch(a){case`src`:r=!0;break;case`srcSet`:i=!0;break;case`children`:case`dangerouslySetInnerHTML`:throw Error(o(137,t));default:Fd(e,t,a,s,n,null)}}i&&Fd(e,t,`srcSet`,n.srcSet,n,null),r&&Fd(e,t,`src`,n.src,n,null);return;case`input`:xd(`invalid`,e);var c=a=s=i=null,l=null,u=null;for(r in n)if(n.hasOwnProperty(r)){var d=n[r];if(d!=null)switch(r){case`name`:i=d;break;case`type`:s=d;break;case`checked`:l=d;break;case`defaultChecked`:u=d;break;case`value`:a=d;break;case`defaultValue`:c=d;break;case`children`:case`dangerouslySetInnerHTML`:if(d!=null)throw Error(o(137,t));break;default:Fd(e,t,r,d,n,null)}}Bt(e,a,c,l,u,s,i,!1);return;case`select`:for(i in xd(`invalid`,e),r=s=a=null,n)if(n.hasOwnProperty(i)&&(c=n[i],c!=null))switch(i){case`value`:a=c;break;case`defaultValue`:s=c;break;case`multiple`:r=c;default:Fd(e,t,i,c,n,null)}t=a,n=s,e.multiple=!!r,t==null?n!=null&&Vt(e,!!r,n,!0):Vt(e,!!r,t,!1);return;case`textarea`:for(s in xd(`invalid`,e),a=i=r=null,n)if(n.hasOwnProperty(s)&&(c=n[s],c!=null))switch(s){case`value`:r=c;break;case`defaultValue`:i=c;break;case`children`:a=c;break;case`dangerouslySetInnerHTML`:if(c!=null)throw Error(o(91));break;default:Fd(e,t,s,c,n,null)}Ut(e,r,i,a);return;case`option`:for(l in n)if(n.hasOwnProperty(l)&&(r=n[l],r!=null))switch(l){case`selected`:e.selected=r&&typeof r!=`function`&&typeof r!=`symbol`;break;default:Fd(e,t,l,r,n,null)}return;case`dialog`:xd(`beforetoggle`,e),xd(`toggle`,e),xd(`cancel`,e),xd(`close`,e);break;case`iframe`:case`object`:xd(`load`,e);break;case`video`:case`audio`:for(r=0;r<vd.length;r++)xd(vd[r],e);break;case`image`:xd(`error`,e),xd(`load`,e);break;case`details`:xd(`toggle`,e);break;case`embed`:case`source`:case`link`:xd(`error`,e),xd(`load`,e);case`area`:case`base`:case`br`:case`col`:case`hr`:case`keygen`:case`meta`:case`param`:case`track`:case`wbr`:case`menuitem`:for(u in n)if(n.hasOwnProperty(u)&&(r=n[u],r!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:throw Error(o(137,t));default:Fd(e,t,u,r,n,null)}return;default:if(Jt(t)){for(d in n)n.hasOwnProperty(d)&&(r=n[d],r!==void 0&&Id(e,t,d,r,n,void 0));return}}for(c in n)n.hasOwnProperty(c)&&(r=n[c],r!=null&&Fd(e,t,c,r,n,null))}function Rd(e,t,n,r){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`input`:var i=null,a=null,s=null,c=null,l=null,u=null,d=null;for(m in n){var f=n[m];if(n.hasOwnProperty(m)&&f!=null)switch(m){case`checked`:break;case`value`:break;case`defaultValue`:l=f;default:r.hasOwnProperty(m)||Fd(e,t,m,null,r,f)}}for(var p in r){var m=r[p];if(f=n[p],r.hasOwnProperty(p)&&(m!=null||f!=null))switch(p){case`type`:a=m;break;case`name`:i=m;break;case`checked`:u=m;break;case`defaultChecked`:d=m;break;case`value`:s=m;break;case`defaultValue`:c=m;break;case`children`:case`dangerouslySetInnerHTML`:if(m!=null)throw Error(o(137,t));break;default:m!==f&&Fd(e,t,p,m,r,f)}}zt(e,s,c,l,u,d,a,i);return;case`select`:for(a in m=s=c=p=null,n)if(l=n[a],n.hasOwnProperty(a)&&l!=null)switch(a){case`value`:break;case`multiple`:m=l;default:r.hasOwnProperty(a)||Fd(e,t,a,null,r,l)}for(i in r)if(a=r[i],l=n[i],r.hasOwnProperty(i)&&(a!=null||l!=null))switch(i){case`value`:p=a;break;case`defaultValue`:c=a;break;case`multiple`:s=a;default:a!==l&&Fd(e,t,i,a,r,l)}t=c,n=s,r=m,p==null?!!r!=!!n&&(t==null?Vt(e,!!n,n?[]:``,!1):Vt(e,!!n,t,!0)):Vt(e,!!n,p,!1);return;case`textarea`:for(c in m=p=null,n)if(i=n[c],n.hasOwnProperty(c)&&i!=null&&!r.hasOwnProperty(c))switch(c){case`value`:break;case`children`:break;default:Fd(e,t,c,null,r,i)}for(s in r)if(i=r[s],a=n[s],r.hasOwnProperty(s)&&(i!=null||a!=null))switch(s){case`value`:p=i;break;case`defaultValue`:m=i;break;case`children`:break;case`dangerouslySetInnerHTML`:if(i!=null)throw Error(o(91));break;default:i!==a&&Fd(e,t,s,i,r,a)}Ht(e,p,m);return;case`option`:for(var h in n)if(p=n[h],n.hasOwnProperty(h)&&p!=null&&!r.hasOwnProperty(h))switch(h){case`selected`:e.selected=!1;break;default:Fd(e,t,h,null,r,p)}for(l in r)if(p=r[l],m=n[l],r.hasOwnProperty(l)&&p!==m&&(p!=null||m!=null))switch(l){case`selected`:e.selected=p&&typeof p!=`function`&&typeof p!=`symbol`;break;default:Fd(e,t,l,p,r,m)}return;case`img`:case`link`:case`area`:case`base`:case`br`:case`col`:case`embed`:case`hr`:case`keygen`:case`meta`:case`param`:case`source`:case`track`:case`wbr`:case`menuitem`:for(var g in n)p=n[g],n.hasOwnProperty(g)&&p!=null&&!r.hasOwnProperty(g)&&Fd(e,t,g,null,r,p);for(u in r)if(p=r[u],m=n[u],r.hasOwnProperty(u)&&p!==m&&(p!=null||m!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:if(p!=null)throw Error(o(137,t));break;default:Fd(e,t,u,p,r,m)}return;default:if(Jt(t)){for(var _ in n)p=n[_],n.hasOwnProperty(_)&&p!==void 0&&!r.hasOwnProperty(_)&&Id(e,t,_,void 0,r,p);for(d in r)p=r[d],m=n[d],!r.hasOwnProperty(d)||p===m||p===void 0&&m===void 0||Id(e,t,d,p,r,m);return}}for(var v in n)p=n[v],n.hasOwnProperty(v)&&p!=null&&!r.hasOwnProperty(v)&&Fd(e,t,v,null,r,p);for(f in r)p=r[f],m=n[f],!r.hasOwnProperty(f)||p===m||p==null&&m==null||Fd(e,t,f,p,r,m)}function zd(e){switch(e){case`css`:case`script`:case`font`:case`img`:case`image`:case`input`:case`link`:return!0;default:return!1}}function Bd(){if(typeof performance.getEntriesByType==`function`){for(var e=0,t=0,n=performance.getEntriesByType(`resource`),r=0;r<n.length;r++){var i=n[r],a=i.transferSize,o=i.initiatorType,s=i.duration;if(a&&s&&zd(o)){for(o=0,s=i.responseEnd,r+=1;r<n.length;r++){var c=n[r],l=c.startTime;if(l>s)break;var u=c.transferSize,d=c.initiatorType;u&&zd(d)&&(c=c.responseEnd,o+=u*(c<s?1:(s-l)/(c-l)))}if(--r,t+=8*(a+o)/(i.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e==`number`)?e:5}var Vd=null,Hd=null;function Ud(e){return e.nodeType===9?e:e.ownerDocument}function Wd(e){switch(e){case`http://www.w3.org/2000/svg`:return 1;case`http://www.w3.org/1998/Math/MathML`:return 2;default:return 0}}function Gd(e,t){if(e===0)switch(t){case`svg`:return 1;case`math`:return 2;default:return 0}return e===1&&t===`foreignObject`?0:e}function Kd(e,t){return e===`textarea`||e===`noscript`||typeof t.children==`string`||typeof t.children==`number`||typeof t.children==`bigint`||typeof t.dangerouslySetInnerHTML==`object`&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var qd=null;function Jd(){var e=window.event;return e&&e.type===`popstate`?e!==qd&&(qd=e,!0):(qd=null,!1)}var Yd=typeof setTimeout==`function`?setTimeout:void 0,Xd=typeof clearTimeout==`function`?clearTimeout:void 0,Zd=typeof Promise==`function`?Promise:void 0,Qd=typeof queueMicrotask==`function`?queueMicrotask:Zd===void 0?Yd:function(e){return Zd.resolve(null).then(e).catch($d)};function $d(e){setTimeout(function(){throw e})}function ef(e){return e===`head`}function tf(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n===`/$`||n===`/&`){if(r===0){e.removeChild(i),Pp(t);return}r--}else if(n===`$`||n===`$?`||n===`$~`||n===`$!`||n===`&`)r++;else if(n===`html`)gf(e.ownerDocument.documentElement);else if(n===`head`){n=e.ownerDocument.head,gf(n);for(var a=n.firstChild;a;){var o=a.nextSibling,s=a.nodeName;a[mt]||s===`SCRIPT`||s===`STYLE`||s===`LINK`&&a.rel.toLowerCase()===`stylesheet`||n.removeChild(a),a=o}}else n===`body`&&gf(e.ownerDocument.body);n=i}while(n);Pp(t)}function nf(e,t){var n=e;e=0;do{var r=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display=`none`):(n.style.display=n._stashedDisplay||``,n.getAttribute(`style`)===``&&n.removeAttribute(`style`)):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=``):n.nodeValue=n._stashedText||``),r&&r.nodeType===8)if(n=r.data,n===`/$`){if(e===0)break;e--}else n!==`$`&&n!==`$?`&&n!==`$~`&&n!==`$!`||e++;n=r}while(n)}function rf(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case`HTML`:case`HEAD`:case`BODY`:rf(n),ht(n);continue;case`SCRIPT`:case`STYLE`:continue;case`LINK`:if(n.rel.toLowerCase()===`stylesheet`)continue}e.removeChild(n)}}function af(e,t,n,r){for(;e.nodeType===1;){var i=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!r&&(e.nodeName!==`INPUT`||e.type!==`hidden`))break}else if(!r)if(t===`input`&&e.type===`hidden`){var a=i.name==null?null:``+i.name;if(i.type===`hidden`&&e.getAttribute(`name`)===a)return e}else return e;else if(!e[mt])switch(t){case`meta`:if(!e.hasAttribute(`itemprop`))break;return e;case`link`:if(a=e.getAttribute(`rel`),a===`stylesheet`&&e.hasAttribute(`data-precedence`)||a!==i.rel||e.getAttribute(`href`)!==(i.href==null||i.href===``?null:i.href)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin)||e.getAttribute(`title`)!==(i.title==null?null:i.title))break;return e;case`style`:if(e.hasAttribute(`data-precedence`))break;return e;case`script`:if(a=e.getAttribute(`src`),(a!==(i.src==null?null:i.src)||e.getAttribute(`type`)!==(i.type==null?null:i.type)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin))&&a&&e.hasAttribute(`async`)&&!e.hasAttribute(`itemprop`))break;return e;default:return e}if(e=df(e.nextSibling),e===null)break}return null}function of(e,t,n){if(t===``)return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!n||(e=df(e.nextSibling),e===null))return null;return e}function sf(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!t||(e=df(e.nextSibling),e===null))return null;return e}function cf(e){return e.data===`$?`||e.data===`$~`}function lf(e){return e.data===`$!`||e.data===`$?`&&e.ownerDocument.readyState!==`loading`}function uf(e,t){var n=e.ownerDocument;if(e.data===`$~`)e._reactRetry=t;else if(e.data!==`$?`||n.readyState!==`loading`)t();else{var r=function(){t(),n.removeEventListener(`DOMContentLoaded`,r)};n.addEventListener(`DOMContentLoaded`,r),e._reactRetry=r}}function df(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t===`$`||t===`$!`||t===`$?`||t===`$~`||t===`&`||t===`F!`||t===`F`)break;if(t===`/$`||t===`/&`)return null}}return e}var ff=null;function pf(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`/$`||n===`/&`){if(t===0)return df(e.nextSibling);t--}else n!==`$`&&n!==`$!`&&n!==`$?`&&n!==`$~`&&n!==`&`||t++}e=e.nextSibling}return null}function mf(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`$`||n===`$!`||n===`$?`||n===`$~`||n===`&`){if(t===0)return e;t--}else n!==`/$`&&n!==`/&`||t++}e=e.previousSibling}return null}function hf(e,t,n){switch(t=Ud(n),e){case`html`:if(e=t.documentElement,!e)throw Error(o(452));return e;case`head`:if(e=t.head,!e)throw Error(o(453));return e;case`body`:if(e=t.body,!e)throw Error(o(454));return e;default:throw Error(o(451))}}function gf(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);ht(e)}var _f=new Map,vf=new Set;function yf(e){return typeof e.getRootNode==`function`?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var bf=P.d;P.d={f:xf,r:Sf,D:Tf,C:Ef,L:Df,m:Of,X:Af,S:kf,M:jf};function xf(){var e=bf.f(),t=bu();return e||t}function Sf(e){var t=_t(e);t!==null&&t.tag===5&&t.type===`form`?ys(t):bf.r(e)}var Cf=typeof document>`u`?null:document;function wf(e,t,n){var r=Cf;if(r&&typeof t==`string`&&t){var i=Rt(t);i=`link[rel="`+e+`"][href="`+i+`"]`,typeof n==`string`&&(i+=`[crossorigin="`+n+`"]`),vf.has(i)||(vf.add(i),e={rel:e,crossOrigin:n,href:t},r.querySelector(i)===null&&(t=r.createElement(`link`),Ld(t,`link`,e),bt(t),r.head.appendChild(t)))}}function Tf(e){bf.D(e),wf(`dns-prefetch`,e,null)}function Ef(e,t){bf.C(e,t),wf(`preconnect`,e,t)}function Df(e,t,n){bf.L(e,t,n);var r=Cf;if(r&&e&&t){var i=`link[rel="preload"][as="`+Rt(t)+`"]`;t===`image`&&n&&n.imageSrcSet?(i+=`[imagesrcset="`+Rt(n.imageSrcSet)+`"]`,typeof n.imageSizes==`string`&&(i+=`[imagesizes="`+Rt(n.imageSizes)+`"]`)):i+=`[href="`+Rt(e)+`"]`;var a=i;switch(t){case`style`:a=Nf(e);break;case`script`:a=Lf(e)}_f.has(a)||(e=h({rel:`preload`,href:t===`image`&&n&&n.imageSrcSet?void 0:e,as:t},n),_f.set(a,e),r.querySelector(i)!==null||t===`style`&&r.querySelector(Pf(a))||t===`script`&&r.querySelector(Rf(a))||(t=r.createElement(`link`),Ld(t,`link`,e),bt(t),r.head.appendChild(t)))}}function Of(e,t){bf.m(e,t);var n=Cf;if(n&&e){var r=t&&typeof t.as==`string`?t.as:`script`,i=`link[rel="modulepreload"][as="`+Rt(r)+`"][href="`+Rt(e)+`"]`,a=i;switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:a=Lf(e)}if(!_f.has(a)&&(e=h({rel:`modulepreload`,href:e},t),_f.set(a,e),n.querySelector(i)===null)){switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:if(n.querySelector(Rf(a)))return}r=n.createElement(`link`),Ld(r,`link`,e),bt(r),n.head.appendChild(r)}}}function kf(e,t,n){bf.S(e,t,n);var r=Cf;if(r&&e){var i=yt(r).hoistableStyles,a=Nf(e);t||=`default`;var o=i.get(a);if(!o){var s={loading:0,preload:null};if(o=r.querySelector(Pf(a)))s.loading=5;else{e=h({rel:`stylesheet`,href:e,"data-precedence":t},n),(n=_f.get(a))&&Vf(e,n);var c=o=r.createElement(`link`);bt(c),Ld(c,`link`,e),c._p=new Promise(function(e,t){c.onload=e,c.onerror=t}),c.addEventListener(`load`,function(){s.loading|=1}),c.addEventListener(`error`,function(){s.loading|=2}),s.loading|=4,Bf(o,t,r)}o={type:`stylesheet`,instance:o,count:1,state:s},i.set(a,o)}}}function Af(e,t){bf.X(e,t);var n=Cf;if(n&&e){var r=yt(n).hoistableScripts,i=Lf(e),a=r.get(i);a||(a=n.querySelector(Rf(i)),a||(e=h({src:e,async:!0},t),(t=_f.get(i))&&Hf(e,t),a=n.createElement(`script`),bt(a),Ld(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function jf(e,t){bf.M(e,t);var n=Cf;if(n&&e){var r=yt(n).hoistableScripts,i=Lf(e),a=r.get(i);a||(a=n.querySelector(Rf(i)),a||(e=h({src:e,async:!0,type:`module`},t),(t=_f.get(i))&&Hf(e,t),a=n.createElement(`script`),bt(a),Ld(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function Mf(e,t,n,r){var i=(i=de.current)?yf(i):null;if(!i)throw Error(o(446));switch(e){case`meta`:case`title`:return null;case`style`:return typeof n.precedence==`string`&&typeof n.href==`string`?(t=Nf(n.href),n=yt(i).hoistableStyles,r=n.get(t),r||(r={type:`style`,instance:null,count:0,state:null},n.set(t,r)),r):{type:`void`,instance:null,count:0,state:null};case`link`:if(n.rel===`stylesheet`&&typeof n.href==`string`&&typeof n.precedence==`string`){e=Nf(n.href);var a=yt(i).hoistableStyles,s=a.get(e);if(s||(i=i.ownerDocument||i,s={type:`stylesheet`,instance:null,count:0,state:{loading:0,preload:null}},a.set(e,s),(a=i.querySelector(Pf(e)))&&!a._p&&(s.instance=a,s.state.loading=5),_f.has(e)||(n={rel:`preload`,as:`style`,href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},_f.set(e,n),a||If(i,e,n,s.state))),t&&r===null)throw Error(o(528,``));return s}if(t&&r!==null)throw Error(o(529,``));return null;case`script`:return t=n.async,n=n.src,typeof n==`string`&&t&&typeof t!=`function`&&typeof t!=`symbol`?(t=Lf(n),n=yt(i).hoistableScripts,r=n.get(t),r||(r={type:`script`,instance:null,count:0,state:null},n.set(t,r)),r):{type:`void`,instance:null,count:0,state:null};default:throw Error(o(444,e))}}function Nf(e){return`href="`+Rt(e)+`"`}function Pf(e){return`link[rel="stylesheet"][`+e+`]`}function Ff(e){return h({},e,{"data-precedence":e.precedence,precedence:null})}function If(e,t,n,r){e.querySelector(`link[rel="preload"][as="style"][`+t+`]`)?r.loading=1:(t=e.createElement(`link`),r.preload=t,t.addEventListener(`load`,function(){return r.loading|=1}),t.addEventListener(`error`,function(){return r.loading|=2}),Ld(t,`link`,n),bt(t),e.head.appendChild(t))}function Lf(e){return`[src="`+Rt(e)+`"]`}function Rf(e){return`script[async]`+e}function zf(e,t,n){if(t.count++,t.instance===null)switch(t.type){case`style`:var r=e.querySelector(`style[data-href~="`+Rt(n.href)+`"]`);if(r)return t.instance=r,bt(r),r;var i=h({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement(`style`),bt(r),Ld(r,`style`,i),Bf(r,n.precedence,e),t.instance=r;case`stylesheet`:i=Nf(n.href);var a=e.querySelector(Pf(i));if(a)return t.state.loading|=4,t.instance=a,bt(a),a;r=Ff(n),(i=_f.get(i))&&Vf(r,i),a=(e.ownerDocument||e).createElement(`link`),bt(a);var s=a;return s._p=new Promise(function(e,t){s.onload=e,s.onerror=t}),Ld(a,`link`,r),t.state.loading|=4,Bf(a,n.precedence,e),t.instance=a;case`script`:return a=Lf(n.src),(i=e.querySelector(Rf(a)))?(t.instance=i,bt(i),i):(r=n,(i=_f.get(a))&&(r=h({},n),Hf(r,i)),e=e.ownerDocument||e,i=e.createElement(`script`),bt(i),Ld(i,`link`,r),e.head.appendChild(i),t.instance=i);case`void`:return null;default:throw Error(o(443,t.type))}else t.type===`stylesheet`&&!(t.state.loading&4)&&(r=t.instance,t.state.loading|=4,Bf(r,n.precedence,e));return t.instance}function Bf(e,t,n){for(var r=n.querySelectorAll(`link[rel="stylesheet"][data-precedence],style[data-precedence]`),i=r.length?r[r.length-1]:null,a=i,o=0;o<r.length;o++){var s=r[o];if(s.dataset.precedence===t)a=s;else if(a!==i)break}a?a.parentNode.insertBefore(e,a.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Vf(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.title??=t.title}function Hf(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.integrity??=t.integrity}var Uf=null;function Wf(e,t,n){if(Uf===null){var r=new Map,i=Uf=new Map;i.set(n,r)}else i=Uf,r=i.get(n),r||(r=new Map,i.set(n,r));if(r.has(e))return r;for(r.set(e,null),n=n.getElementsByTagName(e),i=0;i<n.length;i++){var a=n[i];if(!(a[mt]||a[st]||e===`link`&&a.getAttribute(`rel`)===`stylesheet`)&&a.namespaceURI!==`http://www.w3.org/2000/svg`){var o=a.getAttribute(t)||``;o=e+o;var s=r.get(o);s?s.push(a):r.set(o,[a])}}return r}function Gf(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t===`title`?e.querySelector(`head > title`):null)}function Kf(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case`meta`:case`title`:return!0;case`style`:if(typeof t.precedence!=`string`||typeof t.href!=`string`||t.href===``)break;return!0;case`link`:if(typeof t.rel!=`string`||typeof t.href!=`string`||t.href===``||t.onLoad||t.onError)break;switch(t.rel){case`stylesheet`:return e=t.disabled,typeof t.precedence==`string`&&e==null;default:return!0}case`script`:if(t.async&&typeof t.async!=`function`&&typeof t.async!=`symbol`&&!t.onLoad&&!t.onError&&t.src&&typeof t.src==`string`)return!0}return!1}function qf(e){return!(e.type===`stylesheet`&&!(e.state.loading&3))}function Jf(e,t,n,r){if(n.type===`stylesheet`&&(typeof r.media!=`string`||!1!==matchMedia(r.media).matches)&&!(n.state.loading&4)){if(n.instance===null){var i=Nf(r.href),a=t.querySelector(Pf(i));if(a){t=a._p,typeof t==`object`&&t&&typeof t.then==`function`&&(e.count++,e=Zf.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=a,bt(a);return}a=t.ownerDocument||t,r=Ff(r),(i=_f.get(i))&&Vf(r,i),a=a.createElement(`link`),bt(a);var o=a;o._p=new Promise(function(e,t){o.onload=e,o.onerror=t}),Ld(a,`link`,r),n.instance=a}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&!(n.state.loading&3)&&(e.count++,n=Zf.bind(e),t.addEventListener(`load`,n),t.addEventListener(`error`,n))}}var Yf=0;function Xf(e,t){return e.stylesheets&&e.count===0&&$f(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var r=setTimeout(function(){if(e.stylesheets&&$f(e,e.stylesheets),e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}},6e4+t);0<e.imgBytes&&Yf===0&&(Yf=62500*Bd());var i=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&$f(e,e.stylesheets),e.unsuspend)){var t=e.unsuspend;e.unsuspend=null,t()}},(e.imgBytes>Yf?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(i)}}:null}function Zf(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)$f(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Qf=null;function $f(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Qf=new Map,t.forEach(ep,e),Qf=null,Zf.call(e))}function ep(e,t){if(!(t.state.loading&4)){var n=Qf.get(e);if(n)var r=n.get(null);else{n=new Map,Qf.set(e,n);for(var i=e.querySelectorAll(`link[data-precedence],style[data-precedence]`),a=0;a<i.length;a++){var o=i[a];(o.nodeName===`LINK`||o.getAttribute(`media`)!==`not all`)&&(n.set(o.dataset.precedence,o),r=o)}r&&n.set(null,r)}i=t.instance,o=i.getAttribute(`data-precedence`),a=n.get(o)||r,a===r&&n.set(null,i),n.set(o,i),this.count++,r=Zf.bind(this),i.addEventListener(`load`,r),i.addEventListener(`error`,r),a?a.parentNode.insertBefore(i,a.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(i,e.firstChild)),t.state.loading|=4}}var tp={$$typeof:C,Provider:null,Consumer:null,_currentValue:re,_currentValue2:re,_threadCount:0};function np(e,t,n,r,i,a,o,s,c){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Xe(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Xe(0),this.hiddenUpdates=Xe(null),this.identifierPrefix=r,this.onUncaughtError=i,this.onCaughtError=a,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=c,this.incompleteTransitions=new Map}function rp(e,t,n,r,i,a,o,s,c,l,u,d){return e=new np(e,t,n,o,c,l,u,d,s),t=1,!0===a&&(t|=24),a=Zr(3,null,null,t),e.current=a,a.stateNode=e,t=Qi(),t.refCount++,e.pooledCache=t,t.refCount++,a.memoizedState={element:r,isDehydrated:n,cache:t},ja(a),e}function ip(e){return e?(e=Yr,e):Yr}function ap(e,t,n,r,i,a){i=ip(i),r.context===null?r.context=i:r.pendingContext=i,r=Na(t),r.payload={element:n},a=a===void 0?null:a,a!==null&&(r.callback=a),n=Pa(e,r,t),n!==null&&(hu(n,e,t),Fa(n,e,t))}function op(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function sp(e,t){op(e,t),(e=e.alternate)&&op(e,t)}function cp(e){if(e.tag===13||e.tag===31){var t=Kr(e,67108864);t!==null&&hu(t,e,67108864),sp(e,67108864)}}function lp(e){if(e.tag===13||e.tag===31){var t=pu();t=nt(t);var n=Kr(e,t);n!==null&&hu(n,e,t),sp(e,t)}}var up=!0;function dp(e,t,n,r){var i=N.T;N.T=null;var a=P.p;try{P.p=2,pp(e,t,n,r)}finally{P.p=a,N.T=i}}function fp(e,t,n,r){var i=N.T;N.T=null;var a=P.p;try{P.p=8,pp(e,t,n,r)}finally{P.p=a,N.T=i}}function pp(e,t,n,r){if(up){var i=mp(r);if(i===null)Ed(e,t,r,hp,n),wp(e,r);else if(Ep(i,e,t,n,r))r.stopPropagation();else if(wp(e,r),t&4&&-1<Cp.indexOf(e)){for(;i!==null;){var a=_t(i);if(a!==null)switch(a.tag){case 3:if(a=a.stateNode,a.current.memoizedState.isDehydrated){var o=Ge(a.pendingLanes);if(o!==0){var s=a;for(s.pendingLanes|=2,s.entangledLanes|=2;o;){var c=1<<31-Re(o);s.entanglements[1]|=c,o&=~c}id(a),!(Pl&6)&&(tu=L()+500,ad(0,!1))}}break;case 31:case 13:s=Kr(a,2),s!==null&&hu(s,a,2),bu(),sp(a,2)}if(a=mp(r),a===null&&Ed(e,t,r,hp,n),a===i)break;i=a}i!==null&&r.stopPropagation()}else Ed(e,t,r,null,n)}}function mp(e){return e=$t(e),gp(e)}var hp=null;function gp(e){if(hp=null,e=gt(e),e!==null){var t=l(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=u(t),e!==null)return e;e=null}else if(n===31){if(e=d(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return hp=e,null}function _p(e){switch(e){case`beforetoggle`:case`cancel`:case`click`:case`close`:case`contextmenu`:case`copy`:case`cut`:case`auxclick`:case`dblclick`:case`dragend`:case`dragstart`:case`drop`:case`focusin`:case`focusout`:case`input`:case`invalid`:case`keydown`:case`keypress`:case`keyup`:case`mousedown`:case`mouseup`:case`paste`:case`pause`:case`play`:case`pointercancel`:case`pointerdown`:case`pointerup`:case`ratechange`:case`reset`:case`resize`:case`seeked`:case`submit`:case`toggle`:case`touchcancel`:case`touchend`:case`touchstart`:case`volumechange`:case`change`:case`selectionchange`:case`textInput`:case`compositionstart`:case`compositionend`:case`compositionupdate`:case`beforeblur`:case`afterblur`:case`beforeinput`:case`blur`:case`fullscreenchange`:case`focus`:case`hashchange`:case`popstate`:case`select`:case`selectstart`:return 2;case`drag`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`mousemove`:case`mouseout`:case`mouseover`:case`pointermove`:case`pointerout`:case`pointerover`:case`scroll`:case`touchmove`:case`wheel`:case`mouseenter`:case`mouseleave`:case`pointerenter`:case`pointerleave`:return 8;case`message`:switch(De()){case Oe:return 2;case ke:return 8;case Ae:case je:return 32;case Me:return 268435456;default:return 32}default:return 32}}var vp=!1,Z=null,yp=null,Q=null,bp=new Map,xp=new Map,Sp=[],Cp=`mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset`.split(` `);function wp(e,t){switch(e){case`focusin`:case`focusout`:Z=null;break;case`dragenter`:case`dragleave`:yp=null;break;case`mouseover`:case`mouseout`:Q=null;break;case`pointerover`:case`pointerout`:bp.delete(t.pointerId);break;case`gotpointercapture`:case`lostpointercapture`:xp.delete(t.pointerId)}}function Tp(e,t,n,r,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},t!==null&&(t=_t(t),t!==null&&cp(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Ep(e,t,n,r,i){switch(t){case`focusin`:return Z=Tp(Z,e,t,n,r,i),!0;case`dragenter`:return yp=Tp(yp,e,t,n,r,i),!0;case`mouseover`:return Q=Tp(Q,e,t,n,r,i),!0;case`pointerover`:var a=i.pointerId;return bp.set(a,Tp(bp.get(a)||null,e,t,n,r,i)),!0;case`gotpointercapture`:return a=i.pointerId,xp.set(a,Tp(xp.get(a)||null,e,t,n,r,i)),!0}return!1}function Dp(e){var t=gt(e.target);if(t!==null){var n=l(t);if(n!==null){if(t=n.tag,t===13){if(t=u(n),t!==null){e.blockedOn=t,at(e.priority,function(){lp(n)});return}}else if(t===31){if(t=d(n),t!==null){e.blockedOn=t,at(e.priority,function(){lp(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Op(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=mp(e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);B=r,n.target.dispatchEvent(r),B=null}else return t=_t(n),t!==null&&cp(t),e.blockedOn=n,!1;t.shift()}return!0}function kp(e,t,n){Op(e)&&n.delete(t)}function Ap(){vp=!1,Z!==null&&Op(Z)&&(Z=null),yp!==null&&Op(yp)&&(yp=null),Q!==null&&Op(Q)&&(Q=null),bp.forEach(kp),xp.forEach(kp)}function jp(e,n){e.blockedOn===n&&(e.blockedOn=null,vp||(vp=!0,t.unstable_scheduleCallback(t.unstable_NormalPriority,Ap)))}var Mp=null;function Np(e){Mp!==e&&(Mp=e,t.unstable_scheduleCallback(t.unstable_NormalPriority,function(){Mp===e&&(Mp=null);for(var t=0;t<e.length;t+=3){var n=e[t],r=e[t+1],i=e[t+2];if(typeof r!=`function`){if(gp(r||n)===null)continue;break}var a=_t(n);a!==null&&(e.splice(t,3),t-=3,_s(a,{pending:!0,data:i,method:n.method,action:r},r,i))}}))}function Pp(e){function t(t){return jp(t,e)}Z!==null&&jp(Z,e),yp!==null&&jp(yp,e),Q!==null&&jp(Q,e),bp.forEach(t),xp.forEach(t);for(var n=0;n<Sp.length;n++){var r=Sp[n];r.blockedOn===e&&(r.blockedOn=null)}for(;0<Sp.length&&(n=Sp[0],n.blockedOn===null);)Dp(n),n.blockedOn===null&&Sp.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(r=0;r<n.length;r+=3){var i=n[r],a=n[r+1],o=i[ct]||null;if(typeof a==`function`)o||Np(n);else if(o){var s=null;if(a&&a.hasAttribute(`formAction`)){if(i=a,o=a[ct]||null)s=o.formAction;else if(gp(i)!==null)continue}else s=o.action;typeof s==`function`?n[r+1]=s:(n.splice(r,3),r-=3),Np(n)}}}function Fp(){function e(e){e.canIntercept&&e.info===`react-transition`&&e.intercept({handler:function(){return new Promise(function(e){return i=e})},focusReset:`manual`,scroll:`manual`})}function t(){i!==null&&(i(),i=null),r||setTimeout(n,20)}function n(){if(!r&&!navigation.transition){var e=navigation.currentEntry;e&&e.url!=null&&navigation.navigate(e.url,{state:e.getState(),info:`react-transition`,history:`replace`})}}if(typeof navigation==`object`){var r=!1,i=null;return navigation.addEventListener(`navigate`,e),navigation.addEventListener(`navigatesuccess`,t),navigation.addEventListener(`navigateerror`,t),setTimeout(n,100),function(){r=!0,navigation.removeEventListener(`navigate`,e),navigation.removeEventListener(`navigatesuccess`,t),navigation.removeEventListener(`navigateerror`,t),i!==null&&(i(),i=null)}}}function Ip(e){this._internalRoot=e}Lp.prototype.render=Ip.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(o(409));var n=t.current;ap(n,pu(),e,t,null,null)},Lp.prototype.unmount=Ip.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;ap(e.current,2,null,e,null,null),bu(),t[lt]=null}};function Lp(e){this._internalRoot=e}Lp.prototype.unstable_scheduleHydration=function(e){if(e){var t=it();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Sp.length&&t!==0&&t<Sp[n].priority;n++);Sp.splice(n,0,e),n===0&&Dp(e)}};var Rp=n.version;if(Rp!==`19.2.8`)throw Error(o(527,Rp,`19.2.8`));P.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render==`function`?Error(o(188)):(e=Object.keys(e).join(`,`),Error(o(268,e)));return e=p(t),e=e===null?null:m(e),e=e===null?null:e.stateNode,e};var zp={bundleType:0,version:`19.2.8`,rendererPackageName:`react-dom`,currentDispatcherRef:N,reconcilerVersion:`19.2.8`};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`){var Bp=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Bp.isDisabled&&Bp.supportsFiber)try{Fe=Bp.inject(zp),Ie=Bp}catch{}}e.createRoot=function(e,t){if(!c(e))throw Error(o(299));var n=!1,r=``,i=Bs,a=Vs,s=Hs;return t!=null&&(!0===t.unstable_strictMode&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onUncaughtError!==void 0&&(i=t.onUncaughtError),t.onCaughtError!==void 0&&(a=t.onCaughtError),t.onRecoverableError!==void 0&&(s=t.onRecoverableError)),t=rp(e,1,!1,null,null,n,r,null,i,a,s,Fp),e[lt]=t.current,wd(e),new Ip(t)}})),l=e(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=c()})),u=r(),d=l(),f=`modulepreload`,p=function(e,t){return new URL(e,t).href},m={},h=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let e=document.getElementsByTagName(`link`),i=document.querySelector(`meta[property=csp-nonce]`),a=i?.nonce||i?.getAttribute(`nonce`);function o(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}function s(e){return import.meta.resolve?import.meta.resolve(e):new URL(e,import.meta.url).href}r=o(t.map(t=>{if(t=p(t,n),t=s(t),t in m)return;m[t]=!0;let r=t.endsWith(`.css`);for(let n=e.length-1;n>=0;n--){let i=e[n];if(i.href===t&&(!r||i.rel===`stylesheet`))return}let i=document.createElement(`link`);if(i.rel=r?`stylesheet`:f,r||(i.as=`script`),i.crossOrigin=``,i.href=t,a&&i.setAttribute(`nonce`,a),document.head.appendChild(i),r)return new Promise((e,n)=>{i.addEventListener(`load`,e),i.addEventListener(`error`,()=>n(Error(`Unable to preload CSS for ${t}`)))})}))}function i(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(let e of t||[])e.status===`rejected`&&i(e.reason);return e().catch(i)})},g=Object.defineProperty,_=Object.getOwnPropertyDescriptor,v=Object.getOwnPropertyNames,y=Object.prototype.hasOwnProperty,b=(e=>typeof t<`u`?t:typeof Proxy<`u`?new Proxy(e,{get:(e,n)=>(typeof t<`u`?t:e)[n]}):e)(function(e){if(typeof t<`u`)return t.apply(this,arguments);throw Error(`Dynamic require of "`+e+`" is not supported`)}),x=(e,t,n)=>()=>{if(n)throw n[0];try{return e&&(t=e(e=0)),t}catch(e){throw n=[e],e}},S=(e,t)=>{for(var n in t)g(e,n,{get:t[n],enumerable:!0})},C=(e,t,n,r)=>{if(t&&typeof t==`object`||typeof t==`function`)for(let i of v(t))!y.call(e,i)&&i!==n&&g(e,i,{get:()=>t[i],enumerable:!(r=_(t,i))||r.enumerable});return e},w=e=>C(g({},`__esModule`,{value:!0}),e),T,E,D,O,k,A=x(()=>{T=new Map,E=[],D=(e,t,n)=>{if(t&&typeof t.init==`function`&&typeof t.createInferenceSessionHandler==`function`){let r=T.get(e);if(r===void 0)T.set(e,{backend:t,priority:n});else{if(r.priority>n)return;if(r.priority===n&&r.backend!==t)throw Error(`cannot register backend "${e}" using priority ${n}`)}if(n>=0){let t=E.indexOf(e);t!==-1&&E.splice(t,1);for(let t=0;t<E.length;t++)if(T.get(E[t]).priority<=n){E.splice(t,0,e);return}E.push(e)}return}throw TypeError(`not a valid backend`)},O=async e=>{let t=T.get(e);if(!t)return`backend not found.`;if(t.initialized)return t.backend;if(t.aborted)return t.error;{let n=!!t.initPromise;try{return n||(t.initPromise=t.backend.init(e)),await t.initPromise,t.initialized=!0,t.backend}catch(e){return n||(t.error=`${e}`,t.aborted=!0),t.error}finally{delete t.initPromise}}},k=async e=>{let t=e.executionProviders||[],n=t.map(e=>typeof e==`string`?e:e.name),r=n.length===0?E:n,i,a=[],o=new Set;for(let e of r){let t=await O(e);typeof t==`string`?a.push({name:e,err:t}):(i||=t,i===t&&o.add(e))}if(!i)throw Error(`no available backend found. ERR: ${a.map(e=>`[${e.name}] ${e.err}`).join(`, `)}`);for(let{name:e,err:t}of a)n.includes(e)&&console.warn(`removing requested execution provider "${e}" from session options because it is not available: ${t}`);let s=t.filter(e=>o.has(typeof e==`string`?e:e.name));return[i,new Proxy(e,{get:(e,t)=>t===`executionProviders`?s:Reflect.get(e,t)})]}}),j=x(()=>{A()}),ee,te=x(()=>{ee=`1.29.0`}),M,ne,N=x(()=>{te(),M=`warning`,ne={wasm:{},webgl:{},webgpu:{},versions:{common:ee},set logLevel(e){if(e!==void 0){if(typeof e!=`string`||[`verbose`,`info`,`warning`,`error`,`fatal`].indexOf(e)===-1)throw Error(`Unsupported logging level: ${e}`);M=e}},get logLevel(){return M}},Object.defineProperty(ne,"logLevel",{enumerable:!0})}),P,re=x(()=>{N(),P=ne}),ie,ae,oe=x(()=>{ie=(e,t)=>{let n=typeof document<`u`?document.createElement(`canvas`):new OffscreenCanvas(1,1);n.width=e.dims[3],n.height=e.dims[2];let r=n.getContext(`2d`);if(r!=null){let i,a;t?.tensorLayout!==void 0&&t.tensorLayout===`NHWC`?(i=e.dims[2],a=e.dims[3]):(i=e.dims[3],a=e.dims[2]);let o=t?.format===void 0?`RGB`:t.format,s=t?.norm,c,l;s===void 0||s.mean===void 0?c=[255,255,255,255]:typeof s.mean==`number`?c=[s.mean,s.mean,s.mean,s.mean]:(c=[s.mean[0],s.mean[1],s.mean[2],0],s.mean[3]!==void 0&&(c[3]=s.mean[3])),s===void 0||s.bias===void 0?l=[0,0,0,0]:typeof s.bias==`number`?l=[s.bias,s.bias,s.bias,s.bias]:(l=[s.bias[0],s.bias[1],s.bias[2],0],s.bias[3]!==void 0&&(l[3]=s.bias[3]));let u=a*i,d=0,f=u,p=u*2,m=-1;o===`RGBA`?(d=0,f=u,p=u*2,m=u*3):o===`RGB`?(d=0,f=u,p=u*2):o===`RBG`&&(d=0,p=u,f=u*2);for(let t=0;t<a;t++)for(let n=0;n<i;n++){let i=(e.data[d++]-l[0])*c[0],a=(e.data[f++]-l[1])*c[1],o=(e.data[p++]-l[2])*c[2],s=m===-1?255:(e.data[m++]-l[3])*c[3];r.fillStyle=`rgba(`+i+`,`+a+`,`+o+`,`+s+`)`,r.fillRect(n,t,1,1)}if(`toDataURL`in n)return n.toDataURL();throw Error(`toDataURL is not supported`)}throw Error(`Can not access image data`)},ae=(e,t)=>{let n=typeof document<`u`?document.createElement(`canvas`).getContext(`2d`):new OffscreenCanvas(1,1).getContext(`2d`),r;if(n!=null){let i,a,o;t?.tensorLayout!==void 0&&t.tensorLayout===`NHWC`?(i=e.dims[2],a=e.dims[1],o=e.dims[3]):(i=e.dims[3],a=e.dims[2],o=e.dims[1]);let s=t!==void 0&&t.format!==void 0?t.format:`RGB`,c=t?.norm,l,u;c===void 0||c.mean===void 0?l=[255,255,255,255]:typeof c.mean==`number`?l=[c.mean,c.mean,c.mean,c.mean]:(l=[c.mean[0],c.mean[1],c.mean[2],255],c.mean[3]!==void 0&&(l[3]=c.mean[3])),c===void 0||c.bias===void 0?u=[0,0,0,0]:typeof c.bias==`number`?u=[c.bias,c.bias,c.bias,c.bias]:(u=[c.bias[0],c.bias[1],c.bias[2],0],c.bias[3]!==void 0&&(u[3]=c.bias[3]));let d=a*i;if(t!==void 0&&(t.format!==void 0&&o===4&&t.format!==`RGBA`||o===3&&t.format!==`RGB`&&t.format!==`BGR`))throw Error(`Tensor format doesn't match input tensor dims`);let f=0,p=1,m=2,h=3,g=0,_=d,v=d*2,y=-1;s===`RGBA`?(g=0,_=d,v=d*2,y=d*3):s===`RGB`?(g=0,_=d,v=d*2):s===`RBG`&&(g=0,v=d,_=d*2),r=n.createImageData(i,a);for(let t=0;t<a*i;f+=4,p+=4,m+=4,h+=4,t++)r.data[f]=(e.data[g++]-u[0])*l[0],r.data[p]=(e.data[_++]-u[1])*l[1],r.data[m]=(e.data[v++]-u[2])*l[2],r.data[h]=y===-1?255:(e.data[y++]-u[3])*l[3]}else throw Error(`Can not access image data`);return r}}),se,ce,le,ue,de,fe,pe=x(()=>{xe(),se=(e,t)=>{if(e===void 0)throw Error(`Image buffer must be defined`);if(t.height===void 0||t.width===void 0)throw Error(`Image height and width must be defined`);if(t.tensorLayout===`NHWC`)throw Error(`NHWC Tensor layout is not supported yet`);let{height:n,width:r}=t,i=t.norm??{mean:255,bias:0},a,o;a=typeof i.mean==`number`?[i.mean,i.mean,i.mean,i.mean]:[i.mean[0],i.mean[1],i.mean[2],i.mean[3]??255],o=typeof i.bias==`number`?[i.bias,i.bias,i.bias,i.bias]:[i.bias[0],i.bias[1],i.bias[2],i.bias[3]??0];let s=t.format===void 0?`RGBA`:t.format,c=t.tensorFormat!==void 0&&t.tensorFormat!==void 0?t.tensorFormat:`RGB`,l=n*r,u=c===`RGBA`?new Float32Array(l*4):new Float32Array(l*3),d=4,f=0,p=1,m=2,h=3,g=0,_=l,v=l*2,y=-1;s===`RGB`&&(d=3,f=0,p=1,m=2,h=-1),c===`RGBA`?y=l*3:c===`RBG`?(g=0,v=l,_=l*2):c===`BGR`&&(v=0,_=l,g=l*2);for(let t=0;t<l;t++,f+=d,m+=d,p+=d,h+=d)u[g++]=(e[f]+o[0])/a[0],u[_++]=(e[p]+o[1])/a[1],u[v++]=(e[m]+o[2])/a[2],y!==-1&&h!==-1&&(u[y++]=(e[h]+o[3])/a[3]);return c===`RGBA`?new be(`float32`,u,[1,4,n,r]):new be(`float32`,u,[1,3,n,r])},ce=async(e,t)=>{let n=typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement,r=typeof ImageData<`u`&&e instanceof ImageData,i=typeof ImageBitmap<`u`&&e instanceof ImageBitmap,a=typeof e==`string`,o,s=t??{},c=()=>{if(typeof document<`u`)return document.createElement(`canvas`);if(typeof OffscreenCanvas<`u`)return new OffscreenCanvas(1,1);throw Error(`Canvas is not supported`)},l=e=>typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||e instanceof OffscreenCanvas?e.getContext(`2d`):null;if(n){let n=c();n.width=e.width,n.height=e.height;let r=l(n);if(r!=null){let n=e.height,i=e.width;if(t!==void 0&&t.resizedHeight!==void 0&&t.resizedWidth!==void 0&&(n=t.resizedHeight,i=t.resizedWidth),t!==void 0){if(s=t,t.tensorFormat!==void 0)throw Error(`Image input config format must be RGBA for HTMLImageElement`);s.tensorFormat=`RGBA`,s.height=n,s.width=i}else s.tensorFormat=`RGBA`,s.height=n,s.width=i;r.drawImage(e,0,0),o=r.getImageData(0,0,i,n).data}else throw Error(`Can not access image data`)}else if(r){let n,r;if(t!==void 0&&t.resizedWidth!==void 0&&t.resizedHeight!==void 0?(n=t.resizedHeight,r=t.resizedWidth):(n=e.height,r=e.width),t!==void 0&&(s=t),s.format=`RGBA`,s.height=n,s.width=r,t!==void 0){let t=c();t.width=r,t.height=n;let i=l(t);if(i!=null)i.putImageData(e,0,0),o=i.getImageData(0,0,r,n).data;else throw Error(`Can not access image data`)}else o=e.data}else if(i){if(t===void 0)throw Error(`Please provide image config with format for Imagebitmap`);let n=c();n.width=e.width,n.height=e.height;let r=l(n);if(r!=null){let t=e.height,n=e.width;return r.drawImage(e,0,0,n,t),o=r.getImageData(0,0,n,t).data,s.height=t,s.width=n,se(o,s)}throw Error(`Can not access image data`)}else{if(a)return new Promise((t,n)=>{let r=c(),i=l(r);if(!e||!i)return n();let a=new Image;a.crossOrigin=`Anonymous`,a.src=e,a.onload=()=>{r.width=a.width,r.height=a.height,i.drawImage(a,0,0,r.width,r.height);let e=i.getImageData(0,0,r.width,r.height);s.height=r.height,s.width=r.width,t(se(e.data,s))}});throw Error(`Input data provided is not supported - aborted tensor creation`)}if(o!==void 0)return se(o,s);throw Error(`Input data provided is not supported - aborted tensor creation`)},le=(e,t)=>{let{width:n,height:r,download:i,dispose:a}=t;return new be({location:`texture`,type:`float32`,texture:e,dims:[1,r,n,4],download:i,dispose:a})},ue=(e,t)=>{let{dataType:n,dims:r,download:i,dispose:a}=t;return new be({location:`gpu-buffer`,type:n??`float32`,gpuBuffer:e,dims:r,download:i,dispose:a})},de=(e,t)=>{let{dataType:n,dims:r,download:i,dispose:a}=t;return new be({location:`ml-tensor`,type:n??`float32`,mlTensor:e,dims:r,download:i,dispose:a})},fe=(e,t,n)=>new be({location:`cpu-pinned`,type:e,data:t,dims:n??[t.length]})}),F,I,me,he,ge=x(()=>{F=new Map([[`float32`,Float32Array],[`uint8`,Uint8Array],[`int8`,Int8Array],[`uint16`,Uint16Array],[`int16`,Int16Array],[`int32`,Int32Array],[`bool`,Uint8Array],[`float64`,Float64Array],[`uint32`,Uint32Array],[`int4`,Uint8Array],[`uint4`,Uint8Array]]),I=new Map([[Float32Array,`float32`],[Uint8Array,`uint8`],[Int8Array,`int8`],[Uint16Array,`uint16`],[Int16Array,`int16`],[Int32Array,`int32`],[Float64Array,`float64`],[Uint32Array,`uint32`]]),me=!1,he=()=>{if(!me){me=!0;let e=typeof BigInt64Array<`u`&&BigInt64Array.from,t=typeof BigUint64Array<`u`&&BigUint64Array.from,n=globalThis.Float16Array,r=typeof n<`u`&&n.from;e&&(F.set(`int64`,BigInt64Array),I.set(BigInt64Array,`int64`)),t&&(F.set(`uint64`,BigUint64Array),I.set(BigUint64Array,`uint64`)),r?(F.set(`float16`,n),I.set(n,`float16`)):F.set(`float16`,Uint16Array)}}}),_e,ve,ye=x(()=>{xe(),_e=e=>{let t=1;for(let n=0;n<e.length;n++){let r=e[n];if(typeof r!=`number`||!Number.isSafeInteger(r))throw TypeError(`dims[${n}] must be an integer, got: ${r}`);if(r<0)throw RangeError(`dims[${n}] must be a non-negative integer, got: ${r}`);t*=r}return t},ve=(e,t)=>{switch(e.location){case`cpu`:return new be(e.type,e.data,t);case`cpu-pinned`:return new be({location:`cpu-pinned`,data:e.data,type:e.type,dims:t});case`texture`:return new be({location:`texture`,texture:e.texture,type:e.type,dims:t});case`gpu-buffer`:return new be({location:`gpu-buffer`,gpuBuffer:e.gpuBuffer,type:e.type,dims:t});case`ml-tensor`:return new be({location:`ml-tensor`,mlTensor:e.mlTensor,type:e.type,dims:t});default:throw Error(`tensorReshape: tensor location ${e.location} is not supported`)}}}),be,xe=x(()=>{oe(),pe(),ge(),ye(),be=class{constructor(e,t,n){he();let r,i;if(typeof e==`object`&&`location`in e)switch(this.dataLocation=e.location,r=e.type,i=e.dims,e.location){case`cpu-pinned`:{let t=F.get(r);if(!t)throw TypeError(`unsupported type "${r}" to create tensor from pinned buffer`);if(!(e.data instanceof t))throw TypeError(`buffer should be of type ${t.name}`);this.cpuData=e.data;break}case`texture`:if(r!==`float32`)throw TypeError(`unsupported type "${r}" to create tensor from texture`);this.gpuTextureData=e.texture,this.downloader=e.download,this.disposer=e.dispose;break;case`gpu-buffer`:if(r!==`float32`&&r!==`float16`&&r!==`int32`&&r!==`int64`&&r!==`uint32`&&r!==`uint8`&&r!==`bool`&&r!==`uint4`&&r!==`int4`)throw TypeError(`unsupported type "${r}" to create tensor from gpu buffer`);this.gpuBufferData=e.gpuBuffer,this.downloader=e.download,this.disposer=e.dispose;break;case`ml-tensor`:if(r!==`float32`&&r!==`float16`&&r!==`int32`&&r!==`int64`&&r!==`uint32`&&r!==`uint64`&&r!==`int8`&&r!==`uint8`&&r!==`bool`&&r!==`uint4`&&r!==`int4`)throw TypeError(`unsupported type "${r}" to create tensor from MLTensor`);this.mlTensorData=e.mlTensor,this.downloader=e.download,this.disposer=e.dispose;break;default:throw Error(`Tensor constructor: unsupported location '${this.dataLocation}'`)}else{let a,o;if(typeof e==`string`)if(r=e,o=n,e===`string`){if(!Array.isArray(t))throw TypeError(`A string tensor's data must be a string array.`);a=t}else{let n=F.get(e);if(n===void 0)throw TypeError(`Unsupported tensor type: ${e}.`);if(Array.isArray(t)){if(e===`float16`&&n===Uint16Array||e===`uint4`||e===`int4`)throw TypeError(`Creating a ${e} tensor from number array is not supported. Please use ${n.name} as data.`);a=e===`uint64`||e===`int64`?n.from(t,BigInt):n.from(t)}else if(t instanceof n)a=t;else if(t instanceof Uint8ClampedArray)if(e===`uint8`)a=Uint8Array.from(t);else throw TypeError(`A Uint8ClampedArray tensor's data must be type of uint8`);else if(e===`float16`&&t instanceof Uint16Array&&n!==Uint16Array)a=new globalThis.Float16Array(t.buffer,t.byteOffset,t.length);else throw TypeError(`A ${r} tensor's data must be type of ${n}`)}else if(o=t,Array.isArray(e)){if(e.length===0)throw TypeError(`Tensor type cannot be inferred from an empty array.`);let t=typeof e[0];if(t===`string`)r=`string`,a=e;else if(t===`boolean`)r=`bool`,a=Uint8Array.from(e);else throw TypeError(`Invalid element type of data array: ${t}.`)}else if(e instanceof Uint8ClampedArray)r=`uint8`,a=Uint8Array.from(e);else{let t=I.get(e.constructor);if(t===void 0)throw TypeError(`Unsupported type for tensor data: ${e.constructor}.`);r=t,a=e}if(o===void 0)o=[a.length];else if(!Array.isArray(o))throw TypeError(`A tensor's dims must be a number array`);i=o,this.cpuData=a,this.dataLocation=`cpu`}let a=_e(i);if(this.cpuData&&a!==this.cpuData.length&&(r!==`uint4`&&r!==`int4`||Math.ceil(a/2)!==this.cpuData.length))throw Error(`Tensor's size(${a}) does not match data length(${this.cpuData.length}).`);this.type=r,this.dims=i,this.size=a}static async fromImage(e,t){return ce(e,t)}static fromTexture(e,t){return le(e,t)}static fromGpuBuffer(e,t){return ue(e,t)}static fromMLTensor(e,t){return de(e,t)}static fromPinnedBuffer(e,t,n){return fe(e,t,n)}toDataURL(e){return ie(this,e)}toImageData(e){return ae(this,e)}get data(){if(this.ensureValid(),!this.cpuData)throw Error("The data is not on CPU. Use `getData()` to download GPU data to CPU, or use `texture` or `gpuBuffer` property to access the GPU data directly.");return this.cpuData}get location(){return this.dataLocation}get texture(){if(this.ensureValid(),!this.gpuTextureData)throw Error(`The data is not stored as a WebGL texture.`);return this.gpuTextureData}get gpuBuffer(){if(this.ensureValid(),!this.gpuBufferData)throw Error(`The data is not stored as a WebGPU buffer.`);return this.gpuBufferData}get mlTensor(){if(this.ensureValid(),!this.mlTensorData)throw Error(`The data is not stored as a WebNN MLTensor.`);return this.mlTensorData}async getData(e){switch(this.ensureValid(),this.dataLocation){case`cpu`:case`cpu-pinned`:return this.data;case`texture`:case`gpu-buffer`:case`ml-tensor`:if(!this.downloader)throw Error(`The current tensor is not created with a specified data downloader.`);if(this.isDownloading)throw Error(`The current tensor is being downloaded.`);try{this.isDownloading=!0;let t=await this.downloader();return this.downloader=void 0,this.dataLocation=`cpu`,this.cpuData=t,e&&this.disposer&&(this.disposer(),this.disposer=void 0),t}finally{this.isDownloading=!1}default:throw Error(`cannot get data from location: ${this.dataLocation}`)}}dispose(){if(this.isDownloading)throw Error(`The current tensor is being downloaded.`);this.disposer&&=(this.disposer(),void 0),this.cpuData=void 0,this.gpuTextureData=void 0,this.gpuBufferData=void 0,this.mlTensorData=void 0,this.downloader=void 0,this.isDownloading=void 0,this.dataLocation=`none`}ensureValid(){if(this.dataLocation===`none`)throw Error(`The tensor is disposed.`)}reshape(e){if(this.ensureValid(),this.downloader||this.disposer)throw Error(`Cannot reshape a tensor that owns GPU resource.`);return ve(this,e)}}}),Se,Ce=x(()=>{xe(),Se=be}),we,Te,Ee,L,De,Oe,ke=x(()=>{N(),we=(e,t)=>{(typeof ne.trace>`u`?!ne.wasm.trace:!ne.trace)||console.timeStamp(`${e}::ORT::${t}`)},Te=(e,t)=>{let n=Error().stack?.split(/\r\n|\r|\n/g)||[],r=!1;for(let i=0;i<n.length;i++){if(r&&!n[i].includes(`TRACE_FUNC`)){let r=`FUNC_${e}::${n[i].trim().split(` `)[1]}`;t&&(r+=`::${t}`),we(`CPU`,r);return}n[i].includes(`TRACE_FUNC`)&&(r=!0)}},Ee=e=>{(typeof ne.trace>`u`?!ne.wasm.trace:!ne.trace)||Te(`BEGIN`,e)},L=e=>{(typeof ne.trace>`u`?!ne.wasm.trace:!ne.trace)||Te(`END`,e)},De=e=>{(typeof ne.trace>`u`?!ne.wasm.trace:!ne.trace)||console.time(`ORT::${e}`)},Oe=e=>{(typeof ne.trace>`u`?!ne.wasm.trace:!ne.trace)||console.timeEnd(`ORT::${e}`)}}),Ae,je=x(()=>{A(),Ce(),ke(),Ae=class e{constructor(e){this.handler=e}async run(e,t,n){Ee(),De(`InferenceSession.run`);let r={},i={};if(typeof e!=`object`||!e||e instanceof Se||Array.isArray(e))throw TypeError(`'feeds' must be an object that use input names as keys and OnnxValue as corresponding values.`);let a=!0;if(typeof t==`object`){if(t===null)throw TypeError(`Unexpected argument[1]: cannot be null.`);if(t instanceof Se)throw TypeError(`'fetches' cannot be a Tensor`);if(Array.isArray(t)){if(t.length===0)throw TypeError(`'fetches' cannot be an empty array.`);a=!1;for(let e of t){if(typeof e!=`string`)throw TypeError(`'fetches' must be a string array or an object.`);if(this.outputNames.indexOf(e)===-1)throw RangeError(`'fetches' contains invalid output name: ${e}.`);r[e]=null}if(typeof n==`object`&&n)i=n;else if(typeof n<`u`)throw TypeError(`'options' must be an object.`)}else{let e=!1,o=Object.getOwnPropertyNames(t);for(let n of this.outputNames)if(o.indexOf(n)!==-1){let i=t[n];(i===null||i instanceof Se)&&(e=!0,a=!1,r[n]=i)}if(e){if(typeof n==`object`&&n)i=n;else if(typeof n<`u`)throw TypeError(`'options' must be an object.`)}else i=t}}else if(typeof t<`u`)throw TypeError(`Unexpected argument[1]: must be 'fetches' or 'options'.`);for(let t of this.inputNames)if(typeof e[t]>`u`)throw Error(`input '${t}' is missing in 'feeds'.`);if(a)for(let e of this.outputNames)r[e]=null;let o=await this.handler.run(e,r,i),s={};for(let e in o)if(Object.hasOwnProperty.call(o,e)){let t=o[e];s[e]=t instanceof Se?t:new Se(t.type,t.data,t.dims)}return Oe(`InferenceSession.run`),L(),s}async release(){return this.handler.dispose()}static async create(t,n,r,i){Ee(),De(`InferenceSession.create`);let a,o={};if(typeof t==`string`){if(a=t,typeof n==`object`&&n)o=n;else if(typeof n<`u`)throw TypeError(`'options' must be an object.`)}else if(t instanceof Uint8Array){if(a=t,typeof n==`object`&&n)o=n;else if(typeof n<`u`)throw TypeError(`'options' must be an object.`)}else if(t instanceof ArrayBuffer||typeof SharedArrayBuffer<`u`&&t instanceof SharedArrayBuffer){let e=t,s=0,c=t.byteLength;if(typeof n==`object`&&n)o=n;else if(typeof n==`number`){if(s=n,!Number.isSafeInteger(s))throw RangeError(`'byteOffset' must be an integer.`);if(s<0||s>=e.byteLength)throw RangeError(`'byteOffset' is out of range [0, ${e.byteLength}).`);if(c=t.byteLength-s,typeof r==`number`){if(c=r,!Number.isSafeInteger(c))throw RangeError(`'byteLength' must be an integer.`);if(c<=0||s+c>e.byteLength)throw RangeError(`'byteLength' is out of range (0, ${e.byteLength-s}].`);if(typeof i==`object`&&i)o=i;else if(typeof i<`u`)throw TypeError(`'options' must be an object.`)}else if(typeof r<`u`)throw TypeError(`'byteLength' must be a number.`)}else if(typeof n<`u`)throw TypeError(`'options' must be an object.`);a=new Uint8Array(e,s,c)}else throw TypeError(`Unexpected argument[0]: must be 'path' or 'buffer'.`);let[s,c]=await k(o),l=await s.createInferenceSessionHandler(a,c);return Oe(`InferenceSession.create`),L(),new e(l)}startProfiling(){this.handler.startProfiling()}endProfiling(){this.handler.endProfiling()}get inputNames(){return this.handler.inputNames}get outputNames(){return this.handler.outputNames}get inputMetadata(){return this.handler.inputMetadata}get outputMetadata(){return this.handler.outputMetadata}}}),Me,Ne=x(()=>{je(),Me=Ae}),Pe=x(()=>{}),Fe=x(()=>{}),Ie=x(()=>{}),Le=x(()=>{});S({},{InferenceSession:()=>Me,TRACE:()=>we,TRACE_EVENT_BEGIN:()=>De,TRACE_EVENT_END:()=>Oe,TRACE_FUNC_BEGIN:()=>Ee,TRACE_FUNC_END:()=>L,Tensor:()=>Se,env:()=>P,registerBackend:()=>D});var Re=x(()=>{j(),re(),Ne(),Ce(),Pe(),Fe(),ke(),Ie(),Le()}),ze=x(()=>{}),Be={};S(Be,{default:()=>Ue});var Ve,He,Ue,We=x(()=>{Ed(),bt(),ut(),Ve=`ort-wasm-proxy-worker`,He=globalThis.self?.name===Ve,He&&(self.onmessage=e=>{let{type:t,in:n}=e.data;try{switch(t){case`init-wasm`:vt(n.wasm).then(()=>{md(n).then(()=>{postMessage({type:t})},e=>{postMessage({type:t,err:e})})},e=>{postMessage({type:t,err:e})});break;case`init-ep`:{let{epName:e,env:r}=n;hd(r,e).then(()=>{postMessage({type:t})},e=>{postMessage({type:t,err:e})});break}case`copy-from`:{let{buffer:e}=n,r=yd(e);postMessage({type:t,out:r});break}case`create`:{let{model:e,options:r}=n;bd(e,r).then(e=>{postMessage({type:t,out:e})},e=>{postMessage({type:t,err:e})});break}case`release`:xd(n),postMessage({type:t});break;case`run`:{let{sessionId:e,inputIndices:r,inputs:i,outputIndices:a,options:o}=n;Cd(e,r,i,a,Array(a.length).fill(null),o).then(e=>{e.some(e=>e[3]!==`cpu`)?postMessage({type:t,err:`Proxy does not support non-cpu tensor location.`}):postMessage({type:t,out:e},Td([...i,...e]))},e=>{postMessage({type:t,err:e})});break}case`end-profiling`:wd(n),postMessage({type:t})}}catch(e){postMessage({type:t,err:e})}}),Ue=He?null:e=>new Worker(e??$e,{type:`module`,name:Ve})}),Ge={};S(Ge,{default:()=>qe});async function Ke(e={}){var t=e,n=!!globalThis.window,r=!!globalThis.WorkerGlobalScope,i=r&&self.name?.startsWith(`em-pthread`);t.mountExternalData=(e,n)=>{e.startsWith(`./`)&&(e=e.substring(2)),(t.Yc||=new Map).set(e,n)},t.unmountExternalData=()=>{delete t.Yc,delete t.Zd,delete t.Yd,delete t.$d},globalThis.SharedArrayBuffer??new WebAssembly.Memory({initial:0,maximum:0,shared:!0}).buffer.constructor;let a=e=>async(...n)=>{try{if(t.Xc)throw Error(`Session already started`);let r=t.Xc={Kd:n[0],errors:[]},i=await e(...n);if(t.Xc!==r)throw Error(`Session mismatch`);t.dd?.flush();let a=r.errors;if(0<a.length){let e=await Promise.all(a);if(e=e.filter(e=>e),0<e.length)throw Error(e.join(`
`))}return i}finally{t.Xc=null}};t.jsepInit=(e,n)=>{if(e===`webgpu`){[t.dd,t.Ad,t.Ed,t.ed,t.Dd,t.$b,t.Fd,t.Hd,t.Bd,t.Cd,t.Gd]=n;let e=t.dd;t.jsepRegisterBuffer=(t,n,r,i)=>e.registerBuffer(t,n,r,i),t.jsepGetBuffer=t=>e.getBuffer(t),t.jsepCreateDownloader=(t,n,r)=>e.createDownloader(t,n,r),t.jsepOnCreateSession=t=>{e.onCreateSession(t)},t.jsepOnReleaseSession=t=>{e.onReleaseSession(t)},t.jsepOnRunStart=t=>e.onRunStart(t),t.Id=(t,n)=>{e.upload(t,n)}}else if(e===`webnn`){let e=n[0];[t.Sd,t.sd,t.webnnEnsureTensor,t.td,t.webnnDownloadTensor,t.Rd,t.webnnEnableTraceEvent]=n.slice(1),t.webnnReleaseTensorId=t.sd,t.webnnUploadTensor=t.td,t.webnnRegisterMLContext=t.Rd,t.webnnOnRunStart=t=>e.onRunStart(t),t.webnnOnRunEnd=e.onRunEnd.bind(e),t.webnnOnReleaseSession=t=>{e.onReleaseSession(t)},t.webnnCreateMLTensorDownloader=(t,n)=>e.createMLTensorDownloader(t,n),t.webnnRegisterMLTensor=(t,n,r,i)=>e.registerMLTensor(t,n,r,i),t.webnnCreateMLContext=t=>e.createMLContext(t),t.webnnRegisterGraphInput=e.registerGraphInput.bind(e),t.webnnIsGraphInput=e.isGraphInput.bind(e),t.webnnRegisterGraphOutput=e.registerGraphOutput.bind(e),t.webnnIsGraphOutput=e.isGraphOutput.bind(e),t.webnnCreateTemporaryTensor=e.createTemporaryTensor.bind(e),t.webnnIsGraphInputOutputTypeSupported=e.isGraphInputOutputTypeSupported.bind(e)}};let o=()=>{let e=e=>(...t)=>{let n=B;return t=e(...t),B==n?t:new Promise((e,t)=>{an={resolve:e,reject:t}})};(()=>{for(let n of[`_OrtAppendExecutionProvider`,`_OrtCreateSession`,`_OrtRun`,`_OrtRunWithBinding`,`_OrtBindInput`])t[n]=e(t[n])})(),a!==void 0&&(t._OrtRun=a(t._OrtRun),t._OrtRunWithBinding=a(t._OrtRunWithBinding)),o=void 0};t.asyncInit=()=>{o?.()};var s,c,l=(e,t)=>{throw t},u=import.meta.url,d=``;if(n||r){try{d=new URL(`.`,u).href}catch{}r&&(c=e=>{var t=new XMLHttpRequest;return t.open(`GET`,e,!1),t.responseType=`arraybuffer`,t.send(null),new Uint8Array(t.response)}),s=async e=>{if(C(e))return new Promise((t,n)=>{var r=new XMLHttpRequest;r.open(`GET`,e,!0),r.responseType=`arraybuffer`,r.onload=()=>{r.status==200||r.status==0&&r.response?t(r.response):n(r.status)},r.onerror=n,r.send(null)});var t=await fetch(e,{credentials:`same-origin`});if(t.ok)return t.arrayBuffer();throw Error(t.status+` : `+t.url)}}var f,p,m,h,g,_,v=console.log.bind(console),y=console.error.bind(console),b=v,x=y,S=!1,C=e=>e.startsWith(`file://`);function w(){Te.buffer!=E.buffer&&re()}if(i){let e=function(n){try{var r=n.data,i=r.Sc;if(i===`load`){let n=[];self.onmessage=e=>n.push(e),_=()=>{postMessage({Sc:`loaded`});for(let t of n)e(t);self.onmessage=e};for(let e of r.xd)t[e]&&!t[e].proxy||(t[e]=(...t)=>{postMessage({Sc:`callHandler`,vd:e,args:t})},e==`print`&&(b=t[e]),e==`printErr`&&(x=t[e]));Te=r.Od,re(),p=r.Pd,se(),oa()}else if(i===`run`){(function(e){var t=(w(),j)[e+52>>>2>>>0];e=(w(),j)[e+56>>>2>>>0],Tr(t,t-e),J(t)})(r.Rc),_r(r.Rc,0,0,1,0,0),Se(),Ht(r.Rc),T||=(pr(),!0);try{Ee(r.Md,r.bd)}catch(e){if(e!=`unwind`)throw e}}else r.target!==`setimmediate`&&(i===`checkMailbox`?T&&Ut():i&&(x(`worker: received unknown command ${i}`),x(r)))}catch(e){throw vr(),e}};var T=!1;self.onunhandledrejection=e=>{throw e.reason||e},self.onmessage=e}var E,D,O,k,A,j,ee,te,M,ne,N,P=!1;function re(){var e=Te.buffer;t.HEAP8=E=new Int8Array(e),O=new Int16Array(e),t.HEAPU8=D=new Uint8Array(e),k=new Uint16Array(e),t.HEAP32=A=new Int32Array(e),t.HEAPU32=j=new Uint32Array(e),ee=new Float32Array(e),te=new Float64Array(e),M=new BigInt64Array(e),ne=new BigUint64Array(e)}function ie(){P=!0,i?_():vi.sb()}function ae(e){throw x(e=`Aborted(`+e+`)`),S=!0,e=new WebAssembly.RuntimeError(e+`. Build with -sASSERTIONS for more info.`),g?.(e),e}function oe(){return{a:{ma:Si,hb:xi,g:Oe,J:Ae,f:Fe,o:Ie,i:Le,$:Re,b:ze,S:Be,Ia:He,n:Ue,aa:Je,Ya:Ye,Ea:Xe,Ga:Ze,Za:Qe,Wa:$e,Pa:et,Va:tt,ka:nt,Fa:rt,Ca:it,Xa:at,Da:ot,cb:st,fa:ht,xa:gt,va:Ct,ea:Tt,N:Et,H:Dt,wa:At,_:Rt,ya:zt,Sa:Bt,Aa:Wt,Ja:Kt,ta:qt,ga:Jt,Ra:Ht,$a:Yt,Q:cn,r:hn,c:yt,ib:gn,y:_n,M:vn,D:yn,l:bn,s:xn,jb:Sn,I:Cn,R:wn,j:Tn,u:En,q:Dn,k:On,Ma:kn,Na:Nn,Oa:Pn,Ka:Fn,La:In,ua:zn,eb:H,bb:Hn,v:Wn,ba:W,ha:G,ab:Bn,V:Gn,_a:Kn,Ba:qn,F:Rn,T:Jn,la:Qn,za:$n,gb:Zn,fb:er,Ta:ir,Ua:ar,Ha:ge,U:or,ja:sr,Qa:cr,ia:ur,lb:ia,na:$i,mb:ra,oa:Qi,G:Hi,e:Ei,t:wi,w:Ci,B:Ii,nb:Yi,Z:Ji,x:ki,pa:Xi,X:ea,ca:qi,ob:Ki,pb:Gi,O:Li,qa:Wi,qb:Ui,L:Bi,Y:Zi,d:Ti,A:Oi,m:Di,kb:aa,p:ji,z:Mi,C:Ai,E:Ni,K:Ri,ra:Vi,P:ta,da:zi,W:na,rb:Fi,sa:Pi,h:dr,a:Te,db:me}}}async function se(){function e(e,n){var r=vi=e.exports;e={};for(let[t,n]of Object.entries(r))typeof n==`function`?(r=Zt(n),e[t]=r):e[t]=n;return vi=e,vi=(function(){var e=vi,t=e=>t=>e(t)>>>0,n=e=>()=>e()>>>0;return(e=Object.assign({},e)).tb=t(e.tb),e.Xb=n(e.Xb),e.Zb=t(e.Zb),e.lc=t(e.lc),e.mc=n(e.mc),e.qc=t(e.qc),e})(),ye.push(vi._b),fr=(e=vi).tb,pr=e.ub,t._OrtInit=e.vb,t._OrtGetLastError=e.wb,t._OrtCreateSessionOptions=e.xb,t._OrtAppendExecutionProvider=e.yb,t._OrtAddFreeDimensionOverride=e.zb,t._OrtAddSessionConfigEntry=e.Ab,t._OrtReleaseSessionOptions=e.Bb,t._OrtCreateSession=e.Cb,t._OrtReleaseSession=e.Db,t._OrtGetInputOutputCount=e.Eb,t._OrtGetInputOutputMetadata=e.Fb,t._OrtFree=e.Gb,t._OrtCreateTensor=e.Hb,t._OrtGetTensorData=e.Ib,t._OrtReleaseTensor=e.Jb,t._OrtCreateRunOptions=e.Kb,t._OrtAddRunConfigEntry=e.Lb,t._OrtReleaseRunOptions=e.Mb,t._OrtCreateBinding=e.Nb,t._OrtBindInput=e.Ob,t._OrtBindOutput=e.Pb,t._OrtClearBoundOutputs=e.Qb,t._OrtReleaseBinding=e.Rb,t._OrtRunWithBinding=e.Sb,t._OrtRun=e.Tb,t._OrtEndProfiling=e.Ub,t._JsepOutput=e.Vb,t._JsepGetNodeName=e.Wb,mr=e.Xb,hr=t._free=e.Yb,gr=t._malloc=e.Zb,_r=e.ac,vr=e.bc,yr=e.cc,br=e.dc,xr=e.ec,Sr=e.fc,Cr=e.gc,q=e.hc,wr=e.ic,Tr=e.jc,J=e.kc,Er=e.lc,Y=e.mc,Dr=e.nc,Or=e.oc,kr=e.pc,Ar=e.qc,jr=e.rc,Mr=e.sc,Nr=e.tc,Pr=e.uc,Fr=e.vc,Ir=e.wc,Lr=e.xc,Rr=e.yc,zr=e.zc,Br=e.Ac,Vr=e.Bc,Hr=e.Cc,Ur=e.Dc,Wr=e.Ec,Gr=e.Fc,Kr=e.Gc,qr=e.Hc,Jr=e.Ic,Yr=e.Jc,Xr=e.Kc,Zr=e.Lc,Qr=e.Mc,$r=e.Nc,ei=e.Pc,ti=e.Qc,ni=e.$c,ri=e.ad,ii=e.fd,ai=e.kd,oi=e.ld,si=e.md,ci=e.nd,li=e.od,ui=e.pd,di=e.qd,fi=e.rd,pi=e.wd,mi=e.Ud,hi=e.Vd,gi=e.Wd,_i=e.Xd,p=n,vi}var n,r=oe();return t.instantiateWasm?new Promise(n=>{t.instantiateWasm(r,(t,r)=>{n(e(t,r))})}):i?e(new WebAssembly.Instance(p,oe()),p):(N??=t.locateFile?t.locateFile?t.locateFile(`ort-wasm-simd-threaded.jsep.wasm`,d):d+`ort-wasm-simd-threaded.jsep.wasm`:new URL(``+new URL(`ort-wasm-simd-threaded.jsep-D-icqfN-.wasm`,import.meta.url).href,``+import.meta.url).href,n=await(async function(e){var t=N;if(!f&&!C(t))try{var n=fetch(t,{credentials:`same-origin`});return await WebAssembly.instantiateStreaming(n,e)}catch(e){x(`wasm streaming compile failed: ${e}`),x(`falling back to ArrayBuffer instantiation`)}return(async function(e,t){try{var n=await(async function(e){if(!f)try{var t=await s(e);return new Uint8Array(t)}catch{}if(e==N&&f)e=new Uint8Array(f);else{if(!c)throw`both async and sync fetching of the wasm failed`;e=c(e)}return e})(e);return await WebAssembly.instantiate(n,t)}catch(e){x(`failed to asynchronously prepare wasm: ${e}`),ae(e)}})(t,e)})(r),e(n.instance,n.module))}class ce{name=`ExitStatus`;constructor(e){this.message=`Program terminated with exit(${e})`,this.status=e}}var le=e=>{e.terminate(),e.onmessage=()=>{}},ue=[],de=0,fe=null,pe=e=>{_e.length==0&&(we(),Ce(_e[0]));var t=_e.pop();if(!t)return 6;ve.push(t),be[e.Rc]=t,t.Rc=e.Rc;var n={Sc:`run`,Md:e.Ld,bd:e.bd,Rc:e.Rc};return t.postMessage(n,e.jd),0},F=0,I=(e,t,...n)=>{var r,i=16*n.length,a=Y(),o=Er(i),s=o>>>3;for(r of n)typeof r==`bigint`?((w(),M)[s++>>>0]=1n,(w(),M)[s++>>>0]=r):((w(),M)[s++>>>0]=0n,(w(),te)[s++>>>0]=r);return e=yr(e,0,i,o,t),J(a),e};function me(e){if(i)return I(0,1,e);if(m=e,!(0<F)){for(var t of ve)le(t);for(t of _e)le(t);_e=[],ve=[],be={},S=!0}l(0,new ce(e))}function he(e){if(i)return I(1,0,e);ge(e)}var ge=e=>{if(m=e,i)throw he(e),`unwind`;me(e)},_e=[],ve=[],ye=[],be={},xe=e=>{var t=e.Rc;delete be[t],_e.push(e),ve.splice(ve.indexOf(e),1),e.Rc=0,br(t)};function Se(){ye.forEach(e=>e())}var Ce=e=>new Promise(n=>{e.onmessage=r=>{var i=r.data;if(r=i.Sc,i.Zc&&i.Zc!=mr()){var a=be[i.Zc];a?a.postMessage(i,i.jd):x(`Internal error! Worker sent a message "${r}" to target pthread ${i.Zc}, but that thread no longer exists!`)}else r===`checkMailbox`?Ut():r===`spawnThread`?pe(i):r===`cleanupThread`?z(()=>{xe(be[i.Nd])}):r===`loaded`?(e.loaded=!0,n(e)):i.target===`setimmediate`?e.postMessage(i):r===`uncaughtException`?e.onerror(i.error):r===`callHandler`?t[i.vd](...i.args):r&&x(`worker sent an unknown command ${r}`)},e.onerror=e=>{throw x(`worker sent an error! ${e.filename}:${e.lineno}: ${e.message}`),e};var r,i=[];for(r of[])t.propertyIsEnumerable(r)&&i.push(r);e.postMessage({Sc:`load`,xd:i,Od:Te,Pd:p})});function we(){var e=new Worker((()=>{let e=URL;return import.meta.url>`file:`&&import.meta.url<`file;`?new e(`ort.bundle.min.mjs`,import.meta.url):new URL(import.meta.url)})(),{type:`module`,workerData:`em-pthread`,name:`em-pthread`});_e.push(e)}var Te,Ee=(e,t)=>{F=0,e=Mr(e,t),0<F?m=e:xr(e)},L=[],De=0;function Oe(e){var t=new Ne(e>>>=0);return(w(),E)[t.Tc+12>>>0]==0&&(je(t,!0),De--),Me(t,!1),L.push(t),Ar(e)}var ke=0,Ae=()=>{q(0,0);var e=L.pop();Dr(e.cd),ke=0};function je(e,t){t=+!!t,(w(),E)[e.Tc+12>>>0]=t}function Me(e,t){t=+!!t,(w(),E)[e.Tc+13>>>0]=t}class Ne{constructor(e){this.cd=e,this.Tc=e-24}}var Pe=e=>{var t=ke;if(!t)return wr(0),0;var n=new Ne(t);(w(),j)[n.Tc+16>>>2>>>0]=t;var r=(w(),j)[n.Tc+4>>>2>>>0];if(!r)return wr(0),t;for(var i of e){if(i===0||i===r)break;if(kr(i,r,n.Tc+16))return wr(i),t}return wr(r),t};function Fe(){return Pe([])}function Ie(e){return Pe([e>>>0])}function Le(e,t,n,r){return Pe([e>>>0,t>>>0,n>>>0,r>>>0])}var Re=()=>{var e=L.pop();e||ae(`no exception to throw`);var t=e.cd;throw(w(),E)[e.Tc+13>>>0]==0&&(L.push(e),Me(e,!0),je(e,!1),De++),Or(t),ke=t};function ze(e,t,n){var r=new Ne(e>>>=0);throw t>>>=0,n>>>=0,(w(),j)[r.Tc+16>>>2>>>0]=0,(w(),j)[r.Tc+4>>>2>>>0]=t,(w(),j)[r.Tc+8>>>2>>>0]=n,Or(e),De++,ke=e}var Be=()=>De;function Ve(e,t,n,r){return i?I(2,1,e,t,n,r):He(e,t,n,r)}function He(e,t,n,r){if(e>>>=0,t>>>=0,n>>>=0,r>>>=0,!globalThis.SharedArrayBuffer)return 6;var a=[];return i&&a.length===0?Ve(e,t,n,r):(e={Ld:n,Rc:e,bd:r,jd:a},i?(e.Sc=`spawnThread`,postMessage(e,a),0):pe(e))}function Ue(e){throw ke||=e>>>0,ke}var We=globalThis.TextDecoder&&new TextDecoder,Ge=(e,t,n,r)=>{if(n=t+n,r)return n;for(;e[t]&&!(t>=n);)++t;return t},Ke=(e,t=0,n,r)=>{if(16<(n=Ge(e,t>>>=0,n,r))-t&&e.buffer&&We)return We.decode(e.buffer instanceof ArrayBuffer?e.subarray(t,n):e.slice(t,n));for(r=``;t<n;){var i=e[t++];if(128&i){var a=63&e[t++];if((224&i)==192)r+=String.fromCharCode((31&i)<<6|a);else{var o=63&e[t++];65536>(i=(240&i)==224?(15&i)<<12|a<<6|o:(7&i)<<18|a<<12|o<<6|63&e[t++])?r+=String.fromCharCode(i):(i-=65536,r+=String.fromCharCode(55296|i>>10,56320|1023&i))}}else r+=String.fromCharCode(i)}return r},qe=(e,t,n)=>(e>>>=0)?Ke((w(),D),e,t,n):``;function Je(e,t,n){return i?I(3,1,e,t,n):0}function Ye(e,t){if(i)return I(4,1,e,t)}function Xe(e,t){if(i)return I(5,1,e,t)}function Ze(e,t,n){if(i)return I(6,1,e,t,n)}function Qe(e,t,n){return i?I(7,1,e,t,n):0}function $e(e,t){if(i)return I(8,1,e,t)}function et(e,t,n){if(i)return I(9,1,e,t,n)}function tt(e,t,n,r){if(i)return I(10,1,e,t,n,r)}function nt(e,t,n,r){if(i)return I(11,1,e,t,n,r)}function rt(e,t,n,r){if(i)return I(12,1,e,t,n,r)}function it(e){if(i)return I(13,1,e)}function at(e,t){if(i)return I(14,1,e,t)}function ot(e,t,n){if(i)return I(15,1,e,t,n)}var st=()=>ae(``),ct=e=>{e>>>=0;for(var t=``;;){var n=(w(),D)[e++>>>0];if(!n)return t;t+=String.fromCharCode(n)}},lt={},ut={},dt={},ft=class extends Error{constructor(e){super(e),this.name=`BindingError`}};function pt(e,t,n={}){return(function(e,t,n={}){var r=t.name;if(!e)throw new ft(`type "${r}" must have a positive integer typeid pointer`);if(ut.hasOwnProperty(e)){if(n.yd)return;throw new ft(`Cannot register type '${r}' twice`)}ut[e]=t,delete dt[e],lt.hasOwnProperty(e)&&(t=lt[e],delete lt[e],t.forEach(e=>e()))})(e,t,n)}var mt=(e,t,n)=>{switch(t){case 1:return n?e=>(w(),E)[e>>>0]:e=>(w(),D)[e>>>0];case 2:return n?e=>(w(),O)[e>>>1>>>0]:e=>(w(),k)[e>>>1>>>0];case 4:return n?e=>(w(),A)[e>>>2>>>0]:e=>(w(),j)[e>>>2>>>0];case 8:return n?e=>(w(),M)[e>>>3>>>0]:e=>(w(),ne)[e>>>3>>>0];default:throw TypeError(`invalid integer width (${t}): ${e}`)}};function ht(e,t,n,r,i){e>>>=0,n>>>=0,t=ct(t>>>0);let a=e=>e;if(r=r===0n){let e=8*n;a=t=>BigInt.asUintN(e,t),i=a(i)}pt(e,{name:t,Oc:a,Vc:(e,t)=>(typeof t==`number`&&(t=BigInt(t)),t),Uc:mt(t,n,!r),Wc:null})}function gt(e,t,n,r){pt(e>>>=0,{name:t=ct(t>>>0),Oc:function(e){return!!e},Vc:function(e,t){return t?n:r},Uc:function(e){return this.Oc((w(),D)[e>>>0])},Wc:null})}var _t=[],vt=[0,1,,1,null,1,!0,1,!1,1];function yt(e){9<(e>>>=0)&&--vt[e+1]===0&&(vt[e]=void 0,_t.push(e))}var bt=e=>{if(!e)throw new ft(`Cannot use deleted val. handle = ${e}`);return vt[e]},xt=e=>{switch(e){case void 0:return 2;case null:return 4;case!0:return 6;case!1:return 8;default:let t=_t.pop()||vt.length;return vt[t]=e,vt[t+1]=1,t}};function St(e){return this.Oc((w(),j)[e>>>2>>>0])}var R={name:`emscripten::val`,Oc:e=>{var t=bt(e);return yt(e),t},Vc:(e,t)=>xt(t),Uc:St,Wc:null};function Ct(e){return pt(e>>>0,R)}var wt=(e,t)=>{switch(t){case 4:return function(e){return this.Oc((w(),ee)[e>>>2>>>0])};case 8:return function(e){return this.Oc((w(),te)[e>>>3>>>0])};default:throw TypeError(`invalid float width (${t}): ${e}`)}};function Tt(e,t,n){n>>>=0,pt(e>>>=0,{name:t=ct(t>>>0),Oc:e=>e,Vc:(e,t)=>t,Uc:wt(t,n),Wc:null})}function Et(e,t,n,r,i){e>>>=0,n>>>=0,t=ct(t>>>0);let a=e=>e;if(r===0){var o=32-8*n;a=e=>e<<o>>>o,i=a(i)}pt(e,{name:t,Oc:a,Vc:(e,t)=>t,Uc:mt(t,n,r!==0),Wc:null})}function Dt(e,t,n){function r(e){var t=(w(),j)[e>>>2>>>0];return e=(w(),j)[e+4>>>2>>>0],new i((w(),E).buffer,e,t)}var i=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array,BigInt64Array,BigUint64Array][t];pt(e>>>=0,{name:n=ct(n>>>0),Oc:r,Uc:r},{yd:!0})}var Ot=(e,t,n)=>{var r=(w(),D);if(t>>>=0,0<n){var i=t;n=t+n-1;for(var a=0;a<e.length;++a){var o=e.codePointAt(a);if(127>=o){if(t>=n)break;r[t++>>>0]=o}else if(2047>=o){if(t+1>=n)break;r[t++>>>0]=192|o>>6,r[t++>>>0]=128|63&o}else if(65535>=o){if(t+2>=n)break;r[t++>>>0]=224|o>>12,r[t++>>>0]=128|o>>6&63,r[t++>>>0]=128|63&o}else{if(t+3>=n)break;r[t++>>>0]=240|o>>18,r[t++>>>0]=128|o>>12&63,r[t++>>>0]=128|o>>6&63,r[t++>>>0]=128|63&o,a++}}r[t>>>0]=0,e=t-i}else e=0;return e},kt=e=>{for(var t=0,n=0;n<e.length;++n){var r=e.charCodeAt(n);127>=r?t++:2047>=r?t+=2:55296<=r&&57343>=r?(t+=4,++n):t+=3}return t};function At(e,t){pt(e>>>=0,{name:t=ct(t>>>0),Oc(e){var t=(w(),j)[e>>>2>>>0];return t=qe(e+4,t,!0),hr(e),t},Vc(e,t){t instanceof ArrayBuffer&&(t=new Uint8Array(t));var n=typeof t==`string`;if(!(n||ArrayBuffer.isView(t)&&t.BYTES_PER_ELEMENT==1))throw new ft(`Cannot pass non-string to std::string`);var r=n?kt(t):t.length,i=gr(4+r+1),a=i+4;return(w(),j)[i>>>2>>>0]=r,n?Ot(t,a,r+1):(w(),D).set(t,a>>>0),e!==null&&e.push(hr,i),i},Uc:St,Wc(e){hr(e)}})}var jt=globalThis.TextDecoder?new TextDecoder(`utf-16le`):void 0,Mt=(e,t,n)=>{if(e>>>=1,16<(t=Ge((w(),k),e,t/2,n))-e&&jt)return jt.decode((w(),k).slice(e,t));for(n=``;e<t;++e){var r=(w(),k)[e>>>0];n+=String.fromCharCode(r)}return n},Nt=(e,t,n)=>{if(n??=2147483647,2>n)return 0;var r=t;n=(n-=2)<2*e.length?n/2:e.length;for(var i=0;i<n;++i){var a=e.charCodeAt(i);(w(),O)[t>>>1>>>0]=a,t+=2}return(w(),O)[t>>>1>>>0]=0,t-r},Pt=e=>2*e.length,Ft=(e,t,n)=>{var r=``;e>>>=2;for(var i=0;!(i>=t/4);i++){var a=(w(),j)[e+i>>>0];if(!a&&!n)break;r+=String.fromCodePoint(a)}return r},It=(e,t,n)=>{if(t>>>=0,n??=2147483647,4>n)return 0;var r=t;n=r+n-4;for(var i=0;i<e.length;++i){var a=e.codePointAt(i);if(65535<a&&i++,(w(),A)[t>>>2>>>0]=a,(t+=4)+4>n)break}return(w(),A)[t>>>2>>>0]=0,t-r},Lt=e=>{for(var t=0,n=0;n<e.length;++n)65535<e.codePointAt(n)&&n++,t+=4;return t};function Rt(e,t,n){if(e>>>=0,t>>>=0,n=ct(n>>>=0),t===2)var r=Mt,i=Nt,a=Pt;else r=Ft,i=It,a=Lt;pt(e,{name:n,Oc:e=>{var n=(w(),j)[e>>>2>>>0];return n=r(e+4,n*t,!0),hr(e),n},Vc:(e,r)=>{if(typeof r!=`string`)throw new ft(`Cannot pass non-string to C++ string type ${n}`);var o=a(r),s=gr(4+o+t);return(w(),j)[s>>>2>>>0]=o/t,i(r,s+4,o+t),e!==null&&e.push(hr,s),s},Uc:St,Wc(e){hr(e)}})}function zt(e,t){pt(e>>>=0,{zd:!0,name:t=ct(t>>>0),Oc:()=>{},Vc:()=>{}})}function Bt(e){_r(e>>>0,!r,1,!n,131072,!1),Se()}var z=e=>{if(!S)try{if(e(),!(0<F))try{i?mr()&&xr(m):ge(m)}catch(e){e instanceof ce||e==`unwind`||l(0,e)}}catch(e){e instanceof ce||e==`unwind`||l(0,e)}},Vt=!Atomics.waitAsync||globalThis.navigator?.userAgent&&91>Number((navigator.userAgent.match(/Chrom(e|ium)\/([0-9]+)\./)||[])[2]);function Ht(e){e>>>=0,Vt||(Atomics.waitAsync((w(),A),e>>>2,e).value.then(Ut),e+=128,Atomics.store((w(),A),e>>>2,1))}var Ut=()=>z(()=>{var e=mr();e&&(Ht(e),Cr())});function Wt(e,t){(e>>>=0)==t>>>0?setTimeout(Ut):i?postMessage({Zc:e,Sc:`checkMailbox`}):(e=be[e])&&e.postMessage({Sc:`checkMailbox`})}var Gt=[];function Kt(e,t,n,r,i){for(t>>>=0,i>>>=0,Gt.length=0,n=i>>>3,r=i+r>>>3;n<r;){var a=(w(),M)[n++>>>0]?(w(),M)[n++>>>0]:(w(),te)[n++>>>0];Gt.push(a)}return(t?bi[t]:yi[e])(...Gt)}var qt=()=>{F=0};function Jt(e){e>>>=0,i?postMessage({Sc:`cleanupThread`,Nd:e}):xe(be[e])}function Yt(e){}var Xt=e=>{try{e()}catch(e){ae(e)}};function Zt(e){var t=(...t)=>{en.push(e);try{return e(...t)}finally{S||(en.pop(),B&&Qt===1&&en.length===0&&(Qt=0,F+=1,Xt(hi),typeof Fibers<`u`&&Fibers.be()))}};return V.set(e,t),t}var Qt=0,B=null,$t=0,en=[],tn=new Map,nn=new Map,V=new Map,rn=0,an=null,on=[],sn=e=>(function(e){if(!S){if(Qt===0){var t=!1,n=!1;e((e=0)=>{if(!S&&($t=e,t=!0,n)){Qt=2,Xt(()=>gi(B)),typeof MainLoop<`u`&&MainLoop.ud&&MainLoop.resume(),e=!1;try{var r=(function(){var e=(w(),A)[B+8>>>2>>>0];return e=nn.get(e),e=V.get(e),--F,e()})()}catch(t){r=t,e=!0}var i=!1;if(!B){var a=an;a&&(an=null,(e?a.reject:a.resolve)(r),i=!0)}if(e&&!i)throw r}}),n=!0,t||(Qt=1,B=(function(){var e=gr(65548),t=e+12;if((w(),j)[e>>>2>>>0]=t,(w(),j)[e+4>>>2>>>0]=t+65536,t=en[0],!tn.has(t)){var n=rn++;tn.set(t,n),nn.set(n,t)}return t=tn.get(t),(w(),A)[e+8>>>2>>>0]=t,e})(),typeof MainLoop<`u`&&MainLoop.ud&&MainLoop.pause(),Xt(()=>mi(B)))}else Qt===2?(Qt=0,Xt(_i),hr(B),B=null,on.forEach(z)):ae(`invalid state: ${Qt}`);return $t}})(t=>{e().then(t)});function cn(e){return e>>>=0,sn(async()=>xt(await bt(e)))}var ln=[],un=e=>{var t=ln.length;return ln.push(e),t},dn=(e,t)=>{for(var n=Array(e),r=0;r<e;++r){var i=r,a=(w(),j)[t+4*r>>>2>>>0],o=ut[a];if(o===void 0)throw e=`parameter ${r}`,a=fr(a),t=ct(a),hr(a),new ft(`${e} has unknown type ${t}`);n[i]=o}return n},fn=(e,t,n)=>{var r=[];return e=e(r,n),r.length&&((w(),j)[t>>>2>>>0]=xt(r)),e},pn={},mn=e=>{var t=pn[e];return t===void 0?ct(e):t};function hn(e,t,n){var[r,...i]=dn(e,t>>>0);t=r.Vc.bind(r);var a=i.map(e=>e.Uc.bind(e));e--;var o={toValue:bt};switch(e=a.map((e,t)=>{var n=`argFromPtr${t}`;return o[n]=e,`${n}(args${t?`+`+8*t:``})`}),n){case 0:var s=`toValue(handle)`;break;case 2:s=`new (toValue(handle))`;break;case 3:s=``;break;case 1:o.getStringOrSymbol=mn,s=`toValue(handle)[getStringOrSymbol(methodName)]`}return s+=`(${e})`,r.zd||(o.toReturnWire=t,o.emval_returnValue=fn,s=`return emval_returnValue(toReturnWire, destructorsRef, ${s})`),s=`return function (handle, methodName, destructorsRef, args) {
  ${s}
  }`,n=Function(Object.keys(o),s)(...Object.values(o)),s=`methodCaller<(${i.map(e=>e.name)}) => ${r.name}>`,un(Object.defineProperty(n,"name",{value:s}))}function gn(e,t){return t>>>=0,(e=bt(e>>>0))==bt(t)}function _n(e){return(e>>>=0)?(e=mn(e),xt(globalThis[e])):xt(globalThis)}function vn(e){return e=mn(e>>>0),xt(t[e])}function yn(e,t){return t>>>=0,e=bt(e>>>0),t=bt(t),xt(e[t])}function bn(e){9<(e>>>=0)&&(vt[e+1]+=1)}function xn(e,t,n,r,i){return ln[e>>>0](t>>>0,n>>>0,r>>>0,i>>>0)}function Sn(e,t,n,r,i){return xn(e>>>0,t>>>0,n>>>0,r>>>0,i>>>0)}function Cn(){return xt([])}function wn(e){e=bt(e>>>0);for(var t=Array(e.length),n=0;n<e.length;n++)t[n]=e[n];return xt(t)}function Tn(e){return xt(mn(e>>>0))}function En(){return xt({})}function Dn(e){for(var t=bt(e>>>=0);t.length;){var n=t.pop();t.pop()(n)}yt(e)}function On(e,t,n){t>>>=0,n>>>=0,e=bt(e>>>0),t=bt(t),n=bt(n),e[t]=n}function kn(e,t){e=-9007199254740992>e||9007199254740992<e?NaN:Number(e),t>>>=0,e=new Date(1e3*e),(w(),A)[t>>>2>>>0]=e.getUTCSeconds(),(w(),A)[t+4>>>2>>>0]=e.getUTCMinutes(),(w(),A)[t+8>>>2>>>0]=e.getUTCHours(),(w(),A)[t+12>>>2>>>0]=e.getUTCDate(),(w(),A)[t+16>>>2>>>0]=e.getUTCMonth(),(w(),A)[t+20>>>2>>>0]=e.getUTCFullYear()-1900,(w(),A)[t+24>>>2>>>0]=e.getUTCDay(),e=(e.getTime()-Date.UTC(e.getUTCFullYear(),0,1,0,0,0,0))/864e5|0,(w(),A)[t+28>>>2>>>0]=e}var An=e=>e%4==0&&(e%100!=0||e%400==0),jn=[0,31,60,91,121,152,182,213,244,274,305,335],Mn=[0,31,59,90,120,151,181,212,243,273,304,334];function Nn(e,t){e=-9007199254740992>e||9007199254740992<e?NaN:Number(e),t>>>=0,e=new Date(1e3*e),(w(),A)[t>>>2>>>0]=e.getSeconds(),(w(),A)[t+4>>>2>>>0]=e.getMinutes(),(w(),A)[t+8>>>2>>>0]=e.getHours(),(w(),A)[t+12>>>2>>>0]=e.getDate(),(w(),A)[t+16>>>2>>>0]=e.getMonth(),(w(),A)[t+20>>>2>>>0]=e.getFullYear()-1900,(w(),A)[t+24>>>2>>>0]=e.getDay();var n=(An(e.getFullYear())?jn:Mn)[e.getMonth()]+e.getDate()-1|0;(w(),A)[t+28>>>2>>>0]=n,(w(),A)[t+36>>>2>>>0]=-60*e.getTimezoneOffset(),n=new Date(e.getFullYear(),6,1).getTimezoneOffset();var r=new Date(e.getFullYear(),0,1).getTimezoneOffset();e=0|(n!=r&&e.getTimezoneOffset()==Math.min(r,n)),(w(),A)[t+32>>>2>>>0]=e}function Pn(e){e>>>=0;var t=new Date((w(),A)[e+20>>>2>>>0]+1900,(w(),A)[e+16>>>2>>>0],(w(),A)[e+12>>>2>>>0],(w(),A)[e+8>>>2>>>0],(w(),A)[e+4>>>2>>>0],(w(),A)[e>>>2>>>0],0),n=(w(),A)[e+32>>>2>>>0],r=t.getTimezoneOffset(),i=new Date(t.getFullYear(),6,1).getTimezoneOffset(),a=new Date(t.getFullYear(),0,1).getTimezoneOffset(),o=Math.min(a,i);return 0>n?(w(),A)[e+32>>>2>>>0]=+(i!=a&&o==r):0<n!=(o==r)&&(i=Math.max(a,i),t.setTime(t.getTime()+6e4*((0<n?o:i)-r))),(w(),A)[e+24>>>2>>>0]=t.getDay(),n=(An(t.getFullYear())?jn:Mn)[t.getMonth()]+t.getDate()-1|0,(w(),A)[e+28>>>2>>>0]=n,(w(),A)[e>>>2>>>0]=t.getSeconds(),(w(),A)[e+4>>>2>>>0]=t.getMinutes(),(w(),A)[e+8>>>2>>>0]=t.getHours(),(w(),A)[e+12>>>2>>>0]=t.getDate(),(w(),A)[e+16>>>2>>>0]=t.getMonth(),(w(),A)[e+20>>>2>>>0]=t.getYear(),e=t.getTime(),BigInt(isNaN(e)?-1:e/1e3)}function Fn(e,t,n,r,a,o,s){return i?I(16,1,e,t,n,r,a,o,s):-52}function In(e,t,n,r,a,o){if(i)return I(17,1,e,t,n,r,a,o)}var Ln={},Rn=()=>performance.timeOrigin+performance.now();function zn(e,t){return i?I(18,1,e,t):(Ln[e]&&(clearTimeout(Ln[e].id),delete Ln[e]),t&&(Ln[e]={id:setTimeout(()=>{delete Ln[e],z(()=>Sr(e,performance.timeOrigin+performance.now()))},t),ae:t}),0)}function H(e,t,n,r){e>>>=0,t>>>=0,n>>>=0,r>>>=0;var i=new Date().getFullYear(),a=new Date(i,0,1).getTimezoneOffset();i=new Date(i,6,1).getTimezoneOffset();var o=Math.max(a,i);(w(),j)[e>>>2>>>0]=60*o,(w(),A)[t>>>2>>>0]=+(a!=i),e=(t=e=>{var t=Math.abs(e);return`UTC${0<=e?`-`:`+`}${String(Math.floor(t/60)).padStart(2,`0`)}${String(t%60).padStart(2,`0`)}`})(a),t=t(i),i<a?(Ot(e,n,17),Ot(t,r,17)):(Ot(e,r,17),Ot(t,n,17))}var Bn=()=>Date.now(),Vn=1;function Hn(e,t,n){if(n>>>=0,!(0<=e&&3>=e))return 28;if(e===0)e=Date.now();else{if(!Vn)return 52;e=performance.timeOrigin+performance.now()}return e=Math.round(1e6*e),(w(),M)[n>>>3>>>0]=BigInt(e),0}var Un=[],U=(e,t)=>{Un.length=0;for(var n;n=(w(),D)[e++>>>0];){var r=n!=105;t+=(r&=n!=112)&&t%8?4:0,Un.push(n==112?(w(),j)[t>>>2>>>0]:n==106?(w(),M)[t>>>3>>>0]:n==105?(w(),A)[t>>>2>>>0]:(w(),te)[t>>>3>>>0]),t+=r?8:4}return Un};function Wn(e,t,n){return e>>>=0,t=U(t>>>0,n>>>0),bi[e](...t)}function W(e,t,n){return e>>>=0,t=U(t>>>0,n>>>0),bi[e](...t)}var G=()=>{};function Gn(e,t){return x(qe(e>>>0,t>>>0))}var Kn=()=>{throw F+=1,`unwind`};function qn(){return 4294901760}var Jn=()=>navigator.hardwareConcurrency,K={},Yn=e=>{var t;return(t=/\bwasm-function\[\d+\]:(0x[0-9a-f]+)/.exec(e))?+t[1]:(t=/:(\d+):\d+(?:\)|$)/.exec(e))?2147483648|t[1]:0},Xn=e=>{for(var t of e)(e=Yn(t))&&(K[e]=t)};function Zn(){var e=Error().stack.toString().split(`
`);return e[0]==`Error`&&e.shift(),Xn(e),K.gd=Yn(e[3]),K.Jd=e,K.gd}function Qn(e){if(!(e=K[e>>>0]))return 0;var t;if(t=/^\s+at .*\.wasm\.(.*) \(.*\)$/.exec(e))e=t[1];else if(t=/^\s+at (.*) \(.*\)$/.exec(e))e=t[1];else{if(!(t=/^(.+?)@/.exec(e)))return 0;e=t[1]}hr(Qn.hd??0),t=kt(e)+1;var n=gr(t);return n&&Ot(e,n,t),Qn.hd=n,Qn.hd}function $n(e){e>>>=0;var t=(w(),D).length;if(e<=t||4294901760<e)return!1;for(var n=1;4>=n;n*=2){var r=t*(1+.2/n);r=Math.min(r,e+100663296);e:{r=(Math.min(4294901760,65536*Math.ceil(Math.max(e,r)/65536))-Te.buffer.byteLength+65535)/65536|0;try{Te.grow(r),re();var i=1;break e}catch{}i=void 0}if(i)return!0}return!1}function er(e,t,n){if(e>>>=0,t>>>=0,K.gd==e)var r=K.Jd;else(r=Error().stack.toString().split(`
`))[0]==`Error`&&r.shift(),Xn(r);for(var i=3;r[i]&&Yn(r[i])!=e;)++i;for(e=0;e<n&&r[e+i];++e)(w(),A)[t+4*e>>>2>>>0]=Yn(r[e+i]);return e}var tr,nr={},rr=()=>{if(!tr){var e,t={USER:`web_user`,LOGNAME:`web_user`,PATH:`/`,PWD:`/`,HOME:`/home/web_user`,LANG:(globalThis.navigator?.language??`C`).replace(`-`,`_`)+`.UTF-8`,_:`./this.program`};for(e in nr)nr[e]===void 0?delete t[e]:t[e]=nr[e];var n=[];for(e in t)n.push(`${e}=${t[e]}`);tr=n}return tr};function ir(e,t){if(i)return I(19,1,e,t);e>>>=0,t>>>=0;var n,r=0,a=0;for(n of rr()){var o=t+r;(w(),j)[e+a>>>2>>>0]=o,r+=Ot(n,o,1/0)+1,a+=4}return 0}function ar(e,t){if(i)return I(20,1,e,t);e>>>=0,t>>>=0;var n=rr();for(var r of((w(),j)[e>>>2>>>0]=n.length,e=0,n))e+=kt(r)+1;return(w(),j)[t>>>2>>>0]=e,0}function or(e){return i?I(21,1,e):52}function sr(e,t,n,r){return i?I(22,1,e,t,n,r):52}function cr(e,t,n,r){return i?I(23,1,e,t,n,r):70}var lr=[null,[],[]];function ur(e,t,n,r){if(i)return I(24,1,e,t,n,r);t>>>=0,n>>>=0,r>>>=0;for(var a=0,o=0;o<n;o++){var s=(w(),j)[t>>>2>>>0],c=(w(),j)[t+4>>>2>>>0];t+=8;for(var l=0;l<c;l++){var u=e,d=(w(),D)[s+l>>>0],f=lr[u];d===0||d===10?((u===1?b:x)(Ke(f)),f.length=0):f.push(d)}a+=c}return(w(),j)[r>>>2>>>0]=a,0}function dr(e){return e>>>0}i||(function(){for(var e=t.numThreads-1;e--;)we();ue.push(async()=>{var e=(async function(){if(!i)return Promise.all(_e.map(Ce))})();de++,await e,--de==0&&fe&&(e=fe,fe=null,e())})})(),i||(Te=new WebAssembly.Memory({initial:256,maximum:65536,shared:!0}),re()),t.wasmBinary&&(f=t.wasmBinary),t.stackSave=()=>Y(),t.stackRestore=e=>J(e),t.stackAlloc=e=>Er(e),t.setValue=function(e,t,n=`i8`){switch(n.endsWith(`*`)&&(n=`*`),n){case`i1`:case`i8`:(w(),E)[e>>>0]=t;break;case`i16`:(w(),O)[e>>>1>>>0]=t;break;case`i32`:(w(),A)[e>>>2>>>0]=t;break;case`i64`:(w(),M)[e>>>3>>>0]=BigInt(t);break;case`float`:(w(),ee)[e>>>2>>>0]=t;break;case`double`:(w(),te)[e>>>3>>>0]=t;break;case`*`:(w(),j)[e>>>2>>>0]=t;break;default:ae(`invalid type for setValue: ${n}`)}},t.getValue=function(e,t=`i8`){switch(t.endsWith(`*`)&&(t=`*`),t){case`i1`:case`i8`:return(w(),E)[e>>>0];case`i16`:return(w(),O)[e>>>1>>>0];case`i32`:return(w(),A)[e>>>2>>>0];case`i64`:return(w(),M)[e>>>3>>>0];case`float`:return(w(),ee)[e>>>2>>>0];case`double`:return(w(),te)[e>>>3>>>0];case`*`:return(w(),j)[e>>>2>>>0];default:ae(`invalid type for getValue: ${t}`)}},t.UTF8ToString=qe,t.stringToUTF8=Ot,t.lengthBytesUTF8=kt;var fr,pr,mr,hr,gr,_r,vr,yr,br,xr,Sr,Cr,q,wr,Tr,J,Er,Y,Dr,Or,kr,Ar,jr,Mr,Nr,Pr,Fr,Ir,Lr,Rr,zr,Br,Vr,Hr,Ur,Wr,Gr,Kr,qr,Jr,Yr,Xr,Zr,Qr,$r,ei,ti,ni,ri,ii,ai,oi,si,ci,li,ui,di,fi,pi,mi,hi,gi,_i,vi,yi=[me,he,Ve,Je,Ye,Xe,Ze,Qe,$e,et,tt,nt,rt,it,at,ot,Fn,In,zn,ir,ar,or,sr,cr,ur],bi={1055492:(e,n,r,i,a)=>{if(t===void 0||!t.Yc)return 1;if((e=qe(Number(e>>>0))).startsWith(`./`)&&(e=e.substring(2)),!(e=t.Yc.get(e)))return 2;if(n=Number(n>>>0),r=Number(r>>>0),i=Number(i>>>0),n+r>e.byteLength)return 3;try{let o=e.subarray(n,n+r);switch(a){case 0:(w(),D).set(o,i>>>0);break;case 1:t.Qd?t.Qd(i,o):t.Id(i,o);break;default:return 4}return 0}catch{return 4}},1056316:(e,n,r)=>{t.td(e,(w(),D).subarray(n>>>0,n+r>>>0))},1056380:()=>t.Sd(),1056422:e=>{t.sd(e)},1056459:()=>{t.Bd()},1056490:()=>{t.Cd()},1056519:()=>{t.Gd()},1056544:e=>t.Ad(e),1056577:e=>t.Ed(e),1056609:(e,n,r)=>{t.ed(Number(e),Number(n),Number(r),!0)},1056672:(e,n,r)=>{t.ed(Number(e),Number(n),Number(r))},1056729:()=>typeof wasmOffsetConverter<`u`,1056786:e=>{t.$b(`Abs`,e,void 0)},1056837:e=>{t.$b(`Neg`,e,void 0)},1056888:e=>{t.$b(`Floor`,e,void 0)},1056941:e=>{t.$b(`Ceil`,e,void 0)},1056993:e=>{t.$b(`Reciprocal`,e,void 0)},1057051:e=>{t.$b(`Sqrt`,e,void 0)},1057103:e=>{t.$b(`Exp`,e,void 0)},1057154:e=>{t.$b(`Erf`,e,void 0)},1057205:e=>{t.$b(`Sigmoid`,e,void 0)},1057260:(e,n,r)=>{t.$b(`HardSigmoid`,e,{alpha:n,beta:r})},1057339:e=>{t.$b(`HardSwish`,e,void 0)},1057396:e=>{t.$b(`Log`,e,void 0)},1057447:e=>{t.$b(`Sin`,e,void 0)},1057498:e=>{t.$b(`Cos`,e,void 0)},1057549:e=>{t.$b(`Tan`,e,void 0)},1057600:e=>{t.$b(`Asin`,e,void 0)},1057652:e=>{t.$b(`Acos`,e,void 0)},1057704:e=>{t.$b(`Atan`,e,void 0)},1057756:e=>{t.$b(`Sinh`,e,void 0)},1057808:e=>{t.$b(`Cosh`,e,void 0)},1057860:e=>{t.$b(`Asinh`,e,void 0)},1057913:e=>{t.$b(`Acosh`,e,void 0)},1057966:e=>{t.$b(`Atanh`,e,void 0)},1058019:e=>{t.$b(`Tanh`,e,void 0)},1058071:e=>{t.$b(`Not`,e,void 0)},1058122:(e,n,r)=>{t.$b(`Clip`,e,{min:n,max:r})},1058191:e=>{t.$b(`Clip`,e,void 0)},1058243:(e,n)=>{t.$b(`Elu`,e,{alpha:n})},1058301:e=>{t.$b(`Gelu`,e,void 0)},1058353:e=>{t.$b(`Relu`,e,void 0)},1058405:(e,n)=>{t.$b(`LeakyRelu`,e,{alpha:n})},1058469:(e,n)=>{t.$b(`ThresholdedRelu`,e,{alpha:n})},1058539:(e,n)=>{t.$b(`Cast`,e,{to:n})},1058597:e=>{t.$b(`Add`,e,void 0)},1058648:e=>{t.$b(`Sub`,e,void 0)},1058699:e=>{t.$b(`Mul`,e,void 0)},1058750:e=>{t.$b(`Div`,e,void 0)},1058801:e=>{t.$b(`Pow`,e,void 0)},1058852:e=>{t.$b(`Equal`,e,void 0)},1058905:e=>{t.$b(`Greater`,e,void 0)},1058960:e=>{t.$b(`GreaterOrEqual`,e,void 0)},1059022:e=>{t.$b(`Less`,e,void 0)},1059074:e=>{t.$b(`LessOrEqual`,e,void 0)},1059133:(e,n,r,i,a)=>{t.$b(`ReduceMean`,e,{keepDims:!!n,noopWithEmptyAxes:!!r,axes:i?Array.from((w(),A).subarray(Number(i)>>>0,Number(a)>>>0)):[]})},1059308:(e,n,r,i,a)=>{t.$b(`ReduceMax`,e,{keepDims:!!n,noopWithEmptyAxes:!!r,axes:i?Array.from((w(),A).subarray(Number(i)>>>0,Number(a)>>>0)):[]})},1059482:(e,n,r,i,a)=>{t.$b(`ReduceMin`,e,{keepDims:!!n,noopWithEmptyAxes:!!r,axes:i?Array.from((w(),A).subarray(Number(i)>>>0,Number(a)>>>0)):[]})},1059656:(e,n,r,i,a)=>{t.$b(`ReduceProd`,e,{keepDims:!!n,noopWithEmptyAxes:!!r,axes:i?Array.from((w(),A).subarray(Number(i)>>>0,Number(a)>>>0)):[]})},1059831:(e,n,r,i,a)=>{t.$b(`ReduceSum`,e,{keepDims:!!n,noopWithEmptyAxes:!!r,axes:i?Array.from((w(),A).subarray(Number(i)>>>0,Number(a)>>>0)):[]})},1060005:(e,n,r,i,a)=>{t.$b(`ReduceL1`,e,{keepDims:!!n,noopWithEmptyAxes:!!r,axes:i?Array.from((w(),A).subarray(Number(i)>>>0,Number(a)>>>0)):[]})},1060178:(e,n,r,i,a)=>{t.$b(`ReduceL2`,e,{keepDims:!!n,noopWithEmptyAxes:!!r,axes:i?Array.from((w(),A).subarray(Number(i)>>>0,Number(a)>>>0)):[]})},1060351:(e,n,r,i,a)=>{t.$b(`ReduceLogSum`,e,{keepDims:!!n,noopWithEmptyAxes:!!r,axes:i?Array.from((w(),A).subarray(Number(i)>>>0,Number(a)>>>0)):[]})},1060528:(e,n,r,i,a)=>{t.$b(`ReduceSumSquare`,e,{keepDims:!!n,noopWithEmptyAxes:!!r,axes:i?Array.from((w(),A).subarray(Number(i)>>>0,Number(a)>>>0)):[]})},1060708:(e,n,r,i,a)=>{t.$b(`ReduceLogSumExp`,e,{keepDims:!!n,noopWithEmptyAxes:!!r,axes:i?Array.from((w(),A).subarray(Number(i)>>>0,Number(a)>>>0)):[]})},1060888:e=>{t.$b(`Where`,e,void 0)},1060941:(e,n,r)=>{t.$b(`Transpose`,e,{perm:n?Array.from((w(),A).subarray(Number(n)>>>0,Number(r)>>>0)):[]})},1061065:(e,n,r,i)=>{t.$b(`DepthToSpace`,e,{blocksize:n,mode:qe(r),format:i?`NHWC`:`NCHW`})},1061198:(e,n,r,i)=>{t.$b(`DepthToSpace`,e,{blocksize:n,mode:qe(r),format:i?`NHWC`:`NCHW`})},1061331:(e,n,r,i)=>{t.$b(`DFT`,e,{axis:n,inverse:r,onesided:i})},1061423:(e,n,r,i,a,o,s,c,l,u,d,f,p,m,h)=>{t.$b(`ConvTranspose`,e,{format:l?`NHWC`:`NCHW`,autoPad:n,dilations:[r],group:i,kernelShape:[a],pads:[o,s],strides:[c],wIsConst:()=>!!(w(),E)[u>>>0],outputPadding:d?Array.from((w(),A).subarray(Number(d)>>>0,Number(f)>>>0)):[],outputShape:p?Array.from((w(),A).subarray(Number(p)>>>0,Number(m)>>>0)):[],activation:qe(h)})},1061856:(e,n,r,i,a,o,s,c,l,u,d,f,p,m)=>{t.$b(`ConvTranspose`,e,{format:c?`NHWC`:`NCHW`,autoPad:n,dilations:Array.from((w(),A).subarray(Number(r)>>>0,(Number(r)>>>0)+2>>>0)),group:i,kernelShape:Array.from((w(),A).subarray(Number(a)>>>0,(Number(a)>>>0)+2>>>0)),pads:Array.from((w(),A).subarray(Number(o)>>>0,(Number(o)>>>0)+4>>>0)),strides:Array.from((w(),A).subarray(Number(s)>>>0,(Number(s)>>>0)+2>>>0)),wIsConst:()=>!!(w(),E)[l>>>0],outputPadding:u?Array.from((w(),A).subarray(Number(u)>>>0,Number(d)>>>0)):[],outputShape:f?Array.from((w(),A).subarray(Number(f)>>>0,Number(p)>>>0)):[],activation:qe(m)})},1062517:(e,n,r,i,a,o,s,c,l,u,d,f,p,m,h)=>{t.$b(`ConvTranspose`,e,{format:l?`NHWC`:`NCHW`,autoPad:n,dilations:[r],group:i,kernelShape:[a],pads:[o,s],strides:[c],wIsConst:()=>!!(w(),E)[u>>>0],outputPadding:d?Array.from((w(),A).subarray(Number(d)>>>0,Number(f)>>>0)):[],outputShape:p?Array.from((w(),A).subarray(Number(p)>>>0,Number(m)>>>0)):[],activation:qe(h)})},1062950:(e,n,r,i,a,o,s,c,l,u,d,f,p,m)=>{t.$b(`ConvTranspose`,e,{format:c?`NHWC`:`NCHW`,autoPad:n,dilations:Array.from((w(),A).subarray(Number(r)>>>0,(Number(r)>>>0)+2>>>0)),group:i,kernelShape:Array.from((w(),A).subarray(Number(a)>>>0,(Number(a)>>>0)+2>>>0)),pads:Array.from((w(),A).subarray(Number(o)>>>0,(Number(o)>>>0)+4>>>0)),strides:Array.from((w(),A).subarray(Number(s)>>>0,(Number(s)>>>0)+2>>>0)),wIsConst:()=>!!(w(),E)[l>>>0],outputPadding:u?Array.from((w(),A).subarray(Number(u)>>>0,Number(d)>>>0)):[],outputShape:f?Array.from((w(),A).subarray(Number(f)>>>0,Number(p)>>>0)):[],activation:qe(m)})},1063611:(e,n)=>{t.$b(`GlobalAveragePool`,e,{format:n?`NHWC`:`NCHW`})},1063702:(e,n,r,i,a,o,s,c,l,u,d,f,p,m)=>{t.$b(`AveragePool`,e,{format:m?`NHWC`:`NCHW`,auto_pad:n,ceil_mode:r,count_include_pad:i,storage_order:a,dilations:o?Array.from((w(),A).subarray(Number(o)>>>0,Number(s)>>>0)):[],kernel_shape:c?Array.from((w(),A).subarray(Number(c)>>>0,Number(l)>>>0)):[],pads:u?Array.from((w(),A).subarray(Number(u)>>>0,Number(d)>>>0)):[],strides:f?Array.from((w(),A).subarray(Number(f)>>>0,Number(p)>>>0)):[]})},1064181:(e,n)=>{t.$b(`GlobalAveragePool`,e,{format:n?`NHWC`:`NCHW`})},1064272:(e,n,r,i,a,o,s,c,l,u,d,f,p,m)=>{t.$b(`AveragePool`,e,{format:m?`NHWC`:`NCHW`,auto_pad:n,ceil_mode:r,count_include_pad:i,storage_order:a,dilations:o?Array.from((w(),A).subarray(Number(o)>>>0,Number(s)>>>0)):[],kernel_shape:c?Array.from((w(),A).subarray(Number(c)>>>0,Number(l)>>>0)):[],pads:u?Array.from((w(),A).subarray(Number(u)>>>0,Number(d)>>>0)):[],strides:f?Array.from((w(),A).subarray(Number(f)>>>0,Number(p)>>>0)):[]})},1064751:(e,n)=>{t.$b(`GlobalMaxPool`,e,{format:n?`NHWC`:`NCHW`})},1064838:(e,n,r,i,a,o,s,c,l,u,d,f,p,m)=>{t.$b(`MaxPool`,e,{format:m?`NHWC`:`NCHW`,auto_pad:n,ceil_mode:r,count_include_pad:i,storage_order:a,dilations:o?Array.from((w(),A).subarray(Number(o)>>>0,Number(s)>>>0)):[],kernel_shape:c?Array.from((w(),A).subarray(Number(c)>>>0,Number(l)>>>0)):[],pads:u?Array.from((w(),A).subarray(Number(u)>>>0,Number(d)>>>0)):[],strides:f?Array.from((w(),A).subarray(Number(f)>>>0,Number(p)>>>0)):[]})},1065313:(e,n)=>{t.$b(`GlobalMaxPool`,e,{format:n?`NHWC`:`NCHW`})},1065400:(e,n,r,i,a,o,s,c,l,u,d,f,p,m)=>{t.$b(`MaxPool`,e,{format:m?`NHWC`:`NCHW`,auto_pad:n,ceil_mode:r,count_include_pad:i,storage_order:a,dilations:o?Array.from((w(),A).subarray(Number(o)>>>0,Number(s)>>>0)):[],kernel_shape:c?Array.from((w(),A).subarray(Number(c)>>>0,Number(l)>>>0)):[],pads:u?Array.from((w(),A).subarray(Number(u)>>>0,Number(d)>>>0)):[],strides:f?Array.from((w(),A).subarray(Number(f)>>>0,Number(p)>>>0)):[]})},1065875:(e,n,r,i,a)=>{t.$b(`Gemm`,e,{alpha:n,beta:r,transA:i,transB:a})},1065979:e=>{t.$b(`MatMul`,e,void 0)},1066033:(e,n,r,i)=>{t.$b(`ArgMax`,e,{keepDims:!!n,selectLastIndex:!!r,axis:i})},1066141:(e,n,r,i)=>{t.$b(`ArgMin`,e,{keepDims:!!n,selectLastIndex:!!r,axis:i})},1066249:(e,n)=>{t.$b(`Softmax`,e,{axis:n})},1066312:(e,n)=>{t.$b(`Concat`,e,{axis:n})},1066372:(e,n,r,i,a)=>{t.$b(`Split`,e,{axis:n,numOutputs:r,splitSizes:i?Array.from((w(),A).subarray(Number(i)>>>0,Number(a)>>>0)):[]})},1066528:e=>{t.$b(`Expand`,e,void 0)},1066582:(e,n)=>{t.$b(`Gather`,e,{axis:Number(n)})},1066653:(e,n)=>{t.$b(`GatherElements`,e,{axis:Number(n)})},1066732:(e,n)=>{t.$b(`GatherND`,e,{batch_dims:Number(n)})},1066811:(e,n,r,i,a,o,s,c,l,u,d)=>{t.$b(`Resize`,e,{antialias:n,axes:r?Array.from((w(),A).subarray(Number(r)>>>0,Number(i)>>>0)):[],coordinateTransformMode:qe(a),cubicCoeffA:o,excludeOutside:s,extrapolationValue:c,keepAspectRatioPolicy:qe(l),mode:qe(u),nearestMode:qe(d)})},1067173:(e,n,r,i,a,o,s)=>{t.$b(`Slice`,e,{starts:n?Array.from((w(),A).subarray(Number(n)>>>0,Number(r)>>>0)):[],ends:i?Array.from((w(),A).subarray(Number(i)>>>0,Number(a)>>>0)):[],axes:o?Array.from((w(),A).subarray(Number(o)>>>0,Number(s)>>>0)):[]})},1067437:e=>{t.$b(`Tile`,e,void 0)},1067489:(e,n,r)=>{t.$b(`InstanceNormalization`,e,{epsilon:n,format:r?`NHWC`:`NCHW`})},1067603:(e,n,r)=>{t.$b(`InstanceNormalization`,e,{epsilon:n,format:r?`NHWC`:`NCHW`})},1067717:e=>{t.$b(`Range`,e,void 0)},1067770:(e,n)=>{t.$b(`Einsum`,e,{equation:qe(n)})},1067851:(e,n,r,i,a)=>{t.$b(`Pad`,e,{mode:n,value:r,pads:i?Array.from((w(),A).subarray(Number(i)>>>0,Number(a)>>>0)):[]})},1067994:(e,n,r,i,a,o)=>{t.$b(`BatchNormalization`,e,{epsilon:n,momentum:r,spatial:!!a,trainingMode:!!i,format:o?`NHWC`:`NCHW`})},1068163:(e,n,r,i,a,o)=>{t.$b(`BatchNormalization`,e,{epsilon:n,momentum:r,spatial:!!a,trainingMode:!!i,format:o?`NHWC`:`NCHW`})},1068332:(e,n,r)=>{t.$b(`CumSum`,e,{exclusive:Number(n),reverse:Number(r)})},1068429:(e,n,r)=>{t.$b(`DequantizeLinear`,e,{axis:n,blockSize:r})},1068519:(e,n,r,i,a)=>{t.$b(`GridSample`,e,{align_corners:n,mode:qe(r),padding_mode:qe(i),format:a?`NHWC`:`NCHW`})},1068689:(e,n,r,i,a)=>{t.$b(`GridSample`,e,{align_corners:n,mode:qe(r),padding_mode:qe(i),format:a?`NHWC`:`NCHW`})},1068859:(e,n)=>{t.$b(`ScatterND`,e,{reduction:qe(n)})},1068944:(e,n,r,i,a,o,s,c,l)=>{t.$b(`Attention`,e,{numHeads:n,isUnidirectional:r,maskFilterValue:i,scale:a,doRotary:o,qkvHiddenSizes:s?Array.from((w(),A).subarray(Number(c)>>>0,Number(c)+s>>>0)):[],pastPresentShareBuffer:!!l})},1069216:e=>{t.$b(`BiasAdd`,e,void 0)},1069271:e=>{t.$b(`BiasSplitGelu`,e,void 0)},1069332:e=>{t.$b(`FastGelu`,e,void 0)},1069388:(e,n,r,i,a,o,s,c,l,u,d,f,p,m,h,g)=>{t.$b(`Conv`,e,{format:f?`NHWC`:`NCHW`,auto_pad:n,dilations:r?Array.from((w(),A).subarray(Number(r)>>>0,Number(i)>>>0)):[],group:a,kernel_shape:o?Array.from((w(),A).subarray(Number(o)>>>0,Number(s)>>>0)):[],pads:c?Array.from((w(),A).subarray(Number(c)>>>0,Number(l)>>>0)):[],strides:u?Array.from((w(),A).subarray(Number(u)>>>0,Number(d)>>>0)):[],w_is_const:()=>!!(w(),E)[Number(p)>>>0],activation:qe(m),activation_params:h?Array.from((w(),ee).subarray(Number(h)>>>0,Number(g)>>>0)):[]})},1069972:e=>{t.$b(`Gelu`,e,void 0)},1070024:(e,n,r,i,a,o,s,c,l)=>{t.$b(`GroupQueryAttention`,e,{numHeads:n,kvNumHeads:r,scale:i,softcap:a,doRotary:o,rotaryInterleaved:s,smoothSoftmax:c,localWindowSize:l})},1070241:(e,n,r,i)=>{t.$b(`LayerNormalization`,e,{axis:n,epsilon:r,simplified:!!i})},1070352:(e,n,r,i)=>{t.$b(`LayerNormalization`,e,{axis:n,epsilon:r,simplified:!!i})},1070463:(e,n,r,i,a,o)=>{t.$b(`MatMulNBits`,e,{k:n,n:r,accuracyLevel:i,bits:a,blockSize:o})},1070590:(e,n,r,i,a,o)=>{t.$b(`MultiHeadAttention`,e,{numHeads:n,isUnidirectional:r,maskFilterValue:i,scale:a,doRotary:o})},1070749:(e,n)=>{t.$b(`QuickGelu`,e,{alpha:n})},1070813:(e,n,r,i,a)=>{t.$b(`RotaryEmbedding`,e,{interleaved:!!n,numHeads:r,rotaryEmbeddingDim:i,scale:a})},1070952:(e,n,r)=>{t.$b(`SkipLayerNormalization`,e,{epsilon:n,simplified:!!r})},1071054:(e,n,r)=>{t.$b(`SkipLayerNormalization`,e,{epsilon:n,simplified:!!r})},1071156:(e,n,r,i)=>{t.$b(`GatherBlockQuantized`,e,{gatherAxis:n,quantizeAxis:r,blockSize:i})},1071277:e=>{t.Fd(e)},1071311:(e,n)=>t.Hd(Number(e),Number(n),t.Xc.Kd,t.Xc.errors)};function xi(e,n,r){return sn(async()=>{await t.Dd(Number(e),Number(n),Number(r))})}function Si(){return typeof wasmOffsetConverter<`u`}function Ci(e,t,n,r){var i=Y();try{return Br(e,t,n,r)}catch(e){if(J(i),e!==e+0)throw e;q(1,0)}}function wi(e,t,n){var r=Y();try{return Ir(e,t,n)}catch(e){if(J(r),e!==e+0)throw e;q(1,0)}}function Ti(e){var t=Y();try{Nr(e)}catch(e){if(J(t),e!==e+0)throw e;q(1,0)}}function Ei(e,t){var n=Y();try{return Mr(e,t)}catch(e){if(J(n),e!==e+0)throw e;q(1,0)}}function Di(e,t,n){var r=Y();try{jr(e,t,n)}catch(e){if(J(r),e!==e+0)throw e;q(1,0)}}function Oi(e,t){var n=Y();try{Vr(e,t)}catch(e){if(J(n),e!==e+0)throw e;q(1,0)}}function ki(e,t,n,r,i,a,o){var s=Y();try{return Rr(e,t,n,r,i,a,o)}catch(e){if(J(s),e!==e+0)throw e;q(1,0)}}function Ai(e,t,n,r,i,a){var o=Y();try{Pr(e,t,n,r,i,a)}catch(e){if(J(o),e!==e+0)throw e;q(1,0)}}function ji(e,t,n,r){var i=Y();try{zr(e,t,n,r)}catch(e){if(J(i),e!==e+0)throw e;q(1,0)}}function Mi(e,t,n,r,i){var a=Y();try{Fr(e,t,n,r,i)}catch(e){if(J(a),e!==e+0)throw e;q(1,0)}}function Ni(e,t,n,r,i,a,o){var s=Y();try{Ur(e,t,n,r,i,a,o)}catch(e){if(J(s),e!==e+0)throw e;q(1,0)}}function Pi(e,t,n,r,i,a,o){var s=Y();try{Wr(e,t,n,r,i,a,o)}catch(e){if(J(s),e!==e+0)throw e;q(1,0)}}function Fi(e,t,n,r,i,a,o,s){var c=Y();try{Jr(e,t,n,r,i,a,o,s)}catch(e){if(J(c),e!==e+0)throw e;q(1,0)}}function Ii(e,t,n,r,i){var a=Y();try{return Hr(e,t,n,r,i)}catch(e){if(J(a),e!==e+0)throw e;q(1,0)}}function Li(e,t,n){var r=Y();try{return Yr(e,t,n)}catch(e){if(J(r),e!==e+0)throw e;q(1,0)}}function Ri(e,t,n,r,i,a,o,s){var c=Y();try{Xr(e,t,n,r,i,a,o,s)}catch(e){if(J(c),e!==e+0)throw e;q(1,0)}}function zi(e,t,n,r,i,a,o,s,c,l,u,d){var f=Y();try{Gr(e,t,n,r,i,a,o,s,c,l,u,d)}catch(e){if(J(f),e!==e+0)throw e;q(1,0)}}function Bi(e,t,n){var r=Y();try{return Zr(e,t,n)}catch(e){if(J(r),e!==e+0)throw e;return q(1,0),0n}}function Vi(e,t,n,r,i,a,o,s,c){var l=Y();try{Lr(e,t,n,r,i,a,o,s,c)}catch(e){if(J(l),e!==e+0)throw e;q(1,0)}}function Hi(e){var t=Y();try{return Qr(e)}catch(e){if(J(t),e!==e+0)throw e;q(1,0)}}function Ui(e,t){var n=Y();try{return pi(e,t)}catch(e){if(J(n),e!==e+0)throw e;return q(1,0),0n}}function Wi(e){var t=Y();try{return $r(e)}catch(e){if(J(t),e!==e+0)throw e;return q(1,0),0n}}function Gi(e,t,n,r){var i=Y();try{return ai(e,t,n,r)}catch(e){if(J(i),e!==e+0)throw e;q(1,0)}}function Ki(e,t,n,r,i){var a=Y();try{return oi(e,t,n,r,i)}catch(e){if(J(a),e!==e+0)throw e;q(1,0)}}function qi(e,t,n,r,i,a){var o=Y();try{return si(e,t,n,r,i,a)}catch(e){if(J(o),e!==e+0)throw e;q(1,0)}}function Ji(e,t,n,r,i,a){var o=Y();try{return Kr(e,t,n,r,i,a)}catch(e){if(J(o),e!==e+0)throw e;q(1,0)}}function Yi(e,t,n,r,i,a){var o=Y();try{return ci(e,t,n,r,i,a)}catch(e){if(J(o),e!==e+0)throw e;q(1,0)}}function Xi(e,t,n,r,i,a,o,s){var c=Y();try{return qr(e,t,n,r,i,a,o,s)}catch(e){if(J(c),e!==e+0)throw e;q(1,0)}}function Zi(e,t,n,r,i){var a=Y();try{return li(e,t,n,r,i)}catch(e){if(J(a),e!==e+0)throw e;return q(1,0),0n}}function Qi(e,t,n,r){var i=Y();try{return ui(e,t,n,r)}catch(e){if(J(i),e!==e+0)throw e;q(1,0)}}function $i(e,t,n,r){var i=Y();try{return di(e,t,n,r)}catch(e){if(J(i),e!==e+0)throw e;q(1,0)}}function ea(e,t,n,r,i,a,o,s,c,l,u,d){var f=Y();try{return fi(e,t,n,r,i,a,o,s,c,l,u,d)}catch(e){if(J(f),e!==e+0)throw e;q(1,0)}}function ta(e,t,n,r,i,a,o,s,c,l,u){var d=Y();try{ri(e,t,n,r,i,a,o,s,c,l,u)}catch(e){if(J(d),e!==e+0)throw e;q(1,0)}}function na(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){var g=Y();try{ii(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h)}catch(e){if(J(g),e!==e+0)throw e;q(1,0)}}function ra(e,t,n){var r=Y();try{return ei(e,t,n)}catch(e){if(J(r),e!==e+0)throw e;q(1,0)}}function ia(e,t,n){var r=Y();try{return ti(e,t,n)}catch(e){if(J(r),e!==e+0)throw e;q(1,0)}}function aa(e,t,n,r){var i=Y();try{ni(e,t,n,r)}catch(e){if(J(i),e!==e+0)throw e;q(1,0)}}function oa(){if(0<de)fe=oa;else if(i)h?.(t),ie();else{for(var e=ue;0<e.length;)e.shift()(t);0<de?fe=oa:(t.calledRun=!0,S||(ie(),h?.(t)))}}return i||(vi=await se(),oa()),t.PTR_SIZE=4,P?t:new Promise((e,t)=>{h=e,g=t})}var qe,Je,Ye=x(()=>{qe=Ke,Je=globalThis.self?.name?.startsWith(`em-pthread`),Je&&Ke()}),Xe,Ze,Qe,$e,et,tt,nt,rt,it,at,ot,st,ct,lt,ut=x(()=>{ze(),Xe=typeof location>`u`?void 0:location.origin,Ze=import.meta.url>`file:`&&import.meta.url<`file;`,Qe=()=>Ze?new URL(new URL(`ort.bundle.min.mjs`,import.meta.url).href,Xe).href:import.meta.url,$e=Qe(),et=()=>{if($e&&!$e.startsWith(`blob:`))return $e.substring(0,$e.lastIndexOf(`/`)+1)},tt=(e,t)=>{try{let n=t??$e;return(n?new URL(e,n):new URL(e)).origin===Xe}catch{return!1}},nt=(e,t)=>{let n=t??$e;try{return(n?new URL(e,n):new URL(e)).href}catch{return}},rt=(e,t)=>`${t??`./`}${e}`,it=async e=>{let t=await(await fetch(e,{credentials:`same-origin`})).blob();return URL.createObjectURL(t)},at=async e=>(await h(async()=>{let{default:t}=await import(e);return{default:t}},[],import.meta.url)).default,ot=(We(),w(Be)).default,st=async()=>{if(!$e)throw Error(`Failed to load proxy worker: cannot determine the script source URL.`);if(tt($e))return[void 0,ot()];let e=await it($e);return[e,ot(e)]},ct=(Ye(),w(Ge)).default,lt=async(e,t,n,r)=>{let i=ct&&!(e||t);if(i)if($e)i=tt($e)||r&&!n;else if(r&&!n)i=!0;else throw Error(`cannot determine the script source URL.`);if(i)return[void 0,ct];{let r=`ort-wasm-simd-threaded.jsep.mjs`,i=e??nt(r,t),a=n&&i&&!tt(i,t),o=a?await it(i):i??rt(r,t);return[a?o:void 0,await at(o)]}}}),dt,ft,pt,mt,ht,gt,_t,vt,yt,bt=x(()=>{ut(),ft=!1,pt=!1,mt=!1,ht=()=>{if(typeof SharedArrayBuffer>`u`)return!1;try{return typeof MessageChannel<`u`&&new MessageChannel().port1.postMessage(new SharedArrayBuffer(1)),WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,5,4,1,3,1,1,10,11,1,9,0,65,0,254,16,2,0,26,11]))}catch{return!1}},gt=()=>{try{return WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,10,30,1,28,0,65,0,253,15,253,12,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,253,186,1,26,11]))}catch{return!1}},_t=()=>{try{return WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,123,3,2,1,0,10,19,1,17,0,65,1,253,15,65,2,253,15,65,3,253,15,253,147,2,11]))}catch{return!1}},vt=async e=>{if(ft)return Promise.resolve();if(pt)throw Error(`multiple calls to 'initializeWebAssembly()' detected.`);if(mt)throw Error(`previous call to 'initializeWebAssembly()' failed.`);pt=!0;let t=e.initTimeout,n=e.numThreads;if(e.simd!==!1){if(e.simd===`relaxed`){if(!_t())throw Error(`Relaxed WebAssembly SIMD is not supported in the current environment.`)}else if(!gt())throw Error(`WebAssembly SIMD is not supported in the current environment.`)}let r=ht();n>1&&!r&&(typeof self<`u`&&!self.crossOriginIsolated&&console.warn(`env.wasm.numThreads is set to `+n+`, but this will not work unless you enable crossOriginIsolated mode. See https://web.dev/cross-origin-isolation-guide/ for more info.`),console.warn(`WebAssembly multi-threading is not supported in the current environment. Falling back to single-threading.`),e.numThreads=n=1);let i=e.wasmPaths,a=typeof i==`string`?i:void 0,o=i?.mjs,s=o?.href??o,c=i?.wasm,l=c?.href??c,u=e.wasmBinary,[d,f]=await lt(s,a,n>1,!!u||!!l),p=!1,m=[];if(t>0&&m.push(new Promise(e=>{setTimeout(()=>{p=!0,e()},t)})),m.push(new Promise((e,t)=>{let r={numThreads:n};if(u)r.wasmBinary=u,r.locateFile=e=>e;else if(l||a)r.locateFile=e=>l??a+e;else if(s&&s.indexOf(`blob:`)!==0)r.locateFile=e=>new URL(e,s).href;else if(d){let e=et();e&&(r.locateFile=t=>e+t)}f(r).then(t=>{pt=!1,ft=!0,dt=t,e(),d&&URL.revokeObjectURL(d)},e=>{pt=!1,mt=!0,t(e)})})),await Promise.race(m),p)throw Error(`WebAssembly backend initializing failed due to timeout: ${t}ms`)},yt=()=>{if(ft&&dt)return dt;throw Error(`WebAssembly is not initialized yet.`)}}),xt,St,R,Ct=x(()=>{bt(),xt=(e,t)=>{let n=yt(),r=n.lengthBytesUTF8(e)+1,i=n._malloc(r);return n.stringToUTF8(e,i,r),t.push(i),i},St=(e,t,n,r)=>{if(typeof e==`object`&&e){if(n.has(e))throw Error(`Circular reference in options`);n.add(e)}Object.entries(e).forEach(([e,i])=>{let a=t?t+e:e;if(typeof i==`object`)St(i,a+`.`,n,r);else if(typeof i==`string`||typeof i==`number`)r(a,i.toString());else if(typeof i==`boolean`)r(a,i?`1`:`0`);else throw Error(`Can't handle extra config type: ${typeof i}`)})},R=e=>{let t=yt(),n=t.stackSave();try{let n=t.PTR_SIZE,r=t.stackAlloc(2*n);t._OrtGetLastError(r,r+n);let i=Number(t.getValue(r,n===4?`i32`:`i64`)),a=t.getValue(r+n,`*`),o=a?t.UTF8ToString(a):``;throw Error(`${e} ERROR_CODE: ${i}, ERROR_MESSAGE: ${o}`)}finally{t.stackRestore(n)}}}),wt,Tt=x(()=>{bt(),Ct(),wt=e=>{let t=yt(),n=0,r=[],i=e||{};try{if(e?.logSeverityLevel===void 0)i.logSeverityLevel=2;else if(typeof e.logSeverityLevel!=`number`||!Number.isInteger(e.logSeverityLevel)||e.logSeverityLevel<0||e.logSeverityLevel>4)throw Error(`log severity level is not valid: ${e.logSeverityLevel}`);if(e?.logVerbosityLevel===void 0)i.logVerbosityLevel=0;else if(typeof e.logVerbosityLevel!=`number`||!Number.isInteger(e.logVerbosityLevel))throw Error(`log verbosity level is not valid: ${e.logVerbosityLevel}`);e?.terminate===void 0&&(i.terminate=!1);let a=0;return e?.tag!==void 0&&(a=xt(e.tag,r)),n=t._OrtCreateRunOptions(i.logSeverityLevel,i.logVerbosityLevel,!!i.terminate,a),n===0&&R(`Can't create run options.`),e?.extra!==void 0&&St(e.extra,``,new WeakSet,(e,i)=>{let a=xt(e,r),o=xt(i,r);t._OrtAddRunConfigEntry(n,a,o)!==0&&R(`Can't set a run config entry: ${e} - ${i}.`)}),[n,r]}catch(e){throw n!==0&&t._OrtReleaseRunOptions(n),r.forEach(e=>t._free(e)),e}}}),Et,Dt,Ot,kt,At,jt,Mt=x(()=>{bt(),Ct(),Et=e=>{switch(e){case`disabled`:return 0;case`basic`:return 1;case`extended`:return 2;case`layout`:return 3;case`all`:return 99;default:throw Error(`unsupported graph optimization level: ${e}`)}},Dt=e=>{switch(e){case`sequential`:return 0;case`parallel`:return 1;default:throw Error(`unsupported execution mode: ${e}`)}},Ot=e=>{e.extra||={},e.extra.session||(e.extra.session={});let t=e.extra.session;t.use_ort_model_bytes_directly||=`1`,e.executionProviders&&e.executionProviders.some(e=>(typeof e==`string`?e:e.name)===`webgpu`)&&(e.enableMemPattern=!1)},kt=(e,t,n,r)=>{let i=xt(t,r),a=xt(n,r);yt()._OrtAddSessionConfigEntry(e,i,a)!==0&&R(`Can't set a session config entry: ${t} - ${n}.`)},At=async(e,t,n)=>{let r=t.executionProviders;for(let t of r){let r=typeof t==`string`?t:t.name,i=[];switch(r){case`webnn`:if(r=`WEBNN`,kt(e,`session.disable_quant_qdq`,`1`,n),kt(e,`session.disable_qdq_constant_folding`,`1`,n),typeof t!=`string`){let r=t?.deviceType;r&&kt(e,`deviceType`,r,n)}break;case`webgpu`:if(r=`JS`,typeof t!=`string`){let r=t;if(r?.preferredLayout){if(r.preferredLayout!==`NCHW`&&r.preferredLayout!==`NHWC`)throw Error(`preferredLayout must be either 'NCHW' or 'NHWC': ${r.preferredLayout}`);kt(e,`preferredLayout`,r.preferredLayout,n)}}break;case`wasm`:case`cpu`:continue;default:throw Error(`not supported execution provider: ${r}`)}let a=xt(r,n),o=i.length,s=0,c=0;if(o>0){s=yt()._malloc(o*yt().PTR_SIZE),n.push(s),c=yt()._malloc(o*yt().PTR_SIZE),n.push(c);for(let e=0;e<o;e++)yt().setValue(s+e*yt().PTR_SIZE,i[e][0],`*`),yt().setValue(c+e*yt().PTR_SIZE,i[e][1],`*`)}await yt()._OrtAppendExecutionProvider(e,a,s,c,o)!==0&&R(`Can't append execution provider: ${r}.`)}},jt=async e=>{let t=yt(),n=0,r=[],i=e||{};Ot(i);try{let e=Et(i.graphOptimizationLevel??`all`),a=Dt(i.executionMode??`sequential`),o=typeof i.logId==`string`?xt(i.logId,r):0,s=i.logSeverityLevel??2;if(!Number.isInteger(s)||s<0||s>4)throw Error(`log severity level is not valid: ${s}`);let c=i.logVerbosityLevel??0;if(!Number.isInteger(c)||c<0||c>4)throw Error(`log verbosity level is not valid: ${c}`);let l=typeof i.optimizedModelFilePath==`string`?xt(i.optimizedModelFilePath,r):0;if(n=t._OrtCreateSessionOptions(e,!!i.enableCpuMemArena,!!i.enableMemPattern,a,!!i.enableProfiling,0,o,s,c,l),n===0&&R(`Can't create session options.`),i.executionProviders&&await At(n,i,r),i.enableGraphCapture!==void 0){if(typeof i.enableGraphCapture!=`boolean`)throw Error(`enableGraphCapture must be a boolean value: ${i.enableGraphCapture}`);kt(n,`enableGraphCapture`,i.enableGraphCapture.toString(),r)}if(i.freeDimensionOverrides)for(let[e,a]of Object.entries(i.freeDimensionOverrides)){if(typeof e!=`string`)throw Error(`free dimension override name must be a string: ${e}`);if(typeof a!=`number`||!Number.isInteger(a)||a<0)throw Error(`free dimension override value must be a non-negative integer: ${a}`);let i=xt(e,r);t._OrtAddFreeDimensionOverride(n,i,a)!==0&&R(`Can't set a free dimension override: ${e} - ${a}.`)}return i.extra!==void 0&&St(i.extra,``,new WeakSet,(e,t)=>{kt(n,e,t,r)}),[n,r]}catch(e){throw n!==0&&t._OrtReleaseSessionOptions(n)!==0&&R(`Can't release session options.`),r.forEach(e=>t._free(e)),e}}}),Nt,Pt,Ft,It,Lt,Rt,zt,Bt,z=x(()=>{Nt=e=>{switch(e){case`int8`:return 3;case`uint8`:return 2;case`bool`:return 9;case`int16`:return 5;case`uint16`:return 4;case`int32`:return 6;case`uint32`:return 12;case`float16`:return 10;case`float32`:return 1;case`float64`:return 11;case`string`:return 8;case`int64`:return 7;case`uint64`:return 13;case`int4`:return 22;case`uint4`:return 21;default:throw Error(`unsupported data type: ${e}`)}},Pt=e=>{switch(e){case 3:return`int8`;case 2:return`uint8`;case 9:return`bool`;case 5:return`int16`;case 4:return`uint16`;case 6:return`int32`;case 12:return`uint32`;case 10:return`float16`;case 1:return`float32`;case 11:return`float64`;case 8:return`string`;case 7:return`int64`;case 13:return`uint64`;case 22:return`int4`;case 21:return`uint4`;default:throw Error(`unsupported data type: ${e}`)}},Ft=(e,t)=>{let n=[-1,4,1,1,2,2,4,8,-1,1,2,8,4,8,-1,-1,-1,-1,-1,-1,-1,.5,.5][e],r=typeof t==`number`?t:t.reduce((e,t)=>e*t,1);return n>0?Math.ceil(r*n):void 0},It=e=>{switch(e){case`float16`:return typeof Float16Array<`u`?Float16Array:Uint16Array;case`float32`:return Float32Array;case`uint8`:return Uint8Array;case`int8`:return Int8Array;case`uint16`:return Uint16Array;case`int16`:return Int16Array;case`int32`:return Int32Array;case`bool`:return Uint8Array;case`float64`:return Float64Array;case`uint32`:return Uint32Array;case`int64`:return BigInt64Array;case`uint64`:return BigUint64Array;default:throw Error(`unsupported type: ${e}`)}},Lt=e=>{switch(e){case`verbose`:return 0;case`info`:return 1;case`warning`:return 2;case`error`:return 3;case`fatal`:return 4;default:throw Error(`unsupported logging level: ${e}`)}},Rt=e=>e===`float32`||e===`float16`||e===`int32`||e===`int64`||e===`uint32`||e===`uint8`||e===`bool`||e===`uint4`||e===`int4`,zt=e=>e===`float32`||e===`float16`||e===`int32`||e===`int64`||e===`uint32`||e===`uint64`||e===`int8`||e===`uint8`||e===`bool`||e===`uint4`||e===`int4`,Bt=e=>{switch(e){case`none`:return 0;case`cpu`:return 1;case`cpu-pinned`:return 2;case`texture`:return 3;case`gpu-buffer`:return 4;case`ml-tensor`:return 5;default:throw Error(`unsupported data location: ${e}`)}}}),Vt,Ht=x(()=>{ze(),Vt=async e=>{if(typeof e==`string`){let t=await fetch(e);if(!t.ok)throw Error(`failed to load external data file: ${e}`);let n=t.headers.get(`Content-Length`),r=n?parseInt(n,10):0;if(r<1073741824)return new Uint8Array(await t.arrayBuffer());{if(!t.body)throw Error(`failed to load external data file: ${e}, no response body.`);let n=t.body.getReader(),i;try{i=new ArrayBuffer(r)}catch(e){if(e instanceof RangeError){let e=Math.ceil(r/65536);i=new WebAssembly.Memory({initial:e,maximum:e}).buffer}else throw e}let a=0;for(;;){let{done:e,value:t}=await n.read();if(e)break;let r=t.byteLength;new Uint8Array(i,a,r).set(t),a+=r}return new Uint8Array(i,0,r)}}return e instanceof Blob?new Uint8Array(await e.arrayBuffer()):e instanceof Uint8Array?e:new Uint8Array(e)}}),Ut,Wt,Gt,Kt,qt,Jt,Yt,Xt=x(()=>{z(),Ut=[`V`,`I`,`W`,`E`,`F`],Wt=(e,t)=>{console.log(`[${Ut[e]},${new Date().toISOString()}]${t}`)},qt=(e,t)=>{Gt=e,Kt=t},Jt=(e,t)=>{let n=Lt(e);n>=Lt(Gt)&&Wt(n,typeof t==`function`?t():t)},Yt=(...e)=>{Kt&&Jt(...e)}}),Zt,Qt,B,$t,en,tn,nn,V=x(()=>{Zt=class{static calcMatMulShape(e,t){return e[1]===t[0]?[e[0],t[1]]:void 0}},Qt=class{static calcShape(e,t,n=!1){let r=e.length,i=t.length;if(r===0)return t;if(i===0)return e;let a=Math.max(e.length,t.length),o=Array(a);if(n){if(r<2||i<2)return;let n=Zt.calcMatMulShape([e[r-2],e[r-1]],[t[i-2],t[i-1]]);if(n===void 0)return;[o[a-2],o[a-1]]=n}for(let s=n?3:1;s<=a;s++){let n=r-s<0?1:e[r-s],c=i-s<0?1:t[i-s];if(n!==c&&n>1&&c>1)return;let l=Math.max(n,c);if(n&&c)o[a-s]=Math.max(n,c);else{if(l>1)return;o[a-s]=0}}return o}static isValidBroadcast(e,t){let n=e.length,r=t.length;if(n>r)return!1;for(let i=1;i<=n;i++)if(e[n-i]!==1&&e[n-i]!==t[r-i])return!1;return!0}},B=class e{static size(t){return e.getSizeFromDimensionRange(t,0,t.length)}static convertShape(e,t=4){let n=e.length;if(n===0)return[];let r=Array(n),i=n-1;for(;i>=0;){if(e[i]%t===0){r[i]=e[i]/t;break}if(t%e[i]!==0)throw Error(`cannot convert shape`);r[i]=1,t/=e[i],i--}for(i--;i>=0;i--)r[i]=e[i];return r}static sizeFromDimension(t,n){if(n<0||n>t.length)throw Error(`invalid dimension of ${n} for sizeFromDimension as Tensor has ${t.length} dimensions.`);return e.getSizeFromDimensionRange(t,n,t.length)}static sizeToDimension(t,n){if(n<0||n>t.length)throw Error(`invalid dimension of ${n} for sizeToDimension as Tensor has ${t.length} dimensions.`);return e.getSizeFromDimensionRange(t,0,n)}static getSizeFromDimensionRange(e,t,n){let r=1;for(let i=t;i<n;i++){if(e[i]<0)throw Error(`cannot get valid size from specified dimension range. Most likely the range contains negative values in them.`);r*=Number(e[i])}return r}static computeStrides(e){let t=e.length;if(t===0)return[];if(t===1)return[1];let n=Array(t);n[t-1]=1,n[t-2]=e[t-1];for(let r=t-3;r>=0;--r)n[r]=n[r+1]*e[r+1];return n}static normalizeAxis(e,t){if(e<-t&&e>=t)throw Error(`unsupported axis for this operation.`);return e<0?e+t:e}static normalizeAxes(e,t){return e.map(n=>this.normalizeAxis(n,t??e.length))}static sortBasedOnPerm(e,t){return t?t.map(t=>e[t]):e.slice().reverse()}static padShape(e,t){let n=e.length;return e.map((e,r)=>e+t[r]+t[r+n])}static areEqual(e,t){return e.length===t.length&&e.every((e,n)=>e===t[n])}},$t=class e{static adjustPoolAttributes(e,t,n,r,i,a){if(!e&&n.length!==t.length-2)throw Error(`length of specified kernel shapes should be 2 less than length of input dimensions`);if(e)for(let e=0;e<t.length-2;e++)e>=n.length?n.push(t[e+2]):n[e]=t[e+2];for(let e=0;e<n.length;e++)if(e<r.length){if(r[e]<0)throw Error(`strides should be greater than or equal to 1`)}else r.push(1);for(let e=0;e<n.length;e++)if(e<i.length){if(i[e]<0)throw Error(`dilations should be greater than or equal to 1`)}else i.push(1);for(let e=0;e<n.length*2;e++)if(e<a.length){if(a[e]<0)throw Error(`pad should be greater than or equal to 1`)}else a.push(0);for(let e=0;e<n.length;e++){if(n[e]<=0)throw Error(`kernel shapes need to be greater than 0`);if(a[e]>=n[e]||a[e+n.length]>=n[e])throw Error(`pads should be smaller than kernel`)}}static adjustPadsBasedOnAutoPad(t,n,r,i,a,o,s){if(s){if(a.length!==2*(t.length-2))throw Error(`length of pads should be twice the length of data dimensions`);if(n.length!==t.length-2)throw Error(`length of strides should be the length of data dimensions`);if(i.length!==t.length-2)throw Error(`length of kernel shapes should be the length of data dimensions`);for(let c=0;c<t.length-2;c++)e.adjustPadAndReturnShape(t[c+(o?1:2)],n[c],r[c],i[c],a,c,c+t.length-2,s)}}static computePoolOutputShape(t,n,r,i,a,o,s,c=0){if(n.length<=0)throw Error(`input shape must be of size greater than 0`);let l=[n[0],n[1]];return e.computeShapeHelper(t,n,l,r,i,a,o,s,c),l}static computeConvOutputShape(t,n,r,i,a,o,s){if(t.length<=0||n.length<=0)throw Error(`invalid input tensor dims or invalid filter tensor dims`);let c=[t[0],n[0]];return e.computeShapeHelper(!1,t,c,r,i,a,o,s),c}static computeShapeHelper(t,n,r,i,a,o,s,c,l=0){if(t)for(let e=0;e<n.length-2;e++)r.push(1);else for(let t=0;t<n.length-2;t++)r.push(e.adjustPadAndReturnShape(n[t+2],i[t],a[t],o[t],s,t,t+n.length-2,c,l))}static computeOutputSize(e,t,n,r,i){let a=Math.floor(e/t)+1;return i===1&&(a=Math.ceil(e/t)+1,(a-1)*t>=n+r&&--a),a}static adjustPadAndReturnShape(t,n,r,i,a,o,s,c,l=0){let u=r*(i-1)+1;if(c&&c!==`NOTSET`)switch(c){case`VALID`:return a[o]=0,a[s]=0,e.computeOutputSize(t-u,n,t,0,l);case`SAME_LOWER`:case`SAME_UPPER`:if(r!==1)throw Error(`Dilation not supported for SAME_UPPER or SAME_LOWER`);{let r=(Math.floor((t+n-1)/n)-1)*n+i-t;return a[o]=Math.floor(c===`SAME_LOWER`?(r+1)/2:r/2),a[s]=r-a[o],e.computeOutputSize(t+a[o]+a[s]-u,n,t,a[o],l)}default:throw Error(`Unsupported AutoPad type`)}else return e.computeOutputSize(t+a[o]+a[s]-u,n,t,a[o],l)}},en=class{static getShapeOfGemmResult(e,t,n,r,i){if(e.length!==2||n.length!==2)throw Error(`shape need to be of size 2`);let a,o,s;t?(a=e[1],o=e[0]):(a=e[0],o=e[1]);let c=-1;if(r?(s=n[0],c=1):(s=n[1],c=0),n[c]!==o)throw Error(`dimension mismatch`);if(a<=0||s<=0||o<=0)throw Error(`invalid shape specified`);if(i&&!Qt.isValidBroadcast(i,[a,s]))throw Error(`gemm: invalid bias shape for broadcast`);return[a,s,o]}},tn=-34028234663852886e22,nn=34028234663852886e22}),rn,an=x(()=>{z(),rn=(e,t)=>new(It(t))(e)}),on,sn,cn,ln,un,dn,fn,pn,mn,hn,gn,_n=x(()=>{z(),Xt(),on=new Map([[`float32`,32],[`float16`,16],[`int32`,32],[`uint32`,32],[`int64`,64],[`uint64`,64],[`int8`,8],[`uint8`,8],[`int4`,4],[`uint4`,4]]),sn=(e,t)=>{if(t===`int32`)return e;let n=on.get(t);if(!n)throw Error(`WebNN backend does not support data type: ${t}`);let r=n/8;if(e.byteLength%r!==0)throw Error(`Invalid Uint8Array length - must be a multiple of ${r}.`);let i=e.byteLength/r,a=new(It(t))(e.buffer,e.byteOffset,i);switch(t){case`int64`:case`uint64`:{let e=new Int32Array(i);for(let t=0;t<i;t++){let n=a[t];if(n>2147483647n||n<-2147483648n)throw Error(`Can not convert int64 data to int32 - value out of range.`);e[t]=Number(n)}return new Uint8Array(e.buffer)}case`int8`:case`uint8`:case`uint32`:{if(t===`uint32`&&a.some(e=>e>2147483647))throw Error(`Can not convert uint32 data to int32 - value out of range.`);let e=Int32Array.from(a,Number);return new Uint8Array(e.buffer)}default:throw Error(`Unsupported data conversion from ${t} to 'int32'`)}},cn=(e,t)=>{if(t===`int32`)return e;if(e.byteLength%4!=0)throw Error(`Invalid Uint8Array length - must be a multiple of 4 (int32).`);let n=e.byteLength/4,r=new Int32Array(e.buffer,e.byteOffset,n);switch(t){case`int64`:{let e=BigInt64Array.from(r,BigInt);return new Uint8Array(e.buffer)}case`uint64`:{if(r.some(e=>e<0))throw Error(`Can not convert int32 data to uin64 - negative value found.`);let e=BigUint64Array.from(r,BigInt);return new Uint8Array(e.buffer)}case`int8`:{if(r.some(e=>e<-128||e>127))throw Error(`Can not convert int32 data to int8 - value out of range.`);let e=Int8Array.from(r,Number);return new Uint8Array(e.buffer)}case`uint8`:if(r.some(e=>e<0||e>255))throw Error(`Can not convert int32 data to uint8 - value out of range.`);return Uint8Array.from(r,Number);case`uint32`:{if(r.some(e=>e<0))throw Error(`Can not convert int32 data to uint32 - negative value found.`);let e=Uint32Array.from(r,Number);return new Uint8Array(e.buffer)}default:throw Error(`Unsupported data conversion from 'int32' to ${t}`)}},ln=1,un=()=>ln++,dn=new Map([[`int8`,`int32`],[`uint8`,`int32`],[`uint32`,`int32`],[`int64`,`int32`]]),fn=(e,t)=>{let n=on.get(e);if(!n)throw Error(`WebNN backend does not support data type: ${e}`);return t.length>0?Math.ceil(t.reduce((e,t)=>e*t)*n/8):0},pn=class{constructor(e){this.isDataConverted=!1;let{sessionId:t,context:n,tensor:r,dataType:i,shape:a,fallbackDataType:o}=e;this.sessionId=t,this.mlContext=n,this.mlTensor=r,this.dataType=i,this.tensorShape=a,this.fallbackDataType=o}get tensor(){return this.mlTensor}get type(){return this.dataType}get fallbackType(){return this.fallbackDataType}get shape(){return this.tensorShape}get byteLength(){return fn(this.dataType,this.tensorShape)}destroy(){Yt(`verbose`,()=>`[WebNN] TensorWrapper.destroy`),this.mlTensor.destroy()}write(e){this.mlContext.writeTensor(this.mlTensor,e)}async read(e){if(this.fallbackDataType){let t=await this.mlContext.readTensor(this.mlTensor),n=cn(new Uint8Array(t),this.dataType);if(e){(e instanceof ArrayBuffer?new Uint8Array(e):new Uint8Array(e.buffer,e.byteOffset,e.byteLength)).set(n);return}return new Uint8Array(n).buffer}return e?this.mlContext.readTensor(this.mlTensor,e):this.mlContext.readTensor(this.mlTensor)}canReuseTensor(e,t,n){return this.mlContext===e&&this.dataType===t&&this.tensorShape.length===n.length&&this.tensorShape.every((e,t)=>e===n[t])}setIsDataConverted(e){this.isDataConverted=e}},mn=class{constructor(e,t){this.tensorManager=e,this.wrapper=t}get tensorWrapper(){return this.wrapper}releaseTensor(){this.tensorWrapper&&(this.tensorManager.releaseTensor(this.tensorWrapper),this.wrapper=void 0)}async ensureTensor(e,t,n,r){let i=this.tensorManager.getMLContext(e),a=this.tensorManager.getMLOpSupportLimits(e),o;if(!a?.input.dataTypes.includes(t)){if(o=dn.get(t),!o||a?.input.dataTypes.includes(o))throw Error(`WebNN backend does not support data type: ${t}`);Yt(`verbose`,()=>`[WebNN] TensorIdTracker.ensureTensor: fallback dataType from ${t} to ${o}`)}if(this.wrapper){if(this.wrapper.canReuseTensor(i,t,n))return this.wrapper.tensor;if(r){if(this.wrapper.byteLength!==fn(t,n))throw Error(`Unable to copy data to tensor with different size.`);this.activeUpload=new Uint8Array(await this.wrapper.read())}this.tensorManager.releaseTensor(this.wrapper)}let s=typeof MLTensorUsage>`u`?void 0:MLTensorUsage.READ|MLTensorUsage.WRITE;return this.wrapper=await this.tensorManager.getCachedTensor(e,t,n,s,!0,!0,o),r&&this.activeUpload&&(this.wrapper.write(this.activeUpload),this.activeUpload=void 0),this.wrapper.tensor}upload(e){let t=e;if(this.wrapper){if(this.wrapper.fallbackType)if(this.wrapper.fallbackType===`int32`)t=sn(e,this.wrapper.type),this.wrapper.setIsDataConverted(!0);else throw Error(`Unsupported fallback data type: ${this.wrapper.fallbackType}`);if(e.byteLength===this.wrapper.byteLength){this.wrapper.write(t);return}Yt(`verbose`,()=>`Data size does not match tensor size. Releasing tensor.`),this.releaseTensor()}this.activeUpload?this.activeUpload.set(t):this.activeUpload=new Uint8Array(t)}async download(e){if(this.activeUpload){let t=this.wrapper?.isDataConverted?cn(this.activeUpload,this.wrapper?.type):this.activeUpload;if(e){e instanceof ArrayBuffer?new Uint8Array(e).set(t):new Uint8Array(e.buffer,e.byteOffset,e.byteLength).set(t);return}return t.buffer}if(!this.wrapper)throw Error(`Tensor has not been created.`);return e?this.wrapper.read(e):this.wrapper.read()}},hn=class{constructor(e){this.backend=e,this.tensorTrackersById=new Map,this.freeTensors=[],this.externalTensors=new Set}getMLContext(e){let t=this.backend.getMLContext(e);if(!t)throw Error(`MLContext not found for session.`);return t}getMLOpSupportLimits(e){return this.backend.getMLOpSupportLimits(e)}reserveTensorId(){let e=un();return this.tensorTrackersById.set(e,new mn(this)),e}releaseTensorId(e){let t=this.tensorTrackersById.get(e);t&&(this.tensorTrackersById.delete(e),t.tensorWrapper&&this.releaseTensor(t.tensorWrapper))}async ensureTensor(e,t,n,r,i){Yt(`verbose`,()=>`[WebNN] TensorManager.ensureTensor {tensorId: ${t}, dataType: ${n}, shape: ${r}, copyOld: ${i}}`);let a=this.tensorTrackersById.get(t);if(!a)throw Error(`Tensor not found.`);return a.ensureTensor(e,n,r,i)}upload(e,t){let n=this.tensorTrackersById.get(e);if(!n)throw Error(`Tensor not found.`);n.upload(t)}async download(e,t){Yt(`verbose`,()=>`[WebNN] TensorManager.download {tensorId: ${e}, dstBuffer: ${t?.byteLength}}`);let n=this.tensorTrackersById.get(e);if(!n)throw Error(`Tensor not found.`);return n.download(t)}releaseTensorsForSession(e){for(let t of this.freeTensors)t.sessionId===e&&t.destroy();this.freeTensors=this.freeTensors.filter(t=>t.sessionId!==e)}registerTensor(e,t,n,r){let i=this.getMLContext(e),a=un(),o=new pn({sessionId:e,context:i,tensor:t,dataType:n,shape:r});return this.tensorTrackersById.set(a,new mn(this,o)),this.externalTensors.add(o),a}async getCachedTensor(e,t,n,r,i,a,o){let s=this.getMLContext(e);for(let[r,i]of this.freeTensors.entries())if(i.canReuseTensor(s,t,n)){Yt(`verbose`,()=>`[WebNN] Reusing tensor {dataType: ${t}, ${o?`fallbackDataType: ${o},`:``} shape: ${n}`);let i=this.freeTensors.splice(r,1)[0];return i.sessionId=e,i}Yt(`verbose`,()=>`[WebNN] MLContext.createTensor {dataType: ${t}, ${o?`fallbackDataType: ${o},`:``} shape: ${n}}`);let c=await s.createTensor({dataType:o??t,shape:n,dimensions:n,usage:r,writable:i,readable:a});return new pn({sessionId:e,context:s,tensor:c,dataType:t,shape:n,fallbackDataType:o})}releaseTensor(e){this.externalTensors.has(e)&&this.externalTensors.delete(e),this.freeTensors.push(e)}},gn=(...e)=>new hn(...e)}),vn,yn,bn,xn=x(()=>{z(),bt(),an(),_n(),Xt(),vn=new Map([[1,`float32`],[10,`float16`],[6,`int32`],[12,`uint32`],[7,`int64`],[13,`uint64`],[22,`int4`],[21,`uint4`],[3,`int8`],[2,`uint8`],[9,`uint8`]]),yn=(e,t)=>{if(e===t)return!0;if(e===void 0||t===void 0)return!1;let n=Object.keys(e).sort(),r=Object.keys(t).sort();return n.length===r.length&&n.every((n,i)=>n===r[i]&&e[n]===t[n])},bn=class{constructor(e){this.tensorManager=gn(this),this.mlContextBySessionId=new Map,this.sessionIdsByMLContext=new Map,this.mlContextCache=[],this.sessionGraphInputs=new Map,this.sessionGraphOutputs=new Map,this.temporaryGraphInputs=[],this.temporaryGraphOutputs=[],this.temporarySessionTensorIds=new Map,this.mlOpSupportLimitsBySessionId=new Map,qt(e.logLevel,!!e.debug)}get currentSessionId(){if(this.activeSessionId===void 0)throw Error(`No active session`);return this.activeSessionId}onRunStart(e){Yt(`verbose`,()=>`[WebNN] onRunStart {sessionId: ${e}}`),this.activeSessionId=e}onRunEnd(e){Yt(`verbose`,()=>`[WebNN] onRunEnd {sessionId: ${e}}`);let t=this.temporarySessionTensorIds.get(e);if(t){for(let e of t)Yt(`verbose`,()=>`[WebNN] releasing temporary tensor {tensorId: ${e}}`),this.tensorManager.releaseTensorId(e);this.temporarySessionTensorIds.delete(e),this.activeSessionId=void 0}}async createMLContext(e){if(e instanceof GPUDevice){let t=this.mlContextCache.findIndex(t=>t.gpuDevice===e);if(t!==-1)return this.mlContextCache[t].mlContext;{let t=await navigator.ml.createContext(e);return this.mlContextCache.push({gpuDevice:e,mlContext:t}),t}}if(e===void 0){let e=this.mlContextCache.findIndex(e=>e.options===void 0&&e.gpuDevice===void 0);if(e!==-1)return this.mlContextCache[e].mlContext;{let e=await navigator.ml.createContext();return this.mlContextCache.push({mlContext:e}),e}}let t=this.mlContextCache.findIndex(t=>yn(t.options,e));if(t!==-1)return this.mlContextCache[t].mlContext;{let t=await navigator.ml.createContext(e);return this.mlContextCache.push({options:e,mlContext:t}),t}}registerMLContext(e,t){this.mlContextBySessionId.set(e,t);let n=this.sessionIdsByMLContext.get(t);n||(n=new Set,this.sessionIdsByMLContext.set(t,n)),n.add(e),this.mlOpSupportLimitsBySessionId.has(e)||this.mlOpSupportLimitsBySessionId.set(e,t.opSupportLimits()),this.temporaryGraphInputs.length>0&&(this.sessionGraphInputs.set(e,this.temporaryGraphInputs),this.temporaryGraphInputs=[]),this.temporaryGraphOutputs.length>0&&(this.sessionGraphOutputs.set(e,this.temporaryGraphOutputs),this.temporaryGraphOutputs=[])}onReleaseSession(e){this.sessionGraphInputs.delete(e),this.sessionGraphOutputs.delete(e);let t=this.mlContextBySessionId.get(e);if(!t)return;this.tensorManager.releaseTensorsForSession(e),this.mlContextBySessionId.delete(e),this.mlOpSupportLimitsBySessionId.delete(e);let n=this.sessionIdsByMLContext.get(t);if(n.delete(e),n.size===0){this.sessionIdsByMLContext.delete(t);let e=this.mlContextCache.findIndex(e=>e.mlContext===t);e!==-1&&this.mlContextCache.splice(e,1)}}getMLContext(e){return this.mlContextBySessionId.get(e)}getMLOpSupportLimits(e){return this.mlOpSupportLimitsBySessionId.get(e)}reserveTensorId(){return this.tensorManager.reserveTensorId()}releaseTensorId(e){Yt(`verbose`,()=>`[WebNN] releaseTensorId {tensorId: ${e}}`),this.tensorManager.releaseTensorId(e)}async ensureTensor(e,t,n,r,i){let a=vn.get(n);if(!a)throw Error(`Unsupported ONNX data type: ${n}`);return this.tensorManager.ensureTensor(e??this.currentSessionId,t,a,r,i)}async createTemporaryTensor(e,t,n){Yt(`verbose`,()=>`[WebNN] createTemporaryTensor {onnxDataType: ${t}, shape: ${n}}`);let r=vn.get(t);if(!r)throw Error(`Unsupported ONNX data type: ${t}`);let i=this.tensorManager.reserveTensorId();await this.tensorManager.ensureTensor(e,i,r,n,!1);let a=this.temporarySessionTensorIds.get(e);return a?a.push(i):this.temporarySessionTensorIds.set(e,[i]),i}uploadTensor(e,t){if(!yt().shouldTransferToMLTensor)throw Error(`Trying to upload to a MLTensor while shouldTransferToMLTensor is false`);Yt(`verbose`,()=>`[WebNN] uploadTensor {tensorId: ${e}, data: ${t.byteLength}}`),this.tensorManager.upload(e,t)}async downloadTensor(e,t){return this.tensorManager.download(e,t)}createMLTensorDownloader(e,t){return async()=>{let n=await this.tensorManager.download(e);return rn(n,t)}}registerMLTensor(e,t,n,r){let i=vn.get(n);if(!i)throw Error(`Unsupported ONNX data type: ${n}`);let a=this.tensorManager.registerTensor(e,t,i,r);return Yt(`verbose`,()=>`[WebNN] registerMLTensor {tensor: ${t}, dataType: ${i}, dimensions: ${r}} -> {tensorId: ${a}}`),a}registerGraphInput(e){this.temporaryGraphInputs.push(e)}registerGraphOutput(e){this.temporaryGraphOutputs.push(e)}isGraphInput(e,t){let n=this.sessionGraphInputs.get(e);return n?n.includes(t):!1}isGraphOutput(e,t){let n=this.sessionGraphOutputs.get(e);return n?n.includes(t):!1}isGraphInputOutputTypeSupported(e,t,n=!0){let r=vn.get(Nt(t)),i=this.mlOpSupportLimitsBySessionId.get(e);return typeof r>`u`?!1:n?!!i?.input.dataTypes.includes(r):!!i?.output.dataTypes.includes(r)}flush(){}}}),Sn=x(()=>{}),Cn,wn,Tn,En,Dn,On,kn,An,jn,Mn=x(()=>{Xt(),Sn(),Cn=new Map([[64,250],[128,200],[256,200],[512,200],[2048,230],[4096,200],[8192,50],[16384,50],[32768,50],[65536,50],[131072,50],[262144,50],[524288,50],[1048576,50],[2097152,30],[4194304,20],[8388608,10],[12582912,10],[16777216,10],[26214400,15],[33554432,22],[44236800,2],[58982400,6],[67108864,6],[134217728,6],[167772160,6]]),wn=[],Tn=e=>Math.ceil(Number(e)/16)*16,En=e=>{for(let t=0;t<wn.length;t++){let n=wn[t];if(e<=n)return n}return Math.ceil(e/16)*16},Dn=1,On=()=>Dn++,kn=async(e,t,n,r)=>{let i=Tn(n),a=e.device.createBuffer({size:i,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ});try{let o=e.getCommandEncoder();e.endComputePass(),o.copyBufferToBuffer(t,0,a,0,i),e.flush(),await a.mapAsync(GPUMapMode.READ);let s=a.getMappedRange();if(r){let e=r();return e.set(new Uint8Array(s,0,n)),e}return new Uint8Array(s.slice(0,n))}finally{a.destroy()}},An=class{constructor(e){this.backend=e,this.storageCache=new Map,this.freeBuffers=new Map,this.freeUniformBuffers=new Map,this.buffersPending=[],this.capturedPendingBuffers=new Map;for(let[e]of Cn)wn.push(e),this.freeBuffers.set(e,[]),this.freeUniformBuffers.set(e,[]);this.sessionCount=0}upload(e,t){let n=t.buffer,r=t.byteOffset,i=t.byteLength,a=Tn(i),o=this.storageCache.get(e);if(!o)throw Error(`gpu data for uploading does not exist`);if(Number(o.originalSize)!==i)throw Error(`inconsistent data size. gpu data size=${o.originalSize}, data size=${i}`);if(a===i&&r%4==0)this.backend.device.queue.writeBuffer(o.gpuData.buffer,0,n,r,i);else{let e=new Uint8Array(a);e.set(t),this.backend.device.queue.writeBuffer(o.gpuData.buffer,0,e,0,a)}Yt(`verbose`,()=>`[WebGPU] GpuDataManager.upload(id=${e})`)}memcpy(e,t){let n=this.storageCache.get(e);if(!n)throw Error(`source gpu data for memcpy does not exist`);let r=this.storageCache.get(t);if(!r)throw Error(`destination gpu data for memcpy does not exist`);if(n.originalSize!==r.originalSize)throw Error(`inconsistent source and destination gpu data size`);let i=Tn(n.originalSize),a=this.backend.getCommandEncoder();this.backend.endComputePass(),a.copyBufferToBuffer(n.gpuData.buffer,0,r.gpuData.buffer,0,i)}registerExternalBuffer(e,t,n){let r;if(n){if(r=n[0],e===n[1])return Yt(`verbose`,()=>`[WebGPU] GpuDataManager.registerExternalBuffer(size=${t}) => id=${r}, buffer is the same, skip.`),r;if(this.backend.capturedCommandList.has(this.backend.currentSessionId))throw Error(`Registering a different external buffer under graph capture mode is not supported yet.
             Please use the previous external buffer!`)}else r=On();return this.storageCache.set(r,{gpuData:{id:r,type:0,buffer:e},originalSize:t}),Yt(`verbose`,()=>`[WebGPU] GpuDataManager.registerExternalBuffer(size=${t}) => id=${r}, registered.`),r}unregisterExternalBuffer(e){e!==void 0&&(this.storageCache.delete(e),Yt(`verbose`,()=>`[WebGPU] GpuDataManager.unregisterExternalBuffer() => id=${e}`))}create(e,t=GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST){let n=En(e),r,i=(t&GPUBufferUsage.STORAGE)===GPUBufferUsage.STORAGE,a=(t&GPUBufferUsage.UNIFORM)===GPUBufferUsage.UNIFORM;if(i||a){let e=(i?this.freeBuffers:this.freeUniformBuffers).get(n);r=e&&e.length>0?e.pop():this.backend.device.createBuffer({size:n,usage:t})}else r=this.backend.device.createBuffer({size:n,usage:t});let o={id:On(),type:0,buffer:r};return this.storageCache.set(o.id,{gpuData:o,originalSize:Number(e)}),Yt(`verbose`,()=>`[WebGPU] GpuDataManager.create(size=${e}) => id=${o.id}`),o}get(e){return this.storageCache.get(e)?.gpuData}release(e){let t=typeof e==`bigint`?Number(e):e,n=this.storageCache.get(t);if(!n){if(this.storageCache.size===0)return 0;throw Error(`releasing data does not exist`)}return Yt(`verbose`,()=>`[WebGPU] GpuDataManager.release(id=${t}), gpuDataId=${n.gpuData.id}`),this.storageCache.delete(t),this.buffersPending.push(n.gpuData.buffer),n.originalSize}async download(e,t){let n=this.storageCache.get(Number(e));if(!n)throw Error(`data does not exist`);await kn(this.backend,n.gpuData.buffer,n.originalSize,t)}refreshPendingBuffers(){if(this.buffersPending.length!==0)if(this.backend.sessionStatus==="default"){for(let e of this.buffersPending){let t=Cn.get(e.size);if((e.usage&GPUBufferUsage.STORAGE)===GPUBufferUsage.STORAGE){let n=this.freeBuffers.get(e.size)||[];t===void 0||n.length>=t?e.destroy():n.push(e)}else if((e.usage&GPUBufferUsage.UNIFORM)===GPUBufferUsage.UNIFORM){let n=this.freeUniformBuffers.get(e.size)||[];t===void 0||n.length>=t?e.destroy():n.push(e)}else e.destroy()}this.buffersPending=[]}else{let e=this.capturedPendingBuffers.get(this.backend.currentSessionId);e||(e=[],this.capturedPendingBuffers.set(this.backend.currentSessionId,e));for(let t of this.buffersPending)e.push(t);this.buffersPending=[]}}dispose(){this.freeBuffers.forEach(e=>{e.forEach(e=>{e.destroy()})}),this.freeUniformBuffers.forEach(e=>{e.forEach(e=>{e.destroy()})}),this.storageCache.forEach(e=>{e.gpuData.buffer.destroy()}),this.capturedPendingBuffers.forEach(e=>{e.forEach(e=>{e.destroy()})}),this.storageCache=new Map,this.freeBuffers=new Map,this.freeUniformBuffers=new Map,this.capturedPendingBuffers=new Map}onCreateSession(){this.sessionCount+=1}onReleaseSession(e){let t=this.capturedPendingBuffers.get(e);t&&(t.forEach(e=>{e.destroy()}),this.capturedPendingBuffers.delete(e)),--this.sessionCount,this.sessionCount===0&&(Yt(`warning`,()=>`[WebGPU] Clearing webgpu buffer cache`),this.storageCache.forEach(e=>{e.gpuData.buffer.destroy()}),this.storageCache=new Map)}},jn=(...e)=>new An(...e)}),Nn,Pn,Fn=x(()=>{Nn=class{constructor(e){Object.assign(this,e)}get cacheKey(){return this.key||=Object.getOwnPropertyNames(this).sort().map(e=>`${this[e]}`).join(`;`),this.key}},Pn=e=>new Nn(e)}),In,Ln,Rn,zn,H,Bn,Vn,Hn,Un,U,Wn,W,G,Gn,Kn,qn,Jn,K=x(()=>{z(),V(),In=64,Ln=(e,t)=>{if(t===3)throw Error(`vec3 has same alignment as vec4, use vec4 instead`);switch(Number(e)){case 10:return t>1?`vec${t}<f16>`:`f16`;case 1:return t>1?`vec${t}<f32>`:`f32`;case 6:return t>1?`vec${t}<i32>`:`i32`;case 12:return t>1?`vec${t}<u32>`:`u32`;case 7:if(t>1)throw Error(`currently not supported vecX of uint64 yet`);return[`vec2<u32>`,`i32`];case 13:if(t>1)throw Error(`currently not supported vecX of uint64 yet`);return[`vec2<u32>`,`u32`];case 9:if(t!==4)throw Error(`bool must be vec4`);return[`u32`,`vec4<bool>`];case 22:return`i32`;case 21:return`u32`;default:throw Error(`Unknown data type: ${e}`)}},Rn=(e,t=1)=>{let n=Ln(e,t);return typeof n==`string`?n:n[0]},zn=(e,t=1)=>{let n=Ln(e,t);return typeof n==`string`?n:n[1]},H=(...e)=>{let t=[];return e.forEach(e=>{e.length!==0&&t.push({type:12,data:e},{type:12,data:B.computeStrides(e)})}),t},Bn=e=>e%4==0?4:e%2==0?2:1,Vn=(e=`f32`,t,n=`0`)=>!t||t===1?`${e}(${n})`:`vec${t}<${e}>(${n})`,Hn=(e,t,n)=>e===`f32`?n:t===1?`f32(${n})`:`vec${t}<f32>(${n})`,Un=(e,t)=>t===4?`(${e}.x + ${e}.y + ${e}.z + ${e}.w)`:t===2?`(${e}.x + ${e}.y)`:t===3?`(${e}.x + ${e}.y + ${e}.z)`:e,U=(e,t,n,r)=>e.startsWith(`uniforms.`)&&n>4?typeof t==`string`?r===`f16`?`${e}[(${t}) / 8][(${t}) % 8 / 4][(${t}) % 8 % 4]`:`${e}[(${t}) / 4][(${t}) % 4]`:r===`f16`?`${e}[${Math.floor(t/8)}][${Math.floor(t%8/4)}][${t%8%4}]`:`${e}[${Math.floor(t/4)}][${t%4}]`:n>1?`${e}[${t}]`:e,Wn=(e,t,n,r,i)=>{let a=typeof n==`number`,o=a?n:n.length,s=[...Array(o).keys()],c=o<2?`u32`:o<=4?`vec${o}<u32>`:`array<u32, ${o}>`,l=Ln(t,i),u=typeof l==`string`?l:l[1],d={indices:c,value:u,storage:typeof l==`string`?l:l[0],tensor:t},f=e=>typeof e==`string`?e:`${e}u`,p={offsetToIndices:!1,indicesToOffset:!1,broadcastedIndicesToOffset:!1,set:!1,setByIndices:!1,get:!1,getByIndices:!1},m=a?`uniforms.`:``,h=`${m}${e}_shape`,g=`${m}${e}_strides`,_=``;for(let e=0;e<o-1;e++)_+=`
    let dim${e} = current / ${U(g,e,o)};
    let rest${e} = current % ${U(g,e,o)};
    indices[${e}] = dim${e};
    current = rest${e};
    `;_+=`indices[${o-1}] = current;`;let v=o<2?``:`
  fn o2i_${e}(offset: u32) -> ${d.indices} {
    var indices: ${d.indices};
    var current = offset;
    ${_}
    return indices;
  }`,y=t=>(p.offsetToIndices=!0,o<2?t:`o2i_${e}(${t})`),b=[];if(o>=2)for(let e=o-1;e>=0;e--)b.push(`${U(g,e,o)} * (indices[${e}])`);let x=o<2?``:`
  fn i2o_${e}(indices: ${d.indices}) -> u32 {
    return ${b.join(`+`)};
  }`,S=t=>(p.indicesToOffset=!0,o<2?t:`i2o_${e}(${t})`),C=(...e)=>o===0?`0u`:`${d.indices}(${e.map(f).join(`,`)})`,w=(e,t)=>o<2?`${e}`:`${U(e,t,o)}`,T=(e,t,n)=>o<2?`${e}=${n};`:`${U(e,t,o)}=${n};`,E={},D=(t,n)=>{p.broadcastedIndicesToOffset=!0;let r=`${n.name}broadcastedIndicesTo${e}Offset`;if(r in E)return`${r}(${t})`;let i=[];for(let e=o-1;e>=0;e--){let t=n.indicesGet(`outputIndices`,e+n.rank-o);i.push(`${w(g,e)} * (${t} % ${w(h,e)})`)}return E[r]=`fn ${r}(outputIndices: ${n.type.indices}) -> u32 {
             return ${i.length>0?i.join(`+`):`0u`};
           }`,`${r}(${t})`},O=(t,n)=>(()=>{if(d.storage===d.value)return`${e}[${t}]=${n};`;if(d.storage===`vec2<u32>`&&d.value===`i32`)return`${e}[${t}]=vec2<u32>(u32(${n}), select(0u, 0xFFFFFFFFu, ${n} < 0));`;if(d.storage===`vec2<u32>`&&d.value===`u32`)return`${e}[${t}]=vec2<u32>(u32(${n}), 0u);`;if(d.storage===`u32`&&d.value===`vec4<bool>`)return`${e}[${t}]=dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(${n}));`;throw Error(`not supported combination of storage type ${d.storage} and value type ${d.value} yet`)})(),k=t=>(()=>{if(d.storage===d.value)return`${e}[${t}]`;if(d.storage===`vec2<u32>`&&d.value===`i32`)return`i32(${e}[${t}].x)`;if(d.storage===`vec2<u32>`&&d.value===`u32`)return`u32(${e}[${t}].x)`;if(d.storage===`u32`&&d.value===`vec4<bool>`)return`vec4<bool>(bool(${e}[${t}] & 0xFFu), bool(${e}[${t}] & 0xFF00u), bool(${e}[${t}] & 0xFF0000u), bool(${e}[${t}] & 0xFF000000u))`;throw Error(`not supported combination of storage type ${d.storage} and value type ${d.value} yet`)})(),A=o<2?``:`
  fn get_${e}ByIndices(indices: ${d.indices}) -> ${u} {
    return ${k(`i2o_${e}(indices)`)};
  }`,j=o<2?``:(()=>{let t=s.map(e=>`d${e}: u32`).join(`, `),n=s.map(e=>`d${e}`).join(`, `);return`
  fn get_${e}(${t}) -> ${u} {
    return get_${e}ByIndices(${C(n)});
  }`})(),ee=(...t)=>{if(t.length!==o)throw Error(`indices length must be ${o}`);let n=t.map(f).join(`,`);return o===0?k(`0u`):o===1?k(n[0]):(p.get=!0,p.getByIndices=!0,p.indicesToOffset=!0,`get_${e}(${n})`)},te=t=>o<2?k(t):(p.getByIndices=!0,p.indicesToOffset=!0,`get_${e}ByIndices(${t})`),M=o<2?``:`
  fn set_${e}ByIndices(indices: ${d.indices}, value: ${u}) {
    ${O(`i2o_${e}(indices)`,`value`)}
  }`,ne=o<2?``:(()=>{let t=s.map(e=>`d${e}: u32`).join(`, `),n=s.map(e=>`d${e}`).join(`, `);return`
  fn set_${e}(${t}, value: ${u}) {
    set_${e}ByIndices(${C(n)}, value);
  }`})();return{impl:()=>{let e=[],t=!1;return p.offsetToIndices&&(e.push(v),t=!0),p.indicesToOffset&&(e.push(x),t=!0),p.broadcastedIndicesToOffset&&(Object.values(E).forEach(t=>e.push(t)),t=!0),p.set&&(e.push(ne),t=!0),p.setByIndices&&(e.push(M),t=!0),p.get&&(e.push(j),t=!0),p.getByIndices&&(e.push(A),t=!0),!a&&t&&e.unshift(`const ${h} = ${d.indices}(${n.join(`,`)});`,`const ${g} = ${d.indices}(${B.computeStrides(n).join(`,`)});`),e.join(`
`)},type:d,offsetToIndices:y,indicesToOffset:S,broadcastedIndicesToOffset:D,indices:C,indicesGet:w,indicesSet:T,set:(...t)=>{if(t.length!==o+1)throw Error(`indices length must be ${o}`);let n=t[o];if(typeof n!=`string`)throw Error(`value must be string`);let r=t.slice(0,o).map(f).join(`,`);return o===0?O(`0u`,n):o===1?O(r[0],n):(p.set=!0,p.setByIndices=!0,p.indicesToOffset=!0,`set_${e}(${r}, ${n})`)},setByOffset:O,setByIndices:(t,n)=>o<2?O(t,n):(p.setByIndices=!0,p.indicesToOffset=!0,`set_${e}ByIndices(${t}, ${n});`),get:ee,getByOffset:k,getByIndices:te,usage:r,name:e,strides:g,shape:h,rank:o}},W=(e,t,n,r=1)=>Wn(e,t,n,`input`,r),G=(e,t,n,r=1)=>Wn(e,t,n,`output`,r),Gn=(e,t,n)=>Wn(e,t,n,`atomicOutput`,1),Kn=(e,t,n,r=1)=>Wn(e,t,n,`internal`,r),qn=class{constructor(e,t){this.normalizedDispatchGroup=e,this.limits=t,this.internalVariables=[],this.variables=[],this.uniforms=[],this.variableIndex=0}guardAgainstOutOfBoundsWorkgroupSizes(e){return`if (global_idx >= ${typeof e==`number`?`${e}u`:e}) { return; }`}mainStart(e=In){let t=typeof e==`number`?e:e[0],n=typeof e==`number`?1:e[1],r=typeof e==`number`?1:e[2];if(t>this.limits.maxComputeWorkgroupSizeX||n>this.limits.maxComputeWorkgroupSizeY||r>this.limits.maxComputeWorkgroupSizeZ)throw Error(`workgroup size [${t}, ${n}, ${r}] exceeds the maximum workgroup size [${this.limits.maxComputeWorkgroupSizeX}, ${this.limits.maxComputeWorkgroupSizeY}, ${this.limits.maxComputeWorkgroupSizeZ}].`);if(t*n*r>this.limits.maxComputeInvocationsPerWorkgroup)throw Error(`workgroup size [${t}, ${n}, ${r}] exceeds the maximum workgroup invocations ${this.limits.maxComputeInvocationsPerWorkgroup}.`);let i=this.normalizedDispatchGroup[1]===1&&this.normalizedDispatchGroup[2]===1;return`@compute @workgroup_size(${t}, ${n}, ${r})
  fn main(${i?`@builtin(global_invocation_id) global_id : vec3<u32>,
    @builtin(workgroup_id) workgroup_id : vec3<u32>,
    @builtin(local_invocation_index) local_idx : u32,
    @builtin(local_invocation_id) local_id : vec3<u32>`:`@builtin(global_invocation_id) global_id : vec3<u32>,
                                             @builtin(local_invocation_id) local_id : vec3<u32>,
    @builtin(local_invocation_index) local_idx : u32,
    @builtin(workgroup_id) workgroup_id : vec3<u32>,
    @builtin(num_workgroups) num_workgroups : vec3<u32>`}) {
    ${i?`let global_idx = global_id.x;
         let workgroup_index = workgroup_id.x;`:`let workgroup_index = workgroup_id.z * num_workgroups[0] * num_workgroups[1] +
             workgroup_id.y * num_workgroups[0] + workgroup_id.x;
         let global_idx = workgroup_index * ${t*n*r}u + local_idx;`}
  `}appendVariableUniforms(e){e.rank!==0&&(e.shape.startsWith(`uniforms.`)&&this.uniforms.push({name:e.shape.replace(`uniforms.`,``),type:`u32`,length:e.rank}),e.strides.startsWith(`uniforms.`)&&this.uniforms.push({name:e.strides.replace(`uniforms.`,``),type:`u32`,length:e.rank}))}declareVariable(e,t){if(e.usage===`internal`)throw Error(`cannot use internal variable with declareVariable(). use registerInternalVariables() instead.`);this.variables.push(e),this.appendVariableUniforms(e);let n=e.usage===`input`?`read`:`read_write`,r=e.usage===`atomicOutput`?`atomic<i32>`:e.type.storage;return`@group(0) @binding(${t}) var<storage, ${n}> ${e.name}: array<${r}>;`}declareVariables(...e){return e.map(e=>this.declareVariable(e,this.variableIndex++)).join(`
`)}registerInternalVariable(e){if(e.usage!==`internal`)throw Error(`cannot use input or output variable with registerInternalVariable(). use declareVariables() instead.`);this.internalVariables.push(e),this.appendVariableUniforms(e)}registerInternalVariables(...e){return e.forEach(e=>this.registerInternalVariable(e)),this}registerUniform(e,t,n=1){return this.uniforms.push({name:e,type:t,length:n}),this}registerUniforms(e){return this.uniforms=this.uniforms.concat(e),this}uniformDeclaration(){if(this.uniforms.length===0)return``;let e=[];for(let{name:t,type:n,length:r}of this.uniforms)if(r&&r>4)n===`f16`?e.push(`@align(16) ${t}:array<mat2x4<${n}>, ${Math.ceil(r/8)}>`):e.push(`${t}:array<vec4<${n}>, ${Math.ceil(r/4)}>`);else{let i=r==null||r===1?n:`vec${r}<${n}>`;e.push(`${t}:${i}`)}return`
      struct Uniforms { ${e.join(`, `)} };
      @group(0) @binding(${this.variableIndex}) var<uniform> uniforms: Uniforms;`}get additionalImplementations(){return this.uniformDeclaration()+this.variables.map(e=>e.impl()).join(`
`)+this.internalVariables.map(e=>e.impl()).join(`
`)}get variablesInfo(){if(this.uniforms.length===0)return;let e=e=>[12,10,1,6][[`u32`,`f16`,`f32`,`i32`].indexOf(e)];return this.uniforms.map(t=>[e(t.type),t.length??1])}},Jn=(e,t)=>new qn(e,t)}),Yn,Xn,Zn,Qn,$n,er,tr,nr,rr,ir=x(()=>{z(),V(),Fn(),K(),Yn=(e,t)=>{if(!e||e.length!==1)throw Error(`Transpose requires 1 input.`);if(t.length!==0&&t.length!==e[0].dims.length)throw Error(`perm size ${t.length} does not match input rank ${e[0].dims.length}`)},Xn=(e,t)=>t.length===0?[...Array(e).keys()].reverse():t,Zn=(e,t)=>B.sortBasedOnPerm(e,Xn(e.length,t)),Qn=(e,t,n,r)=>{let i=`fn perm(i: ${r.type.indices}) -> ${n.type.indices} {
    var a: ${n.type.indices};`;for(let n=0;n<t;++n)i+=`a[${e[n]}]=i[${n}];`;return i+=`return a;}`},$n=(e,t)=>{let n=[],r=[];for(let i=0;i<e.length;++i)e[i]!==1&&n.push(e[i]),e[t[i]]!==1&&r.push(t[i]);return{newShape:n,newPerm:r}},er=(e,t)=>{let n=0;for(let r=0;r<e.length;++r)if(t[e[r]]!==1){if(e[r]<n)return!1;n=e[r]}return!0},tr=(e,t)=>{let n=e.dataType,r=e.dims.length,i=Xn(r,t),a=Zn(e.dims,i),o=e.dims,s=a,c=r<2||er(i,e.dims),l;if(c)return l=e=>{let t=W(`input`,n,o,4),r=G(`output`,n,s,4);return`
  ${e.registerUniform(`output_size`,`u32`).declareVariables(t,r)}
  ${e.mainStart()}
    ${e.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.output_size`)}
    output[global_idx] = input[global_idx];
  }`},{name:`TransposeCopy`,shaderCache:{inputDependencies:[`type`]},getRunData:()=>{let t=B.size(a);return{outputs:[{dims:a,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(t/64/4)},programUniforms:[{type:12,data:Math.ceil(t/4)}]}},getShaderSource:l};let{newShape:u,newPerm:d}=$n(e.dims,i),f=B.areEqual(d,[2,3,1]),p=B.areEqual(d,[3,1,2]);return u.length===2||f||p?(o=f?[u[0],u[1]*u[2]]:p?[u[0]*u[1],u[2]]:u,s=[o[1],o[0]],l=e=>{let t=W(`a`,n,o.length),r=G(`output`,n,s.length);return`
  ${e.registerUniform(`output_size`,`u32`).declareVariables(t,r)}
  var<workgroup> tile : array<array<${r.type.value}, 17>, 16>;
  ${e.mainStart([16,16,1])}
    let stride = (uniforms.output_shape[1] - 1) / 16 + 1;
    let workgroup_id_x = workgroup_index % stride;
    let workgroup_id_y = workgroup_index / stride;
    let input_col = workgroup_id_y * 16u + local_id.x;
    let input_row = workgroup_id_x * 16u + local_id.y;
    if (input_row < uniforms.a_shape[0] && input_col < uniforms.a_shape[1]) {
      tile[local_id.y][local_id.x] = ${t.getByIndices(`${t.type.indices}(input_row, input_col)`)};
    }
    workgroupBarrier();

    let output_col = workgroup_id_x * 16u + local_id.x;
    let output_row = workgroup_id_y * 16u + local_id.y;
    if (output_row < uniforms.output_shape[0] && output_col < uniforms.output_shape[1]) {
      ${r.setByIndices(`${r.type.indices}(output_row, output_col)`,`tile[local_id.x][local_id.y]`)}
    }
  }`},{name:`TransposeShared`,shaderCache:{inputDependencies:[`type`]},getRunData:()=>{let t=B.size(a);return{outputs:[{dims:a,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(s[1]/16),y:Math.ceil(s[0]/16)},programUniforms:[{type:12,data:t},...H(o,s)]}},getShaderSource:l}):(l=e=>{let t=W(`a`,n,o.length),a=G(`output`,n,s.length);return`
  ${e.registerUniform(`output_size`,`u32`).declareVariables(t,a)}

  ${Qn(i,r,t,a)}

  ${e.mainStart()}
    ${e.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.output_size`)}

    let indices = ${a.offsetToIndices(`global_idx`)};
    let aIndices = perm(indices);

    ${a.setByOffset(`global_idx`,t.getByIndices(`aIndices`))}
  }`},{name:`Transpose`,shaderCache:{hint:`${t}`,inputDependencies:[`rank`]},getRunData:()=>{let t=B.size(a);return{outputs:[{dims:a,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(t/64)},programUniforms:[{type:12,data:t},...H(o,s)]}},getShaderSource:l})},nr=(e,t)=>{Yn(e.inputs,t.perm),e.compute(tr(e.inputs[0],t.perm))},rr=e=>Pn({perm:e.perm})}),ar,or,sr,cr,lr,ur,dr,fr,pr,mr,hr,gr,_r,vr,yr,br,xr,Sr,Cr,q,wr,Tr=x(()=>{z(),V(),K(),Xr(),ir(),ar={max:`select(bestValue, candidate, candidate > bestValue)`,min:`select(bestValue, candidate, candidate < bestValue)`,mean:`bestValue + candidate`,sum:`bestValue + candidate`,prod:`bestValue * candidate`,sumSquare:`bestValue + candidate * candidate`,logSumExp:`bestValue + exp(candidate)`,l1:`bestValue + abs(candidate)`,l2:`bestValue + candidate * candidate`,logSum:`bestValue + candidate`},or={max:`select(bestValue, candidate, candidate > bestValue)`,min:`select(bestValue, candidate, candidate < bestValue)`,mean:`bestValue + candidate`,sum:`bestValue + candidate`,prod:`bestValue * candidate`,sumSquare:`bestValue + candidate`,logSumExp:`bestValue + candidate`,l1:`bestValue + candidate`,l2:`bestValue + candidate`,logSum:`bestValue + candidate`},sr={max:`_A[offset]`,min:`_A[offset]`,mean:`0`,sum:`0`,prod:`1`,sumSquare:`0`,logSumExp:`0`,l1:`0`,l2:`0`,logSum:`0`},cr={max:`bestValue`,min:`bestValue`,sum:`bestValue`,prod:`bestValue`,sumSquare:`bestValue`,logSumExp:`log(bestValue)`,l1:`bestValue`,l2:`sqrt(bestValue)`,logSum:`log(bestValue)`},lr=(e,t)=>{let n=[];for(let r=t-e;r<t;++r)n.push(r);return n},ur=(e,t)=>{let n=[],r=e.length;for(let i=0;i<r;i++)t.indexOf(i)===-1&&n.push(e[i]);return[n,t.map(t=>e[t])]},dr=(e,t)=>{let n=e.length+t.length,r=[],i=0;for(let a=0;a<n;a++)t.indexOf(a)===-1?r.push(e[i++]):r.push(1);return r},fr=(e,t)=>{for(let n=0;n<e.length;++n)if(e[e.length-n-1]!==t-1-n)return!1;return!0},pr=(e,t)=>{let n=[];if(!fr(e,t)){for(let r=0;r<t;++r)e.indexOf(r)===-1&&n.push(r);e.forEach(e=>n.push(e))}return n},mr=(e,t,n,r,i,a,o)=>{let s=n[0].dims,c=B.size(a),l=B.size(o),u=W(`_A`,n[0].dataType,s),d=G(`output`,i,a),f=64;c===1&&(f=256);let p=`
          var<workgroup> aBestValues : array<f32, ${f}>;
       `;return{name:e,shaderCache:{hint:`${t};${f}`,inputDependencies:[`type`]},getShaderSource:e=>`
        ${e.registerUniform(`reduceSize`,`u32`).declareVariables(u,d)}
        ${p}
        fn DIV_CEIL(a : u32, b : u32) -> u32 {
          return ((a - 1u) / b + 1u);
         }
         ${e.mainStart(f)}

          let outputIndex = global_idx / ${f};
          let offset = outputIndex * uniforms.reduceSize;

          var bestValue = f32(${sr[r]});
          let Length = uniforms.reduceSize;
          for (var k = local_idx; k < Length; k = k + ${f}) {
           let candidate = f32(${u.getByOffset(`offset + k`)});
           bestValue = ${ar[r]};
          }
          aBestValues[local_idx] = bestValue;
          workgroupBarrier();

         var reduceSize = min(Length, ${f}u);
         for (var currentSize = reduceSize / 2u; reduceSize > 1u;
             currentSize = reduceSize / 2u) {
           let interval = DIV_CEIL(reduceSize, 2u);
           if (local_idx < currentSize) {
            let candidate = aBestValues[local_idx + interval];
            bestValue = ${or[r]};
            aBestValues[local_idx] = bestValue;
           }
           reduceSize = interval;
           workgroupBarrier();
         }

         if (local_idx == 0u) {
          ${d.setByOffset(`outputIndex`,`${r===`mean`?`${d.type.storage}(bestValue / f32(uniforms.reduceSize))`:`${d.type.storage}(${cr[r]})`}`)};
         }
        }`,getRunData:()=>({outputs:[{dims:a,dataType:i}],dispatchGroup:{x:c},programUniforms:[{type:12,data:l}]})}},hr=(e,t,n,r)=>{let i=e.inputs.length===1?n:Dr(e.inputs,n),a=i.axes;a.length===0&&!i.noopWithEmptyAxes&&(a=e.inputs[0].dims.map((e,t)=>t));let o=B.normalizeAxes(a,e.inputs[0].dims.length),s=o,c=e.inputs[0],l=pr(s,e.inputs[0].dims.length);l.length>0&&(c=e.compute(tr(e.inputs[0],l),{inputs:[0],outputs:[-1]})[0],s=lr(s.length,c.dims.length));let[u,d]=ur(c.dims,s),f=u;i.keepDims&&(f=dr(u,o)),e.compute(mr(t,i.cacheKey,[c],r,e.inputs[0].dataType,f,d),{inputs:[c]})},gr=(e,t)=>{hr(e,`ReduceMeanShared`,t,`mean`)},_r=(e,t)=>{hr(e,`ReduceL1Shared`,t,`l1`)},vr=(e,t)=>{hr(e,`ReduceL2Shared`,t,`l2`)},yr=(e,t)=>{hr(e,`ReduceLogSumExpShared`,t,`logSumExp`)},br=(e,t)=>{hr(e,`ReduceMaxShared`,t,`max`)},xr=(e,t)=>{hr(e,`ReduceMinShared`,t,`min`)},Sr=(e,t)=>{hr(e,`ReduceProdShared`,t,`prod`)},Cr=(e,t)=>{hr(e,`ReduceSumShared`,t,`sum`)},q=(e,t)=>{hr(e,`ReduceSumSquareShared`,t,`sumSquare`)},wr=(e,t)=>{hr(e,`ReduceLogSumShared`,t,`logSum`)}}),J,Er,Y,Dr,Or,kr,Ar,jr,Mr,Nr,Pr,Fr,Ir,Lr,Rr,zr,Br,Vr,Hr,Ur,Wr,Gr,Kr,qr,Jr,Yr,Xr=x(()=>{z(),V(),Fn(),K(),Tr(),J=e=>{if(!e||e.length===0||e.length>2)throw Error(`Reduce op requires 1 or 2 inputs.`);if(e.length===2&&e[1].dims.length!==1)throw Error(`Invalid axes input dims.`)},Er=e=>[``,``,`var value = ${e.getByIndices(`input_indices`)};`,``],Y=(e,t,n,r,i,a,o=!1,s=!1)=>{let c=[],l=n[0].dims,u=l.length,d=B.normalizeAxes(i,u),f=!s&&d.length===0;l.forEach((e,t)=>{f||d.indexOf(t)>=0?o&&c.push(1):c.push(e)});let p=c.length,m=B.size(c);return{name:e,shaderCache:t,getShaderSource:e=>{let t=[],i=W(`_A`,n[0].dataType,u),s=G(`output`,a,p),c=r(i,s,d),m=c[2];for(let e=0,n=0;e<u;e++)f||d.indexOf(e)>=0?(o&&n++,m=`for(var j${e}: u32 = 0; j${e} < ${l[e]}; j${e}++) {
                  ${c[2].includes(`last_index`)?`let last_index = j${e};`:``}
                  ${i.indicesSet(`input_indices`,e,`j${e}`)}
                  ${m}
                }`):(t.push(`${i.indicesSet(`input_indices`,e,s.indicesGet(`output_indices`,n))};`),n++);return`

        ${e.registerUniform(`output_size`,`u32`).declareVariables(i,s)}

        ${e.mainStart()}
          ${e.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.output_size`)}
          var input_indices: ${i.type.indices};
          let output_indices = ${s.offsetToIndices(`global_idx`)};

          ${t.join(`
`)}
          ${c[0]}       // init ops for reduce max/min
          ${c[1]}
          ${m}
          ${c[3]}
          ${c.length===4?s.setByOffset(`global_idx`,`value`):c.slice(4).join(`
`)}
        }`},getRunData:()=>({outputs:[{dims:c,dataType:a}],dispatchGroup:{x:Math.ceil(m/64)},programUniforms:[{type:12,data:m},...H(l,c)]})}},Dr=(e,t)=>{let n=[];return e[1].dims[0]>0&&e[1].getBigInt64Array().forEach(e=>n.push(Number(e))),Pn({axes:n,keepDims:t.keepDims,noopWithEmptyAxes:t.noopWithEmptyAxes})},Or=(e,t,n,r)=>{let i=e.inputs,a=i.length===1?n:Dr(i,n);e.compute(Y(t,{hint:a.cacheKey,inputDependencies:[`rank`]},[i[0]],a.noopWithEmptyAxes&&a.axes.length===0?Er:r,a.axes,i[0].dataType,a.keepDims,a.noopWithEmptyAxes),{inputs:[0]})},kr=(e,t)=>{J(e.inputs),Or(e,`ReduceLogSum`,t,(e,t)=>[`var value = ${t.type.storage}(0);`,``,`value += ${e.getByIndices(`input_indices`)};`,`value = log(value);`])},Ar=(e,t)=>{J(e.inputs),Or(e,`ReduceL1`,t,(e,t)=>[`var value = ${t.type.storage}(0);`,``,`value += abs(${e.getByIndices(`input_indices`)});`,``])},jr=(e,t)=>{J(e.inputs),Or(e,`ReduceL2`,t,(e,t)=>[`var t = ${t.type.value}(0); var value = ${t.type.value}(0);`,``,`t = ${e.getByIndices(`input_indices`)}; value += (t * t);`,`value = sqrt(value);`])},Mr=(e,t)=>{J(e.inputs),Or(e,`ReduceLogSumExp`,t,(e,t)=>[`var value = ${t.type.storage}(0);`,``,`value += exp(${e.getByIndices(`input_indices`)});`,`value = log(value);`])},Nr=(e,t)=>{J(e.inputs),Or(e,`ReduceMax`,t,(e,t,n)=>{let r=[];for(let t=0;t<e.rank;t++)(n.indexOf(t)>=0||n.length===0)&&r.push(e.indicesSet(`input_indices`,t,0));return[`${r.join(`
`)}`,`var value = ${e.getByIndices(`input_indices`)};`,`value = max(value, ${e.getByIndices(`input_indices`)});`,``]})},Pr=(e,t)=>{J(e.inputs),Or(e,`ReduceMean`,t,(t,n,r)=>{let i=1;for(let n=0;n<t.rank;n++)(r.indexOf(n)>=0||r.length===0)&&(i*=e.inputs[0].dims[n]);return[`var sum = f32(0);`,``,`sum += f32(${t.getByIndices(`input_indices`)});`,`let value = ${n.type.value}(sum / ${i});`]})},Fr=(e,t)=>{J(e.inputs),Or(e,`ReduceMin`,t,(e,t,n)=>{let r=[];for(let t=0;t<e.rank;t++)(n.indexOf(t)>=0||n.length===0)&&r.push(`input_indices[${t}] = 0;`);return[`${r.join(`
`)}`,`var value = ${e.getByIndices(`input_indices`)};`,`value = min(value, ${e.getByIndices(`input_indices`)});`,``]})},Ir=(e,t)=>{J(e.inputs),Or(e,`ReduceProd`,t,(e,t)=>[`var value = ${t.type.storage}(1);`,``,`value *= ${e.getByIndices(`input_indices`)};`,``])},Lr=(e,t)=>{J(e.inputs),Or(e,`ReduceSum`,t,(e,t)=>[`var value = ${t.type.storage}(0);`,``,`value += ${e.getByIndices(`input_indices`)};`,``])},Rr=(e,t)=>{J(e.inputs),Or(e,`ReduceSumSquare`,t,(e,t)=>[`var t = ${t.type.value}(0); var value = ${t.type.value}(0);`,``,`t = ${e.getByIndices(`input_indices`)}; value += t * t;`,``])},zr=(e,t,n)=>{if(t.length===0)return n;let r=1,i=1;for(let n=0;n<t.length;n++)t.indexOf(n)===-1?r*=e[n]:i*=e[n];return i<32&&r>1024},Br=(e,t)=>{zr(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Pr(e,t):gr(e,t)},Vr=(e,t)=>{zr(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Ar(e,t):_r(e,t)},Hr=(e,t)=>{zr(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?jr(e,t):vr(e,t)},Ur=(e,t)=>{zr(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Mr(e,t):yr(e,t)},Wr=(e,t)=>{zr(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Nr(e,t):br(e,t)},Gr=(e,t)=>{zr(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Fr(e,t):xr(e,t)},Kr=(e,t)=>{zr(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Ir(e,t):Sr(e,t)},qr=(e,t)=>{zr(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Lr(e,t):Cr(e,t)},Jr=(e,t)=>{zr(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Rr(e,t):q(e,t)},Yr=(e,t)=>{zr(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?kr(e,t):wr(e,t)}}),Zr,Qr,$r,ei,ti=x(()=>{z(),Fn(),Xr(),Zr=e=>{if(!e||e.length===0||e.length>2)throw Error(`ArgMinMaxOp op requires 1 or 2 inputs.`);if(e[0].dataType!==1)throw Error(`Invalid input type.`)},Qr=(e,t)=>{Zr(e.inputs),e.compute(Y(`ArgMin`,{hint:t.cacheKey,inputDependencies:[`rank`]},[e.inputs[0]],(e,n,r)=>{let i=[];for(let t=0;t<e.rank;t++)(r.indexOf(t)>=0||r.length===0)&&i.push(`input_indices[${t}] = 0;`);return[`${i.join(`
`)}`,`var value = ${e.getByIndices(`input_indices`)};
var best_index : i32 = 0;`,`if (${e.getByIndices(`input_indices`)} ${t.selectLastIndex>0?`<=`:`<`} value) {
         value = ${e.getByIndices(`input_indices`)};
         best_index = i32(last_index);
       }`,``,n.setByOffset(`global_idx`,`best_index`)]},[t.axis],7,t.keepDims),{inputs:[0]})},$r=(e,t)=>{Zr(e.inputs),e.compute(Y(`argMax`,{hint:t.cacheKey,inputDependencies:[`rank`]},[e.inputs[0]],(e,n,r)=>{let i=[];for(let t=0;t<e.rank;t++)(r.indexOf(t)>=0||r.length===0)&&i.push(`input_indices[${t}] = 0;`);return[`${i.join(`
`)}`,`var value = ${e.getByIndices(`input_indices`)};
var best_index : i32 = 0;`,`if (${e.getByIndices(`input_indices`)} ${t.selectLastIndex>0?`>=`:`>`} value) {
         value = ${e.getByIndices(`input_indices`)};
         best_index = i32(last_index);
       }`,``,n.setByOffset(`global_idx`,`best_index`)]},[t.axis],7,t.keepDims),{inputs:[0]})},ei=e=>Pn(e)}),ni,ri,ii,ai,oi,si,ci,li,ui=x(()=>{z(),V(),Sn(),K(),ni=(e,t)=>{let n=e[0],r=e[1],i=e[2],a=e[3],o=e[4],s=e[5];if(o&&s)throw Error(`Attention cannot have both past and attention_bias`);if(n.dims.length!==3)throw Error(`Input "input" must have 3 dimensions`);let c=n.dims[0],l=n.dims[1],u=n.dims[2];if(i.dims.length!==1)throw Error(`Input "bias" is expected to have 1 dimensions`);if(r.dims.length!==2)throw Error(`Input "weights" is expected to have 2 dimensions`);if(r.dims[0]!==u)throw Error(`Input 1 dimension 0 should have same length as dimension 2 of input 0`);if(i.dims[0]!==r.dims[1])throw Error(`Input "bias" dimension 0 should have same length as dimension 1 of input "weights"`);let d=i.dims[0]/3,f=d,p=f;if(t.qkvHiddenSizes.length>0){if(t.qkvHiddenSizes.length!==3)throw Error(`qkv_hidden_sizes attribute should have 3 elements`);for(let e of t.qkvHiddenSizes)if(e%t.numHeads!==0)throw Error(`qkv_hidden_sizes should be divisible by num_heads`);d=t.qkvHiddenSizes[0],f=t.qkvHiddenSizes[1],p=t.qkvHiddenSizes[2]}let m=l;if(d!==f)throw Error(`qkv_hidden_sizes first element should be same as the second`);if(i.dims[0]!==d+f+p)throw Error(`Input "bias" dimension 0 should have same length as sum of Q/K/V hidden sizes`);let h=0;if(o){if(f!==p)throw Error(`Input "past" expect k_hidden_size == v_hidden_size`);if(o.dims.length!==5)throw Error(`Input "past" must have 5 dimensions`);if(o.dims[0]!==2)throw Error(`Input "past" first dimension must be 2`);if(o.dims[1]!==c)throw Error(`Input "past" second dimension must be batch_size`);if(o.dims[2]!==t.numHeads)throw Error(`Input "past" third dimension must be num_heads`);if(o.dims[4]!==f/t.numHeads)throw Error(`Input "past" fifth dimension must be k_hidden_size / num_heads`);t.pastPresentShareBuffer||(h=o.dims[3])}let g=m+h;if(a)throw Error(`Mask not supported`);if(o)throw Error(`past is not supported`);if(s){if(s.dims.length!==4)throw Error(`Input "attention_bias" must have 4 dimensions`);if(s.dims[0]!==c||s.dims[1]!==t.numHeads||s.dims[2]!==l||s.dims[3]!==g)throw Error(`Expect "attention_bias" shape (batch_size, num_heads, sequence_length, total_sequence_length)`)}return{batchSize:c,sequenceLength:l,pastSequenceLength:h,kvSequenceLength:m,totalSequenceLength:g,maxSequenceLength:-1,inputHiddenSize:u,hiddenSize:d,vHiddenSize:p,headSize:Math.floor(d/t.numHeads),vHeadSize:Math.floor(p/t.numHeads),numHeads:t.numHeads,isUnidirectional:!1,pastPresentShareBuffer:!1,maskFilterValue:t.maskFilterValue,maskType:0,scale:t.scale,broadcastResPosBias:!1,passPastInKv:!1,qkvFormat:1}},ri=(e,t,n)=>t&&e?`
      let total_sequence_length_input = u32(${t.getByOffset(`0`)});
      let present_sequence_length = max(total_sequence_length_input, uniforms.past_sequence_length);
      let is_subsequent_prompt: bool = sequence_length > 1 && sequence_length != total_sequence_length_input;
      let is_first_prompt: bool = is_subsequent_prompt == false && sequence_length == total_sequence_length_input;
      total_sequence_length = u32(${e?.getByOffset(`batchIdx`)}) + 1;
      var past_sequence_length: u32 = 0;
      if (is_first_prompt == false) {
        past_sequence_length = total_sequence_length - sequence_length;
      }
       `:`
    ${n?`let past_sequence_length = uniforms.past_sequence_length`:``};
    let present_sequence_length = total_sequence_length;
    `,ii=(e,t,n,r,i,a,o,s)=>{let c=Bn(o?1:a),l=64,u=a/c;u<l&&(l=32);let d=Math.ceil(a/c/l),f=[{type:12,data:t},{type:12,data:n},{type:12,data:r},{type:12,data:i},{type:12,data:u},{type:12,data:d}],p=Rn(e.dataType,c),m=zn(1,c),h=[`type`];return o&&h.push(`type`),s&&h.push(`type`),{name:`AttentionProbsSoftmax`,shaderCache:{hint:`${l};${p};${c}`,inputDependencies:h},getShaderSource:t=>{let n=G(`x`,e.dataType,e.dims,c),r=[n],i=o?W(`seq_lens`,o.dataType,o.dims):void 0;i&&r.push(i);let a=s?W(`total_sequence_length_input`,s.dataType,s.dims):void 0;a&&r.push(a);let u=zn(e.dataType);return`
  var<workgroup> thread_max: array<f32, ${l}>;
  var<workgroup> thread_sum: array<f32, ${l}>;
  ${t.registerUniforms([{name:`batch_size`,type:`u32`},{name:`num_heads`,type:`u32`},{name:`past_sequence_length`,type:`u32`},{name:`sequence_length`,type:`u32`},{name:`total_sequence_length`,type:`u32`},{name:`elements_per_thread`,type:`u32`}]).declareVariables(...r)}
  ${t.mainStart([l,1,1])}
    let batchIdx = workgroup_id.z / uniforms.num_heads;
    let headIdx = workgroup_id.z % uniforms.num_heads;
    let sequence_length = uniforms.sequence_length;
    var total_sequence_length = uniforms.total_sequence_length;
    ${ri(i,a,!1)}
    let local_offset = local_idx * uniforms.elements_per_thread;
    let offset = (global_idx / ${l}) * uniforms.total_sequence_length + local_offset;
    let seq_causal_length = ${o?`u32(past_sequence_length + workgroup_id.y + 1)`:`total_sequence_length`};
    var thread_max_vector = ${m}(-3.4028234663852886e+38f);
    for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
      thread_max_vector = max(${m}(x[offset + i]), thread_max_vector);
    }
    thread_max[local_idx] = ${(()=>{switch(c){case 1:return`thread_max_vector`;case 2:return`max(thread_max_vector.x, thread_max_vector.y)`;case 4:return`max(max(thread_max_vector.x, thread_max_vector.y), max(thread_max_vector.z, thread_max_vector.w))`;default:throw Error(`Unsupported components: ${c}`)}})()};
    workgroupBarrier();

    var max_value =  f32(-3.4028234663852886e+38f);
    for (var i = 0u; i < ${l}; i++) {
      max_value = max(thread_max[i], max_value);
    }

    var sum_vector = ${m}(0);
    for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
      sum_vector += exp(${m}(x[offset + i]) - max_value);
    }
    thread_sum[local_idx] = ${(()=>{switch(c){case 1:return`sum_vector`;case 2:return`sum_vector.x + sum_vector.y`;case 4:return`sum_vector.x + sum_vector.y + sum_vector.z + sum_vector.w`;default:throw Error(`Unsupported components: ${c}`)}})()};
    workgroupBarrier();

    var sum: f32 = 0;
    for (var i = 0u; i < ${l}; i++) {
      sum += thread_sum[i];
    }

    if (sum == 0) {
      for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
        x[offset + i] = ${n.type.value}(${u}(1.0) / ${u}(seq_causal_length));
      }
    } else {
      for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
        var f32input = ${m}(x[offset + i]);
        x[offset + i] = ${n.type.value}(exp(f32input - max_value) / sum);
      }
    }
      ${o?`
        for (var total_seq_id: u32 = seq_causal_length; total_seq_id + local_offset < uniforms.total_sequence_length; total_seq_id++) {
          x[offset + total_seq_id] = ${n.type.value}(${u}(0));
        }`:``};
  }`},getRunData:()=>({outputs:[],dispatchGroup:{x:1,y:i,z:t*n},programUniforms:f})}},ai=(e,t,n,r,i,a,o,s,c)=>{let l=o+a.kvSequenceLength,u=[a.batchSize,a.numHeads,a.sequenceLength,l],d=e>1&&r,f=a.kvNumHeads?a.kvNumHeads:a.numHeads,p=d?[a.batchSize,f,l,a.headSize]:void 0,m=a.nReps?a.nReps:1,h=a.scale===0?1/Math.sqrt(a.headSize):a.scale,g=Bn(a.headSize),_=a.headSize/g,v={x:Math.ceil(l/12),y:Math.ceil(a.sequenceLength/12),z:a.batchSize*a.numHeads},y=[{type:12,data:a.sequenceLength},{type:12,data:_},{type:12,data:l},{type:12,data:a.numHeads},{type:12,data:a.headSize},{type:1,data:h},{type:12,data:o},{type:12,data:a.kvSequenceLength},{type:12,data:m}],b=d&&r&&B.size(r.dims)>0,x=[`type`,`type`];b&&x.push(`type`),i&&x.push(`type`),s&&x.push(`type`),c&&x.push(`type`);let S=[{dims:u,dataType:t.dataType,gpuDataType:0}];return d&&S.push({dims:p,dataType:t.dataType,gpuDataType:0}),{name:`AttentionProbs`,shaderCache:{hint:`${g};${i!==void 0};${r!==void 0};${e}`,inputDependencies:x},getRunData:()=>({outputs:S,dispatchGroup:v,programUniforms:y}),getShaderSource:e=>{let a=W(`q`,t.dataType,t.dims,g),o=[a,W(`key`,n.dataType,n.dims,g)];if(b){let e=W(`past_key`,r.dataType,r.dims,g);o.push(e)}i&&o.push(W(`attention_bias`,i.dataType,i.dims));let l=s?W(`seq_lens`,s.dataType,s.dims):void 0;l&&o.push(l);let f=c?W(`total_sequence_length_input`,c.dataType,c.dims):void 0;f&&o.push(f);let h=G(`output`,t.dataType,u),_=[h];d&&_.push(G(`present_key`,t.dataType,p,g));let v=zn(1,g);return`
  const TILE_SIZE = 12u;

  var<workgroup> tileQ: array<${a.type.storage}, 144>;
  var<workgroup> tileK: array<${a.type.storage}, 144>;
  ${e.registerUniforms([{name:`M`,type:`u32`},{name:`K`,type:`u32`},{name:`N`,type:`u32`},{name:`num_heads`,type:`u32`},{name:`head_size`,type:`u32`},{name:`alpha`,type:`f32`},{name:`past_sequence_length`,type:`u32`},{name:`kv_sequence_length`,type:`u32`},{name:`n_reps`,type:`u32`}]).declareVariables(...o,..._)}
  ${e.mainStart([12,12,1])}
    // x holds the N and y holds the M
    let headIdx = workgroup_id.z % uniforms.num_heads;
    let kvHeadIdx = ${m===1?`headIdx`:`headIdx / uniforms.n_reps`};
    let kv_num_heads = ${m===1?`uniforms.num_heads`:`uniforms.num_heads / uniforms.n_reps`};
    let batchIdx = workgroup_id.z / uniforms.num_heads;
    let m = workgroup_id.y * TILE_SIZE;
    let n = workgroup_id.x * TILE_SIZE;
    let sequence_length = uniforms.M;
    var total_sequence_length = uniforms.N;
    ${ri(l,f,!0)}
    let absKvHeadIdx = batchIdx * kv_num_heads + kvHeadIdx;
    let qOffset = workgroup_id.z * uniforms.M * uniforms.K + m * uniforms.K;
    ${b&&d?`let pastKeyOffset = absKvHeadIdx * uniforms.past_sequence_length * uniforms.K;`:``};
    let kOffset = absKvHeadIdx * uniforms.kv_sequence_length * uniforms.K;
    ${d?`let presentKeyOffset = absKvHeadIdx * uniforms.N * uniforms.K;`:``}
    var value = ${v}(0);
    for (var w: u32 = 0u; w < uniforms.K; w += TILE_SIZE) {
      if (global_id.y < uniforms.M && w + local_id.x < uniforms.K) {
        tileQ[TILE_SIZE * local_id.y + local_id.x] = q[qOffset + local_id.y * uniforms.K + w + local_id.x];
      }
      if (n + local_id.y < uniforms.N && w + local_id.x < uniforms.K) {
        var idx = TILE_SIZE * local_id.y + local_id.x;
      ${b&&d?`
              if (n + local_id.y < past_sequence_length) {
                tileK[idx] = past_key[pastKeyOffset + (n + local_id.y) * uniforms.K + w + local_id.x];
              } else if (n + local_id.y - past_sequence_length < uniforms.kv_sequence_length) {
                tileK[idx] = key[kOffset + (n + local_id.y - past_sequence_length) * uniforms.K + w + local_id.x];
              }`:`
          if (n + local_id.y < uniforms.kv_sequence_length) {
            tileK[idx] = key[kOffset + (n + local_id.y) * uniforms.K + w + local_id.x];
          }`}
      ${d?`if (n + local_id.y < present_sequence_length) {
        present_key[presentKeyOffset + (n + local_id.y) * uniforms.K + w + local_id.x] = tileK[idx];
      }`:``}
      }
      workgroupBarrier();

      for (var k: u32 = 0u; k < TILE_SIZE && w+k < uniforms.K; k++) {
          value += ${v}(tileQ[TILE_SIZE * local_id.y + k] * tileK[TILE_SIZE * local_id.x + k]);
      }

      workgroupBarrier();
    }

    if (global_id.y < uniforms.M && global_id.x < total_sequence_length) {
      let headOffset = workgroup_id.z * uniforms.M * uniforms.N;
      let outputIdx = headOffset + global_id.y * uniforms.N + global_id.x;
      var sum: f32 = ${(()=>{switch(g){case 1:return`value`;case 2:return`value.x + value.y`;case 4:return`value.x + value.y + value.z + value.w`;default:throw Error(`Unsupported components: ${g}`)}})()};
        output[outputIdx] = ${h.type.value} (sum * uniforms.alpha) + ${i?`attention_bias[outputIdx]`:`0.0`};
    }
  }`}}},oi=(e,t,n,r,i,a,o=void 0,s=void 0)=>{let c=a+i.kvSequenceLength,l=i.nReps?i.nReps:1,u=i.vHiddenSize*l,d=e>1&&r,f=i.kvNumHeads?i.kvNumHeads:i.numHeads,p=d?[i.batchSize,f,c,i.headSize]:void 0,m=[i.batchSize,i.sequenceLength,u],h={x:Math.ceil(i.vHeadSize/12),y:Math.ceil(i.sequenceLength/12),z:i.batchSize*i.numHeads},g=[{type:12,data:i.sequenceLength},{type:12,data:c},{type:12,data:i.vHeadSize},{type:12,data:i.numHeads},{type:12,data:i.headSize},{type:12,data:u},{type:12,data:a},{type:12,data:i.kvSequenceLength},{type:12,data:l}],_=d&&r&&B.size(r.dims)>0,v=[`type`,`type`];_&&v.push(`type`),o&&v.push(`type`),s&&v.push(`type`);let y=[{dims:m,dataType:t.dataType,gpuDataType:0}];return d&&y.push({dims:p,dataType:t.dataType,gpuDataType:0}),{name:`AttentionScore`,shaderCache:{hint:`${r!==void 0};${e}`,inputDependencies:v},getRunData:()=>({outputs:y,dispatchGroup:h,programUniforms:g}),getShaderSource:e=>{let i=W(`probs`,t.dataType,t.dims),a=[i,W(`v`,n.dataType,n.dims)];_&&a.push(W(`past_value`,r.dataType,r.dims));let c=o?W(`seq_lens`,o.dataType,o.dims):void 0;o&&a.push(c);let u=s?W(`total_sequence_length_input`,s.dataType,s.dims):void 0;s&&a.push(u);let f=[G(`output`,t.dataType,m)];return d&&f.push(G(`present_value`,t.dataType,p)),`
  const TILE_SIZE = 12u;
  var<workgroup> tileQ: array<${i.type.value}, 144>;
  var<workgroup> tileV: array<${i.type.value}, 144>;
  ${e.registerUniforms([{name:`M`,type:`u32`},{name:`K`,type:`u32`},{name:`N`,type:`u32`},{name:`num_heads`,type:`u32`},{name:`head_size`,type:`u32`},{name:`v_hidden_size`,type:`u32`},{name:`past_sequence_length`,type:`u32`},{name:`kv_sequence_length`,type:`u32`},{name:`n_reps`,type:`u32`}]).declareVariables(...a,...f)}
  ${e.mainStart([12,12,1])}
   let headIdx = workgroup_id.z % uniforms.num_heads;
   let batchIdx = workgroup_id.z / uniforms.num_heads;
   let kvHeadIdx = ${l===1?`headIdx`:`headIdx / uniforms.n_reps`};
   let kv_num_heads = ${l===1?`uniforms.num_heads`:`uniforms.num_heads / uniforms.n_reps`};
   let m = global_id.y;
   let n = global_id.x;
   let sequence_length = uniforms.M;
   var total_sequence_length = uniforms.K;
   ${ri(c,u,!0)}
   let offsetA = workgroup_id.z * uniforms.M * uniforms.K + m * uniforms.K;
   let absKvHeadIdx = batchIdx * kv_num_heads + kvHeadIdx; // kvHeadIdx is relative to the batch
   ${_&&d?`let pastValueOffset = absKvHeadIdx * uniforms.N * uniforms.past_sequence_length + n;`:``};
   let vOffset = absKvHeadIdx * uniforms.N * uniforms.kv_sequence_length + n;
   ${d?`let presentValueOffset = absKvHeadIdx * uniforms.N * uniforms.K + n;`:``}
   var value = ${i.type.storage}(0);
   for (var w: u32 = 0u; w < uniforms.K; w += TILE_SIZE) {
      if (m < uniforms.M && w + local_id.x < uniforms.K) {
        tileQ[TILE_SIZE * local_id.y + local_id.x] = probs[offsetA + w + local_id.x];
      }
      if (n < uniforms.N && w + local_id.y < uniforms.K) {
        var idx = TILE_SIZE * local_id.y + local_id.x;
        ${_&&d?`
        if (w + local_id.y < past_sequence_length) {
          tileV[idx] = past_value[pastValueOffset + (w + local_id.y) * uniforms.N];
        } else if (w + local_id.y - past_sequence_length < uniforms.kv_sequence_length) {
          tileV[idx] = v[vOffset + (w + local_id.y - past_sequence_length) * uniforms.N];
        }
      `:`
            if (w + local_id.y < uniforms.kv_sequence_length) {
              tileV[idx] = v[vOffset + (w + local_id.y) * uniforms.N];
            }`}
        ${d?`
            if (w + local_id.y < present_sequence_length) {
          present_value[presentValueOffset + (w + local_id.y) * uniforms.N] = tileV[idx];
        }`:``}
      }
     workgroupBarrier();
     for (var k: u32 = 0u; k < TILE_SIZE && w+k < total_sequence_length; k++) {
       value += tileQ[TILE_SIZE * local_id.y + k] * tileV[TILE_SIZE * k + local_id.x];
     }
     workgroupBarrier();
   }

   // we need to transpose output from BNSH_v to BSND_v
   if (m < uniforms.M && n < uniforms.N) {
     let outputIdx = batchIdx * uniforms.M * uniforms.v_hidden_size + m * uniforms.v_hidden_size
       + headIdx * uniforms.N + n;
     output[outputIdx] = value;
   }
  }`}}},si=(e,t,n,r,i,a,o,s,c,l,u=void 0,d=void 0)=>{let f=Math.min(e.outputCount,1+ +!!o+ +!!s),p=f>1?o:void 0,m=f>1?s:void 0,h=f>1?l.pastSequenceLength:0,g=h+l.kvSequenceLength,_=c&&B.size(c.dims)>0?c:void 0,v=[t,n];p&&B.size(p.dims)>0&&v.push(p),_&&v.push(_),u&&v.push(u),d&&v.push(d);let y=e.compute(ai(f,t,n,p,_,l,h,u,d),{inputs:v,outputs:f>1?[-1,1]:[-1]})[0];e.compute(ii(y,l.batchSize,l.numHeads,h,l.sequenceLength,g,u,d),{inputs:u&&d?[y,u,d]:[y],outputs:[]});let b=[y,r];m&&B.size(m.dims)>0&&b.push(m),u&&b.push(u),d&&b.push(d),e.compute(oi(f,y,r,m,l,h,u,d),{inputs:b,outputs:f>1?[0,2]:[0]})},ci=(e,t)=>{let n=[t.batchSize,t.numHeads,t.sequenceLength,t.headSize],r=t.sequenceLength,i=t.inputHiddenSize,a=t.headSize,o={x:Math.ceil(t.headSize/12),y:Math.ceil(t.sequenceLength/12),z:t.batchSize*t.numHeads},s=[e.inputs[0],e.inputs[1],e.inputs[2]],c=[{type:12,data:r},{type:12,data:i},{type:12,data:a},{type:12,data:t.numHeads},{type:12,data:t.headSize},{type:12,data:t.hiddenSize},{type:12,data:t.hiddenSize+t.hiddenSize+t.vHiddenSize}];return e.compute({name:`AttentionPrepare`,shaderCache:{inputDependencies:[`type`,`type`,`type`]},getRunData:()=>({outputs:[{dims:n,dataType:e.inputs[0].dataType,gpuDataType:0},{dims:n,dataType:e.inputs[0].dataType,gpuDataType:0},{dims:n,dataType:e.inputs[0].dataType,gpuDataType:0}],dispatchGroup:o,programUniforms:c}),getShaderSource:e=>{let t=G(`output_q`,s[0].dataType,n),r=G(`output_k`,s[0].dataType,n),i=G(`output_v`,s[0].dataType,n),a=W(`input`,s[0].dataType,s[0].dims),o=W(`weight`,s[1].dataType,s[1].dims),c=W(`bias`,s[2].dataType,s[2].dims),l=a.type.storage;return`
  const TILE_SIZE = 12u;
  var<workgroup> tileInput: array<${l}, 144>;
  var<workgroup> tileWeightQ: array<${l}, 144>;
  var<workgroup> tileWeightK: array<${l}, 144>;
  var<workgroup> tileWeightV: array<${l}, 144>;
  ${e.registerUniforms([{name:`M`,type:`u32`},{name:`K`,type:`u32`},{name:`N`,type:`u32`},{name:`num_heads`,type:`u32`},{name:`head_size`,type:`u32`},{name:`hidden_size`,type:`u32`},{name:`ldb`,type:`u32`}]).declareVariables(a,o,c,t,r,i)}
  ${e.mainStart([12,12,1])}
    let batchIndex = workgroup_id.z / uniforms.num_heads;
    let headNumber = workgroup_id.z % uniforms.num_heads;
    let m = global_id.y;
    let n = global_id.x;

    let inputOffset = batchIndex * (uniforms.M * uniforms.K) + m * uniforms.K;
    let biasOffsetQ = headNumber * uniforms.head_size;
    let biasOffsetK = uniforms.hidden_size + biasOffsetQ;
    let biasOffsetV = uniforms.hidden_size + biasOffsetK;

    var valueQ = ${l}(0);
    var valueK = ${l}(0);
    var valueV = ${l}(0);
    for (var w: u32 = 0u; w < uniforms.K; w += TILE_SIZE) {
      if (m < uniforms.M && w + local_id.x < uniforms.K) {
        tileInput[TILE_SIZE * local_id.y + local_id.x] = input[inputOffset + w + local_id.x];
      }
      if (n < uniforms.N && w + local_id.y < uniforms.K) {
        let offset = n + (w + local_id.y) * uniforms.ldb;
        tileWeightQ[TILE_SIZE * local_id.y + local_id.x] = weight[biasOffsetQ + offset];
        tileWeightK[TILE_SIZE * local_id.y + local_id.x] = weight[biasOffsetK + offset];
        tileWeightV[TILE_SIZE * local_id.y + local_id.x] = weight[biasOffsetV + offset];
      }
      workgroupBarrier();
      for (var k: u32 = 0u; k<TILE_SIZE && w+k < uniforms.K; k++) {
        let inputTileOffset = TILE_SIZE * local_id.y + k;
        let weightTileOffset = TILE_SIZE * k + local_id.x;
        valueQ += tileInput[inputTileOffset] * tileWeightQ[weightTileOffset];
        valueK += tileInput[inputTileOffset] * tileWeightK[weightTileOffset];
        valueV += tileInput[inputTileOffset] * tileWeightV[weightTileOffset];
      }

      workgroupBarrier();
    }

    let headOffset = (m * uniforms.N + n) % uniforms.head_size;
    valueQ += bias[headOffset + biasOffsetQ];
    valueK += bias[headOffset + biasOffsetK];
    valueV += bias[headOffset + biasOffsetV];

    let offset = workgroup_id.z * uniforms.M * uniforms.N;
    if (m < uniforms.M && n < uniforms.N) {
      let outputIdx = offset + m * uniforms.N + n;
      output_q[outputIdx] = valueQ;
      output_k[outputIdx] = valueK;
      output_v[outputIdx] = valueV;
    }
  }`}},{inputs:s,outputs:[-1,-1,-1]})},li=(e,t)=>{let n=ni(e.inputs,t),[r,i,a]=ci(e,n);return si(e,r,i,a,e.inputs[4],void 0,void 0,void 0,e.inputs[5],n)}}),di,fi,pi,mi,hi=x(()=>{Re(),z(),V(),Fn(),K(),di=(e,t)=>{if(!e||e.length!==5)throw Error(`BatchNormalization requires 5 inputs`);let n=(e,t,n)=>{let r=t.length;if(r!==e.length)throw Error(`${n}: num dimensions != ${r}`);t.forEach((t,r)=>{if(t!==e[r])throw Error(`${n}: dim[${r}] do not match`)})};if(e[0].dims.length>1){let r=t.format===`NHWC`?t.spatial?e[0].dims.slice(-1):e[0].dims.slice(-1).concat(e[0].dims.slice(1,e[0].dims.length-1)):e[0].dims.slice(1,t.spatial?2:void 0);n(e[1].dims,r,`Invalid input scale`),n(e[2].dims,r,`Invalid input B`),n(e[3].dims,r,`Invalid input mean`),n(e[4].dims,r,`Invalid input var`)}else n(e[1].dims,[1],`Invalid input scale`),n(e[2].dims,[1],`Invalid input B`),n(e[3].dims,[1],`Invalid input mean`),n(e[4].dims,[1],`Invalid input var`)},fi=(e,t)=>{let{epsilon:n,spatial:r,format:i}=t,a=e[0].dims,o=r?Bn(a[a.length-1]):1,s=i===`NHWC`&&a.length>1?o:1,c=B.size(a)/o,l=r,u=l?a.length:a,d=W(`x`,e[0].dataType,e[0].dims,o),f=W(`scale`,e[1].dataType,e[1].dims,s),p=W(`bias`,e[2].dataType,e[2].dims,s),m=W(`inputMean`,e[3].dataType,e[3].dims,s),h=W(`inputVar`,e[4].dataType,e[4].dims,s),g=G(`y`,e[0].dataType,u,o),_=()=>{let e=``;if(r)e=`let cOffset = ${a.length===1?`0u`:i===`NHWC`?`outputIndices[${a.length-1}] / ${o}`:`outputIndices[1]`};`;else if(i===`NCHW`)e=`
            ${g.indicesSet(`outputIndices`,`0`,`0`)}
            let cOffset = ${g.indicesToOffset(`outputIndices`)};`;else{e=`var cIndices = ${f.type.indices}(0);
                       cIndices[0] = outputIndices[${a.length-1}];`;for(let t=1;t<f.rank;t++)e+=`cIndices[${t}] = outputIndices[${t}];`;e+=`let cOffset = ${f.indicesToOffset(`cIndices`)};`}return e};return{name:`BatchNormalization`,shaderCache:{hint:`${t.epsilon}_${t.format}_${r}_${o}`,inputDependencies:l?[`rank`,`type`,`type`,`type`,`type`]:void 0},getShaderSource:e=>`
  const epsilon = ${n};
  ${e.registerUniform(`outputSize`,`u32`).declareVariables(d,f,p,m,h,g)}
  ${e.mainStart()}
  ${e.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.outputSize`)}
    var outputIndices = ${g.offsetToIndices(`global_idx * ${o}`)};
    ${_()}
    let scale = ${f.getByOffset(`cOffset`)};
    let bias = ${p.getByOffset(`cOffset`)};
    let inputMean = ${m.getByOffset(`cOffset`)};
    let inputVar = ${h.getByOffset(`cOffset`)};
    let x = ${d.getByOffset(`global_idx`)};
    let value = (x - inputMean) * inverseSqrt(inputVar + epsilon) * scale + bias;
    ${g.setByOffset(`global_idx`,`value`)}
  }`,getRunData:()=>({outputs:[{dims:e[0].dims,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(c/64)},programUniforms:l?[{type:12,data:c},...H(a)]:[{type:12,data:c}]})}},pi=e=>Pn(e),mi=(e,t)=>{let{inputs:n,outputCount:r}=e,i=pi({...t,outputCount:r});if(P.webgpu.validateInputContent&&di(n,i),t.trainingMode)throw Error(`BatchNormalization trainingMode is not supported yet.`);e.compute(fi(n,i))}}),gi,_i,vi,yi=x(()=>{V(),K(),gi=e=>{if(e[0].dims.length!==3)throw Error(`input should have 3 dimensions`);if(![320,640,1280].includes(e[0].dims[2]))throw Error(`number of channels should be 320, 640 or 1280`);if(e[1].dims.length!==1)throw Error(`bias is expected to have 1 dimensions`);if(e[0].dims[2]!==e[1].dims[0])throw Error(`last dimension of input and bias are not the same`)},_i=e=>{let t=e[0].dims,n=e[0].dims[2],r=B.size(t)/4,i=e[0].dataType,a=W(`input`,i,t,4),o=W(`bias`,i,[n],4),s=W(`residual`,i,t,4),c=G(`output`,i,t,4);return{name:`BiasAdd`,getRunData:()=>({outputs:[{dims:t,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(r/64)}}),getShaderSource:e=>`
  const channels = ${n}u / 4;
  ${e.declareVariables(a,o,s,c)}

  ${e.mainStart()}
    ${e.guardAgainstOutOfBoundsWorkgroupSizes(r)}
    let value = ${a.getByOffset(`global_idx`)}
      + ${o.getByOffset(`global_idx % channels`)} + ${s.getByOffset(`global_idx`)};
    ${c.setByOffset(`global_idx`,`value`)}
  }`}},vi=e=>{gi(e.inputs),e.compute(_i(e.inputs))}}),bi,xi,Si,Ci,wi,Ti,Ei,Di,Oi,ki,Ai,ji,Mi,Ni,Pi,Fi,Ii,Li,Ri,zi,Bi,Vi,Hi,Ui,Wi,Gi,Ki,qi,Ji,Yi,Xi,Zi,Qi,$i,ea,ta,na,ra,ia,aa,oa,sa,ca,la,ua,da,fa=x(()=>{z(),V(),Fn(),K(),bi=(e,t,n,r,i,a,o)=>{let s=Math.ceil(t/4),c=``;c=typeof i==`string`?`${i}(a)`:i(`a`);let l=W(`inputData`,n,[s],4),u=G(`outputData`,r,[s],4),d=[{name:`vec_size`,type:`u32`}];return o&&d.push(...o),`
      ${e.registerUniforms(d).declareVariables(l,u)}

  ${a??``}

  ${e.mainStart()}
    ${e.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.vec_size`)}

    let a = ${l.getByOffset(`global_idx`)};
    ${u.setByOffset(`global_idx`,c)}
  }`},xi=(e,t,n,r,i,a=e.dataType,o,s)=>{let c=[{type:12,data:Math.ceil(B.size(e.dims)/4)}];return o&&c.push(...o),{name:t,shaderCache:{hint:i,inputDependencies:[`type`]},getShaderSource:t=>bi(t,B.size(e.dims),e.dataType,a,n,r,s),getRunData:t=>({outputs:[{dims:e.dims,dataType:a}],dispatchGroup:{x:Math.ceil(B.size(t[0].dims)/64/4)},programUniforms:c})}},Si=e=>{e.compute(xi(e.inputs[0],`Abs`,`abs`))},Ci=e=>{e.compute(xi(e.inputs[0],`Acos`,`acos`))},wi=e=>{e.compute(xi(e.inputs[0],`Acosh`,`acosh`))},Ti=e=>{e.compute(xi(e.inputs[0],`Asin`,`asin`))},Ei=e=>{e.compute(xi(e.inputs[0],`Asinh`,`asinh`))},Di=e=>{e.compute(xi(e.inputs[0],`Atan`,`atan`))},Oi=e=>{e.compute(xi(e.inputs[0],`Atanh`,`atanh`))},ki=e=>Pn(e),Ai=(e,t)=>{let n;switch(t.to){case 10:n=`vec4<f16>`;break;case 1:n=`vec4<f32>`;break;case 12:n=`vec4<u32>`;break;case 6:n=`vec4<i32>`;break;case 9:n=`vec4<bool>`;break;default:throw RangeError(`not supported type (specified in attribute 'to' from 'Cast' operator): ${t.to}`)}e.compute(xi(e.inputs[0],`Cast`,n,void 0,t.cacheKey,t.to))},ji=e=>{let t,n,r=e.length>=2&&e[1].data!==0,i=e.length>=3&&e[2].data!==0;switch(e[0].dataType){case 1:t=r?e[1].getFloat32Array()[0]:-34028234663852886e22,n=i?e[2].getFloat32Array()[0]:34028234663852886e22;break;case 10:t=r?e[1].getUint16Array()[0]:64511,n=i?e[2].getUint16Array()[0]:31743;break;default:throw Error(`Unsupport data type`)}return Pn({min:t,max:n})},Mi=(e,t)=>{let n=t||ji(e.inputs),r=zn(e.inputs[0].dataType);e.compute(xi(e.inputs[0],`Clip`,e=>`clamp(${e}, vec4<${r}>(uniforms.min), vec4<${r}>(uniforms.max))`,void 0,n.cacheKey,void 0,[{type:e.inputs[0].dataType,data:n.min},{type:e.inputs[0].dataType,data:n.max}],[{name:`min`,type:r},{name:`max`,type:r}]),{inputs:[0]})},Ni=e=>{e.compute(xi(e.inputs[0],`Ceil`,`ceil`))},Pi=e=>{e.compute(xi(e.inputs[0],`Cos`,`cos`))},Fi=e=>{e.compute(xi(e.inputs[0],`Cosh`,`cosh`))},Ii=e=>Pn(e),Li=(e,t)=>{let n=zn(e.inputs[0].dataType);e.compute(xi(e.inputs[0],`Elu`,e=>`elu_vf32(${e})`,`
  const elu_alpha_ = ${n}(${t.alpha});

  fn elu_f32(a: ${n}) -> ${n} {
  return select((exp(a) - 1.0) * elu_alpha_, a, a >= 0.0);
  }

  fn elu_vf32(v: vec4<${n}>) -> vec4<${n}> {
  return vec4(elu_f32(v.x), elu_f32(v.y), elu_f32(v.z), elu_f32(v.w));
  }`,t.cacheKey))},Ri=(e=`f32`)=>`
const r0: ${e} = 0.3275911;
const r1: ${e} = 0.254829592;
const r2: ${e} = -0.284496736;
const r3: ${e} = 1.421413741;
const r4: ${e} = -1.453152027;
const r5: ${e} = 1.061405429;

fn erf_vf32(v: vec4<${e}>) -> vec4<${e}> {
  let absv = abs(v);
  let x = 1.0 / (1.0 + r0 * absv);
  return sign(v) * (1.0 - ((((r5 * x + r4) * x + r3) * x + r2) * x + r1) * x * exp(-absv * absv));
}`,zi=e=>{let t=zn(e.inputs[0].dataType);e.compute(xi(e.inputs[0],`Erf`,e=>`erf_vf32(${e})`,Ri(t)))},Bi=e=>{e.compute(xi(e.inputs[0],`Exp`,`exp`))},Vi=e=>{e.compute(xi(e.inputs[0],`Floor`,`floor`))},Hi=e=>{let t=zn(e.inputs[0].dataType);e.compute(xi(e.inputs[0],`Gelu`,e=>`0.5 * ${e} * (1.0 + erf_vf32(${e} * 0.7071067811865475))`,Ri(t)))},Ui=(e,t)=>{let n=zn(e.inputs[0].dataType);e.compute(xi(e.inputs[0],`LeakyRelu`,e=>`select(leaky_relu_alpha_ * ${e}, ${e}, ${e} >= vec4<${n}>(0.0))`,`const leaky_relu_alpha_ = ${n}(${t.alpha});`,t.cacheKey))},Wi=e=>{e.compute(xi(e.inputs[0],`Not`,e=>`!${e}`))},Gi=e=>{e.compute(xi(e.inputs[0],`Neg`,e=>`-${e}`))},Ki=e=>{e.compute(xi(e.inputs[0],`Reciprocal`,e=>`1.0/${e}`))},qi=e=>{let t=zn(e.inputs[0].dataType);e.compute(xi(e.inputs[0],`Relu`,e=>`select(vec4<${t}>(0.0), ${e}, ${e} > vec4<${t}>(0.0))`))},Ji=e=>{e.compute(xi(e.inputs[0],`Sigmoid`,e=>`(1.0 / (1.0 + exp(-${e})))`))},Yi=e=>Pn(e),Xi=(e,t)=>{let n=zn(e.inputs[0].dataType);e.compute(xi(e.inputs[0],`HardSigmoid`,e=>`max(vec4<${n}>(0.0), min(vec4<${n}>(1.0), ${t.alpha} * ${e} + vec4<${n}>(${t.beta})))`,void 0,t.cacheKey))},Zi=e=>{let t=zn(e.inputs[0].dataType);e.compute(xi(e.inputs[0],`HardSwish`,e=>`${e} * max(vec4<${t}>(0.0), min(vec4<${t}>(1.0), vec4<${t}>(${t}(1.0 / 6.0)) * ${e} + vec4<${t}>(0.5)))`))},Qi=e=>{e.compute(xi(e.inputs[0],`Sin`,`sin`))},$i=e=>{e.compute(xi(e.inputs[0],`Sinh`,`sinh`))},ea=e=>{e.compute(xi(e.inputs[0],`Sqrt`,`sqrt`))},ta=e=>{e.compute(xi(e.inputs[0],`Tan`,`tan`))},na=e=>`sign(${e}) * (1 - exp(-2 * abs(${e}))) / (1 + exp(-2 * abs(${e})))`,ra=e=>{e.compute(xi(e.inputs[0],`Tanh`,na))},ia=(e=`f32`)=>`
const fast_gelu_a: ${e} = 0.5;
const fast_gelu_b: ${e} = 0.7978845608028654;
const fast_gelu_c: ${e} = 0.035677408136300125;

fn tanh_v(v: vec4<${e}>) -> vec4<${e}> {
  return ${na(`v`)};
}
`,aa=e=>`(fast_gelu_a + fast_gelu_a * tanh_v(${e} * (fast_gelu_c * ${e} * ${e} + fast_gelu_b))) * ${e}`,oa=e=>{let t=zn(e.inputs[0].dataType);e.compute(xi(e.inputs[0],`FastGelu`,aa,ia(t),void 0,e.inputs[0].dataType))},sa=(e,t)=>{let n=zn(e.inputs[0].dataType);return e.compute(xi(e.inputs[0],`ThresholdedRelu`,e=>`select(vec4<${n}>(0.0), ${e}, ${e} > thresholded_relu_alpha_)`,`const thresholded_relu_alpha_ = vec4<${n}>(${t.alpha});`,t.cacheKey)),0},ca=e=>{e.compute(xi(e.inputs[0],`Log`,`log`))},la=(e,t)=>`
const alpha = vec4<${e}>(${t});
const one = ${e}(1.0);
const zero = ${e}(0.0);

fn quick_gelu_impl(x: vec4<${e}>) -> vec4<${e}> {
  let v = x *alpha;
  var x1 : vec4<${e}>;
  for (var i = 0; i < 4; i = i + 1) {
    if (v[i] >= zero) {
      x1[i] = one / (one + exp(-v[i]));
    } else {
      x1[i] = one - one / (one + exp(v[i]));
    }
  }
  return x * x1;
}
`,ua=e=>`quick_gelu_impl(${e})`,da=(e,t)=>{let n=zn(e.inputs[0].dataType);e.compute(xi(e.inputs[0],`QuickGelu`,ua,la(n,t.alpha),t.cacheKey,e.inputs[0].dataType))}}),pa,ma,ha,ga=x(()=>{V(),K(),fa(),pa=e=>{if(e[0].dims.length!==3)throw Error(`input should have 3 dimensions`);if(![2560,5120,10240].includes(e[0].dims[2]))throw Error(`hidden state should be 2560, 5120 or 10240`);if(e[1].dims.length!==1)throw Error(`bias is expected to have 1 dimensions`);if(e[0].dims[2]!==e[1].dims[0])throw Error(`last dimension of input and bias are not the same`)},ma=e=>{let t=e[0].dims.slice();t[2]/=2;let n=W(`input`,e[0].dataType,e[0].dims,4),r=W(`bias`,e[0].dataType,[e[0].dims[2]],4),i=G(`output`,e[0].dataType,t,4),a=B.size(t)/4,o=Rn(e[0].dataType);return{name:`BiasSplitGelu`,getRunData:()=>({outputs:[{dims:t,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(a/64)}}),getShaderSource:t=>`
  const M_SQRT2 = sqrt(2.0);
  const halfChannels = ${e[0].dims[2]/4/2}u;

  ${t.declareVariables(n,r,i)}

  ${Ri(o)}

  ${t.mainStart()}
    ${t.guardAgainstOutOfBoundsWorkgroupSizes(a)}
    let biasIdx = global_idx % halfChannels;
    let batchIndex = global_idx / halfChannels;
    let inputOffset = biasIdx + batchIndex * halfChannels * 2;
    let valueLeft = input[inputOffset] + bias[biasIdx];
    let valueRight = input[inputOffset + halfChannels] + bias[biasIdx + halfChannels];
    let geluRight = valueRight * 0.5 * (erf_vf32(valueRight / M_SQRT2) + 1);

    ${i.setByOffset(`global_idx`,`valueLeft * geluRight`)}
  }`}},ha=e=>{pa(e.inputs),e.compute(ma(e.inputs))}}),_a,va,ya,ba,xa,Sa,Ca,wa,Ta,Ea,Da,Oa,ka,Aa=x(()=>{z(),V(),K(),_a=(e,t,n,r,i,a,o,s,c,l,u,d)=>{let f,p;typeof s==`string`?f=p=(e,t)=>`${s}((${e}),(${t}))`:typeof s==`function`?f=p=s:(f=s.scalar,p=s.vector);let m=G(`outputData`,u,r.length,4),h=W(`aData`,c,t.length,4),g=W(`bData`,l,n.length,4),_;if(i)if(a){let e=B.size(t)===1,r=B.size(n)===1,i=t.length>0&&t[t.length-1]%4==0,a=n.length>0&&n[n.length-1]%4==0;_=e||r?m.setByOffset(`global_idx`,p(e?`${h.type.value}(${h.getByOffset(`0`)}.x)`:h.getByOffset(`global_idx`),r?`${g.type.value}(${g.getByOffset(`0`)}.x)`:g.getByOffset(`global_idx`))):`
            let outputIndices = ${m.offsetToIndices(`global_idx * 4u`)};
            let offsetA = ${h.broadcastedIndicesToOffset(`outputIndices`,m)};
            let offsetB = ${g.broadcastedIndicesToOffset(`outputIndices`,m)};
            ${m.setByOffset(`global_idx`,p(o||i?h.getByOffset(`offsetA / 4u`):`${h.type.value}(${h.getByOffset(`offsetA / 4u`)}[offsetA % 4u])`,o||a?g.getByOffset(`offsetB / 4u`):`${g.type.value}(${g.getByOffset(`offsetB / 4u`)}[offsetB % 4u])`))}
          `}else _=m.setByOffset(`global_idx`,p(h.getByOffset(`global_idx`),g.getByOffset(`global_idx`)));else{if(!a)throw Error(`no necessary to use scalar implementation for element-wise binary op implementation.`);let e=(e,t,n=``)=>{let r=`aData[indexA${t}][componentA${t}]`,i=`bData[indexB${t}][componentB${t}]`;return`
            let outputIndices${t} = ${m.offsetToIndices(`global_idx * 4u + ${t}u`)};
            let offsetA${t} = ${h.broadcastedIndicesToOffset(`outputIndices${t}`,m)};
            let offsetB${t} = ${g.broadcastedIndicesToOffset(`outputIndices${t}`,m)};
            let indexA${t} = offsetA${t} / 4u;
            let indexB${t} = offsetB${t} / 4u;
            let componentA${t} = offsetA${t} % 4u;
            let componentB${t} = offsetB${t} % 4u;
            ${e}[${t}] = ${n}(${f(r,i)});
          `};_=u===9?`
            var data = vec4<u32>(0);
            ${e(`data`,0,`u32`)}
            ${e(`data`,1,`u32`)}
            ${e(`data`,2,`u32`)}
            ${e(`data`,3,`u32`)}
            outputData[global_idx] = dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(data));`:`
            ${e(`outputData[global_idx]`,0)}
            ${e(`outputData[global_idx]`,1)}
            ${e(`outputData[global_idx]`,2)}
            ${e(`outputData[global_idx]`,3)}
          `}return`
        ${e.registerUniform(`vec_size`,`u32`).declareVariables(h,g,m)}

        ${d??``}

        ${e.mainStart()}
        ${e.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.vec_size`)}
        ${_}
      }`},va=(e,t,n,r,i,a,o=n.dataType)=>{let s=n.dims.map(Number),c=r.dims.map(Number),l=!B.areEqual(s,c),u=s,d=B.size(s),f=!1,p=!1,m=[l];if(l){let e=Qt.calcShape(s,c,!1);if(!e)throw Error(`Can't perform binary op on the given tensors`);u=e.slice(),d=B.size(u);let t=B.size(s)===1,n=B.size(c)===1,r=s.length>0&&s[s.length-1]%4==0,i=c.length>0&&c[c.length-1]%4==0;m.push(t),m.push(n),m.push(r),m.push(i);let a=1;for(let e=1;e<u.length;e++){let t=s[s.length-e];if(t===c[c.length-e])a*=t;else break}a%4==0?(p=!0,f=!0):(t||n||r||i)&&(f=!0)}else f=!0;return m.push(f),{name:e,shaderCache:{hint:t+m.map(e=>e.toString()).join(`_`),inputDependencies:[`rank`,`rank`]},getShaderSource:e=>_a(e,s,c,u,f,l,p,i,n.dataType,r.dataType,o,a),getRunData:()=>({outputs:[{dims:u,dataType:o}],dispatchGroup:{x:Math.ceil(d/64/4)},programUniforms:[{type:12,data:Math.ceil(B.size(u)/4)},...H(s,c,u)]})}},ya=(e,t,n,r,i,a)=>{e.compute(va(t,i??``,e.inputs[0],e.inputs[1],n,r,a))},ba=e=>{ya(e,`Add`,(e,t)=>`${e}+${t}`)},xa=e=>{ya(e,`Div`,(e,t)=>`${e}/${t}`)},Sa=e=>{ya(e,`Equal`,{scalar:(e,t)=>`u32(${e}==${t})`,vector:(e,t)=>`vec4<u32>(${e}==${t})`},void 0,void 0,9)},Ca=e=>{ya(e,`Mul`,(e,t)=>`${e}*${t}`)},wa=e=>{let t=W(`input`,e.inputs[0].dataType,e.inputs[0].dims).type.value;ya(e,`Pow`,{scalar:(e,t)=>`pow_custom(${e},${t})`,vector:(e,t)=>`pow_vector_custom(${e},${t})`},`
    fn pow_custom(a : ${t}, b : ${t}) -> ${t} {
      if (b == ${t}(0.0)) {
        return ${t}(1.0);
      } else if (a < ${t}(0.0) && f32(b) != floor(f32(b))) {
        return ${t}(pow(f32(a), f32(b))); // NaN
      }
      return select(sign(a), ${t}(1.0), round(f32(abs(b) % ${t}(2.0))) != 1.0) * ${t}(${t===`i32`?`round`:``}(pow(f32(abs(a)), f32(b))));
    }
    fn pow_vector_custom(a : vec4<${t}>, b : vec4<${t}>) -> vec4<${t}> {
      // TODO: implement vectorized pow
      return vec4<${t}>(pow_custom(a.x, b.x), pow_custom(a.y, b.y), pow_custom(a.z, b.z), pow_custom(a.w, b.w));
    }
      `)},Ta=e=>{ya(e,`Sub`,(e,t)=>`${e}-${t}`)},Ea=e=>{ya(e,`Greater`,{scalar:(e,t)=>`u32(${e}>${t})`,vector:(e,t)=>`vec4<u32>(${e}>${t})`},void 0,void 0,9)},Da=e=>{ya(e,`Less`,{scalar:(e,t)=>`u32(${e}<${t})`,vector:(e,t)=>`vec4<u32>(${e}<${t})`},void 0,void 0,9)},Oa=e=>{ya(e,`GreaterOrEqual`,{scalar:(e,t)=>`u32(${e}>=${t})`,vector:(e,t)=>`vec4<u32>(${e}>=${t})`},void 0,void 0,9)},ka=e=>{ya(e,`LessOrEqual`,{scalar:(e,t)=>`u32(${e}<=${t})`,vector:(e,t)=>`vec4<u32>(${e}<=${t})`},void 0,void 0,9)}}),ja,Ma,Na,Pa,Fa,Ia,La=x(()=>{z(),V(),Fn(),K(),ja=(e,t)=>{if(!e||e.length<1)throw Error(`too few inputs`);let n=e[0],r=n.dataType,i=n.dims.length;e.forEach((e,a)=>{if(a!==0){if(e.dataType!==r)throw Error(`input tensors should be one type`);if(e.dims.length!==i)throw Error(`input tensors should have the same shape`);e.dims.forEach((e,r)=>{if(r!==t&&e!==n.dims[r])throw Error(`non concat dimensions must match`)})}})},Ma=(e,t)=>`
  fn calculateInputIndex(index: u32) -> u32 {
    let sizeInConcatAxis = array<u32, ${e}u>(${t});
    for (var i: u32 = 0u; i < ${e}; i += 1u ) {
      if (index < sizeInConcatAxis[i]) {
        return i;
      }
    }
    return ${e}u;
  }`,Na=(e,t)=>{let n=e.length,r=[];for(let i=0;i<n;++i){let a=t.setByOffset(`global_idx`,e[i].getByIndices(`indices`));n===1?r.push(a):i===0?r.push(`if (inputIndex == ${i}u) { ${a} }`):i===n-1?r.push(`else { ${a} }`):r.push(`else if (inputIndex == ${i}) { ${a} }`)}return r.join(`
`)},Pa=(e,t,n,r)=>{let i=B.size(n),a=Array(e.length),o=Array(e.length),s=0,c=[],l=[],u=[{type:12,data:i}];for(let n=0;n<e.length;++n)s+=e[n].dims[t],a[n]=s,l.push(e[n].dims.length),o[n]=W(`input${n}`,r,l[n]),c.push(`rank`),u.push({type:12,data:a[n]});for(let t=0;t<e.length;++t)u.push(...H(e[t].dims));u.push(...H(n));let d=G(`output`,r,n.length),f=d.indicesGet(`indices`,t),p=Array.from(Array(a.length).keys()).map(e=>`uniforms.sizeInConcatAxis${e}`).join(`,`);return{name:`Concat`,shaderCache:{hint:`${t}`,inputDependencies:c},getRunData:()=>({outputs:[{dims:n,dataType:r}],dispatchGroup:{x:Math.ceil(i/64)},programUniforms:u}),getShaderSource:t=>`

  ${(()=>{t.registerUniform(`outputSize`,`u32`);for(let n=0;n<e.length;n++)t.registerUniform(`sizeInConcatAxis${n}`,`u32`);return t.declareVariables(...o,d)})()}

  ${Ma(a.length,p)}

  ${t.mainStart()}
    ${t.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.outputSize`)}

    var indices = ${d.offsetToIndices(`global_idx`)};

    let inputIndex = calculateInputIndex(${f});
    if (inputIndex != 0u) {
      let sizeInConcatAxis = array<u32, ${a.length}u>(${p});
      ${f} -= sizeInConcatAxis[inputIndex - 1u];
    }

    ${Na(o,d)}
  }`}},Fa=(e,t)=>{let n=e.inputs,r=n[0].dims,i=B.normalizeAxis(t.axis,r.length);ja(n,i);let a=r.slice();a[i]=n.reduce((e,t)=>e+(t.dims.length>i?t.dims[i]:0),0);let o=n.filter(e=>B.size(e.dims)>0);e.compute(Pa(o,i,a,n[0].dataType),{inputs:o})},Ia=e=>Pn({axis:e.axis})}),Ra,za,Ba,Va,Ha=x(()=>{z(),V(),Ra=(e,t,n=`f32`)=>{switch(e.activation){case`Relu`:return`value = max(value, ${t}(0.0));`;case`Sigmoid`:return`value = (${t}(1.0) / (${t}(1.0) + exp(-value)));`;case`Clip`:return`value = clamp(value, ${t}(${n}(uniforms.clip_min)), ${t}(${n}(uniforms.clip_max)));`;case`HardSigmoid`:return`value = max(${t}(0.0), min(${t}(1.0), ${n}(uniforms.alpha) * value + ${n}(uniforms.beta)));`;case`LeakyRelu`:return`value = select(${n}(uniforms.alpha) * value, value, value >= ${t}(0.0));`;case`Tanh`:return`let e2x = exp(-2.0 * abs(value));
              value = sign(value) * (1.0 - e2x) / (1.0 + e2x);
        `;case``:return``;default:throw Error(`Unsupported activation ${e.activation}`)}},za=(e,t)=>{e.activation===`Clip`?t.push({type:1,data:e.clipMax},{type:1,data:e.clipMin}):e.activation===`HardSigmoid`?t.push({type:1,data:e.alpha},{type:1,data:e.beta}):e.activation===`LeakyRelu`&&t.push({type:1,data:e.alpha})},Ba=(e,t)=>{e.activation===`Clip`?t.push({name:`clip_max`,type:`f32`},{name:`clip_min`,type:`f32`}):e.activation===`HardSigmoid`?t.push({name:`alpha`,type:`f32`},{name:`beta`,type:`f32`}):e.activation===`LeakyRelu`&&t.push({name:`alpha`,type:`f32`})},Va=e=>{let t=e?.activation||``;if(t===`HardSigmoid`){let[n,r]=e?.activation_params||[.2,.5];return{activation:t,alpha:n,beta:r}}if(t===`Clip`){let[n,r]=e?.activation_params||[tn,nn];return{activation:t,clipMax:r,clipMin:n}}if(t===`LeakyRelu`){let[n]=e?.activation_params||[.01];return{activation:t,alpha:n}}return{activation:t}}}),Ua,Wa,Ga=x(()=>{Ua=(e,t)=>{switch(e){case 1:return t;case 2:return`vec2<${t}>`;case 3:return`vec3<${t}>`;case 4:return`vec4<${t}>`;default:throw Error(`${e}-component is not supported.`)}},Wa=e=>`
      ${e?`value = value + getBiasByOutputCoords(coords);`:``}
      `}),Ka,qa=x(()=>{Ka=e=>`
fn getIndexFromCoords4D(coords : vec4<i32>, shape : vec4<i32>) -> i32 {
  return dot(coords, vec4<i32>(
      shape.y * shape.z * shape.w, shape.z * shape.w, shape.w, 1));
}
fn getOutputIndexFromCoords(coords : vec4<i32>) -> i32 {
  return dot(coords, vec4<i32>(
    i32(${e}.x), i32(${e}.y), i32(${e}.z), 1));
}
`}),Ja,Ya,Xa=x(()=>{z(),V(),K(),Ha(),Ja=(e,t,n,r,i)=>{let a=r-n;return`
      ${Array.from({length:n}).map((n,o)=>`
      if (${U(t.shape,o,t.rank)} != 1) {
        ${t.indicesSet(e,o,U(i,o+a,r))}
      } else {
        ${t.indicesSet(e,o,0)}
      }`).join(``)}
`},Ya=(e,t,n,r,i=!1,a)=>{let o=e[0].dims,s=e[1].dims,c=o[o.length-2],l=s[s.length-1],u=o[o.length-1],d=Bn(l),f=Bn(u),p=Bn(c),m=B.size(n)/d/p,h=e.length>2,g=r?r.slice(0,-2):n.slice(0,-2),_=[B.size(g),c,l],v=[{type:12,data:m},{type:12,data:c},{type:12,data:l},{type:12,data:u}];return za(t,v),v.push(...H(g,o,s)),h&&v.push(...H(e[2].dims)),v.push(...H(_)),{name:`MatMulNaive`,shaderCache:{hint:`${t.activation};${d};${f};${p};${i}`,inputDependencies:h?[`rank`,`rank`,`rank`]:[`rank`,`rank`]},getRunData:()=>({outputs:[{dims:a?a(n):n,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(m/64)},programUniforms:v}),getShaderSource:r=>{let a=Kn(`batch_dims`,e[0].dataType,g.length),c=W(`a`,e[0].dataType,o.length,f),l=W(`b`,e[1].dataType,s.length,d),u=G(`output`,e[0].dataType,_.length,d),m=Rn(u.type.tensor),v=Ra(t,u.type.value,m),y=[c,l],b=``;if(h){let t=i?d:1;y.push(W(`bias`,e[2].dataType,e[2].dims.length,t)),b=`${i?`value += bias[col / ${t}];`:`value += ${u.type.value}(bias[row + i]);`}`}let x=[{name:`output_size`,type:`u32`},{name:`M`,type:`u32`},{name:`N`,type:`u32`},{name:`K`,type:`u32`}];Ba(t,x);let S=()=>{let e=`var a_data: ${c.type.value};`;for(let t=0;t<f;t++)e+=`
              let b_data${t} = b[(b_offset + (k + ${t}) * uniforms.N + col) / ${d}];`;for(let t=0;t<p;t++){e+=`a_data = a[(a_offset + (row + ${t}) * uniforms.K + k) / ${f}];`;for(let n=0;n<f;n++)e+=`
            values[${t}] = fma(${l.type.value}(a_data${f===1?``:`[${n}]`}), b_data${n}, values[${t}]);
`}return e};return`
  ${r.registerUniforms(x).registerInternalVariables(a).declareVariables(...y,u)}
  ${r.mainStart()}
    ${r.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.output_size`)}
    let col = (global_idx % (uniforms.N / ${d})) * ${d};
    var index1 = global_idx / (uniforms.N / ${d});
    let stride1 = uniforms.M / ${p};
    let row = (index1 % stride1) * ${p};
    let batch = index1 / stride1;

    ${n.length===2?``:`let batch_indices = ${a.offsetToIndices(`batch`)};`}

    var a_indices: ${c.type.indices};
    ${Ja(`a_indices`,c,c.rank-2,a.rank,`batch_indices`)}
    ${c.indicesSet(`a_indices`,c.rank-2,0)}
    ${c.indicesSet(`a_indices`,c.rank-1,0)}
    let a_offset = ${c.indicesToOffset(`a_indices`)};

    var b_indices: ${l.type.indices};
    ${Ja(`b_indices`,l,l.rank-2,a.rank,`batch_indices`)}
    ${l.indicesSet(`b_indices`,l.rank-2,0)}
    ${l.indicesSet(`b_indices`,l.rank-1,0)}
    let b_offset = ${l.indicesToOffset(`b_indices`)};
    var values: array<${u.type.value}, ${p}>;
    for (var k: u32 = 0u; k < uniforms.K; k = k + ${f}) {
      ${S()}
    }
    for (var i = 0u; i < ${p}u; i++) {
      var value = values[i];
      ${b}
      ${v}
      let cur_indices = ${u.type.indices}(batch, row + i, col);
      let offset = ${u.indicesToOffset(`cur_indices`)};
      ${u.setByOffset(`offset / ${d}`,`value`)};
    }
  }
  `}}}}),Za,Qa,$a,eo,to,no,X,ro,io=x(()=>{z(),V(),K(),Ha(),Xa(),Ga(),Za=(e,t)=>e?`
        mm_Asub[inputRow][inputCol] = mm_readA(batch,
          kStart + inputRow,
          globalRowStart / innerElementSize + inputCol${t?`, batchIndices`:``});
        `:`
        mm_Asub[inputRow][inputCol] = mm_readA(batch,
          globalRow + innerRow,
          kStart / innerElementSize + inputCol${t?`, batchIndices`:``});
        `,Qa=(e,t)=>e?`
        let ACached0 = mm_Asub[k * innerElementSize][localRow];
        let ACached1 = mm_Asub[k * innerElementSize + 1][localRow];
        let ACached2 = mm_Asub[k * innerElementSize + 2][localRow];
        ${t===3?``:`let ACached3 = mm_Asub[k * innerElementSize + 3][localRow];`}
        for (var i = 0; i < rowPerThread; i = i + 1) {
          acc[i] = BCached0 * ACached0[i] + acc[i];
          acc[i] = BCached1 * ACached1[i] + acc[i];
          acc[i] = BCached2 * ACached2[i] + acc[i];
          ${t===3?``:`acc[i] = BCached3 * ACached3[i] + acc[i];`}
        }`:`
        for (var i = 0; i < rowPerThread; i = i + 1) {
          let ACached = mm_Asub[tileRow + i][k];
          acc[i] = BCached0 * ACached.x + acc[i];
          acc[i] = BCached1 * ACached.y + acc[i];
          acc[i] = BCached2 * ACached.z + acc[i];
          ${t===3?``:`acc[i] = BCached3 * ACached.w + acc[i];`}
        }`,$a=(e,t,n=`f32`,r,i=!1,a=32,o=!1,s=32)=>{let c=t[1]*e[1],l=t[0]*e[0],u=i?c:a,d=i?a:c,f=u/t[0],p=a/t[1];if(!((i&&f===4&&e[1]===4||!i&&(f===3||f===4))&&u%t[0]===0&&a%t[1]===0&&e[0]===4))throw Error(`If transposeA ${i} is true, innerElementSize ${f} and workPerThread[1] ${e[1]} must be 4.
      Otherwise, innerElementSize ${f} must be 3 or 4.
  tileAWidth ${u} must be divisible by workgroupSize[0]${t[0]}. tileInner ${a} must be divisible by workgroupSize[1] ${t[1]}. colPerThread ${e[0]} must be 4.`);return`
var<workgroup> mm_Asub: array<array<vec${f}<${n}>, ${u/f}>, ${d}>;
var<workgroup> mm_Bsub: array<array<vec4<${n}>, ${l/e[0]}>, ${a}>;

const rowPerThread = ${e[1]};
const colPerThread = ${e[0]};
const innerElementSize = ${f};
const tileInner = ${a};

@compute @workgroup_size(${t[0]}, ${t[1]}, ${t[2]})
fn main(@builtin(local_invocation_id) localId : vec3<u32>,
        @builtin(global_invocation_id) globalId : vec3<u32>,
        @builtin(workgroup_id) workgroupId : vec3<u32>) {
  let localRow = i32(localId.y);
  let tileRow = localRow * rowPerThread;
  let tileCol = i32(localId.x);

  let globalRow =i32(globalId.y) * rowPerThread;
  let globalCol = i32(globalId.x);
  let batch = ${o?`0`:`i32(globalId.z)`};
  ${r?`let batchIndices = ${r.offsetToIndices(`u32(batch)`)};`:``}
  let globalRowStart = i32(workgroupId.y) * ${c};

  let num_tiles = ${o?`${Math.ceil(s/a)}`:`(uniforms.dim_inner - 1) / tileInner + 1`};
  var kStart = ${o?`i32(globalId.z) * ${s}`:`0`};

  var acc: array<vec4<${n}>, rowPerThread>;

  // Loop over shared dimension.
  let tileRowB = localRow * ${p};
  for (var t = 0; t < num_tiles; t = t + 1) {
      // Load one tile of A into local memory.
      for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
          let inputRow = tileRow + innerRow;
          let inputCol = tileCol;
          ${Za(i,r)}
      }

      // Load one tile of B into local memory.
      for (var innerRow = 0; innerRow < ${p}; innerRow = innerRow + 1) {
          let inputRow = tileRowB + innerRow;
          let inputCol = tileCol;
          mm_Bsub[inputRow][inputCol] = mm_readB(batch, kStart + inputRow, globalCol${r?`, batchIndices`:``});
      }
      kStart = kStart + tileInner;
      workgroupBarrier();

      // Compute acc values for a single thread.
      for (var k = 0; k < tileInner / innerElementSize; k = k + 1) {
          let BCached0 = mm_Bsub[k * innerElementSize][tileCol];
          let BCached1 = mm_Bsub[k * innerElementSize + 1][tileCol];
          let BCached2 = mm_Bsub[k * innerElementSize + 2][tileCol];
          ${f===3?``:`let BCached3 = mm_Bsub[k * innerElementSize + 3][tileCol];`}

          ${Qa(i,f)}
      }

      workgroupBarrier();
  }

  for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
      mm_write(batch, globalRow + innerRow, globalCol, acc[innerRow]);
  }
}`},eo=(e,t)=>e?`
            mm_Asub[inputRow][inputCol] = mm_readA(batch,
              kStart + inputRow,
              globalRowStart + inputCol${t?`, batchIndices`:``});
            `:`
            mm_Asub[inputRow][inputCol] = mm_readA(batch,
              globalRowStart + inputRow,
              kStart + inputCol${t?`, batchIndices`:``});
            `,to=e=>e?`let ACached = mm_Asub[k][tileRow + innerRow];`:`let ACached = mm_Asub[tileRow + innerRow][k];`,no=(e,t,n=`f32`,r,i=!1,a=32,o=!1,s=32,c=!1)=>{let l=e[1]*t[1],u=e[0]*t[0],d=i?l:a,f=i?a:l;if(f%t[1]!==0||d%t[0]!==0||a%t[1]!==0)throw Error(`tileAHight ${f} must be divisible by workgroupSize[1]${t[1]}, tileAWidth ${d} must be divisible by workgroupSize[0]${t[0]}, tileInner ${a} must be divisible by workgroupSize[1]${t[1]}`);let p=f/t[1],m=d/t[0],h=a/t[1],g=c?`
    let localRow = i32(localId.y);
    let localCol = i32(localId.x);
    let globalRowStart = i32(workgroupId.y) * ${l};
    let globalColStart = i32(workgroupId.x) * ${u};

    // Loop over shared dimension.
    for (var t = 0; t < num_tiles; t = t + 1) {
      // Load one tile of A into local memory.
      for (var inputRow = localRow; inputRow < ${f}; inputRow = inputRow + ${t[1]}) {
        for (var inputCol = localCol; inputCol < ${d}; inputCol = inputCol + ${t[0]}) {
          ${eo(i,r)}
        }
      }
      // Load one tile of B into local memory.
      for (var inputRow = localRow; inputRow < ${a}; inputRow = inputRow + ${t[1]}) {
            for (var inputCol = localCol; inputCol < ${u}; inputCol = inputCol + ${t[0]}) {
          mm_Bsub[inputRow][inputCol] = mm_readB(batch,
            kStart + inputRow,
            globalColStart + inputCol${r?`, batchIndices`:``});
        }
      }
      kStart = kStart + tileInner;
      workgroupBarrier();

      // Compute acc values for a single thread.
      var BCached : array<${n}, colPerThread>;
      for (var k = 0; k < tileInner; k = k + 1) {
        for (var inner = 0; inner < colPerThread; inner = inner + 1) {
          BCached[inner] = mm_Bsub[k][localCol + inner * ${t[0]}];
        }
        for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
          let ACached = ${i?`mm_Asub[k][localRow + innerRow * ${t[1]}];`:`mm_Asub[localRow + innerRow * ${t[1]}][k];`}
          for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
            acc[innerRow][innerCol] = acc[innerRow][innerCol] +
                ACached * BCached[innerCol];
          }
        }
      }
      workgroupBarrier();
    }
    for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
      let gRow = globalRowStart + localRow + innerRow * ${t[1]};
      for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
        let gCol = globalColStart + localCol + innerCol * ${t[0]};
        mm_write(batch, gRow, gCol, acc[innerRow][innerCol]);
      }
    }
    `:`
let tileRow = i32(localId.y) * rowPerThread;
let tileCol = i32(localId.x) * colPerThread;

let globalRow = i32(globalId.y) * rowPerThread;
let globalCol = i32(globalId.x) * colPerThread;
let globalRowStart = i32(workgroupId.y) * ${l};

let tileRowA = i32(localId.y) * ${p};
let tileColA = i32(localId.x) * ${m};
let tileRowB = i32(localId.y) * ${h};
// Loop over shared dimension.
for (var t = 0; t < num_tiles; t = t + 1) {
  // Load one tile of A into local memory.
  for (var innerRow = 0; innerRow < ${p}; innerRow = innerRow + 1) {
    for (var innerCol = 0; innerCol < ${m}; innerCol = innerCol + 1) {
      let inputRow = tileRowA + innerRow;
      let inputCol = tileColA + innerCol;
      ${eo(i,r)}
    }
  }

  // Load one tile of B into local memory.
  for (var innerRow = 0; innerRow < ${h}; innerRow = innerRow + 1) {
    for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
      let inputRow = tileRowB + innerRow;
      let inputCol = tileCol + innerCol;
      mm_Bsub[inputRow][inputCol] = mm_readB(batch,
        kStart + inputRow,
        globalCol + innerCol${r?`, batchIndices`:``});
    }
  }
  kStart = kStart + tileInner;
  workgroupBarrier();

  // Compute acc values for a single thread.
  var BCached : array<${n}, colPerThread>;
  for (var k = 0; k < tileInner; k = k + 1) {
    for (var inner = 0; inner < colPerThread; inner = inner + 1) {
      BCached[inner] = mm_Bsub[k][tileCol + inner];
    }

    for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
      ${to(i)}
      for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
        acc[innerRow][innerCol] = acc[innerRow][innerCol] + ACached * BCached[innerCol];
      }
    }
  }

  workgroupBarrier();
}

for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
  for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
    mm_write(batch, globalRow + innerRow, globalCol + innerCol,
        acc[innerRow][innerCol]);
  }
}
`;return`
  var<workgroup> mm_Asub : array<array<${n}, ${d}>, ${f}>;
  var<workgroup> mm_Bsub : array<array<${n}, ${u}>, ${a}>;
  const rowPerThread = ${e[1]};
  const colPerThread = ${e[0]};
  const tileInner = ${a};

@compute @workgroup_size(${t[0]}, ${t[1]}, ${t[2]})
fn main(@builtin(local_invocation_id) localId : vec3<u32>,
        @builtin(global_invocation_id) globalId : vec3<u32>,
        @builtin(workgroup_id) workgroupId : vec3<u32>) {
    let batch = ${o?`0`:`i32(globalId.z)`};
    ${r?`let batchIndices = ${r.offsetToIndices(`u32(batch)`)};`:``}
    let num_tiles = ${o?`${Math.ceil(s/a)}`:`(uniforms.dim_inner - 1) / tileInner + 1`};
    var kStart = ${o?`i32(globalId.z) * ${s}`:`0`};

    var acc : array<array<${n}, colPerThread>, rowPerThread>;
    ${g}
  }
`},X=(e,t,n,r,i=!1)=>{let[a,o,s,c]=r,l=Rn(r[0].type.tensor);return`
    fn mm_readA(batch: i32, row: i32, colIn: i32, batchIndices: ${a.type.indices}) -> ${Ua(e,l)} {
      var value = ${Ua(e,l)}(0.0);
      let col = colIn * ${e};
      if(row < uniforms.dim_a_outer && col < uniforms.dim_inner)
      {
        var aIndices: ${o.type.indices};
        ${Ja(`aIndices`,o,o.rank-2,a.rank,`batchIndices`)}
        ${o.indicesSet(`aIndices`,o.rank-2,`u32(row)`)}
        ${o.indicesSet(`aIndices`,o.rank-1,`u32(colIn)`)}
        value = ${o.getByIndices(`aIndices`)};
      }
      return value;
    }

    fn mm_readB(batch: i32, row: i32, colIn: i32, batchIndices: ${a.type.indices}) -> ${Ua(e,l)} {
      var value = ${Ua(e,l)}(0.0);
      let col = colIn * ${e};
      if(row < uniforms.dim_inner && col < uniforms.dim_b_outer)
      {
        var bIndices: ${s.type.indices};
        ${Ja(`bIndices`,s,s.rank-2,a.rank,`batchIndices`)}
        ${s.indicesSet(`bIndices`,s.rank-2,`u32(row)`)}
        ${s.indicesSet(`bIndices`,s.rank-1,`u32(colIn)`)}
        value = ${s.getByIndices(`bIndices`)};
      }
      return value;
    }

    fn mm_write(batch: i32, row: i32, colIn: i32, valueIn: ${Ua(e,l)}) {
      let col = colIn * ${e};
      if (row < uniforms.dim_a_outer && col < uniforms.dim_b_outer) {
        var value = valueIn;
        let coords = vec3<i32>(batch, row, colIn);
        ${t?`value = value + ${i?`bias[colIn]`:`${Ua(e,l)}(bias[row])`};`:``}
        ${n}
        ${c.setByIndices(`vec3<u32>(coords)`,`value`)}
      }
    }
    `},ro=(e,t,n,r,i=!1,a)=>{let o=e[0].dims,s=e[1].dims,c=o.slice(0,-2),l=s.slice(0,-2),u=r?r.slice(0,-2):n.slice(0,-2),d=B.size(u),f=o[o.length-2],p=o[o.length-1],m=s[s.length-1],h=p%4==0&&m%4==0,g=f<=8?[4,1,1]:[4,4,1],_=[8,8,1],v=[Math.ceil(m/_[0]/g[0]),Math.ceil(f/_[1]/g[1]),Math.ceil(d/_[2]/g[2])],y=h?4:1,b=[...c,f,p/y],x=b.length,S=[...l,p,m/y],C=S.length,w=[d,f,m/y],T=[{type:6,data:f},{type:6,data:m},{type:6,data:p}];za(t,T),T.push(...H(u,b,S));let E=[`rank`,`rank`],D=e.length>2;return D&&(T.push(...H(e[2].dims)),E.push(`rank`)),T.push(...H(w)),{name:`MatMul`,shaderCache:{hint:`${g};${t.activation};${h};${i}`,inputDependencies:E},getRunData:()=>({outputs:[{dims:a?a(n):n,dataType:e[0].dataType}],dispatchGroup:{x:v[0],y:v[1],z:v[2]},programUniforms:T}),getShaderSource:n=>{let r=u.length,a=Kn(`batchDims`,e[0].dataType,r,1),o=Rn(e[0].dataType),s=W(`a`,e[0].dataType,x,y),c=W(`b`,e[1].dataType,C,y),l=G(`result`,e[0].dataType,w.length,y),d=[s,c];if(D){let t=i?y:1;d.push(W(`bias`,e[2].dataType,e[2].dims.length,t))}let f=[{name:`dim_a_outer`,type:`i32`},{name:`dim_b_outer`,type:`i32`},{name:`dim_inner`,type:`i32`}];Ba(t,f);let p=Rn(l.type.tensor),m=Ra(t,l.type.value,p),v=X(y,D,m,[a,s,c,l],i);return`
  ${n.registerUniforms(f).registerInternalVariables(a).declareVariables(...d,l)}
  ${v}
  ${h?$a(g,_,o,a):no(g,_,o,a)}
                   `}}}}),ao,oo,so=x(()=>{z(),Xt(),K(),Ha(),Ga(),qa(),io(),ao=(e,t,n,r,i=!1,a,o=4,s=4,c=4,l=`f32`)=>{let u=e=>{switch(e){case 1:return`resData = x[xIndex];`;case 3:return`resData = vec3<${l}>(x[xIndex], x[xIndex + 1], x[xIndex + 2]);`;case 4:return`resData = x[xIndex / 4];`;default:throw Error(`innerElementSize ${e} is not supported.`)}},d=e=>{switch(e){case 1:return`return w[row * i32(uniforms.w_shape[3]) + colIn];`;case 4:return`return w[row * i32(uniforms.w_shape[3]) / 4 + colIn];`;default:throw Error(`innerElementSize ${e} is not supported.`)}},f=e?`
    let coord = vec4<i32>(batch, xRow, xCol, xCh);
    `:`
    let coord = vec4<i32>(batch, xCh, xRow, xCol);
    `,p=e?`
    let coords = vec4<i32>(
      batch,
      row / outWidth,
      row % outWidth,
      col);
    `:`
    let coords = vec4<i32>(
      batch,
      row,
      col / outWidth,
      col % outWidth);
    `,m=e?`i32(uniforms.x_shape[1])`:`i32(uniforms.x_shape[2])`,h=e?`i32(uniforms.x_shape[2])`:`i32(uniforms.x_shape[3])`,g=e?`row`:`col`,_=e?`col`:`row`,v=`
    let inChannels = i32(uniforms.w_shape[2]);
    let outWidth = ${e?`i32(uniforms.result_shape[2])`:`i32(uniforms.result_shape[3])`};
    let outRow = ${g} / outWidth;
    let outCol = ${g} % outWidth;

    let WRow = ${_} / (i32(uniforms.w_shape[1]) * inChannels);
    let WCol = ${_} / inChannels % i32(uniforms.w_shape[1]);
    let xRow = outRow * uniforms.stride[0] + uniforms.dilation[0] * WRow - uniforms.pad[0];
    let xCol = outCol * uniforms.stride[1] + uniforms.dilation[1] * WCol - uniforms.pad[1];
    let xCh = ${_} % inChannels;
    var resData = ${Ua(o,l)}(0.0);
    // The bounds checking is always needed since we use it to pad zero for
    // the 'same' padding type.
    if (xRow >= 0 && xRow < ${m} && xCol >= 0 && xCol < ${h}) {
      ${f}
      let xIndex = getIndexFromCoords4D(coord, vec4<i32>(uniforms.x_shape));
      ${u(o)}
    }
    return resData;`,y=e?t&&r?`
    let col = colIn * ${o};
    ${v}`:`
    let col = colIn * ${o};
    if (row < uniforms.dim_a_outer && col < uniforms.dim_inner) {
      ${v}
    }
    return ${Ua(o,l)}(0.0);`:r&&n?`
    let col = colIn * ${o};
    ${v}`:`
    let col = colIn * ${o};
    if (row < uniforms.dim_inner && col < uniforms.dim_b_outer) {
      ${v}
    }
    return ${Ua(o,l)}(0.0);`,b=e?r&&n?d(s):`
    let col = colIn * ${s};
    if (row < uniforms.dim_inner && col < uniforms.dim_b_outer) {
      ${d(s)}
    }
    return ${Ua(s,l)}(0.0);`:`
    let col = colIn * ${s};
    if (row < uniforms.dim_inner && col < uniforms.dim_a_outer) {
      ${d(s)}
    }
    return ${Ua(s,l)}(0.0);`,x=Ua(c,l),S=Ua(e?o:s,l),C=Ua(e?s:o,l),w=Ra(a,x,l);return`
    fn mm_readA(batch: i32, row : i32, colIn : i32) -> ${S} {
      ${e?y:b}
    }

    fn mm_readB(batch: i32, row : i32, colIn : i32) -> ${C} {
      ${e?b:y}
    }

    fn mm_write(batch: i32, row : i32, colIn : i32, valueIn : ${x}) {
      let col = colIn * ${c};
      if (row < uniforms.dim_a_outer && col < uniforms.dim_b_outer)
      {
      var value = valueIn;
      let outWidth = ${e?`i32(uniforms.result_shape[2])`:`i32(uniforms.result_shape[3])`};
      ${p}
      ${Wa(i)}
      ${w}
      setOutputAtCoords(coords[0], coords[1], coords[2], coords[3], value);
      }
    }`},oo=(e,t,n,r,i,a,o,s,c)=>{let l=t.format===`NHWC`,u=l?e[0].dims[3]:e[0].dims[1],d=n[0],f=l?n[2]:n[3],p=l?n[1]:n[2],m=l?n[3]:n[1],h=l&&(u%4==0||u%3==0)&&m%4==0,g=l?m:f*p,_=l?f*p:m,v=[8,8,1],y=r<=8?[4,1,1]:[4,4,1],b=[Math.ceil(g/v[0]/y[0]),Math.ceil(_/v[1]/y[1]),Math.ceil(d/v[2]/y[2])];Yt(`verbose`,()=>`[conv2d_mm_webgpu] dispatch = ${b}`);let x=h?l&&u%4!=0?3:4:1,S=v[1]*y[1],C=v[0]*y[0],w=Math.max(v[0]*x,v[1]),T=r%S===0,E=i%C===0,D=a%w===0,O=h?[x,4,4]:[1,1,1],k=[{type:6,data:r},{type:6,data:i},{type:6,data:a},{type:6,data:[t.pads[0],t.pads[1]]},{type:6,data:t.strides},{type:6,data:t.dilations}];za(t,k),k.push(...H(e[0].dims,e[1].dims));let A=[`rank`,`rank`];return o&&(k.push(...H(e[2].dims)),A.push(`rank`)),k.push(...H(n)),{name:`Conv2DMatMul`,shaderCache:{hint:`${t.cacheKey};${x};${h};${T};${E};${D};${S};${C};${w}`,inputDependencies:A},getRunData:()=>({outputs:[{dims:c?c(n):n,dataType:e[0].dataType}],dispatchGroup:{x:b[0],y:b[1],z:b[2]},programUniforms:k}),getShaderSource:r=>{let i=[{name:`dim_a_outer`,type:`i32`},{name:`dim_b_outer`,type:`i32`},{name:`dim_inner`,type:`i32`},{name:`pad`,type:`i32`,length:2},{name:`stride`,type:`i32`,length:2},{name:`dilation`,type:`i32`,length:2}];Ba(t,i);let a=h?4:1,c=Rn(e[0].dataType),u=`
      fn setOutputAtIndex(flatIndex : i32, value : ${h?`vec4<${c}>`:c}) {
        result[flatIndex] = ${h?`vec4<${c}>`:c}(value);
      }
      fn setOutputAtCoords(d0 : i32, d1 : i32, d2 : i32, d3 : i32, value : ${h?`vec4<${c}>`:c}) {
        let flatIndex = getOutputIndexFromCoords(vec4<i32>(d0, d1, d2, d3));
        setOutputAtIndex(flatIndex ${h?`/ 4`:``}, value);
      }`,d=[W(`x`,e[0].dataType,e[0].dims.length,x===3?1:x),W(`w`,e[1].dataType,e[1].dims.length,a)],f=G(`result`,e[0].dataType,n.length,a);if(o){let t=W(`bias`,e[2].dataType,e[2].dims.length,a);d.push(t),u+=`
        fn getBiasByOutputCoords(coords : vec4<i32>) -> ${h?`vec4<${c}>`:c} {
          return bias[coords.${l?`w`:`y`}${h?`/ 4`:``}];
        }`}return`
        ${Ka(`uniforms.result_strides`)}
        //struct Uniforms { xShape : vec4<i32>, wShape : vec4<i32>, outShape : vec4<i32>,
        //  outShapeStrides: vec3<i32>, filterDims : vec2<i32>, pad : vec2<i32>, stride : vec2<i32>,
        //  dilation : vec2<i32>, dimAOuter : i32, dimBOuter : i32, dimInner : i32 };
        ${r.registerUniforms(i).declareVariables(...d,f)}
        ${u}
        ${ao(l,T,E,D,o,t,O[0],O[1],O[2],c)}
        ${h?$a(y,v,c,void 0,!l,w):no(y,v,c,void 0,!l,w,!1,void 0,s)}`}}}}),co,lo,uo,fo,po,mo,ho,go,_o=x(()=>{z(),Xt(),V(),K(),Ha(),Ga(),co=e=>{let t=1;for(let n=0;n<e.length;n++)t*=e[n];return t},lo=e=>typeof e==`number`?[e,e,e]:e,uo=(e,t)=>t<=1?e:e+(e-1)*(t-1),fo=(e,t,n,r=1)=>{let i=uo(t,r);return Math.floor((e[0]*(n-1)-n+i)/2)},po=(e,t,n,r,i)=>{i??=fo(e,t[0],r[0]);let a=[0,0,0,n];for(let n=0;n<3;n++)e[n]+2*i>=t[n]&&(a[n]=Math.trunc((e[n]-t[n]+2*i)/r[n]+1));return a},mo=(e,t,n,r,i,a,o,s,c,l)=>{let u,d,f,p;if(e===`VALID`&&(e=0),typeof e==`number`){u={top:e,bottom:e,left:e,right:e,front:e,back:e};let m=po([t,n,r,1],[s,c,l],1,[i,a,o],e);d=m[0],f=m[1],p=m[2]}else if(Array.isArray(e)){if(!e.every((e,t,n)=>e===n[0]))throw Error(`Unsupported padding parameter: ${e}`);u={top:e[0],bottom:e[1],left:e[2],right:e[3],front:e[4],back:e[5]};let m=po([t,n,r,1],[s,c,l],1,[i,a,o],e[0]);d=m[0],f=m[1],p=m[2]}else if(e===`SAME_UPPER`){d=Math.ceil(t/i),f=Math.ceil(n/a),p=Math.ceil(r/o);let e=(d-1)*i+s-t,m=(f-1)*a+c-n,h=(p-1)*o+l-r,g=Math.floor(e/2),_=e-g,v=Math.floor(m/2),y=m-v,b=Math.floor(h/2);u={top:v,bottom:y,left:b,right:h-b,front:g,back:_}}else throw Error(`Unknown padding parameter: ${e}`);return{padInfo:u,outDepth:d,outHeight:f,outWidth:p}},ho=(e,t,n,r,i,a=!1,o=`channelsLast`)=>{let s,c,l,u,d;if(o===`channelsLast`)[s,c,l,u,d]=e;else if(o===`channelsFirst`)[s,d,c,l,u]=e;else throw Error(`Unknown dataFormat ${o}`);let[f,,p,m,h]=t,[g,_,v]=lo(n),[y,b,x]=lo(r),S=uo(p,y),C=uo(m,b),w=uo(h,x),{padInfo:T,outDepth:E,outHeight:D,outWidth:O}=mo(i,c,l,u,g,_,v,S,C,w),k=a?f*d:f,A=[0,0,0,0,0];return o===`channelsFirst`?A=[s,k,E,D,O]:o===`channelsLast`&&(A=[s,E,D,O,k]),{batchSize:s,dataFormat:o,inDepth:c,inHeight:l,inWidth:u,inChannels:d,outDepth:E,outHeight:D,outWidth:O,outChannels:k,padInfo:T,strideDepth:g,strideHeight:_,strideWidth:v,filterDepth:p,filterHeight:m,filterWidth:h,effectiveFilterDepth:S,effectiveFilterHeight:C,effectiveFilterWidth:w,dilationDepth:y,dilationHeight:b,dilationWidth:x,inShape:e,outShape:A,filterShape:t}},go=(e,t,n,r,i,a)=>{let o=a===`channelsLast`;o?e[0].dims[3]:e[0].dims[1];let s=[64,1,1],c={x:n.map((e,t)=>t)},l=[Math.ceil(co(c.x.map(e=>n[e]))/s[0]),1,1];Yt(`verbose`,()=>`[conv3d_naive_webgpu] dispatch = ${l}`);let u=[{type:12,data:B.size(n)},{type:12,data:r},{type:12,data:i},{type:12,data:t.strides},{type:12,data:t.dilations}];za(t,u),u.push(...H(e[0].dims,e[1].dims));let d=[`rank`,`rank`],f=e.length===3;return f&&(u.push(...H(e[2].dims)),d.push(`rank`)),u.push(...H(n)),{name:`Conv3DNaive`,shaderCache:{hint:`${t.cacheKey};${o};1;${f}`,inputDependencies:d},getRunData:()=>({outputs:[{dims:n,dataType:e[0].dataType}],dispatchGroup:{x:l[0],y:l[1],z:l[2]},programUniforms:u}),getShaderSource:a=>{let s=[{name:`output_size`,type:`u32`},{name:`filter_dims`,type:`u32`,length:r.length},{name:`pads`,type:`u32`,length:i.length},{name:`strides`,type:`u32`,length:t.strides.length},{name:`dilations`,type:`u32`,length:t.dilations.length}];Ba(t,s);let c=Rn(e[0].dataType),l=W(`x`,e[0].dataType,e[0].dims.length,1),u=W(`W`,e[1].dataType,e[1].dims.length,1),d=[l,u],p=G(`result`,e[0].dataType,n.length,1),m=``;if(f){let t=W(`bias`,e[2].dataType,e[2].dims.length,1);d.push(t),m+=`
        fn getBiasByOutputCoords(coords : array<u32, 5>) -> ${c} {
          return bias[${o?U(`coords`,4,5):U(`coords`,1,5)}];
        }`}let h=Ua(1,c),g=Ra(t,h,c);return`
            ${m}
            fn getX(d0 : u32, d1 : u32, d2 : u32, d3 : u32, d4 : u32) -> f32 {
              let aIndices = array<u32, 5>(d0, d1, d2, d3, d4);
              return ${l.getByIndices(`aIndices`)};
            }
            fn getW(d0 : u32, d1 : u32, d2 : u32, d3 : u32, d4 : u32) -> f32 {
              let aIndices = array<u32, 5>(d0, d1, d2, d3, d4);
              return ${u.getByIndices(`aIndices`)};
            }
          ${a.registerUniforms(s).declareVariables(...d,p)}
          ${a.mainStart()}
          ${a.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.output_size`)}
              let coords = ${p.offsetToIndices(`global_idx`)};
              let batch = ${U(`coords`,0,l.rank)};
              let d2 = ${o?U(`coords`,l.rank-1,l.rank):U(`coords`,1,l.rank)};
              let xFRCCorner = vec3<u32>(${o?U(`coords`,1,l.rank):U(`coords`,2,l.rank)},
              ${o?U(`coords`,2,l.rank):U(`coords`,3,l.rank)},
              ${o?U(`coords`,3,l.rank):U(`coords`,4,l.rank)}) * uniforms.strides - uniforms.pads;
              let xFCorner = xFRCCorner.x;
              let xRCorner = xFRCCorner.y;
              let xCCorner = xFRCCorner.z;
              let xShapeY = ${o?U(`uniforms.x_shape`,1,l.rank):U(`uniforms.x_shape`,2,l.rank)};
              let xShapeZ = ${o?U(`uniforms.x_shape`,2,l.rank):U(`uniforms.x_shape`,3,l.rank)};
              let xShapeW = ${o?U(`uniforms.x_shape`,3,l.rank):U(`uniforms.x_shape`,4,l.rank)};
              let xShapeU = ${o?U(`uniforms.x_shape`,4,l.rank):U(`uniforms.x_shape`,1,l.rank)};
              let inputDepthNearestVec4 = (xShapeU / 4) * 4;
              let inputDepthVec4Remainder = xShapeU % 4;

              var value = 0.0;
              for (var wF = 0u; wF < uniforms.filter_dims[0]; wF++) {
                let xF = xFCorner + wF * uniforms.dilations[0];
                if (xF < 0 || xF >= xShapeY) {
                  continue;
                }

                for (var wR = 0u; wR < uniforms.filter_dims[1]; wR++) {
                  let xR = xRCorner + wR * uniforms.dilations[1];
                  if (xR < 0 || xR >= xShapeZ) {
                    continue;
                  }

                  for (var wC = 0u; wC < uniforms.filter_dims[2]; wC++) {
                    let xC = xCCorner + wC * uniforms.dilations[2];
                    if (xC < 0 || xC >= xShapeW) {
                      continue;
                    }

                    for (var d1 = 0u; d1 < inputDepthNearestVec4; d1 += 4) {
                      ${o?`let xValues = vec4<f32>(
                               getX(batch, xF, xR, xC, d1),
                               getX(batch, xF, xR, xC, d1 + 1),
                               getX(batch, xF, xR, xC, d1 + 2),
                               getX(batch, xF, xR, xC, d1 + 3));
                            `:`let xValues = vec4<f32>(
                               getX(batch, d1, xF, xR, xC),
                               getX(batch, d1 + 1, xF, xR, xC),
                               getX(batch, d1 + 2, xF, xR, xC),
                               getX(batch, d1 + 3, xF, xR, xC));
                            `}
                            let wValues = vec4<f32>(
                              getW(d2, d1, wF, wR, wC),
                              getW(d2, d1 + 1, wF, wR, wC),
                              getW(d2, d1 + 2, wF, wR, wC),
                              getW(d2, d1 + 3, wF, wR, wC));
                      value += dot(xValues, wValues);
                    }
                    if (inputDepthVec4Remainder == 1) {
                        ${o?`value += getX(batch, xF, xR, xC, inputDepthNearestVec4)
                          * getW(d2, inputDepthNearestVec4, wF, wR, wC);`:`value += getX(batch, inputDepthNearestVec4, xF, xR, xC)
                          * getW(d2, inputDepthNearestVec4, wF, wR, wC);`}
                    } else if (inputDepthVec4Remainder == 2) {
                      ${o?`let xValues = vec2<f32>(
                        getX(batch, xF, xR, xC, inputDepthNearestVec4),
                        getX(batch, xF, xR, xC, inputDepthNearestVec4 + 1));
                      `:`let xValues = vec2<f32>(
                        getX(batch, inputDepthNearestVec4, xF, xR, xC),
                        getX(batch, inputDepthNearestVec4 + 1, xF, xR, xC));
                    `}
                    let wValues = vec2<f32>(
                      getW(d2, inputDepthNearestVec4, wF, wR, wC),
                      getW(d2, inputDepthNearestVec4 + 1, wF, wR, wC));
                      value += dot(xValues, wValues);
                    } else if (inputDepthVec4Remainder == 3) {
                      ${o?`let xValues = vec3<f32>(
                        getX(batch, xF, xR, xC, inputDepthNearestVec4),
                        getX(batch, xF, xR, xC, inputDepthNearestVec4 + 1),
                        getX(batch, xF, xR, xC, inputDepthNearestVec4 + 2));
                      `:`let xValues = vec3<f32>(
                        getX(batch, inputDepthNearestVec4, xF, xR, xC),
                        getX(batch, inputDepthNearestVec4 + 1, xF, xR, xC),
                        getX(batch, inputDepthNearestVec4 + 2, xF, xR, xC));
                    `}
                    let wValues = vec3<f32>(
                      getW(d2, inputDepthNearestVec4, wF, wR, wC),
                      getW(d2, inputDepthNearestVec4 + 1, wF, wR, wC),
                      getW(d2, inputDepthNearestVec4 + 2, wF, wR, wC));
                      value += dot(xValues, wValues);
                    }
                  }
                }
              }
              ${f?`value = value + getBiasByOutputCoords(coords)`:``};
              ${g}
              result[global_idx] = f32(value);
          }`}}}}),vo,yo,bo=x(()=>{z(),V(),K(),Ha(),vo=(e,t,n,r)=>{let i=e.length>2,a=i?`value += b[output_channel];`:``,o=e[0].dims,s=e[1].dims,c=t.format===`NHWC`,l=c?n[3]:n[1],u=l/t.group,d=c&&u>=4?Bn(l):1,f=B.size(n)/d,p=[{type:12,data:f},{type:12,data:t.dilations},{type:12,data:[t.strides[0],t.strides[1]]},{type:12,data:[t.pads[0],t.pads[1]]},{type:12,data:u}];za(t,p),p.push(...H(o,[s[0],s[1],s[2],s[3]/d]));let m=i?[`rank`,`rank`,`rank`]:[`rank`,`rank`];return p.push(...H([n[0],n[1],n[2],n[3]/d])),{name:`GroupedConv`,shaderCache:{hint:`${t.cacheKey}_${d}`,inputDependencies:m},getRunData:()=>({outputs:[{dims:r?r(n):n,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(f/64)},programUniforms:p}),getShaderSource:r=>{let l=G(`output`,e[0].dataType,n.length,d),u=Rn(l.type.tensor),f=Ra(t,l.type.value,u),p=W(`x`,e[0].dataType,o.length),m=W(`w`,e[1].dataType,s.length,d),h=[p,m];i&&h.push(W(`b`,e[2].dataType,e[2].dims,d));let g=[{name:`output_size`,type:`u32`},{name:`dilations`,type:`u32`,length:t.dilations.length},{name:`strides`,type:`u32`,length:2},{name:`pads`,type:`u32`,length:2},{name:`output_channels_per_group`,type:`u32`}];Ba(t,g);let _=c?`
      for (var wHeight: u32 = 0u; wHeight < uniforms.w_shape[0]; wHeight++) {
        let xHeight = xRCCorner.x + wHeight * uniforms.dilations[0];

        if (xHeight < 0u || xHeight >= uniforms.x_shape[1]) {
          continue;
        }

        for (var wWidth: u32 = 0u; wWidth < uniforms.w_shape[1]; wWidth++) {
          let xWidth = xRCCorner.y + wWidth * uniforms.dilations[1];
          if (xWidth < 0u || xWidth >= uniforms.x_shape[2]) {
            continue;
          }

          for (var wInChannel: u32 = 0u; wInChannel < uniforms.w_shape[2]; wInChannel++) {
            let input_channel = in_channel_offset + wInChannel;
            let xVal = ${p.get(`batch`,`xHeight`,`xWidth`,`input_channel`)};
            let wVal = ${m.get(`wHeight`,`wWidth`,`wInChannel`,`output_channel`)};
            value += xVal * wVal;
          }
        }
      }
      `:`
      for (var wInChannel: u32 = 0u; wInChannel < uniforms.w_shape[1]; wInChannel++) {
        let input_channel = in_channel_offset + wInChannel;
        for (var wHeight: u32 = 0u; wHeight < uniforms.w_shape[2]; wHeight++) {
          let xHeight = xRCCorner.x + wHeight * uniforms.dilations[0];

          if (xHeight < 0u || xHeight >= uniforms.x_shape[2]) {
            continue;
          }

          for (var wWidth: u32 = 0u; wWidth < uniforms.w_shape[3]; wWidth++) {
            let xWidth = xRCCorner.y + wWidth * uniforms.dilations[1];
            if (xWidth < 0u || xWidth >= uniforms.x_shape[3]) {
              continue;
            }

            let xVal = ${p.get(`batch`,`input_channel`,`xHeight`,`xWidth`)};
            let wVal = ${m.get(`output_channel`,`wInChannel`,`wHeight`,`wWidth`)};
            value += xVal * wVal;
          }
        }
      }
      `;return`
  ${r.registerUniforms(g).declareVariables(...h,l)}

  ${r.mainStart()}
    ${r.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.output_size`)}

    let outputIndices = ${l.offsetToIndices(`global_idx`)};
    let batch: u32 = outputIndices[0];
    let output_channel: u32 = outputIndices[${c?3:1}];
    let xRCCorner: vec2<u32> = vec2<u32>(outputIndices[${c?1:2}], outputIndices[${c?2:3}]) * uniforms.strides - uniforms.pads;
    let group_id: u32 = output_channel * ${d} / uniforms.output_channels_per_group;
    var in_channel_offset = group_id * uniforms.w_shape[${c?2:1}];

    var value: ${l.type.value} = ${l.type.value}(0);
    ${_}
    ${a}
    ${f}
    ${l.setByOffset(`global_idx`,`value`)}
  }`}}},yo=(e,t,n,r)=>{let i=e.length>2,a=Bn(n[3]),o=Bn(n[2]),s=B.size(n)/a/o,c=[e[0].dims[0],e[0].dims[1],e[0].dims[2],e[0].dims[3]/a],l=[e[1].dims[0],e[1].dims[1],e[1].dims[2],e[1].dims[3]/a],u=[n[0],n[1],n[2],n[3]/a],d=[{type:12,data:s},{type:6,data:[t.strides[0],t.strides[1]]},{type:6,data:[t.pads[0],t.pads[1]]}];za(t,d),d.push(...H(c,l,u));let f=(o-1)*t.strides[1]+l[1];return{name:`GroupedConv-Vectorize`,shaderCache:{hint:`${t.cacheKey};${a};${o};${f};${l[0]};${l[1]}`,inputDependencies:i?[`rank`,`rank`,`type`]:[`rank`,`rank`]},getRunData:()=>({outputs:[{dims:r?r(n):n,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(s/64)},programUniforms:d}),getShaderSource:n=>{let r=G(`output`,e[0].dataType,u.length,a),s=Rn(r.type.tensor),d=Ra(t,r.type.value,s),p=W(`x`,e[0].dataType,c.length,a),m=W(`w`,e[1].dataType,l.length,a),h=[p,m];i&&h.push(W(`b`,e[2].dataType,e[2].dims,a));let g=i?`value += b[output_channel];`:``,_=[{name:`output_size`,type:`u32`},{name:`strides`,type:`i32`,length:2},{name:`pads`,type:`i32`,length:2}];return Ba(t,_),`
  ${n.registerUniforms(_).declareVariables(...h,r)}
  ${n.mainStart()}
    ${n.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.output_size`)}
    let width0 = uniforms.output_shape[3];
    let output_channel = global_idx % width0;
    var index1 = global_idx / width0;
    let width1 = uniforms.output_shape[2] / ${o}u;
    let col = (index1 % width1) * ${o}u;
    index1 = index1 / width1;
    let row = index1 % uniforms.output_shape[1];
    let batch = index1 / uniforms.output_shape[1];

    let x_corner = vec2<i32>(i32(row), i32(col)) * uniforms.strides - uniforms.pads;

    var x_vals: array<${p.type.value}, ${f}>;
    var values: array<${r.type.value}, ${o}>;
    let input_channel = output_channel;
    // Use constant instead of uniform can give better performance for w's height/width.
    for (var w_height: u32 = 0u; w_height < ${l[0]}; w_height++) {
      let x_height = x_corner.x + i32(w_height);
      if (x_height >= 0 && u32(x_height) < uniforms.x_shape[1]) {
        for (var i = 0; i < ${f}; i++) {
          let x_width = x_corner.y + i;
          if (x_width >= 0 && u32(x_width) < uniforms.x_shape[2]) {
            x_vals[i] = ${p.get(`batch`,`u32(x_height)`,`u32(x_width)`,`input_channel`)};
          } else {
            x_vals[i] = ${p.type.value}(0);
          }
        }
        for (var w_width: u32 = 0u; w_width < ${l[1]}; w_width++) {
          let w_val = ${m.get(`w_height`,`w_width`,`0`,`output_channel`)};
          for (var i = 0u; i < ${o}u; i++) {
            values[i] = fma(x_vals[i * u32(uniforms.strides[1]) + w_width], w_val, values[i]);
          }
        }
      }
    }

    for (var i = 0u; i < ${o}u; i++) {
      var value = values[i];
      ${g}
      ${d}
      ${r.set(`batch`,`row`,`col + i`,`output_channel`,`value`)};
    }
  }`}}}}),xo,So,Co,wo,To,Eo,Do,Oo,ko,Ao=x(()=>{V(),so(),_o(),io(),bo(),Ha(),Xa(),ir(),xo=(e,t,n,r,i,a)=>{let o=e[0],s=e.slice(a?1:2,a?3:4),c=s.length,l=t[0],u=t.slice(2).map((e,t)=>e+(e-1)*(n[t]-1)),d=s.map((e,t)=>e+r[t]+r[t+c]).map((e,t)=>Math.floor((e-u[t]+i[t])/i[t]));return d.splice(0,0,o),d.splice(a?3:1,0,l),d},So=[2,3,1,0],Co=(e,t)=>{if(!e||e.length!==2&&e.length!==3)throw Error(`Conv requires 2 or 3 inputs`);if(e[0].dims.length>5)throw Error(`greater than 5D is not supported`);if(e[0].dims.length!==e[1].dims.length)throw Error(`filter does not have same dimension as input`);if(e[0].dims[t.format===`NHWC`?e[0].dims.length-1:1]!==e[1].dims[1]*t.group)throw Error(`FILTER_IN_CHANNEL should be equal to DATA_CHANNEL`);if(e.length===3&&(e[2].dims.length!==1||e[1].dims[0]!==e[2].dims[0]))throw Error(`invalid bias`);let n=e[0].dims.length-2;if(t.dilations.length!==n)throw Error(`dilations should be ${n}D`);if(t.strides.length!==n)throw Error(`strides should be ${n}D`);if(t.pads.length!==n*2)throw Error(`pads should be ${n*2}D`);if(t.kernelShape.length!==0&&t.kernelShape.length!==e[1].dims.length-2)throw Error(`invalid kernel shape`)},wo=(e,t)=>{let n=e.kernelShape.slice();n.length<t[1].dims.length-2&&n.push(...Array(t[1].dims.length-2-n.length).fill(0));for(let e=2;e<t[1].dims.length;++e)n[e-2]===0&&(n[e-2]=t[1].dims[e]);let r=e.pads.slice();$t.adjustPadsBasedOnAutoPad(t[0].dims,e.strides,e.dilations,n,r,e.format===`NHWC`,e.autoPad);let i=Object.assign({},e);return Object.assign(i,{kernelShape:n,pads:r}),i},To=e=>{let t=Va(e),n=e.format;return{autoPad:[`NOTSET`,`VALID`,`SAME_UPPER`,`SAME_LOWER`][e.auto_pad],format:n,dilations:e.dilations,group:e.group,kernelShape:e.kernel_shape,pads:e.pads,strides:e.strides,wIsConst:e.w_is_const(),...t,cacheKey:`${e.format};${t.activation};`}},Eo=(e,t,n,r)=>{let i=n.format===`NHWC`,a=xo(t[0].dims,t[1].dims,n.dilations,n.pads,n.strides,i);if(n.group!==1){let o=[t[0]];if(i){let r=e.kernelCustomData.wT??e.compute(tr(t[1],So),{inputs:[1],outputs:[n.wIsConst?-2:-1]})[0];n.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=r),o.push(r)}else o.push(t[1]);t.length===3&&o.push(t[2]),!e.adapterInfo.isArchitecture(`ampere`)&&i&&t[1].dims[0]===n.group&&t[1].dims[1]===1&&n.dilations[0]===1&&n.dilations[1]===1?e.compute(yo(o,n,a,r),{inputs:o}):e.compute(vo(o,n,a,r),{inputs:o});return}let o=t.length===3,s=t[0].dims[i?1:2],c=t[0].dims[i?2:3],l=t[0].dims[i?3:1],u=t[1].dims[2],d=t[1].dims[3],f=a[i?1:2],p=a[i?2:3],m=a[i?3:1],h=i&&u===s&&d===c&&n.pads[0]===0&&n.pads[1]===0;if(h||u===1&&d===1&&n.dilations[0]===1&&n.dilations[1]===1&&n.strides[0]===1&&n.strides[1]===1&&n.pads[0]===0&&n.pads[1]===0){let u=a[0],d,g,_,v=[];if(i){let r=e.kernelCustomData.wT??e.compute(tr(t[1],So),{inputs:[1],outputs:[n.wIsConst?-2:-1]})[0];if(n.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=r),h){let e=s*c*l;d=t[0].reshape([1,u,e]),g=r.reshape([1,e,m]),_=[1,u,m]}else d=t[0].reshape([u,s*c,l]),g=r.reshape([1,l,m]),_=[u,f*p,m];v.push(d),v.push(g)}else d=t[0].reshape([u,l,s*c]),g=t[1].reshape([1,m,l]),_=[u,m,f*p],v.push(g),v.push(d);o&&v.push(t[2]);let y=_[2],b=v[0].dims[v[0].dims.length-1];y<8&&b<8?e.compute(Ya(v,n,a,_,i,r),{inputs:v}):e.compute(ro(v,n,a,_,i,r),{inputs:v});return}let g=e.kernelCustomData.wT??e.compute(tr(t[1],So),{inputs:[1],outputs:[n.wIsConst?-2:-1]})[0];n.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=g);let _=[t[0],g];o&&_.push(t[2]);let v=i?f*p:m,y=i?m:f*p,b=u*d*l;e.compute(oo(_,n,a,v,y,b,o,!0,r),{inputs:_})},Do=(e,t)=>{let n=t.format===`NHWC`,r=[e.inputs[0].reshape(n?[e.inputs[0].dims[0],1,e.inputs[0].dims[1],e.inputs[0].dims[2]]:[e.inputs[0].dims[0],e.inputs[0].dims[1],1,e.inputs[0].dims[2]]),e.inputs[1].reshape([e.inputs[1].dims[0],e.inputs[1].dims[1],1,e.inputs[1].dims[2]])];e.inputs.length===3&&r.push(e.inputs[2]);let i=[0,t.pads[0],0,t.pads[1]],a=[1].concat(t.strides),o=[1].concat(t.dilations),s=[1].concat(t.kernelShape),c=wo({...t,pads:i,strides:a,dilations:o,kernelShape:s},r);Eo(e,r,c,e=>n?[e[0],e[2],e[3]]:[e[0],e[1],e[3]])},Oo=(e,t,n)=>{let r=n.format===`NHWC`?`channelsLast`:`channelsFirst`,i=wo(n,t),a=n.autoPad===`NOTSET`?n.pads:n.autoPad,o=ho(t[0].dims,t[1].dims,n.strides,n.dilations,a,!1,r);e.compute(go(t,i,o.outShape,[o.filterDepth,o.filterHeight,o.filterWidth],[o.padInfo.front,o.padInfo.top,o.padInfo.left],r))},ko=(e,t)=>{if(Co(e.inputs,t),e.inputs[0].dims.length===3)Do(e,t);else if(e.inputs[0].dims.length===5)Oo(e,e.inputs,t);else{let n=wo(t,e.inputs);Eo(e,e.inputs,n)}}}),jo,Mo=x(()=>{z(),Xt(),V(),K(),jo=(e,t,n)=>{let r=e.length>2,i=t.outputShape,a=t.format===`NHWC`,o=t.group,s=e[1].dims,c=s[2]/o,l=s[3],u=a?Bn(c):1,d=a&&l===1&&c>=4,f=d?Math.floor(c/4)*4:Math.floor(c/u)*u,p=c-f,m=a?Bn(l):1,h=a?l===1?u:m:1,g=B.size(i)/m,_=[Math.ceil(g/64),1,1];Yt(`verbose`,()=>`[conv2d_backprop_webgpu] dispatch = ${_}`);let v=[`rank`,`rank`],y=[t.strides[0],t.strides[1]],b=[t.kernelShape[a?1:2],t.kernelShape[a?2:3]],x=[t.dilations[0],t.dilations[1]],S=[b[0]+(t.dilations[0]<=1?0:(t.kernelShape[a?1:2]-1)*(t.dilations[0]-1)),b[1]+(t.dilations[1]<=1?0:(t.kernelShape[a?2:3]-1)*(t.dilations[1]-1))],C=[S[0]-1-Math.floor((t.pads[0]+t.pads[2])/2),S[1]-1-Math.floor((t.pads[1]+t.pads[3])/2)],w=[{type:12,data:g},{type:12,data:y},{type:12,data:b},{type:12,data:x},{type:12,data:S},{type:6,data:C},{type:12,data:f},{type:12,data:c},{type:12,data:l},...H(e[0].dims,e[1].dims)];return r&&(w.push(...H(e[2].dims)),v.push(`rank`)),w.push(...H(i)),{name:`ConvTranspose2D`,shaderCache:{hint:`${t.cacheKey};${u}${h}${m}${d}${p}`,inputDependencies:v},getRunData:()=>({dispatchGroup:{x:_[0],y:_[1],z:_[2]},outputs:[{dims:n?n(i):i,dataType:e[0].dataType}],programUniforms:w}),getShaderSource:t=>{let n=[{name:`output_size`,type:`u32`},{name:`strides`,type:`u32`,length:y.length},{name:`filter_dims`,type:`u32`,length:b.length},{name:`dilations`,type:`u32`,length:b.length},{name:`effective_filter_dims`,type:`u32`,length:S.length},{name:`pads`,type:`i32`,length:C.length},{name:`input_channels_per_group_int`,type:`u32`},{name:`input_channels_per_group`,type:`u32`},{name:`output_channels_per_group`,type:`u32`}],o=Rn(e[0].dataType),s=a?1:2,c=a?2:3,l=a?3:1,f=W(`W`,e[1].dataType,e[1].dims.length,h),g=W(`Dy`,e[0].dataType,e[0].dims.length,u),_=[g,f];r&&_.push(W(`bias`,e[2].dataType,[i[l]].length,m));let v=G(`result`,e[0].dataType,i.length,m),x=`
            let outputIndices = ${v.offsetToIndices(`global_idx * ${m}`)};
            let batch = ${v.indicesGet(`outputIndices`,0)};
            let d1 = ${v.indicesGet(`outputIndices`,l)};
            let r = ${v.indicesGet(`outputIndices`,s)};
            let c = ${v.indicesGet(`outputIndices`,c)};
            let dyCorner = vec2<i32>(i32(r), i32(c)) - uniforms.pads;
            let dyRCorner = dyCorner.x;
            let dyCCorner = dyCorner.y;
            let groupId = d1 / uniforms.output_channels_per_group;
            let wOutChannel = d1 - groupId * uniforms.output_channels_per_group;
            // Convolve dy(?, ?, d2) with w(:, :, d1, d2) to compute dx(xR, xC, d1).
            // ? = to be determined. : = across all values in that axis.
            var dotProd = ${v.type.value}(0.0);
            var wR: u32 = 0;
            if (uniforms.dilations.x == 1) {
              // Minimum wR >= 0 that satisfies (dyRCorner + wR) % (uniforms.strides.x) == 0
              wR = u32(((dyRCorner + i32(uniforms.strides.x) - 1) / i32(uniforms.strides.x)) * i32(uniforms.strides.x) - dyRCorner);
            }
            for (; wR < uniforms.effective_filter_dims.x; wR = wR + 1) {
              if (wR % uniforms.dilations.x != 0) {
                continue;
              }
              let dyR = (${o}(dyRCorner) + ${o}(wR)) / ${o}(uniforms.strides[0]);
              let wRPerm = uniforms.filter_dims.x - 1 - wR / uniforms.dilations.x;
              if (dyR < 0.0 || dyR >= ${o}(uniforms.Dy_shape[${s}]) || fract(dyR) > 0.0 ||
                  wRPerm < 0) {
                continue;
              }
              let idyR: u32 = u32(dyR);
              var wC: u32 = 0;
              if (uniforms.dilations.y == 1) {
                // Minimum wC >= 0 that satisfies (dyCCorner + wC) % (uniforms.strides.y) == 0
                wC = u32(((dyCCorner + i32(uniforms.strides.y) - 1) / i32(uniforms.strides.y)) * i32(uniforms.strides.y) - dyCCorner);
              }
              for (; wC < uniforms.effective_filter_dims.y; wC = wC + 1) {
                if (wC % uniforms.dilations.y != 0) {
                  continue;
                }
                let dyC = (${o}(dyCCorner) + ${o}(wC)) / ${o}(uniforms.strides.y);
                let wCPerm = uniforms.filter_dims.y - 1 - wC / uniforms.dilations.y;
                if (dyC < 0.0 || dyC >= ${o}(uniforms.Dy_shape[${c}]) ||
                    fract(dyC) > 0.0 || wCPerm < 0) {
                  continue;
                }
                let idyC: u32 = u32(dyC);
                var inputChannel = groupId * uniforms.input_channels_per_group;
                ${d?`
                var x_offset = ${g.indicesToOffset(`${g.type.indices}(batch, idyR, idyC, inputChannel)`)} / ${u};
                var w_offset = ${f.indicesToOffset(`${f.type.indices}(wRPerm, wCPerm, inputChannel, wOutChannel)`)} / ${h};
                  `:``}
                for (var d2: u32 = 0; d2 < uniforms.input_channels_per_group_int; d2 = d2 + ${d?4:u}) {
                  ${(()=>{let e=``;if(d)u===4?e+=`
        let xValue = ${g.getByOffset(`x_offset`)};
        let wValue = ${f.getByOffset(`w_offset`)};
        dotProd = dotProd + dot(xValue, wValue);
        x_offset += 1u;
        w_offset += 1u;`:u===2?e+=`
          dotProd = dotProd + dot(vec4<${o}>(${g.getByOffset(`x_offset`)}, ${g.getByOffset(`x_offset + 1u`)}), vec4<${o}>(${f.getByOffset(`w_offset`)}, ${f.getByOffset(`w_offset + 1u`)}));
          x_offset += 2u;
          w_offset += 2u;`:u===1&&(e+=`
          dotProd = dotProd + dot(vec4<${o}>(${g.getByOffset(`x_offset`)}, ${g.getByOffset(`x_offset + 1u`)}, ${g.getByOffset(`x_offset + 2u`)}, ${g.getByOffset(`x_offset + 3u`)}), vec4<${o}>(${f.getByOffset(`w_offset`)}, ${f.getByOffset(`w_offset + 1u`)}, ${f.getByOffset(`w_offset + 2u`)}, ${f.getByOffset(`w_offset + 3u`)}));
          x_offset += 4u;
          w_offset += 4u;`);else if(e+=`
                  let xValue = ${a?g.getByOffset(`${g.indicesToOffset(`${g.type.indices}(batch, idyR, idyC, inputChannel)`)} / ${u}`):g.get(`batch`,`inputChannel`,`idyR`,`idyC`)};
        `,u===1)e+=`
          let w_offset = ${f.indicesToOffset(`${f.type.indices}(u32(wRPerm), u32(wCPerm), inputChannel, wOutChannel)`)};
          let wValue = ${f.getByOffset(`w_offset / ${h}`)};
          dotProd = dotProd + xValue * wValue;`;else for(let t=0;t<u;t++)e+=`
            let wValue${t} = ${f.getByOffset(`${f.indicesToOffset(`${f.type.indices}(u32(wRPerm), u32(wCPerm), inputChannel + ${t}, wOutChannel)`)} / ${h}`)};
            dotProd = dotProd + xValue[${t}] * wValue${t};`;return e})()}
                  inputChannel = inputChannel + ${d?4:u};
                }
                ${(()=>{if(p===0)return``;if(!d)throw Error(`packInputAs4 ${d} is not true.`);let e=``;if(u===1){e+=`dotProd = dotProd`;for(let t=0;t<p;t++)e+=`
            + ${g.getByOffset(`x_offset + ${t}`)} * ${f.getByOffset(`w_offset + ${t}`)}`;e+=`;`}else if(u===2){if(p!==2)throw Error(`Invalid inputChannelsRemainder ${p}.`);e+=`
          let xValue = ${g.getByOffset(`x_offset`)};
          let wValue = ${f.getByOffset(`w_offset`)};
          dotProd = dotProd + dot(xValue, wValue);`}return e})()}
                wC = wC + uniforms.strides.y - 1;
              }
              wR = wR + uniforms.strides[0] - 1;
            }
            let value = dotProd${r?` + bias[d1 / ${m}]`:``};
            ${v.setByOffset(`global_idx`,`value`)};
          `;return`
    ${t.registerUniforms(n).declareVariables(..._,v)}
      ${t.mainStart()}
      ${t.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.output_size`)};
    ${x}}`}}}}),No,Po,Fo,Io,Lo,Ro,zo,Bo,Vo,Ho=x(()=>{Mo(),Ha(),ir(),No=(e,t,n,r,i,a)=>(e-1)*t+n+(r-1)*i+1-a,Po=(e,t,n,r,i)=>{let a=Math.floor(e/2);t===`SAME_UPPER`?(n[r]=a,n[i]=e-a):t===`SAME_LOWER`&&(n[r]=e-a,n[i]=a)},Fo=(e,t,n,r,i,a,o,s,c,l)=>{let u=e.length-2,d=l.length===0;c.length<u&&c.push(...Array(u-c.length).fill(0));let f=e[0],p=t[s?3:1]*i;for(let i=0,f=e.length-u-+!!s;i<u;++i,++f){let s=e[f],p=d?s*o[i]:l[i],m=No(s,o[i],a[i],t[f],n[i],p);Po(m,r,a,i,i+u),d&&l.push(o[i]*(s-1)+c[i]+(t[f]-1)*n[i]+1-a[i]-a[i+u])}l.splice(0,0,f),l.splice(s?3:1,0,p)},Io=(e,t)=>{let n=e.kernelShape.slice();if(e.kernelShape.length===0||e.kernelShape.reduce((e,t)=>e*t,1)===0){n.length=0;for(let e=2;e<t[1].dims.length;++e)n.push(t[1].dims[e])}let r=e.format===`NHWC`;n.splice(0,0,t[1].dims[0]),n.splice(r?3:1,0,t[1].dims[1]);let i=e.pads.slice(),a=e.outputShape.slice(),o=e.outputPadding.slice(),s=t[0].dims,c=e.dilations.slice();if(c.reduce((e,t)=>e+t,0)===0){let e=t[0].dims.length-2;c=Array(e).fill(1)}let l=e.strides.slice();if(l.reduce((e,t)=>e+t,0)===0){let e=t[0].dims.length-2;l=Array(e).fill(1)}Fo(s,n,c,e.autoPad,e.group,i,l,r,o,a);let u=Object.assign({},e);return Object.assign(u,{kernelShape:n,pads:i,outputPadding:o,outputShape:a,dilations:c,strides:l}),u},Lo=e=>{let t=Va(e),n=e.format,r=[`NOTSET`,`VALID`,`SAME_UPPER`,`SAME_LOWER`][typeof e.autoPad>`u`?0:e.autoPad],i=e.dilations,a=e.group??1,o=e.kernelShape,s=e.pads,c=e.strides,l=e.wIsConst();return{autoPad:r,format:n,dilations:i,group:a,kernelShape:o,outputPadding:e.outputPadding,outputShape:e.outputShape,pads:s,strides:c,wIsConst:l,...t,cacheKey:`${e.format};${t.activation};`}},Ro=(e,t)=>{if(!e||e.length!==2&&e.length!==3)throw Error(`Conv requires 2 or 3 inputs`);if(e[0].dims.length!==4&&e[0].dims.length!==3)throw Error(`currently only support 2-dimensional conv`);if(e[0].dims.length!==e[1].dims.length)throw Error(`filter does not have same dimension as input`);if(e[0].dims[t.format===`NHWC`?e[0].dims.length-1:1]!==e[1].dims[0])throw Error(`FILTER_IN_CHANNEL should be equal to DATA_CHANNEL`);let n=e[1].dims[1]*t.group;if(e.length===3&&(e[2].dims.length!==1||e[2].dims[0]!==n))throw Error(`invalid bias`);let r=e[0].dims.length-2;if(t.dilations.reduce((e,t)=>e+t,0)>0&&t.dilations.length!==r)throw Error(`dilations should be ${r}D`);if(t.strides.reduce((e,t)=>e+t,0)>0&&t.strides.length!==r)throw Error(`strides should be ${r}D`);if(t.pads.reduce((e,t)=>e+t,0)>0&&t.pads.length!==r*2)throw Error(`pads should be ${r*2}D`);if(t.outputPadding.length!==r&&t.outputPadding.length!==0)throw Error(`output_padding should be ${r}D`);if(t.kernelShape.reduce((e,t)=>e+t,0)>0&&t.kernelShape.length!==0&&t.kernelShape.length!==e[1].dims.length-2)throw Error(`invalid kernel shape`);if(t.outputShape.length!==0&&t.outputShape.length!==e[0].dims.length-2)throw Error(`invalid output shape`)},zo=(e,t,n,r)=>{let i=e.kernelCustomData.wT??e.compute(tr(t[1],[2,3,0,1]),{inputs:[1],outputs:[n.wIsConst?-2:-1]})[0];n.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=i);let a=[t[0],i];t.length===3&&a.push(t[2]),e.compute(jo(a,n,r),{inputs:a})},Bo=(e,t)=>{let n=t.format===`NHWC`,r=[e.inputs[0].reshape(n?[e.inputs[0].dims[0],1,e.inputs[0].dims[1],e.inputs[0].dims[2]]:[e.inputs[0].dims[0],e.inputs[0].dims[1],1,e.inputs[0].dims[2]]),e.inputs[1].reshape([e.inputs[1].dims[0],e.inputs[1].dims[1],1,e.inputs[1].dims[2]])];e.inputs.length===3&&r.push(e.inputs[2]);let i=t.kernelShape;(i.length===0||i[0]===0)&&(i=[e.inputs[1].dims[2]]);let a=t.dilations;(a.length===0||a[0]===0)&&(a=[1]);let o=t.strides;(o.length===0||o[0]===0)&&(o=[1]);let s=t.pads;s.length===0&&(s=[0,0]),s=[0,s[0],0,s[1]],o=[1].concat(o),a=[1].concat(a),i=[1].concat(i);let c=t.outputPadding;c=[0].concat(c);let l=Io({...t,pads:s,strides:o,dilations:a,kernelShape:i,outputPadding:c},r);zo(e,r,l,e=>n?[e[0],e[2],e[3]]:[e[0],e[1],e[3]])},Vo=(e,t)=>{if(Ro(e.inputs,t),e.inputs[0].dims.length===3)Bo(e,t);else{let n=Io(t,e.inputs);zo(e,e.inputs,n)}}}),Uo,Wo,Go,Ko=x(()=>{z(),V(),Fn(),K(),Uo=(e,t,n,r)=>{let i=B.size(t),a=t.length,o=W(`input`,e,a),s=G(`output`,e,a),c=n.dataType===6?n.getInt32Array()[0]:Number(n.getBigInt64Array()[0]),l=B.normalizeAxis(c,a);return{name:`CumSum`,shaderCache:{hint:r.cacheKey,inputDependencies:[`rank`]},getRunData:()=>({outputs:[{dims:t,dataType:e}],dispatchGroup:{x:Math.ceil(i/64)},programUniforms:[{type:12,data:i},{type:12,data:l},...H(t,t)]}),getShaderSource:e=>{let t=` i32(${o.indicesGet(`inputIndices`,`uniforms.axis`)}) `,n=U(`uniforms.input_shape`,`uniforms.axis`,a),i=r.reverse?t+(r.exclusive?` + 1`:``):`0`,c=r.reverse?n:t+(r.exclusive?``:` + 1`);return`
                ${e.registerUniform(`outputSize`,`u32`).registerUniform(`axis`,`u32`).declareVariables(o,s)}
                ${e.mainStart()}
                  ${e.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.outputSize`)}
                  var inputIndices = ${s.offsetToIndices(`global_idx`)};
                  var sum = ${s.type.value}(0);
                  let first : i32 = ${i};
                  let last : i32 = ${c};
                  for (var i : i32 = first; i < last; i++) {
                    ${o.indicesSet(`inputIndices`,`uniforms.axis`,`u32(i)`)};
                    sum = sum + ${o.getByIndices(`inputIndices`)};
                  }
                  ${s.setByOffset(`global_idx`,`sum`)};
                }`}}},Wo=(e,t)=>{let n=e.inputs[0].dims,r=e.inputs[0].dataType,i=e.inputs[1];e.compute(Uo(r,n,i,t),{inputs:[0]})},Go=e=>{let t=e.exclusive===1,n=e.reverse===1;return Pn({exclusive:t,reverse:n})}}),qo,Jo,Yo,Xo,Zo,Qo=x(()=>{z(),V(),Fn(),K(),qo=e=>{if(!e||e.length!==1)throw Error(`DepthToSpace requires 1 input.`);if(e[0].dims.length!==4)throw Error(`DepthToSpace requires 4D input.`)},Jo=(e,t,n,r)=>{let i=[];i.push(`fn perm(i: ${r.type.indices}) -> ${n.type.indices} {
    var a: ${n.type.indices};`);for(let r=0;r<t;++r)i.push(n.indicesSet(`a`,e[r],`i[${r}]`));return i.push(`return a;}`),i.join(`
`)},Yo=(e,t)=>{let n,r,i,a,o,s,c=t.format===`NHWC`,l=t.blocksize,u=t.mode===`DCR`;c?([n,r,i,a]=e.dims,o=u?[n,r,i,l,l,a/l**2]:[n,r,i,a/l**2,l,l],s=u?[0,1,3,2,4,5]:[0,1,4,2,5,3]):([n,r,i,a]=[e.dims[0],e.dims[2],e.dims[3],e.dims[1]],o=u?[n,l,l,a/l**2,r,i]:[n,a/l**2,l,l,r,i],s=u?[0,3,4,1,5,2]:[0,1,4,2,5,3]);let d=e.reshape(o),f=d.dims.length,p=e.dataType,m=W(`a`,p,f),h=G(`output`,p,f);return{name:`DepthToSpace`,shaderCache:{hint:`${e.dims};${t.blocksize};${t.mode}`,inputDependencies:[`rank`]},getRunData:e=>{let t=c?[n,r*l,i*l,a/l**2]:[n,a/l**2,r*l,i*l],o=B.size(t),u=d.dims,f=B.sortBasedOnPerm(u,s);return{outputs:[{dims:t,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(o/64)},programUniforms:[{type:12,data:o},...H(u,f)]}},getShaderSource:e=>`
  ${e.registerUniform(`output_size`,`u32`).declareVariables(m,h)}

  ${Jo(s,f,m,h)}

  ${e.mainStart()}
    ${e.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.output_size`)}

    let indices = ${h.offsetToIndices(`global_idx`)};
    let aIndices = perm(indices);

    ${h.setByOffset(`global_idx`,m.getByIndices(`aIndices`))}
  }`}},Xo=(e,t)=>{qo(e.inputs),e.compute(Yo(e.inputs[0],t))},Zo=e=>Pn({blocksize:e.blocksize,mode:e.mode,format:e.format})}),$o,es,ts,ns,rs,is,as,os,ss,cs,ls,us,ds,fs,ps,ms,hs,gs=x(()=>{z(),V(),Fn(),K(),$o=256,es=512,ts=2*Math.PI,ns=e=>{let t=[],n=e;for(let e of[4,2,3,5])for(;n%e===0;)t.push(e),n/=e;return n===1?t:void 0},rs=e=>{let t=e.toPrecision(9);return/[.eE]/.test(t)?t:`${t}.0`},is=(e,t,n,r,i)=>{let a=n/e,o=es-r,s=e=>`smem[${o}u + base + ${e*t}u]`,c=`  for (var t = local_idx; t < ${a}u; t += ${$o}u) {
`;c+=`    let twiddleIndex = t % ${t}u;
    let angleUnit = f32(twiddleIndex);
`,c+=`    var leg: array<vec2<f32>, 5>;
`;for(let n=0;n<e;n++){let o=`${r}u + t + ${n*a}u`;if(n===0)c+=`    leg[0] = smem[${o}];
`;else{let r=i*ts*n/(e*t);c+=`    { let a = ${rs(r)} * angleUnit; leg[${n}] = cmul(smem[${o}], vec2<f32>(cos(a), sin(a))); }
`}}if(c+=`    let base = (t / ${t}u) * ${t*e}u + twiddleIndex;
`,e===2)c+=`    ${s(0)} = leg[0] + leg[1];
    ${s(1)} = leg[0] - leg[1];
`;else if(e===4){let e=i<0?`vec2<f32>(oddDiff.y, -oddDiff.x)`:`vec2<f32>(-oddDiff.y, oddDiff.x)`;c+=`    let evenSum = leg[0] + leg[2]; let evenDiff = leg[0] - leg[2];
`,c+=`    let oddSum = leg[1] + leg[3]; let oddDiff = leg[1] - leg[3];
`,c+=`    let oddRot = ${e};
`,c+=`    ${s(0)} = evenSum + oddSum;
    ${s(1)} = evenDiff + oddRot;
`,c+=`    ${s(2)} = evenSum - oddSum;
    ${s(3)} = evenDiff - oddRot;
`}else for(let t=0;t<e;t++){let n=[`leg[0]`];for(let r=1;r<e;r++){let a=i*ts*(r*t)/e,o=rs(Math.cos(a)),s=rs(Math.sin(a));n.push(`vec2<f32>(leg[${r}].x*${o} - leg[${r}].y*${s}, leg[${r}].x*${s} + leg[${r}].y*${o})`)}c+=`    ${s(t)} = ${n.join(` + `)};
`}return`${c}  }
  workgroupBarrier();
`},as=(e,t,n)=>{let r=``,i=1,a=0;for(let o of e)r+=is(o,i,t,a,n),i*=o,a=es-a;return{code:r,resultOffset:a}},os=(e,t,n,r,i)=>{let a=e.dims,o=a.length,s=a[o-1],c=a[t],l=n&&r?(c-1)*2:c;i!==void 0&&(l=i);let u=n&&r?1:2,d=r&&!n?Math.floor(l/2)+1:l,f=a.slice();f[t]=d,f[o-1]=u;let p=1;for(let e=t+1;e<o-1;e++)p*=a[e];let m=B.size(a)/s/c;return{dataType:e.dataType,outputDims:f,length:l,signalLength:c,inner:p,batch:m,inputComponents:s,outputComponents:u,outputLength:d,inverse:n,onesided:r}},ss=(e,t)=>[t,e.length,e.inputComponents,e.outputComponents,e.inverse,e.onesided].join(`;`),cs=e=>[{type:12,data:e.batch},{type:12,data:e.signalLength},{type:12,data:e.inner},{type:12,data:e.outputLength}],ls=(e,t,n)=>e.registerUniform(`batch`,`u32`).registerUniform(`signalLength`,`u32`).registerUniform(`inner`,`u32`).registerUniform(`outputLength`,`u32`).declareVariables(t,n),us=e=>{let{dataType:t,length:n,inputComponents:r,outputComponents:i,inverse:a,onesided:o}=e,s=zn(t),c=a?1:-1,l=a?1/n:1,u=ns(n);return{name:`DFT`,shaderCache:{hint:ss(e,`fft`),inputDependencies:[`type`]},getShaderSource:e=>{let d=W(`x`,t,[1]),f=G(`y`,t,[1]),p=e=>{let t=`inBase + (${e}) * uniforms.inner * ${r}u`;return`vec2<f32>(${`f32(${d.getByOffset(t)})`}, ${r===2?`f32(${d.getByOffset(`${t} + 1u`)})`:`0.0`})`},m;if(a&&o){let e=Math.floor(n/2)+1,t=n%2==0?`select(provided, provided - 1u, provided == ${e}u)`:`provided`;m=`
    let provided = min(uniforms.signalLength, ${e}u);
    for (var i = local_idx; i < ${n}u; i += ${$o}u) {
      if (i < provided) { smem[i] = ${p(`i`)}; } else { smem[i] = vec2<f32>(0.0); }
    }
    workgroupBarrier();
    for (var k = local_idx + 1u; k < ${t}; k += ${$o}u) {
      let h = smem[k];
      smem[${n}u - k] = vec2<f32>(h.x, -h.y);
    }
    workgroupBarrier();`}else m=`
    let loadCount = min(uniforms.signalLength, ${n}u);
    for (var i = local_idx; i < ${n}u; i += ${$o}u) {
      if (i < loadCount) { smem[i] = ${p(`i`)}; } else { smem[i] = vec2<f32>(0.0); }
    }
    workgroupBarrier();`;let{code:h,resultOffset:g}=as(u,n,c),_=l===1?`smem[${g}u + i]`:`smem[${g}u + i] * ${rs(l)}`,v=i===2?f.setByOffset(`off + 1u`,`${s}(v.y)`):``;return`
  ${ls(e,d,f)}
  var<workgroup> smem: array<vec2<f32>, ${2*es}>;
  fn cmul(a: vec2<f32>, b: vec2<f32>) -> vec2<f32> {
    return vec2<f32>(a.x * b.x - a.y * b.y, a.x * b.y + a.y * b.x);
  }
  ${e.mainStart($o)}
    let row = workgroup_index;
    if (row >= uniforms.batch) { return; }
    let outer = row / uniforms.inner;
    let within = row % uniforms.inner;
    let inBase = (outer * uniforms.signalLength * uniforms.inner + within) * ${r}u;
    let outBase = (outer * uniforms.outputLength * uniforms.inner + within) * ${i}u;
    ${m}
${h}    for (var i = local_idx; i < uniforms.outputLength; i += ${$o}u) {
      let v = ${_};
      let off = outBase + i * uniforms.inner * ${i}u;
      ${f.setByOffset(`off`,`${s}(v.x)`)}
      ${v}
    }
  }`},getRunData:()=>({outputs:[{dims:e.outputDims,dataType:t}],programUniforms:cs(e),dispatchGroup:{x:e.batch}})}},ds=e=>{let{dataType:t,length:n,inputComponents:r,outputComponents:i,inverse:a,onesided:o}=e,s=zn(t),c=a?1:-1,l=a?1/n:1;return{name:`DFT`,shaderCache:{hint:ss(e,`direct`),inputDependencies:[`type`]},getShaderSource:e=>{let u=W(`x`,t,[1]),d=G(`y`,t,[1]),f=e=>{let t=`inBase + (${e}) * uniforms.inner * ${r}u`;return`vec2<f32>(${`f32(${u.getByOffset(t)})`}, ${r===2?`f32(${u.getByOffset(`${t} + 1u`)})`:`0.0`})`},p=a&&o?`fn spectrum(inBase: u32, k: u32) -> vec2<f32> {
    let provided = min(uniforms.signalLength, ${Math.floor(n/2)+1}u);
    if (k < provided) { return ${f(`k`)}; }
    let m = ${n}u - k;
    if (m < provided) {
      let h = ${f(`m`)};
      return vec2<f32>(h.x, -h.y);
    }
    return vec2<f32>(0.0, 0.0);
  }`:`fn spectrum(inBase: u32, n: u32) -> vec2<f32> {
    if (n < uniforms.signalLength) { return ${f(`n`)}; }
    return vec2<f32>(0.0, 0.0);
  }`,m=`
      let angle = ${rs(c*ts)} * f32(knMod) / ${rs(n)};
      acc += cmul(spectrum(inBase, n), vec2<f32>(cos(angle), sin(angle)));
      knMod += k;
      if (knMod >= ${n}u) { knMod -= ${n}u; }`,h=i===2?d.setByOffset(`off + 1u`,`${s}(v.y)`):``,g=l===1?`acc`:`acc * ${rs(l)}`;return`
  ${ls(e,u,d)}
  fn cmul(a: vec2<f32>, b: vec2<f32>) -> vec2<f32> {
    return vec2<f32>(a.x * b.x - a.y * b.y, a.x * b.y + a.y * b.x);
  }
  ${p}
  ${e.mainStart($o)}
    let row = workgroup_index;
    if (row >= uniforms.batch) { return; }
    let outer = row / uniforms.inner;
    let within = row % uniforms.inner;
    let inBase = (outer * uniforms.signalLength * uniforms.inner + within) * ${r}u;
    let outBase = (outer * uniforms.outputLength * uniforms.inner + within) * ${i}u;
    for (var k = local_idx; k < uniforms.outputLength; k += ${$o}u) {
      var acc = vec2<f32>(0.0, 0.0);
      var knMod = 0u;
      for (var n = 0u; n < ${n}u; n++) {${m}
      }
      let v = ${g};
      let off = outBase + k * uniforms.inner * ${i}u;
      ${d.setByOffset(`off`,`${s}(v.x)`)}
      ${h}
    }
  }`},getRunData:()=>({outputs:[{dims:e.outputDims,dataType:t}],programUniforms:cs(e),dispatchGroup:{x:e.batch}})}},fs=e=>{if(!e||e.dataType===0)return;if(B.size(e.dims)!==1)throw Error(`DFT optional scalar inputs must have exactly 1 element.`);if(e.dataType===6)return e.getInt32Array()[0];let t=Number(e.getBigInt64Array()[0]);if(!Number.isSafeInteger(t))throw Error(`DFT optional scalar inputs are out of JavaScript safe integer range.`);return t},ps=e=>{if(!e||e.length<1)throw Error(`DFT requires at least 1 input.`);let t=e[0].dims;if(t.length<2)throw Error(`DFT input must have at least 2 dimensions.`);let n=t[t.length-1];if(n!==1&&n!==2)throw Error(`DFT input's innermost dimension must be 1 (real) or 2 (complex).`)},ms=(e,t)=>{ps(e.inputs);let n=e.inputs[0],r=n.dims.length,i=t.inverse!==0,a=t.onesided!==0,o=fs(e.inputs[1]);if(o!==void 0&&o<=0)throw Error(`dft_length must be greater than zero.`);let s=B.normalizeAxis(fs(e.inputs[2])??t.axis,r);if(s===r-1)throw Error(`DFT axis must refer to a signal dimension, not the innermost (real/imaginary) dimension.`);if(i&&a&&n.dims[r-1]!==2)throw Error(`Inverse one-sided DFT (IRFFT) requires complex-valued input (innermost dimension 2).`);let c=os(n,s,i,a,o);if(c.length<=0)throw Error(`Invalid DFT length: ${c.length}`);let l=c.length<=es&&ns(c.length)!==void 0?us(c):ds(c);e.compute(l,{inputs:[0]})},hs=e=>Pn({axis:e.axis??1,inverse:e.inverse??0,onesided:e.onesided??0})}),_s,vs,ys,bs,xs,Ss,Cs,ws,Ts,Es,Ds,Os=x(()=>{z(),V(),Fn(),K(),_s=`[a-zA-Z]|\\.\\.\\.`,vs=`(`+_s+`)+`,ys=`^`+vs+`$`,bs=`(`+vs+`,)*`+vs,xs=`^`+bs+`$`,Ss=class{constructor(e=-1){this.symbolToIndices=new Map,this.inputIndex=e}addSymbol(e,t){let n=this.symbolToIndices.get(e);n===void 0?n=[t]:n.push(t),this.symbolToIndices.set(e,n)}},Cs=class{constructor(e,t){this.equation=t,this.hasEllipsis=!1,this.symbolToInfo=new Map,this.lhs=[],this.outputDims=[];let[n,r]=t.includes(`->`)?t.split(`->`,2):[t,``];if(!n.match(RegExp(xs)))throw Error(`Invalid LHS term`);if(n.split(`,`).forEach((t,n)=>{let r=e[n].dims.slice();if(!t.match(RegExp(ys)))throw Error(`Invalid LHS term`);let i=this.processTerm(t,!0,r,n);this.lhs.push(i)}),r===``)r+=[...this.symbolToInfo.entries()].filter(([e,t])=>t.count===1||e===`...`).map(([e])=>e).join(``);else if(!r.match(RegExp(vs)))throw Error(`Invalid RHS`);r.match(RegExp(_s,`g`))?.forEach(e=>{if(e===`...`)this.outputDims=this.outputDims.concat(this.ellipsisDims);else{let t=this.symbolToInfo.get(e);if(t===void 0)throw Error(`Invalid RHS symbol`);this.outputDims.push(t.dimValue)}}),this.rhs=this.processTerm(r,!1,this.outputDims)}addSymbol(e,t,n){let r=this.symbolToInfo.get(e);if(r!==void 0){if(r.dimValue!==t&&r.count!==1)throw Error(`Dimension mismatch`);r.count++,r.inputIndices.push(n)}else r={count:1,dimValue:t,inputIndices:[n]};this.symbolToInfo.set(e,r)}processTerm(e,t,n,r=-1){let i=n.length,a=!1,o=[],s=0;if(!e.match(RegExp(ys))&&!t&&e!==``)throw Error(`Invalid LHS term`);let c=e.match(RegExp(_s,`g`)),l=new Ss(r);return c?.forEach((e,u)=>{if(e===`...`){if(a)throw Error(`Only one ellipsis is allowed per input term`);a=!0;let e=i-c.length+1;if(e<0)throw Error(`Ellipsis out of bounds`);if(o=n.slice(s,s+e),this.hasEllipsis){if(this.ellipsisDims.length!==o.length||this.ellipsisDims.toString()!==o.toString())throw Error(`Ellipsis dimensions mismatch`)}else if(t)this.hasEllipsis=!0,this.ellipsisDims=o;else throw Error(`Ellipsis must be specified in the LHS`);for(let e=0;e<o.length;e++){let t=String.fromCharCode(48+e);l.addSymbol(t,u+e),this.addSymbol(t,n[s++],r)}}else l.addSymbol(e,u+(this.hasEllipsis?this.ellipsisDims.length-1:0)),this.addSymbol(e,n[s++],r)}),l}},ws=e=>e+`_max`,Ts=(e,t,n,r)=>{let i=e.map(e=>e.length).map((e,n)=>W(`input${n}`,t,e)),a=B.size(r),o=G(`output`,t,r.length),s=[...n.symbolToInfo.keys()].filter(e=>!n.rhs.symbolToIndices.has(e));return{name:`Einsum`,shaderCache:{hint:n.equation,inputDependencies:e.map(()=>`rank`)},getRunData:()=>{let i=s.filter(e=>n.symbolToInfo.has(e)).map(e=>({type:12,data:n.symbolToInfo.get(e)?.dimValue||0}));i.push({type:12,data:a});let o=e.map((e,t)=>[...H(e)]).reduce((e,t)=>e.concat(t),i);return o.push(...H(r)),{outputs:[{dims:r,dataType:t}],dispatchGroup:{x:Math.ceil(a/64)},programUniforms:o}},getShaderSource:e=>{let t=[],r=[],a=[],c=[],l=[],u=n.symbolToInfo.size===n.rhs.symbolToIndices.size;n.symbolToInfo.forEach((e,s)=>{if(n.rhs.symbolToIndices.has(s)){let r=n.rhs.symbolToIndices.get(s)?.[0];r!==void 0&&n.lhs.forEach((n,a)=>{if(e.inputIndices.includes(a)){let e=n.symbolToIndices.get(s);if(e===void 0)throw Error(`Invalid symbol error`);e.forEach(e=>{t.push(`${i[a].indicesSet(`input${a}Indices`,e,o.indicesGet(`outputIndices`,r))}`)})}})}else n.lhs.forEach((t,n)=>{if(e.inputIndices.includes(n)){let e=t.symbolToIndices.get(s);if(e===void 0)throw Error(`Invalid symbol error`);e.forEach(e=>{r.push(`${i[n].indicesSet(`input${n}Indices`,e,`${s}`)}`)}),l.push(`prod *= ${i[n].getByIndices(`input${n}Indices`)};`)}}),a.push(`for(var ${s}: u32 = 0; ${s} < uniforms.${ws(s)}; ${s}++) {`),c.push(`}`)});let d=u?[...t,`let sum = ${i.map((e,t)=>e.getByIndices(`input${t}Indices`)).join(` * `)};`]:[...t,`var sum = 0.0;`,...a,...r,`var prod = 1.0;`,...l,`sum += prod;`,...c];return`
            ${e.registerUniforms(s.map(e=>({name:`${ws(e)}`,type:`u32`}))).registerUniform(`outputSize`,`u32`).declareVariables(...i,o)}

            ${e.mainStart()}
            ${e.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.outputSize`)}
            var outputIndices = ${o.offsetToIndices(`global_idx`)};
            ${i.map((e,t)=>`var input${t}Indices: ${i[t].type.indices};`).join(`
`)}
            ${d.join(`
`)};
            ${o.setByOffset(`global_idx`,`sum`)};
          }`}}},Es=(e,t)=>{let n=new Cs(e.inputs,t.equation),r=n.outputDims,i=e.inputs.map((e,t)=>e.dims);e.compute(Ts(i,e.inputs[0].dataType,n,r))},Ds=e=>{let t=e.equation.replace(/\s+/g,``);return Pn({equation:t})}}),ks,As,js,Ms,Ns,Ps=x(()=>{z(),V(),K(),ks=e=>{if(!e||e.length!==2)throw Error(`Expand requires 2 input.`);let t=e[0].dims,n=Array.from(e[1].getBigInt64Array(),Number),r=n.length<t.length?0:n.length-t.length,i=t.length<n.length?0:t.length-n.length;for(;r<n.length&&i<t.length;++r,++i)if(n[r]!==t[i]&&n[r]!==1&&t[i]!==1)throw Error(`Expand requires shape to be broadcastable to input`)},As=(e,t)=>{let n=e.length-t.length,r=[];for(let t=0;t<n;++t)r.push(e[t]);for(let i=0;i<t.length;++i)r.push(t[i]===1?e[i+n]:t[i]);return r},js=(e,t)=>e.length>t.length?As(e,t):As(t,e),Ms=e=>{let t=e[0].dims,n=Array.from(e[1].getBigInt64Array(),Number),r=js(t,n),i=e[0].dataType,a=i===9||B.size(t)===1,o=i===9||t.length>0&&t[t.length-1]%4==0?4:1,s=a||r.length>0&&r[r.length-1]%4==0?4:1,c=Math.ceil(B.size(r)/s),l=e=>{let n=W(`input`,i,t.length,o),a=G(`output`,i,r.length,s),c;if(i===9){let e=(e,t,r=``)=>`
          let outputIndices${t} = ${a.offsetToIndices(`outputOffset + ${t}u`)};
          let offset${t} = ${n.broadcastedIndicesToOffset(`outputIndices${t}`,a)};
          let index${t} = offset${t} / 4u;
          let component${t} = offset${t} % 4u;
          ${e}[${t}] = ${r}(${n.getByOffset(`index${t}`)}[component${t}]);
        `;c=`
        let outputOffset = global_idx * ${s};
        var data = vec4<u32>(0);
        ${e(`data`,0,`u32`)}
        ${e(`data`,1,`u32`)}
        ${e(`data`,2,`u32`)}
        ${e(`data`,3,`u32`)}
        ${a.setByOffset(`global_idx`,`data`)}
      }`}else c=`
        let outputIndices = ${a.offsetToIndices(`global_idx * ${s}`)};
        let inputOffset = ${n.broadcastedIndicesToOffset(`outputIndices`,a)};
        let data = ${a.type.value}(${n.getByOffset(`inputOffset / ${o}`)});
        ${a.setByOffset(`global_idx`,`data`)}
      }`;return`
    ${e.registerUniform(`vec_size`,`u32`).declareVariables(n,a)}
    ${e.mainStart()}
    ${e.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.vec_size`)}
    ${c}`},u=[{type:12,data:c},...H(t,r)];return{name:`Expand`,shaderCache:{hint:`${r.length};${o}${s}`,inputDependencies:[`rank`]},getShaderSource:l,getRunData:()=>({outputs:[{dims:r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(c/64)},programUniforms:u})}},Ns=e=>{ks(e.inputs),e.compute(Ms(e.inputs),{inputs:[0]})}}),Fs,Is,Ls=x(()=>{z(),V(),K(),fa(),Fs=e=>{let t=e[0].dataType,n=B.size(e[0].dims),r=B.size(e[1].dims),i=r%4==0;return{name:`FastGeluWithBias`,shaderCache:{hint:`${i}`,inputDependencies:[`type`,`type`]},getShaderSource:e=>{let n=W(`x`,t,[1],4),r=W(`bias`,t,[1],4),a=G(`y`,t,[1],4),o=[{name:`output_vec_size`,type:`u32`},{name:`bias_size`,type:`u32`}],s=e=>`
      let bias${e}_offset: u32 = (global_idx * 4 + ${e}) % uniforms.bias_size;
      let bias${e} = ${r.getByOffset(`bias${e}_offset / 4`)}[bias${e}_offset % 4];`,c=i?`
      let bias = ${r.getByOffset(`global_idx % (uniforms.bias_size / 4)`)};`:`${s(0)}${s(1)}${s(2)}${s(3)}
      let bias = ${n.type.value}(bias0, bias1, bias2, bias3);`;return`${e.registerUniforms(o).declareVariables(n,r,a)}

    ${ia(zn(t))}

    ${e.mainStart(In)}
      ${e.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.output_vec_size`)}

      let x = ${n.getByOffset(`global_idx`)};
      ${c}
      let x_in = x + bias;
      ${a.setByOffset(`global_idx`,aa(`x_in`))}
    }`},getRunData:e=>({outputs:[{dims:e[0].dims,dataType:e[0].dataType}],programUniforms:[{type:12,data:Math.ceil(n/4)},{type:12,data:r}],dispatchGroup:{x:Math.ceil(n/In/4)}})}},Is=e=>{e.inputs.length<2||B.size(e.inputs[1].dims)===0?oa(e):e.compute(Fs(e.inputs))}}),Rs,zs,Bs,Vs,Hs=x(()=>{z(),V(),Fn(),K(),Rs=e=>{if(!e||e.length!==2)throw Error(`Gather requires 2 inputs.`)},zs=(e,t)=>{let n=e[0].dims,r=e[1].dims,i=n.length,a=B.normalizeAxis(t.axis,i),o=n.slice(0);o.splice(a,1,...r);let s=n[a],c=e[0].dataType===9?4:1,l=Math.ceil(B.size(o)/c),u=[{type:12,data:l},{type:6,data:s},{type:12,data:a},...H(e[0].dims,e[1].dims,o)];return{name:`Gather`,shaderCache:{hint:t.cacheKey,inputDependencies:[`rank`,`rank`]},getRunData:()=>({outputs:[{dims:o,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(l/64)},programUniforms:u}),getShaderSource:t=>{let n=W(`data`,e[0].dataType,e[0].dims.length,c),s=W(`inputIndices`,e[1].dataType,e[1].dims.length),l=G(`output`,e[0].dataType,o.length,c),u=e=>{let t=r.length,c=`var indicesIndices${e}  = ${s.type.indices}(0);`;for(let n=0;n<t;n++)c+=`${t>1?`indicesIndices${e}[${n}]`:`indicesIndices${e}`} = ${o.length>1?`outputIndices${e}[uniforms.axis + ${n}]`:`outputIndices${e}`};`;c+=`
          var idx${e} = ${s.getByIndices(`indicesIndices${e}`)};
          if (idx${e} < 0) {
            idx${e} = idx${e} + uniforms.axisDimLimit;
          }
          var dataIndices${e} : ${n.type.indices};
        `;for(let n=0,r=0;n<i;n++)n===a?(c+=`${i>1?`dataIndices${e}[${n}]`:`dataIndices${e}`} = u32(idx${e});`,r+=t):(c+=`${i>1?`dataIndices${e}[${n}]`:`dataIndices${e}`} = ${o.length>1?`outputIndices${e}[${r}]`:`outputIndices${e}`};`,r++);return c},d;if(e[0].dataType===9){let e=(e,t,r=``)=>`
          let outputIndices${t} = ${l.offsetToIndices(`outputOffset + ${t}u`)};
          ${u(t)};
          let offset${t} = ${n.indicesToOffset(`dataIndices${t}`)};
          let index${t} = offset${t} / 4u;
          let component${t} = offset${t} % 4u;
          ${e}[${t}] = ${r}(${n.getByOffset(`index${t}`)}[component${t}]);
        `;d=`
        let outputOffset = global_idx * ${c};
        var value = vec4<u32>(0);
        ${e(`value`,0,`u32`)}
        ${e(`value`,1,`u32`)}
        ${e(`value`,2,`u32`)}
        ${e(`value`,3,`u32`)}
        ${l.setByOffset(`global_idx`,`value`)}
      `}else d=`
      let outputIndices = ${l.offsetToIndices(`global_idx`)};
      ${u(``)};
      let value = ${n.getByIndices(`dataIndices`)};
      ${l.setByOffset(`global_idx`,`value`)};
      `;return`
      ${t.registerUniform(`outputSize`,`u32`).registerUniform(`axisDimLimit`,`i32`).registerUniform(`axis`,`u32`).declareVariables(n,s,l)}
      ${t.mainStart()}
        ${t.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.outputSize`)}
        ${d}
      }`}}},Bs=e=>Pn({axis:e.axis}),Vs=(e,t)=>{let n=e.inputs;Rs(n),e.compute(zs(e.inputs,t))}}),Us,Ws,Gs,Ks=x(()=>{z(),V(),K(),Us=(e,t,n,r,i,a,o,s,c)=>{let l=[{type:12,data:a},{type:12,data:r},{type:12,data:i},{type:12,data:n},{type:12,data:o},{type:12,data:s},{type:12,data:c}],u=[a];return l.push(...H(t.dims,u)),e.compute({name:`computeSliceOffsets`,shaderCache:{hint:`${i.length}_${n.length}`,inputDependencies:[`rank`]},getRunData:()=>({outputs:[{dims:u,dataType:e.inputs[1].dataType}],dispatchGroup:{x:Math.ceil(a/64)},programUniforms:l}),getShaderSource:e=>{let r=[W(`indices_data`,t.dataType,t.dims.length),G(`input_slice_offsets_data`,12,1,1)],a=[{name:`output_size`,type:`u32`},{name:`batch_dims`,type:`u32`},{name:`input_dims`,type:`u32`,length:i.length},{name:`sizes_from_slice_dims_data`,type:`u32`,length:n.length},{name:`num_slices_per_batch`,type:`u32`},{name:`input_batch_stride`,type:`u32`},{name:`num_slice_dims`,type:`u32`}];return`
  ${e.registerUniforms(a).declareVariables(...r)}
  ${e.mainStart()}
    ${e.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.output_size`)}
    let batch_idx = global_idx / uniforms.num_slices_per_batch;
    let base_offset = batch_idx * uniforms.input_batch_stride;

    let slice_indices_base_offset = global_idx * uniforms.num_slice_dims;
    var relative_slice_offset = 0;
    for (var dim_idx = 0u; dim_idx < uniforms.num_slice_dims; dim_idx ++) {
      var index = i32(indices_data[dim_idx + slice_indices_base_offset].x);
      let input_dim_idx = uniforms.batch_dims + dim_idx;
      if (index < 0) {
        ${i.length===1?`index += i32(uniforms.input_dims);`:`index += i32(uniforms.input_dims[input_dim_idx]);`}
      }
      ${n.length===1?`relative_slice_offset += index * i32(uniforms.sizes_from_slice_dims_data);`:`relative_slice_offset += index * i32(uniforms.sizes_from_slice_dims_data[dim_idx]);`}
    }

    input_slice_offsets_data[global_idx] =  base_offset + u32(relative_slice_offset);
  }`}},{inputs:[t],outputs:[-1]})[0]},Ws=(e,t)=>{let n=e.inputs,r=n[0].dims,i=n[0].dataType,a=n[1].dims,o=a[a.length-1],s=B.sizeToDimension(a,a.length-1),c=B.sizeFromDimension(r,t.batchDims+o),l=B.sizeToDimension(r,t.batchDims),u=B.sizeFromDimension(r,t.batchDims),d=s/l,f=Array(o),p=c;for(let e=0;e<o;++e)f[o-1-e]=p,p*=r[t.batchDims+o-1-e];let m=Us(e,n[1],f,t.batchDims,r,s,d,u,o),h=t.batchDims+o;if(h>r.length)throw Error(`last dimension of indices must not be larger than rank of input tensor`);let g=a.slice(0,-1).concat(r.slice(h)),_=B.size(g),v=[{type:12,data:_},{type:12,data:c},...H(n[0].dims,m.dims,g)];e.compute({name:`GatherND`,shaderCache:{hint:t.cacheKey,inputDependencies:[`rank`,`rank`]},getRunData:()=>({outputs:[{dims:g,dataType:i}],dispatchGroup:{x:Math.ceil(_/64)},programUniforms:v}),getShaderSource:e=>{let t=W(`data`,n[0].dataType,n[0].dims.length),r=W(`slice_offsets`,12,m.dims.length),i=G(`output`,n[0].dataType,g.length);return`
          ${e.registerUniform(`output_size`,`u32`).registerUniform(`slice_size`,`u32`).declareVariables(t,r,i)}
            ${e.mainStart()}
            ${e.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.output_size`)}
          let slice_offset = slice_offsets[global_idx / uniforms.slice_size];
          output[global_idx] = data[u32(slice_offset) + global_idx % uniforms.slice_size];
        }`}},{inputs:[n[0],m]})},Gs=e=>({batchDims:e.batch_dims,cacheKey:``})}),qs,Js,Ys,Xs,Zs=x(()=>{z(),V(),Fn(),K(),qs=(e,t)=>{if(e.length<3||e.length>4)throw Error(`GatherBlockQuantized requires 3 or 4 inputs.`);let n=B.normalizeAxis(t.quantizeAxis,e[0].dims.length),r=t.blockSize,i=e[0],a=e[2],o=e.length===4?e[3]:void 0;if(a.dims.length!==i.dims.length||!i.dims.map((e,t)=>t===n?Math.ceil(e/r)===a.dims[t]:e===a.dims[t]).reduce((e,t)=>e&&t,!0))throw Error(`Scales must have the same rank as the input tensor and the dims should match except on gatherAxis.`);if(o){if(o.dataType!==i.dataType)throw Error(`Zero point must have the same data type as the input tensor.`);if(o.dims.length!==a.dims.length||!o.dims.map((e,t)=>e===a.dims[t]).reduce((e,t)=>e&&t,!0))throw Error(`Zero point must have the same rank as the input tensor and the dims should match except on quantizeAxis.`)}},Js=(e,t)=>{let n=e[0].dims,r=e[1].dims,i=n.length,a=B.normalizeAxis(t.gatherAxis,i),o=B.normalizeAxis(t.quantizeAxis,i),s=n.slice(0);s.splice(a,1,...r);let c=B.size(s),l=e[2].dataType,u=e[0].dataType===22,d=[{type:12,data:c},{type:12,data:o},{type:12,data:a},{type:12,data:t.blockSize},...H(...e.map((e,t)=>e.dims),s)];return{name:`GatherBlockQuantized`,shaderCache:{hint:`${t.cacheKey};${e.filter((e,t)=>t!==1).map(e=>e.dims.join(`_`)).join(`;`)}`,inputDependencies:Array.from({length:e.length},(e,t)=>`rank`)},getRunData:()=>({outputs:[{dims:s,dataType:l}],dispatchGroup:{x:Math.ceil(c/64)},programUniforms:d}),getShaderSource:t=>{let i=W(`data`,e[0].dataType,e[0].dims.length),o=W(`inputIndices`,e[1].dataType,e[1].dims.length),c=W(`scales`,e[2].dataType,e[2].dims.length),d=e.length>3?W(`zeroPoint`,e[3].dataType,e[3].dims.length):void 0,f=G(`output`,l,s.length),p=[i,o,c];return d&&p.push(d),`
        ${t.registerUniforms([{name:`output_size`,type:`u32`},{name:`quantize_axis`,type:`u32`},{name:`gather_axis`,type:`u32`},{name:`block_size`,type:`u32`}]).declareVariables(...p,f)}
        ${t.mainStart()}
        let output_indices = ${f.offsetToIndices(`global_idx`)};
        var indices_indices = ${o.type.indices}(0);
        ${r.length>1?`
          for (var i: u32 = 0; i < ${r.length}; i++) {
            let index = ${f.indicesGet(`output_indices`,`uniforms.gather_axis + i`)};
            ${o.indicesSet(`indices_indices`,`i`,`index`)};
          }`:`indices_indices = ${f.indicesGet(`output_indices`,`uniforms.gather_axis`)};`};
        var data_indices = ${i.type.indices}(0);
        for (var i: u32 = 0; i < uniforms.gather_axis; i++) {
          let index = ${f.indicesGet(`output_indices`,`i`)};
          ${i.indicesSet(`data_indices`,`i`,`index`)};
        }
        var index_from_indices = ${o.getByIndices(`indices_indices`)};
        if (index_from_indices < 0) {
          index_from_indices += ${n[a]};
        }
        ${i.indicesSet(`data_indices`,`uniforms.gather_axis`,`u32(index_from_indices)`)};
        for (var i = uniforms.gather_axis + 1; i < ${s.length}; i++) {
          let index = ${f.indicesGet(`output_indices`,`i + ${r.length} - 1`)};
          ${i.indicesSet(`data_indices`,`i`,`index`)};
        }
        let data_offset = ${i.indicesToOffset(`data_indices`)};
        let data_index = data_offset % 8;
        // Convert 4-bit packed data to 8-bit packed data.
        let packed_4bit_quantized_data = ${i.getByOffset(`data_offset / 8`)};
        let packed_8bit_quantized_data = (packed_4bit_quantized_data >> (4 * (data_index % 2))) & 0x0f0f0f0f;
        let quantized_data_vec = ${u?`unpack4xI8`:`unpack4xU8`}(u32(packed_8bit_quantized_data));
        let quantized_data = quantized_data_vec[data_index / 2];
        var scale_indices = data_indices;
        let quantize_axis_index = ${c.indicesGet(`data_indices`,`uniforms.quantize_axis`)} / uniforms.block_size;
        ${c.indicesSet(`scale_indices`,`uniforms.quantize_axis`,`quantize_axis_index`)};
        var scale = ${c.getByIndices(`scale_indices`)};
        ${d?`
              let zero_point_indices = scale_indices;
              let zero_point_offset = ${d.indicesToOffset(`zero_point_indices`)};
              let zero_point_index = zero_point_offset % 8;
              let packed_4bit_zero_points = ${d.getByOffset(`zero_point_offset / 8`)};
              let packed_8bit_zero_points = (packed_4bit_zero_points >> (4 * (zero_point_index % 2))) & 0x0f0f0f0f;
              let zero_point_vec = ${u?`unpack4xI8`:`unpack4xU8`}(u32(packed_8bit_zero_points));
              let zero_point = zero_point_vec[zero_point_index / 2];`:`var zero_point = 0`};
        let dequantized_data = ${zn(l)}(quantized_data - zero_point) * scale;
        ${f.setByOffset(`global_idx`,`dequantized_data`)};
    }`}}},Ys=(e,t)=>{let n=e.inputs;qs(n,t),e.compute(Js(e.inputs,t))},Xs=e=>Pn({blockSize:e.blockSize,gatherAxis:e.gatherAxis,quantizeAxis:e.quantizeAxis})}),Qs,$s,ec,tc,nc=x(()=>{z(),V(),Fn(),K(),Qs=e=>{if(!e||e.length!==2)throw Error(`GatherElements requires 2 inputs.`);if(e[0].dims.length<1)throw Error(`GatherElements requires that the data input be rank >= 1.`);if(e[0].dims.length!==e[1].dims.length)throw Error(`GatherElements requires that the data input and
                     indices input tensors be of same rank.`)},$s=(e,t)=>{let n=e[0].dims,r=e[0].dataType,i=n.length,a=e[1].dims,o=e[1].dataType,s=B.normalizeAxis(t.axis,i),c=n[s],l=a.slice(0),u=B.size(l),d=W(`input`,r,i),f=W(`indicesInput`,o,a.length),p=G(`output`,r,l.length),m=[{type:12,data:u},{type:6,data:c},{type:12,data:s}];return m.push(...H(n,a,l)),{name:`GatherElements`,shaderCache:{inputDependencies:[`rank`,`rank`]},getRunData:()=>({outputs:[{dims:l,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(u/64)},programUniforms:m}),getShaderSource:e=>`
      ${e.registerUniform(`outputSize`,`u32`).registerUniform(`axisDimLimit`,`i32`).registerUniform(`axis`,`u32`).declareVariables(d,f,p)}
      ${e.mainStart()}
      ${e.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.outputSize`)}

      let outputIndices = ${p.offsetToIndices(`global_idx`)};

      var idx = ${f.getByOffset(`global_idx`)};
      if (idx < 0) {
        idx = idx + uniforms.axisDimLimit;
      }
      var inputIndices = ${d.type.indices}(outputIndices);
      ${d.indicesSet(`inputIndices`,`uniforms.axis`,`u32(idx)`)};
      let value = ${d.getByIndices(`inputIndices`)};

      ${p.setByOffset(`global_idx`,`value`)};
  }`}},ec=e=>Pn({axis:e.axis}),tc=(e,t)=>{let n=e.inputs;Qs(n),e.compute($s(e.inputs,t))}}),rc,ic,ac,oc,sc=x(()=>{z(),V(),K(),rc=e=>{if(!e)throw Error(`Input is missing`);if(e.length<2||e.length>3)throw Error(`Invaid input number.`);if(e.length===3&&e[2].dims.length>2)throw Error(`Invalid input shape of C`);if(e[0].dataType!==e[1].dataType||e.length===3&&e[0].dataType!==e[2].dataType)throw Error(`Input types are mismatched`)},ic=(e,t)=>{let n=e[0].dims.slice(),r=e[1].dims.slice(),[i,a,o]=en.getShapeOfGemmResult(n,t.transA,r,t.transB,e.length===3?e[2].dims:void 0),s=[i,a];if(!s)throw Error(`Can't use gemm on the given tensors`);let c=Math.ceil(a/16),l=Math.ceil(i/16);B.size(s);let u=[{type:12,data:c},{type:12,data:i},{type:12,data:a},{type:12,data:o},{type:1,data:t.alpha},{type:1,data:t.beta}],d=[`type`,`type`];return e.length===3&&(u.push(...H(e[2].dims)),d.push(`rank`)),u.push(...H(s)),{name:`GemmShared`,shaderCache:{hint:`${t.cacheKey}`,inputDependencies:d},getRunData:()=>({outputs:[{dims:s,dataType:e[0].dataType}],dispatchGroup:{x:c*l},programUniforms:u}),getShaderSource:n=>{let r=W(`a`,e[0].dataType,e[0].dims),i=W(`b`,e[1].dataType,e[1].dims),a=null,o=[r,i];e.length===3&&(a=W(`c`,e[2].dataType,e[2].dims.length),o.push(a));let c=G(`output`,e[0].dataType,s.length);o.push(c);let l=[{name:`num_tile_n`,type:`u32`},{name:`M`,type:`u32`},{name:`N`,type:`u32`},{name:`K`,type:`u32`},{name:`alpha`,type:`f32`},{name:`beta`,type:`f32`}],u=``,d=``;t.transA&&t.transB?(d=`
      var col = tile_row_start + local_id.x;
      var row = k_start + local_id.y;
      if (col < uniforms.M && row < uniforms.K) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.M + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${r.type.value}(0);
      }

      col = k_start + local_id.x;
      row = tile_col_start + local_id.y;
      if (col < uniforms.K && row < uniforms.N) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.K + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${i.type.value}(0);
      }
      `,u=`value += tile_a[k][local_id.y] * tile_b[local_id.x][k];`):t.transA&&!t.transB?(d=`
      var col = tile_row_start + local_id.x;
      var row = k_start + local_id.y;
      if (col < uniforms.M && row < uniforms.K) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.M + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${r.type.value}(0);
      }

      col = tile_col_start + local_id.x;
      row = k_start + local_id.y;
      if (col < uniforms.N && row < uniforms.K) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.N + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${i.type.value}(0);
      }
      `,u=`value += tile_a[k][local_id.y] * tile_b[k][local_id.x];`):!t.transA&&t.transB?(d=`
      var col = k_start + local_id.x;
      var row = tile_row_start + local_id.y;
      if (col < uniforms.K && row < uniforms.M) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.K + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${r.type.value}(0);
      }

      col = k_start + local_id.x;
      row = tile_col_start + local_id.y;
      if (col < uniforms.K && row < uniforms.N) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.K + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${i.type.value}(0);
      }
      `,u=`value += tile_a[local_id.y][k] * tile_b[local_id.x][k];`):!t.transA&&!t.transB&&(d=`
      var col = k_start + local_id.x;
      var row = tile_row_start + local_id.y;
      if (col < uniforms.K && row < uniforms.M) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.K + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${r.type.value}(0);
      }

      col = tile_col_start + local_id.x;
      row = k_start + local_id.y;
      if (col < uniforms.N && row < uniforms.K) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.N + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${i.type.value}(0);
      }
      `,u=`value += tile_a[local_id.y][k] * tile_b[k][local_id.x];`);let f=t.alpha===1?``:`value *= uniforms.alpha;`;return`
  ${n.registerUniforms(l).declareVariables(...o)}
  var<workgroup> tile_a: array<array<${r.type.storage}, 16>, 16>;
  var<workgroup> tile_b: array<array<${i.type.storage}, 16>, 16>;
  ${n.mainStart([16,16,1])}
    let tile_col_start = (workgroup_index % uniforms.num_tile_n) * 16;
    let tile_row_start = (workgroup_index / uniforms.num_tile_n) * 16;
    let num_tiles = (uniforms.K - 1) / 16 + 1;
    var k_start = 0u;
    var value = ${c.type.value}(0);
    for (var t: u32 = 0u; t < num_tiles; t++) {
      ${d}
      k_start = k_start + 16;
      workgroupBarrier();

      for (var k: u32 = 0u; k < 16; k++) {
        ${u}
      }
      workgroupBarrier();
    }

    ${f}
    let m = tile_row_start + local_id.y;
    let n = tile_col_start + local_id.x;
    ${a==null?``:`let cOffset = ${a.broadcastedIndicesToOffset(`vec2(m, n)`,c)}; value += ${c.type.value}(uniforms.beta) * ${a.getByOffset(`cOffset`)};`}
    if (m < uniforms.M && n < uniforms.N) {
      output[m * uniforms.N + n] = value;
    }
  }`}}},ac=e=>({transA:e.transA,transB:e.transB,alpha:e.alpha,beta:e.beta,cacheKey:`${e.transA};${e.transB};${e.alpha===1}`}),oc=(e,t)=>{rc(e.inputs),e.compute(ic(e.inputs,t))}}),cc,lc,uc,dc,fc,pc,mc,hc,gc,_c,vc,yc,bc,xc,Sc=x(()=>{z(),V(),Fn(),K(),[cc,lc,uc,dc]=[0,1,2,3],fc=e=>{if(e[0].dims.length!==4)throw Error(`only 4-D tensor is supported.`);if(e[0].dims.length!==e[1].dims.length)throw Error(`input dimensions must be equal to grid dimensions`);if(e[0].dims.length-2!==e[1].dims[e[1].dims.length-1])throw Error(`last dimension of grid must be equal to ${e[0].dims.length-2}`);if(e[0].dims[0]!==e[1].dims[0])throw Error(`grid batch size must match input batch size`)},pc=`
  fn gs_get_cubic_coeffs(x: f32) -> vec4<f32> {
    let cubic_alpha = -0.75f;
    let x_abs = abs(x);
    var coeffs: vec4<f32>;
    coeffs[0] = (((cubic_alpha * (x_abs + 1) - 5 * cubic_alpha) * (x_abs + 1) + 8 * cubic_alpha) * (x_abs + 1) - 4 * cubic_alpha);
    coeffs[1] = (((cubic_alpha + 2) * x_abs - (cubic_alpha + 3)) * x_abs * x_abs + 1);
    coeffs[2] = (((cubic_alpha + 2) * (1 - x_abs) - (cubic_alpha + 3)) * (1 - x_abs) * (1 - x_abs) + 1);
    coeffs[3] = (((cubic_alpha * (2 - x_abs) - 5 * cubic_alpha) * (2 - x_abs) + 8 * cubic_alpha) * (2 - x_abs) - 4 * cubic_alpha);
    return coeffs;
  }
`,mc=e=>`
  fn gs_bicubic_interpolate(p: mat4x4<${e}>, x: f32, y: f32) -> ${e} {
    var v: vec4<f32>;
    var coeffs = gs_get_cubic_coeffs(x);
    for (var i = 0; i < 4; i++) {
      v[i] = coeffs[0] * p[i][0] + coeffs[1] * p[i][1] + coeffs[2] * p[i][2] + coeffs[3] * p[i][3];
    }
    coeffs = gs_get_cubic_coeffs(y);
    let pixel = ${e}(coeffs[0] * v[0] + coeffs[1] * v[1] + coeffs[2] * v[2] + coeffs[3] * v[3]);
    return pixel;
  }
`,hc=e=>`
  fn gs_denormalize(n: f32, length: i32) -> f32 {
    ${e.alignCorners===0?`
    // alignCorners: false => [-1, 1] to [-0.5, length - 0.5]
    return ((n + 1.0) * f32(length) - 1.0) / 2.0;
    `:`
    // alignCorners: true => [-1, 1] to [0, length - 1]
    return (n + 1.0) / 2.0 * (f32(length - 1));
    `}
  }
`,gc=e=>`
  ${e.paddingMode===`reflection`?`
      fn gs_reflect(x: i32, x_min: f32, x_max: f32) -> u32 {
        var dx = 0.0;
        var fx = f32(x);
        let range = x_max - x_min;
        if (fx < x_min) {
          dx = x_min - fx;
          let n = u32(dx / range);
          let r = dx - f32(n) * range;
          if (n % 2 == 0) {
            fx = x_min + r;
          } else {
            fx = x_max - r;
          }
        } else if (fx > x_max) {
          dx = fx - x_max;
          let n = u32(dx / range);
          let r = dx - f32(n) * range;
          if (n % 2 == 0) {
            fx = x_max - r;
          } else {
            fx = x_min + r;
          }
        }
        return u32(fx);
      }`:``}
`,_c=(e,t,n)=>`
  fn pixel_at_grid(r: i32, c: i32, H: i32, W: i32, batch: u32, channel: u32, border: vec4<f32>) -> ${t} {
     var pixel = ${t}(0);
     var indices = vec4<u32>(0);
     indices[${cc}] = batch;
     indices[${lc}] = channel;`+(()=>{switch(n.paddingMode){case`zeros`:return`
          if (r >= 0 && r < H && c >=0 && c < W) {
            indices[${uc}] = u32(r);
            indices[${dc}] = u32(c);
          } else {
            return ${t}(0);
          }
        `;case`border`:return`
          indices[${uc}] = u32(clamp(r, 0, H - 1));
          indices[${dc}] = u32(clamp(c, 0, W - 1));
        `;case`reflection`:return`
          indices[${uc}] = gs_reflect(r, border[1], border[3]);
          indices[${dc}] = gs_reflect(c, border[0], border[2]);
        `;default:throw Error(`padding mode ${n.paddingMode} is not supported`)}})()+`
    return ${e.getByIndices(`indices`)};
  }
`,vc=(e,t,n)=>(()=>{switch(n.mode){case`nearest`:return`
          let result = pixel_at_grid(i32(round(y)), i32(round(x)), H_in, W_in, indices[${cc}], indices[${lc}], border);
        `;case`bilinear`:return`
          let x1 = i32(floor(x));
          let y1 = i32(floor(y));
          let x2 = x1 + 1;
          let y2 = y1 + 1;

          let p11 = pixel_at_grid(y1, x1, H_in, W_in, indices[${cc}], indices[${lc}], border);
          let p12 = pixel_at_grid(y1, x2, H_in, W_in, indices[${cc}], indices[${lc}], border);
          let p21 = pixel_at_grid(y2, x1, H_in, W_in, indices[${cc}], indices[${lc}], border);
          let p22 = pixel_at_grid(y2, x2, H_in, W_in, indices[${cc}], indices[${lc}], border);

          let dx2 = ${t}(f32(x2) - x);
          let dx1 = ${t}(x - f32(x1));
          let dy2 = ${t}(f32(y2) - y);
          let dy1 = ${t}(y - f32(y1));
          let result = dy2 * (dx2 * p11 + dx1 * p12) + dy1 * (dx2 * p21 + dx1 * p22);
        `;case`bicubic`:return`
          let x0 = i32(floor(x)) - 1;
          let y0 = i32(floor(y)) - 1;
          var p: mat4x4<${t}>;
          for (var h = 0; h < 4; h++) {
            for (var w = 0; w < 4; w++) {
              p[h][w] = pixel_at_grid(h + y0, w + x0, H_in, W_in, indices[${cc}], indices[${lc}], border);
            }
          }

          let dx = x - f32(x0 + 1);
          let dy = y - f32(y0 + 1);
          let result = gs_bicubic_interpolate(p, dx, dy);
        `;default:throw Error(`mode ${n.mode} is not supported`)}})()+`${e.setByOffset(`global_idx`,`result`)}`,yc=(e,t)=>{let n=W(`x`,e[0].dataType,e[0].dims.length),r=[e[1].dims[0],e[1].dims[1],e[1].dims[2]],i=W(`grid`,e[1].dataType,r.length,2),a=[e[0].dims[0],e[0].dims[1],e[1].dims[1],e[1].dims[2]];t.format===`NHWC`&&(a=[e[0].dims[0],e[1].dims[1],e[1].dims[2],e[0].dims[3]],[cc,lc,uc,dc]=[0,3,1,2]);let o=G(`output`,e[0].dataType,a.length),s=n.type.value,c=[{type:12,data:B.size(a)},...H(e[0].dims,r,a)];return{name:`GridSample`,shaderCache:{hint:`${t.cacheKey}`,inputDependencies:[`type`,`type`]},getRunData:e=>{let t=B.size(a);return{outputs:[{dims:a,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(t/64)},programUniforms:c}},getShaderSource:e=>`
  ${e.registerUniform(`output_size`,`u32`).declareVariables(n,i,o)}
  ${pc}
  ${mc(s)}
  ${hc(t)}
  ${gc(t)}
  ${_c(n,s,t)}

  ${e.mainStart()}
    ${e.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.output_size`)}
      let H_in = i32(uniforms.x_shape[${uc}]);
      let W_in = i32(uniforms.x_shape[${dc}]);

      ${t.alignCorners===0?`
      let x_min = -0.5;
      let x_max = f32(W_in) - 0.5;
      let y_min = -0.5;
      let y_max = f32(H_in) - 0.5;
      `:`
      let x_min = 0.0;
      let x_max = f32(W_in) - 1.0;
      let y_min = 0.0;
      let y_max = f32(H_in) - 1.0;
      `};
      let border = vec4<f32>(x_min, y_min, x_max, y_max);

      let indices = ${o.offsetToIndices(`global_idx`)};
      var grid_indices = vec3<u32>(indices[${cc}], indices[${uc}], indices[${dc}]);
      let nxy = ${i.getByIndices(`grid_indices`)};
      var x = gs_denormalize(f32(nxy[0]), W_in);
      var y = gs_denormalize(f32(nxy[1]), H_in);

      ${vc(o,s,t)}
  }`}},bc=(e,t)=>{fc(e.inputs),e.compute(yc(e.inputs,t))},xc=e=>Pn({alignCorners:e.align_corners,mode:e.mode,paddingMode:e.padding_mode,format:e.format})}),Cc,wc,Tc,Ec,Dc,Oc,kc,Ac=x(()=>{z(),V(),Fn(),Sn(),ui(),K(),ir(),Cc=(e,t)=>e.length>t&&e[t].dims.length>0?e[t]:void 0,wc=(e,t)=>{let n=e[0],r=Cc(e,1),i=Cc(e,2),a=Cc(e,3),o=Cc(e,4),s=Cc(e,5),c=Cc(e,6),l=Cc(e,7);if(n.dims.length!==3&&n.dims.length!==5)throw Error(`Input query is expected to have 3 or 5 dimensions`);let u=n.dims[0],d=n.dims[1],f=n.dims.length===3?n.dims[2]:t.numHeads*n.dims[4],p=d,m=0,h=0,g=Math.floor(f/t.numHeads);if(c&&l&&B.size(c.dims)&&B.size(l.dims)){if(c.dims.length!==4)throw Error(`Input "past_key" is expected to have 4 dimensions`);if(c.dims[0]!==u||c.dims[1]!==t.numHeads||c.dims[3]!==g)throw Error(`Input "past_key" shape (batch_size, num_heads, past_sequence_length, head_size)`);if(l.dims[0]!==u||l.dims[1]!==t.numHeads||l.dims[3]!==g)throw Error(`Input "past_value" shape (batch_size, num_heads, past_sequence_length, head_size)`);if(c.dims[2]!==l.dims[2])throw Error(`Input "past_key" and "past_value" shall have same dim 2 (past_sequence_length)`);if(l.dims.length!==4)throw Error(`Input "past_value" is expected to have 4 dimensions`);m=c.dims[2],h=c.dims[2]}else if(c&&B.size(c.dims)||l&&B.size(l.dims))throw Error(`Input "past_key" and "past_value" shall be both present or both absent`);let _;if(r&&B.size(r.dims)>0){if(n.dims.length!==3)throw Error(`Input "query" is expected to have 3 dimensions when key is given`);if(r.dims.length<3||r.dims.length>5)throw Error(`Input "key" is expected to have 3, 4, or 5 dimensions`);if(n.dims[0]!==r.dims[0])throw Error(`Input "query" and "key" shall have same dim 0 (batch size)`);if(r.dims.length===3){if(r.dims[2]!==n.dims[2])throw Error(`Input "query" and "key" shall have same dim 2 (hidden_size)`);_=2,p=r.dims[1]}else if(r.dims.length===5){if(r.dims[2]!==t.numHeads||r.dims[3]!==2||r.dims[4]!==g)throw Error(`Expect "key" shape (batch_size, kv_sequence_length, num_heads, 2, head_size) for packed kv`);if(i)throw Error(`Expect "value" be none when "key" has packed kv format.`);_=5,p=r.dims[1]}else{if(r.dims[1]!==t.numHeads||r.dims[3]!==g)throw Error(`Expect "key" shape (batch_size, num_heads, kv_sequence_length, head_size) for past_key`);_=0,p=r.dims[2]}}else{if(n.dims.length!==5)throw Error(`Input "query" is expected to have 5 dimensions when key is empty`);if(n.dims[2]!==t.numHeads||n.dims[3]!==3)throw Error(`Expect "query" shape (batch_size, kv_sequence_length, num_heads, 3, head_size) for packed kv`);_=3}if(a&&B.size(a.dims)>0){if(a.dims.length!==1)throw Error(`Input "bias" is expected to have 1 dimension`);if(r&&r.dims.length===5&&r.dims[3]===2)throw Error(`bias is not allowed for packed kv.`)}let v=m+p,y=0;if(o&&B.size(o.dims)>0){y=8;let e=o.dims;throw e.length===1?e[0]===u?y=1:e[0]===3*u+2&&(y=3):e.length===2&&e[0]===u&&e[1]===v&&(y=5),Error(y===8?`Input "key_padding_mask" shape shall be (batch_size) or (batch_size, total_sequence_length)`:`Mask not supported`)}let b=!1,x=f;if(i&&B.size(i.dims)>0){if(i.dims.length!==3&&i.dims.length!==4)throw Error(`Input "value" is expected to have 3 or 4 dimensions`);if(n.dims[0]!==i.dims[0])throw Error(`Input "query" and "value" shall have same dim 0 (batch_size)`);if(i.dims.length===3){if(p!==i.dims[1])throw Error(`Input "key" and "value" shall have the same dim 1 (kv_sequence_length)`);x=i.dims[2]}else{if(p!==i.dims[2])throw Error(`Input "key" and "value" shall have the same dim 2 (kv_sequence_length)`);x=i.dims[1]*i.dims[3],b=!0}}if(o&&B.size(o.dims)>0)throw Error(`Key padding mask is not supported`);if(s&&B.size(s.dims)>0){if(s.dims.length!==4)throw Error(`Input "attention_bias" is expected to have 4 dimensions`);if(s.dims[0]!==u||s.dims[1]!==t.numHeads||s.dims[2]!==d||s.dims[3]!==v)throw Error(`Expect "attention_bias" shape (batch_size, num_heads, sequence_length, total_sequence_length)`)}return{batchSize:u,sequenceLength:d,pastSequenceLength:m,kvSequenceLength:p,totalSequenceLength:v,maxSequenceLength:h,inputHiddenSize:0,hiddenSize:f,vHiddenSize:x,headSize:g,vHeadSize:Math.floor(x/t.numHeads),numHeads:t.numHeads,isUnidirectional:!1,pastPresentShareBuffer:!1,maskFilterValue:t.maskFilterValue,maskType:y,scale:t.scale,broadcastResPosBias:!1,passPastInKv:b,qkvFormat:_}},Tc=e=>Pn({...e}),Ec=Pn({perm:[0,2,1,3]}),Dc=(e,t,n,r,i,a,o)=>{let s=[r,i,a],c=B.size(s),l=[{type:12,data:c},{type:12,data:o},{type:12,data:a}];return e.compute({name:`MultiHeadAttentionAddBias`,shaderCache:{inputDependencies:[`type`,`type`]},getRunData:()=>({outputs:[{dims:s,dataType:t.dataType,gpuDataType:0}],dispatchGroup:{x:Math.ceil(c/64)},programUniforms:l}),getShaderSource:e=>{let r=G(`qkv_with_bias`,t.dataType,s),i=W(`qkv`,t.dataType,s),a=W(`bias`,n.dataType,s);return`
  ${e.registerUniforms([{name:`output_size`,type:`u32`},{name:`bias_offset`,type:`u32`},{name:`hidden_size`,type:`u32`}]).declareVariables(i,a,r)}
  ${e.mainStart()}
    ${e.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.output_size`)}
    let bias_offset_idx = (global_idx % uniforms.hidden_size) + uniforms.bias_offset;

    qkv_with_bias[global_idx] = qkv[global_idx] + bias[bias_offset_idx];
  }`}},{inputs:[t,n],outputs:[-1]})[0]},Oc=(e,t,n,r,i,a,o,s)=>{let c=a;if(o&&B.size(o.dims)>0){if(r===1)throw Error(`AddBiasReshape is not implemented. Please export your model with packed QKV or KV`);return c=Dc(e,a,o,t,r,n*i,s),c=c.reshape([t,r,n,i]),n===1||r===1?c:e.compute(tr(c,Ec.perm),{inputs:[c],outputs:[-1]})[0]}return a.dims.length===3&&(c=a.reshape([t,r,n,i])),n===1||r===1?c:e.compute(tr(c,Ec.perm),{inputs:[c],outputs:[-1]})[0]},kc=(e,t)=>{let n=wc(e.inputs,t),r=e.inputs[0],i=Cc(e.inputs,1),a=Cc(e.inputs,2),o=Cc(e.inputs,3),s=Cc(e.inputs,4),c=Cc(e.inputs,5),l=Cc(e.inputs,6),u=Cc(e.inputs,7);if(r.dims.length===5)throw Error(`Packed QKV is not implemented`);if(i?.dims.length===5)throw Error(`Packed KV is not implemented`);let d=i&&a&&i.dims.length===4&&a.dims.length===4,f=Oc(e,n.batchSize,n.numHeads,n.sequenceLength,n.headSize,r,o,0);if(d)return si(e,f,i,a,s,void 0,l,u,c,n);if(!i||!a)throw Error(`key and value must be provided`);let p=Oc(e,n.batchSize,n.numHeads,n.kvSequenceLength,n.headSize,i,o,n.hiddenSize),m=Oc(e,n.batchSize,n.numHeads,n.kvSequenceLength,n.vHeadSize,a,o,2*n.hiddenSize);si(e,f,p,m,s,void 0,l,u,c,n)}}),jc,Mc,Nc,Pc,Fc,Ic,Lc,Rc=x(()=>{z(),V(),Fn(),K(),jc=e=>{if(!e||e.length<1)throw Error(`too few inputs`)},Mc=(e,t)=>{let n=[],r=t.numOutputs;return e[1].dims[0]>0&&(e[1].getBigInt64Array().forEach(e=>n.push(Number(e))),r=n.length),Pn({numOutputs:r,axis:t.axis,splitSizes:n})},Nc=e=>`
fn calculateOutputIndex(index: u32) -> u32 {
    for (var i: u32 = 0u; i < ${e}u; i += 1u ) {
    if (index < ${U(`uniforms.size_in_split_axis`,`i`,e)}) {
        return i;
    }
    }
    return ${e}u;
}`,Pc=e=>{let t=e.length,n=[];for(let r=0;r<t;++r){let i=e[r].setByIndices(`indices`,`input[global_idx]`);t===1?n.push(i):r===0?n.push(`if (output_number == ${r}u) { ${i} }`):r===t-1?n.push(`else { ${i} }`):n.push(`else if (output_number == ${r}) { ${i} }`)}return`
      fn writeBufferData(output_number: u32, indices: ${e[0].type.indices}, global_idx: u32) {
        ${n.join(`
`)}
      }`},Fc=(e,t)=>{let n=e[0].dims,r=B.size(n),i=e[0].dataType,a=B.normalizeAxis(t.axis,n.length),o=Array(t.numOutputs),s=W(`input`,i,n.length),c=Array(t.numOutputs),l=[],u=[],d=0,f=[{type:12,data:r}];for(let r=0;r<t.numOutputs;r++){d+=t.splitSizes[r],c[r]=d;let s=n.slice();s[a]=t.splitSizes[r],u.push(s),o[r]=G(`output${r}`,i,s.length),l.push({dims:u[r],dataType:e[0].dataType})}return f.push({type:12,data:c},...H(n,...u)),{name:`Split`,shaderCache:{hint:t.cacheKey,inputDependencies:[`rank`]},getShaderSource:e=>`
  ${e.registerUniform(`input_size`,`u32`).registerUniform(`size_in_split_axis`,`u32`,c.length).declareVariables(s,...o)}
  ${Nc(c.length)}
  ${Pc(o)}

  ${e.mainStart()}
    ${e.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.input_size`)}

    var indices = ${s.offsetToIndices(`global_idx`)};
    var index = ${s.indicesGet(`indices`,a)};
    let output_number = calculateOutputIndex(index);
    if (output_number != 0) {
      index -= ${U(`uniforms.size_in_split_axis`,`output_number - 1u`,c.length)};
      ${s.indicesSet(`indices`,a,`index`)};
    }
    writeBufferData(output_number, indices, global_idx);
  }`,getRunData:()=>({outputs:l,dispatchGroup:{x:Math.ceil(r/64)},programUniforms:f})}},Ic=(e,t)=>{jc(e.inputs);let n=e.inputs.length===1?t:Mc(e.inputs,t);e.compute(Fc(e.inputs,n),{inputs:[0]})},Lc=e=>{let t=e.axis,n=e.splitSizes,r=e.numOutputs<0?n.length:e.numOutputs;if(r!==n.length)throw Error(`numOutputs and splitSizes length must be equal`);return Pn({axis:t,numOutputs:r,splitSizes:n})}}),zc,Bc,Vc,Hc=x(()=>{z(),V(),Fn(),K(),zc=(e,t)=>{let[n,r,i,a]=e,{numHeads:o,rotaryEmbeddingDim:s}=t;if(n.dims.length!==3&&n.dims.length!==4)throw Error(`Input 'x' is expected to have 3 or 4 dimensions, got ${n.dims.length}`);if(!B.areEqual(r.dims,[])&&!B.areEqual(r.dims,[1])&&r.dims.length!==2)throw Error(`Input 'position_ids' is expected to have 0, 1, or 2 dimensions, got ${r.dims.length}`);if(i.dims.length!==2)throw Error(`Input 'cos_cache' is expected to have 2 dimensions, got ${i.dims.length}`);if(a.dims.length!==2)throw Error(`Input 'sin_cache' is expected to have 2 dimensions, got ${a.dims.length}`);if(!B.areEqual(i.dims,a.dims))throw Error(`Inputs 'cos_cache' and 'sin_cache' are expected to have the same shape`);if(s>0&&o===0)throw Error(`num_heads must be provided if rotary_embedding_dim is specified`);let c=n.dims[0],l=n.dims[n.dims.length-2],u=i.dims[0],d=B.sizeFromDimension(n.dims,1)/l,f=s===0?i.dims[1]*2:d/o;if(s>f)throw Error(`rotary_embedding_dim must be less than or equal to head_size`);if(r.dims.length===2){if(c!==r.dims[0])throw Error(`Input 'position_ids' dimension 0 should be of size batch_size, got ${r.dims[0]}`);if(l!==r.dims[1])throw Error(`Input 'position_ids' dimension 1 should be of size sequence_length, got ${r.dims[1]}`)}if(l>u)throw Error(`Updating cos_cache and sin_cache in RotaryEmbedding is not currently supported`);if(f/2!==i.dims[1]&&s/2!==i.dims[1])throw Error(`Input 'cos_cache' dimension 1 should be same as head_size / 2 or rotary_embedding_dim / 2, got ${i.dims[1]}`)},Bc=(e,t)=>{let{interleaved:n,numHeads:r,rotaryEmbeddingDim:i,scale:a}=t,o=e[0].dims[0],s=B.sizeFromDimension(e[0].dims,1),c=e[0].dims[e[0].dims.length-2],l=s/c,u=e[2].dims[1],d=i===0?u*2:l/r,f=[o,c,l/d,d-u],p=B.computeStrides(f),m=[{type:1,data:a},{type:12,data:f},{type:12,data:p},...e[0].dims.length===3?Array({type:12,data:[s,l,d,1]}):[],...e[0].dims.length===4?Array({type:12,data:[s,d,c*d,1]}):[],...H(e[0].dims,e[1].dims,e[2].dims,e[3].dims,e[0].dims)];return{name:`RotaryEmbedding`,shaderCache:{hint:Pn({interleaved:n}).cacheKey,inputDependencies:[`rank`,`rank`,`rank`,`rank`]},getShaderSource:t=>{let r=W(`input`,e[0].dataType,e[0].dims.length),i=W(`position_ids`,e[1].dataType,e[1].dims.length),a=W(`cos_cache`,e[2].dataType,e[2].dims.length),o=W(`sin_cache`,e[3].dataType,e[3].dims.length),s=G(`output`,e[0].dataType,e[0].dims.length);return t.registerUniforms([{name:`scale`,type:`f32`},{name:`global_shape`,type:`u32`,length:f.length},{name:`global_strides`,type:`u32`,length:p.length},{name:`input_output_strides`,type:`u32`,length:p.length}]),`
        ${t.declareVariables(r,i,a,o,s)}

        ${t.mainStart(In)}
          let half_rotary_emb_dim = uniforms.${a.name}_shape[1];
          let bsnh = global_idx / uniforms.global_strides % uniforms.global_shape;
          let size = uniforms.global_shape[0] * uniforms.global_strides[0];
          ${t.guardAgainstOutOfBoundsWorkgroupSizes(`size`)}

          if (bsnh[3] < half_rotary_emb_dim) {
            let position_ids_idx =
                ${i.broadcastedIndicesToOffset(`bsnh.xy`,G(``,i.type.tensor,2))};
            let position_id =
                u32(${i.getByOffset(`position_ids_idx`)}) + select(0, bsnh[1], position_ids_idx == 0);
            let i = dot(bsnh, uniforms.input_output_strides) + select(0, bsnh[3], ${n});
            let j = i + select(half_rotary_emb_dim, 1, ${n});
            let re = ${r.getByOffset(`i`)} * ${a.get(`position_id`,`bsnh[3]`)} -
                ${r.getByOffset(`j`)} * ${o.get(`position_id`,`bsnh[3]`)};
            ${s.setByOffset(`i`,`re`)}
            let im = ${r.getByOffset(`i`)} * ${o.get(`position_id`,`bsnh[3]`)} +
                ${r.getByOffset(`j`)} * ${a.get(`position_id`,`bsnh[3]`)};
            ${s.setByOffset(`j`,`im`)}
          } else {
            let k = dot(bsnh, uniforms.input_output_strides) + half_rotary_emb_dim;
            ${s.setByOffset(`k`,r.getByOffset(`k`))}
          }
        }`},getRunData:()=>({outputs:[{dims:e[0].dims,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(B.size(f)/In)},programUniforms:m})}},Vc=(e,t)=>{zc(e.inputs,t),e.compute(Bc(e.inputs,t))}}),Uc,Wc,Gc,Kc,qc,Jc=x(()=>{Fn(),z(),ui(),Ac(),Rc(),ir(),Hc(),K(),Uc=(e,t)=>{if(t.doRotary&&e.length<=7)throw Error(`cos_cache and sin_cache inputs are required if do_rotary is specified`);let n=e[0],r=e[1],i=e[2],a=e[3],o=e[4];if(t.doRotary!==0&&e.length<=7)throw Error(`cos_cast and sin_cache are expected if do_rotary attribute is non-zero`);if(t.localWindowSize!==-1)throw Error(`Local attention is not supported`);if(t.softcap!==0)throw Error(`Softcap is not supported`);if(t.rotaryInterleaved!==0)throw Error(`Rotary interleaved is not supported`);if(t.smoothSoftmax)throw Error(`Smooth softmax is not supported`);if(n.dims.length!==3&&n.dims.length!==5)throw Error(`Input query is expected to have 3 or 5 dimensions`);let s=n.dims[0],c=n.dims[1],l=n.dims.length===3?n.dims[2]:t.numHeads*n.dims[4],u=c,d=0,f=!r||r.dims.length===0,p=Math.floor(f?l/(t.numHeads+2*t.kvNumHeads):l/t.numHeads);f&&(l=p*t.numHeads);let m=a&&a.dims.length!==0,h=o&&o.dims.length!==0;if(m&&a.dims.length===4&&a.dims[0]===s&&a.dims[1]!==t.kvNumHeads&&a.dims[2]===t.kvNumHeads&&a.dims[3]===p)throw Error(`BSNH pastKey/pastValue is not supported`);if(m&&h){if(a.dims.length!==4)throw Error(`Input "past_key" is expected to have 4 dimensions`);if(o.dims.length!==4)throw Error(`Input "past_value" is expected to have 4 dimensions`);d=a.dims[2]}else if(m||h)throw Error(`Input "past_key" and "past_value" shall be both present or both absent`);let g=1;if(r&&r.dims.length>0){if(n.dims.length!==3)throw Error(`Input "query" is expected to have 3 dimensions when key is given`);if(r.dims.length<3||r.dims.length>5)throw Error(`Input "key" is expected to have 3, 4, or 5 dimensions`);if(n.dims[0]!==r.dims[0])throw Error(`Input "query" and "key" shall have same dim 0 (batch size)`);if(r.dims.length===3){if(n.dims[2]%r.dims[2]!==0)throw Error(`Dimension 2 of "query" should be a multiple of "key"`);u=r.dims[1]}else if(r.dims.length===5){if(r.dims[2]!==t.numHeads||r.dims[3]!==2||r.dims[4]!==p)throw Error(`Expect "key" shape (batch_size, kv_sequence_length, num_heads, 2, head_size) for packed kv`);if(i)throw Error(`Expect "value" be none when "key" has packed kv format.`);u=r.dims[1]}else{if(r.dims[1]!==t.numHeads||r.dims[3]!==p)throw Error(`Expect "key" shape (batch_size, num_heads, kv_sequence_length, head_size) for past_key`);u=r.dims[2]}}else{if(n.dims.length!==3&&n.dims.length!==5)throw Error(`Input "query" is expected to have 3 or 5 dimensions when key is empty`);if(n.dims.length===5&&(n.dims[2]!==t.numHeads||n.dims[3]!==3))throw Error(`Expect "query" shape (batch_size, kv_sequence_length, num_heads, 3, head_size) for packed kv`);g=3}let _=!1,v=t.kvNumHeads?p*t.kvNumHeads:l;if(i&&i.dims.length>0){if(i.dims.length!==3&&i.dims.length!==4)throw Error(`Input "value" is expected to have 3 or 4 dimensions`);if(n.dims[0]!==i.dims[0])throw Error(`Input "query" and "value" shall have same dim 0 (batch_size)`);if(i.dims.length===3){if(u!==i.dims[1])throw Error(`Input "key" and "value" shall have the same dim 1 (kv_sequence_length)`);v=i.dims[2]}else{if(u!==i.dims[2])throw Error(`Input "past_key" and "past_value" shall have the same dim 2 (kv_sequence_length)`);v=i.dims[1]*i.dims[3],_=!0}}let y=e.length>4?e[5]:void 0;if(y){if(y.dims.length===0)throw Error(`seqlens_k must be at least 1D, got scalar.`);let e=y.dims.reduce((e,t)=>e*t,1);if(e!==s)throw Error(`seqlens_k must have batch_size (${s}) elements, got ${e}.`);for(let e=0;e<y.dims.length;e++)if(y.dims[e]!==1&&y.dims[e]!==s)throw Error(`seqlens_k has unexpected shape. Each dimension must be 1 or batch_size (${s}), got dims[${e}] = ${y.dims[e]}.`)}return{batchSize:s,sequenceLength:c,pastSequenceLength:d,kvSequenceLength:u,totalSequenceLength:-1,maxSequenceLength:-1,inputHiddenSize:0,hiddenSize:l,vHiddenSize:v,headSize:p,vHeadSize:Math.floor(v/t.kvNumHeads),numHeads:t.numHeads,kvNumHeads:t.kvNumHeads,nReps:t.numHeads/t.kvNumHeads,pastPresentShareBuffer:!1,maskType:0,scale:t.scale,broadcastResPosBias:!1,passPastInKv:_,qkvFormat:g}},Wc=Pn({perm:[0,2,1,3]}),Gc=(e,t,n)=>{let r=t,i=n.kvNumHeads;return t.dims.length===3&&n.kvSequenceLength!==0&&(r=t.reshape([n.batchSize,n.kvSequenceLength,i,n.headSize]),r=e.compute(tr(r,Wc.perm),{inputs:[r],outputs:[-1]})[0]),r},Kc=(e,t,n,r)=>{let i=[`type`,`type`],a=[e*t],o=e*t,s=[{type:12,data:o},{type:12,data:t},{type:12,data:e}];return{name:`GeneratePositionIds`,shaderCache:{hint:`${e};${t}`,inputDependencies:i},getRunData:()=>({outputs:[{dims:a,dataType:7}],dispatchGroup:{x:Math.ceil(o/64)},programUniforms:s}),getShaderSource:e=>{let t=W(`seq_lens`,n.dataType,n.dims),i=W(`total_seq_lens`,r.dataType,r.dims),o=G(`pos_ids`,7,a);return`
  ${e.registerUniforms([{name:`output_size`,type:`u32`},{name:`sequence_length`,type:`u32`},{name:`batch_size`,type:`u32`}]).declareVariables(t,i,o)}
  ${e.mainStart()}
    ${e.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.output_size`)}
    let total_sequence_length = u32(${i.getByOffset(`0`)});
    let is_subsequent_prompt = uniforms.sequence_length > 1 && uniforms.sequence_length != total_sequence_length;
    let is_first_prompt = !is_subsequent_prompt && uniforms.sequence_length == total_sequence_length;
    let batch_idx = global_idx / uniforms.sequence_length;
    let sequence_idx = i32(global_idx % uniforms.sequence_length);
    var pos_id: i32 = 0;
    let seqlen = ${t.getByOffset(`batch_idx`)};
    let total_seqlen = seqlen + 1;
    if (is_first_prompt) {
      if (sequence_idx < total_seqlen) {
        pos_id = sequence_idx;
      } else {
        pos_id = 1;
      }
      ${o.setByOffset(`global_idx`,`pos_id`)}
    } else if (is_subsequent_prompt) {
      let past_seqlen = total_seqlen - i32(uniforms.sequence_length);
      if (past_seqlen + sequence_idx < total_seqlen) {
        pos_id = past_seqlen + sequence_idx;
      } else {
        pos_id = 1;
      }
      ${o.setByOffset(`global_idx`,`pos_id`)}
    } else if (global_idx < uniforms.batch_size) {
      ${o.setByOffset(`global_idx`,`seqlen`)}
    };
  }
  `}}},qc=(e,t)=>{if(e.inputs.length>14&&e.inputs[14]||e.inputs.length>15&&e.inputs[15])throw Error(`GroupQueryAttention (JSEP): q_norm_weight / k_norm_weight inputs are not supported. The per-head Q/K RMS normalization prologue is implemented only on the CUDA and native WebGPU EPs.`);let n=Uc(e.inputs,t);if(e.inputs[0].dims.length===5)throw Error(`Packed QKV is not implemented`);if(e.inputs[1]?.dims.length===5)throw Error(`Packed KV is not implemented`);let r=e.inputs[0],i=e.inputs[1]&&e.inputs[1].dims.length>0?e.inputs[1]:void 0,a=e.inputs[2]&&e.inputs[2].dims.length>0?e.inputs[2]:void 0,o=e.inputs[3]&&e.inputs[3].dims.length!==0?e.inputs[3]:void 0,s=e.inputs[4]&&e.inputs[4].dims.length!==0?e.inputs[4]:void 0,c=e.inputs.length>4?e.inputs[5]:void 0,l=e.inputs.length>5?e.inputs[6]:void 0,u=n.kvNumHeads?n.kvNumHeads:n.numHeads,d=Pn({axis:2,numOutputs:3,splitSizes:[n.numHeads*n.headSize,u*n.headSize,u*n.headSize]}),[f,p,m]=!i&&!a?e.compute(Fc([r],d),{inputs:[r],outputs:[-1,-1,-1]}):[r,i,a],h,g;if(t.doRotary){let r=e.compute(Kc(n.batchSize,n.sequenceLength,c,l),{inputs:[c,l],outputs:[-1]})[0],i=e.inputs[7],a=e.inputs[8],o=Pn({interleaved:t.rotaryInterleaved!==0,numHeads:n.numHeads,rotaryEmbeddingDim:0,scale:t.scale}),s=[f,r,i,a],u=[-1];h=e.compute(Bc(s,o),{inputs:s,outputs:u})[0],s.splice(0,1,p);let d=Pn({interleaved:t.rotaryInterleaved!==0,numHeads:n.kvNumHeads,rotaryEmbeddingDim:0,scale:t.scale});g=e.compute(Bc(s,d),{inputs:s,outputs:u})[0]}let _=Oc(e,n.batchSize,n.numHeads,n.sequenceLength,n.headSize,t.doRotary?h:f,void 0,0),v=Gc(e,t.doRotary?g:p,n),y=Gc(e,m,n);si(e,_,v,y,void 0,void 0,o,s,void 0,n,c,l)}}),Yc,Xc,Zc,Qc,$c=x(()=>{z(),V(),ir(),K(),Yc=(e,t,n,r,i,a,o,s)=>{let c=Bn(a),l=c===1?`f32`:`vec${c}f`,u=c===1?`vec2f`:`mat2x${c}f`,d=i*o,f=64;d===1&&(f=256);let p=[i,o,a/c],m=[i,o,2],h=[`rank`,`type`,`type`],g=[];return g.push(...H(p,m)),e.compute({name:`InstanceNormComputeChannelScaleShift`,shaderCache:{hint:`${c};${s};${f}`,inputDependencies:h},getRunData:()=>({outputs:[{dims:m,dataType:1}],dispatchGroup:{x:d},programUniforms:g}),getShaderSource:e=>{let i=W(`x`,t.dataType,3,c),a=[i,W(`scale`,n.dataType,n.dims),W(`bias`,r.dataType,r.dims),G(`output`,1,3,2)];return`
  var<workgroup> workgroup_shared : array<${u}, ${f}>;
  const workgroup_size = ${f}u;
  ${e.declareVariables(...a)}
  ${e.mainStart(f)}
    let batch = workgroup_index / uniforms.x_shape[1];
    let channel = workgroup_index % uniforms.x_shape[1];
    let hight = uniforms.x_shape[2];
    // initialize workgroup memory
    var sum = ${l}(0);
    var squared_sum = ${l}(0);
    for (var h = local_idx; h < hight; h += workgroup_size) {
      let value = ${l}(${i.get(`batch`,`channel`,`h`)});
      sum += value;
      squared_sum += value * value;
    }
    workgroup_shared[local_idx] = ${u}(sum, squared_sum);
    workgroupBarrier();

    for (var currSize = workgroup_size >> 1;  currSize > 0; currSize = currSize >> 1) {
      if (local_idx < currSize) {
        workgroup_shared[local_idx] = workgroup_shared[local_idx] + workgroup_shared[local_idx + currSize];
      }
      workgroupBarrier();
    }
    if (local_idx == 0) {
      let sum_final = ${Un(`workgroup_shared[0][0]`,c)} / f32(hight * ${c});
      let squared_sum_final = ${Un(`workgroup_shared[0][1]`,c)} / f32(hight * ${c});

      let inv_std_dev = inverseSqrt(squared_sum_final - sum_final * sum_final + f32(${s}));
      let channel_scale = inv_std_dev * f32(scale[channel]);
      let channel_shift = f32(bias[channel]) - sum_final * channel_scale;
      output[workgroup_index] = vec2f(channel_scale, channel_shift);
    }
  }`}},{inputs:[t,n,r],outputs:[-1]})[0]},Xc=(e,t,n)=>{let r=t[0].dims,i=r,a=r[0],o=r[1],s=B.sizeFromDimension(r,2),c=Bn(s),l=B.size(i)/c,u=Yc(e,t[0],t[1],t[2],a,s,o,n.epsilon),d=[a,o,s/c],f=[a,o];e.compute({name:`InstanceNormalization`,shaderCache:{hint:`${c}`,inputDependencies:[`type`,`none`]},getRunData:()=>({outputs:[{dims:i,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(l/64)},programUniforms:[{type:12,data:l},...H(d,f,d)]}),getShaderSource:e=>{let n=W(`x`,t[0].dataType,d.length,c),r=W(`scale_shift`,1,f.length,2),i=G(`output`,t[0].dataType,d.length,c),a=[n,r,i];return`
  ${e.registerUniform(`output_size`,`u32`).declareVariables(...a)}
  ${e.mainStart()}
  ${e.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.output_size`)}
      let outputIndices = ${i.offsetToIndices(`global_idx`)};
      let batch = outputIndices[0];
      let channel = outputIndices[1];
      let scale_shift = ${r.getByIndices(`vec2<u32>(batch, channel)`)};
      let value = ${n.getByOffset(`global_idx`)} * ${i.type.value}(scale_shift.x) + ${i.type.value}(scale_shift.y);
      ${i.setByOffset(`global_idx`,`value`)};
  }`}},{inputs:[t[0],u]})},Zc=(e,t,n)=>{let r=t[0].dims,i=r,a=r[0],o=r[r.length-1],s=B.sizeFromDimension(r,1)/o,c=Bn(o),l=B.size(i)/c,u=[{type:12,data:s},{type:12,data:Math.floor(o/c)}],d=[`type`,`type`],f=!1,p=[0,r.length-1];for(let e=0;e<r.length-2;e++)f||=r[e+1]!==1,p.push(e+1);f&&=r[r.length-1]!==1;let m=f?e.compute(tr(e.inputs[0],p),{inputs:[e.inputs[0]],outputs:[-1]})[0]:e.inputs[0].reshape(Array.from({length:r.length},(e,t)=>r[p[t]])),h=Yc(e,m,t[1],t[2],a,s,o,n.epsilon);e.compute({name:`InstanceNormalizationNHWC`,shaderCache:{hint:`${c}`,inputDependencies:d},getRunData:()=>({outputs:[{dims:i,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(l/64)},programUniforms:u}),getShaderSource:e=>{let n=Rn(t[0].dataType),r=c===1?`vec2f`:`mat${c}x2f`,a=e=>{let t=e===0?`x`:`y`,r=c===1?`f32`:`vec${c}f`;switch(c){case 1:return`${n}(${r}(scale.${t}))`;case 2:return`vec2<${n}>(${r}(scale[0].${t}, scale[1].${t}))`;case 4:return`vec4<${n}>(${r}(scale[0].${t}, scale[1].${t}, scale[2].${t}, scale[3].${t}))`;default:throw Error(`Not supported compoents ${c}`)}},o=W(`input`,t[0].dataType,t[0].dims,c),s=G(`output`,t[0].dataType,i,c);return`
  @group(0) @binding(0) var<storage, read> input : array<${o.type.storage}>;
  @group(0) @binding(1) var<storage, read> scale_input : array<${r}>;
  @group(0) @binding(2) var<storage, read_write> output : array<${s.type.storage}>;
  struct Uniforms {H: u32, C : u32};
  @group(0) @binding(3) var<uniform> uniforms: Uniforms;

  ${e.mainStart()}
    let current_image_number = global_idx / (uniforms.C * uniforms.H);
    let current_channel_number = global_idx % uniforms.C;

    let scale_offset = current_image_number * uniforms.C + current_channel_number;
    let scale = scale_input[scale_offset];
    output[global_idx] = fma(input[global_idx], ${a(0)}, ${a(1)});
  }`}},{inputs:[t[0],h]})},Qc=(e,t)=>{t.format===`NHWC`?Zc(e,e.inputs,t):Xc(e,e.inputs,t)}}),el,tl,nl,rl=x(()=>{z(),V(),K(),el=e=>{if(!e||e.length<2)throw Error(`layerNorm requires at least 2 inputs.`)},tl=(e,t,n)=>{let r=t.simplified,i=e[0].dims,a=e[1],o=!r&&e[2],s=i,c=B.normalizeAxis(t.axis,i.length),l=B.sizeToDimension(i,c),u=B.sizeFromDimension(i,c),d=B.size(a.dims),f=o?B.size(o.dims):0;if(d!==u||o&&f!==u)throw Error(`Size of X.shape()[axis:] == ${u}.
       Size of scale and bias (if provided) must match this.
       Got scale size of ${d} and bias size of ${f}`);let p=[];for(let e=0;e<i.length;++e)e<c?p.push(i[e]):p.push(1);let m=Bn(u),h=[`type`,`type`],g=[{type:12,data:l},{type:1,data:u},{type:12,data:Math.floor(u/m)},{type:1,data:t.epsilon}];o&&h.push(`type`);let _=n>1,v=n>2,y=t=>{let n=Rn(e[0].dataType),i=[W(`x`,e[0].dataType,e[0].dims,m),W(`scale`,a.dataType,a.dims,m)];return o&&i.push(W(`bias`,o.dataType,o.dims,m)),i.push(G(`output`,e[0].dataType,s,m)),_&&i.push(G(`mean_data_output`,1,p)),v&&i.push(G(`inv_std_output`,1,p)),`
  ${t.registerUniforms([{name:`norm_count`,type:`u32`},{name:`norm_size`,type:`f32`},{name:`norm_size_vectorized`,type:`u32`},{name:`epsilon`,type:`f32`}]).declareVariables(...i)}
  ${t.mainStart()}
    ${t.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.norm_count`)}
    let offset = global_idx * uniforms.norm_size_vectorized;
    var mean_vector = ${Vn(`f32`,m)};
    var mean_square_vector = ${Vn(`f32`,m)};

    for (var h: u32 = 0u; h < uniforms.norm_size_vectorized; h++) {
      let value = ${Hn(n,m,`x[h + offset]`)};
      mean_vector += value;
      mean_square_vector += value * value;
    }
    let mean = ${Un(`mean_vector`,m)} / uniforms.norm_size;
    let inv_std_dev = inverseSqrt(${Un(`mean_square_vector`,m)} / uniforms.norm_size ${r?``:`- mean * mean`} + uniforms.epsilon);

    for (var j: u32 = 0; j < uniforms.norm_size_vectorized; j++) {
      let f32input = ${Hn(n,m,`x[j + offset]`)};
      let f32scale = ${Hn(n,m,`scale[j]`)};
      output[j + offset] = ${i[0].type.value}((f32input ${r?``:`- mean`}) * inv_std_dev * f32scale
        ${o?`+ ${Hn(n,m,`bias[j]`)}`:``}
      );
    }

    ${_?`mean_data_output[global_idx] = mean`:``};
    ${v?`inv_std_output[global_idx] = inv_std_dev`:``};
  }`},b=[{dims:s,dataType:e[0].dataType}];return _&&b.push({dims:p,dataType:1}),v&&b.push({dims:p,dataType:1}),{name:`LayerNormalization`,shaderCache:{hint:`${m};${n};${r}`,inputDependencies:h},getRunData:()=>({outputs:b,dispatchGroup:{x:Math.ceil(l/64)},programUniforms:g}),getShaderSource:y}},nl=(e,t)=>{el(e.inputs),e.compute(tl(e.inputs,t,e.outputCount))}}),il,al,ol=x(()=>{V(),Xa(),io(),il=e=>{if(!e||e.length!==2)throw Error(`MatMul requires 2 inputs.`);if(e[0].dims[e[0].dims.length-1]!==e[1].dims[e[1].dims.length-2])throw Error(`shared dimension does not match.`)},al=e=>{il(e.inputs);let t=Qt.calcShape(e.inputs[0].dims,e.inputs[1].dims,!0);if(!t)throw Error(`Can't use matmul on the given tensors`);let n=t[t.length-1],r=e.inputs[0].dims[e.inputs[0].dims.length-1];if(n<8&&r<8)e.compute(Ya(e.inputs,{activation:``},t));else{let i=t[t.length-2],a=B.size(e.inputs[0].dims.slice(0,-2)),o=B.size(e.inputs[1].dims.slice(0,-2));if(a!==1&&i===1&&o===1){let i=e.inputs[0].reshape([1,a,r]),o=e.inputs[1].reshape([1,r,n]),s=[1,a,n],c=[i,o];e.compute(ro(c,{activation:``},t,s),{inputs:c})}else e.compute(ro(e.inputs,{activation:``},t))}}}),sl,cl,ll,ul,dl,fl=x(()=>{z(),V(),Fn(),K(),sl=(e,t)=>{if(e.length<3||e.length>4)throw Error(`MatMulNBits requires 3 or 4 inputs`);let n=e[0],r=n.dims.length;if(n.dims[r-1]!==t.k)throw Error(`The last dim of input shape does not match the k value`);let i=Math.floor((t.k+t.blockSize-1)/t.blockSize),a=t.blockSize/8*t.bits,o=e[1];if(!B.areEqual(o.dims,[t.n,i,a]))throw Error(`The second inputs must be 3D tensor with shape N X nBlocksPerCol X blobSize`);let s=e[2].dims;if(B.size(s)!==t.n*i)throw Error(`scales input size error.`);if(e.length===4){let n=e[3].dims,r=t.n*(t.bits===8?i:Math.floor((i*t.bits+7)/8));if(B.size(n)!==r)throw Error(`zeroPoints input size error.`)}},cl=(e,t)=>{let n=e[0].dims,r=n.length,i=n[r-2],a=t.k,o=t.n,s=n.slice(0,r-2),c=B.size(s),l=e[1].dims[2]/4,u=e[0].dataType,d=Bn(t.k),f=Bn(l),p=Bn(o),m=s.concat([i,o]),h=i>1&&o/p%2==0?2:1,g=B.size(m)/p/h,_=[],v=[c,i,a/d],y=B.convertShape(e[1].dims).slice();y.splice(-1,1,l/f),_.push(...H(v)),_.push(...H(y)),_.push(...H(e[2].dims)),e.length===4&&_.push(...H(B.convertShape(e[3].dims)));let b=[c,i,o/p];return _.push(...H(b)),{name:`MatMulNBits`,shaderCache:{hint:`${t.blockSize};${t.bits};${d};${f};${p};${h};64`,inputDependencies:Array(e.length).fill(`rank`)},getRunData:()=>({outputs:[{dims:m,dataType:u}],dispatchGroup:{x:g},programUniforms:_}),getShaderSource:n=>{let r=v.length,i=W(`a`,e[0].dataType,r,d),a=W(`b`,12,y.length,f),o=W(`scales`,e[2].dataType,e[2].dims.length),s=[i,a,o],c=e.length===4?W(`zero_points`,12,e[3].dims.length):void 0;c&&s.push(c);let u=b.length,m=G(`output`,e[0].dataType,u,p),g=Rn(e[0].dataType),_=(()=>{switch(d){case 1:return`array<${g}, 8>`;case 2:return`mat4x2<${g}>`;case 4:return`mat2x4<${g}>`;default:throw Error(`${d}-component is not supported.`)}})(),x=Math.floor(32/t.bits),S=Math.floor(x/8),C=()=>{let e=``;for(let n=0;n<S;n++){let r=n*t.bits*4,a=r+t.bits;e+=`
          // reuse a data (pass ${n})
            var input_offset${n>0?n:``} = ${n===0?i.indicesToOffset(`${i.type.indices}(batch, row, word_offset)`):`input_offset`};
            var a_data${n>0?n:``}: ${_};
            for (var j${n>0?n:``}: u32 = 0; j${n>0?n:``} < ${8/d}; j${n>0?n:``}++) {
              a_data${n>0?n:``}[j${n>0?n:``}] = ${i.getByOffset(`input_offset${n>0?n:``}`)};
              input_offset${n>0?n:``}++;
            }
          `;for(let i=0;i<p*h;i++)e+=`
            b_value = ${f===1?`b${i}_data`:`b${i}_data[i]`};
            ${t.bits===2?`{
              let half_word = b_value >> ${n*16}u;
              let byte_lo = half_word & 0xFFu;
              let byte_hi = (half_word >> 8u) & 0xFFu;
              let spread_word = (byte_lo & 0xFu) | ((byte_lo >> 4u) << 8u) | ((byte_hi & 0xFu) << 16u) | ((byte_hi >> 4u) << 24u);
              b_value_lower = unpack4xU8(spread_word & b_mask);
              b_value_upper = unpack4xU8((spread_word >> 2u) & b_mask);
            }`:`b_value_lower = unpack4xU8((b_value >> ${r}u) & b_mask);
            b_value_upper = unpack4xU8((b_value >> ${a}u) & b_mask);`}
            b_quantized_values = ${_}(${Array.from({length:4},(e,t)=>`${g}(b_value_lower[${t}]), ${g}(b_value_upper[${t}])`).join(`, `)});
            b_dequantized_values = ${d===1?`${_}(${Array.from({length:8},(e,t)=>`(b_quantized_values[${t}] - ${c?`zero_point${i}`:`zero_point`}) * scale${i}`).join(`, `)});`:`(b_quantized_values - ${_}(${Array(8).fill(`${c?`zero_point${i}`:`zero_point`}`).join(`,`)})) * scale${i};`};
            workgroup_shared[local_id.x * ${h} + ${Math.floor(i/p)}]${p>1?`[${i%p}]`:``} += ${Array.from({length:8/d},(e,t)=>`${d===1?`a_data${n>0?n:``}[${t}] * b_dequantized_values[${t}]`:`dot(a_data${n>0?n:``}[${t}], b_dequantized_values[${t}])`}`).join(` + `)};
          `}return e},w=()=>{let e=`
            var col_index = col * ${p};
            ${c?`
            let zero_point_values_per_byte: u32 = ${Math.floor(8/t.bits)}u;
            let zero_point_bytes_per_col = (nBlocksPerCol + zero_point_values_per_byte - 1u) / zero_point_values_per_byte;
            var zero_point_byte_count: u32;
            var zero_point_word_index: u32;
            var zero_point_byte_offset: u32;
            let zero_point_sub_offset: u32 = block % zero_point_values_per_byte;
            var zero_point_bits_offset: u32;
            var zero_point_word: u32;`:`
            // The default zero point is ${2**(t.bits-1)} for unsigned ${t.bits}-bit quantization.
            let zero_point = ${g}(${(2**(t.bits-1)).toFixed(1)});`}
            `;for(let n=0;n<p*h;n++)e+=`
            let scale${n} = ${o.getByOffset(`col_index * nBlocksPerCol + block`)};
            ${c?`
            zero_point_byte_count = col_index * zero_point_bytes_per_col + (block / zero_point_values_per_byte);
            zero_point_word_index = zero_point_byte_count >> 0x2u;
            zero_point_byte_offset = zero_point_byte_count & 0x3u;
            zero_point_bits_offset = (zero_point_byte_offset << 3) + (zero_point_sub_offset * ${t.bits}u);
            zero_point_word = ${c.getByOffset(`zero_point_word_index`)} >> zero_point_bits_offset;
            let zero_point${n} = ${g}((zero_point_word) & ${t.bits===2?`0x3u`:`0xFu`});`:``}
            col_index += 1;`;return e},T=()=>{let e=`col_index = col * ${p};`;for(let t=0;t<p*h;t++)e+=`
            let b${t}_data = ${a.getByIndices(`${a.type.indices}(col_index, block, word)`)};
            col_index += 1;`;return e+=`
            var b_value: u32;
            let b_mask: u32 = ${t.bits===2?`0x03030303u`:`0x0F0F0F0Fu`};
            var b_value_lower: vec4<u32>;
            var b_value_upper: vec4<u32>;
            var b_quantized_values: ${_};
            var b_dequantized_values: ${_};`,e};return`
        var<workgroup> workgroup_shared: array<${m.type.value}, ${h*64}>;
        ${n.declareVariables(...s,m)}
        ${n.mainStart([64,1,1])}
          let output_indices = ${m.offsetToIndices(`(global_idx / 64) * ${h}`)};
          let col = output_indices[2];
          let row = output_indices[1];
          let batch = output_indices[0];
          let nBlocksPerCol = uniforms.b_shape[1];

          for (var block = local_id.x; block < nBlocksPerCol; block += 64) {
            //process one block
            var word_offset: u32 = block * ${t.blockSize/d};
            ${w()}
            for (var word: u32 = 0; word < ${l}; word += ${f}) {
              ${T()}
              for (var i: u32 = 0; i < ${f}; i++) {
                ${C()}
                word_offset += ${x/d};
              }
            }
          }
          workgroupBarrier();

          if (local_id.x < ${h}) {
            var output_value: ${m.type.value} = ${m.type.value}(0);
            var workgroup_shared_offset: u32 = local_id.x;
            for (var b: u32 = 0u; b < 64u; b++) {
              output_value += workgroup_shared[workgroup_shared_offset];
              workgroup_shared_offset += ${h};
            }
            ${m.setByIndices(`${m.type.indices}(batch, row, col + local_id.x)`,`output_value`)};
          }
        }`}}},ll=(e,t)=>{let n=e[0].dims,r=n.length,i=n[r-2],a=t.k,o=t.n,s=n.slice(0,r-2),c=B.size(s),l=e[1].dims[2]/4,u=e[0].dataType,d=Bn(t.k),f=Bn(l),p=s.concat([i,o]),m=o%8==0?8:o%4==0?4:1,h=128/m,g=Math.floor(32/t.bits),_=h*f*g,v=_/d,y=_/t.blockSize,b=B.size(p)/m,x=[],S=[c,i,a/d],C=B.convertShape(e[1].dims).slice();C.splice(-1,1,l/f),x.push(...H(S)),x.push(...H(C)),x.push(...H(e[2].dims)),e.length===4&&x.push(...H(B.convertShape(e[3].dims)));let w=[c,i,o];return x.push(...H(w)),{name:`BlockwiseMatMulNBits32`,shaderCache:{hint:`${t.blockSize};${d};${f};${h};${m}`,inputDependencies:Array(e.length).fill(`rank`)},getRunData:()=>({outputs:[{dims:p,dataType:u}],dispatchGroup:{x:b},programUniforms:x}),getShaderSource:n=>{let r=S.length,i=W(`a`,e[0].dataType,r,d),a=W(`b`,12,C.length,f),o=W(`scales`,e[2].dataType,e[2].dims.length),s=[i,a,o],c=e.length===4?W(`zero_points`,12,e[3].dims.length):void 0;c&&s.push(c);let l=w.length,u=G(`output`,e[0].dataType,l),p=Rn(e[0].dataType),_=()=>{switch(d){case 1:return`
          let a_data0 = vec4<${p}>(sub_a[word_offset], sub_a[word_offset + 1], sub_a[word_offset + 2], sub_a[word_offset + 3]);
          let a_data1 = vec4<${p}>(sub_a[word_offset + 4], sub_a[word_offset + 5], sub_a[word_offset + 6], sub_a[word_offset + 7]);`;case 2:return`
          let a_data0 = vec4<${p}>(sub_a[word_offset], sub_a[word_offset + 1]);
          let a_data1 = vec4<${p}>(sub_a[word_offset + 2], sub_a[word_offset + 3]);`;case 4:return`
          let a_data0 = sub_a[word_offset];
          let a_data1 = sub_a[word_offset + 1];`;default:throw Error(`${d}-component is not supported.`)}};return`
        var<workgroup> sub_a: array<${i.type.value}, ${v}>;
        var<workgroup> inter_results: array<array<${u.type.value}, ${h}>, ${m}>;
        ${n.declareVariables(...s,u)}
        ${n.mainStart([h,m,1])}
          let output_indices = ${u.offsetToIndices(`workgroup_index * ${m}`)};
          let col = output_indices[2];
          let row = output_indices[1];
          let batch = output_indices[0];
          let n_blocks_per_col = uniforms.b_shape[1];
          let num_tiles =  (n_blocks_per_col - 1) / ${y} + 1;

          // Loop over shared dimension.
          for (var tile: u32 = 0; tile < num_tiles; tile += 1) {
            let a_col_start = tile * ${v};
            // load one tile A data into shared memory.
            for (var a_offset = local_idx; a_offset < ${v}; a_offset += 128)
            {
              let a_col = a_col_start + a_offset;
              if (a_col < uniforms.a_shape[2])
              {
                sub_a[a_offset] = ${i.getByIndices(`${i.type.indices}(batch, row, a_col)`)};
              } else {
                sub_a[a_offset] = ${i.type.value}(0);
              }
            }
            workgroupBarrier();

            // each thread process one block
            let b_row = col + local_id.y;
            let block = tile * ${y} + local_id.x;
            ${c?`
            let zero_point_values_per_byte: u32 = ${Math.floor(8/t.bits)}u;
            let zero_point_bytes_per_col = (n_blocks_per_col + zero_point_values_per_byte - 1u) / zero_point_values_per_byte;
            let zero_point_byte_count = b_row * zero_point_bytes_per_col + (block / zero_point_values_per_byte);
            let zero_point_word_index = zero_point_byte_count >> 0x2u;
            let zero_point_byte_offset = zero_point_byte_count & 0x3u;
            let zero_point_sub_offset: u32 = block % zero_point_values_per_byte;
            let zero_point_bits_offset = (zero_point_byte_offset << 3) + (zero_point_sub_offset * ${t.bits}u);
            let zero_point_word = ${c.getByOffset(`zero_point_word_index`)} >> zero_point_bits_offset;
            let zero_point = ${p}((zero_point_word) & ${t.bits===2?`0x3u`:`0xFu`});`:`
            // The default zero point is ${2**(t.bits-1)} for unsigned ${t.bits}-bit quantization.
            let zero_point = ${p}(${(2**(t.bits-1)).toFixed(1)});`}
            let scale = ${o.getByOffset(`b_row * n_blocks_per_col + block`)};
            let b_data = ${a.getByIndices(`${a.type.indices}(b_row, block, 0)`)};
            var word_offset = local_id.x * ${t.blockSize/d};
            for (var i: u32 = 0; i < ${f}; i++) {
              let b_value = ${f===1?`b_data`:`b_data[i]`};
              ${(()=>{let e=Math.floor(g/8),n=``;for(let r=0;r<e;r++){let e=r*t.bits*4,i=e+t.bits;n+=`
              ${_()}
              {${t.bits===2?`
                let half_word = b_value >> ${r*16}u;
                let byte_lo = half_word & 0xFFu;
                let byte_hi = (half_word >> 8u) & 0xFFu;
                let spread_word = (byte_lo & 0xFu) | ((byte_lo >> 4u) << 8u) | ((byte_hi & 0xFu) << 16u) | ((byte_hi >> 4u) << 24u);
                let b_value_lower = unpack4xU8(spread_word & 0x03030303u);
                let b_value_upper = unpack4xU8((spread_word >> 2u) & 0x03030303u);`:`
                let b_value_lower = unpack4xU8((b_value >> ${e}u) & 0x0F0F0F0Fu);
                let b_value_upper = unpack4xU8((b_value >> ${i}u) & 0x0F0F0F0Fu);`}
                let b_quantized_values = mat2x4<${p}>(${Array.from({length:4},(e,t)=>`${p}(b_value_lower[${t}]), ${p}(b_value_upper[${t}])`).join(`, `)});
                let b_dequantized_values = (b_quantized_values - mat2x4<${p}>(${Array(8).fill(`zero_point`).join(`,`)})) * scale;
                inter_results[local_id.y][local_id.x] += ${Array.from({length:2},(e,t)=>`${`dot(a_data${t}, b_dequantized_values[${t}])`}`).join(` + `)};
              }
              word_offset += ${8/d};`}return n})()}
            }
            workgroupBarrier();
          }

          if (local_idx < ${m}) {
            var output_value: ${u.type.value} = ${u.type.value}(0);
            for (var b = 0u; b < ${h}; b++) {
              output_value += inter_results[local_idx][b];
            }
            if (col + local_idx < uniforms.output_shape[2])
            {
              ${u.setByIndices(`${u.type.indices}(batch, row, col + local_idx)`,`output_value`)}
            }
          }
        }`}}},ul=(e,t)=>{sl(e.inputs,t),t.blockSize===32&&e.adapterInfo.isVendor(`intel`)&&e.adapterInfo.isArchitecture(`gen-12lp`)?e.compute(ll(e.inputs,t)):e.compute(cl(e.inputs,t))},dl=e=>Pn(e)}),pl,ml,hl,gl,_l,vl,yl,bl,xl,Sl=x(()=>{z(),V(),K(),pl=e=>{if(!e||e.length<1)throw Error(`Too few inputs`);if(e[0].dataType!==1&&e[0].dataType!==10)throw Error(`Input type must be float or float16.`);if(e.length>=2){let t=e[0].dims.length*2===e[1].dims[0];if(e.length===4&&(t=e[3].dims[0]*2===e[1].dims[0]),!t)throw Error(`The pads should be a 1D tensor of shape [2 * input_rank] or [2 * num_axes].`)}},ml=(e,t,n)=>{let r=``;for(let i=t-1;i>=0;--i)r+=`
            k = i32(${e.indicesGet(`indices`,i)}) - ${U(`uniforms.pads`,i,n)};
            if (k < 0) {
              break;
            }
            if (k >= i32(${U(`uniforms.x_shape`,i,t)})) {
              break;
            }
            offset += k * i32(${U(`uniforms.x_strides`,i,t)});
        `;return`
          value = ${e.type.value}(uniforms.constant_value);
          for (var i = 0; i < 1; i++) {
            var offset = 0;
            var k = 0;
            ${r}
            value = x[offset];
          }
      `},hl=(e,t,n)=>{let r=``;for(let i=t-1;i>=0;--i)r+=`
                k = i32(${e.indicesGet(`indices`,i)}) - ${U(`uniforms.pads`,i,n)};
                if (k < 0) {
                  k = -k;
                }
                {
                  let _2n_1 = 2 * (i32(${U(`uniforms.x_shape`,i,t)}) - 1);
                  k = k % _2n_1;
                  if(k >= i32(${U(`uniforms.x_shape`,i,t)})) {
                    k = _2n_1 - k;
                  }
                }
                offset += k * i32(${U(`uniforms.x_strides`,i,t)});
            `;return`
              var offset = 0;
              var k = 0;
              ${r}
              value = x[offset];
          `},gl=(e,t,n)=>{let r=``;for(let i=t-1;i>=0;--i)r+=`
                k = i32(${e.indicesGet(`indices`,i)}) - ${U(`uniforms.pads`,i,n)};
                if (k < 0) {
                  k = 0;
                }
                if (k >= i32(${U(`uniforms.x_shape`,i,t)})) {
                  k = i32(${U(`uniforms.x_shape`,i,t)}) - 1;
                }
                offset += k * i32(${U(`uniforms.x_strides`,i,t)});
            `;return`
              var offset = 0;
              var k = 0;
              ${r}
              value = x[offset];
          `},_l=(e,t,n)=>{let r=``;for(let i=t-1;i>=0;--i)r+=`
                k = i32(${e.indicesGet(`indices`,i)}) - ${U(`uniforms.pads`,i,n)};
                if (k < 0)  {
                  k += i32(${U(`uniforms.x_shape`,i,t)}]);
                }
                if (k >= i32(${U(`uniforms.x_shape`,i,t)})) {
                  k -= i32(${U(`uniforms.x_shape`,i,t)});
                }
                offset += k * i32(${U(`uniforms.x_strides`,i,t)});
            `;return`
              var offset = 0;
              var k = 0;
              ${r}
              value = x[offset];
          `},vl=(e,t,n)=>{switch(n.mode){case 0:return ml(e,t,n.pads.length);case 1:return hl(e,t,n.pads.length);case 2:return gl(e,t,n.pads.length);case 3:return _l(e,t,n.pads.length);default:throw Error(`Invalid mode`)}},yl=(e,t)=>{let n=B.padShape(e[0].dims.slice(),t.pads),r=e[0].dims,i=[{type:12,data:B.size(n)},{type:6,data:t.pads}],a=e.length>=3&&e[2].data;return t.mode===0&&i.push({type:a?e[2].dataType:1,data:t.value}),i.push(...H(e[0].dims,n)),{name:`Pad`,shaderCache:{hint:`${t.mode}${a}`,inputDependencies:[`rank`]},getRunData:()=>({outputs:[{dims:n,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(B.size(n)/64)},programUniforms:i}),getShaderSource:i=>{let o=G(`output`,e[0].dataType,n.length),s=W(`x`,e[0].dataType,r.length),c=s.type.value,l=vl(o,r.length,t),u=[{name:`output_size`,type:`u32`},{name:`pads`,type:`i32`,length:t.pads.length}];return t.mode===0&&u.push({name:`constant_value`,type:a?c:`f32`}),`
            ${i.registerUniforms(u).declareVariables(s,o)}
            ${i.mainStart()}
            ${i.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.output_size`)}

            let indices = ${o.offsetToIndices(`global_idx`)};

            var value = ${c}(0);
            ${l}
            output[global_idx] = value;
        }`}}},bl=(e,t)=>{if(e.length>1){let n=e[1].getBigInt64Array(),r=e.length>=3&&e[2].data?e[2].dataType===10?e[2].getUint16Array()[0]:e[2].getFloat32Array()[0]:0,i=e[0].dims.length,a=new Int32Array(2*i).fill(0);if(e.length>=4){let t=e[3].getBigInt64Array();for(let e=0;e<t.length;e++)a[Number(t[e])]=Number(n[e]),a[Number(t[e])+i]=Number(n[e+t.length])}else n.forEach((e,t)=>a[Number(t)]=Number(e));let o=[];return a.forEach(e=>o.push(e)),{mode:t.mode,value:r,pads:o}}return t},xl=(e,t)=>{pl(e.inputs);let n=bl(e.inputs,t);e.compute(yl(e.inputs,n),{inputs:[0]})}}),Cl,wl,Tl,El,Dl,Ol,kl,Al,jl,Ml,Nl,Pl,Fl,Il,Ll,Rl,zl,Bl,Vl,Hl=x(()=>{Re(),z(),V(),K(),Cl=e=>{if(P.webgpu.validateInputContent&&(!e||e.length!==1))throw Error(`Pool ops requires 1 input.`)},wl=(e,t,n)=>{let r=t.format===`NHWC`,i=e.dims.slice();r&&i.splice(1,0,i.pop());let a=Object.hasOwnProperty.call(t,`dilations`),o=t.kernelShape.slice(),s=t.strides.slice(),c=a?t.dilations.slice():[],l=t.pads.slice();$t.adjustPoolAttributes(n,i,o,s,c,l);let u=$t.computePoolOutputShape(n,i,s,c,o,l,t.autoPad,t.ceilMode),d=Object.assign({},t);a?Object.assign(d,{kernelShape:o,strides:s,pads:l,dilations:c,cacheKey:t.cacheKey}):Object.assign(d,{kernelShape:o,strides:s,pads:l,cacheKey:t.cacheKey});let f=u.slice();return f.push(f.splice(1,1)[0]),[d,r?f:u]},Tl=(e,t)=>{let n=t.format===`NHWC`,r=B.size(e),i=B.size(t.kernelShape),a=[{type:12,data:r},{type:12,data:i}],o=[{name:`outputSize`,type:`u32`},{name:`kernelSize`,type:`u32`}];if(t.kernelShape.length<=2){let e=t.kernelShape[t.kernelShape.length-1],n=t.strides[t.strides.length-1],r=t.pads[t.pads.length/2-1],i=t.pads[t.pads.length-1],s=!!(r+i);a.push({type:12,data:e},{type:12,data:n},{type:12,data:r},{type:12,data:i}),o.push({name:`kw`,type:`u32`},{name:`sw`,type:`u32`},{name:`pwStart`,type:`u32`},{name:`pwEnd`,type:`u32`});let c=!1;if(t.kernelShape.length===2){let e=t.kernelShape[t.kernelShape.length-2],n=t.strides[t.strides.length-2],r=t.pads[t.pads.length/2-2],i=t.pads[t.pads.length-2];c=!!(r+i),a.push({type:12,data:e},{type:12,data:n},{type:12,data:r},{type:12,data:i}),o.push({name:`kh`,type:`u32`},{name:`sh`,type:`u32`},{name:`phStart`,type:`u32`},{name:`phEnd`,type:`u32`})}return[a,o,!0,s,c]}{if(n)throw Error(`Pooling with kernelShape.length > 2 is not supported for NHWC format.`);let e=B.computeStrides(t.kernelShape);return a.push({type:12,data:e},{type:12,data:t.pads},{type:12,data:t.strides}),o.push({name:`kernelStrides`,type:`u32`,length:e.length},{name:`pads`,type:`u32`,length:t.pads.length},{name:`strides`,type:`u32`,length:t.strides.length}),[a,o,!!t.pads.reduce((e,t)=>e+t),!1,!1]}},El=(e,t,n,r,i,a,o,s,c,l,u,d)=>{let f=i.format===`NHWC`,p=t.type.value,m=G(`output`,t.type.tensor,r);if(i.kernelShape.length<=2){let r=``,l=``,h=``,g=n-(f?2:1);if(r=u?`
                for (var i: u32 = 0u; i < uniforms.kw; i++) {
                  xIndices[${g}] = indices[${g}] * uniforms.sw - uniforms.pwStart + i;
                  if (xIndices[${g}] < 0 || xIndices[${g}]
                      >= uniforms.x_shape[${g}]) {
                    pad++;
                    continue;
                  }
                  let x_val = x[${t.indicesToOffset(`xIndices`)}];
                  ${a}
                }`:`
                for (var i: u32 = 0u; i < uniforms.kw; i++) {
                  xIndices[${g}] = indices[${g}] * uniforms.sw - uniforms.pwStart + i;
                  let x_val = x[${t.indicesToOffset(`xIndices`)}];
                  ${a}
                }`,i.kernelShape.length===2){let e=n-(f?3:2);l=d?`
                for (var j: u32 = 0u; j < uniforms.kh; j++) {
                  xIndices[${e}] = indices[${e}] * uniforms.sh - uniforms.phStart + j;
                  if (xIndices[${e}] < 0 || xIndices[${e}] >= uniforms.x_shape[${e}]) {
                    pad += i32(uniforms.kw);
                    continue;
                  }
              `:`
                for (var j: u32 = 0u; j < uniforms.kh; j++) {
                  xIndices[${e}] = indices[${e}] * uniforms.sh - uniforms.phStart + j;
                `,h=`
              }
            `}return`
            ${e.registerUniforms(c).declareVariables(t,m)}

            ${e.mainStart()}
              ${e.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.outputSize`)}

              let indices = ${m.offsetToIndices(`global_idx`)};
              var xIndices = ${m.offsetToIndices(`global_idx`)};

              var value = ${p}(${s});
              var pad = 0;
              ${l}
              ${r}
              ${h}
              ${o}

              output[global_idx] = value;
            }`}{if(f)throw Error(`Pooling with kernelShape.length > 2 is not supported for NHWC format.`);let r=i.kernelShape.length,u=i.pads.length,d=``;return d=l?`
                if (xIndices[j] >= uniforms.x_shape[j]) {
                  pad++;
                  isPad = true;
                  break;
                }
              }
              if (!isPad) {
                let x_val = x[${t.indicesToOffset(`xIndices`)}];
                ${a}
              }`:`
              }
              let x_val = x[${t.indicesToOffset(`xIndices`)}];
              ${a}
            `,`
            ${e.registerUniforms(c).declareVariables(t,m)}

            ${e.mainStart()}
              ${e.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.outputSize`)}
              let indices = ${m.offsetToIndices(`global_idx`)};
              var xIndices = ${m.offsetToIndices(`global_idx`)};

              var offsets: array<u32, ${r}>;

              var value = ${p}(${s});
              var pad = 0;
              var isPad = false;

              for (var i: u32 = 0u; i < uniforms.kernelSize; i++) {
                var offset = i;
                for (var j = 0u; j < ${r-1}u; j++) {
                  offsets[j] = offset / ${U(`uniforms.kernelStrides`,`j`,r)};
                  offset -= offsets[j] * ${U(`uniforms.kernelStrides`,`j`,r)};
                }
                offsets[${r-1}] = offset;

                isPad = false;
                for (var j = ${n-r}u; j < ${n}u; j++) {
                  xIndices[j] = indices[j] * ${U(`uniforms.strides`,`j - ${n-r}u`,r)}
                    + offsets[j - ${n-r}u] - ${U(`uniforms.pads`,`j - 2u`,u)};
                  ${d}
              }
              ${o}

              output[global_idx] = value;
            }`}},Dl=e=>`${e.format};${e.ceilMode};${e.autoPad};${e.kernelShape.length}`,Ol=e=>`${Dl(e)};${e.countIncludePad}`,kl=e=>`${Dl(e)};${e.storageOrder};${e.dilations}`,Al=e=>({format:e.format,autoPad:[`NOTSET`,`VALID`,`SAME_UPPER`,`SAME_LOWER`][e.auto_pad],ceilMode:e.ceil_mode,kernelShape:e.kernel_shape,strides:e.strides,pads:e.pads}),jl=(e,t,n,r)=>{let[i,a]=wl(t,r,n),o=W(`x`,t.dataType,t.dims.length),s=o.type.value,c=``;i.countIncludePad?c+=`value /= ${s}(uniforms.kernelSize);`:c+=`value /= ${s}(i32(uniforms.kernelSize) - pad);`;let[l,u,d,f,p]=Tl(a,i);return l.push(...H(t.dims,a)),{name:e,shaderCache:{hint:`${r.cacheKey};${d};${f};${p}`,inputDependencies:[`rank`]},getRunData:()=>({outputs:[{dims:a,dataType:t.dataType}],dispatchGroup:{x:Math.ceil(B.size(a)/64)},programUniforms:l}),getShaderSource:e=>El(e,o,t.dims.length,a.length,i,`value += x_val;`,c,0,u,d,f,p)}},Ml=e=>{let t=e.count_include_pad!==0,n=Al(e);if(n.ceilMode!==0)throw Error(`ceil_mode output-shape is computed, but ceil_mode kernel execution (padding/divisor) is not yet implemented in the WebGPU AveragePool kernel`);let r={countIncludePad:t,...n,cacheKey:``};return{...r,cacheKey:Ol(r)}},Nl=(e,t)=>{Cl(e.inputs),e.compute(jl(`AveragePool`,e.inputs[0],!1,t))},Pl={autoPad:``,ceilMode:0,countIncludePad:!1,kernelShape:[],strides:[],pads:[],storageOrder:0,dilations:[]},Fl=e=>{let t=e.format;return{format:t,...Pl,cacheKey:t}},Il=(e,t)=>{Cl(e.inputs),e.compute(jl(`GlobalAveragePool`,e.inputs[0],!0,t))},Ll=(e,t,n,r)=>{let[i,a]=wl(t,r,n),o=W(`x`,t.dataType,t.dims.length),s=[`rank`],[c,l,u,d,f]=Tl(a,i);return c.push(...H(t.dims,a)),{name:e,shaderCache:{hint:`${r.cacheKey};${u};${d};${f}`,inputDependencies:s},getRunData:()=>({outputs:[{dims:a,dataType:t.dataType}],dispatchGroup:{x:Math.ceil(B.size(a)/64)},programUniforms:c}),getShaderSource:e=>El(e,o,t.dims.length,a.length,i,`
      value = max(x_val, value);
    `,``,t.dataType===10?-65504:-1e5,l,u,d,f)}},Rl=(e,t)=>{Cl(e.inputs),e.compute(Ll(`MaxPool`,e.inputs[0],!1,t))},zl=e=>{let t=e.storage_order,n=e.dilations,r=Al(e);if(t!==0)throw Error(`column major storage order is not yet supported for MaxPool`);if(r.ceilMode!==0)throw Error(`ceil_mode output-shape is computed, but ceil_mode kernel execution (padding) is not yet implemented in the WebGPU MaxPool kernel`);let i={storageOrder:t,dilations:n,...r,cacheKey:``};return{...i,cacheKey:kl(i)}},Bl=e=>{let t=e.format;return{format:t,...Pl,cacheKey:t}},Vl=(e,t)=>{Cl(e.inputs),e.compute(Ll(`GlobalMaxPool`,e.inputs[0],!0,t))}}),Ul,Wl,Gl,Kl,ql=x(()=>{z(),V(),Fn(),K(),Ul=(e,t)=>{if(e.length<2||e.length>3)throw Error(`DequantizeLinear requires 2 or 3 inputs.`);if(e.length===3&&e[1].dims===e[2].dims)throw Error(`x-scale and x-zero-point must have the same shape.`);if(e.length===3&&e[0].dataType!==e[2].dataType)throw Error(`x and x-zero-point must have the same data type.`);if(e[1].dims.length!==0&&e[1].dims.length!==1&&e[1].dims.length!==e[0].dims.length)throw Error(`scale input must be a scalar, a 1D tensor, or have the same rank as the input tensor.`);if(e.length>2){if(e[0].dataType!==e[2].dataType)throw Error(`x and x-zero-point must have the same data type.`);if(e[1].dims.length!==e[2].dims.length)throw Error(`scale and zero-point inputs must have the same rank.`);if(!e[1].dims.map((t,n)=>t===e[2].dims[n]).reduce((e,t)=>e&&t,!0))throw Error(`scale and zero-point inputs must have the same shape.`)}if(t.blockSize>0){if(e[1].dims.length===0||e[1].dims.length===1&&e[1].dims[0]===1)throw Error(`blockSize must be set only for block quantization.`);if(!e[1].dims.map((n,r)=>r===t.axis||n===e[0].dims[r]).reduce((e,t)=>e&&t,!0))throw Error(`For block qunatization, scale input shape to match the input shape except for the axis`);if(e[1].dims.length!==e[0].dims.length)throw Error(`For block qunatization the scale input rank must be the same as the x rank.`);let n=e[0].dims[t.axis],r=e[1].dims[t.axis];if(t.blockSize<Math.ceil(n/r)||t.blockSize>Math.ceil(n/(r-1)-1))throw Error(`blockSize must be with in the range [ceil(dI / Si), ceil(dI / (Si - 1) - 1)].`)}},Wl=(e,t)=>{let n=B.normalizeAxis(t.axis,e[0].dims.length),r=e[0].dataType,i=r===3,a=e[0].dims,o=e[1].dataType,s=B.size(a),c=r===3||r===2,l=c?[Math.ceil(B.size(e[0].dims)/4)]:e[0].dims,u=e[1].dims,d=e.length>2?e[2]:void 0,f=d?c?[Math.ceil(B.size(d.dims)/4)]:d.dims:void 0,p=u.length===0||u.length===1&&u[0]===1,m=p===!1&&u.length===1,h=Bn(s),g=p&&(!c||h===4),_=g?h:1,v=g&&!c?h:1,y=W(`input`,c?12:r,l.length,v),b=W(`scale`,o,u.length),x=d?W(`zero_point`,c?12:r,f.length):void 0,S=G(`output`,o,a.length,_),C=[y,b];x&&C.push(x);let w=[l,u];d&&w.push(f);let T=[{type:12,data:s/_},{type:12,data:n},{type:12,data:t.blockSize},...H(...w,a)];return{name:`DequantizeLinear`,shaderCache:{hint:t.cacheKey,inputDependencies:x?[`rank`,`rank`,`rank`]:[`rank`,`rank`]},getShaderSource:e=>`
      ${e.registerUniforms([{name:`output_size`,type:`u32`},{name:`axis`,type:`u32`},{name:`block_size`,type:`u32`}]).declareVariables(...C,S)}
      ${e.mainStart()}
          ${e.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.output_size`)}
          let output_indices = ${S.offsetToIndices(`global_idx`)};

          // Set input x
          ${c?`
            let input = ${y.getByOffset(`global_idx / 4`)};
            let x_vec = ${i?`unpack4xI8(input)`:`unpack4xU8(input)`};
            let x_value = ${_===1?`x_vec[global_idx % 4]`:`x_vec`};`:`let x_value = ${y.getByOffset(`global_idx`)};`};

          // Set scale input
          ${p?`let scale_value= ${b.getByOffset(`0`)}`:m?`
            let scale_index = ${S.indicesGet(`output_indices`,`uniforms.axis`)};
            let scale_value= ${b.getByOffset(`scale_index`)};`:`
            var scale_indices: ${b.type.indices} = output_indices;
            let index = ${b.indicesGet(`scale_indices`,`uniforms.axis`)} / uniforms.block_size;
            ${b.indicesSet(`scale_indices`,`uniforms.axis`,`index`)};
            let scale_value= ${b.getByIndices(`scale_indices`)};`};

          // Set zero-point input
          ${x?p?c?`
                let zero_point_input = ${x.getByOffset(`0`)};
                let zero_point_vec =  ${i?`unpack4xI8(zero_point_input)`:`unpack4xU8(zero_point_input)`};
                let zero_point_value= zero_point_vec[0]`:`let zero_point_value = ${x.getByOffset(`0`)}`:m?c?`
                let zero_point_index = ${S.indicesGet(`output_indices`,`uniforms.axis`)};
                let zero_point_input = ${x.getByOffset(`zero_point_index / 4`)};
                let zero_point_vec =  ${i?`unpack4xI8(zero_point_input)`:`unpack4xU8(zero_point_input)`};
                let zero_point_value = zero_point_vec[zero_point_index % 4]`:`
                let zero_point_index = ${S.indicesGet(`output_indices`,`uniforms.axis`)};
                let zero_point_value = ${x.getByOffset(`zero_point_index`)};`:c?`
                let zero_point_offset = ${b.indicesToOffset(`scale_indices`)};
                let zero_point_input = ${x.getByOffset(`zero_point_offset / 4`)};
                let zero_point_vec = ${i?`unpack4xI8(zero_point_input)`:`unpack4xU8(zero_point_input)`};
                let zero_point_value = zero_point_vec[zero_point_offset % 4];`:`let zero_point_value = ${x.getByIndices(`scale_indices`)};`:`let zero_point_value = ${c?i?`i32`:`u32`:y.type.value}(0);`};
      // Compute and write output
      ${S.setByOffset(`global_idx`,`${S.type.value}(x_value - zero_point_value) * scale_value`)};
      }`,getRunData:()=>({outputs:[{dims:a,dataType:o}],dispatchGroup:{x:Math.ceil(s/_/64),y:1,z:1},programUniforms:T})}},Gl=(e,t)=>{Ul(e.inputs,t),e.compute(Wl(e.inputs,t))},Kl=e=>Pn({axis:e.axis,blockSize:e.blockSize})}),Jl,Yl,Xl,Zl=x(()=>{Re(),z(),K(),Jl=(e,t,n)=>{if(e===t||e<t&&n<0||e>t&&n>0)throw Error(`Range these inputs' contents are invalid.`)},Yl=(e,t,n,r)=>{let i=Math.abs(Math.ceil((t-e)/n)),a=[i],o=i,s=[{type:12,data:o},{type:r,data:e},{type:r,data:n},...H(a)];return{name:`Range`,shaderCache:{hint:`${r}`},getShaderSource:e=>{let t=G(`output`,r,a.length),n=t.type.value,i=[{name:`outputSize`,type:`u32`},{name:`start`,type:n},{name:`delta`,type:n}];return`
        ${e.registerUniforms(i).declareVariables(t)}
        ${e.mainStart()}
        ${e.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.outputSize`)}
        output[global_idx] = uniforms.start + ${n}(global_idx) * uniforms.delta;
      }`},getRunData:()=>({outputs:[{dims:a,dataType:r}],dispatchGroup:{x:Math.ceil(o/64)},programUniforms:s})}},Xl=e=>{let t=0,n=0,r=0;e.inputs[0].dataType===6?(t=e.inputs[0].getInt32Array()[0],n=e.inputs[1].getInt32Array()[0],r=e.inputs[2].getInt32Array()[0]):e.inputs[0].dataType===1&&(t=e.inputs[0].getFloat32Array()[0],n=e.inputs[1].getFloat32Array()[0],r=e.inputs[2].getFloat32Array()[0]),P.webgpu.validateInputContent&&Jl(t,n,r),e.compute(Yl(t,n,r,e.inputs[0].dataType),{inputs:[]})}}),Ql,$l,eu,tu,nu=x(()=>{z(),V(),Fn(),K(),Ql=(e,t,n,r)=>{if(e!==`none`&&r!==`i32`&&r!==`u32`&&r!==`f32`)throw Error(`Input ${r} is not supported with reduction ${e}.`);let i=`{
                var oldValue = 0;
                loop {
                  let newValueF32 =`,a=`;
                  let newValue = bitcast<i32>(newValueF32);
                  let res = atomicCompareExchangeWeak(&${t}, oldValue, newValue);
                  if res.exchanged {
                    break;
                  }
                  oldValue = res.old_value;
                }
              }`;switch(e){case`none`:return`${t}=${n};`;case`add`:return r===`i32`||r===`u32`?`atomicAdd(&${t}, bitcast<${r}>(${n}));`:`
              ${i}bitcast<${r}>(oldValue) + (${n})${a}`;case`max`:return r===`i32`||r===`u32`?`atomicMax(&${t}, bitcast<${r}>(${n}));`:`
                ${i}max(bitcast<f32>(oldValue), (${n}))${a}`;case`min`:return r===`i32`||r===`u32`?`atomicMin(&${t}, bitcast<${r}>(${n}));`:`${i}min(bitcast<${r}>(oldValue), (${n}))${a}`;case`mul`:return`${i}(bitcast<${r}>(oldValue) * (${n}))${a}`;default:throw Error(`Reduction ${e} is not supported.`)}},$l=(e,t)=>{let n=e[0].dims,r=e[1].dims,i=n,a=Math.ceil(B.sizeToDimension(r,r.length-1)/1),o=r[r.length-1],s=B.sizeFromDimension(n,o),c=[{type:12,data:a},{type:12,data:o},{type:12,data:s},...H(e[1].dims,e[2].dims,i)];return{name:`ScatterND`,shaderCache:{hint:`${t.cacheKey}_${t.reduction}`,inputDependencies:[`rank`,`rank`]},getRunData:()=>({outputs:[{dims:i,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(a/64)},programUniforms:c}),getShaderSource:n=>{let r=W(`indices`,e[1].dataType,e[1].dims.length),a=W(`updates`,e[2].dataType,e[2].dims.length,1),o=t.reduction!==`none`&&t.reduction!==``?Gn(`output`,e[0].dataType,i.length):G(`output`,e[0].dataType,i.length,1);return`
      ${n.registerUniform(`output_size`,`u32`).registerUniform(`last_index_dimension`,`u32`).registerUniform(`num_updates_elements`,`u32`).declareVariables(r,a,o)}
      ${n.mainStart()}
        ${n.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.output_size`)}
  var data_offset = 0u;
  let indices_start = uniforms.last_index_dimension * global_idx;
  let indices_end = indices_start + uniforms.last_index_dimension;
  for (var i = indices_start; i < indices_end; i++) {
    var index = i32(indices[i].x);
    ${e[0].dims.length===1?`
    let element_count_dim = uniforms.output_strides;
    let dim_value = uniforms.output_shape;`:`
    let element_count_dim = uniforms.output_strides[i - indices_start];
    let dim_value = uniforms.output_shape[i - indices_start];`}
    if (index >= 0) {
      if (index >= i32(dim_value)) {
        index = i32(dim_value - 1);
      }
    } else {
      if (index < -i32(dim_value)) {
        index = 0;
      } else {
        index += i32(dim_value);
      }
    }
    data_offset += u32((u32(index) * element_count_dim));
  }

  for (var i = 0u; i < uniforms.num_updates_elements; i++) {
    let value = updates[uniforms.num_updates_elements * global_idx + i];
    ${Ql(t.reduction,`output[data_offset + i]`,`value`,o.type.value)}
  }

      }`}}},eu=e=>Pn({reduction:e.reduction}),tu=(e,t)=>{e.compute($l(e.inputs,t),{inputs:[e.inputs[1],e.inputs[2]],outputs:[]})}}),ru,iu,au,ou,su,cu,lu,uu,du,fu,pu,mu,hu,gu,_u,vu,yu,bu,xu,Su,Cu=x(()=>{z(),V(),Fn(),K(),ru=(e,t)=>{if(e.every(e=>e>0||(()=>{throw Error(`Resize requires scales input values to be positive`)})),e.length>0){if(t.mode===`linear`){if(!(e.length===2||e.length===3||e.length===4&&e[0]===1&&e[1]===1||e.length===4&&e[0]===1&&e[3]===1||e.length===5&&e[0]===1&&e[1]===1))throw Error(`For linear mode, Resize requires scales to be 2D, 3D, 4D with either two outermost or one innermost and
            one outermost scale values equal to 1, or 5D with two outermost scale values equal to 1`)}else if(t.mode===`cubic`&&!(e.length===2||e.length===4&&e[0]===1&&e[1]===1||e.length===4&&e[0]===1&&e[3]===1))throw Error(`Resize requires scales input size to be 2 or 4 for cubic mode`)}},iu=(e,t,n)=>{t.every(e=>e>=0&&e<n||(()=>{throw Error(`Resize requires axes input values to be positive and less than rank`)}));let r=Array(n).fill(1);return t.forEach((t,n)=>r[t]=e[n]),r},au=(e,t,n,r,i,a)=>{let[o,s,c]=n>10?[1,2,3]:[-1,e.length>1?1:-1,-1],l=e[0].dims.length;if(o>0&&e.length>o&&e[o].dims.length>0)e[o].getFloat32Array().forEach(e=>a.push(e));else if(t.coordinateTransformMode===`tf_crop_and_resize`)throw Error(`Resize requires RoI input to be specified when coordinateTransformMode is tfCropAndResize`);if(s>0&&e.length>s&&e[s].dims.length===1&&e[s].dims[0]>0){if(e[s].getFloat32Array().forEach(e=>r.push(e)),r.length!==0&&r.length!==l&&n>=18&&r.length!==t.axes.length)throw Error(`Resize requires scales input size to be same as input rank or axes size for opset 18 and up`);ru(r,t),t.axes.length>0&&iu(r,t.axes,l).forEach((e,t)=>r[t]=e)}if(c>0&&e.length>c&&e[c].dims.length===1&&e[c].dims[0]>0&&(e[c].getBigInt64Array().forEach(e=>i.push(Number(e))),i.length!==0&&i.length!==l&&n>=18&&i.length!==t.axes.length))throw Error(`Resize requires sizes input size to be same as input rank or axes size for opset 18 and up`);if(t.axes.length>0){if(r.length!==0&&r.length!==t.axes.length)throw Error(`Resize requires "scales" input size to be of axes rank when axes attributes is specified`);if(i.length!==0&&i.length!==t.axes.length)throw Error(`Resize requires "sizes" input size to be of rank axes rank when axes attributes is specified`)}if(typeof r<`u`&&typeof i<`u`&&r.length>0&&i.length>l)throw Error(`Resize requires only of scales or sizes to be specified`)},ou=(e,t,n,r)=>`
  // The whole part and the fractional part are calculated separately due to inaccuracy of floating
  // point division. As an example, f32(21) / f32(7) may evaluate to 2.99... instead of 3, causing an
  // offset-by-one error later in floor().
  let big = (${e}) * (${t});
  let whole = ${r}(big / (${n}));
  let fract = ${r}(big % (${n})) / ${r}(${n});
  return whole + fract;
`,su=(e,t)=>`fn getOriginalCoordinateFromResizedCoordinate(xResized: u32, xScale: f32, lengthResized: u32,
     lengthOriginal: u32, roiStart: f32, roiEnd: f32) -> ${t} { `+(()=>{switch(e){case`asymmetric`:return`
          if (xScale < 1.0 || floor(xScale) != xScale) {
            return ${t}(xResized) / ${t}(xScale);
          } else {
            ${ou(`xResized`,`lengthOriginal`,`lengthResized`,t)}
          }
        `;case`pytorch_half_pixel`:return`if (lengthResized > 1) {
                    return (${t}(xResized) + 0.5) / ${t}(xScale) - 0.5;
                  } else {
                    return 0.0;
                  }`;case`tf_half_pixel_for_nn`:return`return (${t}(xResized) + 0.5) / ${t}(xScale);`;case`align_corners`:return`if (lengthResized == 1) {
                    return 0.0;
                  } else {
                    ${ou(`xResized`,`lengthOriginal - 1`,`lengthResized - 1`,t)}
                  }`;case`tf_crop_and_resize`:return`if (lengthResized > 1) {
                    return ${t}(roiStart) * ${t}(lengthOriginal - 1) +
                        (${t}(xResized) * ${t}(roiEnd - roiStart) * ${t}(lengthOriginal - 1)) /
                        ${t}(lengthResized - 1);
                  } else {
                    return 0.5 * ${t}(roiStart + roiEnd) * ${t}(lengthOriginal - 1);
                  }`;case`half_pixel_symmetric`:return`const outputWidth = ${t}xScale * ${t}(lengthResized);
                  const adjustment = ${t}(lengthResized) / outputWidth;
                  const center = ${t}(lengthOriginal) / 2;
                  const offset = center * (1 - adjustment);
                  return offset + ((${t}(xResized) + 0.5) / ${t}(xScale)) - 0.5;`;case`half_pixel`:return`return ((${t}(xResized) + 0.5) / ${t}(xScale)) - 0.5;`;default:throw Error(`Coordinate transform mode ${e} is not supported`)}})()+`}`,cu=(e,t,n)=>`fn getNearestPixelFromOriginal(xOriginal: ${n}, isDownSample: bool) -> ${n} {`+(()=>{switch(e){case`round_prefer_ceil`:return`if (fract(xOriginal) == 0.5) {             return ceil(xOriginal);           } else {             return round(xOriginal);           }`;case`floor`:return`return floor(xOriginal);`;case`ceil`:return`return ceil(xOriginal);`;case`round_prefer_floor`:return`if (fract(xOriginal) == 0.5) {                     return floor(xOriginal);                   } else {                     return round(xOriginal);                   }`;default:if(t<11)return`if (isDownSample)                     {                       return ceil(xOriginal);                     } else {                       return xOriginal;                     }`;throw Error(`Nearest mode ${e} is not supported`)}})()+`}`,lu=(e,t,n)=>{let r=Array(n).fill(0).concat(Array(n).fill(1)),i=e.length===0?r:e.slice();return t.length>0?(t.forEach((e,a)=>{r[e]=i[a],r[a+n]=i[t.length+a]}),r):i},uu=(e,t,n,r)=>{let i=[];if(n.length>0)if(r.length>0){if(e.forEach(e=>i.push(e)),Math.max(...r)>e.length)throw Error(`axes is out of bound`);r.forEach((e,t)=>i[e]=n[t])}else n.forEach(e=>i.push(e));else{if(t.length===0)throw Error(`Resize requires either scales or sizes.`);i=e.map((e,n)=>Math.round(e*t[n]))}return i},du=(e,t,n)=>{let r=(()=>{switch(n.keepAspectRatioPolicy){case`not_larger`:return n.axes.length>0?Math.min(...n.axes.map(e=>t[e]),Number.MAX_VALUE):Math.min(...t,Number.MAX_VALUE);case`not_smaller`:return n.axes.length>0?Math.max(...n.axes.map(e=>t[e]),Number.MIN_VALUE):Math.max(...t,Number.MIN_VALUE);default:throw Error(`Keep aspect ratio policy ${n.keepAspectRatioPolicy} is not supported`)}})();t.fill(1,0,t.length);let i=e.slice();return n.axes.length>0?(n.axes.forEach(e=>t[e]=r),n.axes.forEach(n=>i[n]=Math.round(e[n]*t[n]))):(t.fill(r,0,t.length),i.forEach((e,n)=>i[n]=Math.round(e*t[n]))),i},fu=(e,t,n,r,i)=>`
    fn calculateOriginalIndicesFromOutputIndices(output_indices: ${e.type.indices}) -> array<${e.type.value}, ${n.length}> {
      var original_indices: array<${e.type.value}, ${n.length}>;
      for (var i:u32 = 0; i < ${n.length}; i++) {
        var output_index = ${e.indicesGet(`output_indices`,`i`)};
        var scale = ${U(`uniforms.scales`,`i`,r)};
        var roi_low = ${U(`uniforms.roi`,`i`,i)};
        var roi_hi = ${U(`uniforms.roi`,`i + ${t.length}`,i)};
        if (scale == 1.0) {
          original_indices[i] = ${e.type.value}(output_index);
        } else {
          var input_shape_i = ${U(`uniforms.input_shape`,`i`,t.length)};
          var output_shape_i = ${U(`uniforms.output_shape`,`i`,n.length)};
          original_indices[i] = getOriginalCoordinateFromResizedCoordinate(output_index, scale, output_shape_i,
                                                                           input_shape_i, roi_low, roi_hi);
        }
      }
      return original_indices;
    }`,pu=(e,t,n,r,i,a,o)=>`
    fn calculateInputIndicesFromOutputIndices(output_indices: ${t.type.indices}) -> ${e.type.indices} {
      var input_indices: ${e.type.indices};
      for (var i:u32 = 0; i < ${r.length}; i++) {
        var output_index = ${t.indicesGet(`output_indices`,`i`)};
        var input_index: u32;
        var scale = ${U(`uniforms.scales`,`i`,i)};
        if (scale == 1.0) {
          input_index = output_index;
        } else {
          var roi_low = ${U(`uniforms.roi`,`i`,a)};
          var roi_hi = ${U(`uniforms.roi`,`i + ${n.length}`,a)};
          var input_shape_i = ${U(`uniforms.input_shape`,`i`,n.length)};
          var output_shape_i = ${U(`uniforms.output_shape`,`i`,r.length)};
          var original_idx = getOriginalCoordinateFromResizedCoordinate(output_index, scale, output_shape_i,
                                                                        input_shape_i, roi_low, roi_hi);
          if (!${o} || (original_idx >= 0 && original_idx < ${t.type.value}(input_shape_i))) {
            if (original_idx < 0) {
              input_index = 0;
            } else if (original_idx > ${t.type.value}(input_shape_i - 1)) {
              input_index = input_shape_i - 1;
            } else {
              input_index = u32(getNearestPixelFromOriginal(original_idx, scale < 1));
            }
          } else {
            input_index = u32(original_idx);
          }
        }
        ${e.indicesSet(`input_indices`,`i`,`input_index`)}
      }
      return input_indices;
    }`,mu=(e,t)=>`
    fn checkInputIndices(input_indices: ${e.type.indices}) -> bool {
      for (var i:u32 = 0; i < ${t.length}; i++) {
        var input_index = ${e.indicesGet(`input_indices`,`i`)};
        if (input_index < 0 || input_index >= ${U(`uniforms.input_shape`,`i`,t.length)}) {
          return false;
        }
      }
      return true;
    }`,hu=(e,t,n,r)=>e.rank>r?`
    ${e.indicesSet(`input_indices`,t,`channel`)};
    ${e.indicesSet(`input_indices`,n,`batch`)};
`:``,gu=(e,t,n,r,i)=>{let[a,o,s,c]=n.length===2?[-1,0,1,-1]:[0,2,3,1],l=e.type.value;return`
    fn getInputValue(batch: u32, channel: u32, row: u32, col: u32) -> ${l} {
      var input_indices: ${e.type.indices};
      ${e.indicesSet(`input_indices`,o,`max(0, min(row, ${n[o]} - 1))`)};
      ${e.indicesSet(`input_indices`,s,`max(0, min(col, ${n[s]} - 1))`)};
      ${hu(e,c,a,2)}
      return ${e.getByIndices(`input_indices`)};
    }

    fn bilinearInterpolation(output_indices: ${t.type.indices}) -> ${l} {
      var originalIndices = calculateOriginalIndicesFromOutputIndices(output_indices);
      var row:${l} = originalIndices[${o}];
      var col:${l} = originalIndices[${s}];
      ${r?`if (row < 0 || row > (${n[o]} - 1) || col < 0 || col > (${n[s]} - 1)) {
        return ${i};
      }`:``};
      row = max(0, min(row, ${n[o]} - 1));
      col = max(0, min(col, ${n[s]} - 1));
      var row1: u32 = u32(row);
      var col1: u32 = u32(col);
      var row2: u32 = u32(row + 1);
      var col2: u32 = u32(col + 1);
      var channel: u32 = ${n.length>2?`u32(originalIndices[${c}])`:`0`};
      var batch: u32 =  ${n.length>2?`u32(originalIndices[${a}])`:`0`};
      var x11: ${l} = getInputValue(batch, channel, row1, col1);
      var x12: ${l} = getInputValue(batch, channel, row1, col2);
      var x21: ${l} = getInputValue(batch, channel, row2, col1);
      var x22: ${l} = getInputValue(batch, channel, row2, col2);
      var dx1: ${l} = abs(row - ${l}(row1));
      var dx2: ${l} = abs(${l}(row2) - row);
      var dy1: ${l} = abs(col - ${l}(col1));
      var dy2: ${l} = abs(${l}(col2) - col);
      if (row1 == row2) {
        dx1 = 0.5;
        dx2 = 0.5;
      }
      if (col1 == col2) {
        dy1 = 0.5;
        dy2 = 0.5;
      }
      return (x11 * dx2 * dy2 + x12 * dx2 * dy1 + x21 * dx1 * dy2 + x22 * dx1 * dy1);
    }`},_u=(e,t,n,r,i,a,o,s,c,l)=>{let[u,d]=n.length===2?[0,1]:[2,3],f=e.type.value,p=o=>{let d=o===u?`row`:`col`;return`
      fn ${d}CubicInterpolation(input_indices: ${e.type.indices}, output_indices: ${t.type.indices}) -> ${f} {
        var output_index = ${t.indicesGet(`output_indices`,o)};
        var originalIdx: ${f} = getOriginalCoordinateFromResizedCoordinate(output_index, ${i[o]},
        ${r[o]}, ${n[o]}, ${a[o]}, ${a[o]} + ${n.length});
        var fractOriginalIdx: ${f} = originalIdx - floor(originalIdx);
        var coefs = getCubicInterpolationCoefs(fractOriginalIdx);

        if (${s} && (originalIdx < 0 || originalIdx > (${n[o]} - 1))) {
          return ${c};
        }
        var data: array<${f}, 4> = array<${f}, 4>(0.0, 0.0, 0.0, 0.0);
        for (var i: i32 = -1; i < 3; i++) {
          var ${d}: ${f} = originalIdx + ${f}(i);
          if (${d} < 0 || ${d} >= ${n[o]}) {
            ${l?`coefs[i + 1] = 0.0;
                        continue;`:s?`return ${c};`:`${d} = max(0, min(${d}, ${n[o]} - 1));`};
          }
        var input_indices_copy: ${e.type.indices} = input_indices;
          ${e.indicesSet(`input_indices_copy`,o,`u32(${d})`)};
          data[i + 1] = ${o===u?e.getByIndices(`input_indices_copy`):`rowCubicInterpolation(input_indices_copy, output_indices)`};
        }
        return cubicInterpolation1D(data, coefs);
      }`};return`
    ${p(u)};
    ${p(d)};
  fn getCubicInterpolationCoefs(s: ${f}) -> array<${f}, 4> {
    var absS = abs(s);
    var coeffs: array<${f}, 4> = array<${f}, 4>(0.0, 0.0, 0.0, 0.0);
    var oneMinusAbsS: ${f} = 1.0 - absS;
    var twoMinusAbsS: ${f} = 2.0 - absS;
    var onePlusAbsS: ${f} = 1.0 + absS;
    coeffs[0] = ((${o} * onePlusAbsS - 5 * ${o}) * onePlusAbsS + 8 * ${o}) * onePlusAbsS - 4 * ${o};
    coeffs[1] = ((${o} + 2) * absS - (${o} + 3)) * absS * absS + 1;
    coeffs[2] = ((${o} + 2) * oneMinusAbsS - (${o} + 3)) * oneMinusAbsS * oneMinusAbsS + 1;
    coeffs[3] = ((${o} * twoMinusAbsS - 5 * ${o}) * twoMinusAbsS + 8 * ${o}) * twoMinusAbsS - 4 * ${o};
    return coeffs;
  }

  fn cubicInterpolation1D(x: array<${f}, 4>, coefs: array<${f}, 4>) -> ${f} {
    var coefsSum: ${f} = coefs[0] + coefs[1] + coefs[2] + coefs[3];
    return (x[0] * coefs[0] + x[1] * coefs[1]+ x[2] * coefs[2]+ x[3] * coefs[3]) / coefsSum;
  }

  fn bicubicInterpolation(output_indices: ${t.type.indices}) -> ${f} {
    var input_indices: ${e.type.indices} = output_indices;
    return colCubicInterpolation(input_indices, output_indices);
  }
    `},vu=(e,t,n,r,i)=>{let[a,o,s,c,l]=n.length===3?[-1,0,1,2,-1]:[0,2,3,4,1],u=e.type.value;return`
    fn getInputValue(batch: u32, channel: u32, depth:u32, height: u32, width: u32) -> ${u} {
      var input_indices: ${e.type.indices};
      ${e.indicesSet(`input_indices`,o,`max(0, min(depth, ${n[o]} - 1))`)};
      ${e.indicesSet(`input_indices`,s,`max(0, min(height, ${n[s]} - 1))`)};
      ${e.indicesSet(`input_indices`,c,`max(0, min(width, ${n[c]} - 1))`)};
      ${hu(e,l,a,3)}
      return ${e.getByIndices(`input_indices`)};
    }

    fn trilinearInterpolation(output_indices: ${t.type.indices}) -> ${u} {
      var originalIndices = calculateOriginalIndicesFromOutputIndices(output_indices);
      var depth:${u} = originalIndices[${o}];
      var height:${u} = originalIndices[${s}];
      var width:${u} = originalIndices[${c}];
      ${r?`if (depth < 0 || depth > (${n[o]} - 1) || height < 0 || height > (${n[s]} - 1) || width < 0 || (width > ${n[c]} - 1)) {
      return ${i};
        }`:``};

    depth = max(0, min(depth, ${n[o]} - 1));
      height = max(0, min(height, ${n[s]} - 1));
      width = max(0, min(width, ${n[c]} - 1));
      var depth1: u32 = u32(depth);
      var height1: u32 = u32(height);
      var width1: u32 = u32(width);
      var depth2: u32 = u32(depth + 1);
      var height2: u32 = u32(height + 1);
      var width2: u32 = u32(width + 1);
      var channel: u32 = ${n.length>3?`u32(originalIndices[${l}])`:`0`};
      var batch: u32 =  ${n.length>3?`u32(originalIndices[${a}])`:`0`};

      var x111: ${u} = getInputValue(batch, channel, depth1, height1, width1);
      var x112: ${u} = getInputValue(batch, channel, depth1, height1, width2);
      var x121: ${u} = getInputValue(batch, channel, depth1, height2, width1);
      var x122: ${u} = getInputValue(batch, channel, depth1, height2, width2);
      var x211: ${u} = getInputValue(batch, channel, depth2, height1, width1);
      var x212: ${u} = getInputValue(batch, channel, depth2, height1, width2);
      var x221: ${u} = getInputValue(batch, channel, depth2, height2, width1);
      var x222: ${u} = getInputValue(batch, channel, depth2, height2, width2);
      var dx1: ${u} = abs(depth - ${u}(depth1));
      var dx2: ${u} = abs(${u}(depth2) - depth);
      var dy1: ${u} = abs(height - ${u}(height1));
      var dy2: ${u} = abs(${u}(height2) - height);
      var dz1: ${u} = abs(width - ${u}(width1));
      var dz2: ${u} = abs(${u}(width2) - width);
      if (depth1 == depth2) {
        dx1 = 0.5;
        dx2 = 0.5;
      }
      if (height1 == height2) {
        dy1 = 0.5;
        dy2 = 0.5;
      }
      if (width1 == width2) {
        dz1 = 0.5;
        dz2 = 0.5;
      }
      return (x111 * dx2 * dy2 * dz2 + x112 * dx2 * dy2 * dz1 + x121 * dx2 * dy1 *dz2 + x122 * dx2 * dy1 * dz1 +
              x211 * dx1 * dy2 * dz2 + x212 * dx1 * dy2 * dz1 + x221 * dx1 * dy1 *dz2 + x222 * dx1 * dy1 * dz1);
    }`},yu=(e,t,n,r,i,a)=>{let o=e.dims,s=lu(a,t.axes,o.length),c=uu(o,r,i,t.axes),l=r.slice();r.length===0&&(l=o.map((e,t)=>e===0?1:c[t]/e),t.keepAspectRatioPolicy!==`stretch`&&(c=du(o,l,t)));let u=G(`output`,e.dataType,c.length),d=W(`input`,e.dataType,o.length),f=B.size(c),p=o.length===c.length&&o.every((e,t)=>e===c[t]),m=t.coordinateTransformMode===`tf_crop_and_resize`,h=t.extrapolationValue,g=d.type.value;return{name:`Resize`,shaderCache:{hint:`${t.cacheKey}|${n}|${l.length>0?t.mode===`cubic`?l:l.length:``}|${i.length>0?i:``}|${s.length>0?s:``}|${p}|${t.mode===`nearest`?o.length:o}`,inputDependencies:[`rank`]},getShaderSource:e=>`
      ${p?``:`
      ${su(t.coordinateTransformMode,g)};
      ${(()=>{switch(t.mode){case`nearest`:return`
              ${mu(d,o)};
              ${cu(t.nearestMode,n,g)};
              ${pu(d,u,o,c,l.length,s.length,m)};
              `;case`linear`:return`
              ${fu(u,o,c,l.length,s.length)};
              ${(()=>{if(o.length===2||o.length===4)return`${gu(d,u,o,m,h)}`;if(o.length===3||o.length===5)return`${vu(d,u,o,m,h)}`;throw Error(`Linear mode only supports input dims 2, 3, 4 and 5 are supported in linear mode.`)})()};
            `;case`cubic`:return`
            ${(()=>{if(o.length===2||o.length===4)return`${_u(d,u,o,c,l,s,t.cubicCoeffA,m,t.extrapolationValue,t.excludeOutside)}`;throw Error(`Cubic mode only supports input dims 2 and 4 are supported in linear mode.`)})()};
            `;default:throw Error(`Invalid resize mode`)}})()};
      `}
      ${e.registerUniform(`output_size`,`u32`).registerUniform(`scales`,`f32`,l.length).registerUniform(`roi`,`f32`,s.length).declareVariables(d,u)}
      ${e.mainStart()}
        ${e.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.output_size`)}
        ${p?`output[global_idx] = input[global_idx];`:`
        let output_indices = ${u.offsetToIndices(`global_idx`)};
        var input_indices: ${d.type.indices};
        ${(()=>{switch(t.mode){case`nearest`:return`input_indices = calculateInputIndicesFromOutputIndices(output_indices);
                if (checkInputIndices(input_indices)) {
                  output[global_idx] = ${d.getByIndices(`input_indices`)};
                } else {
                  output[global_idx] = ${t.extrapolationValue};
                }`;case`linear`:return`output[global_idx] = ${o.length===2||o.length===4?`bilinearInterpolation`:`trilinearInterpolation`}(output_indices);`;case`cubic`:return`output[global_idx] = bicubicInterpolation(output_indices);`;default:throw Error(`Unsupported resize mode: ${t.mode}`)}})()};
`}
      }`,getRunData:()=>({outputs:[{dims:c,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(f/64)},programUniforms:[{type:12,data:f},{type:1,data:l},{type:1,data:s},...H(o,c)]})}},bu=e=>{let t=e.customDataBuffer;return new Uint32Array(t.buffer,t.byteOffset,1)[0]},xu=(e,t)=>{let n=[],r=[],i=[],a=bu(e);if(t.antialias!==0)throw Error(`Only default value (0) for Antialias attribute is supported`);au(e.inputs,t,a,n,r,i),e.compute(yu(e.inputs[0],t,a,n,r,i),{inputs:[0]})},Su=e=>{let t=e.antialias,n=e.axes,r=e.coordinateTransformMode,i=e.cubicCoeffA,a=e.excludeOutside!==0,o=e.extrapolationValue,s=e.keepAspectRatioPolicy,c=e.mode,l=e.nearestMode===``?`simple`:e.nearestMode;return Pn({antialias:t,axes:n,coordinateTransformMode:r,cubicCoeffA:i,excludeOutside:a,extrapolationValue:o,keepAspectRatioPolicy:s,mode:c,nearestMode:l})}}),wu,Tu,Eu,Du=x(()=>{z(),V(),K(),wu=e=>{if(!e||e.length<3)throw Error(`layerNorm requires at least 3 inputs.`);let t=e[0],n=e[1],r=e[2];if(t.dataType!==n.dataType||t.dataType!==r.dataType)throw Error(`All inputs must have the same data type`);if(t.dims.length!==3&&t.dims.length!==2)throw Error(`Input must be 2D or 3D`);if(n.dims.length!==3&&n.dims.length!==2)throw Error(`Skip must be 2D or 3D`);let i=t.dims[t.dims.length-1],a=t.dims[t.dims.length-2];if(n.dims[n.dims.length-1]!==i)throw Error(`Skip must have the same hidden size as input`);if(n.dims[n.dims.length-2]!==a)throw Error(`Skip must have the same sequence length as input`);if(r.dims.length!==1)throw Error(`Gamma must be 1D`);if(r.dims[r.dims.length-1]!==i)throw Error(`Gamma must have the same hidden size as input`);if(e.length>3){let t=e[3];if(t.dims.length!==1)throw Error(`Beta must be 1D`);if(t.dims[t.dims.length-1]!==i)throw Error(`Beta must have the same hidden size as input`)}if(e.length>4){let t=e[4];if(t.dims.length!==1)throw Error(`Bias must be 1D`);if(t.dims[t.dims.length-1]!==i)throw Error(`Bias must have the same hidden size as input`)}},Tu=(e,t,n,r)=>{let i=t.simplified,a=e[0].dims,o=B.size(a),s=a,c=o,l=a.slice(-1)[0],u=r?a.slice(0,-1).concat(1):[],d=!i&&e.length>3,f=e.length>4,p=r&&n>1,m=r&&n>2,h=n>3,g=Bn(l),_=[{type:12,data:c},{type:12,data:g},{type:12,data:l},{type:1,data:t.epsilon}],v=t=>{let n=[{name:`output_size`,type:`u32`},{name:`components`,type:`u32`},{name:`hidden_size`,type:`u32`},{name:`epsilon`,type:`f32`}],r=[W(`x`,e[0].dataType,e[0].dims,g),W(`skip`,e[1].dataType,e[1].dims,g),W(`gamma`,e[2].dataType,e[2].dims,g)];d&&r.push(W(`beta`,e[3].dataType,e[3].dims,g)),f&&r.push(W(`bias`,e[4].dataType,e[4].dims,g)),r.push(G(`output`,e[0].dataType,s,g)),p&&r.push(G(`mean_output`,1,u)),m&&r.push(G(`inv_std_output`,1,u)),h&&r.push(G(`input_skip_bias_sum`,e[0].dataType,s,g));let a=Rn(e[0].dataType),o=Rn(1,g);return`

      ${t.registerUniforms(n).declareVariables(...r)}
      var<workgroup> sum_shared : array<${o}, 64>;
      var<workgroup> sum_squared_shared : array<${o}, 64>;

      ${t.mainStart([64,1,1])}
        let ix = local_id.x;
        let iy = global_id.x / 64;

        let hidden_size_vectorized: u32 = uniforms.hidden_size / uniforms.components;
        var stride = hidden_size_vectorized / 64;
        let offset = ix * stride + iy * hidden_size_vectorized;
        let offset1d = stride * ix;
        if (ix == 63) {
          stride = hidden_size_vectorized - stride * ix;
        }
        for (var i: u32 = 0; i < stride; i++) {
          let skip_value = skip[offset + i];
          let bias_value = ${f?`bias[offset1d + i]`:a+`(0.0)`};
          let input_value = x[offset + i];
          let value = input_value + skip_value + bias_value;
          ${h?`input_skip_bias_sum[offset + i] = value;`:``}
          output[offset + i] = value;
          let f32_value = ${Hn(a,g,`value`)};
          sum_shared[ix] += f32_value;
          sum_squared_shared[ix] += f32_value * f32_value;
        }
        workgroupBarrier();

        var reduce_size : u32 = 64;
        for (var curr_size = reduce_size >> 1;  curr_size > 0; curr_size = reduce_size >> 1) {
          reduce_size = curr_size + (reduce_size & 1);
          if (ix < curr_size) {
            sum_shared[ix] += sum_shared[ix + reduce_size];
            sum_squared_shared[ix] += sum_squared_shared[ix + reduce_size];
          }
          workgroupBarrier();
        }

        let sum = sum_shared[0];
        let square_sum = sum_squared_shared[0];
        let mean = ${Un(`sum`,g)} / f32(uniforms.hidden_size);
        let inv_std_dev = inverseSqrt(${Un(`square_sum`,g)} / f32(uniforms.hidden_size) ${i?``:`- mean * mean`} + uniforms.epsilon);
        ${p?`mean_output[global_idx] = mean;`:``}
        ${m?`inv_std_output[global_idx] = inv_std_dev;`:``}

        for (var i: u32 = 0; i < stride; i++) {
          output[offset + i] = (output[offset + i] ${i?``:`- ${a}(mean)`}) *
            ${a}(inv_std_dev) * gamma[offset1d + i]
            ${d?`+ beta[offset1d + i]`:``};
        }
      }`},y=[{dims:s,dataType:e[0].dataType}];return n>1&&y.push({dims:u,dataType:1}),n>2&&y.push({dims:u,dataType:1}),n>3&&y.push({dims:a,dataType:e[0].dataType}),{name:`SkipLayerNormalization`,shaderCache:{hint:`${g};${p};${m};${h}`,inputDependencies:e.map((e,t)=>`type`)},getShaderSource:v,getRunData:()=>({outputs:y,dispatchGroup:{x:Math.ceil(c/l)},programUniforms:_})}},Eu=(e,t)=>{wu(e.inputs);let n=[0];e.outputCount>1&&n.push(-3),e.outputCount>2&&n.push(-3),e.outputCount>3&&n.push(3),e.compute(Tu(e.inputs,t,e.outputCount,!1),{outputs:n})}}),Ou,ku,Au,ju,Mu,Nu,Pu,Fu,Iu=x(()=>{z(),V(),Fn(),K(),Ou=(e,t)=>{if(!e||e.length<1)throw Error(`too few inputs`);if(t.axes.length!==0){if(t.axes.length!==t.starts.length||t.axes.length!==t.ends.length)throw Error(`axes, starts and ends must have the same length`)}else if(t.starts.length!==t.ends.length)throw Error(`starts and ends must have the same length`);e.slice(1).forEach((t,n)=>{if(e[n+1].dataType!==6&&e[n+1].dataType!==7)throw Error(`Input ${n} must be an array of int32 or int64`)})},ku=(e,t)=>{let n=[];if(e.length>t)if(e[t].dataType===7)e[t].getBigInt64Array().forEach(e=>n.push(Number(e)));else if(e[t].dataType===6)e[t].getInt32Array().forEach(e=>n.push(Number(e)));else throw Error(`Input ${t} must be an array of int32 or int64`);return n},Au=(e,t)=>{if(e.length>1){let t=ku(e,1),n=ku(e,2),r=ku(e,3);return r.length===0&&(r=[...Array(e[0].dims.length).keys()]),Pn({starts:t,ends:n,axes:r})}return t},ju=(e,t,n,r,i)=>{let a=e;return e<0&&(a+=n[r[t]]),i[t]<0?Math.max(0,Math.min(a,n[r[t]]-1)):Math.max(0,Math.min(a,n[r[t]]))},Mu=(e,t,n)=>`fn calculateInputIndices(output_indices: ${t.type.indices}) -> ${e.type.indices} {
          var input_indices: ${e.type.indices};
          var carry = 0u;
          for (var i = ${n.length-1}; i >= 0; i--) {
            let input_shape_i = ${U(`uniforms.input_shape`,`i`,n.length)};
            let steps_i = ${U(`uniforms.steps`,`i`,n.length)};
            let signs_i = ${U(`uniforms.signs`,`i`,n.length)};
            let starts_i = ${U(`uniforms.starts`,`i`,n.length)};
            var output_index = ${t.indicesGet(`output_indices`,`i`)};
            var input_index = output_index * steps_i + starts_i + carry;
            carry = input_index / input_shape_i;
            input_index = input_index % input_shape_i;
            if (signs_i < 0) {
              input_index = input_shape_i - input_index - 1u + starts_i;
            }
            ${e.indicesSet(`input_indices`,`i`,`input_index`)};
          }
          return input_indices;
      }`,Nu=(e,t)=>{let n=e[0].dims,r=B.size(n),i=t.axes.length>0?B.normalizeAxes(t.axes,n.length):[...Array(n.length).keys()],a=ku(e,4);a.forEach(e=>e!==0||(()=>{throw Error(`step cannot be 0`)})),a.length===0&&(a=Array(i.length).fill(1));let o=t.starts.map((e,t)=>ju(e,t,n,i,a)),s=t.ends.map((e,t)=>ju(e,t,n,i,a));if(i.length!==o.length||i.length!==s.length)throw Error(`start, ends and axes should have the same number of elements`);if(i.length!==n.length)for(let e=0;e<n.length;++e)i.includes(e)||(o.splice(e,0,0),s.splice(e,0,n[e]),a.splice(e,0,1));let c=a.map(e=>Math.sign(e));a.forEach((e,t,n)=>{if(e<0){let r=(s[t]-o[t])/e,i=o[t],c=i+r*a[t];o[t]=c,s[t]=i,n[t]=-e}});let l=n.slice(0);i.forEach((e,t)=>{l[e]=Math.ceil((s[e]-o[e])/a[e])});let u={dims:l,dataType:e[0].dataType},d=G(`output`,e[0].dataType,l.length),f=W(`input`,e[0].dataType,e[0].dims.length),p=B.size(l),m=[{name:`outputSize`,type:`u32`},{name:`starts`,type:`u32`,length:o.length},{name:`signs`,type:`i32`,length:c.length},{name:`steps`,type:`u32`,length:a.length}],h=[{type:12,data:p},{type:12,data:o},{type:6,data:c},{type:12,data:a},...H(e[0].dims,l)];return{name:`Slice`,shaderCache:{hint:`${c.length}_${o.length}_${a.length}`,inputDependencies:[`rank`]},getShaderSource:e=>`
      ${e.registerUniforms(m).declareVariables(f,d)}
        ${Mu(f,d,n)}
        ${e.mainStart()}
          ${e.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.outputSize`)}
          let output_indices = ${d.offsetToIndices(`global_idx`)};
          let input_indices = calculateInputIndices(output_indices);
          ${d.setByOffset(`global_idx`,f.getByIndices(`input_indices`))}
      }`,getRunData:()=>({outputs:[u],dispatchGroup:{x:Math.ceil(r/64)},programUniforms:h})}},Pu=(e,t)=>{Ou(e.inputs,t);let n=Au(e.inputs,t);e.compute(Nu(e.inputs,n),{inputs:[0]})},Fu=e=>{let t=e.starts,n=e.ends,r=e.axes;return Pn({starts:t,ends:n,axes:r})}}),Lu,Ru,zu,Bu,Vu=x(()=>{z(),V(),Fn(),ir(),K(),Lu=e=>{if(!e||e.length!==1)throw Error(`Softmax op requires 1 input.`)},Ru=(e,t)=>{let n=e.inputs[0],r=n.dims,i=B.size(r),a=r.length,o=B.normalizeAxis(t.axis,a),s=o<r.length-1,c,l=[];s?(l=Array.from({length:a},(e,t)=>t),l[o]=a-1,l[a-1]=o,c=e.compute(tr(n,l),{inputs:[n],outputs:[-1]})[0]):c=n;let u=c.dims,d=u[a-1],f=i/d,p=Bn(d),m=d/p,h=64;f===1&&(h=256);let g=(e,t)=>t===4?`max(max(${e}.x, ${e}.y), max(${e}.z, ${e}.w))`:t===2?`max(${e}.x, ${e}.y)`:t===3?`max(max(${e}.x, ${e}.y), ${e}.z)`:e,_=W(`x`,c.dataType,c.dims,p),v=G(`result`,c.dataType,c.dims,p),y=_.type.value,b=Rn(c.dataType)===`f32`?`var threadMax = ${y}(-3.4028234663852886e+38f);`:`var threadMax = ${y}(-65504.0h);`,x=e.compute({name:`Softmax`,shaderCache:{hint:`${p};${h}`,inputDependencies:[`type`]},getRunData:()=>({outputs:[{dims:u,dataType:c.dataType}],dispatchGroup:{x:f},programUniforms:[{type:6,data:m}]}),getShaderSource:e=>`
      var<workgroup> rowMaxShared : ${y};
      var<workgroup> rowSumShared : ${y};
      var<workgroup> threadShared : array<${y}, ${h}>;

      fn getValue(row: i32, col: i32, row_stride: i32) -> ${y} {
        let index = row * row_stride + col;
        return x[index];
      }

      fn setValue(row: i32, col: i32, row_stride: i32, value: ${y}) {
        let index = row * row_stride + col;
        result[index] = value;
      }
      ${e.registerUniform(`packedCols`,`i32`).declareVariables(_,v)}
      ${e.mainStart(h)}
        let gindex = i32(global_idx);
        let lindex = i32(local_idx);
        const wg = ${h};
        let row = gindex / wg;
        let cols = uniforms.packedCols;
        let row_stride : i32 = uniforms.packedCols;

        // find the rows max
        ${b}
        for (var col = lindex; col < cols; col += wg) {
          let value = getValue(row, col, row_stride);
          threadMax = max(threadMax, value);
        }
        if (lindex < cols) {
          threadShared[lindex] = threadMax;
        }
        workgroupBarrier();

        var reduceSize = min(cols, wg);
        for (var currSize = reduceSize >> 1;  currSize > 0; currSize = reduceSize >> 1) {
          reduceSize = currSize + (reduceSize & 1);
          if (lindex < currSize) {
            threadShared[lindex] = max(threadShared[lindex], threadShared[lindex + reduceSize]);
          }
          workgroupBarrier();
        }
        if (lindex == 0) {
          rowMaxShared = ${y}(${g(`threadShared[0]`,p)});
        }
        workgroupBarrier();

        // find the rows sum
        var threadSum = ${y}(0.0);
        for (var col = lindex; col < cols; col += wg) {
          let subExp = exp(getValue(row, col, row_stride) - rowMaxShared);
          threadSum += subExp;
        }
        threadShared[lindex] = threadSum;
        workgroupBarrier();

        for (var currSize = wg >> 1;  currSize > 0; currSize = currSize >> 1) {
          if (lindex < currSize) {
            threadShared[lindex] = threadShared[lindex] + threadShared[lindex + currSize];
          }
          workgroupBarrier();
        }
        if (lindex == 0) {
          rowSumShared = ${y}(${Un(`threadShared[0]`,p)});
        }
        workgroupBarrier();

        // calculate final value for each element in the row
        for (var col = lindex; col < cols; col += wg) {
          var value = exp(getValue(row, col, row_stride) - rowMaxShared) / rowSumShared;
          // max operation protects against NaN since all values should be >=0
          value = max(value, ${y}(0.0));
          setValue(row, col, row_stride, value);
        }
      }`},{inputs:[c],outputs:[s?-1:0]})[0];s&&e.compute(tr(x,l),{inputs:[x]})},zu=(e,t)=>{Lu(e.inputs),Ru(e,t)},Bu=e=>Pn({axis:e.axis})}),Hu,Uu,Wu,Gu,Ku,qu=x(()=>{z(),V(),K(),Hu=e=>Array.from(e.getBigInt64Array(),Number),Uu=e=>{if(!e||e.length!==2)throw Error(`Tile requires 2 inputs.`);if(e[0].dataType!==1&&e[0].dataType!==10&&e[0].dataType!==6&&e[0].dataType!==12)throw Error(`Tile only support float, float16, int32, and uint32 data types`);if(e[1].dataType!==7)throw Error("Tile `repeats` input should be of int64 data type");if(e[1].dims.length!==1)throw Error("Tile `repeats` input should be 1-D");if(Hu(e[1]).length!==e[0].dims.length)throw Error("Tile `repeats` input should have same number of elements as rank of input data tensor")},Wu=(e,t)=>{let n=[];for(let r=0;r<e.length;++r)n.push(e[r]*t[r]);return n},Gu=(e,t)=>{let n=e[0].dims,r=t??Hu(e[1]),i=Wu(n,r),a=B.size(i),o=e[0].dataType,s=W(`input`,o,n.length),c=G(`output`,o,i.length);return{name:`Tile`,shaderCache:{hint:`${r}`,inputDependencies:[`rank`]},getRunData:()=>({outputs:[{dims:i,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(a/64)},programUniforms:[{type:12,data:a},...H(e[0].dims,i)]}),getShaderSource:e=>`
      const inputShape = ${s.indices(...n)};
      ${e.registerUniform(`output_size`,`u32`).declareVariables(s,c)}
      ${e.mainStart()}
      ${e.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.output_size`)}
      let output_indices = ${c.offsetToIndices(`global_idx`)};
      var input_indices: ${s.type.indices};
      for (var i = 0; i < ${n.length}; i++) {
        let input_dim_i = ${s.indicesGet(`uniforms.input_shape`,`i`)};
        let input_dim_value = ${c.indicesGet(`output_indices`,`i`)}  % input_dim_i;

        ${s.indicesSet(`input_indices`,`i`,`input_dim_value`)}
      }
      ${c.setByOffset(`global_idx`,s.getByIndices(`input_indices`))}
    }`}},Ku=e=>{Uu(e.inputs),e.compute(Gu(e.inputs),{inputs:[0]})}}),Ju,Yu,Xu,Zu=x(()=>{z(),V(),K(),Ju=(e,t,n,r,i)=>{let a=G(`output_data`,i,n.length,4),o=W(`a_data`,t[1].dataType,t[1].dims.length,4),s=W(`b_data`,t[2].dataType,t[2].dims.length,4),c=W(`c_data`,t[0].dataType,t[0].dims.length,4),l,u=(e,t,n)=>`select(${t}, ${e}, ${n})`;if(!r)l=a.setByOffset(`global_idx`,u(o.getByOffset(`global_idx`),s.getByOffset(`global_idx`),c.getByOffset(`global_idx`)));else{let e=(e,t,n=``)=>{let r=`a_data[index_a${t}][component_a${t}]`,i=`b_data[index_b${t}][component_b${t}]`,l=`bool(c_data[index_c${t}] & (0xffu << (component_c${t} * 8)))`;return`
            let output_indices${t} = ${a.offsetToIndices(`global_idx * 4u + ${t}u`)};
            let offset_a${t} = ${o.broadcastedIndicesToOffset(`output_indices${t}`,a)};
            let offset_b${t} = ${s.broadcastedIndicesToOffset(`output_indices${t}`,a)};
            let offset_c${t} = ${c.broadcastedIndicesToOffset(`output_indices${t}`,a)};
            let index_a${t} = offset_a${t} / 4u;
            let index_b${t} = offset_b${t} / 4u;
            let index_c${t} = offset_c${t} / 4u;
            let component_a${t} = offset_a${t} % 4u;
            let component_b${t} = offset_b${t} % 4u;
            let component_c${t} = offset_c${t} % 4u;
            ${e}[${t}] = ${n}(${u(r,i,l)});
          `};l=i===9?`
            var data = vec4<u32>(0);
            ${e(`data`,0,`u32`)}
            ${e(`data`,1,`u32`)}
            ${e(`data`,2,`u32`)}
            ${e(`data`,3,`u32`)}
            output_data[global_idx] = dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(data));`:`
            ${e(`output_data[global_idx]`,0)}
            ${e(`output_data[global_idx]`,1)}
            ${e(`output_data[global_idx]`,2)}
            ${e(`output_data[global_idx]`,3)}
          `}return`
        ${e.registerUniform(`vec_size`,`u32`).declareVariables(c,o,s,a)}
        ${e.mainStart()}
        ${e.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.vec_size`)}
        ${l}
      }`},Yu=e=>{let t=e[1].dims,n=e[2].dims,r=e[0].dims,i=e[1].dataType,a=!(B.areEqual(t,n)&&B.areEqual(n,r)),o=t,s=B.size(t);if(a){let e=Qt.calcShape(Qt.calcShape(t,n,!1),r,!1);if(!e)throw Error(`Can't perform where op on the given tensors`);o=e,s=B.size(o)}let c=Math.ceil(s/4);return{name:`Where`,shaderCache:{inputDependencies:[`rank`,`rank`,`rank`]},getShaderSource:t=>Ju(t,e,o,a,i),getRunData:()=>({outputs:[{dims:o,dataType:i}],dispatchGroup:{x:Math.ceil(s/64/4)},programUniforms:[{type:12,data:c},...H(r,t,n,o)]})}},Xu=e=>{e.compute(Yu(e.inputs))}}),Qu,$u=x(()=>{ti(),ui(),hi(),yi(),ga(),Aa(),La(),Ao(),Ho(),Ko(),Qo(),gs(),Os(),Ps(),Ls(),Hs(),Ks(),Zs(),nc(),sc(),Sc(),Jc(),$c(),rl(),ol(),fl(),Ac(),Sl(),Hl(),ql(),Zl(),nu(),Xr(),Cu(),Hc(),Du(),Iu(),Vu(),Rc(),qu(),ir(),fa(),Zu(),Qu=new Map([[`Abs`,[Si]],[`Acos`,[Ci]],[`Acosh`,[wi]],[`Add`,[ba]],[`ArgMax`,[$r,ei]],[`ArgMin`,[Qr,ei]],[`Asin`,[Ti]],[`Asinh`,[Ei]],[`Atan`,[Di]],[`Atanh`,[Oi]],[`Attention`,[li]],[`AveragePool`,[Nl,Ml]],[`BatchNormalization`,[mi]],[`BiasAdd`,[vi]],[`BiasSplitGelu`,[ha]],[`Cast`,[Ai,ki]],[`Ceil`,[Ni]],[`Clip`,[Mi]],[`Concat`,[Fa,Ia]],[`Conv`,[ko,To]],[`ConvTranspose`,[Vo,Lo]],[`Cos`,[Pi]],[`Cosh`,[Fi]],[`CumSum`,[Wo,Go]],[`DepthToSpace`,[Xo,Zo]],[`DequantizeLinear`,[Gl,Kl]],[`DFT`,[ms,hs]],[`Div`,[xa]],[`Einsum`,[Es,Ds]],[`Elu`,[Li,Ii]],[`Equal`,[Sa]],[`Erf`,[zi]],[`Exp`,[Bi]],[`Expand`,[Ns]],[`FastGelu`,[Is]],[`Floor`,[Vi]],[`FusedConv`,[ko,To]],[`Gather`,[Vs,Bs]],[`GatherElements`,[tc,ec]],[`GatherBlockQuantized`,[Ys,Xs]],[`GatherND`,[Ws,Gs]],[`Gelu`,[Hi]],[`Gemm`,[oc,ac]],[`GlobalAveragePool`,[Il,Fl]],[`GlobalMaxPool`,[Vl,Bl]],[`Greater`,[Ea]],[`GreaterOrEqual`,[Oa]],[`GridSample`,[bc,xc]],[`GroupQueryAttention`,[qc]],[`HardSigmoid`,[Xi,Yi]],[`HardSwish`,[Zi]],[`InstanceNormalization`,[Qc]],[`LayerNormalization`,[nl]],[`LeakyRelu`,[Ui,Ii]],[`Less`,[Da]],[`LessOrEqual`,[ka]],[`Log`,[ca]],[`MatMul`,[al]],[`MatMulNBits`,[ul,dl]],[`MaxPool`,[Rl,zl]],[`Mul`,[Ca]],[`MultiHeadAttention`,[kc,Tc]],[`Neg`,[Gi]],[`Not`,[Wi]],[`Pad`,[xl]],[`Pow`,[wa]],[`QuickGelu`,[da,Ii]],[`Range`,[Xl]],[`Reciprocal`,[Ki]],[`ReduceMin`,[Gr]],[`ReduceMean`,[Br]],[`ReduceMax`,[Wr]],[`ReduceSum`,[qr]],[`ReduceProd`,[Kr]],[`ReduceL1`,[Vr]],[`ReduceL2`,[Hr]],[`ReduceLogSum`,[Yr]],[`ReduceLogSumExp`,[Ur]],[`ReduceSumSquare`,[Jr]],[`Relu`,[qi]],[`Resize`,[xu,Su]],[`RotaryEmbedding`,[Vc]],[`ScatterND`,[tu,eu]],[`Sigmoid`,[Ji]],[`Sin`,[Qi]],[`Sinh`,[$i]],[`Slice`,[Pu,Fu]],[`SkipLayerNormalization`,[Eu]],[`Split`,[Ic,Lc]],[`Sqrt`,[ea]],[`Softmax`,[zu,Bu]],[`Sub`,[Ta]],[`Tan`,[ta]],[`Tanh`,[ra]],[`ThresholdedRelu`,[sa,Ii]],[`Tile`,[Ku]],[`Transpose`,[nr,rr]],[`Where`,[Xu]]])}),ed,td=x(()=>{Re(),Xt(),K(),ed=class{constructor(e){this.backend=e,this.repo=new Map,this.attributesBound=!1}getArtifact(e){return this.repo.get(e)}setArtifact(e,t){this.repo.set(e,t)}run(e,t,n,r,i){Ee(e.programInfo.name);let a=this.backend.device,o=this.backend.getComputePassEncoder();this.backend.writeTimestamp(this.backend.pendingDispatchNumber*2);let s=[];for(let e of t)s.push({binding:s.length,resource:{buffer:e.buffer}});for(let e of n)s.push({binding:s.length,resource:{buffer:e.buffer}});i&&s.push({binding:s.length,resource:i});let c=a.createBindGroup({layout:e.computePipeline.getBindGroupLayout(0),entries:s,label:e.programInfo.name});if(this.backend.sessionStatus===`capturing`){let t={kernelId:this.backend.currentKernelId,computePipeline:e.computePipeline,bindGroup:c,dispatchGroup:r};this.backend.capturedCommandList.get(this.backend.currentSessionId).push(t)}o.setPipeline(e.computePipeline),o.setBindGroup(0,c),o.dispatchWorkgroups(...r),this.backend.writeTimestamp(this.backend.pendingDispatchNumber*2+1),this.backend.pendingDispatchNumber++,(this.backend.pendingDispatchNumber>=this.backend.maxDispatchNumber||this.backend.queryType===`at-passes`)&&this.backend.endComputePass(),this.backend.pendingDispatchNumber>=this.backend.maxDispatchNumber&&this.backend.flush(),L(e.programInfo.name)}dispose(){}build(e,t){Ee(e.name);let n=this.backend.device,r=[];[{feature:`shader-f16`,extension:`f16`},{feature:`subgroups`,extension:`subgroups`}].forEach(e=>{n.features.has(e.feature)&&r.push(`enable ${e.extension};`)});let i=Jn(t,this.backend.device.limits),a=e.getShaderSource(i),o=`${r.join(`
`)}
${i.additionalImplementations}
${a}`,s=n.createShaderModule({code:o,label:e.name});Yt(`verbose`,()=>`[WebGPU] ${e.name} shader code: ${o}`);let c=n.createComputePipeline({compute:{module:s,entryPoint:`main`},layout:`auto`,label:e.name});return L(e.name),{programInfo:e,computePipeline:c,uniformVariablesInfo:i.variablesInfo}}normalizeDispatchGroupSize(e){let t=typeof e==`number`?e:e.x,n=typeof e==`number`?1:e.y||1,r=typeof e==`number`?1:e.z||1,i=this.backend.device.limits.maxComputeWorkgroupsPerDimension;if(t<=i&&n<=i&&r<=i)return[t,n,r];let a=t*n*r,o=Math.ceil(Math.sqrt(a));if(o>i){if(o=Math.ceil(Math.cbrt(a)),o>i)throw Error(`Total dispatch size exceeds WebGPU maximum.`);return[o,o,o]}return[o,o,1]}}}),nd={};S(nd,{WebGpuBackend:()=>od});var rd,id,ad,od,sd=x(()=>{Re(),z(),Xt(),an(),Mn(),$u(),td(),rd=(e,t)=>{if(t.length!==e.length)throw Error(`inputDependencies length ${t.length} is not equal to inputTensors length ${e.length}.`);let n=[];for(let r=0;r<e.length;++r){let i=e[r].dataType;switch(t[r]){case`none`:n.push(``);break;case`type`:n.push(`${i}`);break;case`rank`:{let t=e[r].dims.length;n.push(`${i};${t}`);break}case`dims`:{let t=e[r].dims.join(`,`);n.push(`${i};${t}`);break}default:throw Error(`unsupported input dependency: ${t[r]}`)}}return n.join(`|`)},id=(e,t,n)=>{let r=e.name;return e.shaderCache?.hint&&(r+=`[`+e.shaderCache.hint+`]`),r+=`:`+n+`:${rd(t,e.shaderCache?.inputDependencies??Array(t.length).fill(`dims`))}`,r},ad=class{constructor(e){e&&(this.architecture=e.architecture,this.vendor=e.vendor)}isArchitecture(e){return this.architecture===e}isVendor(e){return this.vendor===e}},od=class{constructor(){this.currentSessionId=null,this.currentKernelId=null,this.commandEncoder=null,this.computePassEncoder=null,this.maxDispatchNumber=16,this.pendingDispatchNumber=0,this.pendingKernels=[],this.pendingQueries=new Map,this.sessionStatus=`default`,this.capturedCommandList=new Map,this.capturedPendingKernels=new Map,this.sessionExternalDataMapping=new Map}get currentKernelCustomData(){if(this.currentKernelId===null)throw Error(`currentKernelCustomData(): currentKernelId is null. (should not happen)`);let e=this.kernelCustomData.get(this.currentKernelId);return e||(e={},this.kernelCustomData.set(this.currentKernelId,e)),e}async initialize(e,t){this.env=e;let n=[],r={requiredLimits:{maxComputeWorkgroupStorageSize:t.limits.maxComputeWorkgroupStorageSize,maxComputeWorkgroupsPerDimension:t.limits.maxComputeWorkgroupsPerDimension,maxStorageBufferBindingSize:t.limits.maxStorageBufferBindingSize,maxBufferSize:t.limits.maxBufferSize,maxComputeInvocationsPerWorkgroup:t.limits.maxComputeInvocationsPerWorkgroup,maxComputeWorkgroupSizeX:t.limits.maxComputeWorkgroupSizeX,maxComputeWorkgroupSizeY:t.limits.maxComputeWorkgroupSizeY,maxComputeWorkgroupSizeZ:t.limits.maxComputeWorkgroupSizeZ},requiredFeatures:n},i=e=>t.features.has(e)&&n.push(e)&&!0;i(`chromium-experimental-timestamp-query-inside-passes`)||i(`timestamp-query`),i(`shader-f16`),i(`subgroups`),this.device=await t.requestDevice(r);let a=t,o=t.info??(typeof a.requestAdapterInfo==`function`?await a.requestAdapterInfo():void 0);this.adapterInfo=new ad(o),this.gpuDataManager=jn(this),this.programManager=new ed(this),this.kernels=new Map,this.kernelPersistentData=new Map,this.kernelCustomData=new Map,qt(e.logLevel,!!e.debug),this.device.onuncapturederror=e=>{e.error instanceof GPUValidationError&&console.error(`An uncaught WebGPU validation error was raised: ${e.error.message}`)},Object.defineProperty(this.env.webgpu,"device",{value:this.device,writable:!1,enumerable:!0,configurable:!0}),Object.defineProperty(this.env.webgpu,"adapter",{value:t,writable:!1,enumerable:!0,configurable:!1}),this.setQueryType()}dispose(){typeof this.querySet<`u`&&this.querySet.destroy(),this.gpuDataManager.dispose(),this.device&&this.env?.webgpu&&this.device.lost.then(()=>{delete this.env.webgpu.device})}getCommandEncoder(){return this.commandEncoder||=this.device.createCommandEncoder(),this.commandEncoder}getComputePassEncoder(){if(!this.computePassEncoder){let e=this.getCommandEncoder(),t={};this.queryType===`at-passes`&&(t.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:this.pendingDispatchNumber*2,endOfPassWriteIndex:this.pendingDispatchNumber*2+1}),this.computePassEncoder=e.beginComputePass(t)}return this.computePassEncoder}endComputePass(){this.computePassEncoder&&=(this.computePassEncoder.end(),null)}flush(){if(!this.commandEncoder)return;Ee(),this.endComputePass();let e;this.queryType!==`none`&&(this.commandEncoder.resolveQuerySet(this.querySet,0,this.pendingDispatchNumber*2,this.queryResolveBuffer,0),e=this.device.createBuffer({size:this.pendingDispatchNumber*2*8,usage:GPUBufferUsage.MAP_READ|GPUBufferUsage.COPY_DST}),this.pendingQueries.set(e,this.pendingKernels),this.pendingKernels=[],this.commandEncoder.copyBufferToBuffer(this.queryResolveBuffer,0,e,0,this.pendingDispatchNumber*2*8)),this.device.queue.submit([this.commandEncoder.finish()]),this.gpuDataManager.refreshPendingBuffers(),this.commandEncoder=null,this.pendingDispatchNumber=0,this.queryType!==`none`&&e.mapAsync(GPUMapMode.READ).then(()=>{let t=new BigUint64Array(e.getMappedRange()),n=this.pendingQueries.get(e);for(let e=0;e<t.length/2;e++){let r=n[e],i=r.kernelId,a=this.kernels.get(i),o=a.kernelType,s=a.kernelName,c=r.programName,l=r.inputTensorViews,u=r.outputTensorViews,d=t[e*2],f=t[e*2+1];typeof this.queryTimeBase>`u`&&(this.queryTimeBase=d);let p=Number(d-this.queryTimeBase),m=Number(f-this.queryTimeBase);if(!Number.isSafeInteger(p)||!Number.isSafeInteger(m))throw RangeError(`incorrect timestamp range`);if(this.env.webgpu.profiling?.ondata)this.env.webgpu.profiling.ondata({version:1,inputsMetadata:l.map(e=>({dims:e.dims,dataType:Pt(e.dataType)})),outputsMetadata:u.map(e=>({dims:e.dims,dataType:Pt(e.dataType)})),kernelId:i,kernelType:o,kernelName:s,programName:c,startTime:p,endTime:m});else{let e=``;l.forEach((t,n)=>{e+=`input[${n}]: [${t.dims}] | ${Pt(t.dataType)}, `});let t=``;u.forEach((e,n)=>{t+=`output[${n}]: [${e.dims}] | ${Pt(e.dataType)}, `}),console.log(`[profiling] kernel "${i}|${o}|${s}|${c}" ${e}${t}start time: ${p} ns, execution time: ${m-p} ns`)}we(`GPU`,`${c}::${d}::${f}`)}e.unmap(),this.pendingQueries.delete(e)}),L()}run(e,t,n,r,i,a){Ee(e.name);let o=[];for(let e=0;e<t.length;++e){let n=t[e].data;if(n===0)continue;let r=this.gpuDataManager.get(n);if(!r)throw Error(`no GPU data for input: ${n}`);o.push(r)}let{outputs:s,dispatchGroup:c,programUniforms:l}=e.getRunData(t),u=n.length===0?s.map((e,t)=>t):n;if(u.length!==s.length)throw Error(`Output size ${u.length} must be equal to ${s.length}.`);let d=[],f=[];for(let e=0;e<s.length;++e){if(!Number.isInteger(u[e])||u[e]<-3||u[e]>=a)throw Error(`Invalid output index: ${u[e]}`);if(u[e]===-3)continue;let t=u[e]===-1,n=u[e]===-2,o=t||n?i(s[e].dataType,s[e].dims):r(u[e],s[e].dataType,s[e].dims);if(d.push(o),o.data===0)continue;let c=this.gpuDataManager.get(o.data);if(!c)throw Error(`no GPU data for output: ${o.data}`);if(t&&this.temporaryData.push(c),n){let e=this.kernelPersistentData.get(this.currentKernelId);e||(e=[],this.kernelPersistentData.set(this.currentKernelId,e)),e.push(c)}f.push(c)}if(o.length!==t.length||f.length!==d.length){if(f.length===0)return L(e.name),d;throw Error(`Program ${e.name} has zero-sized tensor(s) in inputs or outputs. This is not supported now.`)}let p;if(l){let e=0,t=[];l.forEach(n=>{let r=typeof n.data==`number`?[n.data]:n.data;if(r.length===0)return;let i=n.type===10?2:4,a,o;n.type===10?(o=r.length>4?16:r.length>2?8:r.length*i,a=r.length>4?16:i*r.length):(o=r.length<=2?r.length*i:16,a=16),e=Math.ceil(e/o)*o,t.push(e);let s=n.type===10?8:4;e+=r.length>4?Math.ceil(r.length/s)*a:r.length*i}),e=Math.ceil(e/16)*16;let n=new ArrayBuffer(e);l.forEach((e,r)=>{let i=t[r],a=typeof e.data==`number`?[e.data]:e.data;if(e.type===6)new Int32Array(n,i,a.length).set(a);else if(e.type===12)new Uint32Array(n,i,a.length).set(a);else if(e.type===10)new Uint16Array(n,i,a.length).set(a);else if(e.type===1)new Float32Array(n,i,a.length).set(a);else throw Error(`Unsupported uniform type: ${Pt(e.type)}`)});let r=this.gpuDataManager.create(e,GPUBufferUsage.COPY_DST|GPUBufferUsage.UNIFORM);this.device.queue.writeBuffer(r.buffer,0,n,0,e),this.gpuDataManager.release(r.id),p={offset:0,size:e,buffer:r.buffer}}let m=this.programManager.normalizeDispatchGroupSize(c),h=m[1]===1&&m[2]===1,g=id(e,t,h),_=this.programManager.getArtifact(g);if(_||(_=this.programManager.build(e,m),this.programManager.setArtifact(g,_),Yt(`info`,()=>`[artifact] key: ${g}, programName: ${e.name}`)),l&&_.uniformVariablesInfo){if(l.length!==_.uniformVariablesInfo.length)throw Error(`Uniform variables count mismatch: expect ${_.uniformVariablesInfo.length}, got ${l.length} in program "${_.programInfo.name}".`);for(let e=0;e<l.length;e++){let t=l[e],n=t.type,r=typeof t.data==`number`?1:t.data.length,[i,a]=_.uniformVariablesInfo[e];if(n!==i||r!==a)throw Error(`Uniform variable ${e} mismatch: expect type ${i} with size ${a}, got type ${n} with size ${r} in program "${_.programInfo.name}".`)}}if(Yt(`info`,()=>`[ProgramManager] run "${e.name}" (key=${g}) with ${m[0]}x${m[1]}x${m[2]}`),this.queryType!==`none`||this.sessionStatus===`capturing`){let e={kernelId:this.currentKernelId,programName:_.programInfo.name,inputTensorViews:t,outputTensorViews:d};this.pendingKernels.push(e),this.sessionStatus===`capturing`&&this.capturedPendingKernels.get(this.currentSessionId).push(e)}return this.programManager.run(_,o,f,m,p),L(e.name),d}upload(e,t){this.gpuDataManager.upload(e,t)}memcpy(e,t){this.gpuDataManager.memcpy(e,t)}async download(e,t){await this.gpuDataManager.download(e,t)}alloc(e){return this.gpuDataManager.create(e).id}free(e){return this.gpuDataManager.release(e)}createKernel(e,t,n,r){let i=Qu.get(e);if(!i)throw Error(`kernel not implemented: ${e}`);let a={kernelType:e,kernelName:r,kernelEntry:i[0],attributes:[i[1],n]};this.kernels.set(t,a)}releaseKernel(e){let t=this.kernelPersistentData.get(e);if(t){for(let e of t)this.gpuDataManager.release(e.id);this.kernelPersistentData.delete(e)}this.kernelCustomData.delete(e),this.kernels.delete(e)}computeKernel(e,t,n){let r=this.kernels.get(e);if(!r)throw Error(`kernel not created: ${e}`);let i=r.kernelType,a=r.kernelName,o=r.kernelEntry,s=r.attributes;if(this.currentKernelId!==null)throw Error(`kernel "[${i}] ${a}" is not allowed to be called recursively`);this.currentKernelId=e,s[0]&&=(s[1]=s[0](s[1]),void 0),Yt(`info`,()=>`[WebGPU] Start to run kernel "[${i}] ${a}"...`);let c=this.env.debug;this.temporaryData=[];try{return c&&this.device.pushErrorScope(`validation`),o(t,s[1]),0}catch(e){return n.push(Promise.resolve(`[WebGPU] Kernel "[${i}] ${a}" failed. ${e}`)),1}finally{c&&n.push(this.device.popErrorScope().then(e=>e?`GPU validation error for kernel "[${i}] ${a}": ${e.message}`:null));for(let e of this.temporaryData)this.gpuDataManager.release(e.id);this.temporaryData=[],this.currentKernelId=null}}registerBuffer(e,t,n,r){let i=this.sessionExternalDataMapping.get(e);i||(i=new Map,this.sessionExternalDataMapping.set(e,i));let a=i.get(t),o=this.gpuDataManager.registerExternalBuffer(n,r,a);return i.set(t,[o,n]),o}unregisterBuffers(e){let t=this.sessionExternalDataMapping.get(e);t&&(t.forEach(e=>this.gpuDataManager.unregisterExternalBuffer(e[0])),this.sessionExternalDataMapping.delete(e))}getBuffer(e){let t=this.gpuDataManager.get(e);if(!t)throw Error(`no GPU data for buffer: ${e}`);return t.buffer}createDownloader(e,t,n){return async()=>{let r=await kn(this,e,t);return rn(r.buffer,n)}}writeTimestamp(e){this.queryType===`inside-passes`&&this.computePassEncoder.writeTimestamp(this.querySet,e)}setQueryType(){this.queryType=`none`,(this.env.webgpu.profiling?.mode==="default"||(typeof this.env.trace>`u`?this.env.wasm.trace:this.env.trace))&&(this.device.features.has(`chromium-experimental-timestamp-query-inside-passes`)?this.queryType=`inside-passes`:this.device.features.has(`timestamp-query`)&&(this.queryType=`at-passes`),this.queryType!==`none`&&typeof this.querySet>`u`&&(this.querySet=this.device.createQuerySet({type:`timestamp`,count:this.maxDispatchNumber*2}),this.queryResolveBuffer=this.device.createBuffer({size:this.maxDispatchNumber*2*8,usage:GPUBufferUsage.COPY_SRC|GPUBufferUsage.QUERY_RESOLVE})))}captureBegin(){Yt(`info`,`captureBegin`),this.capturedCommandList.get(this.currentSessionId)||this.capturedCommandList.set(this.currentSessionId,[]),this.capturedPendingKernels.get(this.currentSessionId)||this.capturedPendingKernels.set(this.currentSessionId,[]),this.flush(),this.sessionStatus=`capturing`}captureEnd(){Yt(`info`,`captureEnd`),this.flush(),this.sessionStatus=`default`}replay(){Yt(`info`,`replay`),this.sessionStatus=`replaying`;let e=this.capturedCommandList.get(this.currentSessionId),t=this.capturedPendingKernels.get(this.currentSessionId),n=e.length;this.pendingKernels=[];for(let r=0;r<n;r++){let n=this.getComputePassEncoder(),i=e[r];this.writeTimestamp(this.pendingDispatchNumber*2),n.setPipeline(i.computePipeline),n.setBindGroup(0,i.bindGroup),n.dispatchWorkgroups(...i.dispatchGroup),this.writeTimestamp(this.pendingDispatchNumber*2+1),this.pendingDispatchNumber++,this.queryType!==`none`&&this.pendingKernels.push(t[r]),(this.pendingDispatchNumber>=this.maxDispatchNumber||this.queryType===`at-passes`)&&this.endComputePass(),this.pendingDispatchNumber>=this.maxDispatchNumber&&this.flush()}this.flush(),this.sessionStatus=`default`}onCreateSession(){this.gpuDataManager.onCreateSession()}onReleaseSession(e){this.unregisterBuffers(e),this.capturedCommandList.has(e)&&this.capturedCommandList.delete(e),this.capturedPendingKernels.has(e)&&this.capturedPendingKernels.delete(e),this.gpuDataManager.onReleaseSession(e)}onRunStart(e){this.currentSessionId=e,this.setQueryType()}}}),cd={};S(cd,{init:()=>dd});var ld,ud,dd,fd=x(()=>{z(),Xt(),V(),xn(),ld=class e{constructor(e,t,n,r){this.module=e,this.dataType=t,this.data=n,this.dims=r}getFloat32Array(){if(this.dataType!==1)throw Error(`Invalid data type`);let e=B.size(this.dims);return e===0?new Float32Array:new Float32Array(this.module.HEAP8.buffer,this.data,e)}getBigInt64Array(){if(this.dataType!==7)throw Error(`Invalid data type`);let e=B.size(this.dims);return e===0?new BigInt64Array:new BigInt64Array(this.module.HEAP8.buffer,this.data,e)}getInt32Array(){if(this.dataType!==6)throw Error(`Invalid data type`);let e=B.size(this.dims);return e===0?new Int32Array:new Int32Array(this.module.HEAP8.buffer,this.data,e)}getUint16Array(){if(this.dataType!==10&&this.dataType!==4)throw Error(`Invalid data type`);let e=B.size(this.dims);return e===0?new Uint16Array:new Uint16Array(this.module.HEAP8.buffer,this.data,e)}reshape(t){if(B.size(t)!==B.size(this.dims))throw Error(`Invalid new shape`);return new e(this.module,this.dataType,this.data,t)}},ud=class{constructor(e,t,n){this.module=e,this.backend=t,this.customDataOffset=0,this.customDataSize=0,this.adapterInfo=t.adapterInfo;let r=e.PTR_SIZE,i=n/e.PTR_SIZE,a=r===4?`i32`:`i64`;this.opKernelContext=Number(e.getValue(r*i++,a));let o=Number(e.getValue(r*i++,a));this.outputCount=Number(e.getValue(r*i++,a)),this.customDataOffset=Number(e.getValue(r*i++,`*`)),this.customDataSize=Number(e.getValue(r*i++,a));let s=[];for(let t=0;t<o;t++){let t=Number(e.getValue(r*i++,a)),n=Number(e.getValue(r*i++,`*`)),o=Number(e.getValue(r*i++,a)),c=[];for(let t=0;t<o;t++)c.push(Number(e.getValue(r*i++,a)));s.push(new ld(e,t,n,c))}this.inputs=s}get kernelCustomData(){return this.backend.currentKernelCustomData}get customDataBuffer(){return this.module.HEAPU8.subarray(this.customDataOffset,this.customDataOffset+this.customDataSize)}compute(e,t){let n=t?.inputs?.map(e=>typeof e==`number`?this.inputs[e]:e)??this.inputs,r=t?.outputs??[];return this.backend.run(e,n,r,(e,t,n)=>new ld(this.module,t,this.output(e,n),n),(e,t)=>{let n=Ft(e,t);if(!n)throw Error(`Unsupported data type: ${e}`);let r=n>0?this.backend.gpuDataManager.create(n).id:0;return new ld(this.module,e,r,t)},this.outputCount)}output(e,t){let n=this.module.stackSave();try{let n=this.module.PTR_SIZE,r=n===4?`i32`:`i64`,i=this.module.stackAlloc((1+t.length)*n);this.module.setValue(i,t.length,r);for(let e=0;e<t.length;e++)this.module.setValue(i+n*(e+1),t[e],r);return this.module._JsepOutput(this.opKernelContext,e,i)}catch(n){throw Error(`Failed to generate kernel's output[${e}] with dims [${t}]. If you are running with pre-allocated output, please make sure the output type/dims are correct. Error: ${n}`)}finally{this.module.stackRestore(n)}}},dd=async(e,t,n,r)=>{let i=t.jsepInit;if(!i)throw Error(`Failed to initialize JSEP. The WebAssembly module is not built with JSEP support.`);if(e===`webgpu`){let e=(sd(),w(nd)).WebGpuBackend,a=new e;await a.initialize(n,r),i(`webgpu`,[a,e=>a.alloc(Number(e)),e=>a.free(e),(e,n,r,i=!1)=>{if(i)Yt(`verbose`,()=>`[WebGPU] jsepCopyGpuToGpu: src=${Number(e)}, dst=${Number(n)}, size=${Number(r)}`),a.memcpy(Number(e),Number(n));else{Yt(`verbose`,()=>`[WebGPU] jsepCopyCpuToGpu: dataOffset=${Number(e)}, gpuDataId=${Number(n)}, size=${Number(r)}`);let i=t.HEAPU8.subarray(Number(e>>>0),Number(e>>>0)+Number(r));a.upload(Number(n),i)}},async(e,n,r)=>{Yt(`verbose`,()=>`[WebGPU] jsepCopyGpuToCpu: gpuDataId=${e}, dataOffset=${n}, size=${r}`),await a.download(Number(e),()=>t.HEAPU8.subarray(Number(n)>>>0,Number(n+r)>>>0))},(e,n,r)=>a.createKernel(e,Number(n),r,t.UTF8ToString(t._JsepGetNodeName(Number(n)))),e=>a.releaseKernel(e),(e,n,r,i)=>{Yt(`verbose`,()=>`[WebGPU] jsepRun: sessionHandle=${r}, kernel=${e}, contextDataOffset=${n}`);let o=new ud(t,a,Number(n));return a.computeKernel(Number(e),o,i)},()=>a.captureBegin(),()=>a.captureEnd(),()=>a.replay()])}else{let e=new bn(n);i(`webnn`,[e,()=>e.reserveTensorId(),t=>e.releaseTensorId(t),async(t,n,r,i,a)=>e.ensureTensor(t,n,r,i,a),(t,n)=>{e.uploadTensor(t,n)},async(t,n)=>e.downloadTensor(t,n),(t,n)=>e.registerMLContext(t,n),!!n.trace])}}}),pd,md,hd,gd,_d,vd,yd,bd,xd,Sd,Cd,wd,Td,Ed=x(()=>{Re(),Tt(),Mt(),z(),bt(),Ct(),Ht(),pd=(e,t)=>{yt()._OrtInit(e,t)!==0&&R(`Can't initialize onnxruntime.`)},md=async e=>{pd(e.wasm.numThreads,Lt(e.logLevel))},hd=async(e,t)=>{yt().asyncInit?.();let n=e.webgpu.adapter;if(t===`webgpu`){if(typeof navigator>`u`||!navigator.gpu)throw Error(`WebGPU is not supported in current environment`);if(n){if(typeof n.limits!=`object`||typeof n.features!=`object`||typeof n.requestDevice!=`function`)throw Error("Invalid GPU adapter set in `env.webgpu.adapter`. It must be a GPUAdapter object.")}else{let t=e.webgpu.powerPreference;if(t!==void 0&&t!==`low-power`&&t!==`high-performance`)throw Error(`Invalid powerPreference setting: "${t}"`);let r=e.webgpu.forceFallbackAdapter;if(r!==void 0&&typeof r!=`boolean`)throw Error(`Invalid forceFallbackAdapter setting: "${r}"`);if(n=await navigator.gpu.requestAdapter({powerPreference:t,forceFallbackAdapter:r}),!n)throw Error(`Failed to get GPU adapter. You may need to enable flag "--enable-unsafe-webgpu" if you are using Chrome.`)}}if(t===`webnn`&&(typeof navigator>`u`||!navigator.ml))throw Error(`WebNN is not supported in current environment`);{let r=(fd(),w(cd)).init;t===`webgpu`&&await r(`webgpu`,yt(),e,n),t===`webnn`&&await r(`webnn`,yt(),e)}},gd=new Map,_d=e=>{let t=yt(),n=t.stackSave();try{let n=t.PTR_SIZE,r=t.stackAlloc(2*n);t._OrtGetInputOutputCount(e,r,r+n)!==0&&R(`Can't get session input/output count.`);let i=n===4?`i32`:`i64`;return[Number(t.getValue(r,i)),Number(t.getValue(r+n,i))]}finally{t.stackRestore(n)}},vd=(e,t)=>{let n=yt(),r=n.stackSave(),i=0;try{let r=n.PTR_SIZE,a=n.stackAlloc(2*r);n._OrtGetInputOutputMetadata(e,t,a,a+r)!==0&&R(`Can't get session input/output metadata.`);let o=Number(n.getValue(a,`*`));i=Number(n.getValue(a+r,`*`));let s=n.HEAP32[i/4];if(s===0)return[o,0];let c=n.HEAPU32[i/4+1],l=[];for(let e=0;e<c;e++){let t=Number(n.getValue(i+8+e*r,`*`));l.push(t===0?Number(n.getValue(i+8+(e+c)*r,`*`)):n.UTF8ToString(t))}return[o,s,l]}finally{n.stackRestore(r),i!==0&&n._OrtFree(i)}},yd=e=>{let t=yt(),n=t._malloc(e.byteLength);if(n===0)throw Error(`Can't create a session. failed to allocate a buffer of size ${e.byteLength}.`);return t.HEAPU8.set(e,n),[n,e.byteLength]},bd=async(e,t)=>{let n,r,i=yt();Array.isArray(e)?[n,r]=e:e.buffer===i.HEAPU8.buffer?[n,r]=[e.byteOffset,e.byteLength]:[n,r]=yd(e);let a=0,o=0,s=0,c=[],l=[],u=[];try{if([o,c]=await jt(t),t?.externalData&&i.mountExternalData){let e=[];for(let n of t.externalData){let t=typeof n==`string`?n:n.path,r=typeof n==`string`?n:n.data;e.push(Vt(r).then(e=>{i.mountExternalData(t,e)}))}await Promise.all(e)}for(let e of t?.executionProviders??[])if((typeof e==`string`?e:e.name)===`webnn`){if(i.shouldTransferToMLTensor=!1,typeof e!=`string`){let t=e,n=t?.context,r=t?.gpuDevice,a=t?.deviceType,o=t?.powerPreference;i.currentContext=n||(r?await i.webnnCreateMLContext(r):await i.webnnCreateMLContext({deviceType:a,powerPreference:o}))}else i.currentContext=await i.webnnCreateMLContext();break}a=await i._OrtCreateSession(n,r,o),i.webgpuOnCreateSession?.(a),a===0&&R(`Can't create a session.`),i.jsepOnCreateSession?.(),i.currentContext&&(i.webnnRegisterMLContext(a,i.currentContext),i.currentContext=void 0,i.shouldTransferToMLTensor=!0);let[e,d]=_d(a),f=!!t?.enableGraphCapture,p=[],m=[],h=[],g=[],_=[];for(let t=0;t<e;t++){let[e,n,r]=vd(a,t);e===0&&R(`Can't get an input name.`),l.push(e);let o=i.UTF8ToString(e);p.push(o),h.push(n===0?{name:o,isTensor:!1}:{name:o,isTensor:!0,type:Pt(n),shape:r})}for(let n=0;n<d;n++){let[r,o,s]=vd(a,n+e);r===0&&R(`Can't get an output name.`),u.push(r);let c=i.UTF8ToString(r);m.push(c),g.push(o===0?{name:c,isTensor:!1}:{name:c,isTensor:!0,type:Pt(o),shape:s});{if(f&&t?.preferredOutputLocation===void 0){_.push(`gpu-buffer`);continue}let e=typeof t?.preferredOutputLocation==`string`?t.preferredOutputLocation:t?.preferredOutputLocation?.[c]??`cpu`,n=i.webnnIsGraphOutput;if(e===`cpu`&&n&&n(a,c)){_.push(`ml-tensor-cpu-output`);continue}if(e!==`cpu`&&e!==`cpu-pinned`&&e!==`gpu-buffer`&&e!==`ml-tensor`)throw Error(`Not supported preferred output location: ${e}.`);if(f&&e!==`gpu-buffer`)throw Error(`Not supported preferred output location: ${e}. Only 'gpu-buffer' location is supported when enableGraphCapture is true.`);_.push(e)}}let v=null;return _.some(e=>e===`gpu-buffer`||e===`ml-tensor`||e===`ml-tensor-cpu-output`)&&(s=i._OrtCreateBinding(a),s===0&&R(`Can't create IO binding.`),v={handle:s,outputPreferredLocations:_,outputPreferredLocationsEncoded:_.map(e=>e===`ml-tensor-cpu-output`?`ml-tensor`:e).map(e=>Bt(e))}),gd.set(a,[a,l,u,v,f,!1]),[a,p,m,h,g]}catch(e){throw l.forEach(e=>i._OrtFree(e)),u.forEach(e=>i._OrtFree(e)),s!==0&&i._OrtReleaseBinding(s)!==0&&R(`Can't release IO binding.`),a!==0&&i._OrtReleaseSession(a)!==0&&R(`Can't release session.`),e}finally{i._free(n),o!==0&&i._OrtReleaseSessionOptions(o)!==0&&R(`Can't release session options.`),c.forEach(e=>i._free(e)),i.unmountExternalData?.()}},xd=e=>{let t=yt(),n=gd.get(e);if(!n)throw Error(`cannot release session. invalid session id: ${e}`);let[r,i,a,o,s]=n;o&&(s&&t._OrtClearBoundOutputs(o.handle)!==0&&R(`Can't clear bound outputs.`),t._OrtReleaseBinding(o.handle)!==0&&R(`Can't release IO binding.`)),t.jsepOnReleaseSession?.(e),t.webnnOnReleaseSession?.(e),t.webgpuOnReleaseSession?.(e),i.forEach(e=>t._OrtFree(e)),a.forEach(e=>t._OrtFree(e)),t._OrtReleaseSession(r)!==0&&R(`Can't release session.`),gd.delete(e)},Sd=async(e,t,n,r,i,a,o=!1)=>{if(!e){t.push(0);return}let s=yt(),c=s.PTR_SIZE,l=e[0],u=e[1],d=e[3],f=d,p,m;if(l===`string`&&(d===`gpu-buffer`||d===`ml-tensor`))throw Error(`String tensor is not supported on GPU.`);if(o&&d!==`gpu-buffer`)throw Error(`External buffer must be provided for input/output index ${a} when enableGraphCapture is true.`);if(d===`gpu-buffer`){let t=e[2].gpuBuffer;m=Ft(Nt(l),u);{let e=s.jsepRegisterBuffer;if(!e)throw Error(`Tensor location "gpu-buffer" is not supported without using WebGPU.`);p=e(r,a,t,m)}}else if(d===`ml-tensor`){let t=e[2].mlTensor;m=Ft(Nt(l),u);let n=s.webnnRegisterMLTensor;if(!n)throw Error(`Tensor location "ml-tensor" is not supported without using WebNN.`);p=n(r,t,Nt(l),u)}else{let t=e[2];if(Array.isArray(t)){m=c*t.length,p=s._malloc(m),n.push(p);for(let e=0;e<t.length;e++){if(typeof t[e]!=`string`)throw TypeError(`tensor data at index ${e} is not a string`);s.setValue(p+e*c,xt(t[e],n),`*`)}}else{let e=s.webnnIsGraphInput,a=s.webnnIsGraphOutput;if(l!==`string`&&e&&a){let o=s.UTF8ToString(i);if(e(r,o)||a(r,o)){let e=Nt(l);m=Ft(e,u),f=`ml-tensor`;let n=s.webnnCreateTemporaryTensor,i=s.webnnUploadTensor;if(!n||!i)throw Error(`Tensor location "ml-tensor" is not supported without using WebNN.`);let a=await n(r,e,u);i(a,new Uint8Array(t.buffer,t.byteOffset,t.byteLength)),p=a}else m=t.byteLength,p=s._malloc(m),n.push(p),s.HEAPU8.set(new Uint8Array(t.buffer,t.byteOffset,m),p)}else m=t.byteLength,p=s._malloc(m),n.push(p),s.HEAPU8.set(new Uint8Array(t.buffer,t.byteOffset,m),p)}}let h=s.stackSave(),g=s.stackAlloc(4*u.length);try{u.forEach((e,t)=>s.setValue(g+t*c,e,c===4?`i32`:`i64`));let e=s._OrtCreateTensor(Nt(l),p,m,g,u.length,Bt(f));e===0&&R(`Can't create tensor for input/output. session=${r}, index=${a}.`),t.push(e)}finally{s.stackRestore(h)}},Cd=async(e,t,n,r,i,a)=>{let o=yt(),s=o.PTR_SIZE,c=gd.get(e);if(!c)throw Error(`cannot run inference. invalid session id: ${e}`);let l=c[0],u=c[1],d=c[2],f=c[3],p=c[4],m=c[5],h=t.length,g=r.length,_=0,v=[],y=[],b=[],x=[],S=[],C=o.stackSave(),w=o.stackAlloc(h*s),T=o.stackAlloc(h*s),E=o.stackAlloc(g*s),D=o.stackAlloc(g*s);try{[_,v]=wt(a),De(`wasm prepareInputOutputTensor`);for(let r=0;r<h;r++)await Sd(n[r],y,x,e,u[t[r]],t[r],p);for(let t=0;t<g;t++)await Sd(i[t],b,x,e,d[r[t]],h+r[t],p);Oe(`wasm prepareInputOutputTensor`);for(let e=0;e<h;e++)o.setValue(w+e*s,y[e],`*`),o.setValue(T+e*s,u[t[e]],`*`);for(let e=0;e<g;e++)o.setValue(E+e*s,b[e],`*`),o.setValue(D+e*s,d[r[e]],`*`);if(f&&!m){let{handle:n,outputPreferredLocations:a,outputPreferredLocationsEncoded:s}=f;if(u.length!==h)throw Error(`input count from feeds (${h}) is expected to be always equal to model's input count (${u.length}).`);De(`wasm bindInputsOutputs`);for(let r=0;r<h;r++){let i=t[r];await o._OrtBindInput(n,u[i],y[r])!==0&&R(`Can't bind input[${r}] for session=${e}.`)}for(let t=0;t<g;t++){let c=r[t];i[t]?.[3]?(S.push(b[t]),o._OrtBindOutput(n,d[c],b[t],0)!==0&&R(`Can't bind pre-allocated output[${t}] for session=${e}.`)):o._OrtBindOutput(n,d[c],0,s[c])!==0&&R(`Can't bind output[${t}] to ${a[t]} for session=${e}.`)}Oe(`wasm bindInputsOutputs`),gd.set(e,[l,u,d,f,p,!0])}o.jsepOnRunStart?.(l),o.webnnOnRunStart?.(l);let c;c=f?await o._OrtRunWithBinding(l,f.handle,g,E,_):await o._OrtRun(l,T,w,h,D,g,E,_),c!==0&&R(`failed to call OrtRun().`);let C=[],O=[];De(`wasm ProcessOutputTensor`);for(let t=0;t<g;t++){let n=Number(o.getValue(E+t*s,`*`));if(n===b[t]||S.includes(b[t])){C.push(i[t]),n!==b[t]&&o._OrtReleaseTensor(n)!==0&&R(`Can't release tensor.`);continue}let a=o.stackSave(),c=o.stackAlloc(4*s),l=!1,u,d=0;try{o._OrtGetTensorData(n,c,c+s,c+2*s,c+3*s)!==0&&R(`Can't access output tensor data on index ${t}.`);let i=s===4?`i32`:`i64`,a=Number(o.getValue(c,i));d=o.getValue(c+s,`*`);let p=o.getValue(c+s*2,`*`),m=Number(o.getValue(c+s*3,i)),h=[];for(let e=0;e<m;e++)h.push(Number(o.getValue(p+e*s,i)));o._OrtFree(p)!==0&&R(`Can't free memory for tensor dims.`);let g=h.reduce((e,t)=>e*t,1);u=Pt(a);let _=f?.outputPreferredLocations[r[t]];if(u===`string`){if(_===`gpu-buffer`||_===`ml-tensor`)throw Error(`String tensor is not supported on GPU.`);let e=[];for(let t=0;t<g;t++){let n=o.getValue(d+t*s,`*`),r=o.getValue(d+(t+1)*s,`*`),i=t===g-1?void 0:r-n;e.push(o.UTF8ToString(n,i))}C.push([u,h,e,`cpu`])}else if(_===`gpu-buffer`&&g>0){let e=o.jsepGetBuffer;if(!e)throw Error(`preferredLocation "gpu-buffer" is not supported without using WebGPU.`);let t=e(d),r=Ft(a,g);if(r===void 0||!Rt(u))throw Error(`Unsupported data type: ${u}`);l=!0,C.push([u,h,{gpuBuffer:t,download:o.jsepCreateDownloader(t,r,u),dispose:()=>{o._OrtReleaseTensor(n)!==0&&R(`Can't release tensor.`)}},`gpu-buffer`])}else if(_===`ml-tensor`&&g>0){let t=o.webnnEnsureTensor,r=o.webnnIsGraphInputOutputTypeSupported;if(!t||!r)throw Error(`preferredLocation "ml-tensor" is not supported without using WebNN.`);if(Ft(a,g)===void 0||!zt(u))throw Error(`Unsupported data type: ${u}`);if(!r(e,u,!1))throw Error(`preferredLocation "ml-tensor" for ${u} output is not supported by current WebNN Context.`);let i=await t(e,d,a,h,!1);l=!0,C.push([u,h,{mlTensor:i,download:o.webnnCreateMLTensorDownloader(d,u),dispose:()=>{o.webnnReleaseTensorId(d),o._OrtReleaseTensor(n)}},`ml-tensor`])}else if(_===`ml-tensor-cpu-output`&&g>0){let e=o.webnnCreateMLTensorDownloader(d,u)(),t=C.length;l=!0,O.push((async()=>{let r=[t,await e];return o.webnnReleaseTensorId(d),o._OrtReleaseTensor(n),r})()),C.push([u,h,[],`cpu`])}else{let e=new(It(u))(g);new Uint8Array(e.buffer,e.byteOffset,e.byteLength).set(o.HEAPU8.subarray(d,d+e.byteLength)),C.push([u,h,e,`cpu`])}}finally{o.stackRestore(a),u===`string`&&d&&o._free(d),l||o._OrtReleaseTensor(n)}}f&&!p&&(o._OrtClearBoundOutputs(f.handle)!==0&&R(`Can't clear bound outputs.`),gd.set(e,[l,u,d,f,p,!1]));for(let[e,t]of await Promise.all(O))C[e][2]=t;return Oe(`wasm ProcessOutputTensor`),C}finally{o.webnnOnRunEnd?.(l),o.stackRestore(C),y.forEach(e=>o._OrtReleaseTensor(e)),b.forEach(e=>o._OrtReleaseTensor(e)),x.forEach(e=>o._free(e)),_!==0&&o._OrtReleaseRunOptions(_),v.forEach(e=>o._free(e))}},wd=e=>{let t=yt(),n=gd.get(e);if(!n)throw Error(`invalid session id`);let r=n[0],i=t._OrtEndProfiling(r);i===0&&R(`Can't get an profile file name.`),t._OrtFree(i)},Td=e=>{let t=[];for(let n of e){let e=n[2];!Array.isArray(e)&&`buffer`in e&&t.push(e.buffer)}return t}}),Dd,Od,kd,Ad,jd,Md,Nd,Pd,Fd,Id,Ld,Rd,zd,Bd,Vd,Hd,Ud,Wd,Gd=x(()=>{Re(),Ed(),bt(),ut(),Dd=()=>!!P.wasm.proxy&&typeof document<`u`,kd=!1,Ad=!1,jd=!1,Pd=new Map,Fd=(e,t)=>{let n=Pd.get(e);n?n.push(t):Pd.set(e,[t])},Id=()=>{if(kd||!Ad||jd||!Od)throw Error(`worker not ready`)},Ld=e=>{switch(e.data.type){case`init-wasm`:kd=!1,e.data.err?(jd=!0,Nd[1](e.data.err)):(Ad=!0,Nd[0]()),Md&&=(URL.revokeObjectURL(Md),void 0);break;case`init-ep`:case`copy-from`:case`create`:case`release`:case`run`:case`end-profiling`:{let t=Pd.get(e.data.type);e.data.err?t.shift()[1](e.data.err):t.shift()[0](e.data.out);break}}},Rd=async()=>{if(!Ad){if(kd)throw Error(`multiple calls to 'initWasm()' detected.`);if(jd)throw Error(`previous call to 'initWasm()' failed.`);if(kd=!0,Dd())return new Promise((e,t)=>{Od?.terminate(),st().then(([n,r])=>{try{Od=r,Od.onerror=e=>t(e),Od.onmessage=Ld,Nd=[e,t];let i={type:`init-wasm`,in:P};!i.in.wasm.wasmPaths&&(n||Ze)&&(i.in.wasm.wasmPaths={wasm:new URL(``+new URL(`ort-wasm-simd-threaded.jsep-D-icqfN-.wasm`,import.meta.url).href,``+import.meta.url).href}),Od.postMessage(i),Md=n}catch(e){t(e)}},t)});try{await vt(P.wasm),await md(P),Ad=!0}catch(e){throw jd=!0,e}finally{kd=!1}}},zd=async e=>{if(Dd())return Id(),new Promise((t,n)=>{Fd(`init-ep`,[t,n]);let r={type:`init-ep`,in:{epName:e,env:P}};Od.postMessage(r)});await hd(P,e)},Bd=async e=>Dd()?(Id(),new Promise((t,n)=>{Fd(`copy-from`,[t,n]);let r={type:`copy-from`,in:{buffer:e}};Od.postMessage(r,[e.buffer])})):yd(e),Vd=async(e,t)=>{if(Dd()){if(t?.preferredOutputLocation)throw Error(`session option "preferredOutputLocation" is not supported for proxy.`);return Id(),new Promise((n,r)=>{Fd(`create`,[n,r]);let i={type:`create`,in:{model:e,options:{...t}}},a=[];e instanceof Uint8Array&&a.push(e.buffer),Od.postMessage(i,a)})}return bd(e,t)},Hd=async e=>{if(Dd())return Id(),new Promise((t,n)=>{Fd(`release`,[t,n]);let r={type:`release`,in:e};Od.postMessage(r)});xd(e)},Ud=async(e,t,n,r,i,a)=>{if(Dd()){if(n.some(e=>e[3]!==`cpu`))throw Error(`input tensor on GPU is not supported for proxy.`);if(i.some(e=>e))throw Error(`pre-allocated output tensor is not supported for proxy.`);return Id(),new Promise((i,o)=>{Fd(`run`,[i,o]);let s=n,c={type:`run`,in:{sessionId:e,inputIndices:t,inputs:s,outputIndices:r,options:a}};Od.postMessage(c,Td(s))})}return Cd(e,t,n,r,i,a)},Wd=async e=>{if(Dd())return Id(),new Promise((t,n)=>{Fd(`end-profiling`,[t,n]);let r={type:`end-profiling`,in:e};Od.postMessage(r)});wd(e)}}),Kd,qd,Jd,Yd=x(()=>{Re(),Gd(),z(),ze(),Ht(),Kd=(e,t)=>{switch(e.location){case`cpu`:return[e.type,e.dims,e.data,`cpu`];case`gpu-buffer`:return[e.type,e.dims,{gpuBuffer:e.gpuBuffer},`gpu-buffer`];case`ml-tensor`:return[e.type,e.dims,{mlTensor:e.mlTensor},`ml-tensor`];default:throw Error(`invalid data location: ${e.location} for ${t()}`)}},qd=e=>{switch(e[3]){case`cpu`:return new Se(e[0],e[2],e[1]);case`gpu-buffer`:{let t=e[0];if(!Rt(t))throw Error(`not supported data type: ${t} for deserializing GPU tensor`);let{gpuBuffer:n,download:r,dispose:i}=e[2];return Se.fromGpuBuffer(n,{dataType:t,dims:e[1],download:r,dispose:i})}case`ml-tensor`:{let t=e[0];if(!zt(t))throw Error(`not supported data type: ${t} for deserializing MLTensor tensor`);let{mlTensor:n,download:r,dispose:i}=e[2];return Se.fromMLTensor(n,{dataType:t,dims:e[1],download:r,dispose:i})}default:throw Error(`invalid data location: ${e[3]}`)}},Jd=class{async fetchModelAndCopyToWasmMemory(e){return Bd(await Vt(e))}async loadModel(e,t){Ee();let n;n=typeof e==`string`?await this.fetchModelAndCopyToWasmMemory(e):e,[this.sessionId,this.inputNames,this.outputNames,this.inputMetadata,this.outputMetadata]=await Vd(n,t),L()}async dispose(){return Hd(this.sessionId)}async run(e,t,n){Ee();let r=[],i=[];Object.entries(e).forEach(e=>{let t=e[0],n=e[1],a=this.inputNames.indexOf(t);if(a===-1)throw Error(`invalid input '${t}'`);r.push(n),i.push(a)});let a=[],o=[];Object.entries(t).forEach(e=>{let t=e[0],n=e[1],r=this.outputNames.indexOf(t);if(r===-1)throw Error(`invalid output '${t}'`);a.push(n),o.push(r)});let s=r.map((e,t)=>Kd(e,()=>`input "${this.inputNames[i[t]]}"`)),c=a.map((e,t)=>e?Kd(e,()=>`output "${this.outputNames[o[t]]}"`):null),l=await Ud(this.sessionId,i,s,o,c,n),u={};for(let e=0;e<l.length;e++)u[this.outputNames[o[e]]]=a[e]??qd(l[e]);return L(),u}startProfiling(){}endProfiling(){Wd(this.sessionId)}}}),Xd={};S(Xd,{OnnxruntimeWebAssemblyBackend:()=>Qd,initializeFlags:()=>Zd,wasmBackend:()=>$d});var Zd,Qd,$d,ef=x(()=>{Re(),Gd(),Yd(),Zd=()=>{(typeof P.wasm.initTimeout!=`number`||P.wasm.initTimeout<0)&&(P.wasm.initTimeout=0);let e=P.wasm.simd;if(typeof e!=`boolean`&&e!==void 0&&e!==`fixed`&&e!==`relaxed`&&(console.warn(`Property "env.wasm.simd" is set to unknown value "${e}". Reset it to \`false\` and ignore SIMD feature checking.`),P.wasm.simd=!1),typeof P.wasm.proxy!=`boolean`&&(P.wasm.proxy=!1),typeof P.wasm.trace!=`boolean`&&(P.wasm.trace=!1),typeof P.wasm.numThreads!=`number`||!Number.isInteger(P.wasm.numThreads)||P.wasm.numThreads<=0)if(typeof self<`u`&&!self.crossOriginIsolated)P.wasm.numThreads=1;else{let e=typeof navigator>`u`?b(`node:os`).cpus().length:navigator.hardwareConcurrency;P.wasm.numThreads=Math.min(4,Math.ceil((e||1)/2))}},Qd=class{async init(e){Zd(),await Rd(),await zd(e)}async createInferenceSessionHandler(e,t){let n=new Jd;return await n.loadModel(e,t),n}},$d=new Qd});Re(),Re(),Re();var tf=`1.29.0`;{let e=(ef(),w(Xd)).wasmBackend;D(`webgpu`,e,5),D(`webnn`,e,5),D(`cpu`,e,10),D(`wasm`,e,10)}Object.defineProperty(P.versions,"web",{value:tf,enumerable:!0});var nf=``+new URL(`bat-digit-mlp-BprfLSDd.onnx`,import.meta.url).href,rf=null;function af(e){let t=Math.max(...e),n=e.map(e=>Math.exp(e-t)),r=n.reduce((e,t)=>e+t,0)||1;return n.map(e=>e/r)}async function of(){return rf||=(P.wasm.numThreads=1,Me.create(nf,{executionProviders:[`wasm`],graphOptimizationLevel:`all`}).catch(e=>{throw rf=null,e})),rf}function sf(){return of().then(()=>!0).catch(()=>!1)}function cf(e){let t=e.points||[];if(!t.length)return null;let n=t[0].x,r=t[0].x,i=t[0].y,a=t[0].y;for(let e=1;e<t.length;e+=1){let o=t[e];n=Math.min(n,o.x),r=Math.max(r,o.x),i=Math.min(i,o.y),a=Math.max(a,o.y)}return{minX:n,maxX:r,minY:i,maxY:a}}function lf(e,t){return{minX:Math.min(e.minX,t.minX),maxX:Math.max(e.maxX,t.maxX),minY:Math.min(e.minY,t.minY),maxY:Math.max(e.maxY,t.maxY)}}function uf(e){let t=0;for(let n=1;n<e.points.length;n+=1){let r=e.points[n-1],i=e.points[n];t+=Math.hypot(i.x-r.x,i.y-r.y)}return t}function df(e,t){let n=cf(e);if(!n)return!1;let r=n.maxX-n.minX,i=n.maxY-n.minY,a=uf(e);return n.minY>t*.34&&r<t*.22&&i<t*.22&&a<t*.34}function ff(e,t){return Math.max(0,Math.min(e.maxX,t.maxX)-Math.max(e.minX,t.minX))}function pf(e,t,n){let r=ff(e.box,t.box),i=Math.max(1,t.box.maxX-t.box.minX),a=Math.max(1,e.box.maxX-e.box.minX),o=Math.max(0,t.box.minX-e.box.maxX,e.box.minX-t.box.maxX),s=r/Math.min(i,a),c=lf(e.box,t.box),l=c.maxX-c.minX,u=Math.max(1,c.maxY-c.minY);return s>=.12||o<=n*.045&&l<=u*1.05}function mf(e,t){let n=[],r=[];e.forEach(e=>{if(!e?.points?.length)return;let i=cf(e);i&&(df(e,t)?n.push({type:`decimal`,x:(i.minX+i.maxX)/2,strokes:[e],box:i}):r.push({stroke:e,box:i}))});let i=[];return r.sort((e,t)=>e.box.minX-t.box.minX).forEach(e=>{let n=null,r=-1;for(let a of i){if(!pf(a,e,t))continue;let i=ff(a.box,e.box);i>r&&(r=i,n=a)}n?(n.strokes.push(e.stroke),n.box=lf(n.box,e.box)):i.push({type:`digit`,strokes:[e.stroke],box:e.box})}),i.forEach(e=>{e.x=(e.box.minX+e.box.maxX)/2,n.push(e)}),n.sort((e,t)=>e.x-t.x)}function hf(e){if(!e?.box||e.strokes.length<2)return!1;let t=Math.max(1,e.box.maxX-e.box.minX),n=Math.max(1,e.box.maxY-e.box.minY);return e.strokes.some(r=>{let i=cf(r);if(!i||r.points.length<2)return!1;let a=i.maxX-i.minX,o=i.maxY-i.minY,s=r.points[0],c=r.points[r.points.length-1],l=Math.hypot(c.x-s.x,c.y-s.y)/Math.max(uf(r),1);if(!(o>=n*.52&&a<=Math.max(5,t*.24)&&Math.abs(c.y-s.y)>=Math.abs(c.x-s.x)*2.5&&l>=.72))return!1;let u=r.points.reduce((e,t)=>e+t.x,0)/r.points.length;return e.strokes.some(e=>{if(e===r||e.points.length<3)return!1;let a=e.points.filter(e=>e.y>i.minY+o*.12&&e.y<i.maxY-o*.12);if(!a.length)return!1;let s=a.reduce((e,t)=>Math.abs(t.x-u)<Math.abs(e.x-u)?t:e);if(Math.abs(s.x-u)>t*.12)return!1;let c=n*.12,l=e.points.filter(e=>Math.abs(e.y-s.y)<=c);if(l.length<2)return!1;let d=Math.min(...l.map(e=>e.x)),f=Math.max(...l.map(e=>e.x)),p=d<u-t*.1&&f>u+t*.08&&f-d>=t*.42,m=e.points.some(e=>e.y<s.y-n*.22&&e.x<u-t*.04);return p&&m})})}function gf(e){let t=document.createElement(`canvas`);t.width=64,t.height=64;let n=t.getContext(`2d`,{willReadFrequently:!0});n.clearRect(0,0,64,64),n.strokeStyle=`#fff`,n.fillStyle=`#fff`,n.lineCap=`round`,n.lineJoin=`round`,n.lineWidth=6.6;let r=e.box,i=Math.max(r.maxX-r.minX,1),a=Math.max(r.maxY-r.minY,1),o=Math.min(46/i,46/a),s=(r.minX+r.maxX)/2,c=(r.minY+r.maxY)/2,l=e=>32+(e-s)*o,u=e=>32+(e-c)*o;e.strokes.forEach(e=>{if(e.points.length){if(e.points.length===1){let t=e.points[0];n.beginPath(),n.arc(l(t.x),u(t.y),3.3,0,Math.PI*2),n.fill();return}n.beginPath(),n.moveTo(l(e.points[0].x),u(e.points[0].y));for(let t=1;t<e.points.length;t+=1)n.lineTo(l(e.points[t].x),u(e.points[t].y));n.stroke()}});let d=document.createElement(`canvas`);d.width=8,d.height=8;let f=d.getContext(`2d`,{willReadFrequently:!0});f.imageSmoothingEnabled=!0,f.imageSmoothingQuality=`high`,f.drawImage(t,0,0,8,8);let p=f.getImageData(0,0,8,8).data,m=new Float32Array(64);for(let e=0;e<64;e+=1)m[e]=p[e*4+3]/255;return m}async function _f(e){let t=await of(),n=t.inputNames[0],r=t.outputNames[0],i={[n]:new Se(`float32`,e,[1,64])},a=await t.run(i),o=af(Array.from(a[r].data,Number)),s=0;for(let e=1;e<o.length;e+=1)o[e]>o[s]&&(s=e);return{digit:String(s),confidence:o[s]}}async function vf(e,t,n){if(!Array.isArray(e)||!e.length||!t||!n)return{text:``,confidence:0,confident:!1,source:`onnx`};let r=mf(e,n);if(!r.length||r.length>6)return{text:``,confidence:0,confident:!1,source:`onnx`};let i=0,a=[],o=[];try{for(let e of r){if(e.type===`decimal`){i+=1,a.push(`.`);continue}let t=await _f(gf(e)),n=t.digit===`5`&&hf(e);a.push(n?`4`:t.digit),o.push(n?Math.max(.86,t.confidence):t.confidence)}}catch(e){return{text:``,confidence:0,confident:!1,source:`onnx`,error:e instanceof Error?e.message:String(e)}}let s=a.join(``),c=/^\d{1,4}(?:\.\d{1,2})?$/,l=o.length?o.reduce((e,t)=>e+t,0)/o.length:0;return{text:i<=1&&c.test(s)?s:``,confidence:l,confident:i<=1&&c.test(s)&&l>=.72,source:`onnx`}}var yf=``+new URL(`bat-unit-letters-_n1SmcBj.onnx`,import.meta.url).href,bf=[`c`,`k`,`m`,`s`],xf=[`m`,`cm`,`mm`,`km`,`s`,`ms`,`m/s`],Sf=null;function Cf(e){let t=Math.max(...e),n=e.map(e=>Math.exp(e-t)),r=n.reduce((e,t)=>e+t,0)||1;return n.map(e=>e/r)}async function wf(){return Sf||=(P.wasm.numThreads=1,Me.create(yf,{executionProviders:[`wasm`],graphOptimizationLevel:`all`}).catch(e=>{throw Sf=null,e})),Sf}function Tf(){return wf().then(()=>!0).catch(()=>!1)}function Ef(e){let t=e.points||[];if(!t.length)return null;let n=t[0].x,r=t[0].x,i=t[0].y,a=t[0].y;for(let e=1;e<t.length;e+=1){let o=t[e];n=Math.min(n,o.x),r=Math.max(r,o.x),i=Math.min(i,o.y),a=Math.max(a,o.y)}return{minX:n,maxX:r,minY:i,maxY:a}}function Df(e,t){return{minX:Math.min(e.minX,t.minX),maxX:Math.max(e.maxX,t.maxX),minY:Math.min(e.minY,t.minY),maxY:Math.max(e.maxY,t.maxY)}}function Of(e,t){return Math.max(0,Math.min(e.maxX,t.maxX)-Math.max(e.minX,t.minX))}function kf(e){let t=0;for(let n=1;n<e.points.length;n+=1){let r=e.points[n-1],i=e.points[n];t+=Math.hypot(i.x-r.x,i.y-r.y)}return t}function Af(e,t){let n=Ef(e);if(!n||e.points.length<2)return!1;let r=n.maxX-n.minX,i=n.maxY-n.minY,a=e.points[0],o=e.points[e.points.length-1],s=Math.hypot(o.x-a.x,o.y-a.y)/Math.max(kf(e),1);return i>t*.34&&r>t*.1&&s>.78}function jf(e,t,n){let r=Of(e.box,t.box),i=Math.max(1,t.box.maxX-t.box.minX),a=Math.max(1,e.box.maxX-e.box.minX),o=Math.max(0,t.box.minX-e.box.maxX,e.box.minX-t.box.maxX),s=r/Math.min(i,a),c=Df(e.box,t.box),l=c.maxX-c.minX,u=Math.max(1,c.maxY-c.minY);return s>=.1||o<=n*.045&&l<=u*1.15}function Mf(e,t){let n=[],r=[];e.forEach(e=>{if(!e?.points?.length)return;let t=Ef(e);t&&r.push({stroke:e,box:t})});let i=[];return r.sort((e,t)=>e.box.minX-t.box.minX).forEach(e=>{let n=null,r=-1;for(let a of i){if(!jf(a,e,t))continue;let i=Of(a.box,e.box);i>r&&(n=a,r=i)}n?(n.strokes.push(e.stroke),n.box=Df(n.box,e.box)):i.push({type:`letter`,strokes:[e.stroke],box:e.box})}),i.forEach(e=>{e.strokes.length===1&&Af(e.strokes[0],t)&&(e.type=`slash`),e.x=(e.box.minX+e.box.maxX)/2,n.push(e)}),n.sort((e,t)=>e.x-t.x)}function Nf(e){let t=document.createElement(`canvas`);t.width=64,t.height=64;let n=t.getContext(`2d`,{willReadFrequently:!0});n.strokeStyle=`#fff`,n.fillStyle=`#fff`,n.lineCap=`round`,n.lineJoin=`round`,n.lineWidth=6.6;let r=e.box,i=Math.max(r.maxX-r.minX,1),a=Math.max(r.maxY-r.minY,1),o=Math.min(46/i,46/a),s=(r.minX+r.maxX)/2,c=(r.minY+r.maxY)/2,l=e=>32+(e-s)*o,u=e=>32+(e-c)*o;e.strokes.forEach(e=>{if(e.points.length===1){let t=e.points[0];n.beginPath(),n.arc(l(t.x),u(t.y),3.3,0,Math.PI*2),n.fill();return}n.beginPath(),n.moveTo(l(e.points[0].x),u(e.points[0].y));for(let t=1;t<e.points.length;t+=1)n.lineTo(l(e.points[t].x),u(e.points[t].y));n.stroke()});let d=document.createElement(`canvas`);d.width=8,d.height=8;let f=d.getContext(`2d`,{willReadFrequently:!0});f.imageSmoothingEnabled=!0,f.imageSmoothingQuality=`high`,f.drawImage(t,0,0,8,8);let p=f.getImageData(0,0,8,8).data,m=new Float32Array(64);for(let e=0;e<64;e+=1)m[e]=p[e*4+3]/255;return m}async function Pf(e){let t=await wf(),n={[t.inputNames[0]]:new Se(`float32`,e,[1,64])},r=await t.run(n),i=Cf(Array.from(r[t.outputNames[0]].data,Number)),a=0;for(let e=1;e<i.length;e+=1)i[e]>i[a]&&(a=e);return{letter:bf[a],confidence:i[a]}}function Ff(e,t){if(xf.includes(e))return e;let n=xf.map(t=>{let n=Math.abs(t.length-e.length)*2;for(let r=0;r<Math.min(t.length,e.length);r+=1)t[r]!==e[r]&&(n+=1);return{unit:t,mismatches:n}}).sort((e,t)=>e.mismatches-t.mismatches);return t>=.56&&n[0]?.mismatches<=1?n[0].unit:``}async function If(e,t){if(!Array.isArray(e)||!e.length||!t)return{text:``,confidence:0,confident:!1,source:`onnx`};let n=Mf(e,t);if(!n.length||n.length>3)return{text:``,confidence:0,confident:!1,source:`onnx`};let r=[],i=[];try{for(let e of n){if(e.type===`slash`){r.push(`/`);continue}let t=await Pf(Nf(e));r.push(t.letter),i.push(t.confidence)}}catch(e){return{text:``,confidence:0,confident:!1,source:`onnx`,error:e instanceof Error?e.message:String(e)}}let a=r.join(``),o=i.length?i.reduce((e,t)=>e+t,0)/i.length:1,s=Ff(a,o);return{text:s,confidence:o,confident:!!(s&&o>=.66),source:`onnx`}}var Lf={distance:`#7c3aed`,speed:`#047857`,time:`#c2410c`},Rf=.65,zf=1.65,Bf=`"Segoe Print", "Comic Sans MS", sans-serif`,Vf=`Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif`;function Hf(e,t,n,r,i){let a=i?t/zf:t;if(i){let t=Math.max(22,Math.min(32,a*.043)),r=[[{text:`distance`,quantity:`distance`},{text:` = ½ × `},{text:`speed`,quantity:`speed`},{text:` × `},{text:`time`,quantity:`time`}],[{text:i.distance,quantity:`distance`},{text:` = ½ × `},{text:i.speed??`340`,quantity:`speed`},{text:` × `},{text:i.time,quantity:`time`}]];e.save(),e.globalCompositeOperation=`source-over`,e.font=`600 ${t}px ${Bf}`,e.textBaseline=`top`;let o=a*Rf,s=t=>t.reduce((t,n)=>t+e.measureText(n.text).width,0),c=Math.max(...r.map(s));c>o-32&&(t=Math.max(17,t*((o-32)/c)),e.font=`600 ${t}px ${Bf}`),r.forEach((r,i)=>{let a=(o-s(r))/2,c=n*.08+i*t*1.65;r.forEach(t=>{e.fillStyle=t.quantity?Lf[t.quantity]:`#172554`,e.fillText(t.text,a,c),a+=e.measureText(t.text).width})}),e.restore()}let o=e=>i?(Rf+e)*a:e*t;(r||[]).forEach(t=>{if(!t.points.length)return;e.save(),e.globalCompositeOperation=t.mode===`erase`?`destination-out`:`source-over`,e.strokeStyle=`#111827`,e.fillStyle=`#111827`,e.lineWidth=t.mode===`erase`?24:3,e.lineCap=`round`,e.lineJoin=`round`;let r=t.points[0];if(e.beginPath(),t.points.length===1)e.arc(o(r.x),r.y*n,t.mode===`erase`?12:1.5,0,Math.PI*2),e.fill();else{e.moveTo(o(r.x),r.y*n);for(let r=1;r<t.points.length;r+=1){let i=t.points[r];e.lineTo(o(i.x),i.y*n)}e.stroke()}e.restore()})}function Uf(e,t,n){if(!(e.strokes||[]).some(e=>e.mode!==`erase`&&e.points.length)&&!e.helpValues)return null;let r=t.width*(e.helpValues?zf:1),i=t.height,a=document.createElement(`canvas`);a.width=Math.max(1,Math.round(r*n)),a.height=Math.max(1,Math.round(i*n));let o=a.getContext(`2d`,{willReadFrequently:!0});o.setTransform(n,0,0,n,0,0),Hf(o,r,i,e.strokes,e.helpValues);let{data:s,width:c,height:l}=o.getImageData(0,0,a.width,a.height),u=c,d=l,f=-1,p=-1;for(let e=0;e<l;e+=1){let t=e*c*4;for(let n=0;n<c;n+=1)s[t+n*4+3]>8&&(n<u&&(u=n),n>f&&(f=n),e<d&&(d=e),e>p&&(p=e))}if(f<0)return null;let m=Math.round(14*n);u=Math.max(0,u-m),d=Math.max(0,d-m),f=Math.min(c-1,f+m),p=Math.min(l-1,p+m);let h=document.createElement(`canvas`);return h.width=f-u+1,h.height=p-d+1,h.getContext(`2d`).drawImage(a,-u,-d),h}function Wf(e,t,n){let r=[];return String(t).split(`
`).forEach(t=>{let i=``;t.split(/\s+/).forEach(t=>{let a=i?`${i} ${t}`:t;i&&e.measureText(a).width>n?(r.push(i),i=t):i=a}),r.push(i)}),r}function Gf(e,t,n,r,i,a){e.beginPath(),e.moveTo(t+a,n),e.arcTo(t+r,n,t+r,n+i,a),e.arcTo(t+r,n+i,t,n+i,a),e.arcTo(t,n+i,t,n,a),e.arcTo(t,n,t+r,n,a),e.closePath()}var Kf={page:`#ffffff`,ink:`#0f172a`,muted:`#475569`,faint:`#94a3b8`,border:`#cbd5e1`,cardBg:`#f8fafc`,accent:`#0eb4dc`,headerBg:`#0d1e33`,correctBg:`#dcfce7`,correctInk:`#166534`,wrongBg:`#fee2e2`,wrongInk:`#991b1b`,workBg:`#ffffff`},qf={correct:{bg:Kf.correctBg,ink:Kf.correctInk},wrong:{bg:Kf.wrongBg,ink:Kf.wrongInk},unchecked:{bg:`#fef3c7`,ink:`#92400e`}};function Jf({title:e,subtitle:t,entries:n,totalQuestions:r,baseSize:i,footer:a,scale:o=2}){let s=1e3,c=document.createElement(`canvas`).getContext(`2d`),l=(e,t)=>`${e} ${t}px ${Vf}`,u=n.map(e=>{c.font=l(500,19);let t=Wf(c,e.text,430);c.font=l(700,26);let n=Wf(c,e.answerText||`—`,406),r=Uf(e,i,o),a=0,s=0;if(r){let e=r.width/o,t=r.height/o,n=Math.min(1,430/e,340/t);a=e*n,s=t*n}let u=24+t.length*27+18+22+n.length*34+16+34+(e.helpUsed?26:0),d=(r?s:90)+24,f=44+Math.max(u,d);return{entry:e,questionLines:t,answerLines:n,working:r,workDrawWidth:a,workDrawHeight:s,height:f}}),d=186+u.reduce((e,t)=>e+t.height+18,0)+44,f=document.createElement(`canvas`);f.width=Math.round(s*o),f.height=Math.round(d*o);let p=f.getContext(`2d`);p.setTransform(o,0,0,o,0,0),p.textBaseline=`top`,p.fillStyle=Kf.page,p.fillRect(0,0,s,d),Gf(p,36,36,928,128,18),p.fillStyle=Kf.headerBg,p.fill(),p.fillStyle=Kf.accent,p.fillRect(64,62,6,76),p.fillStyle=`#ffffff`,p.font=l(800,30),p.fillText(e,88,62),p.fillStyle=`#cbd5e1`,p.font=l(500,17),p.fillText(t,88,104);let m=n.filter(e=>e.status===`correct`).length;p.textAlign=`right`,p.fillStyle=`#ffffff`,p.font=l(800,34),p.fillText(`${m} / ${r}`,934,62),p.fillStyle=`#cbd5e1`,p.font=l(500,15),p.fillText(`questions correct`,934,104),p.textAlign=`left`;let h=186;return u.forEach(e=>{let{entry:t}=e;Gf(p,36,h,928,e.height,16),p.fillStyle=Kf.cardBg,p.fill(),p.lineWidth=1.5,p.strokeStyle=Kf.border,p.stroke();let n=h+22;p.fillStyle=Kf.accent,p.font=l(800,14),p.fillText(`QUESTION ${t.number}`,58,n),n+=24,p.fillStyle=Kf.ink,p.font=l(500,19),e.questionLines.forEach(e=>{p.fillText(e,58,n),n+=27}),n+=18,p.fillStyle=Kf.muted,p.font=l(700,13),p.fillText(`YOUR ANSWER`,58,n),n+=22;let r=qf[t.status]||qf.wrong,i=e.answerLines.length*34+4;p.fillStyle=r.ink,p.fillRect(58,n-2,4,i),p.fillStyle=Kf.ink,p.font=l(700,26),e.answerLines.forEach(e=>{p.fillText(e,74,n),n+=34}),n+=16;let a=e=>`${e} incorrect ${e===1?`try`:`tries`}`,o;t.status===`correct`?o=t.wrongAttempts>0?`Correct after ${a(t.wrongAttempts)}`:`Correct first time`:t.status===`unchecked`?(o=`Changed since last check`,t.wrongAttempts>0&&(o+=` · ${a(t.wrongAttempts)}`)):o=`Not yet correct · ${a(t.wrongAttempts)}`,p.font=l(700,15);let s=p.measureText(o).width+46;Gf(p,58,n,s,30,15),p.fillStyle=r.bg,p.fill();let c=n+15;p.save(),p.lineWidth=2.6,p.lineCap=`round`,p.lineJoin=`round`,p.strokeStyle=r.ink,p.beginPath(),t.status===`correct`?(p.moveTo(70,c),p.lineTo(74,c+4.5),p.lineTo(82,c-5)):t.status===`unchecked`?(p.arc(76,c,6,0,Math.PI*2),p.moveTo(76,c-3.5),p.lineTo(76,c),p.lineTo(78.5,c+2)):(p.moveTo(71,c-5),p.lineTo(81,c+5),p.moveTo(81,c-5),p.lineTo(71,c+5)),p.stroke(),p.restore(),p.fillStyle=r.ink,p.fillText(o,92,n+7),n+=34,t.helpUsed&&(n+=6,p.fillStyle=Kf.muted,p.font=l(500,14),p.fillText(`Used “Help me get started”`,58,n));let u=h+22;p.fillStyle=Kf.muted,p.font=l(700,13),p.fillText(`WORKING`,512,u);let d=u+22,f=e.height-44-22;if(Gf(p,512,d,430,f,12),p.fillStyle=Kf.workBg,p.fill(),p.lineWidth=1,p.strokeStyle=Kf.border,p.stroke(),e.working){let t=512+(430-e.workDrawWidth)/2,n=d+(f-e.workDrawHeight)/2;p.imageSmoothingQuality=`high`,p.drawImage(e.working,t,n,e.workDrawWidth,e.workDrawHeight)}else p.fillStyle=Kf.faint,p.font=l(500,16),p.textAlign=`center`,p.fillText(`No working shown`,727,d+f/2-9),p.textAlign=`left`;h+=e.height+18}),p.fillStyle=Kf.faint,p.font=l(500,14),p.fillText(a,36,h+4),f}function Yf(e){return new Promise((t,n)=>{e.toBlob(e=>e?t(e):n(Error(`PNG export failed`)),`image/png`)})}function Xf(e,t){let n=URL.createObjectURL(e),r=document.createElement(`a`);r.href=n,r.download=t,document.body.appendChild(r),r.click(),r.remove(),window.setTimeout(()=>URL.revokeObjectURL(n),1e4)}async function Zf(e,t=`bat-echo-answers.png`){let n=Promise.resolve().then(()=>Yf(Jf(e)));if(navigator.clipboard?.write&&typeof window.ClipboardItem==`function`)try{return await navigator.clipboard.write([new window.ClipboardItem({"image/png":n})]),`copied`}catch{}return Xf(await n,t),`downloaded`}var Qf=`awm-bat-echo-quiz-v1`,$f=36e5,ep=(e,t)=>{let n=10**t;return Math.round(e*n)/n};function tp(e){return e.map(e=>(e||[]).map(e=>({m:e.mode===`erase`?`e`:`d`,p:e.points.map(e=>[ep(e.x,4),ep(e.y,4)])})))}function np(e){return e.map(e=>(e||[]).map(e=>({mode:e.m===`e`?`erase`:`draw`,points:e.p.map(([e,t])=>({x:e,y:t}))})))}function rp(e){return e.map(e=>(e||[]).map(e=>({k:e.pointerType||``,p:e.points.map(e=>[ep(e.x,1),ep(e.y,1),Math.round(e.t||0)])})))}function ip(e){return e.map(e=>(e||[]).map(e=>({pointerType:e.k||void 0,startTime:0,points:e.p.map(([e,t,n])=>({x:e,y:t,t:n}))})))}var ap=[`answers`,`units`,`checked`,`correct`,`attempted`,`wrongAttempts`,`workingHelpShown`,`recognisedAnswers`,`recognisedUnits`];function op(e){try{let t={savedAt:Date.now(),currentIndex:e.currentIndex,swapped:e.swapped,autoShowBatPictures:e.autoShowBatPictures,answerEntryMode:e.answerEntryMode,seenRewards:e.seenRewards,drawings:tp(e.drawings),answerInkStrokes:rp(e.answerInkStrokes),unitInkStrokes:rp(e.unitInkStrokes)};ap.forEach(n=>{t[n]=e[n]}),window.localStorage.setItem(Qf,JSON.stringify(t))}catch{}}function sp(e){try{let t=window.localStorage.getItem(Qf);if(!t)return null;let n=JSON.parse(t);if(!n||typeof n.savedAt!=`number`||Date.now()-n.savedAt>$f)return window.localStorage.removeItem(Qf),null;let r=t=>Array.isArray(t)&&t.length===e;if(![...ap,`drawings`,`answerInkStrokes`,`unitInkStrokes`].every(e=>r(n[e])))return window.localStorage.removeItem(Qf),null;let i={currentIndex:Math.min(e-1,Math.max(0,Number.isInteger(n.currentIndex)?n.currentIndex:0)),swapped:!!n.swapped,autoShowBatPictures:n.autoShowBatPictures!==!1,seenRewards:Array.isArray(n.seenRewards)?n.seenRewards:[],drawings:np(n.drawings),answerInkStrokes:ip(n.answerInkStrokes),unitInkStrokes:ip(n.unitInkStrokes)};return ap.forEach(e=>{i[e]=[...n[e]]}),(n.answerEntryMode===`type`||n.answerEntryMode===`write`)&&(i.answerEntryMode=n.answerEntryMode),i}catch{return null}}function cp(){try{window.localStorage.removeItem(Qf)}catch{}}var lp=``+new URL(`bat_1-T1wXc91_.jpg`,import.meta.url).href,up=``+new URL(`bat_2-Dt6FTyfP.jpg`,import.meta.url).href,dp=``+new URL(`bat_3-DVMsywsB.jpg`,import.meta.url).href,fp=``+new URL(`bat_4-C48GHSYN.jpg`,import.meta.url).href,pp=``+new URL(`bat_5-BGziyzVT.jpg`,import.meta.url).href,mp=``+new URL(`bat_6-DOEH5HYX.jpg`,import.meta.url).href,hp=``+new URL(`bat_7-BqzTAz4Q.jpg`,import.meta.url).href,gp=``+new URL(`bat_8-BbKHXjx-.jpg`,import.meta.url).href,_p=``+new URL(`bat_9-UTIUwy6c.jpg`,import.meta.url).href,vp=e((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.fragment`);function r(e,n,r){var i=null;if(r!==void 0&&(i=``+r),n.key!==void 0&&(i=``+n.key),`key`in n)for(var a in r={},n)a!==`key`&&(r[a]=n[a]);else r=n;return n=r.ref,{$$typeof:t,type:e,key:i,ref:n===void 0?null:n,props:r}}e.Fragment=n,e.jsx=r,e.jsxs=r})),Z=e(((e,t)=>{t.exports=vp()}))(),yp=[lp,up,dp,fp,pp,mp,hp,gp,_p],Q=[{text:`A bat sends an ultrasonic pulse towards a moth. The echo returns 0.020 seconds later. How far away is the moth?`,answer:3.4,unit:`m`,quantity:`distance`,tolerance:.005},{text:`A bat detects a beetle 5.1 m away. How long does the sound take to travel to the beetle and back?`,answer:30,unit:`ms`,quantity:`time`,tolerance:.05},{text:`A bat receives an echo from a flying insect 25 ms after making its call. How far away is the insect?`,answer:4.25,unit:`m`,quantity:`distance`,tolerance:.005},{text:`A person shouts towards a cliff. The echo is heard 0.8 seconds later. How far away is the cliff?`,answer:136,unit:`m`,quantity:`distance`,tolerance:.05},{text:`A dolphin sends out a click in salt water. The echo returns from a fish 0.20 seconds later. The speed of sound in salt water is 1500 m/s. How far away is the fish?`,answer:150,unit:`m`,quantity:`distance`,tolerance:.05,speed:1500},{text:`An ultrasonic sensor detects a box 1.7 m away. How long does the sound take to travel to the box and back?`,answer:10,unit:`ms`,quantity:`time`,tolerance:.05},{text:`An ultrasound scan is used to check an athlete’s injured thigh. The pulse travels 7.9 cm into the muscle and the echo returns after 0.10 ms. Calculate the speed of sound in the muscle.`,answer:1580,unit:`m/s`,quantity:`speed`,tolerance:.5},{text:`A parking sensor detects a car 0.68 m away. How long does the sound take to travel to the car and back?`,answer:4,unit:`ms`,quantity:`time`,tolerance:.05}],bp=[{distance:`distance`,time:`0.020`},{distance:`5.1`,time:`time`},{distance:`distance`,time:`0.025`},{distance:`distance`,time:`0.8`},{distance:`distance`,speed:`1500`,time:`0.20`},{distance:`1.7`,time:`time`},{distance:`0.079`,speed:`speed`,time:`0.00010`},{distance:`0.68`,time:`time`}],xp=0,Sp=[`m`,`cm`,`mm`,`km`,`s`,`ms`,`m/s`],Cp={distance:{m:1,metre:1,metres:1,meter:1,meters:1,cm:.01,centimetre:.01,centimetres:.01,centimeter:.01,centimeters:.01,mm:.001,millimetre:.001,millimetres:.001,millimeter:.001,millimeters:.001,km:1e3,kilometre:1e3,kilometres:1e3,kilometer:1e3,kilometers:1e3},time:{s:1,sec:1,secs:1,second:1,seconds:1,ms:.001,msec:.001,millisecond:.001,milliseconds:.001},speed:{"m/s":1,mps:1,metrepersecond:1,metrespersecond:1,meterpersecond:1,meterspersecond:1}};function wp(e){return e.toLowerCase().replace(/μ/g,`µ`).replace(/\./g,``)}var Tp=340,Ep=1500,Dp=(e,t,n=.02)=>Math.abs(e-t)<=Math.abs(t)*n;function Op(e,t){let{valueInBaseUnits:n,answerInBaseUnits:r}=t;if(Math.abs(t.enteredValue-e.answer)<=e.tolerance)return`Check the unit.`;if(e.quantity===`distance`||e.quantity===`time`){let t=e.speed??Tp,i=t===Tp?Ep:Tp;if(Dp(n,r*(e.quantity===`distance`?i/t:t/i)))return`Check which speed of sound to use.`}let i=e=>Dp(n,r*e)||Dp(n,r/e),a=/\d\s*ms\b/.test(e.text)||e.unit===`ms`;if(a&&i(1e3))return`Did you convert between ms and s?`;let o=/\d\s*cm\b/.test(e.text);return o&&i(100)?`Did you convert cm to m?`:o&&a&&i(10)?`Did you convert cm to m and ms to s?`:null}function kp(e,t){let n=Object.keys(Cp).find(t=>Cp[t][e]!==void 0);return!n||n===t.quantity?`Check the unit.`:`That's a unit of ${n}, but the question asks for a ${t.quantity}.`}function Ap(e,t,n){let r=String(e??``).trim().replace(/\s+/g,``).replace(/−/g,`-`).replace(/,/g,`.`).match(/^\+?((?:\d+(?:\.\d*)?|\.\d+)(?:[eE][+-]?\d+)?)\s*([a-zA-Z/.]+)?$/);if(!r)return{error:`invalid`};let i=Number(r[1]);if(!Number.isFinite(i)||i<0)return{error:`invalid`};let a=r[2]?wp(r[2]):``,o=Cp[t.quantity],s=o[wp(t.unit)];if(n&&!a)return{error:`missing-unit`};let c=a?o[a]:s;return c===void 0?{error:`wrong-unit`,message:kp(a,t)}:{enteredValue:i,valueInBaseUnits:i*c,answerInBaseUnits:t.answer*s,toleranceInBaseUnits:t.tolerance*s}}function jp(e){let t=e.nativeEvent||e,n=typeof t.getCoalescedEvents==`function`?t.getCoalescedEvents():[];return n.length?n:[t]}var Mp=[`Bats are the only mammals capable of true powered flight.`,`There are more than 1,400 species of bat in the world.`,`Bats live on every continent except Antarctica.`,`The scientific name for the bat group, Chiroptera, means “hand-wing”. Their wings are supported by elongated finger bones.`,`Bats have existed for more than 50 million years.`,`Bats are not blind. Many have very sensitive vision that works well in dim light.`,`When an echolocating bat closes in on an insect, it can make its calls faster and faster in a “feeding buzz”.`,`Different bat species have different call patterns. Scientists can record bat calls to help identify and study them.`,`Some bats eat insects, some eat fruit or nectar, and some species even catch fish.`,`Only three of the world’s 1,400+ bat species are vampire bats that feed on blood.`,`Some bats are important pollinators. They carry pollen between flowers while feeding on nectar.`,`Lesser long-nosed bats can have tongues as long as their bodies, which they use to drink nectar from cactus and agave flowers.`,`Baby bats are called pups.`,`One exceptionally long-lived Siberian bat was recaptured at least 41 years after it was first banded.`];function Np(e){let t=[...e];for(let e=t.length-1;e>0;--e){let n=Math.floor(Math.random()*(e+1));[t[e],t[n]]=[t[n],t[e]]}return t}function Pp(){let e=Np(yp).slice(0,Q.length),t=Np(Mp).slice(0,Q.length);return Q.map((n,r)=>({afterQuestion:r+1,image:e[r],fact:t[r]}))}var Fp=null,Ip=1e4,Lp=`The unit is right, but the number is wrong.`,Rp=[`m`,`s`,`/`],zp=[`1`,`2`,`3`,`m`,`4`,`5`,`6`,`s`,`7`,`8`,`9`,`/`,`.`,`0`,`backspace`];function Bp(){return Fp||(Fp={rewardPlan:Pp(),currentIndex:0,answers:Q.map(()=>``),units:Q.map(()=>``),checked:Q.map(()=>!1),correct:Q.map(()=>!1),swapped:!1,activeReward:null,seenRewards:[],drawings:Q.map(()=>[]),answerInkStrokes:Q.map(()=>[]),unitInkStrokes:Q.map(()=>[]),recognisedAnswers:Q.map(()=>``),recognisedUnits:Q.map(()=>``),autoShowBatPictures:!0,wrongAttempts:Q.map(()=>0),workingHelpShown:Q.map(()=>!1),attempted:Q.map(()=>!1),workingSize:null,answerEntryMode:`write`},Object.assign(Fp,sp(Q.length)||{})),Fp.attempted??=Q.map(()=>!1),Fp.wrongAttempts??=Q.map(()=>0),Fp.workingHelpShown??=Q.map(()=>!1),Fp.units??=Q.map(()=>``),Fp.unitInkStrokes??=Q.map(()=>[]),Fp.recognisedUnits??=Q.map(()=>``),Fp}function Vp(){return(0,Z.jsxs)(`svg`,{viewBox:`0 0 24 24`,"aria-hidden":`true`,children:[(0,Z.jsx)(`path`,{d:`M7 7h11`}),(0,Z.jsx)(`path`,{d:`m15 4 3 3-3 3`}),(0,Z.jsx)(`path`,{d:`M17 17H6`}),(0,Z.jsx)(`path`,{d:`m9 14-3 3 3 3`})]})}function Hp(e){let[t,n]=(0,u.useState)(0);return(0,Z.jsx)(Up,{...e,onRestart:()=>n(e=>e+1)},t)}function Up({onFinish:e,onRewardChange:t,onRestart:n}){let r=(0,u.useRef)(Bp()),i=r.current,a=i.rewardPlan,[o,s]=(0,u.useState)(i.currentIndex),[c,l]=(0,u.useState)(!1);(0,u.useEffect)(()=>{l(!1);let e=window.setTimeout(()=>l(!0),Ip);return()=>window.clearTimeout(e)},[o]);let[d,f]=(0,u.useState)(()=>[...i.answers]),[p,m]=(0,u.useState)(()=>[...i.units]),[h,g]=(0,u.useState)(()=>[...i.checked]),[_,v]=(0,u.useState)(()=>[...i.correct]),[y,b]=(0,u.useState)({type:``,text:``}),[x,S]=(0,u.useState)(i.swapped),[C,w]=(0,u.useState)(i.activeReward),[T,E]=(0,u.useState)(``),[D,O]=(0,u.useState)(()=>i.answerEntryMode===`type`?`type`:`write`);(0,u.useEffect)(()=>{i.answerEntryMode=D},[D,i]);let[k,A]=(0,u.useState)(()=>[...i.recognisedAnswers]),[j,ee]=(0,u.useState)(()=>[...i.recognisedUnits]),[te,M]=(0,u.useState)(i.autoShowBatPictures),[ne,N]=(0,u.useState)(i.autoShowBatPictures),[P,re]=(0,u.useState)(()=>[...i.wrongAttempts]),[ie,ae]=(0,u.useState)(()=>[...i.workingHelpShown]),[oe,se]=(0,u.useState)(()=>[...i.attempted]),[ce,le]=(0,u.useState)(``),ue=(0,u.useRef)(null),de=(0,u.useRef)(new Set(i.seenRewards)),fe=(0,u.useRef)(i.drawings),pe=(0,u.useRef)(i.workingHelpShown),F=(0,u.useRef)(i.currentIndex),I=(0,u.useRef)(!1),me=(0,u.useRef)(null),he=(0,u.useRef)(null),ge=(0,u.useRef)(null),_e=(0,u.useRef)(null),ve=(0,u.useRef)(null),ye=(0,u.useRef)(null),be=(0,u.useRef)(null),xe=(0,u.useRef)(null),Se=(0,u.useRef)(null),Ce=(0,u.useRef)(null),we=(0,u.useRef)(i.answerInkStrokes),Te=(0,u.useRef)(null),Ee=(0,u.useRef)(null),L=(0,u.useRef)(!1),De=(0,u.useRef)(null),Oe=(0,u.useRef)(null),ke=(0,u.useRef)(0),Ae=(0,u.useRef)(null),je=(0,u.useRef)(null),Me=(0,u.useRef)(i.unitInkStrokes),Ne=(0,u.useRef)(null),Pe=(0,u.useRef)(null),Fe=(0,u.useRef)(!1),Ie=(0,u.useRef)(null),Le=(0,u.useRef)(0),Re=Q[o],ze=o>=xp,Be=(0,u.useMemo)(()=>_.filter(Boolean).length,[_]);(0,u.useEffect)(()=>{F.current=o,i.currentIndex=o},[o,i]),(0,u.useEffect)(()=>{i.answers=d},[d,i]),(0,u.useEffect)(()=>{i.units=p},[p,i]),(0,u.useEffect)(()=>{i.checked=h},[h,i]),(0,u.useEffect)(()=>{i.correct=_},[_,i]),(0,u.useEffect)(()=>{i.recognisedAnswers=k},[k,i]),(0,u.useEffect)(()=>{i.recognisedUnits=j},[j,i]),(0,u.useEffect)(()=>{i.swapped=x},[x,i]),(0,u.useEffect)(()=>{i.activeReward=C},[C,i]),(0,u.useEffect)(()=>{t?.(C!==null)},[C,t]),(0,u.useEffect)(()=>{i.autoShowBatPictures=te},[te,i]),(0,u.useEffect)(()=>{i.wrongAttempts=P},[P,i]),(0,u.useEffect)(()=>{i.attempted=oe},[oe,i]);let Ve=(0,u.useRef)(null),He=(0,u.useRef)(!1),Ue=(0,u.useRef)(!1),We=(0,u.useRef)(!0),Ge=(0,u.useCallback)(()=>{Ve.current&&=(window.clearTimeout(Ve.current),null),!(!He.current||Ue.current)&&(He.current=!1,op(r.current))},[]),Ke=(0,u.useCallback)(()=>{Ue.current||(He.current=!0,Ve.current&&window.clearTimeout(Ve.current),Ve.current=window.setTimeout(Ge,400))},[Ge]);(0,u.useEffect)(()=>{if(We.current){We.current=!1;return}Ke()},[d,p,h,_,oe,P,ie,k,j,o,x,te,C,D,Ke]),(0,u.useEffect)(()=>{let e=()=>{document.visibilityState===`hidden`&&Ge()};return window.addEventListener(`pagehide`,Ge),document.addEventListener(`visibilitychange`,e),()=>{window.removeEventListener(`pagehide`,Ge),document.removeEventListener(`visibilitychange`,e),Ge()}},[Ge]);let qe=()=>{window.confirm(`Start again? This clears all your answers and working.`)&&(Ue.current=!0,Ve.current&&window.clearTimeout(Ve.current),cp(),Fp=null,n?.())};(0,u.useEffect)(()=>()=>{ue.current&&window.clearTimeout(ue.current)},[]),(0,u.useEffect)(()=>{i.workingHelpShown=ie,pe.current=ie},[ie,i]);let Je=(0,u.useCallback)(()=>{let e=ge.current;if(!e)return;let t=e.getContext(`2d`),n=e.getBoundingClientRect();if(!n.width||!n.height)return;let r=Math.min(window.devicePixelRatio||1,2);t.save(),t.setTransform(1,0,0,1,0,0),t.clearRect(0,0,e.width,e.height),t.restore(),t.setTransform(r,0,0,r,0,0);let i=pe.current[F.current]?bp[F.current]:null,a=fe.current[F.current]||[];Hf(t,n.width,n.height,a,i)},[]),Ye=(0,u.useCallback)(()=>{let e=ge.current;if(!e)return;let t=e.getBoundingClientRect();if(!t.width||!t.height)return;let n=Math.min(window.devicePixelRatio||1,2),i=Math.round(t.width*n),a=Math.round(t.height*n);(e.width!==i||e.height!==a)&&(e.width=i,e.height=a),r.current.workingSize={width:pe.current[F.current]?t.width/zf:t.width,height:t.height},Je()},[Je]),Xe=(0,u.useCallback)(()=>{let e=_e.current,t=ve.current,n=ye.current,r=be.current;if(!e||!t||!n||!r)return;if(window.matchMedia(`(max-width: 760px)`).matches){r.style.left=``;return}let i=e.getBoundingClientRect(),a=t.getBoundingClientRect(),o=n.getBoundingClientRect(),s=Math.min(a.right,o.right),c=Math.max(a.left,o.left);r.style.left=`${(s+c)/2-i.left}px`},[]);(0,u.useLayoutEffect)(()=>{Xe(),Ye()},[x,o,C,ie,Xe,Ye]),(0,u.useEffect)(()=>{if(C!==null)return;let e=_e.current;if(!e||typeof ResizeObserver>`u`)return;let t=new ResizeObserver(()=>{Xe(),Ye()});return t.observe(e),()=>t.disconnect()},[C,Xe,Ye]),(0,u.useEffect)(()=>{let e=()=>{Xe(),Ye()};return window.addEventListener(`resize`,e),()=>window.removeEventListener(`resize`,e)},[Xe,Ye]),(0,u.useEffect)(()=>{C===null&&requestAnimationFrame(Ye)},[C,o,Ye]);let Ze=(0,u.useCallback)(()=>{let e=Se.current,t=Ce.current;if(!e||!t)return;let n=e.getBoundingClientRect();if(!n.width||!n.height)return;let r=Math.min(window.devicePixelRatio||1,2),i=Math.round(n.width*r),a=Math.round(n.height*r);(t.width!==i||t.height!==a)&&(t.width=i,t.height=a);let o=t.getContext(`2d`);o.save(),o.setTransform(1,0,0,1,0,0),o.clearRect(0,0,t.width,t.height),o.restore(),o.setTransform(r,0,0,r,0,0),o.strokeStyle=`#111827`,o.fillStyle=`#111827`,o.lineWidth=3.4,o.lineCap=`round`,o.lineJoin=`round`,(we.current[F.current]||[]).forEach(e=>{if(e.points.length){if(e.points.length===1){let t=e.points[0];o.beginPath(),o.arc(t.x,t.y,1.8,0,Math.PI*2),o.fill();return}o.beginPath(),o.moveTo(e.points[0].x,e.points[0].y);for(let t=1;t<e.points.length;t+=1)o.lineTo(e.points[t].x,e.points[t].y);o.stroke()}})},[]),Qe=(0,u.useCallback)(()=>{let e=Ae.current,t=je.current;if(!e||!t)return;let n=e.getBoundingClientRect();if(!n.width||!n.height)return;let r=Math.min(window.devicePixelRatio||1,2),i=Math.round(n.width*r),a=Math.round(n.height*r);(t.width!==i||t.height!==a)&&(t.width=i,t.height=a);let o=t.getContext(`2d`);o.save(),o.setTransform(1,0,0,1,0,0),o.clearRect(0,0,t.width,t.height),o.restore(),o.setTransform(r,0,0,r,0,0),o.strokeStyle=`#111827`,o.fillStyle=`#111827`,o.lineWidth=3.4,o.lineCap=`round`,o.lineJoin=`round`,(Me.current[F.current]||[]).forEach(e=>{if(e.points.length){if(e.points.length===1){let t=e.points[0];o.beginPath(),o.arc(t.x,t.y,1.8,0,Math.PI*2),o.fill();return}o.beginPath(),o.moveTo(e.points[0].x,e.points[0].y);for(let t=1;t<e.points.length;t+=1)o.lineTo(e.points[t].x,e.points[t].y);o.stroke()}})},[]),$e=(0,u.useCallback)(()=>{De.current&&=(window.clearTimeout(De.current),null),ke.current+=1,we.current[F.current]=[],i.answerInkStrokes=we.current,Te.current=null,Ee.current=null,L.current=!1,Ze()},[Ze,i]),et=(0,u.useCallback)(()=>{Ie.current&&=(window.clearTimeout(Ie.current),null),Le.current+=1,Me.current[F.current]=[],i.unitInkStrokes=Me.current,Ne.current=null,Pe.current=null,Fe.current=!1,Qe()},[Qe,i]);(0,u.useEffect)(()=>{he.current&&=(window.cancelAnimationFrame(he.current),null),De.current&&=(window.clearTimeout(De.current),null),Te.current=null,Ee.current=null,L.current=!1,Ie.current&&=(window.clearTimeout(Ie.current),null),Ne.current=null,Pe.current=null,Fe.current=!1,E(``),window.requestAnimationFrame(Ze),window.requestAnimationFrame(Qe)},[o,Ze,Qe]),(0,u.useEffect)(()=>{if(D!==`write`)return;let e=Se.current,t=Ae.current;if(!e||(window.requestAnimationFrame(Ze),window.requestAnimationFrame(Qe),typeof ResizeObserver>`u`))return;let n=new ResizeObserver(()=>{Ze(),Qe()});return n.observe(e),t&&n.observe(t),()=>n.disconnect()},[D,ze,Ze,Qe]),(0,u.useEffect)(()=>{sf(),Tf()},[]),(0,u.useEffect)(()=>{let e=!1;async function t(){if(`createHandwritingRecognizer`in navigator&&typeof window.HandwritingStroke==`function`)try{let t=await navigator.createHandwritingRecognizer({languages:[`en`]});if(e){t.finish?.();return}Oe.current=t}catch{}}return t(),()=>{e=!0,Oe.current?.finish?.(),Oe.current=null}},[]),(0,u.useEffect)(()=>()=>{De.current&&window.clearTimeout(De.current),Ie.current&&window.clearTimeout(Ie.current),he.current&&window.cancelAnimationFrame(he.current)},[]);let tt=(0,u.useRef)([]),nt=(0,u.useCallback)(e=>{if(!h[e]){b({type:``,text:``});return}let t=Q[e];_[e]?b({type:`correct`,text:`Correct — ${t.answer} ${t.unit}.`}):b({type:`wrong`,text:tt.current[e]||Lp})},[h,_]);(0,u.useEffect)(()=>{nt(o)},[o,nt]);let rt=(0,u.useCallback)(e=>{f(t=>{let n=[...t];return n[o]=e,n}),g(e=>{let t=[...e];return t[o]=!1,t}),v(e=>{let t=[...e];return t[o]=!1,t}),b({type:``,text:``})},[o]),it=e=>{rt(e.target.value)},at=(0,u.useCallback)(e=>{let t=String(e??``).toLowerCase().replace(/\s+/g,``).slice(0,3);m(e=>{let n=[...e];return n[o]=t,n}),g(e=>{let t=[...e];return t[o]=!1,t}),v(e=>{let t=[...e];return t[o]=!1,t}),b({type:``,text:``})},[o]),ot=()=>{De.current&&=(window.clearTimeout(De.current),null),Ie.current&&=(window.clearTimeout(Ie.current),null),O(`type`),window.requestAnimationFrame(()=>xe.current?.focus())},st=e=>{let t=d[o].replace(`,`,`.`),[,n=``,r=``]=t.match(/^([\d.]*)\s*(.*)$/)||[];if(e===`backspace`){rt(t.slice(0,-1).trimEnd());return}if(e===`clear`){rt(``);return}if(Rp.includes(e)){if(!n||r.length>=3)return;rt(r?`${t}${e}`:`${n} ${e}`);return}if(!r){if(e===`.`){if(n.includes(`.`))return;rt(n?`${n}.`:`0.`);return}/^\d$/.test(e)&&(n.replace(/\D/g,``).length>=5||rt(n===`0`?e:`${n}${e}`))}},ct=()=>{xe.current?.blur();let e=k[o];e&&rt(e);let t=j[o];t&&at(t),O(`write`),window.requestAnimationFrame(()=>{Ze(),Qe()})},lt=()=>{$e(),et(),A(e=>{let t=[...e];return t[o]=``,t}),ee(e=>{let t=[...e];return t[o]=``,t}),rt(``),at(``),E(``)},ut=async e=>{e.preventDefault();let t=d[o].trim(),n=ze?p[o].trim():``,r=we.current[o]||[];D===`write`&&r.length&&(t=await Ct()||k[o].trim());let i=Me.current[o]||[];D===`write`&&ze&&i.length&&(n=await wt()||j[o].trim());let a=Ap(D===`type`?t:ze?`${t} ${n}`:t,Re,ze);if(a.error){let e=a.error===`missing-unit`?`What's the unit?`:a.error===`wrong-unit`?a.message:D===`write`?`I couldn't read a valid answer yet. Rewrite either box, or use Type answer.`:`Enter a valid number and unit first.`;b({type:`wrong`,text:e});return}let s=Math.abs(a.valueInBaseUnits-a.answerInBaseUnits)<=a.toleranceInBaseUnits;g(e=>{let t=[...e];return t[o]=!0,t}),se(e=>{if(e[o])return e;let t=[...e];return t[o]=!0,t}),v(e=>{let t=[...e];return t[o]=s,t});let c=s?``:Op(Re,a)||Lp;tt.current[o]=c,b(s?{type:`correct`,text:`Correct — ${Re.answer} ${Re.unit}.`}:{type:`wrong`,text:c}),s||re(e=>{let t=[...e];return t[o]+=1,t})},dt=()=>{o>=bp.length||(ae(e=>{let t=[...e];return t[o]=!0,pe.current=t,t}),window.requestAnimationFrame(()=>{let e=ge.current?.parentElement;if(Ye(),!e)return;let t=Math.max(0,e.scrollWidth-e.clientWidth);if(e.scrollLeft=t,he.current&&window.cancelAnimationFrame(he.current),window.matchMedia(`(prefers-reduced-motion: reduce)`).matches){e.scrollLeft=0;return}let n=performance.now(),r=i=>{let a=Math.min(1,(i-n)/1500),o=a<.5?4*a*a*a:1-(-2*a+2)**3/2;e.scrollLeft=t*(1-o),a<1?he.current=window.requestAnimationFrame(r):he.current=null};he.current=window.requestAnimationFrame(r)}))},ft=e=>{s(e)},pt=()=>{o>0&&ft(o-1)},mt=()=>{if(!_[o])return;let e=o+1;if(!de.current.has(e)){de.current.add(e),i.seenRewards=[...de.current],N(te),w(e-1);return}o<Q.length-1&&ft(o+1)},ht=()=>{if(C===null)return;let e=a[C].afterQuestion;w(null),e<Q.length&&ft(e)},gt=()=>{w(null),ft(0)},_t=e=>{let t=ge.current.getBoundingClientRect(),n=pe.current[F.current],r=Math.max(0,Math.min(1,(e.clientX-t.left)/t.width)),i=n?r*zf-Rf:r;return{x:Math.max(-Rf,Math.min(1,i)),y:Math.max(0,Math.min(1,(e.clientY-t.top)/t.height))}},vt=e=>e.pointerType===`pen`&&(e.button===5||(e.buttons&32)==32),yt=e=>e.pointerType===`pen`||e.pointerType===`touch`||e.pointerType===`mouse`&&e.button===0,bt=(e,t=performance.now())=>{let n=Se.current.getBoundingClientRect();return{x:Math.max(0,Math.min(n.width,e.clientX-n.left)),y:Math.max(0,Math.min(n.height,e.clientY-n.top)),t:Math.max(0,performance.now()-t)}},xt=e=>{let t=String(e??``).trim().replace(/\s+/g,``).replace(/,/g,`.`);if(/^\d{1,4}(?:\.\d{1,2})?$/.test(t))return t;let n=t.match(/\d{1,4}(?:\.\d{1,2})?/);return n?n[0]:``},St=e=>{let t=String(e??``).trim().toLowerCase().replace(/\s+/g,``).replace(/[^a-z/]/g,``);return Sp.includes(t)?t:``},R=async(e,t,n)=>{let r=Oe.current;if(!r||typeof window.HandwritingStroke!=`function`)return``;let i=e.find(e=>e.pointerType)?.pointerType,a=i===`pen`?`stylus`:[`touch`,`mouse`].includes(i)?i:void 0;try{let t=n===`unit`?{recognitionType:`text`,alternatives:8,graphemeSet:[`m`,`s`,`c`,`k`,`/`,`M`,`S`,`C`,`K`]}:{recognitionType:`number`,alternatives:4,graphemeSet:[`0`,`1`,`2`,`3`,`4`,`5`,`6`,`7`,`8`,`9`,`.`]};a&&(t.inputType=a);let i=r.startDrawing(t);e.forEach(e=>{let t=new window.HandwritingStroke;e.points.forEach(e=>{t.addPoint({x:e.x,y:e.y,t:e.t})}),i.addStroke(t)});let o=await i.getPrediction();i.clear?.();for(let e of o||[]){let t=n===`unit`?St(e?.text):xt(e?.text);if(t)return t}}catch{}return``},Ct=async()=>{let e=Se.current,t=F.current,n=we.current[t]||[];if(!e||!n.length)return k[t]||``;De.current&&=(window.clearTimeout(De.current),null);let r=++ke.current;E(`Recognising…`);let i=Q[t],a=e.getBoundingClientRect(),o=await vf(n,a.width,a.height),s=xt(o.text),c=!!(s&&o.confident);if(!c){let e=await R(n,i,`number`);e&&(s=e,c=!0)}return r===ke.current?s?(A(e=>{let n=[...e];return n[t]=s,n}),f(e=>{let n=[...e];return n[t]=s,n}),g(e=>{let n=[...e];return n[t]=!1,n}),v(e=>{let n=[...e];return n[t]=!1,n}),b({type:``,text:``}),E(c?``:`Check the recognised number before submitting.`),s):(A(e=>{let n=[...e];return n[t]=``,n}),f(e=>{let n=[...e];return n[t]=``,n}),E(`I couldn't read that yet — clear and rewrite, or use Type answer.`),``):``},wt=async()=>{let e=Ae.current,t=F.current,n=Me.current[t]||[];if(!e||!n.length)return j[t]||``;Ie.current&&=(window.clearTimeout(Ie.current),null);let r=++Le.current;E(`Recognising unit…`);let i=Q[t],a=await If(n,e.getBoundingClientRect().height),o=St(a.text),s=!!(o&&a.confident);if(!s){let e=await R(n,i,`unit`);e&&(o=e,s=!0)}return r===Le.current?(ee(e=>{let n=[...e];return n[t]=o,n}),m(e=>{let n=[...e];return n[t]=o,n}),g(e=>{let n=[...e];return n[t]=!1,n}),v(e=>{let n=[...e];return n[t]=!1,n}),b({type:``,text:``}),o?(E(s?``:`Check the recognised unit before submitting.`),o):(E(`I couldn't read that unit — use ${Sp.join(`, `)}, or Type answer.`),``)):``},Tt=()=>{De.current&&window.clearTimeout(De.current),De.current=window.setTimeout(()=>{De.current=null,Ct()},700)},Et=()=>{Ie.current&&window.clearTimeout(Ie.current),Ie.current=window.setTimeout(()=>{Ie.current=null,wt()},700)},Dt=(e,t=18)=>{let n=F.current,r=we.current[n]||[],a=[];return r.forEach(n=>{let r=[],i=()=>{r.length&&(a.push({...n,points:r}),r=[])};n.points.forEach(n=>{Math.hypot(n.x-e.x,n.y-e.y)<=t?i():r.push(n)}),i()}),we.current[n]=a,i.answerInkStrokes=we.current,Ze(),a.length>0},Ot=e=>{if(!yt(e))return;e.preventDefault(),e.stopPropagation();let t=Se.current;if(!t)return;if(De.current&&=(window.clearTimeout(De.current),null),ke.current+=1,vt(e)){t.setPointerCapture(e.pointerId),Ee.current=e.pointerId,L.current=!0,Te.current=null,A(e=>{let t=[...e];return t[F.current]=``,t}),rt(``),E(`Erasing…`);let n=Math.max(18,Math.min(30,Math.max(e.width,e.height)));Dt(bt(e),n);return}let n=F.current,r=we.current[n]||[];we.current[n]||(we.current[n]=r),E(r.length?`Updating recognition…`:`Writing…`),t.setPointerCapture(e.pointerId),Ee.current=e.pointerId;let a=performance.now(),o={pointerType:e.pointerType,startTime:a,points:[bt(e,a)]};Te.current=o,r.push(o),i.answerInkStrokes=we.current,Ze()},kt=e=>{if(Ee.current!==e.pointerId||!Te.current)return;if(e.preventDefault(),e.stopPropagation(),L.current){let t=Math.max(18,Math.min(30,Math.max(e.width,e.height)));Dt(bt(e),t);return}let t=Te.current.startTime,n=jp(e).map(e=>bt(e,t));Te.current.points.push(...n),Ze()},At=e=>{if(Ee.current!==e.pointerId)return;e.preventDefault(),e.stopPropagation();let t=Se.current,n=L.current;Te.current=null,Ee.current=null,L.current=!1,t?.hasPointerCapture(e.pointerId)&&t.releasePointerCapture(e.pointerId),Ke(),n?(we.current[F.current]||[]).length>0?(E(`Updating recognition…`),Tt()):E(`Answer cleared`):Tt()},jt=(e,t=performance.now())=>{let n=Ae.current.getBoundingClientRect();return{x:Math.max(0,Math.min(n.width,e.clientX-n.left)),y:Math.max(0,Math.min(n.height,e.clientY-n.top)),t:Math.max(0,performance.now()-t)}},Mt=(e,t=18)=>{let n=F.current,r=Me.current[n]||[],a=[];return r.forEach(n=>{let r=[],i=()=>{r.length&&(a.push({...n,points:r}),r=[])};n.points.forEach(n=>{Math.hypot(n.x-e.x,n.y-e.y)<=t?i():r.push(n)}),i()}),Me.current[n]=a,i.unitInkStrokes=Me.current,Qe(),a.length>0},Nt=e=>{if(!yt(e))return;e.preventDefault(),e.stopPropagation();let t=Ae.current;if(!t)return;if(Ie.current&&=(window.clearTimeout(Ie.current),null),Le.current+=1,vt(e)){t.setPointerCapture(e.pointerId),Pe.current=e.pointerId,Fe.current=!0,Ne.current=null,ee(e=>{let t=[...e];return t[F.current]=``,t}),at(``),E(`Erasing unit…`);let n=Math.max(18,Math.min(30,Math.max(e.width,e.height)));Mt(jt(e),n);return}let n=F.current,r=Me.current[n]||[];Me.current[n]||(Me.current[n]=r),E(r.length?`Updating unit…`:`Writing unit…`),t.setPointerCapture(e.pointerId),Pe.current=e.pointerId;let a=performance.now(),o={pointerType:e.pointerType,startTime:a,points:[jt(e,a)]};Ne.current=o,r.push(o),i.unitInkStrokes=Me.current,Qe()},Pt=e=>{if(Pe.current!==e.pointerId)return;if(e.preventDefault(),e.stopPropagation(),Fe.current){let t=Math.max(18,Math.min(30,Math.max(e.width,e.height)));Mt(jt(e),t);return}if(!Ne.current)return;let t=Ne.current.startTime,n=jp(e).map(e=>jt(e,t));Ne.current.points.push(...n),Qe()},Ft=e=>{if(Pe.current!==e.pointerId)return;e.preventDefault(),e.stopPropagation();let t=Ae.current,n=Fe.current;Ne.current=null,Pe.current=null,Fe.current=!1,t?.hasPointerCapture(e.pointerId)&&t.releasePointerCapture(e.pointerId),Ke(),(Me.current[F.current]||[]).length>0?(E(n?`Updating unit…`:`Recognising unit…`),Et()):E(`Unit cleared`)},It=(0,u.useRef)(new Map),Lt=(0,u.useRef)(null),Rt=(0,u.useRef)(null),zt=e=>{for(let t=e?.parentElement;t;t=t.parentElement){let{overflowY:e}=window.getComputedStyle(t);if(/(auto|scroll)/.test(e)&&t.scrollHeight>t.clientHeight)return t}return document.scrollingElement||document.documentElement},Bt=()=>{let e=[...It.current.values()].slice(0,2);return{x:(e[0].x+e[1].x)/2,y:(e[0].y+e[1].y)/2}},z=()=>{let e=ge.current,t=Rt.current,n=me.current;if(n&&t?.pointerType===`touch`){let e=fe.current[F.current],r=e.indexOf(n);r!==-1&&performance.now()-t.startedAt<300&&(e.splice(r,1),Je()),I.current=!1,me.current=null,Rt.current=null,Ke()}Lt.current={container:zt(e),last:Bt()}},Vt=e=>{if(e.pointerType===`mouse`&&e.button!==0)return;let t=ge.current;if(!t)return;if(e.pointerType===`touch`&&(It.current.set(e.pointerId,{x:e.clientX,y:e.clientY}),Lt.current||It.current.size>=2)){t.setPointerCapture(e.pointerId),Lt.current?It.current.size>=2&&(Lt.current.last=Bt()):z();return}I.current=!0,t.setPointerCapture(e.pointerId);let n={mode:vt(e)?`erase`:`draw`,points:[_t(e)]};me.current=n,Rt.current={pointerId:e.pointerId,pointerType:e.pointerType,startedAt:performance.now()},fe.current[F.current].push(n),Je()},Ht=e=>{if(e.pointerType===`touch`&&It.current.has(e.pointerId)){It.current.set(e.pointerId,{x:e.clientX,y:e.clientY});let t=Lt.current;if(t){if(It.current.size>=2){let e=Bt();t.container.scrollBy(t.last.x-e.x,t.last.y-e.y),t.last=e}return}}if(!I.current||!me.current||Rt.current?.pointerId!==e.pointerId)return;let t=jp(e).map(_t);me.current.points.push(...t),Je()},Ut=e=>{let t=ge.current;if(t?.hasPointerCapture(e.pointerId)&&t.releasePointerCapture(e.pointerId),e.pointerType===`touch`&&(It.current.delete(e.pointerId),Lt.current)){It.current.size===0?Lt.current=null:It.current.size>=2&&(Lt.current.last=Bt());return}Rt.current?.pointerId===e.pointerId&&(I.current=!1,me.current=null,Rt.current=null,Ke())},Wt=e=>{e.pointerType!==`touch`||!It.current.has(e.pointerId)||(It.current.delete(e.pointerId),Lt.current&&It.current.size===0&&(Lt.current=null))},Gt=()=>{fe.current[F.current]=[],i.drawings=fe.current,I.current=!1,me.current=null,Je(),Ke()},Kt=oe.filter(Boolean).length,qt=e=>{let t=Q[e],n=String(d[e]??``).trim(),r=String(p[e]??``).trim();return n?e<xp?/[a-z]/i.test(n)?n:`${n} ${t.unit}`:/[a-z]/i.test(n)?n:`${n} ${r}`.trim():``},Jt=Kt?(0,Z.jsxs)(`button`,{type:`button`,className:`batQuiz__button batQuiz__copyAnswers ${ce===`copied`||ce===`downloaded`?`is-done`:``}`,onClick:async()=>{if(!Kt)return;let e=Q.map((e,t)=>({question:e,index:t})).filter(({index:e})=>oe[e]).map(({question:e,index:t})=>({number:t+1,text:e.text,answerText:qt(t),status:_[t]?`correct`:h[t]?`wrong`:`unchecked`,wrongAttempts:P[t],helpUsed:ie[t],strokes:fe.current[t]||[],helpValues:ie[t]?bp[t]:null})),t=new Date().toLocaleString(void 0,{dateStyle:`medium`,timeStyle:`short`});ue.current&&window.clearTimeout(ue.current),le(`working`);let n;try{n=await Zf({title:`Bat echolocation: echo calculations`,subtitle:`distance = ½ × speed × time · speed of sound in air = 340 m/s · ${t}`,entries:e,totalQuestions:Q.length,baseSize:i.workingSize||{width:640,height:420},footer:`alexmoorephysics.com/ultrasound`})}catch{n=`failed`}le(n),ue.current=window.setTimeout(()=>le(``),3e3)},disabled:ce===`working`,title:`Copy a picture of your questions, answers and working`,children:[(0,Z.jsxs)(`svg`,{className:`batQuiz__copyIcon`,viewBox:`0 0 24 24`,"aria-hidden":`true`,children:[(0,Z.jsx)(`rect`,{x:`8`,y:`3`,width:`8`,height:`4`,rx:`1.2`}),(0,Z.jsx)(`path`,{d:`M8 5H6.5A1.5 1.5 0 0 0 5 6.5v13A1.5 1.5 0 0 0 6.5 21h11a1.5 1.5 0 0 0 1.5-1.5v-13A1.5 1.5 0 0 0 17.5 5H16`}),(0,Z.jsx)(`path`,{d:`m9 14 2 2 4-4`})]}),(0,Z.jsx)(`span`,{"aria-live":`polite`,children:ce===`working`?`Copying…`:ce===`copied`?`Copied ✓`:ce===`downloaded`?`Saved as image ✓`:ce===`failed`?`Couldn't copy, try again`:`Copy my answers`})]}):null,Yt=C===null?null:a[C],Xt=Yt?.afterQuestion===Q.length,Zt=we.current[o]||[],Qt=Me.current[o]||[],B=k[o]||``,$t=j[o]||``;return(0,Z.jsx)(`div`,{className:`batQuiz`,children:C===null?(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsxs)(`section`,{className:`batQuiz__top`,children:[(0,Z.jsxs)(`div`,{className:`batQuiz__topRow`,children:[(0,Z.jsxs)(`div`,{className:`batQuiz__formulaGroup`,children:[(0,Z.jsx)(`div`,{className:`batQuiz__eyebrow`,children:`Echo calculations`}),(0,Z.jsx)(`div`,{className:`batQuiz__formula ${o>=3?`is-hidden`:``}`,"aria-hidden":o>=3,children:`distance = ½ × speed × time`})]}),(0,Z.jsxs)(`div`,{className:`batQuiz__topMeta`,children:[(0,Z.jsxs)(`div`,{className:`batQuiz__speed`,children:[`Speed of sound = `,(0,Z.jsx)(`strong`,{children:Re.quantity===`speed`?`?`:`${Re.speed??340} m/s`})]}),(0,Z.jsxs)(`div`,{className:`batQuiz__progress`,children:[`Question `,o+1,` of `,Q.length]}),(0,Z.jsx)(`div`,{className:`batQuiz__dots`,"aria-hidden":`true`,children:Q.map((e,t)=>(0,Z.jsx)(`span`,{className:`batQuiz__dot ${t===o?`is-active`:``}`},t))}),Kt>0||d.some(Boolean)||o>0?(0,Z.jsx)(`button`,{type:`button`,className:`batQuiz__restart`,onClick:qe,children:`Start again`}):null]})]}),(0,Z.jsx)(`div`,{className:`batQuiz__echoNote`,children:`The echo time is the total time taken for the sound to travel to the object and back.`})]}),(0,Z.jsxs)(`section`,{className:`batQuiz__quizArea`,children:[(0,Z.jsxs)(`div`,{className:`batQuiz__layoutWrap`,ref:_e,children:[(0,Z.jsxs)(`div`,{className:`batQuiz__layout ${x?`is-swapped`:``}`,children:[(0,Z.jsxs)(`section`,{className:`batQuiz__questionPanel`,ref:ve,children:[(0,Z.jsx)(`div`,{className:`batQuiz__questionLabel`,children:`Question`}),(0,Z.jsx)(`h2`,{className:`batQuiz__questionText`,children:Re.text}),(0,Z.jsxs)(`form`,{className:`batQuiz__answerPanel ${y.type===`correct`?`has-correct-feedback`:``}`,onSubmit:ut,children:[(0,Z.jsx)(`div`,{className:`batQuiz__answerLabel`,children:`Your answer`}),(0,Z.jsx)(`div`,{className:`batQuiz__answerRow ${D===`write`&&ze?`has-unit-entry`:``}`,children:D===`write`?(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsxs)(`div`,{ref:Se,className:`batQuiz__writeAnswerBox batQuiz__writeAnswerBox--number ${Zt.length?`is-inking`:``}`,role:`textbox`,"aria-label":`Write your numerical answer${ze?``:` in ${Re.unit}`} with a stylus`,onPointerDownCapture:Ot,onPointerMoveCapture:kt,onPointerUpCapture:At,onPointerCancelCapture:At,children:[Zt.length?null:(0,Z.jsx)(`div`,{className:`batQuiz__writePrompt`,children:ze?`Number`:`Write your answer`}),(0,Z.jsx)(`canvas`,{ref:Ce,className:`batQuiz__answerInkCanvas`,"aria-hidden":`true`})]}),ze?(0,Z.jsxs)(`div`,{ref:Ae,className:`batQuiz__writeAnswerBox batQuiz__writeAnswerBox--unit ${Qt.length?`is-inking`:``}`,role:`textbox`,"aria-label":`Write the unit. Recognised units are ${Sp.join(`, `)}`,onPointerDownCapture:Nt,onPointerMoveCapture:Pt,onPointerUpCapture:Ft,onPointerCancelCapture:Ft,children:[Qt.length?null:(0,Z.jsx)(`div`,{className:`batQuiz__writePrompt`,children:`Unit`}),(0,Z.jsx)(`canvas`,{ref:je,className:`batQuiz__answerInkCanvas`,"aria-hidden":`true`})]}):(0,Z.jsx)(`div`,{className:`batQuiz__unit`,children:Re.unit})]}):(0,Z.jsx)(`input`,{ref:xe,id:`bat-quiz-answer`,className:`batQuiz__answerInput`,type:`text`,inputMode:`none`,enterKeyHint:`done`,autoComplete:`off`,autoCapitalize:`off`,autoCorrect:`off`,spellCheck:!1,placeholder:ze?`Type number and unit`:`Type your answer`,"aria-label":ze?`Type your answer including the unit`:`Type your answer in ${Re.unit}`,value:d[o],onChange:it})}),D===`write`?(0,Z.jsxs)(`div`,{className:`batQuiz__recognitionReadout`,"aria-live":`polite`,children:[(0,Z.jsx)(`span`,{children:`Recognised:`}),(0,Z.jsx)(`strong`,{children:B||`—`}),(0,Z.jsx)(`span`,{children:ze?$t||`—`:Re.unit})]}):null,D===`type`?(0,Z.jsx)(`div`,{className:`batQuiz__keypad`,"aria-label":`Number and unit keypad`,children:zp.map(e=>(0,Z.jsx)(`button`,{type:`button`,className:`batQuiz__keypadKey ${e===`backspace`?`is-action`:``} ${Rp.includes(e)?`is-unit`:``}`,"aria-label":e===`backspace`?`Backspace`:e===`.`?`Decimal point`:e===`/`?`Slash, for per`:e===`m`?`m, metres or milli`:e===`s`?`s, seconds`:e,onClick:()=>st(e),children:e===`backspace`?`⌫`:e},e))}):null,(0,Z.jsx)(`div`,{className:`batQuiz__answerModeRow`,children:D===`write`?(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(`button`,{type:`button`,className:`batQuiz__answerModeButton`,onClick:ot,children:`Type answer`}),(0,Z.jsx)(`button`,{type:`button`,className:`batQuiz__answerClearButton`,onClick:lt,disabled:!d[o]&&!p[o]&&!Zt.length&&!Qt.length,children:`Clear`})]}):(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(`button`,{type:`button`,className:`batQuiz__answerModeButton`,onClick:ct,children:`Write answer`}),(0,Z.jsx)(`button`,{type:`button`,className:`batQuiz__answerClearButton`,onClick:lt,disabled:!d[o]&&!p[o],children:`Clear`})]})}),(0,Z.jsx)(`div`,{className:`batQuiz__inkStatus ${T?`is-visible`:``}`,"aria-live":`polite`,children:T||` `}),y.text?(0,Z.jsx)(`div`,{className:`batQuiz__feedback batQuiz__feedback--${y.type}`,role:`status`,"aria-live":`polite`,children:y.text}):null,o<bp.length&&!_[o]&&(c||ie[o])?(0,Z.jsx)(`button`,{type:`button`,className:`batQuiz__stuckButton`,style:{backgroundColor:`#4F46E5`,borderColor:`#3730A3`,color:`#FFFFFF`},"aria-pressed":ie[o],onClick:dt,children:`Help me get started`}):null,(0,Z.jsx)(`button`,{className:`batQuiz__button batQuiz__button--cyan batQuiz__check`,type:`submit`,children:`Check answer`})]})]}),(0,Z.jsx)(`section`,{className:`batQuiz__workPanel`,ref:ye,children:(0,Z.jsxs)(`div`,{className:`batQuiz__workpad ${ie[o]?`has-working-help`:``}`,children:[(0,Z.jsx)(`button`,{type:`button`,className:`batQuiz__workClear`,onClick:Gt,"aria-label":`Clear working for this question`,children:`Clear`}),(0,Z.jsx)(`canvas`,{ref:ge,className:`batQuiz__canvas`,"aria-label":`Working out area`,onPointerDown:Vt,onPointerMove:Ht,onPointerUp:Ut,onPointerCancel:Ut,onLostPointerCapture:Wt})]})})]}),(0,Z.jsx)(`button`,{ref:be,className:`batQuiz__swap`,type:`button`,"aria-label":`Swap question and working out sides`,"aria-pressed":x,title:`Swap sides`,onClick:()=>S(e=>!e),children:(0,Z.jsx)(Vp,{})})]}),(0,Z.jsxs)(`div`,{className:`batQuiz__nav`,children:[(0,Z.jsx)(`button`,{type:`button`,className:`batQuiz__button batQuiz__button--ghost`,disabled:o===0,onClick:pt,children:`← Previous question`}),Jt,(0,Z.jsx)(`button`,{type:`button`,className:`batQuiz__button batQuiz__button--cyan`,disabled:!_[o],onClick:mt,children:o===Q.length-1?`Finish →`:`Next question →`})]})]})]}):(0,Z.jsx)(`section`,{className:`batQuiz__rewardPanel`,children:(0,Z.jsxs)(`div`,{className:`batQuiz__rewardLayout`,children:[(0,Z.jsx)(`div`,{className:`batQuiz__rewardImageWrap`,children:ne?(0,Z.jsx)(`img`,{className:`batQuiz__rewardImage`,src:Yt.image,alt:`Bat reward`}):(0,Z.jsx)(`button`,{type:`button`,className:`batQuiz__showPictureButton`,onClick:()=>N(!0),children:`Show bat picture`})}),(0,Z.jsxs)(`div`,{className:`batQuiz__rewardContent`,children:[(0,Z.jsx)(`div`,{className:`batQuiz__rewardEyebrow`,children:Xt?`Challenge complete`:`${Yt.afterQuestion} questions complete`}),(0,Z.jsx)(`h2`,{className:`batQuiz__rewardTitle`,children:Xt?`Well done!`:`Nice work!`}),(0,Z.jsx)(`p`,{className:`batQuiz__rewardProgress`,children:Xt?`You completed all ${Q.length} questions. Score: ${Be} / ${Q.length}`:`You have completed ${Yt.afterQuestion} of ${Q.length} questions.`}),(0,Z.jsxs)(`div`,{className:`batQuiz__factBox`,children:[(0,Z.jsx)(`div`,{className:`batQuiz__factLabel`,children:`Bat fact`}),(0,Z.jsx)(`div`,{className:`batQuiz__factText`,children:Yt.fact})]}),(0,Z.jsxs)(`div`,{className:`batQuiz__rewardActions`,children:[te?(0,Z.jsx)(`button`,{type:`button`,className:`batQuiz__button batQuiz__button--ghost`,onClick:()=>M(!1),children:`No more bat pictures please`}):null,Xt?(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(`button`,{type:`button`,className:`batQuiz__button batQuiz__button--ghost`,onClick:gt,children:`Review questions`}),Jt,e?(0,Z.jsx)(`button`,{type:`button`,className:`batQuiz__button batQuiz__button--cyan`,onClick:e,children:`Finish`}):null]}):(0,Z.jsx)(`button`,{type:`button`,className:`batQuiz__button batQuiz__button--cyan`,onClick:ht,children:`Continue →`})]})]})]})})})}var Wp=`/`,Gp=`https://www.buymeacoffee.com/awmPhysics`,Kp=`hello@alexmoorephysics.com`,qp=`./favicon.svg`;function Jp({className:e=``}){return(0,Z.jsx)(`a`,{className:`awm-logo-link ${e}`.trim(),href:Wp,target:`_blank`,rel:`noopener noreferrer`,"aria-label":`More simulations at alexmoorephysics.com`,title:`More simulations`,children:(0,Z.jsx)(`img`,{src:qp,alt:``})})}function Yp(){return(0,Z.jsxs)(`footer`,{className:`awm-footer`,children:[(0,Z.jsx)(`a`,{href:Wp,target:`_blank`,rel:`noopener noreferrer`,children:`More simulations`}),(0,Z.jsx)(`span`,{"aria-hidden":`true`,children:`·`}),(0,Z.jsx)(`a`,{href:Gp,target:`_blank`,rel:`noopener noreferrer`,children:`Support the project ☕`}),(0,Z.jsx)(`span`,{"aria-hidden":`true`,children:`·`}),(0,Z.jsx)(`a`,{href:`mailto:${Kp}`,children:Kp})]})}function Xp(e){let t=e.nativeEvent,n=t.getCoalescedEvents?.()??[];return n.length?n:[t]}function Zp({active:e,onIndustrialTesting:t,onBatEcholocation:n}){return(0,Z.jsxs)(`nav`,{className:`page-switcher`,"aria-label":`Simulation pages`,children:[(0,Z.jsx)(`button`,{type:`button`,className:e===`industrial`?`active`:``,onClick:t,disabled:e===`industrial`,"aria-current":e===`industrial`?`page`:void 0,children:`Industrial testing`}),(0,Z.jsx)(`button`,{type:`button`,className:e===`bat`?`active`:``,onClick:n,disabled:e===`bat`,"aria-current":e===`bat`?`page`:void 0,children:`Bat echolocation`})]})}function Qp(){let[e,t]=(0,u.useState)(!!document.fullscreenElement),n=!!document.fullscreenEnabled;(0,u.useEffect)(()=>{let e=()=>t(!!document.fullscreenElement);return document.addEventListener(`fullscreenchange`,e),()=>document.removeEventListener(`fullscreenchange`,e)},[]);async function r(){try{document.fullscreenElement?await document.exitFullscreen():await document.documentElement.requestFullscreen()}catch{}}return{isFullscreen:e,fullscreenAvailable:n,toggleFullscreen:r}}function $p({className:e}){let{isFullscreen:t,fullscreenAvailable:n,toggleFullscreen:r}=Qp();return(0,Z.jsx)(`button`,{type:`button`,className:e,onClick:e=>{r(),e.currentTarget.blur()},disabled:!n,"aria-label":t?`Exit full screen`:`Enter full screen`,title:t?`Exit full screen`:`Full screen`,children:t?(0,Z.jsx)(`svg`,{viewBox:`0 0 24 24`,"aria-hidden":`true`,children:(0,Z.jsx)(`path`,{d:`M9 4v5H4 M15 4v5h5 M9 20v-5H4 M15 20v-5h5`})}):(0,Z.jsx)(`svg`,{viewBox:`0 0 24 24`,"aria-hidden":`true`,children:(0,Z.jsx)(`path`,{d:`M9 4H4v5 M15 4h5v5 M9 20H4v-5 M15 20h5v-5`})})})}function em(){return(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)($p,{className:`fullscreen-button`}),(0,Z.jsx)(`style`,{children:`
        .fullscreen-button{
          position:fixed;
          right:18px;
          bottom:18px;
          z-index:950;
          width:48px;
          height:48px;
          display:grid;
          place-items:center;
          padding:0;
          border:1px solid #67e8f9;
          border-radius:12px;
          background:rgba(12,32,49,.92);
          color:#e8fbff;
          box-shadow:0 7px 22px rgba(0,0,0,.38);
          cursor:pointer;
          backdrop-filter:blur(8px);
          user-select:none;
          -webkit-user-select:none;
        }
        .fullscreen-button:hover{
          background:#185069;
          transform:translateY(-1px);
        }
        .fullscreen-button:focus-visible{
          outline:3px solid #fbbf24;
          outline-offset:3px;
        }
        .fullscreen-button:disabled{
          display:none;
        }
        .fullscreen-button svg{
          width:25px;
          height:25px;
          fill:none;
          stroke:currentColor;
          stroke-width:2;
          stroke-linecap:round;
          stroke-linejoin:round;
        }
      `})]})}function tm({onIndustrialTesting:e,onBatEcholocation:t}){return(0,Z.jsxs)(`main`,{className:`launch-screen`,children:[(0,Z.jsx)(Jp,{className:`launch-logo`}),(0,Z.jsx)(`header`,{className:`launch-header`,children:(0,Z.jsxs)(`div`,{children:[(0,Z.jsx)(`h1`,{children:`Ultrasound`}),(0,Z.jsx)(`p`,{children:`Choose an investigation`})]})}),(0,Z.jsxs)(`div`,{className:`launch-grid`,children:[(0,Z.jsxs)(`button`,{className:`launch-card launch-card-industrial`,type:`button`,onClick:e,children:[(0,Z.jsx)(`span`,{className:`launch-illustration`,"aria-hidden":`true`,children:(0,Z.jsxs)(`svg`,{viewBox:`0 0 260 190`,children:[(0,Z.jsx)(`rect`,{className:`launch-steel`,x:`38`,y:`67`,width:`184`,height:`94`,rx:`5`}),(0,Z.jsx)(`rect`,{className:`launch-probe`,x:`100`,y:`48`,width:`60`,height:`24`,rx:`7`}),(0,Z.jsx)(`path`,{className:`launch-cable`,d:`M130 48 C150 18 213 35 237 54`}),(0,Z.jsx)(`path`,{className:`launch-pulse`,d:`M113 84 H147 M108 102 H152 M104 120 H156`}),(0,Z.jsx)(`path`,{className:`launch-crack`,d:`M96 137 l18 -7 18 8 20 -8 18 7`})]})}),(0,Z.jsxs)(`span`,{className:`launch-card-label`,children:[(0,Z.jsx)(`strong`,{children:`Industrial testing`}),(0,Z.jsx)(`small`,{children:`Find hidden defects using echoes`})]})]}),(0,Z.jsxs)(`button`,{className:`launch-card launch-card-bat`,type:`button`,onClick:t,children:[(0,Z.jsx)(`span`,{className:`launch-illustration`,"aria-hidden":`true`,children:(0,Z.jsxs)(`svg`,{viewBox:`0 0 260 190`,children:[(0,Z.jsx)(`circle`,{className:`launch-moon`,cx:`210`,cy:`42`,r:`24`}),(0,Z.jsx)(`path`,{className:`launch-bat`,d:`M47 102 Q75 60 111 91 Q130 70 149 91 Q185 60 213 102 Q178 87 162 123 Q145 107 130 135 Q115 107 98 123 Q82 87 47 102 Z`}),(0,Z.jsx)(`path`,{className:`launch-wave`,d:`M158 91 Q177 110 158 129 M174 81 Q205 110 174 139 M190 72 Q233 110 190 148`}),(0,Z.jsxs)(`g`,{className:`launch-moth`,transform:`translate(224 112)`,children:[(0,Z.jsx)(`ellipse`,{cx:`0`,cy:`0`,rx:`5`,ry:`11`}),(0,Z.jsx)(`ellipse`,{cx:`-8`,cy:`-4`,rx:`8`,ry:`5`}),(0,Z.jsx)(`ellipse`,{cx:`8`,cy:`-4`,rx:`8`,ry:`5`})]})]})}),(0,Z.jsxs)(`span`,{className:`launch-card-label`,children:[(0,Z.jsx)(`strong`,{children:`Bat echolocation`}),(0,Z.jsx)(`small`,{children:`Explore ultrasound in nature`})]})]})]}),(0,Z.jsx)(Yp,{}),(0,Z.jsx)(`style`,{children:`
        #root{
          width:100%;
          max-width:none;
          margin:0;
          border-inline:0;
        }
        .launch-screen{
          box-sizing:border-box;
          width:100%;
          min-height:100svh;
          min-height:100dvh;
          flex:1;
          display:flex;
          flex-direction:column;
          align-items:center;
          justify-content:center;
          gap:42px;
          padding:42px 24px 56px;
          color:#e8f7fb;
          background:
            radial-gradient(circle at 50% 10%,rgba(39,139,172,.45),rgba(39,139,172,0) 38%),
            radial-gradient(circle at 18% 82%,rgba(19,118,105,.34),rgba(19,118,105,0) 32%),
            linear-gradient(155deg,#071522 0%,#102d42 52%,#092f31 100%);
          font-family:Arial,sans-serif;
        }
        .launch-header{
          display:flex;
          align-items:center;
          gap:18px;
          text-align:left;
        }
        .launch-header h1{
          margin:0;
          color:#f2fbff;
          font-size:clamp(42px,6vw,72px);
          line-height:.95;
          font-weight:800;
          letter-spacing:-.04em;
        }
        .launch-header p{
          margin:9px 0 0;
          color:#acd7e3;
          font-size:19px;
          font-weight:700;
        }
        .launch-grid{
          display:grid;
          grid-template-columns:repeat(2,minmax(250px,340px));
          gap:34px;
        }
        .launch-card{
          aspect-ratio:1;
          min-width:0;
          display:flex;
          flex-direction:column;
          overflow:hidden;
          padding:0;
          border:5px solid white;
          border-radius:18px;
          background:#fff;
          box-shadow:0 8px 0 rgba(28,76,107,.24),0 16px 35px rgba(28,76,107,.25);
          cursor:pointer;
          transition:transform .16s ease,box-shadow .16s ease;
        }
        .launch-card:hover{
          transform:translateY(-6px);
          box-shadow:0 12px 0 rgba(28,76,107,.22),0 22px 42px rgba(28,76,107,.28);
        }
        .launch-card:focus-visible{
          outline:5px solid #f59e0b;
          outline-offset:5px;
        }
        .launch-illustration{
          flex:1;
          display:grid;
          place-items:center;
          width:100%;
        }
        .launch-illustration svg{ width:88%;height:auto; }
        .launch-card-industrial .launch-illustration{ background:linear-gradient(160deg,#eaf6ff,#b9d6ea); }
        .launch-card-bat .launch-illustration{ background:linear-gradient(160deg,#162a4c,#071426); }
        .launch-steel{ fill:#cad1d7;stroke:#526779;stroke-width:4; }
        .launch-probe{ fill:#168dd0;stroke:#075783;stroke-width:3; }
        .launch-cable{ fill:none;stroke:#34495a;stroke-width:5;stroke-linecap:round; }
        .launch-pulse{ fill:none;stroke:#05a9d6;stroke-width:4;stroke-linecap:round; }
        .launch-crack{ fill:none;stroke:#25313a;stroke-width:4;stroke-linecap:round; }
        .launch-moon{ fill:#f3dc83; }
        .launch-bat{ fill:#111925;stroke:#73839d;stroke-width:2; }
        .launch-wave{ fill:none;stroke:#58dff2;stroke-width:4;stroke-linecap:round; }
        .launch-moth{ fill:#f5cf4c; }
        .launch-card-label{
          min-height:92px;
          display:flex;
          flex-direction:column;
          justify-content:center;
          gap:5px;
          padding:12px 18px;
          color:white;
        }
        .launch-card-industrial .launch-card-label{ background:#1976b9; }
        .launch-card-bat .launch-card-label{ background:#5d4db2; }
        .launch-card-label strong{ font-size:23px; }
        .launch-card-label small{ font-size:14px;opacity:.9; }
        @media(max-width:700px){
          .launch-screen{ justify-content:flex-start;gap:30px;padding-top:28px; }
          .launch-grid{ grid-template-columns:minmax(240px,330px);gap:24px; }
        }
      `})]})}var nm=280,rm=100,im=450,am={x:330,y:260,length:100,label:`Internal crack`},om=360,sm=10,cm=45,lm=35,um=30;function dm(e){return .1+.9*Math.max(0,Math.min(1,e/60))}function fm(e,t,n,r){return n*Math.exp(-((e-t)**2)/(2*r*r))}function pm(e,t,n,r){let i=e-t,a=e+t,o=Math.max(i,n),s=Math.min(a,r);if(Math.max(0,s-o)<=0)return{overlapSegments:[],continueSegments:[{start:i,end:a}]};let c=[];return o>i&&c.push({start:i,end:o}),s<a&&c.push({start:s,end:a}),{overlapSegments:[{start:o,end:s}],continueSegments:c}}function mm({onNext:e}){let t=(0,u.useRef)(null),n=(0,u.useRef)(null),r=(0,u.useRef)(330),i=(0,u.useRef)(null),a=(0,u.useRef)(null),o=(0,u.useRef)(null),s=(0,u.useRef)(null),c=(0,u.useRef)(!1),l=(0,u.useRef)(0),d=(0,u.useRef)(!1),f=(0,u.useRef)(0),p=(0,u.useRef)([]),m=(0,u.useRef)([]),h=(0,u.useRef)(!1),g=(0,u.useRef)(null),_=(0,u.useRef)(.55),v=(0,u.useRef)(null),y=(0,u.useRef)({x:am.x,y:am.y}),[b,x]=(0,u.useState)(!0),S=(0,u.useRef)(!0),[C,w]=(0,u.useState)(!1),[T,E]=(0,u.useState)(!0),D=(0,u.useRef)(!0),[O,k]=(0,u.useState)(.5),A=(0,u.useRef)(.5),[j,ee]=(0,u.useState)([]),[te,M]=(0,u.useState)([]),[ne,N]=(0,u.useState)(null),[P,re]=(0,u.useState)(null),ie=(0,u.useRef)({x:200,y:150,length:200}),ae=(0,u.useRef)(!1),oe=(0,u.useRef)(!1),[se,ce]=(0,u.useState)(!1),le=(0,u.useRef)({x:0,y:0}),ue=(0,u.useRef)({left:!1,right:!1}),[de,fe]=(0,u.useState)(!1),[pe,F]=(0,u.useState)(!1),I=(0,u.useRef)(!1),me=(0,u.useRef)(null),[he,ge]=(0,u.useState)(!1),[_e,ve]=(0,u.useState)(!1),[ye,be]=(0,u.useState)(null),xe=(0,u.useRef)(null),[Se,Ce]=(0,u.useState)(null),[we,Te]=(0,u.useState)(``),Ee=(0,u.useRef)(null),L=(0,u.useRef)([]),De=(0,u.useRef)(null),Oe=(0,u.useRef)(!1);(0,u.useEffect)(()=>{D.current=T},[T]),(0,u.useEffect)(()=>{S.current=b},[b]),(0,u.useEffect)(()=>()=>{me.current!==null&&window.clearTimeout(me.current)},[]),(0,u.useEffect)(()=>{function e(e){e.code===`Space`&&(e.preventDefault(),He())}return window.addEventListener(`keydown`,e),()=>{window.removeEventListener(`keydown`,e)}},[]),(0,u.useEffect)(()=>{function e(e){switch(e.code){case`ArrowLeft`:e.preventDefault(),ue.current.left=!0;break;case`ArrowRight`:e.preventDefault(),ue.current.right=!0;break;case`Space`:e.preventDefault(),He()}}function t(e){switch(e.code){case`ArrowLeft`:ue.current.left=!1;break;case`ArrowRight`:ue.current.right=!1}}return window.addEventListener(`keydown`,e),window.addEventListener(`keyup`,t),()=>{window.removeEventListener(`keydown`,e),window.removeEventListener(`keyup`,t)}},[]);function ke(e){return Math.max(110,Math.min(570,e))}function Ae(e){return Math.max(80+am.length/2,Math.min(600-am.length/2,e))}function je(e){return Math.max(110,Math.min(440,e))}function Me(e){let t=n.current;if(!t)return;let i=ke(e-t.getBoundingClientRect().left);r.current=i}function Ne(e,t){let i=n.current;if(!i)return!1;let a=i.getBoundingClientRect(),o=e-a.left,s=t-a.top,c=r.current-30,l=r.current+30;return o>=c-cm&&o<=l+cm&&s>=25&&s<=145}function Pe(e,t){let r=n.current;if(!r)return!1;let i=r.getBoundingClientRect(),a=e-i.left,o=t-i.top,s=y.current.x-am.length/2,c=y.current.x+am.length/2,l=y.current.y-lm,u=y.current.y+lm;return a>=s-lm&&a<=c+lm&&o>=l&&o<=u}function Fe(){let e=80+am.length/2,t=600-am.length/2,n=(e+t)/2-80,r=(e+t)/2+80,i=Math.random()<.5?e+Math.random()*(n-e):r+Math.random()*(t-r);y.current={x:i,y:je(140+Math.random()*270)}}function Ie(e,t){let r=n.current;if(!r)return;let i=r.getBoundingClientRect();y.current={x:Ae(e-i.left),y:je(t-i.top)}}function Le(e,t){return e>=80&&e<=600&&t>=rm&&t<=im}function Re(e){e.preventDefault();let t=n.current;if(!t)return;let r=t.getBoundingClientRect(),i=(e.clientX-r.left)*(t.width/r.width),a=(e.clientY-r.top)*(t.height/r.height);if(se){let t=ie.current;if(i>=t.x-40&&i<=t.x+40&&a>=t.y&&a<=t.y+290+t.length){ae.current=!0,le.current={x:i-t.x,y:a-t.y},e.currentTarget.setPointerCapture(e.pointerId);return}}if(Ne(e.clientX,e.clientY)){v.current=`probe`,e.currentTarget.setPointerCapture(e.pointerId),Me(e.clientX);return}if(I.current&&!S.current&&Le(i,a)){be(i),xe.current={x:i,y:a};return}if(Pe(e.clientX,e.clientY)&&!I.current){v.current=`crack`,e.currentTarget.setPointerCapture(e.pointerId),Ie(e.clientX,e.clientY);return}v.current=null}function ze(e){let t=n.current;if(t&&!v.current&&!ae.current){let n=t.getBoundingClientRect(),r=(e.clientX-n.left)*(t.width/n.width),i=(e.clientY-n.top)*(t.height/n.height),a=I.current&&!S.current&&Le(r,i);t.style.cursor=a?`crosshair`:Ne(e.clientX,e.clientY)?`grab`:`default`}if(ae.current){if(!t)return;let n=t.getBoundingClientRect();ie.current.x=e.clientX-n.left-le.current.x,ie.current.y=e.clientY-n.top-le.current.y;return}v.current&&(e.preventDefault(),v.current===`probe`?Me(e.clientX):Ie(e.clientX,e.clientY))}function Be(e){ae.current=!1,v.current=null,e.currentTarget.hasPointerCapture(e.pointerId)&&e.currentTarget.releasePointerCapture(e.pointerId)}function Ve(e){!v.current&&!ae.current&&(e.currentTarget.style.cursor=I.current?`default`:`grab`)}function He(){c.current=!0,w(!0),l.current=-30,d.current=!0,m.current=[],p.current=[],h.current=!1,g.current=null,_.current=.55,o.current=null,s.current=null,f.current=0;let e=y.current.y-rm,t=y.current.x-am.length/2,n=y.current.x+am.length/2,{overlapSegments:a,continueSegments:u}=pm(r.current,um,t,n);if(a.length>0){let t=a.reduce((e,t)=>e+(t.end-t.start),0);if(p.current.push({time:e*2/nm*1e3,amp:dm(t),width:25,label:`Crack echo`}),u.length>0){let e=u.reduce((e,t)=>e+(t.end-t.start),0);g.current=700/nm*1e3,h.current=!1,_.current=dm(e)}}else p.current.push({time:700/nm*1e3,amp:1,width:30,label:`Back wall echo`});i.current={x:r.current,y:rm,segments:[{start:r.current-um,end:r.current+um}]}}function Ue(){I.current=!0,fe(!0),ge(!1),ve(!1),be(null),xe.current=null,Ce(null),Te(``),Fe(),x(!1),S.current=!1,m.current=[],p.current=[],ee([]),M([]),A.current=1,k(1),L.current=[],window.requestAnimationFrame(Xe)}function We(){if(xe.current===null){me.current!==null&&window.clearTimeout(me.current),ge(!1),window.requestAnimationFrame(()=>{ge(!0),me.current=window.setTimeout(()=>{ge(!1),me.current=null},720)});return}let e=xe.current.x-y.current.x,t=xe.current.y-y.current.y,n=Math.sqrt(e*e+t*t);Ce(n),Te(n<15?`✓ Good job! Closer than a bat's whisker.`:n<50?`Not bad! We'll make an inspector of you yet.`:`Hmmm...you might want to recheck your calculations?`),x(!0),S.current=!0}function Ge(){c.current=!0,w(!0)}function Ke(){c.current=!1,w(!1)}function qe(){c.current=!1,i.current=null,a.current=null,o.current=null,s.current=null,d.current=!1,l.current=0,m.current=[],p.current=[],f.current=0,r.current=330,Fe(),ee([]),M([]),w(!1),I.current=!1,fe(!1),ge(!1),ve(!1),me.current!==null&&(window.clearTimeout(me.current),me.current=null),xe.current=null,S.current=!0,x(!0),v.current=null,ae.current=!1,A.current=.5,k(.5),be(null),xe.current=null,Ce(null),Te(``),L.current=[]}function Je(e,t,n){S.current&&t?.segments&&(e.strokeStyle=n,e.lineWidth=5,t.segments.forEach(n=>{n.end<=n.start||(e.beginPath(),e.moveTo(n.start,t.y),e.lineTo(n.end,t.y),e.stroke())}))}function Ye(e){let t=e.currentTarget.getBoundingClientRect(),n=e.clientX-t.left,r=Math.max(40,Math.min(810,n)),i=(r-40)/770*120;N(r),re(i)}function Xe(){let e=Ee.current;if(!e)return;let t=e.getContext(`2d`);t&&(t.clearRect(0,0,e.width,e.height),L.current.forEach(e=>{if(!e.points.length)return;t.save(),t.globalCompositeOperation=e.mode===`erase`?`destination-out`:`source-over`,t.strokeStyle=`#172554`,t.fillStyle=`#172554`,t.lineWidth=e.mode===`erase`?44:6,t.lineCap=`round`,t.lineJoin=`round`;let n=e.points[0];e.points.length===1?(t.beginPath(),t.arc(n.x,n.y,e.mode===`erase`?22:3,0,Math.PI*2),t.fill()):(t.beginPath(),t.moveTo(n.x,n.y),e.points.slice(1).forEach(e=>t.lineTo(e.x,e.y)),t.stroke()),t.restore()}))}function Ze(e){let t=Ee.current;if(!t)return{x:0,y:0};let n=t.getBoundingClientRect();return{x:(e.clientX-n.left)*(t.width/n.width),y:(e.clientY-n.top)*(t.height/n.height)}}function Qe(e){if(e.pointerType===`mouse`&&e.button!==0)return;e.preventDefault();let t={mode:e.pointerType===`pen`&&(e.button===5||(e.buttons&32)==32)?`erase`:`draw`,points:[Ze(e)]};Oe.current=!0,De.current=t,L.current.push(t),e.currentTarget.setPointerCapture(e.pointerId),Xe()}function $e(e){if(!Oe.current||!De.current)return;e.preventDefault();let t=Xp(e).map(Ze);De.current.points.push(...t),Xe()}function et(e){Oe.current=!1,De.current=null,e.currentTarget.hasPointerCapture(e.pointerId)&&e.currentTarget.releasePointerCapture(e.pointerId)}function tt(){L.current=[],Xe()}return(0,u.useEffect)(()=>{let e=n.current.getContext(`2d`),u=0;function v(n){let b=(n-u)/1e3;if(u=n,ue.current.left&&(r.current=ke(r.current-240*b)),ue.current.right&&(r.current=ke(r.current+240*b)),c.current){let e=(A.current||.1)*4;if(i.current){i.current.y+=nm*b*e;let t=i.current.x-um,n=i.current.x+um,r=y.current.x-am.length/2,s=y.current.x+am.length/2,{overlapSegments:c,continueSegments:l}=pm(i.current.x,um,r,s);i.current.y>=y.current.y&&c.length>0?(a.current={x:i.current.x,y:y.current.y,segments:c},l.length>0&&(o.current={x:i.current.x,y:y.current.y,segments:l},g.current=700/nm*1e3),i.current=null):i.current.y>=im&&(a.current={x:i.current.x,y:im,segments:[{start:t,end:n}]},i.current=null)}if(a.current&&(a.current.y-=nm*b*e,a.current.y<rm&&(a.current=null)),o.current&&(o.current.y+=nm*b*e,o.current.y>=im&&(s.current={x:o.current.x,y:im,segments:o.current.segments},g.current!==null&&!h.current&&(p.current.push({time:g.current,amp:_.current,width:25,label:`Back wall echo (through)`}),h.current=!0),o.current=null)),s.current&&(s.current.y-=nm*b*e,s.current.y<rm&&(s.current=null)),d.current){for(l.current+=b*1e3*e;f.current<l.current&&m.current.length<om;){let e=f.current,t=0;t+=fm(e,30,1.3,15),p.current.forEach(n=>{t+=fm(e,n.time,n.amp,n.width)}),m.current.push(t),f.current+=sm}m.current.length>=om&&(d.current=!1),ee([...m.current]),M(p.current.filter(e=>l.current>=e.time))}}e.clearRect(0,0,700,550),e.fillStyle=`white`,e.fillRect(0,0,700,550);let x=e.createLinearGradient(0,rm,0,im);x.addColorStop(0,`#f4f4f4`),x.addColorStop(.25,`#d0d4d8`),x.addColorStop(.5,`#eef0f2`),x.addColorStop(.75,`#b4b7b8`),x.addColorStop(1,`#e5e7e9`),e.fillStyle=x,e.strokeStyle=`#555`,e.lineWidth=3,e.fillRect(80,rm,520,350),e.strokeRect(80,rm,520,350),D.current&&(e.fillStyle=`black`,e.font=`16px Arial`,e.fillText(`Steel block`,95,125)),e.font=`16px Arial`,e.save();let C=r.current;e.fillStyle=`rgba(0,0,0,0.25)`,e.beginPath(),e.roundRect(C-32,73,64,30,6),e.fill();let w=e.createLinearGradient(0,70,0,100);if(w.addColorStop(0,`#4da3ff`),w.addColorStop(.5,`#1976d2`),w.addColorStop(1,`#0d47a1`),e.fillStyle=w,e.strokeStyle=`#073b7a`,e.lineWidth=2,e.beginPath(),e.roundRect(C-30,70,60,30,6),e.fill(),e.stroke(),e.fillStyle=`#222`,e.beginPath(),e.roundRect(C-24,94,48,6,2),e.fill(),e.fillStyle=`rgba(255,255,255,0.35)`,e.beginPath(),e.roundRect(C-20,74,40,5,2),e.fill(),e.restore(),e.save(),e.strokeStyle=`#222`,e.lineWidth=6,e.lineCap=`round`,e.beginPath(),e.moveTo(C,70),e.bezierCurveTo(C+25,40,520,120+(C-330)*.12,700,140),e.stroke(),e.strokeStyle=`#555`,e.lineWidth=3,e.beginPath(),e.moveTo(C,70),e.bezierCurveTo(C+25,40,520,120+(C-330)*.12,700,140),e.stroke(),e.restore(),D.current&&(e.fillStyle=`black`,e.fillText(`probe`,r.current-18,58),e.fillStyle=`black`,e.font=`15px Arial`,e.fillText(`to computer`,610,165),e.fillText(`→`,640,180)),e.strokeStyle=`black`,e.lineWidth=6,e.beginPath(),S.current){let t=y.current.x-am.length/2,n=y.current.x+am.length/2,r=y.current.y;e.strokeStyle=`#111`,e.lineWidth=4,e.beginPath(),e.moveTo(t,r),e.lineTo(t+25,r-1),e.lineTo(t+50,r+1),e.lineTo(t+75,r-1),e.lineTo(n,r),e.stroke(),e.fillStyle=`#111`,e.beginPath(),e.moveTo(t-4,r),e.lineTo(t+2,r-2),e.lineTo(t+2,r+2),e.closePath(),e.fill(),e.beginPath(),e.moveTo(n+4,r),e.lineTo(n-2,r-2),e.lineTo(n-2,r+2),e.closePath(),e.fill()}if(xe.current!==null&&I.current){let{x:t,y:n}=xe.current;e.strokeStyle=`#ed0707`,e.lineWidth=3,e.beginPath(),e.moveTo(t-10,n-10),e.lineTo(t+10,n+10),e.moveTo(t+10,n-10),e.lineTo(t-10,n+10),e.stroke()}if(oe.current){let t=ie.current,n=t.x-55/2,r=t.y+14;e.save(),e.globalAlpha=.25,e.fillStyle=`rgba(0,0,0,0.4)`,e.beginPath(),e.roundRect(n+3,t.y+3,55,448,4),e.fill(),e.restore(),e.save(),e.globalAlpha=.72,e.fillStyle=`#c7943a`,e.strokeStyle=`#7a5528`,e.lineWidth=2,e.beginPath(),e.roundRect(n,t.y,55,448,4),e.fill(),e.stroke(),e.fillStyle=`#a97838`,e.beginPath(),e.moveTo(n+55,t.y+4),e.lineTo(n+55+3,t.y+10),e.lineTo(n+55+3,t.y+448-10),e.lineTo(n+55,t.y+448),e.closePath(),e.fill(),e.fillStyle=`#e8c98d`,e.beginPath(),e.moveTo(n+4,t.y),e.lineTo(n+55-4,t.y),e.lineTo(n+55,t.y+4),e.lineTo(n+4,t.y+4),e.closePath(),e.fill(),e.restore(),e.save(),e.globalAlpha=.9,e.strokeStyle=`#222`,e.fillStyle=`#222`,e.lineWidth=1.2,e.font=`15px Arial`;for(let i=0;i<=150;i++){let a=r+i/150*420,o=i%5==0,s=i/5,c=10;if(o&&(c=s%5==0?28:22),e.beginPath(),e.moveTo(n,a),e.lineTo(n+c,a),e.stroke(),o){let n=i/5;n>-1&&n<31&&n%5==0&&e.fillText(`${n}`,t.x+6,a+5)}}e.font=`16px Arial`,e.fillText(`cm`,t.x+2,r+420-400),e.restore()}D.current&&S.current&&(e.fillStyle=`black`,e.fillText(am.label,y.current.x-35,y.current.y-15)),i.current&&(Je(e,i.current,`#00a8ff`),D.current&&S.current&&(e.fillStyle=`black`,e.fillText(`pulse`,i.current.x+10,i.current.y-10))),a.current&&(Je(e,a.current,`#ff8c00`),D.current&&S.current&&(e.fillStyle=`black`,e.fillText(`echo`,a.current.x+10,a.current.y-10))),o.current&&(Je(e,o.current,`#00a8ff`),D.current&&S.current&&(e.fillStyle=`black`,e.fillText(`pulse`,o.current.x+10,o.current.y-10))),s.current&&(Je(e,s.current,`#ff8c00`),D.current&&S.current&&(e.fillStyle=`black`,e.fillText(`echo`,s.current.x+10,s.current.y-10))),t.current=requestAnimationFrame(v)}return t.current=requestAnimationFrame(v),()=>{t.current!==null&&cancelAnimationFrame(t.current)}},[]),(0,Z.jsxs)(`div`,{className:`app`,children:[(0,Z.jsxs)(`div`,{className:`industrial-header-row has-brand`,children:[(0,Z.jsx)(Jp,{}),(0,Z.jsx)(`div`,{className:`challenge-banner ${de?`active`:``}`,children:(0,Z.jsx)(`span`,{className:`banner-copy`,children:de?`🎯 CHALLENGE MODE • Locate the hidden defect`:`🔎  EXPLORATION MODE`})}),(0,Z.jsx)(Zp,{active:`industrial`,onBatEcholocation:e})]}),(0,Z.jsxs)(`div`,{className:`top-row ${de?`is-challenge`:``} ${pe?`is-lower-swapped`:``}`,children:[(0,Z.jsxs)(`div`,{className:`simulation`,children:[(0,Z.jsx)(`canvas`,{ref:n,width:700,height:500,onPointerDown:Re,onPointerMove:ze,onPointerUp:Be,onPointerCancel:Be,onPointerLeave:Ve,style:{cursor:de?`default`:`grab`,touchAction:`none`}}),(0,Z.jsxs)(`div`,{className:`simulation-lower ${de?`challenge-lower-task`:``}`,children:[de&&(0,Z.jsxs)(`div`,{className:`challenge-guidance`,children:[Se===null&&(0,Z.jsxs)(`div`,{className:`challenge-info ${he?`is-pulsing`:``}`,children:[(0,Z.jsx)(`h2`,{children:`Hidden Defect Challenge`}),(0,Z.jsxs)(`p`,{children:[`Use the probe to locate the hidden defect.`,(0,Z.jsx)(`br`,{}),`Click on the steel to mark the defect location, then click "Reveal answer" to see how close you were.`,(0,Z.jsx)(`br`,{}),`The speed of sound in steel is 5890 m/s.`]})]}),Se!==null&&xe.current&&(0,Z.jsxs)(`div`,{className:`feedback-panel`,children:[(0,Z.jsxs)(`div`,{children:[(0,Z.jsx)(`span`,{className:`feedback-icon`,"aria-hidden":`true`,children:`🔎`}),(0,Z.jsx)(`strong`,{children:`Distance from defect centre:`}),` `,(Se/14).toFixed(1),` cm`]}),(0,Z.jsx)(`div`,{children:we})]}),(0,Z.jsx)(`button`,{type:`button`,className:`industrial-swap`,"aria-label":`Swap the lower challenge panels`,"aria-pressed":pe,title:`Swap sides`,onClick:()=>F(e=>!e),children:(0,Z.jsxs)(`svg`,{viewBox:`0 0 24 24`,"aria-hidden":`true`,children:[(0,Z.jsx)(`path`,{d:`M7 7h11`}),(0,Z.jsx)(`path`,{d:`m15 4 3 3-3 3`}),(0,Z.jsx)(`path`,{d:`M17 17H6`}),(0,Z.jsx)(`path`,{d:`m9 14-3 3 3 3`})]})})]}),(0,Z.jsx)(`div`,{className:`controls`,children:(0,Z.jsxs)(`div`,{className:`button-row`,children:[(0,Z.jsx)(`button`,{className:`control-btn tertiary`,style:{background:`linear-gradient(135deg, #0284c7, #06b6d4)`,color:`white`,borderRadius:`8px`,boxShadow:`0 4px 10px rgba(2,132,199,0.35)`},onClick:He,children:`🔊 Fire pulse`}),(0,Z.jsx)(`button`,{className:`control-btn tertiary`,style:{background:`linear-gradient(135deg, #d7b436, #f6c453)`,color:`dark gray`,boxShadow:`0 4px 10px rgba(183,121,31,0.4)`},onClick:()=>{oe.current=!oe.current,ce(oe.current)},children:`📏 Ruler`}),(0,Z.jsx)(`button`,{className:`control-btn tertiary`,style:{background:`linear-gradient(135deg, #cfd8e4, #f9fafc)`,color:`dark gray`,boxShadow:`0 4px 10px rgba(71,85,105,0.35)`},onClick:qe,children:`↺ Reset`}),de?(0,Z.jsx)(`button`,{className:`control-btn`,style:{background:`linear-gradient(90deg,#16a34a,#0d9488)`,color:`white`,borderRadius:`8px`},onClick:We,children:`✔ Reveal answer`}):(0,Z.jsx)(`button`,{className:`control-btn`,style:{background:`linear-gradient(90deg,#f59e0b,#ef4444)`,color:`white`,borderRadius:`8px`},onClick:Ue,children:`🎯 Challenge`})]})})]})]}),(0,Z.jsxs)(`div`,{className:`ascan-panel`,children:[(0,Z.jsxs)(`div`,{className:`ascan-container`,children:[(0,Z.jsx)(`button`,{type:`button`,className:`microseconds-help-button`,"aria-expanded":_e,"aria-controls":`microseconds-help`,onClick:()=>ve(e=>!e),children:`What's a µs?`}),_e&&(0,Z.jsxs)(`aside`,{id:`microseconds-help`,className:`microseconds-help`,role:`dialog`,"aria-label":`Microseconds help`,children:[(0,Z.jsx)(`button`,{type:`button`,className:`microseconds-help-close`,"aria-label":`Close microseconds help`,onClick:()=>ve(!1),children:`×`}),(0,Z.jsx)(`strong`,{children:`µs means microsecond.`}),(0,Z.jsx)(`span`,{children:`One microsecond is one millionth of a second.`}),(0,Z.jsxs)(`span`,{className:`microseconds-power`,children:[`1 µs = 1 × 10`,(0,Z.jsx)(`sup`,{className:`microseconds-exponent`,children:`−6`}),` s`]}),(0,Z.jsxs)(`span`,{children:[`Use × 10`,(0,Z.jsx)(`sup`,{className:`microseconds-exponent`,children:`−6`}),` when converting a graph reading into seconds.`]})]}),(0,Z.jsxs)(`svg`,{width:850,height:500,style:{background:`#111`,cursor:`crosshair`,border:`3px solid #333`,borderRadius:`6px`},onMouseMove:Ye,onMouseLeave:()=>{N(null),re(null)},children:[(0,Z.jsx)(`line`,{x1:`40`,y1:`30`,x2:`40`,y2:`410`,stroke:`white`,strokeWidth:`2`}),(0,Z.jsx)(`text`,{x:`8`,y:`25`,fill:`white`,fontSize:`15`,children:`Amplitude`}),(0,Z.jsx)(`polyline`,{fill:`none`,stroke:`cyan`,strokeWidth:`3`,points:j.map((e,t)=>`${40+t/359*770},${390-e*260}`).join(` `)}),(0,Z.jsx)(`line`,{x1:`40`,y1:`400`,x2:`810`,y2:`400`,stroke:`white`,strokeWidth:`2`}),[0,20,40,60,80,100,120].map(e=>{let t=40+e/120*770;return(0,Z.jsxs)(`g`,{children:[(0,Z.jsx)(`line`,{x1:t,y1:`415`,x2:t,y2:`400`,stroke:`white`,strokeWidth:`2`}),(0,Z.jsx)(`text`,{x:t-10,y:`440`,fill:`white`,fontSize:`22`,children:e})]},e)}),(0,Z.jsx)(`text`,{x:`400`,y:`480`,fill:`white`,fontSize:`22`,fontStyle:`italic`,children:`( µs )`}),ne!==null&&(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(`line`,{x1:ne,y1:`30`,x2:ne,y2:`400`,stroke:`white`,strokeWidth:`1`,strokeDasharray:`5 5`}),(0,Z.jsx)(`rect`,{x:ne-52,y:`8`,width:`100`,height:`35`,fill:`black`,stroke:`white`}),(0,Z.jsxs)(`text`,{x:ne-35,y:`32`,fill:`white`,fontSize:`20`,children:[P?.toFixed(1),` µs`]})]})]})]}),de&&(0,Z.jsxs)(`section`,{className:`challenge-workspace`,"aria-label":`Challenge working space`,children:[(0,Z.jsxs)(`div`,{className:`challenge-workspace-header`,children:[(0,Z.jsx)(`span`,{children:`Working space`}),(0,Z.jsx)(`button`,{type:`button`,onClick:tt,children:`Clear`})]}),(0,Z.jsx)(`div`,{className:`challenge-workspace-paper`,children:(0,Z.jsx)(`canvas`,{ref:Ee,className:`challenge-workspace-canvas`,width:1700,height:520,"aria-label":`Write your challenge calculations here`,onPointerDown:Qe,onPointerMove:$e,onPointerUp:et,onPointerCancel:et})})]})]})]}),!de&&(0,Z.jsx)(`div`,{className:`info-panel`,children:(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(`h2`,{children:`Ultrasound Non-destructive Testing`}),(0,Z.jsxs)(`p`,{children:[`Use the ⬅️ and ➡️ arrow keys or click and drag the probe (transducer) to move it along the surface.`,(0,Z.jsx)(`br`,{}),`Use the `,(0,Z.jsx)(`strong`,{children:`SPACE BAR`}),` to fire a pulse.`,(0,Z.jsx)(`br`,{}),`Drag the crack to reposition it within the steel block.`,(0,Z.jsx)(`br`,{}),`The speed of sound in steel is 5890 m/s.`]})]})}),!de&&(0,Z.jsxs)(`div`,{className:`extra-controls`,children:[(0,Z.jsxs)(`div`,{className:`speed-control`,children:[(0,Z.jsxs)(`label`,{children:[`Animation speed: `,O.toFixed(1),`x`]}),(0,Z.jsxs)(`div`,{className:`speed-slider-row`,children:[(0,Z.jsx)(`input`,{type:`range`,min:`0.1`,max:`1.0`,step:`0.1`,value:O,onChange:e=>{let t=Number(e.target.value);A.current=t,k(t)}}),(0,Z.jsx)(`button`,{type:`button`,className:`animation-toggle ${C?`pause`:`play`}`,onClick:C?Ke:Ge,"aria-label":C?`Pause animation`:`Play animation`,children:C?`⏸ Pause`:`▶ Play`})]})]}),(0,Z.jsxs)(`div`,{className:`checkbox-control`,children:[(0,Z.jsxs)(`label`,{children:[(0,Z.jsx)(`input`,{type:`checkbox`,checked:b,onChange:e=>x(e.target.checked)}),`Reveal defect`]}),(0,Z.jsxs)(`label`,{children:[(0,Z.jsx)(`input`,{type:`checkbox`,checked:T,onChange:e=>E(e.target.checked)}),`Show labels`]})]})]}),(0,Z.jsx)(Yp,{}),(0,Z.jsx)(`style`,{children:`

        .challenge-banner{
          width:auto;
          margin-top:0;
          padding:12px;
          border-radius:8px;
          display:flex;
          align-items:center;
          gap:12px;
          font-size:20px;
          font-weight:600;
          letter-spacing:.5px;
          color: #f3f4f6;
          background: #555;
          border:1px solid #d1d5db;
          transition:all .3s ease;
        }

        .banner-copy{
          flex:1;
          text-align:center;
        }

        .industrial-header-row{
          width:1550px;
          margin-top:20px;
          display:grid;
          grid-template-columns:minmax(0, 1fr) 260px;
          align-items:stretch;
          gap:18px;
        }

        .challenge-banner.active{
          background:linear-gradient(90deg,#f59e0b,#ef4444);
          border-color:white;
          box-shadow:0 0 20px rgba(239,68,68,.45);
        }
          
      .app{
        width: 1650px;
        display:flex;
        flex-direction:column;
        align-items:center;
        gap:30px;
        font-family:Arial;
      }

      .top-row{
        margin-top:0px;
        position:relative;
        display:flex;
        width:1580px;
        gap:30px;
        justify-content:center;
        align-items:start;
      }

      .top-row.is-challenge{
        display:grid;
        grid-template-columns:700px 850px;
        grid-template-rows:auto auto auto;
        column-gap:30px;
        row-gap:16px;
      }

      .simulation{
        width:700px;
        flex:0 0 700px;
      }

      .ascan-panel{
        width:850px;
        flex:0 0 850px;
        display:flex;
        flex-direction:column;
        align-items:center;
        gap:16px;
      }

      .top-row.is-challenge .simulation,
      .top-row.is-challenge .ascan-panel{
        display:contents;
      }

      .top-row.is-challenge .simulation > canvas{
        grid-column:1;
        grid-row:1;
      }

      .top-row.is-challenge .ascan-container{
        grid-column:2;
        grid-row:1;
      }

      .challenge-lower-task{
        display:contents;
      }

      .top-row.is-challenge .challenge-lower-task .controls{
        grid-column:1;
        grid-row:2;
        width:700px;
        box-sizing:border-box;
      }

      .top-row.is-challenge .challenge-guidance{
        grid-column:1;
        grid-row:3;
        width:700px;
        position:relative;
        margin-top:24px;
      }

      .top-row.is-challenge .challenge-workspace{
        grid-column:2;
        grid-row:2 / span 2;
        width:850px;
      }

      .top-row.is-lower-swapped .challenge-guidance{
        grid-column:1 / 3;
        grid-row:2 / span 2;
        justify-self:end;
        align-self:center;
        margin-top:0;
      }

      .top-row.is-lower-swapped .challenge-workspace{
        grid-column:1 / 3;
        grid-row:3;
        justify-self:start;
        margin-top:-8px;
      }

      .industrial-swap{
        position:absolute;
        top:50%;
        left:calc(100% + 15px);
        z-index:10;
        width:52px;
        height:52px;
        display:flex;
        align-items:center;
        justify-content:center;
        padding:0;
        transform:translate(-50%, -50%);
        border:1px solid #fff1c2;
        border-radius:999px;
        background:linear-gradient(135deg,#f59e0b,#ef4444);
        box-shadow:0 4px 12px rgba(0,0,0,.38),0 0 0 3px rgba(106,49,18,.55);
        color:#fff;
        cursor:pointer;
      }

      .top-row.is-lower-swapped .industrial-swap{
        left:-15px;
      }

      .industrial-swap:hover{
        filter:brightness(1.08);
      }

      .industrial-swap svg{
        width:25px;
        height:25px;
        fill:none;
        stroke:currentColor;
        stroke-width:1.9;
        stroke-linecap:round;
        stroke-linejoin:round;
      }

      .info-panel{
        margin-top:0px;
        width:1400px;
        text-align:center;
      }

      .challenge-info{
        background:linear-gradient(90deg,#f59e0b,#ef4444);
        box-sizing:border-box;
        color:white;
        margin-top:0;
        padding:16px 18px;
        width:100%;
        border:1px solid white;
        border-radius:10px;
        box-shadow:0 0 20px rgba(239,68,68,.45);
        text-align:left;
      }

      .challenge-info h2{
        color:white;
      }

      .challenge-info p{
        line-height:1.55;
      }

      .challenge-info.is-pulsing{
        animation:challengePromptPulse .72s ease-in-out;
      }

      @keyframes challengePromptPulse{
        0%,100%{ transform:scale(1); filter:brightness(1); }
        32%{ transform:scale(1.018); filter:brightness(1.35); box-shadow:0 0 34px rgba(255,193,7,.95); }
        68%{ transform:scale(1.006); filter:brightness(1.12); }
      }

      .feedback-panel{
        box-sizing:border-box;
        width:min(430px, calc(100% - 40px));
        margin:0 auto;
        padding:8px 14px;
        border-radius:8px;
        background: #f8fafc;
        border:1px solid #cbd5e1;
        color:#1f2937;
        font-weight:600;
        line-height:1.35;
        text-align:center;
        display:grid;
        gap:4px;
      }

      .feedback-icon{
        display:inline-block;
        margin-right:4px;
        font-size:1.5em;
        line-height:0;
        vertical-align:-0.12em;
      }

      .challenge-workspace{
        box-sizing:border-box;
        width:850px;
        padding:12px;
        border:2px solid #41536b;
        border-radius:10px;
        background:#102238;
        box-shadow:0 5px 16px rgba(0,0,0,.3);
      }

      .challenge-workspace-header{
        display:flex;
        align-items:center;
        justify-content:space-between;
        margin-bottom:8px;
        color:#f8fafc;
        font-weight:700;
      }

      .challenge-workspace-header button{
        padding:6px 12px;
        border:1px solid #71839a;
        border-radius:7px;
        background:#1e344d;
        color:#f8fafc;
        font-weight:700;
        cursor:pointer;
      }

      .challenge-workspace-paper{
        height:260px;
        overflow:hidden;
        border:2px solid #9dacbd;
        border-radius:7px;
        background-color:#fff;
        background-image:linear-gradient(#d8dee6 1px, transparent 1px),
          linear-gradient(90deg, #d8dee6 1px, transparent 1px);
        background-size:28px 28px;
      }

      .challenge-workspace-canvas{
        width:100%;
        height:100%;
        border:0;
        border-radius:0;
        box-shadow:none;
        background:transparent;
        cursor:crosshair;
        touch-action:none;
      }

      .extra-controls{
        display:grid;
        grid-template-columns:320px 200px;
        gap:30px;
        align-items:center;
        justify-content:center;
        justify-items:center;
        margin-top:12px;
        }

      .speed-control{
        width: 320px;
        display:flex;
        flex-direction:column;
        gap:6px;
        }

      .speed-slider-row{
        display:flex;
        align-items:center;
        gap:10px;
        }

      .speed-slider-row input{
        flex:1;
        min-width:0;
        }

      .animation-toggle{
        min-width:86px;
        padding:7px 10px;
        border:none;
        border-radius:8px;
        color:white;
        cursor:pointer;
        font-weight:600;
        transition:background .2s ease, transform .2s ease;
        }

      .animation-toggle:hover{
        transform:translateY(-1px);
        }

      .animation-toggle:focus{
        outline:none;
        box-shadow:none;
        }

      .animation-toggle.play{
        background:#16a34a;
        }

      .animation-toggle.pause{
        background:#f59e0b;
        }

      .checkbox-control{
        display:flex;
        flex-direction:column;
        gap:6px;
        align-items:flex-start;
        }

      .ascan-container{
        position:relative;
      }

      .microseconds-help-button{
        position:absolute;
        top:14px;
        right:14px;
        z-index:3;
        padding:7px 11px;
        border:1px solid #67e8f9;
        border-radius:8px;
        background:#123447;
        color:#dffbff;
        font-weight:700;
        cursor:pointer;
      }

      .microseconds-help-button:hover{
        background:#185069;
      }

      .microseconds-help{
        position:absolute;
        top:55px;
        right:14px;
        z-index:4;
        box-sizing:border-box;
        width:340px;
        display:flex;
        flex-direction:column;
        gap:8px;
        padding:16px 40px 16px 16px;
        border:1px solid #67e8f9;
        border-radius:10px;
        background:#f0fdff;
        color:#123047;
        text-align:left;
        box-shadow:0 12px 30px rgba(0,0,0,.4);
      }

      .microseconds-help-close{
        position:absolute;
        top:6px;
        right:8px;
        border:0;
        background:transparent;
        color:#123047;
        font-size:24px;
        line-height:1;
        cursor:pointer;
      }

      .microseconds-help span{
        font-size:17px;
        line-height:1.4;
      }

      .microseconds-help strong{
        font-size:19px;
        line-height:1.3;
      }

      .microseconds-power{
        color:#b42318;
        font-size:24px !important;
        font-weight:800;
      }

      .microseconds-exponent{
        position:relative;
        top:-.48em;
        display:inline-block;
        margin-left:1px;
        font-size:.78em;
        line-height:1;
        font-weight:900;
        letter-spacing:0;
      }

      .controls{
        display:flex;
        flex-direction:column;
        gap:10px;
        margin-top:12px;
      }

      .challenge-lower-task .controls{
        order:-1;
        margin:0 0 12px;
      }

      .button-row{
        display:flex;
        flex-wrap:wrap;
        gap:8px;
        justify-content:center;

      }

      .control-btn{
        margin:0;
        padding:10px 12px;
        border:none;
        border-radius:8px;
        cursor:pointer;
        font-weight:600;
        transition:all .2s ease;
        min-width:96px;
      }

      .control-btn.active{
        box-shadow:0 0 0 2px rgba(0,0,0,.08),0 2px 8px rgba(0,0,0,.12);
      }

      .control-btn.primary{
        background:#16a34a;
        color:white;
      }

      .control-btn.secondary{
        background:#f59e0b;
        color:white;
      }

      .control-btn.tertiary{
        background:#e5e7eb;
        color:#111827;
      }

      .mode-pill{
        display:inline-flex;
        align-items:center;
        gap:8px;
        align-self:flex-start;
        padding:8px 12px;
        border-radius:999px;
        font-weight:700;
      }

      .mode-pill-play{
        background:#dcfce7;
        color:#166534;
        border:1px solid #86efac;
      }

      .mode-pill-pause{
        background:#fee2e2;
        color:#991b1b;
        border:1px solid #fca5a5;
      }

      .mode-dot{
        width:10px;
        height:10px;
        border-radius:50%;
        background:currentColor;
        box-shadow:0 0 0 3px rgba(255,255,255,.35);
      }

      canvas{
        border:3px solid #777;
        border-radius:4px;
        box-shadow:0 2px 6px rgba(0,0,0,0.25);
        display:block;
      }

    `})]})}var hm=1104,gm=650,_m=552,vm=325,ym=hm/_m,bm=32,$=616,xm=389,Sm=540,Cm=480,wm=.39,Tm=.9995,Em=6e-4,Dm=91,Om=210,km=333,Am=Math.PI*40/180,jm=Math.PI*50/180,Mm=Math.PI*55/180,Nm=314,Pm=894;function Fm(e,t=116,n=32){return e.length===0?`M ${Nm},${t}`:e.map((e,r)=>{let i=Nm+r/539*580,a=t-Math.tanh(e*5.5)*n;return`${r===0?`M`:`L`} ${i.toFixed(1)},${a.toFixed(1)}`}).join(` `)}function Im({reflectorX:e,reflectorY:t,reflectorAngle:n,playbackSpeed:r,paused:i,binaural:a,enabled:o,runId:s,onTraceUpdate:c,onPhaseChange:l}){let d=(0,u.useRef)(null),f=(0,u.useRef)(r),p=(0,u.useRef)(i);return(0,u.useEffect)(()=>{f.current=r},[r]),(0,u.useEffect)(()=>{p.current=i},[i]),(0,u.useEffect)(()=>{let r=d.current;if(!r)return;let i=r.getContext(`2d`);if(!i)return;if(i.clearRect(0,0,hm,gm),!o){c({primary:[],secondary:[]});return}let s=$*xm,u=new Float32Array(s),m=new Float32Array(s),h=new Float32Array(s),g=new Float32Array(s),_=new Uint8Array(s),v=new Uint8Array(s),y=document.createElement(`canvas`);y.width=_m,y.height=vm;let b=y.getContext(`2d`);if(!b)return;let x=b.createImageData(_m,vm),S=new Float32Array(_m*vm);i.imageSmoothingEnabled=!0,i.imageSmoothingQuality=`high`;let C=Math.round(Om/ym)+bm,w=Math.round(km/ym)+bm,T=C+Math.round(11/ym),E=Math.round(188/ym)+bm,D=Math.round(308/ym)+bm;Math.round(358/ym)+bm;let O=a?E:T,k=a?D:w,A=Math.round(e/ym)+bm,j=Math.round(t/ym)+bm,ee=Math.max(2,Math.round(5/ym)),te=Math.round(Dm/ym),M=Math.sqrt(wm),ne=Math.max(1,Math.round(43/M)),N=.30000000000000004/1.7/M,P=Math.hypot(A-C,j-w),re=Math.hypot(A-O,j-(a?w:k)),ie=Math.max(0,Math.round((P-te)/M)),ae=Math.round((P-te+re)/M),oe=(M-1)/(M+1),se=Sm*2,ce=Math.max(ae+Cm,se),le=[],ue=[],de=-1,fe=``,pe=0,F=0,I=0,me=performance.now(),he=0,ge=!1,_e=1e3/120;function ve(e){let t=.45;if(e<=2){let n=(Math.max(t,e)-t)/1.55;return 60-30*(n*n*(3-2*n))}let n=(Math.min(3,e)-2)/1;return 30-10*(n*n*(3-2*n))}let ye=me-1e3/ve(f.current),be=performance.now(),xe=0,Se=0,Ce=0,we=0,Te=Math.ceil($/16),Ee=Math.ceil(xm/16),L=new Int32Array(975),De=new Int32Array(975),Oe=new Int32Array(975),ke=new Uint8Array(975),Ae=new Uint8Array(975),je=new Int32Array(975),Me=0,Ne=Math.ceil(43/M)+24,Pe=Math.max(0,ie-10),Fe=ie+Ne,Ie=new Float32Array(975),Le=new Float32Array(975),Re=new Float32Array(975),ze=new Float32Array(975),Be=new Uint8Array(975),Ve=new Int32Array(975),He=new Int32Array(975),Ue=new Int32Array(975),We=new Int32Array(975),Ge=new Int32Array(975),Ke=new Int32Array(975),qe=new Int32Array(975),Je=new Int32Array(975),Ye=new Int32Array(975),Xe=new Int32Array(975),Ze=new Int32Array(975),Qe=new Int32Array(975),$e=new Int32Array(975),et=new Int32Array(975),tt=new Int32Array(975),nt=new Int32Array(975);Ye.fill(-1),Xe.fill(-1),Ze.fill(-1),Qe.fill(-1),$e.fill(-1),et.fill(-1),tt.fill(-1),nt.fill(-1);let rt=new Float32Array(975),it=new Float32Array(975),at=new Float32Array(975),ot=new Float32Array(975),st=new Uint8Array(975),ct=new Uint8Array(975),lt=Tm/1.0006,ut=new Uint8Array(975),dt=bm,ft=bm;for(let e=0;e<Ee;e+=1){let t=e*16,n=Math.min(388,(e+1)*16-1);for(let r=0;r<Te;r+=1){let i=r*16,a=Math.min(615,(r+1)*16-1),o=e*Te+r;Ve[o]=i,He[o]=a,Ue[o]=t,We[o]=n,Ge[o]=Math.max(1,i),Ke[o]=Math.min(614,a),qe[o]=Math.max(1,t),Je[o]=Math.min(387,n),r>0&&(Ye[o]=o-1),r+1<Te&&(Xe[o]=o+1),e>0&&(Ze[o]=o-Te),e+1<Ee&&(Qe[o]=o+Te),r>0&&e>0&&($e[o]=o-Te-1),r+1<Te&&e>0&&(et[o]=o-Te+1),r>0&&e+1<Ee&&(tt[o]=o+Te-1),r+1<Te&&e+1<Ee&&(nt[o]=o+Te+1);let s=Number(a<dt||i>583||n<ft||t>356);Be[o]=s,rt[o]=s?8e-4:12e-5,it[o]=s?8e-4:25e-5,at[o]=s?.0025:.001,ot[o]=s?.0015:6e-4,st[o]=s?3:2}}function pt(e,t,n,r){for(let i=0;i<975;i+=1){let a=Ve[i],o=He[i],s=Ue[i],c=We[i],l=e<a?a:e>o?o:e,u=t<s?s:t>c?c:t,d=l-e,f=u-t;n[i]=d*d+f*f;let p=Math.max(Math.abs(a-e),Math.abs(o-e)),m=Math.max(Math.abs(s-t),Math.abs(c-t));r[i]=p*p+m*m}}pt(C,w,Ie,Le),pt(A,j,Re,ze);function mt(e,t,n,r,i,a){return Ie[e]<=n&&Le[e]>=t||!!(r&&Re[e]<=a&&ze[e]>=i)}for(let e=9;e<=15;e+=1)for(let t=5;t<=11;t+=1)L[Me]=e*Te+t,Me+=1;for(let e=0;e<xm;e+=1)for(let t=0;t<$;t+=1){let n=e*$+t,r=Math.min(t,e,615-t,388-e),i=bm;g[n]=Em+.65*Math.max(0,(i-r)/i)**3}function ht(e,t){if(e<ee||e>te||Math.abs(t)>jm)return 0;let n=(e-ee)/43,r=Math.sin(Math.PI*n)**4,i=Math.abs(t),a=i<=Am?1:(jm-i)/(jm-Am),o=a*a*(3-2*a);return Math.sin(n*Math.PI*2*4)*r*o*1.45}function gt(e){if(e>=ne)return 0;let t=e/ne,n=Math.sin(Math.PI*t)**2;return Math.sin(t*Math.PI*2*4)*n*.684}for(let e=0;e<xm;e+=1)for(let t=0;t<$;t+=1){let n=t-C,r=e-w,i=Math.hypot(n,r),a=Math.atan2(r,n),o=e*$+t;m[o]=ht(i,a);let s=i+M,c=i>ee?Math.sqrt(s/i):1;u[o]=ht(s,a)*c}let _t=Math.cos(n),vt=Math.sin(n),yt=-vt,bt=_t,xt=Math.max(1,A-21),St=Math.min(614,A+21),R=Math.max(1,j-21),Ct=Math.min(387,j+21);for(let e=R;e<=Ct;e+=1)for(let t=xt;t<=St;t+=1){let n=t-A,r=e-j,i=n*yt+r*bt,a=n*_t+r*vt;if(Math.abs(i)<=17.5&&Math.abs(a)<=1.5){let n=e*$+t;_[n]=1}}for(let e=R;e<=Ct;e+=1)for(let t=xt;t<=St;t+=1)if(_[e*$+t])for(let n=-1;n<=1;n+=1)for(let r=-1;r<=1;r+=1)(r!==0||n!==0)&&(v[(e+n)*$+t+r]=1);for(let e=0;e<975;e+=1){let t=1,n=Ve[e],r=He[e],i=Ue[e],a=We[e],o=n>=bm&&r<=583&&i>=bm&&a<=356,s=!1;for(let e=i;e<=a&&!s;e+=1){let t=e*$;for(let e=n;e<=r;e+=1){let n=t+e;if(_[n]||v[n]){s=!0;break}}}s?t=2:o&&(t=0),ct[e]=t}function wt(e,t){let n=Ge[t],r=Ke[t],i=qe[t],a=Je[t],o=it[t],s=at[t],c=ot[t],l=st[t],u=0,d=0,f=0,p=0,m=0,h=0,g=0,_=0;for(let t=i;t<=a;t+=1){let i=t*$,a=Math.abs(e[i+n]),s=Math.abs(e[i+r]);a>m&&(m=a),s>h&&(h=s),a>=o&&(u+=1),s>=o&&(d+=1)}for(let t=n;t<=r;t+=1){let n=Math.abs(e[i*$+t]),r=Math.abs(e[a*$+t]);n>g&&(g=n),r>_&&(_=r),n>=o&&(f+=1),r>=o&&(p+=1)}let v=0;(u>=l||m>=s)&&(v|=1),(d>=l||h>=s)&&(v|=2),(f>=l||g>=s)&&(v|=4),(p>=l||_>=s)&&(v|=8);let y=Math.abs(e[i*$+n]),b=Math.abs(e[i*$+r]),x=Math.abs(e[a*$+n]),S=Math.abs(e[a*$+r]);return y>=c&&(v|=16),b>=c&&(v|=32),x>=c&&(v|=64),S>=c&&(v|=128),v}for(let e=0;e<Me;e+=1){let t=L[e];ut[t]=wt(m,t)}function Tt(e){e!==fe&&(fe=e,l(e))}function Et(){let e=M*pe,t=Math.max(0,ee+e-24),n=te+e+24,r=t*t,i=n*n,o=pe>=Pe,s=o?(pe-Pe)*M+24:0,c=o?Math.max(0,(pe-Fe)*M-24):0,l=c*c,d=s*s,f=pe+1,p=M*f,y=Math.max(0,ee+p-24),b=te+p+24,x=y*y,S=b*b,C=f>=Pe,w=C?(f-Pe)*M+24:0,T=C?Math.max(0,(f-Fe)*M-24):0,E=T*T,D=w*w;ke.fill(0);let A=0;function j(e){e<0||mt(e,r,i,o,l,d)&&(ke[e]||(ke[e]=1,Oe[A]=e,A+=1))}for(let e=0;e<Me;e+=1){let t=L[e];j(t);let n=ut[t];n&1&&j(Ye[t]),n&2&&j(Xe[t]),n&4&&j(Ze[t]),n&8&&j(Qe[t]),n&16&&j($e[t]),n&32&&j(et[t]),n&64&&j(tt[t]),n&128&&j(nt[t])}let P=0,re=0;Ae.fill(0);for(let e=0;e<A;e+=1){let t=Oe[e],n=Ge[t],r=Ke[t],i=qe[t],a=Je[t],o=it[t],s=at[t],c=ot[t],l=st[t],d=0,f=0,p=0,y=0,b=0,w=0,T=0,O=0,k=0,A=0,j=ct[t];if(j===0)for(let e=i;e<=a;e+=1){let t=e*$,s=e===i,l=e===a;for(let e=n;e<=r;e+=1){let i=t+e,a=m[i],f=Math.abs(a);f>d&&(d=f);let p=(4*(m[i-1]+m[i+1]+m[i-$]+m[i+$])+m[i-$-1]+m[i-$+1]+m[i+$-1]+m[i+$+1]-20*a)/6,g=lt*(2*a-.9994*u[i]+wm*p);h[i]=g;let _=Math.abs(g);_>d&&(d=_),s&&(_>O&&(O=_),_>=o&&(y+=1),e===n&&_>=c&&(A|=16),e===r&&_>=c&&(A|=32)),l&&(_>k&&(k=_),_>=o&&(b+=1),e===n&&_>=c&&(A|=64),e===r&&_>=c&&(A|=128))}let g=Math.abs(h[t+n]),_=Math.abs(h[t+r]);g>w&&(w=g),_>T&&(T=_),g>=o&&(f+=1),_>=o&&(p+=1)}else if(j===1)for(let e=i;e<=a;e+=1){let t=e*$,s=e===i,l=e===a;for(let e=n;e<=r;e+=1){let i=t+e,a=m[i],f=Math.abs(a);f>d&&(d=f);let p=(4*(m[i-1]+m[i+1]+m[i-$]+m[i+$])+m[i-$-1]+m[i-$+1]+m[i+$-1]+m[i+$+1]-20*a)/6,_=g[i],v=Tm*(2*a-(1-_)*u[i]+wm*p)/(1+_);h[i]=v;let x=Math.abs(v);x>d&&(d=x),s&&(x>O&&(O=x),x>=o&&(y+=1),e===n&&x>=c&&(A|=16),e===r&&x>=c&&(A|=32)),l&&(x>k&&(k=x),x>=o&&(b+=1),e===n&&x>=c&&(A|=64),e===r&&x>=c&&(A|=128))}let _=Math.abs(h[t+n]),v=Math.abs(h[t+r]);_>w&&(w=_),v>T&&(T=v),_>=o&&(f+=1),v>=o&&(p+=1)}else for(let e=i;e<=a;e+=1){let t=e*$,s=e===i,l=e===a;for(let e=n;e<=r;e+=1){let i=t+e,a=m[i],f=Math.abs(a);f>d&&(d=f);let p=0;if(!_[i]){let e;if(v[i]){let t=a-N*(a-u[i]),n=_[i-1]?t:m[i-1],r=_[i+1]?t:m[i+1],o=_[i-$]?t:m[i-$],s=_[i+$]?t:m[i+$],c=_[i-$-1]?t:m[i-$-1],l=_[i-$+1]?t:m[i-$+1],d=_[i+$-1]?t:m[i+$-1],f=_[i+$+1]?t:m[i+$+1];e=(4*(n+r+o+s)+c+l+d+f-20*a)/6}else e=(4*(m[i-1]+m[i+1]+m[i-$]+m[i+$])+m[i-$-1]+m[i-$+1]+m[i+$-1]+m[i+$+1]-20*a)/6;let t=g[i];p=Tm*(2*a-(1-t)*u[i]+wm*e)/(1+t)}h[i]=p;let x=Math.abs(p);x>d&&(d=x),s&&(x>O&&(O=x),x>=o&&(y+=1),e===n&&x>=c&&(A|=16),e===r&&x>=c&&(A|=32)),l&&(x>k&&(k=x),x>=o&&(b+=1),e===n&&x>=c&&(A|=64),e===r&&x>=c&&(A|=128))}let x=Math.abs(h[t+n]),S=Math.abs(h[t+r]);x>w&&(w=x),S>T&&(T=S),x>=o&&(f+=1),S>=o&&(p+=1)}(f>=l||w>=s)&&(A|=1),(p>=l||T>=s)&&(A|=2),(y>=l||O>=s)&&(A|=4),(b>=l||k>=s)&&(A|=8),d>=rt[t]&&mt(t,x,S,C,E,D)?(De[P]=t,P+=1,Ae[t]=1,ut[t]=A):(je[re]=t,re+=1,ut[t]=0)}for(let e=1;e<388;e+=1){let t=e*$,n=t+$-1;h[t]=(m[t+1]+oe*(h[t+1]-m[t]))/(1+g[t]),h[n]=(m[n-1]+oe*(h[n-1]-m[n]))/(1+g[n])}for(let e=1;e<615;e+=1){let t=e,n=388*$+e;h[t]=(m[t+$]+oe*(h[t+$]-m[t]))/(1+g[t]),h[n]=(m[n-$]+oe*(h[n-$]-m[n]))/(1+g[n])}h[0]=0,h[615]=0,h[388*$]=0,h[xm*$-1]=0;for(let e=0;e<re;e+=1){let t=je[e],n=Ve[t],r=He[t],i=Ue[t],a=We[t];for(let e=i;e<=a;e+=1){let t=e*$;for(let e=n;e<=r;e+=1){let n=t+e;m[n]=0,h[n]=0}}}let se=u;u=m,m=h,h=se;let ce=L,de=Me;for(let e=0;e<de;e+=1){let t=ce[e];if(Ae[t])continue;let n=Ve[t],r=He[t],i=Ue[t],a=We[t];for(let e=i;e<=a;e+=1){let t=e*$;for(let e=n;e<=r;e+=1)h[t+e]=0}}if(L=De,De=ce,Me=P,pe%2==0&&le.length<Sm){let e=gt(pe);le.push(m[k*$+O]+e),a&&ue.push(m[130102]+e)}pe<ne?Tt(`Emitting squeak`):pe<ie?Tt(`Wavefronts travelling`):pe<ie+ne?Tt(`Reflecting from insect`):Tt(pe<ae?`Echo returning`:`Echo detected`),pe+=1}function Dt(){let e=x.data;for(let t=0;t<vm;t+=1){let n=(t+bm)*$;for(let r=0;r<_m;r+=1){let i=n+r+bm,a=t*_m+r,o=m[i];ge?S[a]+=(o-S[a])*1:S[a]=o;let s=S[a],c=Math.abs(s),l=Math.max(0,Math.min(1,(c-.004)/.013999999999999999)),u=l*l*(3-2*l),d=c*8,f=Math.min(1,d)**.32*u,p=(t*_m+r)*4;f<=0||_[i]?(e[p]=0,e[p+1]=0,e[p+2]=0,e[p+3]=0):s>0?(e[p]=105,e[p+1]=239,e[p+2]=250,e[p+3]=Math.round(f*248)):(e[p]=0,e[p+1]=20,e[p+2]=48,e[p+3]=Math.round(f*240))}}b.putImageData(x,0,0),i.clearRect(0,0,hm,gm),i.drawImage(y,0,0,hm,gm),ge=!0}function Ot(e){p.current||(he+=Math.min(50,e-me)*f.current),me=e;let t=0,n=performance.now();for(;he>=_e&&t<12&&pe<ce;)Et(),he-=_e,t+=1,Se+=1;Ce+=performance.now()-n;let r=1e3/ve(f.current),i=F===0||e-ye>=r;if((!p.current||F===0)&&i){let t=performance.now();Dt(),we+=performance.now()-t,xe+=1,ye=e}let a=e-be;if(a>=1e3){let t=a/1e3,n=xe/t,r=Se/t,i=xe>0?Se/xe:0,o=Se>0?Ce/Se:0,s=xe>0?we/xe:0,c=a>0?Ce/a*100:0,l=a>0?we/a*100:0;console.log(`[bat waves] speed=${f.current.toFixed(2)}x | renders/sec=${n.toFixed(1)} | physics steps/sec=${r.toFixed(1)} | steps/render=${i.toFixed(2)} | active tiles=${Me}/975 | physics=${o.toFixed(2)}ms/step (${c.toFixed(0)}%) | render=${s.toFixed(2)}ms/frame (${l.toFixed(0)}%)`),be=e,xe=0,Se=0,Ce=0,we=0}F+=1,F%3==0&&le.length!==de&&(de=le.length,c({primary:[...le],secondary:[...ue]})),pe<ce?I=requestAnimationFrame(Ot):c({primary:[...le],secondary:[...ue]})}return c({primary:[],secondary:[]}),Tt(`Emitting squeak`),I=requestAnimationFrame(Ot),()=>cancelAnimationFrame(I)},[a,o,l,c,n,e,t,s]),(0,Z.jsx)(`canvas`,{ref:d,className:`bat-wave-canvas`,width:hm,height:gm,"aria-hidden":`true`})}function Lm({onBack:e}){let t=(0,u.useRef)(null),n=(0,u.useRef)(null),r=(0,u.useRef)(null),i=(0,u.useRef)({x:720,y:km}),a=(0,u.useRef)(!1),o=(0,u.useRef)(!1),s=(0,u.useRef)(!1),c=(0,u.useRef)(null),l=(0,u.useRef)(null),[d,f]=(0,u.useState)({x:720,y:km}),[p,m]=(0,u.useState)({x:720,y:km}),[h,g]=(0,u.useState)(!1),[_,v]=(0,u.useState)(1.3),[y,b]=(0,u.useState)(!1),[x,S]=(0,u.useState)(!1),[C,w]=(0,u.useState)(!1),[T,E]=(0,u.useState)(!1),[D,O]=(0,u.useState)(!1),[k,A]=(0,u.useState)(0),[j,ee]=(0,u.useState)(`Ready`),[te,M]=(0,u.useState)({primary:[],secondary:[]}),[ne,N]=(0,u.useState)(!1),[P,re]=(0,u.useState)(!1),ie=d.x,ae=d.y,oe=Math.atan2(ae-km,ie-Om)*180/Math.PI,se=x?188:221,ce=(Math.hypot(ie-Om,ae-km)/ym+Math.hypot(ie-se,ae-km)/ym-Dm/ym)/Math.sqrt(wm)/2,le=Nm+Math.min(1,ce/539)*580;function ue(){if(s.current)return;let e=window.AudioContext??window.webkitAudioContext;if(!e)return;let t=r.current??new e;r.current=t;let n=()=>{let e=t.currentTime,n=.085,r=t.createGain(),i=t.createOscillator(),a=t.createOscillator();i.type=`sine`,i.frequency.setValueAtTime(5600,e),i.frequency.exponentialRampToValueAtTime(2300,e+n),a.type=`triangle`,a.frequency.setValueAtTime(8200,e),a.frequency.exponentialRampToValueAtTime(3700,e+n),r.gain.setValueAtTime(1e-4,e),r.gain.exponentialRampToValueAtTime(.1125,e+.004),r.gain.exponentialRampToValueAtTime(1e-4,e+n),i.connect(r),a.connect(r),r.connect(t.destination),i.start(e),a.start(e),i.stop(e+n),a.stop(e+n)};t.state===`suspended`?t.resume().then(n).catch(()=>void 0):n()}function de(){ue(),m(i.current),ee(`Emitting squeak`),M({primary:[],secondary:[]}),b(!1),O(!0),A(e=>e+1)}function fe(){s.current=!s.current,E(s.current)}function pe(){S(e=>!e),M({primary:[],secondary:[]}),ee(`Ready`),b(!1),O(!1)}function F(){l.current!==null&&cancelAnimationFrame(l.current),c.current!==null&&window.clearTimeout(c.current),w(!1),l.current=requestAnimationFrame(()=>{w(!0),l.current=null,c.current=window.setTimeout(()=>{w(!1),c.current=null},650)})}function I(){o.current=!0,re(!1),N(!0)}function me(){o.current=!1,re(!1),N(!1)}(0,u.useEffect)(()=>()=>{let e=r.current;r.current=null,e&&e.state!==`closed`&&e.close(),l.current!==null&&cancelAnimationFrame(l.current),c.current!==null&&window.clearTimeout(c.current)},[]),(0,u.useEffect)(()=>{if(!ne)return;let e=document.body.style.overflow;document.body.style.overflow=`hidden`;let t=e=>{e.key===`Escape`&&me()};return window.addEventListener(`keydown`,t),()=>{document.body.style.overflow=e,window.removeEventListener(`keydown`,t)}},[ne]),(0,u.useEffect)(()=>{if(!ne)return;let e=requestAnimationFrame(()=>{n.current&&(n.current.scrollTop=0)});return()=>cancelAnimationFrame(e)},[ne,P]),(0,u.useEffect)(()=>{let e={ArrowLeft:!1,ArrowRight:!1,ArrowUp:!1,ArrowDown:!1},t=0,n=0,r=!1,s=0,c=performance.now();function l(){e.ArrowLeft=!1,e.ArrowRight=!1,e.ArrowUp=!1,e.ArrowDown=!1}function u(i){if(!o.current&&!i.target?.closest(`button, input, select, textarea, [contenteditable="true"]`)){if(i.code===`Space`){if(i.repeat)return;i.preventDefault(),l(),t=0,n=0,r=!1,de();return}if(i.code===`KeyB`){if(i.repeat)return;i.preventDefault(),pe(),F();return}i.code in e&&(i.preventDefault(),e[i.code]=!0)}}function d(t){t.code in e&&(t.preventDefault(),e[t.code]=!1)}function p(o){let l=Math.min(.034,(o-c)/1e3);if(c=o,a.current)t=0,n=0,r=!1;else{let a=Number(e.ArrowRight)-Number(e.ArrowLeft),s=Number(e.ArrowDown)-Number(e.ArrowUp),c=Math.hypot(a,s),u=c>0;u&&(a/=c,s/=c,t+=a*520*l,n+=s*520*l);let d=Math.exp(-(u?1.8:4.2)*l);t*=d,n*=d;let p=Math.hypot(t,n);p>190&&(t=t/p*190,n=n/p*190);let h=Math.hypot(t,n);if(h>.6){r||(r=!0,M({primary:[],secondary:[]}),ee(`Ready`),b(!1),O(!1));let e=Math.sin(o*.018)*Math.min(20,h*.12),a=-n/h,s=t/h,c=i.current,u=c.x+(t+a*e)*l,d=c.y+(n+s*e)*l,p=ge(u,d);Math.hypot(p.x-u,p.y-d)>.5&&(t*=.3,n*=.3),i.current=p,f(p)}else r&&(t=0,n=0,r=!1,m(i.current))}s=requestAnimationFrame(p)}return window.addEventListener(`keydown`,u),window.addEventListener(`keyup`,d),window.addEventListener(`blur`,l),s=requestAnimationFrame(p),()=>{window.removeEventListener(`keydown`,u),window.removeEventListener(`keyup`,d),window.removeEventListener(`blur`,l),cancelAnimationFrame(s)}},[]);function he(e){let n=t.current;if(!n)return null;let r=n.getBoundingClientRect();return{x:(e.clientX-r.left)*(hm/r.width),y:(e.clientY-r.top)*(650/r.height)}}function ge(e,t){let n=e-Om,r=t-km,i=Math.atan2(r,Math.max(1,n)),a=Math.max(-Mm,Math.min(Mm,i)),o=Math.cos(a),s=Math.sin(a),c=Math.min(610,809/o);s<0&&(c=Math.min(c,128/-s)),s>0&&(c=Math.min(c,207/s));let l=Math.min(c,Math.max(130,Math.hypot(n,r)));return{x:Om+Math.cos(a)*l,y:km+Math.sin(a)*l}}function _e(e){let t=he(e);!t||Math.hypot(t.x-ie,t.y-ae)>48||(e.preventDefault(),a.current=!0,g(!0),M({primary:[],secondary:[]}),ee(`Positioning insect`),e.currentTarget.setPointerCapture(e.pointerId))}function ve(e){if(!a.current)return;let t=he(e);if(!t)return;e.preventDefault();let n=ge(t.x,t.y);i.current=n,f(n)}function ye(e){a.current&&(a.current=!1,g(!1),m(i.current),ue(),ee(`Emitting squeak`),b(!1),O(!0),A(e=>e+1),e.currentTarget.hasPointerCapture(e.pointerId)&&e.currentTarget.releasePointerCapture(e.pointerId))}return(0,Z.jsxs)(`main`,{className:`bat-echo-screen`,children:[(0,Z.jsxs)(`header`,{className:`bat-echo-header`,children:[(0,Z.jsx)(`div`,{"aria-hidden":`true`}),(0,Z.jsxs)(`div`,{className:`bat-echo-heading`,children:[(0,Z.jsx)(`span`,{children:`How ultrasound works in nature`}),(0,Z.jsx)(`h1`,{children:`A bat builds a picture from echoes`})]}),(0,Z.jsx)(Zp,{active:`bat`,onIndustrialTesting:e})]}),(0,Z.jsxs)(`div`,{className:`bat-demo-layout`,children:[(0,Z.jsx)(`section`,{className:`bat-scene-wrap`,"aria-label":`Interactive bat echolocation demonstration`,children:(0,Z.jsxs)(`svg`,{ref:t,className:`bat-scene ${h?`is-dragging-moth`:``}`,viewBox:`0 0 ${hm} ${gm}`,role:`img`,"aria-labelledby":`bat-scene-title bat-scene-description`,onPointerDown:_e,onPointerMove:ve,onPointerUp:ye,onPointerCancel:ye,children:[(0,Z.jsx)(`title`,{id:`bat-scene-title`,children:`A bat detecting a moth with ultrasound`}),(0,Z.jsx)(`desc`,{id:`bat-scene-description`,children:`A time-stepped pressure field spreads from a bat, reflects from the surface of a moth, and returns to the bat. The pressure measured at the bat is plotted live in a thought bubble.`}),(0,Z.jsxs)(`defs`,{children:[(0,Z.jsxs)(`linearGradient`,{id:`bat-night-sky`,x1:`0`,y1:`0`,x2:`0`,y2:`1`,children:[(0,Z.jsx)(`stop`,{offset:`0`,stopColor:`#071426`}),(0,Z.jsx)(`stop`,{offset:`1`,stopColor:`#17375a`})]}),(0,Z.jsxs)(`linearGradient`,{id:`bat-brain-bubble`,x1:`0`,y1:`0`,x2:`1`,y2:`1`,children:[(0,Z.jsx)(`stop`,{offset:`0`,stopColor:`#ffffff`}),(0,Z.jsx)(`stop`,{offset:`1`,stopColor:`#e7f1fc`})]})]}),(0,Z.jsx)(`rect`,{className:`bat-night`,x:`0`,y:`0`,width:hm,height:gm,rx:`18`}),(0,Z.jsx)(`circle`,{className:`bat-moon`,cx:`1010`,cy:`78`,r:`35`}),(0,Z.jsx)(`circle`,{className:`bat-moon-cutout`,cx:`1026`,cy:`64`,r:`35`}),(0,Z.jsxs)(`g`,{className:`bat-stars`,"aria-hidden":`true`,children:[(0,Z.jsx)(`circle`,{cx:`58`,cy:`70`,r:`2`}),(0,Z.jsx)(`circle`,{cx:`124`,cy:`42`,r:`1.5`}),(0,Z.jsx)(`circle`,{cx:`704`,cy:`76`,r:`2`}),(0,Z.jsx)(`circle`,{cx:`782`,cy:`42`,r:`1.5`}),(0,Z.jsx)(`circle`,{cx:`912`,cy:`158`,r:`1.7`}),(0,Z.jsx)(`circle`,{cx:`612`,cy:`45`,r:`1.4`})]}),(0,Z.jsx)(`path`,{className:`bat-cave-floor`,d:`M0,539 C105,494 190,521 276,555 C380,596 470,570 553,541 C653,507 741,521 835,564 C932,608 1019,581 1104,544 L1104,650 L0,650 Z`}),(0,Z.jsx)(`foreignObject`,{className:`bat-wave-foreign-object`,x:`0`,y:`0`,width:hm,height:gm,children:(0,Z.jsx)(`div`,{className:`bat-wave-layer`,children:(0,Z.jsx)(Im,{reflectorX:p.x,reflectorY:p.y,reflectorAngle:Math.atan2(p.y-km,p.x-Om),playbackSpeed:_,paused:y,binaural:x,enabled:!h&&D,runId:k,onTraceUpdate:M,onPhaseChange:ee})})}),(0,Z.jsxs)(`g`,{className:`bat-thought-bubble`,children:[(0,Z.jsx)(`circle`,{cx:`198`,cy:`306`,r:`6`}),(0,Z.jsx)(`circle`,{cx:`213`,cy:`276`,r:`9`}),(0,Z.jsx)(`circle`,{cx:`234`,cy:`243`,r:`12`}),(0,Z.jsx)(`circle`,{cx:`263`,cy:`207`,r:`14`}),(0,Z.jsx)(`path`,{d:`M276,30 H892 C914,30 932,48 932,70 V145 C932,167 914,185 892,185 H316 C294,185 276,167 276,145 Z`})]}),(0,Z.jsxs)(`g`,{className:`bat-brain-graph`,role:`img`,"aria-label":x?`Separate pressure traces measured at the bat’s upper and lower ears`:`The bat hears a loud squeak, followed later by a smaller echo`,children:[(0,Z.jsx)(`text`,{className:`bat-brain-title`,x:`304`,y:`58`,children:`WHAT THE BAT'S BRAIN DETECTS`}),x?(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(`line`,{className:`bat-graph-axis`,x1:Nm,y1:`99`,x2:Pm,y2:`99`}),(0,Z.jsx)(`line`,{className:`bat-graph-axis`,x1:Nm,y1:`135`,x2:Pm,y2:`135`}),(0,Z.jsx)(`path`,{className:`bat-live-trace bat-live-trace-primary`,d:Fm(te.primary,99,15)}),(0,Z.jsx)(`path`,{className:`bat-live-trace bat-live-trace-secondary`,d:Fm(te.secondary,135,15)}),(0,Z.jsxs)(`g`,{className:`bat-ear-trace-key`,children:[(0,Z.jsx)(`line`,{className:`bat-ear-key-primary`,x1:`708`,y1:`54`,x2:`724`,y2:`54`}),(0,Z.jsx)(`text`,{x:`729`,y:`58`,children:`left ear`}),(0,Z.jsx)(`line`,{className:`bat-ear-key-secondary`,x1:`794`,y1:`54`,x2:`810`,y2:`54`}),(0,Z.jsx)(`text`,{x:`815`,y:`58`,children:`right ear`})]})]}):(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(`line`,{className:`bat-graph-axis`,x1:Nm,y1:`116`,x2:Pm,y2:`116`}),(0,Z.jsx)(`path`,{className:`bat-live-trace bat-live-trace-primary`,d:Fm(te.primary)})]}),(0,Z.jsx)(`line`,{className:`bat-graph-axis`,x1:Nm,y1:`75`,x2:Nm,y2:`151`}),(0,Z.jsx)(`text`,{className:`bat-graph-axis-label`,x:321,y:`164`,children:`time →`}),te.primary.some(e=>Math.abs(e)>.01)&&(0,Z.jsx)(`text`,{className:`bat-call-label`,x:320,y:`78`,children:`squeak!`}),j===`Echo detected`&&(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(`line`,{className:`bat-echo-marker`,x1:le,y1:`76`,x2:le,y2:`151`}),(0,Z.jsx)(`text`,{className:`bat-echo-label`,x:le-14,y:`82`,children:`echo`})]})]}),(0,Z.jsxs)(`g`,{className:`bat-animal ${x?`is-binaural`:``}`,transform:`translate(${Om} ${km})`,children:[(0,Z.jsx)(`path`,{className:`bat-wing bat-wing-upper`,transform:`translate(20 0)`,d:`M-43,-11 C-53,-24 -65,-43 -72,-60 C-67,-96 -58,-132 -48,-164 C-81,-162 -106,-148 -124,-126 Q-101,-108 -151,-83 Q-113,-65 -153,-44 Q-108,-34 -94,-18 Q-62,-7 -43,-11 Z`}),(0,Z.jsx)(`path`,{className:`bat-wing bat-wing-lower`,transform:`translate(20 0)`,d:`M-43,11 C-53,24 -65,43 -72,60 C-67,96 -58,132 -48,164 C-81,162 -106,148 -124,126 Q-101,108 -151,83 Q-113,65 -153,44 Q-108,34 -94,18 Q-62,7 -43,11 Z`}),(0,Z.jsx)(`path`,{className:`bat-tail`,d:`M-104,-9 L-145,0 L-104,9 Q-116,0 -104,-9 Z`}),(0,Z.jsx)(`path`,{className:`bat-leg`,d:`M-96,-13 Q-116,-18 -132,-29 M-132,-29 L-143,-29 M-132,-29 L-139,-36`}),(0,Z.jsx)(`path`,{className:`bat-leg`,d:`M-96,13 Q-116,18 -132,29 M-132,29 L-143,29 M-132,29 L-139,36`}),(0,Z.jsx)(`ellipse`,{className:`bat-body`,cx:`-70`,cy:`0`,rx:`43`,ry:`24`}),(0,Z.jsx)(`ellipse`,{className:`bat-neck`,cx:`-39`,cy:`0`,rx:`25`,ry:`20`}),(0,Z.jsx)(`path`,{className:`bat-head`,d:`M-45,0 C-43,-18 -31,-25 -15,-22 C0,-19 9,-9 12,0 C9,9 0,19 -15,22 C-31,25 -43,18 -45,0 Z`}),(0,Z.jsx)(`path`,{className:`bat-ear`,d:`M-34,-15 L-22,-43 Q-8,-23 -15,-8 Z`}),(0,Z.jsx)(`path`,{className:`bat-ear`,d:`M-34,15 L-22,43 Q-8,23 -15,8 Z`}),(0,Z.jsx)(`path`,{className:`bat-ear-inner bat-ear-inner-primary`,d:`M-27,-17 L-22,-32`}),(0,Z.jsx)(`path`,{className:`bat-ear-inner bat-ear-inner-secondary`,d:`M-27,17 L-22,32`}),x&&(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(`circle`,{className:`bat-ear-receiver bat-ear-receiver-primary`,cx:`-22`,cy:`-25`,r:`4`}),(0,Z.jsx)(`circle`,{className:`bat-ear-receiver bat-ear-receiver-secondary`,cx:`-22`,cy:`25`,r:`4`})]}),(0,Z.jsx)(`path`,{className:`bat-muzzle`,d:`M-11,-11 C1,-11 8,-6 11,0 C8,6 1,11 -11,11 C-6,6 -6,-6 -11,-11 Z`}),(0,Z.jsx)(`circle`,{className:`bat-eye`,cx:`-7`,cy:`-8`,r:`2.7`}),(0,Z.jsx)(`circle`,{className:`bat-eye`,cx:`-7`,cy:`8`,r:`2.7`}),(0,Z.jsx)(`path`,{className:`bat-nose`,d:`M7,-3.5 L13,0 L7,3.5 Z`}),(0,Z.jsx)(`path`,{className:`bat-mouth`,d:`M7,-4 Q10,0 7,4`})]}),(0,Z.jsx)(`text`,{className:`bat-object-label`,x:218,y:385,children:`BAT`}),(0,Z.jsxs)(`g`,{className:`bat-insect`,transform:`translate(${ie} ${ae}) rotate(${oe})`,children:[(0,Z.jsx)(`circle`,{className:`bat-insect-hit-target`,cx:`0`,cy:`0`,r:`46`}),(0,Z.jsx)(`ellipse`,{className:`bat-insect-body`,cx:`0`,cy:`0`,rx:`9`,ry:`18`}),(0,Z.jsx)(`ellipse`,{className:`bat-insect-wing`,cx:`-13`,cy:`-7`,rx:`15`,ry:`9`,transform:`rotate(-24 -13 -7)`}),(0,Z.jsx)(`ellipse`,{className:`bat-insect-wing`,cx:`13`,cy:`-7`,rx:`15`,ry:`9`,transform:`rotate(24 13 -7)`}),(0,Z.jsx)(`path`,{className:`bat-antenna`,d:`M-3,-17 Q-11,-31 -19,-24 M3,-17 Q11,-31 19,-24`})]}),(0,Z.jsx)(`text`,{className:`bat-object-label`,x:ie-22,y:ae+57,children:`MOTH`}),(0,Z.jsxs)(`g`,{className:`bat-wave-legend`,transform:`translate(44 600)`,children:[(0,Z.jsx)(`path`,{className:`bat-wave-key`,d:`M0,8 Q16,-8 32,8`}),(0,Z.jsx)(`text`,{x:`44`,y:`9`,children:`wavefronts`})]})]})}),(0,Z.jsxs)(`section`,{className:`bat-controls`,"aria-label":`Echolocation controls`,children:[(0,Z.jsxs)(`div`,{className:`bat-sound-buttons`,children:[(0,Z.jsx)(`button`,{className:`bat-send-button`,type:`button`,onClick:de,children:`🔊 Send a squeak`}),(0,Z.jsx)(`button`,{className:`bat-mute-button`,type:`button`,"aria-label":T?`Unmute squeak`:`Mute squeak`,"aria-pressed":T,title:T?`Unmute squeak`:`Mute squeak`,onClick:e=>{fe(),e.currentTarget.blur()},children:T?`🔇`:`🔊`})]}),(0,Z.jsx)(`button`,{className:`bat-pause-button`,type:`button`,onClick:()=>b(e=>!e),disabled:h||!D,"aria-pressed":y,children:y?`▶ Resume`:`⏸ Pause`}),(0,Z.jsxs)(`label`,{className:`bat-speed-control`,children:[(0,Z.jsx)(`span`,{children:`animation speed`}),(0,Z.jsx)(`input`,{className:`bat-speed-slider`,type:`range`,min:`0.45`,max:`3`,step:`0.05`,value:_,onChange:e=>{v(Number(e.target.value)),e.currentTarget.blur()},onPointerUp:e=>e.currentTarget.blur()})]}),(0,Z.jsxs)(`label`,{className:`bat-binaural-control ${C?`is-hotkey-flashing`:``}`,children:[(0,Z.jsx)(`span`,{children:`Binaural hearing`}),(0,Z.jsx)(`input`,{type:`checkbox`,checked:x,onChange:e=>{pe(),e.currentTarget.blur()},onPointerUp:e=>e.currentTarget.blur()}),(0,Z.jsx)(`span`,{className:`bat-toggle-track`,"aria-hidden":`true`})]}),(0,Z.jsx)(`button`,{className:`bat-quiz-button`,type:`button`,onClick:I,"aria-haspopup":`dialog`,children:`Take the quiz`}),(0,Z.jsxs)(`p`,{className:`bat-keyboard-hint`,children:[(0,Z.jsxs)(`span`,{children:[(0,Z.jsx)(`kbd`,{children:`Space`}),`: squeak`]}),(0,Z.jsxs)(`span`,{children:[(0,Z.jsx)(`kbd`,{children:`Arrow keys`}),`: move moth`]}),(0,Z.jsxs)(`span`,{children:[(0,Z.jsx)(`kbd`,{children:`B`}),`: binaural hearing`]})]}),(0,Z.jsxs)(`div`,{className:`bat-phase bat-phase-${j.toLowerCase().replaceAll(` `,`-`)}`,"aria-live":`polite`,children:[(0,Z.jsx)(`span`,{className:`bat-phase-dot`}),j]})]})]}),ne&&(0,Z.jsx)(`div`,{className:`bat-quiz-modal`,role:`dialog`,"aria-modal":`true`,"aria-label":`Bat echolocation quiz`,onPointerDown:e=>{e.target===e.currentTarget&&me()},children:(0,Z.jsxs)(`div`,{ref:n,className:`bat-quiz-modal-panel ${P?`is-reward`:``}`,children:[(0,Z.jsxs)(`div`,{className:`bat-quiz-controls`,children:[(0,Z.jsx)($p,{className:`bat-quiz-fullscreen`}),(0,Z.jsx)(`button`,{className:`bat-quiz-close`,type:`button`,onClick:me,"aria-label":`Close quiz`,autoFocus:!0,children:`×`})]}),(0,Z.jsx)(Hp,{onFinish:me,onRewardChange:re})]})}),(0,Z.jsx)(Yp,{}),(0,Z.jsx)(`style`,{children:`
        .bat-echo-screen{
          width:min(1550px, calc(100% - 32px));
          margin:0 auto;
          padding:24px 0 34px;
          color:#f4f7fb;
          font-family:Arial, sans-serif;
        }

        .bat-echo-header{
          display:grid;
          grid-template-columns:260px 1fr 260px;
          align-items:end;
          gap:20px;
          margin-bottom:18px;
        }

        .bat-echo-heading{ text-align:center; }

        .bat-echo-heading span{
          display:block;
          margin-bottom:4px;
          color:#9eacc1;
          font-size:12px;
          letter-spacing:.13em;
          text-transform:uppercase;
        }

        .bat-echo-heading h1{
          margin:0;
          color:#f4f7fb;
          font-size:clamp(26px, 4vw, 42px);
          line-height:1.12;
          font-weight:500;
          letter-spacing:-.03em;
        }

        .bat-demo-layout{
          display:grid;
          grid-template-columns:minmax(0, 1fr) 210px;
          align-items:stretch;
          gap:18px;
        }

        .bat-scene-wrap{
          border:3px solid #343d4d;
          border-radius:14px;
          overflow:hidden;
          box-shadow:0 8px 30px rgba(0,0,0,.28);
        }

        .bat-scene{ display:block; width:100%; height:auto; touch-action:none; }
        .bat-scene.is-dragging-moth{ cursor:grabbing; }
        .bat-night{ fill:url(#bat-night-sky); }
        .bat-moon{ fill:#f2da83; }
        .bat-moon-cutout{ fill:#071426; }
        .bat-stars{ fill:#ffffff; opacity:.65; }
        .bat-cave-floor{ fill:#081618; opacity:.94; }

        .bat-thought-bubble{ fill:url(#bat-brain-bubble); }
        .bat-brain-title{ fill:#142238; font-size:12px; font-weight:700; letter-spacing:.08em; }
        .bat-graph-axis{ stroke:#31405a; stroke-width:1.4; opacity:.62; }
        .bat-graph-axis-label,
        .bat-call-label,
        .bat-echo-label{ fill:#263650; font-size:12px; }

        .bat-live-trace{
          fill:none;
          stroke-width:2.6;
          stroke-linecap:round;
          stroke-linejoin:round;
        }

        .bat-live-trace-primary,
        .bat-ear-key-primary{ stroke:#14b8dc; }
        .bat-live-trace-secondary,
        .bat-ear-key-secondary{ stroke:#ec4899; }

        .bat-ear-trace-key line{ stroke-width:3; stroke-linecap:round; }
        .bat-ear-trace-key text{ fill:#263650; font-size:10px; font-weight:700; }

        .bat-echo-marker{
          stroke:#f5a23e;
          stroke-width:1.5;
          stroke-dasharray:4 4;
        }

        .bat-wing,
        .bat-body,
        .bat-neck,
        .bat-head,
        .bat-ear,
        .bat-tail{ fill:#0d121b; }
        .bat-wing{
          fill:#111925;
          stroke:#536277;
          stroke-width:1.1;
          stroke-linejoin:round;
        }
        .bat-leg{
          fill:none;
          stroke:#64748b;
          stroke-width:4.5;
          stroke-linecap:round;
          stroke-linejoin:round;
        }
        .bat-eye{ fill:#f4d65e; }
        .bat-muzzle{ fill:#263244; }
        .bat-nose{ fill:#94a3b8; }
        .bat-mouth,
        .bat-ear-inner{ fill:none; stroke:#7889a0; stroke-width:1.8; stroke-linecap:round; }
        .bat-animal.is-binaural .bat-ear-inner-primary{ stroke:#14b8dc; stroke-width:2.8; }
        .bat-animal.is-binaural .bat-ear-inner-secondary{ stroke:#ec4899; stroke-width:2.8; }
        .bat-ear-receiver-primary{ fill:#14b8dc; }
        .bat-ear-receiver-secondary{ fill:#ec4899; }
        .bat-ear-receiver{ stroke:#f8fafc; stroke-width:1; }
        .bat-wave-foreign-object{ pointer-events:none; }
        .bat-wave-layer{ width:${hm}px; height:${gm}px; }
        .bat-wave-canvas{
          display:block;
          width:${hm}px;
          height:${gm}px;
          background:transparent;
          image-rendering:auto;
        }

        .bat-wave-key{
          fill:none;
          stroke:#5be2f4;
          stroke-width:4;
          stroke-linecap:round;
        }

        .bat-insect-body{ fill:#f4d65e; }
        .bat-insect-wing{ fill:#f6fbff; opacity:.84; }
        .bat-antenna{ fill:none; stroke:#f6fbff; stroke-width:1.5; }
        .bat-insect{ cursor:grab; }
        .bat-insect-hit-target{ fill:transparent; pointer-events:all; }
        .bat-object-label{ fill:#f5f8fc; font-size:12px; font-weight:700; letter-spacing:.16em; }
        .bat-wave-legend text{ fill:#f5f8fc; font-size:12px; }
        .bat-wave-legend path{ stroke-width:3; }

        .bat-controls{
          display:flex;
          flex-direction:column;
          align-items:stretch;
          gap:16px;
          padding:20px 16px;
          border:1px solid #343d4d;
          border-radius:14px;
          background:#171e2a;
        }

        .bat-sound-buttons{
          display:grid;
          grid-template-columns:minmax(0,1fr) 44px;
          gap:10px;
        }

        .bat-send-button{
          min-height:44px;
          border:0;
          border-radius:8px;
          padding:0 18px;
          background:linear-gradient(135deg,#0284c7,#06b6d4);
          color:white;
          font-size:16px;
          font-weight:700;
          cursor:pointer;
          box-shadow:0 4px 10px rgba(2,132,199,.35);
        }

        .bat-mute-button{
          width:44px;
          min-height:44px;
          border:1px solid #526077;
          border-radius:8px;
          padding:0;
          background:#202a39;
          color:#eff6ff;
          font-size:18px;
          cursor:pointer;
        }

        .bat-mute-button:hover{ background:#2a374a; }
        .bat-mute-button[aria-pressed="true"]{ border-color:#31c8ed; background:#12394b; }
        .bat-mute-button:focus-visible{ outline:2px solid #7dd3fc; outline-offset:2px; }

        .bat-pause-button{
          min-height:44px;
          border:1px solid #526077;
          border-radius:8px;
          padding:0 16px;
          background:#202a39;
          color:#eff6ff;
          font-size:15px;
          font-weight:700;
          cursor:pointer;
        }

        .bat-pause-button:hover{ background:#2a374a; }
        .bat-pause-button:disabled{ cursor:default; opacity:.5; }

        .bat-speed-slider{
          width:100%;
          min-height:32px;
          margin:0;
          accent-color:#31c8ed;
          cursor:pointer;
        }

        .bat-speed-control{
          display:grid;
          grid-template-columns:1fr;
          align-items:center;
          gap:12px;
          color:#dbe4f1;
          font-size:13px;
          font-weight:700;
          white-space:nowrap;
        }

        .bat-binaural-control{
          position:relative;
          display:flex;
          align-items:center;
          justify-content:space-between;
          gap:12px;
          min-height:38px;
          color:#dbe4f1;
          font-size:13px;
          font-weight:700;
          cursor:pointer;
        }

        .bat-binaural-control.is-hotkey-flashing{
          animation:bat-binaural-hotkey-flash .65s ease-out;
        }

        @keyframes bat-binaural-hotkey-flash{
          0%,100%{ color:#dbe4f1; box-shadow:0 0 0 0 rgba(49,200,237,0); }
          35%{ color:#ffffff; box-shadow:0 0 0 7px rgba(49,200,237,.32),0 0 22px rgba(49,200,237,.55); }
        }

        .bat-binaural-control input{
          position:absolute;
          width:1px;
          height:1px;
          opacity:0;
        }

        .bat-toggle-track{
          position:relative;
          flex:0 0 auto;
          width:42px;
          height:23px;
          border:1px solid #607087;
          border-radius:999px;
          background:#273244;
          transition:background .18s ease, border-color .18s ease;
        }

        .bat-toggle-track::after{
          content:'';
          position:absolute;
          top:3px;
          left:3px;
          width:15px;
          height:15px;
          border-radius:50%;
          background:#dbe4f1;
          transition:transform .18s ease;
        }

        .bat-binaural-control input:checked + .bat-toggle-track{
          border-color:#14b8dc;
          background:#087b9c;
        }

        .bat-binaural-control input:checked + .bat-toggle-track::after{
          transform:translateX(19px);
        }

        .bat-binaural-control:focus-within .bat-toggle-track{
          outline:2px solid #7dd3fc;
          outline-offset:2px;
        }

        .bat-keyboard-hint{
          display:flex;
          flex-direction:column;
          gap:4px;
          color:#8fa0b8;
          font-size:12px;
          line-height:1.45;
        }

        .bat-keyboard-hint kbd{
          color:#dbe4f1;
          font:700 12px/1.45 Arial,sans-serif;
        }

        .bat-quiz-button{
          width:100%;
          min-height:48px;
          border:1px solid #44ddf7;
          border-radius:12px;
          background:linear-gradient(135deg, #0ea5c6, #22d3ee);
          color:#062c3a;
          font:700 15px/1 Arial, sans-serif;
          cursor:pointer;
          box-shadow:0 6px 18px rgba(8,145,178,.24);
        }

        .bat-quiz-button:hover{ filter:brightness(1.08); }

        .bat-quiz-button:focus-visible{
          outline:3px solid #7dd3fc;
          outline-offset:3px;
        }

        .bat-quiz-modal{
          position:fixed;
          inset:0;
          z-index:1000;
          display:flex;
          align-items:center;
          justify-content:center;
          padding:8px;
          overflow:auto;
          background:rgba(2,8,18,.84);
          backdrop-filter:blur(7px);
        }

        .bat-quiz-modal-panel{
          position:relative;
          width:min(1580px, 100%);
          height:calc(100svh - 16px);
          max-height:calc(100svh - 16px);
          overflow:auto;
          border:1px solid #385670;
          border-radius:22px;
          box-shadow:0 28px 80px rgba(0,0,0,.58);
        }

        .bat-quiz-modal-panel > .batQuiz{
          min-height:100%;
        }

        .bat-quiz-modal-panel.is-reward{
          width:min(1120px, 100%);
          height:auto;
        }

        .bat-quiz-modal-panel.is-reward > .batQuiz{
          min-height:0;
        }

        .bat-quiz-controls{
          position:sticky;
          top:12px;
          float:right;
          z-index:4;
          display:flex;
          gap:8px;
          margin:12px 12px -54px 0;
        }

        .bat-quiz-close{
          width:42px;
          height:42px;
          border:1px solid #668098;
          border-radius:50%;
          background:#132a40;
          color:#fff;
          font:400 30px/36px Arial, sans-serif;
          cursor:pointer;
          box-shadow:0 5px 16px rgba(0,0,0,.35);
        }

        .bat-quiz-close:hover{ background:#1e3d58; }

        .bat-quiz-fullscreen{
          width:42px;
          height:42px;
          display:grid;
          place-items:center;
          padding:0;
          border:1px solid #668098;
          border-radius:50%;
          background:#132a40;
          color:#fff;
          cursor:pointer;
          box-shadow:0 5px 16px rgba(0,0,0,.35);
        }

        .bat-quiz-fullscreen:hover{ background:#1e3d58; }

        .bat-quiz-fullscreen:focus-visible{
          outline:3px solid #22d3ee;
          outline-offset:2px;
        }

        .bat-quiz-fullscreen:disabled{ display:none; }

        /* Room for the full screen and close buttons above the quiz title. */
        @media (max-width: 520px){
          .bat-quiz-modal-panel:has(.bat-quiz-fullscreen:not(:disabled)) .batQuiz__top{
            padding-top:44px;
          }
        }

        .bat-quiz-fullscreen svg{
          width:22px;
          height:22px;
          fill:none;
          stroke:currentColor;
          stroke-width:2;
          stroke-linecap:round;
          stroke-linejoin:round;
        }

        .bat-quiz-close:focus-visible{
          outline:3px solid #22d3ee;
          outline-offset:2px;
        }

        .bat-phase{
          display:flex;
          align-items:center;
          justify-content:flex-start;
          gap:8px;
          color:#dbe4f1;
          font-size:14px;
          font-weight:600;
          margin-top:auto;
        }

        .bat-phase-dot{
          width:9px;
          height:9px;
          border-radius:50%;
          background:#31c8ed;
          box-shadow:0 0 10px rgba(49,200,237,.8);
        }

        .bat-phase-reflecting-from-insect .bat-phase-dot,
        .bat-phase-echo-returning .bat-phase-dot,
        .bat-phase-echo-detected .bat-phase-dot{
          background:#f5a23e;
          box-shadow:0 0 10px rgba(245,162,62,.8);
        }

        @media (max-width:900px){
          .bat-echo-screen{ width:min(100% - 20px, 1550px); padding-top:12px; }
          .bat-echo-header{ grid-template-columns:auto minmax(0, 260px); align-items:start; }
          .bat-echo-header .page-switcher{ grid-column:2; grid-row:1; }
          .bat-echo-heading{ grid-column:1 / -1; grid-row:2; }
          .bat-demo-layout{ grid-template-columns:1fr; }
          .bat-controls{
            display:grid;
            grid-template-columns:1fr 1fr;
            gap:12px;
            padding:14px;
          }
          .bat-speed-control,
          .bat-binaural-control,
          .bat-quiz-button,
          .bat-phase{ grid-column:1 / -1; }
          .bat-phase{ justify-content:center; margin-top:0; }
          .bat-sound-buttons,
          .bat-pause-button{ width:100%; }
        }

      `})]})}function Rm(){let e=window.location.hash.replace(/^#\/?/,``).toLowerCase();return e===`testing`?`testing`:e===`bat`?`bat`:`home`}function zm(){let[e,t]=(0,u.useState)(Rm);(0,u.useEffect)(()=>{let e=()=>t(Rm());return window.addEventListener(`hashchange`,e),window.addEventListener(`popstate`,e),()=>{window.removeEventListener(`hashchange`,e),window.removeEventListener(`popstate`,e)}},[]);let n=e=>{if(e===Rm()){t(e);return}let n=e===`home`?`${window.location.pathname}${window.location.search}`:`#${e}`;window.history.pushState(null,``,n),t(e),window.scrollTo(0,0)};return e===`home`?(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(em,{}),(0,Z.jsx)(tm,{onIndustrialTesting:()=>n(`testing`),onBatEcholocation:()=>n(`bat`)})]}):(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(em,{}),e===`testing`?(0,Z.jsx)(mm,{onNext:()=>n(`bat`)}):(0,Z.jsx)(Lm,{onBack:()=>n(`testing`)})]})}(0,d.createRoot)(document.getElementById(`root`)).render((0,Z.jsx)(u.StrictMode,{children:(0,Z.jsx)(zm,{})}));