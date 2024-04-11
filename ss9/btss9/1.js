"use strict";
function parseInput(input) {
    if (input === "number")
        return typeof (5);
    if (input === "boolean")
        return typeof (true);
    if (input === "null")
        return null;
    if (input === "string")
        return typeof ("number");
    if (input === "undefined")
        return undefined;
}
console.log(parseInput("number"));
console.log(parseInput("boolean"));
console.log(parseInput("null"));
console.log(parseInput("string"));
console.log(parseInput("undefined"));
