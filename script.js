function computerPlay()
{
	let random = Math.random();
	if (random < 0.33)
		return "rock";
	else if (random < 0.64)
		return "paper";
	else
		return "scissors";
}

function playRound(playerSelection, computerSelection)
{
	playerSelection = playerSelection.toLowerCase();
	if (playerSelection === "rock")
	{
		if (computerSelection === "scissors")
			return 1;
		else if (computerSelection === "paper")
			return -1;
		else
			return 0;
	}
	else if (playerSelection === "paper")
        {
		if (computerSelection === "scissors")
			return -1;
       		else if (computerSelection === "rock")
			return 1;
        	else
			return 0;
    	}
	else
    	{	
        	if (computerSelection === "rock")
			return -1;
        	else if (computerSelection === "paper")
			return 1;
        	else
			return 0;
    	}
}

function capitalize(str)
{
	return str[0].toUpperCase() + str.substring(1).toLowerCase();
}

const newGame = document.querySelector('#newGame');
const points = document.querySelector('#points');
const result = document.querySelector('#result');
let i = 0, j = 0;
const pointsDisplayPlayer = document.createElement('div');
const pointsDisplayComputer = document.createElement('div');

pointsDisplayComputer.classList.add('pointsDisplay', 'pointsDisplayComputer');
pointsDisplayPlayer.classList.add('pointsDisplay', 'pointsDisplayPlayer');
pointsDisplayPlayer.textContent = `Player: ${i}`;
pointsDisplayComputer.textContent = `Computer: ${j}`;
points.appendChild(pointsDisplayPlayer);
points.appendChild(pointsDisplayComputer);

function removeTransition(e)
{
	if (e.propertyName !== 'transform') return;
	e.target.classList.remove('clicked');
}

function clickedNewGame(e)
{
	buttons.forEach(button => button.disabled = false);
	i = j = 0;
	pointsDisplayPlayer.textContent = `Player: ${i}`;
	pointsDisplayComputer.textContent = `Computer: ${j}`;
	result.innerHTML = '';
	newGame.innerHTML = '';
}

function play(e)
{
	let playerSelection = e.target.id, computerSelection = computerPlay();
	let winner = playRound(playerSelection, computerSelection);
	const para = document.createElement('p');
	para.classList.add('resultDisplay');
	if (result.firstChild)
		result.removeChild(result.firstChild);
	if (winner === 1)
	{
		para.textContent = `You won! Computer played ${computerSelection}.`;
		pointsDisplayPlayer.textContent = `Player: ${++i}`;
		pointsDisplayComputer.textContent = `Computer: ${j}`;
	}	
	else if (winner === -1)
	{
		para.textContent = `You lost! Computer played ${computerSelection}.`;
		pointsDisplayPlayer.textContent = `Player: ${i}`;
		pointsDisplayComputer.textContent = `Computer: ${++j}`;
	}
	else
		para.textContent = 'Draw!';
	result.appendChild(para);
	if (i === 5 || j === 5)
	{
		const winner = document.createElement('p');
		winner.id = 'winner';
		winner.textContent = `${i === 5 ? 'You won!!!' : 'The computer won!!!'}`
		result.appendChild(winner);
		buttons.forEach(button => button.disabled = true);
		const newGameBtn = document.createElement('button');
		newGameBtn.id = 'newGameBtn';
		newGameBtn.textContent = 'New game';
		newGame.appendChild(newGameBtn);
		newGame.addEventListener('click', clickedNewGame);
	}
	
}

function select(e)
{
	const btn = document.querySelector(`#${e.target.id}`);
	btn.classList.add('clicked');
	play(e);
}

const buttons = document.querySelectorAll('button');
buttons.forEach(button => button.addEventListener('transitionend', removeTransition));
buttons.forEach(button => button.addEventListener('click', select));
