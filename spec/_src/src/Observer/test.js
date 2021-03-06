/* Class: "../../../../js/src/Observer.js" */
describe('Observerは', function() {
    var c = window.C ? C : Global,
        observer;

    beforeEach(function() {
        // init
        observer = new c.Observer();
    });
    afterEach(function() {
        // clear
        if (observer.dispose) {
            observer.dispose();
        }
    });

    it('dispose()でインスタンスを解放する', function() {
        observer.dispose();
        expect(observer).toEqual({});
    });

    it('on()でイベントを登録する', function() {
        var count = 0,
            dammy = function() {
                count++;
            };

        observer.on('test', dammy);
        observer.on('test', dammy);
        observer.on('test1', function() {
            count += 2;
        });

        observer.fire('test');
        expect(count).toEqual(2);

        observer.fire('test1');
        expect(count).toEqual(4);
    });

    it('one()で一度のみ発火するイベントを登録する', function() {
        var args = {
                one: function() {
                }
            };

        spyOn(args, 'one').andCallThrough();

        observer.one('one', args.one);
        observer.fire('one');
        observer.fire('one');

        expect(args.one.callCount).toEqual(1);
    });

    it('off()でイベントを削除する', function() {
        var count = 0,
            dammy1 = function() {
                count++;
            };

        observer.on('test', dammy1);
        observer.off('test');

        observer.fire('test');

        expect(count).toEqual(0);
    });

    it('fire()でイベントを発火する', function() {
        var ret1 = 0,
            dammy1 = function() {
                ret1++;
            },
            ret2 = 0,
            dammy2 = function() {
                ret2++;
            };

        observer.on('test1', dammy1);
        observer.on('test2', dammy2);

        observer.fire('test1');

        expect(ret1).toEqual(1);
        expect(ret2).toEqual(0);

        observer.fire('test2');

        expect(ret1).toEqual(1);
        expect(ret2).toEqual(1);

        observer.on('test1', dammy2);

        observer.fire('test1');

        expect(ret1).toEqual(2);
        expect(ret2).toEqual(2);

        observer.fire('test2');

        expect(ret1).toEqual(2);
        expect(ret2).toEqual(3);
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

