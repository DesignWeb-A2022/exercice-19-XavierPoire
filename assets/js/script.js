const inputTexte = document.getElementById("saisie-tache");
const iconeAjout = document.querySelector(".icone-ajout");
const listAFaire = document.querySelector(".liste-afaire");
const listFait = document.querySelector(".liste-fait");

iconeAjout.addEventListener("click", AjouterTache);
inputTexte,
  addEventListener("keydown", function (e) {
    if (e.keyCode === 13) {
      AjouterTache();
    }
  });

function AjouterTache() {
  let texteTache = inputTexte.value;

  if (texteTache) {
    //création du nouvel élément
    let nouvelleTache = document.createElement("li");

    nouvelleTache.innerHTML = texteTache;

    // append ajouter quelque chose
    listAFaire.append(nouvelleTache);

    inputTexte.value = "";
  }
}
