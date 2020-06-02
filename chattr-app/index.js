const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const io = require("socket.io")(server);
const mongo = require("./db/mongo");
const environment = require("./environment/environment");
let username = "";
let messages = [];

mongo.connect();
app.use(express.static(__dirname+"/public"));

io.on("connection", (client) => {
    console.log("Connected...");
    client.emit("acknowledge", {message : "Connected now."});

    client.on("thanks", (data) => {
        console.log("Client says : " + data.message);
    })

    client.on("fromClient", ({message, username}) => {
        username = username;
        messages.push(message);
        console.log(username  + " : " + message);
        client.emit("fromServer", {message, username : "Me"});
        client.broadcast.emit("fromServer", {message, username});
    })

    client.on("disconnect", reason => {
        // save all records in database
        console.log("Client disconnected", reason);

        mongo.insertDocument({username, messages});
    })
});

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

server.listen(environment.PORT, () => {
  console.log("Socket server started at Port : " + environment.PORT);
});


// npm install nodemon -g