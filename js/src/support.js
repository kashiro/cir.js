/* Test: "%JASMINE_TEST_PATH%" */
(function() {
    var i;

    C['support'] = {};

    for (i in C) {
        if (isDefined(C[i]['support'])) {
            C['support'][i] = C[i]['support'];
        }
    }

    /* console.log(C['support']); */
}());
