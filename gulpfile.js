var gulp    = require('gulp');
var sass    = require('gulp-sass');
var connect = require('gulp-connect');

var merge = require('merge-stream');


// --------------------- SERVIDOR LIVERELOAD --------------------- //
gulp.task('server',function(){
    connect.server({
        root: './public-dev',
        hostname: 'localhost',
        host: '0.0.0.0',
        port: 80,
        livereload: true,
        fallback:'./public-dev/index.html'
    });
});

// --------------------------TAREAS------------------------------- //
gulp.task('html',function(cb){
    return gulp.src('./public-dev/index.html')
    .pipe(connect.reload());
});

gulp.task('css', function(){
    var mainCss = gulp.src('./public-dev/styles/*.scss')
        .pipe(sass().on('error',sass.logError))
        .pipe(gulp.dest('./public-dev/styles'))

    var modulesCss = gulp.src('./public-dev/modules/**/styles/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./public-dev/modules'))

    return merge(mainCss, modulesCss);
});

gulp.task('watch',function(cb){
    gulp.watch('./public-dev/styles/*.scss',gulp.task('css'));
    gulp.watch('./public-dev/modules/**/styles/*.scss',gulp.task('css'));
    gulp.watch('./public-dev/index.html',gulp.task('html'));
    gulp.watch('./public-dev/modules/**/views/*.html',gulp.task('html'));
    cb();
});

gulp.task('server',gulp.series('watch','css','server'));