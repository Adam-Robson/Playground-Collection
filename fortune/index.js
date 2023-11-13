const questionInput = document.getElementById('question');
const questionBtn = document.querySelector('.question-btn');
const showQuestion = document.getElementById('show-question');
const answerSection = document.querySelector('.answer-section');
const answer = document.querySelector('.answer');
const resetSection = document.querySelector('.reset-section')
const resetBtn = document.getElementById('reset-btn');
const rotateImage = document.getElementById('rotate-image');

const answers = [
  'i suggest that you do not go for it! instead, look for a hobby in which you find purpose.',
  'because i can not confirm beyond a shadow of a doubt, i will not. try again in an hour!',
  'keep trying every 15 minutes!',
  'i am hungry, come back in 20 minutes',
  'who really knows?',
  'it could come true!',
  'i forsee it taking forever to happen. change your focus.',
  'i dont have an answer for you!',
  'now is not a good time, come back in 50 minutes'
];

questionBtn.addEventListener('click', () => {
  const question = questionInput.value;
  if (!question || question === undefined) {
    questionBtn.disabled = true;
    resetSection.classList.remove('hidden');
    showQuestion.classList.add('error');
    showQuestion.textContent = 'Please enter a question!';
  } else {
    questionBtn.disabled = true;
    showQuestion.classList.remove('error');
    copyQuestion();
    toggleVisibility();
    random();
  }
});

const copyQuestion = () => {
  const question = questionInput.value;
  showQuestion.textContent = `Your question is: "${question}"`;
  questionInput.value = '';
};

const toggleVisibility = () => {
  answerSection.classList.remove('hidden');
  resetSection.classList.remove('hidden');
};

const getRandomAnswer = (arr) => {
  const randomIndex = Math.floor(Math.random() * arr.length);
  const item = arr[randomIndex];
  return item;
};

const random = () => {
  const randomAnswer = getRandomAnswer(answers);
  return answer.textContent = `My answer is: "${randomAnswer}"`;
};

resetBtn.addEventListener('click', () => {
  showQuestion.textContent = '';
  answer.textContent = '';
  questionInput.value = '';
  answerSection.classList.add('hidden');
  resetSection.classList.add('hidden');
  questionBtn.disabled = false;
});

// rotate the image
function rotateYAxis(degrees) {
  rotateImage.style.transform = `rotateY(${degrees}deg)`;
}

let currentRotation = 0;
setInterval(() => {
  currentRotation += 25; // rotation speed
  rotateYAxis(currentRotation);
}, 50);
