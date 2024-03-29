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
      css: 'dist/css',
      js: 'dist/js'
    },

    eslint: {
      options: {
        configFile: '.eslintrc.json'
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
        src: 'src/*.js'
      }
    },

    concat: {
      options: {
        stripBanners: true,
        sourceMap: true
      },
      main: {
        src: 'src/<%= pkg.name %>.js',
        dest: 'dist/js/<%= pkg.name %>.js',
        options: {
          banner: '<%= banner %>\n' + grunt.file.read('src/intro.js'),
          footer: grunt.file.read('src/outro.js')
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

    less: {
      options: {
        strictMath: true,
        sourceMap: true,
        outputSourceFiles: true,
        sourceMapURL: '<%= pkg.name %>.css.map',
        sourceMapFilename: '<%= less.css.dest %>.map'
      },
      css: {
        src: 'less/draggable-mcs.less',
        dest: 'dist/css/<%= pkg.name %>.css'
      }
    },

    usebanner: {
      css: {
        options: {
          banner: '<%= banner %>'
        },
        src: '<%= less.css.dest %>'
      }
    },

    cssmin: {
      options: {
        compatibility: 'ie8',
        keepSpecialComments: '*',
        advanced: false
      },
      css: {
        src: '<%= less.css.dest %>',
        dest: 'dist/css/<%= pkg.name %>.min.css'
      }
    },

    csslint: {
      options: {
        'adjoining-classes': false,
        'box-sizing': false,
        'box-model': false,
        'compatible-vendor-prefixes': false,
        'floats': false,
        'font-sizes': false,
        'gradients': false,
        'important': false,
        'known-properties': false,
        'outline-none': false,
        'qualified-headings': false,
        'regex-selectors': false,
        'shorthand': false,
        'text-indent': false,
        'unique-headings': false,
        'universal-selector': false,
        'unqualified-attributes': false,
        'overqualified-elements': false
      },
      css: {
        src: '<%= less.css.dest %>'
      }
    },

    version: {
      js: {
        options: {
          prefix: 'draggable-mcs.VERSION = \''
        },
        src: [
          'src/<%= pkg.name %>.js'
        ]
      },
      default: {
        options: {
          prefix: '[\'"]?version[\'"]?:[ "\']*'
        },
        src: [
          'package.json'
        ]
      }
    },

    postcss: {
      options: {
        map: true,
        processors: [
          require('autoprefixer')()
        ]
      },
      css: {
        src: '<%= less.css.dest %>'
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
      },
      less: {
        files: 'less/*.less',
        tasks: 'build-css'
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

  // Build CSS & JS
  grunt.registerTask('build', ['build-css', 'build-js']);

  // Development watch
  grunt.registerTask('dev-watch', ['build', 'watch']);

  // Full distribution
  grunt.registerTask('dist', ['build', 'compress']);

  // Default task.
  grunt.registerTask('default', 'build');

  // Linting
  grunt.registerTask('lint', 'eslint');
};
