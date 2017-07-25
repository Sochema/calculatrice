var nombre = document.getElementsByClassName('nombre');
var hasard = 2;
var operation = document.getElementById("operation");
var operateur = document.getElementsByClassName("operateur");

for (let i = 0; i < nombre.length; i++) {
    nombre[i].addEventListener("click", choice);
}

for (let i = 0; i < operateur.length; i++) {
    operateur[i].addEventListener("click", choiceOperateur);
}

function choice() {
    affiche(this.value);
}

function choiceOperateur() {
    affiche(this.value);
}

function affiche(choix1) {
    operation.innerHTML = choix1;
}
