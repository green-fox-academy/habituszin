'use strict';

// Read all data from 'log.txt'.
// Each line represents a log message from a web server
// Write a function that returns an array with the unique IP adresses.
// Write a function that returns the GET / POST request ratio.

const fs = require('fs');

function returnUniqueIpAdress(source: string): void {

  let fileContent: string [] = fs.readFileSync(source).toString().split('\n')
  let separatedFileContent: string[] = [];
  for (let i: number = 0; i < fileContent.length; i++) {
    separatedFileContent = fileContent[i].split(' ')
    
  }
  console.log(separatedFileContent);
  
}
returnUniqueIpAdress('logs.txt')