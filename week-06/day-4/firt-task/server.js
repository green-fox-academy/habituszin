'use strict';

const express = require('express');
const app = express();
app.set('view engine', 'ejs');

app.get('/', (reg,res) => {
  res.sendFile(__dirname + '/index.html');
});

app.listen(3000);