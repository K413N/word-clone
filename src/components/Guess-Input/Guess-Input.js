import React from 'react';

function GuessInput() {

  const handleSubmit = (event) => {
    console.log("Submitted!");
  }

  return (
  <form onSubmit={(event) => {
    event.preventDefault();
    handleSubmit();
    }} className="guess-input-wrapper">
    <label htmlFor="guess-input">Enter guess:</label>
    <input id="guess-input" type="text" />
    <button>Submit</button>
  </form>
  )
}

export default GuessInput;
