# Quiz Game

This quiz game is made to awaken curiosity on a wide degree of topics from mathematical questions to geography or movie knowledge, and with time it will grow, with more difficult questions and in the future be able to choose difficulty.

Game is designed for everybody curious no matter the types of questions. The goal of the quiz is to make the player engaged with the different  topics and hopefully with the highscore list the player will try several times to beat his/her own score. 

## User stories
- As a user, I want to be able to save my score so that I can track   my progress and see how much I have improved over time.
- As a user, I want to be able to see a highscore list so that I can compare my performance with others and see where I stand in the competition.
- As a user, I want to be able to select from at least 2 categories so that I can play the quiz game in a subject I am interested in.



# Wireframes 
Due to time restraints I didn't have time to create the updated wireframes for each category page, so I will let the initial design from the start.
Since this application was designed with mobile users in focus I will include the frameworks for mobile devices since it better shows the symmetry.

<details>
<summary>Screenshots</summary>
<a href="https://imgur.com/A7vVjYj"><img src="https://i.imgur.com/A7vVjYj.png" title="source: imgur.com" /></a>
<a href="https://i.imgur.com/IJrbN5X.png"><img src="https://i.imgur.com/IJrbN5X.png" title="source: imgur.com" /></a>
<a href="https://imgur.com/1ftDEYD"><img src="https://i.imgur.com/1ftDEYD.png" title="source: imgur.com" /></a>
<a href="https://imgur.com/o4ztuJy"><img src="https://i.imgur.com/o4ztuJy.png" title="source: imgur.com" /></a>
</details>
<br>

## Responsive Mockup
![Responsive Mockup](https://i.imgur.com/CqN4ffY.png)

## Features 

In this section, you should go over the different parts of your project, and describe each in a sentence or so. You will need to explain what value each of the features provides for the user, focusing on who this website is for, what it is that they want to achieve and how your project is the best way to help them achieve these things.

### Existing Features

- __The landing page image__

  - Play button that initiates the start of the quiz.
  - HighScore button provies the user with a history of scores from other users or an user who played several times. 

![Nav Bar](https://i.imgur.com/RDIiBHE.png)

- __Categories__

- Here the user can choose what type of trivia question they would like to answer.

  
  - __Mathemathics__
  - __Geography__
  - __Sports__
- Also the option to either view the highscores or go back to main page.
- The player will also be welcomed by an animated intresting fact based on the category choosen.
![Landing Page](https://i.imgur.com/oNOIPzX.png)

- __Math category__
![Landing Page](https://i.imgur.com/50mXOcP.png)


- __Geography category__
![Landing Page](https://i.imgur.com/spx6LGD.png)


- __Sports__
![Landing Page](https://i.imgur.com/XWWwvcK.png)

- __The end game page__

  - User is shown his score at the top of the page and is asked to enter name for saving score.
  - User is able to either play again or go home and access the highscore  tab.

![Endgame Page](https://i.imgur.com/LjRYdSl.png)


- __HighScores and Leaderboards__

  - After name is saved the player is presented with a ranking list of previous highscored, where the highest points are at the top.

  ![Highscore-Leaderboards](https://i.imgur.com/v6N1UZ4.png)

# Color Scheme

- The background color of this project uses a linear gradient that combines four colors. The gradient starts with #C04777 and moves to #E795BA, #EEA8C8, and finally #FFF. The gradient creates a smooth transition from a deep rose to a light peach, ending in white.

### Features Left to Implement

- Add several random facts displayed above the game container, this would require aditional time, something I can add in the future.

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

Bug 5.


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

Big credit goes to briandesign, i have edited the css files so each category is a bit unique in its way, with different style so the background with the text can be readable. Given more time i would have reduced the JS files require for the categories so the Game can fetch the necessary questions from 1 JS file based on the category chosen.
Extensive overhaul edits have been made to the front end aesthetics of the game and the actual game page.
- [Youtube video](https://www.youtube.com/watch?v=f4fB9Xg2JEY&t=3747s&ab_channel=BrianDesign)
- I also want to credit my class colleagues Mia and Kayla with feed back on testing and balling some ideas.
- Extra credit to Mia Rasmussen for assistance in pinpointing small issues in the css code.
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
<img src="https://i.imgur.com/00oePF5.png">
- Lighthouse Desktop score
<img src="https://i.imgur.com/8RxHEBC.png">


### Media

- No media was used for the app.

 

