const request = require('request')

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + address + '.json?access_token=pk.eyJ1IjoiYmt1bm5la2UiLCJhIjoiY2p2NW5zcnNwMjdoNzRlbW5zbmtnZHdjNSJ9.pFRPxeiwHHBhZTGuPqbGPg&limit=1'

    request({ url, json: true}, (error, {body}) => {
        if (error) {
            console.log("Unable to connect to location services")
        } else if (body.features.length === 0) {
            console.log("Location not found")
        } else {
            callback(undefined, {
            longitude: body.features[0].center[0],
            latitude: body.features[0].center[1],
            location: body.features[0].place_name
            })
        }
    })
}

module.exports = geocode

