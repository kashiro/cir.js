/* Test: "../../spec/_src/src/ScriptLoad/test.js" */
Global.ScriptLoad = Global.klass({
    properties: {
        requests: function(varary) {
            var i = 0,
                len = varary.length;

            for (; i < len; i++) {
                this.request(varary[i]);
            }
        },
        request: function(vars) {
            var script = create('script');

            script.type = 'text/javascript';
            script.src = vars.src;
            append(doc.body, script);

            if (vars.callback) {
                on(script, Global.event.load, vars.callback);
            }
        }
    }
});
