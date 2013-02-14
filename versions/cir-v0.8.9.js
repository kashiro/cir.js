/*! cir.js v0.8.9 | (c) 2013 Atsushi Mizoue. */(function(){
function h(a){return function(){return this[a]}}function j(a){return"cubic-bezier("+a+")"}function aa(a,b){for(var c=k("p"),d=l,e,f=m,g=a.length,p,r=RegExp("^(.*?)"+a[0]+"$","i");g--;)if(c.style[a[g]]!==n){d=q;(e=a[g].match(r)[1])?(f=e.toLowerCase(),b=f+b,f="-"+f+"-"):b=b.toLowerCase();c=s(ba("head"),k("style",{type:"text/css"}));p=c.sheet;break}return{va:b,ya:d,prefix:e,ta:f,sheet:p}}function t(a){return u.JSON.parse(a)}function ca(a){return u.JSON.stringify(a)}
function da(a){a=a||m;a=m+a;return a.match(/^(.*?)([0-9\.]+)(.*)$/)}function v(){return Date.now()}function w(){u.scrollTo(0,1)}function x(a,b,c){for(c in b)a[c]=b[c];return a}function ea(a,b){b=m+a;return b.match("^{.*}$")?t(b):b.match("^[0-9.]+$")?1*b:"true"===b?q:"false"===b?l:a}function ga(a,b,c){return a.split(b).join(c)}function ha(a,b,c,d){b=c=m;for(d in a)a[d]&&(c+=b+d+"="+encodeURIComponent(a[d]),b="&");return c}
function y(a,b){return Object.prototype.toString.call(b)==="[object "+a+"]"?q:l}function ia(a){return y("Object",a)}function z(a){return y("Number",a)}function ja(a){return y("String",a)}function A(a){return y("Function",a)}function ka(a){return y("Boolean",a)}function la(a){return y("Array",a)}function ma(a){return!y("Undefind",a)}function na(){return"ontouchstart"in u}function B(){}function oa(a){a.preventDefault();return l}function D(a,b){b=b||navigator.userAgent;return!!b.match(a)}
function E(a,b){return function(){return b.apply(a,arguments)}}function pa(a,b,c,d){b=b||a;c=c||b;for(d in b)A(b[d])&&(c[d]=E(a,b[d]));x(a,c);return c}function ba(a){return F.querySelector(a)}function qa(a,b,c,d){c=b.querySelectorAll(a);d=[];d.push.apply(d,c);return d}function G(a,b,c,d,e){d=(c=a.className)?c.split(" "):[];for(e=d.length;e--;)if(b===d[e])return q;return l}function H(a,b,c,d){G(a,b)||(c=m,(d=a.className)&&(c=" "),a.className=d+c+b)}
function I(a,b,c,d,e){if(G(a,b)){d=[];c=a.className.split(" ");for(e=c.length;e--;)b!==c[e]&&d.push(c[e]);a.className=d.join(" ")}}function ra(a,b){if(G(a,b))return I(a,b);H(a,b)}function sa(a,b,c,d){if(ia(b)){for(d in b)a.setAttribute(d,b[d]);return q}return c||c===m?a.setAttribute(b,c):a.getAttribute(b)}function ta(a,b){a.removeAttribute(b)}function k(a,b,c){c=F.createElement(a);b&&sa(c,b);return c}function J(a,b,c){a.addEventListener(b,c,l)}function K(a,b,c){a.removeEventListener(b,c,l)}
function M(a){a.style.display="block"}function N(a){a.style.display="none"}function O(a,b,c,d,e,f){c=a.style;for(d in b)e=d,f=b[d],z(f)&&(f+="px"),c[e]=f}function ua(a){return F.defaultView.getComputedStyle(a,P)}function va(a){return a.parentNode}function s(a,b){return a.appendChild(b)}function wa(a,b){return va(a).insertBefore(b,a)}function xa(a,b){return va(a).insertBefore(b,a.nextSibling)}function ya(a){return va(a).removeChild(a)}function za(a,b){if(!b)return a.innerHTML;a.innerHTML=b}
function Aa(a,b,c,d){for(c=[];!d;)a[b]&&c[c.length-1]!==a[b]&&c.push(a[b]),a.R&&a.R.prototype?a=a.R.prototype:d=q;return c}function Ba(a,b,c){return C.klass({extend:a,init:b,prop:c})}function Q(a,b){return Ba(C.Base,a,b)}function R(a,b,c){var d=a.length;for(c=Ca(c);d--;)c[0]=a[d],b.apply(a,c);return a}function Da(a,b,c){c=Ca(c);c[0]=a[0];return b.apply(P,c)}function Ca(a){var b=[P];b.push.apply(b,a);return b}
function Ea(a){var b=k(a.type);b.controls=a.controls?q:l;b.preload=a.preload||"auto";b.autoplay=a.autoplay?q:l;b.loop=a.loop?q:l;b.src=a.dir+a.name+"."+a.suffix[0][0];return b}function Fa(a,b){if(!u["HTML"+a+"Element"])return l;a=a.toLowerCase();for(var c=k(a),d=[],e=0,f=b.length;e<f;e++)c.canPlayType(a+"/"+b[e][1])&&d.push(b[e]);return d.length?d:l}var u=window,F=document,q=!0,l=!1,P=null,m="",S={},n=void 0,T=na(),U,Ga=j("0.19,1,0.22,1"),V=1.70158,Ha,Ia,Ma,Oa,W,Pa,Qa,Ra;C={};
Date.now||(Date.now=function(){return 1*new Date});
C.util={win:u,doc:F,pageTop:w,override:x,replaceAll:ga,template:function(a,b,c){for(c in b)a=ga(a,"<%= "+c+" %>",b[c]);return a},windowOpen:function(a,b,c,d,e){e=[];for(d in c)ka(c[d])&&(c[d]===q?c[d]="yes":c[d]===l&&(c[d]="no")),e.push(d+"="+c[d]);return u.open(a,b,e.join(","))},typeCast:ea,makeQueryString:ha,parseQueryString:function(a,b,c,d,e){a=a.replace(/^[\#\?]/,m);b=a.split("&");c=b.length;for(e={};c--;)d=b[c].split("="),e[d[0]]=ea(decodeURIComponent(d[1]));return e},is:y,isObject:ia,isNumber:z,
isString:ja,isFunction:A,isBoolean:ka,isArray:la,isDefined:ma,isTouchable:na,nullFunction:B,eventPrevent:oa,eventStop:function(a){a.stopPropagation();return l},checkUserAgent:D,proxy:E,owner:pa};
C.dom={$:ba,$$:function(a){return qa(a,F)},$child:function(a,b){return b.querySelector(a)},$$child:qa,$id:function(a){return F.getElementById(a)},on:J,off:K,create:k,show:M,hide:N,hasClass:G,addClass:H,removeClass:I,toggleClass:ra,css:O,computedStyle:ua,append:s,parent:va,before:wa,after:xa,remove:ya,attr:sa,removeAttr:ta,html:za};
C.klass=function(a){function b(){for(var a=Aa(this,"_init"),b=a.length;b--;)a[b].apply(this,arguments)}var c=a.init||function(){},d=a.prop;(a=a.extend)&&C.extend(b,a);b.prototype._init=c;x(b.prototype,d);return b};C.klass.ancestors=Aa;C.extend=function(a,b){function c(){}c.prototype=b.prototype;a.prototype=new c;a.prototype.R=b};
C.Base=Ba(n,function(){this.u={}},{K:0,dispose:function(){for(var a=Aa(this,"disposeInternal"),b=0,c=a.length;b<c;b++)a[b].call(this);for(b in this.u)K.apply(P,this.u[b]);for(b in this)this[b]&&A(this[b].dispose)&&this[b].dispose();this.__proto__=P;for(b in this)this[b]=P,delete this[b];return P},contract:function(a,b,c){J(a,b,c);this.K++;this.u[this.K]=[a,b,c];return this.K},uncontract:function(a){if(a){var b=this.u[a];delete this.u[a];K(b[0],b[1],b[2])}}});
U=Q(n,{SWITCHCLICK:T?"touchstart":"click",SWITCHDOWN:T?"touchstart":"mousedown",SWITCHMOVE:T?"touchmove":"mousemove",SWITCHUP:T?"touchend":"mouseup",SWITCHOVER:T?"touchstart":"mouseover",SWITCHOUT:T?"touchend":"mouseout",LOAD:"load",CHANGE:"change",CLICK:"click",MOUSEDOWN:"mousedown",MOUSEMOVE:"mousemove",MOUSEUP:"mouseup",MOUSEOVER:"mouseover",MOUSEOUT:"mouseout",TOUCHSTART:"touchstart",TOUCHMOVE:"touchmove",TOUCHEND:"touchend",RESIZE:"resize"});C.Event=U;U=C.e=new U;
C.ease={linear:function(a,b,c,d){return c*a/d+b},inCubic:function(a,b,c,d){return c*Math.pow(a/d,3)+b},outCubic:function(a,b,c,d){return c*(Math.pow(a/d-1,3)+1)+b},inOutCubic:function(a,b,c,d){return 1>(a/=d/2)?c/2*Math.pow(a,3)+b:c/2*(Math.pow(a-2,3)+2)+b},inQuart:function(a,b,c,d){return c*Math.pow(a/d,4)+b},outQuart:function(a,b,c,d){return-c*(Math.pow(a/d-1,4)-1)+b},inOutQuart:function(a,b,c,d){return 1>(a/=d/2)?c/2*Math.pow(a,4)+b:-c/2*(Math.pow(a-2,4)-2)+b},inQuint:function(a,b,c,d){return c*
Math.pow(a/d,5)+b},outQuint:function(a,b,c,d){return c*(Math.pow(a/d-1,5)+1)+b},inOutQuint:function(a,b,c,d){return 1>(a/=d/2)?c/2*Math.pow(a,5)+b:c/2*(Math.pow(a-2,5)+2)+b},inSine:function(a,b,c,d){return c*(1-Math.cos(a/d*(Math.PI/2)))+b},outSine:function(a,b,c,d){return c*Math.sin(a/d*(Math.PI/2))+b},inOutSine:function(a,b,c,d){return c/2*(1-Math.cos(Math.PI*a/d))+b},inExpo:function(a,b,c,d){return c*Math.pow(2,10*(a/d-1))+b},outExpo:function(a,b,c,d){return c*(-Math.pow(2,-10*a/d)+1)+b},inOutExpo:function(a,
b,c,d){return 1>(a/=d/2)?c/2*Math.pow(2,10*(a-1))+b:c/2*(-Math.pow(2,-10*--a)+2)+b},inCirc:function(a,b,c,d){return c*(1-Math.sqrt(1-(a/=d)*a))+b},outCirc:function(a,b,c,d){return c*Math.sqrt(1-(a=a/d-1)*a)+b},inOutCirc:function(a,b,c,d){return 1>(a/=d/2)?c/2*(1-Math.sqrt(1-a*a))+b:c/2*(Math.sqrt(1-(a-=2)*a)+1)+b},inQuad:function(a,b,c,d){return c*(a/=d)*a+b},outQuad:function(a,b,c,d){return-c*(a/=d)*(a-2)+b},inOutQuad:function(a,b,c,d){return 1>(a/=d/2)?c/2*a*a+b:-c/2*(--a*(a-2)-1)+b},inBack:function(a,
b,c,d){return c*(a/=d)*a*((V+1)*a-V)+b},outBack:function(a,b,c,d){return c*((a=a/d-1)*a*((V+1)*a+V)+1)+b},inOutBack:function(a,b,c,d){return 1>(a/=d/2)?c/2*a*a*(((V*=1.525)+1)*a-V)+b:c/2*((a-=2)*a*(((V*=1.525)+1)*a+V)+2)+b}};
C.cssease={linear:"linear",inCubic:j("0.55,0.055,0.675,0.19"),outCubic:j("0.215,0.61,0.355,1"),inOutCubic:j("0.645,0.045,0.355,1"),inQuart:j("0.895,0.03,0.685,0.22"),outQuart:j("0.165,0.84,0.44,1"),inOutQuart:j("0.77,0,0.175,1"),inQuint:j("0.755,0.05,0.855,0.06"),outQuint:j("0.23,1,0.32,1"),inOutQuint:j("0.86,0,0.07,1"),inSine:j("0.47,0,0.745,0.715"),outSine:j("0.39,0.575,0.565,1"),inOutSine:j("0.445,0.05,0.55,0.95"),inExpo:j("0.95,0.05,0.795,0.035"),outExpo:j("0.19,1,0.22,1"),inOutExpo:j("1,0,0,1"),
inCirc:j("0.6,0.04,0.98,0.335"),outCirc:j("0.075,0.82,0.165,1"),inOutCirc:j("0.785,0.135,0.15,0.86"),inQuad:j("0.55,0.085,0.68,0.53"),outQuad:j("0.25,0.46,0.45,0.94"),inOutQuad:j("0.455,0.03,0.515,0.955"),inBack:[j("0.6,0,0.735,0.045"),j("0.6,-0.28,0.735,0.045")],outBack:[j("0.175,0.885,0.32,1"),j("0.175,0.885,0.32,1.275")],inOutBack:[j("0.68,0,0.265,1"),j("0.68,-0.55,0.265,1.55")]};var Sa=aa(["animation","webkitAnimation"],"Animation"),Ta=Sa.ya,Ua=Sa.prefix,Va=Sa.ta,Wa=Sa.va,X=Sa.sheet,Y;
Y=C.Animation=Q(function(a,b,c){c=c||S;this.p=c.onComplete||B;this.b=a;Y.id++;this.d="ciranim"+Y.id;a=c.duration||Y.duration;var d=c.ease||Ga,e,f={};for(e in b)f[e]=b[e],z(f[e])&&(f[e]+="px");this.Sa=f;f=ga(ga(ca(f),'"',m),",",";");X.insertRule("@"+Va+"keyframes "+this.d+"{to"+f+"}",X.cssRules.length);la(d)||(d=[d]);b=this.d;e=0;for(var f=d.length,g=m;e<f;e++)g+=Va+"animation:"+b+" "+a+"ms "+d[e]+" 0s 1 normal both;";X.insertRule("."+b+"{"+g+"}",X.cssRules.length);c.manual||this.start()},{ia:function(){K(this.b,
Wa+"End",this.Z);K(this.b,"animationend",this.Z)},disposeInternal:function(){this.stop()},start:function(){function a(a){var d=X.cssRules,e=d.length,f;b.ia();if("webkit"===Ua){for(;e--;)f=d[e].name||(m+d[e].selectorText).split(".")[1],f===b.d&&X.deleteRule(e);I(b.b,b.d);O(b.b,b.Sa)}b.p(a)}var b=this;b.Z=a;J(b.b,Wa+"End",a);J(b.b,"animationend",a);H(b.b,b.d)},stop:function(){var a={};a[Va+"animation-play-state"]="paused";O(this.b,a);this.ia()}});Y.id=0;Y.duration=500;Y.support=Ta;
var Xa=aa(["transitionProperty","webkitTransitionProperty"],"Transition"),Ya=Xa.ya,Za=Xa.ta,$a=Xa.va,ab=Xa.sheet,Z;
Z=C.Transition=Q(function(a,b,c){c=c||S;Z.id++;this.d="cirtrans"+Z.id;var d=[];x({},b);var e,f=c.duration||Z.duration,g=c.ease||Ga;la(g)||(g=[g]);for(e in b)d.push(e);e=0;for(var p=g.length,r=m,r=r+(Za+"transition-property:"+d.join(" ")+";"+Za+"transition-duration:"+f+"ms;");e<p;e++)r+=Za+"transition-timing-function:"+g[e]+";";ab.insertRule("."+this.d+"{"+r+"}",ab.cssRules.length);this.b=a;this.q=b;this.p=c.onComplete||B;c.manual||this.start()},{disposeInternal:function(){this.stop()},start:function(){var a=
this;a.D=function(b){a.stop();setTimeout(function(){a.p(b)},1)};J(a.b,$a+"End",a.D);J(a.b,"transitionend",a.D);H(a.b,a.d);O(a.b,a.q)},stop:function(){var a=ab.cssRules,b=a.length,c;K(this.b,$a+"End",this.D);K(this.b,"transitionend",this.D);for(I(this.b,this.d);b--;)if(c=a[b].name||(m+a[b].selectorText).split(".")[1],c===this.d){ab.deleteRule(b);break}}});Z.id=0;Z.support=Ya;Z.duration=500;
W=C.Tweener=Q(function(a,b,c,d,e){c=c||S;this.qa=a;this.q=[];for(d in b)e=b[d],e.name=d,e.Oa=e.to-e.from,e.prefix=e.prefix||m,e.suffix=e.suffix||"px",this.q.push(e);this.Y=c.duration||W.duration;this.Fa=c.ease||this.za;this.p=c.onComplete;c.manual||this.start()},{disposeInternal:function(){this.stop()},za:function(a,b,c,d){return c*(-Math.pow(2,-10*a/d)+1)+b},la:u.requestAnimationFrame?function(a){requestAnimationFrame(a)}:u.webkitRequestAnimationFrame?function(a){webkitRequestAnimationFrame(a)}:
u.mozRequestAnimationFrame?function(a){mozRequestAnimationFrame(a)}:u.oRequestAnimationFrame?function(a){oRequestAnimationFrame(a)}:u.msRequestAnimationFrame?function(a){msRequestAnimationFrame(a)}:function(a){setTimeout(a,1E3/W.Wa)},G:function(){for(var a=this,b=W.I,c,d=v(),e,f=b.length,g,p;f--;)if(c=b[f],g=c.q.length,e=d-c.Ma,e<c.Y)for(;g--;)p=c.q[g],W.ma(c.qa,p,c.Fa(e,p.from,p.Oa,c.Y));else{for(;g--;)p=c.q[g],W.ma(c.qa,p,p.to);c.p&&c.p();b.splice(f,1)}b.length?a.la(function(){a.G()}):this.stop()},
start:function(){var a=this;a.Ma=v();W.I.push(a);W.V||(W.V=1,a.la(function(){a.G()}))},stop:function(){W.I=[];clearInterval(W.V);W.V=P}});W.ma=function(a,b,c){a[b.name]=b.prefix+c+b.suffix};W.I=[];W.fps=30;W.duration=500;C.$=function(a,b,c,d,e){function f(){}f.prototype=C.$.wa;ja(a)?(b=b||F,c=b.querySelectorAll(a)):(c=[a],a=m);e=c.length;d=new f;for(d.length=e;e--;)d[e]=c[e];return d};
C.$.wa={querySelectorAll:function(a){return this[0].querySelectorAll(a)},find:function(a){return C.$(a,this.Va)},parent:function(){return C.$(va(this[0]))},on:function(){return R(this,J,arguments)},off:function(){return R(this,K,arguments)},show:function(){return R(this,M)},hide:function(){return R(this,N)},hasClass:function(){return Da(this,G,arguments)},addClass:function(){return R(this,H,arguments)},removeClass:function(){return R(this,I,arguments)},toggleClass:function(){return R(this,ra,arguments)},
css:function(){return R(this,O,arguments)},html:function(){return Da(this,za,arguments)},attr:function(){return Da(this,sa,arguments)},removeAttr:function(){return R(this,ta,arguments)},append:function(){return R(this,s,arguments)},before:function(){return Da(this,wa,arguments)},after:function(){return Da(this,xa,arguments)},remove:function(){return R(this,ya,arguments)}};
function bb(a,b,c,d,e){A(c)&&(e=c,c=P);A(d)&&!e&&(e=d,d=P);d&&(d=cb[d]);c={duration:c,ease:d,onComplete:e};if(db)b=new eb(a,b,c);else{d=C.Tweener;e=a.style;var f;a=ua(a);var g,p,r={};for(f in b)g=da(b[f]),p=a.getPropertyValue(f),p=!p||"none"===p?0:1*da(p)[2],r[f]={from:p,to:1*g[2]||0,prefix:g[1],suffix:g[3]};b=new d(e,r,c)}this.m.push(b)}var fb=C.$.wa,eb=C.Animation||{},db=eb.support,cb={};db&&C.cssease?cb=C.cssease:C.ease&&(cb=C.ease);fb.animate=function(){this.m||(this.m=[]);return R(this,bb,arguments)};
fb.stop=function(){if(this.m){for(var a=this.m.length;a--;)this.m[a].stop();this.m=P}return this};
C.HashQuery=Q(n,{typeCast:function(a){var b=ea(a);return a===b&&(a=a.match("^[\"'](.*)[\"']$"))?a[1]:b},makeHash:function(a){var b="#"+a.mode;a=a.vars;var c="?",d;for(d in a)b+=c+d+"="+ca(a[d]),c="&";return encodeURI(b)},setHash:function(a){location.hash=this.makeHash(a)},parseHash:function(a){var b=decodeURIComponent(a).split("#")[1],c,d,e;if(!b)return l;b=b.split("?");a=b[0];if(b[1]){c={};b=b[1].split("&");for(e=b.length;e--;)b[e]&&(d=b[e].split("="),c[d[0]]=this.typeCast(d[1]))}return{mode:a,vars:c}},
getHash:function(){return this.parseHash(location.hash)}});
Oa=Q(function(a){var b=this,c=a.autoplay,d=a.loop,e,f=a.el||F.body;a.preload="auto";a.autoplay=a.loop=l;switch(a.type){case "Audio":e=C.Audio(a);break;default:e=C.Video(a)}if(b.b=e){if(c){var g;g=this.contract(e,"canplay",function(){b.uncontract(g);b.play()})}d&&this.loop(q);a.oncanplay&&this.contract(e,"canplay",a.oncanplay);a.onended&&this.contract(e,"ended",a.onended);s(f,e)}},{disposeInternal:function(){ya(this.b)},getElement:h("b"),getCurrent:function(){return this.b.currentTime},getDuration:function(){return this.b.duration},
setCurrent:function(a){this.b.currentTime=a},loop:function(a){var b=this;b.r&&(b.uncontract(b.r),delete b.r);a&&(b.r=b.contract(b.b,"ended",function(){b.stop();b.play()}))},play:function(){this.b.play()},pause:function(){this.b.pause()},stop:function(){this.setCurrent(0);this.pause()}});C.Audio=function(a){a.type="audio";a.suffix=C.Audio.support;return Ea(a)};C.Audio.support=Fa("Audio",[["mp3","mpeg"],["wav","wav"],["ogg","ogg"],["m4a","mp4"]]);C.Sound=function(a){a.type="Audio";return new Oa(a)};
C.Sound.support=C.Audio.support;C.Video=function(a){a.type="video";a.suffix=C.Video.support;return Ea(a)};C.Video.support=Fa("Video",[["webm","webm"],["mp4","mp4"],["ogv","ogg"]]);C.Movie=function(a){a.type="Video";return new Oa(a)};C.Movie.support=C.Video.support;
C.Ajax=Q(function(a){a&&this.request(a)},{request:function(a){if("json"===a.dataType)return delete a.dataType,this.json(a);var b=a.url,c=a.callback||B,d=a.error||B,e=a.type||"GET",f=m,g=this.sa=new XMLHttpRequest;a.cash||(a.query||(a.query={}),a.query["cir"+v()]="0");a.query&&(f=a.query,ia(f)&&(f=encodeURI(ha(f))));g.onreadystatechange=function(){if(4==g.readyState){if(200==g.status)return c(g.responseText,g);d(g)}};"GET"===e&&(b=-1!==b.indexOf("?")?b+"&":b+"?",b+=f,f=m);g.open(e,b);"POST"===e&&g.setRequestHeader("Content-Type",
"application/x-www-form-urlencoded");g.send(f)},abort:function(){this.sa&&this.sa.abort()},json:function(a){var b=a.callback,c=a.error;a.callback=function(a){b(t(a))};a.error=function(a){c&&c(a)};this.request(a)}});C.Handle=Q(function(a){this.a=a;this.attach()},{disposeInternal:function(){this.detach()},attach:function(){this.n(J)},detach:function(){this.n(K)},n:function(a){for(var b in this.a.events)a(this.a.el,b,this.a.events[b])}});
C.Brush=Q(function(a){this.t=a.canvas;this.X=this.t.getContext("2d");this.setSize(a)},{setSize:function(a){a.width&&(this.t.width=a.width);a.height&&(this.t.height=a.height)},pigment:function(a){var b=k("canvas"),c=k("img");c.onload=function(){b.width=a.width;b.height=a.height;b.getContext("2d").drawImage(c,0,0);a.onload(b,c)};c.src=a.src;return{image:b,x:a.x||0,y:a.y||0}},pigments:function(a,b){function c(a){var c=a.onload||B;a.onload=function(a,d){c(a,d);f--;0===f&&b(g)};g[e]=d.pigment(a);f++}var d=
this,e,f=0,g={};b=b||B;for(e in a)c(a[e]);return g},draw:function(a){var b=0,c=a.length,d;for(this.X.clearRect(0,0,this.t.width,this.t.height);b<c;b++)d=a[b],this.X.drawImage(d.image,d.x,d.y)}});C.Brush.support=!!u.HTMLCanvasElement;C.Datetime=function(a){if(!a||z(a))return new Date(a);a=a.split(/[T:\-\+\/\s]/);3===a.length&&a.push(0,0,0);return new Date(1*a[0],a[1]-1,1*a[2],1*a[3],1*a[4],1*a[5])};
C.DataStore=Q(function(){this.g={}},{set:function(a,b){this.g[a]=b},get:function(a){if(a)return this.g[a];a={};for(var b in this.g)a[b]=this.g[b];return a},remove:function(a){ma(this.g[a])&&delete this.g[a]},reset:function(){this.g={}}});
Pa=Q(function(a){this.o=a.namespace?a.namespace+"-":m;this.h=u[a.type+"Storage"]},{set:function(a,b){this.h.setItem(this.o+a,ca(b))},get:function(a){var b={},c;if(a)return t(this.h.getItem(this.o+a));for(c in this.h)this.o?(a=c.split(this.o)[1])&&(b[a]=t(this.h[c])):b[c]=t(this.h[c]);return b},remove:function(a){a=this.o+a;ma(this.h.getItem(a))&&this.h.removeItem(a)},reset:function(){if(!this.o)return this.h.clear();for(var a in this.h)this.remove(a)}});
C.LocalStorage=function(a){a=a||{};a.type="local";return new Pa(a)};C.SessionStorage=function(a){a=a||{};a.type="session";return new Pa(a)};C.Deferred=Q(function(){this.A=[]},{isResolve:function(){return!this.A},resolve:function(a){if(this.isResolve())return this;var b=this.A,c=b.length,d=0;this.A=P;for(this.g=a;d<c;++d)b[d](a);return this},done:function(a){this.A?this.A.push(a):a(this.g);return this}});
C.DragFlick=Q(function(a){this.c=[];a=(this.a=a)||S;a.manual||this.attach()},{T:function(a){return a.changedTouches?a.changedTouches[0]:a},Aa:function(a){var b=this,c,d,e=l;this.c.push(this.contract(a.el,U.SWITCHDOWN,function(a){var g=b.T(a);c=g.pageX;d=g.pageY;e=q;oa(a)}),this.contract(u,U.SWITCHUP,function(f){e&&(f=b.T(f),a.callback({x:f.pageX-c,y:f.pageY-d}),e=l)}))},Ea:function(a){this.Aa({el:a.el,callback:function(b){var c=a.boundary||0,d={change:l,top:l,right:l,bottom:l,left:l,amount:b};Math.abs(b.x)>
c&&(0<b.x?d.right=q:0>b.x&&(d.left=q),d.change=q);Math.abs(b.y)>c&&(0<b.y?d.bottom=q:0>b.y&&(d.top=q),d.change=q);a.callback(d)}})},attach:function(){function a(a,c,d){b.c.push(b.contract(a,c,function(a){d(b.T(a))}))}var b=this,c=this.a,d=c.el,e=c.start||B,f=c.move||B,g=c.end||B,p=l,r=0,L=0;c.direction&&b.Ea({el:d,boundary:c.boundary,callback:c.direction});a(d,U.SWITCHDOWN,function(a){p=q;r=a.pageX;L=a.pageY;e({e:a,move:{x:r,y:L}})});a(F,U.SWITCHMOVE,function(a){p&&f({e:a,move:{x:a.pageX-r,y:a.pageY-
L}})});a(F,U.SWITCHUP,function(a){p&&(g({e:a,move:{x:a.pageX-r,y:a.pageY-L}}),p=l)})},detach:function(){for(var a=this.c.length;a--;)this.uncontract(this.c[a]);this.c=[]}});C.ExternalInterface=function(a){a=a||S;var b=Ma;a.android&&(b=Ia);return new b(a)};Ia=Ba(C.HashQuery,function(a){this.a=a},{call:function(a){this.a.android[a.mode](this.makeHash(a))},addCallback:function(a,b){var c=this;c.a.externalObj[a]=function(a){b(c.parseHash(a).vars)}},removeCallback:function(a){delete this.a.externalObj[a]}});
Ma=Ba(C.HashQuery,function(){this.v={}},{disposeInternal:function(){for(var a in this.v)this.removeCallback(a)},call:function(a){this.setHash(a)},addCallback:function(a,b){var c=this;c.v[a]=function(){var d=c.getHash();d.mode===a&&b(d.vars)};J(u,"hashchange",c.v[a])},removeCallback:function(a){K(u,"hashchange",this.v[a]);delete this.v[a]}});
C.Facebook=Q(n,{shareURL:function(a){return"https://www.facebook.com/dialog/feed?app_id="+a.app_id+"&redirect_uri="+a.redirect_uri+ha({link:a.link,picture:a.picture,name:a.name,caption:a.caption,description:a.description})}});
C.FPS=Q(function(a){this.J=this.S=a.criterion;this.ha=this.aa(this.J);this.Ga=a.enterframe;a.manual||this.start()},{O:0,M:0,fa:0,disposeInternal:function(){this.stop()},getCriterion:h("J"),getSurver:h("S"),getFrameTime:h("ha"),enter:function(){this.Ga({criterion:this.J,surver:this.S})},start:function(){this.O=v();this.fa=setInterval(this.G,this.ha,this)},G:function(a){a.M=v();a.S=a.aa(a.M-a.O);a.O=a.M;a.enter()},aa:function(a){return Math.round(1E3/a)},stop:function(){clearInterval(this.fa)}});
C.ImgLoad=Q(function(a){this.oa=a.srcs;this.Q=this.oa.length;this.da=[];this.c=[];this.N=a.onload||B;this.Ia=a.onprogress||B;a.manual||this.start()},{L:0,P:0,Ca:function(){this.L++;this.P=this.L/this.Q;this.Ia(this.P);if(this.L>=this.Q){for(var a=this.c.length;a--;)this.uncontract(this.c[a]);this.c=[];this.N(this.da)}},start:function(){function a(){b.Ca()}if(!this.Ta){this.Ta=q;for(var b=this,c,d=b.Q;d--;)c=k("img"),c.src=b.oa[d],b.c.push(b.contract(c,U.LOAD,a)),b.da.push(c)}},getProgress:h("P")});
C.WindowLoad=Q(function(a){a&&this.N(a.onload)},{N:function(a){var b=this,c;c=b.contract(u,U.LOAD,function(){b.uncontract(c);a()})}});
Qa=C.Mobile=Q(n,{getZoom:function(){return F.body.clientWidth/u.innerWidth},isAndroid:function(a){return D(/Android/i,a)},isIOS:function(a){return D(/iPhone|iPad|iPod/i,a)},isWindows:function(a){return D(/IEMobile/i,a)},isFBAPP:function(a){return D(/FBAN/,a)},isMobile:function(){return this.isAndroid()||this.isIOS()||this.isWindows()||this.isFBAPP()},killScroll:function(a){this.F||(a||w(),this.F=this.contract(F,U.TOUCHMOVE,oa))},revivalScroll:function(a){this.F&&(a||w(),this.uncontract(this.F),delete this.F)},
hideAddress:function(){function a(){0===u.pageYOffset&&w()}function b(){setTimeout(a,100)}this.contract(u,U.LOAD,b,l);this.contract(u,"orientationchange",b,l)}});C.mobile=new Qa;Ra=C.PC=Q(n,{B:function(a,b){a||w();O(F.body,{overflow:b})},killScroll:function(a){this.B(a,"hidden")},revivalScroll:function(a){this.B(a,"auto")}});C.pc=new Ra;
C.Orientation=Q(function(a){this.a=a;this.c=[];this.ja={portrait:q,landscape:l};this.ca={portrait:l,landscape:q};this.attach()},{get:function(){return z(u.orientation)?90!==Math.abs(u.orientation)?this.ja:this.ca:u.innerWidth<u.innerHeight?this.ja:this.ca},fire:function(){if(this.get().portrait)return this.a.portrait();this.a.landscape()},attach:function(){var a=E(this,this.fire);this.c.push(this.contract(u,U.LOAD,a),this.contract(u,"orientationchange",a),this.contract(u,U.RESIZE,a))},detach:function(){for(var a=
this.c.length;a--;)this.uncontract(this.c[a]);this.c=[]}});C.Orientation.support="onorientationchange"in u;
C.Modal=Q(function(a){this.a=a=a||S;var b={display:"none",position:"absolute"};this.B=new (T?Qa:Ra);this.c=[];this.i=k("div",{"class":"cir-modal-bg"});O(this.i,x({zIndex:9998,top:0,left:0,width:"100%",height:"300%"},b));s(F.body,this.i);this.f=k("div",{"class":"cir-modal-content"});O(this.f,x({zindex:9999,top:"50%",left:"50%"},b));s(F.body,this.f);a.manual||this.open()},{W:function(){for(var a=this.c.length;a--;)this.uncontract(this.c[a]);this.c=[]},disposeInternal:function(){this.close();ya(this.i);
ya(this.f)},open:function(a){this.B.killScroll(!0);O(this.i,{top:F.body.scrollTop});M(this.i);this.inner(a)},close:function(){this.W();za(this.f,"");N(this.f);N(this.i);this.B.revivalScroll(!0)},inner:function(a){this.W();a=a||this.a.html;za(this.f,a);M(this.f);a=ua(this.f);O(this.f,{"margin-top":F.body.scrollTop-da(a.height)[2]/2,"margin-left":-(da(a.width)[2]/2)});this.a.bgClose&&this.contract(this.i,U.CLICK,E(this,this.close));if(this.a.closeSelector){a=qa(this.a.closeSelector,this.f);for(var b=
a.length;b--;)this.c.push(this.contract(a[b],U.CLICK,E(this,this.close)))}}});Ha=Q(function(a){this.a=a;this.attach()},{attach:function(){this.detach();this.Ba=this.contract(u,this.a.e,this.a.callback)},detach:function(){this.uncontract(this.Ba)}});C.DeviceOrientation=function(a){a.e="deviceorientation";return Ha(a)};C.DeviceOrientation.support="ondeviceorientation"in u;C.DeviceMotion=function(a){a.e="devicemotion";return Ha(a)};C.DeviceMotion.support="ondevicemotion"in u;var gb,jb;
C.DeviceOrientation.support?(gb=C.DeviceOrientation,jb=function(a){return a}):C.DeviceMotion.support&&(gb=C.DeviceMotion,jb=function(a){return a.rotationRate});C.DeviceShake=Q(function(a){this.na=new gb;this.a=a;this.attach()},{Na:{x:"gamma",y:"beta",z:"alpha"},attach:function(){var a=this,b,c=a.Na[a.a.direction];a.na.attach(function(d){d=jb(d);b||(b=d);Math.abs(d[c]-b[c])>a.a.limit&&(b=P,a.a.callback(d),setTimeout(function(){},a.a.waittime))})},detach:function(){this.na.detach()}});
C.DeviceShake.support=gb?q:l;C.FontImg=Q(function(a){a=a||S;this.Ka=a.type?a.type+"_":m;this.pa=a.tag||"span"},{make:function(a){a=(m+a).split(m);for(var b=m,c=a.length;c--;)b="<"+this.pa+' class="font_'+this.Ka+a[c]+'"></'+this.pa+">"+b;return b}});
C.Observer=Q(function(){this.k={}},{on:function(a,b){this.k[a]||(this.k[a]=[]);this.k[a].push(b)},one:function(a,b){function c(e){b(e);d.off(a,c)}var d=this;d.on(a,c)},off:function(a,b){if(!b)return delete this.k[a];var c=this.k[a],d;if(c)for(d=c.length;d--;)if(b===c[d])return c.splice(d,1),0===c.length&&delete this.k[a],q;return l},fire:function(a,b){var c=this.k[a],d,e;if(c)for(e=c.length;e--;)(d=c[e])&&d(b)}});
C.PreRender=Q(function(a){this.j=a.els;this.ba=a.guesslimit||30;this.Ja=a.onrendered;this.ga=a.looptime||100;this.Ha=this.ga+(a.loopblur||20);a.manual||this.start()},{disposeInternal:function(){clearInterval(this.r)},start:function(){var a,b=this,c=v();for(a=b.j.length;a--;)M(b.j[a]);b.r=setInterval(function(){var a=v(),e=a-c;c=a;if(e<b.Ha&&(b.ba--,1>b.ba)){clearInterval(b.r);for(a=b.j.length;a--;)N(b.j[a]);b.Ja()}},this.ga,this)}});
C.Route=Q(function(a){this.a=a;a.manual||this.start()},{start:function(){this.fire(this.a.target)},fire:function(a){var b;if(this.a.noregex&&this.a.action[a])return this.a.action[a](a);for(b in this.a.action)if(a.match(b))this.a.action[b](b)}});
C.ScriptLoad=Q(function(a){this.j=[];a&&this.requests(a)},{requests:function(a,b){function c(c){var f=a[c].callback;a[c].callback=function(a){f(a);e--;0===e&&b(d.j)};d.request(a[c])}for(var d=this,e=0,f=a.length;e<f;e++)c(e)},request:function(a){var b=this,c=k("script"),d;c.src=a.src;s(F.body,c);b.j.push(c);a.callback&&(d=b.contract(c,U.LOAD,function(){b.uncontract(d);a.callback.apply(this,arguments)}))}});function $(a){return kb?lb.getResponseHeader(a):l}
function mb(a){var b=new XMLHttpRequest;b.onload=function(){a(b)};b.open("HEAD",location.href+"?update"+v()+"=1");b.send(P);return b}var lb,kb=l;
C.ServerMeta=Q(function(a){a=a||S;var b=a.callback||B;lb?b(lb):lb=mb(function(){kb=q;b(lb)})},{date:function(a){return mb(function(b){a(b.getResponseHeader("Date"))})},connection:function(){return $("Connection")},contentLength:function(){return $("Content-Length")},lastModified:function(){return $("Last-Modified")},server:function(){return $("Server")},contentType:function(){return $("Content-Type")},acceptRanges:function(){return $("Accept-Ranges")},keepAlive:function(){return $("Keep-Alive")}});
C.Surrogate=Q(function(a){this.Da=a.delay;this.C=a.callback},{disposeInternal:function(){this.clear()},request:function(a){this.s=a;this.clear();this.U=setTimeout(this.flush,this.Da,this)},flush:function(a){a=a||this;a.C(a.s)},clear:function(){clearInterval(this.U)}});
C.Throttle=Q(function(a){this.La=a.waittime;this.C=a.callback},{disposeInternal:function(){this.unlock()},request:function(a){var b=this;b.ea?b.s=a:(b.C(a),b.lock(),b.U=setTimeout(function(){b.s&&(b.C(b.s),b.s=P);b.unlock()},b.La,b))},lock:function(){this.ea=q},unlock:function(a){a=a||this;a.ea=l;clearInterval(a.U)}});
C.Timer=function(a){function b(){fa=v();var a=f-(fa-Ka)/1E3;0>a&&(a=0);Na=c(a);r(Na);fa>La?(hb.stop(),L()):ib=setTimeout(b,p)}function c(a){var b;b=(m+a).split(".");a=b[0];b=b[1]?b[1]:m;a=d({xa:a,ua:Ja.Qa});b=d({xa:b,ua:Ja.Pa,Ra:q});return a+"."+b}function d(a){var b=m+a.xa,c=a.ua,d=c-b.length;return!a.Ra?-1<d?e(d,0)+b:e(c,9):0<d?b+e(d,0):b.slice(0,c)}function e(a,b){var c=m;for(b=m+b;0<a;)c+=b,a--;return c}var f=a.limit,g=1E3*f,p=1E3*a.interval,r=a.onupdate,L=a.ontimeup,Ja;a=a.template.split(".");
Ja={Qa:a[0].length,Pa:a[1].length};var Ka=0,fa=0,La=g,Na=c(f),ib,hb={getLimit:function(){return f},getTime:function(){return Na},getProgress:function(){return 1-(La-fa)/g},setUpdate:function(a){r=a},setTimeup:function(a){L=a},countDown:function(){fa=Ka=v();La=Ka+g;b()},stop:function(){clearInterval(ib)}};return hb};
C.Twitter=Q(n,{shareURL:function(a){var b=a.name,c=a.hash,b=b?" \u300c"+b+"\u300d":m,c=c?" "+c:m;return"https://twitter.com/intent/tweet?"+ha({url:a.redirect_uri,text:(a.caption||m)+b+c})}});C.XML=Q(function(a){this.b=k("div");za(this.b,a.data)},{$:function(a){return this.b.querySelector(a)},$$:function(a){return qa(a,this.b)}});
C.Model=Q(function(a){a=a||S;var b,c=a.defaults||this.defaults||{},d=a.events||this.events;this.ra=a.validate||this.validate||{};this.l=a.store||this.store||new C.DataStore;this.w=new C.Observer;for(b in c)this.set(b,c[b]);for(b in d)this.on(b,d[b])},{H:function(a,b,c){this.w.fire(a,this.l.get());b&&this.w.fire(a+":"+b,c)},set:function(a,b){if(this.ra[a]&&!this.ra[a](a,b))return this.H("fail",a,b);this.ka=this.l.get();this.l.set(a,b);this.H(U.CHANGE,a,b)},prev:function(a){return!a?this.ka:this.ka[a]},
get:function(a){return this.l.get(a)},remove:function(a){if(a){var b=this.l.get(a),c=this.l.remove(a);this.H("remove",a,b);return c}},reset:function(){this.l.reset();this.H("reset")},on:function(a,b){var c=E(this,b);this.w.on(a,c);return c},off:function(a,b){this.w.off(a,b)},fire:function(a,b){return this.w.fire(a,b)}});
C.View=Q(function(a){a=a?pa(this,a):pa(this,this,{});this.el=C.$(a.el||this.el||k("div"));this.attach();a.init&&this.init()},{disposeInternal:function(){this.n("off")},n:function(a){var b,c,d,e=this.events;for(b in e)for(c in d="me"===b?this.el:this.el.find(b),e[b])d[a](c,this[e[b][c]])},attach:function(){this.n("on")},detach:function(){this.n("off")}});
C.Validate=Q(function(a){a=a||{};this.Ua=a.level;pa(this,this,a)},{displayError:function(a,b){b="Validate Error:"+a+" is "+b+".";switch(this.Xa){case "log":return console.log(b),l;case "error":throw Error(b);case "off":return l;default:return console.warn(b),l}},isObject:function(a,b){if(ia(b))return q;this.displayError(a,"Object")},isNumber:function(a,b){if(z(b))return q;this.displayError(a,"Number")},isString:function(a,b){if(ja(b))return q;this.displayError(a,"String")},isFunction:function(a,b){if(A(b))return q;
this.displayError(a,"Function")},isBoolean:function(a,b){if(ka(b))return q;this.displayError(a,"Boolean")},isArray:function(a,b){if(la(b))return q;this.displayError(a,"Array")}});C.validate=new C.Validate;C.beer=function(){console.log("\n   \u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000,. -\u2010\uff1d=\uff64\uff64\n\u3000\u3000\u3000\u3000\u3000\u3000 \u3000\u3000\u3000\u3000\u3000\u3000 ,. =\uff1d=\uff64\uff64\u3000\uff4f \u3000 \u25cbo. \u3000i \u3000\u3000 \u3000\u3000 :::\u30c8\uff64\n\u3000\u3000\u3000\u3000\u3000\u3000 \u3000\u3000\u3000\u3000\u3000_,/ \u3000 \u3000 \u3000\uff40\u30fe\u00b4\u00b4`\u30fd\u3001\u3000\uff9f\u3000.\uff4c \u3000 \u3000\u3000 \u3000:::\uff84\uff64\uff3cYEAHHHHHHHHHHHHHHHHHHHH!\n\u3000\u3000\u3000\u3000\u3000 \u3000\u3000\u3000\u3000\u3000 // \u3000\u3000\u3000\u3000 .::::/\u3000\u3000:::::!=\uff1d=l\u3000\u3000\u3000\u3000\u3000 :::|\uff7d.\u3000',\n\u3000 \u3000 \u3000 \u3000 \u3000\u3000 \u3000 /./ \u3000 \u3000 \u3000 .::::/\u3000\u3000 ::::l\u3000\u3000\u3000 |\u3000 __ ..... _::::|} \u30fd l-\uff64\n  \u3000 \u3000 \u3000 \u3000 \u3000 ,\uff68\uff78 ,'..__ \u3000\u3000\u3000.::::/ \u3000\u3000 ::::l\u3000\u3000\u3000 :l '\u00b4\u3000\u3000\u3000\u3000\uff40)'\uff40\u30fd \u30fe;\uff3c\n\u3000\u3000\u3000\u3000\u3000 \u3000\uff0f::{\uff9e\u3000\u30fd\u3001 \uff40`\u4e36\uff64;/\u2010\u2010- \uff64::::l\u3000\u3000 \u3000 `'::\u252c\u2010--\uff1c_ \u3000 } ./;:::::\uff3c\n\u3000\u3000\u3000\u3000\u3000\uff0f::::::::!\u3000\u3000 ,\uff1e---\u2010'\uff9e\uff70- ...__)\uff72\u3000,.\u3000-\u2010\u2010-\uff64\uff84\uff64\u3000\u3000 |l::\u30fd \uff0f;';';';';::::\uff3c\n  \u3000 \u3000 \uff0f|::::::;';';'\uff3c\uff0f\uff5d\u3000\uff08\u30fd\u3001\u3000\u3000_/| \u3000 (\u00b4\u3000\u3000\u3000 _,.\uff68!::\u30fd. \u3000\u30fe\uff70'\u00b4;';';';';';';';';:: /\u30fd\u3001\n")};
}());
