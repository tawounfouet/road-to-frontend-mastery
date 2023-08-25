

### Utilisez defer pour différer l’exécution du script

Pour manipuler le DOM, JavaScript doit ainsi construire une variable globale, document, qui est donc accessible depuis n’importe où dans notre code. Cependant, pour construire cette variable, la page HTML doit être chargée en entier. Hors, le script étant lancé dans la balise head, avant que le body ne s’affiche à l’écran, la page HTML n’existe pas encore. Nous devons donc attendre que la page ait fini de charger avant d’utiliser la variable document.

Pour cela, nous allons utiliser l’attribut defer sur la balise script. Cet attribut permet de différer l’exécution du script jusqu’à ce que la page soit chargée. Ainsi, nous pouvons placer notre script dans le head, et être sûr que le DOM sera bien chargé lorsque le script sera exécuté.

```html
<script src="scripts/config.js" defer></script>
<script src="scripts/script.js" defer></script>
<script src="scripts/main.js" defer></script>
```

## Créez un nouvel élément dans une page web

### Utilisez la méthode CreateElement
CreateElement est une méthode fournie par JavaScript, accessible depuis document. Elle permet de créer n’importe quelle balise :

```js  
const p = document.createElement("p");
const div = document.createElement("div");
const span = document.createElement("span");
```

### Insérez votre balise dans la page
Une fois l’élément créé, il n'apparaît pas encore dans la page. Pour que cette nouvelle balise apparaisse, nous devons l’insérer dans l’arbre DOM afin que JavaScript sache exactement à quel endroit il faudra mettre l’élément. Pour cela, nous devons : 
- déterminer quel sera l’élément parent ;
- utiliser appendChild (littéralement en anglais : “ajouter un enfant”).

```js
// Récupérer un élément parent existant
let parentElement = document.getElementById("conteneur");

// Ajouter le nouvel élément au parent
parentElement.appendChild(nouvelElement);
```


### Utilisez la propriété innerHTML pour insérer du HTML
Avec la méthode createElement, nous créons un élément que nous pouvons modifier et insérer dans le HTML. Mais que se passe-t-il quand nous devons créer et imbriquer de nombreux éléments ?

Pour cela, nous pouvons utiliser la propriété innerHTML. Cette propriété permet d’insérer du HTML dans un élément. Ainsi, nous pouvons créer une chaîne de caractères contenant le HTML que nous souhaitons insérer, puis l’insérer dans un élément existant.

```js
// Créer une chaîne de caractères contenant le HTML
const html = "<p>Je suis un paragraphe</p>";

// Récupérer un élément parent existant
let parentElement = document.getElementById("conteneur");

// Insérer le HTML dans le parent
parentElement.innerHTML = html;
```

```jS
// Définition des variables contenant le texte du titre et du paragraphe
let contenuTitre = "Azertype"
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
let body = document.querySelector("body")
body.appendChild(nouvelleDiv)

```


## Interagissez avec un élément d’une page web grâce aux événements

Un `événement` correspond à une action spécifique, comme par exemple le clic sur un bouton, ou la frappe d’un clavier. Ainsi, la programmation événementielle consiste **à réagir à ces événements et exécuter du code au moment où ces événement se produisent**.

Pour implémenter cela, nous devons d’abord dire à JavaScript de les écouter grâce à un eventListener, littéralement un “écouteur d’évènement”, en français. Puis, nous devons lier l’événement à un bloc de code. C’est parti ! 🚀

### Écoutez un événement avec addEventListener

Pour écouter un événement, nous allons utiliser la méthode addEventListener. Cette méthode prend deux paramètres :
- le nom de l’événement à écouter (comme par exemple `click, keydown, keyup`, etc.);
- la fonction à exécuter lorsque l’événement se produit.
La fonction peut s’écrire de deux manières différentes que nous allons voir :
    - Les fonctions classiques avec le mot-clé function ;
    - Les fonctions fléchées.

```js
// Récupérer un élément
let element = document.getElementById("element");

// Ajouter un écouteur d'événement
element.addEventListener("click", function() {
    // Code à exécuter lorsque l'événement se produit
});

// Ajouter un écouteur d'événement avec une fonction fléchée
element.addEventListener("click", () => {
    // Code à exécuter lorsque l'événement se produit
});
```


```js
// Créons un bouton dans un fichier HTML :
<button id="monBouton">Cliquez-moi !</button>

// Dans le fichier JavaScript, nous allons récupérer ce bouton et ajouter un écouteur :

// Récupérer le bouton
let monBouton = document.getElementById("monBouton");

// Ajouter un écouteur d'événement
monBouton.addEventListener("click", function () {
    console.log("Vous avez cliqué sur le bouton")
});

// Ajouter un écouteur d'événement avec une fonction fléchée
monBouton.addEventListener("click", () => {
    console.log("Vous avez cliqué sur le bouton")
});
```


### Pour aller plus loin : récupérez les informations sur un événement avec la variable “event”

Lorsque nous ajoutons un écouteur d’événement, nous pouvons récupérer des informations sur l’événement grâce à la variable event. Cette variable est automatiquement créée par JavaScript et contient des informations sur l’événement qui vient de se produire.

```js
// Récupérer un élément
let element = document.getElementById("element");

// Ajouter un écouteur d'événement
element.addEventListener("click", function(event) {
    // Code à exécuter lorsque l'événement se produit
});

// Ajouter un écouteur d'événement avec une fonction fléchée
element.addEventListener("click", (event) => {
    // Code à exécuter lorsque l'événement se produit
});
```

```js
// Créons un bouton dans un fichier HTML :
<button id="monBouton">Cliquez-moi !</button>

// Dans le fichier JavaScript, nous allons récupérer ce bouton et ajouter un écouteur :

// Récupérer le bouton
let monBouton = document.getElementById("monBouton");

// Ajouter un écouteur d'événement
monBouton.addEventListener("click", function (event) {
    console.log(event)
});

// Ajouter un écouteur d'événement avec une fonction fléchée
monBouton.addEventListener("click", (event) => {
    console.log(event)
});
```
