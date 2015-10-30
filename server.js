var http = require("http");
var fs = require('fs')

var needRequest = function(req,res){
	var requests=req.url
	console.log(requests)
	if(req.url=='/')
		res.end(fs.readFileSync('./index.html'))
	else if(req.url!='/favicon.ico')
		res.end(fs.readFileSync('.'+req.url))
	else if(requests.match(/name/)===null){
		console.log('vikas')
		res.end(fs.readFileSync('./index.html'))
	}
}
var Server = http.createServer(needRequest);
Server.listen(8000);


















































// var http = require('http');
// var url = "http://real-chart.finance.yahoo.com/table.csv?s=%5ENSEI&a=09&b=19&c=2015&d=09&e=19&f=2015&g=d&ignore=.csv"
// var options = {
// host: 'www.google.com',
// path:'/' 
// }
// var onResponse = function(res){
// 	console.log('statusCode',res.statusCode)
// 	console.log('headers',res.headers);
// };
// var onError = function(a){
// 	console.log(a);
// };
// http.get('http://google.com/',onResponse).on('error',onError);



// // var http = require('http');
// // http.createServer(function(request,response){
// // 	response.writeHead(200);
// // 	response.write('My name is Nabeel');
// // 	response.end();
// // }).listen(8080);
// // console.log('Server Started')
