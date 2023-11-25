# Welcome to Mastermind

### Will you crack the ```code?``` This game is a race against the computer to find the solution within 10 attempts.

## Rules

At the start of each game, the computer will randomly generate a combination of 4 random numbers. It is up to you to solve it.

With each guess, you will receive feedback:
- "Correct Number": You guessed a correct number.
- "Correct Number and Correct Location": You guessed a correct number, and it's in the right position.
- "All Incorrect": All numbers were incorrect.

The computer will not reveal which numbers were correct and/or in the correct location.

Prior to starting, you must choose a level of difficulty.
- ```Easy```: Each number may be between 0-4.
- ```Normal```: Each number may be between 0-7.
- ```Hard```: Each number may be between 0-9.

#### *Good luck!*

## How to Start

1. Clone the repository to your local machine:

   ```bash  
   git clone https://github.com/fpena213/mastermind_game.git
   cd mastermind_game
2. In your terminal, make sure to install the necessary dependencies:

    ```bash
    npm install
3. Start your backend server:

    ```bash
    npm run dev
4. In a second terminal, it's time to play!

    ```bash
    npm start
5. If your browser does not automatically show the game, please navigate to http://localhost:3000 to see the game displayed.

## User Interface
The game interface includes:
- Input fields for entering your guesses.
- A button to submit your guess.
- A history section displaying your previous guesses and their feedback.
- A counter showing the number of attempts remaining.
- A box with the current score (number of games won in a row) and high score.

## Coding Process

I wrote the *backend* in Node.js and Express.js for a number of reasons:

```Node.js```
- Node.js efficiently handles asynchronous operations. In a game where user input and responses need to be handled promptly, Node.js provides a responsive and non-blocking experience.
- Node.js is lightweight and performant. In a game where speed is crucial for responsiveness, Node.js can handle a large number of concurrent connections efficiently.
- The Node.js ecosystem is abundant with packages and modules available through npm. It is easy to find libraries to handle HTTP requests, work databases, or implement additional game features.
- Node.js is known for its scalability. While Mastermind is a relatively simple game, if I decide to add more complex features or scale up the user base, Node.js can handle the increased load with ease.
- Node.js has great community support, making the developer experience easier and simpler.

```Express.js```
- Express uses a middleware system that allows you to plug in various functionalities at different points in the request-response cycle. This makes it easy to add features and simplifies debugging because it is easy to log where a potential error is occuring.
- Express simplifies the process of defining and handling routes. In the game, routes are easily defined for handling guesses, providing feedback, and managing game state.
- Express provides methods for handling HTTP requests, making it straightforward to parse request bodies, handle query parameters, and set response headers. This streamlines the processing of user input and game responses.


The frontend was written in ```React```.
For additional features, I added an ability to choose the level of difficulty for those who may want to make the game easier or harder. I also added a UI to show the current score and the highest score obtained.

### Code Structure
Frontend code is in ```src``` directory, while backend code lives in ```server``` directory. ```public``` directory contains the entry point for the application when it is loaded in a web browser. It's the HTML file that includes the root element where React components are mounted.

Flow is as follows: Upon game start, a ```GET``` request is sent to the backend to fetch a random number from our Random Generator API. It is then set to be the current game's solution. Input fields are provided for the player to create guesses. Upon submission of each guess, a ```POST``` request is sent to the backend to compare the current guess with the solution. Functional logic evaluates the number and location of correct numbers, which is then sent back to the frontend for the user to read. The game continues this way until either:
1. The player guesses the correct number, triggering a win condition. This then triggers another series of ```POST``` requests to the backend, which will update the user's current streak of scores and their high score (number of games won in a row without losing a game). This is then rendered on the page.
2. The player runs out of guesses without finding the solution, triggering a lose condition. This will again trigger a ```POST``` request to the backend which will reset the current score to 0 but not affect the highest score.

## Future Features
If given more time, the next feature I would add is user authentication (registration and login functionality) with storage in a SQL database to personalize the experience. I would store history of scores in a NoSQL database. As my scores and guesses are already efficiently handled by the backend code, it makes it simple to send this information to the database.