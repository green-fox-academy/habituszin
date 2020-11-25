'use strict';

// Boilerplate
const canvas = document.querySelector('.main-canvas');
const ctx = canvas.getContext('2d');

let steps = 5;

function makeStair(num) {
  ctx.fillStyle = 'purple';
  let x = 0;
  let y = 0;
  for (let i = 0; i < num; i++) {
    ctx.fillRect(x, y, i * 20, i * 20)
    x += (i *20);
    y += (i *20);
  }
}

makeStair(steps)