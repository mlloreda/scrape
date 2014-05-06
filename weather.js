var request = require('request');
var cheerio = require('cheerio');

request('http://forecast.weather.gov/MapClick.php?lat=33.74899931200048&lon=-84.38797796399967', function (error, response, html) {
    if (!error && response.statusCode == 200) {
        console.log(html);
    }
});


