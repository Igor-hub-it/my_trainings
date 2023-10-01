let str11 = 'привет меня зовут Игорь'

let name11 = str11.indexOf("Игорь")

// console.log(name11)

let isIncludeName = str11.includes("Игорь")

// console.log(isIncludeName)

let startWithName = str11.startsWith("Игорь")
let endWithName = str11.endsWith("Игорь")

// console.log(startWithName) /false
// console.log(endWithName) /true

let sliceStr = str11.slice(name11)

// console.log(sliceStr)
// console.log(str11)
let substringStr = str11.substring(name11)
let substrStr = str11.substr(name11, 5)

// console.log(substringStr)
// console.log(substrStr)

for(let i = 0; i<str11.length; i++) {
    // console.log(str11[i])
}

for(let letter of str11) {
    // console.log(letter)
}