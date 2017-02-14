var express = require('express');

//create our app
var app = express();
const PORT = process.env.PORT || 3000;

app.use(function (req, res, next){
	if (req.header['x-forwarded-proto'] === 'http') {
		next();
	} else {
		console.log(req.header['x-forwarded-proto'] );
	}
});

//let's you add functionality to your express application
app.use(express.static('public'));

app.listen(PORT, function () {
  console.log('Express server is up on port ' + PORT);
});