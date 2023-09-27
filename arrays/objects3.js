let me = {
    name: "Igor",
    game: "dota 2",
    age: 23,
    hobbies: ["программирование", "игры", "музыка"],
    address: {
        city: "Киев",
        street: "Крещатик",
        house: 1
    },

    play() {
        console.log(this.name + ' любит играть в ' + this.game)
    },

    sayHi: function() {
        console.log(this.name + " говорит привет")
    },

    // Новые методы
    introduce() {
        console.log(`Привет! Меня зовут ${this.name}, мне ${this.age} лет. Я люблю ${this.game}.`);
    },

    addHobby(hobby) {
        this.hobbies.push(hobby);
        console.log(`Добавлено новое хобби: ${hobby}`);
    },

    getHobbies() {
        return this.hobbies.join(", ");
    },

    updateAge(newAge) {
        this.age = newAge;
        console.log(`Возраст обновлен на ${newAge}`);
    }
}

// console.log("Мои хобби:", me.getHobbies())


function Person(name, age, city) {
    this.name = name;
    this.age = age;
    this.city = city;
    
    this.sayHello = function() {
        console.log(`Привет! Я ${this.name} из ${this.city}`);
    };
}

const person1 = new Person("Анна", 25, "Львов");
const person2 = new Person("Михаил", 30, "Харьков");

// person1.sayHello();
// person2.sayHello();

const user31 = {
    _name: "Пользователь",
    _age: 0,
    
    get name() {
        return this._name;
    },
    
    set name(value) {
        if (value.length > 0) {
            this._name = value;
        }
    },
    
    get age() {
        return this._age;
    },
    
    set age(value) {
        if (value >= 0 && value <= 150) {
            this._age = value;
        }
    }
};

const user33 = {
    name_user: "Igor",
    age_user: 23, 

    get name() {
        return this.name_user
    }
}

user31.age = 20
user31._age = 22
console.log(user31.age)