var Global={};(function(e,c){Global.utility={root:e,doc:c,$:function(a){return document.querySelector(a)},$$:function(a){for(var a=document.querySelectorAll(a),b=[],d=0,c=a.length;d<c;d++)b[d]=a[d];return b},showElement:function(a){a.style.display="block"},hideElement:function(a){a.style.display="none"},override:function(a,b){for(var d in b)a[d]=b[d];return a},replaceAll:function(a,b,d){a=a.split(b);return a=a.join(d)}}})(window,document);
Global.DataStore=function(){var e={},c={setData:function(a,b){e[a]=b;return!0},getData:function(a){if(a)return e[a];var a={},b;for(b in e)a[b]=e[b];return a},resetData:function(){e={};return!0}};Global.DataStore=function(){return c};return c};Global.Event=function(e){e||(e={isMobile:function(){return!1}});var c={click:"click",mousedown:"mousedown",mousemove:"mousemove",mouseup:"mouseup"};e.isMobile()&&(c.click="touchstart",c.mousedown="touchstart",c.mousemove="touchmove",c.mouseup="touchend");return c};
Global.ExternalInterface=function(e){var c=!1,a=null,b=null,d=new Global.HashController;e||(e={});e.android?(c=!0,a=e.android,Global.EXTERNAL={}):b={};return function(){var e;e=c?{call:function(b){a[b.mode](d.makeHash(b))},addCallback:function(a,b){Global.EXTERNAL[a]=function(a){a=d.parseHash(a);return b(a.vars)}},removeCallback:function(a){delete Global.EXTERNAL[a]}}:{call:function(a){d.setHash(a)},addCallback:function(a,c){b[a]=function(){var b=d.getHash();if(b.mode===a){c(b.vars);return true}return false};
window.addEventListener("hashchange",b[a])},removeCallback:function(a){window.removeEventListener("hashchange",b[a]);delete b[a]}};e.isAndroid=function(){return c};return e}()};
Global.HashController=function(){var e={makeHash:function(c){var a="#"+c.mode,c=c.vars,b="?",d;for(d in c)a+=b+d+"="+JSON.stringify(c[d]),b="&";return encodeURI(a)},setHash:function(c){location.hash=e.makeHash(c);return!0},parseHash:function(c){var a,b=null;a=decodeURI(c).split("#")[1];if(!a)return!1;a=a.split("?");c=a[0];if(a[1]){b={};a=a[1].split("&");for(var d,e=0,f=a.length;e<f;e++)a[e]&&(d=a[e].split("="),b[d[0]]=d[1].match("^{.*}$")?JSON.parse(d[1]):d[1].match("^[0-9.]+$")?1*d[1]:"true"===d[1]?
!0:"false"===d[1]?!1:d[1].match("^[\"'](.*)[\"']$")?d[1].match("^[\"'](.*)[\"']$")[1]:d[1]);return{mode:c,vars:b}}return{mode:c}},getHash:function(){return e.parseHash(location.hash)}};return e};
Global.Mobile=function(){function e(){0===a.pageYOffset&&a.scrollTo(0,1)}function c(){setTimeout(e,100)}var a=Global.utility.root,b=Global.utility.doc,d=navigator.userAgent,g={isAndroid:function(a){a=a?a:d;return a.match(/Android/i)?!0:!1},isIOS:function(a){a=a?a:d;return a.match(/iPhone|iPad|iPod/i)?!0:!1},isWindows:function(a){a=a?a:d;return a.match(/IEMobile/i)?!0:!1},isMobile:function(){return g.isAndroid()||g.isIOS()||g.isWindows()},killScroll:function(){b.addEventListener("touchmove",function(a){a.preventDefault();
return!1})},hideAddress:function(){a.addEventListener("load",c,!1);a.onorientationchange=c}};return g};Global.NumberImage=function(e){var c=e.type;c||(c="");return{make:function(a){for(var a=(""+a).split(""),b="",d=0,e=a.length;d<e;d++)b+='<span class="num_'+c+a[d]+'">&nbsp;</span>';return b}}};
Global.Observer=function(){var e={},c={getObserved:function(){return e},add:function(a,b){e[a]||(e[a]=[]);e[a].push(b)},adds:function(a){for(var b in a)c.add(b,a[b])},remove:function(a,b){if(!b)return delete e[a],!0;var d=e[a];if(!d)return!1;for(var c=0,f=d.length;c<f;c++)if(b===d[c])return d.splice(c,1),0===d.length&&delete e[a],!0;return!1},fire:function(a,b){var d=e[a],c;if(!d)return!1;for(var f=0,h=d.length;f<h;f++)(c=d[f])&&c(b);return!0}};return c};
