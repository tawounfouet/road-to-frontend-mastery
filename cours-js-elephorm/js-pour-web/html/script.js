console.log("Ca marche bien")
console.log("Hello World")

// alert("Hello World")

const one = document.querySelector('.one')
const btn = document.querySelector('#btn')

console.log(one)
console.log(btn)


// btn.addEventListener('click', event => {
//     console.log(event)
// })

// setTimeout(() => {
//     one.style.backgroundColor = 'green'
// }, 2000)

// setTimeout(() => {
//     btn.dispatchEvent(new MouseEvent('click'))
// }, 2000)

btn.addEventListener('click', () => {
    alert("Hello World")
})
