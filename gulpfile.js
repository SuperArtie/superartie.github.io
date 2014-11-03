var gulp      = require('gulp');
var jade      = require('gulp-jade');
var less      = require('gulp-less');
gulp.task('default', ['less', 'jade']);
gulp.task('less', function(done){
  gulp.src('./less/*.less')
    .pipe(less())
    .pipe(gulp.dest('./public/css/'))
    .on('end', done);
});
gulp.task('jade', function(done){
  gulp.src('./jade/*.jade')
    .pipe(jade({pretty: true, doctype: 'html'}))
    .pipe(gulp.dest('./public/'));
});
