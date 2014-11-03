var gulp      = require('gulp');
var jade      = require('gulp-jade');
var jscs      = require('gulp-jscs');
var jshint    = require('gulp-jshint');
var less      = require('gulp-less');
gulp.task('default', ['less', 'jade', 'lint', 'jscs', 'watch']);
gulp.task('less', function(done){
  gulp.src('./less/*.less')
    .pipe(less())
    .pipe(gulp.dest('./public/css/'))
    .on('end', done);
});
gulp.task('jade', function(done){
  gulp.src('./jade/**/*.jade')
    .pipe(jade({pretty: true, doctype: 'html'}))
    .pipe(gulp.dest('./'));
});
gulp.task('lint', function() {
  return gulp.src('./public/js/user/*.js')
           .pipe(jshint())
           .pipe(jshint.reporter('jshint-stylish'));
});
gulp.task('jscs', function() {
  return gulp.src('./public/js/user/*.js')
           .pipe(jscs());
});
gulp.task('watch', function() {
  gulp.watch('./less/*.less', ['less']);
  gulp.watch('./jade/*.jade', ['jade']);
  gulp.watch('./public/js/user/*.js', ['lint']);
  gulp.watch('./public/js/user/*.js', ['jscs']);
});
