function btnCalculer_onclick()
{
 	var Cents1, Cents5, Cents10, Cents25, Total;

 	Cents1 = parseInt(document.getElementById("txtCents1").value);
    Cents5 = parseInt(document.getElementById("txtCents5").value);
    Cents10 = parseInt(document.getElementById("txtCents10").value);
    Cents25 = parseInt(document.getElementById("txtCents25").value);

    Total = (Cents1+(Cents5*5)+(Cents10*10)+(Cents25*25));

    console.log("Tu as ."+Total);

}
