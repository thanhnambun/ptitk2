"use strict";
function check(type) {
    if (typeof type === "number") {
        return type ** 2;
    }
    else {
        return type.map((num) => num ** 2);
    }
}
const numberResult = check([1, 2, 3, 4, 5]);
console.log("Kết quả với số:", numberResult);
