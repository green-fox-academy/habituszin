const express = require('express');
const app = express();

let iAmGroot = 'I am Groot!';

app.get('/groot', (req, res) => {
  let message = req.query.message;
  if (!message || message == '') {
    res.status(400).json({'error': iAmGroot})
  }
  res.status(200).json({'message': message, 'translate': iAmGroot})
});

module.exports = app;