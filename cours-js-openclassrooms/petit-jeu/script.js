
let divJeu = document.getElementById("divJeu")
console.log(divJeu)

let h2 = document.querySelector("#divJeu h2")
console.log(h2)

let listeh2 = document.querySelectorAll('h2')
console.log(listeh2)

for (let i=0; i < listeh2.length; i++) {
    console.log(listeh2[i])
}


let listeInputRadio = document.querySelectorAll(".zoneChoix input");
console.log(listeInputRadio);

for (let i = 0; i < listeInputRadio.length; i++) {
    console.log(listeInputRadio[i]);
}


// let baliseImage = document.getElementById("premiereImage");
// baliseImage.setAttribute("alt", "Ceci est la nouvelle valeur de alt");


// baliseImage.alt = "Ceci est une image de test modifiée";
// baliseImage.classList.add("nouvelleClasse")
// baliseImage.classList.remove("photo")


let baliseImage = document.getElementById("premiereImage");
baliseImage.setAttribute("alt", "Ceci est une image de test modifiée");
baliseImage.src = "https://user.oc-static.com/upload/2023/05/09/16836435925012_OC-Course-Banners_Tirez-un-max-de-ce-cours.png";
baliseImage.classList.add("nouvelleClasse")
baliseImage.classList.remove("photo")



let nouvelElement = document.createElement("div");
let parentElement = document.getElementById("container");

// Ajouter le nouvel élément au parent
// parentElement.appendChild(nouvelElement);

/*
// Définition des variables contenant le texte du titre et du paragraphe
let contenuTitre = "Azertype - JS"
let contenuParagraphe = "L'application pour apprendre à taper plus vite !"

// Création d'un div avec createElement. Dans cette div, on va créer un titre h1 et un paragraphe p
let nouvelleDiv = document.createElement("div")
let nouveauTitre = document.createElement("h1")
let nouveauParagraphe = document.createElement("p")

// On ajoute du texte dans le titre et le paragraphe
nouveauTitre.textContent = contenuTitre
nouveauParagraphe.textContent = contenuParagraphe

// On ajoute le titre et le paragraphe dans la div
nouvelleDiv.appendChild(nouveauTitre)
nouvelleDiv.appendChild(nouveauParagraphe)

// On ajoute la div dans le body
let end = document.querySelector(".end")
end.appendChild(nouvelleDiv)
*/

let contenuTitre = "Azertype - JS"
let contenuParagraphe = "L'application pour apprendre à taper plus vite !"

let div = `
    <hr>
    <div>
        <h2>${contenuTitre}</h2>
        <p>${contenuParagraphe}</p>
    </div>
    `
let end = document.querySelector(".end")
end.innerHTML = div


let listBoutons = document.querySelectorAll("button")

for (let i=0; i<listBoutons.length; i++) {
    let boutonActuel = listBoutons[i]
    console.log(boutonActuel)

    boutonActuel.addEventListener('click', (event) => {
        // console.log(event)
        monBouton = event.target
        console.log(`J'ai cliqué sur le  : ${monBouton.innerHTML}`)
    })
}