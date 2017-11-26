'use strict'

const gulp = require('gulp')
const babel = require('gulp-babel')
const del = require('del')

const paths = {
  src:  'src/**/*.js',
  dist: 'dist',
}

gulp.task('clean', () => del(['dist']))

gulp.task('build', ['clean'], () =>
  gulp
    .src(paths.src)
    .pipe(babel())
    .pipe(gulp.dest(paths.dist))
)

gulp.task('watch', ['build'], () => gulp.watch(paths.src, ['build']))

gulp.task('default', ['build'])
