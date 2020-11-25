'use strict';

// Boilerplate
const canvas = document.querySelector('.main-canvas');
const ctx = canvas.getContext('2d');

ctx.fillRect(0,0,600,400)

for (let i = 0; i < 200; i++) {
  ctx.fillStyle = `rgba(128,128,128,${Math.random()})`
  ctx.fillRect(Math.random() *600, Math.random() *400,5,5)
}