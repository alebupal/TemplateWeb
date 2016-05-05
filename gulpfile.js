var gulp 		      = require("gulp");
var connect       = require('gulp-connect-php');
var browserSync   = require('browser-sync');
var sass          = require('gulp-sass');
var inject        = require('gulp-inject');
var cleanCSS      = require('gulp-clean-css');
var sourcemaps    = require('gulp-sourcemaps');
var minify        = require('gulp-minify');
var rename        = require('gulp-rename');
var wiredep       = require('wiredep').stream;
var iconfont      = require('gulp-iconfont');
var iconfontCss   = require('gulp-iconfont-css');

gulp.task('servidor', ['php','sass','iconfont','minify-js','inject','wiredep'], function() {
    browserSync({
        proxy: '127.0.0.1:80', //ruta donde se abre al lanzarse
        port: 8080, //Puerto browserSync
        open: true, //Abrirlo al arrancar
        notify: true, //Mensaje de conexión y desconexión de browserSync
        ui:{
          port: 8081 //Puerto administración browserSync
        }
    });
    gulp.watch("app/scss/**/*.scss", ['sass']);
    gulp.watch("app/scripts/**/*.js", ['minify-js']);
    gulp.watch("app/assets/icons/**/*.svg", ['iconfont']);
    gulp.watch('bower.json', ['wiredep']);
    gulp.watch("app/**/*.html").on('change', browserSync.reload);
    gulp.watch("app/**/*.php").on('change', browserSync.reload);

});

gulp.task('php', function() {
    connect.server({
      base: 'app/', //Carpeta root de la web
      hostname: '0.0.0.0', //Permite acceder desde cualquier url
      port: 80, //Puerto servidor PHP
      keepalive: true, //Mantener la conexión abierta
      bin: 'C:/xampp/php/php.exe', //Ruta php.exe
      ini: 'C:/xampp/php/php.ini' //Ruta php.ini
    });
});

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
    return gulp.src("app/scss/**/*.scss")
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest("app/styles"))
        .pipe(sourcemaps.init())
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(sourcemaps.write())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('app/styles/min'))
        .pipe(browserSync.stream());
});

//inyectar las librerias que instanciemos vía bower
//Primero las librerias y despues con inject los css y js propios
gulp.task('wiredep', ['inject'], function () {
  gulp.src('app/index.php')
    .pipe(wiredep({
      directory: 'app/bower_components'
    }))
    .pipe(gulp.dest('app'));
});

gulp.task('iconfont',function(){
  gulp.src(['app/assets/icons/*.svg'])
    .pipe(iconfontCss({
      fontName: "iconos",
      targetPath: '../../styles/min/iconos.css',
      fontPath: '../../fonts/iconos/'
    }))
    .pipe(iconfont({
      fontName: "iconos"
     }))
    .pipe(gulp.dest('app/fonts/iconos/'));
});

gulp.task('minify-js', ['inject'], function() {
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
  var target = gulp.src('app/index.php');
  var sources = gulp.src(['app/scripts/**/*.min.js', 'app/styles/min/*.css'], {read: false});
  var injectOptions = {
       relative: true
  };
  return target.pipe(inject(sources, injectOptions))
    .pipe(gulp.dest('app'));
});

gulp.task('default', ['servidor']);