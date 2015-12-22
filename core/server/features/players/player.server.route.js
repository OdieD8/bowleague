var Ctrl = require("./team.server.controller");

module.exports = function (app) {
	
	app.route("/api/player/:id")
		.get(Ctrl.getPlayer);
		
	app.route("/api/player/:id")
		.put(Ctrl.updateGames);

	app.route("/api/player/")
		.post(Ctrl.adPlayer)
		
	app.route("/api/players")
		.get(Ctrl.getPlayers);
				
};