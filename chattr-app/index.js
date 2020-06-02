const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const io = require("socket.io")(server);
const environment = require("./environment/environment");

app.use(express.static(__dirname+"/public"));

io.on("connection", () => {
    console.log("Connected...")
});

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

server.listen(environment.PORT, () => {
  console.log("Socket server started at Port : " + environment.PORT);
});


// npm install nodemon -g