var http = require('http');
var fs = require('fs');
var server = http.createServer(function (request, response){
    if(request.url === '/') {
      fs.readFile('static/index.html', 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.write(contents);
            response.end();
        });
    }
    else if (request.url === "/ninjas") {
     fs.readFile('static/ninjas.html', 'utf8', function (errors, contents){
         response.writeHead(200, {'Content-type': 'text/html'});
         response.write(contents);
         response.end();
     });
   }
     else if (request.url === "/dojos/new") {
     fs.readFile('static/dojo.html', 'utf8', function (errors, contents){
         response.writeHead(200, {'Content-type': 'text/html'});
         response.write(contents);
         response.end();
     });
   }
    else {
        response.writeHead(404);
        response.end('File not found!!!');
    }
});
server.listen(6789);
