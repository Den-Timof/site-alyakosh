'use strict';

global.$ = {
    gulp: require('gulp'),
    glp: require('gulp-load-plugins')(),
    browsersync: require('browser-sync').create(),
    pngquant: require('imagemin-pngquant')(),
    del: require('del'),
    html2pug : require('gulp-html2pug'),

    path: {
        tasks: require('./gulp/config/tasks.js'),

        src: {
            pug: 'src/project/index.pug',
            styl: 'src/style/style.styl',
            fonts: 'src/fonts/**/*',
            js: 'src/js/main.js'
        },

        build: {
            html: 'build/',
            css: 'build/css',
            fonts: 'build/fonts',
            js: 'build/js',
            fonts: 'build/font/'
        },

        watch: {
            pug: 'src/project/**/*.pug',
            styl: [
                'src/style/**/*.styl',
                'src/project/**/**/*.styl'
            ],
            img: 'src/img/*'
        }
    }
};

$.path.tasks.forEach(function (taskPath) {
    require(taskPath)();
});

// Шрифты
$.gulp.task('fonts', function () {
    return $.gulp.src($.path.src.fonts)
        .pipe($.gulp.dest($.path.build.fonts));
});


$.gulp.task('html2pug', function() {
    // Backend locales
    return $.gulp.src('src/html2pug/*.html')
    .pipe($.html2pug(/* options for html2pug such as { fragment: true } */))
    .pipe($.gulp.dest('src/html2pug/pug/'));
});


// Сборка проекта
$.gulp.task('build', ['clean', 'img', 'pug', 'styl', 'style-libs', 'scripts', 'scripts-lib'], function () {
    var buildFonts = $.gulp.src($.path.src.fonts)
        .pipe($.gulp.dest($.path.build.fonts));

    var buildJs = $.gulp.src($.path.src.js)
        .pipe($.gulp.dest($.path.build.js));
});

// Слежение
$.gulp.task('watch', ['browsersync', 'styl', 'style-libs', 'scripts', 'scripts-lib'], function () {
    $.gulp.watch($.path.watch.styl, ['styl']);
    $.gulp.watch($.path.watch.pug, ['pug']);
    $.gulp.watch($.path.watch.img, ['img']);
    $.gulp.watch(['src/js/*.js', '!src/js/libs.min.js'], ['scripts']);
});


// Дефолтный таск
$.gulp.task('default', ['build', 'watch']);