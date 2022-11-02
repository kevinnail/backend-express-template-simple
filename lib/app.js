const express = require('express');
const path = require('path');
const app = express();
app.set('views', './views');
app.set('view engine', 'pug');

app.use(express.static(path.join(__dirname, 'public')));

app.use('/super', require('./controllers/super.js'));

app.use('/horoscopes/', require('./controllers/horoscopes.js'));
app.use('/zodiac', require('./controllers/zodiacs.js'));

module.exports = app;
