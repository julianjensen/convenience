/** ******************************************************************************************************************
 * @file Timer code.
 * @author Julian Jensen <jjdanois@gmail.com>
 * @since 1.0.0
 * @date 26-Jul-2017
 *********************************************************************************************************************/
"use strict";

const
    now = () => process.hrtime(),
    milli = dd => dd[ 0 ] * 1000 + dd[ 1 ] / 1e6,
    diff = td => milli( process.hrtime( td ) );

/**
 *
 */
class Timer
{
    constructor( name, base, total = null )
    {
        this.name = name;
        this.paused = 0;
        this.elapsed = 0;
        this.end = 0;

        this.base = base;

        this.pausing = void 0;
        this.running = false;
        this.total = total;
    }

    /** */
    start()
    {
        if ( this.running ) return;
        if ( !this.start ) this.start = diff( this.base );
        this.mark = now();
        this.running = true;
        if ( this.total ) this.total.start();
        return this;
    }

    /** */
    stop()
    {
        if ( !this.running ) return;
        this.end = diff( this.base );
        this.elapsed += diff( this.mark );
        this.running = false;
        if ( this.total ) this.total.stop();
        return this;
    }

    /** */
    pause()
    {
        if ( this.pausing !== void 0 ) return;

        this.pausing = process.hrtime();
        if ( this.total ) this.total.pause();
        return this;
    }

    /** */
    unpause()
    {
        if ( this.pausing === void 0 ) return;

        this.paused += diff( this.pausing );
        this.pausing = void 0;
        if ( this.total ) this.total.unpause();
        return this;
    }

    /** */
    isPaused()
    {
        return this.pausing !== void 0;
    }

    /** */
    tap()
    {
        return diff( this.mark ) - this.paused - ( this.pausing ? diff( this.pausing ) : 0 );
    }

    /** */
    report()
    {
        return {
            start: this.start,
            end: this.end,
            elapsed: this.elapsed - this.paused,
            paused: this.paused,
            total: this.elapsed
        };
    }
}

Timer.prototype.resume = Timer.prototype.unpause;

/**
 *
 */
export class Timers
{
    constructor()
    {
        this.timers = new Map();
        this.base = process.hrtime();
        this.total = void 0;
    }

    create( name )
    {
        let t;

        if ( !this.total ) this.total = new Timer( 'total', this.base );

        if ( !this.timers.has( name ) )
            this.timers.set( name, t = new Timer( name, this.base, this.total ) );
        else
            t = this.timers.get( name );

        return t;
    }

    final()
    {
        let r = {};

        for ( const [ name, t ] of this.timers() )
            r[ name ] = t.stop().report();

        return r;
    }

    start()
    {
        if ( !this.total ) this.total = this.create( 'total' );
        this.total.start();
    }

    stop()
    {
        if ( !this.total) return;
        this.total.stop();
    }

    pause()
    {
        for ( const t of this )
        {
            if ( !t.isPaused() ) return;
        }

        this.total.pause();
    }

    unpause()
    {
        this.total.unpause();
    }

    * [ Symbol.iterator ]()
    {
        yield this.timers.values();
    }
}

Timers.prototype.get = Timers.prototype.create;
Timers.prototype.resume = Timers.prototype.unpause;
