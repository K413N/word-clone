import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {

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

export default Game;
