function btnCalculer_onclick()
{
    var txtAge, categorie;

    txtAge = parseInt(document.getElementById("txtAge").value);

    if (txtAge >= 6 && txtAge <= 8)
    {
        categorie = "Poussin";
    }
    else if (txtAge >= 9 && txtAge <= 10)
    {
        categorie = "Pupille";
    }
    else if (txtAge >= 11 && txtAge <= 12)
    {
        categorie = "Minime";
    }
    else if (txtAge >= 13)
    {
        categorie = "Cadet";
    }
    else if (txtAge < 6)
    {
        categorie = "trop jeune pour avoir une categorie";
    }

    document.getElementById("lblMessage").innerHTML = "L'enfant a " +txtAge +" ans et appartient à la catégorie " +categorie;

}
