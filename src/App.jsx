import { useState } from 'react';
import './App.css';
import GameBoard from './GameBoard.jsx';

function App() {
  const [solution, setSolution] = useState('');
  const handleClick = async () => {
    try {
      const response = await fetch('/api/');
      const data = await response.json();
      setSolution(data);
    } catch (err) {
      console.log(`Error starting new game: ${err}`);
    }
  }

  return (
    <div>
      Correct answer for testing: {solution}
      <button onClick={handleClick}>
        Start New Game
      </button>
      <GameBoard solution={solution} />
    </div>
  );
}

export default App;
