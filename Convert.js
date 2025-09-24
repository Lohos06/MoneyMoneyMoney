const apiBase = "https://v6.exchangerate-api.com/v6/";
const apiKey = "12fd69d0539580d13bdd11c4";

fetch(apiBase + apiKey + "/latest/USD")
    .then(promise => promise.json())
    .then(data => console.log(data))
    .catch(error => console.error(error))