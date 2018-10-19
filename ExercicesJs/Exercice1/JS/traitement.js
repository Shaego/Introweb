function btnCalculer_onclick()
{
 	var PoidsLB, PoidsKG;

 	PoidsLB = parseInt(document.getElementById("txtPoids1").value);

    PoidsKG = (PoidsLB/2.2);

    console.log("Le poids en KG est de " +PoidsKG +" Kg.");

}