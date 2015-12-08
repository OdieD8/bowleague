var mongoose = require("mongoose"),
	Schema = mongoose.Schema;
	
var Team = new Schema({
	name: { type: String, lowercase: true },
	players: [{type: String}],
	matches: [{
		ptsWon: { type: Number, required: true },
		ptsLost: { type: Number, required: true },
		totalPins: { type: Number},
		date: { type: Date, default: new Date() }
	}]
});

module.exports = mongoose.model("Team", Team);