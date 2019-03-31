require('dotenv').config();
var keys = require('./keys.js');
var omdbKey = keys.omdb;
var axios = require('axios');


function getMovie(movieName) {

  var searchUrl = 'http://www.omdbapi.com/?apikey=' + omdbKey + '&t=' + movieName;

  axios.get(searchUrl)
  .then(function(resp) {
    var mov = resp.data;
    console.log('Title: ' + mov.Title);
    console.log('Year: ' + mov.Year);
    console.log('IMDB Rating: ' + mov.Ratings);
    console.log('Country Produced: ' + mov.Country);
    console.log('Language: ' + mov.Language);
    console.log('Plot: ' + mov.Plot);
    console.log('Actors: ' + mov.Actors);
  })
  .catch(function(error) {
    console.log(error)
  })



}

module.exports = getMovie;