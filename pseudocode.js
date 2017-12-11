

clean up code
improve dictionary (maybe add hardcore?)
preload font?

making game as object?
//games = [];
//gameCounter = -1;
mobile-friendly letter input?

opening screen
  establish global variables
  display opening items
at keypress, start game
game
  establish currentWord
  create maskedWord
  display items
  after each keypress
    update items
  when strikes === 0 || currentWord no longer contains "_"
    update wins or losses
    display win or loss screen
  press any key to restart OR press "h" for hardcore game


//  Opening Screen
//  establish global variables



"Press any key to start!"
//  render display

//  Start Game
function runGame {
  //  select new word
  function selectWord() {
    for (i = 0 ; i < selectWord.length ; i++) {
      var letter = selectWord.charAt(i).toUpperCase();
      currentWord.push(letter);
    }
  }
}
//  render display


  create "word" object
    var word = {
      currentWord : selectWord(),
      maskedWord : 
    }
  // gameCounter++;
  // push new game into games[];
  //now working with games[gameCounter]
End Game
  if won
    if (!hardcore) gamesWon++;
    if (hardcore) hardcoreGamesWon++;
  display gamesWon
  display gamesLost
  display hardcoreGamesWon
  display hardcoreGamesLost

Start new game? Start new hardcore game (if previous game won)?




  
  function startScreen() {
  // hardcore?
  };
  
  function runGame() {
    var usedLetters = [];
    var currentWord = [];
    var maskedWord;
    var alertDisplay = "<p>Waiting on you, chief.</p>";
    var usedDisplay = "You ain't picked nothin'.";
    var strikes = 0;
    var endGameAlert = "";
  };
  
  function displayRenders() {
    maskedWord = "";
    for (i = 0; i < currentWord.length; i++) {
      if (usedLetters.includes(currentWord[i])) {
        maskedWord = maskedWord + currentWord[i].toUpperCase() + " ";
      } else {
        maskedWord = maskedWord + "_ ";
      }
    };
    console.log("maskedWord: " + maskedWord);
    usedDisplay = "";
    if (hardcore) {
      usedDisplay = "Your last pick was '" + userInput.toUpperCase() + "'."
    } else for (i = 0 ; i < usedLetters.length; i++) {
      usedDisplay = usedDisplay + usedLetters[i].toUpperCase() + " ";
    };
    document.querySelector("#title").innerHTML = "<h1>" + title + "</h1>";
    document.querySelector("#maskedWord").innerHTML = "<p>" +  maskedWord + "</p>";
    document.querySelector("#usedDisplay").innerHTML = "<p>Used Letters: " +  usedDisplay + "</p>";
    document.querySelector("#alertDisplay").innerHTML = "<p>" +  alertDisplay + "</p>";
    document.querySelector("#strikes").innerHTML = "<p>Strikes: " + strikes + " / 7</p>" + "</p>";
    document.querySelector("#endGameAlert").innerHTML = "";
    document.querySelector("#gamesWon").innerHTML =  "<p>" + gamesWon + "</p>";
    document.querySelector("#hardcoreGamesWon").innerHTML =  "<p>" + hardcoreGamesWon + "</p>";
  };
  
  currentWord = 
  function createWord () {
    var selectWord = dictionary[Math.floor(Math.random() * dictionary.length)];
    for (i = 0 ; i < selectWord.length ; i++) {
      var letter = selectWord.charAt(i).toUpperCase();
      currentWord.push(letter);
    };
    console.log("initial currentWord: " + currentWord);
  }
  
  // main game body
  
  // press any key to start!
  runGame();
  
  while (strikes > 0) {  
  var randomInput = Math.floor(Math.random() * 3);
  console.log(randomInput);
  if (randomInput != 2) {
    console.log("good guess!");
  } else {strikes--; console.log("bad guess!")};
  console.log("strikes: " + strikes);
  console.log("--------");  
  }
  console.log("Done");
  
  