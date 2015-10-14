var gulp = require('gulp');
var browserSync = require('browser-sync');

var PATHS = {
    src: 'src/**/*.ts',
    typings: 'node_modules/angular2/bundles/typings/angular2/angular2.d.ts'
};

gulp.task('clean', function(done) {
    var del = require('del');
    del(['dist'], done);
});

gulp.task('ts2js', function() {
    var typescript = require('gulp-typescript');
    var tsResult = gulp.src([PATHS.src, PATHS.typings])
        .pipe(typescript({
            noImplicitAny: true,
            module: 'system',
            target: 'ES5',
            emitDecoratorMetadata: true,
            experimentalDecorators: true
        }));

    return tsResult.js.pipe(gulp.dest('dist'));
});

gulp.task('serve', ['ts2js'], function() {
    /* var http = require('http');*/
    //var connect = require('connect');
    //var serveStatic = require('serve-static');
    /*var open = require('open');*/

    gulp.watch(PATHS.src, ['ts2js']);

    browserSync({
        port: 3000,
        files: ['index.html', 'dist/*.js'],
        injectChanges: true,
        logFileChanges: false,
        logLevel: 'silent',
        notify: true,
        reloadDelay: 0,
        server: {
            baseDir: '',
          /*  middleware: superstatic({*/
                //debug: false
            /*})*/
        }
    });


    //var port = 9000,
    //app;


    //app = connect().use(serveStatic(__dirname));
    //http.createServer(app).listen(port, function() {
    //open('http://localhost:' + port);
    /*});*/
});
gulp.task('default', ['serve']);
