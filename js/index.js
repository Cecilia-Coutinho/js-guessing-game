// generating a random integer from 1 to 10
let answer = Math.floor(Math.random() * 100) + 1;
//console.log(`randon number: ${answer}`);

const textForUser = document.querySelector('.text');
const msgLastResult = document.querySelector('.lastResult');
const msgLowHigh1 = document.querySelector('.Low');
const msgLowHigh2 = document.querySelector('.High');

const msgGuessesNumber = document.querySelector('.guessMessage4'); //guesses

const guessSubmit = document.querySelector('.guessSubmit');
const userNumberField = document.querySelector('#userNumber'); //input user

// Execute a function when the user presses a key on the keyboard
userNumberField.addEventListener("keypress", function (e) {
    // If the user presses the "Enter" key on the keyboard
    if (e.key === "Enter") {
        // Cancel the default action
        e.preventDefault();
         // Trigger the button element with a click
        guessSubmit.click();
    }
});

let guessCount = 5;
let resetButton;

function playGuess() {
    const userGuess = Number(userNumberField.value); //input user

    //alert
    if (userGuess < 0 || userGuess > 100 ) {
        alert ('Please enter a number between 0-100');
    }
    
    msgGuessesNumber.textContent += `No. of Guesses: ${guessCount--}`;

    if (guessCount <= 5) {
        msgGuessesNumber.textContent = `No. of Guesses: ${guessCount}`;
        guessCount -= 1;
    }


    if (userGuess === answer) {
        msgLastResult.textContent = `${userGuess}: You got it right!`;
        //msgLastResult.getElementsByClassName.backgroundColor = 'green';
        msgLowHigh1.textContent = '';
        msgLowHigh2.textContent = '';
        setGameOver();
    }

    else {
        msgLastResult.textContent = `${userGuess}: Wrong!`;
        msgLastResult.style.color = '#5c141c';

        if (userGuess < answer) {
            msgLowHigh1.textContent = `${userGuess}: Too Low!`;
            textForUser.textContent = `You need to guess higher than ${userGuess}, try again!`;
        }

        else if (userGuess > answer) {
            msgLowHigh2.textContent = `${userGuess}: Too High!`;
            textForUser.textContent = `You need to guess lower than ${userGuess}, try again!`;
        }

        guessCount++;
        userNumberField.value = '';
        userNumberField.focus();

        if (guessCount <= 0) {
            //msgLastResult.getElementsByClassName.backgroundColor = 'green';
            msgLowHigh1.textContent = '';
            msgLowHigh2.textContent = '';
            setGameOver();
            resetButton.textContent = 'Game Over! Press the button to start new game';
        }
    }

    function setGameOver() {
        userNumberField.disabled = true;
        guessSubmit.disabled = true;
        resetButton = document.createElement('button');
        resetButton.classList.add('final-msg')
        resetButton.textContent = 'You Won! Press the button to start new game';
        const container = document.querySelector('.container');
        container.style.opacity = .2;
        document.body.append(resetButton);
        resetButton.addEventListener('click', resetGame);
    }

      function resetGame() {
        guessCount = 5;

        const container = document.querySelector('.container');
        container.style.opacity =  1;
        container.style.top = "";
      
        const resetResultText = document.querySelectorAll('.resultText');
        for (const resetResult of resetResultText) {
            resetResult.textContent = '';
            textForUser.textContent = "Type a number to start";
        }
      
        resetButton.parentNode.removeChild(resetButton);
      
        userNumberField.disabled = false;
        guessSubmit.disabled = false;
        userNumberField.value = '';
        userNumberField.focus();
      
          answer = Math.floor(Math.random() * 100) + 1;
          //console.log(`randon number: ${answer}`);
      }
}