var fs = require('fs');
var del = require('del');
var gulp = require('gulp');
var connect = require('gulp-connect');
var $ = require('gulp-load-plugins')();
var proxy = require('http-proxy-middleware');

var config = {
  pkg : JSON.parse(fs.readFileSync('./package.json')),
  banner:
      '/*!\n' +
      ' * <%= pkg.name %>\n' +
      ' * <%= pkg.homepage %>\n' +
      ' * Version: <%= pkg.version %> - <%= timestamp %>\n' +
      ' * License: <%= pkg.license %>\n' +
      ' */\n\n\n'
};

gulp.task('default', ['connect']);

gulp.task('watch', ['connect'], function() {
  gulp.watch(['src/**/*.{js,html}'], ['build']);
});

gulp.task('connect', [], function() {
    connect.server({
        middleware: function(connect, opt) {
            return [
                proxy('/v1', {
                    target: 'http://qplot.com:8182'
                })
            ]
        }
    });
});

gulp.task('reload', function() {
    gulp.src('dist/**/*.{css,js}')
        .pipe(connect.reload());
});

var handleError = function (err) {
  console.log(err.toString());
  this.emit('end');
};
