
Opening Screen
  establish global variables
    dictionary = [];
    //games = [];
    //gameCounter = -1;
    gamesWon = 0;
    hardcoreGamesWon = 0;
  "Press any key to start!"
Start Game
  select new word
    function selectWord() {
      for (i = 0 ; i < selectWord.length ; i++) {
        var letter = selectWord.charAt(i).toUpperCase();
        currentWord.push(letter);
      };
    }
  render display


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