# TemplateWeb
Consiste en una plantilla para empezar proyectos web. Se compone de:

  - [Node.js](https://nodejs.org/en/ "https://nodejs.org/en/") (Servidor node)
  - [Gulp.js](http://gulpjs.com/ "http://gulpjs.com/") (Administrador de tareas)
  - [Bower](http://bower.io/ "http://bower.io/") (Para instalar librerias)

### Version
1.0.0

### Plugins Gulp.js
Los "plugins" utilizados para Gulp son:
 - [browser-sync](https://www.npmjs.com/package/browser-sync "https://www.npmjs.com/package/browser-sync") (Sincronización en tiempo real)
 - [gulp-sass](https://www.npmjs.com/package/gulp-sass "https://www.npmjs.com/package/gulp-sass") (Compilar SASS)
 - [gulp-inject](https://www.npmjs.com/package/gulp-inject "https://www.npmjs.com/package/gulp-inject") (Autoinsertar js y css)
 - [gulp-clean-css](https://www.npmjs.com/package/gulp-clean-css "https://www.npmjs.com/package/gulp-clean-css") (Minificar css)
 - [gulp-sourcemaps](https://www.npmjs.com/package/gulp-sourcemaps "https://www.npmjs.com/package/gulp-sass") (sourcempas css)
 - [gulp-sass](https://www.npmjs.com/package/gulp-minify "https://www.npmjs.com/package/gulp-minify") (Minificar js)
 - [gulp-rename](https://www.npmjs.com/package/gulp-rename "https://www.npmjs.com/package/gulp-rename") (Renombrar ficheros)
 - [wiredep](https://www.npmjs.com/package/wiredep "https://www.npmjs.com/package/wiredep") (Auntoinsertar js y css de librerias instaladas con bower)
 - [gulp-iconfont](https://www.npmjs.com/package/gulp-iconfont "https://www.npmjs.com/package/gulp-iconfont") (Generar una fuente con imágenes svg)
 - [gulp-iconfont-css](https://www.npmjs.com/package/gulp-iconfont-css "https://www.npmjs.com/package/gulp-iconfont-css") (Generar css a partir de una fuente)
 - [gulp-connect-php](https://www.npmjs.com/package/gulp-connect-php "https://www.npmjs.com/package/gulp-connect-php") (PHP)

### Librerias

Las librerias instaladas mediantes bower son:

* [Twitter Bootstrap](http://getbootstrap.com/ "http://getbootstrap.com/")
* [jQuery](https://jquery.com/ "https://jquery.com/")

### Instalación

Clonamos el proyecto:

```sh
$ git clone https://github.com/alebupal/TemplateWeb
```
Instalamos dependencias de node.js
```sh
$ npm install
```
Instalamos dependencias de bower
```sh
$ bower install
```
ejecutar
```sh
$ gulp
```
Todos estos comandos se deben hacer desde el directorio del proyecto



2016 [Alejandro Bueno Palma](http://alejandrobuenopalma.com/ "http://alejandrobuenopalma.com/")
