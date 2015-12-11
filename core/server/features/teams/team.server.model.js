var mongoose = require("mongoose"),
	Schema = mongoose.Schema;
	
var Team = new Schema({
	name: { type: String, lowercase: true },
	players: [{ type: Schema.Types.ObjectId, ref: 'Player', required: true }],
	matches: [{
		ptsWon: { type: Number, required: true },
		ptsLost: { type: Number, required: true },
		totalPins: { type: Number},
		date: { type: Date, default: new Date() },
		_id: false,
		id: false
	}]
});

module.exports = mongoose.model("Team", Team);