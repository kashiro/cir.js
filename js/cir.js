var C={};
(function(){var d=C;(function(a,b){function c(a,b){return Object.prototype.toString.call(b)==="[object "+a+"]"?!0:!1}function e(a){return c("Object",a)}function g(a,b,c){var d;if(e(b)){for(d in b)a.setAttribute(d,b[d]);return!0}return c||""===c?a.setAttribute(b,c):a.getAttribute(b)}function f(a,b){for(var c=a.className,c=c?c.split(" "):[],e=0,d=c.length;e<d;e++)if(b&&b===c[e])return!0;return!1}function h(a,b){var c="";if(f(a,b))return!1;a.className&&(c=" ");a.className=a.className+c+b;return!0}function i(a,
b){var c,e=[],d,g;if(!f(a,b))return!1;c=a.className.split(" ");d=0;for(g=c.length;d<g;d++)b!==c[d]&&e.push(c[d]);a.className=e.join(" ");return!0}function l(a,b){var c=b.querySelectorAll(a),e=[],d,f;d=0;for(f=c.length;d<f;d++)e[d]=c[d];return e}function j(a){var b=""+a;return b.match("^{.*}$")?JSON.parse(b):b.match("^[0-9.]+$")?1*b:"true"===b?!0:"false"===b?!1:a}Date.now||(Date.now=function(){return+new Date});d.utility={win:a,doc:b,body:b.body,$:function(a){return b.querySelector(a)},$$:function(a){return l(a,
b)},$child:function(a,b){return b.querySelector(a)},$$child:l,$id:function(a){return b.getElementById(a)},pageTop:function(){a.scrollTo(0,1)},onEvent:function(a,b,c){a.addEventListener(b,c)},offEvent:function(a,b,c){a.removeEventListener(b,c)},makeElement:function(a,c){var e=b.createElement(a);c&&g(e,c);return e},showElement:function(a){a.style.display="block"},hideElement:function(a){a.style.display="none"},opacityElement:function(a,b){a.style.opacity=b},hasClass:f,addClass:h,removeClass:i,toggleClass:function(a,
b){return f(a,b)?i(a,b):h(a,b)},styleElement:function(a,b){var c=a.style,e,d,f;for(e in b){d=e;f=b[e];isFinite(f)&&(f=f+"px");c[d]=f}},computedStyleElement:function(a){return b.defaultView.getComputedStyle(a,null)},appendElement:function(a,b){a.appendChild(b)},attrElement:g,innerHTML:function(a,b){if(b)a.innerHTML=b;else return a.innerHTML},override:function(a,b){for(var c in b)a[c]=b[c];return a},replaceAll:function(a,b,c){return a.split(b).join(c)},windowOpen:function(b,c){return a.open(b,c)},typeCast:j,
makeQueryString:function(a){var b="",c="",e;for(e in a)if(a[e]){c=c+(b+e+"="+encodeURIComponent(a[e]));b="&"}return c},parseQueryString:function(a){var a=a.replace(/^\#/,"").replace(/^\?/,""),a=a.split("&"),b,c,e={};for(b=a.length;b--;){c=a[b].split("=");e[c[0]]=j(decodeURIComponent(c[1]))}return e},is:c,isObject:e,isNumber:function(a){return c("Number",a)},isString:function(a){return c("String",a)},isFunction:function(a){return c("Function",a)},isBoolean:function(a){return c("Boolean",a)},isTouchDevice:function(){return"ontouchstart"in
a},nullFunction:function(){return null}}})(window,document);d.klass=function(a){var b=d.utility.override,c=a.init||function(){},e=a.properties;(a=a.extend)&&d.extend(c,a);b(c.prototype,e);return c};d.extend=function(a,b){function c(){this.init=a}c.prototype=b.prototype;a.prototype=new c;var e=a.prototype;e._superclass=b;e._super=function(){var a=this._prevctor,a=a?a.prototype._superclass:this._prevctor=b;a.apply(this,arguments)}};d.selector=function(a,b){var c=d.selector,e=(b||document).querySelectorAll(a),
g,f=0,h=e.length;g=function(){};g.prototype=c.methods;c=new g;c.length=h;for(c.selector=a;f<h;f++)c[f]=e[f];return c};(function(){function a(a,b,e){for(var d=0,l=a.length,e=c(e);d<l;d++)e[0]=a[d],b.apply(null,e);return a}function b(a,b,e){e=c(e);e[0]=a[0];return b.apply(null,e)}function c(a){var b=[null];b.push.apply(b,a);return b}var e=d.utility;d.selector.methods={_forexe:a,_exe:b,_argary:c,querySelectorAll:function(a){return this[0].querySelectorAll(a)},find:function(a){return d.selector(a,this)},
on:function(){return a(this,e.onEvent,arguments)},off:function(){return a(this,e.offEvent,arguments)},show:function(){return a(this,e.showElement)},hide:function(){return a(this,e.hideElement)},opacity:function(){return a(this,e.opacityElement,arguments)},hasClass:function(){return b(this,e.hasClass,arguments)},addClass:function(){return a(this,e.addClass,arguments)},removeClass:function(){return a(this,e.removeClass,arguments)},toggleClass:function(){return a(this,e.toggleClass,arguments)},css:function(){return a(this,
e.styleElement,arguments)},html:function(){return b(this,e.innerHTML,arguments)},attr:function(){return b(this,e.attrElement,arguments)},append:function(){return a(this,e.appendElement,arguments)}}})();(function(){function a(a,e,i,l,j){var n=d.Tweener,m=a.style,k,a=c.computedStyleElement(a),p={};for(k in e){var q=p,r=k,s=b(a.getPropertyValue(k)),t=b(e[k]),o;o=e[k];o=(o=""+o)||"";o=o.match(/^[0-9\.]+(.*)/)[1]||"px";q[r]={from:s,to:t,suffix:o}}new n(m,p,{duration:i,easing:g[l],onComplete:j})}function b(a){return 1*
(""+a||"").match(/^[0-9\.]+/)[0]||0}var c=d.utility,e=d.selector.methods,g={};d.easing&&(Easing=d.easing);e=c.override(e,{animate:function(){return e._forexe(this,a,arguments)}})})();d.easing={easeInCubic:function(a,b,c,e){return c*Math.pow(a/e,3)+b},easeOutCubic:function(a,b,c,e){return c*(Math.pow(a/e-1,3)+1)+b},easeInOutCubic:function(a,b,c,e){return 1>(a/=e/2)?c/2*Math.pow(a,3)+b:c/2*(Math.pow(a-2,3)+2)+b},easeInQuart:function(a,b,c,e){return c*Math.pow(a/e,4)+b},easeOutQuart:function(a,b,c,e){return-c*
(Math.pow(a/e-1,4)-1)+b},easeInOutQuart:function(a,b,c,e){return 1>(a/=e/2)?c/2*Math.pow(a,4)+b:-c/2*(Math.pow(a-2,4)-2)+b},easeInQuint:function(a,b,c,e){return c*Math.pow(a/e,5)+b},easeOutQuint:function(a,b,c,e){return c*(Math.pow(a/e-1,5)+1)+b},easeInOutQuint:function(a,b,c,e){return 1>(a/=e/2)?c/2*Math.pow(a,5)+b:c/2*(Math.pow(a-2,5)+2)+b},easeInSine:function(a,b,c,e){return c*(1-Math.cos(a/e*(Math.PI/2)))+b},easeOutSine:function(a,b,c,e){return c*Math.sin(a/e*(Math.PI/2))+b},easeInOutSine:function(a,
b,c,e){return c/2*(1-Math.cos(Math.PI*a/e))+b},easeInExpo:function(a,b,c,e){return c*Math.pow(2,10*(a/e-1))+b},easeOutExpo:function(a,b,c,e){return c*(-Math.pow(2,-10*a/e)+1)+b},easeInOutExpo:function(a,b,c,e){return 1>(a/=e/2)?c/2*Math.pow(2,10*(a-1))+b:c/2*(-Math.pow(2,-10*--a)+2)+b},easeInCirc:function(a,b,c,e){return c*(1-Math.sqrt(1-(a/=e)*a))+b},easeOutCirc:function(a,b,c,e){return c*Math.sqrt(1-(a=a/e-1)*a)+b},easeInOutCirc:function(a,b,c,e){return 1>(a/=e/2)?c/2*(1-Math.sqrt(1-a*a))+b:c/2*
(Math.sqrt(1-(a-=2)*a)+1)+b},easeInQuad:function(a,b,c,e){return c*(a/=e)*a+b},easeOutQuad:function(a,b,c,e){return-c*(a/=e)*(a-2)+b},easeInOutQuad:function(a,b,c,e){return 1>(a/=e/2)?c/2*a*a+b:-c/2*(--a*(a-2)-1)+b}};(function(){var a=d.utility.isTouchDevice();d.Event=d.klass({init:function(a){a=a||{};if(a.single&&d.Event.instance)return d.Event.instance;a.single&&(d.Event.instance=this)},properties:{utility:d.utility,switchclick:a?"touchstart":"click",switchdown:a?"touchstart":"mousedown",switchmove:a?
"touchmove":"mousemove",switchup:a?"touchend":"mouseup",load:"load",hashchange:"hashchange",click:"click",mousedown:"mousedown",mousemove:"mousemove",mouseup:"mouseup",touchstart:"touchstart",touchmove:"touchmove",touchend:"touchend",orientationchange:"orientationchange",resize:"resize"}});d.Event.instance=null})();d.HashController=d.klass({properties:{utility:d.utility,typeCast:function(a){var b=this.utility.typeCast(a);return a===b&&(a=a.match("^[\"'](.*)[\"']$"))?a[1]:b},makeHash:function(a){var b=
"#"+a.mode,a=a.vars,c="?",e;for(e in a)b+=c+e+"="+JSON.stringify(a[e]),c="&";return encodeURI(b)},setHash:function(a){location.hash=this.makeHash(a);return!0},parseHash:function(a){var b,c,e,d;b=decodeURIComponent(a).split("#")[1];if(!b)return!1;b=b.split("?");a=b[0];if(b[1]){c={};b=b[1].split("&");for(d=b.length;d--;)b[d]&&(e=b[d].split("="),c[e[0]]=this.typeCast(e[1]))}return{mode:a,vars:c}},getHash:function(){return this.parseHash(location.hash)}}});d.Ajax=d.klass({init:function(){this.xhr=new XMLHttpRequest},
properties:{utility:d.utility,request:function(a){var b=a.url,c=a.callback,e=a.error,d=a.type||"GET",f="",h;a.cash||(a.query||(a.query={}),a.query["ajaxcash"+Date.now()]="0");a.query&&(f=this.utility.makeQueryString(a.query),f=encodeURI(f));h=this.xhr=new XMLHttpRequest;h.onreadystatechange=function(){if(h.readyState!=4)return false;h.status==200?c(h.responseText):e&&e(h)};h.open(d,b);"POST"===d&&h.setRequestHeader("Content-Type","application/x-www-form-urlencoded");h.send(f)},abort:function(){this.xhr.abort()},
getJSON:function(a){this.request({type:a.type,url:a.url,callback:function(b){a.callback(JSON.parse(b))},error:function(b){a.error&&a.error(b)}})}}});d.Bind=d.klass({properties:{utility:d.utility,add:function(a){return this.exe(a,!0)},remove:function(a){return this.exe(a,!1)},exe:function(a,b){var c=this.utility,e=a.element,d=a.events,c=b?c.onEvent:c.offEvent,f;for(f in d)c(e,f,d[f]);return a}}});(function(){var a=d.utility.makeElement;d.CanvasImage=function(b){var c=a("canvas"),e=a("img"),d=b.src,
f=b.width,h=b.height,i=b.onload;e.onload=function(){c.width=f;c.height=h;c.getContext("2d").drawImage(e,0,0);i(c,e)};e.src=d;return c}})();d.CanvasRender=d.klass({init:function(a){this.canvas=a.canvas;this.ctx=this.canvas.getContext("2d");this.canvasWidth=this.canvas.width;this.canvasHeight=this.canvas.height;this.setSize(a)},properties:{setSize:function(a){a.width&&(this.canvas.width=this.canvasWidth=a.width);a.height&&(this.canvas.height=this.canvasHeight=a.height)},draw:function(a){this.ctx.clearRect(0,
0,this.canvasWidth,this.canvasHeight);for(var b=0,c=a.length,e;b<c;b++)e=a[b],this.ctx.drawImage(e.image,e.x,e.y)}}});d.DataStore=d.klass({init:function(a){a=a||{};if(a.single&&d.DataStore.instance)return d.DataStore.instance;this.data={};a.single&&(d.DataStore.instance=this)},properties:{set:function(a,b){this.data[a]=b;return!0},get:function(a){var b=this.data;if(a)return b[a];var a={},c;for(c in b)a[c]=b[c];return a},remove:function(a){var b=this.data;if(!b[a])return!1;delete b[a];return!0},reset:function(){this.data=
{};return!0}}});d.DataStore.instance=null;d.DragFlick=d.klass({init:function(a){a&&this.bind(a)},properties:{utility:d.utility,_event:new d.Event,_getEventTarget:function(a){return a.changedTouches?a.changedTouches[0]:a},amount:function(a){var b=this,c,e,d=!1;b.utility.onEvent(a.element,b._event.switchdown,function(a){var h=b._getEventTarget(a);c=h.pageX;e=h.pageY;d=!0;a.preventDefault()});b.utility.onEvent(b.utility.win,b._event.switchup,function(f){d&&(f=b._getEventTarget(f),a.callback({x:f.pageX-
c,y:f.pageY-e}),d=!1)})},direction:function(a){this.amount({element:a.element,callback:function(b){var c=a.boundary||0,e={change:!1,top:!1,right:!1,bottom:!1,left:!1,amount:b};Math.abs(b.x)>c&&(0<b.x?e.right=!0:0>b.x&&(e.left=!0),e.change=!0);Math.abs(b.y)>c&&(0<b.y?e.bottom=!0:0>b.y&&(e.top=!0),e.change=!0);a.callback(e)}})},bind:function(a){function b(a,b,e){f.onEvent(a,b,function(a){a=c._getEventTarget(a);e(a)})}var c=this,e=a.element,d=this._event,f=this.utility,h=a.start||f.nullFunction,i=a.move||
f.nullFunction,l=a.end||f.nullFunction,j=!1,n=0,m=0;a.direction&&c.direction({element:e,boundary:a.boundary,callback:a.direction});b(e,d.switchdown,function(a){j=!0;n=a.pageX;m=a.pageY;h({e:a,move:{x:n,y:m}})});b(f.doc,d.switchmove,function(a){j&&i({e:a,move:{x:a.pageX-n,y:a.pageY-m}})});b(f.doc,d.switchup,function(a){j&&(l({e:a,move:{x:a.pageX-n,y:a.pageY-m}}),j=!1)})}}});d.ExternalInterface=function(a){var a=a||{},b;if(a.single&&d.ExternalInterface.instance)return d.ExternalInterface.instance;b=
a.android?new d.ExternalInterface.Android(a):new d.ExternalInterface.IOS(a);a.single&&(d.ExternalInterface.instance=b);return b};d.ExternalInterface.instance=null;d.ExternalInterface.Android=d.klass({init:function(a){a=a||{};this.android=a.android;this.externalObj=a.externalObj;this.externalObj||(d.EXTERNAL_ANDROID={},this.externalObj=d.EXTERNAL_ANDROID)},properties:{hashCtrl:new d.HashController,call:function(a){this.android[a.mode](this.hashCtrl.makeHash(a))},addCallback:function(a,b){var c=this;
c.externalObj[a]=function(a){a=c.hashCtrl.parseHash(a);return b(a.vars)}},removeCallback:function(a){delete this.externalObj[a]}}});d.ExternalInterface.IOS=d.klass({init:function(){this.ios={}},properties:{utility:d.utility,_event:new d.Event,hashCtrl:new d.HashController,call:function(a){this.hashCtrl.setHash(a)},addCallback:function(a,b){var c=this;c.ios[a]=function(){var e=c.hashCtrl.getHash();return e.mode===a?(b(e.vars),!0):!1};this.utility.onEvent(this.utility.win,this._event.hashchange,this.ios[a])},
removeCallback:function(a){this.utility.offEvent(this.utility.win,this._event.hashchange,this.ios[a]);delete this.ios[a]}}});d.Facebook=d.klass({properties:{utility:d.utility,shareURLBase:"https://www.facebook.com/dialog/feed?",getShareURL:function(a){var b=this.shareURLBase+"app_id="+a.app_id+"&redirect_uri="+a.redirect_uri;return b+=this.utility.makeQueryString({link:a.link,picture:a.picture,name:a.name,caption:a.caption,description:a.description})}}});(function(){function a(c){c.nexttime<=Date.now()&&
(b(c),c.nexttime=c.nowtime+c.msecFrame);1===c.loopid&&g(function(){a(c)})}function b(a){a.nowtime=Date.now();a.surver=Math.round(1E3/(a.nowtime-a.prevtime));a.prevtime=a.nowtime;a.enter()}var c,e=d.utility.win,g=e.requestAnimationFrame||e.webkitRequestAnimationFrame||e.mozRequestAnimationFrame||e.oRequestAnimationFrame||e.msRequestAnimationFrame||!1;d.FPS=d.klass({init:function(a){a=a||{};a.criterion||(a.criterion=20);if(a.single&&c)return c;this.surver=this.criterion=a.criterion;this.enterframe=
a.enterframe;this.msecFrame=Math.round(1E3/this.criterion);this.prevtime=this.nowtime=this.nexttime=this.loopid=0;a.single&&(c=this)},properties:{getCriterion:function(){return this.criterion},getSurver:function(){return this.surver},getFrameTime:function(){return this.msecFrame},enter:function(){this.enterframe({criterion:this.criterion,surver:this.surver})},start:function(){this.prevtime=Date.now();this.nexttime=this.prevtime+this.msecFrame;g?(this.loopid=1,a(this)):this.loopid=setInterval(b,this.msecFrame,
this)},stop:function(){clearInterval(this.loopid);this.loopid=0}}})})();d.ImgLoad=d.klass({init:function(a){var b=this;b.srcs=a.srcs;b.srccount=b.srcs.length;b.loadedsrcs=[];b.onload=a.onload||b.utility.nullFunction;b.onprogress=a.onprogress||b.utility.nullFunction;b.loadcount=0;b.progress=0;b.check=function(){b.loadcount++;b.progress=b.loadcount/b.srccount;b.onprogress(b.progress);if(b.loadcount>=b.srccount)b.onload(b.loadedsrcs)}},properties:{utility:d.utility,_event:new d.Event,start:function(){var a,
b,c;b=0;for(c=this.srccount;b<c;b++)a=this.utility.makeElement("img"),a.src=this.srcs[b],this.utility.onEvent(a,this._event.load,this.check),this.loadedsrcs.push(a)},getProgress:function(){return this.progress}}});d.Loading=d.klass({init:function(a){if(a&&a.onload)this.onload(a.onload)},properties:{utility:d.utility,_event:new d.Event,onload:function(a){this.utility.onEvent(this.utility.win,this._event.load,a)}}});d.LocalStorage=d.klass({init:function(a){a=a||{};if(a.single&&d.LocalStorage.instance)return d.LocalStorage.instance;
a.single&&(d.LocalStorage.instance=this)},properties:{utility:d.utility,storage:d.utility.win.localStorage,set:function(a,b){this.storage.setItem(a,JSON.stringify(b));return!0},get:function(a){if(a)return JSON.parse(this.storage.getItem(a));var a={},b;for(b in this.storage)a[b]=JSON.parse(this.storage[b]);return a},remove:function(a){if(!this.storage.getItem(a))return!1;this.storage.removeItem(a);return!0},reset:function(){this.storage.clear();return!0}}});d.LocalStorage.instance=null;(function(){function a(a){a.preventDefault();
return!1}function b(a,b){a=a?a:g;return a.match(b)?!0:!1}function c(){0===win.pageYOffset&&this.utility.pageTop()}function e(){setTimeout(c,100)}var g=navigator.userAgent;d.Mobile=d.klass({properties:{utility:d.utility,_event:new d.Event,isAndroid:function(a){return b(a,/Android/i)},isIOS:function(a){return b(a,/iPhone|iPad|iPod/i)},isWindows:function(a){return b(a,/IEMobile/i)},isFBAPP:function(a){return b(a,/FBAN/)},isMobile:function(){return this.isAndroid()||this.isIOS()||this.isWindows()||this.isFBAPP()},
killScroll:function(b){b||this.utility.pageTop();this.utility.onEvent(this.utility.doc,this._event.touchmove,a)},revivalScroll:function(b){b||this.utility.pageTop();this.utility.offEvent(this.utility.doc,this._event.touchmove,a)},hideAddress:function(){this.utility.onEvent(this.utility.win,this._event.load,e,!1);this.utility.onEvent(this.utility.win,this._event.orientationchange,e,!1)},orientationCheck:function(){return 90!==Math.abs(this.utility.win.orientation)&&this.utility.win.innerWidth<this.utility.win.innerHeight?
{portrait:!0,landscape:!1}:{portrait:!1,landscape:!0}},orientationChange:function(a){function b(a,c){a(d.utility.win,d._event.load,c);a(d.utility.win,d._event.orientationchange,c);a(d.utility.win,d._event.resize,c)}function c(){e();b(d.utility.offEvent,c)}function e(){if(d.orientationCheck().portrait)return a.portrait(),!0;a.landscape()}var d=this;a.immediately&&e();if(a.one)return b(d.utility.onEvent,c),function(){b(d.utility.offEvent,c)};b(d.utility.onEvent,e);return function(){b(d.utility.offEvent,
e)}}}})})();d.NumberImage=d.klass({init:function(a){a=a||{type:""};this.type=a.type},properties:{make:function(a){var a=(""+a).split(""),b="",c;for(c=a.length;c--;)b='<span class="num_'+(this.type+a[c])+'">&nbsp;</span>'+b;return b}}});d.Observer=d.klass({init:function(a){a=a||{single:!1};if(a.single&&d.Observer.instance)return d.Observer.instance;this.observed={};a.single&&(d.Observer.instance=this)},properties:{getObserved:function(){return this.observed},on:function(a,b){var c=this.observed;c[a]||
(c[a]=[]);c[a].push(b)},one:function(a,b){var c=this,d=function(g){b(g);c.off(a,d)};c.on(a,d)},off:function(a,b){var c=this.observed;if(!b)return delete c[a],!0;var d=c[a],g;if(!d)return!1;for(g=d.length;g--;)if(b===d[g])return d.splice(g,1),0===d.length&&delete c[a],!0;return!1},fire:function(a,b){var c=this.observed[a],d,g;if(!c)return!1;for(g=c.length;g--;)(d=c[g])&&d(b);return!0}}});d.Observer.instance=null;d.PreRender=d.klass({init:function(a){a=a||{};a.loopblur||(a.loopblur=20);this.elements=
a.elements||[];this.guesslimit=a.guesslimit||30;this.onrendered=a.onrendered||this.utility.nullFunction;this.looptime=a.looptime||100;this.loopblur=this.looptime+a.loopblur;this.loopid=this.prevtime=null},properties:{utility:d.utility,start:function(){var a;for(a=this.elements.length;a--;)this.utility.showElement(this.elements[a]);this.prevtime=Date.now();this.loopid=setInterval(function(a){var c=Date.now(),d=c-a.prevtime;a.prevtime=c;if(d<a.loopblur&&(a.guesslimit--,1>a.guesslimit)){clearInterval(a.loopid);
for(c=a.elements.length;c--;)a.utility.hideElement(a.elements[c]);a.onrendered()}},this.looptime,this)}}});d.ScriptLoad=d.klass({properties:{utility:d.utility,_event:new d.Event,requests:function(a){for(var b=0,c=a.length;b<c;b++)this.request(a[b])},request:function(a){var b=this.utility.makeElement("script");b.type="text/javascript";b.src=a.src;this.utility.body.appendChild(b);if(a.callback)this.utility.onEvent(b,this._event.load,a.callback)}}});(function(){function a(a){return e?c.getResponseHeader(a):
!1}function b(a){var b=new XMLHttpRequest;b.onload=function(){a(b)};b.open("HEAD",location.href+"?update"+Date.now()+"=1");b.send(null);return b}var c,e=!1;d.ServerMeta=d.klass({init:function(a){var a=a||{},d=a.callback||this.utility.nullFunction;c?d(c):c=b(function(){e=!0;d(c)})},properties:{utility:d.utility,date:function(a){return b(function(b){b=new Date(b.getResponseHeader("Date"));a(b)})},connection:function(){return a("Connection")},contentLength:function(){return a("Content-Length")},lastModified:function(){return a("Last-Modified")},
server:function(){return a("Server")},contentType:function(){return a("Content-Type")},acceptRanges:function(){return a("Accept-Ranges")},keepAlive:function(){return a("Keep-Alive")}}})})();d.SessionStorage=d.klass({init:function(a){a=a||{};if(a.single&&d.SessionStorage.instance)return d.SessionStorage.instance;a.single&&(d.SessionStorage.instance=this)},properties:{utility:d.utility,storage:d.utility.win.sessionStorage,set:function(a,b){this.storage.setItem(a,JSON.stringify(b));return!0},get:function(a){if(a)return JSON.parse(this.storage.getItem(a));
var a={},b;for(b in this.storage)a[b]=JSON.parse(this.storage[b]);return a},remove:function(a){if(!this.storage.getItem(a))return!1;this.storage.removeItem(a);return!0},reset:function(){this.storage.clear();return!0}}});d.SessionStorage.instance=null;d.Surrogate=d.klass({init:function(a){this.delay=a.delay;this.callback=a.callback;this.waitid=this.args=null},properties:{request:function(a){this.args=a;this.clear();this.waitid=setTimeout(this.flush,this.delay,this)},flush:function(a){a=a||this;a.callback(a.args)},
clear:function(){clearInterval(this.waitid)}}});d.Throttle=d.klass({init:function(a){this.waittime=a.waittime;this.callback=a.callback;this.locked=!1;this.waitid=null},properties:{request:function(a){if(this.locked)return!1;this.callback(a);this.lock();this.waitid=setTimeout(this.unlock,this.waittime,this)},lock:function(){this.locked=!0},unlock:function(a){a=a||this;a.locked=!1;clearInterval(a.waitid)}}});d.Timer=function(a){function b(){k=Date.now();var a=f-(k-m)/1E3;0>a&&(a=0);q=c(a);l(q);if(k>
p)return s.stop(),j(),!0;r=setTimeout(b,i);return!1}function c(a){var b;b=(""+a).split(".");a=b[0];b=b[1]?b[1]:"";a=d({num:a,digit:n.integer});b=d({num:b,digit:n.few,isFew:!0});return a+"."+b}function d(a){var b=""+a.num,c=a.digit,e=c-b.length;return!a.isFew?-1<e?g(e,0)+b:g(c,9):0<e?b+g(e,0):b.slice(0,c)}function g(a,b){for(var c="",b=""+b;0<a;)c+=b,a--;return c}var f=a.limit,h=1E3*f,i=1E3*a.interval,l=a.onupdate,j=a.ontimeup,n=function(a){a=a.split(".");return{integer:a[0].length,few:a[1].length}}(a.template),
m=0,k=0,p=h,q=c(f),r,s={getLimit:function(){return f},getTime:function(){return q},getProgress:function(){return 1-(p-k)/h},setUpdate:function(a){l=a},setTimeup:function(a){j=a},countDown:function(){k=m=Date.now();p=m+h;b()},stop:function(){clearInterval(r)}};return s};d.Tweener=d.klass({init:function(a,b,c){var e,c=c||{};this.target=a;this.property=[];for(e in b)a=b[e],a.name=e,a.distance=a.to-a.from,a.prefix=a.prefix||"",a.suffix=a.suffix||"px",this.property.push(a);this.duration=c.duration||d.Tweener.Duration;
this.easing=c.easing||this._easing;this.onComplete=c.onComplete;this.begin=Date.now();d.Tweener.Items.push(this);d.Tweener.timerId||this.start()},properties:{_easing:function(a,b,c,d){return c*a/d+b},setProp:function(a,b,c){a[b.name]=b.prefix+c+b.suffix},loop:function(){for(var a=d.Tweener.Items,b,c=Date.now(),e,g=a.length,f,h,i;g--;)if(b=a[g],h=b.property.length,e=c-b.begin,e<b.duration)for(f=0;f<h;f++)i=b.property[f],this.setProp(b.target,i,b.easing(e,i.from,i.distance,b.duration));else{for(f=0;f<
h;f++)i=b.property[f],this.setProp(b.target,i,i.to);if(b.onComplete)b.onComplete();a.splice(g,1)}a.length||this.end()},start:function(){var a=this;d.Tweener.timerId=setInterval(function(){a.loop()},1E3/d.Tweener.FPS)},end:function(){d.Tweener.Items=[];clearInterval(d.Tweener.timerId);d.Tweener.timerId=null}}});d.Tweener.timerId=null;d.Tweener.Items=[];d.Tweener.FPS=30;d.Tweener.Duration=500;d.Twitter=d.klass({properties:{utility:d.utility,shareURLBase:"https://twitter.com/intent/tweet?",getShareURL:function(a){var b=
a.redirect_uri,c=a.caption||"",d=a.name||"",a=a.hash||"",g=this.shareURLBase;return g+=this.utility.makeQueryString({url:b,text:c+(d?" \u300c"+d+"\u300d":"")+(a?" "+a:"")})}}});d.XML=d.klass({init:function(a){this.element=this.utility.makeElement("div");this.data={};a&&a.data&&this.setData(a.data)},properties:{utility:d.utility,getData:function(){return this.data},setData:function(a){this.data=this.element.innerHTML=a},$:function(a){return this.utility.$child(a,this.element)},$$:function(a){return this.utility.$$child(a,
this.element)}}})})();
