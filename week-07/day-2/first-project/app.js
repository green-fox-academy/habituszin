'use strict';

const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const { json } = require('body-parser');
app.use(express.static('assets'));
const port = 3000
const urlencodedParser = bodyParser.urlencoded({ extended: false });

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/doubling', (req, res) => {
  let number = req.query.input;
  if (number === undefined) {
    res.status(200).json({ 'error': 'Please provide an input!' });
  } else {
    res.status(200).json({ 'received': Number(number), 'result': Number(number) * 2 });
  }
});

app.get('/greeter', (req, res) => {
  let name = req.query.name;
  let title = req.query.title;
  if (name === undefined && title) {
    res.status(400).json({
      "error": "Please provide a name!"
    })
  } else if (title === undefined && name) {
    res.status(400).json({
      "error": "Please provide a title!"
    })
  } else if (name === undefined && title === undefined) {
    res.status(400).json({
      "error": "Please provide a name and a title!"
    })
  } else {
    res.status(200).json({
      "welcome_message": `Oh, hi there ${name}, my dear ${title}!`
    })
  }
});

app.get('/appenda/:appendable', (req, res) => {
  let appendable = req.params.appendable;
  if (appendable === undefined) {
    res.status(404);
  }
  res.status(200).json({ 'appended': appendable + 'a' })
});

app.post('/dountil/:action', (req, res) => {
  let action = req.params.action;
  if (action === 'sum') {
    let count = 0;
    for (let i = 1; i <= 7; i++) {
      count += i;
    }
    res.status(200).json({ 'result': count })
  } else if (action === 'factor') {
    let count = 1;
    for (let i = 2; i <= 4; i++) {
      count *= i;
    }
    res.status(200).json({ 'result': count })
  }
})

app.listen(port);