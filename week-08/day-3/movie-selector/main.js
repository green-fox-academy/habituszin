'use strict';

let categories = ['Sci-Fi', 'Drama', 'Comedy']

let movies = [
  {
    class: ['Drama', 'Sci-Fi'],
    name: 'Moon'
  },
  {
    class: ['Sci-Fi'],
    name: '2001: A Space Odyssey'
  },
  {
    class: ['Drama', 'Sci-Fi'],
    name: 'Contact'
  },
  {
    class: ['Drama'],
    name: 'Darkest Hour'
  },
  {
    class: ['Drama'],
    name: 'There Will Be Blood'
  },
  {
    class: ['Drama'],
    name: 'American Beauty'
  },
  {
    class: ['Comedy'],
    name: 'Airplane!'
  },
  {
    class: ['Comedy'],
    name: 'Deadpool'
  },
  {
    class: ['Comedy'],
    name: `Wayne's World`
  },
];

let catDropList = document.querySelector('#cat');
let moivesDropList = document.querySelector('#movie');

window.addEventListener('load', () => {
  for (let i = 0; i < categories.length; i++) {
    let line = document.createElement('option');
    line.value = categories[i];
    line.innerHTML = categories[i];
    catDropList.appendChild(line);
  }
});

catDropList.addEventListener('focus', () => {
  for (let i = 0; i < moivesDropList.length; i++) {
    if (i > 0) {
      moivesDropList.removeChild(moivesDropList.childNodes[3])
    }   
  }
})

catDropList.addEventListener('blur', () => {
  for (let i = 0; i < movies.length; i++) {
    if (movies[i].class.includes(catDropList.value)) {
      let line = document.createElement('option');
      line.innerHTML = movies[i].name;
      moivesDropList.appendChild(line);
    }
  }
})