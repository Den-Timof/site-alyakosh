module.exports = function() {
    // Очистка папки сборки
    $.gulp.task('clean', function() {
        return $.del.sync('prodact');
    });
    // Очистка кеша
    $.gulp.task('clear', function() {
        return $.glp.cache.clearAll();
    });
}