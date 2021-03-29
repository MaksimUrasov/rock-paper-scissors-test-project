
const arrayOfGestures = ['Rock','Paper','Scissors'];

const win = "You Win!"
const loose = "You Loose!"
const pr = "Paper beats Rock"
const rs = "Rock beats Scissors"
const sp = "Scissors beats Paper"
const eq = "Noone wins."
const same = "siblings do not fight."
const er = "Seems You have mistyped, please try again."

const scorePElement = document.getElementById('resultScore')
const logPElement = document.getElementById('resultLog')


function computerPlay() {
    return arrayOfGestures[Math.floor(Math.random() * (arrayOfGestures.length) )]
}

function alertTurnResult(winOrLoose, plSel, compSel, rule, gameNumber) {
    alert(`Round ${gameNumber} out of 5.\n \n${winOrLoose} \nYour input is ${plSel}, while computer chose ${compSel}. \nThe rule is that ${rule}.`)
}

function alertMistype(winOrLoose, gameNumber) {
    alert(`${winOrLoose} \n \nGame round ${gameNumber} out of 5.`)
}

function playRound (playerSelection, computerSelection, numberOfGames) {
    let roundResult = [];

    if (playerSelection.toLowerCase().trim() == "rock" && computerSelection == "Paper") {
        alertTurnResult(loose, playerSelection, computerSelection, pr ,numberOfGames)
        return roundResult = [playerSelection, computerSelection, -1]

    } else if (playerSelection.toLowerCase().trim() == "rock" && computerSelection == "Scissors") {
        alertTurnResult(win, playerSelection, computerSelection, rs ,numberOfGames)
        return roundResult= [playerSelection, computerSelection, 1];

    } else if (playerSelection.toLowerCase().trim() == "paper" && computerSelection == "Rock") {
        alertTurnResult(win, playerSelection, computerSelection, pr ,numberOfGames)
        return roundResult= [playerSelection, computerSelection, 1];


    } else if (playerSelection.toLowerCase().trim() == "paper" && computerSelection == "Scissors") {
        alertTurnResult(loose, playerSelection, computerSelection, sp ,numberOfGames)
        return roundResult=[playerSelection, computerSelection, -1];

    } else if (playerSelection.toLowerCase().trim() == "scissors" && computerSelection == "Rock") {
        alertTurnResult(loose, playerSelection, computerSelection, rs ,numberOfGames)
        return roundResult=[playerSelection, computerSelection, -1];

    } else if (playerSelection.toLowerCase().trim() == "scissors" && computerSelection == "Paper") {
        alertTurnResult(win, playerSelection, computerSelection, sp ,numberOfGames)
        return roundResult=[playerSelection, computerSelection, 1];

    } else if (playerSelection.toLowerCase().trim() == computerSelection.toLowerCase() ) {  
        alertTurnResult(eq, playerSelection, computerSelection, same ,numberOfGames)
        return roundResult= [playerSelection, computerSelection, 0];

    } else {
        alertMistype(er, numberOfGames)
        return roundResult = [playerSelection, computerSelection, -1]
    }
    
 }


function game() {
    let finalResultScore = 0;
    let finalResultLog = [];

 

    for (i=1; i<6; i++) {
        let roundResultArray = playRound( prompt("please type 'Rock', 'Paper' or 'Scissors'"), computerPlay(), i);
        // console.log(roundResultArray);
        finalResultLog.push( "<br>", i," round. ", roundResultArray)
        // console.log(finalResultLog);
        let roundNumericalResult = parseInt(roundResultArray.slice(-1));
        finalResultScore += roundNumericalResult;

            

    }
    
    if (finalResultScore>0 ) {
        alert(`YOU ARE THE WINNER!!!!!! \n\mPlease press Start to play again :)`)
        scorePElement.innerHTML = `The final score: ${finalResultScore}.`
        logPElement.innerHTML = `Game log: ${finalResultLog}.`
    } else if (finalResultScore<0 ) {
        alert(`Ooooh, computer has won this tournament, but dont worry you can try again :)`)
        scorePElement.innerHTML = `The score: ${finalResultScore}.`
        logPElement.innerHTML = `Game log: ${finalResultLog}.`
    } else if (finalResultScore==0 )  {
        alert (`DRAW! \n Sometimes that happens, but dont worry you can try again :) `)
        scorePElement.innerHTML = `The score: ${finalResultScore}.`
        logPElement.innerHTML = `Game log: ${finalResultLog}.`
    }


    
}
