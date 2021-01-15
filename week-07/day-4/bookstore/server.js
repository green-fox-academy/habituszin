'use strict';

const express = require('express');
const app = express();
app.set('view engine', 'ejs');
const port = 3000;
const mysql = require('mysql');

let conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'bookstore',

});

let title = ['Book Name', 'Author Name', 'Category', 'Publacated', 'Book Prize'];


conn.connect((err) => {
  if (err) {
    console.error('Cannot connect to the database', err);
    return;
  }
  console.log('Connection established');
});



app.get('/books', (req, res) => {
  conn.query('SELECT book_name, aut_name, cate_descrip, pub_name, book_price FROM book_mast INNER JOIN author ON book_mast.aut_id = author.aut_id INNER JOIN category ON book_mast.cate_id = category.cate_id INNER JOIN newpublisher ON book_mast.pub_id = newpublisher.pub_id;', (err, rows) => {
    if (err) {
      console.log(err.toString());
      res.status(500).json({ 'error': 'database error' });
      return;
    }
    let result = rows;
    let category = req.query.cate_descrip;
    let publicated = req.query.pub_name;
    let plt = req.query.plt;
    let pgt = req.query.pgt;

    if (category != '') {
      result = result.filter(element => element.cate_descrip == category);
    }
    if (publicated != '') {
      result = result.filter(element => element.pub_name == publicated);
    }
    if (plt != '') {
      result = result.filter(element => element.book_price < plt);
    }
    if (pgt != '') {
      result = result.filter(element => element.book_price > pgt);
    }

    res.render('books', { request: result, tableTitle: title })
  });
});



app.listen(port)