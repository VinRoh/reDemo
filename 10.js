/**
 * Simple Express routing example.
 * Can only access the following routes:
 * /
 * /about
 * /hello
 */

var app = require('express')(),
	morgan = require('morgan'),
	port = process.env.PORT || 3000;


// add logging middleware

app.use(morgan('dev'));


// route handler for GET /

app.get('/', function(req, res) {
	res.send('Welcome to Express');
});

app.get('/about', function(req, res) {
	res.send('This just a simple Express ruting demo');
});

app.get('/hello', function(req, res) {
	res.send('Well, hello there!');
});

//listen on localhost:3000

app.listen(port);
console.log('server started on port %s', port);