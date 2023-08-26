const pwd = document.querySelector('#password')
const mail = document.querySelector('#email')


mail.addEventListener('input', ({target : { value }}) => {
    // console.log(value)
    if (value.length === 0)
        mail.style.borderColor = "black"
    else if (!value.includes('@'))
        mail.style.borderColor = "red"
    else 
        mail.style.borderColor = "green"
})

pwd.addEventListener('input', ({target : { value }}) => {
    // console.log(value)
    if (value.length === 0) 
        pwd.style.borderColor = "black"
    if (value.length < 8) 
        pwd.style.borderColor = "red"
    else 
        pwd.style.borderColor = "green"
})