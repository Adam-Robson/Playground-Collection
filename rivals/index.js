import { renderRivals } from './render-utils.js';

const rivalsEl = document.querySelector('.rivals-number');
const playerPower = document.getElementById('player-power');
const playerImage = document.getElementById('player-image');
const moreButton = document.getElementById('more-button');
const rivals = document.getElementById('rivals');
const rivalNameInput = document.getElementById('rival-name-input');

const playerNameInput = document.getElementById('player-name-input');
const playerName = document.getElementById('player-name');
const charButton = document.getElementById('char-button');

charButton.addEventListener('click', () => {
  let playerInputName = playerNameInput.value;
  playerName.textContent = playerInputName;
  playerNameInput.value = '';
});

let rivalsTotalCount = 0;
let playerPowerCount = 10;
let rivalsObjectsList = [
  { name: 'kiki', power: 7 },
  { name: 'si', power: 7 },
];

moreButton.addEventListener('click', () => {
  const rivalName = rivalNameInput.value;
  const newRival = {
    name: rivalName,
    power: 7,
  };
  newRival.textContent = rivalName;
  rivalsObjectsList.push(newRival);
  rivalNameInput.value = '';
  displayRivals();
});

function displayRivals() {
  rivals.textContent = '';

  for (let rival of rivalsObjectsList) {
    const rivalEl = renderRivals(rival);

    if (rival.power > 0) {
      rivalEl.addEventListener('click', () => {
        const battleNum = Math.random();
        if (battleNum < .5) {
          rival.power--;
          alert('You hit ' + rival.name);
        } else {
          alert('you tried to hit ' + rival.name + ' and missed!');
        }

        if (battleNum < .75) {
          playerPowerCount--;
          alert(rival.name + ' hit you!');
        } else if (battleNum > .75) {
          alert(rival.name + ' tried to hit you and missed!');
        }

        if (rival.power === 0) {
          rivalsTotalCount++;
        }

        if (playerPowerCount <= 0) {
          playerImage.classList.add('game-over');
          alert('GAME-OVER!');
        }

        playerPower.textContent = playerPowerCount;
        rivalsEl.textContent = rivalsTotalCount;
        displayRivals();
      });

    }
    rivals.append(rivalEl);
  }
}

displayRivals();
