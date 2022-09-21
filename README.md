# Quiz Game

This quiz game is made to awaken curiosity on a wide degree of topics from mathematical questions to geography or movie knowledge, and with time it will grow, with more difficult questions and in the future be able to choose difficulty.

Game is designed for everybody curious no matter the types of questions. The goal of the quiz is to make the player engaged with the different  topics and hopefully with the highscore list the player will try several times to beat his/her own score. 

## User stories
- The color combination is soothing and fits with everything.
- Leaderboard feature is fun to have.
- Questions were entertaining
- Progress bar is contrast adds to immersion.


# Wireframes 
Since this application was designed with mobile users in focus I will include the frameworks for mobile devices since it better shows the symmetry.
- Main page framework

![Main page](https://i.imgur.com/IJrbN5X.png)

- Questions framework

![Questions](https://i.imgur.com/o4ztuJy.png)

- Saving score framework

![Saving score](https://i.imgur.com/1ftDEYD.png)

- leaderboard framework

![leaderboard](https://i.imgur.com/A7vVjYj.png)

## Responsive Mockup
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


- __HighScores and Leaderboards__

  - After name is saved the player is presented with a ranking list of previous highscored, where the highest points are at the top.

  ![Highscore-Leaderboards](https://i.imgur.com/ZbPquiv.png)

# Color Scheme

![Color Scheme](https://i.imgur.com/YpbifNr.png)
- White was used for the text outside buttons for a sharper contrast again the space cadet blue that is the background color.

- The buttons are made from a gradient viridian green to yellow green crayola for a more relaxing look.

### Features Left to Implement

- Several question added.
- Longer highscore save list.
- Highscore button on endgame page.
- Automatic highscore list display after game ends
- Show correct answer when wrong then go next question.
- Different difficulties of questions categorised by difficulty.

### Testing and fixed Bugs
- The website was tested manually with Google dev tools on the following devices:

- iPhone SE (2nd generation)
- iPhone 11 pro
- iPhone 12/13 pro max
- iPad
- Galaxy S10
- Galaxy S20 Ultra
- Galaxy Note 20


Bug 1.
- When trying to target the 4 questions buttons to make them visible the element is not responsive.

- <strong>Fixed:</strong>Noticed error in file path to javascript inside the game.html file, aswell as the script src path on line 51 inside game.html
- Changed from src="style.css" to src="assets/css/style.css"
It didn't fix the targeting bug.
- Update: Issue fixed, spelling misstake on the file paths.
![Bug1](https://i.imgur.com/bODTodv.png)
<hr>

Bug 2.
- Trying to make the question button smaller but it does not target.
![Bug2](https://i.imgur.com/yNKkE9F.png)

<hr>

Bug 3.
- Opening the preview inside Gitpod browser shows the updated questions and score.
![bug3](https://i.imgur.com/uwcg0Ye.png)
- Ongoing bug when trying to open in another browser, the working changes dont apply and get the the base html text
![Bug3](https://i.imgur.com/I0gmSOc.png)
- Bug was fixed when discovering several spelling mistakes while trouble shooting.

Bug 4.
- I had several issues with deployment, where in every file, there was a forward slash in the file paths to both CSS and javascript files.
And this caused the website not to load anything, only the plain Html text.
It took several attempts to identify since inside the javascript file game.js line 64. There is a return with the allocated path to endgame.html, and that also includes a forward slash /.
After all file paths were thoroughly checked, the website could load everything. This fixed the issue.

### Validator Testing 

- HTML
  - No errors were returned when passing through the official [W3C validator](https://validator.w3.org/nu/?doc=https%3A%2F%2Fcode-institute-org.github.io%2Flove-running-2.0%2Findex.html)
- CSS
  - No errors were found when passing through the official [(Jigsaw) validator](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fvalidator.w3.org%2Fnu%2F%3Fdoc%3Dhttps%253A%252F%252Fcode-institute-org.github.io%252Flove-running-2.0%252Findex.html&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en#css)
- JS
  - No errors were found when passing through the official [Jshint](https://jshint.com/)

### Unfixed Bugs

- After pressing a questions the hover bar is locked on hover when the next questions comes in line. I tried working around the box shadow and the hover:disable after hover is initiated, i cant pin the problem down.

## Deployment

This game was deployed to github pages.

- Open the repository settings.
- Go to "pages" (found under "code and automation").
- Choose which branch to build from. You want to choose "main". Do not forget to save the settings.
- (If needed, choose a custom domain)
- Open the repository in github desktop (I used github desktop. You can do this in git too.)
- Choose to create a local clone (the first time you open your repository in github desktop, there should be a window asking if you want to create a clone)
- Copy the link to your deployed website (which can be found in the github pages settings, where you chose which branch to build from) and make sure it is operating as expected.
- The deployed website will now be updated when you push anything new to the repository.

The live link can be found here - https://bogdan933.github.io/Quiz-App---Project-2/ 


## Credits 

I used several videos and stackoverflow threads for inspirations.
- [Youtube video 1]("https://www.youtube.com/watch?v=utC-8xeEQQA&ab_channel=GeeksforGeeks")
- [Youtube video 2]("https://www.youtube.com/watch?v=wk1Fbqh7Tew&ab_channel=BroCode")
- [Youtube video 3]("https://www.youtube.com/watch?v=nCIjHTlztNg&ab_channel=MikeDane")
- [Stackoverflow]("https://stackoverflow.com/questions/68687270/increment-score-in-a-quiz-game-based-on-selecting-the-right-answers-with-an-obje") inspiration for points increment.
- [Stackoverflow](https://stackoverflow.com/questions/13490002/javascript-loop-in-a-simple-quiz) questions array looping inspiration.
- I also want to credit my class colleagues Mia and Kayla with feed back on testing and balling some ideas.
- I want to thank Alexander from the tutor support for helping me pinpoint the deployment issue.


### Content 
- The text for the Home page was taken from Wikipedia Article A
- The icons in the footer were taken from [Font Awesome](https://fontawesome.com/)


__Programs Used__
  - Git was used for using the Gitpod terminal to commit to Git and push to Github.
  - Github - Github was used to store the project code and display the project in Github Pages. (https://github.com/)
  - Font Awesome - Font Awesome was used to add icons for the social links in the footer.
  - Google Dev Tools- Google dev tools where used to test and troubleshoot the webpage as well as fix problems with responsive design   and styling.
  - Google Fonts - Google fonts where used to import every font used in the website.
  - Google devs lighthouse testing.

#### Forking and cloning
- Forking is creating a new repository with the same content as the one you forked. 
    - This is done by going to the repository you want to clone, and clicking the "fork" icon in the top right corner.
- Cloning is used for making local copies of your code.
    - Cloning a repository with github desktop is easily done by clicking the green "code" button and choosing the "open in github desktop" option. If you do not have a clone already, github desktop will ask if you want to create a local clone. Click yes.
    - If you do it with git you have to write "git clone" and then specify what you want to clone.

The live link can be found here - https://bogdan933.github.io/Quiz-App---Project-2/

### Screens
  - The quiz app has responsive design.
      - Normal desktop
      - 1280px wide and down
      - 992px wide and down
      - 748px wide and down


- Lighthouse mobile score
<img src="https://i.imgur.com/OIcOfJk.png">
- Lighthouse Desktop score
<img src="https://i.imgur.com/AwjharG.png">


### Media

- No media was used for the app.

 

