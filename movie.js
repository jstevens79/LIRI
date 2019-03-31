require('dotenv').config();
var keys = require('./keys.js');
var omdbKey = keys.omdb;


function getMovie() {


 console.log(omdbKey);

}

module.exports = getMovie;