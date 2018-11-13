var prixBase, age, film;

prixBase = parseInt(document.getElementById("txtBasePrix").value);
age = parseInt(document.getElementById("txtAge").value);
film = document.getElementById("lstFilm").value;





function trouverAge()
{
    if (age <= 16) {
        if (document.getElementById("radMidi").checked == true) {
            prixBase = prixBase * 0.4;
        }
        else {
            prixBase = prixBase * 0.6;
        }
    }
    else if (age > 16) {
        if (document.getElementById("radMidi").checked == true) {
            prixBase = prixBase * 0.7;
        }
    }
}


function btnCalculer_onclick()
{


    alert("Le prix est de " + prixBase + " dollars, pour aller voir " + film);

}