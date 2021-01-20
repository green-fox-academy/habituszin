'use strict'

let state = false;

let eye = document.querySelector('#eye');
let passwordField = document.querySelector('#password-field');

eye.addEventListener('click', (event) => {
  if (state) {
    passwordField.setAttribute('type', 'password');
    state = false;
    eye.style.color = 'grey';
  } else {
    passwordField.setAttribute('type', 'text');
    eye.style.color = 'black';
    state = true;
  }
})