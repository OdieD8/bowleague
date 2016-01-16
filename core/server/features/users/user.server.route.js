var Ctrl = require("./user.server.controller");

module.exports = function(app) {

	app.route("/api/signup")
		.post(Ctrl.postUser);
};
