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
