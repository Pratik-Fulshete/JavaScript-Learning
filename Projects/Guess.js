let randomNumber = parseInt(Math.random()*100 + 1);
const submit = document.querySelector('#subt')
const userInput = document.querySelector('#guesField')
const guessSlot=document.querySelector('.guesses')
const remain=document.querySelector('#attempts')
const lowOrHi=document.querySelector('.lowOrHi')
const startOver = document.querySelector('.result')
const outofattempts = document.querySelector('.outofattempts')
const p = document.createElement('p')
let prevGuess=[]
let numGuess = 1;
let playGame = true
let guess = 0;
if(playGame){
    submit.addEventListener('click',function(e){
        e.preventDefault();
        guess = parseInt(userInput.value )  
        console.log(guess)
        validateGuess(guess)
    })
}
function validateGuess(guess){ // validate the user input
if(isNaN(guess)){
    alert('Please enter a valid number')
}else if(guess < 1 || guess > 100){
    alert('Please enter a number between 1 and 100')
}else{
   // prevGuess.push(guess)
    if(numGuess === 11){
        displayGuess(guess)
        displayMessage(`Game Over! random number was ${randomNumber}`)
        endGame()
    }else{
        displayGuess(guess)
        checkGuess(guess)
    }
}
}
function checkGuess(guess){ //check the user input with the random number 
    if(guess === randomNumber)
    {
        displayMessage(`You guessed it right!`)
        endGame()

    }else if(guess < randomNumber){
        displayMessage(`Number is too low`)
    }else if(guess > randomNumber){
        displayMessage(`Number is too high`)
    }
}
function displayGuess(guess){
userInput.value = ''
guessSlot.innerHTML +=`${guess}, `
numGuess++;
if(numGuess === 11){
    endGame()
}
remain.innerText = `${11 - numGuess}`

}
function displayMessage(message){
lowOrHi.innerHTML =`<h2>${message}</h2>`

}
function endGame(){
    userInput.value = ''
    userInput.setAttribute('disabled',true)
    p.classList.add('button')
    p.innerHTML= `<h2 id="newGame">Start New Game</h2>`
    startOver.appendChild(p)
    playGame = false
    newGame()
}
function newGame(){
const newGameBtn = document.querySelector('#newGame')
newGameBtn.addEventListener('click',function(e){
 randomNumber = parseInt(Math.random()*100 + 1);
 prevGuess = []
 numGuess = 1
 guessSlot.innerHTML =''
 remain.innerHTML =`${11-numGuess}`
 userInput.removeAttribute('disabled')
 startOver.removeChild(p)
playGame = true
})
}
