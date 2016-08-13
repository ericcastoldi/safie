var gulp = require('gulp'),
  del = require('del'),
  merge = require('merge-stream');

gulp.task('deploy', ['copy-webapp']);

gulp.task('copy-webapp', ['clean'], function () {
  var store = gulp.src('src/store/static/*')
    .pipe(gulp.dest('public/store'));

  var cockpit = gulp.src('src/cockpit/static/*')
    .pipe(gulp.dest('public/cockpit'));

  return merge(store, cockpit);
});

gulp.task('clean', function () {
  return del(['coverage', 'public']);
});
