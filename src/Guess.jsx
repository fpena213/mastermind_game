import { useState, useEffect } from "react";

function Guesses( { guess, solution, numCorrect, locCorrect, guessesLeft } ) {
  // const [numCorrect, setNumCorrect] = useState(0);
  // // const [locCorrect, setLocCorrect] = useState(0);
  // console.log(guess)
  // if (numCorrect === 0 && locCorrect === 0 && guess !== undefined) {
  //   return (
  //     <div>All incorrect.</div>
  //   )
  // } else {
  //   return (
  //     <div>
  //       You have {numCorrect} correct numbers and {locCorrect} in the correct spot
  //     </div>
  //   )
  // }



  return (
      <div>
        <table>
          <tr>
            <th>{guess[0]}</th>
            <th>{guess[1]}</th>
            <th>{guess[2]}</th>
            <th>{guess[3]}</th>
          </tr>
        </table>
        {numCorrect === 0 && locCorrect === 0 && guessesLeft === 10 ? 
          <div></div>
          :
          numCorrect === 0 && locCorrect === 0 && guessesLeft !== 10 ?
          <div>All incorrect</div>
          :
         <div>You have {numCorrect} correct numbers and {locCorrect} in the correct spot.</div>
        }
    

        <div>Number of Guesses Left: {guessesLeft}</div>
      </div>

  );
 }
  
  export default Guesses;