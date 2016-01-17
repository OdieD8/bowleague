var Ctrl = require("./user.server.controller");
var passport = require("passport");
require("../../config/env/passport")(passport);
var jwt = require("jwt-simple");

module.exports = function(app) {

	app.route("/api/signup")
		.post(Ctrl.postUser);

	app.route("/api/authenticate")
		.post(Ctrl.authUser);

	app.route("/api/memberinfo", passport.authenticate("jwt", { session: false }))
		.get(Ctrl.getMember);
};
