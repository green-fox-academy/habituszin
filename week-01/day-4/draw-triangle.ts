'use strict';

let lineCount: number = 4;

// Write a program that draws a triangle like this:
//
// *
// **
// ***
// ****
//
// The triangle should have as many lines as lineCount is
let starsLine: string = '';
let star: string = '*';
for (let i = 0; i < lineCount; i++) {
    starsLine += star;
    console.log(starsLine);
    
}