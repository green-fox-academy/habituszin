'use strict';

let form = document.querySelector('form');
let firstFieldset = form.children['first'];
let secondFieldset = form.children['second'];
let signInButton = document.querySelector('#sign');
let loveCatsButton = document.querySelector('#love')

function valami() {
  alert(`Sigh, we still added you to the cat facts list`);
};

form.addEventListener('change', () => {
  if (firstFieldset.children['cat'].checked || firstFieldset.children['dog'].checked) {
    signInButton.disabled = false;
  } else {
    signInButton.disabled = true;
  }
  if (secondFieldset.children['yes'].checked) {
    loveCatsButton.disabled = false;
  } else {
    loveCatsButton.disabled = true;
  }
  if (firstFieldset.children['viktor'].checked && secondFieldset.children['no'].checked) {
    signInButton.disabled = false;
    signInButton.addEventListener('click', valami)
  } else {
    signInButton.removeEventListener('click', valami);
  }
})

loveCatsButton.addEventListener('click', () => {
  alert(`Thank you, you've successfully signed up for cat facts`)
})
