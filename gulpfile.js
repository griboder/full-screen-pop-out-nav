var
    gulp         = require('gulp'),
    less         = require('gulp-less'),
    autoprefixer = require('gulp-autoprefixer'),
    concat       = require('gulp-concat'),
    gcmq         = require('gulp-group-css-media-queries'),
    sourcemaps   = require('gulp-sourcemaps');



gulp.task('less', function(){
    return gulp.src('app/less/common.less')
        .pipe(sourcemaps.init())
        .pipe(less({
            plugins: [ require('less-plugin-glob') ]
        }))
        .pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: false }))
        .pipe(concat('common.css'))
        .pipe(gcmq())
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('dist/css'))
});

gulp.task('watch', ['less'], function() {
    gulp.watch('app/less/**/*.less', ['less']);
});

gulp.task('clear', function (callback) {
    return cache.clearAll();
});

gulp.task('default', ['watch']);