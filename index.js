'use strict';

var widow   = require('widow'),
    extname = require('path').extname;

function plugin (options) {
    return function (files, metalsmith, done) {
        Object.keys(files).forEach(function (file) {
            if (extname(file) !== '.html') {
                return;
            }
            var contents = widow(files[file].contents, options);
            files[file].contents = new Buffer(contents);
        });
        done();
    }
}

/**
 * Expose `plugin`.
 */

module.exports = plugin;
