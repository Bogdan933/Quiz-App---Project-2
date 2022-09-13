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
        answer: 4,
    },
    {
        question: "What is the smallest country in the world?",
        choice1: "The vatican",
        choice2: "Aruba",
        choice3: "Monaco",
        choice4: "France",
        answer: 1,
    },
    {
        question: "The famous line 'Who you gonna call' is from what movie?",
        choice1: "Rambo",
        choice2: "Ghost Busters",
        choice3: "Terminator",
        choice4: "Police Academy",
        answer: 2,
    },
    {
        question: "The four leaf clover represents what?",
        choice1: "Eternal Love",
        choice2: "Power",
        choice3: "Bad Omen",
        choice4: "Luck",
        answer: 4,
    }
]

const SCORE_POINTS = 100;
const MAX_QUESTIONS = 4; 

/* short comand syntax for the startGame function */
startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions];
    getNewQUestion()
}
