/*! modernizr 3.6.0 (Custom Build) | MIT *
 * https://modernizr.com/download/?-backgroundblendmode-backgroundsize-bgpositionshorthand-bgpositionxy-bgrepeatspace_bgrepeatround-bgsizecover-borderradius-boxshadow-boxsizing-checked-cssanimations-csscalc-fontface-lastchild-mediaqueries-userselect-prefixedcss-setclasses !*/
!function(e,t,n){function r(e,t){return typeof e===t}function o(){var e,t,n,o,s,i,a;for(var d in x)if(x.hasOwnProperty(d)){if(e=[],t=x[d],t.name&&(e.push(t.name.toLowerCase()),t.options&&t.options.aliases&&t.options.aliases.length))for(n=0;n<t.options.aliases.length;n++)e.push(t.options.aliases[n].toLowerCase());for(o=r(t.fn,"function")?t.fn():t.fn,s=0;s<e.length;s++)i=e[s],a=i.split("."),1===a.length?Modernizr[a[0]]=o:(!Modernizr[a[0]]||Modernizr[a[0]]instanceof Boolean||(Modernizr[a[0]]=new Boolean(Modernizr[a[0]])),Modernizr[a[0]][a[1]]=o),b.push((o?"":"no-")+a.join("-"))}}function s(e){var t=S.className,n=Modernizr._config.classPrefix||"";if(w&&(t=t.baseVal),Modernizr._config.enableJSClass){var r=new RegExp("(^|\\s)"+n+"no-js(\\s|$)");t=t.replace(r,"$1"+n+"js$2")}Modernizr._config.enableClasses&&(t+=" "+n+e.join(" "+n),w?S.className.baseVal=t:S.className=t)}function i(e){return e.replace(/([A-Z])/g,function(e,t){return"-"+t.toLowerCase()}).replace(/^ms-/,"-ms-")}function a(){return"function"!=typeof t.createElement?t.createElement(arguments[0]):w?t.createElementNS.call(t,"http://www.w3.org/2000/svg",arguments[0]):t.createElement.apply(t,arguments)}function d(e){return e.replace(/([a-z])-([a-z])/g,function(e,t,n){return t+n.toUpperCase()}).replace(/^-/,"")}function l(){var e=t.body;return e||(e=a(w?"svg":"body"),e.fake=!0),e}function u(e,n,r,o){var s,i,d,u,c="modernizr",f=a("div"),p=l();if(parseInt(r,10))for(;r--;)d=a("div"),d.id=o?o[r]:c+(r+1),f.appendChild(d);return s=a("style"),s.type="text/css",s.id="s"+c,(p.fake?p:f).appendChild(s),p.appendChild(f),s.styleSheet?s.styleSheet.cssText=e:s.appendChild(t.createTextNode(e)),f.id=c,p.fake&&(p.style.background="",p.style.overflow="hidden",u=S.style.overflow,S.style.overflow="hidden",S.appendChild(p)),i=n(f,e),p.fake?(p.parentNode.removeChild(p),S.style.overflow=u,S.offsetHeight):f.parentNode.removeChild(f),!!i}function c(e,t){return!!~(""+e).indexOf(t)}function f(e,t){return function(){return e.apply(t,arguments)}}function p(e,t,n){var o;for(var s in e)if(e[s]in t)return n===!1?e[s]:(o=t[e[s]],r(o,"function")?f(o,n||t):o);return!1}function m(t,n,r){var o;if("getComputedStyle"in e){o=getComputedStyle.call(e,t,n);var s=e.console;if(null!==o)r&&(o=o.getPropertyValue(r));else if(s){var i=s.error?"error":"log";s[i].call(s,"getComputedStyle returning null, its possible modernizr test results are inaccurate")}}else o=!n&&t.currentStyle&&t.currentStyle[r];return o}function g(t,r){var o=t.length;if("CSS"in e&&"supports"in e.CSS){for(;o--;)if(e.CSS.supports(i(t[o]),r))return!0;return!1}if("CSSSupportsRule"in e){for(var s=[];o--;)s.push("("+i(t[o])+":"+r+")");return s=s.join(" or "),u("@supports ("+s+") { #modernizr { position: absolute; } }",function(e){return"absolute"==m(e,null,"position")})}return n}function h(e,t,o,s){function i(){u&&(delete j.style,delete j.modElem)}if(s=r(s,"undefined")?!1:s,!r(o,"undefined")){var l=g(e,o);if(!r(l,"undefined"))return l}for(var u,f,p,m,h,v=["modernizr","tspan","samp"];!j.style&&v.length;)u=!0,j.modElem=a(v.shift()),j.style=j.modElem.style;for(p=e.length,f=0;p>f;f++)if(m=e[f],h=j.style[m],c(m,"-")&&(m=d(m)),j.style[m]!==n){if(s||r(o,"undefined"))return i(),"pfx"==t?m:!0;try{j.style[m]=o}catch(y){}if(j.style[m]!=h)return i(),"pfx"==t?m:!0}return i(),!1}function v(e,t,n,o,s){var i=e.charAt(0).toUpperCase()+e.slice(1),a=(e+" "+E.join(i+" ")+i).split(" ");return r(t,"string")||r(t,"undefined")?h(a,t,o,s):(a=(e+" "+N.join(i+" ")+i).split(" "),p(a,t,n))}function y(e,t,r){return v(e,n,n,t,r)}var b=[],x=[],C={_version:"3.6.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,t){var n=this;setTimeout(function(){t(n[e])},0)},addTest:function(e,t,n){x.push({name:e,fn:t,options:n})},addAsyncTest:function(e){x.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=C,Modernizr=new Modernizr;var S=t.documentElement,w="svg"===S.nodeName.toLowerCase();Modernizr.addTest("bgpositionshorthand",function(){var e=a("a"),t=e.style,n="right 10px bottom 10px";return t.cssText="background-position: "+n+";",t.backgroundPosition===n});var T=C._config.usePrefixes?" -webkit- -moz- -o- -ms- ".split(" "):["",""];C._prefixes=T,Modernizr.addTest("csscalc",function(){var e="width:",t="calc(10px);",n=a("a");return n.style.cssText=e+T.join(t+e),!!n.style.length});var k=C.testStyles=u;Modernizr.addTest("checked",function(){return k("#modernizr {position:absolute} #modernizr input {margin-left:10px} #modernizr :checked {margin-left:20px;display:block}",function(e){var t=a("input");return t.setAttribute("type","checkbox"),t.setAttribute("checked","checked"),e.appendChild(t),20===t.offsetLeft})});var z=function(){var e=navigator.userAgent,t=e.match(/w(eb)?osbrowser/gi),n=e.match(/windows phone/gi)&&e.match(/iemobile\/([0-9])+/gi)&&parseFloat(RegExp.$1)>=9;return t||n}();z?Modernizr.addTest("fontface",!1):k('@font-face {font-family:"font";src:url("https://")}',function(e,n){var r=t.getElementById("smodernizr"),o=r.sheet||r.styleSheet,s=o?o.cssRules&&o.cssRules[0]?o.cssRules[0].cssText:o.cssText||"":"",i=/src/i.test(s)&&0===s.indexOf(n.split(" ")[0]);Modernizr.addTest("fontface",i)}),k("#modernizr div {width:100px} #modernizr :last-child{width:200px;display:block}",function(e){Modernizr.addTest("lastchild",e.lastChild.offsetWidth>e.firstChild.offsetWidth)},2);var _=function(){var t=e.matchMedia||e.msMatchMedia;return t?function(e){var n=t(e);return n&&n.matches||!1}:function(t){var n=!1;return u("@media "+t+" { #modernizr { position: absolute; } }",function(t){n="absolute"==(e.getComputedStyle?e.getComputedStyle(t,null):t.currentStyle).position}),n}}();C.mq=_,Modernizr.addTest("mediaqueries",_("only all"));var P="Moz O ms Webkit",E=C._config.usePrefixes?P.split(" "):[];C._cssomPrefixes=E;var R=function(t){var r,o=T.length,s=e.CSSRule;if("undefined"==typeof s)return n;if(!t)return!1;if(t=t.replace(/^@/,""),r=t.replace(/-/g,"_").toUpperCase()+"_RULE",r in s)return"@"+t;for(var i=0;o>i;i++){var a=T[i],d=a.toUpperCase()+"_"+r;if(d in s)return"@-"+a.toLowerCase()+"-"+t}return!1};C.atRule=R;var N=C._config.usePrefixes?P.toLowerCase().split(" "):[];C._domPrefixes=N;var A={elem:a("modernizr")};Modernizr._q.push(function(){delete A.elem});var j={style:A.elem.style};Modernizr._q.unshift(function(){delete j.style}),C.testAllProps=v;var L=C.prefixed=function(e,t,n){return 0===e.indexOf("@")?R(e):(-1!=e.indexOf("-")&&(e=d(e)),t?v(e,t,n):v(e,"pfx"))};C.prefixedCSS=function(e){var t=L(e);return t&&i(t)};Modernizr.addTest("backgroundblendmode",L("backgroundBlendMode","text")),C.testAllProps=y,Modernizr.addTest("cssanimations",y("animationName","a",!0)),Modernizr.addTest("bgpositionxy",function(){return y("backgroundPositionX","3px",!0)&&y("backgroundPositionY","5px",!0)}),Modernizr.addTest("bgrepeatround",y("backgroundRepeat","round")),Modernizr.addTest("bgrepeatspace",y("backgroundRepeat","space")),Modernizr.addTest("backgroundsize",y("backgroundSize","100%",!0)),Modernizr.addTest("bgsizecover",y("backgroundSize","cover")),Modernizr.addTest("borderradius",y("borderRadius","0px",!0)),Modernizr.addTest("boxshadow",y("boxShadow","1px 1px",!0)),Modernizr.addTest("boxsizing",y("boxSizing","border-box",!0)&&(t.documentMode===n||t.documentMode>7)),Modernizr.addTest("userselect",y("userSelect","none",!0)),o(),s(b),delete C.addTest,delete C.addAsyncTest;for(var M=0;M<Modernizr._q.length;M++)Modernizr._q[M]();e.Modernizr=Modernizr}(window,document);