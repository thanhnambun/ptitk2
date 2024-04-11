"use strict";
function calculateArea(type, data) {
    if (type == "square") {
        // tinsh ddienj ticsh hinhf vuoong
        return data.sideLength * data.sideLength;
    }
    else {
        // dien tich ht
        return data.radius * data.radius * 3.14;
    }
}
let square = {
    name: "square",
    sideLength: 3,
    radius: 10,
};
console.log(calculateArea("Circle", square));
