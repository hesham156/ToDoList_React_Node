var express = require("express");
const { routes } = require("../app");
var router = express.Router();
const User = require("../model/user");
const Task = require("../model/task");

const bcrypt = require("bcrypt");
router.post("/singup", function (req, res, next) {
  User.find({ userName: req.body.username })
    .then((inf) => {
      console.log(inf.length);
    })
    .catch((err) => {
      console.error(err);
    });

  bcrypt.hash(req.body.password, 10, (err, hash) => {
    if (err) {
      res.status(404).json({
        msg: "err",
      });
    } else {
      const user = new User({
        userName: req.body.username,
        Email: req.body.email,
        pass: hash,
        tasks: req.body.tasks,
      });
      user
        .save()
        .then((result) => {
          res.status(200).json({
            data: result,
          });
        })
        .catch((error) => {
          console.log(error);
        });
    }
  });
});
module.exports = router;
