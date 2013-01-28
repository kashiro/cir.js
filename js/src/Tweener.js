/* Test: "../../spec/_src/src/Tweener/test.js" */
(function() {
var Mine = Global['Tweener'] = klass({
    'extend': Base,
    'init': function(target, property, option) {
        var name,
            prop;

        option = option || {};

        this._target = target;
        this.property = [];

        for (name in property) {
            prop = property[name];
            prop['name'] = name;

            prop.distance = prop['to'] - prop['from'];
            prop['prefix'] = prop['prefix'] || '';
            prop['suffix'] = prop['suffix'] || 'px';

            this.property.push(prop);
        }

        this._duration = option['duration'] || Mine['Duration'];
        this.ease = option['ease'] || this._ease;
        this.onComplete = option['onComplete'];

        if (!option['manual']) {
            this['start']();
        }
    },
    'properties': {
        'dispose': function() {
            this['stop']();
            this._orgdis();
        },
        // easeOutExpo
        _ease: function(time, from, dist, duration) {
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
                setTimeout(callback, 1000 / Mine.FPS);
            };
        }()),
        loop: function() {
            var mine = this,
                items = Mine.Items,
                item,
                now = dateNow(),
                time,
                n = items.length,
                i,
                len,
                prop;

            while (n--) {
                item = items[n];
                len = item.property.length;
                time = now - item.begin;

                if (time < item._duration) {
                    for (i = 0; i < len; i++) {
                        prop = item.property[i];

                        Mine._setProp(item._target, prop, item.ease(
                            time,
                            prop['from'],
                            prop.distance,
                            item._duration
                        ));
                    }
                }
                else {
                    for (i = 0; i < len; i++) {
                        prop = item.property[i];

                        Mine._setProp(item._target, prop, prop['to']);
                    }
                    if (item.onComplete) {
                        item.onComplete();
                    }
                    items.splice(n, 1);
                }
            }

            if (items.length) {
                mine._requestAnimationFrame(function() {
                    mine.loop();
                });

                return TRUE;
            }

            this['stop']();
        },
        'start': function() {
            var mine = this;

            mine.begin = dateNow();

            Mine.Items.push(mine);
            if (!Mine.timerId) {
                Mine.timerId = 1;
                mine._requestAnimationFrame(function() {
                    mine.loop();
                });
            }
        },
        'stop': function() {
            Mine.Items = [];
            clearInterval(Mine.timerId);
            Mine.timerId = NULL;
        }
    }
});
Mine._setProp = function(target, prop, point) {
    target[prop['name']] = prop['prefix'] + point + prop['suffix'];
};
/* Mine.timerId = NULL; */
Mine.Items = [];
Mine['FPS'] = 30;
Mine['Duration'] = 500;
}());
