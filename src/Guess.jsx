import { useState, useEffect } from "react";

function Guesses( { guess, solution } ) {
  const [numCorrect, setNumCorrect] = useState(0);
  const solutionArray = solution.toString().split("");

  const solutionObj = {};

  useEffect(() => {
    for (let i = 0; i < solutionArray.length; i++) {
      solutionObj[i] = solutionArray[i];
    }
    for (let i = 0; i < guess.length; i++) {
      if (!solutionObj[i] === guess[i]) {
        break
      }
    }
  }, [guess, solutionArray])

  return (
      <div>
        You have {numCorrect} correct numbers.
      </div>
    );
  }
  
  export default Guesses;