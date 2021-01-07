'use strict';

const express = require('express');
const app = express();
app.set('view engine', 'ejs');
const port = 3000;
const todos = ['get up', 'survive', 'go back to bed'];

app.get('/', (req, res) => {
  res.render('home',  {toDo: todos});
})

app.listen(port);