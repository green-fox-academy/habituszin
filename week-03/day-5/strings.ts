'use strict';

function changeXToY(word:string, index:number = word.length){
  if (index == 0) {
    return word;
  }
  return changeXToY(word.replace('x', 'y'), index - 1)
}
console.log(changeXToY('xxx'));
