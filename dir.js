var fs = require('fs')

fs.mkdir('stuff', function(){
    fs.readFile('readMe.txt', 'utf8', function(err, data){
        fs.watchFile('./stuff/writeMe.txt', data)
    });
});

// fs.unlink('./stuff/writeMe.txt',function(){
//     fs.rmdir('stuff');
// });