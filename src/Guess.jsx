import { useState, useEffect } from "react";

function Guesses( { numCorrect, locCorrect, guessesLeft, guessHistory } ) {
  const [win, setWin] = useState(false);

  useEffect(() => {
    if (numCorrect === 4 && locCorrect === 4) {
      setWin(true);
    }
  }, [numCorrect, locCorrect])

  return (
      <div>
        Number of Guesses Left: {guessesLeft}
        { numCorrect === 0 && locCorrect === 0 && guessesLeft === 10 ? 
        <div></div>
        :
        win ?
          <div>You Win!</div>
        :
        !win && guessesLeft !== 10 ?
        <div> 
            <h2>Guess History:</h2>
            <ul>
              {guessHistory.map((entry, index) => (
                  <li key={index}>
                      Guess {index+1}: {entry}
                      { numCorrect === 0 && locCorrect === 0 && guessesLeft !== 10 ?
                        <div>All incorrect</div>
                        :
                        <div>You have {numCorrect} correct numbers and {locCorrect} in correct location.</div>
                      }
                  </li>
              ))}
            </ul>
          </div>
          :
          <div></div>
          }
      </div>

  );
}


  
export default Guesses;