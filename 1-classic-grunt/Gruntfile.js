module.exports = function(grunt) {

  // Project configuration
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    concat: require('./grunt/tasks/concat'),
    cssmin: require('./grunt/tasks/cssmin'),
    copy: require('./grunt/tasks/copy'),
    uglify: require('./grunt/tasks/uglify'),
    clean: require('./grunt/tasks/clean'),
    watch: require('./grunt/tasks/watch')
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