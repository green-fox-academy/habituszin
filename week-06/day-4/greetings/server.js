'use strict';

const express = require('express');
const app = express();
const port = 3000;

app.get('/', (reg, res) => {
  if (reg.query.name == undefined) {
    res.send(`Welcome back, Guest!`)
  } else {
    res.send(`Welcome back, ${reg.query.name}!`)
  }
});

app.listen(port)