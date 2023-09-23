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