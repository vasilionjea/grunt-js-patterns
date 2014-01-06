/* 
 * The `uglify` task
 */
module.exports = {
  // the 'gzip' option let's you know how much you would save if your server 
  // Gziped the file - set to 'min' for faster results
  options: {
    report: 'min',
    banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' + '<%= grunt.template.today("yyyy-mm-dd") %> */\n'
  },

  dist: {
    files: {
      'dist/js/vendors.min.js': 'dist/js/vendors.js',
      'dist/js/plugins.min.js': 'dist/js/plugins.js',
      'dist/js/app.min.js': 'dist/js/app.js'
    }
  }
};