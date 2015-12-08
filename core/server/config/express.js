// EXPRESS CONFIGURATION FILE

// node libraries and configuration file
var express = require('express'),
    cors = require('cors'),
    bodyParser = require('body-parser'),
    methodOverride = require('method-override'),
    session = require('express-session'),
    morgan = require('morgan'),
    config = require('./config'),
    mongojs = require('mongojs');


module.exports = function () {

    var app = express();

    var db = mongojs('library');
    var Book = db.collection('books');


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

    // cookies and session
    app.use(session({
        saveUninitialized: true,
        resave: true,
        secret: config.sessionSecret
    }));


    // MIDDLEWARE THAT RUNS ONLY IN DEVELOPMENT

    // a logger so we can see activity in the console
    if (process.env.NODE_ENV === 'development') {
        app.use(morgan('dev'));
    }


    // HERE WE CONFIGURE THE ROUTES
    require('../features/friends/friend.server.routes')(app);

    // quick experiment with mongojs
    app.post('/api/books', function (req, res) {

        Book.insert(req.body, function (err, result) {

            if (err) res.send(err);
            else res.json(result);
        });
    });
    
    app.get('/api/books', function (req, res) {
        
        Book.find({}, function (err, result) {
            
            if (err) res.send(err);
            else res.json(result);
        });
    });


    // THIS WILL BE THE ROOT OF THE ANGULAR APP
    // the route is relative to the root of the project
    app.use(express.static('./core/client'));


    return app;
};