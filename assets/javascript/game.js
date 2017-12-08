
// establish global variables
var dictionary = ["survivor", "directory", "wisecrack", "survival", "application", "parachute", "innocent", "consideration", "discover", "cylinder", "liability", "majority", "circumstance", "flatware", "interrupt", "transfer", "skeleton", "craftsman", "multimedia", "hardship", "implicit", "compound", "inhabitant", "finished", "depressed", "reduction", "triangle", "fountain", "correspondence", "unanimous", "umbrella", "elaborate", "revolutionary", "confrontation", "horseshoe", "opponent", "manufacturer", "undermine", "director", "sentence", "patience", "expression", "competition", "flourish", "feminist", "important", "anticipation", "disappoint", "unpleasant", "dressing", "emphasis", "difference", "astonishing", "insurance", "ostracize", "policeman", "microphone", "shareholder", "handicap", "eliminate", "orthodox", "experiment", "photograph", "volunteer", "transition", "horoscope", "compartment", "ambiguity", "presidency", "scenario", "reinforce", "advertise", "classroom", "prevalence", "expenditure", "conception", "abstract", "theorist", "domestic", "disgrace", "ministry", "attitude", "computer", "corruption", "communication", "weakness", "beginning", "conflict", "electronics", "convulsion", "personality", "simplicity", "midnight", "accompany", "reaction", "necklace", "publisher", "potential", "intelligence", "worthless", "door", "needless", "pathetic", "stain", "loaf", "splendid", "grumpy", "puny", "rainy", "interfere", "impartial", "uppity", "humorous", "purpose", "workable", "thrill", "nail", "periodic", "vein", "warn", "lively", "religion", "jittery", "merciful", "snow", "relax", "gratis", "defiant", "innocent", "skinny", "laugh", "elated", "silk", "turkey", "collar", "sneaky", "jazzy", "punishment", "canvas", "cute", "examine", "unsightly", "duck", "fail", "cushion", "produce", "hunt", "cute", "ring", "cat", "jellyfish", "rabbits", "entertain", "itchy", "outstanding", "race", "bead", "art", "committee", "bless", "ready", "birthday", "grin", "load", "noiseless", "replace", "gamy", "serious", "tow", "day", "effect", "faint", "resonant", "book", "wall", "mere", "consist", "hop", "solid", "clean", "seat", "elastic", "apparatus", "quilt", "scold", "dinosaurs", "rinse", "rot", "panicky", "sable", "credit", "sigh", "honorable", "correct", "unwieldy"];
var vanillaGameWins = 0;
var vanillaGameTotal = 0;
var hardcoreGameWins = 0;
var hardcoreGameTotal = 0;
var userInput = "";
var hardcore = false;
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
  if (hardcore === true) {
    document.getElementById("hardcoreTitle").classList.remove("hidden");
  } else {
    document.getElementById("hardcoreTitle").classList.add("hidden");
  };
  var selectWord = dictionary[Math.floor(Math.random() * dictionary.length)];
  for (i = 0; i < selectWord.length; i++) {
    var letter = selectWord.charAt(i).toUpperCase();
    currentWord.push(letter);
  };
  console.log(currentWord);
  
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
  document.querySelector("#strikes").textContent = strikes + " / 7";
  document.querySelector("#vanillaRecord").textContent = vanillaGameWins + " / " + vanillaGameTotal;
  document.querySelector("#hardcoreRecord").textContent = hardcoreGameWins + " / " + hardcoreGameTotal;
};

function acceptInputs(event) {
  userInput = event.key.toUpperCase();
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
  if (strikes === 7) lose()
  else if (!maskedWord.includes("_")) win();
}

function lose() {
  if (hardcore) {
    hardcoreGameTotal++;
  } else {
    vanillaGameTotal++;
    maskedWord = "";
    for (i = 0; i < currentWord.length; i++) {
      if (usedLetters.includes(currentWord[i])) {
        maskedWord = maskedWord + currentWord[i].toUpperCase() + " ";
      } else {
        maskedWord = maskedWord + currentWord[i].toLowerCase() + " ";
      }
    };  
    document.querySelector("#maskedWord").textContent = maskedWord;    
  };
  document.getElementById("lower-middle").innerHTML = "<img src='assets/images/boots.jpg' class='swingimage' width='250' height='200' />"
  document.querySelector("#vanillaRecord").textContent = vanillaGameWins + " / " + vanillaGameTotal;
  document.querySelector("#hardcoreRecord").textContent = hardcoreGameWins + " / " + hardcoreGameTotal;
  document.querySelector("#alertDisplay").textContent = "You've met your deserved justice! Press any key to start a new game!";
  document.removeEventListener("keyup", acceptInputs);  
  lastGameWon = false;
  document.addEventListener("keyup", game);
};

function win() {
  if (hardcore) {
    hardcoreGameWins++;
    hardcoreGameTotal++;
  } else {
    vanillaGameTotal++;
    vanillaGameWins++;
  };
  document.querySelector("#vanillaRecord").textContent = vanillaGameWins + " / " + vanillaGameTotal;
  document.querySelector("#hardcoreRecord").textContent = hardcoreGameWins + " / " + hardcoreGameTotal;
  document.removeEventListener("keyup", acceptInputs);  
  document.querySelector("#alertDisplay").textContent = "You've escaped the noose! Press any key to start a new game, or press 'H' for a tougher challenge!";
  document.addEventListener("keyup", game);
  lastGameWon = true;
};

// display opening items
document.querySelector("#alertDisplay").textContent = "Press any key to start!";

// at keypress, start game
document.addEventListener("keyup", game);


function game(event) {
  document.getElementById("lower-middle").innerHTML = "Strikes<p id='strikes'></p>"  
  document.getElementById("lower-left").classList.remove("hidden");
  document.getElementById("lower-middle").classList.remove("hidden");
  document.getElementById("lower-right").classList.remove("hidden");
  document.removeEventListener("keyup", game);
  if (lastGameWon === true && event.key.toUpperCase() === "H") {hardcore = true} else {hardcore = false};
  initializeGame();
  updateDisplay();
  document.querySelector("#alertDisplay").textContent = "Waiting on you, chief. Type a letter.";
  document.querySelector("#usedDisplay").textContent = "Used Letters: You ain't picked nothin' yet.";
  document.addEventListener("keyup", acceptInputs);
};


