/**
 *Simple Express app that responds with
 *'hello world' but only handles one route (/).
 */

//create an express app

var express = require('express'),
	morgan = require('morgan'),
	app = express(),
	port = process.env.PORT || 3000;

// add logging middleware

app.use(morgan('dev'));

// route handler for GET /

app.get('/', function(req, res) {
	var data = '<h1>hello world</h1>';
	res.send(data);
});

//listen on localhost:3000

app.listen(port);
console.log('server started on port %s', port);