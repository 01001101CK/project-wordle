import React, {useState} from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput';
import GuessResults from '../GuessResults';
import {NUM_OF_GUESSES_ALLOWED} from '../../constants';
import WonBanner from '../WonBanner';
import LostBanner from '../LostBanner';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {

  const [guesses, setGuesses] = useState([])
  const [gameStatus, setGameStatus] = useState('running')

  function handleSubmitGuess(tentativeGuess) {
    const nextGuesses = [...guesses, tentativeGuess]
    setGuesses(nextGuesses)
    if (tentativeGuess === answer) {
      setGameStatus('Won')
    } else if (nextGuesses.length >= NUM_OF_GUESSES_ALLOWED) {
      setGameStatus('Lost')
    }
  }
  

  return (
    <>
      <GuessResults guesses={guesses} answer={answer} />
      
      <GuessInput
        gameStatus={gameStatus}
        handleSubmitGuess={handleSubmitGuess}
      />
      {gameStatus === 'Won' && (
        <WonBanner numOfGuesses={guesses.length} />
      )}
      {gameStatus === 'Lost' && <LostBanner answer={answer} />}
      
    </>
  )
   }

export default Game;
