
const promise = (index) => 
    new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(index * 2)
        }, 2000)
    })

const test = async () => {
    const value = await promise(10)

    console.log(value)
}

test()