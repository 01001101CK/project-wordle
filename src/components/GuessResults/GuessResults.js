import React from 'react';

function RenderInput({guesses}) {
  

  return (
    <div className="guess-results">
    {guesses.map(guess => (
     <p key={crypto.randomUUID()} className="guess">{guess}</p>
  ))}
    </div>
  )
}

export default RenderInput;
