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