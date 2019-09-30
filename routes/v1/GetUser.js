const router = require("express").Router();
const mongoose = require("mongoose");
require("dotenv").config();

router.get("/test", (req, res) => {
  res.send("this is a test response for this api");
});
router.post("/:id", (req, res) => {
  const conn = mongoose.createConnection(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
  const users = mongoose.model("Users");
  users.findOne({ id: req.params.id }, (error, user) => {
    if (user) {
      //   console.log(user.user);
      res.json(user.user);
      //   res.statusCode = 200;
      //   res.setHeader("data", JSON.stringify(user.user));
    } else {
      console.log("error fetching data form mongodb");
      res.json({
        error: {
          code: 404,
          msg: "User not found!"
        }
      });
    }
    // res.send();
  });
});
module.exports = router;
