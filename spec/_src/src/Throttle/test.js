/* Class: "../../../../js/src/Throttle.js" */
describe('Throttleは', function() {
    var c = window.C ? C : Global,
        throttle,
        retarg = null,
        argfunction = function(vars) {
            retarg = vars;
        };

    beforeEach(function() {
        // init
        throttle = new c.Throttle({
            waittime: 100,
            callback: argfunction
        });
    });
    afterEach(function() {
        // clear
        retarg = null;
        if (throttle.dispose) {
            throttle.dispose();
        }
    });

    it('dispose()でインスタンスを解放する', function() {
        throttle.dispose();
        expect(throttle).toEqual({});
    });

    it('request(arg)でcallback関数をスロットル実行する', function() {
        throttle.request(0);
        throttle.request(1);
        throttle.request(2);

        expect(retarg).toEqual(0);

        waits(150);
        runs(function() {
            expect(retarg).toEqual(2);
            throttle.request(3);
            expect(retarg).toEqual(3);
        });
    });

    it('lock()で強制的にcallback関数をロックする', function() {
        throttle.lock();
        throttle.request(0);

        expect(retarg).toEqual(null);
    });

    it('unlock()で強制的にcallback関数をアンロックする', function() {
        throttle.lock();
        throttle.unlock();

        throttle.request(0);

        expect(retarg).toEqual(0);

        throttle.unlock();
        throttle.request(1);

        expect(retarg).toEqual(1);
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
