var request = require('request');
var cheerio = require('cheerio');

request('http://forecast.weather.gov/MapClick.php?lat=33.74899931200048&lon=-84.38797796399967', function (error, response, html) {
    if (error) return console.error(error);
    if (!error && response.statusCode == 200) {
        var $ = cheerio.load(html);
        $('.one-third-first .div-half-right .myforecast-current').each(function(){
            console.log($(this).text());
            console.log($(this).next().text());
        });
    }
});


