var mongoose = require("mongoose"),
	Schema = mongoose.Schema;
	
var Player = new Schema({
	name: { type: String, lowercase: true, required: true },
	team: { type: String, lowercase: true, required: true },
	games: [{
		gm1: { type: Number, required: true },
		gm2: { type: Number, required: true },
		gm3: { type: Number, required: true },
		Series: { type: Number, required: true }	
	}],
	average: { type: Number },
	date: { type: Date, default: new Date() },
	_id: false,
	id: false
});

module.exports = mongoose.model("Player", Player);