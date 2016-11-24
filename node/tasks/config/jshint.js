/**
 * jshint
 */
module.exports = function(grunt) {
    grunt.config.set('jshint', {
        options: {
            esversion: 6
        },
        all: {
            src: ['./public/javascripts/index.js', './tasks/**/*.js']
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
};