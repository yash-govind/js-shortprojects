let randomNumber = parseInt(Math.random()*100+1);
const userInput = document.querySelector('#guessField'); //for user input
const submit = document.querySelector('#subt'); //for submitting
const guessSlot  = document.querySelector('.guesses'); //to enter the guess
const remaining  = document.querySelector('.lastResult');//to enter remaining guesses
const lowOrhigh = document.querySelector('.lowOrHi'); //to display the message.
const StartOver = document.querySelector('.resultParas');
const p = document.createElement('p');

let playGame  = true;
let prevGuess = [];
let numGuess = 0;
 
// to play the game when you click on submit button 
if(playGame){
    submit.addEventListener('click',function(event){
        event.preventDefault();
   const guess = parseInt( userInput.value ); //guess is the value you entered in the form
        validateGuess(guess);
    })
}

function validateGuess(guess){ //to see if guess is a valid input 
if(isNaN(guess)){ //for invalid inputs 
alert('Enter a valid number ')
}
else if(guess<1 ||guess>100){
alert('Enter a number Within the Range ');
}
else{ //is a valid input 
    prevGuess.push(guess);
    if(numGuess>=10){
        //game is over.
        //display the guess
        displayGuess(guess);
        displayMessage(`Game is over , the number is :  ${randomNumber}`);
    }
    else{
        //game continues.
        // display the guess and check the condition for the number.
        displayGuess(guess);
        checkCondition(guess);
    }
}
}
function checkCondition(guess){ //to check the condition of guess.
if(guess===randomNumber){
 displayMessage("YAY YOU WON THE GAME ");
//  endGame();
}
else if(guess<randomNumber){
displayMessage("TRY AGAIN , THE NUMBER IS VERYYYYYYYYYYYYY LOWWWWWWW");
}
else if(guess>randomNumber){
displayMessage("TRY AGAIN , THE NUMBER IS VERYYYYYYYYYYYY HIGH");
}
}
function displayGuess(guess){ //to show the guesses and remaining guesses.
 userInput.value = ''; //make the form empty after a user inputs the guess.
 guessSlot.innerHTML += `${guess} , `;
 numGuess++;
 remaining.innerHTML = `${11-numGuess}`;
}
function displayMessage(message){ //to display the text .
    lowOrhigh.innerHTML = `<h2>${message}</h2>`;
    }

  function endGame(){
        userInput.value = '';
        userInput.setAttribute('disabled','');
        p.classList.add('button');
        p.innerHTML = `<h2 id = "newGame">Start New Game </h2>`
        StartOver.appendChild(p);
        playGame = false;
  }