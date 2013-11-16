var http = require('http');

http.createServer(function(request, response){
    response.writeHead(200);
    response.write("hello world , this is a dog eat dog world");
    
    setTimeout(function(){
        response.write("This is a real shit programming systems");
        response.end();
    }, 5000);

    
}).listen(8080);
console.log('listen on port 8080 ..');