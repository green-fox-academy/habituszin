'use stirct';

const { json } = require('express');
const express = require('express');
const app = express();
const port = 3000;
const mysql = require('mysql');
app.use(express.json());
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
const { Base64 } = require('js-base64');

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


app.get('/posts/login', (req, res) => {
  let login = Base64.atob(req.headers.authorization.substring(6)).split(':');

  let userName = login[0];
  let password = login[1];
  
  conn.query(`SELECT * FROM users WHERE name = (?) AND password = (?);`, [userName, password], (err, rows) => {
    if (err) {
      res.status(500).json({ 'error': 'database error' });
      return;
    }
    console.log(rows);
    if (rows[0]) {
      console.log('beléphetsz');
    } else {
      console.log('nem nyert');
    }
  })
});

app.post('/posts/registration', (req, res) => {
  if (req.body.password != req.body.password_again) {
    res.status(400).json({ 'error': 'password not matching' });
    return
  }
  conn.query(`SELECT name FROM users WHERE name = (?);`, [req.body.name], (err, rows) => {
    if (err) {
      res.status(500).json({ 'error': 'database error' });
      return;
    }
    if (rows[0].name == req.body.name) {
      res.status(400).json({ 'error': 'this name invalid' })
    } else {
      conn.query(`INSERT INTO users (name, password)
  VALUES ((?), (?))`, [req.body.user, req.body.password])
      res.send('succesful registration')
    }
  })
})

app.get('/posts/logout', (req, res) => {
  res.redirect('/posts')
})

app.get('/posts', (req, res) => {

  conn.query(`SELECT posts.id, title, url, date, vote_numbers, name
  FROM posts 
  INNER JOIN users ON posts.creator_id = users.id;`, (err, rows) => {
    if (err) {
      console.log(err.toString());
      res.status(500).json({ 'error': 'database error' });
      return;
    }
    res.status(200).json(rows);
  });
});

app.post('/posts', (req, res) => {
  conn.query(`INSERT INTO posts (title, url, date, creator_id)
  VALUES ((?), (?), (?), (?))`, [req.body.title, req.body.url, Date.now(), req.body.creator_id], (err, rows) => {
    if (err) {
      console.log(err.toString());
      res.status(500).json({ 'error': 'database error' });
      return;
    }
    console.log(rows);
    res.status(200).json(rows);
  })
});

app.put('/posts/:id/upvote', (req, res) => {
  conn.query(`UPDATE posts SET vote_numbers = vote_numbers + 1 WHERE posts.id = (?)`, [req.params.id], (err, rows) => {
    if (err) {
      console.log(err.toString());
      res.status(500).json({ 'error': 'database error' });
      return;
    }
    conn.query(`SELECT posts.id, title, url, date, vote_numbers
    FROM posts 
    WHERE posts.id = (?);`, [req.params.id], (err, rows) => {
      if (err) {
        console.log(err.toString());
        res.status(500).json({ 'error': 'database error' });
        return;
      }
      res.status(200).json(rows);
    })
  })
})

app.put('/posts/:id/downvote', (req, res) => {
  conn.query(`UPDATE posts SET vote_numbers = vote_numbers - 1 WHERE posts.id = (?)`, [req.params.id], (err, rows) => {
    if (err) {
      console.log(err.toString());
      res.status(500).json({ 'error': 'database error' });
      return;
    }
    conn.query(`SELECT posts.id, title, url, date, vote_numbers
    FROM posts 
    WHERE posts.id = (?);`, [req.params.id], (err, rows) => {
      if (err) {
        console.log(err.toString());
        res.status(500).json({ 'error': 'database error' });
        return;
      }
      res.status(200).json(rows);
    })
  })
})

app.listen(port);