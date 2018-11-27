
var mongoose = require("mongoose");
var passport = require("passport");
var User = require("../models/User");

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
    });
  });
};

// Go to login page
userController.login = function(req, res) {
  res.render('login');
};

// Post login
userController.doLogin = function(req, res) {
  passport.authenticate('local')(req, res, function () {
    res.redirect('/');
  });
};

// logout
userController.logout = function(req, res) {
  req.logout();
  res.redirect('/');
};


//go to upload page
userController.upLoad = function(req,res){
  res.render('upload', { user : req.user });
}

//go to superadmin
userController.adminSuper = function (req,res){
  res.render('super',{user:req.user})
}


module.exports = userController;