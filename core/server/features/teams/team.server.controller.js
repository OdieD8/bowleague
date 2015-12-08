var Team = require("./team.server.model");

// /api/team (GET)
exports.getTeam = function (req, res, next) {
	
	Team.find({}, function (err, results) {
		
		if (err) res.status(500).send(err);
		else res.json(results);
	});
};

// /api/team (POST)
exports.addTeam = function (req, res, next) {
	
	var team = new Team(req.body);
	team.save(function (err) {
		
		if (err) res.send(err);
		else res.json(team);
	});
};