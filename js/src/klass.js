/* Test: "../../spec/_src/src/klass/test.js" */
var klass = Global.klass = function(config) {
    'use strict';

    var init = config.init || function() {},
        properties = config.properties,
        extend = config.extend;

    if (extend) {
        Global.extend(init, extend);
    }

    override(init.prototype, properties);

    return init;
};
