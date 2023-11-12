// IMPORT DOM ELS
const buttonOne = document.getElementById('button-one');
const buttonTwo = document.getElementById('button-two');
const buttonThree = document.getElementById('button-three');
const cupOneEl = document.getElementById('cup-one');
const cupTwoEl = document.getElementById('cup-two');
const cupThreeEl = document.getElementById('cup-three');
const resetButtonEl = document.getElementById('reset-button');
const startOverBtn = document.getElementById('start-over');
let correctGuesses = document.getElementById('correct-guesses');
let totalGuesses = document.getElementById('total-guesses');
let incorrectGuesses = document.getElementById('incorrect-guesses');

// STATE
const cupImages = [cupOneEl, cupTwoEl, cupThreeEl];

let correctGuess = 0;
let incorrectGuess = 0;
let totalGuess = 0;

// EVENT LISTENERS
buttonOne.addEventListener('click', () => {
  handleGuess(0, getRandomItem());
}),

buttonTwo.addEventListener('click', () => {
  handleGuess(1, getRandomItem());
}),

buttonThree.addEventListener('click', () => {
  handleGuess(2, getRandomItem());
}),

resetButtonEl.addEventListener('click', () => {
  cupOneEl.src = '../assets/graycup.png';
  cupTwoEl.src = '../assets/graycup.png';
  cupThreeEl.src = '../assets/graycup.png';
  enableCupButtons();
});

startOverBtn.addEventListener('click', () => {
  correctGuess = 0;
  incorrectGuess = 0;
  totalGuess = 0;
  cupOneEl.src = '../assets/graycup.png';
  cupTwoEl.src = '../assets/graycup.png';
  cupThreeEl.src = '../assets/graycup.png';
  enableCupButtons();
  correctGuesses.textContent = 0;
  incorrectGuesses.textContent = 0;
  totalGuesses.textContent = 0;
});

// FUNCTIONS

function resetCups() {
  cupOneEl.src = '../assets/graycup.png';
  cupTwoEl.src = '../assets/graycup.png';
  cupThreeEl.src = '../assets/graycup.png';
}

function getRandomItem() {
  const correctSpot = Math.floor(Math.random() * 3);
  return correctSpot;
}

function handleGuess(userGuess, correctSpot) {
  // resets the style
  resetCups();
  getRandomItem();
  if (userGuess === correctSpot) {
    correctGuess++;
    totalGuess++;
    correctGuesses.textContent = correctGuess;
    totalGuesses.textContent = totalGuess;
    incorrectGuesses.textContent = incorrectGuess;
  } else {
    incorrectGuess++;
    totalGuess++;
    correctGuesses.textContent = correctGuess;
    incorrectGuesses.textContent = incorrectGuess;
    totalGuesses.textContent = totalGuess;
  }
  cupImages[correctSpot].src = '../assets/graycupguy.png';
  disableCupButtons();
}



function disableCupButtons() {
  buttonOne.disabled = true;
  buttonTwo.disabled = true;
  buttonThree.disabled = true;
}

function enableCupButtons() {
  buttonOne.disabled = false;
  buttonTwo.disabled = false;
  buttonThree.disabled = false;
}
