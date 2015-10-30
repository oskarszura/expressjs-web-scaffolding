var gulp = require('gulp'),
  nodemon = require('gulp-nodemon'),
  livereload = require('gulp-livereload'),
  browserify = require("browserify"),
  babelify = require("babelify"),
  source = require('vinyl-source-stream');

gulp.task('babelify', function() {
    browserify({ entries: 'public/js/app.js', debug: true })
        .transform(babelify)
        .bundle()
        .pipe(source('app.js'))
        .pipe(gulp.dest('./public/dist/'));
});

gulp.task('develop', function () {
  livereload.listen();
  nodemon({
    script: 'app.js',
    ext: 'js ejs',
  }).on('restart', function () {
    setTimeout(function () {
      livereload.changed();
    }, 500);
  });
});

gulp.task("babel", function () {
    return gulp.src("public/js/*")
        .pipe(babel())
        .pipe(gulp.dest("public/dist"));
});

gulp.task('default', ['develop']);