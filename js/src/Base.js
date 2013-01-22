/* Test: "../../spec/_src/src/Base/test.js" */
var Base = Global.Base = klass({
    init: function() {
        this._dispose = [];
    },
    properties: {
        dispose: function() {
            var i;

            if (this._dispose) {
                i = this._dispose.lenght;

                for (; i--;) {
                    off.apply(null, this._dispose[i]);
                }
            }

            for (i in this) {
                delete this[i];
            }

            this.__proto__ = null;
            return null;
        },
        ondispose: function(element, e, handler) {
            on(element, e, handler);
            this._dispose.push([element, e, handler]);
        },
        _orgdis: function() {
            this.__proto__.__proto__.dispose.call(this);
        }
    }
});
