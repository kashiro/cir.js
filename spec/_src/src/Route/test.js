/* Class: "../../../../js/src/Route.js" */
describe('Routeは', function() {
    var c = window.C ? C : Global,
        route;

    beforeEach(function() {
        // init
        route = new c.Route({
            /* target: document.body.className, */
            /* target: location.pathname, */
            target: location.hash,
            action: {
                '^#hoge$': function() {
                    // write code.
                },
                '^#fuga$': function() {
                    // write code.
                }
            },
            manual: true
        });
    });
    afterEach(function() {
        // clear
        if (route.dispose) {
            route.dispose();
        }
    });

    it('dispose()でインスタンスを解放する', function() {
        route.dispose();
        expect(route).toEqual({});
    });

    it('targetオプションに対して、actionオプションのキー名で正規表現を行い、当てはまったものを実行する', function() {
        var count = 0;
        route = new c.Route({
            target: 'test',
            action: {
                'test': function() {
                    count += 1;
                },
                'tset': function() {
                    count += 2;
                }
            }
        });

        expect(count).toEqual(1);

        count = 0;
        route = new c.Route({
            target: 'test',
            action: {
                'test': function() {
                    count += 1;
                },
                't.*t': function() {
                    count += 2;
                }
            }
        });

        expect(count).toEqual(3);
    });

    it('noregexオプションで正規表現を使用せずルーティングする', function() {
        var count = 0;
        route = new c.Route({
            target: 'test',
            noregex: true,
            action: {
                'test': function() {
                    count += 1;
                },
                't.*t': function() {
                    count += 2;
                }
            }
        });

        expect(count).toEqual(1);
        route.fire('test');
        expect(count).toEqual(2);
        route.fire('t.*t');
        expect(count).toEqual(4);
    });

    it('start()でルーティングを実行する', function() {
        var count = 0;

        route = new c.Route({
            target: 'test',
            action: {
                'test': function() {
                    count += 1;
                },
                'tset': function() {
                    count += 2;
                }
            },
            manual: true
        });

        expect(count).toEqual(0);
        route.start();
        expect(count).toEqual(1);
        route.start();
        expect(count).toEqual(2);
    });

    it('fire(action)でactionオプションの対応する関数を実行する', function() {
        var count = 0;

        route = new c.Route({
            target: 'sample',
            action: {
                'test': function() {
                    count += 1;
                }
            }
        });

        expect(count).toEqual(0);
        route.fire('test');
        expect(count).toEqual(1);
        route.fire('test');
        expect(count).toEqual(2);
    });
});
/*
describe('XXXは', function() {
    it('XXX', function() {
        //spyOn
        //呼び出しに対してargumentsを返却
        spyOn(obj, 'method').andReturn(arguments);
        //呼び出しに対して例外を発生させる
        spyOn(obj, 'method').andThrow(exception);
        //呼び出しに対して代わりの関数を実行させる
        spyOn(obj, 'method').andCallFake(function);
        //呼び出しに対してそのまま本来のメソッドを呼び出す
        spyOn(obj, 'method').andCallThrough(function);

        // spy後
        // 呼び出しが行われたか
        expect(obj, method).toHaveBeenCalled();
        // 呼び出しがargumentsを伴って呼び出されたか
        expect(obj, method).toHaveBeenCalledWith(arguments);

        //呼び出し回数
        obj.method.callCount;
        //直近の読み出し時の引数
        obj.mostRecentCall.args
        // i番目の呼び出し時
        obj.argsForCall[i]

        runs(function() {
            //処理
        });
        // １秒待ち
        waits(1000);
        runs(function() {
            //処理
        });

        //aがbと同じである
        expect(a).toEqual(b);
        //aがbと同じでない
        expect(a).not.toEqual(b);

        //aがbと同じオブジェクトである
        expect(a).toBe(b);
        //aがbと同じオブジェクトでない
        expect(a).not.toBe(b);

        //aがundefinedでない
        expect(a).toBeDefined();
        //aがundefinedである
        expect(a).not.toBeDefined();

        //aがnullである
        expect(a).toBeNull();
        //aがnullでない
        expect(a).not.toBeNull();

        //aがtrueである
        expect(a).toBeTruthy();
        //aがfalseである
        expect(a).toBeFalsy();

        //aにbが含まれている
        expect(a).toBeContain(b);
        //aにbが含まれてない
        expect(a).not.toBeContain(b);

        //aがbより小さい
        expect(a).toBeLessThan(b);
        //aがbより大きい
        expect(a).toBeGreaterThan(b);

        //a（function）が例外をスロー
        expect(a).toThrow(e);
        //a（function）が例外をスローしない
        expect(a).not.toThrow(e);
    });
});
*/
