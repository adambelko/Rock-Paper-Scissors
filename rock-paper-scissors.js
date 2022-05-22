"use strict";
const ps = require("prompt-sync");
const prompt = ps();

function computerPlay() {
    const rps = ["rock", "paper", "scissors"];
    const random = Math.floor(Math.random() * rps.length);
    console.log("Computers choice: " + (rps[random]));
    return random;
}

function playRound(playerSelection, computerSelection) {
    if (computerSelection == 0 && playerSelection == "rock") {
        return console.log("Draw, you both have rock!");

    } else if (computerSelection == 1 && playerSelection == "paper") {
        return console.log("Draw, you both have paper!");

    } else if (computerSelection == 2 && playerSelection == "scissors") {
        return console.log("Draw, you both have scissors!");

    } else if (computerSelection == 0 && playerSelection == "paper") {
        return console.log("You win! Paper beats rock!");

    } else if (computerSelection == 1 && playerSelection == "scissors") {
         return console.log("You win! Scissors beats paper!");
    
    } else if (computerSelection == 2 && playerSelection == "rock") {
        return console.log("You win! Rock beats scissors!");

    } else if (computerSelection == 0 && playerSelection == "scissors") {
        return console.log("You Lose! Rock beats scissors!");

    } else if (computerSelection == 2 && playerSelection == "paper") {
         return console.log("You Lose! Scissors beats paper!");
    
    } else {
        return console.log("You Lose! Paper beats rock!");
    }
}
console.log("\n");
const playerSelection = prompt("Your Choice: ")
const computerSelection = computerPlay();
playRound(playerSelection, computerSelection);