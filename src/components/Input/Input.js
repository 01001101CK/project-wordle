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
          //The pattern attribute uses Regular Expression syntax. 
          //Specifically what we're saying here is that the acceptable characters 
          //are letters ([a-zA-Z]), and that there should be exactly 5 of them {5}.
          //We also add the title attribute for clarification; 
          //if the user tries to submit the form and the validation isn't met, 
          //they'll be shown a message like this:
        pattern="[a-zA-Z]{5}"
        title="5 letter word"
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
