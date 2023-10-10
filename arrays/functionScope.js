let aSc = 111

let fooSc1 = function() {
    let bSc = 222

    if(false) {
        var c = 123 // undefined
        // let c = 333 // alreary declared
    }

    // var d = 333 // 333

    console.log()
}

fooSc1()

if(true) {
    // console.log(1, r) // undefined
    var r = 444
    // console.log(2, r) // 444
}

// console.log(3, r) // 444

// (function() {
//     // console.log(aSc)
// })()

// (function() {
//     console.log("this is a function expression")
// })()

let foo2Sc = function(arg) {
    console.log(arg)
}.call(null, 123)

let foo3Sc = function(...arg) {
    console.log(arg)
}.call(null, [1, 2, 3])

// foo2Sc().call()
// foo2Sc().apply(null, [1, 2, 3])