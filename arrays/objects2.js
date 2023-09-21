// объекты хранятся и копируются «по ссылке»

// Мы можем использовать любую переменную для доступа 
// к объекту и изменения его содержимого:

let user = { name: 'John' };

let admin = user;

admin.name = 'Pete'; // изменено по ссылке из переменной "admin"

// alert(user.name); // 'Pete', изменения видны по ссылке из переменной "user"

let obj1 = {
    "sv1": 42
}

let obj2 = {
    "sv2": 33
}

let res = {
    "baza": 52
}

Object.assign(res, obj1, obj2)

console.log(res)