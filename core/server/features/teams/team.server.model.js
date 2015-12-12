var mongoose = require("mongoose"),
	Schema = mongoose.Schema;
	
var Team = new Schema({
	name: { type: String, uppercase: true },
	players: [{type: String}],
	matches: [{
		ptsWon: { type: Number },
		ptsLost: { type: Number },
		totalPins: { type: Number},
		date: { type: Date, default: new Date() },
		_id: false,
		id: false
	}]
});

module.exports = mongoose.model("Team", Team);