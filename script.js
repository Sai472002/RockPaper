let userScore = document.getElementById('user');
let pcScore = document.getElementById('pc');
let Winner = document.getElementById('winner');
document.getElementById('bt1').addEventListener('click', () => condition('rock'));
document.getElementById('bt2').addEventListener('click', () => condition('paper'));
document.getElementById('bt3').addEventListener('click', () => condition('scissors'));

let userSc = 0;
let pcSc = 0;
const choices = ['rock', 'paper', 'scissors'];

function choice() {
    return choices[Math.floor(Math.random() * choices.length)];
}

function condition(userChoice) {
    var pchoice = choice();
    if (userChoice === pchoice) {
        winner("draw");
    } else if (
        (userChoice === 'rock' && pchoice === 'scissors') ||
        (userChoice === 'paper' && pchoice === 'rock') ||
        (userChoice === 'scissors' && pchoice === 'paper')
    ) {
        winner("user", pchoice, userChoice);
    } else {
        winner("pc", pchoice, userChoice);
    }
}

function winner(res, pchoice, userChoice) {
    if (res === 'user') {
        userSc++;
        Winner.textContent = `You win! PC chose: ${pchoice}`;
    } else if (res === 'pc') {
        pcSc++;
        Winner.textContent = `PC wins! PC chose: ${userChoice}`;
    } else {
        Winner.textContent = 'It\'s a draw!';
    }

    userScore.textContent = userSc;
    pcScore.textContent = pcSc;

    // Check if either player reaches 10 points
    if (userSc === 10) {
        Winner.textContent = "Congratulations! You are the overall winner!";
        resetGame();
    } else if (pcSc === 10) {
        Winner.textContent = "PC wins the game! Better luck next time!";
        resetGame();
    }
}

function resetGame() {
    userSc = 0;
    pcSc = 0;
    userScore.textContent = userSc;
    pcScore.textContent = pcSc;
}
