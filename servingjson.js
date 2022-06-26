var http = require('http');

var server = http.createServer(function(req, res){
    console.log('request was made : ' +req.url);
    res.writeHead(200, {'Content-Type': 'application/json'});
    var myObj = {
        name : 'Parag',
        Age : 23,
        job : 'Analyst'
    };
    res.end(JSON.stringify(myObj));
});

server.listen(3000, '127.0.0.1');
console.log('now listening to port 3000');