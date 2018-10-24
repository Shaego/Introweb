function btnCalculer_onclick()
{
 	var Dist, Conso, PrixL, Desti, Cout;

 	Desti = document.getElementById("txtDest1").value;
 	Dist = parseInt(document.getElementById("txtDist1").value);
 	Conso = parseInt(document.getElementById("txtConso1").value);
 	PrixL = parseFloat(document.getElementById("txtPrix1").value);

    Cout =(Dist*(Conso/100)*PrixL);

    console.log("le cout du déplacement à " +Desti +" sera de " +Cout +" $Can.");

}