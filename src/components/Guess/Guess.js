import React from 'react';
import { range } from '../../utils'
import { checkGuess } from '../../game-helpers'

function Guess({ value, answer }) {
  const checkResult = checkGuess(value, answer);


  return (
      <p className="guess">
    {range(5).map( number => (
      <span key={crypto.randomUUID()} className={value ? `cell ${checkResult[number].status}` : 'cell'}>{value ? value[number] : undefined}</span>
      ))}
      </p>
    );
}

export default Guess;
