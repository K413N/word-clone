import React from 'react';
import Game from '../Game';
import Header from '../Header';
import HintRow from '../Hint-Row';

function App() {
  const [guesses, setGuesses] = React.useState([]);
  return (
    <div className="wrapper">
      <Header />

      <div className="game-wrapper">
        <HintRow guesses={guesses} setGuesses={setGuesses}/>
        <Game guesses={guesses} setGuesses={setGuesses} />
      </div>
    </div>
  );
}

export default App;
