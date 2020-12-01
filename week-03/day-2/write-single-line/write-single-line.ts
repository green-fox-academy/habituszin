'use strict';

// Write a function that is able to manipulate a file
// By writing your name into it as a single line
// The file should be named "my-file.txt"
// In case the program is unable to write the file,
// It should print the following error message: "Unable to write file: my-file.txt"

const fs = require('fs');
let myName: string = 'Novák Márk';
let writeableFile: string = 'my-file.txt';

try {
  function writeInFile(file: string, name: string): void {
    fs.writeFileSync(file, name);
  };
  writeInFile(writeableFile, myName);
  
} catch (error) {
  console.log('Unable to write file: my-file.txt');
  
}
