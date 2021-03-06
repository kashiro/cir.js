/* Class: "../../../../js/src/ScriptLoad.js" */
describe('ScriptLoadは', function() {
    var scriptload;

    beforeEach(function() {
        // init
        if (window.C) {
            scriptload = new C.ScriptLoad();
        }
        else {
            scriptload = new Global.ScriptLoad();
        }
    });
    afterEach(function() {
        // clear
        if (scriptload.dispose) {
            scriptload.dispose();
        }
    });

    it('dispose()でインスタンスを解放する', function() {
        scriptload.dispose();
        expect(scriptload).toEqual({});
    });

    it('request({src, callback})でscriptファイルをhtmlに読み込む', function() {
        var callbackarg = 0,
            arg = {
                src: '/spec/common/test.js',
                callback: function(e) {
                    callbackarg = 1;
                }
            };

        scriptload.request(arg);

        waits(100);
        runs(function() {
            expect(callbackarg).toEqual(1);
            expect(
                document.querySelector('script[src="/spec/common/test.js"]')
            ).toBeDefined();
        });
    });

    it('requests([{src, callback}], callback)で複数scriptファイルをhtmlに読み込む', function() {
        var arg = [
                {
                    src: '/spec/common/test2.js',
                    callback: function() {}
                },
                {
                    src: '/spec/common/test3.js',
                    callback: function(e) {
                    }
                }
            ],
            ret = false;

        scriptload.requests(arg, function() {
            ret = true;
        });

        waits(100);
        runs(function() {
            expect(
                document.querySelectorAll('script[src="/spec/common/test2.js"]')
            ).toBeDefined();
            expect(
                document.querySelectorAll('script[src="/spec/common/test3.js"]')
            ).toBeDefined();

            expect(ret).toBeTruthy();
        });
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
