let alive = {
    life: true,
    sayAlive() {
        console.log("I am alive")
    }
}

let animal = {
    eats: true,
    __proto__: alive
}

let rabbit = {
    jumps: true,
    sleep: function() {
        this.isSleeping = true
    }
}

rabbit.__proto__ = animal

// console.log(rabbit.life, rabbit.eats, rabbit.jumps)

// console.log(Object.keys(rabbit))

let objPrototype = function(value) {
    return this.name = value
}

let userPrototype = new objPrototype("Igor")

let userPrototype2 = new userPrototype.constructor('Roman')

// console.log(userPrototype)
// console.log(userPrototype2)

Function.prototype.delay = function(time) {
    setTimeout(this, time)
}

function fooo() {
    console.log("хуи")
}

// fooo.delay(1000)

let objProto = Object.assign(rabbit)

// console.log(Object.getOwnPropertyDescriptors(objProto))
let animal2 = {
    eats: true
}

let rabbit2 = Object.create(animal2, {name: {value: 'Igor'}, surname: {value: "pin"}})

// console.log(rabbit2)
// console.log(rabbit2.eats)
// console.log(Object.getPrototypeOf(rabbit2))