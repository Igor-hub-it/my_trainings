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

let clone = Object.assign({}, res, obj23)

console.log(clone)