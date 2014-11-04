/*
 * grunt-init-gruntnautilus
 * https://github.com/kitajchuk/grunt-init-gruntnautilus
 *
 * Copyright (c) 2013 Brandon Lee Kitajchuk
 * Licensed under the MIT license.
 *
 */

"use strict";

// Basic template description
exports.description = "Create a grunt-nautilus Gruntfile for use with a Squarespace developer template";

// Template-specific notes to be displayed before question prompts.
exports.notes = "";

// Any existing file or directory matching this wildcard will cause a warning.
exports.warnOn = ["Gruntfile.js", "package.json", ".gitignore", "sqs_template"];

// The actual init template.
exports.template = function ( grunt, init, done ) {

    var projectTitle = (grunt.option( "project" ) || "Unknown Project"),
        projectName = projectTitle.toLowerCase().replace( /\s/g, "-" ),

        config = {
            pubRoot: ".",
            sassRoot: "./sass",
            cssRoot: "./sqs_template/styles",
            jsRoot: "./js",
            fontsRoot: "./sqs_template/assets/fonts",
            imgRoot: "./sqs_template/assets/images"
        },
        files;

        // Support
        // --project "My Project Name"
        // --project="My Project Name"
        // --remote "https://yoursite.squarespace.com/template.git"
        // --remote="https://yoursite.squarespace.com/template.git"
        config.projectName = projectName;
        config.projectTitle = projectTitle;

        // Store the template used
        config.isCompassOption = true;

        // Files to copy (and process).
        files = init.filesToCopy( config );

        // Actually copy (and process) files.
        init.copyAndProcess( files, config );

        // All done!
        done();

        grunt.log.ok( "\nInitialized 'squarespace' template." );

        grunt.log.ok( "\nGruntfile ready. Check https://github.com/kitajchuk/grunt-init-squarespace for more info.\n" );
        grunt.log.ok( "- @kitajchuk" );

};
