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
