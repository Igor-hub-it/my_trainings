let funcST = function() {
    console.log('log')
}

// setTimeout(funcST, 3000)

// setInterval(funcST, 1000)

let funcAfter3s = setTimeout(function() {
    // console.log(11110)
}, 3000)


// console.log(funcAfter3s)
// funcAfter3s — это ID таймера, а не функция. Вызывать его нельзя.
// Если нужно отменить таймер, используйте:
// clearTimeout(funcAfter3s)

let funcFromTo = function(a, b) {
    counter = a

    let timeoutId = setInterval(function() {
        // console.log(counter)
        if(counter == b) {
            // console.log(111)
            clearInterval(timeoutId)
        }
        counter++
    }, 1000)
}

funcFromTo(1, 5)