// Тренировка работы с объектами в JavaScript
// Здесь вы можете создавать, изменять и изучать объекты

// Пример объекта
const person = {
  name: "Иван",
  age: 30,
  city: "Москва"
};

// console.log(person);

// console.log(person.name);

const obj = {
  fuck: "fuck",
  fuck2: "fuck2",
  "ya ebal": 123
}

delete obj.fuck;

// console.log(obj);
// console.log(obj["ya ebal"])

// =========================
// ЗАДАНИЯ ПО SYMBOL
// =========================

// 1. Создайте объект user с обычными свойствами (например, name, age)
//  и добавьте к нему новое свойство с ключом-символом (например, Symbol("id")). Выведите 
// объект и доступ к этому свойству через символ.

const character = Symbol("xxx");

// Ваш код здесь:
const peoples = {
  names: {
    Igor : {
      name: "Igor",
      fam: "Pig"
    },
    Roman : {
      name: "Roma'",
      fam: "kleynos"
    },
    Vitalik: {
      name: "Vitaliy",
      fam: "Syrenko"
    },
  },
  age: 23,
  [character]: "xyi"
}

const users = peoples.names

const id = Symbol("id")

console.log(id)

// let allNames = user.names

// let arr = Object.keys(names)

console.log(users, typeof users)

// console.log(user[character]);
// console.log(Object.keys(user.name));
// console.log(Object.getOwnPropertySymbols(user));

const newObj = new Object(
  {
    name: "qwe"
  }
);

// console.log(newObj);

// console.log(newObj.name);

// 2. Создайте два разных символа с одинаковым описанием.
//  Добавьте их как ключи к одному объекту с разными значениями. Проверьте, что значения
//  не конфликтуют. Выведите объект и оба значения по символам.

// Ваш код здесь:
let symbol1 = Symbol('id')
let symbol2 = Symbol('id')

const obj2 = {
  [symbol1]: 1,
  [symbol2]: 2,
  [id]: 3
}

console.log(obj2)

// 3. Создайте объект product с обычными и символическими свойствами
// . Напишите цикл, который выводит только обычные свойства (for...in). Затем с помощью 
// Object.getOwnPropertySymbols получите и выведите все символические свойства и их значения.

// Ваш код здесь:
const product = {
  name: "igor",
  familia: "pig",
  [symbol1]: 1,
  [symbol2]: 2,
}

for(svoystvo in product) {
  console.log()
}
console.log(Object(product).getOwnPropertySymbols)

// 4. (Сложно) Реализуйте функцию addHiddenProperty(obj, value), которая добавляет к объекту скрытое свойство
//  с уникальным символом и возвращает этот символ. Проверьте, что свойство не видно при переборе, но доступно по символу.

// Ваш код здесь:

// =========================
// Удачи в практике!