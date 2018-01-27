module.exports = function() {
    // Оптимизация изображений
    $.gulp.task('img', function() {
        return $.gulp.src(['src/img/**/*', '!src/img/sprite/*'])
            .pipe($.glp.cache($.glp.imagemin({
                progressive: true,
                use: [$.glp.pngquant]
            })))
            .pipe($.gulp.dest('build/img'));
    });
}