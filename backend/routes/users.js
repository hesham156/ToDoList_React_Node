var express = require("express");
const { routes } = require("../app");
var router = express.Router();
const User = require("../model/user");
const Task = require("../model/task");

const bcrypt = require("bcrypt");

/* GET users listing. */

router.delete("/addTask", (req, res, next) => {
  User.find({ userName: req.body.username })
    .then((result) => {
      const task = new Task({
        TaskName: req.body.taskname,
        TaskImportant: req.body.taskimportant,
        TaskCreateIn: Date.now(),
        TaskEndAt: Date.now(),
        TaskGift: req.body.taskgift,
      });
      task.save();
      result[0].tasks.push(task);
      result[0].save();
      res.status(200).json({
        data: result,
      });
    })
    .catch((error) => {
      console.log(error);
    });
});
module.exports = router;
