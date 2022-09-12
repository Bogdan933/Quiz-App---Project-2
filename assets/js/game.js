const question = document.querySelector('#question');
const choices = Array.from(document.querySelectorAll('.choice-text'));
const progressText = document.querySelector('#progressText');
const scoreText = document.querySelector('#score');
const progressBarFull = document.querySelector('#progressbarfull');

let currentQuestion = {}
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQUestions = [];

let Questions = [
    {
        question: 'What is 30 + 40?',
        choice1: '10',
        choice2: '100',
        choice3: '55',
        choice4: '70',
        answer: 70,
    }
]