function frmMembre_onsubmit()
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
    var Valide = true, tabInscript = new Array("txtNom","txtPrenom","txtVille","txtTel");


    for(i=0;i<tabInscript.length;i++)
    {
        if(valideExiste(tabInscript[i])!==false)
        {
            Valide=true;
        }

    }


    return Valide;
}

function valideExiste(Case)
{
    var Validation=false;
    if(document.getElementById(Case).value==="")
    {
        Validation=false;
        document.getElementById(Case).style.borderColor="firebrick";
    }
    else
    {
        Validation=true;
        document.getElementById(Case).style.backgroundColor="white";
    }
    return Validation;
}



function Saisir()
{
    var Nom,Adresse,Prenom,Ville, CodePostal, Telephone, CopePerm;

    Nom = (document.getElementById("txtNom").value);
    Prenom = (document.getElementById("txtPrenom").value);
    Adresse = document.getElementById("txtAdresse").value;
    Ville = document.getElementById("txtVille").value;
    CodePostal = document.getElementById("txtCodePostal").value;
    Telephone = document.getElementById("txtTel").value;
    CopePerm = document.getElementById("txtCodePerm").value;
}

function valideFormat()
{
    var Validation = true ,tabInscript = new Array("txtNom","txtPrenom","txtVille","txtTel");


    if (ValideNom(tabInscript[0]) === false)
    {
        Validation = false;
        document.getElementById(tabInscript[0]).style.borderColor="firebrick";
    }
    else if (ValideNom(tabInscript[0]) === true)
    {
        Validation = true;
        document.getElementById(tabInscript[0]).style.borderColor="white";
    }

    if (ValideNom(tabInscript[1]) === false)
    {
        Validation = false;
        document.getElementById(tabInscript[1]).style.borderColor="firebrick";
    }
    else if (ValideNom(tabInscript[1]) === true)
    {
        Validation = true;
        document.getElementById(tabInscript[1]).style.borderColor="white";
    }

    if (ValideNom(tabInscript[2]) === false)
    {
        Validation = false;
        document.getElementById(tabInscript[2]).style.borderColor="firebrick";
    }
    else if (ValideNom(tabInscript[2]) === true)
    {
        Validation = true;
        document.getElementById(tabInscript[2]).style.borderColor="white";
    }
    if (ValideTel(tabInscript[3]) === false)
    {
        Validation = false;
        document.getElementById(tabInscript[3]).style.borderColor="firebrick";
    }
    else if (ValideTel(tabInscript[3]) === true)
    {
        Validation = true;
        document.getElementById(tabInscript[3]).style.borderColor="white";
    }




    return Validation;
}

function ValideNom(Chaine)
{
    return /^[A-é]+\-?[A-é]*?$/.test(document.getElementById(Chaine).value);
}
function ValideTel(Chaine)
{
    return /^(\([0-9]{3}\) [0-9]{3}\-[0-9]{4})|([0-9]{3}\-[0-9]{3}\-[0-9]{4})$/.test(document.getElementById(Chaine).value);
}