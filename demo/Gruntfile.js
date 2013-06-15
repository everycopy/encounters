module.exports = function(grunt) {
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    autoprefixer: {
      prefix: {
        files: {
          'styles/screen.css': ['styles/screen.css']
        }
      }
    },

    concat: {
      join: {
        files: {
          'styles/screen.css': ['components/normalize-css/normalize.css', 'styles/screen.css']
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
        src: ['styles/screen.css']
      },
      lax: {
        options: {
          import: false
        },
        src: ['styles/screen.css']
      }
    },

    cssmin: {
      compress: {
        options: {
          keepSpecialComments: 0
        },
        files: {
          'styles/screen.min.css': ['styles/screen.css']
        }
      }
    },

    sass: {
      compile: {
        options: {
          precision: 3
        },
        files: {
          'styles/screen.css': ['sass/screen.scss']
        }
      }
    },

    watch: {
      options: {
        livereload: true
      },
      css: {
        files: ['sass/**/*.scss'],
        tasks: ['sass', 'autoprefixer', 'csslint:lax', 'concat']
      }
      html: {
        files: ['**/*.html']
      }
    }
  });

  grunt.registerTask('build', ['sass', 'autoprefixer', 'csslint:strict', 'concat', 'cssmin']);

  grunt.registerTask('default', ['watch']);
}
