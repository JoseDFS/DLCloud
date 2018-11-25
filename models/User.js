var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var passportLocalMongoose = require('passport-local-mongoose');

var UserSchema = new Schema({
    email: String,
    password: String,
    name: String
});

UserSchema.plugin(passportLocalMongoose);
module.exports = mongoose.models.user || mongoose.model('user', UserSchema);