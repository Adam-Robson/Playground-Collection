// import functions and grab DOM elements
const cupOne = document.getElementById('cup-one');
const cupTwo = document.getElementById('cup-two');
const cupThree = document.getElementById('cup-three');

const ball = document.getElementById('ball');

const cupOneBtn = document.getElementById('button-one');
const cupTwoBtn = document.getElementById('button-two');
const cupThreeBtn = document.getElementById('button-three');

const resetBtn = document.getElementById('reset-button');
const correctGuesses = document.getElementById('correct-guesses');
const incorrectGuesses = document.getElementById('incorrect-guesses');
const totalGuesses = document.getElementById('total-guesses');
const startOver = document.getElementById('start-over');

let correct = 0;
let incorrect = 0;
let total = 0;

resetBtn.disabled = true;

const thimbles = [cupOne, cupTwo, cupThree];

cupOneBtn.addEventListener('click', () => {
  handleGuess(0, getRandomItem());
}),

cupTwoBtn.addEventListener('click', () => {
  handleGuess(1, getRandomItem());
}),

cupThreeBtn.addEventListener('click', () => {
  handleGuess(2, getRandomItem());
}),

resetBtn.addEventListener('click', () => {
  cupOne.src = '../assets/thimble.png';
  cupTwo.src = '../assets/thimble.png';
  cupThree.src = '../assets/thimble.png';

  enableCupButtons();
});

startOver.addEventListener('click', () => {
  correct = 0;
  incorrect = 0;
  total = 0;
  cupOne.src = '../assets/thimble.png';
  cupTwo.src = '../assets/thimble.png';
  cupThree.src = '../assets/thimble.png';
  enableCupButtons();
  correctGuesses.textContent = 0;
  incorrectGuesses.textContent = 0;
  totalGuesses.textContent = 0;
});

/* functions */

function resetCups() {
  cupOne.src = '../assets/thimble.png';
  cupTwo.src = '../assets/thimble.png';
  cupThree.src = '../assets/thimble.png';
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
    correct++;
    total++;
    correctGuesses.textContent = correct;
    totalGuesses.textContent = total;
    incorrectGuesses.textContent = incorrect;
  } else {
    incorrect++;
    total++;
    correctGuesses.textContent = correct;
    incorrectGuesses.textContent = incorrect;
    totalGuesses.textContent = total;
  }
  thimbles[correctSpot].src = '../assets/thimble_tipped.png';
  disableCupButtons();
}

function disableCupButtons() {
  cupOneBtn.disabled = true;
  cupTwoBtn.disabled = true;
  cupThreeBtn.disabled = true;
  resetBtn.disabled = false;
  startOver.disabled = false;
}

function enableCupButtons() {
  cupOneBtn.disabled = false;
  cupTwoBtn.disabled = false;
  cupThreeBtn.disabled = false;
  resetBtn.disabled = true;
  startOver.disabled = true;
}
