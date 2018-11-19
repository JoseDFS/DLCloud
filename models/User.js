<<<<<<< HEAD
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var passportLocalMongoose = require('passport-local-mongoose');

var UserSchema = new Schema({
    email: String,
    password: String,
    name: String
});

UserSchema.plugin(passportLocalMongoose);
=======
'use strict';
const mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    passportLocalMongoose = require('passport-local-mongoose');

let UserSchema = new Schema({
    username: String,
    password: String
});

UserSchema.plugin(passportLocalMongoose);

>>>>>>> ff39147161a3fb1ad70030446708ee63f949f798
module.exports = mongoose.models.user || mongoose.model('user', UserSchema);