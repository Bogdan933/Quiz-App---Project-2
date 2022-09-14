# Quiz Game

<p> Declaring the question array structure with choices will be added several times for more questions</p>
<img src="https://i.imgur.com/QTasMCi.png">
<hr>
<p> Bugs:</p>
<img src="https://i.imgur.com/bODTodv.png">
<p>1.</ul>
<p>Im trying to target the 4 questions button to make them visible, but it does not work.</p><p>Will update this:
<li>Curretly trying to change the href path to javascript inside the game.html file, aswell as the script src path on line 51 inside game.html</p>
<ul>Changed from src="style.css" to src="assets/css/style.css"</ul>
<li>It didn't fix the targeting bug.
<li>Update: I have fixed the issue, it seems there was a spelling misstake on the file paths.
<hr>
<p>2.</ul>
<p>Trying to make the question button smaller but yet again it does not respond to changes.</p>
<img src="https://i.imgur.com/yNKkE9F.png">
<li>Solution was reducing font-size, min-widh and width by 50%</li>
<p></p>
<img src="https://i.imgur.com/F0DvL4Y.png">
<hr>
<p>3.</p>
<p>When running through developer tools i get the following not define error</p>
<li>It seems it was only a spelling error on Choice instead of writting choices, line 84 on game.js file</li>
<img src ="https://i.imgur.com/zDljDY2.png">
<hr>
<p>4.</p>
<p>It seems i got an error when trying to use the shorthand syntax for the function where when I would try to get through the validator i got the following message <strong>''arrow function syntax (=>)' is only available in ES6 (use 'esversion: 6')''</strong></p>
<li>On stackoverflow i found the a solution where i need to add as comment <strong>/*jshint esversion: 6 */</strong> and it fixed the issue.</li> 
<a href = "https://stackoverflow.com/questions/42866159/arrow-function-syntax-is-only-available-in-es6-use-esversion-6" target="_blank">Link to stackoverflow solution</a>