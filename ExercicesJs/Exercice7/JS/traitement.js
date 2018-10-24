function btnCalculer_onclick()
{
 	var Can, Eur;

 	Can = parseInt(document.getElementById("txtCan1").value);

    Eur = (Can *0.71);

    console.log("Avec "  +Can + " Dollars Canadiens" +"Tu auras " +Eur +" Euros.");

}