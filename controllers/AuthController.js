'use strict';
var mongoose = require("mongoose");
var passport = require("passport");
var User = require("../models/User");

var authController = {};

// Restrict access to root page
authController.home = function (req, res) {
  res.render('index', {
    user: req.user,
    title: 'DLCloud'
  });
};
// Post registration
authController.doRegister = function (req, res) {
  User.register(new User({
    username: req.body.username,
    name: req.body.name
  }), req.body.password, function (err, user) {
    if (err) {
      return res.render('/', {
        user: req.body.username
      });
    }

    passport.authenticate('local')(req, res, function () {
      res.redirect('/profile');
    });
  });
};

// Post login
authController.doLogin = function (req, res) {
  passport.authenticate('local', {
    failureRedirect: '/',
    failureFlash: true
  })(req, res, function () {
    res.redirect('/profile');
  });
};

// logout
authController.logout = function (req, res) {
  req.logout();
  res.clearCookie('sessionid', {path: '/'});
  res.redirect('/');
};

module.exports = authController;