var request = require('request');
var cheerio = require('cheerio');

request('https://news.ycombinator.com', function (error, response, html) {
    if (!error && response.statusCode == 200) {
        var $ = cheerio.load(html);
        $('span.comhead').each(function(i, element) {
            var a = $(this).prev();
            var meta = a.parent().parent();
            var rank = $(meta).text();
            var title = a.text();
            var url = a.attr('href');
            var subtext = $(meta).next().children('.subtext').children();
            var points = $(subtext).eq(0).text();
            var username = $(subtext).eq(1).text();
            var comments = $(subtext).eq(2).text();

            var metadata = {
                rank: parseInt(rank),
                title: title,
                url: url,
                points: parseInt(points),
                username: username,
                comments: parseInt(comments),
            };
            console.log(metadata);
        });
    }
});
