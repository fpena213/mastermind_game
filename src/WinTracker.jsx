import { useState, useEffect } from "react";

function WinTracker( { win, lose } ) {
    const [winCount, setWinCount] = useState(0);
    const [highScore, setHighScore] = useState(0);

    useEffect(() => {
        if (win) {
            const newWinCount = winCount + 1;
            setWinCount((prevWinCount) => prevWinCount + 1);
            sendWinCount(newWinCount);
        } else if (lose) {
            setWinCount(0);
            sendWinCount(0);
        }
      }, [win, lose]);

    const sendWinCount = async (newWinCount) => {
        try {
            const response = await fetch('/api/updateWinCount', {
                method: 'POST',
                headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify({ winCount: newWinCount, highScore: highScore }),
            });

            if (!response.ok) {
                throw new Error(`Error - Status: ${response.status}`);
            }
            const data = await response.json();
            setHighScore(data.highScore);

            console.log(data.highScore)
        } catch (err) {
            console.log('Error updating win count on the server:', err);
        }
    };

    return (
        <div className="score-box">
            <p>Current Score: {winCount}</p>
            <p>High Score: {highScore}</p>
        </div>
    )
}

export default WinTracker;