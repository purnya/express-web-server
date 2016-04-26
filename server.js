var express = require('express');
var app = express();

var PORT = 3000;

//Example 1

/*app.get('/', function (req, res) {
	res.send('Hello Express!');
});

app.get('/about', function (req, res) {
	res.send('About Us');
});
*/

//Example 2

/*
app.get('/about', function (req, res) {
	res.send('About Us');
});
*/

//Example 3

var middleware = require('./middleware.js')

/*var middleware = {
	requireAuthentication: function (req, res, next) {
		console.log('private route hit!');
		next();
	},
	logger: function (req, res, next) {
		console.log('Request: ' + new Date().toString() + ' ' + req.method + ' ' + req.originalUrl);
		next();
	}
};*/

app.use(middleware.requireAuthentication);
app.use(middleware.logger);

/*app.get('/about', function (req, res) {
	res.send('About Us');
});*/

app.get('/about', middleware.requireAuthentication, function (req, res) {
	res.send('About Us!!');
});


app.use(express.static(__dirname + '/public'));
console.log(__dirname);


app.listen(PORT,function(){
	console.log('Express server started on port  ' + PORT);

});