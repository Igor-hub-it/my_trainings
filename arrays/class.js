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

console.log(myFuck1)