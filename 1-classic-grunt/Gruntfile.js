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