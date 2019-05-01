const gulp = require("gulp");
const sass = require("gulp-sass");
const browserSync = require("browser-sync").create();

// compile our scss into css
// with v4 of gulp, we write functions, not tasks
function style() {
  // 1. Where is my scss file - look for any folders that have scss files
  // 2. Pass scss file through sass compiler
  // 3. Save the compiled CSS somewhere
  return gulp
    .src("./src/scss/**/*.scss")
    .pipe(sass())
    .pipe(gulp.dest("./css"));
}

exports.style = style;
