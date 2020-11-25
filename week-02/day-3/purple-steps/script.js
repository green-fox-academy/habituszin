'use strict';

// Boilerplate
const canvas = document.querySelector('.main-canvas');
const ctx = canvas.getContext('2d');

let steps = 15;

function makeStair(num){
  ctx.fillStyle = 'purple';
  for (let i = 0; i < num; i++) {
    ctx.fillRect(i * 20, i* 20, 20,20)    
  }
}

makeStair(steps)