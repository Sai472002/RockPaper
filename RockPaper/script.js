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
        return choices[Math.floor(Math.random()*choices.length)];
    }
    
    function condition (userChoice) {
        var pchoice= choice()
        if (userChoice === pchoice){
            winner("draw")
        }

        else if (
            (userChoice === 'rock' && pchoice === 'scissors') ||
            (userChoice === 'paper' && pchoice === 'rock') ||
            (userChoice === 'scissors' && pchoice === 'paper')) 
        {
            winner("user",pchoice,userChoice)
        } 
        else {
            winner("pc",pchoice,userChoice)
        }
    }

    function winner(res,pchoice,userChoice) {
        if (res === 'user') {
            userSc++;
            Winner.textContent = `You win! PC chose :${pchoice}`;
        } else if (res === 'pc') {
            pcSc++;
            Winner.textContent = `PC wins! PC chose :- ${userChoice}`;
        } else {
            Winner.textContent = 'It\'s a draw!';
        }
        userScore.textContent = userSc;
        pcScore.textContent = pcSc;
    } 

