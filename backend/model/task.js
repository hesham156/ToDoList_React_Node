const mongoose = require("mongoose");
const Tasks = mongoose.Schema({
  TaskName: {
    type: String,
    required: true,
  },
  TaskImportant: {
    type: Number,
    required: true,
  },
  TaskCreateIn: {
    type: Date,
    required: true,
  },
  TaskEndAt: {
    type: Date,
    required: true,
  },
  TaskGift: {
    type: String,
    required: true,
  },
});
module.exports = mongoose.model("Tasks", Tasks);
