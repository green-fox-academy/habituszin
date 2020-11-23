'use strict'

// -  Create a function called `printParams`
//    which logs to the console the input parameters
//    (can have multiple number of arguments)

let parameters: number[] = [1, 2, 3, 4, 5];
function printParams(num: number[]): void {
  parameters.forEach(function (value) {
    console.log(value);
  });
};

printParams(parameters);