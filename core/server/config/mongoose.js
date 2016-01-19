// MONGOOSE CONFIGURATION FILE

var config = require('./env/production'),
    mongoose = require('mongoose');

module.exports = function () {
    // var db = mongoose.connect(config.db);
    var db = mongoose.connect(database);
    mongoose.connection.once("open", function() {
        console.log("connected to MongoDB at", database);
    })
    return db;
};
