'use strict';
let container = document.querySelector('.container');
let button = document.querySelector('button');

button.addEventListener('click', () => {
  fetch('https://api.chucknorris.io/jokes/random', {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  })
    .then(response => {
      if (response.status !== 200) {
        throw new Error('nincs valasz')
      }
      return response;
    })
    .then(response => response.json())
    .then(responseObjecttoJson => {
      let newElement = document.createElement('h3');
      newElement.innerHTML = responseObjecttoJson.value;
      container.appendChild(newElement);
    })
    .catch(err => {
      console.log('valami baj van');
    })
})
