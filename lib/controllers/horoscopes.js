const { Router } = require('express');
const { horoscopes } = require('../horoscope-data.js');

module.exports = Router().get('/:sign', (req, res) => {
  let match;
  for (const horoscope of horoscopes) {
    if (horoscope.sign === req.params.sign) {
      match = horoscope;
    }
  }
  return res.json(match.horoscope);
});
