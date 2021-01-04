'use strict';

// Write a function that copies the contents of a file into another
// It should take the filenames as parameters
// It should return a boolean that shows if the copy was successful

const fs = require('fs');

try {
  function copyFileContent(start: string, finish: string): void {
    fs.copyFileSync(start, finish)
    console.log(true);
    
  }
  copyFileContent('original.txt', 'copy.txt');
} catch (error) {
  console.log(false);
  
}

