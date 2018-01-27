module.exports = function() {
    // Browsersync
    $.gulp.task('browsersync', function() {
        $.browsersync.init({
            server: {
                baseDir: 'build/'
            },
            host: '***',
            port: '3010'
        });
    });
}