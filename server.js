// http Module
// usining http we can ceate server listen is used for runing server at at port for example 4200

var http = require('http');

http.createServer((req,res)=>{
    res.write('Hello World This is my Nodes.Js Program');
    res.end();
    console.log('server runing ....')
}
).listen(4200)

// wt we are entering in that url is we can get the respone it means render in the body

var http = require('http')

http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type': 'text/html'})
    res.write(req.url);
    res.end();
    console.log('server is runing')
}
).listen(9090)