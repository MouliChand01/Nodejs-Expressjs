// file system module
// u need to import file module it means to read the file or display in the browser or else edit delate the acative done by using this module

var http = require('http');
var fs = require('fs');
http.createServer((req, res) => {
    fs.readFile('sample.html',(err, data)=> {
        res.write(data);
        res.end();
      });
}).listen(4200)

// appened file is used to add the nwe data 

var http= require('http');
var fs = require('fs');
http.createServer((req,res)=>{
    fs.appendFile('sample.html',' Thank You',(err,data)=>{
        res.write(data);
        res.end()
    })
}).listen(4200)

// write is used to override the new content it will gone previsos content
// if file is exigesting te content override or else file not their it will create new file

var http= require('http');
var fs = require('fs');
http.createServer((req,res)=>{
    fs.writeFile('sample2.html','over ride the new Data',(err,data)=>{
        res.write(data);
        res.end()
    })
}).listen(4200)

// unlink is used to delate the file

var http= require('http');
var fs = require('fs');
http.createServer(()=>{
    fs.unlink('sample2.html',(err)=>{
       if(err) throw err;
       console.log("file is deleted ...")
    })
}).listen(4200)

// rename is used to change the file name 

 var http = require('http')
 var fs = require('fs')
 http.createServer(()=>{
    fs.rename('sample1.html','rename.html',(err)=>{
        if(err) throw err;
        console.log("file was renamed...")
    })
 }).listen(4200)