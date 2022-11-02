const { Router } = require('express');
const { zodiacs } = require('../zodiac-data.js');

module.exports = Router().get('/:name', (req, res) => {
  let match;
  for (const zodiac of zodiacs) {
    if (zodiac.name === req.params.name) {
      match = zodiac;
    }
  }
  res.render('index.pug', {
    title: 'Horoscopes',
    name: match.name,
    dates: match.dates,
    symbol: match.symbol,
  });
});
