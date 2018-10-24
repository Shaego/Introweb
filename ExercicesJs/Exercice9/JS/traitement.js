function btnCalculer_onclick()
{
    var NbEtu, NbSenior, NbNormaux, NbBillets, Total;


    NbEtu = parseInt(document.getElementById("txtEtu").value);
    NbSenior = parseInt(document.getElementById("txtSenior").value);
    NbNormaux = parseInt(document.getElementById("txtNormaux").value);

    NbBillets = NbNormaux+NbSenior+NbEtu;
    Total = (NbEtu*12)+(NbSenior*15)+(NbNormaux*20);

    if (NbBillets >= 5)
    {
        Total = Total *0.9
    }


    console.log("Tu as "+NbBillets +" billets, tu payeras donc " +Total +" Dollars Canadiens");
}