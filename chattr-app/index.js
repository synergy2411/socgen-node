const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const io = require("socket.io")(server);
const environment = require("./environment/environment");

app.use(express.static(__dirname+"/public"));

io.on("connection", (client) => {
    console.log("Connected...");
    client.emit("acknowledge", {message : "Connected now."});

    client.on("thanks", (data) => {
        console.log("Client says : " + data.message);
    })

    client.on("fromClient", ({message}) => {
        console.log("Client says : " + message);
        client.emit("fromServer", {message})
    })
});

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

server.listen(environment.PORT, () => {
  console.log("Socket server started at Port : " + environment.PORT);
});


// npm install nodemon -g