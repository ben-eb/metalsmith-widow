'use strict';

var equal      = require('assert-dir-equal'),
    widow      = require('./'),
    markdown   = require('metalsmith-markdown'),
    Metalsmith = require('metalsmith');

describe(require('./package.json').name, function () {
    it('should convert html files', function (done) {
        Metalsmith('fixtures')
            .use(markdown())
            .use(widow())
            .build(function (err) {
                if (err) {
                    return done(err);
                }
                equal('fixtures/build', 'fixtures/expected');
                done();
            });
    });
});
