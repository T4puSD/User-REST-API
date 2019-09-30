const mongoose = require("mongoose");
const dotenv = require("dotenv").config();

mongoose.connect(
  process.env.DB_URL,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  },
  error => {
    if (error) {
      console.log("Error occured connecting to mongodb" + error);
    } else {
      console.log("Connection to mongodb successfull");
    }
  }
);

const Schema = mongoose.Schema;
// const ObjectId = Schema.ObjectId;

const userObject = new Schema({
  firstName: { type: String, max: 15, min: 3, required: true },
  lastName: { type: String, max: 15, min: 3, required: true },
  age: { type: Number, max: 100, min: 16 },
  gender: { type: String, max: 6, min: 4 },
  tandcs: { type: Boolean, default: false },
  email: { type: String, max: 30, min: 8, required: true, unique: true }
});

const Users = new Schema({
  id: 0,
  user: userObject
});

// module.exports = mongoose.model("Users", Users);
module.exports = {
  usermodule: mongoose.model("Users", Users),
  userobj: mongoose.model("userObject", userObject)
};
