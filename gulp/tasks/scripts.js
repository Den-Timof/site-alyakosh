module.exports = function() {
    // Работа с JS
    $.gulp.task('scripts-lib', function() {
        return $.gulp.src([
            'src/js/jquery-v1.11.1.min.js',
            'bower_components/jquery-ui/jquery-ui.js',
            'bower_components/bootstrap/dist/js/bootstrap.js',
            'src/plugin/FlexSlider/jquery.flexslider.js',
        ])
            .pipe($.glp.concat('libs.min.js'))
            .pipe($.glp.uglifyjs())
            .pipe($.gulp.dest($.path.build.js))
            .on('end', $.browsersync.reload);
    });
    $.gulp.task('scripts', function() {
        return $.gulp.src($.path.src.js)
            .pipe($.gulp.dest($.path.build.js))
            .on('end', $.browsersync.reload);
    });
}