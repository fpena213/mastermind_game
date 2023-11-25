import { useState, useEffect } from 'react';
import './App.css';
import GameBoard from './GameBoard.jsx';
import DifficultyButtons from './DifficultyButtons.jsx';

function App() {
  const [solution, setSolution] = useState('');
  const [guessesLeft, setGuessesLeft] = useState(10);
  const [started, setStarted] = useState(false);
  const [difficulty, setDifficulty] = useState('')
  
  const handleNewGame = async () => {
    try {
      setStarted(true);
      setGuessesLeft(10);
      const response = await fetch(`/api/?difficulty=${difficulty}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        }
      });
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

  const handleSelectDifficulty = (selectedDifficulty) => {
    setDifficulty(selectedDifficulty);
  };

  return (
    <div className="game-box">
      <div className="difficulty-container">
        Select a difficulty level.
        <DifficultyButtons onSelectDifficulty={handleSelectDifficulty} />
      </div>
      <div className="game-container">
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
