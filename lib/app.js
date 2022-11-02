const express = require('express');
const path = require('path');
const app = express();
app.use(express.static(path.join(__dirname, 'public')));

app.use('/horoscopes/', require('./controllers/horoscopes.js'));
app.use('/zodiac', require('./controllers/zodiacs.js'));
module.exports = app;
