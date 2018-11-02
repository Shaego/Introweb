function btnCalculer_onclick()
{
    var Nbre1, Nbre2;

    Nbre1 = parseInt(document.getElementById("txtNbre1").value);
    Nbre2 = parseInt(document.getElementById("txtNbre2").value);

    if (Nbre1 > 0 && Nbre2 > 0)
    {
        document.getElementById("lblMessage").innerHTML = "POSITIF";
    }
    else if (Nbre1 < 0 && Nbre2 < 0)
    {
        document.getElementById("lblMessage").innerHTML = "NEGATIF";
    }
}