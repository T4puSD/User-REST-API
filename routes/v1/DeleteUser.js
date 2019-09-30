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
  users.deleteOne({ id: req.params.id }, (err, msg) => {
    if (!err) {
      console.log("removed");
      //   console.log(msg);
      if (msg.deletedCount === 1) {
        res.json({
          status: {
            code: 200,
            msg: "User Deleted!"
          }
        });
      } else {
        console.log("error deleting user");
        res.json({
          status: {
            code: 404,
            msg: "No user found!"
          }
        });
      }
    }
  });
  //   res.send("this is the id that is provided: " + req.params.id);
});
module.exports = router;
