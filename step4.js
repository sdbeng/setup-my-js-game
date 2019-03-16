// roundComplete() function

function roundComplete() {

    // First, log an initial status update in the console telling us how many wins, losses, and guesses are left.
    console.log("WinCount: " + winCounter + " | LossCount: " + lossCounter + " | NumGuesses: " + numGuesses);
  
    // Update the HTML to reflect the new number of guesses. Also update the correct guesses.
    document.getElementById("guesses-left").innerHTML = numGuesses;
    // This will print the array of guesses and blanks onto the page.
    document.getElementById("word-blanks").innerHTML = blanksAndSuccesses.join(" ");
    // This will print the wrong guesses onto the page.
    document.getElementById("wrong-guesses").innerHTML = wrongGuesses.join(" ");
  
    // If we have gotten all the letters to match the solution...
    if (lettersInChosenWord.toString() === blanksAndSuccesses.toString()) {
      // ..add to the win counter & give the user an alert.
      winCounter++;
      alert("You win!");
  
      // Update the win counter in the HTML & restart the game.
      document.getElementById("win-counter").innerHTML = winCounter;
      startGame();
    }
  
    // If we've run out of guesses..
    else if (numGuesses === 0) {
      // Add to the loss counter.
      lossCounter++;
      // Give the user an alert.
      alert("You lose");
  
      // Update the loss counter in the HTML.
      document.getElementById("loss-counter").innerHTML = lossCounter;
      // Restart the game.
      startGame();
    }
  
  }