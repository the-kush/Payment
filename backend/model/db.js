const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://kushsinghdsc:<db_password>@cluster0.8aipz.mongodb.net/")

const userSchema = new mongoose.Schema({
    username: String,
    password: String,
    firstName: String,
    lastName: String,

});

const User = mongoose.model('User', userSchema);

module.exports = {
    User
};