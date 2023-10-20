class MyClass {
    constructor(name, gen) {
        this.name = name,
        this.gen = gen
    }

    method1() {
        console.log(this.name)
    }

    method2() {

    }
}

let myFuck1 = new MyClass("Igor", "men")

// console.log(myFuck1)

class Animal {
    constructor(name, speed) {
        this.name = name
        this.speed = speed
        this.position = 0
    }

    run() {
        this.position += speed
    }

    rename(name) {
        this.name = name
    }
}

class Cat extends Animal {
    constructor(name, speed, color) {
        super(name, speed)
        this.color = color
    }
}

let Lych = new Cat("Lych", 999, 'white')

// console.log(Lych)