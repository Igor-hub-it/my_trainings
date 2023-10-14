let promise2 = new Promise((resolve, reject) => {
    fetch('https://dummyjson.com/products')
        .then(result => {
            // console.log(result)
            // // return result
            if (result.ok) {
                return result.json() // получаем данные
            } else {
            //     throw new Error(`HTTP error! status: ${result.status}`)
            }
        })
        .then((result) => {
            resolve(result)
        })
        .catch((error) => {
            reject(error)
        })
})

