const path = require('path');
const express = require('express');
const app = express();

// SEQUELIZE
const Sequelize = require('sequelize');
const sequelize = new Sequelize('beststuff', 'postgres', null, { dialect: 'postgres' });

sequelize
    .authenticate()
    .then(() => {
    console.log('Connection has been established successfully.');
})
.catch(err => {
    console.error('Unable to connect to the database:', err);
});

// RESOURCES
require('./controllers/contests')(app);
require('./controllers/items')(app);
require('./controllers/users')(app);

// SERVER
var port = process.env.PORT || 8000;
app.listen(port, function () {
  console.log('BestStuff Server listening on port 8000!');
});
