'use strict'

//  Create a function that takes a list of numbers as a parameter
//  Returns a list of numbers where every number in the list occurs only once

function unique(arr: number[]): number[] {
  let newArray: number[] = [];
  for (let i: number = 0; i < arr.length; i++) {
    if (newArray.includes(arr[i]) == false) {
      newArray.push(arr[i])   
  }
  }
  return newArray;
}

//  Example
console.log(unique([1, 11, 34, 11, 52, 61, 1, 34]))
//  should print: `[1, 11, 34, 52, 61]`