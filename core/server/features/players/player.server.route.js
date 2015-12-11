var Ctrl = require("./team.server.controller");

module.exports = function (app) {
	
	app.route("/api/player/:id")
		.get(Ctrl.getplayer);
		
	app.route("/api/player/:id")
		.put(Ctrl.updateGames);

	app.route("/api/player/")
		.post(Ctrl.addplayer)
		
	app.route("/api/players")
		.get(Ctrl.getplayers);
				
};