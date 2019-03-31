
var fs = require('fs');

function doWhatItSays() {
  fs.readFile('./random.txt', 'utf-8', function(err, resp) {
    console.log(resp)
  })
}

module.exports = doWhatItSays;