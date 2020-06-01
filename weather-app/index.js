const express = require("express");
const environment = require("./environment/environment");
const app = express();

app.use(express.static(__dirname+"/public"));

app.get("/", (req, res) => {
    res.sendFile(__dirname+"/public/index.html");
})

app.get("/address", (req, res) => {
    if(req.query && req.query.location){
        console.log("ADDRESS : ", req.query.location);
        return res.send({message : "SUCCESS"})
    }else{
        return res.send({message : "No location found"})
    }
})

app.listen(environment.PORT, () => {
    console.log("Server start at port : " + environment.PORT);
});