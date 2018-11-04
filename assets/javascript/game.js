 var letter = "abcdefghijklmnopqrstuvwxyz";
        var wins = 0;
        var losses = 0;
        var guessesLeft = 9;
        var guessesMade = '';

        var winsText = document.getElementById("wins");
        var lossesText = document.getElementById("losses");
        var guessesLeftText = document.getElementById("guesses-left");
        var guessesMadeText = document.getElementById("guesses-made");

        winsText.textContent = "Wins: " + wins;
        lossesText.textContent = "Losses: " + losses;
        guessesLeftText.textContent = "Guesses left: " + guessesLeft;
        guessesMadeText.textContent = "Guesses made: " + guessesMade;

        document.onkeyup = function (event) {
            var userInput = event.key;
            // Tells computer to randomly pick a letter in the alphabet that is in the string.
            var computerGuess = letter.charAt(Math.floor(Math.random() * letter.length));
            // Converts userinput to all lowercase.
            var userInputLower = userInput.toLowerCase();
            // Subracts 1 from guessesLeft every time a letter is guessed.
            guessesLeft--;

            // Stores the values of the user input into the empty string and displays it on guessesMade.
            guessesMade += userInputLower;

            // Will only count wins, if it is a letter in the string.
            if (letter.indexOf(userInputLower) === -1) {
            }
            // If user picks same letter as computer, then 1 point is added to your wins, resets the game.
            else if (userInputLower === computerGuess) {
                wins++;
                guessesLeft = 9;
                guessesMade = '';
            }

            // Resets the game and adds 1 to losses if the user doesn't guess correctly by 9 tries.
            if (guessesLeft === 0) {
                guessesLeft = 9;
                losses++;
                guessesMade = "";
            }

            winsText.textContent = "Wins: " + wins;
            lossesText.textContent = "Losses: " + losses;
            guessesLeftText.textContent = "Guesses left: " + guessesLeft;
            guessesMadeText.textContent = "Guesses made: " + guessesMade;
        }
