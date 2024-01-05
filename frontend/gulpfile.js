const { src, task, dest, series } = require('gulp');

const htmlMin = require('gulp-htmlmin');
const cssMin = require('gulp-clean-css');
const babel = require('gulp-babel');
const svgMin = require('gulp-svgmin');
const uglify = require('gulp-uglify');
const imgMin = require('gulp-imagemin');
const rename = require('gulp-rename');

/**
 *
 * @returns {*}
 */
const html = () => {
    return src('build/**/*.html')
        .pipe(htmlMin())
        .pipe(dest('build'));
};

/**
 *
 * @returns {*}
 */
const css = () => {
    return src('build/**/*.css')
        .pipe(cssMin())
        .pipe(rename({ extname: '.min.css' }))
        .pipe(dest('build'));
};

/**
 *
 * @returns {*}
 */
const js = () => {
    return src('build/**/*.js')
        .pipe(babel())
        .pipe(src('build/**/*.js'))
        .pipe(dest('build'))
        .pipe(uglify())
        .pipe(rename({ extname: '.min.js' }))
        .pipe(dest('build'));
};

/**
 *
 * @returns {*}
 */
const img = () => {
    return src('build/**/*')
        .pipe(imgMin())
        .pipe(dest('build'));
};

/**
 *
 * @returns {*}
 */
const svg = () => {
    return src('build/**/*.svg')
        .pipe(svgMin())
        .pipe(dest('build'));
}

task('build', series(html, css, js, img, svg));