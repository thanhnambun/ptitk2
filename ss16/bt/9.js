"use strict";
function flatFunc(temp) {
    if (temp.some(item => Array.isArray(item))) {
        return flatFunc(temp.flatMap(item => item));
    }
    else {
        return temp;
    }
}
console.log(flatFunc([1, [2, [3, 4], 5], 6]));
