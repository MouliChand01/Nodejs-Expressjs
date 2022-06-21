// npm means node package manager with the help of this we can do multiplce actatives
// for example we need to install one module that is (npm i upper-case) it install the node modules

var http=require('http');
var up =require('upper-case');

http.createServer((req,res)=>{
    res.write(up.upperCase("Hello GoodMorning"));
    res.end();
}).listen(4200)