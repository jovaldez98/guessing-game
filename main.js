const answer = Math.floor(Math.random() * 25) + 1;
const $gameForm = document.getElementById('gameForm');

$gameForm = addEventListener('submit', handleGameForm);

function handleGameForm(event) {
    event.preventDefault();
    const guess = event.target.elements.guess.value;
    checkGuess(guess);
}

function checkGuess(guess) {
    if (guess > answer) {
        alert('Too high!, try again');
    } else if (guess < answer) {
        alert('Ahh, too low! Try again');
    } else {
        alert('Correct! You win!!!');
    }
}