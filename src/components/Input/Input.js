import React, {useState} from 'react';

function Input() {
 const [guess, setGuess] = useState('');
 
 function handleSubmit (event) {
 event.preventDefault();
 console.info({guess})
 setGuess('')

 }
  return (
    <>
      <form 
      className="guess-input-wrapper"
      onSubmit={handleSubmit}
      >
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        required
        type="text"
        id="guess-input"
        value={guess}
        minLength={5}
        maxLength={5}
        onChange={event => {
          const upperCase = event.target.value.toUpperCase();
          setGuess(upperCase);
        }}
      />
    </form>
    
   </>
  )
}

export default Input;
