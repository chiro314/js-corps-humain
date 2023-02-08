/**
 L'hôpital “Grosbobo” de Dijon, souhaite monter un site pour ses
infirmiers et internes, pour ne pas qu’ils se trompe plus lors
d’intervention quand ils soignent des patients.

Projet :
Vous devez réaliser une page web, contenant différentes parties du
corps et la description de celle-ci.

Contraintes :
Avant tout, ce projet est bien-sur à réaliser seul.
Vous devez suivre la maquette que le designer a réalisé.
En plus de :
● Utilisation des attributs HTML “class” et “id”
● Utilisation de la police Arvo (voir sur GoogleFont )
● Utilisation des balises et attributs HTML sémantiques
● Séparation du HTML, du CSS et du JavaScript

L'image du corps humain utilisé dans la maquette est téléchargeable depuis le lien ci-dessous.
https://www.zupimages.net/viewer.php?id=18/05/qijx.png
*/

const tagNames = document.getElementsByClassName("p-texte");
raz();

function raz(){
    for(i = 0; i < tagNames.length; i++) { tagNames[i].style.display= "none";  }
}

document.getElementById("h1").addEventListener("click", function(effacer){
    raz();

    //effacer.preventDefault();
    //effacer.stopPropagation();

    //console.log(effacer);

}, false);

document.getElementById("area-epaule").addEventListener("click", function(epaule){

    //epaule.preventDefault();
    //epaule.stopPropagation();

    raz();
    document.getElementById("p-epaule").style.display= "block";

}, false);

document.getElementById("area-main").addEventListener("click", function(main){

    //main.preventDefault();
    //main.stopPropagation();

    raz();  
    document.getElementById("p-main").style.display= "block";

}, false);


