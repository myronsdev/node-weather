const request = require('request')

const url =
  'https://api.darksky.net/forecast/5b18f1ade99122819bf60647095d48fd/37.8267,-122.4233'

request({ url, json: true }, (err, res) => {
  // console.log(res.body.currently)
  const currentTemp = res.body.currently.temperature
  const chanceOfrain = res.body.currently.precipProbability
  const weatherString = `It is currently ${currentTemp} degrees out. There is a ${chanceOfrain}% chance of rain.`

  console.log(weatherString)
})
