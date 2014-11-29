/** 
*Simple Express app with a middleware function 
*to respond with 'hello world' for any request.
*/

// create an express app

var express = require('express'),
	app = express(),
	port = process.env.PORT || 3000;


// create express middleware

app.use(function(req, res) {
	var data = '<h1>hello world</h1>';
	res.writeHead(200, {
		'Content-Type': 'text/html'
	});
	res.end(data);
});

//listen on localhost:3000

app.listen(port);
console.log('server started on port %s', port);