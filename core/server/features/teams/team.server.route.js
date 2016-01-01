var Ctrl = require("./team.server.controller");

module.exports = function (app) {
	
	app.route("/api/team/:id")
		.get(Ctrl.getTeam)
		.put(Ctrl.updateMatch);
		
	app.route("/api/team/:id")
		.delete(Ctrl.removeTeam);
				
	app.route("/api/team")
		.post(Ctrl.addTeam);
		
	app.route("/api/teams")
		.get(Ctrl.getTeams);
		
	// app.route("/api/teamPlayer/:id")
	// 	.put(Ctrl.updatePlayer);
				
};