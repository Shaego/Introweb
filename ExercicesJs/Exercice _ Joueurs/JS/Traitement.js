var txtNom, txtPoints, tabNomJoueurs, tabNbrPoints, compt=0;


tabNomJoueurs = new Array(4);
tabNbrPoints = new Array(4);




function btnAjouter_onclick()
{
    txtNom = document.getElementById("txtNom").value;
    txtPoints = parseInt(document.getElementById("txtPoints").value);
    document.getElementById("lblNbreJoueur").innerHTML=" Numéro du joueur " + compt;

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
    moy = calculerMoy(moy);
    document.getElementById("lblReponse").innerHTML="la moyenne est "+moy;

}


function btnTrouverMeilleur_onclick()
{
    var meilleurJ=0;
    meilleurJ = trouverMeilleurJ(meilleurJ);
    document.getElementById("lblReponse").innerHTML="le meilleur joueur est "+meilleurJ;
}

function btnTrouverPire_onclick()
{
    var pireJ=0;
    pireJ = trouverPireJ(pireJ);
    document.getElementById("lblReponse").innerHTML="le pire joueur est "+pireJ;
}

function calculerMoy(moy)
{
    for (i =0; i < tabNbrPoints.length; i++)
    {
        moy += tabNbrPoints[i];
    }
    moy = moy/tabNbrPoints.length;

    return moy;

}

function trouverMeilleurJ(meilleurJ)
{


    for (i =0; i < tabNbrPoints.length; i++)
    {
        if (meilleurJ < tabNbrPoints [i])
        {
            meilleurJ = tabNbrPoints[i];
        }

    }
    return meilleurJ;
}

function trouverPireJ(pireJ)
{


    for (i =0; i < tabNbrPoints.length; i++)
    {
        if (pireJ > tabNbrPoints [i])
        {
            pireJ = tabNbrPoints[i];
        }

    }
    return pireJ;
}
