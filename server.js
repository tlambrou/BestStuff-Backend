var path = require('path')
var express = require('express')
var app = express()

// RESOURCES
require('./controllers/contests')(app)
require('./controllers/items')(app)
require('./controllers/users')(app)

// SERVER
var port = process.env.PORT || 8000;
app.listen(port, function () {
  console.log('BestStuff Server listening on port 8000!');
});
