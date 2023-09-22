// объекты хранятся и копируются «по ссылке»

// Мы можем использовать любую переменную для доступа 
// к объекту и изменения его содержимого:

let user = { name: 'John' };

let admin = user;

admin.name = 'Pete'; // изменено по ссылке из переменной "admin"

// alert(user.name); // 'Pete', изменения видны по ссылке из переменной "user"

let obj21 = {
    "sv1": 42
}

let obj22 = {
    "sv2": 33
}

let res = {
    "baza": 52
}

Object.assign(res, obj21, obj22)

// console.log(res)

let tiger = {
    fuck: "pizda"
}

let obj23 = {
    animalFamily: {
        cat: tiger,
        monkey: "orangutan",
    },
    peoples: {
        friend: "vitalik",
        emeny: "Egor",
    }
}

let clone21 = Object.assign({}, res, obj23)

// console.log(clone21)

let user22 = {
    name: "John",
    sizes: {
        height: 182,
        width: 50
    }
};
  
let clone = Object.assign({}, user22);

console.log( user22.sizes === clone.sizes ); // true, тот же объект

// user и clone обладают общим свойством sizes
user22.sizes.width++;       // изменяем свойства в первом объекте
console.log(clone.sizes.width); // 51, видим результат в другом

const obj24 = {
    art: "joker",
    drink: "kvas"
}

obj24.drink = "cola"

const obj25 = obj24

obj25.art = "river"

console.log(obj24)