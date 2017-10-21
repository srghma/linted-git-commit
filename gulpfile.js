'use strict'

const gulp = require('gulp')
const ts = require('gulp-typescript')
const babel = require('gulp-babel')
const del = require('del')

const paths = {
  src: 'src/**/*.ts',
  dist: 'dist',
}

const tsProject = ts.createProject('tsconfig.json', {
  target: 'esnext'
})

gulp.task('clean', () => del(['dist']))

gulp.task('build', ['clean'], () =>
  gulp
    .src(paths.src)
    .pipe(tsProject())
    .pipe(babel())
    .pipe(gulp.dest(paths.dist))
)

gulp.task('watch', ['build'], () =>
  gulp.watch(paths.src, ['build'])
)

gulp.task('default', ['build'])
