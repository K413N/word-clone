import React from 'react';

function HintRow({answer, guesses, setGuesses}) {
  
  //create an object that houses both the list of guesses, 
  //and the color of each letter
  //const guessColors = ["🟩🟩🟩🟩🟩", "🟨🟨🟨🟨🟨", "⬛⬛⬛⬛⬛"]

  const guessColors = []

  
    const newGuesses = guesses.map((item) => {
      let colorString = ""
      for(var i in item) {
        if (answer.includes(item[i])){
          colorString = colorString + item[i]
        } else {
          colorString = colorString + "⬛"
        }
      }
      guessColors.push(colorString)
    })
  
  //guesses.map((word, wordindex) => (
  //  word.foreach((letter, letterindex) => (
   //   console.log(letter)
  //  ))
  //)
//)

 // console.log(guesses)

  return (
        <ul>
          {guesses.map((guess, index) => (
            <div>
             <li key={guess}>
               {guess}
             </li>
             <li key={Math.random}>{guessColors[index]}</li>
            </div>
          ))}
        </ul>
      );
}

export default HintRow;
