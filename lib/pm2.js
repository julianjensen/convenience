/** ******************************************************************************************************************
 * @file pm2 helper, optional, lazy-load.
 * @author Julian Jensen <jjdanois@gmail.com>
 * @since 1.0.0
 * @date 26-Jul-2017
 *********************************************************************************************************************/
"use strict";

let pm2;

const
    promiseWrapper = func => ( ...args ) => new Promise( ( resolve, reject ) => pm2[ func ]( ...args, ( err, okay ) => err ? reject( err ) : resolve( okay ) ) ),
    promiseWrapperNo = func => () => new Promise( ( resolve, reject ) => pm2[ func ]( ( err, okay ) => err ? reject( err ) : resolve( okay ) ) ),
    pm2shorts = [
        'disconnect',
        'killDaemon',
        'list',
        'dump',
        'reloadLogs',
        'launchBus'
    ],
    pm2procs = [
        'connect',
        'start',
        'restart',
        'stop',
        'delete',
        'gracefulReload',
        'describe',
        'flush',
        'sendSignalToProcessName',
        'startup'
    ],
    _ = {

    },
    insts = () => _.connect().then( _.list );
    // insts = () => rpc( 'connect' ).then( () => rpc( 'list' ) );

function ping()
{
    return new Promise( ( resolve, reject ) => pm2.Client.pingDaemon( alive => alive ? resolve( pm2 ) : reject( new Error( `pm2 not responding` ) ) ) );
}

/**
 * List of `pm2` processes on the system.
 *
 * @param {string} [name]
 * @return {Promise<*>}
 */
function instances( name )
{
    const
        list = detect().then( insts );

    if ( !name ) return list;

    return list.then( apps => apps.filter( app => app.name === name ).sort( ( a, b ) => a.pid - b.pid ) );
}

/**
 * Detect if `pm2` is running on the system.
 *
 * @return {Promise<object>}
 */
function detect()
{
    return Promise.resolve( pm2 ).then( mod => pm2 = mod || require( 'pm2' ) ).then( ping );
}

/**
 * Call a `pm2` function.
 *
 * @param {string} func
 * @param {...*} args
 * @return {Promise<*>}
 */
function rpc( func, ...args )
{
    return new Promise( ( resolve, reject ) => pm2[ func ]( ...args, ( err, okay ) => err ? reject( err ) : resolve( okay ) ) );
}

module.exports = { instances, detect, ping, rpc };

pm2procs.forEach( fn => _[ fn ] = promiseWrapper( fn ) );
pm2shorts.forEach( fn => _[ fn ] = promiseWrapperNo( fn ) );
Object.assign( module.exports, _ );
