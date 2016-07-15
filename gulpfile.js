var gulp = require('gulp');
var gulpSass = require('gulp-sass');
var gulpCopy = require('gulp-copy');

gulp.task('style',  function() {
	return gulp.src('src/style/**/*.scss')
	.pipe(gulpSass({ errLogToConsole: true, sourceComments: 'map', sourceMap: 'sass'}))
	.pipe(gulp.dest('production'))
});

gulp.task('copyIndex', function() {
  gulp.src("src/index.html").pipe(gulpCopy('production/', {prefix: 1}));
});

gulp.task('default', ['style', 'copyIndex'], function(){
  process.exit(0);
})
