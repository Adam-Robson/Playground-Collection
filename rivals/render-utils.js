export function renderRivals(rival) {
  const rivalEl = document.createElement('div');
  const faceEl = document.createElement('p');
  const nameEl = document.createElement('p');
  const powerEl = document.createElement('p');

  rivalEl.classList.add('rival');

  nameEl.textContent = rival.name;
  powerEl.textContent = rival.power < 0 ? 0 : rival.power;

  faceEl.textContent = rival.power > 0 ? '👾' : '🧚';

  if (rival.power < 0) {
    rivalEl.classList.add('dead');
  }

  rivalEl.append(nameEl, faceEl, powerEl);

  return rivalEl;
}
