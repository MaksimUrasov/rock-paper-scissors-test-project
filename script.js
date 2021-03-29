const arrayOfGestures = ['Rock','Paper','Scissors'];

const win = "You Win!"
const loose = "You Loose!"
const pr = "Paper beats Rock"
const rs = "Rock beats Scissors"
const sp = "Scissors beats Paper"
const same = "Same figures stay as they are"
const eq = "Noone wins."
const er = "Seems You have mistyped, please try again."


function computerPlay() {
    return arrayOfGestures[Math.floor(Math.random() * (arrayOfGestures.length) )]
}

function alertTurnResult(winOrLoose, plSel, compSel, rule, gameNumber) {
    alert(`Game round ${gameNumber} out of 5.\n \n${winOrLoose} \nYour input is ${plSel}, while computer chose ${compSel}. \nThe rule is that ${rule}.`)
}

function alertMistype(winOrLoose, gameNumber) {
    alert(`${winOrLoose} \n \nGame round ${gameNumber} out of 5.`)
}

function playRound (playerSelection, computerSelection, numberOfGames) {
    let yourScore = 0;
    let computersScore = 0;

    if (playerSelection.toLowerCase().trim() == "rock" && computerSelection == "Paper") {
        alertTurnResult(loose, playerSelection, computerSelection, pr ,numberOfGames)
        return (-1);

    } else if (playerSelection.toLowerCase().trim() == "rock" && computerSelection == "Scissors") {
        alertTurnResult(win, playerSelection, computerSelection, rs ,numberOfGames)
        return (1);

    } else if (playerSelection.toLowerCase().trim() == "paper" && computerSelection == "Rock") {
        alertTurnResult(win, playerSelection, computerSelection, pr ,numberOfGames)
        return (1);

    } else if (playerSelection.toLowerCase().trim() == "paper" && computerSelection == "Scissors") {
        alertTurnResult(loose, playerSelection, computerSelection, sp ,numberOfGames)
        return (-1);

    } else if (playerSelection.toLowerCase().trim() == "scissors" && computerSelection == "Rock") {
        alertTurnResult(loose, playerSelection, computerSelection, rs ,numberOfGames)
        return (-1);

    } else if (playerSelection.toLowerCase().trim() == "scissors" && computerSelection == "Paper") {
        alertTurnResult(win, playerSelection, computerSelection, sp ,numberOfGames)
        return (1);

    } else if (playerSelection.toLowerCase().trim() == computerSelection.toLowerCase() ) {  
        alertTurnResult(eq, playerSelection, computerSelection, same ,numberOfGames)
        return (0);

    } else {
        console.log(playerSelection.toLowerCase().trim(), computerSelection.toLowerCase());
        alertMistype(er, numberOfGames)
        return (-1);
    }
    
 }


function game() {
    for (i=1; i<6; i++) {
        let finalResult = playRound( prompt("please type 'Rock', 'Paper' or 'Scissors'"), computerPlay(), i);

        if (i==5 && finalResult>0 ) {
            alert(`YOU ARE THE WINNER!!!!!! \n\mPlease press Start to play again :)`)
        } else if (i==5 && finalResult<0 ) {
            alert(`Ooooh, computer has won this tournament, but dont worry you can try again :)`)
        } else if (i==5 && finalResult==0 )  {
            alert (`DRAW! \n Sometimes that happens, but dont worry you can try again :) `)
        }
    }
}
