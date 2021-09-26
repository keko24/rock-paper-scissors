function computerPlay()
{
	let random = Math.random();
	if (random < 0.33)
		return "Rock";
	else if (random < 0.64)
		return "Paper";
	else
		return "Scissors";
}

function playRound(playerSelection, computerSelection)
{
	playerSelection = playerSelection.toLowerCase();
	computerSelection = computerSelection.toLowerCase();
	if (playerSelection === "rock")
	{
		if (computerSelection === "scissors")
			return 1;
		else if (computerSelection === "paper")
			return 0;
		else
			return -1;
	}
	else if (playerSelection === "paper")
    {
        if (computerSelection === "scissors")
			return 0;
        else if (computerSelection === "rock")
			return 1;
        else
			return -1;
    }
	else
    {
        if (computerSelection === "rock")
			return 0;
        else if (computerSelection === "paper")
			return 1;
        else
			return -1;
    }
}

function capitalize(str)
{
	return str[0].toUpperCase() + str.substring(1).toLowerCase();
}

function game()
{
	let player = 0, computer = 0, i = 0;
	while(player != 5 && computer != 5)
	{
		console.log(`Round ${++i}!`);
		let playerSelection = prompt("What shall you play?");
		console.log(`You played ${capitalize(playerSelection)}.`);
		let computerSelection = computerPlay();
		console.log(`The computer played ${capitalize(computerSelection)}.`);
		if (playRound(playerSelection, computerSelection) === 1)
		{
			console.log(`You win! ${capitalize(playerSelection)} beats ${capitalize(computerSelection)}.`);
			player++;
		}
		else if (playRound(playerSelection, computerSelection) === 0)
		{
            console.log(`You lose! ${capitalize(computerSelection)} beats ${capitalize(playerSelection)}.`);
			computer++;
		}
		else
		{
			console.log("Draw!");
		}
		console.log(`Player: ${player} points.\nComputer: ${computer} points.`);
	}
	if (player > computer)
		console.log(`You won by ${player - computer} points!`);
	else if (player < computer)
		console.log(`You lost by ${computer - player} points!`);
	else
		console.log("It's a draw!");
}

game();
