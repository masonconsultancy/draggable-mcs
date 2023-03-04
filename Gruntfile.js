module.exports = function (grunt) {
  // From TWBS
  RegExp.quote = function (string) {
    return string.replace(/[-\\^$*+?.()|[\]{}]/g, '\\$&');
  };

  // Project configuration.
  grunt.initConfig({

    // Metadata.
    pkg: grunt.file.readJSON('package.json'),
    banner: '/*!\n' +
    ' * draggable-mcs v<%= pkg.version %> (<%= pkg.homepage %>)\n' +
    ' *\n' +
    ' * Copyright 2023-<%= grunt.template.today(\'yyyy\') %> Mason Consultancy Ltd\n' +
    ' * Licensed under <%= pkg.license %> (https://github.com/masonconsultancy/draggable-mcs/blob/master/LICENSE)\n' +
    ' */\n',

    // Task configuration.

    clean: {
      js: 'dist/js',
    },

    eslint: {
        options: {
            configFile: 'js/.eslintrc.json'
        },
        gruntfile: {
            options: {
                'envs': [
                    'node'
                ]
            },
            src: 'Gruntfile.js'
        },
        main: {
            src: 'js/*.js'
        }
    },

    concat: {
        options: {
            stripBanners: true,
            sourceMap: true
        },
        main: {
            src: 'js/<%= pkg.name %>.js',
            dest: 'dist/js/<%= pkg.name %>.js',
            options: {
                banner: '<%= banner %>\n' + grunt.file.read('js/umd-intro.js'),
                footer: grunt.file.read('js/umd-outro.js')
            }
        }
    },

    uglify: {
      options: {
        banner: '<%= banner %>',
        output: {
          ascii_only: true
        },
        preserveComments: function (node, comment) {
          return /^!|@preserve|@license|@cc_on/i.test(comment.value);
        }
      },
      main: {
        src: '<%= concat.main.dest %>',
        dest: 'dist/js/<%= pkg.name %>.min.js',
        options: {
          sourceMap: true,
          sourceMapIncludeSources: true,
          sourceMapIn: 'dist/js/<%= pkg.name %>.js.map'
        }
      }
    },

    copy: {
      docs: {
        expand: true,
        cwd: 'dist/',
        src: [
          '**/*'
        ],
        dest: 'docs/docs/dist/'
      }
    },

    version: {
      js: {
        options: {
          prefix: 'draggable-mcs.VERSION = \''
        },
        src: [
          'js/<%= pkg.name %>.js'
        ]
      }
    },

    compress: {
      zip: {
        options: {
          archive: 'draggable-mcs-<%= pkg.version %>.zip',
          mode: 'zip'
        },
        files: [
          {
            expand: true,
            cwd: 'dist/',
            src: '**',
                dest: 'draggable-mcs-<%= pkg.version %>/'
          }, {
            src: ['package.json'],
                dest: 'draggable-mcs-<%= pkg.version %>/'
          }
        ]
      }
    },

    watch: {
      gruntfile: {
        files: '<%= eslint.gruntfile.src %>',
        tasks: 'eslint:gruntfile'
      },
      js: {
        files: ['<%= eslint.main.src %>'],
        tasks: 'build-js'
      }
    }
  });

  // These plugins provide necessary tasks.
  require('load-grunt-tasks')(grunt, {
    scope: 'devDependencies'
  });

  // Version numbering task.
  // to update version number, use grunt version::x.y.z

  // CSS distribution
  grunt.registerTask('build-css', ['clean:css', 'less', 'postcss', 'usebanner:css', 'cssmin']);

  // JS distribution
  grunt.registerTask('build-js', ['clean:js', 'eslint', 'concat', 'uglify']);

  // Copy dist to docs
  grunt.registerTask('copy-docs', ['clean:docs', 'copy:docs']);

  // Build CSS & JS
  grunt.registerTask('build', ['build-css', 'build-js']);

  // Development watch
  grunt.registerTask('dev-watch', ['build', 'watch']);

  // Full distribution
  grunt.registerTask('dist', ['build', 'compress', 'copy-docs']);

  // Default task.
  grunt.registerTask('default', 'build');

  // Linting
  grunt.registerTask('lint', 'eslint');
};