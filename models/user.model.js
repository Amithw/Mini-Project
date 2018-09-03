const mongoose = require('mongoose');

const user = mongoose.Schema({
   _id: mongoose.Schema.Types.ObjectId,
   email: {type: String, required: true},
   password: {type: String, required: true},
   username: String,
   googleId: String,
   thumbnail: String
});

module.exports = mongoose.model('User', user);