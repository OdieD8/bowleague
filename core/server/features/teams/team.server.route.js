var Ctrl = require("./team.server.controller");

module.exports = function (app) {
	
	app.route("/api/team/:id")
		.get(Ctrl.getTeam);
		
	app.route("/api/team/:id")
		.put(Ctrl.updateMatch);

	app.route("/api/team/")
			.post(Ctrl.addTeam)
		
	app.route("/api/teams")
		.get(Ctrl.getTeams);
				
};