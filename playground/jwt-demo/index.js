const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const ensureToken = require("./middleware/ensureToken");
const jwt = require("jsonwebtoken");
const privateKey = "MY_SECRET_KEY";

app.use(bodyParser.json());
// Open API
app.get("/api", (req, res) => {});

// Can be accessed when the user is authorized
app.get("/protected", ensureToken, (req, res) => {
  try {
    const username = jwt.verify(req.token, privateKey);
    console.log("USERNAME : ", username);
    return res.send({ message: "User is Authorized" });
  } catch (err) {
    return res.send({ err });
  }
});

// user login and supply the token
app.post("/login", (req, res) => {
  if (req.body && req.body.username) {
    const token = jwt.sign(req.body.username, privateKey);
    return res.send({ token });
  } else {
    return res.send({ message: "User name not found" });
  }
});

app.listen(9090, () => {
  console.log("Server started at Port 9090");
});
