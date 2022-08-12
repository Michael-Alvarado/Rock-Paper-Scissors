
var wins = 0;
var losses = 0;
var ties = 0;
var options = ['r', 'p', 's'];

var playAgain = function() {
    x = window.confirm("Want to play again?");
    if (x) {
        playGame();
    } else {
        return;
    }
}

var printStats = function() {
    alert("Ties: " + ties + "\nWins: " + wins + "\nLosses: " + losses);
}

var playGame = function() {
    var user = window.prompt("Please choose R, P, S");

    if(!user || !options.includes(user)) {
        return;
    }

    user = user.toLowerCase();

    var comp = options[Math.floor(Math.random() * options.length)];

    if (user === comp) {
        ties++; 
        window.alert("Computer chose " + comp + ". It's a tie");
        printStats();
        playAgain();
    } else if (
        (user === 'r' && comp === 's') || 
        (user === 's' && comp === 'p') ||
        (user === 'p' && comp === 'r')) {
        wins++;
        window.alert("Computer chose " + comp + ". You win!");
        printStats();
        playAgain(); 
    } else {
        losses++;
        window.alert("Computer chose " + comp + ". You lose.");
        printStats();
        playAgain();
    }
}


playGame();