function genererContenu() {
  // Obtenir l'élément avec l'id démo et lui ajouter des éléments h2 et p

  let nombre = document.getElementById("qty").value;
  let titre = document.getElementById("titre").value;
  let contenu = document.getElementById("contenu").value;

  let demo = document.getElementById("demo");


  for (let i = 0; i<nombre; i++) {
    let h2 = document.createElement("h2");

    h2.textContent = titre + " " + i;

    let p = document.createElement("p");

    p.textContent = contenu + " " + i;
p.id = i;
    demo.appendChild(h2);
    demo.appendChild(p);
  }
}
  
function changerStyle() {
  // Obtenir les éléments p qui sont sous le div demo et changer la couleur spécifiée dans l'input

  let couleurDesiree = document.getElementById("couleur").value;

  let demo = document.getElementById("demo");

  let p = demo.getElementsByTagName("p");

  for (let i = 0; i < p.length; i++) {
    p[i].style.color = couleurDesiree;
  }
  
}
  
function changerClassBoutons() {
  // Obtenir les éléments boutons et changer leur className pour celui qui est spécifié dans l'input

  let elementBoutons = document.getElementsByTagName("button");

  let classDesiree = document.getElementById("btn-class").value;

  for(let i = 0; i < elementBoutons.length; i++) {
    elementBoutons[i].className = classDesiree;
  }
}