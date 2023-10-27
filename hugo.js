const btn = document.querySelector('button');
const resultContent = document.getElementById('resultat');

btn.addEventListener('click', () => {
    var valeur1 = document.getElementById('valeur1');
    var valeur2 = document.getElementById('valeur2');

    var valueValeur1 = valeur1.value;
    var valueValeur2 = valeur2.value;

    var select = document.getElementById('calculator');
    var selectedOption = select.value;

    switch(selectedOption) {
        case "plus":
            addition(valueValeur1, valueValeur2);
            break;
        case "minus":
            soustraction(valueValeur1, valueValeur2);
            break;
        case "multiplying":
            multiplication(valueValeur1, valueValeur2);
            break;
        case "dividing":
            division(valueValeur1, valueValeur2);
            break;
    }

    valeur1.value = "";
    valeur2.value = "";
})

//addition
function addition(a, b) {
    var result = Number(a) + Number(b);
    affichageResultat(result);
}
//soustraction
function soustraction(a, b) {
    var result = Number(a) - Number(b);
    affichageResultat(result)
}
//multiplication
function multiplication(a, b) {
    var result = Number(a) * Number(b);
    affichageResultat(result)
}
//division
function division(a, b) {
    var result = Number(a) / Number(b);
    affichageResultat(result)
}

function affichageResultat(result) {
    var resultat = document.createElement('p');
    resultat.innerHTML = result
    resultContent.appendChild(resultat);
}

