/** ******************************************************************************************************************
 * @file ESModule wrapper.
 * @author Julian Jensen <jjdanois@gmail.com>
 * @since 1.0.0
 * @date 05-Jun-2020
 *********************************************************************************************************************/
"use strict";

import ObjectID from 'bson-objectid';
import gmailSend from 'gmail-send';

import { wrapped } from './lib/convenience.js';
import { chars } from './lib/chars.js';
import pm2 from './lib/pm2.js';
import { Timers } from './lib/timer.js';

const _convenience = wrapped( ObjectID, gmailSend );

_convenience.chars = chars;
_convenience.pm2 = pm2;
_convenience.Timer = Timers;

export { _convenience as default };
