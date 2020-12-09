'use strict';

export class Sum {

  constructor(){
    
  }

  public sumNumberInList(listOfNumbers: number[]): number{
    let sumOfNumbers: number = 0;
    if (listOfNumbers == null) {
      return 0;
    }
    for (let i = 0; i < listOfNumbers.length; i++) {
      sumOfNumbers += listOfNumbers[i];
    }
    return sumOfNumbers;
  }
}