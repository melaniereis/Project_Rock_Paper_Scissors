let humanScore=0;
let computerScore=0;


const getComputerChoice = () => {
    const options = ["rock", "paper", "scissors"];
    return options[Math.floor(Math.random()*3)];
};

const getHumanChoice = () => {
    const choice = prompt("Let's play! Enter rock, paper or scissors!");
    const options = ["rock", "paper", "scissors"];
    if (!options.includes(choice.toLowerCase())){
        alert("Invalid option. Please enter rock, paper or scissors!");
        getHumanChoice();
    }else{
        return choice.toLowerCase();
    }
};

const playRound = (computerChoice, humanChoice) => {
    if(humanChoice === computerChoice){
        alert(`That's a tie. You've selected ${humanChoice} and the computer chosed ${computerChoice}!`);
        return;
    }
    else{
        switch(computerChoice){
            case "rock":
                if(humanChoice ==="paper"){
                    alert(`Great! You've won! You selected ${humanChoice} and the computer chosed ${computerChoice}!`);
                    ++humanScore;
                }
                else{
                    alert(`Too Bad! You've lost! You selected ${humanChoice} and the computer chosed ${computerChoice}!`);
                    ++computerScore;
                }
                break;
            case "paper":
                if(humanChoice ==="scissors"){
                    alert(`Great! You've won! You selected ${humanChoice} and the computer chosed ${computerChoice}!`);
                    ++humanScore;
                }
                else{
                    alert(`Too Bad! You've lost! You selected ${humanChoice} and the computer chosed ${computerChoice}!`);
                    ++computerScore;
                }
                break;
            case "scissors":
                if(humanChoice ==="rock"){
                    alert(`Great! You've won! You selected ${humanChoice} and the computer chosed ${computerChoice}!`);
                    ++humanScore;
                }
                else{
                    alert(`Too Bad! You've lost! You selected ${humanChoice} and the computer chosed ${computerChoice}!`);
                    ++computerScore;
                }
                break;
        }
    }
};

const playGame = () => {

    while(humanScore <5 && computerScore<5){
        const computerSelection = getComputerChoice();
        const humanSelection= getHumanChoice();
        playRound(computerSelection, humanSelection);
    }
    if (humanScore===5){
        alert(`Congratulations! You've won the game! Let's play again!`);
        reset();
        playGame();
    } else if(computerScore===5){
        alert(`Maybe next time! You've lost the game! Let's play again!`);
        reset();
        playGame();
    }

};

const reset =()=>{
    humanScore=0;
    computerScore=0;
}

playGame();