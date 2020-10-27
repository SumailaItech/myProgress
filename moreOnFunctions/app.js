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

const RESULT_DRAW ='DRAW';
const RESULT_PLAYER_WIN ='PLAYER_WIN';
const RESULT_COMPUTER_WIN ='COMPUTER_WIN';


let gameIsRunning = false;

const getPlayerChoice = () =>{
    const selection = prompt(`${ROCK},${PAPER}, OR ${SCISSORS} ?`).toUpperCase();
    if(selection !==ROCK &&
    selection !==PAPER &&
    selection !==SCISSORS){
        alert(`Invalid Chioce! we choice ${DEFAULT_USER_CHOICE} for you`);
        return DEFAULT_USER_CHOICE
    } 
    return selection;
}

const getComputerChoice = () =>{
    const randomValue = Math.random();

    if(randomValue < 0.34){
        return ROCK;
    }else if(randomValue < 0.67){
       return PAPER;
    }else{
        return SCISSORS;
    }
}

const getWinner = (cChoice, pChoice) =>
        cChoice === pChoice ?  RESULT_DRAW 
        : (cChoice === ROCK && pChoice === PAPER ||
            cChoice ===PAPER && pChoice === SCISSORS ||
            cChoice === SCISSORS && pChoice ===ROCK)
            ? RESULT_PLAYER_WIN 
            : RESULT_COMPUTER_WIN;
            
    // if(cChoice === pChoice){
    //     return RESULT_DRAW
    // }else if(
    //      cChoice === ROCK && pChoice === PAPER ||
    //      cChoice ===PAPER && pChoice === SCISSORS ||
    //      cChoice === SCISSORS && pChoice ===ROCK
    // ){
    //    return RESULT_PLAYER_WIN;
    // }else{
    //     return RESULT_COMPUTER_WIN;
    // }


 startGameBtn.addEventListener('click',() =>{
     if(gameIsRunning){
         return;
     }
     gameIsRunning = true;
     console.log('Game starting...')
     const playerChoice = getPlayerChoice();
     const computerChoice = getComputerChoice();
     const winner = getWinner(computerChoice, playerChoice);
     let message = `You picked ${playerChoice}, and computer picked ${computerChoice} therefore you `;
     if(winner === RESULT_DRAW){
         message = message + 'had a draw';
     }else if(winner === RESULT_PLAYER_WIN){
         message = message + ' won';
     }else{
         message =message + ' Lost';
     }

     alert(message);
     gameIsRunning = false;
 });

