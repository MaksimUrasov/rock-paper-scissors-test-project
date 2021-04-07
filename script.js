const arrayOfGestures = ['rock','paper','scissors'];


const startButtonNode = document.querySelector("a");
const gameContainernNode = document.querySelector("#gameContainer");
const resultNumberContainerNode = document.querySelector("#resultNumbersContainer");
const resultLogContainerNode = document.querySelector("#resultLogContainer");
const playersChoiceContainerNode = document.querySelector("#playersChoiceContainer");
const computersChoiceContainerNode = document.querySelector("#computerChoiceContainer");
const computerTextNode = document.querySelector("#computerText");

let playerScore = 0
let computerScore = 0


const computersINode = computersChoiceContainerNode.querySelector("i");

function startGameWindow() {
    startButtonNode.textContent = "RESTART"  
    startButtonNode.style.opacity= "0.5"
    gameContainernNode.style.visibility= "visible";
    resultLogContainerNode.textContent = "";
}

function startGame(playersChoose) {
    // console.log(playersChoose)
    playersChoiceContainerNode.style.visibility = "visible";
    const playersINode = playersChoiceContainerNode.querySelector("i");

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
    computerTextNode.textContent = `Computer chose ${randomComputersChoose}`
    

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
        playersChoiceContainerNode.style.backgroundColor = "red";
        playersChoiceContainerNode.style.boxShadow = "0 0px 20px 20px red";
        computersChoiceContainerNode.style.backgroundColor = "green";
        computersChoiceContainerNode.style.boxShadow = "0 0px 20px 20px green";
    } else if ( result == 1 ){
        playersChoiceContainerNode.style.backgroundColor = "green";
        playersChoiceContainerNode.style.boxShadow = "0 0px 20px 20px green";
        computersChoiceContainerNode.style.backgroundColor = "red";
        computersChoiceContainerNode.style.boxShadow = "0 0px 20px 20px red";
    } else {
        playersChoiceContainerNode.style.backgroundColor = "orange";
        playersChoiceContainerNode.style.boxShadow = "0 0px 20px 20px orange";
        computersChoiceContainerNode.style.backgroundColor = "orange";
        computersChoiceContainerNode.style.boxShadow = "0 0px 20px 20px orange";
    }
    

}