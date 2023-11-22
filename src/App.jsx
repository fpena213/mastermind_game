import { useState } from 'react';
import './App.css';
import GameBoard from './GameBoard.jsx';


function App() {
  const [solution, setSolution] = useState('');
  const [guessesLeft, setGuessesLeft] = useState(10);
  
  const handleNewGame = async () => {
    try {
      const response = await fetch('/api/');
      const data = await response.json();
      setSolution(data);
    } catch (err) {
      console.log(`Error starting new game: ${err}`);
    }
  }

  const handleStartOver = (event) => {
    event.preventDefault();
    setGuessesLeft(10);
    handleNewGame();
  }


if (guessesLeft === 0) {
    return (
        <div>
            Game Over.
            The answer was {solution}.
            <div>
                <button onClick={handleStartOver}>
                    Try Again?
                </button>
            </div>
        </div>
    )
  } 

  return (
    <div>
      Correct answer for testing: {solution}
      <button onClick={handleNewGame}>
        Start New Game
      </button>
        <GameBoard solution={solution} guessesLeft={guessesLeft} setGuessesLeft={setGuessesLeft} />
    </div>
  );
}

export default App;
