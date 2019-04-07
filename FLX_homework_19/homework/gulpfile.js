const less = require('gulp-less');
const path = require('path');
const {src, dest, task, series, watch} = require('gulp');
const babel = require('gulp-babel');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const imagemin = require('gulp-imagemin');
const sourcemaps = require('gulp-sourcemaps');
const browserSync = require('browser-sync').create();

let lessTask = () => {
  return src('src/less/*.less', { sourcemap: true })
    .pipe(sourcemaps.write())
    .pipe(sourcemaps.init({loadMaps: true}))
    .pipe(concat("style.css"))
    .pipe(less())
    .pipe(sourcemaps.write())
    .pipe(dest( 'dist/css' ));
}

let jsTask = () => {
  return src('./src/js/*.js', { sourcemap: true })
    .pipe(sourcemaps.write())
    .pipe(sourcemaps.init({loadMaps: true}))
    .pipe(concat("all.js"))
    .pipe(babel({
        presets: ['@babel/env']
    }))
    .pipe(uglify())
    .pipe(sourcemaps.write())
    .pipe(dest( 'dist/js' ));
}

let imageminTask = () => {
  return src('./src/img/*')
    .pipe(imagemin([
      imagemin.gifsicle({interlaced: true}),
      imagemin.jpegtran({progressive: true}),
      imagemin.optipng({optimizationLevel: 5}),
      imagemin.svgo({
        plugins: [
          {removeViewBox: true},
          {cleanupIDs: false}
        ]
    })
  ]))
    .pipe(dest('dist/img'))
}

let serverTask = () => {
   browserSync.init({
      files: ["src/less/*.less", "src/js/*.js", "*.html"],
      server: {
        baseDir: "./"
      }
    });
}

exports.serve = () => {
  serverTask();
  watch('src/less/*.less', lessTask);
  watch('src/js/*.js', jsTask);
 }

task('default', series(lessTask, jsTask, imageminTask));