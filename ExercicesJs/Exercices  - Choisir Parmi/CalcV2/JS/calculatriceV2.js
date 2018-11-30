
function btnCalculer_onclick()
{


    if (valideChampsObligatoires()===true)
    {
        if(valideFormat()===true)
        {
            Saisir();
        }
    }


}

function valideChampsObligatoires()
{
    var Valide = true, tabCalcul = new Array("txtNbre1","txtNbre2","txtOperateur");


    for(i=0;i<tabCalcul.length;i++)
    {
        if(valideExiste(tabCalcul[i])!==false)
        {
            Valide=true;
        }

    }


    return Valide;
}
function Calculer(Nombre1,Nombre2,Operateurs)
{

    var Resultat=0;

    switch(Operateurs)
    {
        case "+": Resultat=Nombre1+Nombre2;
            break;

        case "-": Resultat=Nombre1-Nombre2;
            break;

        case "*": Resultat=Nombre1*Nombre2;
            break;

        case"/":  Resultat=Nombre1/Nombre2;
            break;
    }

    return Resultat;
}
function Saisir()
{
    var Nombre1,Nombre2,Operateurs,Resultat;

    Nombre1 = parseInt(document.getElementById("txtNbre1").value);
    Nombre2 = parseInt(document.getElementById("txtNbre2").value);
    Operateurs = document.getElementById("txtOperateur").value;
    Resultat = Calculer(Nombre1,Nombre2,Operateurs);
    document.getElementById("lblMessage").innerHTML="Le résultat est " + Resultat;

}


function valideFormat()
{
    var Validation = true ,tabCalcul = new Array("txtNbre1","txtNbre2","txtOperateur");


    if (ValideChaine(tabCalcul[0]) == false)
    {
        Validation = false;
        document.getElementById(tabCalcul[0]).style.backgroundColor="firebrick";
    }

    if (ValideChaine(tabCalcul[1]) == false)
    {
        Validation = false;
        document.getElementById(tabCalcul[1]).style.backgroundColor="firebrick";
    }

    if (ValideOP(tabCalcul[2]) == false)
    {
        Validation = false;
        document.getElementById(tabCalcul[2]).style.backgroundColor="firebrick";
    }

    return Validation;
}

function valideExiste(Case)
{
    var Validation=false;
    if(document.getElementById(Case).value==="")
    {
        Validation=false;
        document.getElementById(Case).style.backgroundColor="pink";
    }
    else
    {
        Validation=true;
        document.getElementById(Case).style.backgroundColor="white";
    }
    return Validation;
}

function ValideChaine(Chaine)
{
    return /^[A-é]\+$/.test(document.getElementById(Chaine).value);
}

function ValideOP(Chaine)
{
    return /^\+|\-|\*|\/$/.test(document.getElementById(Chaine).value);
}
