const bouton = document.getElementById('monBouton');
bouton.classList.add('maClasse'); // Ajoute la classe "maClasse" à l'élément
bouton.classList.remove('maClasse'); // Supprime la classe "maClasse" à l'élément
bouton.classList.toggle('maClasse'); // Ajoute ou supprime la classe "maClasse" à l'élément
const btn = document.querySelector("monbouton")

btn.addEventListener("click", () => {
    btn.classList.toggle("red")
});

/*
faire en sort sue si c'estnull 
le class number devient en mode rouge avec un modal qui s'affiche*/
const form = document.querySelector('option');

form.addEventListener('submit', (event) =>
    if (input.value === "") {
        // Si rien n'est saisi
        input.classList.add("error"); // ajoute la bordure rouge
        message.style.display = "block"; // affiche le message d'erreur
    } else {
        //enlever erreur si rien toucher
        input.classList.remove("error");
        message.style.display = "none";
        alert("Montant saisi : " + input.value);
    }

});/*help*/