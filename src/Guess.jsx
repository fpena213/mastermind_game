import { useState, useEffect } from "react";
import './Guess.css';
import WinTracker from "./WinTracker";

function Guesses( { numCorrect, locCorrect, guessesLeft, guessHistory, solution } ) {
  const [win, setWin] = useState(false);
  const [lose, setLose] = useState(false);

  useEffect(() => {
    if (numCorrect === 4 && locCorrect === 4) {
      setWin(true);
    }
  }, [numCorrect, locCorrect, win]);

  useEffect(() => {
    if (guessesLeft === 10) {
      setWin(false);
      setLose(false)
    }
  }, [guessesLeft])

  useEffect(() => {
    if (guessesLeft === 0 && !win) {
      setLose(true);
    }
  }, [guessesLeft, win])

  return (
      <div className="guesses-container">
        { numCorrect === 0 && locCorrect === 0 && guessesLeft === 10 ? 
        <div className="guesses-left">Number of Guesses Left: {guessesLeft}</div>
        :
        win ?
          <div className="win-message">You Win! The correct answer was {solution}.</div>
        :
        !win && guessesLeft > 0 ?
        <div className="guess-history-container"> 
          <div className="guesses-left">
            Number of Guesses Left: {guessesLeft}
              <h2>Guess History:</h2>
                <ul className="guess-history-list">
                  {guessHistory.map((entry, index) => (
                    <li key={index} className="guess-history-item">
                      Guess {index+1}: {entry.guess}
                      { entry.numCorrect === 0 && entry.locCorrect === 0 && guessesLeft !== 10 ?
                      <div id="message">All incorrect.</div>
                      :
                      <div className="message">You have {entry.numCorrect} correct numbers and {entry.locCorrect} in the correct location.</div>
                      }
                    </li>
                  ))}
                </ul>
          </div>
        </div>
          :
          lose ?
          <p className="game-over-message">Game Over. The correct answer was {solution}.</p>
          :
          <div></div>
          }
        <WinTracker win={win} lose={lose}/>
      </div>
  );
}

export default Guesses;