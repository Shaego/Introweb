function btnCalculer_onclick()
{ 
 	var Veto, NbJours, Animal, Cout, ServToilet, Montant;

	Veto = document.getElementById("lstVeterinaire").value;
	NbJours = parseFloat(document.getElementById("txtNbreJours").value);


	if (document.getElementById("chkServ").checked == true)
	{
		ServToilet = 5;
	}
	else
	{
		ServToilet = 0;
	}

	if (document.getElementById("radChien").checked == true)
	{
		Animal = "Chien";
		Cout =  17;
	}
	else
	{
		Animal = "Chat";
		Cout = 16;
	}

	Montant = (Cout*NbJours) + ServToilet;

	console.log("Vous avez choisi " +Veto + " pour garder votre " +Animal +" pour " +NbJours + " jours, et cela vous coutera "+Montant +" $CA");
}