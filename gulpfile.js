const { src, dest } = require('gulp');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');

function defaultTask() {
  return src(['src/js/horloge.js', 'src/js/modal.js', 'src/js/index.js'])
    .pipe(concat('bundle.min.js'))
    .pipe(uglify())
    .pipe(dest('dist'));
}

exports.default = defaultTask;
