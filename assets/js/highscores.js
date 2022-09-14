const highScoresList = document.querySelector('#highScoresList');
const highScores = JSON.parse(localStorage.getItem('highscores')) || []

highScoresList.innerHTML = 
/* creating new array*/
highScores.map(score => {
    /* name input at the end of the quiz will fill in*/
    return `<li class="high-score">${score.name} - ${score.score}</li>`
}).join('');