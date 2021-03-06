// Cool is Right.
(function() {
var win = window,
    doc = document,
    body = doc.body,
    TRUE = true,
    FALSE = false,
    NULL = null,
    EMPTY = '',
    NULLOBJ = {},
    UNDEFINED = undefined,
    isTouch = isTouchable(),
    ev,
    ev_hashchange = 'hashchange',
    ev_orientationchange = 'orientationchange',
    ev_canplay = 'canplay',
    ev_ended = 'ended',
    csseaseOutExpo = cssCubicBezierFormat('0.19,1,0.22,1'),
    easebackrate = 1.70158,
    WindowAction,
    ExternalAndroid,
    ExternalIOS,
    Media,
    Tweener,
    WebStorage,
    mb,
    pc;
    /* C = win['C'] = {}, */
    C = {};

function cssCubicBezierFormat(text) {
    return 'cubic-bezier(' + text + ')';
}
function checkCSSAnimTranCheck(propnames, event_key) {
    var prop = propnames,
        el = create('p'),
        support = FALSE,
        prefix,
        css_prefix = EMPTY,
        i = prop.length,
        style,
        sheet,
        regex = new RegExp('^(.*?)' + prop[0] + '$', 'i');

    for (; i--;) {
        if (el.style[prop[i]] !== UNDEFINED) {
            support = TRUE;
            prefix = prop[i].match(regex)[1];

            if (prefix) {
                css_prefix = prefix.toLowerCase();
                event_key = css_prefix + event_key;
                css_prefix = '-' + css_prefix + '-';
            }
            else {
                event_key = event_key.toLowerCase();
            }

            style = append($('head'),
                create('style', {
                    type: 'text/css'
                }));
            sheet = style.sheet;

            break;
        }
    }

    return {
        event_key: event_key,
        support: support,
        prefix: prefix,
        css_prefix: css_prefix,
        sheet: sheet
    };
}

function jsonParse(json) {
    return win['JSON']['parse'](json);
}
function jsonStringify(text) {
    return win['JSON']['stringify'](text);
}

function splitSuffix(value) {
    value = value || EMPTY;
    value = EMPTY + value;

    return value.match(/^(.*?)([0-9\.]+)(.*)$/);
}
/* Test: "../../spec/_src/src/util/test.js" */
if (!Date['now']) {
    Date['now'] = function() {
        return new Date * 1;
    };
}

function dateNow() {
    return Date['now']();
}

function scrollTo(num) {
    win.scrollTo(0, num);
}
function pageTop() {
    scrollTo(1);
}

function override(target, vars /* varless */, i) {
    /* var i; */

    for (i in vars) {
        target[i] = vars[i];
    }

    return target;
}
function typeCast(str /* varless */, matchstr) {
    /* var matchstr = EMPTY + str; */
    matchstr = EMPTY + str;

    if (matchstr.match('^{.*}$')) {
        return jsonParse(matchstr);
    }
    if (matchstr.match('^[0-9\.]+$')) {
        return matchstr * 1;
    }
    if (matchstr === 'true') {
        return TRUE;
    }
    if (matchstr === 'false') {
        return FALSE;
    }

    return str;
}
function replaceAll(targettext, needle, replacetext) {
    return targettext.split(needle).join(replacetext);
}
function template(templatetxt, replaceobj /* varless */, i) {
    /* var i; */

    for (i in replaceobj) {
        templatetxt = replaceAll(templatetxt, '<%= ' + i + ' %>', replaceobj[i]);
    }

    return templatetxt;
}
function windowOpen(url, windowname, option /* varless */, i, option_ary) {
    // var i,
    //     option_ary = [];
    option_ary = [];

    for (i in option) {
        if (isBoolean(option[i])) {
            if (option[i] === TRUE) {
                option[i] = 'yes';
            }
            else if (option[i] === FALSE) {
                option[i] = 'no';
            }
        }
        option_ary.push(i + '=' + option[i]);
    }

    return win.open(url, windowname, option_ary.join(','));
}
function makeQueryString(vars /* varless */, sign, query, i) {
    // var sign = EMPTY,
    //     query = EMPTY,
    //     i;
    sign = query = EMPTY;

    for (i in vars) {
        if (vars[i]) {
            query += sign + i + '=' + encodeURIComponent(vars[i]);
            sign = '&';
        }
    }

    return query;
}
function parseQueryString(query /* varless */, params, i, p, result) {
    query = query
        .replace(/^[\#\?]/, EMPTY);

    // var params = query.split('&'),
    //     i = params.length,
    //     p,
    //     result = {};
    params = query.split('&'),
    i = params.length,
    result = {};

    for (; i--;) {
        p = params[i].split('=');
        result[p[0]] = typeCast(decodeURIComponent(p[1]));
    }
    return result;
}
function is(key, vars) {
    if (Object.prototype.toString.call(vars) == '[object ' + key + ']') {
        return TRUE;
    }
    return FALSE;
}
function isObject(vars) {
    return is('Object', vars);
}
function isNumber(vars) {
    return is('Number', vars);
}
function isString(vars) {
    return is('String', vars);
}
function isFunction(vars) {
    return is('Function', vars);
}
function isBoolean(vars) {
    return is('Boolean', vars);
}
function isArray(vars) {
    return is('Array', vars);
}
function isDefined(vars) {
    if (vars === UNDEFINED) {
        return FALSE;
    }
    return TRUE;
}
function isTouchable() {
    return 'ontouchstart' in win;
}
function nullFunction() {
}
function eventPrevent(e) {
    e.preventDefault();
    return FALSE;
}
function eventStop(e) {
    e.stopPropagation();
    return FALSE;
}
function checkUserAgent(pattern, ua) {
    ua = ua || navigator.userAgent;

    return !!ua.match(pattern);
}
function proxy(target, func) {
    return function() {
        return func.apply(target, arguments);
    };
}
function owner(ownerObj, methods, overrideObj /* varless */, i) {
    /* var i; */
    methods = methods || ownerObj;
    overrideObj = overrideObj || methods;

    for (i in methods) {
        if (isFunction(methods[i])) {
            overrideObj[i] = proxy(ownerObj, methods[i]);
        }
    }

    override(ownerObj, overrideObj);

    return overrideObj;
}

C['util'] = {
    'win': win,
    'doc': doc,
    'pageTop': pageTop,
    'override': override,
    'replaceAll': replaceAll,
    'template': template,
    'windowOpen': windowOpen,
    'typeCast': typeCast,
    'makeQueryString': makeQueryString,
    'parseQueryString': parseQueryString,
    'is': is,
    'isObject': isObject,
    'isNumber': isNumber,
    'isString': isString,
    'isFunction': isFunction,
    'isBoolean': isBoolean,
    'isArray': isArray,
    'isDefined': isDefined,
    'isTouchable': isTouchable,
    'nullFunction': nullFunction,
    'eventPrevent': eventPrevent,
    'eventStop': eventStop,
    'checkUserAgent': checkUserAgent,
    'proxy': proxy,
    'owner': owner
};
/* Test: "../../spec/_src/src/dom/test.js" */
function $(selector) {
    return $child(selector, doc);
}
function $$(selector) {
    return $$child(selector, doc);
}
function $child(selector, el) {
    return el.querySelector(selector);
}
function $$child(selector, el /* varless */, eles, ary) {
    // var eles = el.querySelectorAll(selector),
    //     ary = [];
    eles = el.querySelectorAll(selector),
    ary = [];

    ary.push.apply(ary, eles);

    return ary;
}
function $id(id) {
    return doc.getElementById(id);
}

function hasClass(el, cls /* varless */, clsName, addedcls, i) {
    // var clsName = el.className,
    //     addedcls = clsName ? clsName.split(' ') : [],
    //     i = addedcls.length;
    clsName = el.className,
    addedcls = clsName ? clsName.split(' ') : [],
    i = addedcls.length;

    for (; i--;) {
        if (cls == addedcls[i]) {
            return TRUE;
        }
    }

    return FALSE;
}

function addClass(el, cls /* varless */, between, orgcls) {
    if (!hasClass(el, cls)) {
        // var between = EMPTY,
        //     orgcls = el.className;
        between = EMPTY,
        orgcls = el.className;

        if (orgcls) {
            between = ' ';
        }

        el.className = orgcls + between + cls;
    }
}

function removeClass(el, cls /* varless */, addedcls, attachcls, i) {
    if (hasClass(el, cls)) {
        // var addedcls,
        //     attachcls = [],
        //     i;
        attachcls = [];

        addedcls = el.className.split(' ');
        i = addedcls.length;

        for (; i--;) {
            if (cls != addedcls[i]) {
                attachcls.push(addedcls[i]);
            }
        }

        el.className = attachcls.join(' ');
    }
}
function toggleClass(el, cls) {
    if (hasClass(el, cls)) {
        return removeClass(el, cls);
    }

    addClass(el, cls);
}

function attr(el, vars, value /* varless */, i) {
    /* var i; */

    if (isObject(vars)) {
        for (i in vars) {
            el.setAttribute(i, vars[i]);
        }

        return TRUE;
    }

    if (value || value == EMPTY) {
        return el.setAttribute(vars, value);
    }

    return el.getAttribute(vars);
}
function removeAttr(el, key) {
    el.removeAttribute(key);
}

function create(tagname, attribute /* varless */, el) {
    /* var el= doc.createElement(tagname); */
    el= doc.createElement(tagname);

    if (attribute) {
        attr(el, attribute);
    }

    return el;
}

function on(el, eventname, handler) {
    el.addEventListener(eventname, handler, FALSE);
}
function off(el, eventname, handler) {
    el.removeEventListener(eventname, handler, FALSE);
}
function show(el) {
    el.style.display = 'block';
}
function hide(el) {
    el.style.display = 'none';
}
function css(el, addstyle /* varless */, style, i, key, value) {
    // var style = el.style,
    //     i,
    //     key,
    //     value;
    style = el.style;

    for (i in addstyle) {
        key = i;
        value = addstyle[i];

        if (isNumber(value)) {
            value += 'px';
        }

        style[key] = value;
    }
}
function computedStyle(el) {
    return doc.defaultView.getComputedStyle(el, NULL);
}
function parent(el) {
    return el['parentNode'];
}
function append(el, addel) {
    return el['appendChild'](addel);
}
function beforeafter(el, addel, target) {
    return parent(el).insertBefore(addel, target);
}
function before(el, addel) {
    return beforeafter(el, addel, el);
}
function after(el, addel) {
    return beforeafter(el, addel, el.nextSibling);
}
function remove(el) {
    return parent(el).removeChild(el);
}
function html(el, text) {
    if (!text) {
        return el.innerHTML;
    }

    el.innerHTML = text;
}

function reflow(el) {
    (el || body).offsetTop;
}

C['dom'] = {
    '$': $,
    '$$': $$,
    '$child': $child,
    '$$child': $$child,
    '$id': $id,
    'on': on,
    'off': off,
    'create': create,
    'show': show,
    'hide': hide,
    'hasClass': hasClass,
    'addClass': addClass,
    'removeClass': removeClass,
    'toggleClass': toggleClass,
    'css': css,
    'computedStyle': computedStyle,
    'append': append,
    'parent': parent,
    'before': before,
    'after': after,
    'remove': remove,
    'attr': attr,
    'removeAttr': removeAttr,
    'html': html,
    'reflow': reflow
};
/* Test: "../../spec/_src/src/klass/test.js" */
C['klass'] = function(config) {
    var init = config['init'] || function() {},
        wrap = function() {
            var inits = ancestors(this, '_init'),
                i = inits.length;

            for (; i--;) {
                inits[i].apply(this, arguments);
            }
        },
        prop = config['prop'],
        extend = config['extend'];

    if (extend) {
        C['extend'](wrap, extend);
    }
    wrap.prototype['_init'] = init;

    override(wrap.prototype, prop);

    return wrap;
};
C['klass']['ancestors'] = ancestors;

function ancestors(obj, propname /* varless */, props, flg) {
    // var props = [],
    //     flg = FALSE;
    props = [];

    while (!flg) {
        if (obj[propname] && props[props.length - 1] != obj[propname]) {
            props.push(obj[propname]);
        }
        if (obj._superclass && obj._superclass.prototype) {
            obj = obj._superclass.prototype;
        }
        else {
            flg = TRUE;
        }
    }

    return props;
}
function klassExtend(kls, init, prop) {
    return C['klass']({
        'extend': kls,
        'init': init,
        'prop': prop
    });
}
function klassExtendBase(init, prop) {
    return klassExtend(C['Base'], init, prop);
}
/* Test: "../../spec/_src/src/extend/test.js" */
C['extend'] = function(child, _super) {
    function ctor() {}

    ctor.prototype = _super.prototype;
    child.prototype = new ctor();

    var cpt = child.prototype;

    cpt._superclass = _super;
    // cpt._super = function() {
    //     var prev = this._prevctor;

    //     if (prev) {
    //         prev = prev.prototype._superclass;
    //     }
    //     else {
    //         prev = this._prevctor = _super;
    //     }

    //     prev.apply(this, arguments);
    // };
};
/* Test: "../../spec/_src/src/Base/test.js" */
C['Base'] = klassExtend(UNDEFINED, function() {
    this._disposestore = {};
}, {
    _disposecountid: 0,
    'dispose': function() {
        var internal = ancestors(this, 'disposeInternal'),
            i = 0,
            len = internal.length;

        for (; i < len; i++) {
            internal[i].call(this);
        }

        for (i in this._disposestore) {
            off.apply(NULL, this._disposestore[i]);
        }

        for (i in this) {
            if (this[i] && isFunction(this[i]['dispose'])) {
                this[i]['dispose']();
            }
        }

        this.__proto__ = NULL;

        for (i in this) {
            this[i] = NULL;
            delete this[i];
        }

        return NULL;
    },
    'contract': function(el, e, handler) {
        on(el, e, handler);
        this._disposecountid++;
        this._disposestore[this._disposecountid] = [el, e, handler];

        return this._disposecountid;
    },
    'uncontract': function(id) {
        if (id) {
            var arg = this._disposestore[id];

            delete this._disposestore[id];

            off(arg[0], arg[1], arg[2]);
        }
    }
});
/* Test: "../../spec/_src/src/Event/test.js" */
ev = klassExtendBase(UNDEFINED, {
    'SWITCHCLICK': isTouch ? 'touchstart' : 'click',
    'SWITCHDOWN': isTouch ? 'touchstart' : 'mousedown',
    'SWITCHMOVE': isTouch ? 'touchmove' : 'mousemove',
    'SWITCHUP': isTouch ? 'touchend' : 'mouseup',
    'SWITCHOVER': isTouch ? 'touchstart' : 'mouseover',
    'SWITCHOUT': isTouch ? 'touchend' : 'mouseout',
    'LOAD': 'load',
    'CHANGE': 'change',
    'CLICK': 'click',
    'MOUSEDOWN': 'mousedown',
    'MOUSEMOVE': 'mousemove',
    'MOUSEUP': 'mouseup',
    'MOUSEOVER': 'mouseover',
    'MOUSEOUT': 'mouseout',
    'TOUCHSTART': 'touchstart',
    'TOUCHMOVE': 'touchmove',
    'TOUCHEND': 'touchend',
    'RESIZE': 'resize'
});
C['Event'] = ev;
ev = C['e'] = new ev();
/* Test: "../../spec/_src/src/ease/test.js" */
C['ease'] = {
    'linear': function(time, from, dist, duration) {
        return dist * time / duration + from;
    },
    'inCubic': function(time, from, dist, duration) {
        return dist * Math.pow(time / duration, 3) + from;
    },
    'outCubic': function(time, from, dist, duration) {
        return dist * (Math.pow(time / duration - 1, 3) + 1) + from;
    },
    'inOutCubic': function(time, from, dist, duration) {
        if ((time /= duration / 2) < 1) {
            return dist / 2 * Math.pow(time, 3) + from;
        }
        return dist / 2 * (Math.pow(time - 2, 3) + 2) + from;
    },
    'inQuart': function(time, from, dist, duration) {
        return dist * Math.pow(time / duration, 4) + from;
    },
    'outQuart': function(time, from, dist, duration) {
        return -dist * (Math.pow(time / duration - 1, 4) - 1) + from;
    },
    'inOutQuart': function(time, from, dist, duration) {
        if ((time /= duration / 2) < 1) {
            return dist / 2 * Math.pow(time, 4) + from;
        }
        return -dist / 2 * (Math.pow(time - 2, 4) - 2) + from;
    },
    'inQuint': function(time, from, dist, duration) {
        return dist * Math.pow(time / duration, 5) + from;
    },
    'outQuint': function(time, from, dist, duration) {
        return dist * (Math.pow(time / duration - 1, 5) + 1) + from;
    },
    'inOutQuint': function(time, from, dist, duration) {
        if ((time /= duration / 2) < 1) {
            return dist / 2 * Math.pow(time, 5) + from;
        }
        return dist / 2 * (Math.pow(time - 2, 5) + 2) + from;
    },
    'inSine': function(time, from, dist, duration) {
        return dist *
            (1 - Math.cos(time / duration * (Math.PI / 2))) + from;
    },
    'outSine': function(time, from, dist, duration) {
        return dist * Math.sin(time / duration * (Math.PI / 2)) + from;
    },
    'inOutSine': function(time, from, dist, duration) {
        return dist / 2 * (1 - Math.cos(Math.PI * time / duration)) + from;
    },
    'inExpo': function(time, from, dist, duration) {
        return dist * Math.pow(2, 10 * (time / duration - 1)) + from;
    },
    'outExpo': function(time, from, dist, duration) {
        return dist * (-Math.pow(2, -10 * time / duration) + 1) + from;
    },
    'inOutExpo': function(time, from, dist, duration) {
        if ((time /= duration / 2) < 1) {
            return dist / 2 * Math.pow(2, 10 * (time - 1)) + from;
        }
        return dist / 2 * (-Math.pow(2, -10 * --time) + 2) + from;
    },
    'inCirc': function(time, from, dist, duration) {
        return dist * (1 - Math.sqrt(1 - (time /= duration) * time)) + from;
    },
    'outCirc': function(time, from, dist, duration) {
        return dist *
            Math.sqrt(1 - (time = time / duration - 1) * time) + from;
    },
    'inOutCirc': function(time, from, dist, duration) {
        if ((time /= duration / 2) < 1) {
            return dist / 2 * (1 - Math.sqrt(1 - time * time)) + from;
        }
        return dist / 2 * (Math.sqrt(1 - (time -= 2) * time) + 1) + from;
    },
    'inQuad': function(time, from, dist, duration) {
        return dist * (time /= duration) * time + from;
    },
    'outQuad': function(time, from, dist, duration) {
        return -dist * (time /= duration) * (time - 2) + from;
    },
    'inOutQuad': function(time, from, dist, duration) {
        if ((time /= duration / 2) < 1) {
            return dist / 2 * time * time + from;
        }
        return -dist / 2 * ((--time) * (time - 2) - 1) + from;
    },
    'inBack': function(time, from, dist, duration) {
        return dist * (time /= duration) * time * ((easebackrate + 1) * time - easebackrate) + from;
    },
    'outBack': function(time, from, dist, duration) {
        return dist * ((time = time / duration - 1) * time *
                ((easebackrate + 1) * time + easebackrate) + 1) + from;
    },
    'inOutBack': function(time, from, dist, duration) {
        if ((time /= duration / 2) < 1) {
            return dist / 2 * (time * time *
                    (((easebackrate *= (1.525)) + 1) * time - easebackrate)) + from;
        }
        return dist / 2 * ((time -= 2) * time *
                (((easebackrate *= (1.525)) + 1) * time + easebackrate) + 2) + from;
    }
};
/* Test: "../../spec/_src/src/cssease/test.js" */
C['cssease'] = {
    'linear': 'linear',

    'inCubic': cssCubicBezierFormat('0.55,0.055,0.675,0.19'),
    'outCubic': cssCubicBezierFormat('0.215,0.61,0.355,1'),
    'inOutCubic': cssCubicBezierFormat('0.645,0.045,0.355,1'),

    'inQuart': cssCubicBezierFormat('0.895,0.03,0.685,0.22'),
    'outQuart': cssCubicBezierFormat('0.165,0.84,0.44,1'),
    'inOutQuart': cssCubicBezierFormat('0.77,0,0.175,1'),

    'inQuint': cssCubicBezierFormat('0.755,0.05,0.855,0.06'),
    'outQuint': cssCubicBezierFormat('0.23,1,0.32,1'),
    'inOutQuint': cssCubicBezierFormat('0.86,0,0.07,1'),

    'inSine': cssCubicBezierFormat('0.47,0,0.745,0.715'),
    'outSine': cssCubicBezierFormat('0.39,0.575,0.565,1'),
    'inOutSine': cssCubicBezierFormat('0.445,0.05,0.55,0.95'),

    'inExpo': cssCubicBezierFormat('0.95,0.05,0.795,0.035'),
    'outExpo': cssCubicBezierFormat('0.19,1,0.22,1'),
    'inOutExpo': cssCubicBezierFormat('1,0,0,1'),

    'inCirc': cssCubicBezierFormat('0.6,0.04,0.98,0.335'),
    'outCirc': cssCubicBezierFormat('0.075,0.82,0.165,1'),
    'inOutCirc': cssCubicBezierFormat('0.785,0.135,0.15,0.86'),

    'inQuad': cssCubicBezierFormat('0.55,0.085,0.68,0.53'),
    'outQuad': cssCubicBezierFormat('0.25,0.46,0.45,0.94'),
    'inOutQuad': cssCubicBezierFormat('0.455,0.03,0.515,0.955'),

    'inBack': [cssCubicBezierFormat('0.6,0,0.735,0.045'),cssCubicBezierFormat('0.6,-0.28,0.735,0.045')],
    'outBack': [cssCubicBezierFormat('0.175,0.885,0.32,1'),cssCubicBezierFormat('0.175,0.885,0.32,1.275')],
    'inOutBack': [cssCubicBezierFormat('0.68,0,0.265,1'),cssCubicBezierFormat('0.68,-0.55,0.265,1.55')]
};
/* Test: "../../spec/_src/src/Animation/test.js" */
(function() {
var ret = checkCSSAnimTranCheck([
        'animation',
        'webkitAnimation'
    ], 'Animation'),
    support = ret.support,
    prefix = ret.prefix,
    css_prefix = ret.css_prefix,
    event_key = ret.event_key,
    sheet = ret.sheet,
    Mine = C['Animation'] =
    klassExtendBase(function(el, property, option) {

    option = option || NULLOBJ;

    this._onComplete = option['onComplete'] || nullFunction;

    this._el = el;

    Mine['id']++;
    this._id = 'ciranim' + Mine['id'];

    var duration = option['duration'] || Mine['duration'],
        // easeOutExpo
        ease = option['ease'] || csseaseOutExpo,
        i,
        prop = {};

    for (i in property) {
        prop[i] = property[i];
        if (isNumber(prop[i])) {
            prop[i] = prop[i] + 'px';
        }
    }

    this.property = prop;

    prop = replaceAll(
        replaceAll(jsonStringify(prop), '"', EMPTY),
        ',',
        ';'
    );

    sheet.insertRule(
        '@' + css_prefix + 'keyframes ' + this._id + '{to' + prop + '}',
        sheet.cssRules.length);

    if (!isArray(ease)) {
        ease = [ease];
    }

    addCSSRule(this._id, css_prefix, duration, ease);

    if (!option['manual']) {
        this['start']();
    }
}, {
    _off: function() {
        off(this._el, event_key + 'End', this._end);
        off(this._el, 'animationend', this._end);
    },
    'disposeInternal': function() {
        this['stop']();
    },
    'start': function() {
        var mine = this;

        mine._end = endaction;
        on(mine._el, event_key + 'End', endaction);
        on(mine._el, 'animationend', endaction);

        addClass(mine._el, mine._id);

        function endaction(e) {
            var rule = sheet.cssRules,
                len = rule.length,
                name;

            mine._off();


            if (prefix == 'webkit') {
                for (; len--;) {
                    name = rule[len].name ||
                        (EMPTY + rule[len].selectorText).split('.')[1];

                    if (name == mine._id) {
                        sheet.deleteRule(len);
                    }
                }
                removeClass(mine._el, mine._id);

                css(mine._el, mine.property);
            }
            mine._onComplete(e);
        }
    },
    'stop': function() {
        var stopobj = {};

        stopobj[css_prefix + 'animation-play-state'] = 'paused';

        css(this._el, stopobj);
        this._off();
    }
});

function addCSSRule(id, css_prefix, duration, eases) {
    var i = 0,
        len = eases.length,
        rule = EMPTY;

    for (; i < len; i++) {
        rule += css_prefix + 'animation:' +
                id + ' ' +
                duration + 'ms ' +
                eases[i] + ' 0s 1 normal both;';
    }

    sheet.insertRule('.' + id +
        '{' + rule + '}',
        sheet.cssRules.length);
}

Mine['id'] = 0;
Mine['duration'] = 500;
Mine['support'] = support;
}());
/* Test: "../../spec/_src/src/Transition/test.js" */
(function() {
var ret = checkCSSAnimTranCheck([
        'transitionProperty',
        'webkitTransitionProperty'
    ], 'Transition'),
    support = ret.support,
    prefix = ret.prefix,
    css_prefix = ret.css_prefix,
    event_key = ret.event_key,
    sheet = ret.sheet,
    Mine;

Mine = C['Transition'] =
    klassExtendBase(function(el, property, option) {

    option = option || NULLOBJ;

    Mine['id']++;
    this._id = 'cirtrans' + Mine['id'];

    var transProp = [],
        animeProp = override({}, property),
        i,
        duration = option['duration'] || Mine['duration'],
        // easeOutExpo
        ease = option['ease'] || csseaseOutExpo;

    if (!isArray(ease)) {
        ease = [ease];
    }

    for (i in property) {
        transProp.push(i);
    }

    addCSSRule(this._id, css_prefix, duration, ease, transProp);

    this._el = el;
    this._property = property;
    this._onComplete = option['onComplete'] || nullFunction;

    if (!option['manual']) {
        this['start']();
    }
}, {
    'disposeInternal': function() {
        this['stop']();
    },
    'start': function() {
        var mine = this;

        mine._endfunc = function(e) {
            mine['stop']();
            setTimeout(function() {
                mine._onComplete(e);
            }, 1);
        };

        on(mine._el, event_key + 'End', mine._endfunc);
        on(mine._el, 'transitionend', mine._endfunc);
        addClass(mine._el, mine._id);
        css(mine._el, mine._property);
    },
    'stop': function() {
        var rule = sheet.cssRules,
            len = rule.length,
            name;

        off(this._el, event_key + 'End', this._endfunc);
        off(this._el, 'transitionend', this._endfunc);
        removeClass(this._el, this._id);

        for (; len--;) {
            name = rule[len].name ||
                (EMPTY + rule[len].selectorText).split('.')[1];

            if (name == this._id) {
                sheet.deleteRule(len);
                break;
            }
        }
    }
});

function addCSSRule(id, css_prefix, duration, eases, transProp) {
    var i = 0,
        len = eases.length,
        rule = EMPTY;

    rule +=
        css_prefix + 'transition-property:' + transProp.join(' ') + ';' +
        css_prefix + 'transition-duration:' + duration + 'ms;';

    for (; i < len; i++) {
        rule += css_prefix + 'transition-timing-function:' + eases[i] + ';';
    }

    sheet.insertRule('.' + id +
        '{' + rule + '}',
        sheet.cssRules.length);
}

Mine['id'] = 0;
Mine['support'] = support;
Mine['duration'] = 500;
}());
/* Test: "../../spec/_src/src/Tweener/test.js" */
Tweener = C['Tweener'] = klassExtendBase(function(target, property, option /* varless */, name, prop) {
    // var name,
    //     prop;

    option = option || NULLOBJ;

    this._target = target;
    this._property = [];

    for (name in property) {
        prop = property[name];
        prop['name'] = name;

        prop.distance = prop['to'] - prop['from'];
        prop['prefix'] = prop['prefix'] || EMPTY;
        prop['suffix'] = prop['suffix'] || 'px';

        this._property.push(prop);
    }

    this._duration = option['duration'] || Tweener['duration'];
    this._ease = option['ease'] || this.__ease;
    this._onComplete = option['onComplete'];

    if (!option['manual']) {
        this['start']();
    }
}, {
    'disposeInternal': function() {
        this['stop']();
    },
    // easeOutExpo
    __ease: function(time, from, dist, duration) {
        return dist * (-Math.pow(2, -10 * time / duration) + 1) + from;
    },
    _requestAnimationFrame: (function() {
        if (win.requestAnimationFrame) {
            return function(callback) {
                requestAnimationFrame(callback);
            };
        }
        if (win.webkitRequestAnimationFrame) {
            return function(callback) {
                webkitRequestAnimationFrame(callback);
            };
        }
        if (win.mozRequestAnimationFrame) {
            return function(callback) {
                mozRequestAnimationFrame(callback);
            };
        }
        if (win.oRequestAnimationFrame) {
            return function(callback) {
                oRequestAnimationFrame(callback);
            };
        }
        if (win.msRequestAnimationFrame) {
            return function(callback) {
                msRequestAnimationFrame(callback);
            };
        }

        return function(callback) {
            setTimeout(callback, 1000 / Tweener.fps);
        };
    }()),
    _loop: function() {
        var mine = this,
            items = Tweener.Items,
            item,
            now = dateNow(),
            time,
            n = items.length,
            i,
            len,
            prop;

        while (n--) {
            item = items[n];
            /* len = item.property.length; */
            i = item._property.length;
            time = now - item.begin;

            if (time < item._duration) {
                for (; i--;) {
                    prop = item._property[i];

                    Tweener._setProp(item._target, prop, item._ease(
                        time,
                        prop['from'],
                        prop.distance,
                        item._duration
                    ));
                }
            }
            else {
                for (; i--;) {
                    prop = item._property[i];

                    Tweener._setProp(item._target, prop, prop['to']);
                }
                if (item._onComplete) {
                    item._onComplete();
                }
                items.splice(n, 1);
            }
        }

        if (items.length) {
            mine._requestAnimationFrame(function() {
                mine._loop();
            });

            return;
        }

        this['stop']();
    },
    'start': function() {
        var mine = this;

        mine.begin = dateNow();

        Tweener.Items.push(mine);
        if (!Tweener.timerId) {
            Tweener.timerId = 1;
            mine._requestAnimationFrame(function() {
                mine._loop();
            });
        }
    },
    'stop': function() {
        Tweener.Items = [];
        clearInterval(Tweener.timerId);
        Tweener.timerId = NULL;
    }
});
Tweener._setProp = function(target, prop, point) {
    target[prop['name']] = prop['prefix'] + point + prop['suffix'];
};
/* Tweener.timerId = NULL; */
Tweener.Items = [];
Tweener['fps'] = 30;
Tweener['duration'] = 500;
/* Test: "../../spec/_src/src/selector/test.js" */
// var $base = function(){},
//     checkQuerySelector = /^(.+[\#\.\s\[>:,]|[\[:])/;
function $base() {}

C['$'] = function(query, _parent /* varless */, $el, instance, len) {
    // var $el,
    //     base,
    //     instance,
    //     len;

    // if (typeof query == 'string') {
    //     if (!_parent) {
    //         if (
    //             checkQuerySelector.test(query)
    //         ) {
    //             $el = doc.querySelectorAll(query);
    //         }
    //         else if (query[0] == '#') {
    //             $el = [doc.getElementById(query.substring(1, query.length))];
    //         }
    //         else if (query[0] == '.') {
    //             $el =
    //                 doc
    //                 .getElementsByClassName(query.substring(1, query.length));
    //         }
    //         else {
    //             $el = doc.getElementsByTagName(query);
    //         }
    //     }
    //     else {
    //         $el = _parent.querySelectorAll(query);
    //     }
    // }
    // else {
    //     $el = [query];
    // }
    if (typeof query == 'string') {
        $el = (_parent || doc).querySelectorAll(query);
    }
    else {
        $el = [query];
    }

    len = $el.length;
    instance = new $base();

    instance.length = len;

    for (; len--;) {
        instance[len] = $el[len];
    }

    return instance;
};
/* Test: "../../spec/_src/src/selector.methods/test.js" */
function selectorForExe(_this, func, arg) {
    var i = _this.length;

    arg = selectorMakeAry(arg);

    for (; i--;) {
        arg[0] = _this[i];
        func.apply(_this, arg);
    }

    return _this;
}
function selectorExe(_this, func, arg) {
    var ary = selectorMakeAry(arg);

    ary[0] = _this[0];

    return func.apply(NULL, ary);
}

function selectorMakeAry(arg) {
    var ary = [NULL];

    ary.push.apply(ary, arg);

    return ary;
}

var $_methods = C['$'].methods = {
    'querySelectorAll': function(query) {
        return this[0].querySelectorAll(query);
    },
    'find': function(query) {
        return C['$'](query, this);
    },
    'parent': function() {
        return C['$'](parent(this[0]));
    },
    'on': function() {
        return selectorForExe(this, on, arguments);
    },
    'off': function() {
        return selectorForExe(this, off, arguments);
    },
    'show': function() {
        return selectorForExe(this, show);
    },
    'hide': function() {
        return selectorForExe(this, hide);
    },
    'hasClass': function() {
        return selectorExe(this, hasClass, arguments);
    },
    'addClass': function() {
        return selectorForExe(this, addClass, arguments);
    },
    'removeClass': function() {
        return selectorForExe(this, removeClass, arguments);
    },
    'toggleClass': function() {
        return selectorForExe(this, toggleClass, arguments);
    },
    'css': function() {
        return selectorForExe(this, css, arguments);
    },
    'html': function() {
        return selectorExe(this, html, arguments);
    },
    'attr': function() {
        return selectorExe(this, attr, arguments);
    },
    'removeAttr': function() {
        return selectorForExe(this, removeAttr, arguments);
    },
    'append': function() {
        return selectorForExe(this, append, arguments);
    },
    'before': function() {
        return selectorExe(this, before, arguments);
    },
    'after': function() {
        return selectorExe(this, after, arguments);
    },
    'remove': function() {
        return selectorForExe(this, remove, arguments);
    }
};
/* Test: "../../spec/_src/src/selector.methods.animate/test.js" */
(function() {
var methods = $_methods,
    Animation = C['Animation'] || {},
    csssupport = Animation['support'],
    EASE = {};

if (csssupport && C['cssease']) {
    EASE = C['cssease'];
}
else if (C['ease']) {
    EASE = C['ease'];
}

methods['animate'] = function() {
    if (!this._animate) {
        this._animate = [];
    }

    return selectorForExe(this, animate, arguments);
}
methods['stop'] = function() {
    if (this._animate) {
        var i = this._animate.length;

        for (; i--;) {
            this._animate[i]['stop']();
        }

        this._animate = NULL;
    }

    return this;
}

function animate(el, params, duration, ease, callback) {
    var style = el.style,
        anime,
        option;

    if (isFunction(duration)) {
        callback = duration;
        duration = NULL;
    }
    if (isFunction(ease) && !callback) {
        callback = ease;
        ease = NULL;
    }

    if (ease) {
        ease = EASE[ease];
    }

    option = {
        'duration': duration,
        'ease': ease,
        'onComplete': callback
    };

    if (csssupport) {
        anime = new Animation(
            el,
            params,
            option
        );
    }
    else {
        anime = new C['Tweener'](
            el.style,
            convertTweenerParam(el, params),
            option
        );
    }

    this._animate.push(anime);
}

function convertTweenerParam(el, params) {
    var name,
        styled = computedStyle(el),
        tosplit,
        from,
        retobj = {};

    for (name in params) {
        tosplit = splitSuffix(params[name]);
        from = styled.getPropertyValue(name);

        if (!from || from == 'none') {
            from = 0;
        }
        else {
            from = splitSuffix(from)[2] * 1;
        }

        retobj[name] = {
            'from': from,
            'to': tosplit[2] * 1 || 0,
            'prefix': tosplit[1],
            'suffix': tosplit[3]
        };
    }

    return retobj;
}
}());
/* Test: "../../spec/_src/src/HashQuery/test.js" */
C['HashQuery'] = klassExtendBase(UNDEFINED,
{
    'typeCast': function(str) {
        var caststr = typeCast(str),
            matchstr;

        if (str == caststr) {
            matchstr = str.match('^["\'](.*)["\']$');

            if (matchstr) {
                return matchstr[1];
            }
        }

        return caststr;
    },
    'makeHash': function(conf) {
        var hash = '#' + conf['mode'],
            vars = conf['vars'],
            sign = '?',
            i;

        for (i in vars) {
            hash +=
                sign +
                i + '=' +
                jsonStringify(vars[i]);
            sign = '&';
        }

        return encodeURI(hash);
    },
    'setHash': function(vars) {
        location.hash = this['makeHash'](vars);
        /* return TRUE; */
    },
    'parseHash': function(hashvars) {
        var hash = decodeURIComponent(hashvars)
               .split('#')[1],
            mode,
            varsHash,
            vars,
            splitVar,
            i;

        if (!hash) {
            return FALSE;
        }

        hash = hash.split('?');

        mode = hash[0];

        if (hash[1]) {
            vars = {};
            varsHash = hash[1].split('&');

            // hashをオブジェクトに整形
            for (i = varsHash.length; i--;) {
                if (varsHash[i]) {
                    splitVar = varsHash[i].split('=');
                    vars[splitVar[0]] = this['typeCast'](splitVar[1]);
                }
            }
        }

        return {
            'mode': mode,
            'vars': vars
        };
    },
    'getHash': function() {
        return this['parseHash'](location.hash);
    }
});
/* Test: "../../spec/_src/src/Embed/test.js" */
/* C.Embed = function(config) { */
function Embed(config) {
    /* var embed = create(config['type'].toLowerCase()); */
    var embed = create(config['type']);

    embed['controls'] = config['controls'] ? TRUE : FALSE;
    embed['preload'] = config['preload'] || 'auto';
    embed['autoplay'] = config['autoplay'] ? TRUE : FALSE;
    embed['loop'] = config['loop'] ? TRUE : FALSE;
    embed['src'] = config['dir'] +
        config['name'] + '.' + config['suffix'][0][0];

    return embed;
}
/* }; */
/* C['Embed']['supportcheck'] = embedSupportCheck; */
function embedSupportCheck(type, suffix) {
    if (!win['HTML' + type + 'Element']) {
        return FALSE;
    }

    var type = type.toLowerCase(),
        embed = create(type),
        support = [],
        i = 0,
        len = suffix.length;

    for (; i < len; i++) {
        if (embed.canPlayType(type + '/' + suffix[i][1])) {
            support.push(suffix[i]);
        }
    }

    if (support.length) {
        return support;
    }
    return FALSE;
}
/* Test: "../../spec/_src/src/Media/test.js" */
Media = klassExtendBase(function(config) {
    var mine = this,
        autoplay = config['autoplay'],
        loop = config['loop'],
        media,
        ev_canplay = 'canplay',
        _parent = config['el'] || body;

    config['preload'] = 'auto';
    config['autoplay'] =
    config['loop'] = FALSE;

    switch (config['type']) {
        case 'Audio':
            media = C['Audio'](config);
            break;
        /* case 'Video': */
        default:
            media = C['Video'](config);
    }
    mine._el = media;

    if (media) {
        if (autoplay) {
            var autoplayid;
            autoplay = function() {
                mine['uncontract'](autoplayid);
                mine['play']();
            };

            autoplayid = this['contract'](media, ev_canplay, autoplay);
        }
        if (loop) {
            this['loop'](TRUE);
        }

        if (config['oncanplay']) {
            this['contract'](media, ev_canplay, config['oncanplay']);
        }
        if (config['onended']) {
            this['contract'](media, ev_ended, config['onended']);
        }

        append(_parent, media);
    }
}, {
    'disposeInternal': function() {
        remove(this._el);
    },
    'getElement': function() {
        return this._el;
    },
    'getCurrent': function() {
        return this._el.currentTime;
    },
    'getDuration': function() {
        return this._el.duration;
    },
    'setCurrent': function(num) {
        this._el.currentTime = num;
    },
    'loop': function(bool) {
        var mine = this;
        if (mine.loopid) {
            mine['uncontract'](mine.loopid);
            delete mine.loopid;
        }

        if (bool) {
            mine.loopid =
            mine['contract'](mine._el, ev_ended, function() {
                mine['stop']();
                mine['play']();
            });
        }
    },
    'play': function() {
        this._el.play();
    },
    'pause': function() {
        this._el.pause();
    },
    'stop': function() {
        this['setCurrent'](0);
        this['pause']();
    }
});
/* Test: "../../spec/_src/src/Audio/test.js" */
C['Audio'] = function(config) {
    config['type'] = 'audio';
    config['suffix'] = C['Audio']['support'];
    return Embed(config);
};
C['Audio']['support'] = embedSupportCheck('Audio', [
    ['mp3', 'mpeg'],
    ['wav', 'wav'],
    ['ogg', 'ogg'],
    ['m4a', 'mp4']
]);
/* Test: "../../spec/_src/src/Sound/test.js" */
C['Sound'] = function(config) {
    config['type'] = 'Audio';
    return new Media(config);
};
C['Sound']['support'] = C['Audio']['support'];
/* Test: "../../spec/_src/src/Video/test.js" */
C['Video'] = function(config) {
    config['type'] = 'video';
    config['suffix'] = C['Video']['support'];
    return Embed(config);
};
C['Video']['support'] = embedSupportCheck('Video', [
    ['webm', 'webm'],
    ['mp4', 'mp4'],
    ['ogv', 'ogg']
]);
/* Test: "../../spec/_src/src/Movie/test.js" */
C['Movie'] = function(config) {
    config['type'] = 'Video';
    return new Media(config);
};
C['Movie']['support'] = C['Video']['support'];
/* Test: "../../spec/_src/src/Ajax/test.js" */
C['Ajax'] = klassExtendBase(function(config) {
    if (config) {
        this['request'](config);
    }
}, {
    'request': function(vars) {
        if (vars.dataType == 'json') {
            delete vars.dataType;

            return this['json'](vars);
        }

        var url = vars['url'],
            callback = vars['callback'] || nullFunction,
            error = vars['error'] || nullFunction,
            type = vars['type'] || 'GET',
            query = EMPTY,
            xhr = this._xhr = new XMLHttpRequest();

        if (!vars['cash']) {
            if (!vars['query']) {
                vars['query'] = {};
            }

            vars['query']['cir' + dateNow()] = '0';
        }
        if (vars['query']) {
            query = vars['query'];

            if (isObject(query)) {
                query = encodeURI(makeQueryString(query));
            }
        }

        xhr.onreadystatechange = function() {
            if (xhr.readyState != 4) {
                return;
            }

            if (xhr.status == 200) {
                return callback(xhr.responseText, xhr);
            }

            error(xhr);
        }

        if (type == 'GET') {
            if (url.indexOf('?') != -1) {
                url += '&';
            }
            else {
                url += '?';
            }
            url += query;

            query = EMPTY;
        }

        xhr.open(type, url);

        if (type == 'POST') {
            xhr.setRequestHeader('Content-Type',
                    'application/x-www-form-urlencoded');
        }
        xhr.send(query);
    },
    'abort': function() {
        if (this._xhr) {
            this._xhr.abort();
        }
    },
    'json': function(vars) {
        var callback = vars['callback'],
            error = vars['error'];

        vars['callback'] = function(data) {
            callback(jsonParse(data));
        };
        vars['error'] = function(data) {
            if (error) {
                error(data);
            }
        };

        this['request'](vars);
    }
});
/* Test: "../../spec/_src/src/Handle/test.js" */
C['Handle'] = klassExtendBase(function(config) {
    this._config = config;
    this['attach']();
}, {
    'disposeInternal': function() {
        this['detach']();
    },
    'attach': function() {
        this._e(on);
    },
    'detach': function() {
        this._e(off);
    },
    _e: function(onoff) {
        var i;

        for (i in this._config['events']) {
            onoff(
                this._config['el'],
                i,
                this._config['events'][i]
            );
        }
    }
});
/* Test: "../../spec/_src/src/Brush/test.js" */
C['Brush'] = klassExtendBase(function(config) {
    this._canvas = config['canvas'];
    this._ctx = this._canvas.getContext('2d');

    this['setSize'](config);
}, {
    'setSize': function(vars) {
        if (vars['width']) {
            this._canvas.width = vars['width'];
        }
        if (vars['height']) {
            this._canvas.height = vars['height'];
        }
    },
    'pigment': function(vars) {
        var canv = create('canvas'),
            img = create('img');

        img.onload = function() {
            canv.width = vars['width'];
            canv.height = vars['height'];
            canv.getContext('2d').drawImage(img, 0, 0);

            vars.onload(canv, img);
        };
        img.src = vars['src'];

        return {'image': canv, 'x': vars.x || 0, 'y': vars.y || 0};
    },
    'pigments': function(vars, callback) {
        var mine = this,
            i,
            count = 0,
            ret = {};

        callback = callback || nullFunction;

        for (i in vars) {
            pigment(vars[i]);
        }

        function pigment(pig) {
            var pigload = pig['onload'] || nullFunction;

            pig.onload = function(canvas, img) {
                pigload(canvas, img);
                count--;

                if (count == 0) {
                    onload();
                }
            };

            ret[i] = mine['pigment'](pig);
            count++;
        }
        function onload() {
            callback(ret);
        }

        return ret;
    },
    'draw': function(layer) {
        var i = 0, len = layer.length, item;

        this._ctx.clearRect(0, 0, this._canvas.width, this._canvas.height);

        for (; i < len; i++) {
            item = layer[i];
            this._ctx.drawImage(item['image'], item['x'], item['y']);
        }
    }
});
C['Brush']['support'] = !!win['HTMLCanvasElement'];
/* Test: "../../spec/_src/src/Datetime/test.js" */
C['Datetime'] = function(str) {
    if (!str || isNumber(str)) {
        return new Date(str);
    }

    str = str.split(/[T:\-\+\/\s]/);

    if (str.length == 3) {
        str.push(0, 0, 0);
    }

    return new Date(
        str[0] * 1,
        str[1] - 1,
        str[2] * 1,
        str[3] * 1,
        str[4] * 1,
        str[5] * 1
    );
};
/* Test: "../../spec/_src/src/DataStore/test.js" */
C['DataStore'] = klassExtendBase(function() {
    this._data = {};
}, {
    'set': function(key, val) {
        this._data[key] = val;
    },
    'get': function(key) {
        if (key) {
            return this._data[key];
        }

        var ret = {},
            i;

        for (i in this._data) {
            ret[i] = this._data[i];
        }

        return ret;
    },
    'remove': function(key) {
        if (isDefined(this._data[key])) {
            delete this._data[key];
        }
    },
    'reset': function() {
        this._data = {};
    }
});
/* Test: "../../spec/_src/src/WebStorage/test.js" */
WebStorage = klassExtendBase(function(config) {
    this._n = config['namespace'] ? config['namespace'] + '-' : EMPTY;
    this._storage = win[config['type'] + 'Storage'];
}, {
    'set': function(key, val) {
        this._storage.setItem(this._n + key, jsonStringify(val));
    },
    'get': function(key) {
        var ret = {},
            i;

        if (key) {
            return jsonParse(this._storage.getItem(this._n + key));
        }

        for (i in this._storage) {
            if (!this._n) {
                ret[i] = jsonParse(this._storage[i]);
            }
            else {
                key = i.split(this._n)[1];
                if (key) {
                    ret[key] = jsonParse(this._storage[i]);
                }
            }
        }

        return ret;
    },
    'remove': function(key) {
        key = this._n + key;

        if (isDefined(this._storage.getItem(key))) {
            this._storage.removeItem(key);
        }
    },
    'reset': function() {
        if (!this._n) {
            return this._storage.clear();
        }

        var i;

        for (i in this._storage) {
            this.remove(i);
        }
    }
});
/* Test: "../../spec/_src/src/LocalStorage/test.js" */
C['LocalStorage'] = function(config) {
    config = config || {};

    config['type'] = 'local';
    return new WebStorage(config);
};
/* Test: "../../spec/_src/src/SessionStorage/test.js" */
C['SessionStorage'] = function(config) {
    config = config || {};

    config['type'] = 'session';
    return new WebStorage(config);
};
/* Test: "../../spec/_src/src/Deferred/test.js" */
C['Deferred'] = klassExtendBase(function() {
    this._queue = [];
}, {
    'isResolve': function() {
        return !this._queue;
    },
    'resolve': function(data) {
        if (this['isResolve']()) {
            return this;
        }

        var arr = this._queue,
            len = arr.length,
            i = 0;

        this._queue = NULL;
        this._data = data;
        for (; i < len; ++i) {
            arr[i](data);
        }

        return this;
    },
    'done': function(func) {
        this._queue ? this._queue.push(func) : func(this._data);

        return this;
    }
});
/* Test: "../../spec/_src/src/DragFlick/test.js" */
C['DragFlick'] = klassExtendBase(function(config) {
    this._contractid = [];
    this._config = config;

    config = config || NULLOBJ;
    if (!config['manual']) {
        this['attach']();
    }
}, {
    _t: function(e) {
        return e.changedTouches ? e.changedTouches[0] : e;
    },
    _amount: function(vars) {
        var mine = this,
            startX,
            startY,
            dragflg = FALSE;

        this._contractid.push(
            this['contract'](vars['el'], ev['SWITCHDOWN'], start),
            this['contract'](win, ev['SWITCHUP'], end)
        );

        function start(e) {
            var changed = mine._t(e);

            startX = changed.pageX;
            startY = changed.pageY;

            dragflg = TRUE;

            eventPrevent(e);
        }
        function end(e) {
            if (dragflg) {
                var changed = mine._t(e),
                    amount = {
                        'x': changed.pageX - startX,
                        'y': changed.pageY - startY
                    };

                vars['callback'](amount);

                dragflg = FALSE;
            }
        }
    },
    _direction: function(vars) {
        this._amount({
            'el': vars['el'],
            'callback': function(amount) {
                var boundary = vars['boundary'] || 0,
                    direction = {
                        'change': FALSE,
                        'top': FALSE,
                        'right': FALSE,
                        'bottom': FALSE,
                        'left': FALSE,
                        'amount': amount
                    };

                if (Math.abs(amount['x']) > boundary) {
                    if (amount['x'] > 0) {
                        direction['right'] = TRUE;
                    }
                    else if (amount['x'] < 0) {
                        direction['left'] = TRUE;
                    }

                    direction['change'] = TRUE;
                }

                if (Math.abs(amount['y']) > boundary) {
                    if (amount['y'] > 0) {
                        direction['bottom'] = TRUE;
                    }
                    else if (amount['y'] < 0) {
                        direction['top'] = TRUE;
                    }

                    direction['change'] = TRUE;
                }

                vars['callback'](direction);
            }
        });
    },
    'attach': function() {
        var mine = this,
            vars = this._config,
            el = vars['el'],
            start = vars['start'] || nullFunction,
            move = vars['move'] || nullFunction,
            end = vars['end'] || nullFunction,
            flg = FALSE,
            startX = 0,
            startY = 0;

        if (vars['direction']) {
            mine._direction({
                'el': el,
                'boundary': vars['boundary'],
                'callback': vars['direction']
            });
        }

        eventProxy(el, ev['SWITCHDOWN'], function(_e) {
            flg = TRUE;

            startX = _e.pageX;
            startY = _e.pageY;

            start({
                'e': _e,
                'move': {
                    'x': startX,
                    'y': startY
                }
            });
        });
        eventProxy(doc, ev['SWITCHMOVE'], function(_e) {
            if (flg) {
                move({
                    'e': _e,
                    'move': {
                        'x': _e.pageX - startX,
                        'y': _e.pageY - startY
                    }
                });
            }
        });
        eventProxy(doc, ev['SWITCHUP'], function(_e) {
            if (flg) {
                end({
                    'e': _e,
                    'move': {
                        'x': _e.pageX - startX,
                        'y': _e.pageY - startY
                    }
                });

                flg = FALSE;
            }
        });

        function eventProxy(el, ev, callback) {
            var handler = function(e) {
                    var changed = mine._t(e);
                    callback(changed);
                };

            mine._contractid.push(
                mine['contract'](el, ev, handler)
            );
        }
    },
    'detach': function() {
        var i = this._contractid.length;

        for (; i--;) {
            this['uncontract'](this._contractid[i]);
        }

        this._contractid = [];
    }
});
/* Test: "../../spec/_src/src/ExternalInterface/test.js" */
C['ExternalInterface'] = function(config) {
    config = config || NULLOBJ;

    var ext = ExternalIOS;

    if (config['android']) {
        ext = ExternalAndroid;
    }

    return new ext(config);
};
/* Test: "../../spec/_src/src/ExternalInterface.Android/test.js" */
ExternalAndroid = klassExtend(C['HashQuery'], function(config) {
    // this._android = config['android'];
    // this._externalObj = config['externalObj'];
    this._config = config;
}, {
    'call': function(conf) {
        this._config['android'][conf['mode']](this['makeHash'](conf));
    },
    'addCallback': function(name, func) {
        var mine = this;

        mine._config['externalObj'][name] = function(vars) {
            func(mine['parseHash'](vars)['vars']);
        };
    },
    'removeCallback': function(name) {
        delete this._config['externalObj'][name];
    }
});
/* Test: "../../spec/_src/src/ExternalInterface.IOS/test.js" */
ExternalIOS = klassExtend(C['HashQuery'], function() {
    this._ios = {};
}, {
    'disposeInternal': function() {
        var i;

        for (i in this._ios) {
            this['removeCallback'](i);
        }
    },
    'call': function(conf) {
        this['setHash'](conf);
    },
    'addCallback': function(name, func) {
        var mine = this;
        mine._ios[name] = function(e) {
            var hash = mine['getHash']();

            if (hash['mode'] == name) {
                func(hash['vars']);
            }
        };
        on(win, ev_hashchange, mine._ios[name]);
    },
    'removeCallback': function(name) {
        off(win, ev_hashchange, this._ios[name]);
        delete this._ios[name];
    }
});
/* Test: "../../spec/_src/src/Facebook/test.js" */
C['Facebook'] = klassExtendBase(UNDEFINED,
{
    'shareURL': function(vars) {
        return 'https://www.facebook.com/dialog/feed?' +
        'app_id=' + vars['app_id'] + '&' +
        'redirect_uri=' + vars['redirect_uri'] +
        makeQueryString({
            'link': vars['link'],
            'picture': vars['picture'],
            'name': vars['name'],
            'caption': vars['caption'],
            'description': vars['description']
        });
    }
});
/* Test: "../../spec/_src/src/FPS/test.js" */
C['FPS'] = klassExtendBase(function(config) {
    this._criterion =
    this._surver = config['criterion'];
    this._msecFrame = this._getFrame(this._criterion);
    this._enterframe = config['enterframe'];
    // this._prevtime =
    // this._nowtime =
    // this._loopid = 0;

    if (!config['manual']) {
        this['start']();
    }
}, {
    _prevtime: 0,
    _nowtime: 0,
    _loopid: 0,
    'disposeInternal': function() {
        this['stop']();
    },
    'getCriterion': function() {
        return this._criterion;
    },
    'getSurver': function() {
        return this._surver;
    },
    'getFrameTime': function() {
        return this._msecFrame;
    },
    'enter': function() {
        this._enterframe({
            'criterion': this._criterion,
            'surver': this._surver
        });
    },
    'start': function() {
        this._prevtime = dateNow();
        this._loopid = setInterval(this._loop, this._msecFrame, this);
    },
    _loop: function(mine) {
        mine._nowtime = dateNow();
        mine._surver = mine._getFrame(mine._nowtime - mine._prevtime);
        mine._prevtime = mine._nowtime;

        mine['enter']();
    },
    _getFrame: function(time) {
        return Math.round(1000 / time);
    },
    'stop': function() {
        clearInterval(this._loopid);
    }
});
/* Test: "../../spec/_src/src/ImgLoad/test.js" */
C['ImgLoad'] = klassExtendBase(function(config) {
    this._srcs = config['srcs'];
    this._srccount = this._srcs.length;
    this._loadedsrcs = [];
    this._contractid = [];
    this._onload = config['onload'] || nullFunction;
    this._onprogress = config['onprogress'] || nullFunction;
    // this._loadcount = 0;
    // this._progress = 0;

    if (!config['manual']) {
        this['start']();
    }
}, {
    _loadcount: 0,
    _progress: 0,
    _c: function() {
        this._loadcount++;

        this._progress = this._loadcount / this._srccount;
        this._onprogress(this._progress);

        if (this._loadcount >= this._srccount) {
            var i = this._contractid.length;

            for (; i--;) {
                this['uncontract'](this._contractid[i]);
            }
            this._contractid = [];

            this._onload(this._loadedsrcs);
        }
    },
    'start': function() {
        if (this.started) {
            return;
        }

        this.started = TRUE;

        var mine = this,
            img,
            i = mine._srccount;

        for (; i--;) {
            img = create('img');
            img.src = mine._srcs[i];

            mine._contractid.push(mine['contract'](img, ev['LOAD'], countup));
            mine._loadedsrcs.push(img);
        }

        function countup() {
            mine._c();
        }
    },
    'getProgress': function() {
        return this._progress;
    }
});
/* Test: "../../spec/_src/src/WindowLoad/test.js" */
C['WindowLoad'] = klassExtendBase(function(config) {
    if (config) {
        this._onload(config['onload']);
    }
}, {
    _onload: function(func) {
        var mine = this,
            disposeid,
            loaded = function() {
                mine['uncontract'](disposeid);
                func();
            };

        disposeid = mine['contract'](win, ev['LOAD'], loaded);
    }
});
/* Test: "../../spec/_src/src/Mobile/test.js" */
mb = C['Mobile'] = klassExtendBase(UNDEFINED, {
    'getZoom': function() {
        return body.clientWidth / win.innerWidth;
    },
    'isAndroid': function(ua) {
        return checkUserAgent(/Android/i, ua);
    },
    'isIOS': function(ua) {
        return checkUserAgent(/iPhone|iPad|iPod/i, ua);
    },
    'isWindows': function(ua) {
        return checkUserAgent(/IEMobile/i, ua);
    },
    'isFBAPP': function(ua) {
        return checkUserAgent(/FBAN/, ua);
    },
    'isMobile': function() {
        return (
            this['isAndroid']() ||
            this['isIOS']() ||
            this['isWindows']() ||
            this['isFBAPP']()
        );
    },
    'hideAddress': function() {
        this['contract'](win, ev['LOAD'], hideAddressHandler, FALSE);
        this['contract'](win, ev_orientationchange, hideAddressHandler, FALSE);

        function doScroll() {
            if (win.pageYOffset == 0) {
                pageTop();
            }
        }
        function hideAddressHandler() {
            setTimeout(doScroll, 100);
        }
    }
});
C['mobile'] = new mb();
/* Test: "../../spec/_src/src/PC/test.js" */
(function() {
var userAgent = win.navigator.userAgent.toLowerCase(),
    /* appVersion = win.navigator.appVersion.toLowerCase(), */
    browser;

if (userAgent.indexOf('opera') != -1) {
    browser = 'opera';
}
else if (userAgent.indexOf('msie') != -1) {
    // if (appVersion.indexOf("msie 9.") != -1) {
    //     browser = 'ie9';
    // }
    // else if (appVersion.indexOf("msie 8.") != -1) {
    //     browser = 'ie8';
    // }
    // else if (appVersion.indexOf("msie 7.") != -1) {
    //     browser = 'ie7';
    // }
    // else if (appVersion.indexOf("msie 6.") != -1) {
    //     browser = 'ie6';
    // }
    // else {
        browser = 'ie';
    /* } */
}
else if (userAgent.indexOf('chrome') != -1) {
    browser = 'chrome';
}
else if (userAgent.indexOf('safari') != -1) {
    browser = 'safari';
}
else if (userAgent.indexOf('gecko') != -1) {
    browser = 'gecko';
}
else {
    browser = 'ather';
}

pc = C['PC'] = klassExtendBase(UNDEFINED, {
    'isChrome': function(ua) {
        return browser == 'chrome';
    },
    'isSafari': function(ua) {
        return browser == 'safari';
    },
    'isGecko': function(ua) {
        return browser == 'gecko';
    },
    'isOpera': function(ua) {
        return browser == 'opera';
    },
    'isIE': function(ua) {
        /* return browser.indexOf('ie') != -1; */
        return browser == 'ie';
    }
});
C['pc'] = new pc();
}());
/* Test: "../../spec/_src/src/Orientation/test.js" */
C['Orientation'] = klassExtendBase(function(config) {
    this._config = config;

    this._contractid = [];

    this._portrait = {
        'portrait': TRUE,
        'landscape': FALSE
    };
    this._landscape = {
        'portrait': FALSE,
        'landscape': TRUE
    };

    this['attach']();
}, {
    'get': function() {
        if (isNumber(win.orientation)) {
            if (Math.abs(win.orientation) != 90) {
                return this._portrait;
            }

            return this._landscape;
        }

        if (
            win.innerWidth < win.innerHeight
        ) {
            return this._portrait;
        }

        return this._landscape;
    },
    'fire': function() {
        if (
            this['get']()['portrait']
        ) {
            return this._config['portrait']();
        }
        this._config['landscape']();
    },
    'attach': function(vars) {
        var proxyed = proxy(this, this['fire']);
        this._contractid.push(
            this['contract'](win, ev['LOAD'], proxyed),
            this['contract'](win, ev_orientationchange, proxyed),
            this['contract'](win, ev['RESIZE'], proxyed)
        );
    },
    'detach': function() {
        var i = this._contractid.length;

        for (; i--;) {
            this['uncontract'](this._contractid[i]);
        }

        this._contractid = [];
    }
});
C['Orientation']['support'] = 'onorientationchange' in win;
/* Test: "../../spec/_src/src/Modal/test.js" */
C['Modal'] = klassExtendBase(function(config) {
    config = config || NULLOBJ;

    // this._html = config['html'];
    // this._bgClose = config['bgClose'];
    // this._closeSelector = config['closeSelector'];
    this._config = config;

    var commoncss = {
        'display': 'none',
        'position': 'absolute'
    };

    this._scroll = new C['Scroll']();

    this._contractid = [];

    this._bg = create('div', {
        'class': 'cir-modal-bg'
    });
    css(this._bg, override({
        'z-ndex': 9998,
        'top': 0,
        'left': 0,
        'width': '100%',
        'height': '300%'
    }, commoncss));
    append(body, this._bg);

    this._inner = create('div', {
        'class': 'cir-modal-content'
    });
    css(this._inner, override({
        'z-index': 9999,
        'top': '50%',
        'left': '50%'
    }, commoncss));
    append(body, this._inner);

    if (!config['manual']) {
        this['open']();
    }
}, {
    _closeDetach: function() {
        var i = this._contractid.length;

        for (; i--;) {
            this['uncontract'](this._contractid[i]);
        }

        this._contractid = [];
    },
    'disposeInternal': function() {
        this['close']();
        remove(this._bg);
        remove(this._inner);
    },
    'open': function(text) {
        this._scroll['kill']();
        css(this._bg, {
            'top': body.scrollTop
        });

        show(this._bg);

        this['inner'](text);
    },
    'close': function() {
        this._closeDetach();

        html(this._inner, '');
        hide(this._inner);
        hide(this._bg);

        this._scroll['revival']();
    },
    'inner': function(text) {
        this._closeDetach();

        text = text || this._config['html'];

        html(this._inner, text);
        show(this._inner);

        var computed = computedStyle(this._inner);

        css(this._inner, {
            'margin-top':
            body.scrollTop - splitSuffix(computed.height)[2] / 2,
            'margin-left': -(splitSuffix(computed.width)[2] / 2)
        });

        if (this._config['bgClose']) {
            this['contract'](this._bg, ev['CLICK'], proxy(this, this['close']));
        }

        if (this._config['closeSelector']) {
            var close = $$child(this._config['closeSelector'], this._inner),
                i = close.length;

            for (; i--;) {
                this._contractid.push(
                    this['contract'](close[i],
                    ev['CLICK'],
                    proxy(this, this['close']))
                );
            }
        }
    }
});
/* Test: "../../spec/_src/src/DeviceAction/test.js" */
WindowAction = klassExtendBase(function(config) {
    // this._e = config['e'];
    // this._callback = config['callback'];
    this._config = config;

    /* if (config['callback']) { */
        this['attach']();
    /* } */
}, {
    'attach': function() {
        this['detach']();
        this._attachid = this['contract'](win, this._config['e'], this._config['callback']);
    },
    'detach': function() {
        this['uncontract'](this._attachid);
    }
});
/* Test: "../../spec/_src/src/DeviceOrientation/test.js" */
C['DeviceOrientation'] = function(config) {
    config['e'] = 'deviceorientation';
    return WindowAction(config);
};
C['DeviceOrientation']['support'] = 'ondeviceorientation' in win;
/* Test: "../../spec/_src/src/DeviceMotion/test.js" */
C['DeviceMotion'] = function(config) {
    config['e'] = 'devicemotion';
    return WindowAction(config);
};
C['DeviceMotion']['support'] = 'ondevicemotion' in win;
/* Test: "../../spec/_src/src/DeviceShake/test.js" */
(function() {
var Shake,
    convert;

/* if (C['mobile']['isMobile']()) { */
    if (C['DeviceOrientation']['support']) {
        Shake = C['DeviceOrientation'];
        convert = function(e) {
            return e;
        };
    }
    else if (C['DeviceMotion']['support']) {
        Shake = C['DeviceMotion'];
        convert = function(e) {
            return e['rotationRate'];
        };
    }
/* } */

C['DeviceShake'] = klassExtendBase(function(config) {
    this._shaker = new Shake();
    // this._limit = config['limit'];
    // this._waittime = config['waittime'];
    // this._direction = config['direction'];
    // this._callback = config['callback'];
    this._config = config;

    /* if (config['callback'] && config['direction']) { */
        this['attach']();
    /* } */
}, {
    convertName: {
        'x': 'gamma',
        'y': 'beta',
        'z': 'alpha'
    },
    'attach': function() {
        var mine = this,
            base_e,
            shaked = FALSE,
            direction = mine.convertName[mine._config['direction']],
            wraphandle = function(e) {
                e = convert(e);

                if (!base_e) {
                    base_e = e;
                }

                if (Math.abs(e[direction] - base_e[direction]) > mine._config['limit']) {
                    shaked = TRUE;
                    base_e = NULL;

                    mine._config['callback'](e);

                    setTimeout(function() {
                        shaked = FALSE;
                    }, mine._config['waittime']);
                }
            };

        mine._shaker['attach'](wraphandle);
    },
    'detach': function() {
        this._shaker['detach']();
    }
});

C['DeviceShake']['support'] = Shake ? TRUE : FALSE;

}());
/* Test: "../../spec/_src/src/FontImg/test.js" */
C['FontImg'] = klassExtendBase(function(config) {
    config = config || NULLOBJ;

    this._type = config['type'] ? config['type'] + '_' : EMPTY;
    this._tag = config['tag'] || 'span';
}, {
    'make': function(x) {
        var aryX = (EMPTY + x).split(EMPTY),
            tags = EMPTY,
            i = aryX.length;

        for (; i--;) {
            tags = '<' + this._tag +
                ' class="font_' + this._type + aryX[i] +
                '"></' + this._tag + '>' + tags;
        }

        return tags;
    }
});
/* Test: "../../spec/_src/src/Observer/test.js" */
C['Observer'] = klassExtendBase(function() {
    this._observed = {};
}, {
    'on': function(key, func) {
        if (!this._observed[key]) {
            this._observed[key] = [];
        }

        this._observed[key].push(func);
    },
    'one': function(key, func) {
        var mine = this,
            wrapfunc = function(vars) {
                func(vars);
                mine['off'](key, wrapfunc);
            };

        mine['on'](key, wrapfunc);
    },
    'off': function(key, func) {
        if (!func) {
            return delete this._observed[key];
        }

        var target = this._observed[key],
            i;

        if (target) {
            for (i = target.length; i--;) {
                if (func == target[i]) {
                    target.splice(i, 1);

                    if (target.length == 0) {
                        delete this._observed[key];
                    }

                    return TRUE;
                }
            }
        }

        return FALSE;
    },
    'fire': function(key, vars) {
        var target = this._observed[key],
            func,
            i;

        if (target) {
            for (i = target.length; i--;) {
                func = target[i];
                if (func) {
                    func(vars);
                }
            }
        }
    }
});
/* Test: "../../spec/_src/src/PreRender/test.js" */
C['PreRender'] = klassExtendBase(function(config) {
    this._els = config['els'];
    this._guesslimit = config['guesslimit'] || 30;
    this._onrendered = config['onrendered'];
    this._looptime = config['looptime'] || 100;
    this._loopblur = this._looptime + (config['loopblur'] || 20);
    /* this.loopid = this.prevtime = NULL; */

    if (!config['manual']) {
        this['start']();
    }
}, {
    'disposeInternal': function() {
        clearInterval(this.loopid);
    },
    'start': function() {
        var i,
            mine = this,
            prevtime = dateNow();

        for (i = mine._els.length; i--;) {
            show(mine._els[i]);
        }
        mine.loopid = setInterval(check, this._looptime, this);

        function check() {
            var gettime = dateNow(),
                difftime = gettime - prevtime,
                i;

            prevtime = gettime;

            if (difftime < mine._loopblur) {
                mine._guesslimit--;

                if (mine._guesslimit < 1) {
                    clearInterval(mine.loopid);

                    for (i = mine._els.length; i--;) {
                        hide(mine._els[i]);
                    }

                    mine._onrendered();
                }
            }
        }
    }
});
/* Test: "../../spec/_src/src/Route/test.js" */
C['Route'] = klassExtendBase(function(config) {
    // this._target = config['target'] || EMPTY;
    // this._noregex = config['noregex'];
    // this._action = config['action'];
    this._config = config;

    if (!config['manual']) {
        this['start']();
    }
}, {
    'start': function() {
        this['fire'](this._config['target']);
    },
    'fire': function(action) {
        var i;

        if (this._config['noregex'] && this._config['action'][action]) {
            return this._config['action'][action](action);
        }

        for (i in this._config['action']) {
            if (action.match(i)) {
                this._config['action'][i](i);
            }
        }
    }
});
/* Test: "../../spec/_src/src/ScriptLoad/test.js" */
C['ScriptLoad'] = klassExtendBase(function(config) {
    this._els = [];

    if (config) {
        this['requests'](config);
    }
}, {
    'requests': function(varary, callback) {
        var mine = this,
            i = 0,
            len = varary.length;

        for (; i < len; i++) {
            request(i);
        }

        function request(i) {
            var callback = varary[i]['callback'],
                check = function(e) {
                    callback(e);
                    countdown();
                };

            varary[i]['callback'] = check;

            mine['request'](varary[i]);
        }
        function countdown() {
            i--;

            if (i == 0) {
                callback(mine._els);
            }
        }
    },
    'request': function(vars) {
        var mine = this,
            script = create('script'),
            disposeid;

        /* script.type = 'text/javascript'; */
        script.src = vars['src'];
        append(body, script);
        mine._els.push(script);

        if (vars['callback']) {
            disposeid = mine['contract'](script, ev['LOAD'], function() {
                mine['uncontract'](disposeid);
                vars['callback'].apply(this, arguments);
            });
        }
    }
});
/* Test: "../../spec/_src/src/ServerMeta/test.js" */
(function() {
var xhr,
    isLoaded = FALSE;

C['ServerMeta'] = klassExtendBase(function(config) {
    config = config || NULLOBJ;

    var callback = config['callback'] || nullFunction;

    if (!xhr) {
        xhr = getHeader(function() {
            isLoaded = TRUE;
            callback(xhr);
        });
    }
    else {
        callback(xhr);
    }
}, {
    'date': function(callback) {
        return getHeader(function(xhr) {
            callback(xhr.getResponseHeader('Date'));
        });
    },
    'connection': function() {
        return getRes('Connection');
    },
    'contentLength': function() {
        return getRes('Content-Length');
    },
    'lastModified': function() {
        return getRes('Last-Modified');
    },
    'server': function() {
        return getRes('Server');
    },
    'contentType': function() {
        return getRes('Content-Type');
    },
    'acceptRanges': function() {
        return getRes('Accept-Ranges');
    },
    'keepAlive': function() {
        return getRes('Keep-Alive');
    }
});

function getRes(value) {
    if (isLoaded) {
        return xhr.getResponseHeader(value);
    }
    return FALSE;
}

function getHeader(callback) {
    var xhr = new XMLHttpRequest();

    xhr.onload = function() {
        callback(xhr);
    };

    xhr.open('HEAD', location.href + '?update' + dateNow() + '=1');
    xhr.send(NULL);

    return xhr;
}
}());
/* Test: "../../spec/_src/src/Surrogate/test.js" */
C['Surrogate'] = klassExtendBase(function(config) {
    this._delay = config['delay'];
    this._callback = config['callback'];
    // this._args = NULL;
    // this._waitid = NULL;
}, {
    'disposeInternal': function() {
        this['clear']();
    },
    'request': function(arg) {
        this._args = arg;
        this['clear']();
        this._waitid = setTimeout(this['flush'], this._delay, this);
    },
    'flush': function(mine) {
        mine = mine || this;

        mine._callback(mine._args);
    },
    'clear': function() {
        clearInterval(this._waitid);
    }
});
/* Test: "../../spec/_src/src/Throttle/test.js" */
C['Throttle'] = klassExtendBase(function(config) {
    this._waittime = config['waittime'];
    this._callback = config['callback'];
    // this._locked = FALSE;
    // this._waitid = NULL;
    // this._args = NULL;
}, {
    'disposeInternal': function() {
        this['unlock']();
    },
    'request': function(vars) {
        var mine = this;

        if (mine._locked) {
            mine._args = vars;
            return;
        }

        mine._callback(vars);
        mine['lock']();
        mine._waitid = setTimeout(function() {
            if (mine._args) {
                mine._callback(mine._args);
                mine._args = NULL;
            }

            mine['unlock']();
        }, mine._waittime, mine);
    },
    'lock': function() {
        this._locked = TRUE;
    },
    'unlock': function(mine) {
        mine = mine || this;

        mine._locked = FALSE;
        clearInterval(mine._waitid);
    }
});
/* Test: "../../spec/_src/src/Timer/test.js" */
C['Timer'] = function(config) {
    var limit = config['limit'],
        limitx1000 = limit * 1000,
        interval = config['interval'] * 1000,
        onupdate = config['onupdate'],
        ontimeup = config['ontimeup'],
        digit = template2digit(config['template']),
        starttime = 0,
        nowtime = 0,
        endtime = limitx1000,
        preformedtime = getPreformedNum(limit),
        loopid,
        instance = {
            'getLimit': function() {
                return limit;
            },
            'getTime': function() {
                return preformedtime;
            },
            'getProgress': function() {
                var diff = endtime - nowtime,
                    progress = 1 - diff / limitx1000;

                return progress;
            },
            'setUpdate': function(func) {
                onupdate = func;
            },
            'setTimeup': function(func) {
                ontimeup = func;
            },
            'countDown': function(vars) {
                nowtime = starttime = getTime();
                endtime = starttime + limitx1000;
                _loop();
            },
            'stop': function() {
                clearInterval(loopid);
            }
        };

    function loop() {
        loopid = setTimeout(_loop, interval);
    }
    function _loop() {
        nowtime = getTime();

        var diff = limit - (nowtime - starttime) / 1000;

        if (diff < 0) {
            diff = 0;
        }

        preformedtime = getPreformedNum(diff);

        onupdate(preformedtime);

        if (nowtime > endtime) {
            instance['stop']();
            ontimeup();
            return;
        }

        loop();
    }

    function getTime() {
        return dateNow();
    }

    function getPreformedNum(num) {
        var parsed = parseNum(num),
            integer = adaptDigit({
                num: parsed.integer,
                digit: digit.integer
            }),
            few = adaptDigit({
                num: parsed.few,
                digit: digit.few,
                isFew: TRUE
            });

        return (integer + '.' + few);
    }

    function adaptDigit(vars) {
        var num = EMPTY + vars.num,
            digit = vars.digit,
            isFew = vars.isFew,
            deff = digit - num.length;

        if (!isFew) {
            if (deff > -1) {
                return makeFill(deff, 0) + num;
            }

            return makeFill(digit, 9);
        }

        if (deff > 0) {
            return num + makeFill(deff, 0);
        }

        return num.slice(0, digit);
    }

    function makeFill(digit, num) {
        var ret = EMPTY;

        num = EMPTY + num;

        while (digit > 0) {
            ret += num;
            digit--;
        }

        return ret;
    }

    function parseNum(num) {
        num = (EMPTY + num).split('.');

        var integer = num[0],
            few = num[1] ? num[1] : EMPTY;

        return {
            integer: integer,
            few: few
        };
    }

    function template2digit(template) {
        var tempary = template.split('.');
        return {
            integer: tempary[0].length,
            few: tempary[1].length
        };
    }

    return instance;
};
/* Test: "../../spec/_src/src/Twitter/test.js" */
C['Twitter'] = klassExtendBase(UNDEFINED,
{
    'shareURL': function(vars) {
        var name = vars['name'],
            hash = vars['hash'];

        name = name ? ' 「' + name + '」' : EMPTY;
        hash = hash ? ' ' + hash : EMPTY;

        return 'https://twitter.com/intent/tweet?' + makeQueryString({
            'url': vars['redirect_uri'],
            'text': (vars['caption'] || EMPTY) + name + hash
        });
    }
});
/* Test: "../../spec/_src/src/XML/test.js" */
C['XML'] = klassExtendBase(function(config) {
    this._el = create('div');
    html(this._el, config['data']);
}, {
    '$': function(selector) {
        return $child(selector, this._el);
    },
    '$$': function(selector) {
        return $$child(selector, this._el);
    }
});
/* Test: "../../spec/_src/src/Model/test.js" */
C['Model'] = klassExtendBase(function(config) {
    config = config || NULLOBJ;

    var i,
        defaults = config['defaults'] || this['defaults'] || {},
        events = config['events'] || this['events'];

    this._validate = config['validate'] || this['validate'] || {};
    this._store = config['store'] || this['store'] || new C['DataStore']();
    this._observer = new C['Observer']();

    for (i in defaults) {
        this['set'](i, defaults[i]);
    }
    for (i in events) {
        this['on'](i, events[i]);
    }
}, {
    notice: function(eventname, key, val) {
        this._observer['fire'](eventname, this._store['get']());

        if (key) {
            this._observer['fire'](eventname + ':' + key, val);
        }
    },
    'set': function(key, val) {
        if (
            this._validate[key] &&
            !this._validate[key](key, val)
        ) {
            return this.notice('fail', key, val);
        }

        this._prev = this._store['get']();
        this._store['set'](key, val);

        this.notice(ev['CHANGE'], key, val);
    },
    'prev': function(key) {
        if (!key) {
            return this._prev;
        }
        return this._prev[key];
    },
    'get': function(key) {
        return this._store['get'](key);
    },
    'remove': function(key) {
        if (key) {
            var get = this._store['get'](key),
                ret = this._store['remove'](key);

            this.notice('remove', key, get);

            return ret;
        }
    },
    'reset': function() {
        var ret = this._store['reset']();

        this.notice('reset');
    },
    'on': function(key, func) {
        var proxyfunc = proxy(this, func);
        this._observer['on'](key, proxyfunc);

        return proxyfunc;
    },
    'off': function(key, func) {
        this._observer['off'](key, func);
    },
    'fire': function(key, vars) {
        return this._observer['fire'](key, vars);
    }
});
/* Test: "../../spec/_src/src/View/test.js" */
C['View'] = klassExtendBase(function(config) {
    var i;

    if (!config) {
        config = owner(this, this, {});
    }
    else {
        config = owner(this, config);
    }

    this['el'] = C['$'](config['el'] || this['el'] || create('div'));

    this['attach']();
    if (config['init']) {
        this['init']();
    }
}, {
    'disposeInternal': function() {
        this._e('off');
    },
    _e: function(methodname) {
        var i,
            j,
            $el,
            events = this['events'];

        for (i in events) {
            if (i == 'me') {
                $el = this['el'];
            }
            else {
                $el = this['el'].find(i);
            }

            for (j in events[i]) {
                $el[methodname](j, this[events[i][j]]);
            }
        }
    },
    'attach': function() {
        this._e('on');
    },
    'detach': function() {
        this._e('off');
    }
});
/* Test: "../../spec/_src/src/Validate/test.js" */
C['Validate'] = klassExtendBase(function(config) {
    config = config || {};

    /* this._level = config['level'] || 'warn'; */
    this._level = config['level'];

    owner(this, this, config);
}, {
    'displayError': function(key, text) {
        text = 'Validate Error:' + key + ' is ' + text + '.';

        switch (this.level) {
            case 'log':
                console.log(text);
                return FALSE;
            case 'error':
                throw new Error(text);
            case 'off':
                return FALSE;
            /* case 'warn': */
            default:
                console.warn(text);
                return FALSE;
        }
    },
    'isObject': function(key, value) {
        if (isObject(value)) {
            return TRUE;
        }
        this['displayError'](key, 'Object');
    },
    'isNumber': function(key, value) {
        if (isNumber(value)) {
            return TRUE;
        }
        this['displayError'](key, 'Number');
    },
    'isString': function(key, value) {
        if (isString(value)) {
            return TRUE;
        }
        this['displayError'](key, 'String');
    },
    'isFunction': function(key, value) {
        if (isFunction(value)) {
            return TRUE;
        }
        this['displayError'](key, 'Function');
    },
    'isBoolean': function(key, value) {
        if (isBoolean(value)) {
            return TRUE;
        }
        this['displayError'](key, 'Boolean');
    },
    'isArray': function(key, value) {
        if (isArray(value)) {
            return TRUE;
        }
        this['displayError'](key, 'Array');
    }
});

C['validate'] = new C['Validate']();
/* Test: "../../spec/_src/src/Scroll/test.js" */
C['Scroll'] = klassExtendBase(UNDEFINED, {
    'disposeInternal': function() {
        this['revival']();
        clearInterval(this._smoothid);
    },
    'to': scrollTo,
    'toTop': pageTop,
    'toBottom': function() {
        scrollTo(doc.height);
    },
    'smooth': function(target, callback) {
        var mine = this,
            max;

        callback = callback || nullFunction;

        if (!mine._smoothmove) {
            mine._smoothmove = TRUE;

            if (!isNumber(target)) {
                target = target.offsetTop;
            }

            max = doc.height - win.innerHeight;
            if (target > max) {
                target = max;
            }

            /* mine._before = win.scrollY; */
            mine._smoothid = setInterval(function() {
                var position = win.scrollY;
                position = (target - position) * 0.3 + position;

                if (Math.abs(target - position) < 1 || mine._before == position) {
                    scrollTo(target);
                    clearInterval(mine._smoothid);
                    callback(target);
                    return delete mine._smoothmove;
                }

                mine._before = position;
                scrollTo(position);
            }, 50);
        }
    },
    'kill': function() {
        if (!this._killscrollid) {
            css(body, {
                'overflow': 'hidden'
            });
            this._killscrollid = this['contract'](doc, ev['TOUCHMOVE'], eventPrevent);
        }
    },
    'revival': function() {
        if (this._killscrollid) {
            css(body, {
                'overflow': 'auto'
            });
            this['uncontract'](this._killscrollid);
            delete this._killscrollid;
        }
    }
});
/* Test: "%JASMINE_TEST_PATH%" */
(function() {
    var i;

    C['support'] = {
        'CSRF': new XMLHttpRequest()['withCredentials'] !== UNDEFINED,
        'Canvas': !!win['HTMLCanvasElement']
    };

    for (i in C) {
        if (isDefined(C[i]['support'])) {
            C['support'][i] = C[i]['support'];
        }
    }

    /* console.log(C['support']); */
}());
C['beer'] = function() {
console.log(
"\n" +
"   　　　　　　　　　　　　　　　　　　　　　　　　　　　,. -‐＝=､､\n" +
"　　　　　　 　　　　　　 ,. =＝=､､　ｏ 　 ○o. 　i 　　 　　 :::ト､\n" +
"　　　　　　 　　　　　_,/ 　 　 　｀ヾ´´`ヽ、　ﾟ　.ｌ 　 　　 　:::ﾄ､＼YEAHHHHHHHHHHHHHHHHHHHH!\n" +
"　　　　　 　　　　　 // 　　　　 .::::/　　:::::!=＝=l　　　　　 :::|ｽ.　',\n" +
"　 　 　 　 　　 　 /./ 　 　 　 .::::/　　 ::::l　　　 |　 __ ..... _::::|} ヽ l-､\n" +
"  　 　 　 　 　 ,ｨｸ ,'..__ 　　　.::::/ 　　 ::::l　　　 :l '´　　　　｀)'｀ヽ ヾ;＼\n" +
"　　　　　 　／::{ﾞ　ヽ、 ｀`丶､;/‐‐- ､::::l　　 　 `'::┬‐--＜_ 　 } ./;:::::＼\n" +
"　　　　　／::::::::!　　 ,＞---‐'ﾞｰ- ...__)ｲ　,.　-‐‐-､ﾄ､　　 |l::ヽ ／;';';';';::::＼\n" +
"  　 　 ／|::::::;';';'＼／｝　（ヽ、　　_/| 　 (´　　　 _,.ｨ!::ヽ. 　ヾｰ'´;';';';';';';';';:: /ヽ、\n"
);
};
if ($_methods) {
    $base.prototype = $_methods;
}
}());
