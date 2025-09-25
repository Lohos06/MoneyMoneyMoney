
const form = document.querySelector("form")
const nombre = document.querySelector("#nombre")
const error = document.querySelector(".error")
const resultat = document.querySelector("#resultat")

form.addEventListener("submit", (e) => {
    e.preventDefault()

    if(nombre.value == ""){
        error.innerHTML = "<span>Le nombre est obligatoire</span>"
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