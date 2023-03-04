const lowestValue = 150 ;
const highestValue = 600;
const secretNumber = generateRandomNumber();

function generateRandomNumber() {
  return Math.floor(Math.random() * (highestValue - lowestValue + 1) + lowestValue);
}

document.querySelector('#lowest-value').innerHTML = lowestValue;
document.querySelector('#highest-value').innerHTML = highestValue;
