function checkGuess(guess) {
  const num = +guess;

  if (isInvalidGuess(num)) return guessElement.innerHTML += '<div>Valor inválido</div>';
  if (isInRange(num)) return guessElement.innerHTML += `<div>Valor inválido: Fale um número entre ${lowestValue} e ${highestValue}</div>`

  if (num === secretNumber) {
    document.body.innerHTML = `
        <h2>Você acertou!</h2>
        <h3>O número secreto era ${secretNumber}</h3>
      `
  } else if (num > secretNumber) {
    guessElement.innerHTML += `
        <div>O número secreto é menor <i class="fa-solid fa-down-long"></i></div>
      `
  } else {
    guessElement.innerHTML += `
        <div>O número secreto é maior <i class="fa-solid fa-up-long"></i></div>
      `
  }
}

function isInvalidGuess(num) {
  return Number.isNaN(num);
}

function isInRange(num) {
  return num > highestValue || num < lowestValue
}
