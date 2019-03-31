var getSpotify = require('./spotify');
var getConcert = require('./concert');
var getMovie = require('./movie');
var doWhatItSays = require('./do-what-it-says');
var params = process.argv;

switch(params[2]) {

  case 'concert-this':
    getConcert(params.slice(3).join('+'));
    break;

  case 'spotify-this-song':
    getSpotify(params.slice(3).join('+'));
    break;

  case 'movie-this':
    getMovie();
    break;

  case 'do-what-it-says':
    doWhatItSays();
    break;
  
  default:
    console.log('not a recognized command');
    break;
  

}

