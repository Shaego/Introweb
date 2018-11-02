function btnCalculer_onclick()
{ 
 	var nb1, nb2, op, opFinal, Total;

 	nb1 = parseInt(document.getElementById("txtNbre1").value);
    nb2 = parseInt(document.getElementById("txtNbre2").value);
    op = document.getElementById("txtOperateur").value;

    switch (op)
    {
        case "+": opFinal = nb1 + nb2
            break;
        case "-": opFinal = nb1 - nb2
            break;
        case "/": opFinal = nb1 / nb2
            break;
        case "*":opFinal =  nb1 * nb2
            break;
    }

    Total = opFinal;
    document.getElementById("lblMessage").innerHTML = "Le total est de "+Total;
}