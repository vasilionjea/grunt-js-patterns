/*
 * The `clean` task
 * Removes unused files from the 'dist' directory
 */
module.exports = {
  options: {},
  
  dist: [
    'dist/css/style.css',
    'dist/js/vendors.js',
    'dist/js/plugins.js',
    'dist/js/app.js'
  ]
};