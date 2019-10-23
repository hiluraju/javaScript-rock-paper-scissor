let selections   = document.querySelectorAll(".fa");
let restart      = document.getElementById("restart");
let result       = { user : 0 , computer : 0};

document.getElementById("myModal").style.display = "none";

function playGame(e)
{
	let userSelection     = e.srcElement.id;	
	let computerSelection = computerChoice();
	let winner            = findWinner(userSelection,computerSelection);
	ShowResult(winner,computerSelection,userSelection);
	updateScore(winner);
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


function ShowResult(winner,computerSelection,userSelection)
{	
	let computerClass;
	let userClass;

	if(winner != "draw")
	{
		winner = winner.toUpperCase();
		document.getElementById("res").innerHTML 	    = `${winner} WINS`;		
	}
	else
	{
		document.getElementById("res").innerHTML 	    = "It's a Draw!!!";
	}

	if(computerSelection == "rock") 
	{
		 computerClass = "fa-hand-grab-o";
	}
	else if(computerSelection == "paper")
	{
		 computerClass = "fa-file-text-o";
	}
	else
	{
		 computerClass = "fa-cut";
	}

	if(userSelection == "rock") 
	{
		 userClass = "fa-hand-grab-o";
	}
	else if(userSelection == "paper")
	{
		 userClass = "fa-file-text-o";
	}
	else
	{
		 userClass = "fa-cut";
	}
	
	let computerchoice 		 = document.getElementById("computerchoice");
	let userchoice     		 = document.getElementById("userchoice");
	computerchoice.className = '';
	userchoice.className     = '';
	computerchoice.classList.add("fa");
	userchoice.classList.add("fa");
	computerchoice.classList.add(computerClass);
	userchoice.classList.add(userClass);

	$('#myModal').modal('show')
}


function updateScore(winner)
{
	if(winner != "draw")
	{
		if (winner == "computer") 
		{
			result.computer = result.computer + 1;
			document.getElementById("computerpoints").innerHTML   = `${result.computer}`;
		}
		else
		{
			result.user = result.user + 1;
			document.getElementById("playerpoints").innerHTML   = `${result.user}`;
		}
	}
}

function restartGame()
{
	result.user      = 0;
	result.computer  = 0;
	document.getElementById("playerpoints").innerHTML   = "0";
	document.getElementById("computerpoints").innerHTML = "0";

}

//EventListner

selections.forEach(function(selection)
{
	selection.addEventListener("click", playGame)
});

restart.addEventListener("click",restartGame)




