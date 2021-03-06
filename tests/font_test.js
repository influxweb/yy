"use strict";

var grunt = require( "grunt" );

exports.yy_font = {

    setUp: function( done ) {
        done();
    },

    responsive_font: function( test ) {
        test.expect( 1 );

        var actual = grunt.file.read( "tmp/responsive-font.css" );
        var expected = grunt.file.read( "tests/expected/responsive-font.css" );

        test.equal( actual, expected, "responsive-font.css should be equal." );

        test.done();
    },

};
