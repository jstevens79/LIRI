require('dotenv').config();
var keys = require('./keys.js');
var omdbKey = keys.omdb;
var axios = require('axios');


function getMovie(movieName, noneFound) {

  if (!noneFound) {
    console.log('\nSearching for movie...\n');
  }

  var searchUrl = 'http://www.omdbapi.com/?apikey=' + omdbKey + '&t=' + movieName;

  axios.get(searchUrl)
  .then(function(resp) { 
    var mov = resp.data;
    
    if (mov.Response === 'True') {
      var myRating = mov.Ratings.filter(rating => rating.Source === 'Internet Movie Database');

      console.log('Title: ' + mov.Title);
      console.log('Year: ' + mov.Year);
      console.log('IMDB Rating: ' + myRating[0].Value);
      console.log('Country Produced: ' + mov.Country);
      console.log('Language: ' + mov.Language);
      console.log('Plot: ' + mov.Plot);
      console.log('Actors: ' + mov.Actors);
    } else {
      console.log('\nNo results found. Check out Mr. Nobody instead!');
      console.log('\n---------------------\n')
      getMovie('mr nobody', true);
    }
    
  })
  .catch(function(error) {
    console.log(error)
  })



}

module.exports = getMovie;