const apiBase = "https://v6.exchangerate-api.com/v6/";
const apiKey = "12fd69d0539580d13bdd11c4";
const select = document.getElementById("devises-select");


fetch(apiBase + apiKey + "/codes")
    .then(promise => promise.json())
    .then(data => {
        console.log(data)
        data.supported_codes.forEach(monnaie => {
        select.innerHTML += `<option value="${monnaie}">${monnaie}</option>`;
        });
    })
    .catch(error => console.error(error))