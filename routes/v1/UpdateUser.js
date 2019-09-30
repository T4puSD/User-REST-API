const router = require("express").Router();
const mongoose = require("mongoose");
const Users = require("../../DataBaseModel/Users");
require("dotenv").config();

router.get("/test", (req, res) => {
  res.send("this is a test response for this api");
});
router.post("/:id", (req, res) => {
  //   res.send("id passed: " + req.params.id);
  //   console.log(req.headers.firstname);
  let updatedInfo = new Users.userobj({
    firstName: req.headers.firstname,
    lastName: req.headers.lastname,
    age: req.headers.age,
    gender: req.headers.gender,
    tandcs: req.headers.tandcs,
    email: req.headers.email
  });

  //   res.json(updatedInfo);

  const conn = mongoose.createConnection(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
  const users = mongoose.model("Users");

  users.findOne({ id: req.params.id }, (err, user) => {
    if (user) {
      user.user = updatedInfo;
      user.save();
      res.json({
        status: {
          code: 200,
          msg: "Succefully Updated!"
        }
      });
    } else {
      res.json({
        status: {
          code: 404,
          msg: "User not found!"
        }
      });
    }
  });
  //   res.send("this is the id that is provided: " + req.params.id);
});
module.exports = router;
