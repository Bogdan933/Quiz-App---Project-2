const question = document.querySelector('#question');
const choices = Array.from(document.querySelectorAll('.choice-text'));
const progressText = document.querySelector('#progressText');
const scoreText = document.querySelector('#score');
const progressBarFull = document.querySelector('#progressbarfull');

let currentQuestion = {}
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

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
    getNewQuestion()
}
/*Keeping track of score */
getNewQUestion = () => {
    if (availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS){
        localStorage.setItem('mostRecentScore', score);

        return window.location.assign('/end.html');
    }
    /* Incrementing by 1 each question */
    questionCounter++
    progressText.innerText = `Question ${questionCounter} of ${MAX_QUESTIONS}`
    /* Calculating what question we are on and corespending that with the percentage we are on */ 
    progressBarFull.style.width = `${(questionCounter/MAX_QUESTIONS) * 100}%`;
    /* Calculating the value of the questionsIndex, and keeping track what question we are on */
    const questionsIndex = Math.floor(Math.random() * availableQuestions.length)
    currentQuestion = availableQuestions[questionsIndex]
    question.innerText = currentQuestion.question
}