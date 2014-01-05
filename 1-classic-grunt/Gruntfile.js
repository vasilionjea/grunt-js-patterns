module.exports = function(grunt) {

  // Project configuration
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    concat: {
      options: {},

      css: {
        src: [
          'css/normalize.css',
          'css/dropdown.css',
          'css/tables.css',
          'css/icons.css',
          'css/style.css'
        ],

        dest: 'dist/css/style.css'
      },

      js_body_vendors: {
        files: {
          'dist/js/vendors.js': [
            'js/vendors/jquery.js',
            'js/vendors/jquery-migrate.js',
            'js/vendors/underscore.js',
            'js/vendors/backbone.js',
            'js/vendors/jstz.js'
          ]
        }
      },

      js_body_plugins: {
        files: {
          'dist/js/plugins.js': [
            'js/plugins/easing.js',
            'js/plugins/bootstrap.js',
            'js/plugins/hotkeys.js',
            'js/plugins/jqdirect.js'
          ]
        }
      },

      js_body_app: {
        files: {
          'dist/js/app.js': [
            'js/app/app.js',
            'js/app/app-util.js'
          ]
        }
      }
    }
  });


  // Load the Grunt plugins
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');


  // Register tasks
  grunt.registerTask('default', ['concat']);
};