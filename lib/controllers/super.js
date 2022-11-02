const { Router } = require('express');
module.exports = Router().get('/', (req, res) => {
  res.render('index.pug', { title: 'Hey', message: 'Hello there!' });
});
