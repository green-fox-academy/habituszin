'use strict'

const fs = require('fs');
try {
  let fileContent = fs.readFileSync('myfile.txt', 'utf-8');
  console.log(fileContent);
  
} catch (error) {
  console.log('Unable to read file: my-file.txt');
  
}