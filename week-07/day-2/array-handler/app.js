'use strict';

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(express.static('assets'));
app.use(bodyParser.json());


app.post('/arrays', (req, res) => {
  let action = req.body;
  let result;
  switch (action.what) {
    case 'sum':
      result = 0;
      for (let i = 0; i < action.numbers.length; i++) {
        result += action.numbers[i];
      }
      res.json({ 'result': result });
      break;
    case 'multiply':
      result = 1;
      for (let i = 0; i < action.numbers.length; i++) {
        result *= action.numbers[i];
      }
      res.json({ 'result': result });
      break;
    case 'double':
      result = action.numbers;
      for (let i = 0; i < action.numbers.length; i++) {
        result[i] *= 2;
      }
      res.json({ 'result': result });
      break;
    default:
      res.status(404).json({'error': 'Please provide what to do with the numbers!'})
      break;
  }
});

app.listen(3000);