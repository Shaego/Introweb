var txtNom, txtPoints, tabNomJoueurs, tabNbrPoints, compt=0;


tabNomJoueurs = new Array(4);
tabNbrPoints = new Array(4);

Total = 0;


function btnAjouter_onclick()
{
    txtNom = document.getElementById("txtNom").value;
    txtPoints = parseInt(document.getElementById("txtPoints").value);

    tabNomJoueurs[compt] = txtNom;
    parseInt(tabNbrPoints[compt] = txtPoints);
    compt=compt+1;
    if (compt == 4)
    {
        document.getElementById("btnTrouverMoy").disabled=false;
        document.getElementById("btnTrouverMeilleur").disabled=false;
        document.getElementById("btnTrouverPire").disabled=false;
        document.getElementById("btnAjouter").disabled=true;
    }
}


function btnTrouverMoy_onclick()
{
    var moy=0;

   for (i =0; i < tabNbrPoints.length; i++)
   {
       moy += tabNbrPoints[i];
   }
   moy = moy/tabNbrPoints.length;
   alert("La moyenne est de " +moy);
}

function btnTrouverMeilleur_onclick()
{
    var meilleurJ;

    if (tabNbrPoints[0] >= tabNbrPoints [1] && tabNbrPoints[0] >= tabNbrPoints [2] && tabNbrPoints[0] >= tabNbrPoints [3])
    {
        alert("Le meilleur joueur est " +tabNomJoueurs[0]);
    }
    else if (tabNbrPoints[1] >= tabNbrPoints [0] && tabNbrPoints[1] >= tabNbrPoints [2] && tabNbrPoints[1] >= tabNbrPoints [3])
    {
        alert("Le meilleur joueur est " +tabNomJoueurs[1]);
    }
    else if (tabNbrPoints[2] >= tabNbrPoints [0] && tabNbrPoints[2] >= tabNbrPoints [1] && tabNbrPoints[2] >= tabNbrPoints [3])
    {
        alert("Le meilleur joueur est " +tabNomJoueurs[2]);
    }
    else if (tabNbrPoints[3] >= tabNbrPoints [0] && tabNbrPoints[3] >= tabNbrPoints [2] && tabNbrPoints[3] >= tabNbrPoints [2])
    {
        alert("Le meilleur joueur est " +tabNomJoueurs[3]);
    }
}

function btnTrouverPire_onclick()
{
    var pireJ;

    if (tabNbrPoints[0] <= tabNbrPoints [1] && tabNbrPoints[0] <= tabNbrPoints [2] && tabNbrPoints[0] <= tabNbrPoints [3])
    {
        alert("Le pire joueur est " +tabNomJoueurs[0]);
    }
    else if (tabNbrPoints[1] <= tabNbrPoints [0] && tabNbrPoints[1] <= tabNbrPoints [2] && tabNbrPoints[1] <= tabNbrPoints [3])
    {
        alert("Le pire joueur est " +tabNomJoueurs[1]);
    }
    else if (tabNbrPoints[2] <= tabNbrPoints [0] && tabNbrPoints[2] <= tabNbrPoints [1] && tabNbrPoints[2] <= tabNbrPoints [3])
    {
        alert("Le pire joueur est " +tabNomJoueurs[2]);
    }
    else if (tabNbrPoints[3] <= tabNbrPoints [0] && tabNbrPoints[3] <= tabNbrPoints [2] && tabNbrPoints[3] <= tabNbrPoints [2])
    {
        alert("Le pire joueur est " +tabNomJoueurs[3]);
    }
}