let funcFO = function() {
    console.log()
}

let functionName = funcFO.name

// console.log(functionName) // funcFO

let funcFO2 = function(arg1, arg2, arg3) {
    // console.log(arg1, arg2, arg3)
}

let numberOfArg = funcFO2.length
// console.log(numberOfArg) // 3

function makeCounter() {
    let count = 0

    function counterP() {
        return count++;
    };

    counterP.set = function(value) {
        count = value
    }

    counterP.decrease = (minus = 1) => {
        count -= minus
    }

    return counterP;
}

let counter = makeCounter();

