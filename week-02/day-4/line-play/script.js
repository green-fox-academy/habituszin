'use strict';

// Boilerplate
const canvas = document.querySelector('.main-canvas');
const ctx = canvas.getContext('2d');

let drawOne = {
  width: 600,
  height: 400,
  lines: 64,
}

function drawLines(object) {
  ctx.strokeStyle = 'green';
  let x = 0;
  let y = 0;
  for (let i = 0; i <= object.width; i += (object.width / object.lines)) {
    x += (object.width / object.lines);
    y += (object.height / object.lines)
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(x, object.height);
    ctx.stroke();
  }
  ctx.strokeStyle = 'blue';
  x = 0;
  y = 0;
  for (let i = 0; i <= object.width; i += (object.width / object.lines)) {
    x += (object.width / object.lines);
    y += (object.height / object.lines)
    ctx.beginPath();
    ctx.moveTo(x, 0);
    ctx.lineTo(object.width, y);
    ctx.stroke();
  }
}

drawLines(drawOne);