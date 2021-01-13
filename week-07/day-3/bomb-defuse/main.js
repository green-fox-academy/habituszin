'use strict';

let display = document.querySelector('.display');
let button = document.querySelector('button');

function setExploded() {
  display.innerHTML = 'Bomb exploded'; 
};

function setDefused() {
  display.innerHTML = 'Bomb defused';
  clearInterval(myTimer);
};

button.onclick = () => {
  if (display.innerHTML != 'Bomb exploded') {
    setDefused() 
  }
}

let myTimer = setInterval(() => {
  display.innerHTML = Number(display.innerHTML) - 1;
  if (Number(display.innerHTML) <= 0) {
    clearInterval(myTimer);
    setExploded();
  }
}, 1000);