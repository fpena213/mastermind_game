import React, { useState } from 'react';
import Guess from './Guess';

function GameBoard( {solution} ) {
    const [firstNum, setFirstNum] = useState('');
    const [secondNum, setSecondNum] = useState('');
    const [thirdNum, setThirdNum] = useState('');
    const [fourthNum, setFourthNum] = useState('');
    const [guessesLeft, setGuessesLeft] = useState(10)
    const [guess, setGuess] = useState([]);
    const guesses = [];

    const changeNum = (event) => {
        if (event.target.id === '0') {
            setFirstNum(event.target.value)
        } else if (event.target.id === '1') {
            setSecondNum(event.target.value)
        } else if (event.target.id === '2') {
            setThirdNum(event.target.value)
        } else if (event.target.id === '3') {
            setFourthNum(event.target.value)
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setGuessesLeft((guesses) => guesses -1);
        setGuess([firstNum, secondNum, thirdNum, fourthNum]);
        // const u = user.username;
        // if (u === undefined) return console.log('Error: Not Logged In');
        // // console.log(category, content);
        // // setNewHack(undefined);
        // // console.log('content', content, 'category', category, 'user', u);
        // // console.log('this is user', user)
        // // console.log({ content, category, user });
        // const postData = { category, content, user: user.username };
        const addGuess = {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ guess: [firstNum, secondNum, thirdNum, fourthNum] }),
          };
        fetch('/api', addGuess)
          .then((response) => {
            console.log(response);
          })
          .catch((err) => console.log('Error submitting guess', err));
    };

    if (guessesLeft === 0) {
        return (
            <div>
                Game Over.
                The answer was {solution}.
                <div>
                    <button>Try Again?</button>
                </div>
                
            </div>
        )
    }

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
                />
                <input
                    name='secondNum'
                    type='number'
                    id='1'
                    min="0"
                    max="7"
                    value={secondNum}
                    onChange={changeNum}
                />
                <input
                    name='thirdNum'
                    type='number'
                    id='2'
                    min="0"
                    max="7"
                    value={thirdNum}
                    onChange={changeNum}
                />
                <input
                    name='fourthNum'
                    type='number'
                    id='3'
                    min="0"
                    max="7"
                    value={fourthNum}
                    onChange={changeNum}
                />
                <button className='button' type='submit'>
                    Submit Guess
                </button>
            </form>
            <Guess guess={guess} solution={solution} />
            <div>Number of Guesses Left: {guessesLeft}</div>
        </div>
    );
  }
  
  export default GameBoard;