// Variables
var gulp        = require('gulp'),
    gulp_image  = require('gulp-image'),
    gulp_css    = require('gulp-clean-css'),
    gulp_js     = require('gulp-uglify'),
    minify_html  = require('gulp-htmlmin');

// Minify Images
gulp.task('minify_image', function () {
    gulp.src('images/favicon.ico').
        pipe(gulp_image()).
        pipe(gulp.dest('../dist/images/'));
});

// Minify Css
gulp.task('minify_css', function () {
    gulp.src('css/*.*').
        pipe(gulp_css()).
        pipe(gulp.dest('../dist/css/'));
});

// Minify Js
gulp.task('minify_js', function () {
   gulp.src('js/*').
        pipe(gulp_js()).
        pipe(gulp.dest('../dist/js/'));
});

// Mininfy fonts
gulp.task('minify_font', function () {
    gulp.src('WebFonts/*').
        //pipe(gulp_fonts()).
        pipe(gulp.dest('../dist/WebFonts/'));
});

// minify HTML
gulp.task('minify_html', function () {
    gulp.src('index.html').
    pipe(minify_html({collapseWhitespace: true})).
    pipe(gulp.dest('../dist/'));
});

gulp.task('run', ['minify_html']);