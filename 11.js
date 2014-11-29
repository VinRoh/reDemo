/**
 *Simple Express routing example that
 *returns different content type responses.
 *Can only access the following routes:
 *
 * /hello1
 * /hello2
 * /hello3
 * /hello4
 * /hello5
 * /hello6
 * Ref: http://expressjs.com/4x/api.html#res.send
 */

var app = require('express')(),
	morgan = require('morgan'),
	port = process.env.PORT || 3000;

// add logging middleware

app.use(morgan('dev'));

// route handler for GET /

app.get('/hello1', function(req, res) {
	res.send('<h1>hello world</h1>'); // automatic -> text/html
});

app.get('/hello2', function(req, res) {
	res.header('Content-Type', 'text/plain');
	res.send('hello world\n'); // explicit -> text/plain
});

app.get('/hello3', function(req, res) {
	res.send(new Buffer('hello world\n')); // automatic -> application/octet-stream
});

app.get('/hello4', function(req, res) {
	res.send({
		message: 'hello world'
	}); // automatic -> application/json
});

app.get('/hello5', function(req, res) {
	res.send(['hello world']); // automatic -> application/json
});

app.get('/hello6', function(req, res) {
	res.header('Content-Type', 'text/xml');
	res.send('<message>hello world</message>'); // explicit -> text/xml;
});

//listen on localhost:3000

app.listen(port);
console.log('server started on port %s', port);