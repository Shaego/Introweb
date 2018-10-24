function btnCalculer_onclick()
{
 	var Revenus, Loy, Nour, Dep, Reste;

 	Revenus = parseInt(document.getElementById("txtRev1").value);
    Loy = parseInt(document.getElementById("txtLoy1").value);
    Nour = parseInt(document.getElementById("txtNour1").value);
    Dep = parseInt(document.getElementById("txtDep1").value);

    Reste = (Revenus-Loy-Nour-Dep)*12;

    console.log("À la fin de l'année, il te restera " +Reste + " $Can.");

}