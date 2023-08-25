// console.log("Hello World !")
// console.log(Date.now())
// console.log(Date(Date.now()))
// console.log(Math.PI)
// console.log(Math.random())

// Déclaration d'une constant
const maConstante = 42
// maConstante = 43  // Erreur retourné car une constante est immutable
console.log("Constante : ", maConstante)


// Déclartion d'une variable
let maVariable = 42
maVariable = 43
console.log("Variable :" , maVariable)


// Fonction Fléché
const maFunc = () => {
    return 14
}
console.log("Ma fonction retourne", maFunc())


// Les Variables sont scopées 
const funcScope = () => {
    const test = 42
    return 13
}
// console.log(test)
console.log("Fonction scopé : ", funcScope())


// Arrow functions: retours et paramètres par défaut
const arrowFunc = () => 25
console.log("Arrow function  : ", arrowFunc())

const arrowFuncDefparam = (index = 0) => index + 1
console.log("Arrow function avec retour param par défaut :", arrowFuncDefparam()) 
console.log("Arrow function avec retour param 22 :", arrowFuncDefparam(22))


// Les templates strings : permettent de créer des chaines de charactères modulable dans
// lesquelles on va insérer des variables
console.log(`\nTemplate string using arrowFunc :  ${arrowFuncDefparam(25)}`)



// Le Destructuring : va permettre lorque l'on a un object d'afficher les valeurs de ses propriétés
// sans avoir à passer par une variable intermédiaire
console.log("\n\n***************** Destruturing *****************")
const dog = {
    name: 'medor',
    age: 11, 
    color: 'brown'
}

const myAnimal = (animal) => `
    Je suis un ${animal.name}, 
    j'ai ${animal.age} ans,
    ma couleur est le ${animal.color}
`
console.log("Function Animal sans destructuring : ", myAnimal(dog))


const myAnimalDest = (animal) => {
    const {name, age, color} = animal 

    return `
        Je suis un ${name}, 
        j'ai ${age} ans,
        ma couleur est le ${color}
    ` 
}
console.log("\nFunction Animal avec destructuring :", myAnimalDest(dog))


const myAnimalDestPlus = ({name, age, color}) =>
  `
    Je suis un ${name}, 
    j'ai ${age} ans,
    ma couleur est le ${color}
   `

console.log("\nFunction Animal avec destructuring ++ :", myAnimalDestPlus(dog))


// Destruturing avec Tableau
const myTab = [1, 4, 7]

const [one, two] = myTab
console.log("\nDestructuring avec Tableau")
console.log(one)
console.log(two)


console.log("\nDestructuring avec Tableau des Animaux")
const tabAnimal = [{
    nameA: 'medor',
    ageA: 12
},  {
    nameA: 'toby',
    ageA: 4
}
]

const [{ nameA, ageA }] =  tabAnimal
console.log(nameA)
console.log(ageA)


// Les spread Opérateur : est utile pour créer une copie d'un objet afin overwrité ses propriété
// sur une nouvel objet et créer également de nouvelle clef
const chien = {
    nom: 'Bingo', 
    age: 5,
    color: 'brown'
}

const chienRouge = {
    ...chien,
    age: 10,
    speed: 30
}
chienRouge.color = "red"
console.log("\nSpread Opérator Usage :\n" , chien, chienRouge)


// Objet Sans Spread Opérator 
let myDog = {
    nom: 'Bingo', 
    age: 5,
    color: 'black'
}

let  blackDog = myDog
blackDog.age = 12
console.log('\nSans spread opérator \n', myDog, blackDog) 


console.log("*****\nSpread Opérator sur les tableaux")
const tab1 = [1, 2, 43]
let tab2 = [...tab1]
tab2.push(2)

console.log(tab1)
console.log(tab2)


// Les Modules 
// console.log("\n Les Modules")
// import add from './modules.js'

// console.log(add(1, 2))

// import {add, sub} from './modules'
// console.log(add(1, 2))
// console.log(sub(2, 1))

console.log("\nLes Classes : ")
class Dog {
    constructor (nom, age, couleur) {
        this.name = nom
        this.age = age
        this.color = couleur
    }

    print () {
        console.log({
            nom: this.name,
            age: this.age,
            color: this.color
        })
    }
}

const medor = new Dog('medor', 11, 'brown')
medor.print()


console.log('\nHéritage')
class RedDog extends Dog {
    wouf () {
        console.log("wouf wouf wouf !!!")
    }
}

const bingo = new RedDog('bingo', 4, 'red')
bingo.print()
bingo.wouf()