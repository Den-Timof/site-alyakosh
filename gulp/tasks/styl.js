module.exports = function() {
    // Работа со Stylus
    $.gulp.task('style-libs', function() {
        return $.gulp.src([
            'bower_components/bootstrap/dist/css/bootstrap.css',
            'bower_components/bootstrap/dist/css/bootstrap-theme.css',
            'bower_components/css-reset/reset.css',
            'src/plugin/FlexSlider/flexslider.css',
            'bower_components/font-awesome/css/font-awesome.css'
        ])
        .pipe($.glp.concat('libs.min.css'))
        .pipe($.gulp.dest($.path.build.css))
    });

    $.gulp.task('styl', function() {
        return $.gulp.src($.path.src.styl)
        .pipe($.glp.plumber())
        .pipe($.glp.stylus({
            'include css': true
            }
        ))

        .on("error", $.glp.notify.onError(function(error) {
            return "Message to the notifier: " + error.message;
        }))

        .pipe($.glp.autoprefixer(['last 2 version']))
        .pipe($.gulp.dest($.path.build.css))
        .on('end', $.browsersync.reload);
    });
}