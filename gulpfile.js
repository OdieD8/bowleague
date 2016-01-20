"use strict";

var gulp = require("gulp");
var gulNgConfig = require("gulp-ng-config");

var configureSetup = {
	createModule: false,
	constants: {
		database: process.env.database,
		sessionSecret: process.env.sessionSecret,
		port: process.env.PORT
	}
};

gulp.task("config", function() {

	gulp.src("config.json")
		.pipe(gulNgConfig("app", configureSetup))
		.pipe(gulp.dest("./core/client"));
});
