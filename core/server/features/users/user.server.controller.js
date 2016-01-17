var User = require("./user.server.model");
var mongoose = require("mongoose");
var passport = require("passport");
require("../../config/env/passport")(passport);
var config = require("../../config/env/development");
var jwt = require("jwt-simple");

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

exports.authUser = function (req, res, next) {

	User.findOne({

		name: req.body.name
	}, function(err, user) {

		if (err) throw err;
		if (!user) {
			res.send({ success: false, msg: "Authentication failed, user not found" });
		}
		else {
			user.comparePassword(req.body.password, function(err, isMatch) {

				if(isMatch && !err) {
					var token = jwt.encode(user, config.sessionSecret);
					res.json({ success: true, token: "JWT " + token })
				}
				else {
					res.send({ success: false, msg: "Authentication failed, wrong password" });
				}
			});
		}
	});
};

exports.getMember = function (req, res, next) {

	var token = getToken(req.headers);
	if(token) {
		var decoded = jwt.decode(token, config.sessionSecret);

		User.findOne({
			name: decoded.name
		}, function(err, user) {

			if (err) throw err;
			if (!user) {
				return res.status(403).send({ success: false, msg: "Authentication failed, user not found" });
			}
			else {
				res.json({ success: true, msg: "Successfully logged in " + user.name });
			}
		})
	}
	else {
		return res.status(403).send({ success: false, msg: "No token provided" });
	}
};

var getToken = function(headers) {

	if(headers && headers.authorization) {
		var parted = headers.authorization.split(" ");
		if(parted.length === 2) {
			return parted[1];
		}
		else {
			return null;
		}
	}
	else {
		return null;
	}
};
