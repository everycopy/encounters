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
          'temp/stylesheets/screen.css': ['bower_components/normalize-css/normalize.css', 'temp/stylesheets/screen.css']
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

    jshint: {
      check: ['Gruntfile.js', 'javascripts/main.js']
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

    uglify: {
      compress: {
        files: {
          'javascripts/main.min.js' : 'javascripts/main.js'
        }
      }
    },

    watch: {
      css: {
        files: ['sass/*.scss'],
        tasks: ['sass', 'autoprefixer', 'csslint:lax', 'concat', 'cssmin']
      },
      js: {
        files: ['javascripts/main.js'],
        tasks: ['jshint', 'uglify']
      }
    }
  });

  grunt.registerTask('build', ['sass', 'autoprefixer', 'csslint:strict', 'concat', 'cssmin', 'jshint', 'uglify']);

  grunt.registerTask('default', ['watch']);
};
