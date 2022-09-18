# Quiz Game

This quiz game is made to awaken curiosity on a wide degree of topics from mathematical questions to geography or movie knowledge, and with time it will grow, with more difficult questions and in the future be able to choose difficulty.

Game is designed for everybody curious no matter the types of questions. The goal of the quiz is to make the player engaged with the different  topics and hopefully with the highscore list the player will try several times to beat his/her own score. 


![Responsive Mockup](https://i.imgur.com/zIOwlmX.png)

## Features 

In this section, you should go over the different parts of your project, and describe each in a sentence or so. You will need to explain what value each of the features provides for the user, focusing on who this website is for, what it is that they want to achieve and how your project is the best way to help them achieve these things.

### Existing Features

- __Navigation Bar__

  - Play button that initiates the start of the quiz.
  - HighScore button provies the user with a history of scores from other users or an user who played several times. 

![Nav Bar](https://i.imgur.com/MJkkXDM.png)

- __The landing page image__

  - This section introduces the user to the question's with soothing colours to grab their attention on the questions from the start.
  
  - User is presented with information on what question they are on and an progress bar indicating the stages of the quiz.

![Landing Page](https://i.imgur.com/e5Q3PEH.png)

- __The end game page__

  - User is shown his score at the top of the page and is asked to enter name for saving score.
  - User is able to either play again or go home and access the highscore  tab.

![Endgame Page](https://i.imgur.com/V13Q6Kq.png)


-__HighScores and Leaderboards__

  - After name is saved the player is presented with a ranking list of previous highscored, where the highest points are at the top.

  ![Highscore-Leaderboards](https://i.imgur.com/ZbPquiv.png)

For some/all of your features, you may choose to reference the specific project files that implement them.

In addition, you may also use this section to discuss plans for additional features to be implemented in the future:

### Features Left to Implement

- Several question added.
- Longer highscore save list.
- Highscore button on endgame page.
- Automatic highscore list display after game ends
- Show correct answer when wrong then go next question.
- Different difficulties of questions categorised by difficulty.

## Testing and Fixed Bugs
1.
- When trying to target the 4 questions buttons to make them visible the element is not responsive.

- <strong>Fixed:</strong>Noticed error in file path to javascript inside the game.html file, aswell as the script src path on line 51 inside game.html
- Changed from src="style.css" to src="assets/css/style.css"
It didn't fix the targeting bug.
- Update: Issue fixed, spelling misstake on the file paths.
![Bug1](https://i.imgur.com/bODTodv.png)
2.
- Trying to make the question button smaller but it does not target.
![Bug2](https://i.imgur.com/yNKkE9F.png)

3.
- Opening the preview inside Gitpod browser shows the updated questions and score.
![bug5](https://i.imgur.com/uwcg0Ye.png)
- But when trying to open in another browser, the working changes dont apply and get the following display.
![Bug5](https://i.imgur.com/I0gmSOc.png)
If this section grows too long, you may want to split it off into a separate file and link to it from here.


### Validator Testing 

- HTML
  - No errors were returned when passing through the official [W3C validator](https://validator.w3.org/nu/?doc=https%3A%2F%2Fcode-institute-org.github.io%2Flove-running-2.0%2Findex.html)
- CSS
  - No errors were found when passing through the official [(Jigsaw) validator](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fvalidator.w3.org%2Fnu%2F%3Fdoc%3Dhttps%253A%252F%252Fcode-institute-org.github.io%252Flove-running-2.0%252Findex.html&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en#css)
- JS
  - 

### Unfixed Bugs

You will need to mention unfixed bugs and why they were not fixed. This section should include shortcomings of the frameworks or technologies used. Although time can be a big variable to consider, paucity of time and difficulty understanding implementation is not a valid reason to leave bugs unfixed. 

## Deployment

This section should describe the process you went through to deploy the project to a hosting platform (e.g. GitHub) 

- The site was deployed to GitHub pages. The steps to deploy are as follows: 
  - In the GitHub repository, navigate to the Settings tab 
  - From the source section drop-down menu, select the Master/Main Branch
  - Once the right branch has been selected, the page will be automatically refreshed with a detailed ribbon display to indicate the successful deployment. 

The live link can be found here - https://bogdan933.github.io/Quiz-App---Project-2/ 


## Credits 

In this section you need to reference where you got your content, media and extra help from. It is common practice to use code from other repositories and tutorials, however, it is important to be very specific about these sources to avoid plagiarism. 

You can break the credits section up into Content and Media, depending on what you have included in your project. 

### Content 

- The text for the Home page was taken from Wikipedia Article A
- Instructions on how to implement form validation on the Sign Up page was taken from [Specific YouTube Tutorial](https://www.youtube.com/)
- The icons in the footer were taken from [Font Awesome](https://fontawesome.com/)

### Media

- No media was used for the app.

 

