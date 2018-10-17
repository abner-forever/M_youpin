const gulp = require('gulp');
const server = require('gulp-webserver');
const sass = require('gulp-sass');
const webpack = require('webpack-stream');
const watch = require('gulp-watch');
const del = require('del');
const imagemin = require('gulp-imagemin')
//引入配置项
const config = require('./config')

const {
    server_config,
    sass_config,
    webpack_config
} = config;

//开启热更新服务器
gulp.task('server', () => {
    return gulp.src('./dist')
        .pipe(server(server_config))
})

//复制html
gulp.task('copy:html', () => {
    return gulp.src('./src/**/*.html')
        .pipe(gulp.dest('./dist'))
})

//输出静态文件 (类库)
gulp.task('copy:static', () => {
    return gulp.src('./src/static/**/*.*')
        .pipe(gulp.dest('./dist/static'))
})
//处理压缩scss
gulp.task('compile:scss', () => {
    setTimeout(() => {
        return gulp.src('./src/css/**/*.scss')
            .pipe(sass(sass_config).on('error', sass.logError))
            .pipe(gulp.dest('./dist/css'))
    }, 500);
})

// 复制压缩图片
gulp.task('compile:img', () => {
    gulp.src('./src/img/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./dist/img'));
})

//打包压缩js
gulp.task('compile:js', () => {
    return gulp.src('./src/js/**/*.js')
        .pipe(webpack(webpack_config))
        .pipe(gulp.dest('./dist/js'))
})

//监听
gulp.task('watch', () => {
    gulp.watch('./src/**/*.html', ['copy:html'])
    gulp.watch('./src/css/**/*.scss', ['compile:scss'])
    gulp.watch('./src/js/**/*.js', ['compile:js'])
    gulp.watch('./src/static/**/*.*', ['copy:static'])

    watch('src/static', (v) => { //当src/static中的文件变化后执行
        if (v.event === 'unlink') {
            let _path = v.history[0].replace('\src', 'dist');
            del(_path); //删除dist中的文件
        } else {
            gulp.start(['copy:static'])
        }
    })
})

//默认任务
gulp.task('default', ['server', 'copy:static', 'copy:html', 'compile:scss', 'compile:js', 'compile:img', 'watch'], () => {
    console.log("everything is done");

})