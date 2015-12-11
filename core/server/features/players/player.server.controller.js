var Team = require("./player.server.model");

// /api/player/:id (GET)
exports.getPlayer = function (req, res, next) {
	
	Player.findById(req.params.id).exec(function (err, results) {
		
		if (err) res.status(500).send(err);
		else res.json(results);
	});
};

// /api/players (GET)
exports.getPlayers = function (req, res, next) {
	
	Player.find({}, 'name', function (err, results) {
		
		if (err) res.status(500).send(err);
		else res.json(results);
	});
};

// /api/player (POST)
exports.addPlayer = function (req, res, next) {
	
	var player = new player(req.body);
	player.save(function (err) {
		
		if (err) res.send(err);
		else res.json(team);
	});
};

// /api/player/:id (PUT)
exports.updateGames = function (req, res, next) {
	
	Player.findByIdAndUpdate(req.params.id, {$push: {'name':req.body}}, function (err, results) {
		
		if (err) res.status(500).send(err);
		else res.json(results);
	});
};