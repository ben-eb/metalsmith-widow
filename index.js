'use strict';

var widow   = require('widow'),
    extname = require('path').extname;

function plugin (options) {
    return function (files, metalsmith, done) {
        Object.keys(files).forEach(function (file) {
            if (extname(file) !== '.html') {
                return;
            }
            files[file].contents = new Buffer(widow(files[file].contents, options));
        });
        done();
    }
}

/**
 * Expose `plugin`.
 */

module.exports = plugin;
