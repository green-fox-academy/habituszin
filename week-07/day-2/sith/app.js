'use strict';

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());

let sentenses = [
  'Arrgh. Uhmm.',
  'Err..err.err.',
  'Someone kill him!!!',
  'Potato maker.',
  'This is my favorite.'
]
app.post('/sith', (req, res) => {
  let text = req.body.text;
  if (text === undefined) {
    res.status(404).json({ 'error': 'Feed me some text you have to, padawan young you are. Hmmm.' })
  } else {
    let splitedText = text.split('.')
    let answer = '';
    for (let i = 0; i < splitedText.length - 1; i++) {
      answer += splitedText[i] + '. ' + sentenses[Math.floor(Math.random() * sentenses.length)];
    }
    res.json({ 'sith_text': answer })
  }
})


app.listen(3000);