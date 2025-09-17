import React from 'react';
import Game from '../Game';
import Header from '../Header';
import HintRow from '../Hint-Row';
import TriesLeft from '../Tries-Left';
import { sample } from '../../utils';
import { WORDS } from '../../data';

function App() {
  const [answer, setAnswer] = React.useState(sample(WORDS))
  const [guesses, setGuesses] = React.useState([]);
  const [numTriesLeft, setNumTriesLeft] = React.useState(6);
console.log(answer)

  return (
    <div className="wrapper">
      <Header />

      <div className="game-wrapper">
        <TriesLeft numTriesLeft={numTriesLeft} />
        <HintRow answer={answer} guesses={guesses} setGuesses={setGuesses}/>
        <Game numTriesLeft={numTriesLeft} setNumTriesLeft={setNumTriesLeft} answer={answer} guesses={guesses} setGuesses={setGuesses} />
      </div>
    </div>
  );
}

export default App;
