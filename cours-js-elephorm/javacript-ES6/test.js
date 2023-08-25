// console.log('1');
// setTimeout(() => {
//   console.log('2');
// }, 0);
// console.log('3');


const tab = [1, 2, 3, 4]

const func = () => console.log('Bonsoir')

tab.forEach(() => {
    setTimeout(func, 2000)
    
})

// setTimeout(func, 3000)

console.log("Bonjour\n")




