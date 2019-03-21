const request = require('request')

const url =
  'https://api.darksky.net/forecast/5b18f1ade99122819bf60647095d48fd/37.8267,-122.4233'

request({ url, json: true }, (err, res) => {
  // console.log(res.body.currently)
  const currentTemp = res.body.currently.temperature
  const chanceOfRain = res.body.currently.precipProbability
  const firstDaily = res.body.daily.data[0].summary
  const weatherString = `${firstDaily} It is currently ${currentTemp} degrees out. There is a ${chanceOfRain}% chance of rain.`

  console.log(weatherString)
})

const mapBox =
  'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoibXlyb25zZGV2IiwiYSI6ImNqdGkyeHF5bjB2dWo0NHBqeWF5dWg2ZnQifQ.Kyd0lcsSVNWdRwbrfyEtUA&limit=1'

request({ url: mapBox, json: true }, (error, response) => {
  const longitude = response.body.features[0].center[0]
  const latitude = response.body.features[0].center[1]

  console.log(`${latitude} and ${longitude}`)
})
