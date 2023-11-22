import { useState, useEffect } from "react";

function Guesses( { guess, solution } ) {
  const [numCorrect, setNumCorrect] = useState(0);
  const [locCorrect, setLocCorrect] = useState(0);
  const solutionArray = solution.toString().split("");

  const solutionObj = {};

  useEffect(() => {
    for (let i = 0; i < solutionArray.length; i++) {
      solutionObj[i] = solutionArray[i];
    }
    for (let i = 0; i < guess.length; i++) {
      if (solutionObj[i] === guess[i]) {
        setNumCorrect((numCorrect) => numCorrect + 1);
        // If number is a match, then check if location is also a match
        if (guess[i] === solutionObj[i]) {
          setLocCorrect((locCorrect) => locCorrect + 1);
        }
      } else {
        if (numCorrect > 0) {
          setNumCorrect((numCorrect) => numCorrect - 1);
        }
        if (locCorrect > 0) {
          setLocCorrect((locCorrect) => locCorrect - 1);
        }
        
      }
    }
  }, [guess])

  return (
      <div>
        You have {numCorrect} correct numbers and {locCorrect} in the correct spot.
      </div>
    );
  }
  
  export default Guesses;