// Замыкание
function createArrayGetter() {
    let arr = [1000, 2000, 3000, 4000, 5000];
    
    return function() {
        return arr;
    };
}

let getArrayFromClosure = createArrayGetter();
let closureArray = getArrayFromClosure();
// console.log("4. Closure:", closureArray);

let inBetween = function(a, b) {
    return function(el) {
        return el >= a && el <= b
    }
}

let inArray = function(arr) {
    return function(el) {
        if(arr.some(item => item == el)) {
            return el
        }
    }
}

let arrClos = [1, 2, 3, 4, 5, 6, 7];

// console.log( arrClos.filter(inBetween(3, 6)) ); // 3,4,5,6
// console.log( arrClos.filter(inArray([1, 2, 10])) ); // 1,2

let usersClos = [
    { name: "Иван", age: 20, surname: "Иванов" },
    { name: "Пётр", age: 18, surname: "Петров" },
    { name: "Анна", age: 19, surname: "Каренина" }
];

let byField = function(fieldName) {
    return (a, b) => a[fieldName]>b[fieldName] ? 1:-1
}

// function byField(fieldName){
//     return (a, b) => a[fieldName] > b[fieldName] ? 1 : -1;
// }

// console.log(usersClos.sort(byField('name')))
// console.log(usersClos.sort(byField('age')))