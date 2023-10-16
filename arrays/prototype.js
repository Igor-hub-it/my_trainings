let alive = {
    life: true
}

let animal = {
    eats: true
}

let rabbit = {
    jumps: true
}

animal.__proto__ = alive
rabbit.__proto__ = animal

console.log(rabbit.life, rabbit.eats, rabbit.jumps)

