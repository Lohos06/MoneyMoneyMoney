// variables de l'url api exchangerate
const apiBase = "https://v6.exchangerate-api.com/v6/";
const apiKey = "08db352af22a4bed96682556";

// le formulaire
const form = document.querySelector("form")

// les champs de selection des devises
const select1 = document.getElementById("devises-select1");
const select2 = document.getElementById("devises-select2");

// le champs de selection du montant
const nombre = document.getElementById("nombre");

// balise qui recevra le resultat
const resultat = document.getElementById("resultat");

// balise qui recevra l'historique des conversions
const history = document.getElementById('history')

// variables permettant la generation de la date actuelle a la seconde près
let date = new Date();
const options = { weekday: "long", year: "numeric", month: "long", day: "numeric", hour: "numeric", minute: "numeric", second: "numeric" };


// generation des options du menu deroulant pour selectionner les devises depuis les devises disponibles dans l'api exchangerate
fetch(apiBase + apiKey + "/codes")
    .then(promise => promise.json())
    .then(data => {
        data.supported_codes.forEach(monnaie => {
        select1.innerHTML += `<option value=${monnaie[0]}>${monnaie[1]}</option>`;
        select2.innerHTML += `<option value=${monnaie[0]}>${monnaie[1]}</option>`;
        });
    })
    .catch(error => console.error(error))

for( i = 0; i < localStorage.length; i++) {
    history.innerHTML += "<p>" + localStorage.key(i) + " : " + localStorage.getItem(localStorage.key(i)) + "</p>"
}


// fonction de conversion se basant sur le taux de change entre les devises et le montant entré
// le resultat est inséré dans la baslise d'id resultat
function Convert() {
    if(select1.value != "Choisiser une option :" && select2.value != "Choisiser une option :") {
        fetch(apiBase + apiKey + "/latest/" + select1.value)
        .then(promise => promise.json())
        .then (data => {
            let montantObtenu = nombre.value * data.conversion_rates[select2.value]
            resultat.innerHTML = nombre.value + " " + select1.value + " = " + montantObtenu + " " + select2.value
        })
        .catch(error => console.error(error))
    }
}

// mise a jour en tant reel du resultat de la conversion, que ce soit au changement de devise ou de montant donné
select1.addEventListener("change", () => {
    Convert();
});
select2.addEventListener("change", () => {
    Convert();
});
nombre.addEventListener("keydown", () => {
    Convert();
});

// validation du formulaire qui envoir dans l'historique des conversions la derniere conversion
// l'historique se recharge alors
form.addEventListener("submit", (e) => {
    e.preventDefault()

    // ajout de la derniere conversion dans l'historique
    if (resultat.innerHTML != "") {
        date = new Date();
        localStorage.setItem(date.toLocaleDateString(undefined, options), resultat.innerHTML);
    }

    // rechargement de l'historique
    history.innerHTML = ""
    for( i = 0; i < localStorage.length; i++) {

        history.innerHTML += "<p>" + localStorage.key(i) + " : " + localStorage.getItem(localStorage.key(i)) + "</p>"
    }
})