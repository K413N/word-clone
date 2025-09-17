import React from "react";



import GuessInput from "../Guess-Input/Guess-Input";



function Game({ answer, guesses, setGuesses, setNumTriesLeft, numTriesLeft }) {
	return <GuessInput numTriesLeft={numTriesLeft} setNumTriesLeft={setNumTriesLeft} answer={answer} guesses={guesses} setGuesses={setGuesses} />;
}

export default Game;
