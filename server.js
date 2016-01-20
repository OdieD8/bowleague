var gulp = require("gulp");
var cors = require('cors');
require("./gulpfile");
gulp.start("config");



//Heroku sets the value of process.env.NODE_ENV
process.env.NODE_ENV = process.env.NODE_ENV || 'production';


//Heroku sets the port, but we also need a port for development
var port = process.env.PORT || 8500;



// Including the configured express and mongoose objects
var mongoose = require('./core/server/config/mongoose'),
    express = require('./core/server/config/express');


// Let's run this!
var db = mongoose(),
    app = express();

app.use(cors());

// Let's listen for incoming calls!
app.listen(port, function () {
    console.log("listening on port:" + port);
});