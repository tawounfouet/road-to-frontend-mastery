
const url = 'https://thejsway-server.herokuapp.com/api/articles'
const main = document.querySelector('.main-data')


fetch(url)
    .then(result => result.json())
    .then(json => {
        console.log(json)
        json.forEach(({id, title, content }) => {
            const div = document.createElement('div')
            const h2 = document.createElement('h2')
            const p = document.createElement('p')

            const nTitle = document.createTextNode(`${id} - ${title}`)
            const nContent = document.createTextNode(content)

            main.appendChild(div)
            div.appendChild(h2)
            div.appendChild(p)

            h2.appendChild(nTitle)
            p.appendChild(nContent)
        })
    })
    .catch(err => {
        console(err)
    })