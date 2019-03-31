var axios = require('axios');
//var moment

function concert(a) {
  axios.get("https://rest.bandsintown.com/artists/" + a + "/events?app_id=codingbootcamp")
  .then(function(res) {
    //console.log(res.data)
    res.data.forEach(function(concert) {
      console.log('Location: ' + concert.venue.city + ', ' + concert.venue.country);
      console.log('Venue: ' + concert.venue.name);
      console.log('Date: ' + concert.datetime);
      console.log('\n---------------------\n');
    })
  }).catch(function(error) {
    console.log(error)
  })
}

module.exports = concert;