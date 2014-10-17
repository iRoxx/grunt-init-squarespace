/*!
 *
 * {%= projectTitle %} config.
 *
 * Grunt Nautilus:
 * https://github.com/kitajchuk/grunt-nautilus
 *
 * Available grunt-nautilus tasks:
 * grunt nautilus:build [, flags...]
 * grunt nautilus:deploy [, flags...]
 * grunt nautilus:module [, flags...]
 *
 */
module.exports = function ( grunt ) {


    "use strict";


    // Default project paths.
    var pubRoot = "{%= pubRoot %}",
    {% if ( isCompassOption ) { %}
        sassRoot = "{%= sassRoot %}",
        cssRoot = "{%= cssRoot %}",
        fontsRoot = "{%= fontsRoot %}",
        imgRoot = "{%= imgRoot %}",
    {% } %}
        jsRoot = "{%= jsRoot %}",
        appRoot = jsRoot + "/app",
        libRoot = jsRoot + "/lib",
        distRoot = "sqs_template/scripts";


    // Project configuration.
    grunt.initConfig({
        // Project meta.
        meta: {
            version: "0.1.0"
        },


        // Nautilus config.
        nautilus: {
            options: {
                jsAppRoot: appRoot,
                jsDistRoot: distRoot,
                jsLibRoot: libRoot,
                jsRoot: jsRoot,
                pubRoot: pubRoot,
                jsGlobals: {},
                hintOn: [
                    "watch",
                    "build",
                    "deploy"
                ]{% if ( isCompassOption ) { %},
                compass: {
                    cssRoot: cssRoot,
                    sassRoot: sassRoot,
                    imgRoot: imgRoot,
                    fontsRoot: fontsRoot
                }
                {% } %}
            }
        }


    });


    // Load the nautilus plugin.
    grunt.loadNpmTasks( "grunt-nautilus" );


    // Register default task.
    grunt.registerTask( "default", ["nautilus:build"] );


    // Register squarespace task.
    grunt.registerTask( "sqs-deploy", function () {
        var ret = process.cwd(),
            msg = (grunt.option( "message" ) || "."),
            path = require( "path" ),
            exec = require( "exec" ),
            done = this.async();

        process.chdir( path.join( __dirname, "sqs_template" ) );

        exec( "git add . ; git commit -m '" + msg + "' ; git push origin master", function ( err, stdout ) {
            grunt.log.ok( stdout );
            process.chdir( ret );
            done();
        });
    });


};