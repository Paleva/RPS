
function getComputerChoice(){
    const choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * choices.length)];
}
function getHumanChoice(){
    choice = choice.toLowerCase();
    return choice;
}
function playRound(humanChoice, computerChoice){
    if(humanChoice === computerChoice){
        return "Tie";
    } 
    else if(humanChoice === "rock" && computerChoice === "scissors"){
        return "You win";
    } 
    else if(humanChoice === "rock" && computerChoice === "paper"){    
        return "You lose";
    } 
    else if(humanChoice === "paper" && computerChoice === "rock"){
        return "You win";
    } 
    else if(humanChoice === "paper" && computerChoice === "scissors"){    
        return "You lose";
    } 
    else if(humanChoice === "scissors" && computerChoice === "paper"){
        return "You win";
    } 
    else if(humanChoice === "scissors" && computerChoice === "rock"){    
        return "You lose";
    }
    else{
        return "Invalid choice";
    }
}

const rockButton = document.querySelector("#rock-button");
const paperButton = document.querySelector("#paper-button");
const scissorsButton = document.querySelector("#scissors-button");

rockButton.addEventListener("click", () => {
    console.log("rock button clicked");
    const computerChoice = getComputerChoice();
    const humanChoice = "rock";
    const result = playRound(humanChoice, computerChoice);
    document.querySelector(".result").textContent = result;
});

paperButton.addEventListener("click", () =>{
    console.log("paper button clicked");
    const computerChoice = getComputerChoice();
    const humanChoice = "paper";
    const result = playRound(humanChoice, computerChoice);
    document.querySelector(".result").textContent = result;
});

scissorsButton.addEventListener("click", () =>{
    console.log("scissors button clicked");
    const computerChoice = getComputerChoice();
    const humanChoice = "scissors";
    const result = playRound(humanChoice, computerChoice);
    const resultDiv = document.querySelector(".result");
    resultDiv.textContent = result;
});