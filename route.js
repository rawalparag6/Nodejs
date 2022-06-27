var fs = require('fs');
var http = require('http');

var server = http.createServer(function(req, res){
    console.log('request was made : ' +req.url);
    if(req.url === '/home' || req.url === '/'){
    res.writeHead(200, {'Content-Type': 'text/html'});
    fs.createReadStream(__dirname + '/index.html').pipe(res);
} else if(req.url === '/marvel'){
    res.writeHead(200, {'Content-Type': 'text/html'});
    fs.createReadStream(__dirname + '/index2.html').pipe(res);
} else if(req.url === '/api/ninjas'){
    var ninjas = [{name: 'Parag Rawal', age: 23}];
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.end(JSON.stringify(ninjas));
}
});

server.listen(3000, '127.0.0.1');
console.log('Listening to port 3000');