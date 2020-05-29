const express = require("express");
const environment = require("./environment/environment");

const app = express();

app.get("/", (req, res) => {
    res.sendFile(__dirname+"/public/index.html");
})

app.listen(environment.PORT, () => {
    console.log("Server start at port : " + environment.PORT);
});