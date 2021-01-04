'use strict'

// Write a function that takes a filename as string,
// then returns the number of lines the file contains.
// It should return zero if it can't open the file, and
// should not raise any error.
const fs = require('fs');
let source: string = 'myFile.txt';

try {
  function getNumberOfLines(file: string): void {
    let numberOfLines = fs.readFileSync(file, 'utf-8').toString().split('\n').length;
    console.log(numberOfLines); 
  }
  
  getNumberOfLines(source);
  
} catch (error) {
  console.log(0);
  
}