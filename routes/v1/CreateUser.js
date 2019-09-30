const router = require("express").Router();
const uuidv4 = require("uuid/v4");
const Users = require("../../DataBaseModel/Users");

router.get("/test", (req, res) => {
  console.log("this is a test response");
  res.send("this is a test response");
});

router.post("/", (req, res) => {
  // console.log(req.headers.firstname);
  console.log("router router");

  let userObj = new Users.userobj({
    firstName: req.headers.firstname,
    lastName: req.headers.lastname,
    age: req.headers.age,
    gender: req.headers.gender,
    tandcs: req.headers.tandcs,
    email: req.headers.email
  });

  let singleUser = new Users.usermodule({
    id: uuidv4(),
    user: userObj
  });

  try {
    let saveUser = singleUser.save((err, document) => {
      if (!err) {
        // console.log(document);
        res.json({
          status: {
            code: 200,
            msg: "User added",
            uid: document.id
          }
        });
      } else {
        console.log("elseinerrCreateUser" + err);
        res.json({
          status: {
            code: 404,
            msg: "Unable to add user!"
          }
        });
      }
    });
    // console.log(saveUser);
  } catch {
    console.log("Error saving information to mongodb");
    res.json({
      status: {
        code: 404,
        msg: "Unable to add user!"
      }
    });
  }
});

module.exports = router;
