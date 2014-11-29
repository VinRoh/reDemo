// create an express app

var app = require('express')(),
	logger = require('morgan');

app.use(logger("dev"));

// route handler for GET/

app.get('/', function(req, res) {
	res.send('<h1>hello world</h1>');
});

//listen on localhost:3000

app.listen(3000);
console.log("App is running on the server " + 3000);