import { useState, useEffect } from "react";

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
      <div>
        { numCorrect === 0 && locCorrect === 0 && guessesLeft === 10 ? 
        <div>Number of Guesses Left: {guessesLeft}</div>
        :
        win ?
          <div>You Win! The correct answer was {solution}.</div>
        :
        !win && guessesLeft > 0 ?
        <div> 
          Number of Guesses Left: {guessesLeft}
            <h2>Guess History:</h2>
            <ul>
              {guessHistory.map((entry, index) => (
                  <li key={index}>
                      Guess {index+1}: {entry.guess}
                      { entry.numCorrect === 0 && entry.locCorrect === 0 && guessesLeft !== 10 ?
                        <div>All incorrect.</div>
                        :
                        <div>You have {entry.numCorrect} correct numbers and {entry.locCorrect} in the correct location.</div>
                      }
                  </li>
              ))}
            </ul>
          </div>
          :
          !win && guessesLeft === 0 ?
          <p>Game Over. The correct answer was {solution}.</p>
          :
          <div></div>
          }
      </div>
  );
}


  
export default Guesses;