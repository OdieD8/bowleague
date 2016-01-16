// EXPRESS CONFIGURATION FILE

// node libraries and configuration file
var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var session = require('express-session');
var morgan = require('morgan');
var port = process.env.PORT || 8500;
var config = require('./config');
var passport = require("passport");
var User = require("../features/users/user.server.model");
var jwt = require("jwt-simple");


module.exports = function () {

    var app = express();

    // MIDDLEWARE NEEDED BOTH FOR DEV AND PRODUCTION

    // fixes cross-origin issues
    app.use(cors());

    // creates and populates the req.body object
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded(
        {
            extended: true
        }));

    // makes sure we can use PUT and PATCH
    app.use(methodOverride());

    // MIDDLEWARE THAT RUNS ONLY IN DEVELOPMENT

    // a logger so we can see activity in the console
    if (process.env.NODE_ENV === 'development') {
        app.use(morgan('dev'));
    }

	app.use(passport.initialize());


    // HERE WE CONFIGURE THE ROUTES
    require('../features/teams/team.server.route')(app);
    require('../features/players/player.server.route')(app);
	require('../features/users/user.server.route')(app);

    // THIS WILL BE THE ROOT OF THE ANGULAR APP
    // the route is relative to the root of the project
    app.use(express.static('./core/client'));


    return app;
};
