const question = document.querySelector('#question');
const choices = Array.from(document.querySelectorAll('.choice-text'));
const progressText = document.querySelector('#progressText');
const scoreText = document.querySelector('#score');
const progressBarFull = document.querySelector('#progressBarFull');

/*Declaring variebls*/

let currentQuestion = {};
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];
/*Declaring questions variable*/
let questions = [{
    question: 'What is 30 + 40?',
    choice1: '10',
    choice2: '100',
    choice3: '55',
    choice4: '70',
    answer: 4,
}, {
    question: "What is the smallest country in the world?",
    choice1: "The Vatican",
    choice2: "Aruba",
    choice3: "Monaco",
    choice4: "France",
    answer: 1,
}, {
    question: "The famous line 'Who you gonna call' is from what movie?",
    choice1: "Rambo",
    choice2: "Ghost Busters",
    choice3: "Terminator",
    choice4: "Police Academy",
    answer: 2,
}, {
    question: "The four leaf clover represents what?",
    choice1: "Eternal Love",
    choice2: "Power",
    choice3: "Bad Omen",
    choice4: "Luck",
    answer: 4,
}, {
    question: "What is the biggest organ in the body",
    choice1: "Head",
    choice2: "Skin",
    choice3: "Leg",
    choice4: "Stomach",
    answer: 2,
}, {
    question: "How long is an Olympic swimming pool?",
    choice1: "50m",
    choice2: "45m",
    choice3: "60m",
    choice4: "75m",
    answer: 1,
}, {
    question: "In witch language does 'konnichiwa' mean 'hello'?",
    choice1: "Thai",
    choice2: "Japanese",
    choice3: "Cantonese",
    choice4: "Chinese",
    answer: 2,
}, {
    question: "What is an 'Integer'?",
    choice1: "A whole number",
    choice2: "Half a number",
    choice3: "Python syntax",
    choice4: "JavaScript function",
    answer: 1,
}, {
    question: "How many oceans are on Earth?",
    choice1: "2",
    choice2: "7",
    choice3: "5",
    choice4: "9",
    answer: 3,
}, {
    question: "What does GDP stand for?",
    choice1: "Good day people",
    choice2: "Gross domestic product",
    choice3: "Giga Dictatorship Party",
    choice4: "Good day pal",
    answer: 2,
}];

/*Declaring points per 'right' answer*/
const SCORE_POINTS = 100;

/*Declaring questions limit*/
const MAX_QUESTIONS = 10;

/* Short comand syntax for the startGame function
    Setting start of game variables */

 const startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions];
    getNewQuestion();
};
/*Keeping track of score */
const getNewQuestion = () => {
    if (availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {
        localStorage.setItem('mostRecentScore', score);

        return window.location.assign('endgame.html');
    }

    /* Incrementing by 1 each question */
    /* Calculating what question we are on to display 1/4,2/4, etc */
    questionCounter++;
    progressText.innerText = `Question ${questionCounter} of ${MAX_QUESTIONS}`;
    
    progressBarFull.style.width = `${(questionCounter/MAX_QUESTIONS) * 100}%`;
    /* Calculating the value of the questionsIndex*/
    
    /*Calculating the value of the question index*/
    const questionsIndex = Math.floor(Math.random() * availableQuestions.length);
    
    /*Keeping track of what question we are on */
    currentQuestion = availableQuestions[questionsIndex];
    question.innerText = currentQuestion.question;
    
    /*set new const for data-number so we know what choices we are clicking on*/
    choices.forEach(choice => {
        const number = choice.dataset['number'];
        choice.innerText = currentQuestion['choice' + number];
    });
    availableQuestions.splice(questionsIndex, 1);
    acceptingAnswers = true;
};
/*adding click event listener for points and increment by 100 points for correct answer*/
choices.forEach(choice => {
    choice.addEventListener('click', e => {
        if (!acceptingAnswers) return;
        acceptingAnswers = false;
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset['number'];
        /*If statement for correct or inccorect answer*/
        let classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect';

        if (classToApply === 'correct') {
            incrementScore(SCORE_POINTS);
        }
        selectedChoice.parentElement.classList.add(classToApply);
        /* everytime we are clicking right or wrong */
        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply);
            /*will get us the next question*/
            getNewQuestion();
        }, 1000);
    });
});
/*incrementing score*/
const incrementScore = num => {
    score += num;
    scoreText.innerText = score;
};
startGame();