"use strict";

const gulp = require('gulp');
const concatCss = require('gulp-concat-css');
const concat = require('gulp-concat');
const rename = require('gulp-rename');
const autoprefixer = require('gulp-autoprefixer');
const notify = require('gulp-notify');
const uglify = require('gulp-uglify');
const uncss = require('gulp-uncss');
const wiredep = require('wiredep').stream;

gulp.task('scripts', function() {
    return gulp.src('app/**/*.js')
        .pipe(concat('app.js'))
        // .pipe(uglify())
        .pipe(gulp.dest('build/js'))
        .pipe(notify('Done!'));
});

gulp.task('css', function () {
    return gulp.src('app/**/*.css')
        .pipe(concatCss('bundle.css'))
        .pipe(autoprefixer('last 2 versions', '> 1%', 'ie 9'))
        .pipe(rename('bundle.min.css'))
        // .pipe( ({                             //remove unused css
        //     html: ['index.html', 'app/**/*.html']
        // }))
        .pipe(gulp.dest('build/css'))
        .pipe(notify('Done!'));
});

gulp.task('default', function () {
    gulp.watch('app/**/*.css', ['watch', 'css'])
});


