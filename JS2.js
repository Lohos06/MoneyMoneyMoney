const bouton = document.getElementById('monBouton');
bouton.classList.add('maClasse'); // Ajoute la classe "maClasse" à l'élément
bouton.classList.remove('maClasse'); // Supprime la classe "maClasse" à l'élément
bouton.classList.toggle('maClasse'); // Ajoute ou supprime la classe "maClasse" à l'élément
const btn = document.querySelector("monbouton")

btn.addEventListener("click", () => {
    btn.classList.toggle("red")
});

faire en sort sue si c'estnull 
le