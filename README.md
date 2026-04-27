<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# groupBy

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Group values according to an indicator function.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->



<section class="usage">

## Usage

```javascript
import groupBy from 'https://cdn.jsdelivr.net/gh/stdlib-js/utils-group-by@esm/index.mjs';
```

#### groupBy( collection, \[options,] indicator )

Groups values according to an `indicator` function, which specifies which group an element in the input `collection` belongs to.

```javascript
function indicator( v ) {
    return v[ 0 ];
}
var arr = [ 'beep', 'boop', 'foo', 'bar' ];

var out = groupBy( arr, indicator );
// returns { 'b': [ 'beep', 'boop', 'bar' ], 'f': [ 'foo' ] }
```

An `indicator` function is provided two arguments:

-   **value**: collection element.
-   **index**: collection index.

```javascript
function indicator( v, i ) {
    console.log( '%d: %s', i, v );
    return v[ 0 ];
}
var arr = [ 'beep', 'boop', 'foo', 'bar' ];

var out = groupBy( arr, indicator );
// returns { 'b': [ 'beep', 'boop', 'bar' ], 'f': [ 'foo' ] }
```

The function accepts the following `options`:

-   **returns**: specifies the output format. If the option equals `'values'`, the function outputs element values. If the option equals `'indices'`, the function outputs element indices. If the option equals `'*'`, the function outputs both element indices and values. Default: `'values'`.
-   **thisArg**: execution context.

By default, the function returns element values. To return element indices, set the `returns` option to `'indices'`.

```javascript
function indicator( v ) {
    return v[ 0 ];
}
var arr = [ 'beep', 'boop', 'foo', 'bar' ];

var opts = {
    'returns': 'indices'
};
var out = groupBy( arr, opts, indicator );
// returns { 'b': [ 0, 1, 3 ], 'f': [ 2 ] }
```

To return index-element pairs, set the `returns` option to `'*'`.

```javascript
function indicator( v ) {
    return v[ 0 ];
}
var arr = [ 'beep', 'boop', 'foo', 'bar' ];

var opts = {
    'returns': '*'
};
var out = groupBy( arr, opts, indicator );
// returns { 'b': [ [ 0, 'beep' ], [ 1, 'boop' ], [ 3, 'bar' ] ], 'f': [ [ 2, 'foo' ] ] }
```

To set the `indicator` execution context, provide a `thisArg`.

```javascript
function indicator( v ) {
    this.count += 1;
    return v[ 0 ];
}
var context = {
    'count': 0
};
var opts = {
    'thisArg': context
};
var arr = [ 'beep', 'boop', 'foo', 'bar' ];

var out = groupBy( arr, opts, indicator );
// returns { 'b': [ 'beep', 'boop', 'bar' ], 'f': [ 'foo' ] }

console.log( context.count );
// => 4
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   A `collection` may be either an [`Array`][mdn-array], [`Typed Array`][mdn-typed-array], or an array-like [`Object`][mdn-object] (excluding `strings` and `functions`).

-   The value returned by an `indicator` function should be a value which can be serialized as an `object` key. As a counterexample,

    ```javascript
    function indicator( v ) {
        return {};
    }
    var arr = [ 'beep', 'boop', 'foo', 'bar' ];

    var out = groupBy( arr, indicator );
    // returns { '[object Object]': [ 'beep', 'boop', 'foo', 'bar' ] }
    ```

    while each group identifier is unique, all collection elements resolve to the same group because each group identifier serializes to the same `string`.

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="module">

import randu from 'https://cdn.jsdelivr.net/gh/stdlib-js/random-base-randu@esm/index.mjs';
import floor from 'https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-floor@esm/index.mjs';
import groupBy from 'https://cdn.jsdelivr.net/gh/stdlib-js/utils-group-by@esm/index.mjs';

var vals;
var arr;
var out;
var i;
var j;

vals = [ 'beep', 'boop', 'foo', 'bar', 'woot', 'woot' ];

// Generate a random collection...
arr = new Array( 100 );
for ( i = 0; i < arr.length; i++ ) {
    j = floor( randu()*vals.length );
    arr[ i ] = vals[ j ];
}

function indicator( v ) {
    // Use the first letter of each element to define groups:
    return v[ 0 ];
}

// Compute the groups:
out = groupBy( arr, indicator );
console.log( out );

</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/utils-bifurcate-by`][@stdlib/utils/bifurcate-by]</span><span class="delimiter">: </span><span class="description">split values into two groups according to a predicate function.</span>
-   <span class="package-name">[`@stdlib/utils-count-by`][@stdlib/utils/count-by]</span><span class="delimiter">: </span><span class="description">group values according to an indicator function and return group counts.</span>
-   <span class="package-name">[`@stdlib/utils-group`][@stdlib/utils/group]</span><span class="delimiter">: </span><span class="description">group values as arrays associated with distinct keys.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2026. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/utils-group-by.svg
[npm-url]: https://npmjs.org/package/@stdlib/utils-group-by

[test-image]: https://github.com/stdlib-js/utils-group-by/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/utils-group-by/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/utils-group-by/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/utils-group-by?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/utils-group-by.svg
[dependencies-url]: https://david-dm.org/stdlib-js/utils-group-by/main

-->

[chat-image]: https://img.shields.io/badge/zulip-join_chat-brightgreen.svg
[chat-url]: https://stdlib.zulipchat.com

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/utils-group-by/tree/deno
[deno-readme]: https://github.com/stdlib-js/utils-group-by/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/utils-group-by/tree/umd
[umd-readme]: https://github.com/stdlib-js/utils-group-by/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/utils-group-by/tree/esm
[esm-readme]: https://github.com/stdlib-js/utils-group-by/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/utils-group-by/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/utils-group-by/main/LICENSE

[mdn-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

[mdn-typed-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray

[mdn-object]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object

<!-- <related-links> -->

[@stdlib/utils/bifurcate-by]: https://github.com/stdlib-js/utils-bifurcate-by/tree/esm

[@stdlib/utils/count-by]: https://github.com/stdlib-js/utils-count-by/tree/esm

[@stdlib/utils/group]: https://github.com/stdlib-js/utils-group/tree/esm

<!-- </related-links> -->

</section>

<!-- /.links -->
