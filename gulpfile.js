var gulp = require('gulp'),
  del = require('del'),
  merge = require('merge-stream'),
  runSequence = require('run-sequence'),
  source = require('vinyl-source-stream'),
  browserify = require('browserify'),
  babelify = require('babelify'),
  envify = require('envify'),
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
