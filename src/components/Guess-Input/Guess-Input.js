import React from "react";

function GuessInput() {
	const handleSubmit = (event) => {
		console.log(guessInput);
		setGuessInput("");
	};

	const [guessInput, setGuessInput] = React.useState("");

	return (
		<form
			onSubmit={(event) => {
				event.preventDefault();
				handleSubmit();
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
