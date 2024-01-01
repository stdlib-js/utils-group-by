/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var bench = require( '@stdlib/bench-harness' );
var randu = require( '@stdlib/random-base-randu' );
var floor = require( '@stdlib/math-base-special-floor' );
var pkg = require( './../package.json' ).name;
var groupBy = require( './../lib' );


// MAIN //

bench( pkg, function benchmark( b ) {
	var vals;
	var arr;
	var len;
	var o;
	var i;
	var j;

	function indicator( v ) {
		return v[ 0 ];
	}

	vals = [ 'beep', 'boop', 'foo', 'bar', 'woot' ];

	arr = new Array( 100 );
	len = arr.length;
	for ( i = 0; i < len; i++ ) {
		j = floor( randu()*vals.length );
		arr[ i ] = vals[ j ];
	}
	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		j = floor( randu()*vals.length );
		arr[ 0 ] = vals[ j ];
		o = groupBy( arr, indicator );
		if ( typeof o !== 'object' ) {
			b.fail( 'should return an object' );
		}
	}
	b.toc();
	if ( typeof o !== 'object' ) {
		b.fail( 'should return an object' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::values', function benchmark( b ) {
	var opts;
	var vals;
	var arr;
	var len;
	var o;
	var i;
	var j;

	function indicator( v ) {
		return v[ 0 ];
	}

	vals = [ 'beep', 'boop', 'foo', 'bar', 'woot' ];

	opts = {
		'returns': 'values'
	};
	arr = new Array( 100 );
	len = arr.length;
	for ( i = 0; i < len; i++ ) {
		j = floor( randu()*vals.length );
		arr[ i ] = vals[ j ];
	}
	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		j = floor( randu()*vals.length );
		arr[ 0 ] = vals[ j ];
		o = groupBy( arr, opts, indicator );
		if ( typeof o !== 'object' ) {
			b.fail( 'should return an object' );
		}
	}
	b.toc();
	if ( typeof o !== 'object' ) {
		b.fail( 'should return an object' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::indices', function benchmark( b ) {
	var opts;
	var vals;
	var arr;
	var len;
	var o;
	var i;
	var j;

	function indicator( v ) {
		return v[ 0 ];
	}

	vals = [ 'beep', 'boop', 'foo', 'bar', 'woot' ];

	opts = {
		'returns': 'indices'
	};
	arr = new Array( 100 );
	len = arr.length;
	for ( i = 0; i < len; i++ ) {
		j = floor( randu()*vals.length );
		arr[ i ] = vals[ j ];
	}
	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		j = floor( randu()*vals.length );
		arr[ 0 ] = vals[ j ];
		o = groupBy( arr, opts, indicator );
		if ( typeof o !== 'object' ) {
			b.fail( 'should return an object' );
		}
	}
	b.toc();
	if ( typeof o !== 'object' ) {
		b.fail( 'should return an object' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::pairs', function benchmark( b ) {
	var opts;
	var vals;
	var arr;
	var len;
	var o;
	var i;
	var j;

	function indicator( v ) {
		return v[ 0 ];
	}

	vals = [ 'beep', 'boop', 'foo', 'bar', 'woot' ];

	opts = {
		'returns': '*'
	};
	arr = new Array( 100 );
	len = arr.length;
	for ( i = 0; i < len; i++ ) {
		j = floor( randu()*vals.length );
		arr[ i ] = vals[ j ];
	}
	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		j = floor( randu()*vals.length );
		arr[ 0 ] = vals[ j ];
		o = groupBy( arr, opts, indicator );
		if ( typeof o !== 'object' ) {
			b.fail( 'should return an object' );
		}
	}
	b.toc();
	if ( typeof o !== 'object' ) {
		b.fail( 'should return an object' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::this_context', function benchmark( b ) {
	var opts;
	var vals;
	var arr;
	var len;
	var o;
	var i;
	var j;

	function indicator( v ) {
		return v[ 0 ];
	}

	vals = [ 'beep', 'boop', 'foo', 'bar', 'woot' ];

	opts = {
		'thisArg': {}
	};
	arr = new Array( 100 );
	len = arr.length;
	for ( i = 0; i < len; i++ ) {
		j = floor( randu()*vals.length );
		arr[ i ] = vals[ j ];
	}
	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		j = floor( randu()*vals.length );
		arr[ 0 ] = vals[ j ];
		o = groupBy( arr, opts, indicator );
		if ( typeof o !== 'object' ) {
			b.fail( 'should return an object' );
		}
	}
	b.toc();
	if ( typeof o !== 'object' ) {
		b.fail( 'should return an object' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});
