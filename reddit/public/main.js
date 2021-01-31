'use strict';

let posts = document.querySelector('main');

window.onload = () => {
  let data;
  let url;
  if (window.localStorage.getItem('user')) {
    data = window.localStorage.getItem('user');
    changeLogIn(data);
    url = `http://localhost:3000/posts?user=${data}`
  } else {
    url = 'http://localhost:3000/posts';
  }

  fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then(response => {
      if (response.status !== 200) {
        throw new Error('nincs valasz')
      }
      return response;
    })
    .then(response => response.json())
    .then(responseObjecttoJson => {
      responseObjecttoJson.forEach(element => {
        let newElement = createPostElement(element);
        posts.appendChild(newElement);
      });
    })
    .catch(err => {
      console.log('valami baj van');
    })
}

let upVoteArrows = ['https://raw.githubusercontent.com/green-fox-academy/teaching-materials/master/project/reddit/frontend/assets/arrows/upvote.png?token=AP4YIBYP6WT7743Y3KUHFWDADUOXW',
  'https://raw.githubusercontent.com/green-fox-academy/teaching-materials/master/project/reddit/frontend/assets/arrows/upvoted.png?token=AP4YIB2QHZTB4WHQP2GSWE3ADUOYQ'];
let downVoteArrows = ['https://raw.githubusercontent.com/green-fox-academy/teaching-materials/master/project/reddit/frontend/assets/arrows/downvote.png?token=AP4YIB6ZUVTLBOOHGQGVCCDADUOVC',
  'https://raw.githubusercontent.com/green-fox-academy/teaching-materials/master/project/reddit/frontend/assets/arrows/downvoted.png?token=AP4YIB3NSJW2E5NIBYTYR7LADUOXC'];

function createPostElement(post) {
  let postElement = document.createElement('div');
  let postVote = document.createElement('div');
  let postVoteNumber = document.createElement('h3')
  let postUpVote = document.createElement('img');
  let postDownVote = document.createElement('img');
  let title = document.createElement('a');
  let timer = document.createElement('p');

  title.innerHTML = post.title;
  timer.innerHTML = `submitted ${timeSince(post.date)} ago by ${post.name}`;
  postVoteNumber.innerHTML = post.vote_numbers;

  if (post.vote == 1) {
    postUpVote.src = upVoteArrows[1]
  } else {
    postUpVote.src = upVoteArrows[0]
  }

  if (post.vote == -1) {
    postDownVote.src = downVoteArrows[1]
  } else {
    postDownVote.src = downVoteArrows[0]
  }


  postElement.setAttribute('class', 'postElement');
  postElement.setAttribute('vote', post.vote);
  postElement.setAttribute('id', post.post_id);
  postVote.setAttribute('class', 'voteCount');
  title.setAttribute('class', 'title');
  title.setAttribute('href', post.url)
  timer.setAttribute('class', 'timer');

  postUpVote.addEventListener('click', () => sendVote(1, postElement, postUpVote, postDownVote));
  postDownVote.addEventListener('click', () => sendVote(-1, post, postUpVote, postDownVote));

  postVote.appendChild(postUpVote);
  postVote.appendChild(postVoteNumber);
  postVote.appendChild(postDownVote);
  postElement.appendChild(postVote);
  postElement.appendChild(title);
  postElement.appendChild(timer);

  return postElement
}

function sendVote(vote, post, postUpVote, postDownVote) {
  let user = window.localStorage.getItem('id');
  let sendedVote;
  if (user) {
    console.log(post.vote);
    if (vote == Number(post)) {
      sendedVote = 0;
      postUpVote.src = upVoteArrows[0];
      postDownVote.src = DownVoteArrows[0];
    } else if (vote == -1) {
      sendedVote = -1;
      postUpVote.src = upVoteArrows[0];
      postDownVote.src = downVoteArrows[1];
    } else if (vote == 1) {
      sendedVote = 1;
      postUpVote.src = upVoteArrows[1];
      postDownVote.src = downVoteArrows[0];
    }
    fetch(`http://localhost:3000/posts/vote?user=${user}&postId=${post.id}&vote=${sendedVote}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
    })
  } else {
    return
  }
}

function timeSince(date) {

  var seconds = Math.floor((new Date() - date) / 1000);

  var interval = seconds / 31536000;

  if (interval > 1) {
    return Math.floor(interval) + " years";
  }
  interval = seconds / 2592000;
  if (interval > 1) {
    return Math.floor(interval) + " months";
  }
  interval = seconds / 86400;
  if (interval > 1) {
    return Math.floor(interval) + " days";
  }
  interval = seconds / 3600;
  if (interval > 1) {
    return Math.floor(interval) + " hours";
  }
  interval = seconds / 60;
  if (interval > 1) {
    return Math.floor(interval) + " minutes";
  }
  return Math.floor(seconds) + " seconds";
}


let form = document.querySelector('form');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  let name = document.querySelectorAll('input')[0].value;
  let password = document.querySelectorAll('input')[1].value;

  let sendedProfile = window.btoa(`${name}:${password}`);

  fetch('http://localhost:3000/posts/login', {
    method: 'POST',
    headers: { 'Authorization': `Basic ${sendedProfile}` }
  })
    .then(response => {
      if (response.status !== 200) {
        throw new Error('nincs valasz')
      }
      return response;
    })
    .then(response => response.json())
    .then(response => {
      if (!response.error) {
        changeLogIn(response.name)
        localStorage.setItem('user', response.name);
        localStorage.setItem('id', response.id);

      } else {
        alert(response.error)
      }
    })
    .catch(err => {
      console.log('valami baj van a login');
    })
})

function changeLogIn(name) {
  let field = document.querySelector('#userField');
  field.removeChild(field.childNodes[1]);
  let welcome = document.createElement('div');
  let logOutButton = document.createElement('button');
  let user = document.createElement('h3');
  let link = document.createElement('a');

  link.setAttribute('href', 'http://localhost:3000/');
  logOutButton.innerHTML = 'Log out';

  logOutButton.addEventListener('click', () => {

    let data = window.localStorage.getItem('id');
    fetch('http://localhost:3000/posts/logout', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ user: data })
    })
      .then(localStorage.removeItem('user'))
      .then(localStorage.removeItem('id'))
      .catch(err => {
        console.log('valami baj van a domnál');
      })

  })
  link.appendChild(logOutButton)
  user.innerHTML = `Hello ${name}!!!`;
  welcome.setAttribute('id', 'welcome');
  welcome.appendChild(user);
  welcome.appendChild(link);
  field.appendChild(welcome);
}
