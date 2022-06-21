var http=require('http');
var fs=require('fs');

http.createServer((req,res)=>{
    fs.readFile('sample.json',(err,data)=>{
        if(err){
            console.log("Error")
        }
        else{
            res.write(data);
            res.end();
        }
    })
}).listen(4200)