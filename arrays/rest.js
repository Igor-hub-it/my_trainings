let func = function(...arr) {
    arr.forEach((el) => {
        // console.log(el)
    })
    
    // for(let i = 0; i < arrRest.length; i++) {
        // console.log(arrRest[i])
    // }
}

// console.log('123')
func(1, 2, 3, 4, 5, 5, 4, 4)

let arrRest = [1, 2, 3, 4, 5, 5, 4, 4]

console.log(Math.max(...arrRest))
console.log(arrRest.indexOf(Math.max(...arrRest)))