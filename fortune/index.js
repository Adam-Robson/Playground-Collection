// import functions and grab DOM elements
const showQuestion = document.getElementById('show-question');
const answer = document.getElementById('answer');
const inputContainer = document.getElementById('input-container');
const question = document.getElementById('question');
const questionBtn = document.getElementById('question-btn');
const secondQuestionBtn = document.getElementById('second-question-btn');

const answers = [
  'Your unique abilities will be recognized, leading to exciting opportunities and recognition.',
  'Your creative talents are about to take center stage.',
  'Trust in yourself and the universe.',
  'The path ahead is filled with great opportunities.',
  'Your determination and hard work will lead you to success.',
  'In matters of the heart, I see a deep connection with someone you\'ve recently met.',
  'Nurture this bond with care, and it has the potential to blossom into a beautiful and lasting relationship.',
  'Keep your mind open and be prepared for unexpected turns.',
  'A major change is on the horizon for you.',
  'Embrace it with courage and optimism, for it will pave the way for personal growth and transformation.',
  'Be cautious of a potential financial setback in the near future.',
  'Take proactive steps to secure your resources and seek advice from a trusted advisor.',
  'With careful planning, you can overcome this obstacle.',
  'Express yourself freely and fearlessly.'
];

questionBtn.addEventListener('click', () => {
  if (question.value !== '' || undefined) {
    duplicate();
    showRandomAnswer();
    toggleVis();
  }
});

secondQuestionBtn.addEventListener('click', () => {
  toggleVisibility();
});

function duplicate() {
  const ask = `you asked: ${question.value}`;
  showQuestion.textContent = ask;
  question.value = '';
  secondQuestionBtn.classList.remove('hidden');
}

function showRandomAnswer() {
  const randomAnswer = getRandomItem(answers);
  answer.textContent = randomAnswer;
}

function getRandomItem(answers) {
  const randomIndex = Math.floor(Math.random() * answers.length);
  const item = answers[randomIndex];
  return item;
}

function toggleVis() {
  inputContainer.classList.add('hidden');
  secondQuestionBtn.classList.remove('hidden');
  answer.classList.remove('hidden');
  showQuestion.classList.remove('hidden');
}

function toggleVisibility() {
  answer.classList.add('hidden');
  showQuestion.classList.add('hidden');
  inputContainer.classList.remove('hidden');
  question.textContent = '';
  secondQuestionBtn.classList.add('hidden');
}
