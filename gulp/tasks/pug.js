module.exports = function() {
    // Работа с Pug
    $.gulp.task('pug', function() {
        return $.gulp.src($.path.src.pug)
            .pipe($.glp.plumber())
            .pipe($.glp.pug({
                pretty: true
            }))
            .on("error", $.glp.notify.onError(function(error) {
                return "Message to the notifier: " + error.message;
            }))
            .pipe($.gulp.dest($.path.build.html))
            .on('end', $.browsersync.reload);
    });
}