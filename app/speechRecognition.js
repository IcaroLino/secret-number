const guessElement = document.querySelector('#guess');
const SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.lang = 'pt-br';
recognition.start();

recognition.addEventListener('result', onSpeak);

function onSpeak(event) {
  const guess = event.results[0][0].transcript;
  showGuess(guess);
  checkGuess(guess);
}

function showGuess(guess) {
  guessElement.innerHTML = `
      <div>Você disse:</div>
      <span class="box">${guess}</span>
    ` 
}

recognition.addEventListener('end', () => recognition.start());