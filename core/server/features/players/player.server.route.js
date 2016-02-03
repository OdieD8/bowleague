var Ctrl = require("./player.server.controller");

module.exports = function (app) {
	
	app.route("/api/player/:id")
		.get(Ctrl.getPlayer)
		.put(Ctrl.updateGames)
		.delete(Ctrl.removePlayer);

	app.route("/api/player/")
		.post(Ctrl.addPlayer);
		
	app.route("/api/players/:id")
		.put(Ctrl.addAverage)
		.get(Ctrl.getPlayersByTeam)
		.delete(Ctrl.removePlayersByTeam);
		
	app.route("/api/players")
		.get(Ctrl.getPlayers);
		
	app.route("/api/playerHighs/:id")
		.put(Ctrl.addHighGame);
				
};