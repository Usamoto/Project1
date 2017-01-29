
### About Rachel's Mini Crossword Puzzle 

### Technologies Used
* ** Language: JQuery JavaScript Library 
  - Event listeners ("click", "blur", "keydown")
  - If/else statements
  - Two counters ("counter", "victorycounter")
  - Two alert functions ("Hints", "Submit")
* ** CSS 
  - Position: absolute
  - Flexbox 
* ** HTML 
  - Divs (one div per crossword puzzle box)
  - Input (one input box per game-box)
  - Three buttons ("Hints", "Submit", "Answers")

### Approach taken
* ** I chose to create a crossword puzzle because I was interested in creating the logic to change the colors for each game box. I was inspired by the design of the mini crossword puzzle on the New York Times website. I approached this project by creating the logic first and ensuring that I was able to adjust the css for each game box with Javascript before adding in the actual crossword puzzle.  

For the logic, I isolated each game box by creating a unique div and class per game box. Within the Javascript, I created a "click" event listener and a counter to keep track of the amount of clicks that each box will receive. The CSS attributes for each box and corresponding columns/rows will alternate based each "click". 

I added an input box to each box that is used within the crossword puzzle which will allow the user to enter in their answers for each crossword puzzle question. The "submit" button will let the user know if they have correctly completed the puzzle. 

<!-- If all of the answers are correct the game boxes will turn black. If the puzzle was incorrectly completed, an alert will show up and state "Sorry! Try Again!". The "hints" button will provide  -->

### User Stories 
* ** The user should be able to read the crossword puzzle questions
* ** The user should be able to input an answer into the game box
* ** The user should be able to access one hint per question through the "hints" button
* ** The user should be able to view the correct answers through the "Answers" button
* ** The user should be able to submit their answers or the answers provided by the "Answers" button through the "Submit" button
* ** The user should be able to know if they have correctly or incorrectly answered the puzzle questions. 
- If the puzzle was answered correctly, all of the game boxes will turn black
- If the puzzle was answered incorrectly, all of the game boxes will turn red. 
* ** The user should be able to "click" or use the "keydown" feature to navigate through the puzzle. 
* ** The user should be able to view the crossword puzzle boxes that are not in use by the dark blue color. 
- The user should be able to view the crossword puzzle box that they are currently in by the blue color.
-The user should be able to view the "column" or "row" that they are currently in through the light blue color. 

### Wireframes
<img src="Wireframe1.pdf">
<img src="Wireframe2.pdf">
<img src="Wireframe3.pdf">

### How To Instructions



### Unsolved Problems 
* ** Responsiveness 
- Desktop 
- Mobile 
* ** "Answers" button
- Limit the amount of times the answers are inputted
   







* A **working game, built by you**, hosted on the internet
* A **git repository hosted on Github**, with a link to your hosted game in the URL section, and **frequent** commits dating back to the very beginning of the project
* **A ``readme.md`` file** which must include:
  - Explanations of the technologies used
  - Approach taken
  - User stories
  - Wireframes
  - How-to-use instructions
  - Unsolved problems
* A presentation deck which must include:
  - ~5 slides
  - Wireframes
  - Features of your project
  - Constraints you had to work with (e.g. technological, timing, content, etc.)
  - Any other information you think might help us (your stakeholders) understand what you've built

---

### Suggested Ways to Get Started

* **Pseudocode** Start by stating the problems in plain text. This will help you guide your process and understand the problem better.
* **Break the project down into different components** (data, presentation, views, style, DOM manipulation) and brainstorm each component individually. Use whiteboards!
* **Use your Development Tools** (console.log, inspector, alert statements, etc) to debug and solve problems
* **Work through the lessons in class** & ask questions when you need to! Think about adding relevant code to your game each night, instead of, you know... _procrastinating_.
* **Commit early, commit often. [VERY IMPORTANT]** Don’t be afraid to break something because you can always go back in time to a previous version.
* **Research documentation resources** (MDN, jQuery, etc.) at home to better understand what you’ll be getting into.
* **Don’t be afraid to write code that you know you will have to remove later.** Create temporary elements (buttons, links, etc) that trigger events if real data is not available. For example, if you’re trying to figure out how to change some text when the game is over but you haven’t solved the win/lose game logic, you can create a button to simulate that until then.

---

### Potential Project Ideas

##### Simon
A game with 4 colored "buttons". In this game, a round consists of lighting up one or more buttons in a random order, after which the player must reproduce that order by pressing the buttons. As the game progresses, the number of buttons to be pressed increases.

##### Card Counter
A game where cards are flipped over one by one over a set amount of time. By the end of the timer, user should be able to enter the "card count" or "score" based on a card counting strategy.

##### Connect Four
Users will take turns filling boxes in a grid and checking for a win condition. Gravity takes hold of the boxes and forces drops to the bottom of the game board!

##### Blackjack [Challenging]
Make a one player game where people down on their luck can lose all their money by guessing which card the computer will deal next!

---

### Useful Resources

* **[w3 CSS](http://www.w3schools.com/w3css/)** _(CSS tutorials and reference)_
* **[MDN Javascript Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript)** _(a great reference for all things Vanilla Javascript)_
* **[jQuery Docs](http://api.jquery.com)** _(if you're using jQuery)_
* **[Github Pages](https://pages.github.com)** _(for hosting your game)_

---

### Project Feedback + Evaluation

* __Project Workflow__: Did you complete the user stories, wireframes as specified above? Did you use source control (Git) as expected for the phase of the program you’re in (detailed above)?

* __Technical Requirements__: Did you deliver a project that met all the technical requirements? Given what the class has covered so far, did you build something that was reasonably complex?

* __Creativity__: Did you added a personal spin or creative element into your project submission?

* __Code Quality__: Did you follow code style guidance and best practices covered in class, such as spacing, modularity, and semantic naming? Did you comment your code as your instructors have in class?

* __Deployment__: Did you deploy your application to a public url using GitHub Pages?

* __Presentation__: Did you present your game, your code, and your project-making experience clearly and effectively to the class?

* __Total__: Your instructors will give you a score for each section between:

| Score          | Expectations   |
| :------------- | :------------- |
| **0**          | _Incomplete._  |
| **1**          | _Does not meet expectations._ |
| **2**          | _Meets expectations, good job!_ |
| **3**          | _Exceeds expectations, you wonderful creature, you!_ |

This will serve as a helpful overall gauge of whether you met the project goals, but __the more important scores are the individual ones__ above, which can help you identify where to focus your efforts for the next project!

### A Note on Plagiarism

Plagiarism is a serious offense and grounds for expulsion. Our entire policy can be found [in the wiki](https://github.com/ga-students/wdi-nyc-purple-rain-students/wiki/General-Assembly-Plagiarism-Policy).

You are encouraged to ask others, including students, instructors, and stackoverflow, for help. However, it is NOT ACCEPTABLE TO COPY another person's code and submit it as your own. More importantly, it is detrimental to your learning and growth.

All of the following are considered plagiarism or cheating:
* Turning in work that is not your own.
* Turning in someone else's work as your own.
* Hiring, or paying someone to do your work for you.
* Copying words or code without giving credit.
* Building or copying someone else’s idea without their knowledge or giving credit.
* Giving incorrect information about a source.
* Changing words, variable names, etc. but copying the code or files of a source without giving credit.
* Copying so many ideas or code blocks from a source that it makes up the majority of your work, whether you give credit or not.
* Failing to put a quotation in quotation marks.

In an effort to not plagiarize, credit for this content goes to:
* [Plagiarism.org](http://plagiarism.org/), specifically the “plagiarism 101” section.  Content was adapted for code.  For more information, please see:
  * [What is Plagiarism](http://www.plagiarism.org/plagiarism-101/what-is-plagiarism)
  * [Types of Plagiarism](http://www.plagiarism.org/plagiarism-101/types-of-plagiarism)
* [How do I safely write code in my own 'words' and not plagiarize?](http://programmers.stackexchange.com/questions/80167/how-do-i-safely-write-code-in-my-own-words-and-not-plagiarize)
* [Avoiding Plagiarism:  Writing Computer Code](http://www.upenn.edu/academicintegrity/ai_computercode.html)
