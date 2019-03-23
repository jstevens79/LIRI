var getSpotify = require('./spotify');
var params = process.argv;

switch(params[2]) {

  case 'concert-this':
    console.log('concert-this');
    
    break;

  case 'spotify-this-song':
    getSpotify(params[3]);
    break;

  case 'movie-this':
    console.log('movie-this');
    break;

  case 'do-what-it-says':
    console.log('do-what-it-says');
    break;
  
  default:
    console.log('not a recognized command');
    break;
  

}

