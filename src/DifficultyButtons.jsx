import { useState } from "react";

const DifficultyButtons = ({ onSelectDifficulty }) => {
  const difficulties = ['Easy', 'Normal', 'Hard'];
  const [selectedDifficulty, setSelectedDifficulty] = useState(null);

  const handleDifficultyClick = (difficulty) => {
    onSelectDifficulty(difficulty);
    setSelectedDifficulty(difficulty);
  };

  return (
    <div className="difficulty-buttons">
      {difficulties.map((difficulty) => (
        <button
          key={difficulty}
          className={selectedDifficulty === difficulty ? 'selected' : ''}
          onClick={() => handleDifficultyClick(difficulty)}
        >
          {difficulty}
        </button>
      ))}
    </div>
  );
};

export default DifficultyButtons;