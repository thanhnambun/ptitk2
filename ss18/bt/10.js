"use strict";
function add(a, b) {
    if (typeof a === 'string') {
        a = parseFloat(a);
        if (isNaN(a)) {
            return 'Invalid input';
        }
    }
    if (typeof b === 'string') {
        b = parseFloat(b);
        if (isNaN(b)) {
            return 'Invalid input';
        }
    }
    return a + b;
}
function subtract(a, b) {
    if (typeof a === 'string') {
        a = parseFloat(a);
        if (isNaN(a)) {
            return 'Invalid input';
        }
    }
    if (typeof b === 'string') {
        b = parseFloat(b);
        if (isNaN(b)) {
            return 'Invalid input';
        }
    }
    return a - b;
}
function multiply(a, b) {
    if (typeof a === 'string') {
        a = parseFloat(a);
        if (isNaN(a)) {
            return 'Invalid input';
        }
    }
    if (typeof b === 'string') {
        b = parseFloat(b);
        if (isNaN(b)) {
            return 'Invalid input';
        }
    }
    return a * b;
}
function divide(a, b) {
    if (typeof a === 'string') {
        a = parseFloat(a);
        if (isNaN(a)) {
            return 'Invalid input';
        }
    }
    if (typeof b === 'string') {
        b = parseFloat(b);
        if (isNaN(b)) {
            return 'Invalid input';
        }
    }
    if (b === 0) {
        return 'Cannot divide by zero';
    }
    return a / b;
}
console.log(add(5, 3));
console.log(add('5', 3));
console.log(add('abc', 3));
console.log(subtract(5, 3));
console.log(subtract('5', 3));
console.log(subtract('abc', 3));
console.log(multiply(5, 3));
console.log(multiply('5', 3));
console.log(multiply('abc', 3));
console.log(divide(6, 3));
console.log(divide('6', 3));
console.log(divide('abc', 3));
console.log(divide(6, 0));
