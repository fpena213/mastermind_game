import './App.css';
import GameBoard from './GameBoard.jsx';

function App() {
  const handleClick = async () => {
    try {
      const response = await fetch('/api/');
      const data = await response.json()
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div>
      <button onClick={handleClick}>
        Start New Game
      </button>
      <GameBoard />
    </div>
  );
}

export default App;
