//Global variables for scoring
let humanScore = 0;
let computerScore = 0;
const winningScore = 5;
let humanChoice= null ;
let computerChoice = null;

//DOM elements
const signButton = document.querySelector("#signButton");
const log = document.querySelector("#log");
const playerScore = document.querySelector("#playerScore");
const CPUScore = document.querySelector("#CPUScore");

//functions for scoring
function addPointPlayer(){
    humanScore++;
    playerScore.textContent = humanScore;
    localStorage.setItem('humanScoreSpan', humanScore.toString());
}

function addPointCPU(){
    computerScore++;
    computerScore.textContent = computerScore;
    localStorage.setItem('computerScore', computerScore.toString());
}

//function for computer player
function getComputerChoice() {
  const randomNum = Math.random();
  if (randomNum < 0.34) {
    computerChoice = "rock";
    console.log("The computer chose " + computerChoice);
    return "rock";
  } else if (randomNum <= 0.67) {
    computerChoice = "paper";
    console.log("The computer chose " + computerChoice);
    return "paper";
  } else {
    computerChoice = "scissors";
    console.log("The computer chose " + computerChoice);
    return "scissors";
  }
}

//function for human player
function getHumanChoice(){
    let sign = window.prompt("Rock, Paper, or Scissors?");
    if (sign === null) {
        console.log("OK, maybe another time")
        return "OK, maybe another time";
    } else if (sign.toLowerCase() === "rock") {
        console.log("Player named chose " +"rock");
        humanChoice = "rock";
        return "rock";
    } else if (sign.toLowerCase() === "paper") {
        console.log("Player named chose "+"paper");
        humanChoice = "paper";
        return "paper";
    } else if (sign.toLowerCase() === "scissors") {
        humanChoice = "scissors";
        console.log("Player named chose "+ "scissors")
        return "scissors";
    }}


//function for each round
function playRound(computerChoice,humanChoice){
    if (computerChoice === humanChoice) {
        console.log("Tie");
}   else if (computerChoice == "rock" && humanChoice == "paper") {
        console.log("You win!");
        humanScore++;
}   else if (computerChoice == "scissors" && humanChoice == "paper") {
        console.log("You lose");
        computerScore++;
}   else if (computerChoice == "rock" && humanChoice == "scissors") {
        console.log("You lose");
        computerScore++;
}   else if (computerChoice == "scissors" && humanChoice == "rock") {
        console.log("You win!");
        humanScore++;
}   else if (computerChoice == "paper" && humanChoice == "rock") {
        console.log("You lose");
        computerScore++;
}   else if (computerChoice == "paper" && humanChoice == "scissors") {
        console.log("You win!");
        humanScore++;
}   else {
    console.log("Do you want to play?");
}
}


signButton.addEventListener("click", () =>{
    getHumanChoice();
    getComputerChoice();
    playRound(humanChoice, computerChoice);
});


console.log("Your score is " + humanScore)


//UI updates
humanScore
