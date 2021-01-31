'use stirct';

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

let logUsers = [];

conn.connect((err) => {
  if (err) {
    console.error('Cannot connect to the database', err);
    return;
  }
  console.log('Connection established');
});

app.post('/posts/login', (req, res) => {
  let login = Base64.atob(req.headers.authorization.substring(6)).split(':');

  let userName = login[0];
  let password = login[1];

  conn.query(`SELECT * FROM users WHERE name = (?) AND password = (?);`, [userName, password], (err, rows) => {
    if (err) {
      console.log(err.toString());
      res.status(500).json({ 'error': 'database error' });
      return;
    }
    if (rows[0]) {
      logUsers.push(rows[0].id);
      res.status(200).json({ name: userName, id: rows[0].id });

    } else {
      res.status(200).json({ error: 'Check your username and password!' })
    }
  })
});

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/main.html')
})

app.post('/posts/registration', (req, res) => {
  if (req.body.password != req.body.password_again) {
    res.status(400).json({ 'error': 'password not matching' });
    return
  }
  conn.query(`SELECT name FROM users WHERE name = (?);`, [req.body.name], (err, rows) => {
    if (err) {
      console.log(err.toString());
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

app.post('/posts/logout', (req, res) => {
  let user = req.body.user;
  logUsers.splice(logUsers.indexOf(user), 1);
  res.redirect('/');
})

app.get('/posts', (req, res) => {
  let user = '';
  if (req.query.user) {
    user = req.query.user
  }
  conn.query(`SELECT posts.id AS post_id, title, url, date, (SELECT IFNULL(SUM(vote), 0) FROM votes WHERE votes.post_id = posts.id) AS vote_numbers, name AS owner
    FROM posts
    LEFT JOIN users ON posts.creator_id = users.id;`, (err, posts) => {
    if (err) {
      console.log(err.toString());
      res.status(500).json({ 'error': 'database error' });
      return;
    } else if (user != '' && logUsers.includes(user)) {
      conn.query(`SELECT post_id, users.name, vote 
      FROM votes
      JOIN users ON user_id = users.id
      WHERE users.name = (?);`, [user], (err, votes) => {
        if (err) {
          console.log(err.toString());
          res.status(500).json({ 'error': 'database error' });
          return;
        }
        for (let i = 0; i < posts.length; i++) {
          for (let j = 0; j < votes.length; j++) {
            if (posts[i].post_id == votes[j].post_id) {
              posts[i]['vote'] = votes[j].vote;
            }
          }
        }
        res.status(200).json(posts);
      })
    } else {
      res.status(200).json(posts);
    }
  })
});

app.post('/posts', (req, res) => {

  conn.query(`INSERT INTO posts (title, url, date, creator_id)
  VALUES ((?), (?), (?), (?))`, [req.body.title, req.body.url, Date.now(), req.body.creator_id], (err, rows) => {
    if (err) {
      console.log(err.toString());
      res.status(500).json({ 'error': 'database error' });
      return;
    }
    res.status(200).json(rows);
  })
});

app.put('/posts/vote', (req, res) => {
  let user = Number(req.query.user);
  let post = Number(req.query.postId);
  let vote = Number(req.query.vote);

  conn.query(`SELECT * FROM votes WHERE user_id = (?) AND post_id = (?);`, [user, post], (err, rows) => {
    if (err) {
      console.log(err.toString());
      res.status(500).json({ 'error': 'database error' });
      return;
    }
    if (rows[0]) {
      conn.query(`UPDATE votes SET vote = (?) WHERE id = (?);`, [vote, rows[0].id], (err, rows) => {
        if (err) {
          console.log(err.toString());
          res.status(500).json({ 'error': 'database error' });
          return;
        }
        res.status(200)
      })
    } else {
      conn.query(`INSERT INTO votes (post_id, user_id, vote) VALUES ((?), (?), (?))`, [post, user, vote], (err, rows) => {
        if (err) {
          console.log(err.toString());
          res.status(500).json({ 'error': 'database error' });
          return;
        }
        res.status(200)
      })
    }
  })
})

app.listen(port);