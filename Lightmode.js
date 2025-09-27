function myFunction() {
  // le light mode change le body
  var element = document.body;
  //le bouton permet de changer de mode
  var btn = document.getElementById("toggle-mode");
  // activer/désactiver le mode clair
  element.classList.toggle("light-mode");

  //si l'élement est en light mode alors
  if (element.classList.contains("light-mode")) {
    // la lune s'affiche pour montrer qu'on peut retourner en dark mode 
    btn.textContent = "🌙";
  } else {
    // l'inverse
    btn.textContent = "☀️";
  }
}
