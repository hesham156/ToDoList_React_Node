const mongoose = require("mongoose");
const Users = mongoose.Schema({
  userName: {
    type: String,
    required: true,
  },
  Email: {
    type: String,
    required: true,
  },
  pass: {
    type: String,
  },
  tasks: [],
});
module.exports = mongoose.model("User", Users);
