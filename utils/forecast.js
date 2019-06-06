const request = require('request')

const forecast = (lat, long, callback) => {
    const url = 'https://api.darksky.net/forecast/42b87a186eda54d210ae4afc241bdd1a/' + lat + ',' + long
    request({ url, json: true}, (error, { body }) => {
        if (error) {
            callback("Unable to connect to weather service", undefined)
        } else if (body.error) {
            callback("Unable to find location", undefined)
        } else {
            const currentTemp = body.currently.temperature
            const currentRainChance = body.currently.precipProbability
            const today = body.daily.data[0].summary
            callback(undefined, today + " It is currently " + currentTemp + " degrees out.  There is a " + currentRainChance + '% chance of rain.')
        }
    })
}

module.exports = forecast
