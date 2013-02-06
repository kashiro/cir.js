/* Test: "../../spec/_src/src/Base/test.js" */
Global['Base'] = klassExtend(UNDEFINED, function(config) {
    config = config || {};
    this._dispose = {};
}, {
    _disid: 0,
    'dispose': function() {
        var i;

        if (this['disposeInternal']) {
            this['disposeInternal']();
        }

        if (this._dispose) {
            for (i in this._dispose) {
                off.apply(NULL, this._dispose[i]);
            }
        }

        for (i in this) {
            if (this[i] && isFunction(this[i]['dispose'])) {
                this[i]['dispose']();
            }
            delete this[i];
        }

        this.__proto__ = NULL;
        return NULL;
    },
    'contract': function(element, e, handler) {
        on(element, e, handler);
        this._disid++;
        this._dispose[this._disid] = [element, e, handler];

        return this._disid;
    },
    'uncontract': function(id) {
        var arg = this._dispose[id];

        delete this._dispose[id];

        off(arg[0], arg[1], arg[2]);
    }
});
