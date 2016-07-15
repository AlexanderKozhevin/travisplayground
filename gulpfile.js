var gulp = require('gulp');
var gulpSass = require('gulp-sass');

gulp.task('style',  function() {
	return gulp.src('style/**/*.scss')
	.pipe(gulpSass({ errLogToConsole: true, sourceComments: 'map', sourceMap: 'sass'}))
	.pipe(gulp.dest('./'))
});


gulp.task('default', ['style'], function(){
  process.exit(0);
})
