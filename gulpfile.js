var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var nunjucksRender = require('gulp-nunjucks-render');

gulp.task('css', function(){
  return gulp.src('assets/styles/scss/main.scss')
  .pipe(sourcemaps.init())
  .pipe(sass().on('error', sass.logError))
  .pipe(sourcemaps.write('./'))
	.pipe(gulp.dest('assets/styles/css/'))
});
 
gulp.task('nunjucks', function() {
  return gulp.src('nunjcks/pages/**/*.+(html|nunjucks)')  
    .pipe(nunjucksRender({
      path: ['nunjcks/templates']
    }))
    .pipe(gulp.dest('./'))
});

gulp.task('watch', function(){
	gulp.watch('assets/styles/scss/**/*.scss',['css']);
	gulp.watch(['nunjcks/**/*.html'], ['nunjucks']);
})