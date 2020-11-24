'use strict';

let shoppingList: string[] = ['eggs', 'milk', 'fish', 'apples', 'bread', 'chicken'];

function checkList(something: string): string {
  if (shoppingList.includes(something) == true) {
    console.log('Yes, we have ' + something);
  } else {
    console.log('No, we haven\'t got ' + something);
  }
  return
};

checkList('milk');
checkList('banana');
