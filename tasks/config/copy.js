/**
 * Copy files and folders.
 *
 * ---------------------------------------------------------------
 *
 * # dev task config
 * Copies all directories and files, exept coffescript and less fiels, from the sails
 * assets folder into the .tmp/public directory.
 *
 * # build task config
 * Copies all directories nd files from the .tmp/public directory into a www directory.
 *
 * For usage docs see:
 *    https://github.com/gruntjs/grunt-contrib-copy
 */
module.exports = function(grunt) {

  grunt.config.set('copy', {
    dev: {
      files: [{
          expand: true,
          cwd: './assets',
          src: ['**/*.!(coffee|less|scss)'],
          dest: '.tmp/public'
        },
        // =========  bower_components ============
        { // copy bower_components fonts folder
          expand: true,
          cwd: './bower_components',
          src: ['fontawesome/fonts/*'],
          flatten: true,
          dest: '.tmp/public/bower/fonts'
        }, { // copy bower_components font folder
          expand: true,
          src: ['./bower_components/materialize/dist/font/roboto/*'],
          flatten: true,
          dest: '.tmp/public/bower/font/roboto'
        }, { // copy bower_components font folder
          expand: true,
          src: ['./bower_components/materialize/dist/font/material-design-icons/*'],
          flatten: true,
          dest: '.tmp/public/bower/font/material-design-icons'
        }, { // copy bower_components font folder
          expand: true,
          src: ['./bower_components/mdi/fonts/*'],
          flatten: true,
          dest: '.tmp/public/bower/fonts'
        },
         { // copy bower_components js 
          expand: true,
          cwd: './bower_components',
          src: [
            'jquery/dist/jquery.min.js',
            'jquery/dist/jquery.min.map',
            'materialize/dist/js/materialize.min.js',
            'matchHeight/jquery.matchHeight-min.js'
          ],
          flatten: true,
          dest: '.tmp/public/bower/js'
        }, { // copy bower_components css 
          expand: true,
          cwd: './bower_components',
          src: [
            'materialize/dist/css/materialize.css',
            'fontawesome/css/font-awesome.css',
            'mdi/css/materialdesignicons.css'
          ],
          flatten: true,
          dest: '.tmp/public/bower/css'
        }, { //lib js - TODO this has to loaded in different way maybe as a bower component
          expand: true,
          cwd: './api/components/utils',
          src: [
            'jquery.appear/jquery.appear.js',
            'calendario/calendario.js',
            'calendar-config.js',
            'modernizr.js'
          ],
          flatten: true,
          dest: '.tmp/public/bower/js'
        }
      ]
    },
    build: {
      files: [{
        expand: true,
        cwd: '.tmp/public',
        src: ['**/*'],
        dest: 'www'
      }]
    }
  });

  grunt.loadNpmTasks('grunt-contrib-copy');
};
