const request = require('request')

const geocode = (address, callback) => {
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
    address
  )}.json?access_token=pk.eyJ1IjoibXlyb25zZGV2IiwiYSI6ImNqdGkyeHF5bjB2dWo0NHBqeWF5dWg2ZnQifQ.Kyd0lcsSVNWdRwbrfyEtUA&limit=1`

  request({ url, json: true }, (error, { body }) => {
    const { center, place_name } = body.features[0]
    if (error) {
      callback('Unable to connect to location services!', undefined)
    } else if (body.features.length === 0) {
      callback('No match found. Try another search.', undefined)
    } else {
      callback(undefined, {
        latitude: center[1],
        longitude: center[0],
        location: place_name
      })
    }
  })
}

module.exports = geocode
