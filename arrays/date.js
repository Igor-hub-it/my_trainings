let date1 = new Date("2025-05-12")

// console.log(date1)

let date2 = new Date(2025, 11, 10, 15, 12)

// console.log(date2)

let now1 = Date.now()
let today = new Date(now1)

// console.log(today.getFullYear())
// console.log(today.getMonth())

// console.log(today.getDate())

// console.log(today.getHours())
// console.log(today.getMinutes())
// console.log(today.getSeconds())
// console.log(today.getMilliseconds())
// console.log(today.getDay())

let now2 = new Date().getTime()
// это быстрее чем Date.now()

// console.log(now2)
