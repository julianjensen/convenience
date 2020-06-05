'use strict';

/**
 * @param ObjectId
 * @param gmailSend
 * @return {object}
 */
export function wrapped( ObjectId, gmailSend )
{
    const LARGE_ARRAY_SIZE = 200;

    const { create } = Object,
          _set       = ( o, k, v ) => {
              o[ k ] = v;
              return o;
          },

          getset     = o => o.hasOwnProperty( 'get' ) || o.hasOwnProperty( 'set' ),


          oproto     = Object.prototype,

          {
              hasOwnProperty: __has, toString
          }          = oproto,

          {
              entries: __entries, keys: __keys, defineProperty: __def
          }          = Object,

          /**
           * Cleaner looking type checking
           *
           * @function array
           * @returns {Boolean}
           */
          /** */
          {
              isArray
          }          = Array,
          array      = isArray,

          isA        = new Proxy( {
              object: o => typeof o === 'object' && !Array.isArray( o ) && o !== null,
              array:  a => Array.isArray( a ),
              define( type, func )
              {
                  this[ type ] = func;
              }
          }, {
              get: ( target, name ) => target[ name ] ? ( subject, def ) => target[ name ]( subject, def ) : subject => typeof subject === name
          } ),

          /**
           * @function string
           * @param {*} str
           * @returns {Boolean}
           */
          string     = str => typeof str === 'string',
          /**
           * Checks if argument is an object. Note that an array will return `false`.
           *
           * @param {*} o
           * @returns {Boolean}
           */
          object     = o => typeof o === 'object' && !array( o ) && o !== null,
          /**
           * Checks for `typeof f === 'function'`
           * @param {*} f
           */
          func       = f => typeof f === 'function',
          /**
           * Checks for boolean type.
           * @param {*} b
           * @return {Boolean}
           */
          bool       = b => typeof b === 'boolean',
          /**
           * Checks for number type.
           * @param {*} n
           * @return {Boolean}
           */
          number     = n => typeof n === 'number',
          /**
           * Checks for `undefined`.
           * @param {*} u
           * @return {Boolean}
           */
          undef      = u => typeof u === 'undefined',
          /**
           * Checks for empty, meaning return `true` if `null` or `undefined`, also `true` zero-length array and for `Object` without own properties.
           * @param {*} o
           * @return {Boolean}
           */
          empty      = o => !o || ( array( o ) ? !o.length : !__keys( o ).length ),
          /**
           * Shorthand for `Object.keys()`
           * @param {Object} o
           * @return {Array<String>}
           */
          keys       = o => object( o ) ? __keys( o ) : [],

          /**
           * Shorthand for `Object.entries()`
           * @param {Object} o
           * @return {Array<Array<*, *>>}
           */
          entries    = o => __entries( o ),

          /**
           * Shorthand for `Object.hasOwnProperty()`
           * @param {Object} o
           * @param {String} f
           * @return {Boolean}
           */
          prop       = ( o, f ) => __has.call( o, f ),

          /**
           * Defines a property on an object. Shorthand for `Object.defineProperty()`. `enumerable` defaults to `false`.
           * @param {Object} o
           * @param {String} name
           * @param {*} value
           * @param {Object} [prop={ writable: true, configurable: true, enumerable: false, value: * }]
           * @return {Object}
           */
          define     = ( o, name, value, prop ) => {
              prop = prop ? Object.assign( {
                  writable:     true,
                  configurable: true,
                  enumerable:   false,
                  value
              }, prop ) : {
                  writable:     true,
                  configurable: true,
                  enumerable:   false,
                  value
              };

              return __def( o, name, prop );
          },

          /**
           * Define either a getter or setter or both. If argument `g` is an object, it acts as a normal `Object.defineProperty()`.
           * @param {Object} o
           * @param {String} name
           * @param {function|Object} g
           * @param {?function} [s=null]
           * @return {*}
           */
          accessor   = ( o, name, g, s = null ) => {

              if ( prop( o, name ) ) throw new Error( `Property "${name}" already exists on object: ` + JSON.stringify( Object.getOwnPropertyDescriptor( o, name ) ) );

              if ( !s && object( g ) ) __def( o, name, g ); else
              {
                  const _desc = { enumerable: false };
                  if ( func( g ) ) _desc.get = g;
                  if ( func( s ) ) _desc.set = s;
                  if ( !func( g ) && !func( s ) ) _desc.value = g;

                  __def( o, name, _desc );
              }

              return o;
          },

          /**
           * Can't be bothered to include `lodash` all the time. This returns an array of `[ key, value ]` if called with just an
           * object. If a method is also passed, it will get called with each `[ key, value ]`.
           * @param o
           * @param meth
           */
          pairs      = ( o, meth ) => func( meth ) ? Array.from( entries( o ) ).forEach( meth ) : Array.from( entries( o ) ),

          /**
           * Is object iterable?
           * @param {Object} a
           * @return {Boolean}
           */
          iterable   = a => ( object( a ) || func( a ) ) && func( a[ Symbol.iterator ] ),

          /**
           * Similar to `lodash`'s `each()` function, so, value first, then key.
           * @param {Object|Array<*>} o
           * @param {function} f
           */
          each       = ( o, f ) => {
              if ( object( o ) ) keys( o ).forEach( k => f( o[ k ], k, o ) ); else if ( func( o.forEach ) ) o.forEach( f ); else if ( iterable( o ) ) for ( const item of o ) f( item, o );
          },

          /**
           * If `obj` is a `String` then does `indexOf` on `what`, if it's an `Array` then it does `includes()` and if it is
           * an `Object`, it does `hasOwnProperty()`.
           * @param {String|Array<*>|Object|Map|Set} obj
           * @param {*} what
           * @return {boolean}
           */
          has        = ( obj, what ) => {
              if ( string( obj ) ) return obj.indexOf( what ) !== -1; else if ( array( obj ) ) return obj.includes( what ); else if ( object( obj.constructor ) &&
                  ( obj.constructor.name === 'Map' || obj.constructor.name === 'Set' ) ) return obj.has( what ); else if ( object( obj ) ) return prop( obj, what );
              return false;
          },

          /**
           * Upper-cases first letter and lower-cases the rest. OPtionally, a number can passed in to indicate how many letters in the beginning to
           * upper-case.
           * @param {String} str
           * @param {Number} [n=1]
           */
          uc         = ( str, n = 1 ) => n === 1 ? str[ 0 ].toUpperCase() + str.substr( 1 ).toLowerCase() : str.substr( 0, n ).toUpperCase() + str.substr( n ).toLowerCase(),

          /**
           * A tiny MongoDB helper. Checks if `so` is an `ObjectId`.
           *
           * @param {ObjectID|string|any} so
           */
          id         = so => object( so ) || ( string( so ) && /^[0-9a-f]{24}$/i.test( so ) ) ? ObjectId.isValid( so ) : false,

          //
          /**
           * A sneaky `eval` that seems to bypass code execution detection. It could possibly hack websites. Don't touch or use only for good, not evil.
           * @param {String} javascriptCodeAsString
           */
          sneaky     = javascriptCodeAsString => ( ( () => {} ).constructor( javascriptCodeAsString ) )(), // eslint-disable-line no-extra-parens

          /**
           * Returns `true` if _not_ `null` or `undefined`.
           * @param {*} v
           */
          exists     = v => v !== null && v !== void 0,

          /**
           * Shorthand for `JSON.stringify( o, null, 4 )`
           * @param {*} o
           * @return {String}
           */
          $          = o => JSON.stringify( o, null, 4 ),

          /**
           * Make an array or `[]` if no value.
           * @param v
           * @return {?Array<*>}
           */
          safeArray  = v => !exists( v ) ? [] : array( v ) ? v : [ v ],
          auto_curry = ( f, ...i ) => ( s => s( s )( i ) )( s => p => ( ...c ) => c.length + p.length >= f.length ? f( ...p.concat( c ) ) : s( s )( p.concat( c ) ) );


    let fastProto = null;

    /**
     * @param {String} n
     * @return {Boolean}
     */
    const isNumber = n => /^[-+]?[0-9]*\.?[0-9]+(?:[eE][-+]?[0-9]+)?$/.test( n );

    const asArray       = a => isArray( a ) ? a : a == null ? [] : [ a ],
          simple        = a => !isArray( a ) || !a.some( isArray ),  // No permutations required
          prepend       = ( head, tail ) => tail.length ? tail.map( t => head.concat( t ) ) : [ head ],
          _permutations = ( arr, tail = asArray( arr ).slice( 1 ), tmp ) => simple( arr ) ? asArray( arr ) : permutations( arr[ 0 ] ).map( asArray ).reduce( ( _, h ) => [
              ..._, ...prepend( h, tmp || ( tmp = permutations( tail ) ) )
          ], [] );

    /**
     * Takes an array of values, some or all of which can be other arrays, and so on. Returns a single array
     * of arrays that represent all possible mutations.
     *
     * @param {Array<*>} arr
     * @return {Array<*>}
     */
    const permutations = arr => _permutations( arr );

    /**
     * Returns JavaScript object or `null` if `JSON` throws. Second optional argument is what to return instead of `null`.
     * @param {string} obj
     * @param {?*} [defaultReturn=null]
     * @return {object}
     */
    function safe_json( obj, defaultReturn = null )
    {
        try
        {
            return JSON.parse( obj );
        }
        catch ( ex )
        {
            return defaultReturn;
        }
    }

    /**
     * Convert milliseconds to normal time units.
     *
     * @param {number} millis
     * @return {{secs: number, mins: number, hrs: number, days: number}}
     */
    function duration( millis )
    {
        const secs  = Math.floor( millis / 1e3 ),
              hours = Math.floor( secs / ( 60 * 60 ) );

        return {
            secs: secs % 60 | 0,
            mins: Math.floor( secs / 60 ) % 60 | 0,
            hrs:  hours % 24 | 0,
            days: Math.floor( hours / 24 ) | 0
        };
    }

    /**
     * Convert millisecond duration to readable string.
     *
     * @param {number} millis
     * @return {string}
     */
    function duration_string( millis )
    {
        let { secs, mins: minutes, hrs: hours, days } = duration( millis );

        const plural = ( w, n ) => w + ( n !== 1 ? 's' : '' ),
              parts  = [];

        if ( days ) parts.push( `${days} ${plural( 'day', days )}` );
        hours = hours % 24;
        if ( hours ) parts.push( `${hours} ${plural( 'hour', hours )}` );
        minutes = minutes % 60;
        if ( minutes ) parts.push( `${minutes} ${plural( 'minute', minutes )}` );
        secs = secs % 60;
        if ( secs ) parts.push( `${secs} ${plural( 'second', secs )}` );

        return parts.join( ', ' ) + ', and ' + parts.pop();
    }

    /**
     *
     * @param {Array<*>} arr
     * @param {function( *, * ):boolean} [fn]
     * @return {Array<*>}
     */
    function uniq( arr, fn )
    {
        let index = -1,
            seenIndex;

        if ( !array( arr ) ) throw new Error( "Argument to uniq() is not an array" );

        const length   = arr.length,
              result   = [],
              beenSeen = fn ? value => fn( result[ seenIndex ], value ) : value => result[ seenIndex ] === value;

        if ( length >= LARGE_ARRAY_SIZE ) return Array.from( new Set( arr ) );

        while ( ++index < length )
        {
            const value = arr[ index ];

            seenIndex = result.length;

            while ( seenIndex-- ) if ( beenSeen( value ) ) break;

            if ( seenIndex < 0 ) result[ result.length ] = value;
        }

        return result;
    }

    /**
     *
     * @param {?Array} arr
     * @param {Array} [result=[]]
     * @param {Boolean} [deep=true]
     * @return {Array}
     */
    function flatten( arr, result = [], deep = true )
    {
        const length = arr && arr.length;

        if ( !length ) return result;

        let index = -1;

        while ( ++index < length )
        {
            const value = arr[ index ];

            if ( array( value ) )
            {
                if ( deep ) flatten( value, result, true ); else result.push( ...value );
            }
            else result[ result.length ] = value;
        }

        return result;
    }

    /**
     * Proper deep copy.
     *
     * @param {object} src      - source
     * @param {object} [_dest]  - Optional destination, if not present a new object will be created
     * @param {function(string, object):?object} [cb=null]
     * @param {boolean} [includeSymbols=false]  - Set this to also copy `Symbol` keyed values. You generally don't ever want this.
     */
    function _deep_copy( src, _dest = {}, cb = null, includeSymbols = false )
    {
        const dest = _dest;

        let fields = [ ...Object.getOwnPropertyNames( src ) ];

        if ( includeSymbols ) fields = fields.concat( [ ...Object.getOwnPropertySymbols( src ) ] );

        for ( let name of fields )
        {
            let descriptor = Object.getOwnPropertyDescriptor( src, name );

            if ( !getset( descriptor ) ) descriptor.value = copy_value( src[ name ], cb, includeSymbols );

            let rname = name,
                rdesc = descriptor;

            if ( cb !== null ) [ rname = name, rdesc = descriptor ] = cb( name, descriptor ) || [ name, descriptor ];

            Object.defineProperty( dest, rname, rdesc );
        }

        return dest;
    }

    /**
     *
     * @param {RegExp} rx
     * @return {string}
     */
    function regexpFlags( rx )
    {
        return ( rx.global && 'g' ) + ( rx.ignoreCase && 'i' ) + ( rx.multiline && 'm' ) + ( rx.sticky && 'y' );
    }

    /**
     *
     * @param {*} value
     * @param {function} cb
     * @param {boolean} incl
     * @return {*}
     */
    function copy_value( value, cb, incl )
    {
        const kls = toString.call( value ).slice( 8, -1 ).toLowerCase();

        switch ( kls )
        {
            case 'object':
                return deep_copy( value, {}, cb, incl );
            case 'array':
                return value.map( v => copy_value( v, cb, incl ) );
            case 'regexp':
                return new RegExp( value, regexpFlags( value ) );
            case 'date':
                return new Date( value.getTime() );
            case 'map':
                return new Map( [ ...value ] );
            case 'set':
                return new Set( [ ...value ] );
            default:
                return value;
        }
    }

    /**
     * Proper deep copy.
     *
     * @param {object} src      - source
     * @param {object|boolean|function(string, object):?object} [dest={}]  - Optional destination, if not present a new object will be created
     * @param {boolean|function(string, object):?object} [cb=null]
     * @param {boolean} [includeSymbols=false]
     */
    function deep_copy( src, dest = {}, cb = null, includeSymbols = false )
    {
        if ( arguments.length > 1 )
        {
            if ( arguments.length === 2 )
            {
                if ( func( dest ) )
                {
                    cb   = dest;
                    dest = {};
                }
                else if ( bool( dest ) )
                {
                    includeSymbols = dest;
                    dest           = {};
                    cb             = null;
                }
            }
            else if ( arguments.length === 3 )
            {
                if ( func( dest ) )
                {
                    cb   = dest;
                    dest = {};
                }
                else if ( bool( cb ) )
                {
                    includeSymbols = cb;
                    cb             = null;
                }
            }
        }

        return _deep_copy( src, dest, cb, includeSymbols );
    }

    /**
     *
     * @param {object} obj
     * @param {string} path
     * @param {*} value
     * @return {object}
     */
    function deep_object_set( obj, path, value )
    {
        if ( !obj || !string( path ) ) throw new Error( `deep_object_set() has bad parameters, obj = ${obj}, path = ${path}` );

        const p     = path.split( '.' ),
              field = p.pop();

        let tip = obj;

        for ( const part of p ) tip = tip[ part ] = tip[ part ] || {};

        tip[ field ] = isNumber( value ) ? Number( value ) : value;

        return obj;
    }

    /**
     *
     * @param {object} src
     * @param {object} [dest={}]
     * @return {object}
     */
    function flat_to_deep( src, dest = {} )
    {
        return keys( src ).reduce( ( dst, key ) => deep_object_set( dst, key, src[ key ] ), dest );
    }

    /**
     * @param {object} opts
     * @return {function(*, *, *=): Promise<any>}
     */
    function gmail( opts )
    {
        const _send = gmailSend( opts );

        if ( !_send ) throw new Error( "gmail init failure. You must call gmail.init() first with your credentials." );

        return ( to, subject, body ) => new Promise( ( resolve, reject ) => _send( {
            to,
            subject,
            html: body
        }, ( err, res ) => err ? reject( err ) : resolve( res ) ) );
    }

    /**
     * Like `lodash`
     *
     * @param {Object|Array<Object>} s
     * @param {string[]} _keys
     * @return {Object|Array<Object>}
     */
    function omit( s, ..._keys )
    {
        const xfer = obj => keys( obj ).reduce( ( d, k ) => _keys.includes( k ) ? d : _set( d, k, obj[ k ] ), {} );

        return !s ? s : array( s ) ? s.map( xfer ) : object( s ) ? xfer( s ) : {};
    }

    /**
     * This will call your callback repeatedly until you return truthy. I use promises, but
     * sometimes even those aren't set yet, so I use this to wait for them to appear.
     *
     * @param func
     * @param interval
     */
    function wait( func, interval = 100 )
    {
        let done    = false,
            elapsed = 0;

        const timerFunc = () => {
            done = func( elapsed += interval );

            if ( done !== true ) setTimeout( timerFunc, interval );
        };

        setTimeout( timerFunc, interval );
    }

    /**
     * @param {Object|Array<Object>} arr
     * @param {Array<String>|string} flds
     * @param {Boolean} [keep=false]
     * @return {Object}
     */
    function pluck( arr, flds, keep = false )
    {
        let r;

        /**
         * @param {object} obj
         * @param {string} key
         * @param {object} [dst]
         */
        function add_item( obj, key, dst = {} )
        {
            let value = void 0;

            if ( !object( obj ) )
            {
                if ( !keep ) return dst;
            }
            else
            {
                if ( obj[ key ] === void 0 && !keep ) return dst;

                value = obj[ key ];
            }

            if ( array( dst ) ) dst.push( value ); else dst[ key ] = value;

            return dst;
        }


        if ( array( arr ) )
        {
            if ( string( flds ) )
            {
                r = [];

                arr.forEach( o => add_item( o, flds, r ) );
            }
            else if ( array( flds ) )
            {
                r = arr.map( o => flds.reduce( ( dst, key ) => add_item( o, key, dst ), {} ) );

                if ( !keep ) r = r.filter( o => !empty( o ) );
            }
        }
        else if ( object( arr ) )
        {
            if ( string( flds ) ) r = arr[ flds ]; else if ( array( flds ) ) r = flds.reduce( ( dst, key ) => add_item( arr, key, dst ), {} );
        }

        return r;
    }

    const mapper  = fn => a => a.map( fn ),
          reducer = fn => a => a.reduce( fn ),
          filter  = fn => a => a.filter( fn ),
          looper  = fn => a => a.forEach( fn ),
          splitOn = char => str => str.split( char );

    /**
     * @param {Number} cnt
     * @param {Number} start
     * @return {Function}
     * @private
     */
    function _keep( cnt, start )
    {
        return function( arr ) {
            if ( start < 0 )
            {
                start = arr.length + start;
                if ( start < 0 ) start = 0;
            }

            return arr.slice( start, cnt === undefined || cnt < 0 ? arr.length : start + cnt );
        };
    }

// noinspection CommaExpressionJS
    const keep          = auto_curry( _keep ),
          keepFirst     = n => _keep( n, 0 ),
          keepLast      = n => _keep( -1, -n ),
          skip          = n => _keep( -1, n ),
          ignoreFirst   = fn => ( _, arg ) => fn( arg ),
          max           = ( current, nxt ) => current > nxt ? current : nxt,
          min           = ( current, nxt ) => current < nxt ? current : nxt,
          pusher        = arr => val => {
              arr.push( val );
              return arr;
          },
          divide        = fn => arr => arr.reduce( ( yesNo, el ) => ( pusher( yesNo[ !fn( el ) | 0 ] )( el ), yesNo ), [ [], [] ] ),
          _keysToObject = ( obj, key, val ) => {
              obj[ key ] = val;
              return obj;
          },
          keysToObject  = auto_curry( _keysToObject ),
          flow          = ( ...fn ) => value => fn.slice( 1 ).reduce( ( prev, fn ) => fn( prev ), fn[ 0 ]( value ) ),

          at            = n => val => val[ n ],
          is            = val => examine => examine === val;

    /**
     * @param {function} fn
     * @return {*}
     * @private
     */
    function _try( fn )
    {
        try
        {
            return fn();
        }
        catch ( err )
        {
            console.error( err );
            throw err;
        }
    }

    /**
     * @returns {Object}
     * @constructor
     */
    function NullObject()
    {
        return create( null );
    }

    /**
     * @returns {Object}
     * @constructor
     */
    function FastProps()
    {
        if ( fastProto && typeof fastProto.property )
        {
            const result = fastProto;
            fastProto    = FastProps.prototype = null;
            return result;
        }

        fastProto = FastProps.prototype = new NullObject();

        return new FastProps();
    }

    /**
     * Use as a tag function for a tagged string template literal. It will find the smallest indent and remove that from every line.
     * In other words, you can now tab your multi-line template string to where they look nice but they'll still come nice and correct
     * when printed.
     *
     * @param {Array<string>} strings
     * @param {*[]} stuffAndThings
     * @return {string}
     */
    function strip( strings, ...stuffAndThings )
    {
        const finalStr = strings.reduce( ( soFar, str, i ) => soFar + stuffAndThings[ i ] + str ),
              match    = finalStr.match( /^[^\S\n]*(?=\S)/gm ),
              indent   = match && match.reduce( ( minLng, m ) => m.length < minLng ? m.length : minLng, Infinity );

        return !indent || indent === Infinity ? finalStr : finalStr.replace( new RegExp( `^.{${indent}}`, 'gm' ), '' );
    }


    return {
        auto_curry,
        mapper,
        reducer,
        filter,
        looper,
        splitOn,
        keep,
        keepFirst,
        keepLast,
        skip,
        ignoreFirst,
        max,
        min,
        pusher,
        divide,
        keysToObject,
        flow,
        is,
        at,
        try: _try,

        entries,
        prop,

        fast_props:  FastProps,
        null_object: NullObject,
        pluck,
        iterable,
        safe_json,
        duration_string,
        isNumber,
        uniq,
        flatten,
        deep_copy,
        deep_object_set,
        flat_to_deep,
        omit,
        asArray,
        safeArray,
        exists,
        $,
        wait,
        sneaky,
        keys,
        ObjectId,
        object,
        array,
        string,
        func,
        bool,
        number,
        undef,
        each,
        pairs,
        has,
        empty,
        id,
        define,
        accessor,
        uc,
        gmail,
        strip,
        global:      typeof globalThis !== void 0 ? globalThis : ( 1, eval )( 'this' ),   // eslint-disable-line no-eval, no-undef
        permutations,
        isA
    };
}
