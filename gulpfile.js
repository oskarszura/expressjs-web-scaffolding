var gulp = require('gulp'),
  nodemon = require('gulp-nodemon'),
  livereload = require('gulp-livereload'),
  babel = require("gulp-babel");

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
    return gulp.src("public/js/app.js")
        .pipe(babel())
        .pipe(gulp.dest("public/dist"));
});

gulp.task('default', ['develop']);