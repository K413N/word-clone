import React from "react";

function GuessInput({answer, guesses, setGuesses, setNumTriesLeft, numTriesLeft}) {
	const [guessInput, setGuessInput] = React.useState("");
	const handleSubmit = (event) => {
		const nextArr = [...guesses]
		const nextTry = numTriesLeft - 1
		nextArr.push(guessInput)
		setGuesses(nextArr)
		setGuessInput("");
		setNumTriesLeft(nextTry)
		if (numTriesLeft <= 1) {
			window.alert("you lose!")
			window.location.reload()
		}
	};


	return (
		<form
			onSubmit={(event) => {
				event.preventDefault();
				handleSubmit(event);
			}}
			className="guess-input-wrapper"
		>
			<label htmlFor="guess-input">Enter guess:</label>
			<input
				required
				minLength={5}
				maxLength={5}
				pattern="[a-zA-Z]{5}"
				title="You must submit a 5 letter word."
				id="guess-input"
				type="text"
				value={guessInput}
				onChange={(event) => {
					setGuessInput(event.target.value.toUpperCase());
				}}
			/>
			<button>Submit</button>
		</form>
	);
}

export default GuessInput;
