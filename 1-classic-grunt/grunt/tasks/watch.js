/* 
 * The `watch` task
 * Run this task with the `grunt watch` command.
 */
module.exports = {
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