const selections = document.querySelectorAll(".fa");

function playGame(e)
{
	let userSelection = e.srcElement.id;	
	computerChoice();
}

function computerChoice()
{

}



//EventListner

selections.forEach(function(selection)
	{
		selection.addEventListener("click", playGame)
	});





