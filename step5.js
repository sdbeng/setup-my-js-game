// Then initiate the function for capturing key clicks.
document.onkeyup = function(event) {
    // Check if the key pressed is a letter.
    if (event.keyCode >= 65 && event.keyCode <= 90) {
      // Converts all key clicks to lowercase letters.
      var letterGuessed = event.key.toLowerCase();
      // Runs the code to check for correctness.
      checkLetters(letterGuessed);
      // Runs the code after each round is done.
      roundComplete();
    }
  };