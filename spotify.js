require('dotenv').config();
var Spotify = require('node-spotify-api');
var keys = require('./keys.js');
var spotify = new Spotify(keys.spotify)

var getSpotify = function(a, def) {

  if (!def) {
    console.log('\nSearching for song...\n');
  }

  spotify.search({
    type: 'track',
    query: a,
  }).then(function(resp) {

    if (resp.tracks.items.length) {
      var songList = resp.tracks.items;

      if (def) {
        songList = resp.tracks.items.filter(item => item.album.artists[0].name === 'Ace of Base');
        songList = songList.filter(song => song.name === 'The Sign');
      }
      
      songList.forEach(function(item) {
        var artist = item.album.artists[0].name;
        var songName = item.name;
        var previewLink = item.preview_url;
        var album = item.album.name;
        console.log('Artist: ', artist);
        console.log('Song Title: ', songName);
        console.log('Preview Link: ', previewLink);
        console.log('Album: ', album);
        console.log('\n-----------------------\n');
      })

      
    } else {
      // if no results, default to "the sign" by ace of base
      console.log('\nNo results found. How about a classic song?\n');
      getSpotify("the sign", true);
    }

  }).catch(function(err){
    console.log(err)
  })
}

module.exports = getSpotify