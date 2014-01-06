module.exports = function(grunt) {

  // Project configuration
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    /* 
     * The `concat` task
     */
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

    /* 
     * The `cssmin` task
     */
    cssmin: {
      options: { report: 'min' },

      dist: {
        src: ['dist/css/style.css'],
        dest: 'dist/css/style.min.css'
      }
    },

    /* 
     * The `copy` task
     */
    copy: {
      // these JS files are already minified so we're just copying them over
      js_head: {
        files: {
          'dist/js/modernizr.min.js': 'js/vendors/modernizr.js',
          'dist/js/html5_shiv.min.js': 'js/vendors/html5_shiv.js'
        }
      }
    },

    /* 
     * The `uglify` task
     */
    uglify: {
      options: {
        report: 'min', // it let's you know how much you would save if your server Gziped the file - set to 'min' for faster results
        banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' + '<%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },

      dist: {
        files: {
          'dist/js/vendors.min.js': 'dist/js/vendors.js',
          'dist/js/plugins.min.js': 'dist/js/plugins.js',
          'dist/js/app.min.js': 'dist/js/app.js'
        }
      }
    },

    /*
     * The `clean` task
     * Removes unused files from the 'dist' directory
     */
    clean: {
      dist: ['dist/css/style.css', 'dist/js/vendors.js', 'dist/js/plugins.js', 'dist/js/app.js']
    },

    /* 
     * The `watch` task
     * Run this task with the `grunt watch` command.
     */
     watch: {
      css: {
        files: ['css/**/*.css'],
        tasks: [
          'concat:css',
          'cssmin',
          'clean'
        ]
      },

      js: {
        files: ['js/**/*.js'],
        tasks: [
          'concat:js_body_vendors',
          'concat:js_body_plugins',
          'concat:js_body_app',
          'uglify',
          'clean'
        ]
      }      
     }
  });


  // Load the Grunt plugins
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-watch');


  // Register tasks
  grunt.registerTask('default', ['concat', 'cssmin', 'copy', 'uglify', 'clean']);
};