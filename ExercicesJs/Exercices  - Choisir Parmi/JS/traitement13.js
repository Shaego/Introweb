function btnCalculer_onclick()
{ 
 	var jours, choix;

 	choix = parseInt(document.getElementById("txtNumSem").value);

 	switch (choix)
    {
        case 1: jours = "Lundi"
            break;
        case 2: jours = "Mardi"
            break;
        case 3:jours = "Mercredi"
            break;
        case 4:jours = "Jeudi"
            break;
        case 5:jours = "Vendredi"
            break;
        case 6:jours = "Samedi"
            break;
        case 7:jours = "Dimanche"
            break;
    }
    document.getElementById("lblMessage").innerHTML = jours

}