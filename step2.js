// start game
function startGame() {
    // Reset the guesses back to 0.
    numGuesses = 9;
  
    // Solution is chosen randomly from wordList.
    chosenWord = wordsList[Math.floor(Math.random() * wordsList.length)];
    // The word is broken into individual letters.
    lettersInChosenWord = chosenWord.split("");
    // We count the number of letters in the word.
    numBlanks = lettersInChosenWord.length;
  
    // We print the solution in console (for testing).
    console.log(chosenWord);
  
    // CRITICAL LINE - Here we *reset* the guess and success array at each round.
    blanksAndSuccesses = [];
    // CRITICAL LINE - Here we *reset* the wrong guesses from the previous round.
    wrongGuesses = [];
  
    // Fill up the blanksAndSuccesses list with appropriate number of blanks.
    // This is based on number of letters in solution.
    for (var i = 0; i < numBlanks; i++) {
      blanksAndSuccesses.push("_");
    }
  
    // Print the initial blanks in console.
    console.log(blanksAndSuccesses);
  
  
    // Reprints the guessesLeft to 9
    document.getElementById("guesses-left").innerHTML = numGuesses;
  
    // Prints the blanks at the beginning of each round in the HTML
    document.getElementById("word-blanks").innerHTML = blanksAndSuccesses.join(" ");
  
    // Clears the wrong guesses from the previous round
    document.getElementById("wrong-guesses").innerHTML = wrongGuesses.join(" ");
  }