<<<<<<< HEAD
=======
'use strict';
>>>>>>> ff39147161a3fb1ad70030446708ee63f949f798
var mongoose = require("mongoose");
var passport = require("passport");
var User = require("../models/User");

<<<<<<< HEAD
var userController = {};

// Restrict access to root page
userController.home = function(req, res) {
  res.render('index', { user : req.user });
};

// Go to registration page
userController.register = function(req, res) {
  res.render('register');
};

// Post registration
userController.doRegister = function(req, res) {
  User.register(new User({ email : req.body.email, username: req.body.username }), req.body.password, function(err, user) {
    if (err) {
      console.log(err);
      return res.render('register', { user : user });
      
    }
    passport.authenticate('local')(req, res, function () {
      console.log('iniciada sesion...supuestamente');
      res.redirect('/');
=======
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
>>>>>>> ff39147161a3fb1ad70030446708ee63f949f798
    });
  });
};

<<<<<<< HEAD
// Go to login page
userController.login = function(req, res) {
  res.render('login');
};

// Post login
userController.doLogin = function(req, res) {
  passport.authenticate('local')(req, res, function () {
    res.redirect('/');
=======
// Post login
authController.doLogin = function (req, res) {
  passport.authenticate('local', {
    failureRedirect: '/',
    failureFlash: true
  })(req, res, function () {
    res.redirect('/profile');
>>>>>>> ff39147161a3fb1ad70030446708ee63f949f798
  });
};

// logout
<<<<<<< HEAD
userController.logout = function(req, res) {
  req.logout();
  res.redirect('/');
};

module.exports = userController;
=======
authController.logout = function (req, res) {
  req.logout();
  res.clearCookie('sessionid', {path: '/'});
  res.redirect('/');
};

module.exports = authController;
>>>>>>> ff39147161a3fb1ad70030446708ee63f949f798
