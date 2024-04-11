"use strict";
function checkType(a) {
    if (typeof a == "number") {
        console.log("kieu so");
    }
    else if (Array.isArray(a)) {
        console.log("kieu mang");
    }
    else {
        console.log("kieu chuoi");
    }
}
let ch = 1;
checkType(ch);
