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
          //if the answer includes the letter, add letter to the string
          if (item[i]=== answer[i]){
            colorString = colorString + "🟩"
          } else {
            colorString = colorString + "🟨"
          }
        } else {
          //else add a black square emoji
          colorString = colorString + "⬛"
        }
      }
      guessColors.push(colorString)
      if (colorString === "🟩🟩🟩🟩🟩") {
        window.alert("you win!")
      }
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
            <div key={index}>
             <li >
               {guess}
             </li>
             <li >{guessColors[index]}</li>
            </div>
          ))}
        </ul>
      );
}

export default HintRow;
