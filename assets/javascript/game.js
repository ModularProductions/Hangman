
// establish global variables
var dictionary = ["survivor", "directory", "wisecrack", "survival", "application", "parachute", "innocent", "consideration", "discover", "cylinder", "liability", "majority", "circumstance", "flatware", "interrupt", "transfer", "skeleton", "craftsman", "multimedia", "hardship", "implicit", "compound", "inhabitant", "finished", "depressed", "reduction", "triangle", "fountain", "correspondence", "unanimous", "umbrella", "elaborate", "revolutionary", "confrontation", "horseshoe", "opponent", "manufacturer", "undermine", "director", "sentence", "patience", "expression", "competition", "flourish", "feminist", "important", "anticipation", "disappoint", "unpleasant", "dressing", "emphasis", "difference", "astonishing", "insurance", "ostracize", "policeman", "microphone", "shareholder", "handicap", "eliminate", "orthodox", "experiment", "photograph", "volunteer", "transition", "horoscope", "compartment", "ambiguity", "presidency", "scenario", "reinforce", "advertise", "classroom", "prevalence", "expenditure", "conception", "abstract", "theorist", "domestic", "disgrace", "ministry", "attitude", "computer", "corruption", "communication", "weakness", "beginning", "conflict", "electronics", "convulsion", "personality", "simplicity", "midnight", "accompany", "reaction", "necklace", "publisher", "potential", "intelligence", "worthless", "door", "needless", "pathetic", "stain", "loaf", "splendid", "grumpy", "puny", "rainy", "interfere", "impartial", "uppity", "humorous", "purpose", "workable", "thrill", "nail", "periodic", "vein", "warn", "lively", "religion", "jittery", "merciful", "snow", "relax", "gratis", "defiant", "innocent", "skinny", "laugh", "elated", "silk", "turkey", "collar", "sneaky", "jazzy", "punishment", "canvas", "cute", "examine", "unsightly", "duck", "fail", "cushion", "produce", "hunt", "cute", "ring", "cat", "jellyfish", "rabbits", "entertain", "itchy", "outstanding", "race", "bead", "art", "committee", "bless", "ready", "birthday", "grin", "load", "noiseless", "replace", "gamy", "serious", "tow", "day", "effect", "faint", "resonant", "book", "wall", "mere", "consist", "hop", "solid", "clean", "seat", "elastic", "apparatus", "quilt", "scold", "dinosaurs", "rinse", "rot", "panicky", "sable", "credit", "sigh", "honorable", "correct", "unwieldy"];
var hardcoreDictionary = ["jazz", "buzz", "hajj", "fuzz", "jinx", "fizz", "puff", "jiff", "razz", "buff", "quiz", "faff", "huff", "zine", "duff", "jays", "jars", "jive", "joke", "boxy", "cozy", "doff", "jeez", "junk", "faze", "jazzy", "fuzzy", "faffs", "fizzy", "jiffs", "swizz", "dizzy", "joked", "jives", "buffs", "muzzy", "joker", "fazes", "foxed", "hazes", "huffs", "faxed", "jokes", "faxes", "foxes", "waxes", "duffs", "fazed", "staff", "babes", "jazzed", "buzzed", "jazzes", "faffed", "fizzed", "buzzer", "bovver", "fuzzed", "joking", "buffed", "foxing", "jagged", "fazing", "faxing", "jogged", "jinxed", "zapped", "jibbed", "buzzes", "fizzes", "faking", "jugged", "jobbed", "hazing", "bopped", "jazzing", "buzzing", "jazzier", "faffing", "fuzzing", "buzzers", "buffing", "jizzing", "jinxing", "puffing", "jobbing", "huffing", "waxwing", "bopping", "jelling", "razzing", "zapping", "jamming", "quaking", "jibbing", "vivaing", "fopping", "cuffing", "queuing", "bumming", "jazziest", "quizzing", "fuzziest", "fizzling", "puppying", "whizzing", "jammiest", "babbling", "bubbling", "quizzers", "bowwowed", "muzzling", "whiffing", "propping", "jemmying", "shivving", "fluffing", "whimming", "puzzling", "blobbing", "muffling", "kookiest", "quaffing", "yummiest", "quipping", "muzziness", "bowwowing", "huzzaing", "powwowing", "bubbliest", "mugginess", "fuzziness", "kookiness", "fluffiest", "peppiness", "wooziness", "jolliness", "doddering", "boohooing", "hoodooing", "cockiness", "juddering", "yammering", "muddiness", "voodooing", "zippering", "giggliest", "gabbiness", "suffering", "squabbing", "zigzagging", "wigwagging", "grogginess", "beekeeping", "mummifying", "fluffiness", "fulfilling", "shabbiness", "revivified", "hobnobbing", "beekeepers", "wheeziness", "shagginess", "sleeveless", "parallaxes", "woolliness", "chumminess", "skyjacking", "grubbiness", "wobbliness", "jaywalkers", "alkalizing", "blabbering", "overjoying"];
console.log("Cheater!");

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

//audio setup
var audioMute = false;
function toggleMute() {
  if (!audioMute) {
    audioMute = true;
    document.getElementById("audio").innerHTML = "<span id='audioButton'></span>audio OFF";    
  } else {
    audioMute = false;
    document.getElementById("audio").innerHTML = "<span id='audioButton' class='audioOn'></span>audio ON";    
  };
};
document.getElementById("audio").addEventListener("click", toggleMute);

// initialize New Game
function initializeGame() {
  currentWord = [];  
  usedLetters = [];
  strikes = 0;
  if (hardcore) {
    document.getElementById("hardcoreTitle").classList.remove("hidden");
    var selectWord = hardcoreDictionary[Math.floor(Math.random() * hardcoreDictionary.length)];
  } else {
    document.getElementById("hardcoreTitle").classList.add("hidden");
    var selectWord = dictionary[Math.floor(Math.random() * dictionary.length)];
  };
  for (i = 0; i < selectWord.length; i++) {
    var letter = selectWord.charAt(i).toUpperCase();
    currentWord.push(letter);
  };
  console.log(currentWord);
  
};

// update display items when input received
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
  if (hardcore) {
    usedDisplay = "Your last pick was '" + userInput.toUpperCase() + "'."
  } else for (i = 0; i < usedLetters.length; i++) {
    usedDisplay = usedDisplay + usedLetters[i].toUpperCase() + " ";
  };
  document.querySelector("#maskedWord").textContent = maskedWord;
  document.querySelector("#usedDisplay").textContent = "Used Letters: " + usedDisplay;
  document.querySelector("#alertDisplay").textContent = alertDisplay;
  if (hardcore) {document.querySelector("#strikes").textContent = strikes + " / 10"}
  else {document.querySelector("#strikes").textContent = strikes + " / 7"}
  document.querySelector("#vanillaRecord").textContent = vanillaGameWins + " / " + vanillaGameTotal;
  document.querySelector("#hardcoreRecord").textContent = hardcoreGameWins + " / " + hardcoreGameTotal;
};

// receive inputs
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
  if ((!hardcore && strikes === 7) || (hardcore && strikes === 10)) lose()
  else if (!maskedWord.includes("_")) win();
}

// lose screen
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
  if (!audioMute) {document.getElementById("loseAudio").play()};
  document.getElementById("lower-middle").innerHTML = "<img src='assets/images/loss.png' class='swingimage' width='250' height='200' />"
  document.querySelector("#vanillaRecord").textContent = vanillaGameWins + " / " + vanillaGameTotal;
  document.querySelector("#hardcoreRecord").textContent = hardcoreGameWins + " / " + hardcoreGameTotal;
  document.querySelector("#alertDisplay").textContent = "You've met your deserved justice! Press any key to start a new game!";
  document.removeEventListener("keyup", acceptInputs);  
  lastGameWon = false;
  document.addEventListener("keyup", game);
};

// win screen
function win() {
  if (hardcore) {
    hardcoreGameWins++;
    hardcoreGameTotal++;
  } else {
    vanillaGameTotal++;
    vanillaGameWins++;
  };
  if (!audioMute) {document.getElementById("winAudio").play()};
  document.getElementById("lower-middle").innerHTML = "<img src='assets/images/win.png' width='250' height='200' />"  
  document.querySelector("#vanillaRecord").textContent = vanillaGameWins + " / " + vanillaGameTotal;
  document.querySelector("#hardcoreRecord").textContent = hardcoreGameWins + " / " + hardcoreGameTotal;
  document.removeEventListener("keyup", acceptInputs);  
  document.querySelector("#alertDisplay").textContent = "You've escaped the noose! Press any key to start a new game, or press 'H' for a tougher challenge!";
  document.addEventListener("keyup", game);
  lastGameWon = true;
};

// display opening screen items
document.querySelector("#alertDisplay").textContent = "Press any key to start!";

// at keypress, start game
document.addEventListener("keyup", game);


function game(event) {
  document.getElementById("lower-middle").innerHTML = "Strikes<p id='strikes'></p>"  
  document.getElementById("lower-left").classList.remove("hidden");
  document.getElementById("lower-middle").classList.remove("hidden");
  document.getElementById("lower-right").classList.remove("hidden");
  document.removeEventListener("keyup", game);
  if (lastGameWon && event.key.toUpperCase() === "H") {hardcore = true} else {hardcore = false};
  initializeGame();
  updateDisplay();
  if (hardcore) {document.querySelector("#alertDisplay").textContent = "You got guts, don't you? Enjoy your extra strikes, 'cause you're gonna need them.";}
  else {document.querySelector("#alertDisplay").textContent = "Waiting on you, chief. Type a letter."};
  document.querySelector("#usedDisplay").textContent = "Used Letters: You ain't picked nothin' yet.";
  document.addEventListener("keyup", acceptInputs);
};

//credit to Jon McLoone - "25 Best Hangman Words" @ Wolfram Blog
//http://blog.wolfram/2010/08/13/25-best-hangman-words/
