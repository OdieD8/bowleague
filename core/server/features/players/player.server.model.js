var mongoose = require("mongoose"),
	Schema = mongoose.Schema;
	
var Player = new Schema({
	name: { type: String, required: true },
	team: { type: Schema.Types.ObjectId, ref: 'Team'},
	games: [{
		gm1: { type: Number },
		gm2: { type: Number },
		gm3: { type: Number },
		series: { type: Number },
		_id: false,
		id: false	
	}],
	average: { type: Number },
	highGame: { type: Number },
	highSeries: { type: Number },
	date: { type: Date, default: new Date() }
});

module.exports = mongoose.model("Player", Player);