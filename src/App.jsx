import { useState, useEffect } from 'react';
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

  useEffect(() => {
    if (guessesLeft === 0) {
      setStarted(false);
    }
  }, [guessesLeft]);

  return (
    <div className="gameBox">
      {solution}
      <div>
          <button onClick={handleNewGame}>
            Start New Game
          </button>
        </div>
      <div>
        <GameBoard solution={solution} guessesLeft={guessesLeft} setGuessesLeft={setGuessesLeft} started={started} />
      </div>
    </div>  
  );
}

export default App;
