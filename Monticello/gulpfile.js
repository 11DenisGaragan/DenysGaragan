const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));;

function scss() {
    return gulp
      .src('./styles/scss/style.scss')
      .pipe(sass().on('error', sass.logError))
      .pipe(gulp.dest('./styles/css'));
}

exports.scss = scss;