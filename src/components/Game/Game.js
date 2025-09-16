import React from "react";



import GuessInput from "../Guess-Input/Guess-Input";



function Game({ answer, guesses, setGuesses }) {
	return <GuessInput answer={answer} guesses={guesses} setGuesses={setGuesses} />;
}

export default Game;
