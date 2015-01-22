# [metalsmith](https://github.com/segmentio/metalsmith)-widow [![Build Status](https://travis-ci.org/ben-eb/metalsmith-widow.svg?branch=master)](https://travis-ci.org/ben-eb/metalsmith-widow) [![NPM version](https://badge.fury.io/js/metalsmith-widow.svg)](http://badge.fury.io/js/metalsmith-widow) [![Dependency Status](https://gemnasium.com/ben-eb/metalsmith-widow.svg)](https://gemnasium.com/ben-eb/metalsmith-widow)

> Add non breaking spaces to the ends of block level elements, with Metalsmith.

*If you have any issues with the output of this plugin, please use the [widow tracker](https://github.com/ben-eb/widow/issues).*

Install via [npm](https://npmjs.org/package/metalsmith-widow):

```
npm install metalsmith-widow --save
```

## Example

```js
var widow      = require('metalsmith-widow'),
    markdown   = require('metalsmith-markdown'),
    Metalsmith = require('metalsmith');

Metalsmith('fixtures')
    .use(markdown())
    .use(widow())
    .build(function (err) {
        if (err) {
            throw err;
        }
    });
```

With custom options:

```js
Metalsmith('fixtures')
    .use(markdown())
    .use(widow({
        selectors: 'h1.h2.h3.h4.h5.h6'.split('.')
    }))
    .build(function (err) {
        if (err) {
            throw err;
        }
    });
```

## Options

See the [widow documentation](https://github.com/ben-eb/widow#options).

## Contributing

Pull requests are welcome. If you add functionality, then please add unit tests to cover it.

## License

MIT © Ben Briggs
