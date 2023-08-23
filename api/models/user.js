const mongoose = require("mongoose");
const Movie = require('./movie')

const UserSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  name: { type: String, required: true },
  subscriptions: { type: Array, required: false },
  genres: { type: Array, required: false },
  watchLater: []
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
