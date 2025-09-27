// declaration de la balise accueillant le messsage d'erreur
const error = document.getElementById("error")

// insertion d'un message d'erreur dans la balise pour demander de saisir un nombre
form.addEventListener("submit", (e) => {
    e.preventDefault()

    if(nombre.value == ""){
        error.innerHTML = "Saisissez un montant"
    }
})

// ajout de la classe error si nombre est laissé vide, classe indiquant visuellement qu'il faut remplir le champ.
nombre.addEventListener("blur", () => {
    if(nombre.value == ""){
        nombre.classList.add("error")
    }
    else{
        nombre.classList.remove("error")
    }
})