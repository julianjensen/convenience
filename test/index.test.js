const { default: ex, testGroup } = require( 'lazyj' );
const { is, isA, empty, define, keys, $ } = require( '../index' );

testGroup( is, {
    "creates an Identity test": () => {
        const numberIdent = is( 1 );

        ex()
            ( typeof numberIdent )` -> "function"`
            ( numberIdent( 1 ) )` -> true`
            ( numberIdent( '1' ) )` -> false`
            ( numberIdent( 0 ) )` -> false`

            ( is( is )( is ) )` -> true`

            ( is( NaN )( NaN ) )` -> false`
    },
    "create strict === tests": () => {
        ex()
            ( is( 1 )( true ) )` -> false`

            ( is( null )( null ) )` -> true`
            ( is( null )( 0 ) )` -> false`
            ( is( null )( undefined ) )` -> false`
    }
} );
testGroup( isA, {
    "object": () => {
        ex( isA.object )
            ( {} )` -> true`
            ( new Proxy( {}, {} ) )` -> true`
            ( null )` -> false`
            ( [] )` -> false`
            ( () => {} )` -> false`
    },
    "array": () => {
        ex( isA.array )
            ( [] )` -> true`
            ( '1-2-3'.split('-') )` -> true`
            ( {} )` -> false`
            ( new Set([1, 2, 3, 4]) )` -> false`
    },
    "string": () => {
        ex()
            ( isA.string( 'test' ) )` -> true`
            ( isA.string( '' ) && isA.string( `` ) && isA.string( "" ) )` -> true`
    },
    "boolean": () => {
        ex( isA.boolean )
            ()` -> true`
            ( [] )` -> false`
            ( 0 )` -> false`
            ( ![] )` -> true`
            ( !0 )` -> true`
            ( true )` -> true`
            ( false )` -> true`
    },
    "number": () => {
        ex( isA.number )
            (1)` -> true`
            (1.3)` -> true`
            (1/3)` -> true`
            ( NaN )` -> true`
            ( +true )` -> true`
            ( true )` -> false`
            ( "1" )` -> false`
            ( 1 + "1" )` -> false`

    },
    "function": () => {
        const testFunc = () => '';

        ex( isA.function )
            ( isA.function )` -> true`
            ( testFunc )` -> true`
            ( function() {} )` -> true`
            ( []["filter"] )` -> true`
            ( []["length"] )` -> false`
            ( 1 )` -> false`
    },
    "undefined": () => {
        ex()
            ( isA.undefined() )` -> true`
            ( isA.undefined( undefined ) )` -> true`
            ( isA.undefined( [ 1, 2 ][ 3 ] ) )` -> true`
            ( isA.undefined( { a: 1 }.b ) )` -> true`
            ( isA.undefined( null ) )` -> false`
            ( isA.undefined( '' ) )` -> false`
            ( isA.undefined( NaN ) )` -> false`
    },
    "define": () => {
        ex()
            ( typeof null )` -> "object"`;

        isA.define( 'null', n => typeof n === "object" && n === null );

        ex()
            ( isA.null( null ) )` -> true`
            ( isA.null() )` -> false`
            ( isA.null( [ 1, 2 ][ 3 ] ) )` -> false`
            ( isA.null( [] ) )` -> false`
            ( isA.null( undefined ) )` -> false`
            ( isA.null( '' ) )` -> false`
    }
} );

testGroup( empty, {
    'return `true` if `null` or `undefined`': () => {
        ex( empty )
            ( null )` -> true`
            ( undefined )` -> true`
            ( void empty( null ) )` -> true`
            ( '' )` -> true`
            ( 0 )` -> true`
            ( false )` -> true`
            ( +true )` -> true`
    },
    'also `true` zero-length array and for `Object` without own properties': () => {
        const testFunc = () => {};
        const obj = {};
        ex( empty )
            ( [] )` -> true`
            ( obj )` -> true`
            ( testFunc )` -> true`
        .trigger( () => {
            testFunc.val = 1;
            define( obj, 'val', 1 )
        } )
            ( testFunc )` -> false`
            ( obj )` -> true`

    }
});

testGroup( keys, {
    'Shorthand for `Object.keys()': () => {
        let obj = { a: 1, b: 2, func: () => '' };
        ex( keys )
            ( {} )` -> []`
            ()` -> []`
            ( obj )` -> ${Object.keys( obj )} `;

        ex()
            ( keys( obj ).length )` -> 3`
            ( keys( JSON.parse( $( obj ) ) ).length )` -> 2`
        .trigger( () => define( obj, 'val', 1 ) )
            ( keys( obj ).length )` -> 3`;
    }
} );