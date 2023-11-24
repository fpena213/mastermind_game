import { useState, useEffect } from "react";
import './Guess.css';

function Guesses( { numCorrect, locCorrect, guessesLeft, guessHistory, solution } ) {
  const [win, setWin] = useState(false);

  useEffect(() => {
    if (numCorrect === 4 && locCorrect === 4) {
      setWin(true);
    }
  }, [numCorrect, locCorrect]);

  useEffect(() => {
    if (guessesLeft === 10) {
      setWin(false);
    }
  }, [guessesLeft])

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
                      <div id="message">You have {entry.numCorrect} correct numbers and {entry.locCorrect} in the correct location.</div>
                      }
                    </li>
                  ))}
                </ul>
          </div>
        </div>
          :
          !win && guessesLeft === 0 ?
          <p className="game-over-message">Game Over. The correct answer was {solution}.</p>
          :
          <div></div>
          }
      </div>
  );
}

export default Guesses;