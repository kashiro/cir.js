 /*! cir.js v0.8.2 | (c) 2013 Atsushi Mizoue. */(function() {
    function f(a) {
        return function() {
            return this[a]
        }
    }
    function j() {
        return Date.now()
    }
    function k() {
        l.scrollTo(0, 1)
    }
    function aa(a, b) {
        for (var c in b)
            a[c] = b[c];
        return a
    }
    function ba(a) {
        var b = "" + a;
        return b.match("^{.*}$") ? m(b) : b.match("^[0-9.]+$") ? 1 * b : "true" === b ? n : "false" === b ? q : a
    }
    function ca(a, b, c) {
        return a.split(b).join(c)
    }
    function r(a) {
        var b = "", c = "", d;
        for (d in a)
            a[d] && (c += b + d + "=" + encodeURIComponent(a[d]), b = "&");
        return c
    }
    function s(a, b) {
        return Object.prototype.toString.call(b) === "[object " + a + "]" ? n : q
    }
    function da(a) {
        return s("Object", a)
    }
    function ea(a) {
        return s("Number", a)
    }
    function fa(a) {
        return s("String", a)
    }
    function ga(a) {
        return s("Function", a)
    }
    function ha(a) {
        return s("Array", a)
    }
    function ia() {
        return "ontouchstart" in l
    }
    function t() {
        return u
    }
    function ja(a) {
        a.preventDefault();
        return q
    }
    function v(a, b) {
        b = b ? b : navigator.userAgent;
        return b.match(a) ? n : q
    }
    function m(a) {
        return l.JSON.parse(a)
    }
    function ka(a) {
        return l.JSON.stringify(a)
    }
    function la(a) {
        return w.querySelector(a)
    }
    function ma(a, b) {
        var c = b.querySelectorAll(a), d = [];
        d.push.apply(d, c);
        return d
    }
    function y(a, b) {
        for (var c = a.className, c = c ? c.split(" ") : [], d = c.length; d--; )
            if (b === c[d])
                return n;
        return q
    }
    function z(a, b) {
        var c = "", d = a.className;
        if (y(a, b))
            return q;
        d && (c = " ");
        a.className = d + c + b;
        return n
    }
    function A(a, b) {
        var c, d = [], e;
        if (!y(a, b))
            return q;
        c = a.className.split(" ");
        for (e = c.length; e--; )
            b !== c[e] && d.push(c[e]);
        a.className = d.join(" ");
        return n
    }
    function na(a, b) {
        return y(a, b) ? A(a, b) : z(a, b)
    }
    function oa(a, b, c) {
        var d;
        if (da(b)) {
            for (d in b)
                a.setAttribute(d, b[d]);
            return n
        }
        return c || "" === c ? a.setAttribute(b, c) : a.getAttribute(b)
    }
    function pa(a, b) {
        a.removeAttribute(b)
    }
    function B(a, b) {
        var c = w.createElement(a);
        b && oa(c, b);
        return c
    }
    function D(a, b, c) {
        a.addEventListener(b, c, q)
    }
    function E(a, b, c) {
        a.removeEventListener(b, c, q)
    }
    function qa(a) {
        a.style.display = "block"
    }
    function ra(a) {
        a.style.display = "none"
    }
    function sa(a, b) {
        a.style.opacity = b
    }
    function F(a, b) {
        var c = a.style, d, e, g;
        for (d in b)
            e = d, g = b[d], ea(g) && (g += "px"), c[e] = g
    }
    function ta(a) {
        return w.defaultView.getComputedStyle(a, u)
    }
    function G(a, b) {
        return a.appendChild(b)
    }
    function ua(a) {
        return a.parentNode
    }
    function va(a) {
        return ua(a).removeChild(a)
    }
    function wa(a, b) {
        if (!b)
            return a.innerHTML;
        a.innerHTML = b
    }
    function H(a) {
        if (!l["HTML" + a.type + "Element"])
            return q;
        var b = a.type.toLowerCase(), c = B(b);
        a = a.suffix;
        for (var d = [], e = 0, g = a.length; e < g; e++)
            c.canPlayType(b + "/" + a[e][1]) && d.push(a[e]);
        return !d.length ? q : d
    }
    var l = window, w = document, n = !0, q = !1, u = null, J = ia(), K, L, xa = "orientationchange", M = 1.70158, N, O = C = {};
    Date.now || (Date.now = function() {
        return +new Date
    });
    O.utility = {win: l,doc: w,pageTop: k,override: aa,replaceAll: ca,windowOpen: function(a, b) {
            return l.open(a, b)
        },typeCast: ba,makeQueryString: r,parseQueryString: function(a) {
            a = a.replace(/^\#/, "").replace(/^\?/, "");
            a = a.split("&");
            for (var b = a.length, c, d = {}; b--; )
                c = a[b].split("="), d[c[0]] = ba(decodeURIComponent(c[1]));
            return d
        },is: s,isObject: da,isNumber: ea,isString: fa,isFunction: ga,isBoolean: function(a) {
            return s("Boolean", a)
        },isArray: ha,isTouchDevice: ia,nullFunction: t,eventPrevent: ja,checkUserAgent: v};
    O.dom = {$: la,$$: function(a) {
            return ma(a, w)
        },$child: function(a, b) {
            return b.querySelector(a)
        },$$child: ma,$id: function(a) {
            return w.getElementById(a)
        },on: D,off: E,create: B,show: qa,hide: ra,opacity: sa,hasClass: y,addClass: z,removeClass: A,toggleClass: na,css: F,computedStyle: ta,append: G,parent: ua,remove: va,attr: oa,removeAttr: pa,html: wa};
    K = O.klass = function(a) {
        var b = a.init || function() {
        }, c = a.properties;
        (a = a.extend) && O.extend(b, a);
        aa(b.prototype, c);
        return b
    };
    O.extend = function(a, b) {
        function c() {
            this.init = a
        }
        c.prototype = b.prototype;
        a.prototype = new c;
        var d = a.prototype;
        d._superclass = b;
        d._super = function() {
            var a = this.ya, a = a ? a.prototype.Sa : this.ya = b;
            a.apply(this, arguments)
        }
    };
    N = O.Base = K({init: function(a) {
            a = a || {};
            this.k = {};
            this.za = a.single
        },properties: {G: 0,m: function(a) {
                if (this.za) {
                    if (O[a].o)
                        return O[a].o;
                    O[a].o = this
                }
                return this
            },dispose: function() {
                var a;
                if (this.k)
                    for (a in this.k)
                        E.apply(u, this.k[a]);
                for (a in this)
                    delete this[a];
                return this.__proto__ = u
            },contract: function(a, b, c) {
                D(a, b, c);
                this.G++;
                this.k[this.G] = [a, b, c];
                return this.G
            },uncontract: function(a) {
                var b = this.k[a];
                delete this.k[a];
                E(b[0], b[1], b[2])
            },b: function() {
                this.__proto__.__proto__.dispose.call(this)
            }}});
    L = K({extend: N,init: function(a) {
            this._super(a);
            return this.m("Event")
        },properties: {switchclick: J ? "touchstart" : "click",switchdown: J ? "touchstart" : "mousedown",switchmove: J ? "touchmove" : "mousemove",switchup: J ? "touchend" : "mouseup",load: "load",change: "change",click: "click",mousedown: "mousedown",mousemove: "mousemove",mouseup: "mouseup",touchstart: "touchstart",touchmove: "touchmove",touchend: "touchend",resize: "resize"}});
    O.Event = L;
    L = O.event = new L;
    O.ease = {linear: function(a, b, c, d) {
            return c * a / d + b
        },inCubic: function(a, b, c, d) {
            return c * Math.pow(a / d, 3) + b
        },outCubic: function(a, b, c, d) {
            return c * (Math.pow(a / d - 1, 3) + 1) + b
        },inOutCubic: function(a, b, c, d) {
            return 1 > (a /= d / 2) ? c / 2 * Math.pow(a, 3) + b : c / 2 * (Math.pow(a - 2, 3) + 2) + b
        },inQuart: function(a, b, c, d) {
            return c * Math.pow(a / d, 4) + b
        },outQuart: function(a, b, c, d) {
            return -c * (Math.pow(a / d - 1, 4) - 1) + b
        },inOutQuart: function(a, b, c, d) {
            return 1 > (a /= d / 2) ? c / 2 * Math.pow(a, 4) + b : -c / 2 * (Math.pow(a - 2, 4) - 2) + b
        },inQuint: function(a, b, c, d) {
            return c *
            Math.pow(a / d, 5) + b
        },outQuint: function(a, b, c, d) {
            return c * (Math.pow(a / d - 1, 5) + 1) + b
        },inOutQuint: function(a, b, c, d) {
            return 1 > (a /= d / 2) ? c / 2 * Math.pow(a, 5) + b : c / 2 * (Math.pow(a - 2, 5) + 2) + b
        },inSine: function(a, b, c, d) {
            return c * (1 - Math.cos(a / d * (Math.PI / 2))) + b
        },outSine: function(a, b, c, d) {
            return c * Math.sin(a / d * (Math.PI / 2)) + b
        },inOutSine: function(a, b, c, d) {
            return c / 2 * (1 - Math.cos(Math.PI * a / d)) + b
        },inExpo: function(a, b, c, d) {
            return c * Math.pow(2, 10 * (a / d - 1)) + b
        },outExpo: function(a, b, c, d) {
            return c * (-Math.pow(2, -10 * a / d) + 1) + b
        },inOutExpo: function(a,
        b, c, d) {
            return 1 > (a /= d / 2) ? c / 2 * Math.pow(2, 10 * (a - 1)) + b : c / 2 * (-Math.pow(2, -10 * --a) + 2) + b
        },inCirc: function(a, b, c, d) {
            return c * (1 - Math.sqrt(1 - (a /= d) * a)) + b
        },outCirc: function(a, b, c, d) {
            return c * Math.sqrt(1 - (a = a / d - 1) * a) + b
        },inOutCirc: function(a, b, c, d) {
            return 1 > (a /= d / 2) ? c / 2 * (1 - Math.sqrt(1 - a * a)) + b : c / 2 * (Math.sqrt(1 - (a -= 2) * a) + 1) + b
        },inQuad: function(a, b, c, d) {
            return c * (a /= d) * a + b
        },outQuad: function(a, b, c, d) {
            return -c * (a /= d) * (a - 2) + b
        },inOutQuad: function(a, b, c, d) {
            return 1 > (a /= d / 2) ? c / 2 * a * a + b : -c / 2 * (--a * (a - 2) - 1) + b
        },inBack: function(a,
        b, c, d) {
            return c * (a /= d) * a * ((M + 1) * a - M) + b
        },outBack: function(a, b, c, d) {
            return c * ((a = a / d - 1) * a * ((M + 1) * a + M) + 1) + b
        },inOutBack: function(a, b, c, d) {
            return 1 > (a /= d / 2) ? c / 2 * a * a * (((M *= 1.525) + 1) * a - M) + b : c / 2 * ((a -= 2) * a * (((M *= 1.525) + 1) * a + M) + 2) + b
        }};
    O.cssease = {linear: "linear",inCubic: "cubic-bezier(0.550, 0.055, 0.675, 0.190)",outCubic: "cubic-bezier(0.215, 0.610, 0.355, 1.000)",inOutCubic: "cubic-bezier(0.645, 0.045, 0.355, 1.000)",inQuart: "cubic-bezier(0.895, 0.030, 0.685, 0.220)",outQuart: "cubic-bezier(0.165, 0.840, 0.440, 1.000)",inOutQuart: "cubic-bezier(0.770, 0.000, 0.175, 1.000)",inQuint: "cubic-bezier(0.755, 0.050, 0.855, 0.060)",outQuint: "cubic-bezier(0.230, 1.000, 0.320, 1.000)",inOutQuint: "cubic-bezier(0.860, 0.000, 0.070, 1.000)",inSine: "cubic-bezier(0.470, 0.000, 0.745, 0.715)",
        outSine: "cubic-bezier(0.390, 0.575, 0.565, 1.000)",inOutSine: "cubic-bezier(0.445, 0.050, 0.550, 0.950)",inExpo: "cubic-bezier(0.950, 0.050, 0.795, 0.035)",outExpo: "cubic-bezier(0.190, 1.000, 0.220, 1.000)",inOutExpo: "cubic-bezier(1.000, 0.000, 0.000, 1.000)",inCirc: "cubic-bezier(0.600, 0.040, 0.980, 0.335)",outCirc: "cubic-bezier(0.075, 0.820, 0.165, 1.000)",inOutCirc: "cubic-bezier(0.785, 0.135, 0.150, 0.860)",inQuad: "cubic-bezier(0.550, 0.085, 0.680, 0.530)",outQuad: "cubic-bezier(0.250, 0.460, 0.450, 0.940)",
        inOutQuad: "cubic-bezier(0.455, 0.030, 0.515, 0.955)",inBack: ["cubic-bezier(0.600, 0, 0.735, 0.045)", "cubic-bezier(0.600, -0.280, 0.735, 0.045)"],outBack: ["cubic-bezier(0.175, 0.885, 0.320, 1)", "cubic-bezier(0.175, 0.885, 0.320, 1.275)"],inOutBack: ["cubic-bezier(0.680, 0, 0.265, 1)", "cubic-bezier(0.680, -0.550, 0.265, 1.550)"]};
    for (var ya = ["animation", "webkitAnimation"], za = B("p"), Aa = q, P, Q = "", Ba = "animation", Fa = ya.length, Ha, R, T; Fa--; )
        if (void 0 !== za.style[ya[Fa]]) {
            Aa = n;
            if (P = ya[Fa].match(/^(.*?)animation$/i)[1])
                Q = "-" + P.toLowerCase() + "-", Ba = P + "Animation";
            Ha = G(la("head"), B("style", {type: "text/css"}));
            R = Ha.sheet;
            break
        }
    T = O.Animation = K({extend: N,init: function(a, b, c) {
            c = c || {};
            this.D = c.onComplete || t;
            this.a = a;
            T.id++;
            this.c = "ciranim" + T.id;
            a = c.duration || T.duration;
            var d = c.ease || "ease", e, g = {};
            for (e in b)
                g[e] = b[e], ea(g[e]) && (g[e] += "px");
            this.h = g;
            g = ca(ca(ka(g), '"', ""), ",", ";");
            R.insertRule("@" + Q + "keyframes " + this.c + "{to" + g + "}", R.cssRules.length);
            ha(d) || (d = [d]);
            b = this.c;
            e = Q;
            for (var g = 0, h = d.length, p = ""; g < h; g++)
                p += e + "animation:" + b + " " + a + "ms " + d[g] + " 0s 1 normal both;";
            R.insertRule("." + b + "{" + p + "}", R.cssRules.length);
            c.manual ||
            this.start()
        },properties: {Y: function() {
                E(this.a, Ba + "End", this.end);
                E(this.a, "animationend", this.end)
            },dispose: function() {
                this.stop();
                this.b()
            },start: function() {
                function a(a) {
                    var d = R.cssRules, e = d.length, g;
                    b.Y();
                    if ("webkit" === P) {
                        for (; e--; )
                            g = d[e].name || ("" + d[e].selectorText).split(".")[1], g === b.c && R.deleteRule(e);
                        A(b.a, b.c);
                        F(b.a, b.h)
                    }
                    b.D(a)
                }
                var b = this;
                b.end = a;
                D(b.a, Ba + "End", a);
                D(b.a, "animationend", a);
                z(b.a, b.c)
            },stop: function() {
                var a = {};
                a[Q + "animation-play-state"] = "paused";
                F(this.a, a);
                this.Y()
            }}});
    T.id = 0;
    T.duration = 500;
    T.support = Aa;
    for (var Ia = ["webkitTransitionProperty", "transitionProperty"], Ja = B("p"), Ka = q, La, Ma = "", Na = "transition", Oa = Ia.length, Pa, U, V; Oa--; )
        if (void 0 !== Ja.style[Ia[Oa]]) {
            Ka = n;
            if (La = Ia[Oa].match(/^(.*?)transitionproperty$/i)[1])
                Ma = "-" + La.toLowerCase() + "-", Na = La.toLowerCase() + "Transition";
            Pa = G(la("head"), B("style", {type: "text/css"}));
            U = Pa.sheet;
            break
        }
    V = O.Transition = K({extend: N,init: function(a, b, c) {
            c = c || {};
            c.onComplete = c.onComplete || t;
            V.id++;
            this.c = "cirtrans" + V.id;
            var d = [];
            aa({}, b);
            var e, g = c.duration || V.duration, h = c.ease || "ease";
            ha(h) || (h = [h]);
            for (e in b)
                d.push(e);
            e = Ma;
            for (var p = 0, x = h.length, d = "" + (e + "transition-property:" + d.join(" ") + ";" + e + "transition-duration:" + g + "ms;"); p < x; p++)
                d += e + "transition-timing-function:" + h[p] + ";";
            U.insertRule("." + this.c + "{" + d + "}", U.cssRules.length);
            this.a = a;
            this.h = b;
            this.Oa = c;
            c.manual || this.start()
        },properties: {dispose: function() {
                this.stop();
                this.b()
            },start: function() {
                var a = this;
                a.t = function(b) {
                    a.stop();
                    setTimeout(function() {
                        a.Oa.onComplete(b)
                    }, 1)
                };
                D(a.a, Na + "End", a.t);
                D(a.a, "transitionend", a.t);
                z(a.a, a.c);
                F(a.a, a.h)
            },stop: function() {
                var a = U.cssRules, b = a.length, c;
                E(this.a, Na + "End", this.t);
                E(this.a, "transitionend", this.t);
                for (A(this.a, this.c); b--; )
                    if (c = a[b].name || ("" + a[b].selectorText).split(".")[1], c === this.c) {
                        U.deleteRule(b);
                        break
                    }
            }}});
    V.id = 0;
    V.support = Ka;
    V.duration = 500;
    var W = O.Tweener = K({extend: N,init: function(a, b, c) {
            var d;
            c = c || {};
            this.u = a;
            this.h = [];
            for (d in b)
                a = b[d], a.name = d, a.Ga = a.to - a.from, a.prefix = a.prefix || "", a.suffix = a.suffix || "px", this.h.push(a);
            this.W = c.duration || W.duration;
            this.Ha = c.ease || this.qa;
            this.D = c.onComplete;
            c.manual || this.start()
        },properties: {dispose: function() {
                this.stop();
                this.b()
            },qa: function(a, b, c, d) {
                return c * (-Math.pow(2, -10 * a / d) + 1) + b
            },Z: l.requestAnimationFrame ? function(a) {
                requestAnimationFrame(a)
            } : l.webkitRequestAnimationFrame ? function(a) {
                webkitRequestAnimationFrame(a)
            } :
            l.mozRequestAnimationFrame ? function(a) {
                mozRequestAnimationFrame(a)
            } : l.oRequestAnimationFrame ? function(a) {
                oRequestAnimationFrame(a)
            } : l.msRequestAnimationFrame ? function(a) {
                msRequestAnimationFrame(a)
            } : function(a) {
                setTimeout(a, 1E3 / W.Ta)
            },loop: function() {
                for (var a = this, b = W.F, c, d = j(), e, g = b.length, h; g--; )
                    if (c = b[g], i = c.h.length, e = d - c.Da, e < c.W)
                        for (; i--; )
                            h = c.h[i], W.aa(c.u, h, c.Ha(e, h.from, h.Ga, c.W));
                    else {
                        for (; i--; )
                            h = c.h[i], W.aa(c.u, h, h.to);
                        c.D && c.D();
                        b.splice(g, 1)
                    }
                if (b.length)
                    return a.Z(function() {
                        a.loop()
                    }),
                    n;
                this.stop()
            },start: function() {
                var a = this;
                a.Da = j();
                W.F.push(a);
                W.Q || (W.Q = 1, a.Z(function() {
                    a.loop()
                }))
            },stop: function() {
                W.F = [];
                clearInterval(W.Q);
                W.Q = u
            }}});
    W.aa = function(a, b, c) {
        a[b.name] = b.prefix + c + b.suffix
    };
    W.F = [];
    W.fps = 30;
    W.duration = 500;
    O.$ = function(a, b) {
        var c, d, e;
        b = b || w;
        fa(a) ? c = b.querySelectorAll(a) : (c = [a], a = "");
        e = c.length;
        d = function() {
        };
        d.prototype = O.$.ia;
        d = new d;
        d.length = e;
        for (d.xa = b; e--; )
            d[e] = c[e];
        return d
    };
    function X(a, b, c) {
        var d = a.length;
        for (c = Qa(c); d--; )
            c[0] = a[d], b.apply(a, c);
        return a
    }
    function Y(a, b, c) {
        c = Qa(c);
        c[0] = a[0];
        return b.apply(u, c)
    }
    function Qa(a) {
        var b = [u];
        b.push.apply(b, a);
        return b
    }
    O.$.ia = {ra: X,Ra: Y,Qa: Qa,querySelectorAll: function(a) {
            return this[0].querySelectorAll(a)
        },find: function(a) {
            return O.$(a, this.xa)
        },parent: function() {
            return O.$(ua(this[0]))
        },on: function() {
            return X(this, D, arguments)
        },off: function() {
            return X(this, E, arguments)
        },show: function() {
            return X(this, qa)
        },hide: function() {
            return X(this, ra)
        },opacity: function() {
            return X(this, sa, arguments)
        },hasClass: function() {
            return Y(this, y, arguments)
        },addClass: function() {
            return X(this, z, arguments)
        },removeClass: function() {
            return X(this,
            A, arguments)
        },toggleClass: function() {
            return X(this, na, arguments)
        },css: function() {
            return X(this, F, arguments)
        },html: function() {
            return Y(this, wa, arguments)
        },attr: function() {
            return Y(this, oa, arguments)
        },removeAttr: function() {
            return X(this, pa, arguments)
        },append: function() {
            return X(this, G, arguments)
        },remove: function() {
            return X(this, va, arguments)
        }};
    function Ra(a, b, c, d, e) {
        ga(c) && (e = c, c = u);
        ga(d) && !e && (e = d, d = u);
        d && (d = Sa[d]);
        c = {duration: c,ease: d,onComplete: e};
        if (Ta)
            b = new Ua(a, b, c);
        else {
            d = O.Tweener;
            e = a.style;
            var g;
            a = ta(a);
            var h, p, x = {};
            for (g in b)
                h = Va(b[g]), p = a.getPropertyValue(g), p = !p || "none" === p ? 0 : 1 * Va(p)[2], x[g] = {from: p,to: 1 * h[2] || 0,prefix: h[1],suffix: h[3]};
            b = new d(e, x, c)
        }
        this.j.push(b)
    }
    function Va(a) {
        a = "" + (a || "");
        return a.match(/^(.*?)([0-9\.]+)(.*)$/)
    }
    var Wa = O.$.ia, Ua = O.Animation || {}, Ta = Ua.support, Sa = {};
    Ta && O.cssease ? Sa = O.cssease : O.ease && (Sa = O.ease);
    Wa.animate = function() {
        this.j || (this.j = []);
        return Wa.ra(this, Ra, arguments)
    };
    Wa.stop = function() {
        if (this.j) {
            for (var a = this.j.length; a--; )
                this.j[a].stop();
            this.j = u
        }
        return this
    };
    O.HashQuery = K({extend: N,properties: {typeCast: function(a) {
                var b = ba(a);
                return a === b && (a = a.match("^[\"'](.*)[\"']$")) ? a[1] : b
            },makeHash: function(a) {
                var b = "#" + a.mode;
                a = a.vars;
                var c = "?", d;
                for (d in a)
                    b += c + d + "=" + ka(a[d]), c = "&";
                return encodeURI(b)
            },setHash: function(a) {
                location.hash = this.makeHash(a);
                return n
            },parseHash: function(a) {
                var b, c, d, e;
                b = decodeURIComponent(a).split("#")[1];
                if (!b)
                    return q;
                b = b.split("?");
                a = b[0];
                if (b[1]) {
                    c = {};
                    b = b[1].split("&");
                    for (e = b.length; e--; )
                        b[e] && (d = b[e].split("="), c[d[0]] = this.typeCast(d[1]))
                }
                return {mode: a,
                    vars: c}
            },getHash: function() {
                return this.parseHash(location.hash)
            }}});
    O.Embed = function(a) {
        var b = B(a.type.toLowerCase());
        b.controls = a.controls ? n : q;
        b.preload = a.preload || "auto";
        b.autoplay = a.autoplay ? n : q;
        b.loop = a.loop ? n : q;
        b.src = a.dir + a.name + "." + a.suffix[0][0];
        return b
    };
    O.Embed.supportcheck = H;
    O.Media = K({extend: N,init: function(a) {
            this._super();
            var b = this, c = a.autoplay, d = a.loop, e, g = a.element || w.body;
            a.preload = "auto";
            a.autoplay = a.loop = q;
            switch (a.type) {
                case "Audio":
                    e = O.Audio(a);
                    break;
                case "Video":
                    e = O.Video(a)
            }
            b.g = e;
            if (!e)
                return q;
            if (c) {
                var h;
                h = this.contract(e, "canplay", function() {
                    b.uncontract(h);
                    b.play()
                })
            }
            d && this.loop(n);
            a.oncanplay && this.contract(e, "canplay", a.oncanplay);
            a.onended && this.contract(e, "ended", a.onended);
            G(g, e)
        },properties: {dispose: function() {
                va(this.g);
                this.b()
            },getElement: f("g"),
            getCurrent: function() {
                return this.g.currentTime
            },getDuration: function() {
                return this.g.duration
            },setCurrent: function(a) {
                this.g.currentTime = a
            },loop: function(a) {
                var b = this;
                b.f && (b.uncontract(b.f), delete b.f);
                a && (b.f = b.contract(b.g, "ended", function() {
                    b.stop();
                    b.play()
                }))
            },play: function() {
                this.g.play()
            },pause: function() {
                this.g.pause()
            },stop: function() {
                this.setCurrent(0);
                this.pause()
            }}});
    O.Media.supportcheck = H;
    O.Audio = function(a) {
        a.type = "Audio";
        a.suffix = O.Audio.support;
        return O.Embed(a)
    };
    O.Audio.support = H({type: "Audio",suffix: [["mp3", "mpeg"], ["wav", "wav"], ["ogg", "ogg"], ["m4a", "mp4"]]});
    O.Sound = function(a) {
        a.type = "Audio";
        return new O.Media(a)
    };
    O.Sound.support = O.Audio.support;
    O.Video = function(a) {
        a.type = "Video";
        a.suffix = O.Video.support;
        return new O.Embed(a)
    };
    O.Video.support = H({type: "Video",suffix: [["webm", "webm"], ["mp4", "mp4"], ["ogv", "ogg"]]});
    O.Movie = function(a) {
        a.type = "Video";
        return new O.Media(a)
    };
    O.Movie.support = O.Video.support;
    O.Ajax = K({extend: N,init: function(a) {
            a && this.request(a)
        },properties: {request: function(a) {
                if ("json" === a.dataType)
                    return delete a.dataType, this.Ua(a);
                var b = a.url, c = a.callback || t, d = a.error || t, e = a.type || "GET", g = "", h;
                h = this.oa = new XMLHttpRequest;
                a.cash || (a.query || (a.query = {}), a.query["cirajaxcash" + j()] = "0");
                a.query && (g = a.query, da(g) && (g = r(g), g = encodeURI(g)));
                h.onreadystatechange = function() {
                    return 4 != h.readyState ? q : 200 == h.status ? c(h.responseText, h) : d(h)
                };
                "GET" === e && (b = -1 !== b.indexOf("?") ? b + "&" : b + "?", b +=
                g, g = "");
                h.open(e, b);
                "POST" === e && h.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
                h.send(g)
            },abort: function() {
                this.oa && this.oa.abort()
            },json: function(a) {
                var b = a.callback, c = a.error;
                a.callback = function(a) {
                    b(m(a))
                };
                a.error = function(a) {
                    c && c(a)
                };
                this.request(a)
            }}});
    O.Bind = K({extend: N,init: function(a) {
            this.B = a;
            this.add()
        },properties: {dispose: function() {
                this.remove();
                this.b()
            },getHandler: f("B"),add: function() {
                this.s(n)
            },remove: function() {
                this.s(q)
            },s: function(a) {
                a = a ? D : E;
                for (var b in this.B.events)
                    a(this.B.element, b, this.B.events[b])
            }}});
    O.Brush = K({extend: N,init: function(a) {
            this.n = a.canvas;
            this.ba = this.n.getContext("2d");
            this.setSize(a)
        },properties: {setSize: function(a) {
                a.width && (this.n.width = a.width);
                a.height && (this.n.height = a.height)
            },pigment: function(a) {
                var b = B("canvas"), c = B("img");
                c.onload = function() {
                    b.width = a.width;
                    b.height = a.height;
                    b.getContext("2d").drawImage(c, 0, 0);
                    a.onload(b, c)
                };
                c.src = a.src;
                return {image: b,x: a.x || 0,y: a.y || 0}
            },pigments: function(a, b) {
                function c(a) {
                    var c = a.onload || t;
                    a.onload = function(a, d) {
                        c(a, d);
                        g--;
                        0 === g && b(h)
                    };
                    h[e] = d.pigment(a);
                    g++
                }
                var d = this, e, g = 0, h = {};
                b = b || t;
                for (e in a)
                    c(a[e]);
                return h
            },draw: function(a) {
                var b = 0, c = a.length, d;
                for (this.ba.clearRect(0, 0, this.n.width, this.n.height); b < c; b++)
                    d = a[b], this.ba.drawImage(d.image, d.x, d.y)
            }}});
    O.Brush.support = !!l.HTMLCanvasElement;
    O.DataStore = K({extend: N,init: function(a) {
            this._super(a);
            this.data = {};
            return this.m("DataStore")
        },properties: {set: function(a, b) {
                this.data[a] = b
            },get: function(a) {
                var b = {}, c;
                if (a)
                    return this.data[a];
                for (c in this.data)
                    b[c] = this.data[c];
                return b
            },remove: function(a) {
                if (!this.data[a])
                    return q;
                delete this.data[a]
            },reset: function() {
                this.data = {}
            }}});
    O.WebStorage = K({extend: N,init: function(a) {
            this._super(a);
            this.l = a.namespace ? a.namespace + "-" : "";
            this.d = l[a.type.toLowerCase() + "Storage"];
            return this.m("WebStorage")
        },properties: {set: function(a, b) {
                this.d.setItem(this.l + a, ka(b));
                return n
            },get: function(a) {
                var b = {}, c;
                if (a)
                    return m(this.d.getItem(this.l + a));
                for (c in this.d)
                    this.l ? (a = c.split(this.l)[1]) && (b[a] = m(this.d[c])) : b[c] = m(this.d[c]);
                return b
            },remove: function(a) {
                a = this.l + a;
                if (!this.d.getItem(a))
                    return q;
                this.d.removeItem(a);
                return n
            },reset: function() {
                if (!this.l)
                    return this.d.clear(),
                    n;
                for (var a in this.d)
                    this.remove(a)
            }}});
    O.LocalStorage = function(a) {
        a = a || {};
        a.type = "Local";
        return new O.WebStorage(a)
    };
    O.SessionStorage = function(a) {
        a = a || {};
        a.type = "Session";
        return new O.WebStorage(a)
    };
    O.Deferred = K({extend: N,init: function() {
            this.q = []
        },properties: {isResolve: function() {
                return !this.q
            },resolve: function(a) {
                if (this.isResolve())
                    return this;
                var b = this.q, c = b.length, d = 0;
                this.q = u;
                for (this.data = a; d < c; ++d)
                    b[d](a);
                return this
            },done: function(a) {
                this.q ? this.q.push(a) : a(this.data);
                return this
            }}});
    O.DragFlick = K({extend: N,init: function(a) {
            this._super();
            a && this.bind(a)
        },properties: {I: function(a) {
                return a.changedTouches ? a.changedTouches[0] : a
            },amount: function(a) {
                var b = this, c, d, e = q;
                this.contract(a.element, L.switchdown, function(a) {
                    var h = b.I(a);
                    c = h.pageX;
                    d = h.pageY;
                    e = n;
                    ja(a)
                });
                this.contract(l, L.switchup, function(g) {
                    e && (g = b.I(g), a.callback({x: g.pageX - c,y: g.pageY - d}), e = q)
                })
            },direction: function(a) {
                this.amount({element: a.element,callback: function(b) {
                        var c = a.boundary || 0, d = {change: q,top: q,right: q,bottom: q,
                            left: q,amount: b};
                        Math.abs(b.x) > c && (0 < b.x ? d.right = n : 0 > b.x && (d.left = n), d.change = n);
                        Math.abs(b.y) > c && (0 < b.y ? d.bottom = n : 0 > b.y && (d.top = n), d.change = n);
                        a.callback(d)
                    }})
            },bind: function(a) {
                function b(a, b, d) {
                    c.contract(a, b, function(a) {
                        d(c.I(a))
                    })
                }
                var c = this, d = a.element, e = a.start || t, g = a.move || t, h = a.end || t, p = q, x = 0, I = 0;
                a.direction && c.direction({element: d,boundary: a.boundary,callback: a.direction});
                b(d, L.switchdown, function(a) {
                    p = n;
                    x = a.pageX;
                    I = a.pageY;
                    e({e: a,move: {x: x,y: I}})
                });
                b(w, L.switchmove, function(a) {
                    p && g({e: a,
                        move: {x: a.pageX - x,y: a.pageY - I}})
                });
                b(w, L.switchup, function(a) {
                    p && (h({e: a,move: {x: a.pageX - x,y: a.pageY - I}}), p = q)
                })
            }}});
    O.ExternalInterface = function(a) {
        a = a || {};
        var b = O.ExternalInterface, c;
        if (a.single && b.o)
            return b.o;
        c = a.android ? new b.Android(a) : new b.IOS(a);
        a.single && (b.o = c);
        return c
    };
    O.ExternalInterface.Android = K({extend: O.HashQuery,init: function(a) {
            a = a || {};
            this.Ba = a.android;
            this.da = a.externalObj
        },properties: {call: function(a) {
                this.Ba[a.mode](this.makeHash(a))
            },addCallback: function(a, b) {
                var c = this;
                c.da[a] = function(a) {
                    a = c.parseHash(a);
                    return b(a.vars)
                }
            },removeCallback: function(a) {
                delete this.da[a]
            }}});
    O.ExternalInterface.IOS = K({extend: O.HashQuery,init: function() {
            this.p = {}
        },properties: {dispose: function() {
                for (var a in this.p)
                    this.removeCallback(a);
                this.b()
            },call: function(a) {
                this.setHash(a)
            },addCallback: function(a, b) {
                var c = this;
                c.p[a] = function() {
                    var d = c.getHash();
                    return d.mode === a ? (b(d.vars), n) : q
                };
                D(l, "hashchange", c.p[a])
            },removeCallback: function(a) {
                E(l, "hashchange", this.p[a]);
                delete this.p[a]
            }}});
    O.Facebook = K({extend: N,properties: {shareURL: function(a) {
                var b = "https://www.facebook.com/dialog/feed?app_id=" + a.app_id + "&redirect_uri=" + a.redirect_uri;
                return b += r({link: a.link,picture: a.picture,name: a.name,caption: a.caption,description: a.description})
            }}});
    O.FPS = K({extend: N,init: function(a) {
            this._super(a);
            this.P = this.w = a.criterion || 20;
            this.Ia = a.enterframe;
            this.ja = this.X(this.w);
            this.M = this.K = this.f = 0;
            a.manual || this.start();
            return this.m("FPS")
        },properties: {dispose: function() {
                this.stop();
                this.b()
            },getCriterion: f("w"),getSurver: f("P"),getFrameTime: f("ja"),enter: function() {
                this.Ia({criterion: this.w,surver: this.P})
            },start: function() {
                this.M = j();
                this.f = setInterval(this.ta, this.ja, this)
            },ta: function(a) {
                a.K = j();
                a.P = a.X(a.K - a.M);
                a.M = a.K;
                a.enter()
            },X: function(a) {
                return Math.round(1E3 /
                a)
            },stop: function() {
                clearInterval(this.f)
            }}});
    O.ImgLoad = K({extend: N,init: function(a) {
            this._super();
            this.la = a.srcs;
            this.O = this.la.length;
            this.fa = [];
            this.A = [];
            this.va = a.onload || t;
            this.wa = a.onprogress || t;
            this.N = this.J = 0;
            this.ma = q;
            a.manual || this.start()
        },properties: {pa: function() {
                this.J++;
                this.N = this.J / this.O;
                this.wa(this.N);
                if (this.J >= this.O) {
                    for (var a = this.A.length; a--; )
                        this.uncontract(this.A[a]);
                    this.A = [];
                    this.va(this.fa)
                }
            },start: function() {
                function a() {
                    b.pa()
                }
                if (this.ma)
                    return q;
                this.ma = n;
                for (var b = this, c, d = b.O; d--; )
                    c = B("img"), c.src = b.la[d],
                    b.A.push(b.contract(c, L.load, a)), b.fa.push(c)
            },getProgress: f("N")}});
    O.WindowLoad = K({extend: N,init: function(a) {
            this._super();
            if (a)
                this.onload(a.onload)
        },properties: {onload: function(a) {
                var b = this, c;
                c = this.contract(l, L.load, function() {
                    b.uncontract(c);
                    a()
                })
            }}});
    O.Mobile = K({extend: N,init: function() {
            this._super()
        },properties: {getZoom: function() {
                return w.body.clientWidth / l.innerWidth
            },isAndroid: function(a) {
                return v(/Android/i, a)
            },isIOS: function(a) {
                return v(/iPhone|iPad|iPod/i, a)
            },isWindows: function(a) {
                return v(/IEMobile/i, a)
            },isFBAPP: function(a) {
                return v(/FBAN/, a)
            },isMobile: function() {
                return this.isAndroid() || this.isIOS() || this.isWindows() || this.isFBAPP()
            },killScroll: function(a) {
                if (this.C)
                    return q;
                a || k();
                this.C = this.contract(w, L.touchmove, ja)
            },revivalScroll: function(a) {
                if (!this.C)
                    return q;
                a || k();
                this.uncontract(this.C);
                delete this.C
            },hideAddress: function() {
                function a() {
                    0 === l.pageYOffset && k()
                }
                function b() {
                    setTimeout(a, 100)
                }
                this.contract(l, L.load, b, q);
                this.contract(l, xa, b, q)
            },getOrientation: function() {
                return 90 !== Math.abs(l.orientation) && l.innerWidth < l.innerHeight ? {portrait: n,landscape: q} : {portrait: q,landscape: n}
            },bindOrientation: function(a) {
                function b(a) {
                    h.push(g.contract(l, L.load, a));
                    h.push(g.contract(l, xa, a));
                    h.push(g.contract(l, L.resize, a))
                }
                function c() {
                    for (var a = h.length; a--; )
                        g.uncontract(h[a]);
                    h = []
                }
                function d() {
                    e();
                    c()
                }
                function e() {
                    if (g.getOrientation().portrait)
                        return a.portrait(), n;
                    a.landscape()
                }
                var g = this, h = [];
                a.immediately && e();
                if (a.one)
                    return b(d), function() {
                        c()
                    };
                b(e);
                return function() {
                    c()
                }
            }}});
    O.mobile = new O.Mobile;
    O.T = K({extend: N,init: function(a) {
            this._super();
            this.s = a.e;
            a.callback && this.bind(a.callback)
        },properties: {bind: function(a) {
                this.unbind();
                this.U = this.contract(l, this.s, a)
            },unbind: function() {
                this.U && this.uncontract(this.U)
            }}});
    O.DeviceOrientation = function(a) {
        a = a || {};
        a.e = "deviceorientation";
        return new O.T(a)
    };
    O.DeviceOrientation.support = "ondeviceorientation" in l;
    O.DeviceMotion = function(a) {
        a = a || {};
        a.e = "devicemotion";
        return new O.T(a)
    };
    O.DeviceMotion.support = "ondevicemotion" in l;
    var Xa, $a;
    O.DeviceOrientation.support ? (Xa = O.DeviceOrientation, $a = function(a) {
        return a
    }) : O.DeviceMotion.support && (Xa = O.DeviceMotion, $a = function(a) {
        return a.rotationRate
    });
    O.DeviceShake = K({extend: N,init: function(a) {
            this._super();
            this.H = new Xa;
            this.sa = a.limit;
            this.Aa = a.waittime;
            a.callback && a.direction && this.bind(a.direction, a.callback)
        },properties: {Ea: {x: "gamma",y: "beta",z: "alpha"},dispose: function() {
                this.H.dispose();
                this.b()
            },bind: function(a, b) {
                a = this.Ea[a];
                var c = this, d;
                return c.H.bind(function(e) {
                    e = $a(e);
                    d || (d = e);
                    Math.abs(e[a] - d[a]) > c.sa && (d = u, b(e), setTimeout(function() {
                    }, c.Aa))
                })
            },unbind: function() {
                this.H.unbind()
            }}});
    O.DeviceShake.support = Xa ? n : q;
    O.FontImg = K({extend: N,init: function(a) {
            a = a || {type: ""};
            this.type = a.type ? a.type + "_" : "";
            this.na = a.tag || "span"
        },properties: {make: function(a) {
                a = ("" + a).split("");
                for (var b = "", c = a.length; c--; )
                    b = "<" + this.na + ' class="font_' + this.type + a[c] + '">&nbsp;</' + this.na + ">" + b;
                return b
            }}});
    O.Observer = K({extend: N,init: function(a) {
            this._super(a);
            this.L = {};
            return this.m("Observer")
        },properties: {on: function(a, b) {
                var c = this.L;
                c[a] || (c[a] = []);
                c[a].push(b)
            },one: function(a, b) {
                function c(e) {
                    b(e);
                    d.off(a, c)
                }
                var d = this;
                d.on(a, c)
            },off: function(a, b) {
                var c = this.L;
                if (!b)
                    return delete c[a], n;
                var d = c[a], e;
                if (!d)
                    return q;
                for (e = d.length; e--; )
                    if (b === d[e])
                        return d.splice(e, 1), 0 === d.length && delete c[a], n;
                return q
            },fire: function(a, b) {
                var c = this.L[a], d, e;
                if (!c)
                    return q;
                for (e = c.length; e--; )
                    (d = c[e]) && d(b);
                return n
            }}});
    O.PreRender = K({extend: N,init: function(a) {
            a = a || {};
            a.loopblur || (a.loopblur = 20);
            this.i = a.elements || [];
            this.ea = a.guesslimit || 30;
            this.Na = a.onrendered || t;
            this.ha = a.looptime || 100;
            this.Ma = this.ha + a.loopblur;
            a.manual || this.start()
        },properties: {dispose: function() {
                clearInterval(this.f);
                this.b()
            },start: function() {
                var a, b = this, c = j();
                for (a = b.i.length; a--; )
                    qa(b.i[a]);
                b.f = setInterval(function() {
                    var a = j(), e = a - c;
                    c = a;
                    if (e < b.Ma && (b.ea--, 1 > b.ea)) {
                        clearInterval(b.f);
                        for (a = b.i.length; a--; )
                            ra(b.i[a]);
                        b.Na()
                    }
                }, this.ha, this)
            }}});
    O.Route = K({extend: N,init: function(a) {
            this._super(a);
            this.u = a.target || "";
            this.ua = a.noregex;
            this.r = a.action;
            a.manual || this.start();
            return this.m("Route")
        },properties: {start: function() {
                this.fire(this.u)
            },fire: function(a) {
                var b;
                if (this.ua && this.r[a])
                    return this.r[a](a);
                for (b in this.r)
                    if (a.match(b))
                        this.r[b](b)
            }}});
    O.ScriptLoad = K({extend: N,init: function() {
            this._super();
            this.i = []
        },properties: {requests: function(a, b) {
                function c(c) {
                    var g = a[c].callback;
                    a[c].callback = function(a) {
                        g(a);
                        e--;
                        0 === e && b(d.i)
                    };
                    d.request(a[c])
                }
                for (var d = this, e = 0, g = a.length; e < g; e++)
                    c(e)
            },request: function(a) {
                var b = this, c = B("script"), d;
                c.src = a.src;
                G(w.body, c);
                b.i.push(c);
                a.callback && (d = b.contract(c, L.load, function() {
                    b.uncontract(d);
                    a.callback.apply(this, arguments)
                }))
            }}});
    function Z(a) {
        return ab ? $.getResponseHeader(a) : q
    }
    function bb(a) {
        var b = new XMLHttpRequest;
        b.onload = function() {
            a(b)
        };
        b.open("HEAD", location.href + "?update" + j() + "=1");
        b.send(u);
        return b
    }
    var $, ab = q;
    O.ServerMeta = K({extend: N,init: function(a) {
            a = a || {};
            var b = a.callback || t;
            $ ? b($) : $ = bb(function() {
                ab = n;
                b($)
            })
        },properties: {date: function(a) {
                return bb(function(b) {
                    b = new Date(b.getResponseHeader("Date"));
                    a(b)
                })
            },connection: function() {
                return Z("Connection")
            },contentLength: function() {
                return Z("Content-Length")
            },lastModified: function() {
                return Z("Last-Modified")
            },server: function() {
                return Z("Server")
            },contentType: function() {
                return Z("Content-Type")
            },acceptRanges: function() {
                return Z("Accept-Ranges")
            },keepAlive: function() {
                return Z("Keep-Alive")
            }}});
    O.Surrogate = K({extend: N,init: function(a) {
            this.Fa = a.delay;
            this.v = a.callback
        },properties: {dispose: function() {
                this.clear();
                this.b()
            },request: function(a) {
                this.Ca = a;
                this.clear();
                this.S = setTimeout(this.flush, this.Fa, this)
            },flush: function(a) {
                a = a || this;
                a.v(a.Ca)
            },clear: function() {
                clearInterval(this.S)
            }}});
    O.Throttle = K({extend: N,init: function(a) {
            this.Pa = a.waittime;
            this.v = a.callback
        },properties: {dispose: function() {
                this.unlock();
                this.b()
            },request: function(a) {
                var b = this;
                if (b.ga)
                    return b.R = a, q;
                b.v(a);
                b.lock();
                b.S = setTimeout(function() {
                    b.R && (b.v(b.R), b.R = u);
                    b.unlock()
                }, b.Pa, b)
            },lock: function() {
                this.ga = n
            },unlock: function(a) {
                a = a || this;
                a.ga = q;
                clearInterval(a.S)
            }}});
    O.Timer = function(a) {
        function b() {
            S = j();
            var a = g - (S - Da) / 1E3;
            0 > a && (a = 0);
            Ga = c(a);
            x(Ga);
            if (S > Ea)
                return Ya.stop(), I(), n;
            Za = setTimeout(b, p);
            return q
        }
        function c(a) {
            var b;
            b = ("" + a).split(".");
            a = b[0];
            b = b[1] ? b[1] : "";
            a = d({ka: a,ca: Ca.Ka});
            b = d({ka: b,ca: Ca.Ja,La: n});
            return a + "." + b
        }
        function d(a) {
            var b = "" + a.ka, c = a.ca, d = c - b.length;
            return !a.La ? -1 < d ? e(d, 0) + b : e(c, 9) : 0 < d ? b + e(d, 0) : b.slice(0, c)
        }
        function e(a, b) {
            var c = "";
            for (b = "" + b; 0 < a; )
                c += b, a--;
            return c
        }
        var g = a.limit, h = 1E3 * g, p = 1E3 * a.interval, x = a.onupdate, I = a.ontimeup, Ca;
        a =
        a.template.split(".");
        Ca = {Ka: a[0].length,Ja: a[1].length};
        var Da = 0, S = 0, Ea = h, Ga = c(g), Za, Ya = {getLimit: function() {
                return g
            },getTime: function() {
                return Ga
            },getProgress: function() {
                return 1 - (Ea - S) / h
            },setUpdate: function(a) {
                x = a
            },setTimeup: function(a) {
                I = a
            },countDown: function() {
                S = Da = j();
                Ea = Da + h;
                b()
            },stop: function() {
                clearInterval(Za)
            }};
        return Ya
    };
    O.Twitter = K({extend: N,properties: {shareURL: function(a) {
                var b = a.caption || "", c = a.name, d = a.hash;
                return a = "https://twitter.com/intent/tweet?" + r({url: a.redirect_uri,text: b + (c ? " \u300c" + c + "\u300d" : "") + (d ? " " + d : "")})
            }}});
    O.XML = K({extend: N,init: function(a) {
            this.a = B("div");
            this.V = {};
            a && this.setData(a.data)
        },properties: {getData: f("V"),setData: function(a) {
                this.V = a;
                wa(this.a, a)
            },$: function(a) {
                return this.a.querySelector(a)
            },$$: function(a) {
                return ma(a, this.a)
            }}});
}());
