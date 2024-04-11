"use strict";
function printStringOrArray(input) {
    if (typeof input === 'string') {
        console.log(input);
    }
    else {
        input.forEach(str => console.log(str));
    }
}
printStringOrArray("Hello");
printStringOrArray(["Hello", "World"]);
