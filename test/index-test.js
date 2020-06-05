/** ****************************************************************************************************
 * File: index-test.js
 * @author Julian Jensen <jjdanois@gmail.com> on 03-JAN-2017
 * @version 1.1.0
 *******************************************************************************************************/
'use strict';

import con from '../index.js';
import chai from 'chai';

const { expect } = chai;

describe( 'convenience', function() {

    it( 'should export correctly', function() {
        expect( con ).to.be.an( 'object' );
        expect( typeof con.permutations ).to.equal( 'function' );
    } );
} );
