const startGameBtn = document.getElementById('start-game-btn');

// function startGame(){
//     console.log('Game starting...')
// }

// const start = function startGame(){
//     console.log('Game starting...')
// }
// console.log(typeof startGame);
//console.dir(startGame);
const ROCK ='ROCK';
const PAPER ='PAPER';
const SCISSORS ='SCISSORS';
const DEFAULT_USER_CHOICE = ROCK;

let gameIsRunning = false;

const getPlayerChoice = function(){
    const selection = prompt(`${ROCK},${PAPER}, OR ${SCISSORS} ?`).toUpperCase();
    if(selection !==ROCK &&
    selection !==PAPER &&
    selection !==SCISSORS){
        alert(`Invalid Chioce! we choice ${DEFAULT_USER_CHOICE} for you`);
        return DEFAULT_USER_CHOICE
    } 
    return selection;
}

 startGameBtn.addEventListener('click',function(){
     if(gameIsRunning){
         return;
     }
     gameIsRunning = true;
     console.log('Game starting...')
     const playerSelection = getPlayerChoice();
     console.log(playerSelection);
 });

