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
    Igor: {
      name: "Igor",
      fam: "Pig",
      age: 23,
    },
    Roman: {
      name: "Roma",
      fam: "kleynos",
      age: 23,
    },
    Vitalik: {
      name: "Vitalik",
      fam: "Syrenko",
      age: 23,
    },
  },
  [character]: "xyi",

  allFrends: function() {
    for(let key in this.names) {
      console.log(this.names[key].name)
    }
  },

  sumAge: function() {
    let sum = 0
    for(let key in this.names) {
      sum += this.names[key].age
    }
    console.log(sum)
  }
}

// peoples.sumAge()

// let arrFr = peoples.m

// const users = peoples.names

// const id = Symbol("id")

// console.log(id)

// let allNames = user.names

// let arr = Object.keys(names)

// console.log(users, typeof users)

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

const obj222 = {
  [symbol1]: 1,
  [symbol2]: 2,
  // [id]: 3,
}

// console.log(obj2)

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
  // console.log()
}
// console.log(Object(product).getOwnPropertySymbols)

// 4. (Сложно) Реализуйте функцию addHiddenProperty(obj, value), которая добавляет к объекту скрытое свойство
//  с уникальным символом и возвращает этот символ. Проверьте, что свойство не видно при переборе, но доступно по символу.

// Ваш код здесь:

// =========================
// Удачи в практике!


let obje = {
  "qwe": "qwe",
  "3": 3,
  "1": 1,
  "zxc": "zxc",
  "2": 2,
}

// console.log(obje)

// Итого
// Объекты – это ассоциативные массивы с рядом дополнительных возможностей.

// Они хранят свойства (пары ключ-значение), где:

// Ключи свойств должны быть строками или символами (обычно строками).
// Значения могут быть любого типа.
// Чтобы получить доступ к свойству, мы можем использовать:

// Запись через точку: obj.property.
// Квадратные скобки obj["property"]. Квадратные скобки позволяют взять ключ из переменной, например, obj[varWithKey].
// Дополнительные операторы:

// Удаление свойства: delete obj.prop.
// Проверка существования свойства: "key" in obj.
// Перебор свойств объекта: цикл for for (let key in obj).
// То, что мы изучали в этой главе, называется «простым объектом» («plain object») или просто Object.

// В JavaScript есть много других типов объектов:

// Array для хранения упорядоченных коллекций данных,
// Date для хранения информации о дате и времени,
// Error для хранения информации об ошибке.
// … и так далее.
