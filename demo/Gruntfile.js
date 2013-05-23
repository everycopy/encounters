module.exports = function(grunt) {
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    compass: {
      compile: {
        options: {
          config: 'config.rb',
          force: true
        }
      }
    },

    autoprefixer: {
      prefix: {
        files: {
          'styles/screen.css': ['styles/screen.css']
        }
      }
    },

    cssmin: {
      compress: {
        files: {
          'styles/screen.min.css': ['styles/screen.css']
        }
      }
    },

    watch: {
      files: ['sass/**/*.scss'],
      tasks: ['compass', 'autoprefixer']
    }
  });

  grunt.registerTask('build', ['compass', 'autoprefixer', 'cssmin']);

  grunt.registerTask('default', ['watch']);
}
