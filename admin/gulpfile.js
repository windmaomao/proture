/**
 * Gulp config
 *
 * @date 03/26/16
 * @author Fang Jin <fang-a.jin@db.com>
*/

var fs = require('fs');
var del = require('del');
var gulp = require('gulp');
var connect = require('gulp-connect');
var $ = require('gulp-load-plugins')();
var proxy = require('http-proxy-middleware');
var webpack = require('webpack-stream');

var config = {
  pkg : JSON.parse(fs.readFileSync('./package.json')),
  src: '/src',
  dist: '/dist',
  banner:
      '/*!\n' +
      ' * <%= pkg.name %>\n' +
      ' * <%= pkg.homepage %>\n' +
      ' * Version: <%= pkg.version %> - <%= timestamp %>\n' +
      ' * License: <%= pkg.license %>\n' +
      ' */\n\n\n'
};

gulp.task('default', ['build', 'connect']);

// server connect with support to proxy
gulp.task('connect', function() {
    connect.server({
        root: 'dist',
        port: 7930,
        middleware: function(connect, opt) {
            return [
                proxy('/v1', {
                    target: 'http://localhost:7929'
                })
            ]
        }
    });
});

// build source files
gulp.task('build', function() {
    var webpackConfig = require('./webpack.config.js');
    return gulp.src('./src/app.js')
        .pipe(webpack(webpackConfig))
        .pipe(gulp.dest('dist/'))
    ;
});

// clean folder
gulp.task('clean', function() {
    return del(['dist/*.js']);
});

// watch folder
gulp.task('watch', ['build'], function() {
    // gulp.watch(['src/**/*.{js}'], ['build']);
});

gulp.task('reload', function() {
    // gulp.src('dist/**/*.{css,js}')
    //     .pipe(connect.reload());
});

var handleError = function (err) {
  console.log(err.toString());
  this.emit('end');
};
