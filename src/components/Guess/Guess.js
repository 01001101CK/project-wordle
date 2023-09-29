import React from 'react';
import { range } from '../../utils'

function Guess({value}) {
  
  return (
      <p className="guess">
    {range(5).map( number => (
          <span key={crypto.randomUUID()} className="cell">{value ? value[number] : undefined}</span>
      ))}
      </p>
    );
}

export default Guess;
