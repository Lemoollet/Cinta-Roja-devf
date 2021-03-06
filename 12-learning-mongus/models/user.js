const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const user = new Schema({
  userName: String,
  email: String,
  password: String,
  iamgen: {
    default: "",
    type: String,
  },
});

const User = mongoose.model("User", user);

module.exports = { User };
