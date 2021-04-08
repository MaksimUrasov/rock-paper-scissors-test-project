const arrayOfGestures = ['rock','paper','scissors'];

const startButtonNode = document.querySelector("a");
const gameContainernNode = document.querySelector("#gameContainer");
const resultNumberContainerNode = document.querySelector("#resultNumbersContainer");
const resultLogContainerNode = document.querySelector("#resultLogContainer");

const playersChoiceContainerNode = document.querySelector("#playersChoiceContainer");
const computersChoiceContainerNode = document.querySelector("#computerChoiceContainer");

const computerTextNode = document.querySelector("#computerText");

const playersINode = playersChoiceContainerNode.querySelector("i");
const computersINode = computersChoiceContainerNode.querySelector("i");

let playerScore = 0
let computerScore = 0
let numberOfWins = 5
    

startButtonNode.addEventListener("click", startGameWindow)

function startGameWindow() {

    numberOfWins= parseInt(prompt("Max amount of wins to be: ", "5" ))

    
    startButtonNode.textContent = "RESTART"  
    startButtonNode.style.opacity= "0.5"
    gameContainernNode.style.visibility= "visible";
    

    // below is needed after player presses RESTART, to swipe down previous game
    playerScore = 0;
    computerScore = 0;
    playersChoiceContainerNode.style.backgroundColor = "cornsilk";
    playersChoiceContainerNode.style.boxShadow = "0 0px 20px 20px cornsilk";
    computersChoiceContainerNode.style.backgroundColor = "cornsilk";
    computersChoiceContainerNode.style.boxShadow = "0 0px 20px 20px cornsilk";

    playersINode.classList.remove(`fa-hand-paper`);
    playersINode.classList.remove(`fa-hand-scissors`);
    playersINode.classList.remove(`fa-hand-rock`);
    
    computersINode.classList.remove(`fa-hand-paper`);
    computersINode.classList.remove(`fa-hand-scissors`);
    computersINode.classList.remove(`fa-hand-rock`);

    playersChoiceContainerNode.style.visibility = "hidden";
    computersChoiceContainerNode.style.visibility = "hidden";
    resultNumberContainerNode.textContent = "";

    computerTextNode.textContent = "Computer has already made his choice, please make yours"



}


function startGame(playersChoose) {

    // console.log(playersChoose)
    playersChoiceContainerNode.style.visibility = "visible";
    

    // remove old classes from icon node and add a new onw according to selection
    playersINode.classList.remove(`fa-hand-paper`);
    playersINode.classList.remove(`fa-hand-scissors`);
    playersINode.classList.remove(`fa-hand-rock`);
    playersINode.classList.add(`fa-hand-${playersChoose}`);


    computersINode.classList.remove(`fa-hand-paper`);
    computersINode.classList.remove(`fa-hand-scissors`);
    computersINode.classList.remove(`fa-hand-rock`);

    
    
    setTimeout(computersPlay, 300, playersChoose);
    

    
    
}

function computersPlay(playersChoose) {

    let randomComputersChoose = arrayOfGestures[Math.floor(Math.random() * 3 )]
    computersChoiceContainerNode.style.visibility = "visible";
    computerTextNode.textContent = `Computer chose: ${randomComputersChoose}`
    

    // remove old classes from icon node and add a new onw according to selection
    
    computersINode.classList.add(`fa-hand-${randomComputersChoose}`);
   
    evaluatePlayDifference(playersChoose,randomComputersChoose)
    
    
    
}

function evaluatePlayDifference(plr,cmp) {
    // console.log(plr,cmp)

 
    if (plr == "rock" && cmp == "paper") {
        computerScore += 1;
        changeBackgroundColor(1)
        
    } else if (plr == "rock" && cmp == "scissors") {
        playerScore += 1;
        changeBackgroundColor(0)

    } else if (plr == "paper" && cmp == "rock") {
        playerScore += 1;
        changeBackgroundColor(0)

    } else if (plr == "paper" && cmp == "scissors") {
        computerScore += 1;
        changeBackgroundColor(1)

    } else if (plr == "scissors" && cmp == "rock") {
        computerScore += 1;
        changeBackgroundColor(1)

    } else if (plr == "scissors" && cmp == "paper") {
        playerScore += 1;
        changeBackgroundColor(0)
        
    } else if (plr == cmp) {  
        changeBackgroundColor(2)
        

    } 
    
    // console.log(playerScore, computerScore, resultNumberContainerNode)
    resultNumberContainerNode.textContent = `${playerScore} : ${computerScore}`;
    
}

function changeBackgroundColor(result) {
    if (result == 0) {
        playersChoiceContainerNode.style.backgroundColor = "green";
        playersChoiceContainerNode.style.boxShadow = "0 0px 20px 20px green";
        computersChoiceContainerNode.style.backgroundColor = "red";
        computersChoiceContainerNode.style.boxShadow = "0 0px 20px 20px red";
    } else if ( result == 1 ){
        playersChoiceContainerNode.style.backgroundColor = "red";
        playersChoiceContainerNode.style.boxShadow = "0 0px 20px 20px red";
        computersChoiceContainerNode.style.backgroundColor = "green";
        computersChoiceContainerNode.style.boxShadow = "0 0px 20px 20px green";
    } else {
        playersChoiceContainerNode.style.backgroundColor = "orange";
        playersChoiceContainerNode.style.boxShadow = "0 0px 20px 20px orange";
        computersChoiceContainerNode.style.backgroundColor = "orange";
        computersChoiceContainerNode.style.boxShadow = "0 0px 20px 20px orange";
    }

    countGameEnd()
    
}

function countGameEnd(){
    switch (numberOfWins){
        case playerScore :
            setTimeout(()=>alert(`YOU ARE THE WINNER!!!!!!`),700)
            
            break;
        case computerScore :
            setTimeout(()=>alert (`Ooooh, computer has won this tournament, \nbut dont worry you can try again :)`) ,700)
            
            break;
        case computerScore && playerScore :
            setTimeout(()=>alert (`DRAW! \n Sometimes that happens, but dont worry you can try again :) `) ,700)
            
    }
    return
}

