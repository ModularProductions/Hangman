Stopping input routine?
how to change images if innerHTML isn't available?
making game as object?

to do:
  use jQuery $("#maskedWord").append(currentWord[i]) to construct maskedWord


function restartGame() {return;};
jQuery $("#restartButton").on("click", restartGame);


// USE FOR LOOP FOR GAME?
  // Is this a bad way to use a "for" loop? (Turning it into a while...do loop)
  // i.e. using condition to end loop without iterating (eliminating final expression)
for (strikes = 7 ; strikes > 0 ; ) { 
  var randomInput = Math.floor(Math.random() * 3);
  console.log(randomInput);
  if (randomInput != 2) {
    console.log("good guess!");
  } else {strikes--; console.log("bad guess!")};
  console.log("strikes: " + strikes);
};
console.log("Done");

var strikes = 3;

while(strikes > 0){
  var randomInput = Math.floor(Math.random() * 3);
  console.log(randomInput);
  if (randomInput != 2) {
    console.log("good guess!");
  } else {strikes--; console.log("bad guess!")};
  console.log("strikes: " + strikes);
  console.log("--------");  
}
console.log("Done");


//  Opening Screen
//  establish global variables
dictionary = [];
//games = [];
//gameCounter = -1;
gamesWon = 0;
hardcoreGamesWon = 0;
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