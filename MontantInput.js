const form = document.querySelector("form")
const error = document.querySelector(".error")

form.addEventListener("submit", (e) => {
    e.preventDefault()

    if(nombre.value == ""){
        error.innerHTML = "Saisissez un montant"
    }
})

nombre.addEventListener("blur", () => {
    if(nombre.value == ""){
        nombre.classList.add("error")
    }
    else{
        nombre.classList.remove("error")
    }
})