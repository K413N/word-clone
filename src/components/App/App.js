import React from 'react';
import Game from '../Game';
import Header from '../Header';
import HintRow from '../Hint-Row';
import { sample } from '../../utils';
import { WORDS } from '../../data';

function App() {
  const [answer, setAnswer] = React.useState(sample(WORDS))
  const [guesses, setGuesses] = React.useState([]);
  const [triesLeft, setTriesLeft] = React.useState(6);
console.log(answer)

  return (
    <div className="wrapper">
      <Header />

      <div className="game-wrapper">
        <HintRow answer={answer} guesses={guesses} setGuesses={setGuesses}/>
        <Game answer={answer} guesses={guesses} setGuesses={setGuesses} />
      </div>
    </div>
  );
}

export default App;
