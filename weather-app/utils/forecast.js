const axios = require("axios").default;
const environment = require("../environment/environment");

const getForecast = (lat, lng, cb) => {
    axios.get(`https://api.darksky.net/forecast/${environment.darkSkyAPIKey}/${lat},${lng}`)
        .then(response => {
            const temperature = response.data.currently.temperature;
            const summary = response.data.daily.summary;
            cb(null, {temperature, summary});
        })
        .catch(err => cb(err));
}

module.exports = { getForecast };