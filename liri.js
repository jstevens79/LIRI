var getSpotify = require('./spotify');
var getConcert = require('./concert');
var getMovie = require('./movie');
var doWhatItSays = require('./do-what-it-says');
var params = process.argv;

function initiateSearch(searchType, searchPhrase) {
  
  switch(searchType) {
    case 'concert-this':
      getConcert(searchPhrase);
      break;

    case 'spotify-this-song':
      getSpotify(searchPhrase);
      break;

    case 'movie-this':
      getMovie(searchPhrase);
      break;

    case 'do-what-it-says':
      doWhatItSays(initiateSearch);
      break;
    
    default:
      console.log('not a recognized command');
      break;
  }
}


initiateSearch(params[2], params.slice(3).join('+'));
