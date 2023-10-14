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

let data = promise2
    .then(result => {
        // console.log('успех, братья', result)
    })
    .catch(result => {
        // console.error('ошибка', result)
    })

// async yo = function() {
//     await console.log(data)
// }

function delay(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, ms)
    })
}
  
// delay(3000).then(() => alert('выполнилось через 3 секунды'));

let showCircle = () => {
    return new Promise((resolve, reject) => {
        resolve
    })
}

// showCircle(150, 150, 100).then(div => {
//     div.classList.add('message-ball');
//     div.append("Hello, world!");
// });