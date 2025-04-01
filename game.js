let numberToGuess = Math.round(Math.random() * 100);
let tries = 0;

function guessTheNumber() {
    tries = tries + 1;
    Versuche.innerHTML = 'Versuche: ' + tries;

    if (numberToGuess == myNumber.value) {
    headline.innerHTML = 'Glückwunsch, richtige Zahl 🥳';
    }

    if (numberToGuess > myNumber.value) {
        headline.innerHTML = 'Die Zahl ist größer 😶⬆️';
    }

    if (numberToGuess < myNumber.value) {
        headline.innerHTML = 'Die Zahl ist kleiner 🙈⬇️';
    }
    
    myNumber.value = '';
}