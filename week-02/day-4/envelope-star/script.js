'use strict';

// Boilerplate
const canvas = document.querySelector('.main-canvas');
const ctx = canvas.getContext('2d');


function drawStar(lines) {
  let y = 0;
  let x = 300;
  for (let i = 0; i <= 300; i+= (600 / lines)) {
    y += (400 / lines);
    ctx.beginPath();
    ctx.moveTo(i, 200);
    ctx.lineTo(300, 200 - y);
    ctx.moveTo(i, 200);
    ctx.lineTo(300, 200 + y);
    ctx.stroke();   
  }
  y = 0;
  for (let i = 300 + (600 / lines); i <= 600; i+= (600 / lines)) {
    ctx.beginPath();
    ctx.moveTo(i, 200);
    ctx.lineTo(300, y);
    ctx.moveTo(i, 200);
    ctx.lineTo(300, 400 - y);
    ctx.stroke();   
    y += (400 / lines);
  }
}

drawStar(16)