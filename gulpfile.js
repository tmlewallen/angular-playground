var gulp = require('gulp');

var concat = require('gulp-concat');
var uglify = require('gulp-uglify');

var vendor_scripts = 
	['./node_modules/angular/angular.js', 
	 './node_modules/angular-ui-bootstrap/dist/ui-bootstrap.js',
	 './node_modules/angular-ui-bootstrap/dist/ui-bootstrap-tpls.js'];

var vendor_styles =
	['./node_modules/angular-ui-bootstrap/dist/ui-bootstrap-csp.css'];

gulp.task('scripts', function(){
	return gulp.src(vendor_scripts)
		.pipe(concat('vendor.min.js'))
		.pipe(uglify())
		.pipe(gulp.dest('./public/js/vendor'));
});

gulp.task('styles', function(){
	return gulp.src(vendor_styles)
		.pipe(concat('vendor.css'))
		.pipe(gulp.dest('./public/css/vendor'));
});

gulp.task('default', ['scripts', 'styles']);