module.exports = function (grunt) {
  // Define a zip task
  grunt.initConfig({
    zip: {
      'build/release/lambda-cd.zip': ['index.js', 'node_modules/**']
    }
  });

  // Load in `grunt-zip`
  grunt.loadNpmTasks('grunt-zip');
};