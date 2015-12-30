var Ctrl = require("./player.server.controller");

module.exports = function (app) {
	
	app.route("/api/player/:id")
		.get(Ctrl.getPlayer)
		.put(Ctrl.updateGames);
		
	app.route("/api/player/:id")
		.put(Ctrl.updateGames);

	app.route("/api/player/")
		.post(Ctrl.addPlayer);
		
	app.route("/api/players")
		.get(Ctrl.getPlayers);
				
};