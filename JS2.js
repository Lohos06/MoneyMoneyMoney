
const form = document.querySelector("form")
const nombre = document.querySelector("#nombre")
const error = document.querySelector(".error")
const resultat = document.querySelector("#resultat")

form.addEventListener("submit", (e) => {
    e.preventDefault()

    if(nombre.value == ""){
        error.innerHTML = "<span>Le nombre est obligatoire</span>"
    }
    else{
        error.innerHTML = ""

        for(let i = 1; i <= 10; i++ ){
            resultat.innerHTML += `${nombre.value} x ${i} = ${nombre.value * i}<br/>`
        }
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