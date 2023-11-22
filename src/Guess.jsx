import { useState, useEffect } from "react";

function Guesses( { guess, solution, numCorrect, locCorrect, guessesLeft } ) {
  const [win, setWin] = useState(false);
  
  useEffect(() => {
    if (numCorrect === 4 && locCorrect === 4) {
      setWin(true);
    }
  }, [numCorrect, locCorrect])

  return (
      <div>
        {/* <table>
          <tr>
            <th>{guess[0]}</th>
            <th>{guess[1]}</th>
            <th>{guess[2]}</th>
            <th>{guess[3]}</th>
          </tr>
        </table> */}
        { win ?
          <div>You Win!</div>
          :
        numCorrect === 0 && locCorrect === 0 && guessesLeft === 10 ? 
          <div></div>
          :
          numCorrect === 0 && locCorrect === 0 && guessesLeft !== 10 ?
          <div>All incorrect</div>
          :
         <div>You have {numCorrect} correct numbers and {locCorrect} in correct location.</div>
        }
        { !win ? 
          <div>Number of Guesses Left: {guessesLeft}</div>
          :
          <p></p>
        } 
      </div>
  );
 }
  
  export default Guesses;