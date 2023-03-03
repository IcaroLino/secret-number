const lowestValue = 1 ;
const highestValue = 300;
const secretNumber = generateRandomNumber();

function generateRandomNumber() {
  return Math.floor(Math.random() * (highestValue + 1));
}

document.querySelector('#lowest-value').innerHTML = lowestValue;
document.querySelector('#highest-value').innerHTML = highestValue;
