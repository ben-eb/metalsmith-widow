'use strict';

var test       = require('tape'),
    equal      = require('assert-dir-equal'),
    widow      = require('./'),
    markdown   = require('metalsmith-markdown'),
    Metalsmith = require('metalsmith');

test('should convert html files', function (t) {
    t.plan(1);

    Metalsmith('fixtures')
        .use(markdown())
        .use(widow())
        .build(function (err) {
            if (err) {
                t.fail();
            }
            t.doesNotThrow(function () {
                equal('fixtures/build', 'fixtures/expected');
            });
        });
});
