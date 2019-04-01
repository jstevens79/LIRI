var axios = require('axios');
var moment = require('moment');

function concert(a) {
  axios.get("https://rest.bandsintown.com/artists/" + a + "/events?app_id=codingbootcamp")
  .then(function(res) {
    //console.log(res.data)
    if (res.data.length) {
      res.data.forEach(function(concert) {
        console.log('Location: ' + concert.venue.city + ', ' + concert.venue.country);
        console.log('Venue: ' + concert.venue.name);
        console.log('Date and time: ' + moment(concert.datetime).format("MM/DD/YYYY h:mmA"));
        console.log('\n---------------------\n');
      })
    } else {
      console.log('no concerts available for this band.')
    }
    
  }).catch(function(error) {
    console.log(error)
  })
}

module.exports = concert;