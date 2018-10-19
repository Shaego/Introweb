function btnCalculer_onclick()
{
 	var KiloMoy, Kilo5Ans;

 	KiloMoy = parseInt(document.getElementById("txtPoids1").value);

    Kilo5Ans = (KiloMoy*12*5);

    console.log("Dans 5 ans, tu auras parcouru " + Kilo5Ans +" km.");

}