module.exports = function(grunt) {
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    autoprefixer: {
      prefix: {
        files: {
          'temp/stylesheets/screen.css': ['temp/stylesheets/screen.css']
        }
      }
    },

    concat: {
      join: {
        files: {
          'temp/stylesheets/screen.css': ['components/normalize-css/normalize.css', 'temp/stylesheets/screen.css']
        }
      }
    },

    csslint: {
      options: {
        csslintrc: '.csslintrc'
      },
      strict: {
        options: {
          import: 2
        },
        src: ['temp/stylesheets/screen.css']
      },
      lax: {
        options: {
          import: false
        },
        src: ['temp/stylesheets/screen.css']
      }
    },

    cssmin: {
      compress: {
        options: {
          keepSpecialComments: 0
        },
        files: {
          'stylesheets/screen.min.css': ['temp/stylesheets/screen.css']
        }
      }
    },

    sass: {
      compile: {
        options: {
          precision: 3
        },
        files: {
          'temp/stylesheets/screen.css': ['sass/screen.scss']
        }
      }
    },

    watch: {
      css: {
        files: ['**/*.scss'],
        tasks: ['sass', 'autoprefixer', 'csslint:lax', 'concat', 'cssmin']
      }
    }
  });

  grunt.registerTask('build', ['sass', 'autoprefixer', 'csslint:strict', 'concat', 'cssmin']);

  grunt.registerTask('default', ['watch']);
}
