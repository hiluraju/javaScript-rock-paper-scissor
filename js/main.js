const selections = document.querySelectorAll(".fa");
let restart      = document.getElementById("restart");
let result       = { user : 0 , computer : 0};


document.getElementById("output").style.display = "none";

function playGame(e)
{
	let userSelection     = e.srcElement.id;	
	let computerSelection = computerChoice();
	let winner            = findWinner(userSelection,computerSelection);
	ShowResult(winner,computerSelection);
	// console.log(userSelection,computerSelection,winner);
}

function computerChoice()
{
	let randomVal = Math.random();
	if(randomVal <= 0.33)
	{
		return "rock";
	}
	else if(randomVal <= 0.66)
	{
		return "paper";
	}
	else
	{
		return "scissor";	
	}
}

function findWinner(user,comp)
{
	if(user == "rock")
	{
		if(comp == "rock")
		{
			return "draw";
		}
		else if(comp == "paper")
		{
			return "computer";
		}
		else
		{
			return "user";
		}
	}
	else if(user == "paper")
	{
		if(comp == "rock")
		{
			return "user";
		}
		else if(comp == "paper")
		{
			return "draw";
		}
		else
		{
			return "computer";
		}
	}
	else
	{
		if(comp == "rock")
		{
			return "computer";
		}
		else if(comp == "paper")
		{
			return "user";
		}
		else
		{
			return "draw";
		}
	}
}


function ShowResult(winner,computerSelection)
{	
	if(winner != "draw")
	{
		document.getElementById("res").innerHTML 		    = `${winner} Wins!!!`;		
	}
	else
	{
		document.getElementById("res").innerHTML 		    = "It's a Draw!!!";
	}
	document.getElementById("computerchoice").innerHTML = `Computer choose ${computerSelection}`;
	document.getElementById("output").style.display     = "block";

}

function restartGame()
{
	console.log("here");
}

//EventListner

selections.forEach(function(selection)
{
	selection.addEventListener("click", playGame)
});

restart.addEventListener("click",restartGame)




