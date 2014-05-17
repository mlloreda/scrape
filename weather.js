var request = require('request');
var cheerio = require('cheerio');

request('http://forecast.weather.gov/MapClick.php?lat=33.74899931200048&lon=-84.38797796399967', function (error, response, html) {
    if (error) return console.error(error);
    if (!error && response.statusCode == 200) {
        var $ = cheerio.load(html);
        $('.myforecast-current').each(function(){
            console.log($(this).text());
            console.log($(this).next().text());
        });

        console.log("\n--- META ---");

        $('.current-conditions-detail').children().each(function(){
            var data = $(this).first().children();
            var out = data.text();
            data.remove();
            data = $(this);
            out = out + ": " + data.text();
            console.log(out);
        });

        console.log("\n--- DAILY ---");

        $('.point-forecast-icons').children().each(function(){
            var data = $(this);
            data.children().each(function() {
                console.log($(this).text());
            });

            console.log("\n---\n");
        });
    }
});


