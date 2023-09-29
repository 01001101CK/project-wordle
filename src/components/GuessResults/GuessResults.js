import React from 'react';
import Guess from '../Guess'
import {range} from '../../utils'
import { NUM_OF_GUESSES_ALLOWED } from '../../constants'

function RenderInput({guesses}) {
  

  return (
    <div className="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map( number => (
     <Guess key={crypto.randomUUID()} value={guesses[number]} />
  ))}
    </div>
  )
}

export default RenderInput;
