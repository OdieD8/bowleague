var Ctrl = require("./team.server.controller");

module.exports = function (app) {
	
	app.route("/api/team")
		.post(Ctrl.addTeam)
		.get(Ctrl.getTeam);
		
};