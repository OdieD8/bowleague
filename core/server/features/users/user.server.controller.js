var User = require("./user.server.model");
var mongoose = require("mongoose");
var passport = require("passport");
require("../../config/env/passport")(passport);

exports.postUser = function (req, res, next) {

	if(!req.body.name || !req.body.password) {

		res.json({ success: false, msg: "Please enter username and password" });
	}
	else {

		var newUser = new User({

			name: req.body.name,
			password: req.body.password
		});

		newUser.save(function(err) {

			if (err) {

				return res.json({ success: false, msg: "User already exists" });
			}

			res.json({ success: true, msg: "New user created" });
		});
	}
};
