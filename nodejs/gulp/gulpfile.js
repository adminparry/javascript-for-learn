var gulp = require('gulp');

var less = require('gulp-less');

var px2rem = require('gulp-px2rem');

var path = require('path');


var PATH = {
	less:path.resolve(__dirname,'input/**/*.less'),
	outless:path.resolve(__dirname,'output'),
	input:path.resolve(__dirname,'input/**/*.*')
}

gulp.task('less',function(){

	var px2remOptions = {
	    replace: true
	};
	var postCssOptions = {
	    map: true  
	};
	gulp.src(PATH.less)
	.pipe(less())
	.pipe(px2rem(px2remOptions, postCssOptions))
	.pipe(gulp.dest(PATH.outless))
})

gulp.task('default',function(){
	gulp.watch(PATH.input, ['less']);
})

