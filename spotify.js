require('dotenv').config()
var Spotify = require('node-spotify-api');
var keys = require('./keys.js');
var spotify = new Spotify(keys.spotify)

var getSpotify = function(a) {
  spotify.search({
    type: 'track',
    query: a,
  }).then(function(resp) {
    
    resp.tracks.items.forEach(function(item) {
      var artist = item.album.artists[0].name;
      var songName = item.name;
      var previewLink = item.preview_url;
      var album = item.album.name;
      console.log('Artist: ', artist);
      console.log('Song Title: ', songName);
      console.log('Preview Link: ', previewLink);
      console.log('Album: ', album)
    })

    // if no results, default to "the sign" by ace of base

  }).catch(function(err){
    console.log(err)
  })
}

module.exports = getSpotify