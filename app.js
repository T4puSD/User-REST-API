const express = require("express");
const createuser = require("./routes/v1/CreateUser");
const getuser = require("./routes/v1/GetUser");
const deluser = require("./routes/v1/DeleteUser");
const updateuser = require("./routes/v1/UpdateUser");
const app = express();

//! middleware to the createuser router
app.use("/api/v1/create", createuser);
app.use("/api/v1/get/", getuser);
app.use("/api/v1/delete/", deluser);
app.use("/api/v1/update/", updateuser);

app.get("/", function(req, res) {
  res.send("Hello World :");
});

app.listen(3000);
