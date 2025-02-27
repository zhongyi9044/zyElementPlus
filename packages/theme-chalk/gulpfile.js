const autoprefixer = require('gulp-autoprefixer')
const { series, src, dest } = require('gulp')
const sass = require('gulp-dart-sass')
const cssmin = require('gulp-cssmin')

function compile() {
  return src('./src/*scss')
    .pipe(sass.sync())
    .pipe(autoprefixer({}))
    .pipe(cssmin())
    .pipe(dest('./lib'))
}
function copyfont() {
  return src('./src/fonts/**').pipe(cssmin()).pipe(dest('./lib/fonts'))
}
exports.build =series(compile,copyfont)