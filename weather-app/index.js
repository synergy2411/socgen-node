const express = require("express");
const environment = require("./environment/environment");
const geocode = require("./utils/geocode");
const forecast = require("./utils/forecast");

const app = express();

app.use(express.static(__dirname+"/public"));

app.get("/", (req, res) => {
    res.sendFile(__dirname+"/public/index.html");
})

app.get("/address", (req, res) => {
    if(req.query && req.query.location){
        geocode.getGeocode(req.query.location, (err, {latitude, longitude, placeName}) => {
            if(err){
                return res.send({err});
            }
            forecast.getForecast(latitude, longitude, (err, {temperature, summary}) => {
                if(err) {
                    return res.send({err})
                }
                return res.send({placeName, temperature, summary});
            })
        })
        // return res.send({message : "SUCCESS"})
    }else{
        return res.send({message : "No location found"})
    }
})

app.listen(environment.PORT, () => {
    console.log("Server start at port : " + environment.PORT);
});