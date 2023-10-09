// Замыкание
function createArrayGetter() {
    let arr = [1000, 2000, 3000, 4000, 5000];
    
    return function() {
        return arr;
    };
}

let getArrayFromClosure = createArrayGetter();
let closureArray = getArrayFromClosure();
console.log("4. Closure:", closureArray);