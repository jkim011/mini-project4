var button = document.createElement

var wordSelection = ["The Little Mermaid", "The Lion King", "Aladdin", "Encanto", "Cars"];
var remainingGuesses = 10;
var guessedLetters = [];
var usedWords = [];
var firstGame = true;

//select random word from wordSelection array
function selectRandomWord() {
    var selectedWord = wordSelection[Math.floor(Math.random = wordSelection.length)];

    if(usedWords.indexOf(selectedWord) < 0) {
        currentWord = newWord();
        currentWord.wordToArray(selectedWord);
        usedWords.push(selectedWord);
    }

}

