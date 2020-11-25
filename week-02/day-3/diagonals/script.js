'use strict';

// Boilerplate
const canvas = document.querySelector('.main-canvas');
const ctx = canvas.getContext('2d');

 for (let i = 0; i < 1000; i += 50) {
  ctx.strokeStyle = 'red';
  ctx.beginPath();
  ctx.moveTo(i, 0);
  ctx.lineTo(0, i);
  ctx.stroke();
} 

 for (let i = 0; i < 1000; i += 50) {
  ctx.strokeStyle = 'green';
  ctx.beginPath();
  ctx.moveTo(0, 400 - i);
  ctx.lineTo(i, 400);
  ctx.stroke();
} 