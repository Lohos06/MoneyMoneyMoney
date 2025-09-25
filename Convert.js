const apiBase = "https://v6.exchangerate-api.com/v6/";
const apiKey = "12fd69d0539580d13bdd11c4";
const select1 = document.getElementById("devises-select1");
const select2 = document.getElementById("devises-select2");
const resultat = document.getElementById("resultat");
const nombre = document.getElementById("nombre");

let taux = 0;

function Convert() {
    fetch(apiBase + apiKey + "/latest/" + select1.value)
    .then(promise => promise.json())
    .then (data => {
        let montantObtenu = nombre.value * data.conversion_rates[select2.value]
        resultat.innerHTML = nombre.value + " " + select1.value + " = " + montantObtenu + " " + select2.value
    })
    .catch(error => console.error(error))
}

fetch(apiBase + apiKey + "/codes")
    .then(promise => promise.json())
    .then(data => {
        data.supported_codes.forEach(monnaie => {
        select1.innerHTML += `<option value=${monnaie[0]}>${monnaie[1]}</option>`;
        select2.innerHTML += `<option value=${monnaie[0]}>${monnaie[1]}</option>`;
        });
    })
    .catch(error => console.error(error))



select1.addEventListener("change", () => {
    Convert();
});
select2.addEventListener("change", () => {
    Convert();
});
nombre.addEventListener("keydown", () => {
    Convert();
});
