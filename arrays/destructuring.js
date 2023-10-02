let arrDes1 = ['123', '222', '3334']

let [first, , third] = arrDes1

// console.log(first, third)

let arrDes2 = ['q', 'w', 'e', 'r', 't']

let [let1, let2, ...rest] = arrDes2

// console.log(...rest)

let objDes1 = {
    name: 'ive',
    fam: 'roshe',
    age: 52,
}

// let {name, fam, age} = objDes1
let {name: n, fam: f, age: a, papa: p = 13} = objDes1

// console.log(n, f, a, p)

let optionsDes = {
    size: {
        width: 100,
        height: 200,
    },
    items: [1, 2],
    bool: true,
}

let {
    size,
    items: [item1, item2],
    bool: fuck = 123
} = optionsDes

// console.log(size, item1, fuck)