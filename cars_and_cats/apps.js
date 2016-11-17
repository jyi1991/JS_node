var http = require('http');
var fs = require('fs');
var server = http.createServer(function (request, response){
    if(request.url === '/cars') {
      fs.readFile('views/cars.html', 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.write(contents);
            response.end();
        });
    }
    else if(request.url === '/images/nsx.jpg'){
     fs.readFile('./images/nsx.jpg', function(errors, contents){
         response.writeHead(200, {'Content-type': 'image/jpg'});
         response.write(contents);
         response.end();
     })
   }
   else if(request.url === '/images/geo-metro-4.jpg'){
    fs.readFile('./images/geo-metro-4.jpg', function(errors, contents){
        response.writeHead(200, {'Content-type': 'image/jpg'});
        response.write(contents);
        response.end();
    })
  }
  else if(request.url === '/images/tesla.jpg'){
   fs.readFile('./images/tesla.jpg', function(errors, contents){
       response.writeHead(200, {'Content-type': 'image/jpg'});
       response.write(contents);
       response.end();
   })
 }
    else if (request.url === "/cats") {
     fs.readFile('views/cats.html', 'utf8', function (errors, contents){
         response.writeHead(200, {'Content-type': 'text/html'});
         response.write(contents);
         response.end();
     });
   }
   else if(request.url === '/images/cat.jpg'){
    fs.readFile('./images/cat.jpg', function(errors, contents){
        response.writeHead(200, {'Content-type': 'image/jpg'});
        response.write(contents);
        response.end();
    })
  }
  else if(request.url === '/images/dog.jpg'){
   fs.readFile('./images/dog.jpg', function(errors, contents){
       response.writeHead(200, {'Content-type': 'image/jpg'});
       response.write(contents);
       response.end();
   })
 }
 else if(request.url === '/images/bengal.jpg'){
  fs.readFile('./images/bengal.jpg', function(errors, contents){
      response.writeHead(200, {'Content-type': 'image/jpg'});
      response.write(contents);
      response.end();
  })
}
     else if (request.url === "/cars/new") {
     fs.readFile('views/form.html', 'utf8', function (errors, contents){
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
server.listen(7077);
