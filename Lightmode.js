function changeTheme() {

  //le bouton permet de changer de mode
  var btn = document.getElementById("toggle-mode");

  // activer/désactiver le mode clair
  document.body.classList.toggle("light-mode");

  //si le light mode est detecté
  if (document.body.classList.contains("light-mode")) {

    // la lune s'affiche pour montrer qu'on peut revenir en dark mode 
    btn.textContent = "🌙";

  } else {

    // sinon il affiche que l'on peut passer en light mode
    btn.textContent = "☀️";

  }
}
