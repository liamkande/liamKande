var gulp = require('gulp'),
    gutil = require('gulp-util'),
    browserify = require('gulp-browserify'),
    webserver = require('gulp-webserver'),
    uglify = require('gulp-uglify'),
    jsmin = require("gulp-jsmin"),
    concat = require('gulp-concat'),
    jsonminify = require("gulp-jsonminify"),
    minifyCSS = require("gulp-minify-css"),
    minifyHTML = require("gulp-minify-html"),
    gulpif = require('gulp-if');


var env,
    app,
    jsSource,
    src = './process';
jsSource = [
  'process/js/AddAppointment.js',
  'process/js/app.js',
  'process/js/AptList.js',
  'process/js/SearchAppointments.js'
];

env = process.env.NODE_ENV || "development";

if (env=== "development") {
  app = "builds/development/";
  //sassStyle = "expanded";
} else {
  app = "builds/production/"; // this var replaces all builds/production
  //sassStyle = "compressed";
}


gulp.task('js', function() {
  return gulp.src(jsSource)
    .pipe(concat('script.js'))
    .pipe(browserify({
      transform: 'reactify',
      debug: true
    }))
    .on('error', function (err) {
      console.error('Error!', err.message);
    })
    .pipe(gulpif(env === "production", jsmin()))
    .pipe(gulp.dest(app + 'js'))
});

gulp.task('html', function() {
  gulp.src("builds/development/*.html")
  .pipe(gulpif(env === "production", minifyHTML()))
  .pipe(gulpif(env === "production", gulp.dest(app)))
});

gulp.task('css', function() {
  gulp.src("builds/development/css/*.css")
    .pipe(gulpif(env === "production", minifyCSS()))
    .pipe(gulpif(env === "production", gulp.dest("builds/production/css")))
});

gulp.task('json', function() {
  gulp.src("builds/development/js/*.json")
    .pipe(gulpif(env === "production", jsonminify()))
    .pipe(gulpif(env === "production", gulp.dest("builds/production/js")))
});

gulp.task('watch', function() {
  gulp.watch( src + '/js/**/*', ['js']);
  gulp.watch( app + '/css/**/*.css', ['css']);
  gulp.watch([ app + '/**/*.html'], ['html']);
});

gulp.task('webserver', function() {
  gulp.src( app + '/')
    .pipe(webserver({
        livereload: true,
        open: true
    }));
});

gulp.task('default', ['watch', 'html', 'js','json','css', 'webserver']);
