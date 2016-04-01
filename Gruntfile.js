module.exports = function(grunt) {

  // Report elapsed execution time of grunt tasks.
  require('time-grunt')(grunt);

  grunt.initConfig({

    config: {
      src: 'src',
      dev: 'www'
    },

    // manifests
    //--------------------------------------------------------------
    // Contains data to populate the meta banner with

    pkg: grunt.file.readJSON('package.json'),

    // meta
    //--------------------------------------------------------------
    // Generates a banner to be placed on the top of all JS and CSS

    meta: {
      banner: '/*\n * <%= pkg.title %> - r<%= pkg.version %>\n' +
          ' * <%= grunt.template.today("yyyy-mm-dd") %> */' +
          grunt.util.linefeed + grunt.util.linefeed,
    },

    // watch
    //--------------------------------------------------------------
    // Watches for changed files and runs appropriate tasks

    watch: {
      markup: {
        files: ['<%= config.src %>/**/*.{hbs,json}'],
        tasks: ['assemble:dev']
      },
      styles: {
        files: ['<%= config.src %>/assets/scss/*.scss'],
        tasks: ['compass:dev']
      },
      images: {
        files: ['<%= config.src %>/assets/images/**/*.{png,jpg,gif,svg}'],
        tasks: ['newer:imagemin']
      },
      scripts: {
        files: ['<%= config.src %>/assets/js/**/*.js'],
        tasks: ['concat:dev']
      },
      statics: {
        files: ['<%= config.src %>/assets/**/*.{png,jpg,jpeg,gif,webp,js}'],
        tasks: ['newer:copy:statics']
      }
    },

    // clean
    //--------------------------------------------------------------
    // Empties folders to start fresh

    clean: {
      all: {
        files: [{
          dot: true,
          src: [
            '.tmp',
            '<%= config.dev %>/*'
          ]
        }]
      }
    },


    // concat
    //--------------------------------------------------------------
    // Joins files together

    concat: {
      options: {
        banner: '<%= meta.banner %>',
        separator: grunt.util.linefeed + grunt.util.linefeed
      },
      dev: {
        src: [  // common files
          '<%= config.src %>/assets/js/nav.js',
          '<%= config.src %>/assets/js/content-handler.js',
          '<%= config.src %>/assets/js/overlay.js'
        ],
        dest: '<%= config.dev %>/js/main.js'
      },
      vendor: {
        src: [  // vendor files
          '<%= config.src %>/assets/js/vendor/jquery-2.1.1.min.js'
        ],
        dest: '<%= config.dev %>/js/vendor.js'
      }
    },

    // assemble
    //--------------------------------------------------------------
    // Compiles Handlebars templates to static HTML

    assemble: {
      options: {

        site: {
          title: 'Sample Blog',
          email: 'your-email@yourdomain.com',
          description: 'Write your site description here. It will be used as your sites meta description as well!',
          baseurl: '',
          url: 'http://example.com',
          twitter: 'TwitterHandle',
          github:  'githubuser',
          facebook:  'FacebookUser'
        },

        today: '<%= grunt.template.today() %>',
        assets: '/',
        helpers: ['helper-prettify'],
        partials: ['<%= config.src %>/_includes/{,*/}*.hbs', '<%= config.src %>/_layouts/{,*/}*.hbs'],
        layoutdir: '<%= config.src %>/_layouts/',
        layout: false,
        data: ['<%= config.src %>/_data/**/*.{json,yml}'],
        prettify: {
          indent: 2,
          condense: true,
          padcomments: true
        }
      },
      dev: {
        files: [
          {
            expand: true,
            cwd: '<%= config.src %>/',
            src: ['*.hbs', '_mock/*.hbs'],
            dest: '<%= config.dev %>'
          },
          {
            options: {layout: 'post.hbs'},
            expand: true,
            cwd: '<%= config.src %>/blog',
            src: ['*.hbs'],
            dest: '<%= config.dev %>/blog/'
          }
        ]
      }
    },

    // imagemin
    //--------------------------------------------------------------
    // Minify images using OptiPNG, pngquant, jpegtran and gifsicle.
    // Images will be cached and only minified again if they change.

    // Optimizes images for web
    imagemin: {
      all: {
        files: [{
          expand: true,
          cwd: '<%= config.src %>/assets/images/',
          src: ['**/*.{jpg,png}'],
          dest: '<%= config.dev %>/images/'
        }]
      }
    },

    // compass
    //--------------------------------------------------------------

    compass: {
      options: {
        sassDir: '<%= config.src %>/assets/scss',
        cssDir: '<%= config.dev %>/css',
        imagesDir: 'images',
        javascriptDir: 'js',
        fontsDir: 'css/fonts',
        httpImagesPath: 'images',
        httpFontsPath: 'fonts',
        relativeAssets: false,
        assetCacheBuster: false,
        outputStyle: 'expanded',
        noLineComments: false
      },
      dev: {}
    },

    // copy
    //--------------------------------------------------------------
    // Put files not handled in other tasks here

    copy: {
      statics: {
        files: [
          {
            expand: true,
            cwd: '<%= config.src %>/assets/fonts/',
            src: ['**'],
            dest: '<%= config.dev %>/fonts'
          },
          {
            expand: true,
            cwd: '<%= config.src %>/assets/css/',
            src: 'bootstrap.min.css',
            dest: '<%= config.dev %>/css/'
          },
          {
            expand: true,
            cwd: '<%= config.src %>/assets/css/vendor/',
            src: 'font-awesome.min.css',
            dest: '<%= config.dev %>/css/vendor'
          },
          {
            expand: true,
            cwd: '<%= config.src %>/assets/css/vendor/',
            src: 'magnific-popup.css',
            dest: '<%= config.dev %>/css/vendor'
          }
        ]
      }
    }
  });

  // Load plugins to provide the necessary tasks
  grunt.loadNpmTasks('assemble');
  grunt.loadNpmTasks('grunt-contrib-compass');
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  grunt.registerTask('default', [
    'clean',
    'copy:statics',
    'assemble',
    'compass',
    'concat:dev',
    'concat:vendor',
    'imagemin'
  ]);

};
