// EXPRESS CONFIGURATION FILE

// node libraries and configuration file
var express = require('express'),
    cors = require('cors'),
    bodyParser = require('body-parser'),
    methodOverride = require('method-override'),
    session = require('express-session'),
    morgan = require('morgan');
    // config = require('./config'),
    // passport = require("passport"),
    // flash = require("connect-flash"),
    // cookieParser = require("cookie-parser");


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
    // app.use(cookieParser());
    
    // app.set("view engine", "ejs");

    // makes sure we can use PUT and PATCH
    app.use(methodOverride());

    // cookies and session
    // app.use(session({
    //     saveUninitialized: true,
    //     resave: true,
    //     secret: config.sessionSecret
    // }));
    // app.use(passport.initialize());
    // app.use(passport.session());
    // app.use(flash());


    // MIDDLEWARE THAT RUNS ONLY IN DEVELOPMENT

    // a logger so we can see activity in the console
    if (process.env.NODE_ENV === 'development') {
        app.use(morgan('dev'));
    }


    // HERE WE CONFIGURE THE ROUTES
    require('../features/teams/team.server.route')(app);
    // require("../features/users/user.server.route")(app, passport);

    // THIS WILL BE THE ROOT OF THE ANGULAR APP
    // the route is relative to the root of the project
    app.use(express.static('./core/client'));


    return app;
};