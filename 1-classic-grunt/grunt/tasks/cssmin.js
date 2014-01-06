/* 
 * The `cssmin` task
 */
module.exports = {
  options: { report: 'min' },

  dist: {
    src: ['dist/css/style.css'],
    dest: 'dist/css/style.min.css'
  }
};