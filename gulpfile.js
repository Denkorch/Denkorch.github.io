var   gulp = require('gulp')
    , sass = require('gulp-sass')
    , inject = require('gulp-inject')
    , gutil = require('gulp-util')
    , connect = require('gulp-connect')
    , bowerFiles = require('main-bower-files')
    ;


//server
gulp.task('server', function () {
  connect.server({
    livereload: true
  });
});


//html
gulp.task('html', function () {
  gulp.src('./index.html')
    .pipe(connect.reload());
});


gulp.task('inject', function () {
  gulp.src('./index.html')
    .pipe(inject(
      gulp.src(bowerFiles(), { base: './bower_components' }, {read: false}),
      {name: 'bower'},
      {relative: true}
    )
  )
    .pipe(gulp.dest('./'))
    .pipe(connect.reload());
});


//css
gulp.task('css', function () {
  gulp.src('./css/*.css')
    .pipe(connect.reload());
});


//sass
gulp.task('sass', function () {
  gulp.src('./sass/**/*.sass')
    .pipe(sass().on('error', gutil.log))
    .pipe(gulp.dest('./css/'));
});


//watch
gulp.task('watch', function () {
  gulp.watch('./index.html', ['html']);
  gulp.watch('./sass/**/*', ['sass']);
  gulp.watch('./css/**/*', ['css']);
});


gulp.task('default', ['server', 'build', 'watch']);
gulp.task('build', ['inject', 'sass']);
gulp.task('public', ['build']);
