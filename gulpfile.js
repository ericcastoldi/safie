var gulp = require('gulp'),
  del = require('del'),
  merge = require('merge-stream'),
  runSequence = require('run-sequence'),
  source = require('vinyl-source-stream'),
  browserify = require('browserify'),
  babelify = require('babelify'),
  envify = require('envify'),
  mocha = require('gulp-mocha'),
  eslint = require('gulp-eslint'),
  production = process.env.NODE_ENV === 'production';


// Transform all required files with Babel
require('babel-core/register');

var storeStaticFiles = 'src/store/static/*',
  storeComponentsEntryPoint = ['src/store/components/App.jsx'],
  storeOutput = 'public/store';

var cockpitStaticFiles = 'src/cockpit/static/*',
  cockpitOutput = 'public/cockpit';

gulp.task('deploy', ['copy-static'], function (done) {
  runSequence('transpile:store', done);
});

gulp.task('copy-static', ['clean'], function () {
  var store = gulp.src(storeStaticFiles)
    .pipe(gulp.dest(storeOutput));

  var cockpit = gulp.src(cockpitStaticFiles)
    .pipe(gulp.dest(cockpitOutput));

  return merge(store, cockpit);
});

gulp.task('clean', function () {
  return del(['coverage', 'public']);
});


// Transpile and deploy react components
var transpile = function (entryPoint, output) {
  return browserify({
      entries: entryPoint,
      debug: !production,
      transform: [babelify, envify]
    })
    .bundle()
    .pipe(source('application.js'))
    .pipe(gulp.dest(output));
};

gulp.task('transpile:store', function () {
  return transpile(storeComponentsEntryPoint, storeOutput);
});

// Tests        'test/**/*.{js,jsx}'
var testCases = 'test/**/*Spec.{jsx,js}';
gulp.task('test', function () {
  return gulp.src(testCases, {
      read: false
    })
    .pipe(mocha());
});

gulp.task('cover', require('gulp-jsx-coverage')
  .createTask({
    src: [
      '!coverage/**',
      '!node_modules/**',
      '!public/**',
      '!store/static/**',
      '!cockpit/static/**',
      '!app.js',
      '!src/store/components/App.jsx',
      testCases,
      'src/**/*.{js,jsx}'
    ],
    istanbul: {
      includeUntested: true,
      preserveComments: true,
      coverageVariable: '__MY_TEST_COVERAGE__',
      exclude: /node_modules|test/
    },
    transpile: {
      babel: {
        include: /\.jsx?$/,
        exclude: /node_modules/,
        omitExt: ['.js', '.jsx']
      }
    },
    coverage: {
      reporters: ['lcov'],
      directory: 'coverage'
    },
    mocha: {
      reporter: 'spec'
    }
  }));


// Lint
gulp.task('lint', function () {
  return gulp.src([
      'src/**/*.{js,jsx}',
      '!coverage/**',
      '!node_modules/**',
      '!public/**',
      '!test/**'])
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failOnError());
});

// Travis CI
gulp.task('travis', ['clean'], function (done) {
  runSequence('lint', 'cover', done);
});
