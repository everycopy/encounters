module.exports = function(grunt) {
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    autoprefixer: {
      prefix: {
        files: {
          'stylesheets/screen.css': ['stylesheets/screen.css']
        }
      }
    },

    concat: {
      join: {
        files: {
          'stylesheets/screen.css': ['components/normalize-css/normalize.css', 'stylesheets/screen.css']
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
        src: ['stylesheets/screen.css']
      },
      lax: {
        options: {
          import: false
        },
        src: ['stylesheets/screen.css']
      }
    },

    cssmin: {
      compress: {
        options: {
          keepSpecialComments: 0
        },
        files: {
          'stylesheets/screen.min.css': ['stylesheets/screen.css']
        }
      }
    },

    sass: {
      compile: {
        options: {
          precision: 3
        },
        files: {
          'stylesheets/screen.css': ['sass/screen.scss']
        }
      }
    },

    watch: {
      options: {
        livereload: true
      },
      css: {
        files: ['**/*.scss'],
        tasks: ['sass', 'autoprefixer', 'csslint:lax', 'concat']
      },
      html: {
        files: ['**/*.html']
      }
    }
  });

  grunt.registerTask('build', ['sass', 'autoprefixer', 'csslint:strict', 'concat', 'cssmin']);

  grunt.registerTask('default', ['watch']);
}
