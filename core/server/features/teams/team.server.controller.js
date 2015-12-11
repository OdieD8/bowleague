var Team = require("./team.server.model");

// /api/team/:id (GET)
exports.getTeam = function (req, res, next) {
	
	Team.findById(req.params.id).exec(function (err, results) {
		
		if (err) res.status(500).send(err);
		else res.json(results);
	});
};

// /api/teams (GET)
exports.getTeams = function (req, res, next) {
	
	Team.find({}, 'name matches', function (err, results) {
		
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

// /api/team/:id (PUT)
exports.updateMatch = function (req, res, next) {
	
	Team.findByIdAndUpdate(req.params.id, {$push: {'matches':req.body}}, function (err, results) {
		
		if (err) res.status(500).send(err);
		else res.json(results);
	});
};