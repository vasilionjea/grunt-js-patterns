/* 
 * The `copy` task
 */
module.exports = {
  
  // these JS files are already minified so we're just copying them over
  js_head: {
    files: {
      'dist/js/modernizr.min.js': 'js/vendors/modernizr.js',
      'dist/js/html5_shiv.min.js': 'js/vendors/html5_shiv.js'
    }
  }
};