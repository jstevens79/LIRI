require('dotenv').config()
var Spotify = require('node-spotify-api');
var keys = require('./keys.js');
var spotify = new Spotify(keys.spotify)

var getSpotify = function(a) {
  spotify.search({
    type: 'track',
    query: a,
  }).then(function(resp) {
    // resp.tracks.items.forEach(function(item) {
    //   console.log(item)
    // })

    // if no results, default to "the sign" by ace of base

    var artist = resp.tracks.items[0].album.artists[0].name;
    var songName = resp.tracks.items[0].name;
    var previewLink = resp.tracks.items[0].preview_url;
    var album = resp.tracks.items[0].album.name;

    console.log(album)
    // name
    // preview_url
  }).catch(function(err){
    console.log(err)
  })
}

module.exports = getSpotify