const gulp = require('gulp')
const babel = require('gulp-babel')
const bs = require('browser-sync').create()
const reload = bs.reload
const sass = require('gulp-sass')

gulp.task('sass', () => {
  gulp.src('app/assets/es2015/*.sass')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('app/assets/css'))
})

gulp.task('babel', () => {
  return gulp.src('app/assets/es2015/*.js')
    .pipe(babel())
    .pipe(gulp.dest('app/assets/js'))
})

gulp.task('default', () => {
  bs.init({
    notify: false,
    server: "./"
  })
  gulp.watch('*.html').on('change', reload)
  gulp.watch('app/assets/es2015/*.sass', ['sass'])
  gulp.watch('app/assets/es2015/*.js', ['babel'])
  gulp.watch('app/assets/css/*.css').on('change', reload)
  gulp.watch('app/assets/js/*.js').on('change', reload)
})
