const inputTexte = document.getElementById("saisie-tache");
const iconeAjout = document.querySelector(".icone-ajout");
const listeAFaire = document.querySelector(".liste-afaire");
const listeFait = document.querySelector(".liste-fait");
const iconeTrash = document.querySelector(".icone-trash");

iconeAjout.addEventListener("click", AjouterTache);
inputTexte,
  addEventListener("keydown", function (e) {
    if (e.keyCode === 13) {
      AjouterTache();
    }
  });

iconeTrash.addEventListener("click", viderPoubelle);

function AjouterTache() {
  let texteTache = inputTexte.value;

  if (texteTache) {
    //création du nouvel élément
    let nouvelleTache = document.createElement("li");

    nouvelleTache.innerHTML = texteTache;
    nouvelleTache.classList.add("tache");
    nouvelleTache.addEventListener("click", terminerTache);

    // append ajouter quelque chose
    listeAFaire.append(nouvelleTache);

    inputTexte.value = "";
  }
}

function terminerTache(e) {
  let tache = e.target;
  listeFait.classList.add("fait");
  tache.removeEventListener("click", terminerTache);
  listeFait.append(tache);
}

function viderPoubelle() {
  let taches = listeFait.querySelectorAll("li");

  for (let i = 0; i < taches.length; i++) {
    taches[i].remove();
  }
}
