'use stirct';

const { json } = require('express');
const express = require('express');
const app = express();
const port = 3000;
const mysql = require('mysql');
app.use(express.json());
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

let conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'reddit',
});


conn.connect((err) => {
  if (err) {
    console.error('Cannot connect to the database', err);
    return;
  }
  console.log('Connection established');
});

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/main.html')
});

/* app.get('/posts', (req, res) => {
  let user = req.body.user;
  res.status(200).json(user)
}); */

app.get('/posts', (req, res) => {
  conn.query(`SELECT posts.id, title, url, date, vote_numbers, name, vote 
  FROM posts 
  INNER JOIN users ON posts.creator_id = users.id 
  INNER JOIN votes ON posts.id = votes.post_id 
  WHERE votes.user_id = (?);`, [req.body.user], (err, rows) => {
    if (err) {
      console.log(err.toString());
      res.status(500).json({ 'error': 'database error' });
      return;
    }
    console.log(rows);
    res.status(200).json(rows);
  });
});

app.post('/newpost', (req, res) => {
  conn.query(`INSERT INTO posts (title, url, vote_numbers, date, creator_id)
  VALUES ((?), (?), 0, (?), (?))`, [req.body.title, req.body.url, Date.now(), req.body.creator_id], (err, rows) => {
    if (err) {
      console.log(err.toString());
      res.status(500).json({ 'error': 'database error' });
      return;
    }
    console.log(rows);
    res.status(200).json(rows);
  })
});

app.listen(port);