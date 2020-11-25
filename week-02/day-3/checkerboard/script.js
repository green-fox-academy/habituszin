'use strict';

// Boilerplate
const canvas = document.querySelector('.main-canvas');
const ctx = canvas.getContext('2d');

for (let i = 0; i < 600; i += 20) {
  for (let j = 0; j < 400; j+= 20) {
    ctx.strokeRect(i,j,20,20)    
  }
}