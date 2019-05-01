const gulp = require("gulp");
const sass = require("gulp-sass");
const browserSync = require("browser-sync").create();

// compile our scss into css
// with v4 of gulp, we write functions, not tasks
function style() {
  // 1. Where is my scss file - look for any folders that have scss files
  // 2. Pass scss file through sass compiler - error logging enabled
  // 3. Save the compiled CSS somewhere
  // 4. Stream changes between all browsers with browser-sync
  return gulp
    .src("./src/scss/**/*.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(gulp.dest("./css"))
    .pipe(browserSync.stream());
}

// this will watch and update automatically
// watch takes the thing to watch, and the thing to do when changes are detected
function watch() {
  browserSync.init({
    server: {
      baseDir: "./"
    }
  });
  gulp.watch("./src/scss/**/*.scss", style);
  gulp.watch("./*.html").on("change", browserSync.reload);
  gulp.watch("./src/js/**/*.js").on("change", browserSync.reload);
}

exports.style = style;
exports.watch = watch;
