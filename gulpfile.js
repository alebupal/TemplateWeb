var gulp 		      = require("gulp");
var browserSync   = require('browser-sync').create();
var sass          = require('gulp-sass');
var inject        = require('gulp-inject');
var cleanCSS      = require('gulp-clean-css');
var sourcemaps    = require('gulp-sourcemaps');
var minify        = require('gulp-minify');
var rename        = require('gulp-rename');
var wiredep       = require('wiredep').stream;
var iconfont      = require('gulp-iconfont');
var iconfontCss   = require('gulp-iconfont-css');

// Static Server + watching scss/html files
gulp.task('serve', ['sass','iconfont','minify-css','minify-js','inject','wiredep'], function() {
    browserSync.init({
        server: "./app"
    });

    gulp.watch("app/scss/**/*.scss", ['sass','minify-css','inject']);
    gulp.watch("app/scripts/**/*.js", ['minify-js','inject']);
    gulp.watch("app/assets/icons/**/*.svg", ['iconfont','minify-css','inject']);
    gulp.watch('bower.json', ['wiredep']);
    gulp.watch("app/*.html").on('change', browserSync.reload);

});

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
    return gulp.src("app/scss/**/*.scss")
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest("app/styles"))
        .pipe(browserSync.stream());
});


//inyectar las librerias que instanciemos vía bower
//Primero las librerias y despues con inject los css y js propios
gulp.task('wiredep', ['inject'],function () {
  gulp.src('app/index.html')
    .pipe(wiredep({
      directory: 'app/bower_components'
    }))
    .pipe(gulp.dest('app'));
});



gulp.task('iconfont',function(){
  gulp.src(['app/assets/icons/*.svg'])
    .pipe(iconfontCss({
      fontName: "iconos",
      targetPath: '../../styles/iconos.css',
      fontPath: '../../fonts/iconos/'
    }))
    .pipe(iconfont({
      fontName: "iconos"
     }))
    .pipe(gulp.dest('app/fonts/iconos/'));
});



// minificar js y css

gulp.task('minify-css', function() {
  return gulp.src('app/styles/*.css')
    .pipe(sourcemaps.init())
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(sourcemaps.write())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('app/styles/min'));
});


gulp.task('minify-js', function() {
  gulp.src('app/scripts/*.js')
    .pipe(minify({
        ext:{
            min:'.js'
        }
    }))
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('app/scripts/min'))
});


// inyectar css y js
gulp.task('inject', function () {
  var target = gulp.src('app/index.html');
  var sources = gulp.src(['app/scripts/**/*.min.js', 'app/styles/min/*.min.css'], {read: false});
  var injectOptions = {
       relative: true
  };
  return target.pipe(inject(sources, injectOptions))
    .pipe(gulp.dest('app'));
});




gulp.task('default', ['serve']);