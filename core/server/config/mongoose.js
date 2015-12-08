// MONGOOSE CONFIGURATION FILE

var config = require('./config'),
    mongoose = require('mongoose');

module.exports = function () {
    var db = mongoose.connect(config.db);
    mongoose.connection.once("open", function() {
        console.log("connected to MongoDB at", config.db);
    })
    return db;
};