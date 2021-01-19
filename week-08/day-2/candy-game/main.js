'use strict';

// - Gather 10.000 candies!
// - Clicking the ‘Create candies’ button gives you 1 candy.
// - You can buy a lollipop for 100 candies by clicking the ‘Buy lollipop’ button.
// - 10 lollipops generate 1 candy per second.
//   - Use the 🍭 emoji to display the lollipops you have
// - Display the candy producton rate in the `Candies / Second` row
// - If you press the "make candy rain" button, the candy generation should speed up 10x

let candyCounter = document.querySelector('.candies');
let candyNumber = 0;
let crateCandiesButton = document.querySelector('.create-candies');
let lollypopPresenter = document.querySelector('.lollypops');
let buyLollypopButton = document.querySelector('.buy-lollypops');
let lollypopNumber = 20;
let candySpeed = document.querySelector('.speed');
let rain = document.querySelector('.candy-machine');
let candysPerSecond;

crateCandiesButton.addEventListener('click', (event) => {
  candyNumber++;
  candyCounter.innerHTML = candyNumber;
})

buyLollypopButton.addEventListener('click', (event) => {
  if (candyNumber >= 100) {
    candyNumber -= 100;
    lollypopNumber++;
    lollypopPresenter.innerHTML += '🍭';
  } else {
    return
  }
})

window.addEventListener('load', (event) => {
  setInterval(() => {
    candyNumber += Math.floor(lollypopNumber / 10);
    candyCounter.innerHTML = candyNumber;
  }, 1000)
})

window.addEventListener('load', (event) => {
  let prevNumber;
  let nextNumber;
  setInterval(() => {
    prevNumber = candyNumber;
    setInterval(() => {
      nextNumber = candyNumber;
    }, 1000)
    candysPerSecond = prevNumber - nextNumber;
    candySpeed.innerHTML = candysPerSecond;
  }, 1000)
})

rain.addEventListener('click', () => {
  lollypopNumber *= 10;
})