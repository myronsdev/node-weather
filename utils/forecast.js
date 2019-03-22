const request = require('request')

const forecast = (latitude, longitude, callback) => {
  const url = `https://api.darksky.net/forecast/5b18f1ade99122819bf60647095d48fd/${latitude},${longitude}`

  request({ url, json: true }, (error, response) => {
    if (error) {
      callback('Unable to connect to server', undefined)
    } else if (response.body.error) {
      callback('No match found. Please try other cordinates', undefined)
    } else {
      const { temperature, precipProbability } = response.body.currently
      const firstDaily = response.body.daily.data[0].summary
      const weatherString = `${firstDaily} It is currently ${temperature} degrees out. There is a ${precipProbability}% chance of rain.`
      callback(undefined, weatherString)
    }
  })
}

module.exports = forecast
