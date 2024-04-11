"use strict";
function removeFalsyProperties(obj) {
    for (let key in obj) {
        if (typeof obj[key] !== "string" && typeof obj[key] !== "number") {
            delete obj[key];
        }
    }
}
let obj = {
    name: "Alice",
    age: 30,
    email: "",
    address: null,
    phoneNumber: 0,
    active: true
};
removeFalsyProperties(obj);
console.log("Đối tượng sau khi loại bỏ thuộc tính falsy:", obj);
