// GLOBAL VARIABLES (accessible by all functions)
// ==================================================================================================

// Create an array of Word Options (all lowercase to make it simple for now)
var wordsList = ["tevez", "gago", "benedetto", "simon", "maradona", "messi"];

// solution will be stored in here.
var chosenWord = "";

// This will break the solution into individual letters to be stored in array.
var lettersInChosenWord = [];

// This will be the number of blanks we show as a hint based on the solution
var numBlanks = 0;

// Holds a mix of blank and solved letters (ex: 'm, _ _, s, _').
var blanksAndSuccesses = [];
// Holds all of the wrong guesses
var wrongGuesses = [];

// Game counters
var winCounter = 0;
var lossCounter = 0;
var numGuesses = 9;

// write some funcs
//write a function startGame() - // Its how we we will start and restart the game - for future use

// checkLetters() function
// It's where we will do all of the comparisons for matches. for ex. for-loop'ing over your blanks, if the letter is in the word chosen figure it out where it is exactly, so it's a conditional that wraps another for-loop

// create a complete round func - all code that needs to be run after each guess is made - roundComplete()
// in here you'll log the win, loosses and guesses counters - update the DOM html to render the number of guesses - update the correct guesses (hint, getElementById())


// main process
// write code that controls the game
// run startGame()

// Then initiate capturing clicks (hint, document.onkeup = func(event)) 
// - also change any upper case to lowercase
// 