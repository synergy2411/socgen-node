const axios = require("axios").default;
const environment = require("../environment/environment");

const getGeocode = (address, cb) => {

    axios.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/${address}.json?access_token=${environment.mapboxAPIKey}`)
        .then(response => {

            const latitude = response.data.features[0].geometry.coordinates[0]
            const longitude = response.data.features[0].geometry.coordinates[1]
            const placeName = response.data.features[0].place_name;
            cb(null, {latitude, longitude, placeName});
        }).catch(err => cb(err));
}

module.exports = { getGeocode };
