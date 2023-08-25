
// const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve('Hello');
//     }, 1000);
//   });
  
// promise.then((value) => {
//     console.log(value);
// });

// const promise = () =>
//     new Promise ((resolve, reject) => {
//         setTimeout(() => {
//             console.log('bonsoir')
//             resolve(42)
//         }, 2000)
//     })

// console.log(promise())
// promise().then(() => {
//     console.log("Bonjour")
// })

// promise().then(elem => {
//     console.log("Bonjour", elem)
// })

const tab = [1, 2, 3, 4]

const promise = (index) => 
    new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(index * 2)
        }, 2000)
    })

const promises = Promise.all(tab.map(el => 
    promise(el)
))

promises
    .then(elements => {
        console.log(elements)
    })