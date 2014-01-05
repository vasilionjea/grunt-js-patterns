module.exports = function(grunt) {

  // Project configuration
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    concat: {
      options: {
        stripBanners: true
      },

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
    },

    copy: {
      options: {},

      // these JS files are already minified so we're just copying them over
      js_head: {
        files: {
          'dist/js/modernizr.min.js': 'js/vendors/modernizr.js',
          'dist/js/html5_shiv.min.js': 'js/vendors/html5_shiv.js'
        }
      }
    },

    cssmin: {
      optons: { report: 'min' },

      dist: {
        src: ['dist/css/style.css'],
        dest: 'dist/css/style.min.css'
      }
    },

    // remove unused files from the 'dist' directory
    clean: {
      dist: ['dist/css/style.css']
    }
  });


  // Load the Grunt plugins
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-clean');


  // Register tasks
  grunt.registerTask('default', ['concat', 'cssmin', 'copy', 'clean']);
};