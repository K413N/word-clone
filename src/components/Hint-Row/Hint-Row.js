import React from 'react';

function HintRow({guesses, setGuesses}) {
  console.log(guesses)
  return (
        <ul>
          {guesses.map(guess => (
            <li key={guess}>
              {guess}
            </li>
          ))}
        </ul>
      );
}

export default HintRow;
