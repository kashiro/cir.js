/* Class: "../../../../js/src/Facebook.js" */
describe('Facebookは', function() {
    var c = window.C ? C : Global,
        facebook;

    beforeEach(function() {
        // init
        facebook = new c.Facebook();
    });
    afterEach(function() {
        // clear
        if (facebook.dispose) {
            facebook.dispose();
        }
    });

    it('dispose()でインスタンスを解放する', function() {
        facebook.dispose();
        expect(facebook).toEqual({});
    });

    it('shareURL(options)でfacebook用のShareURLを作成する', function() {
        var url = facebook.shareURL({
                app_id: 168589393194273,
                redirect_uri: 'http://atms.sakura.ne.jp/wallsearch',
                link: 'http://google.co.jp',
                picture: 'http://atms.sakura.ne.jp/wallsearch/img/fav.png',
                name: 'テスト名前',
                caption: 'テストキャプション',
                description: 'テストデスクリプション'
            });

        expect(url).toEqual('https://www.facebook.com/dialog/feed?app_id=168589393194273&redirect_uri=http://atms.sakura.ne.jp/wallsearchlink=http%3A%2F%2Fgoogle.co.jp&picture=http%3A%2F%2Fatms.sakura.ne.jp%2Fwallsearch%2Fimg%2Ffav.png&name=%E3%83%86%E3%82%B9%E3%83%88%E5%90%8D%E5%89%8D&caption=%E3%83%86%E3%82%B9%E3%83%88%E3%82%AD%E3%83%A3%E3%83%97%E3%82%B7%E3%83%A7%E3%83%B3&description=%E3%83%86%E3%82%B9%E3%83%88%E3%83%87%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%97%E3%82%B7%E3%83%A7%E3%83%B3');
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

