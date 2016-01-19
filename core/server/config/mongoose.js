// MONGOOSE CONFIGURATION FILE
/*
var config = require('./env/production'), */
var mongoose = require('mongoose');

module.exports = function () {
    // var db = mongoose.connect(config.db);
    var db = mongoose.connect(process.env.database);
    mongoose.connection.once("open", function() {
        console.log("connected to MongoDB at", process.env.database);
    })
    return db;
};
