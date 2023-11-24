import { useState } from 'react';
import './App.css';
import GameBoard from './GameBoard.jsx';

function App() {
  const [solution, setSolution] = useState('');
  const [guessesLeft, setGuessesLeft] = useState(10);
  const [started, setStarted] = useState(false);
  
  const handleNewGame = async () => {
    try {
      setStarted(true);
      setGuessesLeft(10);
      const response = await fetch('/api/');
      const data = await response.json();
      setSolution(data);
    } catch (err) {
      console.log(`Error starting new game: ${err}`);
    }
  }

  const handleStartOver = (event) => {
    setStarted(true);
    event.preventDefault();
    handleNewGame();
  }

  return (
    <div>
      { guessesLeft === 10 && started === false ?
        <div>
          <button onClick={handleNewGame} started={started}>
            Start New Game
          </button>
        </div>
        :
        guessesLeft === 0 ? 
          <div>
            <button onClick={handleStartOver}>
              Play Again?
            </button>
          </div>
          :
          <div></div>
      }
      <GameBoard solution={solution} guessesLeft={guessesLeft} setGuessesLeft={setGuessesLeft} />
    </div>  
  );
}

export default App;
