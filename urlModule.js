// url module is used to we are send the valus from one page to another page they are might be pathparems (or) queryparms with the help of the url module we can achive this thing

var url = require ('url');
var addre = 'http://localhost:8080/default.htm?year=2017&month=february';

var data= url.parse(addre,true);
console.log('HostName :',data.hostname);
console.log('port is :',data.port);
console.log('protolcol is :',data.protocol);
console.log('path is :',data.path);
console.log('quary pams is :',data.search);
