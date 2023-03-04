const gulp = require('gulp');
const less = require('gulp-less');
const cssmin = require('gulp-cssmin');
const rename = require('gulp-rename');

exports.withoutMin = function () {
    return gulp.src('./src/css/styles.less')
        .pipe(less())
        .pipe(gulp.dest('./dist'));
}

exports.less = function () {
    return gulp.src('./src/css/styles.less')
        .pipe(less())
        .pipe(cssmin())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('./dist'));
}


exports.watch = function () {
    gulp.watch('./src/css/*.less', gulp.series('withoutMin'));
    gulp.watch('./src/css/*.less', gulp.series('less'));
};