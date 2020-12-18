var url = 'http://newsapi.org/v2/top-headlines?' +
          'country=us&' +
          'apiKey=2eb3a19975e3465d8eb05079155a7866';
var Request = require('request');
var req = new Request(url);
fetch(req)
    .then(function(response) {
        console.log(response.json());
    })
