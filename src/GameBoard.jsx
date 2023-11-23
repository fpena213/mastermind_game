import React, { useState, useEffect } from 'react';
import Guess from './Guess';

function GameBoard( {solution, guessesLeft, setGuessesLeft} ) {
    const [guessHistory, setGuessHistory] = useState([]);
    const [firstNum, setFirstNum] = useState('');
    const [secondNum, setSecondNum] = useState('');
    const [thirdNum, setThirdNum] = useState('');
    const [fourthNum, setFourthNum] = useState('');
    const [guess, setGuess] = useState({});
    const [numCorrect, setNumCorrect] = useState(0);
    const [locCorrect, setLocCorrect] = useState(0);

    useEffect(() => {
        if (guessesLeft === 10) {
        setGuessHistory([]);
        }
    }, [guessesLeft]);

    const changeNum = (event) => {
        if (event.target.id === '0') {
            setFirstNum(event.target.value);
        } else if (event.target.id === '1') {
            setSecondNum(event.target.value);
        } else if (event.target.id === '2') {
            setThirdNum(event.target.value);
        } else if (event.target.id === '3') {
            setFourthNum(event.target.value);
        }
    }

    useEffect(() => {
        setGuess((prevGuess) => ({
            0: firstNum,
            1: secondNum,
            2: thirdNum,
            3: fourthNum,
          }))
    }, [firstNum, secondNum, thirdNum, fourthNum])

    const handleSubmit = (event) => {
        event.preventDefault();
        setGuessesLeft((guessesLeft) => guessesLeft -1);

        const solutionObj = {};
        const solutionArray = solution.toString().split("");

        for (let i = 0; i < solutionArray.length; i++) {
            solutionObj[i] = solutionArray[i];
        }
        const currentGuess = [`${firstNum}${secondNum}${thirdNum}${fourthNum}`];
        setGuessHistory((prevHistory) => [...prevHistory, currentGuess]);
        
        const addGuess = {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ guess: guess, solution: solutionObj }),
          };

        fetch('/api', addGuess)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            setNumCorrect(data.numCorrect);
            setLocCorrect(data.locCorrect);
         })
        .catch((err) => console.log('Error submitting guess', err));
    };

    return (
        <div className="board">
            <form onSubmit={handleSubmit}>
                <input
                    name='firstNum'
                    type='number'
                    id='0'
                    min="0"
                    max="7"
                    value={firstNum}
                    onChange={changeNum}
                    required
                />
                <input
                    name='secondNum'
                    type='number'
                    id='1'
                    min="0"
                    max="7"
                    value={secondNum}
                    onChange={changeNum}
                    required
                />
                <input
                    name='thirdNum'
                    type='number'
                    id='2'
                    min="0"
                    max="7"
                    value={thirdNum}
                    onChange={changeNum}
                    required
                />
                <input
                    name='fourthNum'
                    type='number'
                    id='3'
                    min="0"
                    max="7"
                    value={fourthNum}
                    onChange={changeNum}
                    required
                />
                <button className='button' type='submit'>
                    Submit Guess
                </button>
            </form>
            <Guess numCorrect={numCorrect} locCorrect={locCorrect} guessesLeft={guessesLeft} guessHistory={guessHistory} />
        </div>
    );
  }
  
  export default GameBoard;