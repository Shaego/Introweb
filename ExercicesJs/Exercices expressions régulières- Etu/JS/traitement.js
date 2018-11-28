

function btnValider_onclick()  //mettre la fonction dans un IF tester une fonction à la fois
{

   alert(verifierEntreUnVingt( "txtValidation"));
}

function validerNAS( Chaine )  // numéro d'assurance social 418 789 123
{
   return /^\d{3}-\d{3}-\d{3}$/.test(document.getElementById(Chaine).value);
}

function validerTel( Chaine )  // au format (418) 876-8373  un numéro ça change
{
  return /^\(\d{3}\)\d{3}-\d{4}$/.test(document.getElementById(Chaine).value);
}

function validerCar( Chaine ) // des chaînes de caractères alphabétiques majuscule et minuscule et accepte le trait d'union pas obligatoire
{
   return /^[a-z-A-Z-\- ]*$/.test(document.getElementById(Chaine).value);
}

function validerNo( Chaine )   // un chiffre peut etre 0 5 25 200 etc..
{
 return /^\d{1|2|3}$/.test(document.getElementById(Chaine).value);
}

function verifierEntreDixTrente( Chaine ) //un chiffre entre 10 et 30
{
  return /^[1-2][0-9]|(30)$/.test(document.getElementById(Chaine).value);
}

function verifierEntreUnVingt( Chaine ) //un chiffre entre 1 et 20
{
   return/^([0-1][0-9])|(20)$/.test(document.getElementById(Chaine).value);
}