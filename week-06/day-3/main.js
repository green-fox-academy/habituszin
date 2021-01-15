let list = ['bread', 'milk', 'orange', 'tomato'];
let buttons = ['Up', '>', 'x', 'Down'];
let body = document.querySelector('body');
let pointer = 0;

let rightSide = document.createElement('ul');
rightSide.setAttribute('style', 'list-style-type: none; width : 70px; border : 1px solid black; padding : 0px');
let leftSide = document.createElement('ul');
leftSide.setAttribute('style', 'list-style-type: none; width : 70px; border : 1px solid black; padding : 0px');
let middle = document.createElement('ul');
middle.setAttribute('style', 'list-style-type: none; padding : 0px');

body.setAttribute('style', 'display: flex');

for (let index = 0; index < list.length; index++) {
  let element = document.createElement('li');
  element.innerHTML = list[index];
  leftSide.appendChild(element)
}
for (let i = 0; i < buttons.length; i++) {
  let element = document.createElement('li');
  let button = document.createElement('button');
  button.innerHTML = buttons[i];
  button.setAttribute('style', 'width: 70px')
  element.appendChild(button);
  middle.appendChild(element);
}
body.appendChild(leftSide);
body.appendChild(middle);
body.appendChild(rightSide);

function switchBackground() {
  for (let i = 0; i < leftSide.length; i++) {
    if (pointer == i) {
      leftSide.children[i].setAttribute('style', 'background-color: lightgrey');
    } else {
      leftSide.children[i].setAttribute('style', 'background-color: white');
    }
  } 
}


