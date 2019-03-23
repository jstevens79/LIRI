require('dotenv').config()
var Spotify = require('node-spotify-api');
var keys = require('./keys.js');
var spotify = new Spotify(keys.spotify)

var getSpotify = function(a) {
  spotify.search({
    type: 'track',
    query: a,
  }, function(err, data) {
    if (err) {
      return console.log('Error occurred: ', err);
    }

    console.log(data);

    // name
    // preview_url
  })
}

module.exports = getSpotify