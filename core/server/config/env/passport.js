var JwtStrategy = require("passport-jwt").Strategy;

var User = require("../../features/users/user.server.model");
var config = require("./production");

module.exports = function(passport) {

	var opts = {};
	opts.secretOrKey = config.sessionSecret;
	passport.use(new JwtStrategy(opts, function(jwt_payload, done) {

		User.findOne({id: jwt_payload.id }, function(err, user) {

			if (err) {

				return done(err, false);
			}
			if (user) {

				done(null, user);
			}
			else {

				done(null, false);
			}
		});
	}));
};
