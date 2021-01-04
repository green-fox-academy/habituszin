'use strict';

// Create a function that takes a number
// divides ten with it,
// and prints the result.
// It should print 'fail' if the parameter is 0

let choosenNumber: number = 0;

try {
  function divideTen(num): void{
    console.log(10 / num);    
  }

  divideTen(choosenNumber)
  
} catch (e) {
  console.log('fail');
}