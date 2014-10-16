/*
 * grunt-init-gruntnautilus
 * https://github.com/kitajchuk/grunt-init-gruntnautilus
 *
 * Copyright (c) 2013 Brandon Lee Kitajchuk
 * Licensed under the MIT license.
 *
 */

"use strict";

var nodePath = require( "path" ),
    prompts = [
        {
            name: "pubRoot",
            message: "What is the path to your public directory? (from cwd, no trailing slash)",
            default: ".",
            warning: "Defaults to the current working directory."
        },

        {
            name: "jsRoot",
            message: "Where are you keeping your javascript?",
            default: "js",
            warning: ""
        },

        {
            name: "cssRoot",
            message: "Where are you keeping your css?",
            default: "css",
            warning: ""
        },

        {
            name: "sassRoot",
            message: "Where are you keeping your sass?",
            default: "sass",
            warning: ""
        },

        {
            name: "imgRoot",
            message: "Where are you keeping your images?",
            default: "img",
            warning: ""
        },

        {
            name: "fontsRoot",
            message: "Where are you keeping your fonts?",
            default: "fonts",
            warning: ""
        }
        
    ];

// Basic template description
exports.description = "Create a grunt-nautilus Gruntfile";

// Template-specific notes to be displayed before question prompts.
exports.notes = "The following questions help grunt-nautilus manage your static assets.";

// Any existing file or directory matching this wildcard will cause a warning.
exports.warnOn = ["Gruntfile.js", "package.json", ".gitignore", "sqs_template"];

// The actual init template.
exports.template = function ( grunt, init, done ) {

    var projectTitle = (grunt.option( "project" ) || "Unknown Project"),
        projectName = projectTitle.toLowerCase().replace( /\s/g, "-" ),

        doneFunc = function () {
            grunt.log.ok( "\nGruntfile ready. Run 'npm install', then 'grunt'.\n" );
            grunt.log.ok( "- @kitajchuk" );
        },

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

        doneFunc();

};