const express = require('express');

const app = express();

app.use('/zodiac', require('./controllers/zodiacs.js'));
module.exports = app;
