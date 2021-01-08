'use strict'

let database = [
  {
    name: 'Atlantic',
    url: 'img/atlantic.jpg',
    title: 'Neon híredetőtábla',
  },
  {
    name: 'Building',
    url: 'img/building.jpg',
    title: 'Osd dsfjdjf dffoeefmv daokvmlsdm okf sd',
  },
  {
    name: 'Coconut',
    url: 'img/coconut.jpg',
    title: 'WEsd dsf dsaf gdfg rehfsgjkj fdgfhrh ghg fj dgrhhss',
  },
  {
    name: 'Coffe',
    url: 'img/coffe.jpg',
    title: 'Odslafklda flkdagf kdahfkdskl fdklsfruhuifhadk kladsnfm adaf',
  },
  {
    name: 'Cows',
    url: 'img/cows.jpg',
    title: 'Pfpsd dsf fg gfj dfa df dfjiocvj cvdsafkldhasj fkj',
  },
  {
    name: 'Light tower',
    url: 'img/light-tower.jpg',
    title: 'Uadsf dv djvijri dad s fdsjfkdv ',
  },
  {
    name: 'Nature',
    url: 'img/nature.jpg',
    title: 'Gdsaf dfg fsh gf hzjhkhgfh fhgh ghf gfh t hf',
  },
  {
    name: 'Train',
    url: 'img/train.jpg',
    title: 'Mfads dsf fweio dksnc kldsfojdsklmdkln dsafdaf',
  },
];

let choosenPictureId = 0;

let middleImage = document.getElementById('middleImage');
let imgName = document.getElementById('name');
let imgText = document.getElementById('text');


function setImage() {
  middleImage.setAttribute('src', database[choosenPictureId].url);
  imgName.innerHTML = database[choosenPictureId].name;
  imgText.innerHTML = database[choosenPictureId].title;
};

setImage();

let leftButton = document.getElementById('leftButton');
let rightButton = document.getElementById('rightButton');

leftButton.onclick = () => {
  choosenPictureId--;
  if (choosenPictureId < 0) {
    choosenPictureId = database.length - 1;
  }
  middleImage.setAttribute('src', database[choosenPictureId].url);
  setImage();
};

rightButton.onclick = () => {
  choosenPictureId++;
  if (choosenPictureId > database.length - 1) {
    choosenPictureId = 0;
  }
  middleImage.setAttribute('src', database[choosenPictureId].url);
  setImage();
};

let miniImages = document.getElementById('miniImages');

for (let i = 0; i < database.length; i++) {
  let miniImage = document.createElement('img');
  miniImage.setAttribute('src', database[i].url);
  miniImage.setAttribute('class', 'miniImg');
  miniImages.appendChild(miniImage);
  
}