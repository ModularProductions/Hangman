
// establish global variables
var dictionary = ["survivor", "directory", "wisecrack", "survival", "application", "parachute", "innocent", "consideration", "discover", "cylinder", "liability", "majority", "circumstance", "flatware", "interrupt", "transfer", "skeleton", "craftsman", "multimedia", "hardship", "implicit", "compound", "inhabitant", "finished", "depressed", "reduction", "triangle", "fountain", "correspondence", "unanimous", "umbrella", "elaborate", "revolutionary", "confrontation", "horseshoe", "opponent", "manufacturer", "undermine", "director", "sentence", "patience", "expression", "competition", "flourish", "feminist", "important", "anticipation", "disappoint", "unpleasant", "dressing", "emphasis", "difference", "astonishing", "insurance", "ostracize", "policeman", "microphone", "shareholder", "handicap", "eliminate", "orthodox", "experiment", "photograph", "volunteer", "transition", "horoscope", "compartment", "ambiguity", "presidency", "scenario", "reinforce", "advertise", "classroom", "prevalence", "expenditure", "conception", "abstract", "theorist", "domestic", "disgrace", "ministry", "attitude", "computer", "corruption", "communication", "weakness", "beginning", "conflict", "electronics", "convulsion", "personality", "simplicity", "midnight", "accompany", "reaction", "necklace", "publisher", "potential", "intelligence", "worthless", "door", "needless", "pathetic", "stain", "loaf", "splendid", "grumpy", "puny", "rainy", "interfere", "impartial", "uppity", "humorous", "purpose", "workable", "thrill", "nail", "periodic", "vein", "warn", "lively", "religion", "jittery", "merciful", "snow", "relax", "gratis", "defiant", "innocent", "skinny", "laugh", "elated", "silk", "turkey", "collar", "sneaky", "jazzy", "punishment", "canvas", "cute", "examine", "unsightly", "duck", "fail", "cushion", "produce", "hunt", "cute", "ring", "cat", "jellyfish", "rabbits", "entertain", "itchy", "outstanding", "race", "bead", "art", "committee", "bless", "ready", "birthday", "grin", "load", "noiseless", "replace", "gamy", "serious", "tow", "day", "effect", "faint", "resonant", "book", "wall", "mere", "consist", "hop", "solid", "clean", "seat", "elastic", "apparatus", "quilt", "scold", "dinosaurs", "rinse", "rot", "panicky", "sable", "credit", "sigh", "honorable", "correct", "unwieldy"];
var vanillaGameWins = 0;
var vanillaGameTotal = 0;
var hardcoreGameWins = 0;
var hardcoreGameTotal = 0;
var userInput = "";
var hardcore = "false";
var title = "Hangman";
var alertDisplay;
var currentWord = [];  
var usedLetters = [];
var strikes = 0;  
var maskedWord = [];
var lastGameWon = false;

function initializeGame() {
  currentWord = [];  
  usedLetters = [];
  strikes = 0;
  document.querySelector("#endGameAlert").textContent = "";  
  alertDisplay = "Waiting on you, chief.";
  usedDisplay = "You ain't picked nothin' yet.";
  var selectWord = dictionary[Math.floor(Math.random() * dictionary.length)];
  for (i = 0; i < selectWord.length; i++) {
    var letter = selectWord.charAt(i).toUpperCase();
    currentWord.push(letter);
  };
};

function updateDisplay() {
  maskedWord = "";
  for (i = 0; i < currentWord.length; i++) {
    if (usedLetters.includes(currentWord[i])) {
      maskedWord = maskedWord + currentWord[i].toUpperCase() + " ";
    } else {
      maskedWord = maskedWord + "_ ";
    }
  };
  usedDisplay = "";
  if (hardcore === true) {
    usedDisplay = "Your last pick was '" + userInput.toUpperCase() + "'."
  } else for (i = 0; i < usedLetters.length; i++) {
    usedDisplay = usedDisplay + usedLetters[i].toUpperCase() + " ";
  };
  document.querySelector("#maskedWord").textContent = maskedWord;
  document.querySelector("#usedDisplay").textContent = "Used Letters: " + usedDisplay;
  document.querySelector("#alertDisplay").textContent = alertDisplay;
  document.querySelector("#strikes").textContent = "Strikes: " + strikes + " / 7";
  document.querySelector("#vanillaRecord").textContent = "Vanilla games won: " + vanillaGameWins + " / " + vanillaGameTotal;
  document.querySelector("#hardcoreRecord").textContent = "Hardcore games won: " + hardcoreGameWins + " / " + hardcoreGameTotal;
};
// console.log(currentWord);




function acceptInputs(event) {
  userInput = event.key.toUpperCase();
  console.log("acceptInputs starts");
  console.log("userInput = " + userInput);
  console.log("usedLetters = " + usedLetters);
  console.log("currentWord = " + currentWord);
  console.log("alertDisplay = " + alertDisplay);
  console.log("strikes = " + strikes);
  console.log("-");
  if (!usedLetters.includes(userInput)) {
    usedLetters.push(userInput);
    usedLetters = usedLetters.sort();
    if (!currentWord.includes(userInput)) {
      strikes++;
      alertDisplay = "Nope, you're one step closer to stretching!";
    } else {
      alertDisplay = "Good choice!";
    };
  } else {
    alertDisplay = "You've already used that letter!";
    if (hardcore) { strikes++; };
  };
  updateDisplay();
  console.log("acceptInputs ends");
  console.log("userInput = " + userInput);
  console.log("maskedWord = " + maskedWord);
  console.log("usedLetters = " + usedLetters);
  console.log("currentWord = " + currentWord);
  console.log("alertDisplay = " + alertDisplay);
  console.log("strikes = " + strikes);
  console.log("---");
  if (strikes === 7) {
    console.log(strikes);
    console.log("dead!");
    vanillaGameTotal++;
    document.removeEventListener("keyup", acceptInputs);  
    document.querySelector("#endGameAlert").textContent = "You lost! Press any key to start a new game!";
    document.addEventListener("keyup", game);
  }
  else if (!maskedWord.includes("_")) {
    vanillaGameTotal++;
    vanillaGameWins++;
    document.removeEventListener("keyup", acceptInputs);  
    document.querySelector("#endGameAlert").textContent = "You won! Press any key to start a new game!";
    document.addEventListener("keyup", game);
    lastGameWon = true;

  }
};


// at keypress, start game
document.addEventListener("keyup", game);

// display opening items
document.querySelector("#title").textContent = title;
document.querySelector("#alertDisplay").textContent = "Press any key to start!";

function game(event) {
  document.removeEventListener("keyup", game);
  initializeGame();
    console.log("end initializeGame");
    console.log("alertDisplay = " + alertDisplay);
    console.log("usedDisplay = " + usedDisplay);
    console.log("currentWord = " + currentWord);
    console.log("---");
  updateDisplay();
  document.addEventListener("keyup", acceptInputs)

};


