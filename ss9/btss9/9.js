"use strict";
function checkType1(input) {
    if (typeof input === 'number') {
        return input ** 2;
    }
    else if (typeof input === 'string') {
        return input.length;
    }
    else if (Array.isArray(input)) {
        return input.length;
    }
    else {
        throw new Error("Invalid input");
    }
}
console.log(checkType1(5));
console.log(checkType1("Hello"));
console.log(checkType1([1, 2, 3, 4, 5]));
